const fs = require("fs");
const path = require("path");
const config = require("../config");

// Extract prefix
const m = config.meta.url.match(/^https?:\/\/[^/]*(\/.*?)\/?$/);
const prefix = m ? m[1] : "/";
if (prefix !== "/") {
    console.log("MDMT: Extracted assetPrefix:", prefix);
}

/* eslint-disable @typescript-eslint/camelcase */
const manifest = {
    name: config.meta.name,
    short_name: config.meta.shortName || config.meta.name,
    lang: config.mainLanguage,
    start_url: config.meta.url,
    theme_color: config.meta.themeColor,
    background_color: config.meta.backgroundColor,
    display: "standalone",
    orientation: "portrait",
    icons: [
        {
            src: `${prefix}/static/images/favicon-192.png`,
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: `${prefix}/static/images/favicon-256.png`,
            sizes: "256x256",
            type: "image/png"
        },
        {
            src: `${prefix}/static/images/favicon-512.png`,
            sizes: "512x512",
            type: "image/png"
        }
    ]
};
/* eslint-enable @typescript-eslint/camelcase */

try {
    fs.writeFileSync(
        path.resolve(__dirname, "../static/manifest.json"),
        JSON.stringify(manifest),
        "utf8"
    );
} catch {
    console.error("MDMT: Failed to write prefix to file.");
    process.exit(1);
}
