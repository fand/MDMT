import config from "../config";
import nextConfig from "../next.config";

export const getPathForLang = (lang, path) => {
  if (lang === config.defaultLanguage) {
    return path;
  }
  if (path === '/') {
    return `/${lang}`;
  }
  return `/${lang}${path}`;
};

// Convert root-relative URLs
export const prefixUrl = url => {
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

export const removePrefixFromPath = path => {
  if (!nextConfig.assetPrefix) {
    return path;
  }
  const prefix = nextConfig.assetPrefix;
  const prefixRe = new RegExp(`^${prefix}`);
  const pathWithoutPrefix = path.replace(prefixRe, '');

  return pathWithoutPrefix || '/';
}

export const removeLanguageFromPath = (path, currentLanguage) => {
  if (currentLanguage === config.defaultLanguage) {
    return path;
  }

  const langRe = new RegExp(`^/${currentLanguage}`);
  const pathWithoutLang = path.replace(langRe, '');

  return pathWithoutLang || '/';
}
