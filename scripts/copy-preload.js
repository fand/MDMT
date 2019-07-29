#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const nextConfig = require('../next.config');

// Exit if assetPrefix doesn't exist
if (!nextConfig.assetPrefix) {
  process.exit(0);
}

// Get build directory path
const dirs = fs.readdirSync(path.resolve(__dirname, '../docs/_next/static'));
const dir = dirs.find(d => !d.match(/chunks|development|runtime|webpack/));
const pagesDir = path.resolve(__dirname, '../docs/_next/static', dir, 'pages');

const prefix = nextConfig.assetPrefix.substr(1);
const dstDir = path.resolve(pagesDir, prefix);
// fs.mkdirSync(dstDir);

// Get files
const srcs = fs.readdirSync(pagesDir);
srcs.forEach(s => {
  const src = path.resolve(pagesDir, s);
  if (s === prefix) {
    return;
  }
  if (s === 'index.js') {
    const dst = path.resolve(pagesDir, `${prefix}.js`);
    // console.log(`Copy ${src} to ${dst}`);
    fs.copySync(src, dst);
  } else {
    const dst = path.resolve(dstDir, s);
    // console.log(`Copy ${src} to ${dst}`);
    fs.copySync(src, dst);
  }
});
