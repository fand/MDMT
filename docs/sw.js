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
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/_app.js",
    "revision": "a9ca847f33ff428832ffb27581a1fd30"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/_error.js",
    "revision": "e10db935afcb6a49624d6faf8795f0e7"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/customize.js",
    "revision": "ec53066baeefb1bb64656fc0e808126b"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/customize/config.js",
    "revision": "eed5c0ba61e38c4800f889c6c942ce5e"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/customize/theme.js",
    "revision": "e06f0f700ce18a76efa6e23d514987cb"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/faq.js",
    "revision": "37c43880ac068add5d060f747b7ac785"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/features/i18n.js",
    "revision": "374db825794dc77c461d33a4a7632c5e"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/features/mdx.js",
    "revision": "de631a541df10c0c3f51e7113a04ee08"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/features/pwa.js",
    "revision": "b89763ade25f19abc023434fd60872b0"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/getting-started.js",
    "revision": "bef56442b73c36cffe39bb31c7280ed0"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/how-it-works.js",
    "revision": "ee1777e9486cbb5db68aa7f825f11c9c"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/index.js",
    "revision": "1684b9a88bf6675ba2a600b954e6d6bf"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja.js",
    "revision": "f7cfded9bcd5c90778b41a37e816dccf"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/customize.js",
    "revision": "dae15956dab93ab876eca49922cfea7c"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/customize/config.js",
    "revision": "40d39d9bc53ba797dc708574708a3a69"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/customize/theme.js",
    "revision": "44929335d885fd370fe910f0cf6adc22"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/faq.js",
    "revision": "00b98bf4633006fe0628afb1a1b5024e"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/features/i18n.js",
    "revision": "2e390fbb5b737603720c72e541690539"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/features/mdx.js",
    "revision": "0d7dc4f9a28e9d65b998d84d1732a319"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/features/pwa.js",
    "revision": "1336ded9b6edd653fed3a7ff3b9f8139"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/getting-started.js",
    "revision": "6d223fa0ea8cbb9ad5d1575f046e160c"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/ja/how-it-works.js",
    "revision": "abe4d8d3d9ae850a54d5ef76c212c745"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT.js",
    "revision": "1684b9a88bf6675ba2a600b954e6d6bf"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/_app.js",
    "revision": "a9ca847f33ff428832ffb27581a1fd30"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/_error.js",
    "revision": "e10db935afcb6a49624d6faf8795f0e7"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/customize.js",
    "revision": "ec53066baeefb1bb64656fc0e808126b"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/customize/config.js",
    "revision": "eed5c0ba61e38c4800f889c6c942ce5e"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/customize/theme.js",
    "revision": "e06f0f700ce18a76efa6e23d514987cb"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/faq.js",
    "revision": "37c43880ac068add5d060f747b7ac785"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/features/i18n.js",
    "revision": "374db825794dc77c461d33a4a7632c5e"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/features/mdx.js",
    "revision": "de631a541df10c0c3f51e7113a04ee08"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/features/pwa.js",
    "revision": "b89763ade25f19abc023434fd60872b0"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/getting-started.js",
    "revision": "bef56442b73c36cffe39bb31c7280ed0"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/how-it-works.js",
    "revision": "ee1777e9486cbb5db68aa7f825f11c9c"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja.js",
    "revision": "f7cfded9bcd5c90778b41a37e816dccf"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/customize.js",
    "revision": "dae15956dab93ab876eca49922cfea7c"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/customize/config.js",
    "revision": "40d39d9bc53ba797dc708574708a3a69"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/customize/theme.js",
    "revision": "44929335d885fd370fe910f0cf6adc22"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/faq.js",
    "revision": "00b98bf4633006fe0628afb1a1b5024e"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/features/i18n.js",
    "revision": "2e390fbb5b737603720c72e541690539"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/features/mdx.js",
    "revision": "0d7dc4f9a28e9d65b998d84d1732a319"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/features/pwa.js",
    "revision": "1336ded9b6edd653fed3a7ff3b9f8139"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/getting-started.js",
    "revision": "6d223fa0ea8cbb9ad5d1575f046e160c"
  },
  {
    "url": "/MDMT/_next/static/8iFGaUIbhlOMzQR7q0cBi/pages/MDMT/ja/how-it-works.js",
    "revision": "abe4d8d3d9ae850a54d5ef76c212c745"
  },
  {
    "url": "/MDMT/_next/static/chunks/commons.5fea9a0ae6a31b9c32e3.js",
    "revision": "e5544108d3f278a1cf3f8706de3456e0"
  },
  {
    "url": "/MDMT/_next/static/runtime/main-84dbb8a56cf7d0b55d28.js",
    "revision": "808b8cbaf9755bbc2e6c028cae52d48a"
  },
  {
    "url": "/MDMT/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "83bc028c0a2efd8e4c3dcbd8b23289bb"
  },
  {
    "url": "/MDMT/404.html",
    "revision": "9c5be1fd2030a6af7a20eabd88087d10"
  },
  {
    "url": "/MDMT/customize.html",
    "revision": "b173d3bdde73c906155b36e15ea10823"
  },
  {
    "url": "/MDMT/customize/config.html",
    "revision": "5b9381617faddec03b19977e56062c3a"
  },
  {
    "url": "/MDMT/customize/theme.html",
    "revision": "be23468845a289dd6ff96c471a1ebff0"
  },
  {
    "url": "/MDMT/faq.html",
    "revision": "294bdd7daf7de994c5559a4e7f302fe4"
  },
  {
    "url": "/MDMT/features/i18n.html",
    "revision": "94f59f7b6a47f139168a990b181ef6ce"
  },
  {
    "url": "/MDMT/features/mdx.html",
    "revision": "590c1cf9d5d6799fccff6d9d000c7662"
  },
  {
    "url": "/MDMT/features/pwa.html",
    "revision": "507b3165b4460aecd19f3ef286343ac6"
  },
  {
    "url": "/MDMT/getting-started.html",
    "revision": "febd893ffa4eef62b6406def139adf47"
  },
  {
    "url": "/MDMT/how-it-works.html",
    "revision": "9c2449c571608d59dee1b377cbd60f09"
  },
  {
    "url": "/MDMT/index.html",
    "revision": "8fdf14531105e875491a69ca5d2b4c25"
  },
  {
    "url": "/MDMT/ja.html",
    "revision": "25c298ecbc8ee4c8af25cc8ffe9de646"
  },
  {
    "url": "/MDMT/ja/customize.html",
    "revision": "a40d45d759d3f770aa5e4ec089a798b6"
  },
  {
    "url": "/MDMT/ja/customize/config.html",
    "revision": "f7678fb484361eea7b85a3f5405bb4fd"
  },
  {
    "url": "/MDMT/ja/customize/theme.html",
    "revision": "64fd52fc598ebfb19914377350ad1290"
  },
  {
    "url": "/MDMT/ja/faq.html",
    "revision": "d8b003bc62b64643cbc341906ae2283f"
  },
  {
    "url": "/MDMT/ja/features/i18n.html",
    "revision": "f4ef7fad335b59964ddef69549c5a655"
  },
  {
    "url": "/MDMT/ja/features/mdx.html",
    "revision": "2fcc3f874a2ba505937c579f82068d5f"
  },
  {
    "url": "/MDMT/ja/features/pwa.html",
    "revision": "21c6a9edc3c0d919381715cee88911f2"
  },
  {
    "url": "/MDMT/ja/getting-started.html",
    "revision": "adbbbcb1346d5531e6e20d0a1b7b3ad1"
  },
  {
    "url": "/MDMT/ja/how-it-works.html",
    "revision": "038027bf80d69a88121787fcf673bbdc"
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
