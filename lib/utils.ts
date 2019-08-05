import config from "./config";
import nextConfig from "../next.config";

export const getPathForLang = (lang: string, path: string): string => {
    if (lang === config.mainLanguage) {
        return path;
    }
    if (path === "/") {
        return `/${lang}`;
    }
    return `/${lang}${path}`;
};

// Convert root-relative URLs
export const prefixUrl = (url: string): string => {
    if (!nextConfig.assetPrefix) {
        return url;
    }

    const m = url.match(/^\/(.*)$/);
    if (m) {
        const prefix = nextConfig.assetPrefix;
        return `${prefix}/${m[1]}`;
    }

    return url;
};

export const removePrefixFromPath = (path: string): string => {
    if (!nextConfig.assetPrefix) {
        return path;
    }
    const prefix = nextConfig.assetPrefix;
    const prefixRe = new RegExp(`^${prefix}`);
    const pathWithoutPrefix = path.replace(prefixRe, "");

    return pathWithoutPrefix || "/";
};

export const removeLanguageFromPath = (
    path: string,
    currentLanguage: string
): string => {
    if (currentLanguage === config.mainLanguage) {
        return path;
    }

    const langRe = new RegExp(`^/${currentLanguage}`);
    const pathWithoutLang = path.replace(langRe, "");

    return pathWithoutLang || "/";
};

export const getPurePath = (path: string, lang: string): string =>
    removeLanguageFromPath(removePrefixFromPath(path), lang);
