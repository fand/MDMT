webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meta */ "./components/meta.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./background */ "./components/background.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/context */ "./lib/context.js");
var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/Layout.js";










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Layout__Wrapper",
  componentId: "bk4rf0-0"
})(["position:fixed;top:0;left:0;height:100%;width:100vw;overflow:visible;display:flex;transition:left 0.3s;@media (max-width:", "px){width:auto;left:-100vw;&.menu{left:0;}}"], _constants__WEBPACK_IMPORTED_MODULE_4__["default"].mobile);
var SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Layout__SidebarWrapper",
  componentId: "bk4rf0-1"
})(["width:270px;-webkit-overflow-scrolling:touch;@media (max-width:", "px){width:100vw;}"], _constants__WEBPACK_IMPORTED_MODULE_4__["default"].mobile);
var BodyColumn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Layout__BodyColumn",
  componentId: "bk4rf0-2"
})(["flex:1;position:relative;@media (max-width:", "px){width:100vw;}"], _constants__WEBPACK_IMPORTED_MODULE_4__["default"].mobile);
var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
  displayName: "Layout__MainWrapper",
  componentId: "bk4rf0-3"
})(["position:absolute;top:0;left:0;height:100%;width:100%;overflow:auto;-webkit-overflow-scrolling:touch;padding:20px;padding-top:60px;"]);
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Layout__HeaderWrapper",
  componentId: "bk4rf0-4"
})(["position:absolute;top:0;width:100%;z-index:2;"]);

var Layout = function Layout(props) {
  var state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_9__["AppContext"]);
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_9__["DispatchContext"]);
  var bodyEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var watchScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    if (bodyEl.current.scrollTop > 100) {
      dispatch({
        type: 'showHeader'
      });
    } else {
      dispatch({
        type: 'hideHeader'
      });
    }
  }, 100);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    bodyEl.current.addEventListener("scroll", watchScroll); // watchScroll();

    return function () {
      bodyEl.current.removeEventListener("scroll", watchScroll);
    };
  }, []);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var path = router.pathname;
  var sc = state.isMenuVisible ? "menu" : "";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: sc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarWrapper, {
    className: sc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainWrapper, {
    ref: bodyEl,
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_background__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: state.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.3ce7d16e25bbed420b98.hot-update.js.map