"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/shared/store/index.tsx":
/*!************************************!*\
  !*** ./src/shared/store/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/dist/redux-thunk.mjs\");\n/* harmony import */ var _slice_accountSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slice/accountSlice */ \"./src/shared/slice/accountSlice.ts\");\n/* harmony import */ var _slice_kindnessListSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slice/kindnessListSlice */ \"./src/shared/slice/kindnessListSlice.ts\");\n/* harmony import */ var _slice_sessionSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slice/sessionSlice */ \"./src/shared/slice/sessionSlice.ts\");\n\n\n\n\n\nconst dynamicMiddleware = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createDynamicMiddleware)();\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({\n    reducer: {\n        account: _slice_accountSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        blockList: _slice_kindnessListSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        session: _slice_sessionSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().prepend(dynamicMiddleware.middleware)\n});\ndynamicMiddleware.addMiddleware(redux_thunk__WEBPACK_IMPORTED_MODULE_4__.thunk);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmVkL3N0b3JlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLMEI7QUFDVTtBQUNlO0FBQ087QUFDUDtBQUVuRCxNQUFNTSxvQkFBb0JMLHlFQUF1QkE7QUFFMUMsTUFBTU0sUUFBUVAsZ0VBQWNBLENBQUM7SUFDbENRLFNBQVM7UUFDUEMsU0FBU04sMkRBQWNBO1FBQ3ZCTyxXQUFXTixnRUFBZ0JBO1FBQzNCTyxTQUFTTiwyREFBY0E7SUFDekI7SUFDQU8sWUFBWSxDQUFDQyx1QkFDWEEsdUJBQXVCQyxPQUFPLENBQUNSLGtCQUFrQk0sVUFBVTtBQUMvRCxHQUFHO0FBRUhOLGtCQUFrQlMsYUFBYSxDQUFDYiw4Q0FBS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9zdG9yZS9pbmRleC50c3g/OWM0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFjdGlvbixcclxuICBjb25maWd1cmVTdG9yZSxcclxuICBjcmVhdGVEeW5hbWljTWlkZGxld2FyZSxcclxuICBUaHVua0FjdGlvbixcclxufSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyB0aHVuayB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgYWNjb3VudFJlZHVjZXIgZnJvbSBcIi4uL3NsaWNlL2FjY291bnRTbGljZVwiO1xyXG5pbXBvcnQgYmxvY2tMaXN0UmVkdWNlciBmcm9tIFwiLi4vc2xpY2Uva2luZG5lc3NMaXN0U2xpY2VcIjtcclxuaW1wb3J0IHNlc3Npb25SZWR1Y2VyIGZyb20gXCIuLi9zbGljZS9zZXNzaW9uU2xpY2VcIjtcclxuXHJcbmNvbnN0IGR5bmFtaWNNaWRkbGV3YXJlID0gY3JlYXRlRHluYW1pY01pZGRsZXdhcmUoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBhY2NvdW50OiBhY2NvdW50UmVkdWNlcixcclxuICAgIGJsb2NrTGlzdDogYmxvY2tMaXN0UmVkdWNlcixcclxuICAgIHNlc3Npb246IHNlc3Npb25SZWR1Y2VyLFxyXG4gIH0sXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5wcmVwZW5kKGR5bmFtaWNNaWRkbGV3YXJlLm1pZGRsZXdhcmUpLFxyXG59KTtcclxuXHJcbmR5bmFtaWNNaWRkbGV3YXJlLmFkZE1pZGRsZXdhcmUodGh1bmspO1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcclxuZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248XHJcbiAgUmV0dXJuVHlwZSxcclxuICBSb290U3RhdGUsXHJcbiAgdW5rbm93bixcclxuICBBY3Rpb248c3RyaW5nPlxyXG4+O1xyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVEeW5hbWljTWlkZGxld2FyZSIsInRodW5rIiwiYWNjb3VudFJlZHVjZXIiLCJibG9ja0xpc3RSZWR1Y2VyIiwic2Vzc2lvblJlZHVjZXIiLCJkeW5hbWljTWlkZGxld2FyZSIsInN0b3JlIiwicmVkdWNlciIsImFjY291bnQiLCJibG9ja0xpc3QiLCJzZXNzaW9uIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwicHJlcGVuZCIsImFkZE1pZGRsZXdhcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/shared/store/index.tsx\n"));

/***/ })

});