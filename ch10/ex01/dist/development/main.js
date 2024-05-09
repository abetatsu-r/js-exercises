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

/***/ "./ch10/ex01/stats.cjs":
/*!*****************************!*\
  !*** ./ch10/ex01/stats.cjs ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("const sum = (x, y) => x + y;\r\nconst square = x => x * x;\r\n\r\nexports.mean = data => data.reduce(sum)/data.length;\r\nexports.stddev = function(d) {\r\n    let m = exports.mean(d);\r\n    return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));\r\n};\n\n//# sourceURL=webpack://preset-js/./ch10/ex01/stats.cjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ch10/ex01/stats.cjs"](0, __webpack_exports__);
/******/ 	
/******/ })()
;