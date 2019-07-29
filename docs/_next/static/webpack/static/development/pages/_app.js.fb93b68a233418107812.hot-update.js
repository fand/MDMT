webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Language.js":
/*!********************************!*\
  !*** ./components/Language.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/context */ "./lib/context.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/hooks */ "./lib/hooks.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");


var _jsxFileName = "/Users/amagi/src/github.com/fand/mdmt/components/Language.js";











var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Language__Wrapper",
  componentId: "sc-9kihq3-0"
})(["position:relative;height:100%;width:auto;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "Language__Button",
  componentId: "sc-9kihq3-1"
})(["color:", ";font-size:27px;padding:15px;border:none;background:transparent;cursor:pointer;outline:none;&:hover{opacity:0.8;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["default"].fg);
var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Language__Dropdown",
  componentId: "sc-9kihq3-2"
})(["display:", ";position:absolute;top:calc(100% + 8px);right:8px;background:", ";.bg{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,0.3);z-index:2;}ul{position:relative;z-index:3;list-style:none;margin:0 8px;padding:10px 20px;line-height:2em;color:", ";}li{position:relative;white-space:nowrap;&.is-active:before{content:\"\";border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent ", ";position:absolute;left:-16px;top:10px;}}a,a:visited{color:", ";}"], function (p) {
  return p.open ? "block" : "none";
}, _constants__WEBPACK_IMPORTED_MODULE_10__["default"].bg, _constants__WEBPACK_IMPORTED_MODULE_10__["default"].fg, _constants__WEBPACK_IMPORTED_MODULE_10__["default"].fg, _constants__WEBPACK_IMPORTED_MODULE_10__["default"].fg);

var Language = function Language() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isActive = _useState2[0],
      setActivity = _useState2[1];

  var hide = function hide() {
    return setActivity(false);
  };

  var toggle = function toggle() {
    return setActivity(!isActive);
  };

  var lang = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_11__["useLanguage"])(); // Create urls for translation

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var path = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_12__["removeLanguageFromPath"])(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_12__["removePrefixFromPath"])(router.asPath));

  var createLangUrl = function createLangUrl(langId) {
    return Object(_lib_utils__WEBPACK_IMPORTED_MODULE_12__["getPathForLang"])(langId, path);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    type: "button",
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGlobe"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dropdown, {
    open: isActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "bg",
    onClick: hide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_9___default.a.languages).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        langId = _ref2[0],
        label = _ref2[1];

    return langId === lang ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: langId,
      className: "is-active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: langId,
      onClick: hide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: createLangUrl(langId),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, label)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Language);

/***/ })

})
//# sourceMappingURL=_app.js.fb93b68a233418107812.hot-update.js.map