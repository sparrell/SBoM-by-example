See homepage for blah blah on SBOM-By-Example.

This directory is for creating the SBOM
for nerves, an 'upstream' component (ie blinkyhaha is built on top of nerves).
In particular nerves
(see https://www.nerves-project.org/)
is used for the following components:
- pkg:hex/nerves_system_rpi0@1.9.2 (ie the nerves package on Raspberry Pi Zero)
- fill in rest


Table of Contents:
1. Figure this out once organized
2. blah blah

## 1. Nerves Metainfo from Buildroot
 Nerves is built using buildroot
 (see https://buildroot.org/).
 Buildroot produces some metadata
 which is easily (hah!) obtained so place
 to start is to see what can be done
 manually using this info.
 Once we figure it out, we can modify
 the build tools to create SBOMs automagically.

 Three files of interest are:
 - [buildroot.show-info.json](./buildroot.show-info.json)
 - [host-manifest.csv](./host-manifest.csv)
 - [manifest.csv](./manifest.csv)
