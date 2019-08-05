import * as T from "./types";
import config from "../config";

// Add type info to config data
export const languages: T.Languages = config.languages;
export const mainLanguage: T.LangCode = config.mainLanguage as T.LangCode;
export const frontmatter = config.frontmatter;
export const meta: T.MetaConfig = config.meta;
export const sidebar: T.SidebarConfig = config.sidebar as T.SidebarConfig;
export const header: T.HeaderConfig = config.header as T.HeaderConfig;

// Validate config
if (!Object.keys(languages).every(l => !!sidebar[l as T.LangCode])) {
    throw "MDMT: Please add sidebar config for all languages";
}
if (!Object.keys(languages).every(l => !!header[l as T.LangCode])) {
    throw "MDMT: Please add header config for all languages";
}

export default {
    languages,
    mainLanguage,
    frontmatter,
    meta,
    sidebar,
    header
};
