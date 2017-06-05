(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LittleDi", [], factory);
	else if(typeof exports === 'object')
		exports["LittleDi"] = factory();
	else
		root["LittleDi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SCOPE_SINGLETON = exports.SCOPE_SINGLETON = "singleton";
var SCOPE_PROTOTYPE = exports.SCOPE_PROTOTYPE = "prototype";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clazz = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clazz = exports.Clazz = function () {
  function Clazz(name) {
    var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Constants.SCOPE_SINGLETON;

    _classCallCheck(this, Clazz);

    this._name = name;
    this._dependencies = dependencies;
    this._scope = scope;
  }

  _createClass(Clazz, [{
    key: 'name',
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }
  }, {
    key: 'dependencies',
    get: function get() {
      return this._dependencies;
    },
    set: function set(value) {
      this._dependencies = value;
    }
  }, {
    key: 'scope',
    get: function get() {
      return this._scope;
    },
    set: function set(value) {
      this._scope = value;
    }
  }]);

  return Clazz;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Constants = __webpack_require__(0);

var _Clazz = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container = exports.Container = function () {
  function Container(classesConfig) {
    var _this = this;

    _classCallCheck(this, Container);

    this._classes = new Map();
    this._classInstances = new Map();

    classesConfig.forEach(function (classConfig) {
      _this._classes.set(classConfig.clazz.name, new _Clazz.Clazz(classConfig.clazz, classConfig.dependencies, classConfig.scope));
      _this._classInstances.set(classConfig.clazz.name, null);
    });
  }

  _createClass(Container, [{
    key: 'getClass',
    value: function getClass(name) {
      if (!this._classes.get(name)) return undefined;

      if (this._classes.get(name).scope === _Constants.SCOPE_PROTOTYPE) return this._createInstance(name);

      if (this._classInstances.get(name) === null) {
        var newClass = this._createInstance(name);
        this._classInstances.set(name, newClass);
      }

      return this._classInstances.get(name);
    }
  }, {
    key: '_createInstance',
    value: function _createInstance(name) {
      var _this2 = this;

      var clazz = this._classes.get(name);
      var dependencies = clazz.dependencies.map(function (x) {
        return _this2.getClass(x.name);
      });

      return Reflect.construct(clazz.name, dependencies);
    }
  }]);

  return Container;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=LittleDi.js.map