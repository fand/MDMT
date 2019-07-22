const path = require('path');

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        path.join(__dirname, './lib/mdx-loader'),
      ]
    });
    return config;
  },
};
