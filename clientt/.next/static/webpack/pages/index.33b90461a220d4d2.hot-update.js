"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/features/auth/ui/protected-page.tsx":
/*!*************************************************!*\
  !*** ./src/features/auth/ui/protected-page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   protectedPage: function() { return /* binding */ protectedPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/constants/routes */ \"./src/shared/constants/routes.ts\");\n/* harmony import */ var _shared_slice_sessionSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/slice/sessionSlice */ \"./src/shared/slice/sessionSlice.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\n\n\n\n\n\nfunction protectedPage(Component) {\n    var _s = $RefreshSig$();\n    return _s(function ProtectedPage(props) {\n        _s();\n        const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n        const session = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.session);\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n            if (!session.data) {\n                dispatch((0,_shared_slice_sessionSlice__WEBPACK_IMPORTED_MODULE_2__.fetchSession)());\n            }\n        }, [\n            dispatch,\n            session.data\n        ]);\n        const { data, status } = session;\n        if (status === \"failed\") {\n            router.replace(_shared_constants_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.SIGN_IN);\n        }\n        if (status === \"loading\") {\n            return S;\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\protected-page.tsx\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }, \"GeIAYFqQmvI+j53jdsiByhzMHJk=\", false, function() {\n        return [\n            react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n            next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n            react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n        ];\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYXV0aC91aS9wcm90ZWN0ZWQtcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNRO0FBRW5CO0FBQzJCO0FBQ1o7QUFFaEQsU0FBU00sY0FBaUJDLFNBQXFDOztJQUNwRSxVQUFPLFNBQVNDLGNBQWNDLEtBQTJCOztRQUN2RCxNQUFNQyxXQUFXTix3REFBV0E7UUFDNUIsTUFBTU8sU0FBU1Qsc0RBQVNBO1FBQ3hCLE1BQU1VLFVBQVVQLHdEQUFXQSxDQUFDLENBQUNRLFFBQXFCQSxNQUFNRCxPQUFPO1FBRS9EVCxnREFBU0EsQ0FBQztZQUNSLElBQUksQ0FBQ1MsUUFBUUUsSUFBSSxFQUFFO2dCQUNqQkosU0FBU1Qsd0VBQVlBO1lBQ3ZCO1FBQ0YsR0FBRztZQUFDUztZQUFVRSxRQUFRRSxJQUFJO1NBQUM7UUFFM0IsTUFBTSxFQUFFQSxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHSDtRQUV6QixJQUFJRyxXQUFXLFVBQVU7WUFDdkJKLE9BQU9LLE9BQU8sQ0FBQ2hCLDREQUFNQSxDQUFDaUIsT0FBTztRQUMvQjtRQUVBLElBQUlGLFdBQVcsV0FBVztZQUN4QixPQUFPRztRQUNUO1FBRUEscUJBQU8sOERBQUNYO1lBQVcsR0FBR0UsS0FBSzs7Ozs7O0lBQzdCOztZQXJCbUJMLG9EQUFXQTtZQUNiRixrREFBU0E7WUFDUkcsb0RBQVdBOzs7QUFvQi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9hdXRoL3VpL3Byb3RlY3RlZC1wYWdlLnRzeD9kNTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCJAL3NoYXJlZC9jb25zdGFudHMvcm91dGVzXCI7XHJcbmltcG9ydCB7IGZldGNoU2Vzc2lvbiB9IGZyb20gXCJAL3NoYXJlZC9zbGljZS9zZXNzaW9uU2xpY2VcIjtcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCJAL3NoYXJlZC9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4sIFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3RlY3RlZFBhZ2U8UD4oQ29tcG9uZW50OiAocHJvcHM6IFApID0+IFJlYWN0RWxlbWVudCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiBQcm90ZWN0ZWRQYWdlKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxQPikge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIXNlc3Npb24uZGF0YSkge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2Vzc2lvbigpKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBzZXNzaW9uLmRhdGFdKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBpZiAoc3RhdHVzID09PSBcImZhaWxlZFwiKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKFJPVVRFUy5TSUdOX0lOKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xyXG4gICAgICByZXR1cm4gUztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJPVVRFUyIsImZldGNoU2Vzc2lvbiIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJwcm90ZWN0ZWRQYWdlIiwiQ29tcG9uZW50IiwiUHJvdGVjdGVkUGFnZSIsInByb3BzIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJzZXNzaW9uIiwic3RhdGUiLCJkYXRhIiwic3RhdHVzIiwicmVwbGFjZSIsIlNJR05fSU4iLCJTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/auth/ui/protected-page.tsx\n"));

/***/ })

});