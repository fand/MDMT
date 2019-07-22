import React from 'react'
import App, { Container } from 'next/app'
import {MDXProvider} from '@mdx-js/react'

import CodeBlock from '../components/CodeBlock';

// MDX components
const components = {
  code: CodeBlock,
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    if (typeof document !== 'undefined') {
      if (Component.frontmatter && Component.frontmatter.title) {
        document.title = Component.frontmatter.title
      }
      else {
        document.title = 'VEDAJS';
      }
    }

    return (
      <Container>
        <MDXProvider components={components}>
          <nav>
          sidebar
          </nav>
          <header>Header</header>

          <main>
            <Component {...pageProps} />
          </main>

          <footer>Footer</footer>
        </MDXProvider>
      </Container>
    )
  }
}
