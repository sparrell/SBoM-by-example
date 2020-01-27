See homepage for blah blah

Table of Contents:
1. Build normal blinky
2. Create SBoM for blinky
3. Add "Generic" Phoenix
4. OpenC2 Phoenix API

## 1. Build normal blinky

- install Nerves per https://hexdocs.pm/nerves/installation.html
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

ssh into blinky assuming you set up your ssh keys (defaults to build machine's key).
- h(Toolshed) for helper commands
- tree yields the [entire file structure](blinky-file-tree.txt)
- RingLogger gives logging info

### 2.1 RPi Zero Gadget
create sd card per https://github.com/nerves-project/nerves_init_gadget
- assume nerves installed per blinky first few steps
- check archive is up to date
  * mix local.nerves
- Create a new project using the generator
  * mix nerves.new mygadget --init-gadget
- cd mygadget
- get dependencies
  * MIX_TARGET=rpi0 mix deps.get
- build
  * MIX_TARGET=rpi0 mix firmware
- Copy the firmware to a MicroSD card (should find it if you have one mounted)
  * MIX_TARGET=rpi0 mix firmware.burn
- install MicroSD card in RPi Zero
- power it up and after 5-10 seconds, the light will blink pattern per code




## 3. Add "Generic" Phoenix
Before customizing into an OpenC2 interface, first put a vanilla Phoenix webserver.

## 4. OpenC2 Phoenix API
Customize the Phoenix webserver for a mimimalistic OpenC2 API.

This is based on

## 5. Custom OpenC2 API
Instead of using Phoenix, use a mimalistic howegrown API
