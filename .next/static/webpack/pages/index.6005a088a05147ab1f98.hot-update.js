webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/services/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\L\xE9o\\Documents\\www\\nextjs\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var getIdFromUrl = function getIdFromUrl(url) {
  var matches = url.match(/\/([0-9]{1,})\//);
  return matches && matches[1] && matches[1];
};

var Home = function Home(_ref) {
  _s();

  var pokemons = _ref.pokemons;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, pokemons.map(function (pokemon) {
    return __jsx("li", {
      key: getIdFromUrl(pokemon.url),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, pokemon.name, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }), __jsx("span", {
      onClick: function onClick() {
        return router.push('/details/[id]', "/details/".concat(getIdFromUrl(pokemon.url)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, "Details")));
  })));
};

_s(Home, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Home;
Home.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response, pokemons;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_5__["api"].get('/pokemon');

        case 2:
          response = _context.sent;
          pokemons = response.data.results;
          console.log(response.data);
          return _context.abrupt("return", {
            pokemons: pokemons
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/services/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "api", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0SWRGcm9tVXJsIiwidXJsIiwibWF0Y2hlcyIsIm1hdGNoIiwiSG9tZSIsInBva2Vtb25zIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwIiwicG9rZW1vbiIsIm5hbWUiLCJwdXNoIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBpIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsR0FBRyxFQUFJO0FBQzFCLE1BQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsaUJBQVYsQ0FBaEI7QUFDQSxTQUFPRCxPQUFPLElBQUlBLE9BQU8sQ0FBQyxDQUFELENBQWxCLElBQXlCQSxPQUFPLENBQUMsQ0FBRCxDQUF2QztBQUNELENBSEQ7O0FBS0EsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFBQyxPQUFPO0FBQUEsV0FDbkI7QUFBSSxTQUFHLEVBQUVULFlBQVksQ0FBQ1MsT0FBTyxDQUFDUixHQUFULENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1EsT0FBTyxDQUFDQyxJQURYLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBTSxhQUFPLEVBQUU7QUFBQSxlQUFNSixNQUFNLENBQUNLLElBQVAsQ0FBWSxlQUFaLHFCQUF5Q1gsWUFBWSxDQUFDUyxPQUFPLENBQUNSLEdBQVQsQ0FBckQsRUFBTjtBQUFBLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FIRixDQURtQjtBQUFBLEdBQXBCLENBREgsQ0FERixDQURGO0FBY0QsQ0FqQkQ7O0dBQU1HLEk7VUFDV0cscUQ7OztLQURYSCxJO0FBbUJOQSxJQUFJLENBQUNRLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0VDLDZDQUFHLENBQUNDLEdBQUosQ0FBUSxVQUFSLENBREY7O0FBQUE7QUFDZkMsa0JBRGU7QUFFZlYsa0JBRmUsR0FFSlUsUUFBUSxDQUFDQyxJQUFULENBQWNDLE9BRlY7QUFJckJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBUSxDQUFDQyxJQUFyQjtBQUpxQiwyQ0FNZDtBQUFFWCxvQkFBUSxFQUFSQTtBQUFGLFdBTmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFTZUQsbUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MDA1YTA4OGEwNTE0N2FiMWY5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5cclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5cclxuY29uc3QgZ2V0SWRGcm9tVXJsID0gdXJsID0+IHtcclxuICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKC9cXC8oWzAtOV17MSx9KVxcLy8pO1xyXG4gIHJldHVybiBtYXRjaGVzICYmIG1hdGNoZXNbMV0gJiYgbWF0Y2hlc1sxXTtcclxufTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBwb2tlbW9ucyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Bva2Vtb25zLm1hcChwb2tlbW9uID0+XHJcbiAgICAgICAgICA8bGkga2V5PXtnZXRJZEZyb21VcmwocG9rZW1vbi51cmwpfT5cclxuICAgICAgICAgICAge3Bva2Vtb24ubmFtZX1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvZGV0YWlscy9baWRdJywgYC9kZXRhaWxzLyR7Z2V0SWRGcm9tVXJsKHBva2Vtb24udXJsKX1gKX0+XHJcbiAgICAgICAgICAgICAgPGE+RGV0YWlsczwvYT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT4pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvcG9rZW1vbicpO1xyXG4gIGNvbnN0IHBva2Vtb25zID0gcmVzcG9uc2UuZGF0YS5yZXN1bHRzO1xyXG5cclxuICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgcG9rZW1vbnMgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcGkgfSBmcm9tICcuL2FwaSc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=