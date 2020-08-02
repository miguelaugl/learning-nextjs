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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\L\xE9o\\Documents\\www\\nextjs\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var getIdFromUrl = function getIdFromUrl(url) {
  var matches = url.match(/\/([0-9]{1,})\//);
  return matches && matches[1] && matches[1];
};

var Home = function Home(_ref) {
  var pokemons = _ref.pokemons;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, pokemons.map(function (pokemon) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, pokemon.name, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/details/[".concat(getIdFromUrl(pokemon.url), "]"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, "Details")));
  })));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldElkRnJvbVVybCIsInVybCIsIm1hdGNoZXMiLCJtYXRjaCIsIkhvbWUiLCJwb2tlbW9ucyIsIm1hcCIsInBva2Vtb24iLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBpIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxHQUFHLEVBQUk7QUFDMUIsTUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVSxpQkFBVixDQUFoQjtBQUNBLFNBQU9ELE9BQU8sSUFBSUEsT0FBTyxDQUFDLENBQUQsQ0FBbEIsSUFBeUJBLE9BQU8sQ0FBQyxDQUFELENBQXZDO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM3QixTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQUMsT0FBTztBQUFBLFdBQ25CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0EsT0FBTyxDQUFDQyxJQURYLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0UsTUFBQyxnREFBRDtBQUFNLFVBQUksc0JBQWVSLFlBQVksQ0FBQ08sT0FBTyxDQUFDTixHQUFULENBQTNCLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FIRixDQURtQjtBQUFBLEdBQXBCLENBREgsQ0FERixDQURGO0FBY0QsQ0FmRDs7S0FBTUcsSTtBQWlCTkEsSUFBSSxDQUFDSyxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNFQyxxREFBRyxDQUFDQyxHQUFKLENBQVEsVUFBUixDQURGOztBQUFBO0FBQ2ZDLGtCQURlO0FBRWZQLGtCQUZlLEdBRUpPLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxPQUZWO0FBSXJCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVEsQ0FBQ0MsSUFBckI7QUFKcUIsMkNBTWQ7QUFBRVIsb0JBQVEsRUFBUkE7QUFBRixXQU5jOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBU2VELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY1MmU0NWIyNTYzMDgxNmE5ZjAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xyXG5cclxuY29uc3QgZ2V0SWRGcm9tVXJsID0gdXJsID0+IHtcclxuICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKC9cXC8oWzAtOV17MSx9KVxcLy8pO1xyXG4gIHJldHVybiBtYXRjaGVzICYmIG1hdGNoZXNbMV0gJiYgbWF0Y2hlc1sxXTtcclxufTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBwb2tlbW9ucyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9rZW1vbnMubWFwKHBva2Vtb24gPT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAge3Bva2Vtb24ubmFtZX1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlscy9bJHtnZXRJZEZyb21VcmwocG9rZW1vbi51cmwpfV1gfT5cclxuICAgICAgICAgICAgICA8YT5EZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPil9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy9wb2tlbW9uJyk7XHJcbiAgY29uc3QgcG9rZW1vbnMgPSByZXNwb25zZS5kYXRhLnJlc3VsdHM7XHJcblxyXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICByZXR1cm4geyBwb2tlbW9ucyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9