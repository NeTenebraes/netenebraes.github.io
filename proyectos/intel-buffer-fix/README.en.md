---
title: "Intel Legacy Buffer Fix (Arch Linux)"
tags: [linux, bash, arch-linux, intel, gpu]
---

# Intel Legacy Buffer Fix

> An automation script that eliminates screen tearing and visual artifacts on legacy Intel GPUs under X11.

## The Problem

Running Arch Linux on older Intel hardware (Gen6 / Sandy Bridge) with lightweight window managers like BSPWM produces persistent visual artifacts — vertical lines, screen corruption, and severe tearing. The root cause: modern Mesa dropped proper support for these GPUs, breaking the rendering pipeline.

## Before & After

![Before](https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/refs/heads/main/images/Antes.webp)
*Before: screen tearing, vertical lines, and visual corruption on Intel HD 2000.*

![After](https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/main/images/Despues.webp)
*After: stable, tear-free rendering with correct colors and smooth compositing.*

## How It Works

The script performs three critical operations:

1. **Replaces modern Mesa with mesa-amber** — The legacy branch that properly supports Intel Gen6 hardware
2. **Enables SNA acceleration** — Replaces the broken UXA backend with the faster, more compatible SNA renderer
3. **Creates environment overrides** — Ensures Mesa Amber stays active across Qt and Electron applications that might otherwise load the wrong library

## Key Technical Challenges

- **Pacman dependency conflicts** — Removing modern Mesa requires `-Rdd` to bypass dependency checks without breaking the system
- **SDDM login freezes** — The display manager tries to use hardware acceleration on the greeter, causing freezes. Solved by forcing software rendering on SDDM specifically
- **Qt/Electron library conflicts** — Some applications bypass system Mesa and load their own bundled libraries. Environment variable overrides force them to use the correct version

## Tech Stack

| Layer | Technology |
|-------|-----------|
| OS | Arch Linux |
| Scripting | Bash |
| GPU | Intel HD 2000 (Sandy Bridge) |
| Display | X11 + BSPWM |

## What I Learned

- **GPU driver internals** — Understanding how Mesa, SNA/UXA backends, and Xorg interact at the hardware level
- **Rolling release management** — Handling dependency conflicts in a distro where packages update constantly
- **Debugging display servers** — Diagnosing rendering issues through Xorg logs and environment inspection
- **Defensive scripting** — Creating automatic backups and rollback mechanisms for system-level changes
