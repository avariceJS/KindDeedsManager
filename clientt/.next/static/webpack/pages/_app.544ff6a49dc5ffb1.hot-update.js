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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[15].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[15].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[13].oneOf[15].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[13].oneOf[15].use[4]!./src/app/App.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[15].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[15].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[13].oneOf[15].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[13].oneOf[15].use[4]!./src/app/App.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body {\\n  height: 100%;\\n  margin: auto;\\n}\\n\\n.kindness-item, .main_page {\\n  background-color: #f0f0f0;\\n  border-radius: 8px;\\n  width: 20%;\\n  height: 400px;\\n  padding: 16px;\\n  margin-bottom: 16px;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n  display: flex;\\n  justify-content: space-between;\\n  transition: transform 0.2s ease;\\n}\\n.kindness-item:hover, .main_page:hover {\\n  transform: translateY(-4px);\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\\n}\\n.kindness-item .kindness-text, .main_page .kindness-text {\\n  font-size: 18px;\\n  color: #333;\\n  margin-right: 16px;\\n  flex: 1 1;\\n}\\n.kindness-item .action-button, .main_page .action-button {\\n  background-color: #ff6347;\\n  color: white;\\n  border: none;\\n  padding: 8px 16px;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  height: 30px;\\n  transition: background-color 0.3s ease;\\n}\\n.kindness-item .action-button:hover, .main_page .action-button:hover {\\n  background-color: #ff483b;\\n}\\n\\n.ui-button {\\n  display: inline-block;\\n  padding: 12px 24px;\\n  font-size: 16px;\\n  font-weight: 600;\\n  text-align: center;\\n  cursor: pointer;\\n  border-radius: 4px;\\n  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;\\n}\\n.ui-button.primary {\\n  background-color: #007bff;\\n  color: #fff;\\n  border: 2px solid #007bff;\\n}\\n.ui-button.secondary {\\n  background-color: #6c757d;\\n  color: #fff;\\n  border: 2px solid #6c757d;\\n}\\n.ui-button.outlined {\\n  background-color: transparent;\\n  color: #007bff;\\n  border: 2px solid #007bff;\\n}\\n.ui-button:hover.primary {\\n  background-color: #0056b3;\\n  border-color: #0056b3;\\n}\\n.ui-button:hover.secondary {\\n  background-color: #5a6268;\\n  border-color: #5a6268;\\n}\\n.ui-button:hover.outlined {\\n  background-color: #f0f0f0;\\n}\\n.ui-button:disabled {\\n  opacity: 0.65;\\n  cursor: not-allowed;\\n}\\n\\n.main_page {\\n  background-color: #e0f7fa;\\n  width: 200px;\\n  height: 200px;\\n}\\n.main_page .kindness-text {\\n  color: #00796b;\\n}\\n\\n.ui-text-field {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 16px;\\n}\\n.ui-text-field label {\\n  margin-bottom: 8px;\\n  font-size: 14px;\\n  color: #333;\\n}\\n.ui-text-field input {\\n  padding: 10px;\\n  font-size: 16px;\\n  border: 2px solid #ccc;\\n  border-radius: 4px;\\n  transition: border-color 0.3s ease;\\n}\\n.ui-text-field input:focus {\\n  border-color: #007bff;\\n  outline: none;\\n}\\n.ui-text-field .error {\\n  margin-top: 8px;\\n  font-size: 12px;\\n  color: #ff6347;\\n}\\n\\n.add-kindness-item-form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n  max-width: 400px;\\n  margin: 0 auto;\\n  padding: 24px;\\n  background-color: #f9f9f9;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\n}\\n.add-kindness-item-form .ui-select-field {\\n  width: 100%;\\n}\\n.add-kindness-item-form .ui-text-field {\\n  width: 100%;\\n}\\n.add-kindness-item-form .ui-button {\\n  align-self: flex-end;\\n}\\n\\n.ui-link {\\n  color: #007bff;\\n  text-decoration: none;\\n  font-weight: 600;\\n  transition: color 0.3s ease, -webkit-text-decoration 0.3s ease;\\n  transition: color 0.3s ease, text-decoration 0.3s ease;\\n  transition: color 0.3s ease, text-decoration 0.3s ease, -webkit-text-decoration 0.3s ease;\\n}\\n.ui-link:hover {\\n  color: #0056b3;\\n  text-decoration: underline;\\n}\\n.ui-link:active {\\n  color: #003d80;\\n}\\n\\n.sign-in-form {\\n  max-width: 400px;\\n  margin: 0 auto;\\n  padding: 24px;\\n  background-color: #f9f9f9;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\n}\\n.sign-in-form .form-field {\\n  margin-bottom: 16px;\\n}\\n.sign-in-form .form-field label {\\n  display: block;\\n  margin-bottom: 8px;\\n  font-size: 14px;\\n  color: #333;\\n}\\n.sign-in-form .form-field input {\\n  width: 100%;\\n  padding: 10px;\\n  font-size: 16px;\\n  border: 2px solid #ccc;\\n  border-radius: 4px;\\n  transition: border-color 0.3s ease;\\n}\\n.sign-in-form .form-field input:focus {\\n  border-color: #007bff;\\n  outline: none;\\n}\\n.sign-in-form .submit-button {\\n  display: inline-block;\\n  width: 100%;\\n  padding: 12px;\\n  font-size: 16px;\\n  font-weight: 600;\\n  text-align: center;\\n  color: #fff;\\n  background-color: #007bff;\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease;\\n}\\n.sign-in-form .submit-button:hover {\\n  background-color: #0056b3;\\n}\\n.sign-in-form .submit-button:disabled {\\n  opacity: 0.65;\\n  cursor: not-allowed;\\n}\\n.sign-in-form .error-message {\\n  margin-top: 16px;\\n  font-size: 14px;\\n  color: #ff6347;\\n}\\n\\n.sign-in-form-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 100vh;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/app/App.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,YAAA;EACA,YAAA;AACF;;AAKA;EACE,yBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,wCAAA;EACA,aAAA;EACA,8BAAA;EACA,+BAAA;AAFF;AAIE;EACE,2BAAA;EACA,wCAAA;AAFJ;AAKE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;AAHJ;AAME;EACE,yBAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,sCAAA;AAJJ;AAMI;EACE,yBAAA;AAJN;;AAWA;EACE,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,+EACE;AATJ;AAaE;EACE,yBAAA;EACA,WAAA;EACA,yBAAA;AAXJ;AAcE;EACE,yBAAA;EACA,WAAA;EACA,yBAAA;AAZJ;AAeE;EACE,6BAAA;EACA,cAAA;EACA,yBAAA;AAbJ;AAiBI;EACE,yBAAA;EACA,qBAAA;AAfN;AAkBI;EACE,yBAAA;EACA,qBAAA;AAhBN;AAmBI;EACE,yBAAA;AAjBN;AAqBE;EACE,aAAA;EACA,mBAAA;AAnBJ;;AAwBA;EAEE,yBAAA;EACA,YAAA;EACA,aAAA;AAtBF;AAuBE;EACE,cAAA;AArBJ;;AA2BA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAxBF;AA0BE;EACE,kBAAA;EACA,eAAA;EACA,WAAA;AAxBJ;AA2BE;EACE,aAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;EACA,kCAAA;AAzBJ;AA2BI;EACE,qBAAA;EACA,aAAA;AAzBN;AA6BE;EACE,eAAA;EACA,eAAA;EACA,cAAA;AA3BJ;;AAkCA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,wCAAA;AA/BF;AAiCE;EACE,WAAA;AA/BJ;AAkCE;EACE,WAAA;AAhCJ;AAmCE;EACE,oBAAA;AAjCJ;;AAwCA;EACE,cAAA;EACA,qBAAA;EACA,gBAAA;EACA,8DAAA;EAAA,sDAAA;EAAA,yFAAA;AArCF;AAuCE;EACE,cAAA;EACA,0BAAA;AArCJ;AAwCE;EACE,cAAA;AAtCJ;;AA4CA;EACE,gBAAA;EACA,cAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,wCAAA;AAzCF;AA2CE;EACE,mBAAA;AAzCJ;AA2CI;EACE,cAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;AAzCN;AA4CI;EACE,WAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;EACA,kCAAA;AA1CN;AA4CM;EACE,qBAAA;EACA,aAAA;AA1CR;AA+CE;EACE,qBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,sCAAA;AA7CJ;AA+CI;EACE,yBAAA;AA7CN;AAgDI;EACE,aAAA;EACA,mBAAA;AA9CN;AAkDE;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AAhDJ;;AAoDA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;AAjDF\",\"sourcesContent\":[\"html, body {\\r\\n  height: 100%;\\r\\n  margin: auto;\\r\\n\\r\\n}\\r\\n\\r\\n// kindness-item.scss\\r\\n\\r\\n.kindness-item {\\r\\n  background-color: #f0f0f0;\\r\\n  border-radius: 8px;\\r\\n  width: 20%;\\r\\n  height: 400px;\\r\\n  padding: 16px;\\r\\n  margin-bottom: 16px;\\r\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  transition: transform 0.2s ease;\\r\\n\\r\\n  &:hover {\\r\\n    transform: translateY(-4px);\\r\\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\\r\\n  }\\r\\n\\r\\n  .kindness-text {\\r\\n    font-size: 18px;\\r\\n    color: #333;\\r\\n    margin-right: 16px;\\r\\n    flex: 1;\\r\\n  }\\r\\n\\r\\n  .action-button {\\r\\n    background-color: #ff6347;\\r\\n    color: white;\\r\\n    border: none;\\r\\n    padding: 8px 16px;\\r\\n    border-radius: 4px;\\r\\n    cursor: pointer;\\r\\n    height: 30px;\\r\\n    transition: background-color 0.3s ease;\\r\\n\\r\\n    &:hover {\\r\\n      background-color: #ff483b;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\\r\\n// ui-button.scss\\r\\n\\r\\n.ui-button {\\r\\n  display: inline-block;\\r\\n  padding: 12px 24px;\\r\\n  font-size: 16px;\\r\\n  font-weight: 600;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  border-radius: 4px;\\r\\n  transition:\\r\\n    background-color 0.3s ease,\\r\\n    color 0.3s ease,\\r\\n    border-color 0.3s ease;\\r\\n\\r\\n  &.primary {\\r\\n    background-color: #007bff;\\r\\n    color: #fff;\\r\\n    border: 2px solid #007bff;\\r\\n  }\\r\\n\\r\\n  &.secondary {\\r\\n    background-color: #6c757d;\\r\\n    color: #fff;\\r\\n    border: 2px solid #6c757d;\\r\\n  }\\r\\n\\r\\n  &.outlined {\\r\\n    background-color: transparent;\\r\\n    color: #007bff;\\r\\n    border: 2px solid #007bff;\\r\\n  }\\r\\n\\r\\n  &:hover {\\r\\n    &.primary {\\r\\n      background-color: #0056b3;\\r\\n      border-color: #0056b3;\\r\\n    }\\r\\n\\r\\n    &.secondary {\\r\\n      background-color: #5a6268;\\r\\n      border-color: #5a6268;\\r\\n    }\\r\\n\\r\\n    &.outlined {\\r\\n      background-color: #f0f0f0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  &:disabled {\\r\\n    opacity: 0.65;\\r\\n    cursor: not-allowed;\\r\\n  }\\r\\n}\\r\\n\\r\\n//main\\r\\n.main_page {\\r\\n  @extend .kindness-item;\\r\\n  background-color: #e0f7fa;\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  .kindness-text {\\r\\n    color: #00796b;\\r\\n  }\\r\\n}\\r\\n\\r\\n// ui-text-field.scss\\r\\n\\r\\n.ui-text-field {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 16px;\\r\\n\\r\\n  label {\\r\\n    margin-bottom: 8px;\\r\\n    font-size: 14px;\\r\\n    color: #333;\\r\\n  }\\r\\n\\r\\n  input {\\r\\n    padding: 10px;\\r\\n    font-size: 16px;\\r\\n    border: 2px solid #ccc;\\r\\n    border-radius: 4px;\\r\\n    transition: border-color 0.3s ease;\\r\\n\\r\\n    &:focus {\\r\\n      border-color: #007bff;\\r\\n      outline: none;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .error {\\r\\n    margin-top: 8px;\\r\\n    font-size: 12px;\\r\\n    color: #ff6347;\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n// add-kindness-item-form.scss\\r\\n\\r\\n.add-kindness-item-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 16px;\\r\\n  max-width: 400px;\\r\\n  margin: 0 auto;\\r\\n  padding: 24px;\\r\\n  background-color: #f9f9f9;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n\\r\\n  .ui-select-field {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .ui-text-field {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .ui-button {\\r\\n    align-self: flex-end;\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n// ui-link.scss\\r\\n\\r\\n.ui-link {\\r\\n  color: #007bff; // Primary color (blue)\\r\\n  text-decoration: none;\\r\\n  font-weight: 600;\\r\\n  transition: color 0.3s ease, text-decoration 0.3s ease;\\r\\n\\r\\n  &:hover {\\r\\n    color: #0056b3; // Darker shade of primary color\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n\\r\\n  &:active {\\r\\n    color: #003d80; // Even darker shade of primary color\\r\\n  }\\r\\n}\\r\\n\\r\\n// sign-in-form.scss\\r\\n\\r\\n.sign-in-form {\\r\\n  max-width: 400px;\\r\\n  margin: 0 auto;\\r\\n  padding: 24px;\\r\\n  background-color: #f9f9f9;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n\\r\\n  .form-field {\\r\\n    margin-bottom: 16px;\\r\\n\\r\\n    label {\\r\\n      display: block;\\r\\n      margin-bottom: 8px;\\r\\n      font-size: 14px;\\r\\n      color: #333;\\r\\n    }\\r\\n\\r\\n    input {\\r\\n      width: 100%;\\r\\n      padding: 10px;\\r\\n      font-size: 16px;\\r\\n      border: 2px solid #ccc;\\r\\n      border-radius: 4px;\\r\\n      transition: border-color 0.3s ease;\\r\\n\\r\\n      &:focus {\\r\\n        border-color: #007bff;\\r\\n        outline: none;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .submit-button {\\r\\n    display: inline-block;\\r\\n    width: 100%;\\r\\n    padding: 12px;\\r\\n    font-size: 16px;\\r\\n    font-weight: 600;\\r\\n    text-align: center;\\r\\n    color: #fff;\\r\\n    background-color: #007bff; // Primary color (blue)\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n\\r\\n    &:hover {\\r\\n      background-color: #0056b3; // Darker shade of primary color\\r\\n    }\\r\\n\\r\\n    &:disabled {\\r\\n      opacity: 0.65;\\r\\n      cursor: not-allowed;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .error-message {\\r\\n    margin-top: 16px;\\r\\n    font-size: 14px;\\r\\n    color: #ff6347; // Error color (coral)\\r\\n  }\\r\\n}\\r\\n\\r\\n.sign-in-form-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  min-height: 100vh;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTVdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTVdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEzXS5vbmVPZlsxNV0udXNlWzRdIS4vc3JjL2FwcC9BcHAuc2NzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0Esc0RBQXNELGlCQUFpQixpQkFBaUIsR0FBRyxnQ0FBZ0MsOEJBQThCLHVCQUF1QixlQUFlLGtCQUFrQixrQkFBa0Isd0JBQXdCLDZDQUE2QyxrQkFBa0IsbUNBQW1DLG9DQUFvQyxHQUFHLDBDQUEwQyxnQ0FBZ0MsNkNBQTZDLEdBQUcsNERBQTRELG9CQUFvQixnQkFBZ0IsdUJBQXVCLGNBQWMsR0FBRyw0REFBNEQsOEJBQThCLGlCQUFpQixpQkFBaUIsc0JBQXNCLHVCQUF1QixvQkFBb0IsaUJBQWlCLDJDQUEyQyxHQUFHLHdFQUF3RSw4QkFBOEIsR0FBRyxnQkFBZ0IsMEJBQTBCLHVCQUF1QixvQkFBb0IscUJBQXFCLHVCQUF1QixvQkFBb0IsdUJBQXVCLG9GQUFvRixHQUFHLHNCQUFzQiw4QkFBOEIsZ0JBQWdCLDhCQUE4QixHQUFHLHdCQUF3Qiw4QkFBOEIs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QkFBb0IsT0FBTyxpQkFBaUIsc0JBQXNCLHdCQUF3QiwrQkFBK0IsMkJBQTJCLDJDQUEyQyxxQkFBcUIsZ0NBQWdDLHdCQUF3QixTQUFTLE9BQU8sa0JBQWtCLHdCQUF3Qix3QkFBd0IsdUJBQXVCLE9BQU8sS0FBSywyRUFBMkUsb0JBQW9CLDZCQUE2QixnQkFBZ0IsdUJBQXVCLHFCQUFxQixvQkFBb0IsZ0NBQWdDLHlCQUF5QiwrQ0FBK0MsNEJBQTRCLG9CQUFvQixPQUFPLDBCQUEwQixvQkFBb0IsT0FBTyxzQkFBc0IsNkJBQTZCLE9BQU8sS0FBSyw2Q0FBNkMsc0JBQXNCLG1EQUFtRCx1QkFBdUIsNkRBQTZELG1CQUFtQix3QkFBd0IsbUVBQW1FLE9BQU8sb0JBQW9CLHdCQUF3Qiw0Q0FBNEMsS0FBSyxtREFBbUQsdUJBQXVCLHFCQUFxQixvQkFBb0IsZ0NBQWdDLHlCQUF5QiwrQ0FBK0MsdUJBQXVCLDRCQUE0QixtQkFBbUIseUJBQXlCLDZCQUE2QiwwQkFBMEIsc0JBQXNCLFNBQVMsbUJBQW1CLHNCQUFzQix3QkFBd0IsMEJBQTBCLGlDQUFpQyw2QkFBNkIsNkNBQTZDLHVCQUF1QixrQ0FBa0MsMEJBQTBCLFdBQVcsU0FBUyxPQUFPLDBCQUEwQiw4QkFBOEIsb0JBQW9CLHNCQUFzQix3QkFBd0IseUJBQXlCLDJCQUEyQixvQkFBb0IsbUNBQW1DLDRDQUE0QywyQkFBMkIsd0JBQXdCLCtDQUErQyxxQkFBcUIscUNBQXFDLHlDQUF5Qyx3QkFBd0Isd0JBQXdCLDhCQUE4QixTQUFTLE9BQU8sMEJBQTBCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLDZCQUE2QixLQUFLLGlDQUFpQyxvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0IsS0FBSyxtQkFBbUI7QUFDcmtYO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9BcHAuc2Nzcz9mMTlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmtpbmRuZXNzLWl0ZW0sIC5tYWluX3BhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcbi5raW5kbmVzcy1pdGVtOmhvdmVyLCAubWFpbl9wYWdlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5raW5kbmVzcy1pdGVtIC5raW5kbmVzcy10ZXh0LCAubWFpbl9wYWdlIC5raW5kbmVzcy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgZmxleDogMSAxO1xcbn1cXG4ua2luZG5lc3MtaXRlbSAuYWN0aW9uLWJ1dHRvbiwgLm1haW5fcGFnZSAuYWN0aW9uLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MzQ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLmtpbmRuZXNzLWl0ZW0gLmFjdGlvbi1idXR0b246aG92ZXIsIC5tYWluX3BhZ2UgLmFjdGlvbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDgzYjtcXG59XFxuXFxuLnVpLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLnVpLWJ1dHRvbi5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XFxufVxcbi51aS1idXR0b24uc2Vjb25kYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcbi51aS1idXR0b24ub3V0bGluZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzAwN2JmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XFxufVxcbi51aS1idXR0b246aG92ZXIucHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG4udWktYnV0dG9uOmhvdmVyLnNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2MjY4O1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2MjY4O1xcbn1cXG4udWktYnV0dG9uOmhvdmVyLm91dGxpbmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcbi51aS1idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42NTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5tYWluX3BhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjdmYTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcbi5tYWluX3BhZ2UgLmtpbmRuZXNzLXRleHQge1xcbiAgY29sb3I6ICMwMDc5NmI7XFxufVxcblxcbi51aS10ZXh0LWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLnVpLXRleHQtZmllbGQgbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi51aS10ZXh0LWZpZWxkIGlucHV0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLnVpLXRleHQtZmllbGQgaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnVpLXRleHQtZmllbGQgLmVycm9yIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmY2MzQ3O1xcbn1cXG5cXG4uYWRkLWtpbmRuZXNzLWl0ZW0tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLmFkZC1raW5kbmVzcy1pdGVtLWZvcm0gLnVpLXNlbGVjdC1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFkZC1raW5kbmVzcy1pdGVtLWZvcm0gLnVpLXRleHQtZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hZGQta2luZG5lc3MtaXRlbS1mb3JtIC51aS1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi51aS1saW5rIHtcXG4gIGNvbG9yOiAjMDA3YmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2U7XFxufVxcbi51aS1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA1NmIzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi51aS1saW5rOmFjdGl2ZSB7XFxuICBjb2xvcjogIzAwM2Q4MDtcXG59XFxuXFxuLnNpZ24taW4tZm9ybSB7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5zaWduLWluLWZvcm0gLmZvcm0tZmllbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLnNpZ24taW4tZm9ybSAuZm9ybS1maWVsZCBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uc2lnbi1pbi1mb3JtIC5mb3JtLWZpZWxkIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcbn1cXG4uc2lnbi1pbi1mb3JtIC5mb3JtLWZpZWxkIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zaWduLWluLWZvcm0gLnN1Ym1pdC1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG4uc2lnbi1pbi1mb3JtIC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcbi5zaWduLWluLWZvcm0gLnN1Ym1pdC1idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42NTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5zaWduLWluLWZvcm0gLmVycm9yLW1lc3NhZ2Uge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjZmY2MzQ3O1xcbn1cXG5cXG4uc2lnbi1pbi1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXBwL0FwcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFGRjtBQUlFO0VBQ0UsMkJBQUE7RUFDQSx3Q0FBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUhKO0FBTUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUFKSjtBQU1JO0VBQ0UseUJBQUE7QUFKTjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtFQUNFO0FBVEo7QUFhRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBWEo7QUFjRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBWko7QUFlRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBYko7QUFpQkk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBZk47QUFrQkk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBaEJOO0FBbUJJO0VBQ0UseUJBQUE7QUFqQk47QUFxQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFuQko7O0FBd0JBO0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQXRCRjtBQXVCRTtFQUNFLGNBQUE7QUFyQko7O0FBMkJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUF4QkY7QUEwQkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBeEJKO0FBMkJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUF6Qko7QUEyQkk7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUF6Qk47QUE2QkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUEzQko7O0FBa0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUEvQkY7QUFpQ0U7RUFDRSxXQUFBO0FBL0JKO0FBa0NFO0VBQ0UsV0FBQTtBQWhDSjtBQW1DRTtFQUNFLG9CQUFBO0FBakNKOztBQXdDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOERBQUE7RUFBQSxzREFBQTtFQUFBLHlGQUFBO0FBckNGO0FBdUNFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FBckNKO0FBd0NFO0VBQ0UsY0FBQTtBQXRDSjs7QUE0Q0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBekNGO0FBMkNFO0VBQ0UsbUJBQUE7QUF6Q0o7QUEyQ0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXpDTjtBQTRDSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQTFDTjtBQTRDTTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQTFDUjtBQStDRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQTdDSjtBQStDSTtFQUNFLHlCQUFBO0FBN0NOO0FBZ0RJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBOUNOO0FBa0RFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWhESjs7QUFvREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBakRGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vLyBraW5kbmVzcy1pdGVtLnNjc3NcXHJcXG5cXHJcXG4ua2luZG5lc3MtaXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAua2luZG5lc3MtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3Rpb24tYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjM0NztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDgzYjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyB1aS1idXR0b24uc2Nzc1xcclxcblxcclxcbi51aS1idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMTJweCAyNHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHRyYW5zaXRpb246XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLFxcclxcbiAgICBjb2xvciAwLjNzIGVhc2UsXFxyXFxuICAgIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxyXFxuXFxyXFxuICAmLnByaW1hcnkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuc2Vjb25kYXJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2Yzc1N2Q7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLm91dGxpbmVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgICYucHJpbWFyeSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXHJcXG4gICAgICBib3JkZXItY29sb3I6ICMwMDU2YjM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5zZWNvbmRhcnkge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1YTYyNjg7XFxyXFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNWE2MjY4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYub3V0bGluZWQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6ZGlzYWJsZWQge1xcclxcbiAgICBvcGFjaXR5OiAwLjY1O1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vL21haW5cXHJcXG4ubWFpbl9wYWdlIHtcXHJcXG4gIEBleHRlbmQgLmtpbmRuZXNzLWl0ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmN2ZhO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIC5raW5kbmVzcy10ZXh0IHtcXHJcXG4gICAgY29sb3I6ICMwMDc5NmI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIHVpLXRleHQtZmllbGQuc2Nzc1xcclxcblxcclxcbi51aS10ZXh0LWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG5cXHJcXG4gIGxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lcnJvciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBjb2xvcjogI2ZmNjM0NztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLy8gYWRkLWtpbmRuZXNzLWl0ZW0tZm9ybS5zY3NzXFxyXFxuXFxyXFxuLmFkZC1raW5kbmVzcy1pdGVtLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFxyXFxuICAudWktc2VsZWN0LWZpZWxkIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudWktdGV4dC1maWVsZCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVpLWJ1dHRvbiB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vLyB1aS1saW5rLnNjc3NcXHJcXG5cXHJcXG4udWktbGluayB7XFxyXFxuICBjb2xvcjogIzAwN2JmZjsgLy8gUHJpbWFyeSBjb2xvciAoYmx1ZSlcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIHRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2U7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICMwMDU2YjM7IC8vIERhcmtlciBzaGFkZSBvZiBwcmltYXJ5IGNvbG9yXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjphY3RpdmUge1xcclxcbiAgICBjb2xvcjogIzAwM2Q4MDsgLy8gRXZlbiBkYXJrZXIgc2hhZGUgb2YgcHJpbWFyeSBjb2xvclxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBzaWduLWluLWZvcm0uc2Nzc1xcclxcblxcclxcbi5zaWduLWluLWZvcm0ge1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcclxcbiAgLmZvcm0tZmllbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcblxcclxcbiAgICBsYWJlbCB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dCB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3VibWl0LWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgLy8gUHJpbWFyeSBjb2xvciAoYmx1ZSlcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8vIERhcmtlciBzaGFkZSBvZiBwcmltYXJ5IGNvbG9yXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpkaXNhYmxlZCB7XFxyXFxuICAgICAgb3BhY2l0eTogMC42NTtcXHJcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZXJyb3ItbWVzc2FnZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6ICNmZjYzNDc7IC8vIEVycm9yIGNvbG9yIChjb3JhbClcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpZ24taW4tZm9ybS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[15].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[15].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[13].oneOf[15].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[13].oneOf[15].use[4]!./src/app/App.scss\n"));

/***/ })

});