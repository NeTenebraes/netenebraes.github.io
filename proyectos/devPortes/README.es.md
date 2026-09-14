---
title: "devPortes"
tags: [javascript, nosql, fullstack, reservations]
---

# devPortes

> Sistema completo de gestión y reservas de complejos deportivos, desarrollado íntegramente en un entorno de equipo.

![Preview](preview.png)

## Resumen

devPortes es una plataforma web que permite a los usuarios explorar, reservar y gestionar instalaciones deportivas — canchas, pistas y domains — en tiempo real. Construido como proyecto final de un bootcamp de desarrollo de software, demuestra la capacidad de entregar un producto completo bajo plazos ajustados con un equipo multifuncional.

El sistema atiende a dos audiencias: **usuarios regulares** que reservan y gestionan sus reservas, y **administradores** que supervisan instalaciones, horarios y cuentas de usuario.

## Funcionalidades Principales

- **Disponibilidad en tiempo real** — Los usuarios ven la disponibilidad actualizada y pueden reservar al instante
- **Panel de administración** — Control total sobre instalaciones, horarios y gestión de usuarios
- **Acceso basado en roles** — Interfaces y permisos separados para usuarios y administradores
- **Perfiles de usuario** — Historial de reservas, gestión de perfil y notificaciones
- **Diseño responsive** — Funciona sin problemas en desktop y móvil

> El proyecto fue desplegado en GitHub Pages con un flujo de reservas completamente funcional y panel de administración.

## Cómo Se Construyó

La aplicación sigue una arquitectura cliente-servidor clásica. El frontend maneja validación de formularios, renderizado dinámico de horarios y comunicación con la API, mientras que el backend gestiona autenticación, lógica de reservas y persistencia de datos.

### Flujo de Trabajo en Equipo

Trabajar en un equipo de desarrolladores requirió coordinar integraciones entre módulos — la lógica de reservas, el panel admin y los perfiles de usuario se desarrollaron en paralelo y se fusionaron a través de Git.

![Nuestro Equipo](nosotros.png)
*El equipo de desarrollo durante una revisión de sprint.*

## Galería de la App

![Galería](galeria.png)
*Interfaz de reservas y pantallas de gestión de instalaciones.*

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML, CSS, JavaScript |
| Backend | JavaScript (Node.js) |
| Base de datos | NoSQL (MongoDB) |
| Deploy | GitHub Pages |

## Lo Que Aprendí

- **Coordinación en equipo** — Gestionar desarrollo paralelo de funcionalidades y flujos de merge
- **Gestión de estado** — Manejar el estado de reservas entre usuarios concurrentes
- **Integración full-stack** — Conectar formularios del frontend con APIs del backend y operaciones de base de datos
- **Metodología ágil** — Entregar incrementos en ciclos de sprint cortos
