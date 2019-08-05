const { getOptions } = require("loader-utils");
const mdx = require("@mdx-js/mdx");
const matter = require("gray-matter");
const stringifyObject = require("stringify-object");
const slug = require("remark-slug");
const emoji = require("remark-emoji");
const breaks = require("remark-breaks");

// Fork of mdx-js/loader.
// Parses frontmatter and embeds the data to the component.
module.exports = async function(rawContent) {
    const callback = this.async();
    const options = Object.assign({}, getOptions(this), {
        filepath: this.resourcePath,
        remarkPlugins: [slug, emoji, breaks]
    });
    let result;

    // Parse frontmatter data
    const { content, data } = matter(rawContent);

    try {
        result = await mdx(content, options);
    } catch (err) {
        return callback(err);
    }

    const code = `/* @jsx mdx */
    import React from 'react'
    import { mdx } from '@mdx-js/react'
    ${result}
    MDXContent.frontmatter = ${stringifyObject(data)};
    `;

    return callback(null, code);
};
