/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/favicons/apple-touch-icon.png":
/*!**************************************************!*\
  !*** ./src/images/favicons/apple-touch-icon.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/7924062da017739303b425e968d32fff.png\";\n\n//# sourceURL=webpack:///./src/images/favicons/apple-touch-icon.png?");

/***/ }),

/***/ "./src/images/favicons/favicon-16x16.png":
/*!***********************************************!*\
  !*** ./src/images/favicons/favicon-16x16.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/6721f2bca81ed791dd3e8cb1aa3fa775.png\";\n\n//# sourceURL=webpack:///./src/images/favicons/favicon-16x16.png?");

/***/ }),

/***/ "./src/images/favicons/favicon-32x32.png":
/*!***********************************************!*\
  !*** ./src/images/favicons/favicon-32x32.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/d60928144e5de5827c1a97cc788dd1c1.png\";\n\n//# sourceURL=webpack:///./src/images/favicons/favicon-32x32.png?");

/***/ }),

/***/ "./src/images/favicons/favicon.ico":
/*!*****************************************!*\
  !*** ./src/images/favicons/favicon.ico ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"favicon.ico\";\n\n//# sourceURL=webpack:///./src/images/favicons/favicon.ico?");

/***/ }),

/***/ "./src/images/favicons/safari-pinned-tab.svg":
/*!***************************************************!*\
  !*** ./src/images/favicons/safari-pinned-tab.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/68d02aa6c6aac6016c6c5523a10d2a67.svg\";\n\n//# sourceURL=webpack:///./src/images/favicons/safari-pinned-tab.svg?");

/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<!DOCTYPE html><html lang=\\\"en\\\"><head><meta charset=\\\"utf-8\\\"><meta content=\\\"i3=edge\\\" http-equiv=\\\"x-ua-compatible\\\"><meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\"><meta name=\\\"robots\\\" content=\\\"index,follow\\\"><meta name=\\\"msapplication-config\\\" content=\\\"/browserconfig.xml\\\"><link rel=\\\"manifest\\\" href=\\\"\" + __webpack_require__(/*! @/site.webmanifest */ \"./src/site.webmanifest\") + \"\\\"><meta name=\\\"theme-color\\\" content=\\\"#{main_color}\\\"><meta name=\\\"msapplication-TileColor\\\" content=\\\"#{main_color}\\\"><link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + __webpack_require__(/*! @/images/favicons/apple-touch-icon.png */ \"./src/images/favicons/apple-touch-icon.png\") + \"\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + __webpack_require__(/*! @/images/favicons/favicon-32x32.png */ \"./src/images/favicons/favicon-32x32.png\") + \"\\\"><link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + __webpack_require__(/*! @/images/favicons/favicon-16x16.png */ \"./src/images/favicons/favicon-16x16.png\") + \"\\\"><link rel=\\\"mask-icon\\\" href=\\\"\" + __webpack_require__(/*! @/images/favicons/safari-pinned-tab.svg */ \"./src/images/favicons/safari-pinned-tab.svg\") + \"\\\" color=\\\"#{main_color}\\\"><link rel=\\\"shortcut icon\\\" href=\\\"\" + __webpack_require__(/*! @/images/favicons/favicon.ico */ \"./src/images/favicons/favicon.ico\") + \"\\\"><meta property=\\\"og:type\\\" content=\\\"website\\\"><meta property=\\\"og:title\\\" content=\\\"marcos ferreira\\\"><meta property=\\\"og:description\\\" content=\\\"0.5x engineer without CREA\\\"><meta property=\\\"og:site_name\\\" content=\\\"marcos ferreira\\\"><meta name=\\\"twitter:card\\\" content=\\\"summary\\\"><meta name=\\\"twitter:creator\\\" content=\\\"@mractos\\\"><meta name=\\\"twitter:url\\\" content=\\\"https://mracos.github.io\\\"><meta name=\\\"twitter:title\\\" content=\\\"marcos\\\"><meta name=\\\"twitter:description\\\" content=\\\"0.5x engineer without CREA\\\"><title>marcos - 0.5x engineer without CREA</title></head><body><main><h1>hi, I'm marcos</h1><p>a 0.5x engineer without CREA</p><div><a target=\\\"_blank\\\" href=\\\"//linkedin.com/in/mracos\\\">linkedin</a>\\n- <a target=\\\"_blank\\\" href=\\\"//github.com/mracos\\\">github</a>\\n- <a target=\\\"_blank\\\" href=\\\"//gitlab.com/mracos\\\">gitlab</a></div><p>this website is powered by\\n<a target=\\\"_blank\\\" href=\\\"//github.com/mracos/mracos.github.io\\\">shiny web scaled event source DDD microservices</a>\\n    &trade;</p></main></body></html>\";\n\n//# sourceURL=webpack:///./src/index.pug?");

/***/ }),

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.sass?");

/***/ }),

/***/ "./src/site.webmanifest":
/*!******************************!*\
  !*** ./src/site.webmanifest ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"site.webmanifest\";\n\n//# sourceURL=webpack:///./src/site.webmanifest?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.pug ./src/sass/main.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/travis/build/mracos/mracos.github.io/src/index.pug */\"./src/index.pug\");\nmodule.exports = __webpack_require__(/*! /home/travis/build/mracos/mracos.github.io/src/sass/main.sass */\"./src/sass/main.sass\");\n\n\n//# sourceURL=webpack:///multi_./src/index.pug_./src/sass/main.sass?");

/***/ })

/******/ });