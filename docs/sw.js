/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/MDMT/_next/static/chunks/cb1608f2.037aac15e38c684d5e0f.js",
    "revision": "760ec92d2c11f3764d65af0ebd61c9ec"
  },
  {
    "url": "/MDMT/_next/static/chunks/f28ad009f8ab242302ca3cebe8236fe33a8ce40d.5bbdc593d9d01ec616ca.js",
    "revision": "46ad68ebec6f4114548b720bf851cabf"
  },
  {
    "url": "/MDMT/_next/static/chunks/framework.01fb8c9091ebbaaf6515.js",
    "revision": "8dbfd54516c12914d3e0cd417cd67882"
  },
  {
    "url": "/MDMT/_next/static/runtime/main-63277fcfabfc5e39c681.js",
    "revision": "9198d5bb9d2b1de224deac4342c71a68"
  },
  {
    "url": "/MDMT/_next/static/runtime/polyfills-e8a67dd7d670b2147438.js",
    "revision": "5d6f7b5b57595e96a24b5568fc330549"
  },
  {
    "url": "/MDMT/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",
    "revision": "f5e6e2fca3144cc944812cfa3547f475"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/_app.js",
    "revision": "7be6178ad686bdf1db907d7840e2e23e"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/_error.js",
    "revision": "536c313b8df95c769b9746a8f8118695"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/customize.js",
    "revision": "e91c99738640cae7e3df0548bd8e6b79"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/customize/config.js",
    "revision": "f1a8044841bb327bd6a2a069ee73112e"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/customize/theme.js",
    "revision": "c99f2eb77ac4bdbc2b80aa7c30ba20f5"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/faq.js",
    "revision": "06832051d6bcbaec3e61fe1dcdd85d4e"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/features/i18n.js",
    "revision": "3fd8985902d95f951cd7a38e84422e2a"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/features/mdx.js",
    "revision": "76ddce311c131883ba892606af90f731"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/features/pwa.js",
    "revision": "d8d9db20b619861e3a0bcbd896299e86"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/getting-started.js",
    "revision": "698306982b63617a154811da38de8504"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/how-it-works.js",
    "revision": "3cf94699927b7732ef3ed9b3139c9894"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/index.js",
    "revision": "eaa501c42aac6df0b64e4fd089df8f0a"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja.js",
    "revision": "49fff46a057042d570bd1bc1c52e2716"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/customize.js",
    "revision": "a00405a00e73bd900c92a86f05b0f070"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/customize/config.js",
    "revision": "87d3e3424787b3d7cb8b92d37c8677e6"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/customize/theme.js",
    "revision": "033e538cc3d1b9867fcf9276d4c15651"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/faq.js",
    "revision": "e782b9441f13a4fe9a1af66fd4486e1e"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/features/i18n.js",
    "revision": "13649792294630de6f4d453f3f9f7eb4"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/features/mdx.js",
    "revision": "bc1290d141588e2114e9a1fc800ee446"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/features/pwa.js",
    "revision": "7d1e3b9943d8d64e7a8ce2af2e8d59de"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/getting-started.js",
    "revision": "1ca539875453fe29ca7083040c5e1a75"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/ja/how-it-works.js",
    "revision": "9734794d5e6a12908331a928256e66ac"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT.js",
    "revision": "eaa501c42aac6df0b64e4fd089df8f0a"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/_app.js",
    "revision": "7be6178ad686bdf1db907d7840e2e23e"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/_error.js",
    "revision": "536c313b8df95c769b9746a8f8118695"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/customize.js",
    "revision": "e91c99738640cae7e3df0548bd8e6b79"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/customize/config.js",
    "revision": "f1a8044841bb327bd6a2a069ee73112e"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/customize/theme.js",
    "revision": "c99f2eb77ac4bdbc2b80aa7c30ba20f5"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/faq.js",
    "revision": "06832051d6bcbaec3e61fe1dcdd85d4e"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/features/i18n.js",
    "revision": "3fd8985902d95f951cd7a38e84422e2a"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/features/mdx.js",
    "revision": "76ddce311c131883ba892606af90f731"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/features/pwa.js",
    "revision": "d8d9db20b619861e3a0bcbd896299e86"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/getting-started.js",
    "revision": "698306982b63617a154811da38de8504"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/how-it-works.js",
    "revision": "3cf94699927b7732ef3ed9b3139c9894"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja.js",
    "revision": "49fff46a057042d570bd1bc1c52e2716"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/customize.js",
    "revision": "a00405a00e73bd900c92a86f05b0f070"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/customize/config.js",
    "revision": "87d3e3424787b3d7cb8b92d37c8677e6"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/customize/theme.js",
    "revision": "033e538cc3d1b9867fcf9276d4c15651"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/faq.js",
    "revision": "e782b9441f13a4fe9a1af66fd4486e1e"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/features/i18n.js",
    "revision": "13649792294630de6f4d453f3f9f7eb4"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/features/mdx.js",
    "revision": "bc1290d141588e2114e9a1fc800ee446"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/features/pwa.js",
    "revision": "7d1e3b9943d8d64e7a8ce2af2e8d59de"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/getting-started.js",
    "revision": "1ca539875453fe29ca7083040c5e1a75"
  },
  {
    "url": "/MDMT/_next/static/UGNAlAwU2Scho0Qlyj_jS/pages/MDMT/ja/how-it-works.js",
    "revision": "9734794d5e6a12908331a928256e66ac"
  },
  {
    "url": "/MDMT/404.html",
    "revision": "9f984d0b8b7434c5c389bc4978dc0ced"
  },
  {
    "url": "/MDMT/customize.html",
    "revision": "4df1b8ec2e28e627069ffbd2fc536929"
  },
  {
    "url": "/MDMT/customize/config.html",
    "revision": "0b2e52337f089487f6a320e5107bac14"
  },
  {
    "url": "/MDMT/customize/theme.html",
    "revision": "9265c2c9625e822bc2c4971ea0768e8f"
  },
  {
    "url": "/MDMT/faq.html",
    "revision": "97f736ae8b7c0c35eb6de23cd1bdcf8c"
  },
  {
    "url": "/MDMT/features/i18n.html",
    "revision": "b7ae4f6cbc287ab63edd842b814c6bb8"
  },
  {
    "url": "/MDMT/features/mdx.html",
    "revision": "4cdfdd16e37773015d89f31f079c6b82"
  },
  {
    "url": "/MDMT/features/pwa.html",
    "revision": "383d0b01f82011e094c53cbd1e5d6727"
  },
  {
    "url": "/MDMT/getting-started.html",
    "revision": "a842296797c92e8bd9d156205553a859"
  },
  {
    "url": "/MDMT/how-it-works.html",
    "revision": "cb4be9d1ff160b6b4cb05fa71fb72e4a"
  },
  {
    "url": "/MDMT/index.html",
    "revision": "8b36956082d2be3efdf86226344b88a2"
  },
  {
    "url": "/MDMT/ja.html",
    "revision": "839bcfabe7d8834881e5beecfcb0bc61"
  },
  {
    "url": "/MDMT/ja/customize.html",
    "revision": "0d0be8bfae5ada43fb04fa3b47da8a55"
  },
  {
    "url": "/MDMT/ja/customize/config.html",
    "revision": "f747c523902b15b993efe108f325a044"
  },
  {
    "url": "/MDMT/ja/customize/theme.html",
    "revision": "0bb749f877d72b75c2002bd24f577ecd"
  },
  {
    "url": "/MDMT/ja/faq.html",
    "revision": "257493b05f9331d34f3ab0ea1612ffc9"
  },
  {
    "url": "/MDMT/ja/features/i18n.html",
    "revision": "10a109d6262d7522a4bda05aa01ba26e"
  },
  {
    "url": "/MDMT/ja/features/mdx.html",
    "revision": "2ddaa5935c7abb27c4e3d0dff5d081a1"
  },
  {
    "url": "/MDMT/ja/features/pwa.html",
    "revision": "24a471a39410c7b4cb79f2b10636be9c"
  },
  {
    "url": "/MDMT/ja/getting-started.html",
    "revision": "82478f09d108b0d7d67e5a4fa95995a7"
  },
  {
    "url": "/MDMT/ja/how-it-works.html",
    "revision": "23156ef7117023791e34775553030423"
  },
  {
    "url": "/MDMT/static/css/hamburgers.css",
    "revision": "2aeedfb434a3ba8aa3dc175010f1bbf6"
  },
  {
    "url": "/MDMT/static/images/favicon-180.png",
    "revision": "6083624a8ae0e68a575b6f328173c9a6"
  },
  {
    "url": "/MDMT/static/images/favicon-192.png",
    "revision": "5638a022d4528b29d9f9e92e4ca92000"
  },
  {
    "url": "/MDMT/static/images/favicon-256.png",
    "revision": "23c3185780f187e39491dad4b6d97fb9"
  },
  {
    "url": "/MDMT/static/images/favicon-512.png",
    "revision": "d00498c7a7b25f29ec43f343aa78f181"
  },
  {
    "url": "/MDMT/static/images/favicon.ico",
    "revision": "b0b4a82aed9ad5b0c0de958324c053ac"
  },
  {
    "url": "/MDMT/static/images/hashtag.png",
    "revision": "91193c45780ff1060ccaadb81e54d2ec"
  },
  {
    "url": "/MDMT/static/images/hashtag.webp",
    "revision": "b67a94418a2279fc3679f8a50bc6c356"
  },
  {
    "url": "/MDMT/static/images/i_menu.png",
    "revision": "1ee97ab836e4d5073034883702b7ca51"
  },
  {
    "url": "/MDMT/static/images/logo_white.png",
    "revision": "ee6cac2e4c4d1fe6daf29c216cee09d0"
  },
  {
    "url": "/MDMT/static/images/logo.png",
    "revision": "e9a56e79ac434368ff632af193a3e3da"
  },
  {
    "url": "/MDMT/static/images/mdmt-live-hello.gif",
    "revision": "2df4e096608b3a27bb86b4de11054fca"
  },
  {
    "url": "/MDMT/static/images/mdmt-live-title.gif",
    "revision": "9080374da1035fa255c6d03a953c9f9f"
  },
  {
    "url": "/MDMT/static/images/ogimage.png",
    "revision": "92ea39600713234443ae29a0421956d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
