---
title: "neCyberWiki"
tags: [cybersecurity, git, obsidian, quartz]
---

# neCyberWiki

> A collaborative cybersecurity wiki with 1800+ commits, covering terminal practice, vulnerable machine writeups, and ethical hacking fundamentals.

![Banner](https://netenebraes.github.io/neCyberWiki/_assets/Banner.webp)

## Overview

neCyberWiki is a free, open-source educational resource that centralizes practical cybersecurity knowledge in one accessible location. Built with **Obsidian** for content creation and published via **Quartz** as a static site, it bridges the gap between personal note-taking and public knowledge sharing.

The wiki is designed as a learning log documenting terminal practice, security auditing techniques, CTF challenge writeups, and foundational computer science concepts — all organized for quick lookup.

## What's Inside

- **Linux Terminal Practice** — OverTheWire Bandit writeups covering fundamental commands: SSH, permissions, `find`, `grep`, `base64`, `openssl`, networking and more, with step-by-step beginner-friendly explanations
- **Vulnerable Machine Writeups** — Detailed VulnHub writeups (IMF, DarkHole 2) with SQL Injection, Buffer Overflow, Port Knocking, Reverse Shell, and privilege escalation techniques
- **Ethics & Legal** — Dedicated pages on cybersecurity ethics and code of conduct
- **Shared Resources** — Assets, images, and learning support material

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Content | Obsidian (Markdown with frontmatter) |
| Publishing | Quartz v4.5.2 (static site generator) |
| Runtime | Node.js >= 22 |
| Components | Preact (JSX) |
| Styles | SCSS (LightningCSS) |
| Analytics | Plausible |
| Comments | Giscus |
| Hosting | GitHub Pages |
| Deploy | GitHub Actions |

## Impact

> 1800+ commits of curated security knowledge, MIT licensed.

The project is published at [netenebraes.github.io/neCyberWiki](https://netenebraes.github.io/neCyberWiki/) and welcomes community contributions.

## What I Learned

- **Content architecture** — Organizing hundreds of notes into a navigable, maintainable knowledge structure
- **Static site generation** — Configuring Quartz to render Obsidian-flavored Markdown correctly
- **Documentation discipline** — Maintaining content quality and consistency across a large, evolving repository
- **Open source workflow** — Managing issues, pull requests, and community contributions
