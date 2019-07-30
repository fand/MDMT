const path = require("path");

const isProd = (process.env.NODE_ENV || "production") === "production";

module.exports = {
    assetPrefix: isProd ? "/MDMT" : "",
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
