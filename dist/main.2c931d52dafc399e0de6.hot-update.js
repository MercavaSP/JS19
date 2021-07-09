/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так...';\n  var loadMessage = 'Загрузка...';\n  var successMessage = 'Спасибо! Мы с вами свяжемся!';\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.classList.add('status-message');\n\n  var removeStatusMessage = function removeStatusMessage() {\n    var status = document.querySelector('.status-message');\n    if (!status) return;\n    setTimeout(function () {\n      status.remove();\n    }, 5000);\n  };\n\n  var errorInput = function errorInput(inp, text) {\n    var div = inp.parentNode;\n    div = div.querySelector('.input-error');\n\n    if (div) {\n      return;\n    }\n\n    var error = \"<div class=\\\"input-error\\\" style=\\\"color: red;\\\">\".concat(text, \"</div>\");\n    inp.style.border = '2px solid red';\n    inp.insertAdjacentHTML('beforebegin', error);\n    var inputError = document.querySelector('.input-error');\n    setTimeout(function () {\n      inputError.remove();\n      inp.removeAttribute('style');\n    }, 5000);\n  };\n\n  var validateTel = function validateTel(tel) {\n    var str = tel[0].value.replace('+', '').length;\n\n    if (str < 8) {\n      errorInput(tel[0], \"\\u041C\\u0438\\u043D\\u0438\\u043C\\u0443\\u043C 8 \\u0446\\u0438\\u0444\\u0440\");\n      return false;\n    } else {\n      return true;\n    }\n  };\n\n  forms.forEach(function (form) {\n    form.addEventListener('input', function (evt) {\n      var target = evt.target;\n\n      if (target.name === 'user_phone') {\n        if (target.style) {\n          target.style.border = 'none';\n        }\n\n        target.value = target.value.replace(/[^\\+\\d]/g, '');\n\n        if (!/^\\+?(\\d){0,18}$/g.test(target.value)) {\n          target.value = target.value.substring(0, target.value.length - 1);\n        }\n      }\n\n      if (target.name === 'user_name' || target.name === 'user_message') {\n        target.value = target.value.replace(/[^а-я\\-\\_\\.\\!\\~\\*\\']/gi, '');\n      }\n\n      if (target.name === 'user_email') {\n        target.value = target.value.replace(/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/);\n      }\n    });\n\n    var postData = function postData(body) {\n      // console.log('body: ', body);\n      return fetch('./server.php', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(body),\n        mode: 'cors'\n      });\n    };\n\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n\n      var firmTel = _toConsumableArray(event.target.elements).filter(function (item) {\n        return item.name === 'user_phone';\n      });\n\n      if (!validateTel(firmTel)) {\n        return;\n      }\n\n      form.appendChild(statusMessage);\n      statusMessage.style.cssText = \"font-size: 2rem;\\n              color: #fff; \";\n      var formData = new FormData(form);\n      statusMessage.textContent = loadMessage;\n      var body = {};\n\n      var _iterator = _createForOfIteratorHelper(formData.entries()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var val = _step.value;\n          body[val[0]] = val[1];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      var outputData = function outputData() {\n        statusMessage.style.cssText = \"font-size: 2rem;\\n              color: green; \";\n        removeStatusMessage();\n        statusMessage.textContent = successMessage;\n        form.reset();\n      };\n\n      var error = function error() {\n        statusMessage.style.cssText = \"font-size: 2rem;\\n              color: red; \";\n        removeStatusMessage();\n        statusMessage.textContent = errorMessage;\n      };\n\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw 'error !!! ';\n        }\n\n        outputData();\n      })[\"catch\"](error);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b7e983473788c0a4f674")
/******/ })();
/******/ 
/******/ }
);