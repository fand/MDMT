---
title: PWA 💊 MDMT - Markdown Document Template \#MDMTjs
color: \#EE33BB
---
# PWA

MDMTはデフォルトでPWA対応しています。
といってもprecache有効にしてオフラインで動くようにするくらいだけど……

`npm run build` を実行すると、以下のファイルが自動で生成されます。

- `static/manifest.json`: PWAの設定ファイル
- `docs/sw.js`: [Workbox](https://developers.google.com/web/tools/workbox/)で生成されたServiceWorker本体

生成された `sw.js` は、 `components/ServiceWorker.tsx` で読み込んでいます。
ロードするタイミングを変更したい場合は適宜いじってください。
