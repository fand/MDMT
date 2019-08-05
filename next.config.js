const path = require("path");

const isProd = (process.env.NODE_ENV || "production") === "production";
const config = require("./config");

// Extract prefix
const m = config.meta.url.match(/^https?:\/\/[^/]*(\/.*?)\/?$/);
const prefix = m ? m[1] : "";

module.exports = {
    assetPrefix: isProd ? prefix : "",
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.mdx?$/,
            use: [
                options.defaultLoaders.babel,
                path.join(__dirname, "./lib/mdx-loader")
            ]
        });
        return config;
    }
};
