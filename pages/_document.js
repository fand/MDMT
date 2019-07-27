import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import sanitize from 'sanitize.css';

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleElement();
    return { ...documentProps, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <style dangerouslySetInnerHTML={{ __html: sanitize }}/>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
