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

/***/ "./src/features/kindness-list/model/use-add-kindness-item-form.tsx":
/*!*************************************************************************!*\
  !*** ./src/features/kindness-list/model/use-add-kindness-item-form.tsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAddKindnessItemForm: function() { return /* binding */ useAddKindnessItemForm; }\n/* harmony export */ });\n/* harmony import */ var _shared_slice_kindnessListSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/slice/kindnessListSlice */ \"./src/shared/slice/kindnessListSlice.ts\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useAddKindnessItemForm() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const { handleSubmit, register, watch, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({});\n    const type = watch(\"type\");\n    const onSubmit = async (data)=>{\n        await dispatch((0,_shared_slice_kindnessListSlice__WEBPACK_IMPORTED_MODULE_0__.addBlockItem)(data));\n        dispatch((0,_shared_slice_kindnessListSlice__WEBPACK_IMPORTED_MODULE_0__.fetchBlockList)());\n        reset();\n    };\n    return {\n        handleSubmit: handleSubmit(onSubmit),\n        register,\n        type\n    };\n}\n_s(useAddKindnessItemForm, \"/smjAEEMt9OZ63ujjIwQByOHjAk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMva2luZG5lc3MtbGlzdC9tb2RlbC91c2UtYWRkLWtpbmRuZXNzLWl0ZW0tZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDZ0Y7QUFFdEM7QUFDQTtBQUVuQyxTQUFTSTs7SUFDZCxNQUFNQyxXQUFXRix3REFBV0E7SUFDNUIsTUFBTSxFQUFFRyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR1Asd0RBQU9BLENBR3JELENBRUg7SUFFQSxNQUFNUSxPQUFPRixNQUFNO0lBRW5CLE1BQU1HLFdBQVcsT0FBT0M7UUFJdEIsTUFBTVAsU0FBU0wsNkVBQVlBLENBQUNZO1FBQzVCUCxTQUFTSiwrRUFBY0E7UUFDdkJRO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xILGNBQWNBLGFBQWFLO1FBQzNCSjtRQUNBRztJQUNGO0FBQ0Y7R0F6QmdCTjs7UUFDR0Qsb0RBQVdBO1FBQ3FCRCxvREFBT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2tpbmRuZXNzLWxpc3QvbW9kZWwvdXNlLWFkZC1raW5kbmVzcy1pdGVtLWZvcm0udHN4PzU4MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkQmxvY2tJdGVtRHRvVHlwZSB9IGZyb20gXCJAL3NoYXJlZC9hcGkvZ2VuZXJhdGVkXCI7XHJcbmltcG9ydCB7IGFkZEJsb2NrSXRlbSwgZmV0Y2hCbG9ja0xpc3QgfSBmcm9tIFwiQC9zaGFyZWQvc2xpY2Uva2luZG5lc3NMaXN0U2xpY2VcIjtcclxuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9zaGFyZWQvc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBZGRLaW5kbmVzc0l0ZW1Gb3JtKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyLCB3YXRjaCwgcmVzZXQgfSA9IHVzZUZvcm08e1xyXG4gICAgdHlwZTogYW55O1xyXG4gICAgZGF0YTogYW55O1xyXG4gIH0+KHtcclxuXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHR5cGUgPSB3YXRjaChcInR5cGVcIik7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGE6IHtcclxuICAgIHR5cGU6IEFkZEJsb2NrSXRlbUR0b1R5cGU7XHJcbiAgICBkYXRhOiBzdHJpbmc7XHJcbiAgfSkgPT4ge1xyXG4gICAgYXdhaXQgZGlzcGF0Y2goYWRkQmxvY2tJdGVtKGRhdGEpKTtcclxuICAgIGRpc3BhdGNoKGZldGNoQmxvY2tMaXN0KCkpO1xyXG4gICAgcmVzZXQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaGFuZGxlU3VibWl0OiBoYW5kbGVTdWJtaXQob25TdWJtaXQpLFxyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICB0eXBlLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbImFkZEJsb2NrSXRlbSIsImZldGNoQmxvY2tMaXN0IiwidXNlRm9ybSIsInVzZURpc3BhdGNoIiwidXNlQWRkS2luZG5lc3NJdGVtRm9ybSIsImRpc3BhdGNoIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJ3YXRjaCIsInJlc2V0IiwidHlwZSIsIm9uU3VibWl0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/kindness-list/model/use-add-kindness-item-form.tsx\n"));

/***/ })

});