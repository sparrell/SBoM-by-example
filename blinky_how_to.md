blah blah

Table of Contents:
- 1. Build normal blinky
- 2. Create SBoM for blinky
- 3. Add "Generic" Phoenix
- 4. OpenC2 Phoenix API

## 1. Build normal blinky

- install Nerves per PUTLINK
- make sure homebrew is current
  * $ brew update
- load dependencies
  * $ brew install fwup squashfs coreutils xz
  * $ mix local.hex
  * $ mix local.rebar
- install nerves
  * $ mix archive.install hex nerves_bootstrap
- create local copy of blinky
  * $ mix nerves.new blinky
- get blinky dependencies
  * $ cd blinky
  * $ MIX_TARGET=rpi0 mix deps.get
- build nerves_firmware
  * $ MIX_TARGET=rpi0 mix firmware
- burn microSD
  * $ MIX_TARGET=rpi0 mix firmware.burn
- load card, power, watch led blink once booted
  * connect hdmi if want to watch bootup

## 2. Create SBoM for blinky
- get sbom for HEX
  * $ mix archive.install hex sbom
- get dependencies
  * $ MIX_TARGET=rpi0 mix deps.get
- make sbom
  * $ mix sbom.cyclonedx -o blinky_bom.xml

XML file created is [here](blinky_bom.xml).

[myxml.escript](myxml.escript) is a quick hack to strip out the packages
which are shown [here](blinky_pkglist.txt).

Two things worth noting:
1. Only the dependencies are shown - not the actual blinky code itself. Ie. it shows the packages loaded but not the files compiled. It presumes you know those.
2. It shows all the dependencies - even the ones you don't use. Nerves has different "system" packages for the different target systems (Raspberry Pi Zero, Raspbery Pi 3, Beagleboard, ...) of which only one is loaded onto any given microSD for a specific board.

## 3. Add "Generic" Phoenix
Before customizing into an OpenC2 interface, first put a vanilla Phoenix webserver.

## 4. OpenC2 Phoenix API
Customize the Phoenix webserver for a mimimalistic OpenC2 API.

## 5. Custom OpenC2 API 
Instead of using Phoenix, use a mimalistic howegrown API
