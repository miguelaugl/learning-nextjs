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
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");



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
          return _services_api__WEBPACK_IMPORTED_MODULE_5__["default"].get('/pokemon');

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldElkRnJvbVVybCIsInVybCIsIm1hdGNoZXMiLCJtYXRjaCIsIkhvbWUiLCJwb2tlbW9ucyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1hcCIsInBva2Vtb24iLCJuYW1lIiwicHVzaCIsImdldEluaXRpYWxQcm9wcyIsImFwaSIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEdBQUcsRUFBSTtBQUMxQixNQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVLGlCQUFWLENBQWhCO0FBQ0EsU0FBT0QsT0FBTyxJQUFJQSxPQUFPLENBQUMsQ0FBRCxDQUFsQixJQUF5QkEsT0FBTyxDQUFDLENBQUQsQ0FBdkM7QUFDRCxDQUhEOztBQUtBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQUMsT0FBTztBQUFBLFdBQ25CO0FBQUksU0FBRyxFQUFFVCxZQUFZLENBQUNTLE9BQU8sQ0FBQ1IsR0FBVCxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dRLE9BQU8sQ0FBQ0MsSUFEWCxFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQU0sYUFBTyxFQUFFO0FBQUEsZUFBTUosTUFBTSxDQUFDSyxJQUFQLENBQVksZUFBWixxQkFBeUNYLFlBQVksQ0FBQ1MsT0FBTyxDQUFDUixHQUFULENBQXJELEVBQU47QUFBQSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBSEYsQ0FEbUI7QUFBQSxHQUFwQixDQURILENBREYsQ0FERjtBQWNELENBakJEOztHQUFNRyxJO1VBQ1dHLHFEOzs7S0FEWEgsSTtBQW1CTkEsSUFBSSxDQUFDUSxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNFQyxxREFBRyxDQUFDQyxHQUFKLENBQVEsVUFBUixDQURGOztBQUFBO0FBQ2ZDLGtCQURlO0FBRWZWLGtCQUZlLEdBRUpVLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxPQUZWO0FBSXJCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVEsQ0FBQ0MsSUFBckI7QUFKcUIsMkNBTWQ7QUFBRVgsb0JBQVEsRUFBUkE7QUFBRixXQU5jOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBU2VELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3ZTA5ZDdjMmQ0OTVkMGVkY2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XHJcblxyXG5jb25zdCBnZXRJZEZyb21VcmwgPSB1cmwgPT4ge1xyXG4gIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2goL1xcLyhbMC05XXsxLH0pXFwvLyk7XHJcbiAgcmV0dXJuIG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSAmJiBtYXRjaGVzWzFdO1xyXG59O1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IHBva2Vtb25zIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9rZW1vbnMubWFwKHBva2Vtb24gPT5cclxuICAgICAgICAgIDxsaSBrZXk9e2dldElkRnJvbVVybChwb2tlbW9uLnVybCl9PlxyXG4gICAgICAgICAgICB7cG9rZW1vbi5uYW1lfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9kZXRhaWxzL1tpZF0nLCBgL2RldGFpbHMvJHtnZXRJZEZyb21VcmwocG9rZW1vbi51cmwpfWApfT5cclxuICAgICAgICAgICAgICA8YT5EZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPil9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy9wb2tlbW9uJyk7XHJcbiAgY29uc3QgcG9rZW1vbnMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHM7XHJcblxyXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICByZXR1cm4geyBwb2tlbW9ucyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9