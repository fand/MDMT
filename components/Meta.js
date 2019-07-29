import * as React from "react";
import Head from "next/head";

export default ({
  url,
  title,
  image,
  description,
  siteName,
  lang,
  twitter
}) => {
  return (
    <Head>
      <html lang={lang || "en"} />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="Description" content={description} />

      <title>{title || ''}</title>

      {/* Facebook */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicons */}
      <link
        rel="icon"
        type="image/x-icon"
        sizes="16x16 32x32"
        href="/static/images/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/images/favicon-180.png"
      />
      <link
        rel="icon"
        sizes="192x192"
        href="/static/images/favicon-192.png"
      />

      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
