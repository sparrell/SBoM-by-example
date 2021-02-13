# Software Bill of Materials (SBoM) By example
This project is creating a Software Bill of Materials (SBOM)
for a nerves project running on a Raspberry Pi.

It starts with some SBOM background (mainly referring to elsewhere);
gives some some simple C, python, and elixir SBOM examples;
and then builds thru several phases a fairly sophisticated
IoT device SBOM.
The phases include both increasing complexity of the device software,
and showing various issues with building SBOMs.

Add annotated Table of Contents here

- [1. What is an SBOM? Why would I have one?](#fix)
- [2. "Hello World"](#fix)
   * [2.1 C "Hello World"](#fix)
   * [2.2 Python "Hello World"](#fix)
   * [2.3 Elixir "Hello World"](#fix)
- [3. Elixir Blinky](#fix)
   * [3.1 Base Elixir Blinky 0-hop](#fix)
   * [3.2 Base Elixir Blinky 1-hop](#fix)
   * [3.3 Add LED Matrix](#fix)
   * [3.4 Add MQTT OpenC2](#fix)
   * [3.5 Replace MQTT with HTTP API (no HTML)](#fix)
   * [3.6 Add HTML webserver with javascript](#fix)
- [4. Add in more SBOM hops](#fix)
   * [4.1 on raspberry pi - nerves OS](#fix)
   * [4.2 on cloud - docker image, debian linux OS](#fix)
- [5. Wrap up](fix)



# 1. What is an SBOM? Why would I have one?
blah blah, link to
[SBOM background material](SbomBackground.md)

# 2. "Hello World"
blah blah

## 2.1 C "Hello World"
blah blah

## 2.2 Python "Hello World"
blah blah

## 2.3 Elixir "Hello World"
blah blah

# 3. Elixir Blinky
blah blah

## 3.1 Base Elixir Blinky 0-hop
blah blah

## 3.2 Base Elixir Blinky 1-hop
blah blah

## 3.3 Add LED Matrix
blah blah

## 3.4 Add MQTT OpenC2
add in tortoise API server, and OpenC2 MQTT API

## 3.5 Replace MQTT with HTTP API (no HTML)

## 3.6 Add HTML webserver with javascript
note explosion of SBOM

# 4. Add in more SBOM hops
## 4.1 on raspberry pi - nerves OS
## 4.2 on cloud - docker image, debian linux OS

# Cruft to clean up later
<ul>
  <li><a href="SbomBackground.html">SBOM Background</a> information </li>
  <li><a href="blinky_how_to.html">how to</a> make the basic blinky </li>
  <li>how to make the sbom for the basic blinky</li>
  <li>how to add networking</li>
  <li>how to add phoenix api server</li>
  <li>how to add openc2</li>
</ul>

<p>Table of Contents
<ul>
<li> <a href="https://github.com/oasis-tcs/openc2-usecases/tree/master/Cybercom-Plugfest">OpenC2 CYBERCOM Plugfest/Hackathon page</a>  </li>
<li>  Link to my HEX sbom package page  </li>
<li>  <a href="blinky_how_to.html">blinky how to</a>  </li>
<li>  Link to my Blinky SBoM page  </li>
<li>  Link to my other sboms page  </li>
<li>  <a href="blinky_pkglist.txt">blinky_pkglist.txt</a>  </li>
</ul>
