import config from '../config';

export const getPathForLang = (lang, path) => {
  return lang === config.defaultLanguage
    ? path
    : `/${lang}${path}`;
}
