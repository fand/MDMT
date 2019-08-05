import { frontmatter, languages } from "../config";

export type Frontmatter = typeof frontmatter;

export type LangCode = keyof typeof languages;

export type Languages = {
    [key in LangCode]: string;
};

export interface MetaConfig {
    name: string;
    shortName?: string;
    url: string;
    image?: string;
    twitter?: string;
    themeColor: string;
    backgroundColor: string;
}

type SidebarConfigElement =
    | [string, string] // Simple item
    | [string, string, SidebarConfigList] // Nested item with link
    | [string, null, SidebarConfigList]; // Nested item without link

export interface SidebarConfigList extends Array<SidebarConfigElement> {
    [index: number]: SidebarConfigElement;
}

export type SidebarConfig = {
    [key in LangCode]: SidebarConfigList;
};

export type HeaderConfigList = [string, string][];

export type HeaderConfig = {
    [key in LangCode]: HeaderConfigList;
};

export interface Config {
    frontmatter: Frontmatter;
    meta: MetaConfig;

    languages: Languages;
    mainLanguage: LangCode;

    sidebar: SidebarConfig;
    header: HeaderConfig;
}
