---
title: "nvim-html-css PR #64 (Merged)"
tags: [lua, git, open-source, neovim-plugin]
---

# nvim-html-css PR #64 (Merged)

Merged pull request fixing a crash in the nvim-html-css plugin.

![Preview](preview.png)
![Screenshot 1](preview.png)
![Screenshot 2](preview.png)

## Overview

Merged pull request fixing a crash in the nvim-html-css plugin (216+ stars). Added missing buffer validation in `cache:get_ids` to prevent Lua errors on unloaded buffers.

## Implications

Improved stability for all users of the plugin, preventing crashes when autocomplete is triggered on floating or unloaded buffers.

## Challenges

- Tracing the root cause required understanding the plugin cache architecture
- Identifying the inconsistent validation pattern between `cache:get_classes` and `cache:get_ids`

## Results

Merged into upstream mainline. The fix prevents "attempt to index a nil value" crashes in `html-css/cache.lua:32`.

## Tech Stack

- Lua
- Git
