---
title: How it works 💊 MDMT - Markdown Document Template \#MDMTjs
---
# How it works

This page explains how MDMT works.
It maybe useful for customizing.

## File structure

MDMT is composed of the following files / directories:

- `pages/`: Markdown files corresponding to pages
- `components/`: React components
- `static/`: Static files like images
- `lib/`: Core application sources
- `scripts/`: Scripts for build phase
- `docs/`: Output directory
- `config.js`: Configuration of MDMT

See `pages/` to add / edit articles, see `components` to edit design, and see `lib/` to customize
the data flow.

## Data flow

MDMT uses Redux-like dataflow system built with React Hooks.
See `lib/store.ts` for state definition and actions, and see `lib/context.ts` for data passing.

## Build scripts

Build script is defined in package.json like thi:

```js
"build": "NODE_ENV=production run-s clean build:manifest build:build build:export build:nojekyll build:preload build:sw",
```

It seems complicated, but it just runs following scripts in order.

- **clean**: Remove old outputs
- **build:manifest**: Generate manifest.json from config.js
- **build:build**, **build:export**: Output static files to `docs/`
- **build:nojekyll**: Workaround for GitHub Pages
- **build:preload**: Workaround for GitHub Pages
- **build:sw**: Generate ServiceWorker file
