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
    "url": "/MDMT/_next/static/chunks/commons.5fea9a0ae6a31b9c32e3.js",
    "revision": "e5544108d3f278a1cf3f8706de3456e0"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/_app.js",
    "revision": "a354ceb2b063971d7e45b84855eb6fcf"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/_error.js",
    "revision": "e10db935afcb6a49624d6faf8795f0e7"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/customize.js",
    "revision": "d2a69baf52ee3797483d7594d7b754c7"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/customize/config.js",
    "revision": "147278baa6f0940647e11073fd78ee74"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/customize/theme.js",
    "revision": "e06f0f700ce18a76efa6e23d514987cb"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/faq.js",
    "revision": "37c43880ac068add5d060f747b7ac785"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/features/i18n.js",
    "revision": "374db825794dc77c461d33a4a7632c5e"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/features/mdx.js",
    "revision": "de631a541df10c0c3f51e7113a04ee08"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/features/pwa.js",
    "revision": "b89763ade25f19abc023434fd60872b0"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/getting-started.js",
    "revision": "bef56442b73c36cffe39bb31c7280ed0"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/how-it-works.js",
    "revision": "ee1777e9486cbb5db68aa7f825f11c9c"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/index.js",
    "revision": "1684b9a88bf6675ba2a600b954e6d6bf"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja.js",
    "revision": "f7cfded9bcd5c90778b41a37e816dccf"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/customize.js",
    "revision": "db57bd346b42babb4b164848d743de5b"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/customize/config.js",
    "revision": "40d39d9bc53ba797dc708574708a3a69"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/customize/theme.js",
    "revision": "3620e08633e426f1db373bde5d9c4142"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/faq.js",
    "revision": "00b98bf4633006fe0628afb1a1b5024e"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/features/i18n.js",
    "revision": "2e390fbb5b737603720c72e541690539"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/features/mdx.js",
    "revision": "0d7dc4f9a28e9d65b998d84d1732a319"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/features/pwa.js",
    "revision": "1336ded9b6edd653fed3a7ff3b9f8139"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/getting-started.js",
    "revision": "6d223fa0ea8cbb9ad5d1575f046e160c"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/ja/how-it-works.js",
    "revision": "abe4d8d3d9ae850a54d5ef76c212c745"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT.js",
    "revision": "1684b9a88bf6675ba2a600b954e6d6bf"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/_app.js",
    "revision": "a354ceb2b063971d7e45b84855eb6fcf"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/_error.js",
    "revision": "e10db935afcb6a49624d6faf8795f0e7"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/customize.js",
    "revision": "d2a69baf52ee3797483d7594d7b754c7"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/customize/config.js",
    "revision": "147278baa6f0940647e11073fd78ee74"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/customize/theme.js",
    "revision": "e06f0f700ce18a76efa6e23d514987cb"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/faq.js",
    "revision": "37c43880ac068add5d060f747b7ac785"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/features/i18n.js",
    "revision": "374db825794dc77c461d33a4a7632c5e"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/features/mdx.js",
    "revision": "de631a541df10c0c3f51e7113a04ee08"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/features/pwa.js",
    "revision": "b89763ade25f19abc023434fd60872b0"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/getting-started.js",
    "revision": "bef56442b73c36cffe39bb31c7280ed0"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/how-it-works.js",
    "revision": "ee1777e9486cbb5db68aa7f825f11c9c"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja.js",
    "revision": "f7cfded9bcd5c90778b41a37e816dccf"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/customize.js",
    "revision": "db57bd346b42babb4b164848d743de5b"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/customize/config.js",
    "revision": "40d39d9bc53ba797dc708574708a3a69"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/customize/theme.js",
    "revision": "3620e08633e426f1db373bde5d9c4142"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/faq.js",
    "revision": "00b98bf4633006fe0628afb1a1b5024e"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/features/i18n.js",
    "revision": "2e390fbb5b737603720c72e541690539"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/features/mdx.js",
    "revision": "0d7dc4f9a28e9d65b998d84d1732a319"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/features/pwa.js",
    "revision": "1336ded9b6edd653fed3a7ff3b9f8139"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/getting-started.js",
    "revision": "6d223fa0ea8cbb9ad5d1575f046e160c"
  },
  {
    "url": "/MDMT/_next/static/kt7vJaTsk5rxJ9lg5ICxZ/pages/MDMT/ja/how-it-works.js",
    "revision": "abe4d8d3d9ae850a54d5ef76c212c745"
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
    "revision": "b3e1b51640d67ec965ade4c5c27f8235"
  },
  {
    "url": "/MDMT/customize.html",
    "revision": "3855d2a28f35b70c85c70abc5b4c8ab9"
  },
  {
    "url": "/MDMT/customize/config.html",
    "revision": "d41ea420cd9251e0bc5f05103a1e69fa"
  },
  {
    "url": "/MDMT/customize/theme.html",
    "revision": "b454b142787a5ec42cf509cce1927a31"
  },
  {
    "url": "/MDMT/faq.html",
    "revision": "44f546e920fcc01a5946ebde5bb69daf"
  },
  {
    "url": "/MDMT/features/i18n.html",
    "revision": "03309e664d5368616ea7091aa5f2f745"
  },
  {
    "url": "/MDMT/features/mdx.html",
    "revision": "2f3e4bd84bdabc74e94fabb983de83dd"
  },
  {
    "url": "/MDMT/features/pwa.html",
    "revision": "d29b33b28f91e8090e4546ac4bda8397"
  },
  {
    "url": "/MDMT/getting-started.html",
    "revision": "1d53e0ea4d2640c6f5f0cac860c20e13"
  },
  {
    "url": "/MDMT/how-it-works.html",
    "revision": "fedffbf454e1500bec7791d8db500dba"
  },
  {
    "url": "/MDMT/index.html",
    "revision": "0e9969804d94c015ee82eef12b340568"
  },
  {
    "url": "/MDMT/ja.html",
    "revision": "bca1ea3f15b066fe4d480c37ce0cf52a"
  },
  {
    "url": "/MDMT/ja/customize.html",
    "revision": "de245b05782713e2e622b4614bf21923"
  },
  {
    "url": "/MDMT/ja/customize/config.html",
    "revision": "56284f3e34c738ce966c5317bab873b9"
  },
  {
    "url": "/MDMT/ja/customize/theme.html",
    "revision": "22729b6bd8ba4d49e988a9f447e26669"
  },
  {
    "url": "/MDMT/ja/faq.html",
    "revision": "09d67ac2d4f470d719606dcb33f23f73"
  },
  {
    "url": "/MDMT/ja/features/i18n.html",
    "revision": "769b6fd413f0c1d388e5d14fb3ddf2a9"
  },
  {
    "url": "/MDMT/ja/features/mdx.html",
    "revision": "ac129d5e25396aa067ac2a0c0cc9bbf9"
  },
  {
    "url": "/MDMT/ja/features/pwa.html",
    "revision": "ceb1da39d1ed6e7b408fec838a8c1023"
  },
  {
    "url": "/MDMT/ja/getting-started.html",
    "revision": "70cfee83ab00e0456f09137710b41563"
  },
  {
    "url": "/MDMT/ja/how-it-works.html",
    "revision": "615367018b7cef34c5d3a614fba712fe"
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
