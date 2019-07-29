webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: getPathForLang, prefixUrl, removePrefixFromPath, removeLanguageFromPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathForLang", function() { return getPathForLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixUrl", function() { return prefixUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePrefixFromPath", function() { return removePrefixFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLanguageFromPath", function() { return removeLanguageFromPath; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next.config */ "./next.config.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_1__);


var getPathForLang = function getPathForLang(lang, path) {
  if (lang === _config__WEBPACK_IMPORTED_MODULE_0___default.a.defaultLanguage) {
    return path;
  }

  if (path === '/') {
    return "/".concat(lang);
  }

  return "/".concat(lang).concat(path);
}; // Convert root-relative URLs

var prefixUrl = function prefixUrl(url) {
  var m = url.match(/^\/(.*)$/);

  if (m) {
    var prefix = _next_config__WEBPACK_IMPORTED_MODULE_1___default.a.assetPrefix;
    return "".concat(prefix, "/").concat(m[1]);
  }

  return url;
};
var removePrefixFromPath = function removePrefixFromPath(path) {
  var prefix = _next_config__WEBPACK_IMPORTED_MODULE_1___default.a.assetPrefix || '';
  var prefixRe = new RegExp("^/".concat(prefix));
  var pathWithoutPrefix = path.replace(prefixRe, '');
  return pathWithoutPrefix || '/';
};
var removeLanguageFromPath = function removeLanguageFromPath(path, currentLanguage) {
  if (currentLanguage === _config__WEBPACK_IMPORTED_MODULE_0___default.a.defaultLanguage) {
    return path;
  }

  var langRe = new RegExp("^/".concat(currentLanguage));
  var pathWithoutLang = path.replace(langRe, '');
  return pathWithoutLang || '/';
};

/***/ })

})
//# sourceMappingURL=_app.js.d265bf8c152ebaa63a4d.hot-update.js.map