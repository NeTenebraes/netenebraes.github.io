---
title: "neCyberWiki"
tags: [cybersecurity, git, obsidian, quartz]
---

# neCyberWiki

> Wiki colaborativo de ciberseguridad con más de 1800 commits, cubriendo prácticas de terminal, resolución de máquinas vulnerables y fundamentos de hacking ético.

![Banner](https://netenebraes.github.io/neCyberWiki/_assets/Banner.webp)

## Resumen

neCyberWiki es un recurso educativo gratuito y open-source que centraliza conocimiento práctico de ciberseguridad en una ubicación accesible. Construido con **Obsidian** para la creación de contenido y publicado vía **Quartz** como sitio estático, conecta la toma de notas personal con el conocimiento público.

La wiki está diseñada como una bitácora de aprendizaje donde se documentan prácticas de terminal, técnicas de auditoría de seguridad, WriteUps de retos CTF y conceptos fundamentales de ciencias de la computación — todo organizado para consulta rápida.

## Qué Contiene

- **Prácticas de Terminal Linux** — WriteUps de OverTheWire Bandit cubriendo comandos fundamentales: SSH, permisos, `find`, `grep`, `base64`, `openssl`, networking y más, con explicaciones paso a paso orientadas a principiantes
- **Resolución de Máquinas Vulnerables** — WriteUps detallados de VulnHub (IMF, DarkHole 2) con técnicas de SQL Injection, Buffer Overflow, Port Knocking, Reverse Shell y escalada de privilegios
- **Ética y Legalidad** — Páginas dedicadas a la ética en ciberseguridad y código de conducta
- **Recursos Compartidos** — Assets, imágenes y material de apoyo para el aprendizaje

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Contenido | Obsidian (Markdown con frontmatter) |
| Publicación | Quartz v4.5.2 (generador de sites estáticos) |
| Runtime | Node.js >= 22 |
| Componentes | Preact (JSX) |
| Estilos | SCSS (LightningCSS) |
| Analytics | Plausible |
| Comentarios | Giscus |
| Hosting | GitHub Pages |
| Deploy | GitHub Actions |

## Impacto

> Más de 1800 commits de conocimiento de seguridad curado, licenciado bajo MIT.

El proyecto está publicado en [netenebraes.github.io/neCyberWiki](https://netenebraes.github.io/neCyberWiki/) y recibe contribuciones de la comunidad.

## Lo Que Aprendí

- **Arquitectura de contenido** — Organizar cientos de notas en una estructura de conocimiento navegable y mantenible
- **Generación de sites estáticos** — Configurar Quartz para renderizar Markdown con formato de Obsidian correctamente
- **Disciplina de documentación** — Mantener calidad y consistencia del contenido en un repositorio grande y en evolución
- **Flujo de trabajo open source** — Gestionar issues, pull requests y contribuciones de la comunidad
