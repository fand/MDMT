import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import CodeBlock from "../components/CodeBlock";

// MDX components
const components = {
  code: CodeBlock
};

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  title() {
    const { Component } = this.props;
    if (Component.frontmatter && Component.frontmatter.title) {
      return Component.frontmatter.title;
    } else {
      return "VEDAJS";
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    if (typeof document !== "undefined") {
      document.title = this.title();
    }

    return (
      <Container>
        <MDXProvider components={components}>
          <Meta/>

          <Header />
          <nav>sidebar</nav>

          <main>
            <Component {...pageProps} />
          </main>

          <footer>Footer</footer>
        </MDXProvider>
      </Container>
    );
  }
}
