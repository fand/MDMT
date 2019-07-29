webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/context */ "./lib/context.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/hooks */ "./lib/hooks.js");

var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/sidebar.js";









var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "sidebar__Nav",
  componentId: "sc-1nsoz3g-0"
})(["width:100%;height:100%;padding:10px 30px 100px;background:rgba(10,10,10,0.6);border-right:1px solid gray;overflow:auto;-webkit-overflow-scrolling:touch;*{color:", ";text-shadow:0 2px 5px black !important;}ul{padding-left:0;margin:0;}li{line-height:2.5em;&.active{position:relative;text-decoration:none;font-weight:bold;font-style:italic;color:white;}}li a{display:block;text-decoration:none;&:hover{color:", ";text-decoration:underline;}&:visited{color:", ";}}"], _constants__WEBPACK_IMPORTED_MODULE_6__["default"].fg, _constants__WEBPACK_IMPORTED_MODULE_6__["default"].link, _constants__WEBPACK_IMPORTED_MODULE_6__["default"].fg);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sidebar__Header",
  componentId: "sc-1nsoz3g-1"
})(["margin-bottom:30px;.logo{width:100%;padding:5px 10px;margin-left:-10px;a{display:block;}}.banners{width:180px;margin:20px auto;transform:translateX(-5px);display:flex;justify-content:space-between;img{height:20px;}}"]);

var isActive = function isActive(path, to) {
  var match = (to || "").match(/^([^#?]*)\??([^#]*)#?(.*)$/);
  return !!match && match.length > 0 && path === match[1];
};

var prefetch = function prefetch(to) {
  return function () {
    return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.prefetch(to);
  };
};

var Li = function Li(_ref) {
  var to = _ref.to,
      children = _ref.children,
      route = _ref.route;

  if (isActive(route, to)) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, children);
  }

  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_lib_context__WEBPACK_IMPORTED_MODULE_7__["DispatchContext"]);

  var hideMenu = function hideMenu() {
    return dispatch({
      type: "hideMenu"
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: hideMenu,
    onMouseOver: prefetch(to),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: to,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, children)));
};

var renderSidebarItems = function renderSidebarItems(items, route, indent) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    style: {
      textIndent: indent * 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, items.map(function (_ref2) {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        label = _ref3[0],
        content = _ref3[1];

    if (typeof content === "string") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, {
        key: content,
        route: route,
        to: content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, label);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, label), renderSidebarItems(content, route, indent + 1));
    }
  }));
};

var Sidebar = function Sidebar(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var lang = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_9__["useLanguage"])();
  var sidebarItems = _config__WEBPACK_IMPORTED_MODULE_8__["sidebar"][lang];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "logo",
    src: "/static/images/logo_white.png",
    alt: "MDMT header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "twitter",
    target: "\\_blank",
    href: "https://twitter.com/search?f=tweets&q=%23MDMTjs&src=typd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "hashtag #MDMTjs",
    src: "/static/images/hashtag.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }))), renderSidebarItems(sidebarItems, router.pathname, 0));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=_app.js.d0a055dc7c40f4c0b72a.hot-update.js.map