---
title: "nvim-html-css PR #64"
tags: [lua, open-source, neovim-plugin, bug-fix]
---

# nvim-html-css PR #64

> Contribución open-source mergeada que corrige un crash en nvim-html-css — un plugin de Neovim con 216+ estrellas para autocompletado de clases e IDs CSS.

![Preview](preview.png)

## El Problema

nvim-html-css proporciona autocompletado de clases e IDs CSS en archivos HTML, JSX y TSX escaneando stylesheets del proyecto. Sin embargo, tenía un problema de estabilidad: disparar autocomplete en **ventanas flotantes** o **buffers sin cargar** causaba un crash de Lua — `"attempt to index a nil value"` en `html-css/cache.lua:32`.

Esto afectaba a cualquier usuario que abriera un terminal flotante o ventana de ayuda mientras el plugin estaba activo.

## La Solución

La causa raíz era una validación de buffer faltante en la función `cache:get_ids`. El método `cache:get_classes` del plugin ya tenía los checks nil adecuados, pero `cache:get_ids` no — un patrón inconsistente que solo se manifestaba bajo condiciones específicas.

```lua
-- Antes (crasheaba con nil buffer)
local ids = cache:get_ids(bufnr)

-- Después (valida que el buffer existe)
if not bufnr or not vim.api.nvim_buf_is_valid(bufnr) then
    return {}
end
local ids = cache:get_ids(bufnr)
```

## Impacto

- **Estabilidad:** Previene crashes para todos los usuarios del plugin cuando se dispara autocomplete en buffers no estándar
- **Calidad de código:** Establece patrones de validación consistentes en el módulo de cache
- **Mergeado en upstream:** El fix fue aceptado en la rama principal

> Esta contribución mejoró la confiabilidad de un plugin usado por cientos de usuarios de Neovim para flujos de trabajo de desarrollo web diarios.

## Lo Que Aprendí

- **Debugging open-source** — Rastrear un bug a través de código no familiar requirió entender la arquitectura del cache del plugin y el ciclo de vida de buffers de Neovim
- **Reconocimiento de patrones** — Identificar la inconsistencia entre dos funciones similares (`get_classes` vs `get_ids`) llevó al fix
- **Contribución upstream** — Escribir PRs limpios y mínimos que los maintainers puedan revisar y mergear rápidamente

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Lenguaje | Lua |
| Plugin | nvim-html-css |
| Plataforma | Neovim |
| VCS | Git / GitHub |
