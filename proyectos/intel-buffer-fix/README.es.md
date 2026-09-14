---
title: "Intel Legacy Buffer Fix (Arch Linux)"
tags: [linux, bash, arch-linux, intel, gpu]
---

# Intel Legacy Buffer Fix

> Script de automatización que elimina el tearing de pantalla y artefactos visuales en GPUs Intel antiguas bajo X11.

## El Problema

Ejecutar Arch Linux en hardware Intel antiguo (Gen6 / Sandy Bridge) con gestores de ventanas ligeros como BSPWM produce artefactos visuales persistentes — líneas verticales, corrupción de pantalla y tearing severo. La causa raíz: Mesa moderno eliminó el soporte adecuado para estos GPUs, rompiendo el pipeline de renderizado.

## Antes y Después

![Antes](https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/refs/heads/main/images/Antes.webp)
*Antes: tearing de pantalla, líneas verticales y corrupción visual en Intel HD 2000.*

![Después](https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/main/images/Despues.webp)
*Después: renderizado estable sin tearing, colores correctos y compositing suave.*

## Cómo Funciona

El script realiza tres operaciones críticas:

1. **Reemplaza Mesa moderno por mesa-amber** — La rama legacy que soporta correctamente el hardware Intel Gen6
2. **Habilita aceleración SNA** — Reemplaza el backend UXA roto con el renderizador SNA más rápido y compatible
3. **Crea overrides de variables de entorno** — Asegura que Mesa Amber se mantenga activo en aplicaciones Qt y Electron que podrían cargar la biblioteca incorrecta

## Desafíos Técnicos Clave

- **Conflictos de dependencias de pacman** — Remover Mesa moderno requiere `-Rdd` para saltar verificaciones de dependencias sin romper el sistema
- **Congelamientos en login de SDDM** — El display manager intenta usar aceleración por hardware en el greeter, causando congelamientos. Se resuelve forzando renderizado por software específicamente en SDDM
- **Conflictos de bibliotecas Qt/Electron** — Algunas aplicaciones ignoran el Mesa del sistema y cargan sus propias bibliotecas. Los overrides de variables de entorno fuerzan que usen la versión correcta

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| SO | Arch Linux |
| Scripting | Bash |
| GPU | Intel HD 2000 (Sandy Bridge) |
| Display | X11 + BSPWM |

## Lo Que Aprendí

- **Internals de drivers de GPU** — Entender cómo interactúan Mesa, los backends SNA/UXA y Xorg a nivel de hardware
- **Gestión de rolling releases** — Manejar conflictos de dependencias en una distro donde los paquetes se actualizan constantemente
- **Debugging de display servers** — Diagnosticar problemas de renderizado a través de logs de Xorg e inspección de entorno
- **Scripting defensivo** — Crear mecanismos de backup automático y rollback para cambios a nivel del sistema
