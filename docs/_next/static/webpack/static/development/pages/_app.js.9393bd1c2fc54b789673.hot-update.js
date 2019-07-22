webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
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
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./components/constants.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meta */ "./components/meta.js");







var _jsxFileName = "/Users/amagi/src/github.com/fand/next-docs-template/components/Layout.js";






 // import Shader from "./shader";

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__Wrapper",
  componentId: "bk4rf0-0"
})(["position:fixed;top:0;left:0;height:100%;width:100%;overflow:visible;display:flex;transition:left 0.3s;@media (max-width:", "px){width:auto;left:-100vw;&.menu{left:0;}}"], _constants__WEBPACK_IMPORTED_MODULE_10__["default"].mobile);
var SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__SidebarWrapper",
  componentId: "bk4rf0-1"
})(["width:270px;-webkit-overflow-scrolling:touch;@media (max-width:", "px){width:82vw;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["default"].mobile);
var BodyColumn = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__BodyColumn",
  componentId: "bk4rf0-2"
})(["flex:1;position:relative;@media (max-width:", "px){width:100vw;}"], _constants__WEBPACK_IMPORTED_MODULE_10__["default"].mobile);
var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].main.withConfig({
  displayName: "Layout__MainWrapper",
  componentId: "bk4rf0-3"
})(["position:absolute;top:0;left:0;height:100%;width:100%;overflow:auto;-webkit-overflow-scrolling:touch;"]);
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Layout__HeaderWrapper",
  componentId: "bk4rf0-4"
})(["position:absolute;top:0;width:100%;z-index:2;"]);

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "watchScroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_8___default()(function () {
      if (_this.body) {
        _this.props.dispatch(_this.body.scrollTop > 100 ? showHeader() : hideHeader());
      }
    }, 100));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setBody", function (el) {
      _this.body = el;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    // static getInitialProps = async ({ pathname }) => ({
    //     path: pathname
    // });
    value: function componentDidMount() {
      if (false) {}

      if (this.body) {
        this.body.addEventListener("scroll", this.watchScroll);
      }

      this.watchScroll();
      this.props.dispatch(hideMenu());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.body) {
        this.body.removeEventListener("scroll", this.watchScroll);
      }
    }
  }, {
    key: "url",
    value: function url() {
      return "https://veda.gl".concat(this.props.path);
    }
  }, {
    key: "siteName",
    value: function siteName() {
      return _constants__WEBPACK_IMPORTED_MODULE_10__["default"].og.title;
    }
  }, {
    key: "title",
    value: function title() {
      var article = this.props.article[this.props.lang] || this.props.article.en;
      return (article.title ? article.title + " | " : "") + _constants__WEBPACK_IMPORTED_MODULE_10__["default"].og.title;
    }
  }, {
    key: "description",
    value: function description() {
      return this.props.article.description || _constants__WEBPACK_IMPORTED_MODULE_10__["default"].og.description;
    }
  }, {
    key: "image",
    value: function image() {
      return this.props.article.image || _constants__WEBPACK_IMPORTED_MODULE_10__["default"].og.image;
    }
  }, {
    key: "render",
    value: function render() {
      var sc = this.props.isMenuVisible ? "menu" : "";
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_meta__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, {
        className: sc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SidebarWrapper, {
        className: sc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        path: this.props.path,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(BodyColumn, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeaderWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MainWrapper, {
        ref: this.setBody,
        className: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, this.props.children))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.9393bd1c2fc54b789673.hot-update.js.map