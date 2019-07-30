import React from "react";
import Document, {
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import sanitize from "../lib/sanitize";

interface DocumentProps extends DocumentInitialProps {
    styleTags: React.ReactElement[];
}

export default class extends Document<DocumentProps> {
    public static async getInitialProps(
        args: DocumentContext
    ): Promise<DocumentProps> {
        const documentProps = await super.getInitialProps(args);
        const sheet = new ServerStyleSheet();
        const styleTags = sheet.getStyleElement();
        return { ...documentProps, styleTags };
    }

    public render(): React.ReactElement {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <style dangerouslySetInnerHTML={{ __html: sanitize }} />
                    {this.props.styleTags}
                    <script
                        defer
                        async
                        src="https://platform.twitter.com/widgets.js"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
