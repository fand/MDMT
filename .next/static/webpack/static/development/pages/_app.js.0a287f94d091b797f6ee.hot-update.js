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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburger */ "./components/hamburger.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/context */ "./lib/context.js");
var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/header.js";






var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "header__Nav",
  componentId: "sc-1o68dil-0"
})(["position:relative;width:100%;height:56px;", " transition:0.5s;background:transparent;.mobile{display:none;}@media (max-width:", "px){&.visible{background:linear-gradient( to bottom,rgba(0,0,0,1),rgba(0,0,0,0) );}.mobile{display:block;}.pc{display:none;}}"], ''
/* line-height: 56px; */
, _constants__WEBPACK_IMPORTED_MODULE_3__["default"].mobile);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1o68dil-1"
})(["height:100%;padding:4px 0;position:absolute;left:50%;transform:translateX(-50%);opacity:0;@media (max-width:", "px){transition:opacity 1s;&.visible{opacity:1;}}a,img{display:block;height:100%;text-decoration:none;}img{margin-left:-10px;}"], _constants__WEBPACK_IMPORTED_MODULE_3__["default"].mobile);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "header__Left",
  componentId: "sc-1o68dil-2"
})(["position:absolute;left:0;"]);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "header__Right",
  componentId: "sc-1o68dil-3"
})(["position:absolute;display:flex;right:0;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "header__Button",
  componentId: "sc-1o68dil-4"
})(["cursor:pointer;color:#ddd;user-select:none;& > img{display:block;width:56px;height:56px;padding:15px;font-size:24px;line-height:27px;}span{padding:15px;position:relative;display:block;top:-1em;}&:hover{opacity:1;color:#fff;}.inner{position:absolute;top:100%;right:0;background:rgba(0,0,0,0.8);color:#fff;text-align:center;a{text-decoration:none;color:white;&:hover{text-decoration:underline;}}i{margin-right:10px;text-align:center;}display:none;opacity:0;transition:opacity 0.5s;&.visible{width:180px;display:block;opacity:1;}&:before{content:\"\";position:absolute;top:-30px;right:12px;border:15px solid transparent;border-bottom:15px solid black;}}"]);

var Header = function Header(props) {
  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_5__["AppContext"]);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_5__["DispatchContext"]);

  var toggleMenu = function toggleMenu() {
    return dispatch({
      type: 'toggleMenu'
    });
  };

  var toggleLanguage = function toggleLanguage() {
    return dispatch({
      type: 'toggleLanguage'
    });
  };

  var cls = state.isHeaderVisible ? "visible" : ""; // const { lang } = props;

  var lang = 'en';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
    className: cls,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    className: cls,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: lang === "en" ? "/" : "/?lang=".concat(lang),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/logo_header.png",
    alt: "VEDA logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hamburger__WEBPACK_IMPORTED_MODULE_4__["default"], {
    active: state.isMenuVisible,
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, props.i18n && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    onClick: toggleLanguage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, lang === "en" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "\u65E5\u672C\u8A9E"), lang === "ja" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "English"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.0a287f94d091b797f6ee.hot-update.js.map