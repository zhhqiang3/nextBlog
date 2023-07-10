# Prologue Blog

Next.js13 + tailwindcss + contentlayer + MDX Blog

## Features

- Content Focused, contentlayer + md/mdx
- Adaptive dark mode
- Full SEO, Opengraph + JSON-LD
- Lightweight search engine, powered by Fuse.js

## Get Started

```
pnpm install
```
All configurations are in `/data`

## Configuration

Post frontmatter

```yaml
---
title: title
description: description
(required)

pubDate: 2022-11-13
updatedDate: 2023-07-02
tags: ["tag"]
layout: photo
image: /static/photos/06.jpg
(optional)
---
```

Page frontmatter

```yaml
title: title
description: description
(required)
```

Known Issues:

- App router og card, Chinese fonts cannot be loaded
