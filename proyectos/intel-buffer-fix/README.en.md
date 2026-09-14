---
title: "Intel Legacy Buffer Fix (Arch Linux)"
tags: [linux, bash, arch-linux, intel, gpu]
---

# Intel Legacy Buffer Fix

> An automation script that fixes video buffer corruption on legacy Intel GPUs under X11 in Arch Linux.

![Preview](preview.png)

## The Problem

Running Arch Linux on older Intel hardware (Gen6 / Sandy Bridge) produces persistent visual artifacts — vertical lines, screen corruption, and broken rendering. The root cause: modern Mesa replaced the classic drivers with the Crocus driver, introducing regressions in the ring buffer memory allocation for Sandy Bridge chipsets.

## How It Works

The script performs three critical operations to stabilize the graphics environment:

1. **Replaces modern Mesa with mesa-amber** — The legacy branch that preserves stable legacy hardware code (`i965`). Uses `pacman -Rdd` to remove the standard Mesa stack without breaking critical dependencies, immediately installing `mesa-amber` and `lib32-mesa-amber`.

2. **Configures Xorg with modesetting** — Generates `/etc/X11/xorg.conf.d/20-intel.conf` with Xorg's native `modesetting` driver (no `xf86-video-intel` required), enabling `DRI 3` for efficient GPU communication and `TearFree` for tear-free rendering via hardware double buffering.

3. **Optional SDDM mitigation** — With the `--sddm` flag, generates `/etc/sddm.conf.d/10-mesa-legacy.conf` that forces software rendering (`QT_QUICK_BACKEND=software`, `LIBGL_ALWAYS_SOFTWARE=1`) only on the login screen to prevent freezes. Hardware acceleration is restored after login.

> [!NOTE]
> The script creates automatic backups (`.bak` with timestamp) of the configuration files it modifies.

## Usage

### Without SDDM
```bash
curl -sL https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/main/intel-legacy-fix.sh | sudo bash
```

### With SDDM Fix
```bash
bash <(curl -sL https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/main/intel-legacy-fix.sh) --sddm
```

## Before & After

![Before](https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/refs/heads/main/images/Antes.webp)
*Before: video buffer corruption, vertical lines, and visual artifacts on Intel HD 2000.*

![After](https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/main/images/Despues.webp)
*After: stable rendering without tearing, correct colors, and smooth compositing.*

## Tech Stack

| Layer | Technology |
|-------|-----------|
| OS | Arch Linux |
| Scripting | Bash (148 lines) |
| GPU | Intel HD 2000 (Sandy Bridge / Gen6) |
| Display | X11 + modesetting |
| Graphics | Mesa Amber (i965 driver) |
| License | GPLv3 |

## What I Learned

- **GPU driver internals** — Understanding how Mesa, rendering backends, and Xorg interact at the hardware level
- **Rolling release management** — Handling dependency conflicts in Arch Linux with `pacman -Rdd`
- **Display server debugging** — Diagnosing rendering issues through Xorg logs and environment inspection
- **Defensive scripting** — Creating automatic backup mechanisms and error handling for system-level changes
