---
title: 設定のカスタマイズ 💊 MDMT - Markdown Document Template \#MDMTjs
color: \#FFAA00
---
# Configuration

The essential settings for the website is written in `config.ts`.

## languages

Set languages to support in `(Language code): (Label)` format.
The labels are used in the language switcher at top-right of the page.

By default, MDMT supports English and Japanese:

```js
langugages: {
    en: "English",
    ja: "日本語",
},
```

## mainLanguage

Set main language of the website.
Default is `en` (English).

Main langauge pages are served directly under the root.
Other languages are served in their directories.
For example, English pages are served in `/` and Japanese pages are served in `/ja` in this document.

## frontmatter

Define data to use in Markdown frontmatter.
By default, MDMT defines these data:

- **title**: page title
- **description**: page description
- **color**: page theme color

If frontmatter is not defined in a Markdown file, MDMT uses the value defined here.
For example, `config.ts` for this document defines `color: #00DDFF` so the top page has blue background, but this page has yellow background because the Markdown file for this page defines `color: #FFAA00` in the frontmatter.

## meta

Set metadata for the website.
This data is used on sharing the website on SNS, or on installing the website as PWA.

- **name**: name of website
- **shortName** (optional): App name for PWA
- **url**: URL of website
- **image** (optional): hero image URL
- **twitter** (optional): your Twitter account
- **themeColor**: theme color for PWA
- **backgroundColor**: background color for PWA

## sidebar

Data for links in the sidebar menu.
Add link data in `[label, path]` format.
The data can also be nested to represent nested menu.

The sidebar data for this website is like this:

```typescript
sidebar: {
    en: [
        ["Home", "/"],
        ["Getting Started", "/getting-started"],
        ["Features", null, [ // Nested item without link
            ["MDX", "/features/mdx"],
            ["I18n", "/features/i18n"],
            ["PWA", "/features/pwa"]
        ]],
        ["Customize", "/customize", [ // Nested item with link
            ["Config", "/customize/config"],
            ["Theme", "/customize/theme"]]
        ],
        ["How It Works", "/how-it-works"],
        ["FAQ", "/faq"]
    ],
    ja: [
        ["ホーム", "/ja"],
        ["使い方", "/ja/getting-started"],
        ["機能", null, [
            ["MDX", "/ja/features/mdx"],
            ["多言語対応", "/ja/features/i18n"],
            ["PWA", "/ja/features/pwa"]
        ]],
        ["カスタマイズ", "/ja/customize", [
            ["設定ファイル", "/ja/customize/config"],
            ["テーマ", "/ja/customize/theme"]
        ]],
        ["仕組み", "/ja/how-it-works"],
        ["よくある質問", "/ja/faq"]
    ]
},
```

`sidebar` data must be provided for all supported languages.
If insufficient, MDMT won't build 🤗

## header

Data for links in the header menu.

In default theme, header menu is only displayed on PC.
If you wanna show them on mobile, please edit `components/Header.tsx`.

```typescript
header: {
    en: [["GitHub", "https://github.com/fand/mdmt"]],
    ja: [
        ["GitHub", "https://github.com/fand/mdmt"],
        ["About Me", "https://twitter.com/amagitakayosi"]
    ]
}
```

`header` data must be provided for all supported languages.
