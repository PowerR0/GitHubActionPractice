/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("const dayOfTheWeek = (date = new Date()) => {\r\n  const days = [\r\n    \"Sunday\",\r\n    \"Monday\",\r\n    \"Tuesday\",\r\n    \"Wednesday\",\r\n    \"Thursday\",\r\n    \"Friday\",\r\n    \"Saturday\",\r\n  ];\r\n\r\n  return days[date.getDay()];\r\n};\r\n\r\nconst monthOfTheYear = (date = new Date()) => {\r\n  const month = [\r\n    \"January\",\r\n    \"Februrary\",\r\n    \"March\",\r\n    \"April\",\r\n    \"May\",\r\n    \"June\",\r\n    \"July\",\r\n    \"August\",\r\n    \"September\",\r\n    \"October\",\r\n    \"November\",\r\n    \"December\",\r\n  ];\r\n\r\n  return month[date.getMonth()];\r\n};\r\n\r\ntry {\r\n  document.getElementById(\"day\").innerText = dayOfTheWeek();\r\n  document.getElementById(\"month\").innerText = monthOfTheYear();\r\n} catch (err) {}\r\n\r\nexports.dayOfTheWeek = dayOfTheWeek;\r\nexports.monthOfTheYear = monthOfTheYear;\r\n\n\n//# sourceURL=webpack://devops/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;