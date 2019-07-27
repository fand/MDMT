webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/hamburger.js":
/*!*********************************!*\
  !*** ./components/hamburger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/hamburger.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var active = _ref.active,
      onClick = _ref.onClick;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Arrow, {
    active: state.isMenuVisible,
    borderRadius: "2",
    color: constants.fg,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  });
});

/***/ }),

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
})(["position:relative;width:100%;height:56px;", " transition:0.5s;background:transparent;.mobile{display:none;}@media (max-width:", "px){&.visible{background:linear-gradient( to bottom,rgba(0,0,30,1),rgba(0,0,30,0.5) );}.mobile{display:block;}.pc{display:none;}}"], ''
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
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

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
false,

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
false,

/***/ "./node_modules/babel-runtime/core-js/map.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
false,

/***/ "./node_modules/babel-runtime/helpers/extends.js":
false,

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
false,

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
false,

/***/ "./node_modules/react-burgers/dist/base.js":
false,

/***/ "./node_modules/react-burgers/dist/default-props.js":
false,

/***/ "./node_modules/react-burgers/dist/index.js":
false,

/***/ "./node_modules/react-burgers/dist/types/arrow-alt-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/arrow-alt.js":
false,

/***/ "./node_modules/react-burgers/dist/types/arrow-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/arrow-turn-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/arrow-turn.js":
false,

/***/ "./node_modules/react-burgers/dist/types/arrow.js":
false,

/***/ "./node_modules/react-burgers/dist/types/boring.js":
false,

/***/ "./node_modules/react-burgers/dist/types/collapse-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/collapse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/elastic-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/elastic.js":
false,

/***/ "./node_modules/react-burgers/dist/types/emphatic.js":
false,

/***/ "./node_modules/react-burgers/dist/types/minus.js":
false,

/***/ "./node_modules/react-burgers/dist/types/perspective-x-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/perspective-x-y-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/perspective-x-y.js":
false,

/***/ "./node_modules/react-burgers/dist/types/perspective-x.js":
false,

/***/ "./node_modules/react-burgers/dist/types/perspective-y-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/perspective-y.js":
false,

/***/ "./node_modules/react-burgers/dist/types/slider-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/slider.js":
false,

/***/ "./node_modules/react-burgers/dist/types/spin-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/spin.js":
false,

/***/ "./node_modules/react-burgers/dist/types/spring-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/spring.js":
false,

/***/ "./node_modules/react-burgers/dist/types/squeeze.js":
false,

/***/ "./node_modules/react-burgers/dist/types/stand-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/stand.js":
false,

/***/ "./node_modules/react-burgers/dist/types/vortex-reverse.js":
false,

/***/ "./node_modules/react-burgers/dist/types/vortex.js":
false,

/***/ "./node_modules/react-burgers/node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/react-burgers/node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/react-burgers/node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/react-burgers/node_modules/styled-jsx/style.js":
false,

/***/ "./node_modules/string-hash/index.js":
false

})
//# sourceMappingURL=_app.js.d22fe37d501b7c19856e.hot-update.js.map