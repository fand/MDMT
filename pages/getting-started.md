---
title: Getting Started 💊 MDMT - Markdown Document Template \#MDMTjs
---
# Getting Started

In this page, we'll learn how to create a website with MDMT.
We call the website `my-mdmt-website`.

## 1. Clone MDMT

Download MDMT to your PC.
Run these commands in the terminal.

```
git clone https://github.com/fand/mdmt my-mdmt-website
cd my-mdmt-website
npm i
```

## 2. Run Development Server

When you run `npm start`, the development server will start on http://localhost:3000/

## 3. Create a Page

You can create pages just by writing Markdown files.
Create `/pages/hello.md` and enter the text below:

```
# Hello my website

Yo
```

Then the browser will show the content you just wrote on http://localhost:3000/hello .
When you edit `hello.md`, the browser will update the content instantly.

![Editing hello.md](/static/images/mdmt-live-hello.gif)

## 4. Edit config.js

Set the website name, URL, languages etc.
For now, set frontmatter.title to `my-mdmt-website`.

![Editing title](/static/images/mdmt-live-title.gif)

The title of the page changed to `my-mdmt-website` !

For other settings, see [Configuration](./customize/config) page.

## 5. Build

Hit `Ctrl-C` to stop the dev server.
Then run `npm run build` - the static HTML/JS/CSS files will be generated in `docs/`!

After that you can publish the files in `docs/` to anywhere you like!
If you wanna publish the website on GitHub Pages, just commit & push `/docs` and change the repository settings on GitHub🤘
