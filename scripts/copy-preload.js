#!/usr/bin/env node

// This script is just a dirty hack to supress prefetch errors.
// I'll remove this when basePath is supported in Next.js.
// See https://github.com/zeit/next.js/issues/4998

const fs = require("fs-extra");
const path = require("path");
const nextConfig = require("../next.config");

// Exit if assetPrefix doesn't exist
if (!nextConfig.assetPrefix) {
    process.exit(0);
}

// Get build directory path
const dirs = fs.readdirSync(path.resolve(__dirname, "../docs/_next/static"));
dirs.forEach(dir => {
    if (dir.match(/chunks|development|runtime|webpack/)) {
        return;
    }

    const pagesDir = path.resolve(
        __dirname,
        "../docs/_next/static",
        dir,
        "pages"
    );

    const prefix = nextConfig.assetPrefix.substr(1);
    const dstDir = path.resolve(pagesDir, prefix);

    // Get files to copy
    const srcs = fs.readdirSync(pagesDir);
    srcs.forEach(s => {
        const src = path.resolve(pagesDir, s);
        if (s === prefix) {
            return;
        }

        // Copy files
        if (s === "index.js") {
            const dst = path.resolve(pagesDir, `${prefix}.js`);
            fs.copySync(src, dst);
        } else {
            const dst = path.resolve(dstDir, s);
            fs.copySync(src, dst);
        }
    });
});
