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

/***/ "./src/features/kindness-list/ui/add-kindness-item-form.tsx":
/*!******************************************************************!*\
  !*** ./src/features/kindness-list/ui/add-kindness-item-form.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddKindnessItemForm: function() { return /* binding */ AddKindnessItemForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_api_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/api/generated */ \"./src/shared/api/generated.ts\");\n/* harmony import */ var _shared_ui_CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/ui/CustomButton */ \"./src/shared/ui/CustomButton.tsx\");\n/* harmony import */ var _shared_ui_text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/ui/text-field */ \"./src/shared/ui/text-field.tsx\");\n/* harmony import */ var _model_use_add_kindness_item_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/use-add-kindness-item-form */ \"./src/features/kindness-list/model/use-add-kindness-item-form.tsx\");\n// AddKindnessItemForm.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AddKindnessItemForm() {\n    _s();\n    const { handleSubmit, register } = (0,_model_use_add_kindness_item_form__WEBPACK_IMPORTED_MODULE_4__.useAddKindnessItemForm)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"add-kindness-item-form\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Type:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        ...register(\"type\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: _shared_api_generated__WEBPACK_IMPORTED_MODULE_1__.AddBlockItemDtoType.Website,\n                                children: \"Website\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: _shared_api_generated__WEBPACK_IMPORTED_MODULE_1__.AddBlockItemDtoType.KeyWord,\n                                children: \"Key Word\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    register(\"type\").value === _shared_api_generated__WEBPACK_IMPORTED_MODULE_1__.AddBlockItemDtoType.Website && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_text_field__WEBPACK_IMPORTED_MODULE_3__.UiTextField, {\n                        inputProps: {\n                            placeholder: \"Enter Website...\",\n                            ...register(\"website\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this),\n                    register(\"type\").value === _shared_api_generated__WEBPACK_IMPORTED_MODULE_1__.AddBlockItemDtoType.KeyWord && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_text_field__WEBPACK_IMPORTED_MODULE_3__.UiTextField, {\n                        inputProps: {\n                            placeholder: \"Enter Key Word...\",\n                            ...register(\"keyword\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_ui_CustomButton__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                variant: \"primary\",\n                children: \"Add Kindness\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\queot\\\\Desktop\\\\Kind-Deeds-Manager\\\\clientt\\\\src\\\\features\\\\kindness-list\\\\ui\\\\add-kindness-item-form.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(AddKindnessItemForm, \"f8pZnyOAu76RAu6ZbLE1e2eV9rE=\", false, function() {\n    return [\n        _model_use_add_kindness_item_form__WEBPACK_IMPORTED_MODULE_4__.useAddKindnessItemForm\n    ];\n});\n_c = AddKindnessItemForm;\nvar _c;\n$RefreshReg$(_c, \"AddKindnessItemForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMva2luZG5lc3MtbGlzdC91aS9hZGQta2luZG5lc3MtaXRlbS1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwwQkFBMEI7OztBQUVtQztBQUNUO0FBQ0M7QUFDd0I7QUFFdEUsU0FBU0k7O0lBQ2QsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRSxHQUFHSCx5RkFBc0JBO0lBRXpELHFCQUNFLDhEQUFDSTtRQUFLQyxXQUFVO1FBQXlCQyxVQUFVSjs7MEJBQ2pELDhEQUFDSzs7a0NBQ0MsOERBQUNDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFRLEdBQUdOLFNBQVMsT0FBTzs7MENBQzFCLDhEQUFDTztnQ0FBT0MsT0FBT2Qsc0VBQW1CQSxDQUFDZSxPQUFPOzBDQUFFOzs7Ozs7MENBQzVDLDhEQUFDRjtnQ0FBT0MsT0FBT2Qsc0VBQW1CQSxDQUFDZ0IsT0FBTzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdoRCw4REFBQ047O29CQUNFSixTQUFTLFFBQVFRLEtBQUssS0FBS2Qsc0VBQW1CQSxDQUFDZSxPQUFPLGtCQUNyRCw4REFBQ2IsOERBQVdBO3dCQUNWZSxZQUFZOzRCQUNWQyxhQUFhOzRCQUNiLEdBQUdaLFNBQVMsVUFBVTt3QkFDeEI7Ozs7OztvQkFHSEEsU0FBUyxRQUFRUSxLQUFLLEtBQUtkLHNFQUFtQkEsQ0FBQ2dCLE9BQU8sa0JBQ3JELDhEQUFDZCw4REFBV0E7d0JBQ1ZlLFlBQVk7NEJBQ1ZDLGFBQWE7NEJBQ2IsR0FBR1osU0FBUyxVQUFVO3dCQUN4Qjs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDTCw2REFBUUE7Z0JBQUNrQixTQUFROzBCQUFVOzs7Ozs7Ozs7Ozs7QUFHbEM7R0FqQ2dCZjs7UUFDcUJELHFGQUFzQkE7OztLQUQzQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2tpbmRuZXNzLWxpc3QvdWkvYWRkLWtpbmRuZXNzLWl0ZW0tZm9ybS50c3g/OTQzMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBZGRLaW5kbmVzc0l0ZW1Gb3JtLnRzeFxyXG5cclxuaW1wb3J0IHsgQWRkQmxvY2tJdGVtRHRvVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9hcGkvZ2VuZXJhdGVkXCI7XHJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIkAvc2hhcmVkL3VpL0N1c3RvbUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBVaVRleHRGaWVsZCB9IGZyb20gXCJAL3NoYXJlZC91aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IHVzZUFkZEtpbmRuZXNzSXRlbUZvcm0gfSBmcm9tIFwiLi4vbW9kZWwvdXNlLWFkZC1raW5kbmVzcy1pdGVtLWZvcm1cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZGRLaW5kbmVzc0l0ZW1Gb3JtKCkge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZWdpc3RlciB9ID0gdXNlQWRkS2luZG5lc3NJdGVtRm9ybSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiYWRkLWtpbmRuZXNzLWl0ZW0tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbD5UeXBlOjwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdCB7Li4ucmVnaXN0ZXIoXCJ0eXBlXCIpfT5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0FkZEJsb2NrSXRlbUR0b1R5cGUuV2Vic2l0ZX0+V2Vic2l0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17QWRkQmxvY2tJdGVtRHRvVHlwZS5LZXlXb3JkfT5LZXkgV29yZDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cmVnaXN0ZXIoXCJ0eXBlXCIpLnZhbHVlID09PSBBZGRCbG9ja0l0ZW1EdG9UeXBlLldlYnNpdGUgJiYgKFxyXG4gICAgICAgICAgPFVpVGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBXZWJzaXRlLi4uXCIsXHJcbiAgICAgICAgICAgICAgLi4ucmVnaXN0ZXIoXCJ3ZWJzaXRlXCIpLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtyZWdpc3RlcihcInR5cGVcIikudmFsdWUgPT09IEFkZEJsb2NrSXRlbUR0b1R5cGUuS2V5V29yZCAmJiAoXHJcbiAgICAgICAgICA8VWlUZXh0RmllbGRcclxuICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIEtleSBXb3JkLi4uXCIsXHJcbiAgICAgICAgICAgICAgLi4ucmVnaXN0ZXIoXCJrZXl3b3JkXCIpLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFVpQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+QWRkIEtpbmRuZXNzPC9VaUJ1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBZGRCbG9ja0l0ZW1EdG9UeXBlIiwiVWlCdXR0b24iLCJVaVRleHRGaWVsZCIsInVzZUFkZEtpbmRuZXNzSXRlbUZvcm0iLCJBZGRLaW5kbmVzc0l0ZW1Gb3JtIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsInNlbGVjdCIsIm9wdGlvbiIsInZhbHVlIiwiV2Vic2l0ZSIsIktleVdvcmQiLCJpbnB1dFByb3BzIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/kindness-list/ui/add-kindness-item-form.tsx\n"));

/***/ })

});