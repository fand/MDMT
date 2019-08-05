import React, { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { prefixUrl, removePrefixFromPath } from "../lib/utils";
import { useLanguage } from "../lib/hooks";
import { AppContext } from "../lib/context";
import config from "../lib/config";
import GlobalStyle from "./GlobalStyle";

const Meta = (): React.ReactElement => {
    const { url, image, name, twitter } = config.meta;
    const lang = useLanguage();

    // Get page data
    const { frontmatter } = useContext(AppContext);
    const { title, description, color } = frontmatter;

    // Strip alpha from color
    const opaqueColor = color.match("#.{8}") ? color.substr(0, 7) : color;

    // Create actual page URL
    const router = useRouter();
    const path = removePrefixFromPath(router.pathname);
    const actualUrl = `${url}${path}`;

    // Create actual image Url
    const imageUrl = !!image && prefixUrl(image);

    return (
        <Head>
            <html lang={lang} />
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="Description" content={description} />

            <title>{title}</title>

            {/* Facebook */}
            <meta property="og:url" content={actualUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary" />
            {twitter && (
                <>
                    <meta name="twitter:site" content={twitter} />
                    <meta name="twitter:creator" content={twitter} />
                </>
            )}
            <meta name="twitter:url" content={actualUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {imageUrl && <meta name="twitter:image" content={imageUrl} />}

            {/* Favicons */}
            <link
                rel="icon"
                type="image/x-icon"
                sizes="16x16 32x32"
                href={prefixUrl("/static/images/favicon.ico")}
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={prefixUrl("/static/images/favicon-180.png")}
            />
            <link
                rel="icon"
                sizes="192x192"
                href={prefixUrl("/static/images/favicon-192.png")}
            />

            {/* PWA */}
            <meta name="theme-color" content={opaqueColor} />
            <link rel="manifest" href={prefixUrl("/static/manifest.json")} />
            <GlobalStyle />
        </Head>
    );
};

export default Meta;
