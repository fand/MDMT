import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import Helmet from "react-helmet";
import styled, { ServerStyleSheet } from "styled-components";

// import Head from 'next/head';
// import sanitize from 'sanitize.css';

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleElement();
    return { ...documentProps, helmet: Helmet.renderStatic(), styleTags };
  }

  helmetHtmlAttrs = () => this.props.helmet.htmlAttributes.toComponent();
  helmetBodyAttrs = () => this.props.helmet.bodyAttributes.toComponent();
  helmetHead = () => Object.keys(this.props.helmet)
  .filter(el => el !== "htmlAttributes" && el !== "bodyAttributes")
  .map(el => this.props.helmet[el].toComponent());

  // get helmetJsx() {
  //   return (
  //     <Helmet
  //       htmlAttributes={{ lang: "en" }}
  //       title={constants.og.title}
  //       meta={[
  //         {
  //           name: "viewport",
  //           content: "width=device-width, initial-scale=1"
  //         },
  //         { property: "og:title", content: constants.og.title },
  //         {
  //           property: "og:descripton",
  //           content: constants.og.descripton
  //         }
  //       ]}
  //     />
  //   );
  // }

  render() {
    return (
      <html {...this.helmetHtmlAttrs()}>
        <Head>
          {/* {this.helmetJsx} */}
          {this.helmetHead()}
          {this.props.styleTags}
        </Head>
        <body {...this.helmetBodyAttrs()}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
