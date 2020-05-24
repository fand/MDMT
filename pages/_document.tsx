import React from "react";
import Document, {
    DocumentContext,
    DocumentInitialProps,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import config from "../lib/config";
import { removePrefixFromPath } from "../lib/utils";

type LangId = keyof typeof config.languages;

interface DocumentProps extends DocumentInitialProps {
    styles: React.ReactElement;
    language: LangId;
}

export default class extends Document<DocumentProps> {
    public static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentProps> {
        const pathWithoutPrefix = removePrefixFromPath(ctx.pathname);
        const language = (Object.keys(config.languages).find((lang) =>
            pathWithoutPrefix.match(new RegExp(`^/${lang}(/.*)?$`))
        ) || config.mainLanguage) as LangId;

        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                language,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    public render(): React.ReactElement {
        return (
            <Html lang={this.props.language}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
