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

/***/ "./src/features/auth/ui/sign-in-form.tsx":
/*!***********************************************!*\
  !*** ./src/features/auth/ui/sign-in-form.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignInForm: function() { return /* binding */ SignInForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/constants/routes */ \"./src/shared/constants/routes.ts\");\n/* harmony import */ var _shared_ui_CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/CustomButton */ \"./src/shared/ui/CustomButton.tsx\");\n/* harmony import */ var _shared_ui_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/ui/link */ \"./src/shared/ui/link.tsx\");\n/* harmony import */ var _shared_ui_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/ui/text-field */ \"./src/shared/ui/text-field.tsx\");\n/* harmony import */ var _model_use_sign_in_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/use-sign-in-form */ \"./src/features/auth/model/use-sign-in-form.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SignInForm() {\n    _s();\n    const { handleSubmit, register, onSubmit, errorMessage } = (0,_model_use_sign_in_form__WEBPACK_IMPORTED_MODULE_5__.useSignInForm)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_CustomButton__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                        variant: \"primary\",\n                        type: \"submit\",\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_link__WEBPACK_IMPORTED_MODULE_3__.UiLink, {\n                        href: _shared_constants_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.SIGN_UP,\n                        children: \"sign up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, this),\n                    errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: errorMessage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"sign-in-form\",\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_text_field__WEBPACK_IMPORTED_MODULE_4__.UiTextField, {\n                        label: \"Email\",\n                        inputProps: {\n                            type: \"email\",\n                            ...register(\"email\", {\n                                required: true\n                            })\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_text_field__WEBPACK_IMPORTED_MODULE_4__.UiTextField, {\n                        label: \"Password\",\n                        inputProps: {\n                            type: \"password\",\n                            ...register(\"password\", {\n                                required: true\n                            })\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit-button\",\n                        type: \"submit\",\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_link__WEBPACK_IMPORTED_MODULE_3__.UiLink, {\n                        href: _shared_constants_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.SIGN_UP,\n                        children: \"sign up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 6\n                    }, this),\n                    errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: errorMessage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\auth\\\\ui\\\\sign-in-form.tsx\",\n                lineNumber: 19,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SignInForm, \"q9FRLYBdFIu0wTR8W2JGibbif0A=\", false, function() {\n    return [\n        _model_use_sign_in_form__WEBPACK_IMPORTED_MODULE_5__.useSignInForm\n    ];\n});\n_c = SignInForm;\nvar _c;\n$RefreshReg$(_c, \"SignInForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYXV0aC91aS9zaWduLWluLWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNDO0FBQ1Y7QUFDVztBQUNLO0FBRW5ELFNBQVNLOztJQUNkLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFLEdBQUdMLHNFQUFhQTtJQUN4RSxxQkFDRTs7MEJBQ0EsOERBQUNNO2dCQUFLRixVQUFVRixhQUFhRTs7a0NBRTNCLDhEQUFDUCw2REFBUUE7d0JBQUNVLFNBQVE7d0JBQVVDLE1BQUs7a0NBQVM7Ozs7OztrQ0FHMUMsOERBQUNWLG1EQUFNQTt3QkFBQ1csTUFBTWIsNERBQU1BLENBQUNjLE9BQU87a0NBQUU7Ozs7OztvQkFDN0JMLDhCQUFnQiw4REFBQ007a0NBQUtOOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS00sV0FBVTtnQkFBZVIsVUFBVUYsYUFBYUU7O2tDQUN0RCw4REFBQ0wsOERBQVdBO3dCQUNUYyxPQUFNO3dCQUNOQyxZQUFZOzRCQUFFTixNQUFNOzRCQUFTLEdBQUdMLFNBQVMsU0FBUztnQ0FBRVksVUFBVTs0QkFBSyxFQUFFO3dCQUFDOzs7Ozs7a0NBRXhFLDhEQUFDaEIsOERBQVdBO3dCQUNWYyxPQUFNO3dCQUNOQyxZQUFZOzRCQUNWTixNQUFNOzRCQUNOLEdBQUdMLFNBQVMsWUFBWTtnQ0FBRVksVUFBVTs0QkFBSyxFQUFFO3dCQUM3Qzs7Ozs7O2tDQUVILDhEQUFDQzt3QkFBT0osV0FBVTt3QkFBZ0JKLE1BQUs7a0NBQVM7Ozs7OztrQ0FHaEQsOERBQUNWLG1EQUFNQTt3QkFBQ1csTUFBTWIsNERBQU1BLENBQUNjLE9BQU87a0NBQUU7Ozs7OztvQkFDNUJMLDhCQUFnQiw4REFBQ007a0NBQUtOOzs7Ozs7Ozs7Ozs7OztBQUk3QjtHQWhDZ0JKOztRQUM2Q0Qsa0VBQWFBOzs7S0FEMURDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9hdXRoL3VpL3NpZ24taW4tZm9ybS50c3g/ODRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiQC9zaGFyZWQvY29uc3RhbnRzL3JvdXRlc1wiO1xyXG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gXCJAL3NoYXJlZC91aS9DdXN0b21CdXR0b25cIjtcclxuaW1wb3J0IHsgVWlMaW5rIH0gZnJvbSBcIkAvc2hhcmVkL3VpL2xpbmtcIjtcclxuaW1wb3J0IHsgVWlUZXh0RmllbGQgfSBmcm9tIFwiQC9zaGFyZWQvdWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyB1c2VTaWduSW5Gb3JtIH0gZnJvbSBcIi4uL21vZGVsL3VzZS1zaWduLWluLWZvcm1cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWduSW5Gb3JtKCkge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZWdpc3Rlciwgb25TdWJtaXQsIGVycm9yTWVzc2FnZSB9ID0gdXNlU2lnbkluRm9ybSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cclxuICAgICAgPFVpQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIFNpZ24gSW5cclxuICAgICAgPC9VaUJ1dHRvbj5cclxuICAgICAgPFVpTGluayBocmVmPXtST1VURVMuU0lHTl9VUH0+c2lnbiB1cDwvVWlMaW5rPlxyXG4gICAgICB7ZXJyb3JNZXNzYWdlICYmIDxkaXY+e2Vycm9yTWVzc2FnZX08L2Rpdj59XHJcbiAgICA8L2Zvcm0+XHJcbiAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2lnbi1pbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgIDxVaVRleHRGaWVsZFxyXG4gICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgIGlucHV0UHJvcHM9e3sgdHlwZTogXCJlbWFpbFwiLCAuLi5yZWdpc3RlcihcImVtYWlsXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSkgfX1cclxuICAgICAgLz5cclxuICAgICAgPFVpVGV4dEZpZWxkXHJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICAgICAgLi4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgU2lnbiBJblxyXG4gICAgIDwvYnV0dG9uPlxyXG4gICAgIDxVaUxpbmsgaHJlZj17Uk9VVEVTLlNJR05fVVB9PnNpZ24gdXA8L1VpTGluaz5cclxuICAgICAge2Vycm9yTWVzc2FnZSAmJiA8ZGl2PntlcnJvck1lc3NhZ2V9PC9kaXY+fVxyXG4gICA8L2Zvcm0+XHJcbiAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJPVVRFUyIsIlVpQnV0dG9uIiwiVWlMaW5rIiwiVWlUZXh0RmllbGQiLCJ1c2VTaWduSW5Gb3JtIiwiU2lnbkluRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwib25TdWJtaXQiLCJlcnJvck1lc3NhZ2UiLCJmb3JtIiwidmFyaWFudCIsInR5cGUiLCJocmVmIiwiU0lHTl9VUCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXRQcm9wcyIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/auth/ui/sign-in-form.tsx\n"));

/***/ })

});