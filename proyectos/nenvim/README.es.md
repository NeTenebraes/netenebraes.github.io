---
title: "nenvim"
tags: [lua, neovim, java, spring, lsp, plugin-management, debugging]
---

# nenvim

> Un IDE de Neovim 0.12 listo para producción para desarrollo Java y multi-lenguaje — con plugin manager custom, dos plugins originales y debugging completo.

![Preview](preview.png)

## Resumen

nenvim no es una "configuración de Neovim" — es un entorno de desarrollo completo construido desde cero sobre **Neovim 0.12** usando sus APIs nativas. Cuenta con un **plugin manager custom** (vimpack), **dos plugins originales** (trident y nepost), **herramientas Java profundas** con más de 10 comandos custom, y **debugging DAP completo** en 5 lenguajes.

Diseñado para desarrolladores que quieren la velocidad y extensibilidad de Neovim con el poder de un IDE completo, sin la sobrecarga de Electron.

## Qué Lo Hace Diferente

| Característica | Detalle |
|---------------|---------|
| **vimpack** | Plugin manager custom construido sobre la API nativa `vim.pack` de Neovim 0.12 — actualizaciones paralelas asíncronas, UI flotante de progreso |
| **Trident** | Herramienta original de búsqueda/edición de código con ripgrep, editor flotante y rename en vivo |
| **Nepost** | Cliente HTTP original (Postman para Neovim) con entornos, historial y colecciones |
| **LSP Nativo** | Usa `vim.lsp.config()` + `vim.lsp.enable()` — la API moderna de Neovim 0.12 |
| **dark_cyan** | Tema custom hand-crafted con grupos de highlights por componente |
| **Format-on-save** | Conform.nvim con Prettier, StyLua, shfmt, google-java-format y más |

## IDE Java

La configuración Java es la parte más desarrollada — aproximadamente 1500 líneas de Lua custom cubriendo creación de proyectos, gestión de dependencias, generación de código e integración con build tools.

![Java Utils](java-utils.png)
*Comandos de desarrollo Java disponibles directamente desde Neovim.*

### Comandos

| Comando | Descripción |
|---------|-------------|
| `:JavaInit` | Scaffolding interactivo — Pure Java, Maven, Gradle o Spring Boot (descarga desde start.spring.io) |
| `:JavaNewFile` | Crear Class, Interface, Enum, Record o Annotation |
| `:JavaAddDependencies` | Agregar dependencias Maven/Gradle — 40+ libs curadas, búsqueda en Maven Central, Spring Boot starters |
| `:JavaGenerateCode` | Generar override de métodos, constructores, toString(), hashCode()/equals(), organizar imports |
| `:JavaAddLombok` | Agregar anotaciones Lombok (@Data, @Builder, @Slf4j, etc.) |
| `:JavaSyncDependencies` | Ejecutar `mvn dependency:resolve` o `gradle dependencies --refresh` |
| `:JavaRefresh` | Refrescar workspace JDTLS + rebuild |
| `:JavaCleanCache` | Eliminar cache del workspace JDTLS |

### Cómo Funciona JDTLS

- **Auto-inicia** en `FileType java` — sin configuración manual
- **Detección de versión de Java** desde `.java-version`, `pom.xml` o `build.gradle`
- **Auto-descarga de Lombok** — se adjunta como `-javaagent` automáticamente
- **Detección de build tool** — Maven y Gradle soportados con inyección inteligente de XML/DSL
- **Integración DAP** — debugging Java con hot code replace

## Soporte Multi-Lenguaje

| Lenguaje | Servidores LSP | Formatters | Linters |
|----------|---------------|------------|---------|
| Java / Spring Boot | JDTLS + Spring Boot LS | google-java-format | — |
| JavaScript / TypeScript | vtsls | Prettier | oxlint |
| Python | basedpyright + ruff | isort + black | ruff |
| C/C++ | clangd | clang-format | — |
| Bash | bash-language-server | shfmt | shellcheck |
| Lua | lua_ls | StyLua | — |
| SQL | postgres-ls, sqlls | sqlfluff | — |
| HTML/CSS | html, cssls, tailwindcss, emmet | Prettier | markuplint, stylelint |
| Markdown | marksman | mdformat | markdownlint |

## Debugging (DAP)

Soporte completo del Debug Adapter Protocol con runners específicos por lenguaje que se ejecutan en terminal Kitty:

| Lenguaje | Adapter | Runner |
|----------|---------|--------|
| Java | java-debug-adapter | JDTLS DAP + Spring Boot |
| JavaScript/TypeScript | pwa-node | Node.js |
| Python | debugpy | Python |
| Bash | bash-debug-adapter | bash |
| C/C++ | codelldb | Binary compilado |

**Keybindings:** `<leader>db` toggle breakpoint, `<leader>dc` continue, `<leader>do/di/du` step over/into/out, `<leader>dr` toggle REPL.

## Integración con Git

Lazygit se ejecuta dentro de una terminal flotante de Neovim:

![Lazygit Integration](lazygit.png)
*Lazygit dentro de Neovim — branches, staging, diffs y commits sin salir del editor.*

## Code Search — Trident

Herramienta de búsqueda custom construida sobre ripgrep:

- **Modos de búsqueda:** Todos los archivos, solo archivo actual, excluir archivo actual, excluir extensión actual
- **Editor flotante:** Abre archivos en la línea/columna exacta con resaltado de sintaxis
- **Rename en vivo (`T:`):** Input flotante con reemplazo en tiempo real en todo el buffer
- **Diálogo de cambios sin guardar:** Modal flotante custom antes de cerrar buffers modificados

## Cliente HTTP — Nepost

Cliente HTTP tipo Postman construido completamente en Lua:

- **Constructor de requests:** Method + URL + headers + body en ventanas split
- **Visor de respuestas:** Status code, headers, body formateado
- **Historial:** Historial persistente de requests (`:NepostHistory`)
- **Entornos:** Cambiar entre dev/staging/prod (`:NepostEnv`)
- **Colecciones:** Explorar requests guardados (`:NepostCollections`)

## Live Server

Integración con servidor Vite dev:

- **Multi-project:** Tracks servers por directorio de proyecto
- **Auto-port:** Encuentra siguiente puerto disponible desde 8181
- **Statusline:** Muestra `VITE:<port>` cuando el servidor está corriendo
- **Auto-open:** Abre el navegador cuando está listo

## Formateo y Linting

**Format-on-save** habilitado via conform.nvim:

| Lenguaje | Formatter |
|----------|-----------|
| JS/TS/HTML/CSS/JSON/YAML/Vue/Svelte/Astro | Prettier |
| Lua | StyLua |
| Shell | shfmt (indent de 4 espacios) |
| Java | google-java-format |
| Python | isort + black |
| SQL | sqlfluff (dialecto Postgres) |
| Markdown | mdformat |

**Linting** via nvim-lint: oxlint (JS/TS), stylelint (CSS), markuplint (HTML), markdownlint (Markdown).

## Qué Incluye

| Componente | Plugin |
|------------|--------|
| Plugin Manager | vimpack (custom, `vim.pack` nativo) |
| LSP | nvim-lspconfig, mason.nvim, mason-tool-installer |
| Completion | nvim-cmp, LuaSnip, friendly-snippets |
| Java | nvim-jdtls + 10 comandos custom |
| Debugging | nvim-dap, nvim-dap-ui, mason-nvim-dap |
| Treesitter | nvim-treesitter (30+ parsers), context, autotag |
| Search | Flash.nvim, Trident (custom) |
| HTTP | Nepost (custom) |
| UI | lualine, bufferline, noice, gitsigns, devicons, render-markdown |
| Editing | mini.nvim (surround, ai, comment, pairs, move), vim-visual-multi |
| Navigation | Snacks.nvim (dashboard, explorer, picker, terminal, zen, lazygit) |
| Formatting | conform.nvim |
| Linting | nvim-lint |
| Theme | dark_cyan (custom) |

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Editor | Neovim 0.12 |
| Config | Lua |
| Plugin Manager | vimpack (custom) |
| LSP | vim.lsp.config() (API nativa) |
| Java | nvim-jdtls + comandos custom |
| Debugging | nvim-dap + 5 adaptadores de lenguaje |
| Search | Trident (custom), Flash.nvim |
| HTTP | Nepost (custom) |
| Formatting | conform.nvim |
| Treesitter | nvim-treesitter |
| Theme | dark_cyan (custom) |

## Lo Que Aprendí

- **Internals de Neovim** — autocommands, config en Lua, APIs nativas `vim.pack` y `vim.lsp`
- **Arquitectura LSP** — cómo se comunican los language servers con los editores y cómo extenderlos
- **Tooling de Java** — integrar pipelines Maven/Gradle, configuración JDTLS y debugging DAP
- **Desarrollo de plugins** — construir trident y nepost como módulos reutilizables
- **Optimización de rendimiento** — lazy-loading, operaciones asíncronas, minimización de tiempo de inicio
