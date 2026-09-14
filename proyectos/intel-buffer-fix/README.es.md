---
title: "Intel Legacy Buffer Fix (Arch Linux)"
tags: [linux, bash, arch-linux, intel, gpu]
---

# Intel Legacy Buffer Fix

> Script de automatización que corrige la corrupción del búfer de video en GPUs Intel antiguas bajo X11 en Arch Linux.

![Preview](preview.png)

## El Problema

Ejecutar Arch Linux en hardware Intel antiguo (Gen6 / Sandy Bridge) con gestores de ventanas ligeros produce artefactos visuales persistentes — líneas verticales, corrupción de pantalla y rendering roto. La causa raíz: las versiones modernas de Mesa sustituyeron los controladores clásicos por el driver Crocus, introduciendo regresiones en la asignación de memoria intermedia (*ring buffer*) de los chipsets Sandy Bridge.

## Cómo Funciona

El script realiza tres operaciones críticas para estabilizar el entorno gráfico:

1. **Reemplaza Mesa moderno por mesa-amber** — La rama legacy que conserva intacto el código de hardware heredado (`i965`). Se utiliza `pacman -Rdd` para remover la pila de Mesa estándar sin romper dependencias críticas, instalando inmediatamente `mesa-amber` y `lib32-mesa-amber`.

2. **Configura Xorg con modesetting** — Genera `/etc/X11/xorg.conf.d/20-intel.conf` con el driver `modesetting` nativo de Xorg (no requiere `xf86-video-intel`), habilitando `DRI 3` para comunicación eficiente con la GPU y `TearFree` para eliminar el desgarro de pantalla mediante doble búfer por hardware.

3. **Mitigación opcional para SDDM** — Con la bandera `--sddm`, genera `/etc/sddm.conf.d/10-mesa-legacy.conf` que fuerza renderizado por software (`QT_QUICK_BACKEND=software`, `LIBGL_ALWAYS_SOFTWARE=1`) solo en la pantalla de login para evitar congelamientos. La aceleración por hardware se restaura al iniciar sesión.

> [!NOTE]
> El script genera respaldos automáticos (`.bak` con marca de tiempo) de los archivos de configuración que modifica.

## Uso

### Sin SDDM
```bash
curl -sL https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/main/intel-legacy-fix.sh | sudo bash
```

### Con SDDM Fix
```bash
bash <(curl -sL https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/main/intel-legacy-fix.sh) --sddm
```

## Antes y Después

![Antes](https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/refs/heads/main/images/Antes.webp)
*Antes: corrupción de búfer de video, líneas verticales y artefactos visuales en Intel HD 2000.*

![Después](https://raw.githubusercontent.com/NeTenebraes/Intel-Legacy-Buffer-Fix-Arch-Linux/main/images/Despues.webp)
*Después: renderizado estable sin tearing, colores correctos y compositing suave.*

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| SO | Arch Linux |
| Scripting | Bash (148 líneas) |
| GPU | Intel HD 2000 (Sandy Bridge / Gen6) |
| Display | X11 + modesetting |
| Gráficos | Mesa Amber (i965 driver) |
| Licencia | GPLv3 |

## Lo Que Aprendí

- **Internals de drivers de GPU** — Entender cómo interactúan Mesa, los backends de renderizado y Xorg a nivel de hardware
- **Gestión de rolling releases** — Manejar conflictos de dependencias en Arch Linux con `pacman -Rdd`
- **Debugging de display servers** — Diagnosticar problemas de renderizado a través de logs de Xorg e inspección de entorno
- **Scripting defensivo** — Crear mecanismos de backup automático y manejo de errores para cambios a nivel del sistema
