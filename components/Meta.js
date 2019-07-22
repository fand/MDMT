import React from "react";
import Helmet from "react-helmet";
import sanitize from 'sanitize.css';

const Meta = ({
  url,
  title,
  image,
  description,
  siteName,
  lang
}) => (
  <div>
    <Helmet>
      <html lang={lang || "en"} />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <title>{title}</title>
      <meta name="Description" content={description} />

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
      <meta name="twitter:site" content="@amagitakayosi" />
      <meta name="twitter:creator" content="@amagitakayosi" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Google+ / Schema.org */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={title} />
      <meta itemProp="image" content={image} />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <style dangerouslySetInnerHTML={{ __html: sanitize }}/>
  </div>
);

  export default Meta;
