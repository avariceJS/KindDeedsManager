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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".kindness-item, .main_page {\\n  background-color: #f0f0f0;\\n  border-radius: 8px;\\n  width: 20%;\\n  height: 400px;\\n  padding: 16px;\\n  margin-bottom: 16px;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n  display: flex;\\n  justify-content: space-between;\\n  transition: transform 0.2s ease;\\n}\\n.kindness-item:hover, .main_page:hover {\\n  transform: translateY(-4px);\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\\n}\\n.kindness-item .kindness-text, .main_page .kindness-text {\\n  font-size: 18px;\\n  color: #333;\\n  margin-right: 16px;\\n  flex: 1 1;\\n}\\n.kindness-item .action-button, .main_page .action-button {\\n  background-color: #ff6347;\\n  color: white;\\n  border: none;\\n  padding: 8px 16px;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  height: 30px;\\n  transition: background-color 0.3s ease;\\n}\\n.kindness-item .action-button:hover, .main_page .action-button:hover {\\n  background-color: #ff483b;\\n}\\n\\n.ui-button {\\n  display: inline-block;\\n  padding: 12px 24px;\\n  font-size: 16px;\\n  font-weight: 600;\\n  text-align: center;\\n  cursor: pointer;\\n  border-radius: 4px;\\n  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;\\n}\\n.ui-button.primary {\\n  background-color: #007bff;\\n  color: #fff;\\n  border: 2px solid #007bff;\\n}\\n.ui-button.secondary {\\n  background-color: #6c757d;\\n  color: #fff;\\n  border: 2px solid #6c757d;\\n}\\n.ui-button.outlined {\\n  background-color: transparent;\\n  color: #007bff;\\n  border: 2px solid #007bff;\\n}\\n.ui-button:hover.primary {\\n  background-color: #0056b3;\\n  border-color: #0056b3;\\n}\\n.ui-button:hover.secondary {\\n  background-color: #5a6268;\\n  border-color: #5a6268;\\n}\\n.ui-button:hover.outlined {\\n  background-color: #f0f0f0;\\n}\\n.ui-button:disabled {\\n  opacity: 0.65;\\n  cursor: not-allowed;\\n}\\n\\n.main_page {\\n  background-color: #e0f7fa;\\n  width: 200px;\\n  height: 200px;\\n}\\n.main_page .kindness-text {\\n  color: #00796b;\\n}\\n\\n.ui-text-field {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 16px;\\n}\\n.ui-text-field label {\\n  margin-bottom: 8px;\\n  font-size: 14px;\\n  color: #333;\\n}\\n.ui-text-field input {\\n  padding: 10px;\\n  font-size: 16px;\\n  border: 2px solid #ccc;\\n  border-radius: 4px;\\n  transition: border-color 0.3s ease;\\n}\\n.ui-text-field input:focus {\\n  border-color: #007bff;\\n  outline: none;\\n}\\n.ui-text-field .error {\\n  margin-top: 8px;\\n  font-size: 12px;\\n  color: #ff6347;\\n}\\n\\n.add-kindness-item-form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n  max-width: 400px;\\n  margin: 0 auto;\\n  padding: 24px;\\n  background-color: #f9f9f9;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\n}\\n.add-kindness-item-form .ui-select-field {\\n  width: 100%;\\n}\\n.add-kindness-item-form .ui-text-field {\\n  width: 100%;\\n}\\n.add-kindness-item-form .ui-button {\\n  align-self: flex-end;\\n}\\n\\n.ui-link {\\n  color: #007bff;\\n  text-decoration: none;\\n  font-weight: 600;\\n  transition: color 0.3s ease, -webkit-text-decoration 0.3s ease;\\n  transition: color 0.3s ease, text-decoration 0.3s ease;\\n  transition: color 0.3s ease, text-decoration 0.3s ease, -webkit-text-decoration 0.3s ease;\\n}\\n.ui-link:hover {\\n  color: #0056b3;\\n  text-decoration: underline;\\n}\\n.ui-link:active {\\n  color: #003d80;\\n}\\n\\n.sign-in-form-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 100vh;\\n}\\n\\n.sign-in-form {\\n  max-width: 400px;\\n  margin: 0 auto;\\n  padding: 30px;\\n  width: 200px;\\n  background-color: #f9f9f9;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\n}\\n.sign-in-form .form-field {\\n  margin-bottom: 16px;\\n}\\n.sign-in-form .form-field label {\\n  display: block;\\n  margin-bottom: 8px;\\n  font-size: 14px;\\n  color: #333;\\n}\\n.sign-in-form .form-field input {\\n  width: 100%;\\n  padding: 10px;\\n  font-size: 16px;\\n  border: 2px solid #ccc;\\n  border-radius: 4px;\\n  transition: border-color 0.3s ease;\\n}\\n.sign-in-form .form-field input:focus {\\n  border-color: #007bff;\\n  outline: none;\\n}\\n.sign-in-form .submit-button {\\n  display: inline-block;\\n  width: 100%;\\n  padding: 12px;\\n  font-size: 16px;\\n  font-weight: 600;\\n  text-align: center;\\n  color: #fff;\\n  background-color: #007bff;\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease;\\n}\\n.sign-in-form .submit-button:hover {\\n  background-color: #0056b3;\\n}\\n.sign-in-form .submit-button:disabled {\\n  opacity: 0.65;\\n  cursor: not-allowed;\\n}\\n.sign-in-form .error-message {\\n  margin-top: 16px;\\n  font-size: 14px;\\n  color: #ff6347;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/app/App.scss\"],\"names\":[],\"mappings\":\"AAIA;EACE,yBAAA;EACA,kBAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,wCAAA;EACA,aAAA;EACA,8BAAA;EACA,+BAAA;AAHF;AAKE;EACE,2BAAA;EACA,wCAAA;AAHJ;AAME;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;AAJJ;AAOE;EACE,yBAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,sCAAA;AALJ;AAOI;EACE,yBAAA;AALN;;AAYA;EACE,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,+EACE;AAVJ;AAcE;EACE,yBAAA;EACA,WAAA;EACA,yBAAA;AAZJ;AAeE;EACE,yBAAA;EACA,WAAA;EACA,yBAAA;AAbJ;AAgBE;EACE,6BAAA;EACA,cAAA;EACA,yBAAA;AAdJ;AAkBI;EACE,yBAAA;EACA,qBAAA;AAhBN;AAmBI;EACE,yBAAA;EACA,qBAAA;AAjBN;AAoBI;EACE,yBAAA;AAlBN;AAsBE;EACE,aAAA;EACA,mBAAA;AApBJ;;AAyBA;EAEE,yBAAA;EACA,YAAA;EACA,aAAA;AAvBF;AAwBE;EACE,cAAA;AAtBJ;;AA4BA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAzBF;AA2BE;EACE,kBAAA;EACA,eAAA;EACA,WAAA;AAzBJ;AA4BE;EACE,aAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;EACA,kCAAA;AA1BJ;AA4BI;EACE,qBAAA;EACA,aAAA;AA1BN;AA8BE;EACE,eAAA;EACA,eAAA;EACA,cAAA;AA5BJ;;AAmCA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,wCAAA;AAhCF;AAkCE;EACE,WAAA;AAhCJ;AAmCE;EACE,WAAA;AAjCJ;AAoCE;EACE,oBAAA;AAlCJ;;AAyCA;EACE,cAAA;EACA,qBAAA;EACA,gBAAA;EACA,8DAAA;EAAA,sDAAA;EAAA,yFAAA;AAtCF;AAwCE;EACE,cAAA;EACA,0BAAA;AAtCJ;AAyCE;EACE,cAAA;AAvCJ;;AA6CA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;AA1CF;;AA6CA;EACE,gBAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,wCAAA;AA1CF;AA4CE;EACE,mBAAA;AA1CJ;AA4CI;EACE,cAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;AA1CN;AA6CI;EACE,WAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;EACA,kCAAA;AA3CN;AA6CM;EACE,qBAAA;EACA,aAAA;AA3CR;AAgDE;EACE,qBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,sCAAA;AA9CJ;AAiDI;EACE,yBAAA;AA/CN;AAkDI;EACE,aAAA;EACA,mBAAA;AAhDN;AAoDE;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AAlDJ\",\"sourcesContent\":[\"\\r\\n\\r\\n// kindness-item.scss\\r\\n\\r\\n.kindness-item {\\r\\n  background-color: #f0f0f0;\\r\\n  border-radius: 8px;\\r\\n  width: 20%;\\r\\n  height: 400px;\\r\\n  padding: 16px;\\r\\n  margin-bottom: 16px;\\r\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  transition: transform 0.2s ease;\\r\\n\\r\\n  &:hover {\\r\\n    transform: translateY(-4px);\\r\\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\\r\\n  }\\r\\n\\r\\n  .kindness-text {\\r\\n    font-size: 18px;\\r\\n    color: #333;\\r\\n    margin-right: 16px;\\r\\n    flex: 1;\\r\\n  }\\r\\n\\r\\n  .action-button {\\r\\n    background-color: #ff6347;\\r\\n    color: white;\\r\\n    border: none;\\r\\n    padding: 8px 16px;\\r\\n    border-radius: 4px;\\r\\n    cursor: pointer;\\r\\n    height: 30px;\\r\\n    transition: background-color 0.3s ease;\\r\\n\\r\\n    &:hover {\\r\\n      background-color: #ff483b;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\\r\\n// ui-button.scss\\r\\n\\r\\n.ui-button {\\r\\n  display: inline-block;\\r\\n  padding: 12px 24px;\\r\\n  font-size: 16px;\\r\\n  font-weight: 600;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n  border-radius: 4px;\\r\\n  transition:\\r\\n    background-color 0.3s ease,\\r\\n    color 0.3s ease,\\r\\n    border-color 0.3s ease;\\r\\n\\r\\n  &.primary {\\r\\n    background-color: #007bff;\\r\\n    color: #fff;\\r\\n    border: 2px solid #007bff;\\r\\n  }\\r\\n\\r\\n  &.secondary {\\r\\n    background-color: #6c757d;\\r\\n    color: #fff;\\r\\n    border: 2px solid #6c757d;\\r\\n  }\\r\\n\\r\\n  &.outlined {\\r\\n    background-color: transparent;\\r\\n    color: #007bff;\\r\\n    border: 2px solid #007bff;\\r\\n  }\\r\\n\\r\\n  &:hover {\\r\\n    &.primary {\\r\\n      background-color: #0056b3;\\r\\n      border-color: #0056b3;\\r\\n    }\\r\\n\\r\\n    &.secondary {\\r\\n      background-color: #5a6268;\\r\\n      border-color: #5a6268;\\r\\n    }\\r\\n\\r\\n    &.outlined {\\r\\n      background-color: #f0f0f0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  &:disabled {\\r\\n    opacity: 0.65;\\r\\n    cursor: not-allowed;\\r\\n  }\\r\\n}\\r\\n\\r\\n//main\\r\\n.main_page {\\r\\n  @extend .kindness-item;\\r\\n  background-color: #e0f7fa;\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  .kindness-text {\\r\\n    color: #00796b;\\r\\n  }\\r\\n}\\r\\n\\r\\n// ui-text-field.scss\\r\\n\\r\\n.ui-text-field {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 16px;\\r\\n\\r\\n  label {\\r\\n    margin-bottom: 8px;\\r\\n    font-size: 14px;\\r\\n    color: #333;\\r\\n  }\\r\\n\\r\\n  input {\\r\\n    padding: 10px;\\r\\n    font-size: 16px;\\r\\n    border: 2px solid #ccc;\\r\\n    border-radius: 4px;\\r\\n    transition: border-color 0.3s ease;\\r\\n\\r\\n    &:focus {\\r\\n      border-color: #007bff;\\r\\n      outline: none;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .error {\\r\\n    margin-top: 8px;\\r\\n    font-size: 12px;\\r\\n    color: #ff6347;\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n// add-kindness-item-form.scss\\r\\n\\r\\n.add-kindness-item-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 16px;\\r\\n  max-width: 400px;\\r\\n  margin: 0 auto;\\r\\n  padding: 24px;\\r\\n  background-color: #f9f9f9;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n\\r\\n  .ui-select-field {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .ui-text-field {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .ui-button {\\r\\n    align-self: flex-end;\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n// ui-link.scss\\r\\n\\r\\n.ui-link {\\r\\n  color: #007bff; // Primary color (blue)\\r\\n  text-decoration: none;\\r\\n  font-weight: 600;\\r\\n  transition: color 0.3s ease, text-decoration 0.3s ease;\\r\\n\\r\\n  &:hover {\\r\\n    color: #0056b3; // Darker shade of primary color\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n\\r\\n  &:active {\\r\\n    color: #003d80; // Even darker shade of primary color\\r\\n  }\\r\\n}\\r\\n\\r\\n// sign-in-form.scss\\r\\n\\r\\n.sign-in-form-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.sign-in-form {\\r\\n  max-width: 400px;\\r\\n  margin: 0 auto;\\r\\n  padding: 30px;\\r\\n  width: 200px;\\r\\n  background-color: #f9f9f9;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\\r\\n\\r\\n  .form-field {\\r\\n    margin-bottom: 16px;\\r\\n\\r\\n    label {\\r\\n      display: block;\\r\\n      margin-bottom: 8px;\\r\\n      font-size: 14px;\\r\\n      color: #333;\\r\\n    }\\r\\n\\r\\n    input {\\r\\n      width: 100%;\\r\\n      padding: 10px;\\r\\n      font-size: 16px;\\r\\n      border: 2px solid #ccc;\\r\\n      border-radius: 4px;\\r\\n      transition: border-color 0.3s ease;\\r\\n\\r\\n      &:focus {\\r\\n        border-color: #007bff;\\r\\n        outline: none;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .submit-button {\\r\\n    display: inline-block;\\r\\n    width: 100%;\\r\\n    padding: 12px;\\r\\n    font-size: 16px;\\r\\n    font-weight: 600;\\r\\n    text-align: center;\\r\\n    color: #fff;\\r\\n    background-color: #007bff; // Primary color (blue)\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n    \\r\\n\\r\\n    &:hover {\\r\\n      background-color: #0056b3; // Darker shade of primary color\\r\\n    }\\r\\n\\r\\n    &:disabled {\\r\\n      opacity: 0.65;\\r\\n      cursor: not-allowed;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .error-message {\\r\\n    margin-top: 16px;\\r\\n    font-size: 14px;\\r\\n    color: #ff6347; // Error color (coral)\\r\\n  }\\r\\n}\\r\\n\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTVdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTVdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbMTVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEzXS5vbmVPZlsxNV0udXNlWzRdIS4vc3JjL2FwcC9BcHAuc2NzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0Esc0VBQXNFLDhCQUE4Qix1QkFBdUIsZUFBZSxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw2Q0FBNkMsa0JBQWtCLG1DQUFtQyxvQ0FBb0MsR0FBRywwQ0FBMEMsZ0NBQWdDLDZDQUE2QyxHQUFHLDREQUE0RCxvQkFBb0IsZ0JBQWdCLHVCQUF1QixjQUFjLEdBQUcsNERBQTRELDhCQUE4QixpQkFBaUIsaUJBQWlCLHNCQUFzQix1QkFBdUIsb0JBQW9CLGlCQUFpQiwyQ0FBMkMsR0FBRyx3RUFBd0UsOEJBQThCLEdBQUcsZ0JBQWdCLDBCQUEwQix1QkFBdUIsb0JBQW9CLHFCQUFxQix1QkFBdUIsb0JBQW9CLHVCQUF1QixvRkFBb0YsR0FBRyxzQkFBc0IsOEJBQThCLGdCQUFnQiw4QkFBOEIsR0FBRyx3QkFBd0IsOEJBQThCLGdCQUFnQiw4QkFBOEIsR0FBRyx1QkFBdUIs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Z0NBQWdDLHdCQUF3QixTQUFTLE9BQU8sa0JBQWtCLHdCQUF3Qix3QkFBd0IsdUJBQXVCLE9BQU8sS0FBSywyRUFBMkUsb0JBQW9CLDZCQUE2QixnQkFBZ0IsdUJBQXVCLHFCQUFxQixvQkFBb0IsZ0NBQWdDLHlCQUF5QiwrQ0FBK0MsNEJBQTRCLG9CQUFvQixPQUFPLDBCQUEwQixvQkFBb0IsT0FBTyxzQkFBc0IsNkJBQTZCLE9BQU8sS0FBSyw2Q0FBNkMsc0JBQXNCLG1EQUFtRCx1QkFBdUIsNkRBQTZELG1CQUFtQix3QkFBd0IsbUVBQW1FLE9BQU8sb0JBQW9CLHdCQUF3Qiw0Q0FBNEMsS0FBSyw2REFBNkQsb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLEtBQUssdUJBQXVCLHVCQUF1QixxQkFBcUIsb0JBQW9CLG1CQUFtQixnQ0FBZ0MseUJBQXlCLCtDQUErQyx1QkFBdUIsNEJBQTRCLG1CQUFtQix5QkFBeUIsNkJBQTZCLDBCQUEwQixzQkFBc0IsU0FBUyxtQkFBbUIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsaUNBQWlDLDZCQUE2Qiw2Q0FBNkMsdUJBQXVCLGtDQUFrQywwQkFBMEIsV0FBVyxTQUFTLE9BQU8sMEJBQTBCLDhCQUE4QixvQkFBb0Isc0JBQXNCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLG9CQUFvQixtQ0FBbUMsNENBQTRDLDJCQUEyQix3QkFBd0IsK0NBQStDLDZCQUE2QixxQ0FBcUMseUNBQXlDLHdCQUF3Qix3QkFBd0IsOEJBQThCLFNBQVMsT0FBTywwQkFBMEIseUJBQXlCLHdCQUF3Qix3QkFBd0IsNkJBQTZCLEtBQUssMkJBQTJCO0FBQ3QvVztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQXBwLnNjc3M/ZjE5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmtpbmRuZXNzLWl0ZW0sIC5tYWluX3BhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcbi5raW5kbmVzcy1pdGVtOmhvdmVyLCAubWFpbl9wYWdlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5raW5kbmVzcy1pdGVtIC5raW5kbmVzcy10ZXh0LCAubWFpbl9wYWdlIC5raW5kbmVzcy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgZmxleDogMSAxO1xcbn1cXG4ua2luZG5lc3MtaXRlbSAuYWN0aW9uLWJ1dHRvbiwgLm1haW5fcGFnZSAuYWN0aW9uLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MzQ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLmtpbmRuZXNzLWl0ZW0gLmFjdGlvbi1idXR0b246aG92ZXIsIC5tYWluX3BhZ2UgLmFjdGlvbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDgzYjtcXG59XFxuXFxuLnVpLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLnVpLWJ1dHRvbi5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XFxufVxcbi51aS1idXR0b24uc2Vjb25kYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2Yzc1N2Q7XFxufVxcbi51aS1idXR0b24ub3V0bGluZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzAwN2JmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XFxufVxcbi51aS1idXR0b246aG92ZXIucHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG4udWktYnV0dG9uOmhvdmVyLnNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2MjY4O1xcbiAgYm9yZGVyLWNvbG9yOiAjNWE2MjY4O1xcbn1cXG4udWktYnV0dG9uOmhvdmVyLm91dGxpbmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcbi51aS1idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42NTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5tYWluX3BhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjdmYTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcbi5tYWluX3BhZ2UgLmtpbmRuZXNzLXRleHQge1xcbiAgY29sb3I6ICMwMDc5NmI7XFxufVxcblxcbi51aS10ZXh0LWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLnVpLXRleHQtZmllbGQgbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi51aS10ZXh0LWZpZWxkIGlucHV0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuLnVpLXRleHQtZmllbGQgaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnVpLXRleHQtZmllbGQgLmVycm9yIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmY2MzQ3O1xcbn1cXG5cXG4uYWRkLWtpbmRuZXNzLWl0ZW0tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLmFkZC1raW5kbmVzcy1pdGVtLWZvcm0gLnVpLXNlbGVjdC1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFkZC1raW5kbmVzcy1pdGVtLWZvcm0gLnVpLXRleHQtZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hZGQta2luZG5lc3MtaXRlbS1mb3JtIC51aS1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi51aS1saW5rIHtcXG4gIGNvbG9yOiAjMDA3YmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbiAwLjNzIGVhc2U7XFxufVxcbi51aS1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDA1NmIzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi51aS1saW5rOmFjdGl2ZSB7XFxuICBjb2xvcjogIzAwM2Q4MDtcXG59XFxuXFxuLnNpZ24taW4tZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uc2lnbi1pbi1mb3JtIHtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLnNpZ24taW4tZm9ybSAuZm9ybS1maWVsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4uc2lnbi1pbi1mb3JtIC5mb3JtLWZpZWxkIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5zaWduLWluLWZvcm0gLmZvcm0tZmllbGQgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxufVxcbi5zaWduLWluLWZvcm0gLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnNpZ24taW4tZm9ybSAuc3VibWl0LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcbi5zaWduLWluLWZvcm0gLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuLnNpZ24taW4tZm9ybSAuc3VibWl0LWJ1dHRvbjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjY1O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnNpZ24taW4tZm9ybSAuZXJyb3ItbWVzc2FnZSB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICNmZjYzNDc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXBwL0FwcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUhGO0FBS0U7RUFDRSwyQkFBQTtFQUNBLHdDQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSko7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQUxKO0FBT0k7RUFDRSx5QkFBQTtBQUxOOztBQVlBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0VBQ0U7QUFWSjtBQWNFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFaSjtBQWVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFiSjtBQWdCRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBZEo7QUFrQkk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBaEJOO0FBbUJJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQWpCTjtBQW9CSTtFQUNFLHlCQUFBO0FBbEJOO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBcEJKOztBQXlCQTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUF2QkY7QUF3QkU7RUFDRSxjQUFBO0FBdEJKOztBQTRCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBekJGO0FBMkJFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXpCSjtBQTRCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBMUJKO0FBNEJJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBMUJOO0FBOEJFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBNUJKOztBQW1DQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBaENGO0FBa0NFO0VBQ0UsV0FBQTtBQWhDSjtBQW1DRTtFQUNFLFdBQUE7QUFqQ0o7QUFvQ0U7RUFDRSxvQkFBQTtBQWxDSjs7QUF5Q0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhEQUFBO0VBQUEsc0RBQUE7RUFBQSx5RkFBQTtBQXRDRjtBQXdDRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQXRDSjtBQXlDRTtFQUNFLGNBQUE7QUF2Q0o7O0FBNkNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTFDRjs7QUE2Q0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQTFDRjtBQTRDRTtFQUNFLG1CQUFBO0FBMUNKO0FBNENJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUExQ047QUE2Q0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUEzQ047QUE2Q007RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUEzQ1I7QUFnREU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUE5Q0o7QUFpREk7RUFDRSx5QkFBQTtBQS9DTjtBQWtESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWhETjtBQW9ERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFsREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuXFxyXFxuLy8ga2luZG5lc3MtaXRlbS5zY3NzXFxyXFxuXFxyXFxuLmtpbmRuZXNzLWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmtpbmRuZXNzLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWN0aW9uLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYzNDc7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ4M2I7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gdWktYnV0dG9uLnNjc3NcXHJcXG5cXHJcXG4udWktYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB0cmFuc2l0aW9uOlxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSxcXHJcXG4gICAgY29sb3IgMC4zcyBlYXNlLFxcclxcbiAgICBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcclxcblxcclxcbiAgJi5wcmltYXJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLnNlY29uZGFyeSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNmM3NTdkO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5vdXRsaW5lZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogIzAwN2JmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICAmLnByaW1hcnkge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxyXFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA1NmIzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuc2Vjb25kYXJ5IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2MjY4O1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogIzVhNjI2ODtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLm91dGxpbmVkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmRpc2FibGVkIHtcXHJcXG4gICAgb3BhY2l0eTogMC42NTtcXHJcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy9tYWluXFxyXFxuLm1haW5fcGFnZSB7XFxyXFxuICBAZXh0ZW5kIC5raW5kbmVzcy1pdGVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjdmYTtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICAua2luZG5lc3MtdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjMDA3OTZiO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyB1aS10ZXh0LWZpZWxkLnNjc3NcXHJcXG5cXHJcXG4udWktdGV4dC1maWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuXFxyXFxuICBsYWJlbCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGlucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxyXFxuXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZXJyb3Ige1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgY29sb3I6ICNmZjYzNDc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8vIGFkZC1raW5kbmVzcy1pdGVtLWZvcm0uc2Nzc1xcclxcblxcclxcbi5hZGQta2luZG5lc3MtaXRlbS1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcclxcbiAgLnVpLXNlbGVjdC1maWVsZCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVpLXRleHQtZmllbGQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51aS1idXR0b24ge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLy8gdWktbGluay5zY3NzXFxyXFxuXFxyXFxuLnVpLWxpbmsge1xcclxcbiAgY29sb3I6ICMwMDdiZmY7IC8vIFByaW1hcnkgY29sb3IgKGJsdWUpXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCB0ZXh0LWRlY29yYXRpb24gMC4zcyBlYXNlO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjMDA1NmIzOyAvLyBEYXJrZXIgc2hhZGUgb2YgcHJpbWFyeSBjb2xvclxcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6ICMwMDNkODA7IC8vIEV2ZW4gZGFya2VyIHNoYWRlIG9mIHByaW1hcnkgY29sb3JcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gc2lnbi1pbi1mb3JtLnNjc3NcXHJcXG5cXHJcXG4uc2lnbi1pbi1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5zaWduLWluLWZvcm0ge1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcclxcbiAgLmZvcm0tZmllbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcblxcclxcbiAgICBsYWJlbCB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dCB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHJcXG4gICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3VibWl0LWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgLy8gUHJpbWFyeSBjb2xvciAoYmx1ZSlcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvLyBEYXJrZXIgc2hhZGUgb2YgcHJpbWFyeSBjb2xvclxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6ZGlzYWJsZWQge1xcclxcbiAgICAgIG9wYWNpdHk6IDAuNjU7XFxyXFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmVycm9yLW1lc3NhZ2Uge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjZmY2MzQ3OyAvLyBFcnJvciBjb2xvciAoY29yYWwpXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[15].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[15].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[13].oneOf[15].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[13].oneOf[15].use[4]!./src/app/App.scss\n"));

/***/ })

});