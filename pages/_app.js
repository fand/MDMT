import App, { Container } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";
import { Img, CodeBlock } from "../lib/components";
import { Provider } from "../lib/context";

// MDX components
const components = {
  code: CodeBlock,
  img: Img,
};

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <MDXProvider components={components}>
          <Provider metadata={Component.frontmatter}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </MDXProvider>
      </Container>
    );
  }
}
