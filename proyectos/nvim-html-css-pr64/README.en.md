---
title: "nvim-html-css PR #64"
tags: [lua, open-source, neovim-plugin, bug-fix]
---

# nvim-html-css PR #64

> A merged open-source contribution fixing a crash in nvim-html-css — a Neovim plugin with 216+ stars for CSS class and ID completion.

![Preview](preview.png)

## The Problem

nvim-html-css provides CSS class and ID autocompletion in HTML, JSX, and TSX files by scanning project stylesheets. However, it had a stability issue: triggering autocomplete on **floating windows** or **unloaded buffers** caused a Lua crash — `"attempt to index a nil value"` in `html-css/cache.lua:32`.

This affected any user who opened a floating terminal or help window while the plugin was active.

## The Fix

The root cause was a missing buffer validation in the `cache:get_ids` function. The plugin's `cache:get_classes` method already had proper nil checks, but `cache:get_ids` did not — an inconsistent pattern that only surfaced under specific conditions.

```lua
-- Before (crashed on nil buffer)
local ids = cache:get_ids(bufnr)

-- After (validates buffer exists)
if not bufnr or not vim.api.nvim_buf_is_valid(bufnr) then
    return {}
end
local ids = cache:get_ids(bufnr)
```

## Impact

- **Stability:** Prevents crashes for all users of the plugin when autocomplete triggers on non-standard buffers
- **Code quality:** Establishes consistent validation patterns across the cache module
- **Merged into upstream:** The fix was accepted into the main branch

> This contribution improved the reliability of a plugin used by hundreds of Neovim users for daily web development workflows.

## What I Learned

- **Open-source debugging** — Tracing a bug through unfamiliar code required understanding the plugin's cache architecture and Neovim's buffer lifecycle
- **Pattern recognition** — Identifying the inconsistency between two similar functions (`get_classes` vs `get_ids`) led to the fix
- **Upstream contribution** — Writing clean, minimal PRs that maintainers can review and merge quickly

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Lua |
| Plugin | nvim-html-css |
| Platform | Neovim |
| VCS | Git / GitHub |
