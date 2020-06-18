/*
* MIT License
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* SPDX-License-Identifier: MIT
*/
const Bom = require('@cyclonedx/bom/model/Bom');
const Component = require('@cyclonedx/bom/model/Component');
const License = require('@cyclonedx/bom/model/License');
const LicenseChoice = require('@cyclonedx/bom/model/LicenseChoice');
const ExternalReference = require('@cyclonedx/bom/model/ExternalReference');
const ExternalReferenceList = require('@cyclonedx/bom/model/ExternalReferenceList');
const Swid = require('@cyclonedx/bom/model/Swid');
const { PackageURL } = require('packageurl-js');
const fs = require("fs");


/**
 * Creates a BOM from the specified manifest and writes it to the specified output file.
 */
exports.createbom = function createbom(manifest, output) {
  let bom = new Bom();
  // TODO: add BOM metadata object in the future. As of now, this object is not yet implemented in CycloneDX Node Module
  // See: https://cyclonedx.org/use-cases/#packaging-and-distribution
  parseManifest(bom, manifest);
  writeBom(bom, output);
};

/**
 * Parses the manifest, creates components, and adds them to the specified BOM.
 */
function parseManifest(bom, manifest) {
  let buildroot = JSON.parse(fs.readFileSync(manifest, 'utf8'));
  for (let key in buildroot) {
    let lib = buildroot[key];
    if (lib.virtual === true) {
      continue; // Do not include virtual packages
    }
    // Create a new CycloneDX component and populate identity information
    let component = new Component();
    component.type = "library"; // Must be a valid CycloneDX component type
    component.name = key;
    component.version = (lib.version) ? lib.version : "unknown"; // Version is required. Not all packages have one.

    // Set the component PackageURL, CPE, and SWID
    // See: https://cyclonedx.org/use-cases/#known-vulnerabilities
    component.purl = new PackageURL("hex", null, component.name, component.version, null, null).toString();
    component.cpe = "cpe:2.3:o:linux:linux_kernel:2.6.30.1:*:*:*:*:*:*:*"; // TODO: Possible to determine?
    component.swid = new Swid("tagId-goes-here", component.name, component.version); // TODO: Possible to determine?

    // TODO: Possible future work - Download packages and calculate hash values of each package. Add them to BOM.
    // See: https://cyclonedx.org/use-cases/#integrity-verification

    // Process licenses and add the unresolved license name to CycloneDX
    // See: https://cyclonedx.org/use-cases/#license-compliance
    if (lib.licenses) {
      let license = new License();
      license.name = lib.licenses;
      let licenseChoice = new LicenseChoice();
      licenseChoice.licenses = [license];
      component.licenses = licenseChoice;
    }

    // Process downloads and create CycloneDX external references
    let externalReferenceList = new ExternalReferenceList();
    if (lib.downloads) {
      for (let index in lib.downloads) {
        let download =  lib.downloads[index];
        if (download.uris) {
          let reference = new ExternalReference("distribution", download.uris[0]
            .replace("ftp+ftp", "ftp").replace("http+http", "http").replace("https+https", "https"));
          externalReferenceList.externalReferences.push(reference);
        }
      }
    }
    component.externalReferences = externalReferenceList;

    // Add the component to the BOM.
    bom.addComponent(component);
  }
}

/**
 * Writes the BOM to the specified output file.
 */
function writeBom(bom, output) {
  if (output.endsWith(".xml")) {
    fs.writeFile(output, bom.toXML(), () => {});
  } else if (output.endsWith(".json")) {
    fs.writeFile(output, bom.toJSON(), () => {});
  }
}
