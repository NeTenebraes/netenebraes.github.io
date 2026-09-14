---
title: "neBSPWM-dotfiles"
tags: [linux, bash, python, dotfiles, bspwm]
---

# neBSPWM-dotfiles

> A complete Arch Linux ricing environment built for cybersecurity work and development on low-spec hardware.

![Preview](https://raw.githubusercontent.com/NeTenebraes/neBSPWM-dotfiles/main/screeshots/Animated.webp)

## Overview

neBSPWM-dotfiles is a fully automated setup that transforms a fresh Arch Linux install into a cohesive, themed workstation optimized for security auditing and development. Designed specifically for hardware with limited resources — Intel i3 2nd gen, 8GB RAM — it proves that a polished, productive environment doesn't require high-end specs.

Every component is integrated through a single setup script, from window manager configuration to system monitoring and security tooling.

## What's Included

| Component | Tool |
|-----------|------|
| Window Manager | BSPWM + SXHKD |
| Status Bar | Polybar |
| App Launcher | Rofi |
| Terminal Emulator | Kitty |
| Shell | ZSH + Starship Prompt |
| System Monitor | Conky |
| Login Manager | SDDM (custom themed) |
| Sandbox | Firejail |
| Theming | Catppuccin Mocha (system-wide) |

## Screenshots

### Login Screen

![Login](https://raw.githubusercontent.com/NeTenebraes/neBSPWM-dotfiles/refs/heads/main/screeshots/SDDM.png)
*Custom SDDM login theme matching the Catppuccin Mocha palette.*

### App Launcher

![Rofi](https://raw.githubusercontent.com/NeTenebraes/neBSPWM-dotfiles/refs/heads/main/screeshots/Rofi.png)
*Rofi configured for quick app launching and window switching.*

## Tech Stack

| Layer | Technology |
|-------|-----------|
| OS | Arch Linux |
| Automation | Bash |
| Scripting | Python |
| Config | Polybar, Conky, Kitty, ZSH |

## Impact

> 10 stars, 3 forks, and 380+ commits on GitHub. Includes a cybersecurity tools script, hotkeys documentation, and a known issues tracker.

The project enables complete workstation restoration in minutes on fresh installs — no manual configuration required.

## What I Learned

- **System integration** — Making 10+ tools work together under a unified theme and workflow
- **Bash automation** — Writing robust setup scripts that handle edge cases across clean installs
- **Performance tuning** — Optimizing a desktop environment for constrained hardware
- **Documentation** — Maintaining clear setup guides and hotkey references for reproducibility
