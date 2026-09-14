---
title: "nenvim"
tags: [lua, neovim, lsp, plugin-management]
---

# nenvim

Configuración modular de Neovim escrita en Lua, enfocada en mantenibilidad y un flujo de trabajo limpio.

![Preview](preview.png)
![Screenshot 1](preview.png)
![Screenshot 2](preview.png)

## Resumen

Configuración modular de Neovim escrita en Lua, enfocada en mantenibilidad y un flujo de trabajo limpio con plugins curados para LSP, linting, formateo e UI.

## Implicaciones

Proporciona un setup de editor reproducible y versionado que puede ser clonado y restaurado en minutos en cualquier instalación Arch fresca.

## Desafíos

- Balancear tiempos de carga de plugins con riqueza de funcionalidades requirió lazy-loading cuidadoso vía Mason
- Definiciones selectivas de keymaps para evitar conflictos entre plugins

## Resultados

Mantiene estructura de directorios modular (`config/`, `plugins/`, `theme/`) con soporte LSP preconfigurado y estética consistente Catppuccin Mocha.

## Stack Tecnológico

- Lua
- Git
