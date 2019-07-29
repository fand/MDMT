import config from "../config";
import nextConfig from "../next.config";

export const getPathForLang = (lang, path) => {
  return lang === config.defaultLanguage ? path : `/${lang}${path}`;
};

// Convert root-relative URLs
export const prefixUrl = url => {
  const m = url.match(/^\/(.*)$/);
  if (m) {
    const prefix = nextConfig.assetPrefix;
    return `${prefix}/${m[1]}`;
  }

  return url;
};
