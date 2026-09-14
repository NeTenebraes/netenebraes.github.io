---
title: "nvim-html-css PR #64 (Merged)"
tags: [lua, git, open-source, neovim-plugin]
---

# nvim-html-css PR #64 (Mergeado)

Pull request mergeado que corrige un crash en el plugin nvim-html-css.

![Preview](preview.png)
![Screenshot 1](preview.png)
![Screenshot 2](preview.png)

## Resumen

Pull request mergeado que corrige un crash en el plugin nvim-html-css (216+ estrellas). Agregó validación de buffer faltante en `cache:get_ids` para prevenir errores Lua.

## Implicaciones

Mejoró estabilidad para todos los usuarios del plugin, previniendo crashes cuando se dispara autocomplete en buffers flotantes o sin cargar.

## Desafíos

- Rastrear la causa raíz requirió entender la arquitectura del cache del plugin
- Identificar el patrón inconsistente de validación entre `cache:get_classes` y `cache:get_ids`

## Resultados

Mergeado en la rama principal upstream. El fix previene crashes "attempt to index a nil value" en `html-css/cache.lua:32`.

## Stack Tecnológico

- Lua
- Git
