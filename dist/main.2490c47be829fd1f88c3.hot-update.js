/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_formRules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/formRules */ \"./src/modules/formRules.js\");\n/* harmony import */ var _modules_comandBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/comandBlock */ \"./src/modules/comandBlock.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('10 july 2021');\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_comandBlock__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_formRules__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_5__.default)(100);\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/formRules.js":
/*!**********************************!*\
  !*** ./src/modules/formRules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formsRules = function formsRules() {\n  var body = document.querySelector('body');\n  body.addEventListener('input', function (e) {\n    var target = e.target;\n\n    if (e.inputType === 'insertFromPaste') {\n      target.value = '';\n      return;\n    }\n\n    if (target.matches('#form2-name,#form1-name,#form3-name')) {\n      target.value = target.value.replace(/[^а-я\\s\\-]/i, '');\n    } else if (target.matches('#form2-email,#form1-email,,#form3-email')) {\n      target.value = target.value.replace(/[^a-z\\@\\-\\_\\.\\!\\~\\*\\']/gi, '');\n    } else if (target.matches('#form2-phone,#form1-phone,#form3-phone')) {\n      target.value = target.value.replace(/[^\\d\\+]/g, '');\n    } else if (true) {\n      target.value = target.value.replace(/[^а-я\\s\\d\\.\\,\\?\\!\\;\\:\\(\\)\\\"\\-]/i, '');\n    }\n  });\n  body.addEventListener('focusout', function (e) {\n    var target = e.target;\n\n    if (target.value) {\n      if (target.matches('#form2-name,#form1-name'\n      /*,#form2-message'*/\n      )) {\n        target.value = target.value.replace(/^\\s+|\\s+$/g, '');\n        target.value = target.value.replace(/\\s{2,}/g, ' ');\n      } else if (target.matches('#form2-email,#form1-email,#form3-email')) {\n        target.value = target.value.replace(/^\\-+|\\-+$/g, '');\n        target.value = target.value.replace(/\\-{2,}/g, '-');\n      }\n\n      if (target.matches('#form2-name,#form1-name,#form3-name') && target.value) {\n        var str = target.value;\n        str = str.split(' ');\n        str.forEach(function (el, id) {\n          return str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase();\n        });\n        str = str.join(' ');\n        target.value = str;\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsRules);\n\n//# sourceURL=webpack://3dglo/./src/modules/formRules.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("abbdb07401e2b7309731")
/******/ })();
/******/ 
/******/ }
);