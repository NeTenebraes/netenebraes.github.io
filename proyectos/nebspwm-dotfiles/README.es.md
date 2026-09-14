---
title: "neBSPWM-dotfiles"
tags: [linux, bash, python, dotfiles, bspwm]
---

# neBSPWM-dotfiles

> Entorno completo de Arch Linux configurado para ciberseguridad y desarrollo en hardware de especificaciones bajas.

![Preview](https://raw.githubusercontent.com/NeTenebraes/neBSPWM-dotfiles/main/screeshots/Animated.webp)

## Resumen

neBSPWM-dotfiles es un setup completamente automatizado que transforma una instalación fresca de Arch Linux en una estación de trabajo cohesiva y temática, optimizada para auditoría de seguridad y desarrollo. Diseñado específicamente para hardware con recursos limitados — Intel i3 2da gen, 8GB RAM — demuestra que un entorno pulido y productivo no requiere specs de gama alta.

Cada componente está integrado a través de un solo script de setup, desde la configuración del gestor de ventanas hasta el monitoreo del sistema y las herramientas de seguridad.

## Qué Incluye

| Componente | Herramienta |
|------------|------------|
| Gestor de ventanas | BSPWM + SXHKD |
| Barra de estado | Polybar |
| Lanzador de apps | Rofi |
| Emulador de terminal | Kitty |
| Shell | ZSH + Starship Prompt |
| Monitor del sistema | Conky |
| Gestor de login | SDDM (custom temático) |
| Sandbox | Firejail |
| Theming | Catppuccin Mocha (a nivel sistema) |

## Capturas de Pantalla

### Pantalla de Login

![Login](https://raw.githubusercontent.com/NeTenebraes/neBSPWM-dotfiles/refs/heads/main/screeshots/SDDM.png)
*Tem personalizado de SDDM que combina con la paleta Catppuccin Mocha.*

### Lanzador de Apps

![Rofi](https://raw.githubusercontent.com/NeTenebraes/neBSPWM-dotfiles/refs/heads/main/screeshots/Rofi.png)
*Rofi configurado para lanzamiento rápido de apps y cambio de ventanas.*

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| SO | Arch Linux |
| Automatización | Bash |
| Scripting | Python |
| Config | Polybar, Conky, Kitty, ZSH |

## Impacto

> 10 estrellas, 3 forks y más de 380 commits en GitHub. Incluye un script de herramientas de ciberseguridad, documentación de hotkeys y un tracker de errores conocidos.

El proyecto permite la restauración completa de la estación de trabajo en minutos en instalaciones frescas — sin configuración manual.

## Lo Que Aprendí

- **Integración de sistemas** — Hacer que más de 10 herramientas funcionen juntas bajo un tema y flujo de trabajo unificado
- **Automatización en Bash** — Escribir scripts de setup robustos que manejan casos extremos en múltiples instalaciones
- **Optimización de rendimiento** — Ajustar un entorno de escritorio para hardware con recursos limitados
- **Documentación** — Mantener guías de setup y referencias de hotkeys claras para reproducibilidad
