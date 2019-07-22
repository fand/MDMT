webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./components/constants.js");







var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/header.js";




var Nav = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__Nav",
  componentId: "sc-1o68dil-0"
})(["position:relative;width:100%;height:56px;line-height:56px;transition:0.5s;background:transparent;.mobile{display:none;}@media (max-width:", "px){&.visible{background:linear-gradient( to bottom,rgba(0,0,30,1),rgba(0,0,30,0.5) );}.mobile{display:block;}.pc{display:none;}}"], _constants__WEBPACK_IMPORTED_MODULE_10__["default"].mobile);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1o68dil-1"
})(["height:100%;padding:4px 0;position:absolute;left:50%;transform:translateX(-50%);opacity:0;@media (max-width:", "px){transition:opacity 1s;&.visible{opacity:1;}}a,img{display:block;height:100%;text-decoration:none;}img{margin-left:-10px;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["default"].mobile);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__Left",
  componentId: "sc-1o68dil-2"
})(["position:absolute;left:0;"]);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__Right",
  componentId: "sc-1o68dil-3"
})(["position:absolute;display:flex;right:0;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "header__Button",
  componentId: "sc-1o68dil-4"
})(["cursor:pointer;color:#ddd;user-select:none;& > img{display:block;width:56px;height:56px;padding:15px;font-size:24px;line-height:27px;}span{padding:15px;position:relative;display:block;top:-1em;}&:hover{opacity:1;color:#fff;}.inner{position:absolute;top:100%;right:0;background:rgba(0,0,0,0.8);color:#fff;text-align:center;a{text-decoration:none;color:white;&:hover{text-decoration:underline;}}i{margin-right:10px;text-align:center;}display:none;opacity:0;transition:opacity 0.5s;&.visible{width:180px;display:block;opacity:1;}&:before{content:\"\";position:absolute;top:-30px;right:12px;border:15px solid transparent;border-bottom:15px solid black;}}"]);

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleMenu", function () {// this.props.dispatch(toggleMenu());
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleLanguage", function () {// this.props.dispatch(
      //     setLanguage(this.props.lang === "en" ? "ja" : "en")
      // );
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var lang = (location.search.match(/lang=(en|ja)/) || [])[1]; // if (lang && lang !== this.props.lang) {
      //     this.props.dispatch(setLanguage(lang));
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var cls = this.props.isHeaderVisible ? "visible" : "";
      var lang = this.props.lang;
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Nav, {
        className: cls,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Logo, {
        className: cls,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: lang === "en" ? "/" : "/?lang=".concat(lang),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("img", {
        src: "/static/images/logo_header.png",
        alt: "VEDA logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Left, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Button, {
        className: "mobile",
        onClick: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("img", {
        src: "/static/images/i_menu.png",
        alt: "Menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Right, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, this.props.i18n && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Button, {
        onClick: this.toggleLanguage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, lang === "en" && react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "\u65E5\u672C\u8A9E"), lang === "ja" && react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "English"))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.9b56e957ee63a08a2193.hot-update.js.map