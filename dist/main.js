/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/main/main.js":
/*!*************************************!*\
  !*** ./src/components/main/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ main)\n/* harmony export */ });\nfunction main() {\r\n    const mainDiv = document.createElement('div');\r\n    mainDiv.setAttribute('id', 'main');\r\n    return mainDiv;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/main/main.js?");

/***/ }),

/***/ "./src/components/navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navbar)\n/* harmony export */ });\n/* harmony import */ var _utils_changePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/changePage */ \"./src/utils/changePage.js\");\n\r\n\r\nfunction navbar() {\r\n    const pages = ['home', 'menu', 'contact'];\r\n\r\n    const navbar = document.createElement('div');\r\n    navbar.setAttribute('id', 'navbar');\r\n\r\n    const links = document.createElement('ul')\r\n    links.setAttribute('id', 'links');\r\n\r\n    pages.forEach((page) => {\r\n        const btn = document.createElement('li');\r\n        btn.innerText = page;\r\n        btn.setAttribute('class', 'navlink');\r\n        btn.setAttribute('id', page);\r\n        btn.addEventListener('click', _utils_changePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n        links.appendChild(btn);\r\n    });\r\n\r\n    navbar.appendChild(links);\r\n\r\n    return navbar;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/navbar/navbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar */ \"./src/components/navbar/navbar.js\");\n/* harmony import */ var _components_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main */ \"./src/components/main/main.js\");\n\r\n\r\n\r\n(function setPage() {\r\n    const content = document.querySelector('#content');\r\n    content.appendChild((0,_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    const mainContent = (0,_components_main_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n    content.appendChild(mainContent);\r\n}())\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/utils/changePage.js":
/*!*********************************!*\
  !*** ./src/utils/changePage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changePage)\n/* harmony export */ });\n\r\nfunction changePage(evt) {\r\n    const page = evt.target.id;\r\n    console.log(page);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/utils/changePage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;