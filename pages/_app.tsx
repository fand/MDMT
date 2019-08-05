import React from "react";
import App, { Container, AppInitialProps, AppContext } from "next/app";
import Layout from "../components/Layout";
import { Img, CodeBlock, Link } from "../lib/components";
import { Provider } from "../lib/context";

// eslint-disable-next-line
const { MDXProvider } = require("@mdx-js/react");

// MDX components
const components = {
    code: CodeBlock,
    img: Img,
    a: Link
};

export default class MyApp extends App {
    public static async getInitialProps({
        Component,
        ctx
    }: AppContext): Promise<AppInitialProps> {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    public render(): React.ReactElement {
        const { Component, pageProps } = this.props;

        // Extract frontmatter data embedded by mdx-loader.
        // eslint-disable-next-line
        const frontmatter = (Component as any).frontmatter || {};

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
