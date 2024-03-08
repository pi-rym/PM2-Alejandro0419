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

/***/ "./scripts/dataToCards.js":
/*!********************************!*\
  !*** ./scripts/dataToCards.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderMovies = __webpack_require__(/*! ./renderMovies */ \"./scripts/renderMovies.js\")\r\n\r\nfunction dataToCards (data){\r\n    const contenedor = document.getElementById('dealer1')\r\n    const listaDeObj = data;\r\n    const listaCards = listaDeObj.map(renderMovies);\r\n    listaCards.forEach(card =>{\r\n        contenedor.appendChild(card);\r\n    });\r\n}\r\nmodule.exports = (dataToCards);\n\n//# sourceURL=webpack://front/./scripts/dataToCards.js?");

/***/ }),

/***/ "./scripts/handler.js":
/*!****************************!*\
  !*** ./scripts/handler.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const dataToCards = __webpack_require__(/*! ./dataToCards */ \"./scripts/dataToCards.js\");\r\n\r\nfunction getMovies() {\r\n  $.get(\"https://students-api.2.us-1.fl0.io/movies\", (data) =>\r\n    dataToCards(data)\r\n  );\r\n}\r\n\r\nmodule.exports = getMovies;\r\n\n\n//# sourceURL=webpack://front/./scripts/handler.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const getMovies = __webpack_require__(/*! ./handler */ \"./scripts/handler.js\")\r\n\r\ngetMovies()\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderMovies.js":
/*!*********************************!*\
  !*** ./scripts/renderMovies.js ***!
  \*********************************/
/***/ ((module) => {

eval("function renderMovies(movie){\r\n    const divCard = document.createElement('div');\r\n    divCard.classList.add('card')\r\n    divCard.classList.add('bg-dark-subtle')\r\n\r\n    divCard.innerHTML =` <img src=\"${movie.poster}\" alt=\"${movie.title}\" class=\"card-img-top\">\r\n    <div class=\"card-body bg-dark-subtle\">\r\n    <h2 class=\"movieTitle m-3\">${movie.title} (${movie.year})</h2>\r\n    <p class=\"card-text\"><strong>Director: </strong> ${movie.director}</p>\r\n    <p class=\"card-text\"><strong>Duracion: </strong> ${movie.duration}</p>\r\n    <p class=\"card-text\"><strong>Género: </strong> ${movie.genre.join(', ')}</p>\r\n    <p class=\"card-text\"><strong>Rate: </strong> ${movie.rate}</p>\r\n    </div>\r\n    `\r\n    return divCard;\r\n}\r\nmodule.exports =(renderMovies);\n\n//# sourceURL=webpack://front/./scripts/renderMovies.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;