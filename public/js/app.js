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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/@babel/runtime/regenerator/index.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header.vue */ "./resources/js/components/header.vue");
/* harmony import */ var _components_navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar.vue */ "./resources/js/components/navbar.vue");
/* harmony import */ var _components_footer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer.vue */ "./resources/js/components/footer.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: _components_header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navbar: _components_navbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _components_footer_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      prices: [],
      data_decimals: []
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "http://localhost:8000/api/posts";
              _context.next = 3;
              return _this.axios.get(url).then(function (response) {
                _this.setPrice(response.data.data);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    formatCurrency: function formatCurrency(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    },
    setPrice: function setPrice(temp) {
      var _this2 = this;

      temp.map(function (price) {
        price.content = _this2.formatCurrency(price.content);

        if (price.content.indexOf('.') != -1) {
          var decimalOnly = price.content.toString().split('.')[1];

          _this2.data_decimals.push({
            decimal: decimalOnly
          });
        }

        price.content = price.content.toString().split('.')[0];

        _this2.prices.push(price);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg__footer[data-v-585a4226] {\n    background: #303030;\n}\n.title__footer[data-v-585a4226] {\n    font-size: 14px;\n    color: #8e8e8e;\n}\n.content__footer p[data-v-585a4226] {\n    margin: 0;\n    font-size: 12px;\n    line-height: 30px;\n}\n.btn__input[data-v-585a4226] {\n    position: relative;\n    left: 133px;\n    width: 50%;\n    height: 50;\n    top: -49px;\n}\n.btn__input span[data-v-585a4226] {\n    position: relative;\n    top:5px;\n    background: #00a2f3;\n    color: #ffffff;\n}\n.desc__letter[data-v-585a4226] {\n    position: relative;\n    top: -35px;\n}\n.desc__letter p[data-v-585a4226], .desc__payment p[data-v-585a4226]{\n    color: #8e8e8e;\n    font-size: 14px;\n}\n.desc__footer-bottom p[data-v-585a4226] {\n    font-size: 11px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#navbarSupportedContent[data-v-11e733ca] {\n    margin-left: 145px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh3[data-v-0b5dcf8e] {\n    font-weight: 800;\n    font-size: 50px;\n    line-height: normal;\n}\nh4[data-v-0b5dcf8e] {\n    font-weight: normal;\n    font-size: 25px;\n    line-height: 39px;\n    letter-spacing: .05em;\n    margin-bottom: 20px;\n}\n.list__item[data-v-0b5dcf8e] {\n    list-style: none;\n}\nh5[data-v-0b5dcf8e] {\n    font-weight: 900;\n    font-size: 30px;\n    line-height: normal;\n}\n.border__btn[data-v-0b5dcf8e] {\n    border: 2px solid\n}\n.banner[data-v-0b5dcf8e] {\n    max-width: 100%;\n}\n.title__service[data-v-0b5dcf8e] {\n    font-weight: 600;\n    font-size: 25px;\n}\n.price__discount[data-v-0b5dcf8e] {\n    text-decoration: line-through;\n}\n.divider[data-v-0b5dcf8e] {\n    width: 100px;\n    margin: auto;\n    height: 5px;\n    background: #e7e8ea;\n    border-radius: 5px;\n}\n.title__paket[data-v-0b5dcf8e] {\n    font-weight: 950;\n    font-size: 20px;\n    letter-spacing: 0.04em;\n    margin: 0px;\n}\n.desc__paket[data-v-0b5dcf8e] {\n    margin: 0px;\n}\n.title__support[data-v-0b5dcf8e] {\n    letter-spacing: 0.05em;\n    line-height: 35px;\n}\n.bg__info[data-v-0b5dcf8e] {\n    background: #f7f7f7;\n}\n.text__rp[data-v-0b5dcf8e], .text__rp-top[data-v-0b5dcf8e] {\n    font-size: 20px;\n    position: relative;\n    top: -25px;\n}\n.text__rp-top[data-v-0b5dcf8e], .text__rp-bottom[data-v-0b5dcf8e] {\n    font-weight: 900;\n}\n.content__price h6[data-v-0b5dcf8e] {\n    font-size: 15px;\n    margin-bottom: 15px;\n}\n.wrapper__price[data-v-0b5dcf8e] {\n    cursor: pointer;\n    transition: box-shadow .3s;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n}\n.wrapper__price[data-v-0b5dcf8e]:hover{\n   box-shadow: 0 0 15px rgba(33,33,33,.2);\n}\n.btn__chat[data-v-0b5dcf8e]:hover {\n    background: #007bff;\n    border-color: #ffffff;\n    color: #ffffff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ "./node_modules/vue-axios/dist/vue-axios.min.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-axios/dist/vue-axios.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/vue-axios/dist/vue-axios.min.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app.vue?vue&type=template&id=23235493&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/app.vue?vue&type=template&id=23235493& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/footer.vue?vue&type=template&id=585a4226&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/footer.vue?vue&type=template&id=585a4226&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "bg__footer" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "py-3 py-lg-5 d-lg-flex text-light" }, [
          _c("div", { staticClass: "col p-0 mb-4 mb-lg-0" }, [
            _c("p", { staticClass: "title__footer" }, [_vm._v("HUBUNGI KAMI")]),
            _vm._v(" "),
            _c("div", { staticClass: "content__footer mb-4" }, [
              _c("p", [_vm._v("0274-5305505")]),
              _vm._v(" "),
              _c("p", [_vm._v("Senin - Minggu")]),
              _vm._v(" "),
              _c("p", [_vm._v("24 Jam Nonstop")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "content__footer" }, [
              _c("p", [_vm._v("Jl. Selokan Mataram Monjali")]),
              _vm._v(" "),
              _c("p", [_vm._v("Karangjati MT I/304")]),
              _vm._v(" "),
              _c("p", [_vm._v("Sinduadi, Mlati, Sleman")]),
              _vm._v(" "),
              _c("p", [_vm._v("Yogyakarta 55284")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col p-0 mb-4 mb-lg-0" }, [
            _c("p", { staticClass: "title__footer" }, [_vm._v("LAYANAN")]),
            _vm._v(" "),
            _c("div", { staticClass: "content__footer" }, [
              _c("p", [_vm._v("Domain")]),
              _vm._v(" "),
              _c("p", [_vm._v("Shared Hosting")]),
              _vm._v(" "),
              _c("p", [_vm._v("Cloud VPS Hosting")]),
              _vm._v(" "),
              _c("p", [_vm._v("Managed VPS Hosting")]),
              _vm._v(" "),
              _c("p", [_vm._v("Web Builder")]),
              _vm._v(" "),
              _c("p", [_vm._v("Keamanan SSL / HTTPS")]),
              _vm._v(" "),
              _c("p", [_vm._v("Jasa Pembuatan Website")]),
              _vm._v(" "),
              _c("p", [_vm._v("Program Afiliasi")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col p-0 mb-4 mb-lg-0" }, [
            _c("p", { staticClass: "title__footer" }, [
              _vm._v("SERVICE HOSTING")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "content__footer" }, [
              _c("p", [_vm._v("Hosting Murah")]),
              _vm._v(" "),
              _c("p", [_vm._v("Hosting Indonesia")]),
              _vm._v(" "),
              _c("p", [_vm._v("Hosting Singapura SG")]),
              _vm._v(" "),
              _c("p", [_vm._v("Hosting PHP")]),
              _vm._v(" "),
              _c("p", [_vm._v("Hosting Wordpress")]),
              _vm._v(" "),
              _c("p", [_vm._v("Hosting Laravel")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col p-0" }, [
            _c("p", { staticClass: "title__footer" }, [_vm._v("TUTORIAL")]),
            _vm._v(" "),
            _c("div", { staticClass: "content__footer" }, [
              _c("p", [_vm._v("Knowledgebase")]),
              _vm._v(" "),
              _c("p", [_vm._v("Blog")]),
              _vm._v(" "),
              _c("p", [_vm._v("Cara Pembayaran")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "py-3 py-lg-5 d-lg-flex text-light" }, [
          _c("div", { staticClass: "col p-0" }, [
            _c("p", { staticClass: "title__footer" }, [_vm._v("TENTANG KAMI")]),
            _vm._v(" "),
            _c("div", { staticClass: "content__footer mb-4" }, [
              _c("p", [_vm._v("Tim Niagahoster")]),
              _vm._v(" "),
              _c("p", [_vm._v("Karir")]),
              _vm._v(" "),
              _c("p", [_vm._v("Events")]),
              _vm._v(" "),
              _c("p", [_vm._v("Penawaran & Promo Spesial")]),
              _vm._v(" "),
              _c("p", [_vm._v("Kontak Kami")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col p-0 mb-4 mb-lg-0" }, [
            _c("p", { staticClass: "title__footer" }, [
              _vm._v("KENAPA PILIH NIAGAHOSTER?")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "content__footer" }, [
              _c("p", [_vm._v("Support Terbaik")]),
              _vm._v(" "),
              _c("p", [_vm._v("Garansi Harga Termurah")]),
              _vm._v(" "),
              _c("p", [_vm._v("Domain Gratis Selamanya")]),
              _vm._v(" "),
              _c("p", [_vm._v("Datacenter Hosting Terbaik")]),
              _vm._v(" "),
              _c("p", [_vm._v("Review Pelanggan")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col p-0" }, [
            _c("p", { staticClass: "title__footer" }, [_vm._v("NEWSLETTER")]),
            _vm._v(" "),
            _c("div", [
              _c("input", {
                staticClass: "form-control p-4 rounded-pill",
                attrs: {
                  type: "text",
                  placeholder: "Email",
                  "aria-label": "Recipient's username"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: " btn__input" }, [
                _c("span", { staticClass: "input-group-text rounded-pill" }, [
                  _vm._v("Berlangganan")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "desc__letter" }, [
                _c("p", { staticClass: "m-0" }, [
                  _vm._v("Dapatkan promo dan konten menarik")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "m-0" }, [
                  _vm._v("dari penyedia hosting terbaik Anda.")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col p-0" }, [
            _c("div", { staticClass: "mt-4 ml-3 text-center text-lg-right" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../../../public/assets/image/23.png */ "./public/assets/image/23.png") }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "py-3 py-lg-5 d-flex text-light" }, [
          _c("div", { staticClass: "col p-0" }, [
            _c("p", { staticClass: "title__footer" }, [_vm._v("PEMBAYARAN")]),
            _vm._v(" "),
            _c("div", { staticClass: "content__footer mb-4" }, [
              _c("img", {
                attrs: {
                  src: __webpack_require__(/*! ../../../public/assets/image/payment.png */ "./public/assets/image/payment.png")
                }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../../../public/assets/image/pay2.png */ "./public/assets/image/pay2.png") }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "desc__payment" }, [
              _c("p", [
                _vm._v(
                  "Aktivasi instan dengan e-Payment Hosting dan domain langsung aktif!"
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "border-bottom border-dark" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "py-3 d-lg-flex justify-content-between text-light" },
          [
            _c("div", { staticClass: "desc__footer-bottom" }, [
              _c("p", [
                _vm._v(
                  "Copyright ©2016 Niagahoster | Hosting powered by PHP7, CloudLinux, CloudFlare, BitNinja and DC Biznet Technovillage Jakarta"
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "desc__footer-bottom" }, [
              _c("p", [_vm._v("Syarat dan Ketentuan | Kebijakan Privasi")])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=template&id=798ca618&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/header.vue?vue&type=template&id=798ca618& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "p-3 border-bottom" }, [
      _c("div", { staticClass: "d-flex container-lg px-0 px-lg-2" }, [
        _c("div", { staticClass: "col-6 d-none d-lg-block text__header" }, [
          _c("div", [
            _c("small", { staticClass: "m-0" }, [
              _vm._v("Gratis Ebook 9 Cara Cerdas Menggunakan Domain [x]")
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "col-12  col-lg-6 d-flex justify-content-end text__header"
          },
          [
            _c("div", { staticClass: "mr-4 d-flex" }, [
              _c("div", { staticClass: "align-self-center mr-2" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../public/assets/image/communications.png */ "./public/assets/image/communications.png")
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-0" }, [_vm._v("0274-5305505")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mr-4 d-flex" }, [
              _c("div", { staticClass: "align-self-center mr-2" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../public/assets/image/sms.png */ "./public/assets/image/sms.png")
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-0" }, [_vm._v("Live Chat")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex" }, [
              _c("div", { staticClass: "align-self-center mr-2" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../../public/assets/image/interface.png */ "./public/assets/image/interface.png")
                  }
                })
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "m-0" }, [_vm._v("Member Area")])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "p-3 border-bottom" }, [
      _c("div", { staticClass: "container p-0" }, [
        _c("nav", { staticClass: "navbar navbar-expand-lg navbar-light p-0" }, [
          _c("div", { staticClass: "col-10 col-md-3 p-0 p-lg-2" }, [
            _c("div", [
              _c("img", {
                staticClass: "w-75",
                attrs: { src: __webpack_require__(/*! ../../../public/assets/image/ex.png */ "./public/assets/image/ex.png") }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "navbar-toggler",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
              }
            },
            [_c("span", { staticClass: "navbar-toggler-icon" })]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarSupportedContent" }
            },
            [
              _c("ul", { staticClass: "navbar-nav mr-auto" }, [
                _c("li", { staticClass: "nav-item active" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Hosting "),
                    _c("span", { staticClass: "sr-only" }, [
                      _vm._v("(current)")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Domain")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Server")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Website")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Afiliasi")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Promo")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Pembayaran")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Review")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Kontak")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                    _vm._v("Blog")
                  ])
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("Header"),
      _vm._v(" "),
      _c("Navbar"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "container-lg pb-5" }, [
        _c(
          "div",
          { staticClass: "row row-cols-lg-4 justify-content-center" },
          _vm._l(_vm.prices, function(price, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "border col-lg-3 p-0 m-4 m-lg-0 wrapper__price"
              },
              [
                _c(
                  "div",
                  { staticClass: "border-bottom px-4 py-2 text-center" },
                  [
                    index === 0
                      ? _c("h1", { staticClass: "title__service" }, [
                          _vm._v("Bayi")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    index === 1
                      ? _c("h1", { staticClass: "title__service" }, [
                          _vm._v("Pelajar")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    index === 2
                      ? _c("h1", { staticClass: "title__service" }, [
                          _vm._v("Personal")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    index === 3
                      ? _c("h1", { staticClass: "title__service" }, [
                          _vm._v("Bisnis")
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "border-bottom px-4 py-2 text-center" },
                  [
                    _c("h6", { staticClass: "price__discount" }, [
                      _vm._v("Rp " + _vm._s(price.title))
                    ]),
                    _vm._v(" "),
                    _c("h1", [
                      _c("span", { staticClass: "text__rp" }, [_vm._v("Rp")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text__rp-bottom" }, [
                        _vm._v(_vm._s(price.content))
                      ]),
                      _c("span", { staticClass: "text__rp-top" }, [
                        _vm._v("." + _vm._s(_vm.data_decimals[index].decimal))
                      ]),
                      _c("span", { staticClass: "text__rp" }, [_vm._v("/ bln")])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "border-bottom px-4 py-2 text-center" },
                  [
                    index === 0
                      ? _c("h6", { staticClass: "m-0" }, [
                          _c("b", [_vm._v("938")]),
                          _vm._v(" Pengguna Terdaftar")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    index === 1
                      ? _c("h6", { staticClass: "m-0" }, [
                          _c("b", [_vm._v("4.168")]),
                          _vm._v(" Pengguna Terdaftar")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    index === 2
                      ? _c("h6", { staticClass: "m-0" }, [
                          _c("b", [_vm._v("10.017")]),
                          _vm._v(" Pengguna Terdaftar")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    index === 3
                      ? _c("h6", { staticClass: "m-0" }, [
                          _c("b", [_vm._v("3.552")]),
                          _vm._v(" Pengguna Terdaftar")
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                index === 0
                  ? _c(
                      "div",
                      { staticClass: "px-4 py-2 text-center content__price" },
                      [
                        _c("b", [_vm._v("0.5 RESOURCE POWER")]),
                        _vm._v(" "),
                        _vm._m(3, true),
                        _vm._v(" "),
                        _vm._m(4, true),
                        _vm._v(" "),
                        _vm._m(5, true),
                        _vm._v(" "),
                        _vm._m(6, true),
                        _vm._v(" "),
                        _vm._m(7, true),
                        _vm._v(" "),
                        _vm._m(8, true)
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                index === 1
                  ? _c(
                      "div",
                      { staticClass: "px-4 py-2 text-center content__price" },
                      [
                        _c("b", [_vm._v("1X RESOURCE POWER")]),
                        _vm._v(" "),
                        _vm._m(9, true),
                        _vm._v(" "),
                        _vm._m(10, true),
                        _vm._v(" "),
                        _vm._m(11, true),
                        _vm._v(" "),
                        _vm._m(12, true),
                        _vm._v(" "),
                        _vm._m(13, true),
                        _vm._v(" "),
                        _vm._m(14, true),
                        _vm._v(" "),
                        _vm._m(15, true),
                        _vm._v(" "),
                        _vm._m(16, true)
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                index === 2
                  ? _c(
                      "div",
                      { staticClass: "px-4 py-2 text-center content__price" },
                      [
                        _c("b", [_vm._v("2X RESOURCE POWER")]),
                        _vm._v(" "),
                        _vm._m(17, true),
                        _vm._v(" "),
                        _vm._m(18, true),
                        _vm._v(" "),
                        _vm._m(19, true),
                        _vm._v(" "),
                        _vm._m(20, true),
                        _vm._v(" "),
                        _vm._m(21, true),
                        _vm._v(" "),
                        _vm._m(22, true),
                        _vm._v(" "),
                        _vm._m(23, true),
                        _vm._v(" "),
                        _vm._m(24, true),
                        _vm._v(" "),
                        _vm._m(25, true),
                        _vm._v(" "),
                        _vm._m(26, true)
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                index === 3
                  ? _c(
                      "div",
                      { staticClass: "px-4 py-2 text-center content__price" },
                      [
                        _c("b", [_vm._v("3X RESOURCE POWER")]),
                        _vm._v(" "),
                        _vm._m(27, true),
                        _vm._v(" "),
                        _vm._m(28, true),
                        _vm._v(" "),
                        _vm._m(29, true),
                        _vm._v(" "),
                        _vm._m(30, true),
                        _vm._v(" "),
                        _vm._m(31, true),
                        _vm._v(" "),
                        _vm._m(32, true),
                        _vm._v(" "),
                        _vm._m(33, true),
                        _vm._v(" "),
                        _vm._m(34, true),
                        _vm._v(" "),
                        _vm._m(35, true),
                        _vm._v(" "),
                        _vm._m(36, true),
                        _vm._v(" "),
                        _vm._m(37, true),
                        _vm._v(" "),
                        _vm._m(38, true)
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                index === 3
                  ? _c("div", { staticClass: "text-center mb-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-dark rounded-pill font-weight-bold border__btn px-4 btn__pr",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Diskon 40%")]
                      )
                    ])
                  : _c("div", { staticClass: "text-center mb-4" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-dark rounded-pill font-weight-bold font-weight-bold border__btn px-4 btn__pr",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Pilih Sekarang")]
                      )
                    ])
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm._m(39),
      _vm._v(" "),
      _vm._m(40),
      _vm._v(" "),
      _vm._m(41),
      _vm._v(" "),
      _vm._m(42),
      _vm._v(" "),
      _vm._m(43),
      _vm._v(" "),
      _vm._m(44),
      _vm._v(" "),
      _vm._m(45),
      _vm._v(" "),
      _vm._m(46),
      _vm._v(" "),
      _vm._m(47),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border-bottom pt-5 pb-5" }, [
      _c("div", { staticClass: "container-lg p-0" }, [
        _c("div", { staticClass: "d-lg-flex" }, [
          _c("div", { staticClass: "col-12 col-lg-6 m-auto m-lg-0" }, [
            _c("div", [
              _c("h3", { staticClass: "title__bold" }, [_vm._v("PHP Hosting")]),
              _vm._v(" "),
              _c("h4", { staticClass: "desc_title-bold" }, [
                _vm._v(
                  "Cepat, handal, penuh dengan modul PHP yang Anda butuhkan"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("ul", { staticClass: "p-0" }, [
                _c("li", { staticClass: "list__item" }, [
                  _c("i", {
                    staticClass: "fa fa-check-circle mr-2 text-success"
                  }),
                  _vm._v("Solusi PHP untuk performa query yang lebih cepat.")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list__item" }, [
                  _c("i", {
                    staticClass: "fa fa-check-circle mr-2 text-success"
                  }),
                  _vm._v("Konsumsi memori yang lebih rendah.")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list__item" }, [
                  _c("i", {
                    staticClass: "fa fa-check-circle mr-2 text-success"
                  }),
                  _vm._v("Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list__item" }, [
                  _c("i", {
                    staticClass: "fa fa-check-circle mr-2 text-success"
                  }),
                  _vm._v("Fitur enkripsi IonCube dan Zend Guard Loaders")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 col-lg-6 text-center text-lg-right" },
            [
              _c("img", {
                staticClass: "banner",
                attrs: {
                  src: __webpack_require__(/*! ../../../public/assets/image/banner.png */ "./public/assets/image/banner.png")
                }
              })
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-5 text-center" }, [
      _c(
        "div",
        { staticClass: "container-lg d-lg-flex justify-content-around" },
        [
          _c("div", { staticClass: "align-self-center" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../public/assets/image/zend.png */ "./public/assets/image/zend.png") }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "title__img" }, [
              _vm._v("PHP Zend Guard Loader")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "align-self-center" }, [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../../../public/assets/image/composer.png */ "./public/assets/image/composer.png")
              }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "title__img-center" }, [
              _vm._v("PHP Composer")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "align-self-center" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../public/assets/image/ion.png */ "./public/assets/image/ion.png") }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "title__img" }, [
              _vm._v("PHP IonCube Loader")
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-lg text-center pt-5 pb-5" }, [
      _c("h5", { staticClass: "title__bold" }, [
        _vm._v("Paket Hosting Singapura yang Tepat")
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: "desc_title-bold" }, [
        _vm._v("Diskon 40% + Domain dan SSL Gratis untuk Anda")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mt-3" }, [
      _c("b", [_vm._v("500 MB")]),
      _vm._v(" Disk Space")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Bandwidth")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Databases")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("1")]), _vm._v(" Domain")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Instant")]), _vm._v(" Backup")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("b", [_vm._v("Unlimited SSL")]),
      _vm._v(" Gratis Selamanya")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mt-3" }, [
      _c("b", [_vm._v("Unlimited")]),
      _vm._v("Disk Space")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Bandwidth")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" POP3 Email")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Databases")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("10")]), _vm._v(" Addon Domain")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Instant")]), _vm._v(" Backup")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Domain Gratis")]), _vm._v(" Selamanya")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("b", [_vm._v("Unlimited SSL")]),
      _vm._v(" Gratis Selamanya")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mt-3" }, [
      _c("b", [_vm._v("Unlimited")]),
      _vm._v(" Disk Space")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Bandwidth")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" POP3 Email")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Databases")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Addon Domains")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Instant")]), _vm._v(" Backup")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Domain Gratis")]), _vm._v(" Selamanya")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("b", [_vm._v("Unlimited SSL")]),
      _vm._v(" Gratis Selamanya")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Private")]), _vm._v(" Name Server")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("b", [_vm._v("SpamAssasin")]),
      _vm._v(" Mail Protection")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "mt-3" }, [
      _c("b", [_vm._v("Unlimited")]),
      _vm._v(" Disk Space")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Bandwidth")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" POP3 Email")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Databases")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Unlimited")]), _vm._v(" Addon Domains")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("b", [_vm._v("Magic Auto")]),
      _vm._v(" Backup & Restore")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Domain Gratis")]), _vm._v(" Selamanya")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("b", [_vm._v("Unlimited SSL")]),
      _vm._v(" Gratis Selamanya")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [_c("b", [_vm._v("Instant")]), _vm._v(" Backup")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("b", [_vm._v("Prioritas")]),
      _vm._v(" Layanan Support")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3" }, [
      _c("span", { staticClass: "fa fa-star text-primary" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star text-primary" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star text-primary" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star text-primary" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star text-primary" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("b", [_vm._v("SpamExpert")]),
      _vm._v("Mail Protection")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-lg pb-5" }, [
      _c("div", { staticClass: "text-center mb-3" }, [
        _c("h4", { staticClass: "desc__title-bold" }, [
          _vm._v("Powerfull dengan Limit PHP  yang Lebih Besar")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-lg-flex justify-content-center" }, [
        _c("div", { staticClass: "border col-lg-5 p-0 mb-3 mb-lg-0 mr-lg-2" }, [
          _c("div", { staticClass: "d-flex border-bottom p-2" }, [
            _c("div", { staticClass: "col-2" }, [
              _c("i", { staticClass: "fa fa-check-circle mr-2 text-success" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-9 text-center" }, [
              _c("span", { staticClass: "list__item" }, [
                _vm._v("max execution time 300s")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex border-bottom p-2" }, [
            _c("div", { staticClass: "col-2" }, [
              _c("i", { staticClass: "fa fa-check-circle mr-2 text-success" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-9 text-center" }, [
              _c("span", { staticClass: "list__item" }, [
                _vm._v("max execution time 300s")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex p-2" }, [
            _c("div", { staticClass: "col-2" }, [
              _c("i", { staticClass: "fa fa-check-circle mr-2 text-success" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-9 text-center" }, [
              _c("span", { staticClass: "list__item" }, [
                _vm._v("php memory limit 1024 MB")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "border col-lg-5 p-0 ml-lg-2" }, [
          _c("div", { staticClass: "d-flex border-bottom p-2" }, [
            _c("div", { staticClass: "col-2" }, [
              _c("i", { staticClass: "fa fa-check-circle mr-2 text-success" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-9 text-center" }, [
              _c("span", { staticClass: "list__item" }, [
                _vm._v("post max size 128 MB")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex border-bottom p-2" }, [
            _c("div", { staticClass: "col-2" }, [
              _c("i", { staticClass: "fa fa-check-circle mr-2 text-success" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-9 text-center" }, [
              _c("span", { staticClass: "list__item" }, [
                _vm._v("max filesize 128 MB")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex p-2" }, [
            _c("div", { staticClass: "col-2" }, [
              _c("i", { staticClass: "fa fa-check-circle mr-2 text-success" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-9 text-center" }, [
              _c("span", { staticClass: "list__item" }, [
                _vm._v("input vars 2500")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container pb-5" }, [
      _c("div", { staticClass: "divider" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container pb-5" }, [
      _c("div", { staticClass: "text-center mb-5" }, [
        _c("h4", { staticClass: "desc__title-bold" }, [
          _vm._v("Semua Paket Hosting Sudah Termasuk")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row row-cols-1 row-cols-lg-3" }, [
        _c("div", [
          _c("div", { staticClass: "text-center mb-3" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../public/assets/image/script.png */ "./public/assets/image/script.png") }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "title__paket" }, [
              _vm._v("PHP Semua Versi")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("Pilih mulai dari versi PHP 5.3 s/d PHP 7")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("Ubah sesuka Anda!")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "text-center mb-3" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../public/assets/image/db.png */ "./public/assets/image/db.png") }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "title__paket" }, [
              _vm._v("MySQL Versi 5.6")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("Nikmati MySQL versi terbaru, tercepat dan")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("kaya akan fitur.")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "text-center mb-3" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../public/assets/image/cp.png */ "./public/assets/image/cp.png") }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "title__paket" }, [
              _vm._v("Panel Hosting cPanel")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("Kelola website dengan panel canggih yang")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("familiar di hati anda.")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "text-center mb-3" }, [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../../../public/assets/image/protect.png */ "./public/assets/image/protect.png")
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "title__paket" }, [
              _vm._v("Garansi Uptime 99.9%")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("Data center yang mendukung kelangsungan")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("website Anda 24/7.")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "text-center mb-3" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../public/assets/image/msql.png */ "./public/assets/image/msql.png") }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "title__paket" }, [
              _vm._v("Database InnoDB Unlimited")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("Jumlah dan ukuran database yang tumbuh")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("sesuai kebutuhan Anda.")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "text-center mb-3" }, [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../../../public/assets/image/db_connect.png */ "./public/assets/image/db_connect.png")
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "title__paket" }, [
              _vm._v("Wildcard Remote MySQL")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("Mendukung s/d 25 max_user_connections")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "desc__paket" }, [
              _vm._v("dan 100 max_connections")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container pb-5" }, [
      _c("div", { staticClass: "divider" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "border-bottom mb-5" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "text-center mb-3" }, [
          _c("h4", { staticClass: "desc__title-bold" }, [
            _vm._v("Mendukung Penuh Framework Laravel")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-lg-flex" }, [
          _c("div", [
            _c("div", [
              _c("p", { staticClass: "col-lg-9 p-0 title__support" }, [
                _vm._v(
                  "Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda"
                )
              ])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "p-0" }, [
              _c("li", { staticClass: "list__item" }, [
                _c("i", {
                  staticClass: "fa fa-check-circle mr-2 text-success"
                }),
                _vm._v("Install Laravel "),
                _c("b", [_vm._v("1 klik")]),
                _vm._v(" dengan Softaculous Installer.")
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list__item" }, [
                _c("i", {
                  staticClass: "fa fa-check-circle mr-2 text-success"
                }),
                _vm._v("Mendukung ekstensi "),
                _c("b", [_vm._v("PHP MCrypt, phar, mbstring, json,")]),
                _vm._v(" dan "),
                _c("b", [_vm._v("fileinfo.")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list__item" }, [
                _c("i", {
                  staticClass: "fa fa-check-circle mr-2 text-success"
                }),
                _vm._v("Tersedia "),
                _c("b", [_vm._v("Composer")]),
                _vm._v(" dan "),
                _c("b", [_vm._v("SSH")]),
                _vm._v(" untuk menginstal packages pilihan Anda.")
              ])
            ]),
            _vm._v(" "),
            _c("small", [
              _vm._v(
                "Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis"
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-4 mb-4 mb-lg-0 text-center text-lg-left" },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-lg btn-primary rounded-pill font-weight-bold border__btn px-4"
                  },
                  [_vm._v("Pilih Hosting Anda")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center text-lg-left" }, [
            _c("img", {
              staticClass: "banner_2",
              attrs: {
                src: __webpack_require__(/*! ../../../public/assets/image/banner2.png */ "./public/assets/image/banner2.png")
              }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container pb-5" }, [
      _c("div", { staticClass: "text-center" }, [
        _c("h4", { staticClass: "mb-5 desc__title-bold" }, [
          _vm._v("Modul Lengkap untuk Menjalankan Aplikasi PHP Anda.")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row row-cols-2 row-cols-lg-4 mb-4 ml-5" }, [
        _c("div", { staticClass: "desc__paket" }, [
          _c("p", [_vm._v("IcePHP")]),
          _vm._v(" "),
          _c("p", [_vm._v("apc")]),
          _vm._v(" "),
          _c("p", [_vm._v("apcu")]),
          _vm._v(" "),
          _c("p", [_vm._v("apm")]),
          _vm._v(" "),
          _c("p", [_vm._v("ares")]),
          _vm._v(" "),
          _c("p", [_vm._v("bcmath")]),
          _vm._v(" "),
          _c("p", [_vm._v("bcompiler")]),
          _vm._v(" "),
          _c("p", [_vm._v("big_int")]),
          _vm._v(" "),
          _c("p", [_vm._v("bitset")]),
          _vm._v(" "),
          _c("p", [_vm._v("bloomy")]),
          _vm._v(" "),
          _c("p", [_vm._v("bz2_filter")]),
          _vm._v(" "),
          _c("p", [_vm._v("clamav")]),
          _vm._v(" "),
          _c("p", [_vm._v("coin_acceptor")]),
          _vm._v(" "),
          _c("p", [_vm._v("crack")]),
          _vm._v(" "),
          _c("p", [_vm._v("dba")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "desc__paket" }, [
          _c("p", [_vm._v("http")]),
          _vm._v(" "),
          _c("p", [_vm._v("huffman")]),
          _vm._v(" "),
          _c("p", [_vm._v("idn")]),
          _vm._v(" "),
          _c("p", [_vm._v("igbinary")]),
          _vm._v(" "),
          _c("p", [_vm._v("imagick")]),
          _vm._v(" "),
          _c("p", [_vm._v("imap")]),
          _vm._v(" "),
          _c("p", [_vm._v("inclued")]),
          _vm._v(" "),
          _c("p", [_vm._v("inotify")]),
          _vm._v(" "),
          _c("p", [_vm._v("interbase")]),
          _vm._v(" "),
          _c("p", [_vm._v("intl")]),
          _vm._v(" "),
          _c("p", [_vm._v("ioncube_loader")]),
          _vm._v(" "),
          _c("p", [_vm._v("ioncube_loader_4")]),
          _vm._v(" "),
          _c("p", [_vm._v("jsmin")]),
          _vm._v(" "),
          _c("p", [_vm._v("json")]),
          _vm._v(" "),
          _c("p", [_vm._v("Idap")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "desc__paket" }, [
          _c("p", [_vm._v("nd_pdo_mysql")]),
          _vm._v(" "),
          _c("p", [_vm._v("oauth")]),
          _vm._v(" "),
          _c("p", [_vm._v("oci8")]),
          _vm._v(" "),
          _c("p", [_vm._v("odbc")]),
          _vm._v(" "),
          _c("p", [_vm._v("opcache")]),
          _vm._v(" "),
          _c("p", [_vm._v("pdf")]),
          _vm._v(" "),
          _c("p", [_vm._v("pdo")]),
          _vm._v(" "),
          _c("p", [_vm._v("pdo_dblib")]),
          _vm._v(" "),
          _c("p", [_vm._v("pdo_firebird")]),
          _vm._v(" "),
          _c("p", [_vm._v("pdo_mysql")]),
          _vm._v(" "),
          _c("p", [_vm._v("pdo_odbc")]),
          _vm._v(" "),
          _c("p", [_vm._v("pdo_pgsql")]),
          _vm._v(" "),
          _c("p", [_vm._v("pdo_sqlite")]),
          _vm._v(" "),
          _c("p", [_vm._v("pgsql")]),
          _vm._v(" "),
          _c("p", [_vm._v("phalcon")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "desc__paket" }, [
          _c("p", [_vm._v("stats")]),
          _vm._v(" "),
          _c("p", [_vm._v("stem")]),
          _vm._v(" "),
          _c("p", [_vm._v("stomp")]),
          _vm._v(" "),
          _c("p", [_vm._v("suhosin")]),
          _vm._v(" "),
          _c("p", [_vm._v("sybase_ct")]),
          _vm._v(" "),
          _c("p", [_vm._v("sysvmsg")]),
          _vm._v(" "),
          _c("p", [_vm._v("sysvsem")]),
          _vm._v(" "),
          _c("p", [_vm._v("sysvshm")]),
          _vm._v(" "),
          _c("p", [_vm._v("tidy")]),
          _vm._v(" "),
          _c("p", [_vm._v("timezonedb")]),
          _vm._v(" "),
          _c("p", [_vm._v("trader")]),
          _vm._v(" "),
          _c("p", [_vm._v("translit")]),
          _vm._v(" "),
          _c("p", [_vm._v("uploadprogress")]),
          _vm._v(" "),
          _c("p", [_vm._v("uri_template")]),
          _vm._v(" "),
          _c("p", [_vm._v("uuid")]),
          _vm._v(" "),
          _c("p", [_vm._v("phalcon")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c(
          "button",
          {
            staticClass:
              "btn btn-lg btn-outline-dark rounded-pill font-weight-bold border__btn px-4"
          },
          [_vm._v("Selengkapnya")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "d-lg-flex" }, [
        _c("div", [
          _c("h4", { staticClass: "desc__title-bold" }, [
            _vm._v("Linux Hosting yang Stabil dengan Teknologi LVE")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "list__item" }, [
            _vm._v("SuperMicro "),
            _c("b", [_vm._v("Intel Xeon 24-cores")]),
            _vm._v(" Server dengan RAM "),
            _c("b", [_vm._v("128 GB")]),
            _vm._v(" dan teknologi"),
            _c("b", [_vm._v("LIVE CloudLinux")]),
            _vm._v(" untuk stabilitas server Anda. Dilengkapi dengan "),
            _c("b", [_vm._v("SSD")]),
            _vm._v(" untuk kecepatan "),
            _c("b", [_vm._v("MySQL")]),
            _vm._v(
              " dan caching, Apache load balancer berbasis LiteSpeed Technologies, "
            ),
            _c("b", [_vm._v("cageFS")]),
            _vm._v(" security,  "),
            _c("b", [_vm._v("Raid-10")]),
            _vm._v(
              " protection dan auto backup untuk keamanan website PHP Anda."
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "my-4 text-center text-lg-left" }, [
            _c(
              "button",
              {
                staticClass:
                  "btn btn-lg btn-primary rounded-pill font-weight-bold border__btn px-4"
              },
              [_vm._v("Pilih Hosting Anda")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-center text-lg-center" }, [
          _c("img", {
            staticClass: "pt-5 banner_support",
            attrs: {
              src: __webpack_require__(/*! ../../../public/assets/image/Image_support.png */ "./public/assets/image/Image_support.png")
            }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg__info" }, [
      _c(
        "div",
        {
          staticClass:
            "container d-lg-flex justify-content-between p-4 text-center text-lg-left"
        },
        [
          _c("p", { staticClass: "list__item m-0" }, [
            _vm._v("Bagaimana jika Anda menyukai halaman ini.")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pt-3 pt-lg-0" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../public/assets/image/sosmed.png */ "./public/assets/image/sosmed.png") }
            })
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-primary text-light" }, [
      _c(
        "div",
        { staticClass: "container-lg d-lg-flex justify-content-between py-5" },
        [
          _c("div", { staticClass: "align-self-center text__help" }, [
            _c("h4", { staticClass: "desc__item-bold m-0" }, [
              _vm._v("Perlu "),
              _c("b", [_vm._v("BANTUAN?")]),
              _vm._v(" Hubungi Kami : "),
              _c("b", [_vm._v("0274-5305505")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center text-lg-right" }, [
            _c(
              "button",
              {
                staticClass:
                  "btn btn-lg btn-outline-light rounded-pill font-weight-bold border__btn px-5 btn__chat"
              },
              [
                _c("img", {
                  staticClass: "mr-3",
                  attrs: {
                    src: __webpack_require__(/*! ../../../public/assets/image/sms (2).png */ "./public/assets/image/sms (2).png")
                  }
                }),
                _vm._v(" Live Chat")
              ]
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/vue-loader/lib/runtime/componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/vue-router/dist/vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ "./public/assets/image/23.png":
/*!************************************!*\
  !*** ./public/assets/image/23.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/23.png?dadbfc4a5382cee7461939f1b89a5271";

/***/ }),

/***/ "./public/assets/image/Image_support.png":
/*!***********************************************!*\
  !*** ./public/assets/image/Image_support.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Image_support.png?a650f1f107bd550da44ee365ed7f3e02";

/***/ }),

/***/ "./public/assets/image/banner.png":
/*!****************************************!*\
  !*** ./public/assets/image/banner.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner.png?b7eac6ed43cd0dac236ec16e22f3dc5b";

/***/ }),

/***/ "./public/assets/image/banner2.png":
/*!*****************************************!*\
  !*** ./public/assets/image/banner2.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/banner2.png?75527c324c0bc32408e57c38620eb3ff";

/***/ }),

/***/ "./public/assets/image/communications.png":
/*!************************************************!*\
  !*** ./public/assets/image/communications.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/communications.png?aebcc0d5a491e066475b82eda67fdd1c";

/***/ }),

/***/ "./public/assets/image/composer.png":
/*!******************************************!*\
  !*** ./public/assets/image/composer.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/composer.png?101250984e4fc547d35d1e2849afe2fc";

/***/ }),

/***/ "./public/assets/image/cp.png":
/*!************************************!*\
  !*** ./public/assets/image/cp.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cp.png?97a3e71863ce3c91637bb8740fc6c853";

/***/ }),

/***/ "./public/assets/image/db.png":
/*!************************************!*\
  !*** ./public/assets/image/db.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/db.png?6ee74b87f77dcf4bc991997cb6727ef4";

/***/ }),

/***/ "./public/assets/image/db_connect.png":
/*!********************************************!*\
  !*** ./public/assets/image/db_connect.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/db_connect.png?cf1744576fe667f1ef528340dee78d3b";

/***/ }),

/***/ "./public/assets/image/ex.png":
/*!************************************!*\
  !*** ./public/assets/image/ex.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/ex.png?8def2a389aa6875998b241c6f84cf38c";

/***/ }),

/***/ "./public/assets/image/interface.png":
/*!*******************************************!*\
  !*** ./public/assets/image/interface.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/interface.png?c0e16cfd0ee2be30d2d566e8d60b4bc9";

/***/ }),

/***/ "./public/assets/image/ion.png":
/*!*************************************!*\
  !*** ./public/assets/image/ion.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/ion.png?7f81565a532feb799c0ab92e7b6bcfc0";

/***/ }),

/***/ "./public/assets/image/msql.png":
/*!**************************************!*\
  !*** ./public/assets/image/msql.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/msql.png?e4090f2bf1fb4ad874f8476029d69a62";

/***/ }),

/***/ "./public/assets/image/pay2.png":
/*!**************************************!*\
  !*** ./public/assets/image/pay2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/pay2.png?94fdf84cd4b9574316621749da53c187";

/***/ }),

/***/ "./public/assets/image/payment.png":
/*!*****************************************!*\
  !*** ./public/assets/image/payment.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/payment.png?1dba3b2eda37b13037a80b36f9d9963d";

/***/ }),

/***/ "./public/assets/image/protect.png":
/*!*****************************************!*\
  !*** ./public/assets/image/protect.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/protect.png?951c1e736f8c41b3070b9770b484b801";

/***/ }),

/***/ "./public/assets/image/script.png":
/*!****************************************!*\
  !*** ./public/assets/image/script.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/script.png?25b325c9ca1612752bfe1da712289ade";

/***/ }),

/***/ "./public/assets/image/sms (2).png":
/*!*****************************************!*\
  !*** ./public/assets/image/sms (2).png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sms (2).png?aaf52599ad018f25b6bc09c6644a305e";

/***/ }),

/***/ "./public/assets/image/sms.png":
/*!*************************************!*\
  !*** ./public/assets/image/sms.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sms.png?1426c05f91575a7d08547cee3309fae9";

/***/ }),

/***/ "./public/assets/image/sosmed.png":
/*!****************************************!*\
  !*** ./public/assets/image/sosmed.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sosmed.png?16c5d1bdafc0fce2fb10270219248ee4";

/***/ }),

/***/ "./public/assets/image/zend.png":
/*!**************************************!*\
  !*** ./public/assets/image/zend.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/zend.png?80e2e4998a223f08379134e7426f7a27";

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.min.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.vue */ "./resources/js/app.vue");
/* harmony import */ var _pages_index_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index.vue */ "./resources/js/pages/index.vue");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]);



Vue.use(vue_axios__WEBPACK_IMPORTED_MODULE_1___default.a, axios__WEBPACK_IMPORTED_MODULE_2___default.a);

var routes = [{
  name: 'home',
  path: '/',
  component: _pages_index_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  mode: 'history',
  routes: routes
});
var app = new Vue(Vue.util.extend({
  router: router
}, _app_vue__WEBPACK_IMPORTED_MODULE_3__["default"])).$mount('#app');

/***/ }),

/***/ "./resources/js/app.vue":
/*!******************************!*\
  !*** ./resources/js/app.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_23235493___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=23235493& */ "./resources/js/app.vue?vue&type=template&id=23235493&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./resources/js/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_23235493___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_23235493___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/app.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./resources/js/app.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app.vue?vue&type=template&id=23235493&":
/*!*************************************************************!*\
  !*** ./resources/js/app.vue?vue&type=template&id=23235493& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_23235493___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=23235493& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/app.vue?vue&type=template&id=23235493&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_23235493___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_23235493___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/footer.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_585a4226_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=585a4226&scoped=true& */ "./resources/js/components/footer.vue?vue&type=template&id=585a4226&scoped=true&");
/* harmony import */ var _footer_vue_vue_type_style_index_0_id_585a4226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css& */ "./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _footer_vue_vue_type_template_id_585a4226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_585a4226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "585a4226",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_585a4226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/footer.vue?vue&type=style&index=0&id=585a4226&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_585a4226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_585a4226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_585a4226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_585a4226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_585a4226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/footer.vue?vue&type=template&id=585a4226&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/footer.vue?vue&type=template&id=585a4226&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_585a4226_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=585a4226&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/footer.vue?vue&type=template&id=585a4226&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_585a4226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_585a4226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/header.vue":
/*!********************************************!*\
  !*** ./resources/js/components/header.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=798ca618& */ "./resources/js/components/header.vue?vue&type=template&id=798ca618&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/header.vue?vue&type=template&id=798ca618&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/header.vue?vue&type=template&id=798ca618& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=798ca618& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/header.vue?vue&type=template&id=798ca618&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_798ca618___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/navbar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_vue_vue_type_template_id_11e733ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=11e733ca&scoped=true& */ "./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&scoped=true&");
/* harmony import */ var _navbar_vue_vue_type_style_index_0_id_11e733ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css& */ "./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _navbar_vue_vue_type_template_id_11e733ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_vue_vue_type_template_id_11e733ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11e733ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_11e733ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navbar.vue?vue&type=style&index=0&id=11e733ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_11e733ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_11e733ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_11e733ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_11e733ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_style_index_0_id_11e733ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_11e733ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=template&id=11e733ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navbar.vue?vue&type=template&id=11e733ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_11e733ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_11e733ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/index.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0b5dcf8e&scoped=true& */ "./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_0b5dcf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css& */ "./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b5dcf8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b5dcf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=style&index=0&id=0b5dcf8e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b5dcf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b5dcf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b5dcf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b5dcf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b5dcf8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0b5dcf8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/index.vue?vue&type=template&id=0b5dcf8e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b5dcf8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/css-loader/lib/css-base.js'\n    at /home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/webpack/lib/NormalModule.js:316:20\n    at /home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/loader-runner/lib/LoaderRunner.js:203:19\n    at /home/edikurniawan/Documents/edikw/testing/landing_page/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/edikurniawan/Documents/edikw/testing/landing_page/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/edikurniawan/Documents/edikw/testing/landing_page/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });