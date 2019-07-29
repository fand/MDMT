webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/context */ "./lib/context.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hamburger */ "./components/hamburger.js");
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Language */ "./components/Language.js");
var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/header.js";








var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "header__Nav",
  componentId: "sc-1o68dil-0"
})(["position:relative;width:100%;height:56px;display:flex;justify-content:space-between;transition:0.5s;background:transparent;@media (max-width:", "px){&.visible{background:linear-gradient( to bottom,", ",", " );}}"], _constants__WEBPACK_IMPORTED_MODULE_5__["default"].mobile, function (p) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["opacify"])(1, p.color);
}, function (p) {
  return p.color;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1o68dil-1"
})(["height:100%;padding:4px 0;position:absolute;left:50%;transform:translateX(-50%);opacity:0;@media (max-width:", "px){transition:opacity 1s;&.visible{opacity:1;}}"], _constants__WEBPACK_IMPORTED_MODULE_5__["default"].mobile);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "header__Left",
  componentId: "sc-1o68dil-2"
})(["", " ", ""], ""
/* position: absolute; */
, ""
/* left: 0; */
);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "header__Right",
  componentId: "sc-1o68dil-3"
})(["", " ", " ", ""], ""
/* position: absolute; */
, ""
/* display: flex; */
, ""
/* right: 0; */
);

var Header = function Header(props) {
  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_4__["AppContext"]);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_4__["DispatchContext"]);

  var toggleMenu = function toggleMenu() {
    return dispatch({
      type: state.isMenuVisible ? "hideMenu" : "showMenu"
    });
  };

  var cls = state.isHeaderVisible ? "visible" : ""; // const { lang } = state;

  var _en = "en",
      lang = _en.lang;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
    className: cls,
    color: state.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    className: cls,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: lang === "en" ? "/" : "/?lang=".concat(lang),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/logo.png",
    alt: "VEDA logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    className: "mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hamburger__WEBPACK_IMPORTED_MODULE_6__["default"], {
    active: state.isMenuVisible,
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Language__WEBPACK_IMPORTED_MODULE_7__["default"], {
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.550bc1add9617598df29.hot-update.js.map