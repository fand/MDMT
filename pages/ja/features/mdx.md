---
title: MDX 💊 MDMT - Markdown Document Template \#MDMTjs
color: \#EE33BB
---
# MDX

MDMTは、Markdown拡張の一種であるMDXを使っています。
MDXでは文中にReactコンポーネントを埋め込むことができます。

詳しくはMDXのドキュメントをご覧ください。
https://mdxjs.com/

MDXのパースには[remark](https://github.com/remarkjs/remark)を使用しています。
Markdownの書き心地をGitHubに近づけるため、remarkのプラグインを使用しています。
remarkプラグインを変更したい場合は `lib/mdx-loader.js` を編集してください。
