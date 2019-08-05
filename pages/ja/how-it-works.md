---
title: 仕組み 💊 MDMT - Markdown Document Template \#MDMTjs
---
# 仕組み

このページでは、MDMTがどうやって動いてるかを説明します。
カスタマイズする時の参考にどうぞ。

## ディレクトリ構造

MDMTは以下のファイル/ディレクトリからなっています。

- `pages/`: ページに対応するMarkdown置き場
- `components/`: Reactコンポーネント
- `static/`: 画像等の静的ファイル
- `lib/`: MDMTの本体
- `scripts/`: ビルド時に使用するスクリプト置き場
- `docs/`: 出力ディレクトリ
- `config.js`: 設定ファイル

記事を作成/編集するときは `pages/`、 デザインを変更するときは `components/`、データフローをいじりたい時は `lib/` を見ると良いです。

## データフロー

アプリ全体の状態管理には、React Hooksを利用してReduxライクなシステムを作って利用しています。
状態とアクションは `lib/store.ts`, 状態の受け渡しは `lib/context.ts` をご覧ください。

## ビルドの流れ

package.jsonを見ると、ビルドスクリプトは以下のようになっています。

```js
"build": "NODE_ENV=production run-s clean build:manifest build:build build:export build:nojekyll build:preload build:sw",
```

なんか複雑に見えるけど、実際は以下の処理を順番にやってるだけです。

- **clean**: 古い出力ファイルを削除
- **build:manifest**: config.jsからmanifest.jsonを生成
- **build:build**, **build:export**: `docs/` に静的ファイルを生成
- **build:nojekyll**: GitHub Pages対応
- **build:preload**: GitHub Pages対応
- **build:sw**: ServiceWorkerファイル作成

preload辺りはそのうち要らなくなるかも。
なんか提案あったら気軽におしえてください〜
