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

/***/ "./src/getInfo.js":
/*!************************!*\
  !*** ./src/getInfo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"returnInfo\": () => (/* binding */ returnInfo)\n/* harmony export */ });\nasync function getWeatherInfo(cityName) {\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c954fe59dca8548d2eb13416b4f9da3`,\n    { mode: \"cors\" }\n  );\n  const data = await response.json();\n\n  return data;\n}\n\nconst returnInfo = (city = 'Tegucigalpa', metricSystem = true) => {\n  getWeatherInfo(city).then(data => {\n    const {sys: {country: ctr}} = data;\n\n    document.querySelector('#city_country').textContent = `${city}, ${ctr}`;\n    \n    const {weather} = data;\n    const [frst] = weather;\n\n    document.querySelector('#description').textContent = `${frst.main}, ${frst.description}`;\n    \n    const {main: {temp: tmp, feels_like: fl, humidity: hm}} = data;\n\n    document.querySelector('#temperature').textContent = `${metricSystem? (tmp - 273.15).toFixed(2) : (((tmp - 273.15) * 9 / 5) + 32).toFixed(2)} °${metricSystem ? 'C' : 'F'}`;\n    document.querySelector('#thermalSensation').textContent = `Thermal Sensation: ${metricSystem? (fl - 273.15).toFixed(2) : (((fl - 273.15) * 9) / 5 + 32).toFixed(2)} °${metricSystem ? 'C' : 'F'}`;\n    document.querySelector('#humidity').textContent = `Humidity: ${hm}%`;\n\n    const {wind: {speed: spd}} = data;\n\n    document.querySelector('#windSpeed').textContent = `Wind Speed: ${spd}m/s`;\n  });\n};\n\n//# sourceURL=webpack://Weather_App/./src/getInfo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInfo */ \"./src/getInfo.js\");\n\n\nlet metricSystem = true;\n\nconst city = document.querySelector('#cityInput');\n\ndocument.querySelector('#metricSystem').addEventListener('click', () => {\n  metricSystem ? metricSystem = false : metricSystem = true;\n  (0,_getInfo__WEBPACK_IMPORTED_MODULE_0__.returnInfo)(city.value == '' ? 'Tegucigalpa' : city.value , metricSystem);\n});\n\ndocument.querySelector('#cityBtn').addEventListener('click', () => {\n  (0,_getInfo__WEBPACK_IMPORTED_MODULE_0__.returnInfo)(city.value, metricSystem);\n});\n\n(0,_getInfo__WEBPACK_IMPORTED_MODULE_0__.returnInfo)();\n\n\n\n//# sourceURL=webpack://Weather_App/./src/index.js?");

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