(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FONT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WINDOW_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MEDIA; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    @media (max-width: ", "em) {\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FONT = {
  SIZE: {
    REGULAR: '1em',
    SMALL: '0,8em',
    MEDIUM: '1.2em',
    LARGE: '2em'
  }
};
var Colors = {
  BLACK: '#212121',
  AQUA_MARINE: '#50c9c3',
  PINKISH: '#e2608b',
  ICE_BLUE: '#f7fcfc',
  DARK_LILAC: '#ab629f',
  BLUSH_PINK: '#f99192',
  SALMON: '#f97171',
  LIGHT_TEAL: '#96deda',
  DUCK_EGG_BLUE: '#caeeec',
  BROWNISH_GREY: '#757575',
  BROWN_GREY: '#9e9e9e',
  VERY_LIGHT_PINK: '#f0f0f0',
  WHITE: '#f7f7f7',
  VERY_LIGHT_PINK_2: '#e0e0e0',
  WHITE_2: '#fafafa',
  LIGHT_BACKGROUND: 'rgba(240, 250, 248, 0.5)'
};
var WINDOW_SIZES = {
  desktop: 992,
  tablet: 768,
  phone: 576
};
var MEDIA = Object.keys(WINDOW_SIZES).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), WINDOW_SIZES[label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbLink; });
/* unused harmony export StyledLink */
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_4__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_4__["Router"]; });

/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);



function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;\n  color: ", ";\n  font-size: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var BreadcrumbLink = function BreadcrumbLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledLink, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    colors: _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* Colors */ "a"]
  }, props));
};
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_reach_router__WEBPACK_IMPORTED_MODULE_4__["Link"])(_templateObject(), function (props) {
  return props.colors.BLACK || 'black';
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(31);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(70);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(72);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(37);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(38);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(73);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(32);

var _helpers = __webpack_require__(74);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailCircle; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);



function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: inline;\n  margin: 0 auto;\n  height: 100%;\n  width: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  min-width: ", ";\n  min-height: ", ";\n  width: ", ";\n  height: ", ";\n  position: relative;\n  overflow: hidden;\n  border-radius: 50%;\n  background-image: linear-gradient(\n    135deg,\n    ", ",\n    ", "\n  );\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CroppedDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (props) {
  return props.width || '74px';
}, function (props) {
  return props.height || '74px';
}, function (props) {
  return props.width || '74px';
}, function (props) {
  return props.height || '74px';
}, function (props) {
  return props.gradientColorTop || 'turquoise';
}, function (props) {
  return props.gradientColorBottom || 'turquoise';
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject2());
var ThumbnailCircle = function ThumbnailCircle(props) {
  var imageSource = props.source || "https://via.placeholder.com/150";
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CroppedDiv, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    gradientColorTop: _constants_Styles__WEBPACK_IMPORTED_MODULE_4__[/* Colors */ "a"].LIGHT_TEAL,
    gradientColorBottom: _constants_Styles__WEBPACK_IMPORTED_MODULE_4__[/* Colors */ "a"].AQUA_MARINE
  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image, {
    src: imageSource,
    alt: 'profile'
  }));
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagLine; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _atoms_image_ThumbnailCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _TagLineText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);



function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  flex: 1;\n  margin-left: 10px;\n  align-self: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  background-color: transparent;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ComponentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.height || 'auto';
});
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var TagLine = function TagLine(props) {
  var title = props.title,
      content = props.content,
      source = props.source,
      _props$imageSize = props.imageSize,
      imageSize = _props$imageSize === void 0 ? '40px' : _props$imageSize;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ComponentContainer, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    colors: _constants_Styles__WEBPACK_IMPORTED_MODULE_4__[/* Colors */ "a"]
  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_atoms_image_ThumbnailCircle__WEBPACK_IMPORTED_MODULE_5__[/* ThumbnailCircle */ "a"], {
    source: source,
    width: imageSize,
    height: imageSize,
    padding: "2em"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TagLineText__WEBPACK_IMPORTED_MODULE_6__[/* TagLineText */ "a"], {
    title: title,
    content: content
  })));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagLineText; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin: 0 auto;\n  letter-spacing: -0.1px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin: 0 auto;\n  letter-spacing: -0.1px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject(), function (props) {
  return props.color || 'darkgray';
});
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject2());
var TagLineText = function TagLineText(props) {
  var titleElement = props.title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, props.title)) : null;
  var contentElement = props.content ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContent, {
    color: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].BROWNISH_GREY
  }, props.content) : null;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, titleElement, contentElement);
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileListContainer; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _organisms_cards_ProfileInfoCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    justify-content: center;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 0 20px 0;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ProfileListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject(), _constants_Styles__WEBPACK_IMPORTED_MODULE_4__[/* MEDIA */ "b"].phone(_templateObject2()));
var ProfileListContainer = function ProfileListContainer(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$withAd = props.withAd,
      withAd = _props$withAd === void 0 ? false : _props$withAd;
  var lists = data.map(function (card) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "".concat(card.id),
      style: {
        margin: '10px 10px 0 0'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_organisms_cards_ProfileInfoCard__WEBPACK_IMPORTED_MODULE_3__[/* ProfileInfoCard */ "a"], {
      imageSrc: card.imageSrc,
      addressName: card.addressName,
      addressDetail: card.addressDetail,
      tagTitle: card.tagTitle,
      tagContent: card.tagContent,
      rating: card.rating,
      reviewCount: card.reviewCount,
      withAd: withAd
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileListWrapper, null, lists);
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeadings; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 56px;\n  font-weight: 100;\n  line-height: 1.18;\n  letter-spacing: -2px;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 1.18;\n  letter-spacing: -2px;\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var HeadingThick = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject());
var HeadingThin = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject2());
var MainHeadings = function MainHeadings(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeadingThick, null, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeadingThin, null, props.subtitle));
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonInList; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);


function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    max-height: ", ";\n    margin-right: 10px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: ", ";\n  padding: ", ";\n\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: inline-block;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n    outline: none;\n    background-color: transparent;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: none;\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    width: 100%;\n    height: auto;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 195px;\n  height: 195px;\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    width: 100%;\n    flex-direction: row;\n    justify-content: start;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  color: ", ";\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    padding: 10px 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 1px solid ", ";\n    color: ", ";\n    width: 100%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 195px;\n  list-style: none;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);\n  border: solid 1.5px ", ";\n  background-color: #ffffff;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var StyledList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject(), function (props) {
  return props.color.VERY_LIGHT_PINK;
}, _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* MEDIA */ "b"].phone(_templateObject2(), function (props) {
  return props.color.BLACK || 'black';
}, function (props) {
  return props.color || 'black';
}));
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), function (props) {
  return props.color || 'black';
}, _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* MEDIA */ "b"].phone(_templateObject4()));
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "b"])(_templateObject5(), _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* MEDIA */ "b"].phone(_templateObject6()));
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject7(), _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* MEDIA */ "b"].phone(_templateObject8()));
var StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject9(), function (props) {
  return props.height || '90px';
}, function (props) {
  return props.padding || '0';
}, _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* MEDIA */ "b"].phone(_templateObject10(), function (props) {
  return props.height || '30px';
}));
var ButtonInList = function ButtonInList(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "" : _props$title,
      _props$link = props.link,
      link = _props$link === void 0 ? "" : _props$link,
      _props$imageSrc = props.imageSrc,
      imageSrc = _props$imageSrc === void 0 ? "" : _props$imageSrc;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledList, {
    color: _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* Colors */ "a"]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    to: link,
    color: _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* Colors */ "a"].BLACK
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTitle, null, imageSrc && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledImage, {
    src: imageSrc
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default.a, null))));
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Switch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);





var styles = function styles(theme) {
  return {
    iOSSwitchBase: {
      '&$iOSChecked': {
        color: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].WHITE,
        '& + $iOSBar': {
          background: "linear-gradient(122deg, ".concat(_constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].LIGHT_TEAL, ", ").concat(_constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].AQUA_MARINE, ")"),
          backgroundColor: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].AQUA_MARINE
        }
      },
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.sharp
      })
    },
    iOSChecked: {
      transform: 'translateX(17px)',
      '& + $iOSBar': {
        opacity: 1,
        border: 'none'
      }
    },
    iOSBar: {
      borderRadius: 13,
      width: 42,
      height: 25,
      marginTop: -12,
      marginLeft: -20,
      border: 'solid 1px',
      borderColor: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].VERY_LIGHT_PINK_2,
      backgroundColor: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].VERY_LIGHT_PINK,
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border'])
    },
    iOSIcon: {
      width: 25,
      height: 25,
      padding: 2,
      boxShadow: 'none',
      border: 'solid 1px',
      background: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].WHITE_2,
      borderColor: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].VERY_LIGHT_PINK_2,
      backgroundImage: "url(/assets/round-close-24px.svg)",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '15px 15px'
    },
    iOSIconChecked: {
      boxShadow: 'none',
      border: 'solid 1px',
      padding: 10,
      borderColor: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].VERY_LIGHT_PINK_2,
      backgroundImage: "url(/assets/round-check-24px.svg)",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '15px 15px'
    }
  };
};

var Customized = function Customized(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      checked = props.checked;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1___default.a, {
    classes: {
      switchBase: classes.iOSSwitchBase,
      bar: classes.iOSBar,
      icon: classes.iOSIcon,
      iconChecked: classes.iOSIconChecked,
      checked: classes.iOSChecked
    },
    disableRipple: true,
    onChange: onChange,
    checked: checked
  });
};

var Switch = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Customized);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Star; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StarWithRating; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);



function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  margin-left: 5px;\n  font-size: 0.8em;\n  color: ", ";\n  line-height: 1.29;\n  letter-spacing: -0.3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var STAR_SVG = "M8.889.658L6.703 5.295 1.81 6.04c-.878.133-1.23 1.264-.593 1.912l3.54 3.607-.838 5.095c-.15.921.777 1.611 1.554 1.18L9.85 15.43l4.376 2.405c.777.428 1.705-.259 1.554-1.18l-.837-5.095 3.539-3.607c.636-.648.285-1.78-.593-1.912l-4.892-.746L10.811.658a1.052 1.052 0 0 0-1.922 0z";
var STAR_SVG_VIEWBOX = "0 0 19 18";
var RatingCount = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span(_templateObject(), function (props) {
  return props.colors.BROWN_GREY || 'grey';
});
var Star = function Star(props) {
  var _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_4___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    changeRating: onChange,
    starDimension: '20px',
    starSpacing: '1px',
    starHoverColor: _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* Colors */ "a"].AQUA_MARINE,
    starRatedColor: _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* Colors */ "a"].AQUA_MARINE,
    svgIconViewBox: STAR_SVG_VIEWBOX,
    svgIconPath: STAR_SVG
  }, props));
};
var StarWithRating = function StarWithRating(props) {
  var _props$rating = props.rating,
      rating = _props$rating === void 0 ? 0 : _props$rating,
      _props$reviewCount = props.reviewCount,
      reviewCount = _props$reviewCount === void 0 ? 0 : _props$reviewCount;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Star, {
    rating: rating,
    onChange: null
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RatingCount, {
    colors: _constants_Styles__WEBPACK_IMPORTED_MODULE_5__[/* Colors */ "a"]
  }, "(".concat(reviewCount, ")")));
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(32);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(71)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InfoText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileInfoCard; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _atoms_card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _molecules_tagline_TagLineText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _atoms_image_ThumbnailCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _atoms_stars_Star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);


function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  padding: 5px 7px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  font-size: 0.7em;\n  margin: -10px 0 0 0;\n  color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    max-width: 100%;\n    height: auto;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  max-width: 248px;\n  height: 320px;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin:  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-style: normal;\n  margin: 0 auto;\n  letter-spacing: -0.1px;\n  font-size: 15px;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-style: normal;\n  margin: 0 auto;\n  font-size: 16px;\n  letter-spacing: -0.1px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.address(_templateObject());
var StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.address(_templateObject2(), function (props) {
  return props.color || 'darkgray';
});
var MarginVertical = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3(), function (props) {
  return props.margin || '10px 0';
});
var InfoText = function InfoText(props) {
  var contentElement = props.content ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContent, {
    color: _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].BROWNISH_GREY
  }, props.content) : null;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarginVertical, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTitle, null, props.title), contentElement);
};
var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_atoms_card_Card__WEBPACK_IMPORTED_MODULE_4__[/* Card */ "a"])(_templateObject4(), _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* MEDIA */ "b"].phone(_templateObject5()));
var AdBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject6(), _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].LIGHT_TEAL, _constants_Styles__WEBPACK_IMPORTED_MODULE_3__[/* Colors */ "a"].AQUA_MARINE);
var ProfileInfoCard = function ProfileInfoCard(props) {
  var _props$imageSrc = props.imageSrc,
      imageSrc = _props$imageSrc === void 0 ? "" : _props$imageSrc,
      _props$addressName = props.addressName,
      addressName = _props$addressName === void 0 ? '' : _props$addressName,
      _props$addressDetail = props.addressDetail,
      addressDetail = _props$addressDetail === void 0 ? '' : _props$addressDetail,
      _props$tagTitle = props.tagTitle,
      tagTitle = _props$tagTitle === void 0 ? '' : _props$tagTitle,
      _props$tagContent = props.tagContent,
      tagContent = _props$tagContent === void 0 ? '' : _props$tagContent,
      rating = props.rating,
      reviewCount = props.reviewCount,
      _props$withAd = props.withAd,
      withAd = _props$withAd === void 0 ? false : _props$withAd;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, {
    minWidth: "248px",
    height: "320px",
    padding: "1.5em 1em"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_image_ThumbnailCircle__WEBPACK_IMPORTED_MODULE_6__[/* ThumbnailCircle */ "a"], {
    source: imageSrc
  }), withAd ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AdBox, null, "Ad")) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarginVertical, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_tagline_TagLineText__WEBPACK_IMPORTED_MODULE_5__[/* TagLineText */ "a"], {
    style: {
      fontSize: '13px'
    },
    title: tagTitle,
    content: tagContent
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_stars_Star__WEBPACK_IMPORTED_MODULE_7__[/* StarWithRating */ "b"], {
    rating: rating,
    reviewCount: reviewCount
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarginVertical, {
    margin: '15px 0'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoText, {
    title: addressName,
    content: addressDetail
  })));
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_Styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);



function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n  width: ", ";\n  height: ", ";\n  max-width: ", ";\n  min-width: ", ";\n  border-radius: 2px;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);\n  border: solid 1.5px ", ";\n  background-color: #ffffff;\n  padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.height || 'auto';
}, function (props) {
  return props.maxWidth || '100%';
}, function (props) {
  return props.minWidth || '100%';
}, function (props) {
  return props.colors.VERY_LIGHT_PINK || 'white';
}, function (props) {
  return props.padding || '1em';
});
var Card = function Card(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCard, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    colors: _constants_Styles__WEBPACK_IMPORTED_MODULE_4__[/* Colors */ "a"]
  }, props), props.children);
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/Router.js
var Router = __webpack_require__(6);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(13);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/Styles.js
var Styles = __webpack_require__(3);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__(14);

// EXTERNAL MODULE: external "react-sidebar"
var external_react_sidebar_ = __webpack_require__(56);
var external_react_sidebar_default = /*#__PURE__*/__webpack_require__.n(external_react_sidebar_);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/header/HeaderContainer.js



function _templateObject12() {
  var data = taggedTemplateLiteral_default()(["\n  height: 25px;\n  width: 25px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = taggedTemplateLiteral_default()(["\n  height: 2px;\n  width: 25px;\n  background: ", ";\n  margin-top: 7px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = taggedTemplateLiteral_default()(["\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  z-index: 1;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = taggedTemplateLiteral_default()(["padding: 30px 30px 0 30px;"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 30px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0;\n  padding: 20px 0;\n  border-bottom: 1px solid ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  list-style: none;\n  padding: 10px 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  background: white;\n  width: 100%;\n  padding: 0 30px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["margin-left: 0px;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  color: ", ";\n  font-size: 16px;\n  margin-left: 30px;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  height: ", ";\n  padding: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: 100%;\n  background-color: transparent;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 40px 0;\n  padding: 0 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var MenuStyled = external_styled_components_default.a.nav(_templateObject());
var StyledImage = external_styled_components_default.a.img(_templateObject2(), function (props) {
  return props.height || '20px';
}, function (props) {
  return props.padding || '0';
});
var StyledLink = external_styled_components_default()(Router["b" /* Link */])(_templateObject3(), Styles["a" /* Colors */].BLACK, Styles["b" /* MEDIA */].phone(_templateObject4()));
var SideMenuStyled = external_styled_components_default.a.nav(_templateObject5());
var ListItem = external_styled_components_default.a.li(_templateObject6());
var StyledList = external_styled_components_default.a.ul(_templateObject7(), Styles["a" /* Colors */].VERY_LIGHT_PINK_2);
var TopBar = external_styled_components_default.a.div(_templateObject8());
var TopBarOpen = external_styled_components_default()(TopBar)(_templateObject9());
var CloseButton = external_styled_components_default.a.button(_templateObject10());
var Line = external_styled_components_default.a.div(_templateObject11(), Styles["a" /* Colors */].BLACK);
var LineContainer = external_styled_components_default.a.div(_templateObject12());

var HeaderContainer_BurgerButton = function BurgerButton() {
  return external_react_default.a.createElement(LineContainer, null, external_react_default.a.createElement(Line, null), external_react_default.a.createElement(Line, null));
};

var HeaderContainer_FullMenu = function FullMenu() {
  return external_react_default.a.createElement(MenuStyled, null, external_react_default.a.createElement(Router["b" /* Link */], {
    to: "/"
  }, external_react_default.a.createElement(StyledImage, {
    height: 30,
    src: "/assets/logo.svg"
  })), external_react_default.a.createElement("div", null, external_react_default.a.createElement(StyledLink, {
    to: "/providers"
  }, "Find a doctor"), external_react_default.a.createElement(StyledLink, {
    to: "/clinics"
  }, "Find a hospital/Clinic"), external_react_default.a.createElement(StyledLink, {
    to: "/directory"
  }, "Health A-Z"), external_react_default.a.createElement(StyledLink, {
    to: "/articles"
  }, "The Pulse"), external_react_default.a.createElement(StyledLink, {
    to: "/"
  }, "Sign In/Join")));
};

var HeaderContainer_SideMenu = function SideMenu(props) {
  return external_react_default.a.createElement(SideMenuStyled, null, external_react_default.a.createElement(TopBar, null, external_react_default.a.createElement(Router["b" /* Link */], {
    to: "/"
  }, external_react_default.a.createElement(StyledImage, {
    height: 25,
    src: "/assets/logo.svg"
  })), external_react_default.a.createElement(CloseButton, {
    onClick: props.onClose
  }, external_react_default.a.createElement(StyledImage, {
    src: "/assets/close.svg"
  }))), external_react_default.a.createElement(StyledList, null, external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/"
  }, "Home")), external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/providers"
  }, "Find a doctor")), external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/clinics"
  }, "Find a hospital/Clinic")), external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/directory"
  }, "Health A-Z"))), external_react_default.a.createElement(StyledList, null, external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/about"
  }, "About")), external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/careers"
  }, "Careers")), external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/help"
  }, "Help"))), external_react_default.a.createElement(StyledList, null, external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/"
  }, "Log In")), external_react_default.a.createElement(ListItem, null, external_react_default.a.createElement(StyledLink, {
    onClick: props.onClose,
    to: "/"
  }, "Sign Up"))));
};

var HeaderContainer_BurgerMenu = function BurgerMenu(props) {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(TopBarOpen, null, external_react_default.a.createElement(Router["b" /* Link */], {
    to: "/"
  }, external_react_default.a.createElement(StyledImage, {
    height: 25,
    src: "/assets/logo.svg"
  })), external_react_default.a.createElement(CloseButton, {
    onClick: function onClick() {
      return props.toggleMenu(true);
    }
  }, external_react_default.a.createElement(HeaderContainer_BurgerButton, null))), external_react_default.a.createElement(external_react_sidebar_default.a, {
    sidebar: external_react_default.a.createElement(HeaderContainer_SideMenu, {
      onClose: function onClose() {
        return props.toggleMenu(false);
      }
    }),
    open: props.isOpen,
    styles: {
      sidebar: {
        background: "white",
        width: '100%'
      }
    },
    pullRight: true
  }, external_react_default.a.createElement(external_react_["Fragment"], null)));
};

/* harmony default export */ var HeaderContainer = (function () {
  var matches = Object(useMediaQuery_["unstable_useMediaQuery"])("(min-width:".concat(Styles["c" /* WINDOW_SIZES */].tablet, "px)"));

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isOpen = _useState2[0],
      toggleMenu = _useState2[1];

  return matches ? external_react_default.a.createElement(HeaderContainer_FullMenu, null) : external_react_default.a.createElement(HeaderContainer_BurgerMenu, {
    toggleMenu: toggleMenu,
    isOpen: isOpen
  });
});
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/strings/footer.js
var footer = {
  wellglo: {
    title: 'Wellglo',
    home: 'Home',
    about: 'About',
    press: 'Press',
    careers: 'Careers',
    contact: 'Contact',
    help: 'Help',
    blogs: 'Blogs',
    healthQnA: 'Health Q&A'
  },
  searchBy: {
    title: 'Search by',
    specialty: 'Specialty',
    procedure: 'Procedure',
    language: 'Language',
    location: 'Location',
    insurance: 'Insurance',
    reviews: 'Reviews'
  },
  cities: {
    title: 'Cities',
    bangkok: 'Bangkok',
    nonthaburi: 'Nonthaburi',
    nakhonRatchasima: 'Nakhon Ratchasima',
    chiangMai: 'Chiang Mai',
    hatYai: 'Hat Yai',
    udonThani: 'Udon Thani',
    pakKret: 'Pak Kret',
    khonKaen: 'Khon Kaen'
  },
  specialties: {
    title: 'Specialities',
    chiropractors: 'Chiropractors',
    dentists: 'Dentists',
    dermatologists: 'Dermatologists',
    eyeDoctors: 'Eye Doctors',
    gynecologist: 'Gynecologist',
    primaryCareDoctors: 'Primary care doctors',
    psychiatrists: 'Psychiatrists'
  },
  providerJoinUs: {
    title: 'Are you a top doctor or dentist?',
    link: 'List your practice on Wellglo'
  },
  copyright: "\xA9 Wellglo Co.,Ltd",
  privacyLink: 'privacy',
  termsOfUse: 'terms of use',
  thai: 'ไทย'
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/footer/links.js

var wellgloSectionLinks = {
  title: footer.wellglo.title,
  links: [{
    to: "/",
    text: footer.wellglo.home
  }, {
    to: "/about",
    text: footer.wellglo.about
  }, {
    to: "/",
    text: footer.wellglo.press
  }, {
    to: "/careers",
    text: footer.wellglo.careers
  }, {
    to: "/contact",
    text: footer.wellglo.contact
  }, {
    to: "/help",
    text: footer.wellglo.help
  }, {
    to: "/articles",
    text: footer.wellglo.blogs
  }, {
    to: "/directory",
    text: footer.wellglo.healthQnA
  }]
};
var searchSection = {
  title: footer.searchBy.title,
  links: [{
    to: "/",
    text: footer.searchBy.specialty
  }, {
    to: "/",
    text: footer.searchBy.procedure
  }, {
    to: "/",
    text: footer.searchBy.language
  }, {
    to: "/",
    text: footer.searchBy.location
  }, {
    to: "/",
    text: footer.searchBy.insurance
  }, {
    to: "/",
    text: footer.searchBy.reviews
  }]
};
var citySection = {
  title: footer.cities.title,
  links: [{
    to: "/",
    text: footer.cities.bangkok
  }, {
    to: "/",
    text: footer.cities.nonthaburi
  }, {
    to: "/",
    text: footer.cities.nakhonRatchasima
  }, {
    to: "/",
    text: footer.cities.chiangMai
  }, {
    to: "/",
    text: footer.cities.hatYai
  }, {
    to: "/",
    text: footer.cities.udonThani
  }, {
    to: "/",
    text: footer.cities.pakKret
  }, {
    to: "/",
    text: footer.cities.khonKaen
  }]
};
var specialtiesSection = {
  title: footer.specialties.title,
  links: [{
    to: "/",
    text: footer.specialties.chiropractors
  }, {
    to: "/",
    text: footer.specialties.dentists
  }, {
    to: "/",
    text: footer.specialties.dermatologists
  }, {
    to: "/",
    text: footer.specialties.eyeDoctors
  }, {
    to: "/",
    text: footer.specialties.gynecologist
  }, {
    to: "/",
    text: footer.specialties.primaryCareDoctors
  }]
};
var providerJoinUsSection = {
  title: footer.providerJoinUs.title,
  links: [{
    to: "/",
    text: footer.providerJoinUs.link
  }]
};
var FOOTER_LIST = [wellgloSectionLinks, searchSection, citySection, specialtiesSection, providerJoinUsSection];
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/footer/components/FooterSection.js


function FooterSection_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n  font-size: 16px;\n  font-style: normal;\n"]);

  FooterSection_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function FooterSection_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  list-style: none;\n  margin: 8px 0;\n"]);

  FooterSection_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function FooterSection_templateObject3() {
  var data = taggedTemplateLiteral_default()(["padding: 0"]);

  FooterSection_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function FooterSection_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n  font-size: 16px;\n"]);

  FooterSection_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function FooterSection_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n"]);

  FooterSection_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledSection = external_styled_components_default.a.section(FooterSection_templateObject());
var StyledTitle = external_styled_components_default.a.h4(FooterSection_templateObject2());
var FooterSection_StyledList = external_styled_components_default.a.ul(FooterSection_templateObject3());
var StyledListElement = external_styled_components_default.a.li(FooterSection_templateObject4());
var FooterSection_StyledLink = external_styled_components_default()(Router["b" /* Link */])(FooterSection_templateObject5());
var FooterSection_FooterSection = function FooterSection(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$list = props.list,
      list = _props$list === void 0 ? [{
    to: '/',
    text: ''
  }] : _props$list;
  var listOfLinks = list.map(function (link) {
    return external_react_default.a.createElement(StyledListElement, {
      key: link.text
    }, external_react_default.a.createElement(FooterSection_StyledLink, {
      to: link.to
    }, link.text));
  });
  return external_react_default.a.createElement(StyledSection, null, external_react_default.a.createElement(StyledTitle, null, title), external_react_default.a.createElement(FooterSection_StyledList, null, listOfLinks));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/footer/FooterContainer.js


function FooterContainer_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n  font-size: 16px;\n  font-style: normal;\n  margin-left: 25px;\n"]);

  FooterContainer_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function FooterContainer_templateObject4() {
  var data = taggedTemplateLiteral_default()(["display: none;"]);

  FooterContainer_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function FooterContainer_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto 100px auto;\n  max-width: 1200px;\n  padding: 0 5%;\n\n  ", "\n"]);

  FooterContainer_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function FooterContainer_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  color: white;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 5%;\n"]);

  FooterContainer_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function FooterContainer_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0 auto;\n  padding: 100px 0 50px 0;\n  background-color: ", "\n"]);

  FooterContainer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var FooterStyled = external_styled_components_default.a.footer(FooterContainer_templateObject(), function (props) {
  return props.color || 'turquoise';
});
var FooterContainer_StyledSection = external_styled_components_default.a.section(FooterContainer_templateObject2());
var ListSection = external_styled_components_default.a.div(FooterContainer_templateObject3(), Styles["b" /* MEDIA */].tablet(FooterContainer_templateObject4()));
var FooterContainer_StyledLink = external_styled_components_default()(Router["b" /* Link */])(FooterContainer_templateObject5());
var FooterContainer_Footer = function Footer() {
  var bottomSection = function bottomSection() {
    return external_react_default.a.createElement(FooterContainer_StyledSection, null, external_react_default.a.createElement("span", null, footer.copyright), external_react_default.a.createElement(FooterContainer_StyledLink, {
      to: "/"
    }, footer.privacyLink), external_react_default.a.createElement(FooterContainer_StyledLink, {
      to: "/"
    }, footer.termsOfUse), external_react_default.a.createElement(FooterContainer_StyledLink, {
      to: "/"
    }, footer.thai));
  };

  var footerLists = FOOTER_LIST.map(function (list) {
    return external_react_default.a.createElement(FooterSection_FooterSection, {
      title: list.title,
      list: list.links,
      key: list.title
    });
  });
  return external_react_default.a.createElement(FooterStyled, {
    color: Styles["a" /* Colors */].AQUA_MARINE
  }, external_react_default.a.createElement(ListSection, null, footerLists), bottomSection());
};
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/app.css
var app = __webpack_require__(82);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/App.js






 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(HeaderContainer, null), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(Router["c" /* Router */], null, external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))), external_react_default.a.createElement(FooterContainer_Footer, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(31);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(25);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("/Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/node_modules/react-static/lib/browser");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);


































Object(_Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/404 */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "src/pages/404";
  }
}), universalOptions);
t_0.template = '../src/pages/404.js';
var t_1 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about */).then(__webpack_require__.bind(null, 54))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(54);
  },
  chunkName: function chunkName() {
    return "src/pages/about";
  }
}), universalOptions);
t_1.template = '../src/pages/about.js';
var t_2 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/articles.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/articles */).then(__webpack_require__.bind(null, 50))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/articles.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(50);
  },
  chunkName: function chunkName() {
    return "src/pages/articles";
  }
}), universalOptions);
t_2.template = '../src/pages/articles.js';
var t_3 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/blog */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "src/pages/blog";
  }
}), universalOptions);
t_3.template = '../src/pages/blog.js';
var t_4 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/careers.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/careers */).then(__webpack_require__.bind(null, 52))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/careers.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(52);
  },
  chunkName: function chunkName() {
    return "src/pages/careers";
  }
}), universalOptions);
t_4.template = '../src/pages/careers.js';
var t_5 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/clinics.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/clinics */).then(__webpack_require__.bind(null, 46))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/clinics.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return "src/pages/clinics";
  }
}), universalOptions);
t_5.template = '../src/pages/clinics.js';
var t_6 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/contact */).then(__webpack_require__.bind(null, 53))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(53);
  },
  chunkName: function chunkName() {
    return "src/pages/contact";
  }
}), universalOptions);
t_6.template = '../src/pages/contact.js';
var t_7 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/directory.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/directory */).then(__webpack_require__.bind(null, 51))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/directory.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(51);
  },
  chunkName: function chunkName() {
    return "src/pages/directory";
  }
}), universalOptions);
t_7.template = '../src/pages/directory.js';
var t_8 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/help.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/help */).then(__webpack_require__.t.bind(null, 41, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/help.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return "src/pages/help";
  }
}), universalOptions);
t_8.template = '../src/pages/help.js';
var t_9 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/index */).then(__webpack_require__.bind(null, 42))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return "src/pages/index";
  }
}), universalOptions);
t_9.template = '../src/pages/index.js';
var t_10 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/providers.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/providers */).then(__webpack_require__.bind(null, 45))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/providers.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return "src/pages/providers";
  }
}), universalOptions);
t_10.template = '../src/pages/providers.js';
var t_11 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/search.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/search */).then(__webpack_require__.t.bind(null, 43, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/search.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return "src/pages/search";
  }
}), universalOptions);
t_11.template = '../src/pages/search.js';
var t_12 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/test/article.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/test/article */).then(__webpack_require__.bind(null, 48))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/test/article.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(48);
  },
  chunkName: function chunkName() {
    return "src/pages/test/article";
  }
}), universalOptions);
t_12.template = '../src/pages/test/article.js';
var t_13 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/test/clinic-details.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/test/clinic-details */).then(__webpack_require__.bind(null, 47))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/test/clinic-details.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(47);
  },
  chunkName: function chunkName() {
    return "src/pages/test/clinic-details";
  }
}), universalOptions);
t_13.template = '../src/pages/test/clinic-details.js';
var t_14 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/test/provider-details.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/test/provider-details */).then(__webpack_require__.bind(null, 49))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/test/provider-details.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(49);
  },
  chunkName: function chunkName() {
    return "src/pages/test/provider-details";
  }
}), universalOptions);
t_14.template = '../src/pages/test/provider-details.js';
var t_15 = _Users_Chaiyaporn_Projects_work_Wellglo_WellgloFrontend_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/test/test-component.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/test/test-component */).then(__webpack_require__.bind(null, 44))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/test/test-component.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(44);
  },
  chunkName: function chunkName() {
    return "src/pages/test/test-component";
  }
}), universalOptions);
t_15.template = '../src/pages/test/test-component.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/pages/404.js': t_0,
  '../src/pages/about.js': t_1,
  '../src/pages/articles.js': t_2,
  '../src/pages/blog.js': t_3,
  '../src/pages/careers.js': t_4,
  '../src/pages/clinics.js': t_5,
  '../src/pages/contact.js': t_6,
  '../src/pages/directory.js': t_7,
  '../src/pages/help.js': t_8,
  '../src/pages/index.js': t_9,
  '../src/pages/providers.js': t_10,
  '../src/pages/search.js': t_11,
  '../src/pages/test/article.js': t_12,
  '../src/pages/test/clinic-details.js': t_13,
  '../src/pages/test/provider-details.js': t_14,
  '../src/pages/test/test-component.js': t_15 // Not Found Template

});
var notFoundTemplate = "../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);

 //


function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "It's blog time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#bottom",
    id: "top"
  }, "Scroll to bottom!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All Posts:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "b"], {
      to: "/blog/post/".concat(post.id, "/")
    }, post.title));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    id: "bottom"
  }, "Scroll to top!"));
}

/***/ }),
/* 41 */
/***/ (function(module, exports) {



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to React-Static"));
});

/***/ }),
/* 43 */
/***/ (function(module, exports) {



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(7);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/Styles.js
var Styles = __webpack_require__(3);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/button/Button.js



function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n      background: ", ";\n      color: white;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  background: transparent;\n  border-radius: 2px;\n  border: 2px solid ", ";\n  color: ", ";\n  padding: ", ";\n  font-size: 20px;\n  width: ", ";\n  height: ", ";\n  outline-style: none;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ButtonStyled = external_styled_components_default.a.button(_templateObject(), function (props) {
  return props.primaryColor || 'turquoise';
}, function (props) {
  return props.primaryColor || 'turquoise';
}, function (props) {
  return props.padding || '1em 2em';
}, function (props) {
  return props.width || '100%';
}, function (props) {
  return props.height || 'auto';
}, function (props) {
  return props.filled && Object(external_styled_components_["css"])(_templateObject2(), function (props) {
    return props.primaryColor || 'turquoise';
  });
});
var Button_Button = function Button(props) {
  return external_react_default.a.createElement(ButtonStyled, extends_default()({
    type: 'button',
    primaryColor: Styles["a" /* Colors */].AQUA_MARINE
  }, props), props.text);
};
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/image/ThumbnailCircle.js
var ThumbnailCircle = __webpack_require__(10);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(60);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/checkbox/Checkbox.js






var Checkbox_InjectProps = function InjectProps(props) {
  return external_react_default.a.createElement(Checkbox_default.a, extends_default()({
    color: 'default'
  }, props));
};

var Checkbox = Object(styles_["withStyles"])({
  root: {
    color: Styles["a" /* Colors */].VERY_LIGHT_PINK_2
  },
  checked: {
    color: Styles["a" /* Colors */].AQUA_MARINE
  }
})(Checkbox_InjectProps);
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/switch/Switch.js
var Switch = __webpack_require__(20);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(61);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/textFields/TextField.js





var TextField_styles = function styles(theme) {
  return {
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(Styles["a" /* Colors */].VERY_LIGHT_PINK_2)
      },
      '&:before': {
        borderBottom: "1px solid ".concat(Styles["a" /* Colors */].VERY_LIGHT_PINK_2)
      }
    }
  };
};

function CustomizedInputs(props) {
  var classes = props.classes;
  return external_react_default.a.createElement("div", {
    className: classes.root
  }, external_react_default.a.createElement(TextField_default.a, {
    InputProps: {
      classes: props.classes
    },
    label: "Custom CSS",
    id: "custom-css-outlined-input"
  }));
}

/* harmony default export */ var TextField = (Object(styles_["withStyles"])(TextField_styles)(CustomizedInputs));
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/stars/Star.js
var Star = __webpack_require__(21);

// EXTERNAL MODULE: external "@material-ui/lab/Breadcrumbs"
var Breadcrumbs_ = __webpack_require__(62);
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_);

// EXTERNAL MODULE: external "@material-ui/icons/NavigateNext"
var NavigateNext_ = __webpack_require__(63);
var NavigateNext_default = /*#__PURE__*/__webpack_require__.n(NavigateNext_);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/breadcrumbs/Breadcrumbs.js







var Breadcrumbs_InjectProps = function InjectProps(props) {
  return external_react_default.a.createElement(Breadcrumbs_default.a, extends_default()({
    separator: external_react_default.a.createElement(NavigateNext_default.a, {
      fontSize: "small"
    }),
    "arial-label": "Breadcrumb"
  }, props), props.children);
};

var Breadcrumbs = Object(styles_["withStyles"])({
  root: {
    color: Styles["a" /* Colors */].VERY_LIGHT_PINK_2
  }
})(Breadcrumbs_InjectProps);
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/Router.js
var Router = __webpack_require__(6);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/molecules/tagline/TagLineText.js
var TagLineText = __webpack_require__(15);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/molecules/tagline/TagLine.js
var TagLine = __webpack_require__(12);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/molecules/tagline/TagLineRating.js



function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  margin-top: 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function TagLineRating_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  flex: 1;\n  margin-left: 10px;\n  align-self: center;\n"]);

  TagLineRating_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function TagLineRating_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  background-color: transparent;\n"]);

  TagLineRating_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ComponentContainer = external_styled_components_default.a.div(TagLineRating_templateObject(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.height || 'auto';
});
var ContentContainer = external_styled_components_default.a.div(TagLineRating_templateObject2());
var RatingContainer = external_styled_components_default.a.div(_templateObject3());
var TagLineRating_TagLineRating = function TagLineRating(props) {
  var title = props.title,
      content = props.content,
      source = props.source,
      _props$rating = props.rating,
      rating = _props$rating === void 0 ? 0 : _props$rating,
      _props$reviewCount = props.reviewCount,
      reviewCount = _props$reviewCount === void 0 ? 0 : _props$reviewCount;
  return external_react_default.a.createElement(ComponentContainer, extends_default()({
    colors: Styles["a" /* Colors */]
  }, props), external_react_default.a.createElement(ThumbnailCircle["a" /* ThumbnailCircle */], {
    source: source,
    width: "65px",
    height: "65px",
    padding: "2em"
  }), external_react_default.a.createElement(ContentContainer, null, external_react_default.a.createElement(TagLineText["a" /* TagLineText */], {
    title: title,
    content: content
  }), external_react_default.a.createElement(RatingContainer, null, external_react_default.a.createElement(Star["b" /* StarWithRating */], {
    rating: rating,
    reviewCount: reviewCount,
    onChange: null
  }))));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/organisms/cards/ArticleCard.js


function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 20px 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  width: ", ";\n  max-width: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function ArticleCard_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0 auto;\n  letter-spacing: -0.1px;\n  font-size: 16px;\n  color: ", ";\n"]);

  ArticleCard_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ArticleCard_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0 auto;\n  font-size: 20px;\n  letter-spacing: -0.1px;\n"]);

  ArticleCard_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ArticleCard_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  width: ", ";\n  max-width: ", ";\n  max-height: ", ";\n  border-radius: 2px;\n  background-color: #ffffff;\n  padding: ", ";\n"]);

  ArticleCard_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledImage = external_styled_components_default.a.img(ArticleCard_templateObject(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.width || '335px';
}, function (props) {
  return props.height || '240px';
}, function (props) {
  return props.padding || '0';
});
var StyledTitle = external_styled_components_default.a.p(ArticleCard_templateObject2());
var StyledContent = external_styled_components_default.a.p(ArticleCard_templateObject3(), function (props) {
  return props.color || 'darkgray';
});
var StyledArticle = external_styled_components_default.a.article(_templateObject4(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.width || '335px';
});
var MarginVertical = external_styled_components_default.a.div(_templateObject5());
var ArticleCard_ArticleText = function ArticleText(props) {
  var contentElement = props.content ? external_react_default.a.createElement(StyledContent, {
    color: Styles["a" /* Colors */].BROWNISH_GREY
  }, props.content) : null;
  return external_react_default.a.createElement(MarginVertical, null, external_react_default.a.createElement(StyledTitle, null, props.title), contentElement);
};
var ArticleCard_ArticleCardWithByline = function ArticleCardWithByline(props) {
  var _props$imageSrc = props.imageSrc,
      imageSrc = _props$imageSrc === void 0 ? "" : _props$imageSrc,
      _props$articleTitle = props.articleTitle,
      articleTitle = _props$articleTitle === void 0 ? '' : _props$articleTitle,
      _props$articleContent = props.articleContent,
      articleContent = _props$articleContent === void 0 ? '' : _props$articleContent,
      _props$tagTitle = props.tagTitle,
      tagTitle = _props$tagTitle === void 0 ? '' : _props$tagTitle,
      _props$tagContent = props.tagContent,
      tagContent = _props$tagContent === void 0 ? '' : _props$tagContent;
  return external_react_default.a.createElement(StyledArticle, null, external_react_default.a.createElement(StyledImage, {
    colors: Styles["a" /* Colors */],
    src: imageSrc
  }), external_react_default.a.createElement(ArticleCard_ArticleText, {
    title: articleTitle,
    content: articleContent
  }), external_react_default.a.createElement(MarginVertical, null, external_react_default.a.createElement(TagLine["a" /* TagLine */], {
    style: {
      fontSize: '13px'
    },
    title: tagTitle,
    content: tagContent
  })));
};
var ArticleCard_ArticleCard = function ArticleCard(props) {
  var _props$imageSrc2 = props.imageSrc,
      imageSrc = _props$imageSrc2 === void 0 ? "" : _props$imageSrc2,
      _props$articleTitle2 = props.articleTitle,
      articleTitle = _props$articleTitle2 === void 0 ? '' : _props$articleTitle2,
      _props$articleContent2 = props.articleContent,
      articleContent = _props$articleContent2 === void 0 ? '' : _props$articleContent2;
  return external_react_default.a.createElement(StyledArticle, null, external_react_default.a.createElement(StyledImage, {
    colors: Styles["a" /* Colors */],
    src: imageSrc
  }), external_react_default.a.createElement(ArticleCard_ArticleText, {
    title: articleTitle,
    content: articleContent
  }));
};
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/organisms/cards/ProfileInfoCard.js
var ProfileInfoCard = __webpack_require__(27);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/card/Card.js
var Card = __webpack_require__(28);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/organisms/cards/QuoteCard.js


function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n    max-width: 327px;\n    height: 229px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function QuoteCard_templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  max-width: 248px;\n  height: 296px\n\n  ", "\n"]);

  QuoteCard_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function QuoteCard_templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  margin:  ", ";\n"]);

  QuoteCard_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function QuoteCard_templateObject3() {
  var data = taggedTemplateLiteral_default()(["margin-top: 5px;"]);

  QuoteCard_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function QuoteCard_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  width: 30px;\n  color: ", ";\n  object-fit: cover;\n  margin-top: 20px;\n\n  ", "\n"]);

  QuoteCard_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function QuoteCard_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  font-style: normal;\n  margin: 0 auto;\n  letter-spacing: normal;\n  line-height: 1.33;\n  font-size: 15px;\n  color: ", ";\n"]);

  QuoteCard_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var QuoteCard_StyledContent = external_styled_components_default.a.p(QuoteCard_templateObject(), function (props) {
  return props.color || 'darkgray';
});
var QuoteCard_StyledImage = external_styled_components_default.a.img(QuoteCard_templateObject2(), function (props) {
  return props.color.AQUA_MARINE || 'turquoise';
}, Styles["b" /* MEDIA */].phone(QuoteCard_templateObject3()));
var QuoteCard_MarginVertical = external_styled_components_default.a.div(QuoteCard_templateObject4(), function (props) {
  return props.margin || '10px 0';
});
var StyledCard = external_styled_components_default()(Card["a" /* Card */])(QuoteCard_templateObject5(), Styles["b" /* MEDIA */].phone(_templateObject6()));
var QuoteCard_QuoteText = function QuoteText(props) {
  var contentElement = props.content ? external_react_default.a.createElement(QuoteCard_StyledContent, {
    color: Styles["a" /* Colors */].BLACK
  }, props.content) : null;
  return external_react_default.a.createElement(QuoteCard_MarginVertical, null, contentElement);
};
var QuoteCard_QuoteCard = function QuoteCard(props) {
  var _props$content = props.content,
      content = _props$content === void 0 ? '' : _props$content,
      _props$tagTitle = props.tagTitle,
      tagTitle = _props$tagTitle === void 0 ? '' : _props$tagTitle,
      _props$tagContent = props.tagContent,
      tagContent = _props$tagContent === void 0 ? '' : _props$tagContent;
  return external_react_default.a.createElement(StyledCard, {
    minWidth: "248px",
    height: "296px",
    padding: "1.5em 1em"
  }, external_react_default.a.createElement(QuoteCard_StyledImage, {
    src: "/assets/quote.svg",
    alt: "Quote",
    color: Styles["a" /* Colors */]
  }), external_react_default.a.createElement(QuoteCard_MarginVertical, {
    margin: '15px 0'
  }, external_react_default.a.createElement(QuoteCard_QuoteText, {
    content: content
  })), external_react_default.a.createElement(TagLine["a" /* TagLine */], {
    style: {
      fontSize: '13px'
    },
    title: tagTitle,
    content: tagContent
  }));
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(13);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@material-ui/core/Collapse"
var Collapse_ = __webpack_require__(64);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(65);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__(66);
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/collapse/Collapse.js



function Collapse_templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n"]);

  Collapse_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Collapse_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  Collapse_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Collapse_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  list-style: none;\n  padding: 10px 0;\n  border-bottom: 1px solid ", ";\n  color: ", ";\n"]);

  Collapse_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var StyledList = external_styled_components_default.a.li(Collapse_templateObject(), function (props) {
  return props.color || 'black';
}, function (props) {
  return props.color || 'black';
});
var Collapse_StyledTitle = external_styled_components_default.a.div(Collapse_templateObject2());
var StyledButton = external_styled_components_default.a.button(Collapse_templateObject3());
var Collapse_Collapse = function Collapse(props) {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isCollapse = _useState2[0],
      toggleCollapse = _useState2[1];

  var handleClick = function handleClick() {
    return toggleCollapse(!isCollapse);
  };

  var title = props.title,
      children = props.children;
  var icon = isCollapse ? external_react_default.a.createElement(Remove_default.a, null) : external_react_default.a.createElement(Add_default.a, null);
  return external_react_default.a.createElement(StyledList, {
    color: Styles["a" /* Colors */].BLACK
  }, external_react_default.a.createElement(Collapse_StyledTitle, null, external_react_default.a.createElement("span", null, title), external_react_default.a.createElement(StyledButton, {
    onClick: handleClick
  }, icon)), external_react_default.a.createElement(Collapse_default.a, {
    "in": isCollapse,
    timeout: "auto",
    unmountOnExit: true
  }, children));
};
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/button/ButtonInList.js
var ButtonInList = __webpack_require__(19);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/test/test-component.js


function test_component_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 40px 0;\n  padding: 10px 0;\n  border-bottom: 1px solid #efefef;\n"]);

  test_component_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



















var test_component_MarginVertical = external_styled_components_default.a.div(test_component_templateObject());
/* harmony default export */ var test_component = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", null, "Test Component"), external_react_default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, external_react_default.a.createElement("div", {
    style: {
      flex: 1
    }
  }, external_react_default.a.createElement(Button_Button, {
    filled: true,
    text: 'test button',
    width: '100%',
    onClick: function onClick() {
      return console.log('click');
    }
  })), external_react_default.a.createElement("div", {
    style: {
      flex: 1,
      margin: '0 0 0 10px'
    }
  }, external_react_default.a.createElement(Button_Button, {
    text: 'test button',
    width: '100%',
    onClick: function onClick() {
      return console.log('click');
    }
  }))), external_react_default.a.createElement(ThumbnailCircle["a" /* ThumbnailCircle */], null), external_react_default.a.createElement(Checkbox, {
    color: 'default'
  }), external_react_default.a.createElement(Switch["a" /* Switch */], null), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(TextField, null)), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(Star["a" /* Star */], {
    rating: 3,
    onChange: function onChange(a, b) {
      return console.log('change star', a, b);
    }
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(Breadcrumbs, null, external_react_default.a.createElement(Router["a" /* BreadcrumbLink */], {
    to: "/"
  }, "Wellglo"), external_react_default.a.createElement(Router["a" /* BreadcrumbLink */], {
    to: "/clinics"
  }, "Clinics"), external_react_default.a.createElement(Router["a" /* BreadcrumbLink */], {
    to: "/clinics/title"
  }, "Title"))), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(TagLineText["a" /* TagLineText */], {
    title: "Dr. Boonchai Thanyalakpark",
    content: "Dermatologist"
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(TagLine["a" /* TagLine */], {
    title: "Dr. Boonchai Thanyalakpark",
    content: "Dermatologist"
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(TagLine["a" /* TagLine */], {
    title: "Dr. Boonchai Thanyalakpark"
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(TagLineRating_TagLineRating, {
    title: "Dr. Boonchai Thanyalakpark",
    content: "Dermatologist",
    rating: 5,
    reviewCount: 15
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(ArticleCard_ArticleCard, {
    imageSrc: "https://via.placeholder.com/335x240.png",
    articleTitle: "Interdum et malesuada fames",
    articleContent: "Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam."
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(ArticleCard_ArticleCardWithByline, {
    imageSrc: "https://via.placeholder.com/335x240.png",
    articleTitle: "Interdum et malesuada fames",
    articleContent: "Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.",
    tagTitle: "Richard Rhodes",
    tagContent: "Feb 20 - 3 min read"
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(ProfileInfoCard["a" /* ProfileInfoCard */], {
    tagTitle: "Dr. Chakarin Banchongkit",
    tagContent: "Dermatologist",
    addressName: "Interdum et malesuada fames",
    addressDetail: "Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.",
    rating: 4,
    reviewCount: 16
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(QuoteCard_QuoteCard, {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat ex, ornare in ante id, tristique dictum libero. Phasellus pellentesque laoreet lorem.",
    tagTitle: "Dorothy Dixon",
    tagContent: "Wellglo member"
  })), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(Collapse_Collapse, {
    title: "Why doesn't my doctor have a star rating?"
  }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tincidunt auctor finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas enim purus, fringilla nec sapien quis, fringilla tincidunt libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin porttitor libero id velit mattis, quis luctus mi pellentesque. Etiam vehicula interdum pellentesque. Sed eleifend et nisl in accumsan. Quisque vestibulum ex nibh, at scelerisque turpis venenatis eget. Mauris mollis lorem quis odio ullamcorper scelerisque.")), external_react_default.a.createElement(Collapse_Collapse, {
    title: "Does Wellglo have an app?"
  }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum.")), external_react_default.a.createElement(Collapse_Collapse, {
    title: "Why isn't my doctor listed on your site?"
  }, external_react_default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum."))), external_react_default.a.createElement(test_component_MarginVertical, null, external_react_default.a.createElement(ButtonInList["a" /* ButtonInList */], {
    title: 'Plastic Surgeon',
    imageSrc: '/assets/cosmetic.svg'
  })));
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(13);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__(22);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(23);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(24);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__(26);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(9);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/Styles.js
var Styles = __webpack_require__(3);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/switch/Switch.js
var Switch = __webpack_require__(20);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/list/components/Filter.js



function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  align-items: center\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0 0 30px 0;\n  font-weight: 100;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0 10px;\n  padding: 6px 0;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 10px 0;\n  font-size: 28px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Filter_data = {
  options: [{
    value: 'Test'
  }, {
    value: 'Dermatologist'
  }, {
    value: 'Dentist'
  }],
  filters: ['filter', 'filter2', 'filter3']
};
var Filter_Filter = function Filter(props) {
  var _useState = Object(external_react_["useState"])('Select a Specialist'),
      _useState2 = slicedToArray_default()(_useState, 2),
      doctorType = _useState2[0],
      setDoctorType = _useState2[1];

  var _props$options = props.options,
      options = _props$options === void 0 ? Filter_data.options || [] : _props$options,
      _props$filters = props.filters,
      filters = _props$filters === void 0 ? Filter_data.filters || [] : _props$filters,
      _props$city = props.city,
      city = _props$city === void 0 ? 'Bangkok' : _props$city;
  var menuItems = options.map(function (option) {
    return external_react_default.a.createElement(MenuItem_default.a, {
      key: option.value,
      value: option.value
    }, option.value);
  }); // when filter API is ready, use redux to manage filter state and connects to backend

  var filterItems = filters.map(function (filter) {
    return external_react_default.a.createElement(FormControl_default.a, {
      key: filter
    }, external_react_default.a.createElement(SelectFilterCustom, {
      value: filter,
      disableUnderline: true,
      IconComponent: function IconComponent() {
        return external_react_default.a.createElement("span", null);
      } // onChange={e => someReduxAction(e.target.value)}
      ,
      input: external_react_default.a.createElement(InputCustom, null),
      renderValue: function renderValue(val) {
        return external_react_default.a.createElement(FilterComponent, null, val);
      }
    }, menuItems));
  });
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(FormControl_default.a, null, external_react_default.a.createElement(SelectCustom, {
    value: doctorType,
    disableUnderline: true,
    onChange: function onChange(e) {
      return setDoctorType(e.target.value);
    },
    renderValue: function renderValue(val) {
      return external_react_default.a.createElement(InputComponent, null, val);
    }
  }, external_react_default.a.createElement(MenuItem_default.a, {
    value: 'Select a Specialist'
  }, "Select a Specialist"), menuItems)), external_react_default.a.createElement(City, null, city), external_react_default.a.createElement(FilterBarContainer, null, external_react_default.a.createElement(FilterList, null, filterItems), external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", null, "Show map"), external_react_default.a.createElement(Switch["a" /* Switch */], null))));
};
var InputComponent = external_styled_components_default.a.p(_templateObject());
var FilterComponent = external_styled_components_default.a.p(_templateObject2());
var City = external_styled_components_default.a.h2(_templateObject3(), Styles["a" /* Colors */].BROWNISH_GREY);
var FilterBarContainer = external_styled_components_default.a.div(_templateObject4());
var FilterList = external_styled_components_default.a.div(_templateObject5());
var selectFilterStyles = {
  root: {
    padding: 0,
    border: "1px solid ".concat(Styles["a" /* Colors */].VERY_LIGHT_PINK_2),
    minWidth: '80px',
    marginRight: '10px'
  }
};
var SelectFilterCustom = Object(styles_["withStyles"])(selectFilterStyles)(Select_default.a);
var selectStyles = {
  root: {
    padding: 0,
    minWidth: '80px'
  }
};
var SelectCustom = Object(styles_["withStyles"])(selectStyles)(Select_default.a);
var inputStyles = {
  input: {
    padding: 0
  }
};
var InputCustom = Object(styles_["withStyles"])(inputStyles)(Input_default.a);
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/templates/cardLists/ProfileCardList.js
var ProfileCardList = __webpack_require__(16);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/list/containers/SponsoredResultsContainer.js


var SponsoredResultsContainer_data = [{
  imageSrc: "",
  addressName: 'Phyathai 2 International Hospital',
  addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
  tagTitle: 'Dr. Kittichai Sipiyarak',
  tagContent: 'Dermatologist',
  rating: 3,
  reviewCount: 12,
  id: 122
}, {
  imageSrc: "",
  addressName: 'Phyathai 2 International Hospital',
  addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
  tagTitle: 'Dr. Kittichai Sipiyarak',
  tagContent: 'Dermatologist',
  rating: 3,
  reviewCount: 12,
  id: 211
}];
var SponsoredResultsContainer_SponsoredResultsContainer = function SponsoredResultsContainer(props) {
  var _props$searchResult = props.searchResult,
      searchResult = _props$searchResult === void 0 ? SponsoredResultsContainer_data : _props$searchResult;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h2", null, "Sponsored results"), external_react_default.a.createElement(ProfileCardList["a" /* ProfileListContainer */], {
    data: searchResult,
    withAd: true
  }));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/list/containers/ListContainer.js


var ListContainer_data = [{
  imageSrc: "",
  addressName: 'Phyathai 2 International Hospital',
  addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
  tagTitle: 'Dr. Kittichai Sipiyarak',
  tagContent: 'Dermatologist',
  rating: 3,
  reviewCount: 12,
  id: 11
}, {
  imageSrc: "",
  addressName: 'Phyathai 2 International Hospital',
  addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
  tagTitle: 'Dr. Kittichai Sipiyarak',
  tagContent: 'Dermatologist',
  rating: 3,
  reviewCount: 12,
  id: 22
}, {
  imageSrc: "",
  addressName: 'Phyathai 2 International Hospital',
  addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
  tagTitle: 'Dr. Kittichai Sipiyarak',
  tagContent: 'Dermatologist',
  rating: 3,
  reviewCount: 12,
  id: 33
}, {
  imageSrc: "",
  addressName: 'Phyathai 2 International Hospital',
  addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
  tagTitle: 'Dr. Kittichai Sipiyarak',
  tagContent: 'Dermatologist',
  rating: 3,
  reviewCount: 12,
  id: 44
}, {
  imageSrc: "",
  addressName: 'Phyathai 2 International Hospital',
  addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
  tagTitle: 'Dr. Kittichai Sipiyarak',
  tagContent: 'Dermatologist',
  rating: 3,
  reviewCount: 12,
  id: 55
}];
var ListContainer_ListContainer = function ListContainer(props) {
  var _props$searchTerm = props.searchTerm,
      searchTerm = _props$searchTerm === void 0 ? 'Dermatologist' : _props$searchTerm,
      _props$searchResultCo = props.searchResultCount,
      searchResultCount = _props$searchResultCo === void 0 ? 12 : _props$searchResultCo,
      _props$searchResult = props.searchResult,
      searchResult = _props$searchResult === void 0 ? ListContainer_data : _props$searchResult;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h2", null, "".concat(searchTerm, " (").concat(searchResultCount, ")")), external_react_default.a.createElement(ProfileCardList["a" /* ProfileListContainer */], {
    data: searchResult
  }));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/list/components/Explanation.js


function Explanation_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0;\n  padding: 20px 0;\n"]);

  Explanation_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Description = external_styled_components_default.a.p(Explanation_templateObject());
var Explanation_Explanation = function Explanation(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "Clinics in Bangkok" : _props$title,
      _props$description = props.description,
      description = _props$description === void 0 ? "With hundreds of Bangkok dermatologists to choose from, Wellglo can eliminate the guesswork and help you find professionals who participate in your insurance. Simply search the list of local physicians and check patient ratings and verified reviews to choose a dermatologist who can effectively treat warts, eczema, skin infections, or acne. Whether you're in Staten Island, Brooklyn, or any other borough, simply select an available appointment time to book a Bangkok dermatologist right away." : _props$description;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h3", null, title), external_react_default.a.createElement(Description, null, description));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/list/containers/MapContainer.js

var MapContainer_MapContainer = function MapContainer() {
  return external_react_default.a.createElement("div", null);
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/list/ProviderLists.js






var ProviderLists_ProviderLists = function ProviderLists() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    style: {
      margin: '0 auto',
      background: 'white',
      padding: '0 30px 20px 30px'
    }
  }, external_react_default.a.createElement(Filter_Filter, null)), external_react_default.a.createElement("div", {
    style: {
      margin: '0 auto',
      padding: '30px',
      backgroundColor: 'rgba(240, 250, 248, 0.5)'
    }
  }, external_react_default.a.createElement(MapContainer_MapContainer, null), external_react_default.a.createElement(SponsoredResultsContainer_SponsoredResultsContainer, null), external_react_default.a.createElement(ListContainer_ListContainer, null), external_react_default.a.createElement(Explanation_Explanation, null)));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/providers.js


/* harmony default export */ var providers = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(ProviderLists_ProviderLists, null);
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(13);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__(22);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(23);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(24);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__(26);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(9);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/Styles.js
var Styles = __webpack_require__(3);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/switch/Switch.js
var Switch = __webpack_require__(20);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/list/components/Filter.js



function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  align-items: center\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0 0 30px 0;\n  font-weight: 100;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0 10px;\n  padding: 6px 0;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 10px 0;\n  font-size: 28px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Filter_data = {
  options: [{
    value: 'Test'
  }, {
    value: 'Dermatologist'
  }, {
    value: 'Dentist'
  }],
  filters: ['filter', 'filter2', 'filter3']
};
var Filter_Filter = function Filter(props) {
  var _useState = Object(external_react_["useState"])('Select a Specialist'),
      _useState2 = slicedToArray_default()(_useState, 2),
      doctorType = _useState2[0],
      setDoctorType = _useState2[1];

  var _props$options = props.options,
      options = _props$options === void 0 ? Filter_data.options || [] : _props$options,
      _props$filters = props.filters,
      filters = _props$filters === void 0 ? Filter_data.filters || [] : _props$filters,
      _props$city = props.city,
      city = _props$city === void 0 ? 'Bangkok' : _props$city;
  var menuItems = options.map(function (option) {
    return external_react_default.a.createElement(MenuItem_default.a, {
      key: option.value,
      value: option.value
    }, option.value);
  }); // when filter API is ready, use redux to manage filter state and connects to backend

  var filterItems = filters.map(function (filter) {
    return external_react_default.a.createElement(FormControl_default.a, {
      key: filter
    }, external_react_default.a.createElement(SelectFilterCustom, {
      value: filter,
      disableUnderline: true,
      IconComponent: function IconComponent() {
        return external_react_default.a.createElement("span", null);
      } // onChange={e => someReduxAction(e.target.value)}
      ,
      input: external_react_default.a.createElement(InputCustom, null),
      renderValue: function renderValue(val) {
        return external_react_default.a.createElement(FilterComponent, null, val);
      }
    }, menuItems));
  });
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(FormControl_default.a, null, external_react_default.a.createElement(SelectCustom, {
    value: doctorType,
    disableUnderline: true,
    onChange: function onChange(e) {
      return setDoctorType(e.target.value);
    },
    renderValue: function renderValue(val) {
      return external_react_default.a.createElement(InputComponent, null, val);
    }
  }, external_react_default.a.createElement(MenuItem_default.a, {
    value: 'Select a Specialist'
  }, "Select a Specialist"), menuItems)), external_react_default.a.createElement(City, null, city), external_react_default.a.createElement(FilterBarContainer, null, external_react_default.a.createElement(FilterList, null, filterItems), external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", null, "Show map"), external_react_default.a.createElement(Switch["a" /* Switch */], null))));
};
var InputComponent = external_styled_components_default.a.p(_templateObject());
var FilterComponent = external_styled_components_default.a.p(_templateObject2());
var City = external_styled_components_default.a.h2(_templateObject3(), Styles["a" /* Colors */].BROWNISH_GREY);
var FilterBarContainer = external_styled_components_default.a.div(_templateObject4());
var FilterList = external_styled_components_default.a.div(_templateObject5());
var selectFilterStyles = {
  root: {
    padding: 0,
    border: "1px solid ".concat(Styles["a" /* Colors */].VERY_LIGHT_PINK_2),
    minWidth: '80px',
    marginRight: '10px'
  }
};
var SelectFilterCustom = Object(styles_["withStyles"])(selectFilterStyles)(Select_default.a);
var selectStyles = {
  root: {
    padding: 0,
    minWidth: '80px'
  }
};
var SelectCustom = Object(styles_["withStyles"])(selectStyles)(Select_default.a);
var inputStyles = {
  input: {
    padding: 0
  }
};
var InputCustom = Object(styles_["withStyles"])(inputStyles)(Input_default.a);
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/templates/cardLists/ProfileCardList.js
var ProfileCardList = __webpack_require__(16);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/list/containers/SponsoredResultsContainer.js


var SponsoredResultsContainer_data = [{
  imageSrc: "",
  addressName: '',
  addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
  tagTitle: 'Pulse Clinic (Silom)',
  tagContent: 'Beauty clinic',
  rating: 5,
  reviewCount: 12,
  id: 555
}, {
  imageSrc: "",
  addressName: '',
  addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
  tagTitle: 'Pulse Clinic (Silom)',
  tagContent: 'Beauty clinic',
  rating: 5,
  reviewCount: 10,
  id: 666
}];
var SponsoredResultsContainer_SponsoredResultsContainer = function SponsoredResultsContainer(props) {
  var _props$searchResult = props.searchResult,
      searchResult = _props$searchResult === void 0 ? SponsoredResultsContainer_data : _props$searchResult;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h2", null, "Sponsored results"), external_react_default.a.createElement(ProfileCardList["a" /* ProfileListContainer */], {
    data: searchResult,
    withAd: true
  }));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/list/containers/ListContainer.js


var ListContainer_data = [{
  imageSrc: "",
  addressName: '',
  addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
  tagTitle: 'Pulse Clinic (Silom)',
  tagContent: 'Beauty clinic',
  rating: 5,
  reviewCount: 12,
  id: 18
}, {
  imageSrc: "",
  addressName: '',
  addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
  tagTitle: 'Pulse Clinic (Silom)',
  tagContent: 'Beauty clinic',
  rating: 5,
  reviewCount: 10,
  id: 20
}, {
  imageSrc: "",
  addressName: '',
  addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
  tagTitle: 'Pulse Clinic (Silom)',
  tagContent: 'Beauty clinic',
  rating: 5,
  reviewCount: 10,
  id: 100
}, {
  imageSrc: "",
  addressName: '',
  addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
  tagTitle: 'Pulse Clinic (Silom)',
  tagContent: 'Beauty clinic',
  rating: 5,
  reviewCount: 10,
  id: 19
}, {
  imageSrc: "",
  addressName: '',
  addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
  tagTitle: 'Pulse Clinic (Silom)',
  tagContent: 'Beauty clinic',
  rating: 5,
  reviewCount: 10,
  id: 10
}];
var ListContainer_ListContainer = function ListContainer(props) {
  var _props$searchTerm = props.searchTerm,
      searchTerm = _props$searchTerm === void 0 ? 'Clinics' : _props$searchTerm,
      _props$searchResultCo = props.searchResultCount,
      searchResultCount = _props$searchResultCo === void 0 ? 5 : _props$searchResultCo,
      _props$searchResult = props.searchResult,
      searchResult = _props$searchResult === void 0 ? ListContainer_data : _props$searchResult;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h2", null, "".concat(searchTerm, " (").concat(searchResultCount, ")")), external_react_default.a.createElement(ProfileCardList["a" /* ProfileListContainer */], {
    data: searchResult
  }));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/list/components/Explanation.js

var Explanation_Explanation = function Explanation(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "Dermatologists in Bangkok" : _props$title,
      _props$description = props.description,
      description = _props$description === void 0 ? "With hundreds of Bangkok dermatologists to choose from, Wellglo can eliminate the guesswork and help you find professionals who participate in your insurance. Simply search the list of local physicians and check patient ratings and verified reviews to choose a dermatologist who can effectively treat warts, eczema, skin infections, or acne. Whether you're in Staten Island, Brooklyn, or any other borough, simply select an available appointment time to book a Bangkok dermatologist right away." : _props$description;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h3", null, title), external_react_default.a.createElement("p", null, description));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/list/containers/MapContainer.js

var MapContainer_MapContainer = function MapContainer() {
  return external_react_default.a.createElement("div", null, "Map");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/list/ClinicLists.js






var ClinicLists_ClinicLists = function ClinicLists() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    style: {
      margin: '0 auto',
      background: 'white',
      padding: '0 30px 20px 30px'
    }
  }, external_react_default.a.createElement(Filter_Filter, null)), external_react_default.a.createElement("div", {
    style: {
      margin: '0 auto',
      padding: '30px',
      backgroundColor: 'rgba(240, 250, 248, 0.5)'
    }
  }, external_react_default.a.createElement(MapContainer_MapContainer, null), external_react_default.a.createElement(SponsoredResultsContainer_SponsoredResultsContainer, null), external_react_default.a.createElement(ListContainer_ListContainer, null), external_react_default.a.createElement(Explanation_Explanation, null)));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/clinics.js


/* harmony default export */ var clinics = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(ClinicLists_ClinicLists, null);
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/details/containers/HeadInfoContainer.js

var HeadInfoContainer_HeadInfoContainer = function HeadInfoContainer() {
  return external_react_default.a.createElement("div", null, "HeadInfoContainer");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/details/containers/OverviewContainer.js

var OverviewContainer_OverviewContainer = function OverviewContainer() {
  return external_react_default.a.createElement("div", null, "OverviewContainer");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/details/containers/MedicalTeamContainer.js

var MedicalTeamContainer_MedicalTeamContainer = function MedicalTeamContainer() {
  return external_react_default.a.createElement("div", null, "MedicalTeamContainer");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/details/containers/SpecialtiesContainer.js

var SpecialtiesContainer_SpecialtiesContainer = function SpecialtiesContainer() {
  return external_react_default.a.createElement("div", null, "SpecialtiesContainer");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/details/containers/BranchesContainer.js

var BranchesContainer_BranchesContainer = function BranchesContainer() {
  return external_react_default.a.createElement("div", null, "BranchesContainer");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/clinics/details/ClinicDetails.js






var ClinicDetails_ClinicDetails = function ClinicDetails() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(HeadInfoContainer_HeadInfoContainer, null), external_react_default.a.createElement("div", null, external_react_default.a.createElement(OverviewContainer_OverviewContainer, null), external_react_default.a.createElement(SpecialtiesContainer_SpecialtiesContainer, null), external_react_default.a.createElement(MedicalTeamContainer_MedicalTeamContainer, null), external_react_default.a.createElement(BranchesContainer_BranchesContainer, null)));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/test/clinic-details.js


/* harmony default export */ var clinic_details = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", null, "Test"), external_react_default.a.createElement(ClinicDetails_ClinicDetails, null));
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/details/components/ArticleContent.js

var ArticleContent_ArticleContent = function ArticleContent() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(ArticleContent_Heading, null), external_react_default.a.createElement(ArticleContent_Content, null));
};
var ArticleContent_Heading = function Heading() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h1", null, "Title"), external_react_default.a.createElement("h1", null, "Subtitle"));
};
var ArticleContent_Content = function Content() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", null, "byline"), external_react_default.a.createElement("button", null, "follow"), external_react_default.a.createElement("p", null, "content"));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/details/containers/ListContainer.js

var ListContainer_List = function List() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h3", null, "Keep reading"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "article1"), external_react_default.a.createElement("p", null, "article2"), external_react_default.a.createElement("p", null, "article3")));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/details/containers/SponsorContainer.js

var SponsorContainer_Sponsor = function Sponsor() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", null, "Sponsor content"));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/details/Article.js




var Article_Article = function Article(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(ArticleContent_ArticleContent, null), external_react_default.a.createElement(Article_SocialBar, null), external_react_default.a.createElement(SponsorContainer_Sponsor, null), external_react_default.a.createElement(ListContainer_List, null));
};

var Article_SocialBar = function SocialBar() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("button", null, "like"), external_react_default.a.createElement("button", null, "share"), external_react_default.a.createElement("button", null, "bookmark"), external_react_default.a.createElement("button", null, "comment"));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/test/article.js


/* harmony default export */ var article = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", null, "Test"), external_react_default.a.createElement(Article_Article, null));
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/details/containers/OverviewContainer.js

var OverviewContainer_OverviewContainer = function OverviewContainer() {
  return external_react_default.a.createElement("div", null, "OverviewContainer");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/details/containers/PatientReviewContainer.js

var PatientReviewContainer_PatientReviewContainer = function PatientReviewContainer() {
  return external_react_default.a.createElement("div", null, "PatientReviewContainer");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/details/containers/HeadInfoContainer.js

var HeadInfoContainer_HeadInfoContainer = function HeadInfoContainer() {
  return external_react_default.a.createElement("div", null, "HeadInfoContainer");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/providers/details/ProviderDetails.js




var ProviderDetails_ProviderDetails = function ProviderDetails() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(HeadInfoContainer_HeadInfoContainer, null), external_react_default.a.createElement(OverviewContainer_OverviewContainer, null), external_react_default.a.createElement(PatientReviewContainer_PatientReviewContainer, null));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/test/provider-details.js


/* harmony default export */ var provider_details = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", null, "Test"), external_react_default.a.createElement(ProviderDetails_ProviderDetails, null));
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(11);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/list/components/Filter.js

var Filter_Filter = function Filter() {
  return external_react_default.a.createElement("div", null, "Filter");
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/list/containers/ArticleListContainer.js

var ArticleListContainer_ArticleListContainer = function ArticleListContainer() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(ArticleListContainer_TopStory, null), external_react_default.a.createElement(ArticleListContainer_List, null));
};
var ArticleListContainer_TopStory = function TopStory() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h2", null, "Top Story"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, "large image"), external_react_default.a.createElement("h2", null, "Nullan disnissim"), external_react_default.a.createElement("p", null, "subtitle"), external_react_default.a.createElement("div", null, "editor tag")));
};
var ArticleListContainer_List = function List() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h3", null, "Keep reading"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "article1"), external_react_default.a.createElement("p", null, "article2"), external_react_default.a.createElement("p", null, "article3")));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/list/ArticleList.js



var ArticleList_ArticleList = function ArticleList(props) {
  var _props$posts = props.posts,
      posts = _props$posts === void 0 ? [] : _props$posts;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Filter_Filter, null), external_react_default.a.createElement(ArticleListContainer_ArticleListContainer, {
    posts: posts
  }));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/articles.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });



function Blog() {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      posts = _useRouteData.posts;

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
    href: "#bottom",
    id: "top"
  }, "Scroll to bottom!")), external_react_default.a.createElement(ArticleList_ArticleList, {
    posts: posts
  }), external_react_default.a.createElement("a", {
    href: "#top",
    id: "bottom"
  }, "Scroll to top!"));
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/Router.js
var Router = __webpack_require__(6);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/Styles.js
var Styles = __webpack_require__(3);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__(14);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/button/ButtonInList.js
var ButtonInList = __webpack_require__(19);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/directory/components/InfoList.js


function _templateObject7() {
  var data = taggedTemplateLiteral_default()(["\n    padding: 10px 0;\n    border-bottom: none;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 40px 0;\n  border-bottom: 1px solid ", "\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["margin: 0;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 0;\n  margin: 30px 0 0 0;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  list-style: none;\n  margin: 10px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var StyledLink = external_styled_components_default()(Router["b" /* Link */])(_templateObject(), Styles["a" /* Colors */].BLACK);
var StyledListElem = external_styled_components_default.a.li(_templateObject2());
var StyledListContainer = external_styled_components_default.a.ul(_templateObject3(), Styles["b" /* MEDIA */].phone(_templateObject4()));
var StyledHeading = external_styled_components_default.a.h1(_templateObject5());
var StyledContainer = external_styled_components_default.a.div(_templateObject6(), Styles["a" /* Colors */].VERY_LIGHT_PINK, Styles["b" /* MEDIA */].phone(_templateObject7()));
var InfoList_InfoList = function InfoList(props) {
  var _props$alphabet = props.alphabet,
      alphabet = _props$alphabet === void 0 ? '' : _props$alphabet,
      _props$titles = props.titles,
      titles = _props$titles === void 0 ? [] : _props$titles;
  var matches = Object(useMediaQuery_["unstable_useMediaQuery"])("(min-width:".concat(Styles["c" /* WINDOW_SIZES */].phone, "px)"));
  var list = titles.map(function (title) {
    return matches ? external_react_default.a.createElement(StyledListElem, {
      key: title
    }, external_react_default.a.createElement(StyledLink, {
      to: "/health/".concat(title.replace(' ', '-'))
    }, title)) : external_react_default.a.createElement(ButtonInList["a" /* ButtonInList */], {
      key: title,
      title: title,
      link: "/health/".concat(title.replace(' ', '-'))
    });
  });
  return external_react_default.a.createElement(StyledContainer, null, external_react_default.a.createElement(StyledHeading, null, alphabet), external_react_default.a.createElement(StyledListContainer, null, list));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/directory/data.js
var DATA = [{
  alphabet: 'A',
  titles: ['Alternative Medicine', 'Andrologist', 'Audiologist']
}, {
  alphabet: 'B',
  titles: ['Bariatric Surgeon', 'Beauty & Laser Therapist']
}, {
  alphabet: 'C',
  titles: ['Cardiologist', 'Cardiothoracic Surgeon/ Heart Surgeon', 'Chinese Medicine', 'Chiropractor', 'Colorectal Surgeon']
}, {
  alphabet: 'D',
  titles: ['Dentist', 'Dermatologist', 'Dietitian']
}, {
  alphabet: 'E',
  titles: ['Endodontist']
}, {
  alphabet: 'F',
  titles: ['Family Doctor', 'Fetal Medicine Specialist']
}, {
  alphabet: 'G',
  titles: ['Gastroenterologist', 'General Practitioner (GP)', 'General Surgeon', 'Gynecologist']
}, {
  alphabet: 'H',
  titles: ['Hair Transplant Surgeon', 'Home Visits', 'How to Find a Good Dentist']
}, {
  alphabet: 'I',
  titles: ['Infertility Specialist', 'Internist', 'Interventional Radiologist']
}, {
  alphabet: 'L',
  titles: ['Laparoscopic Surgeon in Gynecology', 'Liver Doctor']
}, {
  alphabet: 'M',
  titles: ['Maxillofacial Surgery', 'Medical Laboratory']
}, {
  alphabet: 'N',
  titles: ['Neonatal Doctor', 'Nephrologist/ Kidney Doctor', 'Neuro-Interventional Radiologist', 'Neurologist', 'Nutritionist']
}, {
  alphabet: 'O',
  titles: ['Orthodontist']
}, {
  alphabet: 'P',
  titles: ['Pediatrician', 'Physiotherapist', 'Psychiatrist']
}, {
  alphabet: 'S',
  titles: ['Steps to Find a Good Doctor']
}];
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/articles/directory/Directory.js


function Directory_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    display: block;\n  "]);

  Directory_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Directory_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto;\n  ", "\n\n  ", "\n"]);

  Directory_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GridContainer = external_styled_components_default.a.div(Directory_templateObject(), ''
/* grid-row-gap: 20px; */
, Styles["b" /* MEDIA */].phone(Directory_templateObject2()));
var Directory_Directory = function Directory(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? DATA : _props$data;
  var lists = data.map(function (list) {
    return external_react_default.a.createElement(InfoList_InfoList, {
      key: list.alphabet,
      alphabet: list.alphabet,
      titles: list.titles
    });
  });
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", null, "Health A-Z"), external_react_default.a.createElement("h1", null, "Educational information for your next doctor appointment."), external_react_default.a.createElement(GridContainer, null, lists));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/directory.js


/* harmony default export */ var directory = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: '0 auto',
      padding: '0 5%'
    }
  }, external_react_default.a.createElement(Directory_Directory, null));
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/Styles.js
var Styles = __webpack_require__(3);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(17);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__(14);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/button/ButtonInList.js
var ButtonInList = __webpack_require__(19);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/about/careers/containers/JobOpeningsContainer.js


function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto;\n  max-width: 600px;\n  padding-top: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var JobOpeningsContainer_JobOpeningsContainer = function JobOpeningsContainer() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("h2", null, "Job openings"), external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(JobOpeningsContainer_JobPosition, null), external_react_default.a.createElement(JobOpeningsContainer_JobPosition, null), external_react_default.a.createElement(JobOpeningsContainer_JobPosition, null)));
};
var JobContainer = external_styled_components_default.a.div(_templateObject());
var StyledLink = external_styled_components_default()(router_["Link"])(_templateObject2(), Styles["a" /* Colors */].BLACK);

var JobOpeningsContainer_JobPosition = function JobPosition(props) {
  var _props$job = props.job,
      job = _props$job === void 0 ? 'loren ipsum' : _props$job,
      _props$location = props.location,
      location = _props$location === void 0 ? 'location' : _props$location;
  var matches = Object(useMediaQuery_["unstable_useMediaQuery"])("(min-width:".concat(Styles["c" /* WINDOW_SIZES */].phone, "px)"));
  return matches ? external_react_default.a.createElement(JobContainer, null, external_react_default.a.createElement(StyledLink, {
    to: "/careers/".concat(job)
  }, job), external_react_default.a.createElement("span", null, external_react_default.a.createElement("b", null, location))) : external_react_default.a.createElement(ButtonInList["a" /* ButtonInList */], {
    title: "job",
    link: "/careers/".concat(job)
  });
};
// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/headings/MainHeadings.js
var MainHeadings = __webpack_require__(18);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/about/careers/Careers.js


function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 0;\n  margin: 7px 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n    grid-template-columns: repeat(1, 1fr);\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto;\n  max-width: 600px;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Careers_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 10px 0;\n"]);

  Careers_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Careers_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  padding: 50px 0;\n"]);

  Careers_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CareersContainer = external_styled_components_default.a.div(Careers_templateObject());
var Careers_Careers = function Careers() {
  return external_react_default.a.createElement(CareersContainer, null, external_react_default.a.createElement(Careers_JoinUs, null), external_react_default.a.createElement(Careers_Mission, null), external_react_default.a.createElement(Careers_Values, null), external_react_default.a.createElement(Careers_Perks, null), external_react_default.a.createElement(SectionContainer, null, external_react_default.a.createElement(JobOpeningsContainer_JobOpeningsContainer, null)));
};

var Careers_JoinUs = function JoinUs() {
  return external_react_default.a.createElement(SectionContainer, null, external_react_default.a.createElement(MainHeadings["a" /* MainHeadings */], {
    title: "Join Us",
    subtitle: "And help transform healthcare for everyone."
  }), external_react_default.a.createElement("p", null, intro), external_react_default.a.createElement("p", null, intro2));
};

var Careers_Mission = function Mission() {
  return external_react_default.a.createElement(SectionContainer, null, external_react_default.a.createElement("h2", null, "Our Mission"), external_react_default.a.createElement("p", null, mission));
};

var Careers_Values = function Values() {
  return external_react_default.a.createElement(SectionContainer, null, external_react_default.a.createElement("h2", null, "Our values"), external_react_default.a.createElement("p", null, values));
};

var SectionContainer = external_styled_components_default.a.section(Careers_templateObject2());
var PerksContainer = external_styled_components_default.a.div(_templateObject3(), Styles["b" /* MEDIA */].phone(_templateObject4()));
var PerkItem = external_styled_components_default.a.p(_templateObject5());

var Careers_Perks = function Perks() {
  return external_react_default.a.createElement(SectionContainer, null, external_react_default.a.createElement("h2", null, "Our perks"), external_react_default.a.createElement(PerksContainer, null, external_react_default.a.createElement(PerkItem, null, "100% paid health benefits"), external_react_default.a.createElement(PerkItem, null, "Vacation and parental leave packages"), external_react_default.a.createElement(PerkItem, null, "Lunch and snacks on us"), external_react_default.a.createElement(PerkItem, null, "Cell phone reimbursement"), external_react_default.a.createElement(PerkItem, null, "Gym discount"), external_react_default.a.createElement(PerkItem, null, "Weekly yoga")));
};

var intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus.";
var intro2 = "Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum.";
var mission = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus.";
var values = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus.";
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/careers.js


/* harmony default export */ var careers = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: '0 auto',
      padding: '0 8%'
    }
  }, external_react_default.a.createElement(Careers_Careers, null));
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/Styles.js
var Styles = __webpack_require__(3);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/headings/MainHeadings.js
var MainHeadings = __webpack_require__(18);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/about/contact/Contact.js


function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  padding-top: 50px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    grid-template-columns: repeat(1, 1fr);\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto;\n  margin: 0 0 200px 0;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Contact_data = [{
  city: 'Bangkok',
  address1: 'Habitia Watcharapol',
  address2: 'Klong Thanon',
  country: 'Thailand'
}, {
  city: 'New York',
  address1: '568 Broadway',
  address2: '2nd Floor',
  country: 'NY 10012'
}];

var Contact_Address = function Address(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h4", null, props.city || ''), external_react_default.a.createElement("p", null, props.address1 || ''), external_react_default.a.createElement("p", null, props.address2 || ''), external_react_default.a.createElement("p", null, props.country ? "".concat(props.city, ", ").concat(props.country) : ''));
};

var ContactListContainer = external_styled_components_default.a.div(_templateObject(), Styles["b" /* MEDIA */].phone(_templateObject2()));
var Container = external_styled_components_default.a.section(_templateObject3());
var Contact_Contact = function Contact() {
  var contactList = Contact_data.map(function (contact) {
    return external_react_default.a.createElement(Contact_Address, {
      city: contact.city,
      address1: contact.address1,
      address2: contact.address2,
      country: contact.country
    });
  });
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Container, null, external_react_default.a.createElement(MainHeadings["a" /* MainHeadings */], {
    title: "Contact Us",
    subtitle: "Need Help? Visit our Knowledge Base."
  })), external_react_default.a.createElement(Container, null, external_react_default.a.createElement("h2", null, "Our offices"), external_react_default.a.createElement(ContactListContainer, null, contactList)));
};
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/contact.js


/* harmony default export */ var pages_contact = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: '0 auto',
      padding: '0 8%'
    }
  }, external_react_default.a.createElement(Contact_Contact, null));
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__(14);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/constants/Styles.js
var Styles = __webpack_require__(3);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/headings/MainHeadings.js
var MainHeadings = __webpack_require__(18);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/atoms/image/ThumbnailCircle.js
var ThumbnailCircle = __webpack_require__(10);

// EXTERNAL MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/componentLibrary/molecules/tagline/TagLine.js
var TagLine = __webpack_require__(12);

// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/features/about/story/Story.js


function _templateObject6() {
  var data = taggedTemplateLiteral_default()(["padding: 30px 0;"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = taggedTemplateLiteral_default()(["\n    grid-template-columns: repeat(1, 1fr);\n    grid-row-gap: 20px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral_default()(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto;\n  padding: 50px 0;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 0;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  margin: 20px 0 0 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Story_data = [{
  src: '',
  name: 'John Evans',
  position: 'General Manager'
}, {
  src: '',
  name: 'L G',
  position: 'General Manager'
}, {
  src: '',
  name: 'Victorai Parsons',
  position: 'General Manager'
}, {
  src: '',
  name: 'Victorai Parsons',
  position: 'General Manager'
}, {
  src: '',
  name: 'Victorai Parsons',
  position: 'General Manager'
}, {
  src: '',
  name: 'Victorai Parsons',
  position: 'General Manager'
}, {
  src: '',
  name: 'Victorai Parsons',
  position: 'General Manager'
}, {
  src: '',
  name: 'Victorai Parsons',
  position: 'General Manager'
}];
var ProfileContainer = external_styled_components_default.a.div(_templateObject());
var Name = external_styled_components_default.a.p(_templateObject2());
var Position = external_styled_components_default.a.p(_templateObject3(), Styles["a" /* Colors */].BROWN_GREY);

var Story_Profile = function Profile(props) {
  return external_react_default.a.createElement(ProfileContainer, null, external_react_default.a.createElement(ThumbnailCircle["a" /* ThumbnailCircle */], {
    source: props.source,
    width: "125px",
    height: "125px"
  }), external_react_default.a.createElement(Name, null, props.name || 'test'), external_react_default.a.createElement(Position, null, props.postition || 'test'));
};

var ProfileListContainer = external_styled_components_default.a.div(_templateObject4(), Styles["b" /* MEDIA */].phone(_templateObject5()));
var StoryContainer = external_styled_components_default.a.div(_templateObject6());
var Story_Story = function Story() {
  var matches = Object(useMediaQuery_["unstable_useMediaQuery"])("(min-width:".concat(Styles["c" /* WINDOW_SIZES */].phone, "px)"));
  var imageLists = Story_data.map(function (image) {
    return matches ? external_react_default.a.createElement(Story_Profile, {
      source: image.src,
      name: image.name,
      position: image.position
    }) : external_react_default.a.createElement(TagLine["a" /* TagLine */], {
      title: image.name,
      content: image.position,
      source: image.src,
      imageSize: "60px"
    });
  });
  return external_react_default.a.createElement(StoryContainer, null, external_react_default.a.createElement(MainHeadings["a" /* MainHeadings */], {
    title: "Our Story",
    subtitle: "Maecenas enim purus, fringilla nec"
  }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, "large image"), external_react_default.a.createElement("p", null, firstParagraph), external_react_default.a.createElement("p", null, secondParagraph), external_react_default.a.createElement("h1", null, "The Team behind Wellglo"), external_react_default.a.createElement("p", null, "Our company is led by industry professionals who believe better"), external_react_default.a.createElement("p", null, "healthcare starts with the patient."), external_react_default.a.createElement(ProfileListContainer, null, imageLists)));
};
var firstParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus. Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum.";
var secondParagraph = "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tincidunt auctor finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas enim purus, fringilla nec sapien quis, fringilla tincidunt libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin porttitor libero id velit mattis, quis luctus mi pellentesque. Etiam vehicula interdum pellentesque. Sed eleifend et nisl in accumsan. Quisque vestibulum ex nibh, at scelerisque turpis venenatis eget. Mauris mollis lorem quis odio ullamcorper scelerisque.";
// CONCATENATED MODULE: /Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/src/pages/about.js


/* harmony default export */ var about = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: '0 auto',
      padding: '0 8%'
    }
  }, external_react_default.a.createElement(Story_Story, null));
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(11);

var _router = __webpack_require__(17);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-sidebar");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-star-ratings");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Breadcrumbs");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateNext");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
__webpack_require__(69);
module.exports = __webpack_require__(75);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(34)["default"];

var _require = __webpack_require__(35),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(34)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(35),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(36),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(36),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(32);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 25,
	"./": 25,
	"./index": 25,
	"./index.js": 25
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 71;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(31);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(37);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(38);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(76);

var _interopRequireDefault = __webpack_require__(77);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(7));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(78));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(79);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(80)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("/Users/Chaiyaporn/Projects/work/Wellglo/WellgloFrontend/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);

 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(81)(module)))

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(83)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none\n}\n\nimg {\n  max-width: 100%;\n}\n\n.content {\n  /* padding: 1rem; */\n  /* max-width: 1200px; */\n  margin: 0 auto;\n  /* padding: 0 5%; */\n}\n", ""]);



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});