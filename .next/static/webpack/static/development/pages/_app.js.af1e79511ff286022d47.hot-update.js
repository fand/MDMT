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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/context */ "./lib/context.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./components/constants.js");



var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/Language.js";









var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Language__Wrapper",
  componentId: "sc-9kihq3-0"
})(["position:relative;height:100%;width:auto;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "Language__Button",
  componentId: "sc-9kihq3-1"
})(["color:", ";font-size:27px;padding:15px;border:none;background:transparent;cursor:pointer;outline:none;&:hover{opacity:0.8;}"], _constants__WEBPACK_IMPORTED_MODULE_11__["default"].fg);
var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Language__Dropdown",
  componentId: "sc-9kihq3-2"
})(["display:", ";position:absolute;top:100%;right:0;background:", ";.bg{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,0.5);z-index:2;}ul{position:relative;z-index:3;list-style:none;margin:0;padding:8px 20px;line-height:2em;color:", ";}li{white-space:nowrap;}"], function (p) {
  return p.open ? "block" : "none";
}, _constants__WEBPACK_IMPORTED_MODULE_11__["default"].bg, _constants__WEBPACK_IMPORTED_MODULE_11__["default"].fg);

var Language = function Language() {
  var state = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_9__["AppContext"]);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_9__["DispatchContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isActive = _useState2[0],
      setActivity = _useState2[1];

  var setLanguage = function setLanguage(lang) {
    return dispatch({
      type: "setLanguage",
      lang: lang
    });
  };

  var toggle = function toggle() {
    return setActivity(!isActive);
  }; // Create urls for translation


  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var currentLang = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_config__WEBPACK_IMPORTED_MODULE_10___default.a.languages).find(function (lang) {
    return router.pathname.match("^/".concat(lang, "/"));
  }) || _config__WEBPACK_IMPORTED_MODULE_10___default.a.defaultLanguage;
  var realPath = currentLang === _config__WEBPACK_IMPORTED_MODULE_10___default.a.defaultLanguage ? router.pathname : router.pathname.replace("/".concat(currentLang, "/"), '');

  var createUrl = function createUrl(lang) {
    return lang === _config__WEBPACK_IMPORTED_MODULE_10___default.a.defaultLanguage ? realPath : "/".concat(lang, "/").concat(realPath);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    type: "button",
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faGlobe"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Dropdown, {
    open: isActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "bg",
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_10___default.a.languages).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        id = _ref2[0],
        label = _ref2[1];

    return id === currentLang ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, label) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: id,
      onClick: function onClick() {
        return setLanguage(id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: createLangUrl(id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, label));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Language);

/***/ })

})
//# sourceMappingURL=_app.js.af1e79511ff286022d47.hot-update.js.map