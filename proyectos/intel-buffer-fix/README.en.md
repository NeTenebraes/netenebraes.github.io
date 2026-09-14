---
title: "Intel Legacy Buffer Fix (Arch Linux)"
tags: [linux, bash, arch-linux, intel, gpu]
---

# Intel Legacy Buffer Fix (Arch Linux)

Automation script that fixes rendering artifacts on legacy Intel GPUs under X11.

![Preview](preview.png)
![Screenshot 1](preview.png)
![Screenshot 2](preview.png)

## Overview

Automation script that fixes rendering artifacts (vertical lines, screen corruption) on legacy Intel GPUs under X11 by replacing modern Mesa with mesa-amber and enabling SNA acceleration.

## Implications

Restores stable, tear-free rendering on Intel Gen6 (Sandy Bridge) hardware running Arch Linux with lightweight window managers like BSPWM.

## Challenges

- Handling pacman dependency conflicts with `-Rdd`
- Mitigating SDDM login freezes by forcing software rendering on the greeter
- Creating environment overrides to keep Mesa Amber active across Qt and Electron apps

## Results

Eliminated screen tearing and corruption on Intel HD 2000 hardware. The script has been tested across multiple Arch installs and includes automatic backup of original Xorg configs.

## Tech Stack

- Linux
- Bash
