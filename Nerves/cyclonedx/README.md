# CycloneDX Nerves Manifest Prototype
This project creates CycloneDX Software Bill-of-Materials (SBOM) from Nerves manifests.

## Requirements
Node.js v8.0.0 or higher

## Usage

#### Installing
The following command will install the `cyclonedx-nerves` tool globally so that it can be called outside of the current
project.

```bash
npm install -g
```

#### Getting Help
```bash
$ cyclonedx-nerves -h
Usage: cyclonedx-nerves [OPTIONS]

Creates CycloneDX Software Bill-of-Materials (SBOM) from Nerves buildroot manifests

Options:
  -v, --version               output the version number
  -m, --manifest <manifest>   Nerves manifest from which to create a BOM from (default: "buildroot.show-info.json")
  -o, --output <output>       Write BOM to file (default: "bom.json")
  -h, --help                  display help for command
```

#### Example (default: JSON)
```bash
cyclonedx-nerves
```

#### Example (XML)
```bash
cyclonedx-nerves -o bom.xml -m buildroot.show-info.json
```

#### Example (JSON)
```bash
cyclonedx-nerves -o bom.json -m buildroot.show-info.json
```

## License
Permission to modify and redistribute is granted under the terms of the MIT license.
