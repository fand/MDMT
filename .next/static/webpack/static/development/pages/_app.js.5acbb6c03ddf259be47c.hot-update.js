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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/context */ "./lib/context.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./components/constants.js");


var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/Language.js";







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Language__Wrapper",
  componentId: "sc-9kihq3-0"
})(["position:relative;height:100%;width:auto;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "Language__Button",
  componentId: "sc-9kihq3-1"
})(["color:", ";font-size:27px;padding:15px;border:none;background:transparent;cursor:pointer;outline:none;&:hover{opacity:0.8;}"], _constants__WEBPACK_IMPORTED_MODULE_8__["default"].fg);
var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Language__Dropdown",
  componentId: "sc-9kihq3-2"
})(["display:", ";position:absolute;top:100%;right:0;background:", ";z-index:0;.bg{position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,0.5);z-index:-1;}ul{z-index:3;list-style:none;margin:0;padding:8px 20px;line-height:2em;color:", ";}li{white-space:nowrap;}"], function (p) {
  return p.open ? 'block' : 'none';
}, _constants__WEBPACK_IMPORTED_MODULE_8__["default"].bg, _constants__WEBPACK_IMPORTED_MODULE_8__["default"].fg);

var Language = function Language() {
  var state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_6__["AppContext"]);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_6__["DispatchContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isActive = _useState2[0],
      setActivity = _useState2[1];

  var setLanguage = function setLanguage(lang) {
    return dispatch({
      type: 'setLanguage',
      lang: lang
    });
  };

  var toggle = function toggle() {
    return setActivity(!isActive);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    type: "button",
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGlobe"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dropdown, {
    open: isActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "bg",
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_7___default.a.languages).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        id = _ref2[0],
        label = _ref2[1];

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: id,
      onClick: function onClick() {
        return setLanguage(id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, label);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Language);

/***/ })

})
//# sourceMappingURL=_app.js.5acbb6c03ddf259be47c.hot-update.js.map