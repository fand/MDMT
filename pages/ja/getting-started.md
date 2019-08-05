---
title: 使い方 💊 MDMT - Markdown Document Template \#MDMTjs
---
# 使い方

このページではMDMTを使ってあなたのWebサイトを作ります。
名前は……とりあえず `my-mdmt-website` とします。

## 1. MDMTをgit cloneする

MDMTをPCにダウンロードします。
ターミナルで以下のコマンドを順番に実行してください。

```
git clone https://github.com/fand/mdmt my-mdmt-website
cd my-mdmt-website
npm i
```

## 2. 開発サーバーを起動

`npm start` すると、このドキュメントが http://localhost:3000/ で起動します。

## 3. 記事を作成

MDMTでは、Markdownファイルを書くだけでページを作成できます。
`/pages/hello.md` を作成して、以下の内容を入力してください。

```
# Hello my website

Yo
```

http://localhost:3000/hello を開いてみると、いま書いたMarkdownの内容が表示されています！
hello.mdを編集すると、編集内容がリアルタイムに反映されます。

![Editing hello.md](/static/images/mdmt-live-hello.gif)

## 4. config.js を編集する

Webサイトの名前や公開URL、言語などを設定します。
とりあえず、frontmatter.title を `my-mdmt-website` にしてみますか。

![Editing title](/static/images/mdmt-live-title.gif)

ページのタイトルが `my-mdmt-website` になりましたね！

設定項目について、詳しいことは[設定のカスタマイズ](./customize/config)のページを見てください〜

## 5. ビルド

`Ctrl-C` で開発サーバーを終了しましょう。
次に `npm run build` を実行すると、 `docs/` フォルダに静的なHTML, JS, CSSが出力されます！

あとは `docs/` を適当に公開してください〜
GitHub Pagesで公開する場合は、生成された `/docs` をそのままコミット & pushして、レポジトリの設定を変更すればOK!
