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

/***/ "./src/widgets/profile.tsx":
/*!*********************************!*\
  !*** ./src/widgets/profile.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Profile: function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _features_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/features/auth */ \"./src/features/auth/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Profile() {\n    _s();\n    const session = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.session);\n    const { data } = session;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"mail:\",\n            data === null || data === void 0 ? void 0 : data.email,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"id: \",\n                    data === null || data === void 0 ? void 0 : data.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\widgets\\\\profile.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_auth__WEBPACK_IMPORTED_MODULE_1__.SignOutButton, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\widgets\\\\profile.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Profile, \"jErn8fCBxd9g2WHb3RYdTUQmINI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2lkZ2V0cy9wcm9maWxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0Q7QUFDUDtBQUVsQyxTQUFTRTs7SUFDZCxNQUFNQyxVQUFVRix3REFBV0EsQ0FBQyxDQUFDRyxRQUFxQkEsTUFBTUQsT0FBTztJQUMvRCxNQUFNLEVBQUVFLElBQUksRUFBRSxHQUFHRjtJQUVqQixxQkFDRTs7WUFBRTtZQUNNRSxpQkFBQUEsMkJBQUFBLEtBQU1DLEtBQUs7MEJBQ2pCLDhEQUFDQzs7b0JBQUk7b0JBQUtGLGlCQUFBQSwyQkFBQUEsS0FBTUcsRUFBRTs7Ozs7OzswQkFDbEIsOERBQUNSLHlEQUFhQTs7Ozs7OztBQUdwQjtHQVhnQkU7O1FBQ0VELG9EQUFXQTs7O0tBRGJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL3Byb2ZpbGUudHN4P2NmNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFNpZ25PdXRCdXR0b24gfSBmcm9tIFwiQC9mZWF0dXJlcy9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBzZXNzaW9uID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnNlc3Npb24pO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIG1haWw6e2RhdGE/LmVtYWlsfVxyXG4gICAgICA8ZGl2PmlkOiB7ZGF0YT8uaWR9PC9kaXY+XHJcbiAgICAgIDxTaWduT3V0QnV0dG9uIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlNpZ25PdXRCdXR0b24iLCJ1c2VTZWxlY3RvciIsIlByb2ZpbGUiLCJzZXNzaW9uIiwic3RhdGUiLCJkYXRhIiwiZW1haWwiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/widgets/profile.tsx\n"));

/***/ })

});