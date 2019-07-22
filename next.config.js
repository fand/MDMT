const path = require('path');
const frontmatter = require('remark-frontmatter');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatter],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mdx?$/,
  //     use: [
  //       options.defaultLoaders.babel,
  //       '@mdx-js/loader',
  //       // path.join(__dirname, './lib/fm-loader'),
  //     ]
  //   });
  //   return config;
  // },
});
