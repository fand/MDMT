const config = require("../config");

// Extract prefix
const m = config.meta.url.match(/^https?:\/\/[^/]*(\/.*?)\/?$/);
const prefix = m ? m[1] : "";
if (prefix) {
    console.log("MDMT: Extracted assetPrefix:", prefix);
}

module.exports = {
    globDirectory: "docs/",
    globPatterns: ["**/*.{js,html,css,png,ico,webp,gif}"],
    swDest: "docs/sw.js",
    modifyURLPrefix: {
        "": `${prefix}/`
    }
};
