---
title: 設定のカスタマイズ 💊 MDMT - Markdown Document Template \#MDMTjs
color: \#FFAA00
---
# 設定のカスタマイズ

サイト全体の設定は `config.js` でカスタマイズできます。
項目ごとに紹介していきます〜

## languages

サポートする言語を設定します。
`言語コード: ラベル` という形式で書いてください。
設定したラベルは、ページ右上の言語切り替えメニューで使われます。

デフォルトでは英語と日本語をサポートしています。

```js
langugages: {
    en: "English",
    ja: "日本語",
}
```

## mainLanguage

メイン言語を設定します。
デフォルトでは `en` （英語）になっています。

メイン言語のページはルート直下に、それ以外の言語は一つ下の階層に置かれます。
例えば、デフォルトでは英語がメイン言語なので、英語のページは `/`、日本語ののページは `/ja` になります。

## frontmatter

Markdownのfrontmatterで使うデータを定義します。
デフォルトでは以下の項目を定義しています。

- title: ページのタイトル
- description: ページの概要データ
- color: ページのテーマカラー

各ページのMarkdownでfrontmatterがない場合、ここの値が使われます。

例えば、このドキュメントではconfig.tsで `color: #00DDFF` となっているので、トップページでは青い背景になっていますが、このページでは `color: #FFDD00` となっているため、黄色の背景になっています。

## meta

Webサイト全体のメタデータを設定します。
SNSでシェアする時や、PWAとして動作する時に利用されます。
設定可能な項目は以下のとおりです。

- **name**: Webサイトの名前
- **shortName**（任意）: ホーム画面で表示する名前
- **url**: WebサイトのURL
- **image**（任意）: Twitter等でシェアする際のアイキャッチ画像
- **twitter**（任意）: 作者のTwitterアカウント
- **themeColor**: サイト全体のテーマカラー
- **backgroundColor**: CSSがロードされるまでの背景色

## sidebar

サイドバーのメニューに表示するリンクを設定します。
リンクの設定は `[label, path]` の形式で表します。
pathの部分を入れ子にすることで、メニューに階層を作ることもできます。

例えば、このドキュメントの設定は以下のようになっています。

```typescript
sidebar: {
    en: [
        ["Home", "/"],
        ["Getting Started", "/getting-started"],
        ["Features", null, [ // リンクなしの入れ子
            ["MDX", "/features/mdx"],
            ["I18n", "/features/i18n"],
            ["PWA", "/features/pwa"]
        ]],
        ["Customize", "/customize", [ // リンクありの入れ子
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

サイドバーの設定は言語ごとに書く必要があります。
もし設定データが不足していたらビルドに失敗するので安心🤗

## header

ヘッダーに表示するリンクを設定します。

デフォルトのテーマでは、ヘッダーのリンクはPCでだけ表示されます。
モバイルでも表示したい場合はテーマ内の `Header.tsx` を編集してください。

```typescript
header: {
    en: [["GitHub", "https://github.com/fand/mdmt"]],
    ja: [
        ["GitHub", "https://github.com/fand/mdmt"],
        ["About Me", "https://twitter.com/amagitakayosi"]
    ]
}
```

ヘッダーの設定も、言語ごとに書く必要があります。よろしく〜

# テーマのカスタマイズ

テーマは `/theme` 内のコンポーネントで構成されています。
見たらわかると思うので適当にいじってください🙏
