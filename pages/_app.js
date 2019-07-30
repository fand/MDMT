import React from "react";
import App, { Container } from "next/app";
import Layout from "../components/Layout";
import { Img, CodeBlock } from "../lib/components";
import { Provider } from "../lib/context";

// eslint-disable-next-line
const { MDXProvider } = require("@mdx-js/react");

// MDX components
const components = {
    code: CodeBlock,
    img: Img
};

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        // Extract frontmatter data embedded by mdx-loader.
        // eslint-disable-next-line
        const frontmatter = Component.frontmatter;

        return (
            <Container>
                <MDXProvider components={components}>
                    <Provider frontmatter={frontmatter}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Provider>
                </MDXProvider>
            </Container>
        );
    }
}
