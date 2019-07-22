const {getOptions} = require('loader-utils')
const mdx = require('@mdx-js/mdx')
const matter = require('gray-matter');
const stringifyObject = require('stringify-object');

module.exports = async function(rawContent) {
  const callback = this.async()
  const options = Object.assign({}, getOptions(this), {
    filepath: this.resourcePath
  })
  let result

  const { content, data } = matter(rawContent)

  try {
    result = await mdx(content, options)
  } catch (err) {
    return callback(err)
  }

  const code = `/* @jsx mdx */
  import React from 'react'
  import { mdx } from '@mdx-js/react'
  ${result}
  MDXContent.frontmatter = ${stringifyObject(data)};
  `

  return callback(null, code)
}
