/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.router = undefined;

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	var _StandBy = __webpack_require__(20);

	var _StandBy2 = _interopRequireDefault(_StandBy);

	var _StandByGrocer = __webpack_require__(35);

	var _StandByGrocer2 = _interopRequireDefault(_StandByGrocer);

	var _Setup = __webpack_require__(38);

	var _Setup2 = _interopRequireDefault(_Setup);

	var _IframeExternal = __webpack_require__(41);

	var _IframeExternal2 = _interopRequireDefault(_IframeExternal);

	var _EventPickup = __webpack_require__(44);

	var _EventPickup2 = _interopRequireDefault(_EventPickup);

	var _EventDelivery = __webpack_require__(65);

	var _EventDelivery2 = _interopRequireDefault(_EventDelivery);

	var _LoadVehicle = __webpack_require__(69);

	var _LoadVehicle2 = _interopRequireDefault(_LoadVehicle);

	var _HubReception = __webpack_require__(76);

	var _HubReception2 = _interopRequireDefault(_HubReception);

	var _HubTransfer = __webpack_require__(79);

	var _HubTransfer2 = _interopRequireDefault(_HubTransfer);

	var _TripReception = __webpack_require__(82);

	var _TripReception2 = _interopRequireDefault(_TripReception);

	var _TripTransfer = __webpack_require__(91);

	var _TripTransfer2 = _interopRequireDefault(_TripTransfer);

	var _Print = __webpack_require__(94);

	var _Print2 = _interopRequireDefault(_Print);

	var _Scan = __webpack_require__(97);

	var _Scan2 = _interopRequireDefault(_Scan);

	var _PrintTrip = __webpack_require__(100);

	var _PrintTrip2 = _interopRequireDefault(_PrintTrip);

	var _ScanTrip = __webpack_require__(103);

	var _ScanTrip2 = _interopRequireDefault(_ScanTrip);

	var _Payment = __webpack_require__(106);

	var _Payment2 = _interopRequireDefault(_Payment);

	var _Call = __webpack_require__(112);

	var _Call2 = _interopRequireDefault(_Call);

	var _Logout = __webpack_require__(115);

	var _Logout2 = _interopRequireDefault(_Logout);

	var _Redirecting = __webpack_require__(118);

	var _Redirecting2 = _interopRequireDefault(_Redirecting);

	var _Available = __webpack_require__(121);

	var _Available2 = _interopRequireDefault(_Available);

	var _ScanSuccesful = __webpack_require__(124);

	var _ScanSuccesful2 = _interopRequireDefault(_ScanSuccesful);

	var _ScanFailed = __webpack_require__(127);

	var _ScanFailed2 = _interopRequireDefault(_ScanFailed);

	var _ScanFinished = __webpack_require__(130);

	var _ScanFinished2 = _interopRequireDefault(_ScanFinished);

	var _ScanSuccesfulTrip = __webpack_require__(134);

	var _ScanSuccesfulTrip2 = _interopRequireDefault(_ScanSuccesfulTrip);

	var _ScanFailedTrip = __webpack_require__(137);

	var _ScanFailedTrip2 = _interopRequireDefault(_ScanFailedTrip);

	var _ScanFinishedTrip = __webpack_require__(140);

	var _ScanFinishedTrip2 = _interopRequireDefault(_ScanFinishedTrip);

	var _vueRouter = __webpack_require__(143);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(144);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _vueSweetalert = __webpack_require__(152);

	var _vueSweetalert2 = _interopRequireDefault(_vueSweetalert);

	var _director = __webpack_require__(6);

	var _director2 = _interopRequireDefault(_director);

	var _geo = __webpack_require__(13);

	var _geo2 = _interopRequireDefault(_geo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueSweetalert2.default);

	_vue2.default.config.debug = true;

	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueRouter2.default);

	var router = exports.router = new _vueRouter2.default();

	router.map({
	  '/scan-succesful': {
	    component: _ScanSuccesful2.default
	  },
	  '/scan-failed': {
	    component: _ScanFailed2.default
	  },
	  '/scan-finished': {
	    component: _ScanFinished2.default
	  },

	  '/scan-succesful-trip': {
	    component: _ScanSuccesfulTrip2.default
	  },
	  '/scan-failed-trip': {
	    component: _ScanFailedTrip2.default
	  },
	  '/scan-finished-trip': {
	    component: _ScanFinishedTrip2.default
	  },

	  '/iframe-external/:url': {
	    component: _IframeExternal2.default
	  },
	  '/setup': {
	    component: _Setup2.default
	  },

	  '/trip-reception': {
	    component: _TripReception2.default
	  },
	  '/trip-transfer': {
	    component: _TripTransfer2.default
	  },

	  '/stand-by': {
	    component: _StandBy2.default
	  },
	  '/stand-by-grocer': {
	    component: _StandByGrocer2.default
	  },

	  '/event-pickup': {
	    component: _EventPickup2.default
	  },
	  '/event-delivery': {
	    component: _EventDelivery2.default
	  },
	  '/load-vehicle': {
	    component: _LoadVehicle2.default
	  },
	  '/event-reception': {
	    component: _HubReception2.default
	  },
	  '/event-transfer': {
	    component: _HubTransfer2.default
	  },

	  '/print': {
	    component: _Print2.default
	  },
	  '/scan': {
	    component: _Scan2.default
	  },
	  '/print-trip': {
	    component: _PrintTrip2.default
	  },
	  '/scan-trip': {
	    component: _ScanTrip2.default
	  },

	  '/payment': {
	    component: _Payment2.default
	  },
	  '/call': {
	    component: _Call2.default
	  },
	  '/redirecting': {
	    component: _Redirecting2.default
	  },
	  '/logout': {
	    component: _Logout2.default
	  },
	  '/available': {
	    component: _Available2.default
	  },
	  '*': {
	    component: _Available2.default
	  }
	});

	console.info('DIRECTOR.INIT....');
	_director2.default.init();

	console.info('START APP....');
	router.start(_App2.default, '#app');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([^-])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;

	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }

	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;

	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;

	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

	function peek() {
	  return str.charCodeAt(index + 1);
	}

	function next() {
	  return str.charCodeAt(++index);
	}

	function eof() {
	  return index >= len;
	}

	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}

	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}

	function isExpStart(chr) {
	  return expStartChr[chr];
	}

	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}

	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;

	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }

	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }

	    next();

	    if (inExp === 0) {
	      break;
	    }
	  }
	}

	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */

	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }

	  return str.slice(start + 1, index) || null;
	}

	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}

	function parseFilter() {
	  var filter = {};
	  var args;

	  state = filterState;
	  filter.name = parseExpression().trim();

	  state = filterArgState;
	  args = parseFilterArguments();

	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}

	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }

	  return args;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;

	  var filters;

	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }

	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;

	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }

	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;

	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }

	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.28';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(5)
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _director = __webpack_require__(6);

	var _director2 = _interopRequireDefault(_director);

	var _geo = __webpack_require__(13);

	var _geo2 = _interopRequireDefault(_geo);

	var _store = __webpack_require__(16);

	var _store2 = _interopRequireDefault(_store);

	var _index = __webpack_require__(1);

	var _global = __webpack_require__(14);

	var _common = __webpack_require__(7);

	var _actions = __webpack_require__(18);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<router-view></router-view>
	// </template>
	//
	// <script>
	var PASSPORT_API_URL = _common.urls.passport_api;
	var GATEWAY_API_URL = _common.urls.gateway_api;

	exports.default = {
	  components: {},

	  vuex: {
	    actions: {
	      storeData: _actions.storeData
	    }
	  },

	  /**
	   * Make this and all child components aware of the new store
	   */
	  store: _store2.default,

	  ready: function ready() {
	    console.info('APP is ready ===================================');
	    this.initPubnub();
	    this.startGpsReporting();
	  },

	  methods: {
	    startGpsReporting: function startGpsReporting() {
	      console.info('GEO.startGpsReporting....');
	      _geo2.default.startGpsReporting();
	    },

	    initPubnub: function initPubnub() {
	      console.info('pubnub cargado');

	      var that = this;
	      _global.pubnub.subscribe({
	        channel: 'notifications-opl',

	        message: function message(_message) {
	          var type = _message.type;
	          var t = new Date();
	          console.info(_message, '=================================== NOTIFICATIONS-OPL arrivando con tipo: ' + type + ' a las ' + t);

	          switch (type) {

	            /**
	             * Operacion para interceptar viaje
	             * Rechazar para grocer
	             * --------------------------------------------------------
	             */
	            case 'autoping':

	              var grocer = _ls2.default.get('grocer');
	              if (grocer) {
	                return;
	              }

	              var setup = _ls2.default.get('setup');
	              if (!setup || !setup.vehicleSelected) {
	                return that.$route.router.go('/setup');
	              }

	              var vehicleSelected = setup.vehicleSelected;
	              var vehicle_id = _message.vehicle_id;

	              if (vehicleSelected != vehicle_id) {

	                // No es para este vehiculo
	                console.info('Data for another OPL, bye');
	                return;
	              }

	              return that.$route.router.go('/available');
	              break;

	            /**
	             * Operaciones de recepcion/transferencia de carga para OPL
	             * Rechazar para grocer
	             * --------------------------------------------------------
	             */
	            case 'trip-transfer':
	            case 'trip-reception':

	              var grocer = _ls2.default.get('grocer');
	              if (grocer) {
	                return;
	              }

	              var setup = _ls2.default.get('setup');
	              if (!setup || !setup.vehicleSelected) {
	                return that.$route.router.go('/setup');
	              }

	              var vehicleSelected = setup.vehicleSelected;
	              var vehicle_id = _message.vehicle_id;

	              if (vehicleSelected != vehicle_id) {

	                // No es para este vehiculo
	                console.info('Data for another OPL, bye');
	                return;
	              }

	              var operation_type = type;
	              var trip = _message.trip;
	              var items_remaining = _message.items_remaining;

	              that.storeData({
	                type: 'trip',
	                content: trip
	              });

	              that.storeData({
	                type: 'trip_items_remaining_counter',
	                content: items_remaining.length
	              });

	              that.storeData({
	                type: 'operation_type',
	                content: operation_type
	              });

	              /**
	               * safeguards
	               */
	              _ls2.default.save('trip_id', trip.id);
	              _ls2.default.save('operation_type', operation_type);

	              return that.$route.router.go('/' + operation_type);
	              break;

	            /**
	             * Operaciones de atencion a cliente en pickup/delivery para OPL
	             * -------------------------------------------------------------
	             */
	            case 'order-pickup':
	            case 'order-delivery':

	              var grocer = _ls2.default.get('grocer');
	              if (grocer) {
	                return;
	              }

	              var setup = _ls2.default.get('setup');
	              if (!setup || !setup.vehicleSelected) {
	                return that.$route.router.go('/setup');
	              }

	              var vehicleSelected = setup.vehicleSelected;
	              var vehicle_id = _message.vehicle_id;

	              if (vehicleSelected != vehicle_id) {

	                // no es para este vehiculo
	                console.info('Data for another OPL, bye');
	                return;
	              }

	              var order = _message.order;
	              var load = _message.load;

	              that.storeData({
	                type: 'order',
	                content: order
	              });

	              var address_type = type.split('-');
	              address_type = address_type[1];

	              that.storeData({
	                type: 'addressType',
	                content: address_type
	              });

	              console.info("order[address_type + _acknowledge_time]", order[address_type + '_acknowledge_time']);
	              var show_acknowledge = order[address_type + '_acknowledge_time'] ? false : true;

	              that.storeData({
	                type: 'show_acknowledge',
	                content: show_acknowledge
	              });

	              var show_in_position = false;

	              console.info(order[address_type + '_acknowledge_time'] && !order[address_type + '_hello_time']);

	              if (order[address_type + '_acknowledge_time'] && !order[address_type + '_hello_time']) {
	                show_in_position = true;
	              }

	              that.storeData({
	                type: 'show_in_position',
	                content: show_in_position
	              });

	              /**
	               * safeguards
	               */
	              _ls2.default.save('order_id', order.id);
	              _ls2.default.save('address_type', address_type);

	              if (load != '') {

	                switch (load) {
	                  case 'refresh_order':
	                    console.info('order updated');

	                    /**
	                     * Still needs to be fully paid
	                     */
	                    if (order.paymentStatus_id < 4) {
	                      console.info('Still needs to be fully paid');
	                      return that.$route.router.go('/payment');
	                    }
	                    return;
	                    break;
	                }
	              }

	              /**
	               * Still needs to be acepted or arrive to pickcup
	               */
	              if (show_acknowledge || show_in_position) {
	                console.info('Still needs to be acepted or arrive to pickcup');
	                return that.$route.router.go('/stand-by');
	              }

	              /**
	               * Still needs to be fully paid
	               */
	              if (order.paymentStatus_id < 4) {
	                console.info('Still needs to be fully paid');
	                return that.$route.router.go('/payment');
	              }

	              return that.$route.router.go('/event-' + address_type);
	              break;

	            case 'user-authenticated':

	              var phonegapid_stored = _ls2.default.get('phonegapid');
	              var token = _message.token;
	              var uid = _message.uid;
	              var phonegapid = _message.phonegapid;

	              if (phonegapid != phonegapid_stored) {
	                console.info(phonegapid, phonegapid_stored, 'PHONEGAP-ID DO NOT MACTH !!!!!!!!!!!!!!!!!!! CHECK THIS ASAP');
	                return; // and destroy phone
	              }

	              _ls2.default.save('access_token', token);
	              _ls2.default.save('user_id', uid);

	              console.info('DIRECTOR.INIT AFTER USER-AUTHENTICATED....');
	              _director2.default.init();
	              break;

	            case 'shipment-notification':
	              // that.storeData( message.notification )
	              break;
	          }
	        }
	      });
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(1);

	var _common = __webpack_require__(7);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import una variable
	// modules are singletons!!!
	var PASSPORT_WEBSITE_LOGOUT_URL = _common.urls.passport_website + '?action=logout'; // import un objecto default

	var PASSPORT_API_URL = _common.urls.passport_api;
	var GATEWAY_API_URL = _common.urls.gateway_api;
	var MICRO_API_URL = _common.urls.micro_api;

	exports.default = {
	  user: {
	    authenticated: false,
	    profile: {}
	  },

	  init: function init() {

	    this.user.authenticated = false;
	    this.user.profile = {};

	    this.setPhonegapid();
	    this.disableBackbutton();

	    /**
	     * We'll check all these data.
	     * We need it for full functionality
	     * ---------------------------------
	     */
	    var access_token = _ls2.default.get('access_token');
	    var user_id = _ls2.default.get('user_id');
	    var profile = _ls2.default.get('profile');

	    /**
	     * Now grocer is very important
	     * we needit well set it form start
	     * --------------------------------
	     */
	    var grocer = _ls2.default.get('grocer');
	    _ls2.default.save('grocer', !!grocer);

	    /**
	     * Access token is needed
	     */
	    if (!access_token || !user_id) {

	      console.info('Going to iframe-external/go-passport');
	      return _index.router.go('/iframe-external/go-passport');
	    }

	    this.user.authenticated = true;

	    // Add Authorization header globally
	    // to all ajax request. As when we need autheticate user
	    // we go directly to passport. (not using Authorization header)
	    _vue2.default.http.headers.common['Authorization'] = this.getAuthHeader();

	    /**
	     * Profile is needed
	     */
	    if (!profile || !profile.id) {

	      /**
	       * Get profile
	       */
	      return this.getProfile();
	    }

	    this.user.profile = profile;

	    /**
	     * Setup is needed
	     */
	    this.checkSetup();
	  },
	  setPhonegapid: function setPhonegapid() {
	    var phonegapid = _ls2.default.get('phonegapid');

	    if (!phonegapid) {

	      var uuid = _utils2.default.randomCode(64);

	      if (typeof window.plugins == 'undefined') {
	        _ls2.default.save('phonegapid', uuid);
	        return console.info('Me parece que no estamos en un teléfono. Usaremos un phonegapid aleatorio');
	      }

	      if (typeof window.plugins.uniqueDeviceID == 'undefined') {
	        _ls2.default.save('phonegapid', uuid);
	        return console.info('Plugin uniqueDeviceID necesario. Usaremos un phonegapid aleatorio');
	      }

	      // Recognize phone
	      window.plugins.uniqueDeviceID.get(function (uuid) {

	        // Save uuid as phonegapid
	        _ls2.default.save('phonegapid', uuid);
	      }, function () {
	        return alert('No he podido identificar el teléfono. Reinicie aplicación o informe a la central');
	      });
	    }
	  },
	  checkSetup: function checkSetup() {

	    return;
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    //
	    var setup = _ls2.default.get('setup');
	    var grocer = _ls2.default.get('grocer');

	    if (grocer) {
	      return _index.router.go('/stand-by-grocer');
	    }

	    if (!setup || !setup.vehicleSelected) {

	      console.info('Going to setup');
	      return _index.router.go('/setup');
	    }

	    return _index.router.go('/available');
	  },
	  getProfile: function getProfile() {
	    var _this = this;

	    var user_id = _ls2.default.get('user_id');

	    _vue2.default.http.get(GATEWAY_API_URL + '/passport/user/' + user_id + '/profile').then(function (response) {

	      /**
	       * Set and save profile
	       */
	      var profile = response.data.data;
	      _ls2.default.save('profile', profile);

	      _this.user.profile = profile;

	      /**
	       * Setup is needed
	       */
	      _this.checkSetup();
	    }, function (response) {
	      console.info(response, 'error callback');
	    });
	  },
	  logout: function logout() {
	    _ls2.default.save('access_token', '');
	    _ls2.default.save('user_id', '');
	    _ls2.default.save('profile', '');

	    var setup = _ls2.default.get('setup');
	    var grocer = _ls2.default.get('grocer');

	    if (!grocer) {

	      if (!setup || !setup.vehicleSelected) {
	        return this.$route.router.go('/setup');
	      }

	      var vehicleSelected = setup.vehicleSelected;

	      /**
	       * Vehicle a estado = 1
	       */
	      _vue2.default.http.post(MICRO_API_URL + '/vehicle/' + vehicleSelected + '/opl-logout').then(function (response) {
	        var data = response.data;

	        if (data.success && data.success == true) {

	          console.info('Going to iframe-external/go-passport AFTER LOGOUT');
	          return _index.router.go('/iframe-external/go-passport');
	        }
	      }, function (response) {
	        console.info('Going to iframe-external/go-passport AFTER LOGOUT failed');
	        return _index.router.go('/iframe-external/go-passport');
	      });
	    } else {

	      console.info('Going to iframe-external/go-passport AFTER LOGOUT');
	      return _index.router.go('/iframe-external/go-passport');
	    }
	  },
	  getAuthHeader: function getAuthHeader() {
	    var access_token = _ls2.default.get('access_token');
	    if (access_token) {
	      return 'Bearer ' + access_token;
	    }
	  },
	  disableBackbutton: function disableBackbutton() {
	    console.info('disableBackbutton');
	    document.addEventListener('deviceready', onDeviceReady, false);

	    function onDeviceReady() {
	      console.info('onDeviceReady');

	      document.addEventListener('backbutton', function (e) {
	        console.info('backbutton disabled');
	        e.preventDefault();
	      }, false);
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.urls = exports.credentials = undefined;

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var credentials = exports.credentials = {
	  pubnub: {
	    // Default app
	    publishKey: 'pub-48f85fda-4cd4-4244-a338-64a38f57d72a',
	    subscribeKey: 'sub-ebe72647-c6ff-11e1-a088-c910d8f0175b'
	  },
	  transloaditKey: '7e50e630e52111e4a764cd08714b1a46',
	  googleapisKey: 'AIzaSyACdlRVSbAHDFb9uK8oEvnPzmpxh4pQ-hg',
	  gcmSenderId: '377894136771',
	  raygunKey: 'NjZNi9vOWBj/wRF68NnQsg==',
	  logglyKey: '7c87aa29-08f3-429f-9df7-a4c224bc9114'
	};

	var APP_ENV = typeof window.plugins == 'undefined' ? 'testing' : 'production';

	/**
	 * Set environment
	 */
	// var APP_ENV = 'production'
	var APP_ENV = 'testing';

	console.info('APP_ENV', APP_ENV);

	var urls2 = {};
	switch (APP_ENV) {
	  default:
	  case 'production':
	    urls2 = {
	      app: 'https://econocargo.cl/#!',
	      passport_website: 'https://passport.agente.cl/#!',
	      passport_api: 'https://api.agente.cl/passport',
	      econocargo_website: 'https://econocargo.cl',
	      gateway_api: 'https://api.agente.cl',
	      micro_api: 'https://api.agente.cl/ltl',
	      adc_api: 'https://api.agente.cl/adc',
	      public_docs: 'https://docs-econocargo.agente.cl'
	    };
	    break;
	  case 'testing':
	    urls2 = {
	      app: 'https://econocargo-testing.agente.cl/#!',
	      passport_website: 'https://passport-testing.agente.cl/#!',
	      passport_api: 'https://api-testing.agente.cl/passport',
	      econocargo_website: 'https://econocargo-testing.agente.cl',
	      gateway_api: 'https://api-testing.agente.cl',
	      micro_api: 'https://api-testing.agente.cl/ltl',
	      adc_api: 'https://api-testing.agente.cl/adc',
	      public_docs: 'https://docs-econocargo.agente.cl'
	    };
	    break;
	}

	console.info('urls2', urls2);

	var urls = exports.urls = urls2;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  objBtn: function objBtn(type) {
	    appECBase.loadingPage(false);
	    $('#landingErrorGeofencePickUp').hide();
	    $('#landingErrorGeofenceDropOff').hide();
	    $('#landingErrorGeofence' + type).show();
	    return $("#microModalErrorGeoFEcnce").modal("show");
	  },
	  showMessages: function showMessages(user_messages) {
	    var msgErr = '';
	    $.each(user_messages, function (k, v) {
	      msgErr += v + '<br />';
	    });
	    return appECBase.showModal(msgErr);
	  },
	  showModal: function showModal(msg, $srcObject) {
	    appECBase.loadingPage(false);
	    appUtilidades.creamodal('modalErrorGeo', '', 'Información', msg, '', null, function () {
	      if ($srcObject) {
	        $srcObject.focus();
	      }
	    });
	  },
	  showModalCoolTitle: function showModalCoolTitle(idModal, title, cb) {
	    appECBase.loadingPage(false);
	    var msg = '<div class="text-center" style="height: 185px; margin-top: 50px;">' + '<img src="assets/img/circle-loading.gif" style="height: 80%;">' + '</div>';
	    appUtilidades.creamodal(idModal, '', title, msg, ' ', cb);
	  },
	  getUrl: function getUrl() {
	    var urlTemplate = 'ltl-micro.api.testing.agente.cl';
	    if (/(agente\.dev)/.test(location.href)) {
	      urlTemplate = 'micro.api.testing.agente.dev';
	    }
	    return urlTemplate;
	  },

	  inDev: function inDev() {
	    if (/(localhost\:8080)/.test(location.href)) {
	      return true;
	    }
	    return false;
	  },
	  getDistance: function getDistance(lat1, lon1, lat2, lon2, unit) {
	    var radlat1 = Math.PI * lat1 / 180;
	    var radlat2 = Math.PI * lat2 / 180;
	    var radlon1 = Math.PI * lon1 / 180;
	    var radlon2 = Math.PI * lon2 / 180;
	    var theta = lon1 - lon2;
	    var radtheta = Math.PI * theta / 180;
	    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	    dist = Math.acos(dist);
	    dist = dist * 180 / Math.PI;
	    dist = dist * 60 * 1.1515;
	    if (unit == "K") {
	      dist = dist * 1.609344;
	    }
	    if (unit == "N") {
	      dist = dist * 0.8684;
	    }
	    return dist;
	  },
	  getUrlVariable: function getUrlVariable(name, theurl) {

	    var url = '';

	    if (theurl) {
	      url = theurl;
	    } else {
	      url = window.location.href;
	    }

	    console.info(url, 'window.location.href -------------------');
	    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
	    if (!results) {
	      return '';
	    }
	    return results[1] || 0;
	  },
	  randomCode: function randomCode(length) {
	    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    var result = '';
	    for (var i = length; i > 0; --i) {
	      result += chars[Math.round(Math.random() * (chars.length - 1))];
	    }return result;
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(10);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var name_db = 'agenteOPL';

	/**
	 * init global db
	 */
	if (localStorage.getItem(name_db) === null || !localStorage.getItem(name_db)) {
	  localStorage.setItem(name_db, (0, _stringify2.default)({}));
	}

	exports.default = {
	  name_db: name_db,
	  save: function save(name, value) {
	    var db = JSON.parse(localStorage.getItem(name_db));
	    if (!db) {
	      localStorage.setItem(name_db, (0, _stringify2.default)({}));
	      db = JSON.parse(localStorage.getItem(name_db));
	    }
	    db[name] = value;
	    localStorage.setItem(name_db, (0, _stringify2.default)(db));
	  },
	  get: function get(name) {
	    var db = JSON.parse(localStorage.getItem(name_db));
	    if (!db) {
	      localStorage.setItem(name_db, (0, _stringify2.default)({}));
	      db = JSON.parse(localStorage.getItem(name_db));
	    }
	    return db[name];
	  },
	  clean: function clean(name) {
	    localStorage.setItem(name_db, (0, _stringify2.default)({}));
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(12);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _common = __webpack_require__(7);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _global = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import un objecto default
	// modules are singletons!!!
	var MICRO_API_URL = _common.urls.micro_api; // import una variable
	exports.default = {
	  idWatch: 0,
	  position: {},

	  startGpsReporting: function startGpsReporting() {

	    if (!navigator.geolocation) {
	      return alert('Geolocalización no disponible. Reinicie aplicación o informe a la central');
	    }

	    var currPos = {};
	    var that = this;

	    console.info('Geolocalización disponible: OK');

	    if (this.idWatch) {
	      clearInterval(this.idWatch);
	    }

	    this.idWatch = setInterval(function () {
	      var setup = _ls2.default.get('setup');
	      if (!setup || !setup.vehicleSelected) {
	        /**
	         * eventualmente vehicleSelected sera seteado
	         * y en tal caso este loop ya estara corriendo
	         */
	        return;
	      }
	      var vehicleSelected = setup.vehicleSelected;

	      navigator.geolocation.getCurrentPosition(function (position) {
	        currPos.latitude = position.coords.latitude;
	        currPos.longitude = position.coords.longitude;
	        console.info('currPos', currPos);

	        /**
	         * Send to backend
	         */
	        that.send(currPos, vehicleSelected);
	      }, function (err) {
	        console.warn('geolocation error (' + err.code + '): ' + err.message);
	      }, {
	        enableHighAccuracy: true
	      });
	    }, 1000 * 60 * 3); // cada 3 minutos
	    // }, 1000 * 10 ) // cada 3 secs

	    console.info('idWatch', this.idWatch);
	  },
	  send: function send(currPos, vehicleSelected) {
	    var t = new Date();
	    console.info('SENDING TO BACKEND NOW @' + t);
	    _vue2.default.http.post(MICRO_API_URL + '/vehicle/update-gps', {
	      vehicle_id: vehicleSelected,
	      lat: currPos.latitude,
	      lon: currPos.longitude

	    }).then(function (response) {
	      console.info(response, 'success callback');
	    }, function (response) {
	      console.info(response.data, 'error callback');
	    });
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pubnub = undefined;

	var _common = __webpack_require__(7);

	var pubnub = exports.pubnub = __webpack_require__(15)({
	  publish_key: _common.credentials.pubnub.publishKey,
	  subscribe_key: _common.credentials.pubnub.subscribeKey
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*! 3.16.5 / modern */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["PUBNUB"] = factory();
		else
			root["PUBNUB"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/* eslint curly: 0, camelcase: 0, dot-notation: 0 */

		var pubNubCore = __webpack_require__(1);
		var crypto_obj = __webpack_require__(5);
		var CryptoJS = __webpack_require__(6);
		var WS = __webpack_require__(7);


		/**
		 * LOCAL STORAGE
		 */
		var db = (function () {
		  var ls;

		  try {
		    ls = typeof localStorage !== 'undefined' && localStorage;
		  } catch (e) {
		    ls = {
		      _data: {},
		      setItem: function (id, val) {
		        this._data[id] = String(val);
		      },
		      getItem: function (id) {
		        return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
		      },
		      removeItem: function (id) {
		        return delete this._data[id];
		      },
		      clear: function () {
		        this._data = {};
		      }
		    };
		  }
		  return {
		    get: function (key) {
		      try {
		        if (ls) return ls.getItem(key);
		        if (document.cookie.indexOf(key) === -1) return null;
		        return ((document.cookie || '').match(
		            RegExp(key + '=([^;]+)')
		          ) || [])[1] || null;
		      } catch (e) {
		        return;
		      }
		    },
		    set: function (key, value) {
		      try {
		        if (ls) return ls.setItem(key, value) && 0;
		        document.cookie = key + '=' + value +
		          '; expires=Thu, 1 Aug 2030 20:00:00 UTC; path=/';
		      } catch (e) {
		        return;
		      }
		    }
		  };
		})();


		/**
		 * CORS XHR Request
		 * ================
		 *  xdr({
		 *     url     : ['http://www.blah.com/url'],
		 *     success : function(response) {},
		 *     fail    : function() {}
		 *  });
		 */
		function xdr(setup) {
		  var xhr;
		  var timer;
		  var complete = 0;
		  var loaded = 0;
		  var async = true; /* do not allow sync operations in modern builds */
		  var xhrtme = setup.timeout || pubNubCore.DEF_TIMEOUT;
		  var data = setup.data || {};
		  var fail = setup.fail || function () {};
		  var success = setup.success || function () {};

		  var done = function (failed, response) {
		    if (complete) return;
		    complete = 1;

		    clearTimeout(timer);

		    if (xhr) {
		      xhr.onerror = xhr.onload = null;
		      if (xhr.abort) xhr.abort();
		      xhr = null;
		    }

		    if (failed) fail(response);
		  };

		  var finished = function () {
		    if (loaded) return;
		    var response;
		    loaded = 1;

		    clearTimeout(timer);

		    try {
		      response = JSON.parse(xhr.responseText);
		    } catch (r) {
		      return done(1);
		    }

		    success(response);
		  };

		  timer = pubNubCore.timeout(function () {
		    done(1);
		  }, xhrtme);

		  // Send
		  try {
		    xhr = typeof XDomainRequest !== 'undefined' &&
		      new XDomainRequest() ||
		      new XMLHttpRequest();

		    xhr.onerror = xhr.onabort = function () {
		      done(1, xhr.responseText || { error: 'Network Connection Error' });
		    };
		    xhr.onload = xhr.onloadend = finished;

		    var url = pubNubCore.build_url(setup.url, data);
		    xhr.open('GET', url, async);
		    if (async) xhr.timeout = xhrtme;
		    xhr.send();
		  } catch (eee) {
		    done(1, { error: 'XHR Failed', stacktrace: eee });
		  }

		  // Return 'done'
		  return done;
		}

		/**
		 * BIND
		 * ====
		 * bind( 'keydown', search('a')[0], function(element) {
		 *     ...
		 * } );
		 */
		function bind(type, el, fun) {
		  pubNubCore.each(type.split(','), function (etype) {
		    var rapfun = function (e) {
		      if (!e) e = window.event;
		      if (!fun(e)) {
		        e.cancelBubble = true;
		        e.returnValue = false;
		        if (e.preventDefault) e.preventDefault();
		        if (e.stopPropagation) e.stopPropagation();
		      }
		    };

		    if (el.addEventListener) el.addEventListener(etype, rapfun, false);
		    else if (el.attachEvent) el.attachEvent('on' + etype, rapfun);
		    else el['on' + etype] = rapfun;
		  });
		}

		/**
		 * ERROR
		 * ===
		 * error('message');
		 */
		function error(message) {
		  console.error(message); // eslint-disable-line no-console
		}

		/**
		 * EVENTS
		 * ======
		 * PUBNUB.events.bind( 'you-stepped-on-flower', function(message) {
		 *     // Do Stuff with message
		 * } );
		 *
		 * PUBNUB.events.fire( 'you-stepped-on-flower', "message-data" );
		 * PUBNUB.events.fire( 'you-stepped-on-flower', {message:"data"} );
		 * PUBNUB.events.fire( 'you-stepped-on-flower', [1,2,3] );
		 *
		 */
		var events = {
		  list: {},
		  unbind: function (name) {
		    events.list[name] = [];
		  },
		  bind: function (name, fun) {
		    (events.list[name] = events.list[name] || []).push(fun);
		  },
		  fire: function (name, data) {
		    pubNubCore.each(
		      events.list[name] || [],
		      function (fun) {
		        fun(data);
		      }
		    );
		  }
		};

		/**
		 * ATTR
		 * ====
		 * var attribute = attr( node, 'attribute' );
		 */
		function attr(node, attribute, value) {
		  if (value) node.setAttribute(attribute, value);
		  else return node && node.getAttribute && node.getAttribute(attribute);
		}

		/**
		 * $
		 * =
		 * var div = $('divid');
		 */
		function $(id) {
		  return document.getElementById(id);
		}


		/**
		 * SEARCH
		 * ======
		 * var elements = search('a div span');
		 */
		function search(elements, start) {
		  var list = [];
		  pubNubCore.each(elements.split(/\s+/), function (el) {
		    pubNubCore.each((start || document).getElementsByTagName(el), function (node) {
		      list.push(node);
		    });
		  });
		  return list;
		}

		/**
		 * CSS
		 * ===
		 * var obj = create('div');
		 */
		function css(element, styles) {
		  for (var style in styles) if (styles.hasOwnProperty(style))
		    try {
		      element.style[style] = styles[style] + (
		          '|width|height|top|left|'.indexOf(style) > 0 &&
		          typeof styles[style] === 'number'
		            ? 'px' : ''
		        );
		    } catch (e) {
		      return;
		    }
		}

		/**
		 * CREATE
		 * ======
		 * var obj = create('div');
		 */
		function create(element) {
		  return document.createElement(element);
		}


		function get_hmac_SHA256(data, key) {
		  var hash = CryptoJS['HmacSHA256'](data, key);
		  return hash.toString(CryptoJS['enc']['Base64']);
		}

		/* =-====================================================================-= */
		/* =-====================================================================-= */
		/* =-=========================     PUBNUB     ===========================-= */
		/* =-====================================================================-= */
		/* =-====================================================================-= */

		function CREATE_PUBNUB(setup) {
		  setup.db = db;
		  setup.xdr = xdr;
		  setup.error = setup.error || error;
		  setup.hmac_SHA256 = get_hmac_SHA256;
		  setup.crypto_obj = crypto_obj();
		  setup.WS = WS;
		  setup.sdk_family = 'Modern';

		  var SELF = function (setup) {
		    return CREATE_PUBNUB(setup);
		  };

		  var PN = pubNubCore.PN_API(setup);
		  for (var prop in PN) {
		    if (PN.hasOwnProperty(prop)) {
		      SELF[prop] = PN[prop];
		    }
		  }

		  SELF.init = SELF;
		  SELF.$ = $;
		  SELF.attr = attr;
		  SELF.search = search;
		  SELF.bind = bind;
		  SELF.css = css;
		  SELF.create = create;
		  SELF.crypto_obj = crypto_obj();
		  SELF.WS = WS;
		  SELF.PNmessage = pubNubCore.PNmessage;
		  SELF.supplant = pubNubCore.supplant;

		  if (typeof(window) !== 'undefined') {
		    bind('beforeunload', window, function () {
		      SELF['each-channel'](function (ch) {
		        SELF['LEAVE'](ch.name, 1);
		      });
		      return true;
		    });
		  }

		  SELF.ready();

		  // Return without Testing
		  if (setup.notest) return SELF;

		  if (typeof(window) !== 'undefined') {
		    bind('offline', window, SELF['offline']);
		  }

		  if (typeof(document) !== 'undefined') {
		    bind('offline', document, SELF['offline']);
		  }

		  return SELF;
		}

		CREATE_PUBNUB.init = CREATE_PUBNUB;
		CREATE_PUBNUB.secure = CREATE_PUBNUB;
		CREATE_PUBNUB.crypto_obj = crypto_obj();
		CREATE_PUBNUB.WS = WS;
		CREATE_PUBNUB.db = db;
		CREATE_PUBNUB.PNmessage = pubNubCore.PNmessage;
		CREATE_PUBNUB.uuid = pubNubCore.uuid;

		CREATE_PUBNUB.css = css;
		CREATE_PUBNUB.$ = $;
		CREATE_PUBNUB.create = $;
		CREATE_PUBNUB.bind = bind;
		CREATE_PUBNUB.search = search;
		CREATE_PUBNUB.attr = attr;
		CREATE_PUBNUB.events = events;

		CREATE_PUBNUB.map = pubNubCore.map;
		CREATE_PUBNUB.each = pubNubCore.each;
		CREATE_PUBNUB.grep = pubNubCore.grep;
		CREATE_PUBNUB.supplant = pubNubCore.supplant;
		CREATE_PUBNUB.now = pubNubCore.now;
		CREATE_PUBNUB.unique = pubNubCore.unique;
		CREATE_PUBNUB.updater = pubNubCore.updater;

		module.exports = CREATE_PUBNUB;


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		/* eslint camelcase: 0, no-use-before-define: 0, no-unused-expressions: 0  */
		/* eslint eqeqeq: 0, one-var: 0 */
		/* eslint no-redeclare: 0 */
		/* eslint guard-for-in: 0 */
		/* eslint block-scoped-var: 0 space-return-throw-case: 0, no-unused-vars: 0 */

		var packageJSON = __webpack_require__(2);
		var defaultConfiguration = __webpack_require__(3);
		var utils = __webpack_require__(4);

		var NOW = 1;
		var READY = false;
		var READY_BUFFER = [];
		var PRESENCE_SUFFIX = '-pnpres';
		var DEF_WINDOWING = 10; // MILLISECONDS.
		var DEF_TIMEOUT = 15000; // MILLISECONDS.
		var DEF_SUB_TIMEOUT = 310; // SECONDS.
		var DEF_KEEPALIVE = 60; // SECONDS (FOR TIMESYNC).
		var SECOND = 1000; // A THOUSAND MILLISECONDS.
		var PRESENCE_HB_THRESHOLD = 5;
		var PRESENCE_HB_DEFAULT = 30;
		var SDK_VER = packageJSON.version;

		/**
		 * UTILITIES
		 */
		function unique() {
		  return 'x' + ++NOW + '' + (+new Date);
		}

		/**
		 * NEXTORIGIN
		 * ==========
		 * var next_origin = nextorigin();
		 */
		var nextorigin = (function () {
		  var max = 20;
		  var ori = Math.floor(Math.random() * max);
		  return function (origin) {
		    var protocol = origin.split('://')[0];
		    var host = origin.split('://')[1];

		    if (host.match('^ps')) {
		      return protocol + '://' + host.replace('ps', 'ps' + (++ori < max ? ori : ori = 1));
		    } else if (host.match('^pubsub')) {
		      return protocol + '://' + host.replace('pubsub', 'ps' + (++ori < max ? ori : ori = 1));
		    } else {
		      return origin;
		    }
		  };
		})();


		/**
		 * Generate Subscription Channel List
		 * ==================================
		 * generate_channel_list(channels_object);
		 */
		function generate_channel_list(channels, nopresence) {
		  var list = [];
		  utils.each(channels, function (channel, status) {
		    if (nopresence) {
		      if (channel.search('-pnpres') < 0) {
		        if (status.subscribed) list.push(channel);
		      }
		    } else {
		      if (status.subscribed) list.push(channel);
		    }
		  });
		  return list.sort();
		}

		/**
		 * Generate Subscription Channel Groups List
		 * ==================================
		 * generate_channel_group_list(channels_groups object);
		 */
		function generate_channel_group_list(channel_groups, nopresence) {
		  var list = [];
		  utils.each(channel_groups, function (channel_group, status) {
		    if (nopresence) {
		      if (channel_group.search('-pnpres') < 0) {
		        if (status.subscribed) list.push(channel_group);
		      }
		    } else {
		      if (status.subscribed) list.push(channel_group);
		    }
		  });
		  return list.sort();
		}

		// PUBNUB READY TO CONNECT
		function ready() {
		  if (READY) return;
		  READY = 1;
		  utils.each(READY_BUFFER, function (connect) {
		    connect();
		  });
		}

		function PNmessage(args) {
		  var msg = args || { apns: {} };

		  msg['getPubnubMessage'] = function () {
		    var m = {};

		    if (Object.keys(msg['apns']).length) {
		      m['pn_apns'] = {
		        aps: {
		          alert: msg['apns']['alert'],
		          badge: msg['apns']['badge'],
		          sound: msg['apns']['sound']
		        }
		      };
		      for (var k in msg['apns']) {
		        m['pn_apns'][k] = msg['apns'][k];
		      }
		      var exclude1 = ['badge', 'alert', 'sound'];
		      for (var k in exclude1) {
		        delete m['pn_apns'][exclude1[k]];
		      }
		    }

		    if (msg['gcm']) {
		      m['pn_gcm'] = {
		        data: msg['gcm']
		      };
		    }

		    for (var k in msg) {
		      m[k] = msg[k];
		    }
		    var exclude = ['apns', 'gcm', 'publish', 'channel', 'callback', 'error'];
		    for (var k in exclude) {
		      delete m[exclude[k]];
		    }

		    return m;
		  };
		  msg['publish'] = function () {
		    var m = msg.getPubnubMessage();

		    if (msg['pubnub'] && msg['channel']) {
		      msg['pubnub'].publish({
		        message: m,
		        channel: msg['channel'],
		        callback: msg['callback'],
		        error: msg['error']
		      });
		    }
		  };
		  return msg;
		}

		function PN_API(setup) {
		  var SUB_WINDOWING = +setup['windowing'] || DEF_WINDOWING;
		  var SUB_TIMEOUT = (+setup['timeout'] || DEF_SUB_TIMEOUT) * SECOND;
		  var KEEPALIVE = (+setup['keepalive'] || DEF_KEEPALIVE) * SECOND;
		  var TIME_CHECK = setup['timecheck'] || 0;
		  var NOLEAVE = setup['noleave'] || 0;
		  var PUBLISH_KEY = setup['publish_key'];
		  var SUBSCRIBE_KEY = setup['subscribe_key'];
		  var AUTH_KEY = setup['auth_key'] || '';
		  var SECRET_KEY = setup['secret_key'] || '';
		  var hmac_SHA256 = setup['hmac_SHA256'];
		  var SSL = setup['ssl'] ? 's' : '';
		  var ORIGIN = 'http' + SSL + '://' + (setup['origin'] || 'pubsub.pubnub.com');
		  var STD_ORIGIN = nextorigin(ORIGIN);
		  var SUB_ORIGIN = nextorigin(ORIGIN);
		  var CONNECT = function () {
		  };
		  var PUB_QUEUE = [];
		  var CLOAK = true;
		  var TIME_DRIFT = 0;
		  var SUB_CALLBACK = 0;
		  var SUB_CHANNEL = 0;
		  var SUB_RECEIVER = 0;
		  var SUB_RESTORE = setup['restore'] || 0;
		  var SUB_BUFF_WAIT = 0;
		  var TIMETOKEN = 0;
		  var RESUMED = false;
		  var CHANNELS = {};
		  var CHANNEL_GROUPS = {};
		  var SUB_ERROR = function () {
		  };
		  var STATE = {};
		  var PRESENCE_HB_TIMEOUT = null;
		  var PRESENCE_HB = validate_presence_heartbeat(
		    setup['heartbeat'] || setup['pnexpires'] || 0, setup['error']
		  );
		  var PRESENCE_HB_INTERVAL = setup['heartbeat_interval'] || (PRESENCE_HB / 2) - 1;
		  var PRESENCE_HB_RUNNING = false;
		  var NO_WAIT_FOR_PENDING = setup['no_wait_for_pending'];
		  var COMPATIBLE_35 = setup['compatible_3.5'] || false;
		  var xdr = setup['xdr'];
		  var params = setup['params'] || {};
		  var error = setup['error'] || function () {};
		  var _is_online = setup['_is_online'] || function () { return 1;};
		  var jsonp_cb = setup['jsonp_cb'] || function () { return 0; };
		  var db = setup['db'] || { get: function () {}, set: function () {} };
		  var CIPHER_KEY = setup['cipher_key'];
		  var UUID = setup['uuid'] || (!setup['unique_uuid'] && db && db['get'](SUBSCRIBE_KEY + 'uuid') || '');
		  var USE_INSTANCEID = setup['instance_id'] || false;
		  var PARTNER_ID = setup['partner_id'];
		  var SDK_FAMILY = setup['sdk_family'];
		  var INSTANCEID = '';
		  var shutdown = setup['shutdown'];
		  var use_send_beacon = (typeof setup['use_send_beacon'] != 'undefined') ? setup['use_send_beacon'] : true;
		  var sendBeacon = (use_send_beacon) ? setup['sendBeacon'] : null;
		  var _poll_timer;
		  var _poll_timer2;

		  if (PRESENCE_HB === 2) PRESENCE_HB_INTERVAL = 1;

		  var crypto_obj = setup['crypto_obj'] || {
		    encrypt: function (a, key) {
		      return a;
		    },
		    decrypt: function (b, key) {
		      return b;
		    }
		  };

		  function _prepareClientIdentifier() {
		    var base = 'PubNub-JS-' + SDK_FAMILY;

		    if (PARTNER_ID) {
		      base += '-' + PARTNER_ID;
		    }

		    base += '/' + SDK_VER;
		    return base;
		  }

		  function _get_url_params(data) {
		    if (!data) data = {};
		    utils.each(params, function (key, value) {
		      if (!(key in data)) data[key] = value;
		    });

		    // add PNSDK to the mix.
		    data.pnsdk = _prepareClientIdentifier();

		    return data;
		  }

		  function _object_to_key_list(o) {
		    var l = [];
		    utils.each(o, function (key, value) {
		      l.push(key);
		    });
		    return l;
		  }

		  function _object_to_key_list_sorted(o) {
		    return _object_to_key_list(o).sort();
		  }

		  function _get_pam_sign_input_from_params(params) {
		    var si = '';
		    var l = _object_to_key_list_sorted(params);

		    for (var i in l) {
		      var k = l[i];
		      si += k + '=' + utils.pamEncode(params[k]);
		      if (i != l.length - 1) si += '&';
		    }
		    return si;
		  }

		  function validate_presence_heartbeat(heartbeat, cur_heartbeat, error) {
		    var err = false;

		    if (typeof heartbeat === 'undefined') {
		      return cur_heartbeat;
		    }

		    if (typeof heartbeat === 'number') {
		      if (heartbeat > PRESENCE_HB_THRESHOLD || heartbeat == 0) {
		        err = false;
		      } else {
		        err = true;
		      }
		    } else if (typeof heartbeat === 'boolean') {
		      if (!heartbeat) {
		        return 0;
		      } else {
		        return PRESENCE_HB_DEFAULT;
		      }
		    } else {
		      err = true;
		    }

		    if (err) {
		      error && error('Presence Heartbeat value invalid. Valid range ( x > ' + PRESENCE_HB_THRESHOLD + ' or x = 0). Current Value : ' + (cur_heartbeat || PRESENCE_HB_THRESHOLD));
		      return cur_heartbeat || PRESENCE_HB_THRESHOLD;
		    } else return heartbeat;
		  }

		  function encrypt(input, key) {
		    return crypto_obj['encrypt'](input, key || CIPHER_KEY) || input;
		  }

		  function decrypt(input, key) {
		    return crypto_obj['decrypt'](input, key || CIPHER_KEY) ||
		      crypto_obj['decrypt'](input, CIPHER_KEY) ||
		      input;
		  }

		  function error_common(message, callback) {
		    callback && callback({ error: message || 'error occurred' });
		    error && error(message);
		  }

		  function _presence_heartbeat() {
		    clearTimeout(PRESENCE_HB_TIMEOUT);

		    if (!PRESENCE_HB_INTERVAL || PRESENCE_HB_INTERVAL >= 500 ||
		      PRESENCE_HB_INTERVAL < 1 ||
		      (!generate_channel_list(CHANNELS, true).length && !generate_channel_group_list(CHANNEL_GROUPS, true).length)) {
		      PRESENCE_HB_RUNNING = false;
		      return;
		    }

		    PRESENCE_HB_RUNNING = true;
		    SELF['presence_heartbeat']({
		      callback: function (r) {
		        PRESENCE_HB_TIMEOUT = utils.timeout(_presence_heartbeat, (PRESENCE_HB_INTERVAL) * SECOND);
		      },
		      error: function (e) {
		        error && error('Presence Heartbeat unable to reach Pubnub servers.' + JSON.stringify(e));
		        PRESENCE_HB_TIMEOUT = utils.timeout(_presence_heartbeat, (PRESENCE_HB_INTERVAL) * SECOND);
		      }
		    });
		  }

		  function start_presence_heartbeat() {
		    !PRESENCE_HB_RUNNING && _presence_heartbeat();
		  }

		  function publish(next) {
		    if (NO_WAIT_FOR_PENDING) {
		      if (!PUB_QUEUE.length) return;
		    } else {
		      if (next) PUB_QUEUE.sending = 0;
		      if (PUB_QUEUE.sending || !PUB_QUEUE.length) return;
		      PUB_QUEUE.sending = 1;
		    }

		    executeRequest(PUB_QUEUE.shift());
		  }

		  function each_channel_group(callback) {
		    var count = 0;

		    utils.each(generate_channel_group_list(CHANNEL_GROUPS), function (channel_group) {
		      var chang = CHANNEL_GROUPS[channel_group];

		      if (!chang) return;

		      count++;
		      (callback || function () {
		      })(chang);
		    });

		    return count;
		  }

		  function each_channel(callback) {
		    var count = 0;

		    utils.each(generate_channel_list(CHANNELS), function (channel) {
		      var chan = CHANNELS[channel];

		      if (!chan) return;

		      count++;
		      (callback || function () {
		      })(chan);
		    });

		    return count;
		  }

		  function _invoke_callback(response, callback, err) {
		    if (typeof response == 'object') {
		      if (response['error']) {
		        var callback_data = {};

		        if (response['message']) {
		          callback_data['message'] = response['message'];
		        }

		        if (response['payload']) {
		          callback_data['payload'] = response['payload'];
		        }

		        err && err(callback_data);
		        return;
		      }
		      if (response['payload']) {
		        if (response['next_page']) {
		          callback && callback(response['payload'], response['next_page']);
		        } else {
		          callback && callback(response['payload']);
		        }
		        return;
		      }
		    }
		    callback && callback(response);
		  }

		  function _invoke_error(response, err) {
		    if (typeof response == 'object' && response['error']) {
		      var callback_data = {};

		      if (response['message']) {
		        callback_data['message'] = response['message'];
		      }

		      if (response['payload']) {
		        callback_data['payload'] = response['payload'];
		      }

		      err && err(callback_data);
		      return;
		    } else {
		      err && err(response);
		    }
		  }

		  /*
		    Abstraction over XHR to allow common parameter modification before
		    dispatching to the networking layer.
		  */
		  function executeRequest(requestConfig) {
		    var operationType = requestConfig['operation'];
		    var timestamp = Math.floor(new Date().getTime() / 1000);
		    var requestData = requestConfig['data'] || {};

		    if (SECRET_KEY) {
		      // delete the auth key if it comes up empty.
		      if (!requestData['auth']) {
		        delete requestData['auth'];
		      }

		      requestData['timestamp'] = timestamp;
		      var signInput = SUBSCRIBE_KEY + '\n' + PUBLISH_KEY + '\n';

		      if (operationType === 'PNAccessManagerGrant') {
		        signInput += 'grant' + '\n';
		      } else if (operationType === 'PNAccessManagerAudit') {
		        signInput += 'audit' + '\n';
		      } else {
		        var newPath = requestConfig['url'].slice();
		        newPath.shift();
		        signInput += '/' + newPath.join('/') + '\n';
		      }

		      signInput += _get_pam_sign_input_from_params(requestData);
		      var signature = hmac_SHA256(signInput, SECRET_KEY);

		      signature = signature.replace(/\+/g, '-');
		      signature = signature.replace(/\//g, '_');

		      requestData['signature'] = signature;
		      requestConfig['data'] = requestData;
		    }

		    return xdr(requestConfig);
		  }

		  function CR(args, callback, url1, data) {
		    var callback = args['callback'] || callback;
		    var err = args['error'] || error;
		    var jsonp = jsonp_cb();

		    data = data || {};

		    if (!data['auth']) {
		      data['auth'] = args['auth_key'] || AUTH_KEY;
		    }

		    var url = [
		      STD_ORIGIN, 'v1', 'channel-registration',
		      'sub-key', SUBSCRIBE_KEY
		    ];

		    url.push.apply(url, url1);

		    if (jsonp) data['callback'] = jsonp;

		    executeRequest({
		      callback: jsonp,
		      data: _get_url_params(data),
		      success: function (response) {
		        _invoke_callback(response, callback, err);
		      },
		      fail: function (response) {
		        _invoke_error(response, err);
		      },
		      url: url
		    });
		  }

		  // Announce Leave Event
		  var SELF = {
		    LEAVE: function (channel, blocking, auth_key, callback, error) {
		      var data = { uuid: UUID, auth: auth_key || AUTH_KEY };
		      var origin = nextorigin(ORIGIN);
		      var callback = callback || function () {};
		      var err = error || function () {};
		      var url;
		      var params;
		      var jsonp = jsonp_cb();

		      // Prevent Leaving a Presence Channel
		      if (channel.indexOf(PRESENCE_SUFFIX) > 0) return true;


		      if (COMPATIBLE_35) {
		        if (!SSL) return false;
		        if (jsonp == '0') return false;
		      }

		      if (NOLEAVE) return false;

		      if (jsonp != '0') data['callback'] = jsonp;

		      if (USE_INSTANCEID) data['instanceid'] = INSTANCEID;

		      url = [
		        origin, 'v2', 'presence', 'sub_key',
		        SUBSCRIBE_KEY, 'channel', utils.encode(channel), 'leave'
		      ];

		      params = _get_url_params(data);


		      if (sendBeacon) {
		        var url_string = utils.buildURL(url, params);
		        if (sendBeacon(url_string)) {
		          callback && callback({ status: 200, action: 'leave', message: 'OK', service: 'Presence' });
		          return true;
		        }
		      }


		      executeRequest({
		        blocking: blocking || SSL,
		        callback: jsonp,
		        data: params,
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        url: url
		      });
		      return true;
		    },

		    LEAVE_GROUP: function (channel_group, blocking, auth_key, callback, error) {
		      var data = { uuid: UUID, auth: auth_key || AUTH_KEY };
		      var origin = nextorigin(ORIGIN);
		      var url;
		      var params;
		      var callback = callback || function () {};
		      var err = error || function () {};
		      var jsonp = jsonp_cb();

		      // Prevent Leaving a Presence Channel Group
		      if (channel_group.indexOf(PRESENCE_SUFFIX) > 0) return true;

		      if (COMPATIBLE_35) {
		        if (!SSL) return false;
		        if (jsonp == '0') return false;
		      }

		      if (NOLEAVE) return false;

		      if (jsonp != '0') data['callback'] = jsonp;

		      if (channel_group && channel_group.length > 0) data['channel-group'] = channel_group;

		      if (USE_INSTANCEID) data['instanceid'] = INSTANCEID;

		      url = [
		        origin, 'v2', 'presence', 'sub_key',
		        SUBSCRIBE_KEY, 'channel', utils.encode(','), 'leave'
		      ];

		      params = _get_url_params(data);

		      if (sendBeacon) {
		        var url_string = utils.buildURL(url, params);
		        if (sendBeacon(url_string)) {
		          callback && callback({ status: 200, action: 'leave', message: 'OK', service: 'Presence' });
		          return true;
		        }
		      }

		      executeRequest({
		        blocking: blocking || SSL,
		        callback: jsonp,
		        data: params,
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        url: url
		      });
		      return true;
		    },

		    set_resumed: function (resumed) {
		      RESUMED = resumed;
		    },

		    get_cipher_key: function () {
		      return CIPHER_KEY;
		    },

		    set_cipher_key: function (key) {
		      CIPHER_KEY = key;
		    },

		    raw_encrypt: function (input, key) {
		      return encrypt(input, key);
		    },

		    raw_decrypt: function (input, key) {
		      return decrypt(input, key);
		    },

		    get_heartbeat: function () {
		      return PRESENCE_HB;
		    },

		    set_heartbeat: function (heartbeat, heartbeat_interval) {
		      PRESENCE_HB = validate_presence_heartbeat(heartbeat, PRESENCE_HB, error);
		      PRESENCE_HB_INTERVAL = heartbeat_interval || (PRESENCE_HB / 2) - 1;
		      if (PRESENCE_HB == 2) {
		        PRESENCE_HB_INTERVAL = 1;
		      }
		      CONNECT();
		      _presence_heartbeat();
		    },

		    get_heartbeat_interval: function () {
		      return PRESENCE_HB_INTERVAL;
		    },

		    set_heartbeat_interval: function (heartbeat_interval) {
		      PRESENCE_HB_INTERVAL = heartbeat_interval;
		      _presence_heartbeat();
		    },

		    get_version: function () {
		      return SDK_VER;
		    },

		    getGcmMessageObject: function (obj) {
		      return {
		        data: obj
		      };
		    },

		    getApnsMessageObject: function (obj) {
		      var x = {
		        aps: { badge: 1, alert: '' }
		      };
		      for (var k in obj) {
		        k[x] = obj[k];
		      }
		      return x;
		    },

		    _add_param: function (key, val) {
		      params[key] = val;
		    },

		    channel_group: function (args, callback) {
		      var ns_ch = args['channel_group'];
		      var callback = callback || args['callback'];
		      var channels = args['channels'] || args['channel'];
		      var cloak = args['cloak'];
		      var namespace;
		      var channel_group;
		      var url = [];
		      var data = {};
		      var mode = args['mode'] || 'add';


		      if (ns_ch) {
		        var ns_ch_a = ns_ch.split(':');

		        if (ns_ch_a.length > 1) {
		          namespace = (ns_ch_a[0] === '*') ? null : ns_ch_a[0];

		          channel_group = ns_ch_a[1];
		        } else {
		          channel_group = ns_ch_a[0];
		        }
		      }

		      namespace && url.push('namespace') && url.push(utils.encode(namespace));

		      url.push('channel-group');

		      if (channel_group && channel_group !== '*') {
		        url.push(channel_group);
		      }

		      if (channels) {
		        if (utils.isArray(channels)) {
		          channels = channels.join(',');
		        }
		        data[mode] = channels;
		        data['cloak'] = (CLOAK) ? 'true' : 'false';
		      } else {
		        if (mode === 'remove') url.push('remove');
		      }

		      if (typeof cloak != 'undefined') data['cloak'] = (cloak) ? 'true' : 'false';

		      CR(args, callback, url, data);
		    },

		    channel_group_list_groups: function (args, callback) {
		      var namespace;

		      namespace = args['namespace'] || args['ns'] || args['channel_group'] || null;
		      if (namespace) {
		        args['channel_group'] = namespace + ':*';
		      }

		      SELF['channel_group'](args, callback);
		    },

		    channel_group_list_channels: function (args, callback) {
		      if (!args['channel_group']) return error('Missing Channel Group');
		      SELF['channel_group'](args, callback);
		    },

		    channel_group_remove_channel: function (args, callback) {
		      if (!args['channel_group']) return error('Missing Channel Group');
		      if (!args['channel'] && !args['channels']) return error('Missing Channel');

		      args['mode'] = 'remove';
		      SELF['channel_group'](args, callback);
		    },

		    channel_group_remove_group: function (args, callback) {
		      if (!args['channel_group']) return error('Missing Channel Group');
		      if (args['channel']) return error('Use channel_group_remove_channel if you want to remove a channel from a group.');

		      args['mode'] = 'remove';
		      SELF['channel_group'](args, callback);
		    },

		    channel_group_add_channel: function (args, callback) {
		      if (!args['channel_group']) return error('Missing Channel Group');
		      if (!args['channel'] && !args['channels']) return error('Missing Channel');
		      SELF['channel_group'](args, callback);
		    },

		    channel_group_cloak: function (args, callback) {
		      if (typeof args['cloak'] == 'undefined') {
		        callback(CLOAK);
		        return;
		      }
		      CLOAK = args['cloak'];
		      SELF['channel_group'](args, callback);
		    },

		    channel_group_list_namespaces: function (args, callback) {
		      var url = ['namespace'];
		      CR(args, callback, url);
		    },

		    channel_group_remove_namespace: function (args, callback) {
		      var url = ['namespace', args['namespace'], 'remove'];
		      CR(args, callback, url);
		    },

		    /*
		     PUBNUB.history({
		     channel  : 'my_chat_channel',
		     limit    : 100,
		     callback : function(history) { }
		     });
		     */
		    history: function (args, callback) {
		      var callback = args['callback'] || callback;
		      var count = args['count'] || args['limit'] || 100;
		      var reverse = args['reverse'] || 'false';
		      var err = args['error'] || function () {};
		      var auth_key = args['auth_key'] || AUTH_KEY;
		      var cipher_key = args['cipher_key'];
		      var channel = args['channel'];
		      var channel_group = args['channel_group'];
		      var start = args['start'];
		      var end = args['end'];
		      var include_token = args['include_token'];
		      var string_msg_token = args['string_message_token'] || false;
		      var params = {};
		      var jsonp = jsonp_cb();

		      // Make sure we have a Channel
		      if (!channel && !channel_group) return error('Missing Channel');
		      if (!callback) return error('Missing Callback');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');

		      params['stringtoken'] = 'true';
		      params['count'] = count;
		      params['reverse'] = reverse;
		      params['auth'] = auth_key;

		      if (channel_group) {
		        params['channel-group'] = channel_group;
		        if (!channel) {
		          channel = ',';
		        }
		      }
		      if (jsonp) params['callback'] = jsonp;
		      if (start) params['start'] = start;
		      if (end) params['end'] = end;
		      if (include_token) params['include_token'] = 'true';
		      if (string_msg_token) params['string_message_token'] = 'true';

		      // Send Message
		      executeRequest({
		        callback: jsonp,
		        data: _get_url_params(params),
		        success: function (response) {
		          if (typeof response == 'object' && response['error']) {
		            err({ message: response['message'], payload: response['payload'] });
		            return;
		          }
		          var messages = response[0];
		          var decrypted_messages = [];
		          for (var a = 0; a < messages.length; a++) {
		            if (include_token) {
		              var new_message = decrypt(messages[a]['message'], cipher_key);
		              var timetoken = messages[a]['timetoken'];
		              try {
		                decrypted_messages['push']({ message: JSON['parse'](new_message), timetoken: timetoken });
		              } catch (e) {
		                decrypted_messages['push'](({ message: new_message, timetoken: timetoken }));
		              }
		            } else {
		              var new_message = decrypt(messages[a], cipher_key);
		              try {
		                decrypted_messages['push'](JSON['parse'](new_message));
		              } catch (e) {
		                decrypted_messages['push']((new_message));
		              }
		            }
		          }
		          callback([decrypted_messages, response[1], response[2]]);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        url: [
		          STD_ORIGIN, 'v2', 'history', 'sub-key',
		          SUBSCRIBE_KEY, 'channel', utils.encode(channel)
		        ]
		      });
		    },

		    /*
		     PUBNUB.replay({
		     source      : 'my_channel',
		     destination : 'new_channel'
		     });
		     */
		    replay: function (args, callback) {
		      var callback = callback || args['callback'] || function () {};
		      var auth_key = args['auth_key'] || AUTH_KEY;
		      var source = args['source'];
		      var destination = args['destination'];
		      var err = args['error'] || args['error'] || function () {};
		      var stop = args['stop'];
		      var start = args['start'];
		      var end = args['end'];
		      var reverse = args['reverse'];
		      var limit = args['limit'];
		      var jsonp = jsonp_cb();
		      var data = {};
		      var url;

		      // Check User Input
		      if (!source) return error('Missing Source Channel');
		      if (!destination) return error('Missing Destination Channel');
		      if (!PUBLISH_KEY) return error('Missing Publish Key');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');

		      // Setup URL Params
		      if (jsonp != '0') data['callback'] = jsonp;
		      if (stop) data['stop'] = 'all';
		      if (reverse) data['reverse'] = 'true';
		      if (start) data['start'] = start;
		      if (end) data['end'] = end;
		      if (limit) data['count'] = limit;

		      data['auth'] = auth_key;

		      // Compose URL Parts
		      url = [
		        STD_ORIGIN, 'v1', 'replay',
		        PUBLISH_KEY, SUBSCRIBE_KEY,
		        source, destination
		      ];

		      // Start (or Stop) Replay!
		      executeRequest({
		        callback: jsonp,
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function () {
		          callback([0, 'Disconnected']);
		        },
		        url: url,
		        data: _get_url_params(data)
		      });
		    },

		    /*
		     PUBNUB.auth('AJFLKAJSDKLA');
		     */
		    auth: function (auth) {
		      AUTH_KEY = auth;
		      CONNECT();
		    },

		    /*
		     PUBNUB.time(function(time){ });
		     */
		    time: function (callback) {
		      var jsonp = jsonp_cb();

		      var data = { uuid: UUID, auth: AUTH_KEY };

		      if (USE_INSTANCEID) data['instanceid'] = INSTANCEID;

		      executeRequest({
		        callback: jsonp,
		        data: _get_url_params(data),
		        url: [STD_ORIGIN, 'time', jsonp],
		        success: function (response) {
		          callback(response[0]);
		        },
		        fail: function () {
		          callback(0);
		        }
		      });
		    },

		    /*
		     PUBNUB.publish({
		     channel : 'my_chat_channel',
		     message : 'hello!'
		     });
		     */
		    publish: function (args, callback) {
		      var msg = args['message'];
		      if (!msg) return error('Missing Message');

		      var callback = callback || args['callback'] || msg['callback'] || args['success'] || function () {};
		      var channel = args['channel'] || msg['channel'];
		      var meta = args['meta'] || args['metadata'];
		      var auth_key = args['auth_key'] || AUTH_KEY;
		      var cipher_key = args['cipher_key'];
		      var err = args['error'] || msg['error'] || function () {};
		      var post = args['post'] || false;
		      var store = ('store_in_history' in args) ? args['store_in_history'] : true;
		      var replicate = ('replicate' in args) ? args['replicate'] : true;
		      var jsonp = jsonp_cb();
		      var add_msg = 'push';
		      var params;
		      var url;

		      if (args['prepend']) add_msg = 'unshift';

		      if (!channel) return error('Missing Channel');
		      if (!PUBLISH_KEY) return error('Missing Publish Key');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');

		      if (msg['getPubnubMessage']) {
		        msg = msg['getPubnubMessage']();
		      }

		      // If trying to send Object
		      msg = JSON['stringify'](encrypt(msg, cipher_key));

		      // Create URL
		      url = [
		        STD_ORIGIN, 'publish',
		        PUBLISH_KEY, SUBSCRIBE_KEY,
		        0, utils.encode(channel),
		        jsonp, utils.encode(msg)
		      ];

		      params = { uuid: UUID, auth: auth_key };

		      if (meta && typeof meta === 'object') {
		        params['meta'] = JSON.stringify(meta);
		      }

		      if (!store) params['store'] = '0';
		      if (!replicate) params['norep'] = 'true';

		      if (USE_INSTANCEID) params['instanceid'] = INSTANCEID;

		      // Queue Message Send
		      PUB_QUEUE[add_msg]({
		        callback: jsonp,
		        url: url,
		        data: _get_url_params(params),
		        fail: function (response) {
		          _invoke_error(response, err);
		          publish(1);
		        },
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		          publish(1);
		        },
		        mode: (post) ? 'POST' : 'GET'
		      });

		      // Send Message
		      publish();
		    },

		    fire: function (args, callback) {
		      args.store_in_history = false;
		      args.replicate = false;
		      SELF['publish'](args, callback);
		    },

		    /*
		     PUBNUB.unsubscribe({ channel : 'my_chat' });
		     */
		    unsubscribe: function (args, callback) {
		      var channelArg = args['channel'];
		      var channelGroupArg = args['channel_group'];
		      var auth_key = args['auth_key'] || AUTH_KEY;
		      var callback = callback || args['callback'] || function () {};
		      var err = args['error'] || function () {};

		      if (!channelArg && !channelGroupArg) return error('Missing Channel or Channel Group');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');

		      if (channelArg) {
		        var channels = utils.isArray(channelArg) ? channelArg : ('' + channelArg).split(',');
		        var existingChannels = [];
		        var presenceChannels = [];

		        utils.each(channels, function (channel) {
		          if (CHANNELS[channel]) existingChannels.push(channel);
		        });

		        // if we do not have any channels to unsubscribe from, trigger a callback.
		        if (existingChannels.length == 0) {
		          callback({ action: 'leave' });
		          return;
		        }

		        // Prepare presence channels
		        utils.each(existingChannels, function (channel) {
		          presenceChannels.push(channel + PRESENCE_SUFFIX);
		        });

		        utils.each(existingChannels.concat(presenceChannels), function (channel) {
		          if (channel in CHANNELS) delete CHANNELS[channel];
		          if (channel in STATE) delete STATE[channel];
		        });

		        if (CHANNELS.length === 0 && CHANNEL_GROUPS.length === 0) {
		          TIMETOKEN = 0;
		        }

		        var CB_CALLED = true;
		        if (READY) {
		          CB_CALLED = SELF['LEAVE'](existingChannels.join(','), 0, auth_key, callback, err);
		        }
		        if (!CB_CALLED) callback({ action: 'leave' });
		      }

		      if (channelGroupArg) {
		        var channelGroups = utils.isArray(channelGroupArg) ? channelGroupArg : ('' + channelGroupArg).split(',');
		        var existingChannelGroups = [];
		        var presenceChannelGroups = [];

		        utils.each(channelGroups, function (channelGroup) {
		          if (CHANNEL_GROUPS[channelGroup]) existingChannelGroups.push(channelGroup);
		        });

		        // if we do not have any channel groups to unsubscribe from, trigger a callback.
		        if (existingChannelGroups.length == 0) {
		          callback({ action: 'leave' });
		          return;
		        }

		        // Prepare presence channels
		        utils.each(existingChannelGroups, function (channelGroup) {
		          presenceChannelGroups.push(channelGroup + PRESENCE_SUFFIX);
		        });

		        utils.each(existingChannelGroups.concat(presenceChannelGroups), function (channelGroup) {
		          if (channelGroup in CHANNEL_GROUPS) delete CHANNEL_GROUPS[channelGroup];
		          if (channelGroup in STATE) delete STATE[channelGroup];
		        });

		        if (CHANNELS.length === 0 && CHANNEL_GROUPS.length === 0) {
		          TIMETOKEN = 0;
		        }

		        var CB_CALLED = true;
		        if (READY) {
		          CB_CALLED = SELF['LEAVE_GROUP'](existingChannelGroups.join(','), 0, auth_key, callback, err);
		        }
		        if (!CB_CALLED) callback({ action: 'leave' });
		      }

		      // Reset Connection if Count Less
		      CONNECT();
		    },

		    /*
		     PUBNUB.subscribe({
		     channel  : 'my_chat'
		     callback : function(message) { }
		     });
		     */
		    subscribe: function (args, callback) {
		      var channel = args['channel'];
		      var channel_group = args['channel_group'];
		      var callback = callback || args['callback'];
		      var callback = callback || args['message'];
		      var connect = args['connect'] || function () {};
		      var reconnect = args['reconnect'] || function () {};
		      var disconnect = args['disconnect'] || function () {};
		      var SUB_ERROR = args['error'] || SUB_ERROR || function () {};
		      var idlecb = args['idle'] || function () {};
		      var presence = args['presence'] || 0;
		      var noheresync = args['noheresync'] || 0;
		      var backfill = args['backfill'] || 0;
		      var timetoken = args['timetoken'] || 0;
		      var sub_timeout = args['timeout'] || SUB_TIMEOUT;
		      var windowing = args['windowing'] || SUB_WINDOWING;
		      var state = args['state'];
		      var heartbeat = args['heartbeat'] || args['pnexpires'];
		      var heartbeat_interval = args['heartbeat_interval'];
		      var restore = args['restore'] || SUB_RESTORE;

		      AUTH_KEY = args['auth_key'] || AUTH_KEY;

		      // Restore Enabled?
		      SUB_RESTORE = restore;

		      // Always Reset the TT
		      TIMETOKEN = timetoken;

		      // Make sure we have a Channel
		      if (!channel && !channel_group) {
		        return error('Missing Channel');
		      }

		      if (!callback) return error('Missing Callback');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');

		      if (heartbeat || heartbeat === 0 || heartbeat_interval || heartbeat_interval === 0) {
		        SELF['set_heartbeat'](heartbeat, heartbeat_interval);
		      }

		      // Setup Channel(s)
		      if (channel) {
		        utils.each((channel.join ? channel.join(',') : '' + channel).split(','),
		          function (channel) {
		            var settings = CHANNELS[channel] || {};

		            // Store Channel State
		            CHANNELS[SUB_CHANNEL = channel] = {
		              name: channel,
		              connected: settings.connected,
		              disconnected: settings.disconnected,
		              subscribed: 1,
		              callback: SUB_CALLBACK = callback,
		              cipher_key: args['cipher_key'],
		              connect: connect,
		              disconnect: disconnect,
		              reconnect: reconnect
		            };

		            if (state) {
		              if (channel in state) {
		                STATE[channel] = state[channel];
		              } else {
		                STATE[channel] = state;
		              }
		            }

		            // Presence Enabled?
		            if (!presence) return;

		            // Subscribe Presence Channel
		            SELF['subscribe']({
		              channel: channel + PRESENCE_SUFFIX,
		              callback: presence,
		              restore: restore
		            });

		            // Presence Subscribed?
		            if (settings.subscribed) return;

		            // See Who's Here Now?
		            if (noheresync) return;
		            SELF['here_now']({
		              channel: channel,
		              data: _get_url_params({ uuid: UUID, auth: AUTH_KEY }),
		              callback: function (here) {
		                utils.each('uuids' in here ? here['uuids'] : [], function (uid) {
		                  presence({
		                    action: 'join',
		                    uuid: uid,
		                    timestamp: Math.floor(utils.rnow() / 1000),
		                    occupancy: here['occupancy'] || 1
		                  }, here, channel);
		                });
		              }
		            });
		          });
		      }

		      // Setup Channel Groups
		      if (channel_group) {
		        utils.each((channel_group.join ? channel_group.join(',') : '' + channel_group).split(','),
		          function (channel_group) {
		            var settings = CHANNEL_GROUPS[channel_group] || {};

		            CHANNEL_GROUPS[channel_group] = {
		              name: channel_group,
		              connected: settings.connected,
		              disconnected: settings.disconnected,
		              subscribed: 1,
		              callback: SUB_CALLBACK = callback,
		              cipher_key: args['cipher_key'],
		              connect: connect,
		              disconnect: disconnect,
		              reconnect: reconnect
		            };

		            // Presence Enabled?
		            if (!presence) return;

		            // Subscribe Presence Channel
		            SELF['subscribe']({
		              channel_group: channel_group + PRESENCE_SUFFIX,
		              callback: presence,
		              restore: restore,
		              auth_key: AUTH_KEY
		            });

		            // Presence Subscribed?
		            if (settings.subscribed) return;

		            // See Who's Here Now?
		            if (noheresync) return;
		            SELF['here_now']({
		              channel_group: channel_group,
		              data: _get_url_params({ uuid: UUID, auth: AUTH_KEY }),
		              callback: function (here) {
		                utils.each('uuids' in here ? here['uuids'] : [], function (uid) {
		                  presence({
		                    action: 'join',
		                    uuid: uid,
		                    timestamp: Math.floor(utils.rnow() / 1000),
		                    occupancy: here['occupancy'] || 1
		                  }, here, channel_group);
		                });
		              }
		            });
		          });
		      }


		      // Test Network Connection
		      function _test_connection(success) {
		        if (success) {
		          // Begin Next Socket Connection
		          utils.timeout(CONNECT, windowing);
		        } else {
		          // New Origin on Failed Connection
		          STD_ORIGIN = nextorigin(ORIGIN);
		          SUB_ORIGIN = nextorigin(ORIGIN);

		          // Re-test Connection
		          utils.timeout(function () {
		            SELF['time'](_test_connection);
		          }, SECOND);
		        }

		        // Disconnect & Reconnect
		        each_channel(function (channel) {
		          // Reconnect
		          if (success && channel.disconnected) {
		            channel.disconnected = 0;
		            return channel.reconnect(channel.name);
		          }

		          // Disconnect
		          if (!success && !channel.disconnected) {
		            channel.disconnected = 1;
		            channel.disconnect(channel.name);
		          }
		        });

		        // Disconnect & Reconnect for channel groups
		        each_channel_group(function (channel_group) {
		          // Reconnect
		          if (success && channel_group.disconnected) {
		            channel_group.disconnected = 0;
		            return channel_group.reconnect(channel_group.name);
		          }

		          // Disconnect
		          if (!success && !channel_group.disconnected) {
		            channel_group.disconnected = 1;
		            channel_group.disconnect(channel_group.name);
		          }
		        });
		      }

		      // Evented Subscribe
		      function _connect() {
		        var jsonp = jsonp_cb();
		        var channels = generate_channel_list(CHANNELS).join(',');
		        var channel_groups = generate_channel_group_list(CHANNEL_GROUPS).join(',');

		        // Stop Connection
		        if (!channels && !channel_groups) return;

		        if (!channels) channels = ',';

		        // Connect to PubNub Subscribe Servers
		        _reset_offline();

		        var data = _get_url_params({ uuid: UUID, auth: AUTH_KEY });

		        if (channel_groups) {
		          data['channel-group'] = channel_groups;
		        }


		        var st = JSON.stringify(STATE);
		        if (st.length > 2) data['state'] = JSON.stringify(STATE);

		        if (PRESENCE_HB) data['heartbeat'] = PRESENCE_HB;

		        if (USE_INSTANCEID) data['instanceid'] = INSTANCEID;

		        start_presence_heartbeat();
		        SUB_RECEIVER = executeRequest({
		          timeout: sub_timeout,
		          callback: jsonp,
		          fail: function (response) {
		            if (response && response['error'] && response['service']) {
		              _invoke_error(response, SUB_ERROR);
		              _test_connection(false);
		            } else {
		              SELF['time'](function (success) {
		                !success && (_invoke_error(response, SUB_ERROR));
		                _test_connection(success);
		              });
		            }
		          },
		          data: _get_url_params(data),
		          url: [
		            SUB_ORIGIN, 'subscribe',
		            SUBSCRIBE_KEY, utils.encode(channels),
		            jsonp, TIMETOKEN
		          ],
		          success: function (messages) {
		            // Check for Errors
		            if (!messages || (typeof messages == 'object' && 'error' in messages && messages['error'])) {
		              SUB_ERROR(messages);
		              return utils.timeout(CONNECT, SECOND);
		            }

		            // User Idle Callback
		            idlecb(messages[1]);

		            // Restore Previous Connection Point if Needed
		            TIMETOKEN = !TIMETOKEN && SUB_RESTORE && db['get'](SUBSCRIBE_KEY) || messages[1];

		            /*
		             // Connect
		             each_channel_registry(function(registry){
		             if (registry.connected) return;
		             registry.connected = 1;
		             registry.connect(channel.name);
		             });
		             */

		            // Connect
		            each_channel(function (channel) {
		              if (channel.connected) return;
		              channel.connected = 1;
		              channel.connect(channel.name);
		            });

		            // Connect for channel groups
		            each_channel_group(function (channel_group) {
		              if (channel_group.connected) return;
		              channel_group.connected = 1;
		              channel_group.connect(channel_group.name);
		            });

		            if (RESUMED && !SUB_RESTORE) {
		              TIMETOKEN = 0;
		              RESUMED = false;
		              // Update Saved Timetoken
		              db['set'](SUBSCRIBE_KEY, 0);
		              utils.timeout(_connect, windowing);
		              return;
		            }

		            // Invoke Memory Catchup and Receive Up to 100
		            // Previous Messages from the Queue.
		            if (backfill) {
		              TIMETOKEN = 10000;
		              backfill = 0;
		            }

		            // Update Saved Timetoken
		            db['set'](SUBSCRIBE_KEY, messages[1]);

		            // Route Channel <---> Callback for Message
		            var next_callback = (function () {
		              var channels = '';
		              var channels2 = '';

		              if (messages.length > 3) {
		                channels = messages[3];
		                channels2 = messages[2];
		              } else if (messages.length > 2) {
		                channels = messages[2];
		              } else {
		                channels = utils.map(
		                  generate_channel_list(CHANNELS), function (chan) {
		                    return utils.map(
		                      Array(messages[0].length)
		                        .join(',').split(','),
		                      function () {
		                        return chan;
		                      }
		                    );
		                  }).join(',');
		              }

		              var list = channels.split(',');
		              var list2 = (channels2) ? channels2.split(',') : [];

		              return function () {
		                var channel = list.shift() || SUB_CHANNEL;
		                var channel2 = list2.shift();

		                var chobj = {};
		                var default_chobj = { callback: function () {} };

		                if (channel2) {
		                  if (channel && channel.indexOf('-pnpres') >= 0
		                    && channel2.indexOf('-pnpres') < 0) {
		                    channel2 += '-pnpres';
		                  }
		                  chobj = CHANNEL_GROUPS[channel2] || CHANNELS[channel2] || default_chobj;
		                } else {
		                  chobj = CHANNELS[channel] || default_chobj;
		                }

		                var r = [
		                  chobj
		                    .callback || SUB_CALLBACK,
		                  channel.split(PRESENCE_SUFFIX)[0]
		                ];
		                channel2 && r.push(channel2.split(PRESENCE_SUFFIX)[0]);
		                return r;
		              };
		            })();

		            var latency = detect_latency(+messages[1]);
		            utils.each(messages[0], function (msg) {
		              var next = next_callback();
		              var decrypted_msg = decrypt(msg,
		                (CHANNELS[next[1]]) ? CHANNELS[next[1]]['cipher_key'] : null);
		              next[0] && next[0](decrypted_msg, messages, next[2] || next[1], latency, next[1]);
		            });

		            utils.timeout(_connect, windowing);
		          }
		        });
		      }

		      CONNECT = function () {
		        _reset_offline();
		        utils.timeout(_connect, windowing);
		      };

		      // Reduce Status Flicker
		      if (!READY) return READY_BUFFER.push(CONNECT);

		      // Connect Now
		      CONNECT();
		    },

		    /*
		     PUBNUB.here_now({ channel : 'my_chat', callback : fun });
		     */
		    here_now: function (args, callback) {
		      var callback = args['callback'] || callback;
		      var debug = args['debug'];
		      var err = args['error'] || function () {};
		      var auth_key = args['auth_key'] || AUTH_KEY;
		      var channel = args['channel'];
		      var channel_group = args['channel_group'];
		      var jsonp = jsonp_cb();
		      var uuids = ('uuids' in args) ? args['uuids'] : true;
		      var state = args['state'];
		      var data = { uuid: UUID, auth: auth_key };

		      if (!uuids) data['disable_uuids'] = 1;
		      if (state) data['state'] = 1;

		      // Make sure we have a Channel
		      if (!callback) return error('Missing Callback');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');

		      var url = [
		        STD_ORIGIN, 'v2', 'presence',
		        'sub_key', SUBSCRIBE_KEY
		      ];

		      channel && url.push('channel') && url.push(utils.encode(channel));

		      if (jsonp != '0') {
		        data['callback'] = jsonp;
		      }

		      if (channel_group) {
		        data['channel-group'] = channel_group;
		        !channel && url.push('channel') && url.push(',');
		      }

		      if (USE_INSTANCEID) data['instanceid'] = INSTANCEID;

		      executeRequest({
		        callback: jsonp,
		        data: _get_url_params(data),
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        debug: debug,
		        url: url
		      });
		    },

		    /*
		     PUBNUB.current_channels_by_uuid({ channel : 'my_chat', callback : fun });
		     */
		    where_now: function (args, callback) {
		      var callback = args['callback'] || callback;
		      var err = args['error'] || function () {};
		      var auth_key = args['auth_key'] || AUTH_KEY;
		      var jsonp = jsonp_cb();
		      var uuid = args['uuid'] || UUID;
		      var data = { auth: auth_key };

		      // Make sure we have a Channel
		      if (!callback) return error('Missing Callback');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');

		      if (jsonp != '0') {
		        data['callback'] = jsonp;
		      }

		      if (USE_INSTANCEID) data['instanceid'] = INSTANCEID;

		      executeRequest({
		        callback: jsonp,
		        data: _get_url_params(data),
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        url: [
		          STD_ORIGIN, 'v2', 'presence',
		          'sub_key', SUBSCRIBE_KEY,
		          'uuid', utils.encode(uuid)
		        ]
		      });
		    },

		    state: function (args, callback) {
		      var callback = args['callback'] || callback || function (r) {};
		      var err = args['error'] || function () {};
		      var auth_key = args['auth_key'] || AUTH_KEY;
		      var jsonp = jsonp_cb();
		      var state = args['state'];
		      var uuid = args['uuid'] || UUID;
		      var channel = args['channel'];
		      var channel_group = args['channel_group'];
		      var url;
		      var data = _get_url_params({ auth: auth_key });

		      // Make sure we have a Channel
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');
		      if (!uuid) return error('Missing UUID');
		      if (!channel && !channel_group) return error('Missing Channel');

		      if (jsonp != '0') {
		        data['callback'] = jsonp;
		      }

		      if (typeof channel != 'undefined'
		        && CHANNELS[channel] && CHANNELS[channel].subscribed) {
		        if (state) STATE[channel] = state;
		      }

		      if (typeof channel_group != 'undefined'
		        && CHANNEL_GROUPS[channel_group]
		        && CHANNEL_GROUPS[channel_group].subscribed
		      ) {
		        if (state) STATE[channel_group] = state;
		        data['channel-group'] = channel_group;

		        if (!channel) {
		          channel = ',';
		        }
		      }

		      data['state'] = JSON.stringify(state);

		      if (USE_INSTANCEID) data['instanceid'] = INSTANCEID;

		      if (state) {
		        url = [
		          STD_ORIGIN, 'v2', 'presence',
		          'sub-key', SUBSCRIBE_KEY,
		          'channel', channel,
		          'uuid', uuid, 'data'
		        ];
		      } else {
		        url = [
		          STD_ORIGIN, 'v2', 'presence',
		          'sub-key', SUBSCRIBE_KEY,
		          'channel', channel,
		          'uuid', utils.encode(uuid)
		        ];
		      }

		      executeRequest({
		        callback: jsonp,
		        data: _get_url_params(data),
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        url: url

		      });
		    },

		    /*
		     PUBNUB.grant({
		     channel  : 'my_chat',
		     callback : fun,
		     error    : fun,
		     ttl      : 24 * 60, // Minutes
		     read     : true,
		     write    : true,
		     auth_key : '3y8uiajdklytowsj'
		     });
		     */
		    grant: function (args, callback) {
		      var callback = args['callback'] || callback;
		      var err = args['error'] || function () {};
		      var channel = args['channel'] || args['channels'];
		      var channel_group = args['channel_group'];
		      var jsonp = jsonp_cb();
		      var ttl = args['ttl'];
		      var r = (args['read']) ? '1' : '0';
		      var w = (args['write']) ? '1' : '0';
		      var m = (args['manage']) ? '1' : '0';
		      var auth_key = args['auth_key'] || args['auth_keys'];

		      if (!callback) return error('Missing Callback');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');
		      if (!PUBLISH_KEY) return error('Missing Publish Key');
		      if (!SECRET_KEY) return error('Missing Secret Key');

		      var data = { w: w, r: r };

		      if (args['manage']) {
		        data['m'] = m;
		      }
		      if (utils.isArray(channel)) {
		        channel = channel['join'](',');
		      }
		      if (utils.isArray(auth_key)) {
		        auth_key = auth_key['join'](',');
		      }
		      if (typeof channel != 'undefined' && channel != null && channel.length > 0) data['channel'] = channel;
		      if (typeof channel_group != 'undefined' && channel_group != null && channel_group.length > 0) {
		        data['channel-group'] = channel_group;
		      }
		      if (jsonp != '0') {
		        data['callback'] = jsonp;
		      }
		      if (ttl || ttl === 0) data['ttl'] = ttl;

		      if (auth_key) data['auth'] = auth_key;

		      data = _get_url_params(data);

		      if (!auth_key) delete data['auth'];

		      executeRequest({
		        operation: 'PNAccessManagerGrant',
		        callback: jsonp,
		        data: data,
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        url: [
		          STD_ORIGIN, 'v1', 'auth', 'grant',
		          'sub-key', SUBSCRIBE_KEY
		        ]
		      });
		    },

		    /*
		     PUBNUB.mobile_gw_provision ({
		     device_id: 'A655FBA9931AB',
		     op       : 'add' | 'remove',
		     gw_type  : 'apns' | 'gcm',
		     channel  : 'my_chat',
		     callback : fun,
		     error    : fun,
		     });
		     */

		    mobile_gw_provision: function (args) {
		      var callback = args['callback'] || function () {};
		      var auth_key = args['auth_key'] || AUTH_KEY;
		      var err = args['error'] || function () {};
		      var jsonp = jsonp_cb();
		      var channel = args['channel'];
		      var op = args['op'];
		      var gw_type = args['gw_type'];
		      var device_id = args['device_id'];
		      var params;
		      var url;

		      if (!device_id) return error('Missing Device ID (device_id)');
		      if (!gw_type) return error('Missing GW Type (gw_type: gcm or apns)');
		      if (!op) return error('Missing GW Operation (op: add or remove)');
		      if (!channel) return error('Missing gw destination Channel (channel)');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');

		      // Create URL
		      url = [
		        STD_ORIGIN, 'v1/push/sub-key',
		        SUBSCRIBE_KEY, 'devices', device_id
		      ];

		      params = { uuid: UUID, auth: auth_key, type: gw_type };

		      if (op == 'add') {
		        params['add'] = channel;
		      } else if (op == 'remove') {
		        params['remove'] = channel;
		      }

		      if (USE_INSTANCEID) params['instanceid'] = INSTANCEID;

		      executeRequest({
		        callback: jsonp,
		        data: params,
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        url: url
		      });
		    },

		    /*
		     PUBNUB.audit({
		     channel  : 'my_chat',
		     callback : fun,
		     error    : fun,
		     read     : true,
		     write    : true,
		     auth_key : '3y8uiajdklytowsj'
		     });
		     */
		    audit: function (args, callback) {
		      var callback = args['callback'] || callback;
		      var err = args['error'] || function () {};
		      var channel = args['channel'];
		      var channel_group = args['channel_group'];
		      var auth_key = args['auth_key'];
		      var jsonp = jsonp_cb();

		      // Make sure we have a Channel
		      if (!callback) return error('Missing Callback');
		      if (!SUBSCRIBE_KEY) return error('Missing Subscribe Key');
		      if (!PUBLISH_KEY) return error('Missing Publish Key');
		      if (!SECRET_KEY) return error('Missing Secret Key');

		      var data = {};
		      if (jsonp != '0') {
		        data['callback'] = jsonp;
		      }
		      if (typeof channel != 'undefined' && channel != null && channel.length > 0) data['channel'] = channel;
		      if (typeof channel_group != 'undefined' && channel_group != null && channel_group.length > 0) {
		        data['channel-group'] = channel_group;
		      }
		      if (auth_key) data['auth'] = auth_key;

		      data = _get_url_params(data);

		      if (!auth_key) delete data['auth'];

		      executeRequest({
		        operation: 'PNAccessManagerAudit',
		        callback: jsonp,
		        data: data,
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        },
		        url: [
		          STD_ORIGIN, 'v1', 'auth', 'audit',
		          'sub-key', SUBSCRIBE_KEY
		        ]
		      });
		    },

		    /*
		     PUBNUB.revoke({
		     channel  : 'my_chat',
		     callback : fun,
		     error    : fun,
		     auth_key : '3y8uiajdklytowsj'
		     });
		     */
		    revoke: function (args, callback) {
		      args['read'] = false;
		      args['write'] = false;
		      SELF['grant'](args, callback);
		    },

		    set_uuid: function (uuid) {
		      UUID = uuid;
		      CONNECT();
		    },

		    get_uuid: function () {
		      return UUID;
		    },

		    isArray: function (arg) {
		      return utils.isArray(arg);
		    },

		    get_subscribed_channels: function () {
		      return generate_channel_list(CHANNELS, true);
		    },

		    presence_heartbeat: function (args) {
		      var callback = args['callback'] || function () {};
		      var err = args['error'] || function () {};
		      var jsonp = jsonp_cb();
		      var data = { uuid: UUID, auth: AUTH_KEY };

		      var st = JSON['stringify'](STATE);
		      if (st.length > 2) data['state'] = JSON['stringify'](STATE);

		      if (PRESENCE_HB > 0 && PRESENCE_HB < 320) data['heartbeat'] = PRESENCE_HB;

		      if (jsonp != '0') {
		        data['callback'] = jsonp;
		      }

		      var channels = utils.encode(generate_channel_list(CHANNELS, true)['join'](','));
		      var channel_groups = generate_channel_group_list(CHANNEL_GROUPS, true)['join'](',');

		      if (!channels) channels = ',';
		      if (channel_groups) data['channel-group'] = channel_groups;

		      if (USE_INSTANCEID) data['instanceid'] = INSTANCEID;

		      executeRequest({
		        callback: jsonp,
		        data: _get_url_params(data),
		        url: [
		          STD_ORIGIN, 'v2', 'presence',
		          'sub-key', SUBSCRIBE_KEY,
		          'channel', channels,
		          'heartbeat'
		        ],
		        success: function (response) {
		          _invoke_callback(response, callback, err);
		        },
		        fail: function (response) {
		          _invoke_error(response, err);
		        }
		      });
		    },

		    stop_timers: function () {
		      clearTimeout(_poll_timer);
		      clearTimeout(_poll_timer2);
		      clearTimeout(PRESENCE_HB_TIMEOUT);
		    },

		    shutdown: function () {
		      SELF['stop_timers']();
		      shutdown && shutdown();
		    },

		    // Expose PUBNUB Functions
		    xdr: xdr,
		    ready: ready,
		    db: db,
		    uuid: utils.generateUUID,
		    map: utils.map,
		    each: utils.each,
		    'each-channel': each_channel,
		    grep: utils.grep,
		    offline: function () {
		      _reset_offline(1, { message: 'Offline. Please check your network settings.' });
		    },
		    supplant: utils.supplant,
		    now: utils.rnow,
		    unique: unique,
		    updater: utils.updater
		  };

		  function _poll_online() {
		    _is_online() || _reset_offline(1, { error: 'Offline. Please check your network settings.' });
		    _poll_timer && clearTimeout(_poll_timer);
		    _poll_timer = utils.timeout(_poll_online, SECOND);
		  }

		  function _poll_online2() {
		    if (!TIME_CHECK) return;
		    SELF['time'](function (success) {
		      detect_time_detla(function () {
		      }, success);
		      success || _reset_offline(1, {
		        error: 'Heartbeat failed to connect to Pubnub Servers.' +
		        'Please check your network settings.'
		      });
		      _poll_timer2 && clearTimeout(_poll_timer2);
		      _poll_timer2 = utils.timeout(_poll_online2, KEEPALIVE);
		    });
		  }

		  function _reset_offline(err, msg) {
		    SUB_RECEIVER && SUB_RECEIVER(err, msg);
		    SUB_RECEIVER = null;

		    clearTimeout(_poll_timer);
		    clearTimeout(_poll_timer2);
		  }

		  if (!UUID) UUID = SELF['uuid']();
		  if (!INSTANCEID) INSTANCEID = SELF['uuid']();
		  db['set'](SUBSCRIBE_KEY + 'uuid', UUID);

		  _poll_timer = utils.timeout(_poll_online, SECOND);
		  _poll_timer2 = utils.timeout(_poll_online2, KEEPALIVE);
		  PRESENCE_HB_TIMEOUT = utils.timeout(
		    start_presence_heartbeat,
		    (PRESENCE_HB_INTERVAL - 3) * SECOND
		  );

		  // Detect Age of Message
		  function detect_latency(tt) {
		    var adjusted_time = utils.rnow() - TIME_DRIFT;
		    return adjusted_time - tt / 10000;
		  }

		  detect_time_detla();
		  function detect_time_detla(cb, time) {
		    var stime = utils.rnow();

		    time && calculate(time) || SELF['time'](calculate);

		    function calculate(time) {
		      if (!time) return;
		      var ptime = time / 10000;
		      var latency = (utils.rnow() - stime) / 2;
		      TIME_DRIFT = utils.rnow() - (ptime + latency);
		      cb && cb(TIME_DRIFT);
		    }
		  }

		  return SELF;
		}

		module.exports = {
		  PN_API: PN_API,
		  unique: unique,
		  PNmessage: PNmessage,
		  DEF_TIMEOUT: DEF_TIMEOUT,
		  timeout: utils.timeout,
		  build_url: utils.buildURL,
		  each: utils.each,
		  uuid: utils.generateUUID,
		  URLBIT: defaultConfiguration.URLBIT,
		  grep: utils.grep,
		  supplant: utils.supplant,
		  now: utils.rnow,
		  updater: utils.updater,
		  map: utils.map
		};


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = {
			"name": "pubnub",
			"preferGlobal": false,
			"version": "3.16.5",
			"author": "PubNub <support@pubnub.com>",
			"description": "Publish & Subscribe Real-time Messaging with PubNub",
			"contributors": [
				{
					"name": "Stephen Blum",
					"email": "stephen@pubnub.com"
				}
			],
			"bin": {},
			"scripts": {
				"test": "grunt test --force"
			},
			"main": "./node.js/pubnub.js",
			"browser": "./modern/dist/pubnub.js",
			"repository": {
				"type": "git",
				"url": "git://github.com/pubnub/javascript.git"
			},
			"keywords": [
				"cloud",
				"publish",
				"subscribe",
				"websockets",
				"comet",
				"bosh",
				"xmpp",
				"real-time",
				"messaging"
			],
			"dependencies": {
				"agentkeepalive": "~0.2",
				"lodash": "^4.1.0"
			},
			"noAnalyze": false,
			"devDependencies": {
				"chai": "^3.5.0",
				"eslint": "2.4.0",
				"eslint-config-airbnb": "^6.0.2",
				"eslint-plugin-flowtype": "^2.1.0",
				"eslint-plugin-mocha": "^2.0.0",
				"eslint-plugin-react": "^4.1.0",
				"flow-bin": "^0.22.0",
				"grunt": "^0.4.5",
				"grunt-contrib-clean": "^1.0.0",
				"grunt-contrib-copy": "^0.8.2",
				"grunt-contrib-uglify": "^0.11.1",
				"grunt-env": "^0.4.4",
				"grunt-eslint": "^18.0.0",
				"grunt-flow": "^1.0.3",
				"grunt-karma": "^0.12.1",
				"grunt-mocha-istanbul": "^3.0.1",
				"grunt-text-replace": "^0.4.0",
				"grunt-webpack": "^1.0.11",
				"imports-loader": "^0.6.5",
				"isparta": "^4.0.0",
				"json-loader": "^0.5.4",
				"karma": "^0.13.21",
				"karma-chai": "^0.1.0",
				"karma-mocha": "^0.2.1",
				"karma-phantomjs-launcher": "^1.0.0",
				"karma-spec-reporter": "0.0.24",
				"load-grunt-tasks": "^3.4.0",
				"mocha": "^2.4.5",
				"nock": "^1.1.0",
				"node-uuid": "^1.4.7",
				"nodeunit": "^0.9.0",
				"phantomjs-prebuilt": "^2.1.4",
				"proxyquire": "^1.7.4",
				"sinon": "^1.17.2",
				"uglify-js": "^2.6.1",
				"underscore": "^1.7.0",
				"webpack": "^1.12.13",
				"webpack-dev-server": "^1.14.1"
			},
			"bundleDependencies": [],
			"license": "MIT",
			"engine": {
				"node": ">=0.8"
			},
			"files": [
				"core",
				"node.js",
				"modern",
				"CHANGELOG",
				"FUTURE.md",
				"LICENSE",
				"README.md"
			]
		};

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		module.exports = {
			"PARAMSBIT": "&",
			"URLBIT": "/"
		};

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		/* eslint no-unused-expressions: 0, block-scoped-var: 0, no-redeclare: 0, guard-for-in: 0 */

		var defaultConfiguration = __webpack_require__(3);
		var REPL = /{([\w\-]+)}/g;

		function rnow() {
		  return +new Date;
		}

		function isArray(arg) {
		  return !!arg && typeof arg !== 'string' && (Array.isArray && Array.isArray(arg) || typeof(arg.length) === 'number');
		  // return !!arg && (Array.isArray && Array.isArray(arg) || typeof(arg.length) === "number")
		}

		/**
		 * EACH
		 * ====
		 * each( [1,2,3], function(item) { } )
		 */
		function each(o, f) {
		  if (!o || !f) {
		    return;
		  }

		  if (isArray(o)) {
		    for (var i = 0, l = o.length; i < l;) {
		      f.call(o[i], o[i], i++);
		    }
		  } else {
		    for (var i in o) {
		      o.hasOwnProperty &&
		      o.hasOwnProperty(i) &&
		      f.call(o[i], i, o[i]);
		    }
		  }
		}

		/**
		 * ENCODE
		 * ======
		 * var encoded_data = encode('path');
		 */
		function encode(path) { return encodeURIComponent(path); }

		/**
		 * Build Url
		 * =======
		 *
		 */
		function buildURL(urlComponents, urlParams) {
		  var url = urlComponents.join(defaultConfiguration.URLBIT);
		  var params = [];

		  if (!urlParams) return url;

		  each(urlParams, function (key, value) {
		    var valueStr = (typeof value === 'object') ? JSON['stringify'](value) : value;
		    (typeof value !== 'undefined' &&
		      value !== null && encode(valueStr).length > 0
		    ) && params.push(key + '=' + encode(valueStr));
		  });

		  url += '?' + params.join(defaultConfiguration.PARAMSBIT);
		  return url;
		}

		/**
		 * UPDATER
		 * =======
		 * var timestamp = unique();
		 */
		function updater(fun, rate) {
		  var timeout;
		  var last = 0;
		  var runnit = function () {
		    if (last + rate > rnow()) {
		      clearTimeout(timeout);
		      timeout = setTimeout(runnit, rate);
		    } else {
		      last = rnow();
		      fun();
		    }
		  };

		  return runnit;
		}

		/**
		 * GREP
		 * ====
		 * var list = grep( [1,2,3], function(item) { return item % 2 } )
		 */
		function grep(list, fun) {
		  var fin = [];
		  each(list || [], function (l) {
		    fun(l) && fin.push(l);
		  });
		  return fin;
		}

		/**
		 * SUPPLANT
		 * ========
		 * var text = supplant( 'Hello {name}!', { name : 'John' } )
		 */
		function supplant(str, values) {
		  return str.replace(REPL, function (_, match) {
		    return values[match] || _;
		  });
		}

		/**
		 * timeout
		 * =======
		 * timeout( function(){}, 100 );
		 */
		function timeout(fun, wait) {
		  if (typeof setTimeout === 'undefined') {
		    return;
		  }

		  return setTimeout(fun, wait);
		}

		/**
		 * uuid
		 * ====
		 * var my_uuid = generateUUID();
		 */
		function generateUUID(callback) {
		  var u = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
		    function (c) {
		      var r = Math.random() * 16 | 0;
		      var v = c === 'x' ? r : (r & 0x3 | 0x8);
		      return v.toString(16);
		    });
		  if (callback) callback(u);
		  return u;
		}

		/**
		 * MAP
		 * ===
		 * var list = map( [1,2,3], function(item) { return item + 1 } )
		 */
		function map(list, fun) {
		  var fin = [];
		  each(list || [], function (k, v) {
		    fin.push(fun(k, v));
		  });
		  return fin;
		}


		function pamEncode(str) {
		  return encodeURIComponent(str).replace(/[!'()*~]/g, function (c) {
		    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		  });
		}


		module.exports = {
		  buildURL: buildURL,
		  encode: encode,
		  each: each,
		  updater: updater,
		  rnow: rnow,
		  isArray: isArray,
		  map: map,
		  pamEncode: pamEncode,
		  generateUUID: generateUUID,
		  timeout: timeout,
		  supplant: supplant,
		  grep: grep
		};


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		/* eslint camelcase: 0 eqeqeq: 0 */

		var CryptoJS = __webpack_require__(6);

		function crypto_obj() {
		  function SHA256(s) {
		    return CryptoJS['SHA256'](s)['toString'](CryptoJS['enc']['Hex']);
		  }

		  var iv = '0123456789012345';

		  var allowedKeyEncodings = ['hex', 'utf8', 'base64', 'binary'];
		  var allowedKeyLengths = [128, 256];
		  var allowedModes = ['ecb', 'cbc'];

		  var defaultOptions = {
		    encryptKey: true,
		    keyEncoding: 'utf8',
		    keyLength: 256,
		    mode: 'cbc'
		  };

		  function parse_options(options) {
		    // Defaults
		    options = options || {};
		    if (!options['hasOwnProperty']('encryptKey')) options['encryptKey'] = defaultOptions['encryptKey'];
		    if (!options['hasOwnProperty']('keyEncoding')) options['keyEncoding'] = defaultOptions['keyEncoding'];
		    if (!options['hasOwnProperty']('keyLength')) options['keyLength'] = defaultOptions['keyLength'];
		    if (!options['hasOwnProperty']('mode')) options['mode'] = defaultOptions['mode'];

		    // Validation
		    if (allowedKeyEncodings['indexOf'](options['keyEncoding']['toLowerCase']()) == -1) options['keyEncoding'] = defaultOptions['keyEncoding'];
		    if (allowedKeyLengths['indexOf'](parseInt(options['keyLength'], 10)) == -1) options['keyLength'] = defaultOptions['keyLength'];
		    if (allowedModes['indexOf'](options['mode']['toLowerCase']()) == -1) options['mode'] = defaultOptions['mode'];

		    return options;
		  }

		  function decode_key(key, options) {
		    if (options['keyEncoding'] === 'base64') {
		      return CryptoJS['enc']['Base64']['parse'](key);
		    } else if (options['keyEncoding'] === 'hex') {
		      return CryptoJS['enc']['Hex']['parse'](key);
		    } else {
		      return key;
		    }
		  }

		  function get_padded_key(key, options) {
		    key = decode_key(key, options);
		    if (options['encryptKey']) {
		      return CryptoJS['enc']['Utf8']['parse'](SHA256(key)['slice'](0, 32));
		    } else {
		      return key;
		    }
		  }

		  function get_mode(options) {
		    if (options['mode'] === 'ecb') {
		      return CryptoJS['mode']['ECB'];
		    } else {
		      return CryptoJS['mode']['CBC'];
		    }
		  }

		  function get_iv(options) {
		    return (options['mode'] === 'cbc') ? CryptoJS['enc']['Utf8']['parse'](iv) : null;
		  }

		  return {
		    encrypt: function (data, key, options) {
		      if (!key) return data;
		      options = parse_options(options);
		      var iv = get_iv(options);
		      var mode = get_mode(options);
		      var cipher_key = get_padded_key(key, options);
		      var hex_message = JSON['stringify'](data);
		      var encryptedHexArray = CryptoJS['AES']['encrypt'](hex_message, cipher_key, { iv: iv, mode: mode })['ciphertext'];
		      var base_64_encrypted = encryptedHexArray['toString'](CryptoJS['enc']['Base64']);
		      return base_64_encrypted || data;
		    },

		    decrypt: function (data, key, options) {
		      if (!key) return data;
		      options = parse_options(options);
		      var iv = get_iv(options);
		      var mode = get_mode(options);
		      var cipher_key = get_padded_key(key, options);
		      try {
		        var binary_enc = CryptoJS['enc']['Base64']['parse'](data);
		        var json_plain = CryptoJS['AES']['decrypt']({ ciphertext: binary_enc }, cipher_key, { iv: iv, mode: mode })['toString'](CryptoJS['enc']['Utf8']);
		        var plaintext = JSON['parse'](json_plain);
		        return plaintext;
		      } catch (e) {
		        return undefined;
		      }
		    }
		  };
		}

		module.exports = crypto_obj;


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		/*
		 CryptoJS v3.1.2
		 code.google.com/p/crypto-js
		 (c) 2009-2013 by Jeff Mott. All rights reserved.
		 code.google.com/p/crypto-js/wiki/License
		 */
		var CryptoJS=CryptoJS||function(h,s){var f={},g=f.lib={},q=function(){},m=g.Base={extend:function(a){q.prototype=this;var c=new q;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
		    r=g.WordArray=m.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
		      32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=m.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new r.init(c,a)}}),l=f.enc={},k=l.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
		        2),16)<<24-4*(b%8);return new r.init(d,c/2)}},n=l.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new r.init(d,c)}},j=l.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},
		    u=g.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);c.sigBytes-=b}return new r.init(g,b)},clone:function(){var a=m.clone.call(this);
		      a._data=this._data.clone();return a},_minBufferSize:0});g.Hasher=u.extend({cfg:m.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){u.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new t.HMAC.init(a,
		    d)).finalize(c)}}});var t=f.algo={};return f}(Math);

		// SHA256
		(function(h){for(var s=CryptoJS,f=s.lib,g=f.WordArray,q=f.Hasher,f=s.algo,m=[],r=[],l=function(a){return 4294967296*(a-(a|0))|0},k=2,n=0;64>n;){var j;a:{j=k;for(var u=h.sqrt(j),t=2;t<=u;t++)if(!(j%t)){j=!1;break a}j=!0}j&&(8>n&&(m[n]=l(h.pow(k,0.5))),r[n]=l(h.pow(k,1/3)),n++);k++}var a=[],f=f.SHA256=q.extend({_doReset:function(){this._hash=new g.init(m.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],g=b[2],j=b[3],h=b[4],m=b[5],n=b[6],q=b[7],p=0;64>p;p++){if(16>p)a[p]=
		  c[d+p]|0;else{var k=a[p-15],l=a[p-2];a[p]=((k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3)+a[p-7]+((l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10)+a[p-16]}k=q+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&m^~h&n)+r[p]+a[p];l=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&g^f&g);q=n;n=m;m=h;h=j+k|0;j=g;g=f;f=e;e=k+l|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+g|0;b[3]=b[3]+j|0;b[4]=b[4]+h|0;b[5]=b[5]+m|0;b[6]=b[6]+n|0;b[7]=b[7]+q|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
		  d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=q.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=q._createHelper(f);s.HmacSHA256=q._createHmacHelper(f)})(Math);

		// HMAC SHA256
		(function(){var h=CryptoJS,s=h.enc.Utf8;h.algo.HMAC=h.lib.Base.extend({init:function(f,g){f=this._hasher=new f.init;"string"==typeof g&&(g=s.parse(g));var h=f.blockSize,m=4*h;g.sigBytes>m&&(g=f.finalize(g));g.clamp();for(var r=this._oKey=g.clone(),l=this._iKey=g.clone(),k=r.words,n=l.words,j=0;j<h;j++)k[j]^=1549556828,n[j]^=909522486;r.sigBytes=l.sigBytes=m;this.reset()},reset:function(){var f=this._hasher;f.reset();f.update(this._iKey)},update:function(f){this._hasher.update(f);return this},finalize:function(f){var g=
		  this._hasher;f=g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f))}})})();

		// Base64
		(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
		l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();

		// BlockCipher
		(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
		  _doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
		    f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
		      m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
		      E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
		    4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
		(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
		  l)}})();

		// Cipher
		CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
		  finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
		  c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
		  e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
		  this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
		  1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
		  decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
		  b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();

		// AES
		(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
		  16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
		8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
		  d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

		// Mode ECB
		CryptoJS.mode.ECB = (function () {
		  var ECB = CryptoJS.lib.BlockCipherMode.extend();

		  ECB.Encryptor = ECB.extend({
		    processBlock: function (words, offset) {
		      this._cipher.encryptBlock(words, offset);
		    }
		  });

		  ECB.Decryptor = ECB.extend({
		    processBlock: function (words, offset) {
		      this._cipher.decryptBlock(words, offset);
		    }
		  });

		  return ECB;
		}());

		module.exports = CryptoJS;


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		// ---------------------------------------------------------------------------
		// WEBSOCKET INTERFACE
		// ---------------------------------------------------------------------------
		var WS = function( url, protocols ) {
		  if (!(this instanceof WS)) return new WS( url, protocols );

		  var self     = this
		    ,   url      = self.url      = url || ''
		    ,   protocol = self.protocol = protocols || 'Sec-WebSocket-Protocol'
		    ,   bits     = url.split('/')
		    ,   setup    = {
		    'ssl'           : bits[0] === 'wss:'
		    ,'origin'        : bits[2]
		    ,'publish_key'   : bits[3]
		    ,'subscribe_key' : bits[4]
		    ,'channel'       : bits[5]
		  };

		  // READY STATES
		  self['CONNECTING'] = 0; // The connection is not yet open.
		  self['OPEN']       = 1; // The connection is open and ready to communicate.
		  self['CLOSING']    = 2; // The connection is in the process of closing.
		  self['CLOSED']     = 3; // The connection is closed or couldn't be opened.

		  // CLOSE STATES
		  self['CLOSE_NORMAL']         = 1000; // Normal Intended Close; completed.
		  self['CLOSE_GOING_AWAY']     = 1001; // Closed Unexpecttedly.
		  self['CLOSE_PROTOCOL_ERROR'] = 1002; // Server: Not Supported.
		  self['CLOSE_UNSUPPORTED']    = 1003; // Server: Unsupported Protocol.
		  self['CLOSE_TOO_LARGE']      = 1004; // Server: Too Much Data.
		  self['CLOSE_NO_STATUS']      = 1005; // Server: No reason.
		  self['CLOSE_ABNORMAL']       = 1006; // Abnormal Disconnect.

		  // Events Default
		  self['onclose']   = self['onerror'] =
		    self['onmessage'] = self['onopen']  =
		      self['onsend']    =  function(){};

		  // Attributes
		  self['binaryType']     = '';
		  self['extensions']     = '';
		  self['bufferedAmount'] = 0;
		  self['trasnmitting']   = false;
		  self['buffer']         = [];
		  self['readyState']     = self['CONNECTING'];

		  // Close if no setup.
		  if (!url) {
		    self['readyState'] = self['CLOSED'];
		    self['onclose']({
		      'code'     : self['CLOSE_ABNORMAL'],
		      'reason'   : 'Missing URL',
		      'wasClean' : true
		    });
		    return self;
		  }

		  // PubNub WebSocket Emulation
		  self.pubnub       = PUBNUB['init'](setup);
		  self.pubnub.setup = setup;
		  self.setup        = setup;

		  self.pubnub['subscribe']({
		    'restore'    : false,
		    'channel'    : setup['channel'],
		    'disconnect' : self['onerror'],
		    'reconnect'  : self['onopen'],
		    'error'      : function() {
		      self['onclose']({
		        'code'     : self['CLOSE_ABNORMAL'],
		        'reason'   : 'Missing URL',
		        'wasClean' : false
		      });
		    },
		    'callback'   : function(message) {
		      self['onmessage']({ 'data' : message });
		    },
		    'connect'    : function() {
		      self['readyState'] = self['OPEN'];
		      self['onopen']();
		    }
		  });
		};

		// ---------------------------------------------------------------------------
		// WEBSOCKET SEND
		// ---------------------------------------------------------------------------
		WS.prototype.send = function(data) {
		  var self = this;
		  self.pubnub['publish']({
		    'channel'  : self.pubnub.setup['channel'],
		    'message'  : data,
		    'callback' : function(response) {
		      self['onsend']({ 'data' : response });
		    }
		  });
		};

		// ---------------------------------------------------------------------------
		// WEBSOCKET CLOSE
		// ---------------------------------------------------------------------------
		WS.prototype.close = function() {
		  var self = this;
		  self.pubnub['unsubscribe']({ 'channel' : self.pubnub.setup['channel'] });
		  self['readyState'] = self['CLOSED'];
		  self['onclose']({});
		};

		module.exports = WS;


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(17);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Make vue aware of Vuex
	/*
	 * @Author: Igor Parra
	 * @Date:   2016-07-15 12:20:57
	 * @Last Modified by:   Igor Parra
	 * @Last Modified time: 2016-10-15 12:17:59
	 */

	_vue2.default.use(_vuex2.default);

	// Create an object to hold the initial state when
	// the app starts up
	var default_state = {
	  order: { id: 0 },
	  item: { id: 0 },
	  counters: {
	    items_to_scan_remaining: 0
	  },
	  addressType: '',
	  shipmentNotification: {},
	  modalVisible: true,
	  urlIframe: '',

	  trip: { id: 0 },
	  operation_type: '',
	  trip_items_remaining_counter: 0,
	  show_acknowledge: false,
	  show_in_position: false
	};
	var state = default_state;

	var mutations = {
	  // A mutation receives the current state as the first argument
	  // You can make any modifications you want inside this function
	  LOAD_DATA: function LOAD_DATA(state, data) {
	    var type = data.type;
	    var content = data.content;

	    state[type] = content;

	    console.info('TYPE', type);

	    if ('order' == type) {
	      console.info('CONTENT.ITEMS_TO_SCAN_REMAINING', content.items_to_scan_remaining);
	      state.counters.items_to_scan_remaining = content.items_to_scan_remaining;
	    }
	  },
	  HIDE_MODAL: function HIDE_MODAL(state, data) {
	    state.modalVisible = data;
	  },
	  RESET_DATA: function RESET_DATA(state) {
	    state.order = { id: 0 };
	    state.item = { id: 0 };
	    state.counters.items_to_scan_remaining = 0;
	    state.addressType = '';
	    state.shipmentNotification = {};
	    state.modalVisible = true;
	    state.urlIframe = '';
	    state.trip.id = 0;
	    state.operation_type = '';
	    state.trip_items_remaining_counter = 0;
	    state.show_acknowledge = false;
	    state.show_in_position = false;
	  },
	  SET_COUNTERS: function SET_COUNTERS(state, data) {
	    // var type = data.type
	    // var units = data.units
	    // var x = state.counters[ type ];
	    // state.counters[ type ] = +x + +units
	    // console.info(state.counters);
	    state.counters.items_to_scan_remaining--;
	  }
	};

	// Combine the initial state and the mutations to create a Vuex store.
	// This store can be linked to our app.
	exports.default = new _vuex2.default.Store({
	  state: state,
	  mutations: mutations
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vuex v0.8.2
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, function () { 'use strict';

	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };

	  var classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };

	  var createClass = function () {
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

	  var toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	      return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };

	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */

	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            existing.push(obj[key]);
	          } else {
	            prev[key] = [prev[key], obj[key]];
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }

	  /**
	   * Deep clone an object. Faster than JSON.parse(JSON.stringify()).
	   *
	   * @param {*} obj
	   * @return {*}
	   */

	  function deepClone(obj) {
	    if (Array.isArray(obj)) {
	      return obj.map(deepClone);
	    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	      var cloned = {};
	      var keys = Object.keys(obj);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        var key = keys[i];
	        cloned[key] = deepClone(obj[key]);
	      }
	      return cloned;
	    } else {
	      return obj;
	    }
	  }

	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */

	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var noop = function noop() {};
	      var unwatch = vm.$watch(noop, noop);
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }

	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }

	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	  var devtoolMiddleware = {
	    onInit: function onInit(state, store) {
	      if (!hook) return;
	      hook.emit('vuex:init', store);
	      hook.on('vuex:travel-to-state', function (targetState) {
	        store._dispatching = true;
	        store._vm.state = targetState;
	        store._dispatching = false;
	      });
	    },
	    onMutation: function onMutation(mutation, state) {
	      if (!hook) return;
	      hook.emit('vuex:mutation', mutation, state);
	    }
	  };

	  function override (Vue) {
	    var version = Number(Vue.version.split('.')[0]);

	    if (version >= 2) {
	      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	    } else {
	      (function () {
	        // override init and inject vuex init procedure
	        // for 1.x backwards compatibility.
	        var _init = Vue.prototype._init;
	        Vue.prototype._init = function () {
	          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	          _init.call(this, options);
	        };
	      })();
	    }

	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */

	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection

	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var actions = vuex.actions;
	        var getters = vuex.getters;
	        // handle deprecated state option

	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
	          }
	        }
	      }
	    }

	    /**
	     * Setter for all getter properties.
	     */

	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }

	    /**
	     * Define a Vuex getter on an instance.
	     *
	     * @param {Vue} vm
	     * @param {String} key
	     * @param {Function} getter
	     */

	    function defineVuexGetter(vm, key, getter) {
	      if (typeof getter !== 'function') {
	        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
	      } else {
	        Object.defineProperty(vm, key, {
	          enumerable: true,
	          configurable: true,
	          get: makeComputedGetter(vm.$store, getter),
	          set: setter
	        });
	      }
	    }

	    /**
	     * Make a computed getter, using the same caching mechanism of computed
	     * properties. In addition, it is cached on the raw getter function using
	     * the store's unique cache id. This makes the same getter shared
	     * across all components use the same underlying watcher, and makes
	     * the getter evaluated only once during every flush.
	     *
	     * @param {Store} store
	     * @param {Function} getter
	     */

	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;

	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (vm) {
	        return getter(vm.state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }

	    /**
	     * Make a bound-to-store version of a raw action function.
	     *
	     * @param {Store} store
	     * @param {Function} action
	     * @param {String} key
	     */

	    function makeBoundAction(store, action, key) {
	      if (typeof action !== 'function') {
	        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
	      }
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }

	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }

	  var Vue = void 0;
	  var uid = 0;

	  var Store = function () {

	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} middlewares
	     *        - {Boolean} strict
	     */

	    function Store() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$middlewares = _ref.middlewares;
	      var middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      classCallCheck(this, Store);

	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: {
	          state: state
	        }
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      this._setupMiddlewares(middlewares, state);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	    }

	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */

	    createClass(Store, [{
	      key: 'dispatch',


	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */

	      value: function dispatch(type) {
	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }

	        var silent = false;
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          payload = [type.payload];
	          if (type.silent) silent = true;
	          type = type.type;
	        }
	        var mutation = this._mutations[type];
	        var state = this.state;
	        if (mutation) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(mutation)) {
	            mutation.forEach(function (m) {
	              return m.apply(undefined, [state].concat(toConsumableArray(payload)));
	            });
	          } else {
	            mutation.apply(undefined, [state].concat(toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          if (!silent) this._applyMiddlewares(type, payload);
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }

	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {Function} fn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */

	    }, {
	      key: 'watch',
	      value: function watch(fn, cb, options) {
	        var _this2 = this;

	        if (typeof fn !== 'function') {
	          console.error('Vuex store.watch only accepts function.');
	          return;
	        }
	        return this._vm.$watch(function () {
	          return fn(_this2.state);
	        }, cb, options);
	      }

	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */

	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;

	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }

	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */

	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        Object.keys(modules).forEach(function (key) {
	          Vue.set(state, key, modules[key].state || {});
	        });
	      }

	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */

	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        var allMutations = [this._rootMutations];
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];
	          if (!module || !module.mutations) return;
	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }

	              original.apply(undefined, [state[key]].concat(args));
	            };
	          });
	          allMutations.push(mutations);
	        });
	        this._mutations = mergeObjects(allMutations);
	      }

	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */

	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this3 = this;

	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, 'state', function () {
	          if (!_this3._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }

	      /**
	       * Setup the middlewares. The devtools middleware is always
	       * included, since it does nothing if no devtool is detected.
	       *
	       * A middleware can demand the state it receives to be
	       * "snapshots", i.e. deep clones of the actual state tree.
	       *
	       * @param {Array} middlewares
	       * @param {Object} state
	       */

	    }, {
	      key: '_setupMiddlewares',
	      value: function _setupMiddlewares(middlewares, state) {
	        var _this4 = this;

	        this._middlewares = [devtoolMiddleware].concat(middlewares);
	        this._needSnapshots = middlewares.some(function (m) {
	          return m.snapshot;
	        });
	        if (this._needSnapshots) {
	          console.log('[vuex] One or more of your middlewares are taking state snapshots ' + 'for each mutation. Make sure to use them only during development.');
	        }
	        var initialSnapshot = this._prevSnapshot = this._needSnapshots ? deepClone(state) : null;
	        // call init hooks
	        this._middlewares.forEach(function (m) {
	          if (m.onInit) {
	            m.onInit(m.snapshot ? initialSnapshot : state, _this4);
	          }
	        });
	      }

	      /**
	       * Apply the middlewares on a given mutation.
	       *
	       * @param {String} type
	       * @param {Array} payload
	       */

	    }, {
	      key: '_applyMiddlewares',
	      value: function _applyMiddlewares(type, payload) {
	        var _this5 = this;

	        var state = this.state;
	        var prevSnapshot = this._prevSnapshot;
	        var snapshot = void 0,
	            clonedPayload = void 0;
	        if (this._needSnapshots) {
	          snapshot = this._prevSnapshot = deepClone(state);
	          clonedPayload = deepClone(payload);
	        }
	        this._middlewares.forEach(function (m) {
	          if (m.onMutation) {
	            if (m.snapshot) {
	              m.onMutation({ type: type, payload: clonedPayload }, snapshot, prevSnapshot, _this5);
	            } else {
	              m.onMutation({ type: type, payload: payload }, state, _this5);
	            }
	          }
	        });
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm.state;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Vuex root state is read only.');
	      }
	    }]);
	    return Store;
	  }();

	  function install(_Vue) {
	    if (Vue) {
	      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    override(Vue);
	  }

	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }

	  var index = {
	    Store: Store,
	    install: install
	  };

	  return index;

	}));

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// An action will receive the store as the first argument.
	// Since we are only interested in the dispatch (and optionally the state)
	// we can pull those two parameters using the ES6 destructuring feature
	var storeData = exports.storeData = function storeData(_ref, data) {
	  var dispatch = _ref.dispatch,
	      state = _ref.state;

	  dispatch('LOAD_DATA', data);
	};
	var resetData = exports.resetData = function resetData(_ref2) {
	  var dispatch = _ref2.dispatch,
	      state = _ref2.state;

	  dispatch('RESET_DATA');
	};
	var showModal = exports.showModal = function showModal(_ref3, data) {
	  var dispatch = _ref3.dispatch,
	      state = _ref3.state;

	  dispatch('HIDE_MODAL', data);
	};
	var setCounters = exports.setCounters = function setCounters(_ref4, data) {
	  var dispatch = _ref4.dispatch,
	      state = _ref4.state;

	  dispatch('SET_COUNTERS', data);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n\t<router-view></router-view>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/StandBy.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _getters = __webpack_require__(29);

	var _actions = __webpack_require__(18);

	var _sweetalert = __webpack_require__(30);

	var _sweetalert2 = _interopRequireDefault(_sweetalert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-red-loading-section">
	//     <div class="container">
	//       <div class="ac25-loading-content" v-if="!order.id">
	//         <h5>Esperando Evento...</h5>
	//         <img src="html/images/loading.gif" alt="" />
	//       </div>
	//       <div class="progress-info" v-if="order.id">
	//         <h5>{{order.special_id}}<br /><br />EN PROGRESO </h5>
	//         <br />
	//         <img src="html/images/green-check.png" alt="" />
	//         <div v-if="addressType == 'pickup'">
	//           <ul class="ac25-info-list ac25-w100">
	//             <li>
	//               <p class="ac25-info-list-title white-color"> nombre </p>
	//               <p class="ac25-info-list-content"> {{ infoName}} </p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> telefono </p>
	//               <p class="ac25-info-list-content"> {{ infoPhone }} </p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> direccion </p>
	//               <p class="ac25-info-list-content"> {{order.pickupAddress_name}} </p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> Deparmento </p>
	//               <p class="ac25-info-list-content"> {{order.pickupAddress_apt ? order.pickupAddress_apt : 'N/A' }} </p>
	//             </li>            
	//           </ul>
	//           <!-- end steps2 -->
	//           <ul class="ac25-info-list ac25-w100 ac25-steps3">
	//             <li>
	//               <p class="ac25-info-list-title white-color"> MTS3 </p>
	//               <p class="ac25-info-list-content">{{order.items_volume}}</p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> bultos </p>
	//               <p class="ac25-info-list-content">{{order.items_amount}}</p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> peso </p>
	//               <p class="ac25-info-list-content">n/a<!-- {{order.items_weight}} --></p>
	//             </li>
	//           </ul><!-- end steps3 -->
	//         </div>
	//         <div v-if="addressType == 'delivery'">
	//           <ul class="ac25-info-list ac25-w100">
	//             <li>
	//               <p class="ac25-info-list-title white-color"> nombre </p>
	//               <p class="ac25-info-list-content"> {{ infoName }} </p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> telefono </p>
	//               <p class="ac25-info-list-content"> {{ infoPhone }} </p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> direccion </p>
	//               <p class="ac25-info-list-content"> {{order.deliveryAddress_name}} </p>
	//             </li>
	//           </ul>
	//           <!-- end info-list -->
	//           <ul class="ac25-info-list ac25-w100 ac25-steps2">
	//             <li>
	//               <p class="ac25-info-list-title white-color"> Deparmento </p>
	//               <p class="ac25-info-list-content"> {{order.deliveryAddress_apt}} </p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> Comuna </p>
	//               <p class="ac25-info-list-content"> {{order.deliveryAddress_county}} </p>
	//             </li>
	//           </ul>
	//           <!-- end steps2 -->
	//           <ul class="ac25-info-list ac25-w100 ac25-steps3">
	//             <li>
	//               <p class="ac25-info-list-title white-color"> MTS3 </p>
	//               <p class="ac25-info-list-content">{{order.items_volume}}</p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> bultos </p>
	//               <p class="ac25-info-list-content">{{order.items_amount}}</p>
	//             </li>
	//             <li>
	//               <p class="ac25-info-list-title white-color"> peso </p>
	//               <p class="ac25-info-list-content">n/a<!-- {{order.items_weight}} --></p>
	//             </li>
	//           </ul><!-- end steps3 -->
	//         </div>
	//       </div>
	//     </div>
	//     <img class="ac25-top-right-hand ac25-loading" src="html/images/hand.png" v-link="'call'" />
	//   </div>
	//   <!-- end red-loading-section -->
	//   <footer class="ac25-newfoot">
	//     <a @click="aknowledge()" class="ac25-full-black waves-effect waves-light" v-if="order.id && show_acknowledge">ACEPTAR</a>
	//     <a @click="inPosition()" class="ac25-full-black waves-effect waves-light" v-if="order.id && show_in_position">EN EL LUGAR</a>
	//     <a v-link="'logout'" class="ac25-full-black waves-effect waves-light">CERRAR SESSION</a>
	//   </footer>
	//   <!-- end footer -->
	// </template>
	// <script>
	var SHIPMENT_URL = _common.urls.micro_api + '/shipment';

	exports.default = {
	  name: 'StandBy',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  data: function data() {
	    return {};
	  },
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      counters: _getters.getCounters,
	      addressType: _getters.getAddressType,
	      show_acknowledge: _getters.getShowAcknowledgeTime,
	      show_in_position: _getters.getShowInPosition
	    },
	    actions: {
	      storeData: _actions.storeData
	    }
	  },
	  ready: function ready() {
	    console.info('StandBy is ready =================================== with this order: ', this.order.id);
	  },

	  computed: {
	    infoName: function infoName() {
	      var name = this.order[this.addressType + 'Address_forperson'];
	      return name === '-' ? this.order.customer.name : name;
	    },
	    infoPhone: function infoPhone() {
	      var phone = this.order[this.addressType + 'Address_forperson_phone'];
	      return phone === '-' ? this.order.customer.phone : phone;
	    }
	  },
	  methods: {
	    inPosition: function inPosition() {
	      var _this = this;

	      var shipment_id = this.order[this.addressType + '_shipment_id'];
	      console.info(shipment_id, 'shipment_id');

	      (0, _sweetalert2.default)({
	        title: '',
	        text: '¿Está seguro que se encuentra en el lugar indicado?',
	        type: 'question',
	        showCancelButton: true,
	        confirmButtonText: 'SI',
	        cancelButtonText: 'No'
	      }).then(function () {
	        _this.$http.post(SHIPMENT_URL + '/' + shipment_id + '/in-position').then(function (response) {

	          if (response.data && response.data.success) {
	            _this.storeData({
	              type: 'show_in_position',
	              content: false
	            });

	            return _this.$route.router.go('/payment');
	          }
	        });
	      }, function (dismiss) {});
	    },
	    aknowledge: function aknowledge() {
	      var _this2 = this;

	      var shipment_id = this.order[this.addressType + '_shipment_id'];
	      console.info(shipment_id, 'shipment_id');

	      this.$http.post(SHIPMENT_URL + '/' + shipment_id + '/aknowledge').then(function (response) {

	        if (response.data && response.data.success) {
	          _this2.storeData({
	            type: 'show_acknowledge',
	            content: false
	          });
	          _this2.storeData({
	            type: 'show_in_position',
	            content: true
	          });
	        }
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(27)
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/HeaderUserData.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ecf5351c&file=HeaderUserData.vue!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HeaderUserData.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ecf5351c&file=HeaderUserData.vue!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HeaderUserData.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(25)();
	// imports


	// module
	exports.push([module.id, "\n  .container span {\n    font-size: 1.2em;\n  }\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _director = __webpack_require__(6);

	var _director2 = _interopRequireDefault(_director);

	var _global = __webpack_require__(14);

	var _actions = __webpack_require__(18);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="ac25-top-bar ac25-border-bottom">
	//    <div class="container">
	//     <!-- <span class="left" v-if="!user.authenticated">Aplicación no disponible hasta autorizar usuario</span> -->
	//     <!-- <span class="left" v-if="user.authenticated">OPERADOR: {{user.profile.name}}</span> -->
	//     <span class="left" v-if="user.profile.name">OPERADOR: {{user.profile.name}}</span>
	//     <span class="right">VER: 0.7</span>
	//     <span class="right"><a v-link="'available'" style="color:white">PING</a> &nbsp; | &nbsp; </span>
	//     <span class="right"><a v-link="'setup'" style="color:white">SETUP</a> &nbsp; | &nbsp; </span>
	//     <span class="right"><a @click="reset()" style="color:white" v-if="false">RESET</a> &nbsp; | &nbsp; </span>
	//   </div><!-- end .container -->
	// </div><!-- end .top-bar -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'HeaderUserData',
	  data: function data() {
	    return {
	      user: _director2.default.user
	    };
	  },

	  vuex: {
	    actions: {
	      resetData: _actions.resetData
	    }
	  },
	  methods: {
	    logout: function logout() {
	      _director2.default.logout();
	    },
	    reset: function reset() {
	      return;

	      this.resetData();

	      /**
	       * safeguards
	       */
	      _ls2.default.save('order_id', 0);
	      _ls2.default.save('address_type', '');

	      this.$route.router.go('/available');
	    }
	  }
	};
	// </script>
	//
	// <style type="text/css">
	//   .container span {
	//     font-size: 1.2em;
	//   }
	// </style>
	//

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"ac25-top-bar ac25-border-bottom\">\n   <div class=\"container\">\n    <!-- <span class=\"left\" v-if=\"!user.authenticated\">Aplicación no disponible hasta autorizar usuario</span> -->\n    <!-- <span class=\"left\" v-if=\"user.authenticated\">OPERADOR: {{user.profile.name}}</span> -->\n    <span class=\"left\" v-if=\"user.profile.name\">OPERADOR: {{user.profile.name}}</span>\n    <span class=\"right\">VER: 0.7</span>\n    <span class=\"right\"><a v-link=\"'available'\" style=\"color:white\">PING</a> &nbsp; | &nbsp; </span>\n    <span class=\"right\"><a v-link=\"'setup'\" style=\"color:white\">SETUP</a> &nbsp; | &nbsp; </span>\n    <span class=\"right\"><a @click=\"reset()\" style=\"color:white\" v-if=\"false\">RESET</a> &nbsp; | &nbsp; </span>\n  </div><!-- end .container -->\n</div><!-- end .top-bar -->\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOrder = getOrder;
	exports.getItem = getItem;
	exports.getAddressType = getAddressType;
	exports.getModalVisibility = getModalVisibility;
	exports.getUrlIframe = getUrlIframe;
	exports.getCounters = getCounters;
	exports.getTrip = getTrip;
	exports.getOperationType = getOperationType;
	exports.getTripItemsRemainingCounter = getTripItemsRemainingCounter;
	exports.getShowAcknowledgeTime = getShowAcknowledgeTime;
	exports.getShowInPosition = getShowInPosition;
	// This getter is a function which just returns the count
	// With ES6 you can also write it as:
	// export const getCount = state => state.count
	function getOrder(state) {
	  return state.order;
	}
	function getItem(state) {
	  return state.item;
	}
	function getAddressType(state) {
	  return state.addressType;
	}
	function getModalVisibility(state) {
	  return state.modalVisible;
	}
	function getUrlIframe(state) {
	  return state.urlIframe;
	}
	function getCounters(state) {
	  return state.counters;
	}

	function getTrip(state) {
	  return state.trip;
	}
	function getOperationType(state) {
	  return state.operation_type;
	}
	function getTripItemsRemainingCounter(state) {
	  return state.trip_items_remaining_counter;
	}
	function getShowAcknowledgeTime(state) {
	  return state.show_acknowledge;
	}
	function getShowInPosition(state) {
	  return state.show_in_position;
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * sweetalert2 v6.3.2
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Sweetalert2 = factory());
	}(this, (function () { 'use strict';

	var swalPrefix = 'swal2-';

	var prefix = function prefix(items) {
	  var result = {};
	  for (var i in items) {
	    result[items[i]] = swalPrefix + items[i];
	  }
	  return result;
	};

	var swalClasses = prefix(['container', 'in', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'spacer', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled']);

	var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

	var defaultParams = {
	  title: '',
	  titleText: '',
	  text: '',
	  html: '',
	  type: null,
	  customClass: '',
	  animation: true,
	  allowOutsideClick: true,
	  allowEscapeKey: true,
	  showConfirmButton: true,
	  showCancelButton: false,
	  preConfirm: null,
	  confirmButtonText: 'OK',
	  confirmButtonColor: '#3085d6',
	  confirmButtonClass: null,
	  cancelButtonText: 'Cancel',
	  cancelButtonColor: '#aaa',
	  cancelButtonClass: null,
	  buttonsStyling: true,
	  reverseButtons: false,
	  focusCancel: false,
	  showCloseButton: false,
	  showLoaderOnConfirm: false,
	  imageUrl: null,
	  imageWidth: null,
	  imageHeight: null,
	  imageClass: null,
	  timer: null,
	  width: 500,
	  padding: 20,
	  background: '#fff',
	  input: null,
	  inputPlaceholder: '',
	  inputValue: '',
	  inputOptions: {},
	  inputAutoTrim: true,
	  inputClass: null,
	  inputAttributes: {},
	  inputValidator: null,
	  progressSteps: [],
	  currentProgressStep: null,
	  progressStepsDistance: '40px',
	  onOpen: null,
	  onClose: null
	};

	var sweetHTML = ('\n  <div class="' + swalClasses.modal + '" tabIndex="-1">\n    <ul class="' + swalClasses.progresssteps + '"></ul>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n      <span class="x-mark"><span class="line left"></span><span class="line right"></span></span>\n    </div>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n    <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n      <span class="line tip"></span> <span class="line long"></span>\n      <div class="placeholder"></div> <div class="fix"></div>\n    </div>\n    <img class="' + swalClasses.image + '">\n    <h2 class="' + swalClasses.title + '"></h2>\n    <div class="' + swalClasses.content + '"></div>\n    <input class="' + swalClasses.input + '">\n    <input type="file" class="' + swalClasses.file + '">\n    <div class="' + swalClasses.range + '">\n      <output></output>\n      <input type="range">\n    </div>\n    <select class="' + swalClasses.select + '"></select>\n    <div class="' + swalClasses.radio + '"></div>\n    <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n      <input type="checkbox">\n    </label>\n    <textarea class="' + swalClasses.textarea + '"></textarea>\n    <div class="' + swalClasses.validationerror + '"></div>\n    <hr class="' + swalClasses.spacer + '">\n    <button type="button" class="' + swalClasses.confirm + '">OK</button>\n    <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n    <span class="' + swalClasses.close + '">&times;</span>\n  </div>\n').replace(/(^|\n)\s*/g, '');

	var sweetContainer = void 0;

	var existingSweetContainers = document.getElementsByClassName(swalClasses.container);

	if (existingSweetContainers.length) {
	  sweetContainer = existingSweetContainers[0];
	} else {
	  sweetContainer = document.createElement('div');
	  sweetContainer.className = swalClasses.container;
	  sweetContainer.innerHTML = sweetHTML;
	}

	/*
	 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
	 */
	var colorLuminance = function colorLuminance(hex, lum) {
	  // Validate hex string
	  hex = String(hex).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	  }
	  lum = lum || 0;

	  // Convert to decimal and change luminosity
	  var rgb = '#';
	  for (var i = 0; i < 3; i++) {
	    var c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }

	  return rgb;
	};

	/* global MouseEvent */

	// Remember state in cases where opening and handling a modal will fiddle with it.
	var states = {
	  previousWindowKeyDown: null,
	  previousActiveElement: null,
	  previousBodyPadding: null
	};

	/*
	 * Add modal + overlay to DOM
	 */
	var init = function init() {
	  if (typeof document === 'undefined') {
	    console.error('SweetAlert2 requires document to initialize');
	    return;
	  } else if (document.getElementsByClassName(swalClasses.container).length) {
	    return;
	  }

	  document.body.appendChild(sweetContainer);

	  var modal = getModal();
	  var input = getChildByClass(modal, swalClasses.input);
	  var file = getChildByClass(modal, swalClasses.file);
	  var range = modal.querySelector('.' + swalClasses.range + ' input');
	  var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
	  var select = getChildByClass(modal, swalClasses.select);
	  var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
	  var textarea = getChildByClass(modal, swalClasses.textarea);

	  input.oninput = function () {
	    sweetAlert.resetValidationError();
	  };

	  input.onkeydown = function (event) {
	    setTimeout(function () {
	      if (event.keyCode === 13) {
	        event.stopPropagation();
	        sweetAlert.clickConfirm();
	      }
	    }, 0);
	  };

	  file.onchange = function () {
	    sweetAlert.resetValidationError();
	  };

	  range.oninput = function () {
	    sweetAlert.resetValidationError();
	    rangeOutput.value = range.value;
	  };

	  range.onchange = function () {
	    sweetAlert.resetValidationError();
	    range.previousSibling.value = range.value;
	  };

	  select.onchange = function () {
	    sweetAlert.resetValidationError();
	  };

	  checkbox.onchange = function () {
	    sweetAlert.resetValidationError();
	  };

	  textarea.oninput = function () {
	    sweetAlert.resetValidationError();
	  };

	  return modal;
	};

	/*
	 * Manipulate DOM
	 */
	var elementByClass = function elementByClass(className) {
	  return sweetContainer.querySelector('.' + className);
	};

	var getModal = function getModal() {
	  return document.body.querySelector('.' + swalClasses.modal) || init();
	};

	var getIcons = function getIcons() {
	  var modal = getModal();
	  return modal.querySelectorAll('.' + swalClasses.icon);
	};

	var getTitle = function getTitle() {
	  return elementByClass(swalClasses.title);
	};

	var getContent = function getContent() {
	  return elementByClass(swalClasses.content);
	};

	var getImage = function getImage() {
	  return elementByClass(swalClasses.image);
	};

	var getSpacer = function getSpacer() {
	  return elementByClass(swalClasses.spacer);
	};

	var getProgressSteps = function getProgressSteps() {
	  return elementByClass(swalClasses.progresssteps);
	};

	var getValidationError = function getValidationError() {
	  return elementByClass(swalClasses.validationerror);
	};

	var getConfirmButton = function getConfirmButton() {
	  return elementByClass(swalClasses.confirm);
	};

	var getCancelButton = function getCancelButton() {
	  return elementByClass(swalClasses.cancel);
	};

	var getCloseButton = function getCloseButton() {
	  return elementByClass(swalClasses.close);
	};

	var getFocusableElements = function getFocusableElements(focusCancel) {
	  var buttons = [getConfirmButton(), getCancelButton()];
	  if (focusCancel) {
	    buttons.reverse();
	  }
	  return buttons.concat(Array.prototype.slice.call(getModal().querySelectorAll('button:not([class^=' + swalPrefix + ']), input:not([type=hidden]), textarea, select')));
	};

	var hasClass = function hasClass(elem, className) {
	  if (elem.classList) {
	    return elem.classList.contains(className);
	  }
	  return false;
	};

	var focusInput = function focusInput(input) {
	  input.focus();

	  // place cursor at end of text in text input
	  if (input.type !== 'file') {
	    // http://stackoverflow.com/a/2345915/1331425
	    var val = input.value;
	    input.value = '';
	    input.value = val;
	  }
	};

	var addClass = function addClass(elem, className) {
	  if (!elem || !className) {
	    return;
	  }
	  var classes = className.split(/\s+/).filter(Boolean);
	  classes.forEach(function (className) {
	    elem.classList.add(className);
	  });
	};

	var removeClass = function removeClass(elem, className) {
	  if (!elem || !className) {
	    return;
	  }
	  var classes = className.split(/\s+/).filter(Boolean);
	  classes.forEach(function (className) {
	    elem.classList.remove(className);
	  });
	};

	var getChildByClass = function getChildByClass(elem, className) {
	  for (var i = 0; i < elem.childNodes.length; i++) {
	    if (hasClass(elem.childNodes[i], className)) {
	      return elem.childNodes[i];
	    }
	  }
	};

	var show = function show(elem, display) {
	  if (!display) {
	    display = 'block';
	  }
	  elem.style.opacity = '';
	  elem.style.display = display;
	};

	var hide = function hide(elem) {
	  elem.style.opacity = '';
	  elem.style.display = 'none';
	};

	var empty = function empty(elem) {
	  while (elem.firstChild) {
	    elem.removeChild(elem.firstChild);
	  }
	};

	// borrowed from jqeury $(elem).is(':visible') implementation
	var isVisible = function isVisible(elem) {
	  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
	};

	var removeStyleProperty = function removeStyleProperty(elem, property) {
	  if (elem.style.removeProperty) {
	    elem.style.removeProperty(property);
	  } else {
	    elem.style.removeAttribute(property);
	  }
	};

	var fireClick = function fireClick(node) {
	  if (!isVisible(node)) {
	    return false;
	  }

	  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
	  // Then fixed for today's Chrome browser.
	  if (typeof MouseEvent === 'function') {
	    // Up-to-date approach
	    var mevt = new MouseEvent('click', {
	      view: window,
	      bubbles: false,
	      cancelable: true
	    });
	    node.dispatchEvent(mevt);
	  } else if (document.createEvent) {
	    // Fallback
	    var evt = document.createEvent('MouseEvents');
	    evt.initEvent('click', false, false);
	    node.dispatchEvent(evt);
	  } else if (document.createEventObject) {
	    node.fireEvent('onclick');
	  } else if (typeof node.onclick === 'function') {
	    node.onclick();
	  }
	};

	var animationEndEvent = function () {
	  var testEl = document.createElement('div');
	  var transEndEventNames = {
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'OAnimation': 'oAnimationEnd oanimationend',
	    'msAnimation': 'MSAnimationEnd',
	    'animation': 'animationend'
	  };
	  for (var i in transEndEventNames) {
	    if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
	      return transEndEventNames[i];
	    }
	  }

	  return false;
	}();

	// Reset the page to its previous state
	var resetPrevState = function resetPrevState() {
	  var modal = getModal();
	  window.onkeydown = states.previousWindowKeyDown;
	  if (states.previousActiveElement && states.previousActiveElement.focus) {
	    states.previousActiveElement.focus();
	  }
	  clearTimeout(modal.timeout);
	};

	// Measure width of scrollbar
	// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
	var measureScrollbar = function measureScrollbar() {
	  var scrollDiv = document.createElement('div');
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth;
	};

	// JavaScript Debounce Function
	// Simplivied version of https://davidwalsh.name/javascript-debounce-function
	var debounce = function debounce(func, wait) {
	  var timeout = void 0;
	  return function () {
	    var later = function later() {
	      timeout = null;
	      func();
	    };
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	  };
	};

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};





















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

	var modalParams = _extends({}, defaultParams);
	var queue = [];
	var swal2Observer = void 0;

	/*
	 * Set type, text and actions on modal
	 */
	var setParameters = function setParameters(params) {
	  var modal = getModal();

	  for (var param in params) {
	    if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
	      console.warn('SweetAlert2: Unknown parameter "' + param + '"');
	    }
	  }

	  // set modal width and margin-left
	  modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;

	  modal.style.padding = params.padding + 'px';
	  modal.style.background = params.background;

	  var title = getTitle();
	  var content = getContent();
	  var confirmButton = getConfirmButton();
	  var cancelButton = getCancelButton();
	  var closeButton = getCloseButton();

	  // Title
	  if (params.titleText) {
	    title.innerText = params.titleText;
	  } else {
	    title.innerHTML = params.title.split('\n').join('<br>');
	  }

	  // Content
	  if (params.text || params.html) {
	    if (_typeof(params.html) === 'object') {
	      content.innerHTML = '';
	      if (0 in params.html) {
	        for (var i = 0; i in params.html; i++) {
	          content.appendChild(params.html[i].cloneNode(true));
	        }
	      } else {
	        content.appendChild(params.html.cloneNode(true));
	      }
	    } else if (params.html) {
	      content.innerHTML = params.html;
	    } else if (params.text) {
	      content.textContent = params.text;
	    }
	    show(content);
	  } else {
	    hide(content);
	  }

	  // Close button
	  if (params.showCloseButton) {
	    show(closeButton);
	  } else {
	    hide(closeButton);
	  }

	  // Custom Class
	  modal.className = swalClasses.modal;
	  if (params.customClass) {
	    addClass(modal, params.customClass);
	  }

	  // Progress steps
	  var progressStepsContainer = getProgressSteps();
	  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
	  if (params.progressSteps.length) {
	    show(progressStepsContainer);
	    empty(progressStepsContainer);
	    if (currentProgressStep >= params.progressSteps.length) {
	      console.warn('SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
	    }
	    params.progressSteps.forEach(function (step, index) {
	      var circle = document.createElement('li');
	      addClass(circle, swalClasses.progresscircle);
	      circle.innerHTML = step;
	      if (index === currentProgressStep) {
	        addClass(circle, swalClasses.activeprogressstep);
	      }
	      progressStepsContainer.appendChild(circle);
	      if (index !== params.progressSteps.length - 1) {
	        var line = document.createElement('li');
	        addClass(line, swalClasses.progressline);
	        line.style.width = params.progressStepsDistance;
	        progressStepsContainer.appendChild(line);
	      }
	    });
	  } else {
	    hide(progressStepsContainer);
	  }

	  // Icon
	  var icons = getIcons();
	  for (var _i = 0; _i < icons.length; _i++) {
	    hide(icons[_i]);
	  }
	  if (params.type) {
	    var validType = false;
	    for (var iconType in iconTypes) {
	      if (params.type === iconType) {
	        validType = true;
	        break;
	      }
	    }
	    if (!validType) {
	      console.error('SweetAlert2: Unknown alert type: ' + params.type);
	      return false;
	    }
	    var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
	    show(icon);

	    // Animate icon
	    switch (params.type) {
	      case 'success':
	        addClass(icon, 'animate');
	        addClass(icon.querySelector('.tip'), 'animate-success-tip');
	        addClass(icon.querySelector('.long'), 'animate-success-long');
	        break;
	      case 'error':
	        addClass(icon, 'animate-error-icon');
	        addClass(icon.querySelector('.x-mark'), 'animate-x-mark');
	        break;
	      case 'warning':
	        addClass(icon, 'pulse-warning');
	        break;
	      default:
	        break;
	    }
	  }

	  // Custom image
	  var image = getImage();
	  if (params.imageUrl) {
	    image.setAttribute('src', params.imageUrl);
	    show(image);

	    if (params.imageWidth) {
	      image.setAttribute('width', params.imageWidth);
	    } else {
	      image.removeAttribute('width');
	    }

	    if (params.imageHeight) {
	      image.setAttribute('height', params.imageHeight);
	    } else {
	      image.removeAttribute('height');
	    }

	    image.className = swalClasses.image;
	    if (params.imageClass) {
	      addClass(image, params.imageClass);
	    }
	  } else {
	    hide(image);
	  }

	  // Cancel button
	  if (params.showCancelButton) {
	    cancelButton.style.display = 'inline-block';
	  } else {
	    hide(cancelButton);
	  }

	  // Confirm button
	  if (params.showConfirmButton) {
	    removeStyleProperty(confirmButton, 'display');
	  } else {
	    hide(confirmButton);
	  }

	  // Buttons spacer
	  var spacer = getSpacer();
	  if (!params.showConfirmButton && !params.showCancelButton) {
	    hide(spacer);
	  } else {
	    show(spacer);
	  }

	  // Edit text on cancel and confirm buttons
	  confirmButton.innerHTML = params.confirmButtonText;
	  cancelButton.innerHTML = params.cancelButtonText;

	  // Set buttons to selected background colors
	  if (params.buttonsStyling) {
	    confirmButton.style.backgroundColor = params.confirmButtonColor;
	    cancelButton.style.backgroundColor = params.cancelButtonColor;
	  }

	  // Add buttons custom classes
	  confirmButton.className = swalClasses.confirm;
	  addClass(confirmButton, params.confirmButtonClass);
	  cancelButton.className = swalClasses.cancel;
	  addClass(cancelButton, params.cancelButtonClass);

	  // Buttons styling
	  if (params.buttonsStyling) {
	    addClass(confirmButton, swalClasses.styled);
	    addClass(cancelButton, swalClasses.styled);
	  } else {
	    removeClass(confirmButton, swalClasses.styled);
	    removeClass(cancelButton, swalClasses.styled);

	    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
	    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
	  }

	  // CSS animation
	  if (params.animation === true) {
	    removeClass(modal, swalClasses.noanimation);
	  } else {
	    addClass(modal, swalClasses.noanimation);
	  }
	};

	/*
	 * Animations
	 */
	var openModal = function openModal(animation, onComplete) {
	  var modal = getModal();
	  if (animation) {
	    addClass(modal, swalClasses.show);
	    addClass(sweetContainer, swalClasses.fade);
	    removeClass(modal, swalClasses.hide);
	  } else {
	    removeClass(modal, swalClasses.fade);
	  }
	  show(modal);

	  // scrolling is 'hidden' until animation is done, after that 'auto'
	  sweetContainer.style.overflowY = 'hidden';
	  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
	    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
	      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
	      sweetContainer.style.overflowY = 'auto';
	    });
	  } else {
	    sweetContainer.style.overflowY = 'auto';
	  }

	  addClass(sweetContainer, swalClasses.in);
	  addClass(document.body, swalClasses.in);
	  fixScrollbar();
	  iOSfix();
	  states.previousActiveElement = document.activeElement;
	  if (onComplete !== null && typeof onComplete === 'function') {
	    onComplete(modal);
	  }
	};

	var fixScrollbar = function fixScrollbar() {
	  // for queues, do not do this more than once
	  if (states.previousBodyPadding !== null) {
	    return;
	  }
	  // if the body has overflow
	  if (document.body.scrollHeight > window.innerHeight) {
	    // add padding so the content doesn't shift after removal of scrollbar
	    states.previousBodyPadding = document.body.style.paddingRight;
	    document.body.style.paddingRight = measureScrollbar() + 'px';
	  }
	};

	var undoScrollbar = function undoScrollbar() {
	  if (states.previousBodyPadding !== null) {
	    document.body.style.paddingRight = states.previousBodyPadding;
	    states.previousBodyPadding = null;
	  }
	};

	// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
	var iOSfix = function iOSfix() {
	  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
	    var offset = document.body.scrollTop;
	    document.body.style.top = offset * -1 + 'px';
	    addClass(document.body, swalClasses.iosfix);
	  }
	};

	var undoIOSfix = function undoIOSfix() {
	  if (hasClass(document.body, swalClasses.iosfix)) {
	    var offset = parseInt(document.body.style.top, 10);
	    removeClass(document.body, swalClasses.iosfix);
	    document.body.style.top = '';
	    document.body.scrollTop = offset * -1;
	  }
	};

	var modalDependant = function modalDependant() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  if (args[0] === undefined) {
	    console.error('SweetAlert2 expects at least 1 attribute!');
	    return false;
	  }

	  var params = _extends({}, modalParams);

	  switch (_typeof(args[0])) {
	    case 'string':
	      params.title = args[0];
	      params.html = args[1];
	      params.type = args[2];

	      break;

	    case 'object':
	      _extends(params, args[0]);
	      params.extraParams = args[0].extraParams;

	      if (params.input === 'email' && params.inputValidator === null) {
	        params.inputValidator = function (email) {
	          return new Promise(function (resolve, reject) {
	            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	            if (emailRegex.test(email)) {
	              resolve();
	            } else {
	              reject('Invalid email address');
	            }
	          });
	        };
	      }
	      break;

	    default:
	      console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
	      return false;
	  }

	  setParameters(params);

	  var modal = getModal();

	  return new Promise(function (resolve, reject) {
	    // Close on timer
	    if (params.timer) {
	      modal.timeout = setTimeout(function () {
	        sweetAlert.closeModal(params.onClose);
	        reject('timer');
	      }, params.timer);
	    }

	    // Get input element by specified type or, if type isn't specified, by params.input
	    var getInput = function getInput(inputType) {
	      inputType = inputType || params.input;
	      if (!inputType) {
	        return null;
	      }
	      switch (inputType) {
	        case 'select':
	        case 'textarea':
	        case 'file':
	          return getChildByClass(modal, swalClasses[inputType]);
	        case 'checkbox':
	          return modal.querySelector('.' + swalClasses.checkbox + ' input');
	        case 'radio':
	          return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
	        case 'range':
	          return modal.querySelector('.' + swalClasses.range + ' input');
	        default:
	          return getChildByClass(modal, swalClasses.input);
	      }
	    };

	    // Get the value of the modal input
	    var getInputValue = function getInputValue() {
	      var input = getInput();
	      if (!input) {
	        return null;
	      }
	      switch (params.input) {
	        case 'checkbox':
	          return input.checked ? 1 : 0;
	        case 'radio':
	          return input.checked ? input.value : null;
	        case 'file':
	          return input.files.length ? input.files[0] : null;
	        default:
	          return params.inputAutoTrim ? input.value.trim() : input.value;
	      }
	    };

	    // input autofocus
	    if (params.input) {
	      setTimeout(function () {
	        var input = getInput();
	        if (input) {
	          focusInput(input);
	        }
	      }, 0);
	    }

	    var confirm = function confirm(value) {
	      if (params.showLoaderOnConfirm) {
	        sweetAlert.showLoading();
	      }

	      if (params.preConfirm) {
	        params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
	          sweetAlert.closeModal(params.onClose);
	          resolve(preConfirmValue || value);
	        }, function (error) {
	          sweetAlert.hideLoading();
	          if (error) {
	            sweetAlert.showValidationError(error);
	          }
	        });
	      } else {
	        sweetAlert.closeModal(params.onClose);
	        resolve(value);
	      }
	    };

	    // Mouse interactions
	    var onButtonEvent = function onButtonEvent(event) {
	      var e = event || window.event;
	      var target = e.target || e.srcElement;
	      var confirmButton = getConfirmButton();
	      var cancelButton = getCancelButton();
	      var targetedConfirm = confirmButton === target || confirmButton.contains(target);
	      var targetedCancel = cancelButton === target || cancelButton.contains(target);

	      switch (e.type) {
	        case 'mouseover':
	        case 'mouseup':
	          if (params.buttonsStyling) {
	            if (targetedConfirm) {
	              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
	            } else if (targetedCancel) {
	              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
	            }
	          }
	          break;
	        case 'mouseout':
	          if (params.buttonsStyling) {
	            if (targetedConfirm) {
	              confirmButton.style.backgroundColor = params.confirmButtonColor;
	            } else if (targetedCancel) {
	              cancelButton.style.backgroundColor = params.cancelButtonColor;
	            }
	          }
	          break;
	        case 'mousedown':
	          if (params.buttonsStyling) {
	            if (targetedConfirm) {
	              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
	            } else if (targetedCancel) {
	              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
	            }
	          }
	          break;
	        case 'click':
	          // Clicked 'confirm'
	          if (targetedConfirm && sweetAlert.isVisible()) {
	            if (params.input) {
	              (function () {
	                var inputValue = getInputValue();

	                if (params.inputValidator) {
	                  sweetAlert.disableInput();
	                  params.inputValidator(inputValue, params.extraParams).then(function () {
	                    sweetAlert.enableInput();
	                    confirm(inputValue);
	                  }, function (error) {
	                    sweetAlert.enableInput();
	                    if (error) {
	                      sweetAlert.showValidationError(error);
	                    }
	                  });
	                } else {
	                  confirm(inputValue);
	                }
	              })();
	            } else {
	              confirm(true);
	            }

	            // Clicked 'cancel'
	          } else if (targetedCancel && sweetAlert.isVisible()) {
	            sweetAlert.closeModal(params.onClose);
	            reject('cancel');
	          }
	          break;
	        default:
	      }
	    };

	    var buttons = modal.querySelectorAll('button');
	    for (var i = 0; i < buttons.length; i++) {
	      buttons[i].onclick = onButtonEvent;
	      buttons[i].onmouseover = onButtonEvent;
	      buttons[i].onmouseout = onButtonEvent;
	      buttons[i].onmousedown = onButtonEvent;
	    }

	    // Closing modal by close button
	    getCloseButton().onclick = function () {
	      sweetAlert.closeModal(params.onClose);
	      reject('close');
	    };

	    // Closing modal by overlay click
	    sweetContainer.onclick = function (e) {
	      if (e.target !== sweetContainer) {
	        return;
	      }
	      if (params.allowOutsideClick) {
	        sweetAlert.closeModal(params.onClose);
	        reject('overlay');
	      }
	    };

	    var confirmButton = getConfirmButton();
	    var cancelButton = getCancelButton();

	    // Reverse buttons if neede d
	    if (params.reverseButtons) {
	      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
	    } else {
	      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
	    }

	    // Focus handling
	    var setFocus = function setFocus(index, increment) {
	      var focusableElements = getFocusableElements(params.focusCancel);
	      // search for visible elements and select the next possible match
	      for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
	        index = index + increment;

	        // rollover to first item
	        if (index === focusableElements.length) {
	          index = 0;

	          // go to last item
	        } else if (index === -1) {
	          index = focusableElements.length - 1;
	        }

	        // determine if element is visible
	        var el = focusableElements[index];
	        if (isVisible(el)) {
	          return el.focus();
	        }
	      }
	    };

	    var handleKeyDown = function handleKeyDown(event) {
	      var e = event || window.event;
	      var keyCode = e.keyCode || e.which;

	      if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
	        // Don't do work on keys we don't care about.
	        return;
	      }

	      var targetElement = e.target || e.srcElement;

	      var focusableElements = getFocusableElements(params.focusCancel);
	      var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
	      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
	        if (targetElement === focusableElements[_i3]) {
	          btnIndex = _i3;
	          break;
	        }
	      }

	      // TAB
	      if (keyCode === 9) {
	        if (!e.shiftKey) {
	          // Cycle to the next button
	          setFocus(btnIndex, 1);
	        } else {
	          // Cycle to the prev button
	          setFocus(btnIndex, -1);
	        }
	        e.stopPropagation();
	        e.preventDefault();

	        // ENTER/SPACE
	      } else {
	        if (keyCode === 13 || keyCode === 32) {
	          if (btnIndex === -1) {
	            // ENTER/SPACE clicked outside of a button.
	            if (params.focusCancel) {
	              fireClick(cancelButton, e);
	            } else {
	              fireClick(confirmButton, e);
	            }
	          }
	        } else if (keyCode === 27 && params.allowEscapeKey === true) {
	          sweetAlert.closeModal(params.onClose);
	          reject('esc');
	        }
	      }
	    };

	    states.previousWindowKeyDown = window.onkeydown;
	    window.onkeydown = handleKeyDown;

	    // Loading state
	    if (params.buttonsStyling) {
	      confirmButton.style.borderLeftColor = params.confirmButtonColor;
	      confirmButton.style.borderRightColor = params.confirmButtonColor;
	    }

	    /**
	     * Show spinner instead of Confirm button and disable Cancel button
	     */
	    sweetAlert.showLoading = sweetAlert.enableLoading = function () {
	      show(getSpacer());
	      show(confirmButton, 'inline-block');
	      addClass(confirmButton, swalClasses.loading);
	      addClass(modal, swalClasses.loading);
	      confirmButton.disabled = true;
	      cancelButton.disabled = true;
	    };

	    /**
	     * Show spinner instead of Confirm button and disable Cancel button
	     */
	    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
	      if (!params.showConfirmButton) {
	        hide(confirmButton);
	        if (!params.showCancelButton) {
	          hide(getSpacer());
	        }
	      }
	      removeClass(confirmButton, swalClasses.loading);
	      removeClass(modal, swalClasses.loading);
	      confirmButton.disabled = false;
	      cancelButton.disabled = false;
	    };

	    sweetAlert.getTitle = function () {
	      return getTitle();
	    };
	    sweetAlert.getContent = function () {
	      return getContent();
	    };
	    sweetAlert.getInput = function () {
	      return getInput();
	    };
	    sweetAlert.getImage = function () {
	      return getImage();
	    };
	    sweetAlert.getConfirmButton = function () {
	      return getConfirmButton();
	    };
	    sweetAlert.getCancelButton = function () {
	      return getCancelButton();
	    };

	    sweetAlert.enableButtons = function () {
	      confirmButton.disabled = false;
	      cancelButton.disabled = false;
	    };

	    sweetAlert.disableButtons = function () {
	      confirmButton.disabled = true;
	      cancelButton.disabled = true;
	    };

	    sweetAlert.enableConfirmButton = function () {
	      confirmButton.disabled = false;
	    };

	    sweetAlert.disableConfirmButton = function () {
	      confirmButton.disabled = true;
	    };

	    sweetAlert.enableInput = function () {
	      var input = getInput();
	      if (!input) {
	        return false;
	      }
	      if (input.type === 'radio') {
	        var radiosContainer = input.parentNode.parentNode;
	        var radios = radiosContainer.querySelectorAll('input');
	        for (var _i4 = 0; _i4 < radios.length; _i4++) {
	          radios[_i4].disabled = false;
	        }
	      } else {
	        input.disabled = false;
	      }
	    };

	    sweetAlert.disableInput = function () {
	      var input = getInput();
	      if (!input) {
	        return false;
	      }
	      if (input && input.type === 'radio') {
	        var radiosContainer = input.parentNode.parentNode;
	        var radios = radiosContainer.querySelectorAll('input');
	        for (var _i5 = 0; _i5 < radios.length; _i5++) {
	          radios[_i5].disabled = true;
	        }
	      } else {
	        input.disabled = true;
	      }
	    };

	    // Set modal min-height to disable scrolling inside the modal
	    sweetAlert.recalculateHeight = debounce(function () {
	      var modal = getModal();
	      var prevState = modal.style.display;
	      modal.style.minHeight = '';
	      show(modal);
	      modal.style.minHeight = modal.scrollHeight + 1 + 'px';
	      modal.style.display = prevState;
	    }, 50);

	    // Show block with validation error
	    sweetAlert.showValidationError = function (error) {
	      var validationError = getValidationError();
	      validationError.innerHTML = error;
	      show(validationError);

	      var input = getInput();
	      focusInput(input);
	      addClass(input, swalClasses.inputerror);
	    };

	    // Hide block with validation error
	    sweetAlert.resetValidationError = function () {
	      var validationError = getValidationError();
	      hide(validationError);
	      sweetAlert.recalculateHeight();

	      var input = getInput();
	      if (input) {
	        removeClass(input, swalClasses.inputerror);
	      }
	    };

	    sweetAlert.getProgressSteps = function () {
	      return params.progressSteps;
	    };

	    sweetAlert.setProgressSteps = function (progressSteps) {
	      params.progressSteps = progressSteps;
	      setParameters(params);
	    };

	    sweetAlert.showProgressSteps = function () {
	      show(getProgressSteps());
	    };

	    sweetAlert.hideProgressSteps = function () {
	      hide(getProgressSteps());
	    };

	    sweetAlert.enableButtons();
	    sweetAlert.hideLoading();
	    sweetAlert.resetValidationError();

	    // inputs
	    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
	    var input = void 0;
	    for (var _i6 = 0; _i6 < inputTypes.length; _i6++) {
	      var inputClass = swalClasses[inputTypes[_i6]];
	      var inputContainer = getChildByClass(modal, inputClass);
	      input = getInput(inputTypes[_i6]);

	      // set attributes
	      if (input) {
	        for (var j in input.attributes) {
	          if (input.attributes.hasOwnProperty(j)) {
	            var attrName = input.attributes[j].name;
	            if (attrName !== 'type' && attrName !== 'value') {
	              input.removeAttribute(attrName);
	            }
	          }
	        }
	        for (var attr in params.inputAttributes) {
	          input.setAttribute(attr, params.inputAttributes[attr]);
	        }
	      }

	      // set class
	      inputContainer.className = inputClass;
	      if (params.inputClass) {
	        addClass(inputContainer, params.inputClass);
	      }

	      hide(inputContainer);
	    }

	    var populateInputOptions = void 0;

	    (function () {
	      switch (params.input) {
	        case 'text':
	        case 'email':
	        case 'password':
	        case 'number':
	        case 'tel':
	          input = getChildByClass(modal, swalClasses.input);
	          input.value = params.inputValue;
	          input.placeholder = params.inputPlaceholder;
	          input.type = params.input;
	          show(input);
	          break;
	        case 'file':
	          input = getChildByClass(modal, swalClasses.file);
	          input.placeholder = params.inputPlaceholder;
	          input.type = params.input;
	          show(input);
	          break;
	        case 'range':
	          var range = getChildByClass(modal, swalClasses.range);
	          var rangeInput = range.querySelector('input');
	          var rangeOutput = range.querySelector('output');
	          rangeInput.value = params.inputValue;
	          rangeInput.type = params.input;
	          rangeOutput.value = params.inputValue;
	          show(range);
	          break;
	        case 'select':
	          var select = getChildByClass(modal, swalClasses.select);
	          select.innerHTML = '';
	          if (params.inputPlaceholder) {
	            var placeholder = document.createElement('option');
	            placeholder.innerHTML = params.inputPlaceholder;
	            placeholder.value = '';
	            placeholder.disabled = true;
	            placeholder.selected = true;
	            select.appendChild(placeholder);
	          }
	          populateInputOptions = function populateInputOptions(inputOptions) {
	            for (var optionValue in inputOptions) {
	              var option = document.createElement('option');
	              option.value = optionValue;
	              option.innerHTML = inputOptions[optionValue];
	              if (params.inputValue === optionValue) {
	                option.selected = true;
	              }
	              select.appendChild(option);
	            }
	            show(select);
	            select.focus();
	          };
	          break;
	        case 'radio':
	          var radio = getChildByClass(modal, swalClasses.radio);
	          radio.innerHTML = '';
	          populateInputOptions = function populateInputOptions(inputOptions) {
	            for (var radioValue in inputOptions) {
	              var radioInput = document.createElement('input');
	              var radioLabel = document.createElement('label');
	              var radioLabelSpan = document.createElement('span');
	              radioInput.type = 'radio';
	              radioInput.name = swalClasses.radio;
	              radioInput.value = radioValue;
	              if (params.inputValue === radioValue) {
	                radioInput.checked = true;
	              }
	              radioLabelSpan.innerHTML = inputOptions[radioValue];
	              radioLabel.appendChild(radioInput);
	              radioLabel.appendChild(radioLabelSpan);
	              radioLabel.for = radioInput.id;
	              radio.appendChild(radioLabel);
	            }
	            show(radio);
	            var radios = radio.querySelectorAll('input');
	            if (radios.length) {
	              radios[0].focus();
	            }
	          };
	          break;
	        case 'checkbox':
	          var checkbox = getChildByClass(modal, swalClasses.checkbox);
	          var checkboxInput = getInput('checkbox');
	          checkboxInput.type = 'checkbox';
	          checkboxInput.value = 1;
	          checkboxInput.id = swalClasses.checkbox;
	          checkboxInput.checked = Boolean(params.inputValue);
	          var label = checkbox.getElementsByTagName('span');
	          if (label.length) {
	            checkbox.removeChild(label[0]);
	          }
	          label = document.createElement('span');
	          label.innerHTML = params.inputPlaceholder;
	          checkbox.appendChild(label);
	          show(checkbox);
	          break;
	        case 'textarea':
	          var textarea = getChildByClass(modal, swalClasses.textarea);
	          textarea.value = params.inputValue;
	          textarea.placeholder = params.inputPlaceholder;
	          show(textarea);
	          break;
	        case null:
	          break;
	        default:
	          console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "select", "checkbox", "textarea" or "file", got "' + params.input + '"');
	          break;
	      }
	    })();

	    if (params.input === 'select' || params.input === 'radio') {
	      if (params.inputOptions instanceof Promise) {
	        sweetAlert.showLoading();
	        params.inputOptions.then(function (inputOptions) {
	          sweetAlert.hideLoading();
	          populateInputOptions(inputOptions);
	        });
	      } else if (_typeof(params.inputOptions) === 'object') {
	        populateInputOptions(params.inputOptions);
	      } else {
	        console.error('SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
	      }
	    }

	    openModal(params.animation, params.onOpen);

	    // Focus the first element (input or button)
	    setFocus(-1, 1);

	    // fix scroll
	    sweetContainer.scrollTop = 0;

	    // Observe changes inside the modal and adjust height
	    if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
	      swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
	      swal2Observer.observe(modal, { childList: true, characterData: true, subtree: true });
	    }
	  });
	};

	// SweetAlert entry point
	var sweetAlert = function sweetAlert() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  if (sweetAlert.isVisible()) {
	    sweetAlert.close();
	  }

	  return modalDependant.apply(undefined, args);
	};

	/*
	 * Global function to determine if swal2 modal is visible
	 */
	sweetAlert.isVisible = function () {
	  var modal = getModal();
	  return isVisible(modal);
	};

	/*
	 * Global function for chaining sweetAlert modals
	 */
	sweetAlert.queue = function (steps) {
	  queue = steps;
	  var modal = getModal();
	  var resetQueue = function resetQueue() {
	    queue = [];
	    modal.removeAttribute('data-queue-step');
	  };
	  var queueResult = [];
	  return new Promise(function (resolve, reject) {
	    (function step(i, callback) {
	      if (i < queue.length) {
	        modal.setAttribute('data-queue-step', i);

	        sweetAlert(queue[i]).then(function (result) {
	          queueResult.push(result);
	          step(i + 1, callback);
	        }, function (dismiss) {
	          resetQueue();
	          reject(dismiss);
	        });
	      } else {
	        resetQueue();
	        resolve(queueResult);
	      }
	    })(0);
	  });
	};

	/*
	 * Global function for getting the index of current modal in queue
	 */
	sweetAlert.getQueueStep = function () {
	  return getModal().getAttribute('data-queue-step');
	};

	/*
	 * Global function for inserting a modal to the queue
	 */
	sweetAlert.insertQueueStep = function (step, index) {
	  if (index && index < queue.length) {
	    return queue.splice(index, 0, step);
	  }
	  return queue.push(step);
	};

	/*
	 * Global function for deleting a modal from the queue
	 */
	sweetAlert.deleteQueueStep = function (index) {
	  if (typeof queue[index] !== 'undefined') {
	    queue.splice(index, 1);
	  }
	};

	/*
	 * Global function to close sweetAlert
	 */
	sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
	  var modal = getModal();
	  removeClass(modal, swalClasses.show);
	  addClass(modal, swalClasses.hide);

	  // Reset icon animations
	  var successIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.success);
	  removeClass(successIcon, 'animate');
	  removeClass(successIcon.querySelector('.tip'), 'animate-success-tip');
	  removeClass(successIcon.querySelector('.long'), 'animate-success-long');

	  var errorIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.error);
	  removeClass(errorIcon, 'animate-error-icon');
	  removeClass(errorIcon.querySelector('.x-mark'), 'animate-x-mark');

	  var warningIcon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes.warning);
	  removeClass(warningIcon, 'pulse-warning');

	  resetPrevState();

	  var hideModalAndResetState = function hideModalAndResetState() {
	    hide(modal);
	    modal.style.minHeight = '';
	    removeClass(sweetContainer, swalClasses.in);
	    removeClass(document.body, swalClasses.in);
	    undoScrollbar();
	    undoIOSfix();
	  };

	  // If animation is supported, animate
	  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
	    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
	      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
	      if (hasClass(modal, swalClasses.hide)) {
	        hideModalAndResetState();
	      }
	    });
	  } else {
	    // Otherwise, hide immediately
	    hideModalAndResetState();
	  }
	  if (onComplete !== null && typeof onComplete === 'function') {
	    onComplete(modal);
	  }
	};

	/*
	 * Global function to click 'Confirm' button
	 */
	sweetAlert.clickConfirm = function () {
	  return getConfirmButton().click();
	};

	/*
	 * Global function to click 'Cancel' button
	 */
	sweetAlert.clickCancel = function () {
	  return getCancelButton().click();
	};

	/**
	 * Set default params for each popup
	 * @param {Object} userParams
	 */
	sweetAlert.setDefaults = function (userParams) {
	  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
	    return console.error('SweetAlert2: the argument for setDefaults() is required and has to be a object');
	  }

	  for (var param in userParams) {
	    if (!defaultParams.hasOwnProperty(param) && param !== 'extraParams') {
	      console.warn('SweetAlert2: Unknown parameter "' + param + '"');
	      delete userParams[param];
	    }
	  }

	  _extends(modalParams, userParams);
	};

	/**
	 * Reset default params for each popup
	 */
	sweetAlert.resetDefaults = function () {
	  modalParams = _extends({}, defaultParams);
	};

	sweetAlert.noop = function () {};

	sweetAlert.version = '6.3.2';

	sweetAlert.default = sweetAlert;

	return sweetAlert;

	})));
	if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-red-loading-section\">\n    <div class=\"container\">\n      <div class=\"ac25-loading-content\" v-if=\"!order.id\">\n        <h5>Esperando Evento...</h5>\n        <img src=\"" + __webpack_require__(32) + "\" alt=\"\" />\n      </div>\n      <div class=\"progress-info\" v-if=\"order.id\">\n        <h5>{{order.special_id}}<br /><br />EN PROGRESO </h5>\n        <br />\n        <img src=\"" + __webpack_require__(33) + "\" alt=\"\" />\n        <div v-if=\"addressType == 'pickup'\">\n          <ul class=\"ac25-info-list ac25-w100\">\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> nombre </p>\n              <p class=\"ac25-info-list-content\"> {{ infoName}} </p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> telefono </p>\n              <p class=\"ac25-info-list-content\"> {{ infoPhone }} </p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> direccion </p>\n              <p class=\"ac25-info-list-content\"> {{order.pickupAddress_name}} </p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> Deparmento </p>\n              <p class=\"ac25-info-list-content\"> {{order.pickupAddress_apt ? order.pickupAddress_apt : 'N/A' }} </p>\n            </li>            \n          </ul>\n          <!-- end steps2 -->\n          <ul class=\"ac25-info-list ac25-w100 ac25-steps3\">\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> MTS3 </p>\n              <p class=\"ac25-info-list-content\">{{order.items_volume}}</p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> bultos </p>\n              <p class=\"ac25-info-list-content\">{{order.items_amount}}</p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> peso </p>\n              <p class=\"ac25-info-list-content\">n/a<!-- {{order.items_weight}} --></p>\n            </li>\n          </ul><!-- end steps3 -->\n        </div>\n        <div v-if=\"addressType == 'delivery'\">\n          <ul class=\"ac25-info-list ac25-w100\">\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> nombre </p>\n              <p class=\"ac25-info-list-content\"> {{ infoName }} </p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> telefono </p>\n              <p class=\"ac25-info-list-content\"> {{ infoPhone }} </p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> direccion </p>\n              <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_name}} </p>\n            </li>\n          </ul>\n          <!-- end info-list -->\n          <ul class=\"ac25-info-list ac25-w100 ac25-steps2\">\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> Deparmento </p>\n              <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_apt}} </p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> Comuna </p>\n              <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_county}} </p>\n            </li>\n          </ul>\n          <!-- end steps2 -->\n          <ul class=\"ac25-info-list ac25-w100 ac25-steps3\">\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> MTS3 </p>\n              <p class=\"ac25-info-list-content\">{{order.items_volume}}</p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> bultos </p>\n              <p class=\"ac25-info-list-content\">{{order.items_amount}}</p>\n            </li>\n            <li>\n              <p class=\"ac25-info-list-title white-color\"> peso </p>\n              <p class=\"ac25-info-list-content\">n/a<!-- {{order.items_weight}} --></p>\n            </li>\n          </ul><!-- end steps3 -->\n        </div>\n      </div>\n    </div>\n    <img class=\"ac25-top-right-hand ac25-loading\" src=\"" + __webpack_require__(34) + "\" v-link=\"'call'\" />\n  </div>\n  <!-- end red-loading-section -->\n  <footer class=\"ac25-newfoot\">\n    <a @click=\"aknowledge()\" class=\"ac25-full-black waves-effect waves-light\" v-if=\"order.id && show_acknowledge\">ACEPTAR</a>\n    <a @click=\"inPosition()\" class=\"ac25-full-black waves-effect waves-light\" v-if=\"order.id && show_in_position\">EN EL LUGAR</a>\n    <a v-link=\"'logout'\" class=\"ac25-full-black waves-effect waves-light\">CERRAR SESSION</a>\n  </footer>\n  <!-- end footer -->\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/loading.gif?2bc07f4e6f25ebc7fa55be51f32e9251";

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAvCAYAAABUiRJEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAhpJREFUeNrkmt1NwzAQx9OId9igYQKyAX1DPCDBBrABI3QEmIBuQCUeEG9hg3SDdAOYINwVuwohH3Z8ts/xSZbV5sP5/WOf7xwv6rpO5mY3H9c5VCvxs3i7ei+7zlvMCR6gH6HCsmwd2kPZgAjr2cEDdAbVFsrFyKk77BEgwtcs4EUXL6CcKl5yFCCNDDwRvQOHRpJGBi7tPthubwgu7TyNFBwtSyMFT4Ia89TgYFUaKfgepjr+8BbA0dbsvb0l8B289Zz1mLcE/g3llrXDswiOYW0l/zgZSBSw4EPgyVVfWhgYeNmb1UHDK+EMLrs8JB6DG2zmAP4HHhrGePdF4WafOG5kWhgq+BEeGkYn8KrjMZt5cYjgTYf3pHljTAsLeOizUMEP8OKtLyc0YCyAT3D55nODhiYL4Bucap7XFoADOGWQoywAF3DqCG9UAE7gEr5wIQA38AM8XFiIwMWaABzBm0EOxvEldeqY/H4yyjiCt8Nb3ShPVYCMI3hXYqMa3/syMvB/3l5kbA8xgHdOdUwFIAfvneeZCWAFfDDIYSKANfDRCM+zAFbBlcJbTwJYB1eO7R0L4ARcK7FxJIAzcO2szrIATsEnpbSWBHAOPjmfJxbAC7jRYgaRAN7AjeAJBPAKbgxvIIB3cBL4hgB3Akolx899g5PBCwFw+ycuVw0tiT0nrc/EPs3KzozGrme5joewW+qPm6b2I8AAPYVgfoaCtkcAAAAASUVORK5CYII="

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABwCAYAAACaardvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB0ZJREFUeNrsnf91mzoUxxWd/h82iDuBeROEDUonCJmg7gZ0A2eC4g3IBmSC4gmeM8HDE7io56pReKDfP3HuOTr5YYOtD9LVV1cXcXO5XJAH24ylgLJZeM8wlg5Kj1Zinxyeu4RCoN5JHvMFfp7H0gLsFuAnaTeWW3A2lmosOwWoIiOw91CGawZcAgRZsC/wMx/LrQLo+toAk1bbMN17DkzL+Nae46dzcCkl50Id4fVTEoQJYIOSj6W/zBv5f2Vw7mIs7cK5B3gdxV5M4Q4zlT/NgN2MZQfA+oVjurHUcN4p6G4BdHVtgJuxZMx7Kk4L59kJLgh7rt3M+3ZrBjyFXE1a3elibsPkvEufF22xMcjlMNB18DcZ6b9JKggkqSSeQf4NzGDYXsMgx5YMXMRSl5/zr3N+mjdo5im0WpsuYgpI1MVVFMQc6H1qgLHFzkB06eOkW29AI1Odu4OuTbTwBUoP/9sxcYoO3MAP5nwHeE9a5uCqVZOWxnMdc9ZAb1g6X1LlxnE0LYfWeKt43Blaa5N6NM0l4Azcxq1BLOKf1EOX2OG5hxmfSaB+JReWiQ9nAPIwee/jKuLCHvxQBWqiVIhtVKn6XN8++OoNfyBYN2A67f0AbFld1DAI/juWX/D7Hl5blfn2wTRIw1utKFDCi5whWzCddPDW7LagnfMPwO5mdLdMLOIDsKPp8mog4wjhrgoyjhTuaiDjiOCSCNqPtUHGEcEtQB8/rgkyjggujZw1a4KMI4OL1gYZRwh3VZBxpHBXAxk7gksAfjeEawq5QPyMej/mIPlvgNcazmu6KyMXiXNWEjlz0See+IYrC7nipAP0ISCnBFcGssjq2AGHhiuCLJOtGW3qFG9AI4MJWaJ/MBzQkOHAJxPbiFJFxASXhXxYg0yLES6xauZzReb9gojW5HiTCJKhUwaE+1PxGLreR4+nC6wdekse96qDc8mR2fWANpc7rDO4bTh16lxJOBxg+mtqqjnC9HtlnDrdu2rFODG4CKnlTpwZtyCq0xZch1PAscNFjuCy8QtngFOB2zmCi1wEhj4x3a61ADdjRugBtKrtLJ09qJetZbiyF09LRbQW1MLcCD04yvXNFu5CogEdHQV0mdwbYi0WsbEANxNUyJV0qyCAUzMXUhduxZyzY+RbbQq4sKBza8FxrccAS6cJN+Mcqx3qVAHMm0TI3JfsA25mALd30UiwBbVA/i+zy4mP9TPVz3hEb5uFbAXv/aKjMjCc/NVAipUOJgi61juCqy3jMBP84Ilv3hcvUTw2SEbMdOAaTTQ6TgB7J+iSdygu20GvcwH3ZDKTW1oleEDLt7QWLr+cQSsmXXm6J8UrhFh14T4xdciZAJJyuLLi3KRtIolC3Ai4AZXEbqDUaigNWvdyRjFxUwJUFxUbTUl0iuTOy1wDbiux0LqokzFnvUvkLmJ0DyJTHZCPIABEKyjbpbGKt3clBflzBrJL+RSL0SWmUnJ5igCuZQLusi35IcEW3DmCi5aidjIzuQbp5SDE2II7gMezZw240isariCfIur6FUcnH9DbtryqcA+yMs1FylJs+zhkEAEcJtuO6dZxWFIROl+uUfzwLqENNHRkHHc/N+xwoIjRPcgoAasuUAdwvmLAG41jttDoMluAS8ctPkVbhIw1rvDdiluwzIajR1BUZxnIqoCLlbfERqCTzyDzGmAhhOwD8D4hwAMAnIP8it4vPixtqPcOsuqWMgPSyxI/IAd5Xx4mJAUzjrDP8xAFf/7WWQUwuWK/DL5wipCXwMvO8j5jx+5hGiBqrgjuH2YqgG0sbqYMWRXuH9WlAvje0hdNEbIOXGI99th6U4WsC5dIuE4WsAv9mwJkXbjEaqI6QrXgFCCbwD1Q/S8DWGd6nDpkU7iVykzOR2pUTJCtwY0JcCyQrcKVBXzvsYIhIVuHKwO4CFDREJCdwJUBHGrTIZ+Qp3BJ0uCzDbjERE+lDbkj9QMDwAfcaaK5KLglFbyKfZN8ly152nJr9D5BpkfLydzSkcEUnkLgAvKcz527YfJkAjcVwLYhLw1o1Yx7rEzgygDuVgaZpxbolgY0daqbzGC1FgxEKxrkKv4XWWvWXRlpkF7qrclnClsw8UvHFbiLIHBlfXCD4jMVyMHgpgxYFnJQuLKAZW/uiw1ycLgqMq2OXMLtY4SrApgI7qeIIX9joEQDV0amTSUbAX0bMegXpB9edZIYozKTG1D8mTlRwdWZKreRuYpzwImLs1jEDv3/RutQcAtkdveT83w53WBPGXiGx8ZuyaD2PUa4JoAHqOAxMFxqe0Wt7i3T0yRcGQIyb3ubShKy1zRa03gwhexjpveKxNvbVGj+/glqT76VkM2HptK7zV3o5Bfw+7LbNNJgOc3p6MBXn3z7M9tPpd1ARe4tuoR95FN1py5ibkpNpdOrBX2apwzXBWDExAM2AFplEDyC5PoMXfyEEjdfD67OoGXn8DtNaOnBr/bgJ1fzwGpqvwUYAGHNhEBouHHrAAAAAElFTkSuQmCC"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(36)
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/StandByGrocer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _getters = __webpack_require__(29);

	var _actions = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TRIP_URL = _common.urls.micro_api + '/trip'; // <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-red-loading-section">
	//     <div class="container">
	//       <div class="ac25-loading-content">
	//         <h5>Preparado para operaciones en hub</h5>
	//         <hr />
	//
	//         <div style="margin-top:100px">
	//         <!-- quiero poner items en transito -->
	//           <center><a @click="goto('trip-transfer')" style="color:white;font-size: 30px;_border:1px solid white;padding:10px;width:90%">ENTREGAR CARGA</a> </center>
	//           <br />
	//           <!-- quiero poner items en hub -->
	//           <center><a @click="goto('trip-reception')" style="color:white;font-size: 30px;_border:1px solid white;padding:10px;width:90%">RECIBIR CARGA</a> </center>
	//         </div>
	//       </div>
	//     </div>
	//     <img class="ac25-top-right-hand ac25-loading" src="html/images/hand.png" v-link="'call'" />
	//   </div><!-- end red-loading-section -->
	//
	//   <footer class="ac25-newfoot">
	//     <a v-link="'logout'" class="ac25-full-black waves-effect waves-light">CERRAR SESSION</a>
	//   </footer><!-- end footer -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'StandBy',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  data: function data() {
	    return {};
	  },
	  vuex: {
	    getters: {
	      trip: _getters.getTrip,
	      counters: _getters.getCounters
	    },
	    actions: {
	      storeData: _actions.storeData
	    }
	  },
	  ready: function ready() {
	    console.info('StandByGrocer is ready ===================================');
	  },

	  methods: {
	    goto: function goto(operation_type) {
	      var _this = this;

	      var trip_id_input = prompt('Ingrese ID viaje:', this.trip && this.trip.id > 0 ? this.trip.id : '');
	      if (!trip_id_input || !$.isNumeric(trip_id_input)) {
	        return alert('Ingrese un ID numérico');
	      }

	      this.$http.get(TRIP_URL + '/' + trip_id_input + '/grocer-publish/' + operation_type + '/grocer').then(function (response) {

	        if (!response.data || !response.data.trip) {
	          return alert('Viaje no existe');
	        }

	        var trip = response.data.trip;
	        var items_remaining = response.data.items_remaining;

	        _this.storeData({
	          type: 'trip',
	          content: trip
	        });

	        _this.storeData({
	          type: 'trip_items_remaining_counter',
	          content: items_remaining.length
	        });

	        _this.storeData({
	          type: 'operation_type',
	          content: operation_type
	        });

	        console.info(operation_type, 'operation_type:');

	        _this.$route.router.go('/' + operation_type);
	      }, function (response) {
	        console.info(response, 'error callback');

	        var data = response.data;
	        if (data.status_code && data.status_code == 404) {
	          alert('Viaje no existe');
	        }
	      });
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-red-loading-section\">\n    <div class=\"container\">\n      <div class=\"ac25-loading-content\">\n        <h5>Preparado para operaciones en hub</h5>\n        <hr />\n\n        <div style=\"margin-top:100px\">\n        <!-- quiero poner items en transito -->\n          <center><a @click=\"goto('trip-transfer')\" style=\"color:white;font-size: 30px;_border:1px solid white;padding:10px;width:90%\">ENTREGAR CARGA</a> </center>\n          <br />\n          <!-- quiero poner items en hub -->\n          <center><a @click=\"goto('trip-reception')\" style=\"color:white;font-size: 30px;_border:1px solid white;padding:10px;width:90%\">RECIBIR CARGA</a> </center>\n        </div>\n      </div>\n    </div>\n    <img class=\"ac25-top-right-hand ac25-loading\" src=\"" + __webpack_require__(34) + "\" v-link=\"'call'\" />\n  </div><!-- end red-loading-section -->\n\n  <footer class=\"ac25-newfoot\">\n    <a v-link=\"'logout'\" class=\"ac25-full-black waves-effect waves-light\">CERRAR SESSION</a>\n  </footer><!-- end footer -->\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(39)
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Setup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//         <h4 class="ac25-top-red-text">CONFIGURACIÓN</h4>
	//
	//         <ul class="clearfix ac25-fleft ac25-mtop60 next">
	//           <form>
	//             <p>
	//               <label>Vehículo</label>
	//               <select v-model="db.vehicleSelected">
	//                 <option v-for="option in vehicleOptions" v-bind:value="option.id">
	//                   {{ option.name }}
	//                 </option>
	//               </select>
	//             </p>
	//             <p>
	//               <label>MAC impresora portátil</label>
	//               <input type="text" v-model="db.printerMAC" style="text-transform: uppercase;">
	//             </p>
	//             <p>
	//               <label>Teléfono móvil</label>
	//               <input type="text" v-model="db.phoneMobile">
	//             </p>
	//             <p>
	//               <label>Teléfono central</label>
	//               <input type="text" v-model="db.phoneCentral">
	//             </p>
	//             <p>
	//               <input class="filled-in" type="checkbox" id="grocer" v-model="grocer" />
	//               <label for="grocer">Bodeguero</label>
	//             </p>
	//           </form>
	//         </ul>
	//
	//         <div class="clearfix"></div>
	//       </div><!-- end content-inner-holder -->
	//     </div><!-- end container -->
	//
	//     <footer class="ac25-content-footer">
	//       <a @click="cancel()" class="ac25-half-black left waves-effect waves-light">cancelar</a>
	//       <a @click="save()" class="ac25-half-red right waves-effect waves-light">guardar</a>
	//     </footer><!-- end footer -->
	//
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>
	var ORDER_URL = _common.urls.micro_api + '/order';

	exports.default = {
	  name: 'Setup',
	  components: {},
	  data: function data() {
	    return {
	      vehicleOptions: [],
	      grocer: false,
	      db: {
	        vehicleSelected: '',
	        printerMAC: '',
	        phoneMobile: '',
	        phoneCentral: ''
	      }
	    };
	  },
	  ready: function ready() {
	    console.info('Setup is ready ===================================');
	    this.load();
	  },
	  methods: {
	    load: function load() {
	      var _this = this;

	      var grocer = _ls2.default.get('grocer');
	      this.grocer = !!grocer;

	      var setup = _ls2.default.get('setup');

	      if (setup) {
	        this.db = setup;
	      }

	      this.$http.get(ORDER_URL + '/get-setup-data').then(function (response) {
	        console.info(response, 'success callback');

	        _this.vehicleOptions = response.data.vehicles;
	        $('select').show();
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    },

	    save: function save() {

	      var setup = this.db;
	      _ls2.default.save('setup', setup);

	      var grocer = !!this.grocer;
	      _ls2.default.save('grocer', grocer);

	      this.$route.router.go('/available');
	    },

	    cancel: function cancel() {
	      this.$route.router.go('/available');
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n        <h4 class=\"ac25-top-red-text\">CONFIGURACIÓN</h4>\n\n        <ul class=\"clearfix ac25-fleft ac25-mtop60 next\">\n          <form>\n            <p>\n              <label>Vehículo</label>\n              <select v-model=\"db.vehicleSelected\">\n                <option v-for=\"option in vehicleOptions\" v-bind:value=\"option.id\">\n                  {{ option.name }}\n                </option>\n              </select>\n            </p>\n            <p>\n              <label>MAC impresora portátil</label>\n              <input type=\"text\" v-model=\"db.printerMAC\" style=\"text-transform: uppercase;\">\n            </p>\n            <p>\n              <label>Teléfono móvil</label>\n              <input type=\"text\" v-model=\"db.phoneMobile\">\n            </p>\n            <p>\n              <label>Teléfono central</label>\n              <input type=\"text\" v-model=\"db.phoneCentral\">\n            </p>\n            <p>\n              <input class=\"filled-in\" type=\"checkbox\" id=\"grocer\" v-model=\"grocer\" />\n              <label for=\"grocer\">Bodeguero</label>\n            </p>\n          </form>\n        </ul>\n\n        <div class=\"clearfix\"></div>\n      </div><!-- end content-inner-holder -->\n    </div><!-- end container -->\n\n    <footer class=\"ac25-content-footer\">\n      <a @click=\"cancel()\" class=\"ac25-half-black left waves-effect waves-light\">cancelar</a>\n      <a @click=\"save()\" class=\"ac25-half-red right waves-effect waves-light\">guardar</a>\n    </footer><!-- end footer -->\n\n  </div><!-- end content-global -->\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(42)
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/IframeExternal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _director = __webpack_require__(6);

	var _director2 = _interopRequireDefault(_director);

	var _common = __webpack_require__(7);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <iframe id="opl_iframe" style="width:100%;height:100%"></iframe>
	// </template>
	//
	// <script>
	var MICRO_API_URL = _common.urls.micro_api;
	var PASSPORT_WEBSITE_LOGIN_URL = _common.urls.passport_website + '?continue=' + _common.urls.passport_api + '/auth/{phonegapid}/phonegap-logged-in&client_id=1e54d678ffef7a44c9ad676c9a578acc';

	exports.default = {
	  name: 'IframeExternal',
	  ready: function ready() {
	    console.info('IframeExternal is ready ===================================');

	    var url = '';
	    var url_action = this.$route.params.url;
	    var phonegapid = _ls2.default.get('phonegapid');

	    switch (url_action) {
	      case 'go-passport':
	        url = PASSPORT_WEBSITE_LOGIN_URL.replace(/{phonegapid}/, phonegapid);
	        console.info(url, 'going to url, see ya');
	        break;
	    }

	    var $opl_iframe = $('#opl_iframe');
	    $opl_iframe.prop('src', url);
	  }
	};
	// </script>
	//

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "\n  <iframe id=\"opl_iframe\" style=\"width:100%;height:100%\"></iframe>\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(45)
	__vue_template__ = __webpack_require__(62)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/EventPickup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(7);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _NotificationIcon = __webpack_require__(46);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(50);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(58);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder">
	//
	//         <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//
	//         <img class="ac25-page-top-logo" src="html/images/pickup.png" />
	//         <p class="ac25-order-number-info">
	//           <span>orden {{order.special_id_pickup}}</span>
	//           <notification-icon></notification-icon>
	//         </p>
	//
	//         <ul class="ac25-info-list ac25-w100">
	//           <li>
	//             <p class="ac25-info-list-title"> nombre </p>
	//             <p class="ac25-info-list-content"> {{ infoName }}  </p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> telefono </p>
	//             <p class="ac25-info-list-content"> {{ infoPhone }} </p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> direccion </p>
	//             <p class="ac25-info-list-content"> {{order.pickupAddress_name}} </p>
	//           </li>
	//         </ul><!-- end info-list -->
	//
	//         <ul class="ac25-info-list ac25-w100 ac25-steps2">
	//           <li>
	//             <p class="ac25-info-list-title"> Deparmento </p>
	//             <p class="ac25-info-list-content"> {{order.pickupAddress_apt}} </p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> Comuna </p>
	//             <p class="ac25-info-list-content"> {{order.pickupAddress_county}} </p>
	//           </li>
	//         </ul><!-- end steps2 -->
	//
	//         <ul class="ac25-info-list ac25-w100 ac25-steps3">
	//           <li>
	//             <p class="ac25-info-list-title"> MTS3 </p>
	//             <p class="ac25-info-list-content">{{order.items_volume}}</p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> bultos </p>
	//             <p class="ac25-info-list-content">{{order.items_amount}}</p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> peso </p>
	//             <p class="ac25-info-list-content">n/a<!-- {{order.items_weight}} --></p>
	//           </li>
	//         </ul><!-- end steps3 -->
	//       </div><!-- end content-inner-holder -->
	//     </div><!-- end container -->
	//     <footer class="ac25-content-footer">
	//       <button-print></button-print>
	//       <button-scan></button-scan>
	//       <div class="clearfix"></div>
	// <!--       <a class="ac25-half-black ac25-half-border-right left waves-effect waves-light" v-if="counters.items_to_scan_remaining > 0">&nbsp;</a>
	//       <a v-link="'load-vehicle'" class="ac25-half-black ac25-half-border-right left waves-effect waves-light" v-if="counters.items_to_scan_remaining <= 0">cargar</a> -->
	//       <a v-link="'load-vehicle'" class="ac25-half-black ac25-half-border-right left waves-effect waves-light">cargar</a>
	//       <a v-link="'payment'" class="ac25-half-red right waves-effect waves-light">pagos</a>
	//     </footer><!-- end footer -->
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>
	var ORDER_URL = _common.urls.micro_api + '/order';

	exports.default = {
	  name: 'EventPickup',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    NotificationIcon: _NotificationIcon2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      counters: _getters.getCounters
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  computed: {
	    infoName: function infoName() {
	      var name = this.order['pickupAddress_forperson'];
	      return name === '-' ? this.order.customer.name : name;
	    },
	    infoPhone: function infoPhone() {
	      var phone = this.order['pickupAddress_forperson_phone'];
	      return phone === '-' ? this.order.customer.phone : phone;
	    }
	  },
	  methods: {},
	  ready: function ready() {
	    console.info('=================================== EventPickup is ready with this order: ', this.order.id);
	    console.info('order', this.order, 'counters', this.counters.items_to_scan_remaining);
	  }
	};
	// </script>
	//

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(47)
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/NotificationIcon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <a v-if="notification" @click="popup()"><img class="" src="../html/images/info.png" /></a>
	// </template>
	//
	// <script>
	// import { pubnub } from '../../libs/global'

	exports.default = {
	  name: 'NotificationIcon',
	  data: function data() {
	    return {
	      notification: null
	    };
	  },

	  methods: {
	    popup: function popup() {
	      var comment = this.notification.comment;
	      alert(comment);
	    },

	    update: function update() {
	      this.notification = 'read shipment comment pls';
	    }
	  },
	  created: function created() {
	    // var that = this;
	    // pubnub.subscribe( {
	    //   channel: 'notifications-opl',
	    //   message: function( message ) {
	    //     console.info( message );
	    //     that.notification = message
	    //   }
	    // } );
	  },
	  ready: function ready() {
	    console.info('NotificationIcon is ready ===================================');
	  }
	};
	// </script>

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<a v-if=\"notification\" @click=\"popup()\"><img class=\"\" src=\"" + __webpack_require__(49) + "\" /></a>\n";

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/9JREFUeNrUmk1oE0EUx1+CiGAbgxexH7SVkt5s2vp5qQu2IEKxYKvGqkSvIuaiiKAExK9be/DjULVSsR4qpCJ+YGvTgl/Q6urJItqI1ra3NK1UEFznxdl1djPJbnY36ebBI5l8zP7m7ZuZl//EJUkS2Gkul8tLHvyal2PkOjFbr2MVnIAK5KGVwm7T+fh74iLxKPEIuXbc9IURPFsnVkk8jJHELix4hLhghiGriNM0QODjmT7XtnsHeDwrlPbNWxG9rkewX8IStT1VCDSmQw/xVezrVVXr4EBgMzSsB9jin4A1JW+531+YL4WJT/Uw9MIDg8Pf4NngKO9jXXQAcVtShQKrbnNzU6MUuReQ5qdKJSkBWftYtEU6criVlz44B/y6TDrAXtqR0jGJsNTb3WEKNt0ASGpp4eN68FlBY4RmPtbbBs361a4OXvQFM+Aq6DOnAzkB1kYf76iRyBvK6XxAyz4xtp0H79UFp5vJkkCz8Nr1PiM4zes4m9P5hpYdFwANfGsm8DC7euRqIhr10LF2FjzGsro1u2JIbp8IbU27mehZ/8B+2LlHgJPhvbCQKDNdjpw6+jm5wVGrIIzBlA2IjTZuLlYi5fP5lEjduNZh5zIZS4k4MWU0h/aVW6oY6+qqledla39b6utgm6p8qaDV6L9ahTSwJH0nv0u2cSgqnjJ9senvG+DxSA14iiRo23XXcu199lIAzl3oU+oZwhxKSROcEEs5IXn+/GHqJF1GRyHIw2moXQ5Os411L7Xp4pVzXPmptck/4zhwTFus8RnzyxFXamyfb8j670EPUzYn7IEvKylWgbtJ2CuhAMxXrUrhZKoo4GSLh0IxNxSouWlRlbTh6IfCASdroig3Jie/OBZ0evZP5lSZ/VHvSPCp6UW2GXUzukbSXos1jgTXaDMxGVxJl3EHpvn42xa2OYc6pAyulGB3+t44DhxFJMYiSo6TEWBjTp6gA48CjgK/3v1Kld/ayakk0YOni46BxiAyqx2mSY8WPMxOhOHR9iWHRr3xSrfqd0FnynJIhffbcvti52zyi0tpvf0CK47OseA83duypsL2YUXV0sgTYT1BKMx+ARXZfIOjAqxRs0SjEpxoFd6sIzRHvfUbBVcpWvmCTwMdzFat9WvhUePIo1KbFtqIsJ8CjxFBUdLOKF8+z9XGg6ZPJJiVRtR2jCuOFW0RgfEOcqIc14M2BM7kfCfvyA8VXcx/o4NAjQQHzQE2fP5j5rhQoAOo5b3f3NQI5eWroaZ6JRQX/X99TPwJicQv6L//JF3Xyc2FsIRzfUAbpMWOZNFjdN/w5vSAlnMHKukgBAPH4bJ9ZY7EI6avbeefEGgqcf+EQF20dH7P2F8BBgDi96xrflkLdwAAAABJRU5ErkJggg=="

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(51)
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ButtonPrint.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(52);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _defineProperty3.default)({
	  name: 'ButtonPrint',
	  ready: function ready() {},

	  data: function data() {
	    return {
	      grocer: false
	    };
	  }
	}, 'ready', function ready() {
	  var grocer = _ls2.default.get('grocer');
	  this.grocer = grocer;

	  console.info('ButtonPrint is ready for ' + (grocer ? 'Grocer' : 'OPL') + ' ===================================');
	});
	// </script>
	//
	// <template>
	// 	<a v-if="!grocer" v-link="'print'" class="ac25-half-red ac25-half-border-right left waves-effect waves-light">
	// 		<img src="../html/images/print-big.png" alt="" />
	// 		<p class="ac25-no-margin">imprimir</p>
	// 	</a>
	//   <a v-if="grocer" v-link="'print'" class="ac25-half-red ac25-half-border-right left waves-effect waves-light">
	//     <img src="../html/images/print-big.png" alt="" />
	//     <p class="ac25-no-margin">imprimir</p>
	//   </a>
	// </template>
	//
	// <script>

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(53);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(55);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<a v-if=\"!grocer\" v-link=\"'print'\" class=\"ac25-half-red ac25-half-border-right left waves-effect waves-light\">\n\t\t<img src=\"" + __webpack_require__(57) + "\" alt=\"\" />\n\t\t<p class=\"ac25-no-margin\">imprimir</p>\n\t</a>\n  <a v-if=\"grocer\" v-link=\"'print'\" class=\"ac25-half-red ac25-half-border-right left waves-effect waves-light\">\n    <img src=\"" + __webpack_require__(57) + "\" alt=\"\" />\n    <p class=\"ac25-no-margin\">imprimir</p>\n  </a>\n";

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAYAAAAdp2cRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/FJREFUeNrsnf9x2jAUgB++/B82qDcIG8TZwJ2g7gTJBmWDZoO4GzCCswHdgGxAJqBWEXccZwK20a/n77vTXeASIPrQ05MsybPdbieOqdpStmUu8bJuy8vR44V9LlnuHL62Edm05SHBenltS21LkmRIPcubjTaIPfnGpyw1ebmuxJaihyTluhBbtOVedJGc3ExApVwXYnPkIha5hGLkIha5iNUq9y6Cz/BHhk/dmRmuxQ0+w2akXJHIph9jEDv2G7+KpOVGJZdQrDQsI1apXMQqlYtYpXIRq1QuYpXKRaxSuYhVKhexSuUiVqlcxHazTV0uYrtZpd5yEXte7EfKchF7PhT76AudyUXseZq2PLXlM0W5d/i7KDeX/QL40v78YGX32bQ1l693RrzZKLFCrN+wXEtiG7QIxUpBLGIhJehj3VL1yHhPd9UjNmJMFv1IKAbEAmIRC3qzYpPBLWTcfpicah1cb8sRf9/Y8p+ZPcDLiKwlzEkvM8WyjKhfHt/PXGo0c9rrQygOJRVuyzfbavPMGkaqHsyJPctMbrO/FOKiiGHmaYeH24dkhjuMYwGxEJy+fezpWp9HqjB9sd+le7GVOcL2mapMNxSvej4PifexDdWYrti/VJVOsV9NOc6pRp2hmCnJxMXWsj8WPj9qqebxkmpMe7jzwxaYSCgGxAJiAbGAWMQCYgGxgFhALCAWsYBYQCz4os9lu/crfieX/Y4vSESsWfNUUF3RsJQL+26vDcVb6pI+FhLrY48xq/+vXcRWS2Inh3piYevxWgofYs2HunbfToPDTubicO8ToZg+1hmVTc52ispWAi/LDS3W9Bvm2PR7ZQ3m3g5HqimL1UyJWL0J0iTFrgWciS0Q64xNoPf9CN1izW54rXtvPwNmxpvQB3htbcSoPPVHufg5nbWR/WxbqBYbxT0BjNxXAXUTFIBYQOzEieW+O76SGl85wzoGsSZzC3l0nsketR2BcBjqBEsKMwl7vbQUnedamIsAvyXcRYBNJn7uR34O7UcJvQR63zqzfUIZUK5mQtxr4aeJwofkaW2Tl0K65443OBqEq+lS4+N0nffaRt+mKytuPPe52r8wrk6GreXCAsHQ49hartthkGprDZYVxzCOLWwSNe94PlU2trVupyxWzgzoG4FR41hALCAWEDtR5qmL5Wj5bpxOp/rIip8v/BNTzX6dziMf7vg8ZJzGkQR+mfkQy61BIxdL8kRWDFMQy7VbpWLZTOWXd19iuQOlX3oPCYdmxYdW+0CdO8eseMyl5yXAMclTZd8U3FLJgOu6Y8SaFrsQvSsgQmMS1Keh3d6YUHyMEVxK90oI6MfWyqzHvMg/AQYADYXlUoEuObwAAAAASUVORK5CYII="

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(59)
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ButtonScan.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getters = __webpack_require__(29);

	exports.default = {
	  name: 'ButtonScan',
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      counters: _getters.getCounters
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  ready: function ready() {
	    console.info('ButtonScan is ready for pickup/delivery ===================================');
	  }
	};
	// </script>
	//
	// <template>
	//       <a class="ac25-half-black  right waves-effect waves-light">  
	//       <img src="../html/images/barcode-big-2.png" />
	//       <p class="ac25-no-margin">escaneo deshabilitado</p>  
	//       </a>
	// <!--   <a v-if="counters.items_to_scan_remaining > 0" v-link="'scan'" class="ac25-half-black  right waves-effect waves-light">
	//       <img src="../html/images/barcode-big-2.png" />
	//       <p class="ac25-no-margin">escanear ({{counters.items_to_scan_remaining}})</p>
	//   </a>
	//   <a v-if="counters.items_to_scan_remaining <= 0" class="ac25-half-black  right waves-effect waves-light" style="cursor:default">
	//       <img src="../html/images/barcode-big-2.png" />
	//       <p class="ac25-no-margin">escaneo listo</p>
	//   </a> -->
	// </template>
	//
	// <script>

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n      <a class=\"ac25-half-black  right waves-effect waves-light\">  \n      <img src=\"" + __webpack_require__(61) + "\" />\n      <p class=\"ac25-no-margin\">escaneo deshabilitado</p>  \n      </a>\n<!--   <a v-if=\"counters.items_to_scan_remaining > 0\" v-link=\"'scan'\" class=\"ac25-half-black  right waves-effect waves-light\">\n      <img src=\"" + __webpack_require__(61) + "\" />\n      <p class=\"ac25-no-margin\">escanear ({{counters.items_to_scan_remaining}})</p>\n  </a>\n  <a v-if=\"counters.items_to_scan_remaining <= 0\" class=\"ac25-half-black  right waves-effect waves-light\" style=\"cursor:default\">\n      <img src=\"" + __webpack_require__(61) + "\" />\n      <p class=\"ac25-no-margin\">escaneo listo</p>\n  </a> -->\n";

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADkCAIAAADo93TkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADkRJREFUeNrsnXtQlWUex0WEc0REgbyL0BHEFDFELG6ilqm5BprXykyYFs1L5Yo6pm212uZgFppm7UoqFnnbNDXxtpF5QczKpGzUg9xKwfWCtQoc5OyZ/tmZ53mLZ857OIB8PvOMf3znub9fzjz+5rm4WK3WZgCNhOZMAeBXAPwK+JUpAPwKgF8BvzIFgF8B8CvgV6YA8CsAfgX8yhQAfgXAr4BfmQLArwD4FfArUwD4FQC/An5lCgC/AuBXwK9MAeBXgDqhRV1UumXz9n37DzWcQRqNxtWrVwji6W/zVq5aI4g9ggLnL5hTX2N88cVZISH32Ve2vPzmnDkLGpS3khKnREU/4OBKrXVAYuL03365G0pyae4hdzJjY6acMzQssh7HuDlzm91zbjZfbFBzbktpaWscbi3WA8D6FQC/AuBXwK8AjSiepUnv0P4P9A93QkPp6e+pZOvTJyQxMVkQq6qqEkZPVCluNBrl4jrpFdLLsRW6G72femK8E+Z81959Vy4VOMNGTotn2USrU1CMZ2mSmpqmGKyJT5hgbUhoxrP8Tb2c03pk1BDiWQCsXwG/AuBXAPwKxLPsZv78l3Nyc+0u/v7ad4KDAx3Yn7i42JSUhYJ4Ijf38BcHVYovXZK6/5DSpq05z8+KTxhZL3O+c8eeFWmr7C4+dnTCrNnTmqhfbWY9nH3A7uKXL5c61q8REWG2JIjz5i1W9OvJU6cUhzNq5KP1NefnL5j1zHmgycR6AAC/An4FwK8A+BXuOlowBbUybtyY9u3bCWJoSG89db61ak3GRx8LYtqbywYNjhXE6JiHf711SxBPf30Mv4I2mkEunfxcdP7nIlEsKy2Tcx4/nmOtuc1XYD0A+BUAvwLgV8CvAMQHnMbGDZkvv7ZEEAfFxqxfL55h/OvLSzZ8mCmIA6OjMjZ+KIjL3nw77/RJ5ha/Op6yK1cK838UxIvd/OScJT/9LOd0GxT31GTxeO0/0tczsawHAL8C4FcA/Ar4FYD4wB/w/tp3Ll8utbv4AwMcfCHX1KmTIyLEOrdv39HKq6MgDh86JDv7sCCuXLlaznn713I9XTpy+JClurqux6iOyRTQdP0aHBzo2AODOvH19Y6LixbEPXuybv1yRRDv1NTIOd96e5WcUycOfwJAc4ysBwDwK+BXAPwKgF8BvzqH9PT3XFxcnZAU+7Mp42O5bN9+UQ4feErKQqv1jpBCw1T/19/c1dPuMRbm/+icOT9+LJvfVwD8CvgVAL8C4FdozNTJ/gGj0ejS3NhwBtnSw9PhdVZWVhYWFguiiw1p4NXVFjlntUO3sNhwdXVtUHNuw+BuaBx+Xb16hS3d3X/oWXs/DQj4VBATE5Nr7vxXEOMGDw8ICKjr/vj7+8lNsx4AwK8A+BXwKwB+BajH+MDpb/POnMlTyRkRER7cM0gQD+7//HKp0qGux+JHenm1FsRNGeK91e5ubuMnPi6I3t7e/qaegujr7S0XN+eb9czGvf7+hVJDRQUF1poKQTxx8lSVxSKIPXoGV1RU1NpKRWXVti3/ksc48k/DnGCj7M+/LCn5SRDjBsX6+XVxcEvWOiAxcfpvv9y1p5SURXLx0LBIxeLZ2Ufk4nI2l+Yeij1PTU1TbFoz2Qau2JD6GM3miyoV2rLJZf1NvaxOITJqiNx6WtoahzfEegBYvwLgVwD8CvgVoBHFs9Q5k5e3fPlKQfzP1WtyzoDu93l5eYnhJ18fOad8NMrg5ia3oknOiVxZdDe07dkrWKV4VVWV3FBcXKzDn++SW6m4XSEP3NfbW3HgOvHx8ZFb9+vaxfEt1W88Sz1lbMy0uz8FBUV6mh44aJhiQ/EJExwes9OMZ2nF7FrJ2WyT5vAPoZkWL/6bcwJnrAeA9SsAfgXAr4BfAe7KeJZOXl+aeqP8Zq3ZqqstAwcNFcRr12/Iz7i5G9o+GBkhiPf4+sybt1ilPwaDu9xQWVmZXPySjlvFbcittGjRQm5Fc2eZ5hiLiksKzGfFKFU7v5DePVX6U1xcIrc+aeK4sH6hxLP+j0frDiplNfdnacZ6QsMi5ZwpKYv07M8aOGiYnoHr2Z+lmdTHGJ8wgf1ZAKxfAb8C4FcA/ArEs+wmJjry6rVrKjm/PJpz7Yp4t1RYeGQ3v66C2KNHkGLr8QnjBMXFxSUp6TkxBCOdj7NRWFQi5/xO7eykjRNfnZKLd+zQXu7SgUPZ8ktdUTGD291zjyC2bdtGpWlbNrmV0rIrOcey7f6OZ74/Kw9HkwsXC5xkWGu9ohnrSU1NUyyuGc9y+P4snUl9f9bmzG2Ond66iNmpJ+JZwPoVAL8C4FfArwBNPJ6lztjRCYEmkyBGRITrqTNh9EQ5npWYmCzHsw7s361SYSe/7iOGPiyHrr7/7iu7O/nE+LH9w+4XxC3bP/lo81ZBTF/3ro+Pd61j1P66LVrIA+8RFCjnjBsYc/Vqst3D2bV335VLTglpWRszDt+fpX7eUOcdYZp09g+2+7yhZuL+LADWrwD4FfArAH4FaGjxrKVLUvcfOiSISc9MeXrKJJXizzyTfLGwUCo+2Wis/VG/6mpL3ODhgujp6ZmSslAQz+TlZe39VKU/Y0bH+/r6quR8dMQjsjhjxpy8H34QxMvFGlvGnpyc5O7uJohyzzXp3KmjLO7csWdF2ipBfHDAgGXLXrP7Owb3CIqJjhLE2JjoRhzPUr9bShN/Uy/F++AV92dpxno074NXvz9LHfX7szSTnqZ1jlHzO3J/FgDrV8CvAPgVAL8C8SxFnkt+Vg55fHnkaN9+USrFiwoKFBuSK6yurtasUM6peRV9zvGTip3UZPqzSdOmJ9ldfNFLr7SRjhzK/fH08Dh65KDdraiP8cKFfFl8f92Gnbs/E8RXFi0YPeaxxhrPUj9vqJ4U3zes31SP98HXxRuOnDcEYP0K+BUAvwLgVyCepYeZM//yye49gvjYiOEzkp9VCoe9MPdqaZEgPj7hKYPRIIibM7fY3cn9B/+9bt1aQQy9f8BL8+cKYvqGjH1ZuwRx2PBRiVMmC2JYuMbjhmlvLisrLRPEP898sfyquEUrKnaoq5trrWN0k/Zw2di9Kyt51guCWH69XM6pc4yvLH3jbN7XzrBRo96fVY97lzTPG2reB6+O5nlDPWOsizOVmmPkvCEA61fArwD4FQC/AvEshxMd8/Dx4zmCuHrV28OGi5dY9e4zoOLWVfFP0NXT7qbD+4ebzeKbgKtWrZXrjI8fJef09fWR6xwxcsy+rP1iPOut5bNmT7P/Z0ZxjNYah3+d9PT0D9ZvFMSUuXM2ZawTxE5apx3vQr/+euuWtea2ILZu7WkyBUifrbnWN7ptd9NVFovcipubm1yn1WqVc2pyS2s4lVVVeqZIzxh1Y7HWWATJYHBXnA3WA8D6FQC/AuBXwK8ADRNrU6V+31LTfBPP4ftduI8IgPUAAH4F/AqAXwHUqJP9A+XlN69qXexTX7i6uvr7+wmiu7ubS/OWgujp4SEXb2k0yDmtNdXNmlmkvLY6W0g5q5o1u6PSTy9Pz0saDVXY/qm1bE2NtaBAvH+8ZUuj4qaTqipLfn6BILZt20Z+qs7Do6U8G5WVVXJxW9O2DjSCeJb6W2rOSZrvxdXFGDXPNmneuaQZz9LEpXkrlXiW2XxRzx3imik+YQLvxQGwfgX8CoBfAfArEM9yLO5G706dOzihocL8H53QStcunf1NPQXRYrFsyvhYEK9dv6FY5+5dWTduSJnVzmC1bGmU+xPU3aT6u+Xayk8K+XXz85Nz5p44de7ceUH08mott96+XTvHz7vT4lk67+pRxznxLPW9S+zPIp4FrF8B8CsAfgX8CkA864/ZuWPP+Qtmu4tPnTrZ19fbzrBXYfHWrZ+o5AwK7B6fMNLuTrbrFNCpYwcpVNRFz7wtX77S7rI5J3Jl8XJpmVxnaEjvR4Y/pFLn19+clouPGvVocHDgXRXPcs57cZrxLJ13T9fFHeLq8SznJM39WeoxO/ZnAetXAPwKgF8BvwIQz2qaRISHX5c2WJWVlc2bt1ileN+Q3oH3BqjkPJx9wO5OuhvaPhgZIYhFxSUF5rP4tWnx0qIUWxLEuMHDN2z4p0rxzZlbxk98XCWni4ur3Z3s2Sv4i8+zBNH2F5Wa2gj8ynoAWL8C4FcA/Ar4FYD4gGPp0SMoPmGcSk6DwT0p6TlBjImOnJo4WRA/SM84cvS4IJ4358t1hoVHdvPrKoi7P8vad+CQIK5Y8UabNl6CqNjz0rIrOceyBbGwqEQeTkVlhVyn0WiUc575vl7DCE12f5Y6mvfB69y7pH7e0Gy+6Ng779X3oOm8B439WcD6FQC/AuBXwK8AxLMUGTs6IdBksru4njfMc0+cev2NVJWc6ici40eN9PXxUWo992TC6ImCeLnkkmJDctnfi2fhV0cya/a0+mr63LnzO3dsdWydUxMny0FZTfr2i/rumxN2N+TwnrMeAMCvgF8B8CsAfoWmjfPiA7v27ouKfqgxzpEpKOTJieLepfB+98s5X33l7/sOHFSp8wetXU6Tnng6sHt3QZyamGyxVAvi4sWvCsrNm7+kpS0XxFZe7ec8P0OlP8XFJfLX6dq1i9yQJhs/zHTONfxN931Dp92fpZ42Z25zwvuGOveg8b4hAOtXwK8A+BUAvwLxLEWSEqf07dun4QzS4G6QxbhBsWlp76gUD5JiTL/H7JnThwyOs7uf0bFRsvju6pWVVZW1lu3UqaM8HPUXBidNHNe1a2dBDOndS7H4wgVz8y+OFcQRI4Y5/FO6/HZAD4D1AAB+BfwKgF8B8CvgVwD8CoBfAb8C4FcA/Ar4FQC/AuBXwK8A+BUAvwJ+BcCvAPgV8CsAfgXAr4BfAfArAH6Fpsz/BBgAPmM3ulgoErMAAAAASUVORK5CYII="

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder\">\n\n        <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n\n        <img class=\"ac25-page-top-logo\" src=\"" + __webpack_require__(64) + "\" />\n        <p class=\"ac25-order-number-info\">\n          <span>orden {{order.special_id_pickup}}</span>\n          <notification-icon></notification-icon>\n        </p>\n\n        <ul class=\"ac25-info-list ac25-w100\">\n          <li>\n            <p class=\"ac25-info-list-title\"> nombre </p>\n            <p class=\"ac25-info-list-content\"> {{ infoName }}  </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> telefono </p>\n            <p class=\"ac25-info-list-content\"> {{ infoPhone }} </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> direccion </p>\n            <p class=\"ac25-info-list-content\"> {{order.pickupAddress_name}} </p>\n          </li>\n        </ul><!-- end info-list -->\n\n        <ul class=\"ac25-info-list ac25-w100 ac25-steps2\">\n          <li>\n            <p class=\"ac25-info-list-title\"> Deparmento </p>\n            <p class=\"ac25-info-list-content\"> {{order.pickupAddress_apt}} </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> Comuna </p>\n            <p class=\"ac25-info-list-content\"> {{order.pickupAddress_county}} </p>\n          </li>\n        </ul><!-- end steps2 -->\n\n        <ul class=\"ac25-info-list ac25-w100 ac25-steps3\">\n          <li>\n            <p class=\"ac25-info-list-title\"> MTS3 </p>\n            <p class=\"ac25-info-list-content\">{{order.items_volume}}</p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> bultos </p>\n            <p class=\"ac25-info-list-content\">{{order.items_amount}}</p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> peso </p>\n            <p class=\"ac25-info-list-content\">n/a<!-- {{order.items_weight}} --></p>\n          </li>\n        </ul><!-- end steps3 -->\n      </div><!-- end content-inner-holder -->\n    </div><!-- end container -->\n    <footer class=\"ac25-content-footer\">\n      <button-print></button-print>\n      <button-scan></button-scan>\n      <div class=\"clearfix\"></div>\n<!--       <a class=\"ac25-half-black ac25-half-border-right left waves-effect waves-light\" v-if=\"counters.items_to_scan_remaining > 0\">&nbsp;</a>\n      <a v-link=\"'load-vehicle'\" class=\"ac25-half-black ac25-half-border-right left waves-effect waves-light\" v-if=\"counters.items_to_scan_remaining <= 0\">cargar</a> -->\n      <a v-link=\"'load-vehicle'\" class=\"ac25-half-black ac25-half-border-right left waves-effect waves-light\">cargar</a>\n      <a v-link=\"'payment'\" class=\"ac25-half-red right waves-effect waves-light\">pagos</a>\n    </footer><!-- end footer -->\n  </div><!-- end content-global -->\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABwCAYAAACaardvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1JJREFUeNrsnf1x6zYMwBld/4/fBM+dwNog6gbqBFEmeO4GzgbeoOoG6gRVNnAmqDxB7QlcsoYSWaEogp+gat7xchdbEv0TBAIgQD1cLhfmsz08PKz4n2LQNxNffee97Tsf14ktoD34AMyhrvmfkvdKAXSuCeA17w0fY5csYQHYVedtDVAujrs459rlWEN1JxIMamDH+w9NyRw//itNSX/l4939rySYt5z3TiF9B9634nua59rCMarz5alIsC3cyuSxBlXST3orA3UjnoBi0YAVcJshWHj8K4A1J+niO6UEdDtxTLVkwDlI0lCqSokEngwmtRPo9NXoho6vly9dRfSQb/QiwHFhPYhzbyXX61LRw9ZWBLcg/pvkhGMA9m8zYxG8AaDets1BjTzNHFMOrnFKxhFxaAPnCnXwRbdOnKNU6NukrIe+Z47v16NE8n7mFxKTUaNxs4XXJiyLX+DYYVvfPblby2Irkc4pS0JI534soSNdXqboybk/4RXycMIrZsyzcW9Hx1cpmGPBAI9gby2sh2ShOo9FKCJqfyusgrk4xBkclqTDlplH3S7UwssI2Cvv38RENujC+vgGn50H3y0WERP2roOuOvQwFXOQuMVNiuZYcBVxb55VxL1d20/R1qquk2DvPByWsgYXXYI52IL3FiyMv6D/w/9Xw8rIHbAF3AqAygI7z8LJAMm+AzaE+/vM14Q9fIAI3R2wY7jDgFG7FMgZMbiLg5wRhLsoyBlRuIuBnBGCKxJSflscZE+xB2x48iNWoTg+iVVkr/FgW7ga50kOMjm4S4NMEu6SIJOFuxTIvuD2GZVWcE0hs88szW3sm+AL7prJU1DRcDGQ2XV9r2HylepVMoBDw9WFPAH34/pJAI4F11LnS5NhyAGODdcB5JYsYCpwLSF3JAFTgzsYV5u8BBOGWxtIcEUK8MxjWEaE2xjArQfJiDVIf+MbejQPzQLuzgJuFXrcScGFsXWGcOsY+jkpuDA+zLgapL7OvQKmDhfGqFsWVoPrjJkMd95qNCyWeUKnmTYa3/lD1IWwa1nCc/QlI5hZXaxEFACghR+39iDBK6auZa4tzLjSi4owmDhkcHcsUCkAQJY5GXsbVedJpaEHMyW5qnqLtafB53Bjt/01DOH20bj1SPK/lPSaAMbYlbXsYhoua01wEhzDVRVSGk/kmLyIP6Gg8CTJ832aObYIlRrLvhZDqtp5MLZWcewGBNEo8eSkOSuXE5+VGsd/J5gSogu3bz9M8pczeOzPGibPVKsIQTt5gts3dHZRBo/8FKSjCi7c0Q0VunysQle+eYKLuYG3uWlQqP0ie7RFar/i+JLgo18qnkgbuEe4gea5aQoTp7YNGwaNwcpd5N51zpnZLizloJavYqOabBfBntrCJGpJJIFcAXfMMFAP3qlsj6KVq3BlrelcSKNaBACbFKdXCs9x1gvMJtRGPaGTnwc6GaN/D0T0M9bMehnEVlS2/oZz2aISsDUgY5yHLsHU6SHcjebkik/Atkz06HtBREVUSLVwwPxOH8v2un1FAbBm5NAI7tREnmmaclPqQstrIlaHLB7loyO1MGy1dY2GoSS3VKR3ZK7t2OeG0E2vxgwD9Y3L5D9sNs0+mXR/MwGqXe+bhjW5UrIgtgbH5KoomwngwvMNidk2hse0U5BRgA2jZykBPlvcGCnkzLP0UrMg5ppWSgC7bv141oKMnAT2KdvADoJBjUYs5mb9zndeWNAFT4dvUpA5GTX7LPedc0Q+S4ORFzZ+TUNyNcZXh2QHPUckvtzmaAQqPkkSskFW0TgdYIWZ5GyXh55nlp9IN5i8MC60WI7KM48WxGIgG8DFmWmwGcajo/EmBdkGrjAKskDqIUnIlnDfxA60sQCTh2wJ9yOukWleyFdyCUnIDuC+9DkUWSTpJQvZEdwaM8kVAX4XCciu4WrFIphZFkxyzggzW4ebrSKdu2gREG40yL7g6qxoxNgMLqi68KIWEI7GOpI6DAJZAlesNr9CzNca7qwOZvgFzmTUhUQttEj1WF0uFsXgRAB7gTyhc0vE7698FMGwJagLhc49OVMLCBWxJyDBziR5xlpoJTV41ht6zL3moSMmyWymIMfGWniCtyM07DOL3VxyNSU4JyTBxpLs0851sWdPlzLkmHB1J7km1YnPtxNhrSIcrCZHk+TYkotNwG4IQ95ThYsBnBMGfAOEElxsXkRNHTI1uFjAq8CxYZPeUYKLcpVnisaptO/RrAXDcOUYcoMI5YVoRwfn8AYXDRggCyl+JwD3HSbfF6pwtexgTzambb/NwTXbzzLITqwx17GcwDW0coJtcxt7sdDpNo6a4dWgewjH3CzZS4AHEmVOEyZc8JppZy+uhr0vhQQ9epgqXvk4d8jYb8luXyscJWjl9M3gsIeakOYnh5ZCZbRXDpGWObZIxC7/YjX2V0sb9QgmVJ4yXOcSLJHoEh7VUkN1HCF2K3RtyxbSvAIewe73h1yPPhIwheR3bIHtXwEGAOZ3pUEauI1PAAAAAElFTkSuQmCC"

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAA/CAYAAABzal1aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADc5JREFUeNrsXT9MI80VHxBVGoyUng1fkRKf/BWRUmAUqPEVnNLhayDdmeroMN1R4SuPhqU9FMVXn6VbpJQfiq/Px2eaKEUUTJGazPP3nnk8ZvaPvbu21/Okkf/szOzMvPeb92dmZxceHx+VI0fzTgsLC57+8PBnT+OiN26dS/zHfXmrrj/qEWUaK91O17HDUUFAVdIfbZ02xP/XIOsaZN2xwaWBVdUfFzHK9B1L5oe0XHg44QLffT2xFo3/gU7rhv8BbAFoNA2w/ljg0lRl37/bQKQHt2dhApQvoWoFtHfDGIFM8/C+kL+XtUZM2sa0ymbcJ2hTGRPwpq/bFcTsz9AMMvUH64a+/kenZZ1qQk5mXWs1BbBI7kmLQZ9bMaw5c/3kc+mB9PXHnk53epC9BIxtYFo2ZPmoU5MzDZnalGoY6Q46woVD5weG/o3q09cahnaAYP1VpzWdHnSeUoI2XqKp2x+hf2FloZ/fiGk6T9kyhl3LzEnjEZjugZNTE3km6QHHvWXoTwtBEskvxiug/+n0Rz62M2j++ThBEpXZOJxoLDQxbyDk81pU19Z5W1H3XGTf+SwWB1hlnNWOLYwCeofCQWVaKHAblvyrcB19Pz4Aw/rwvlKbQjsoMtMVbQwi2gjCGaDgJe2fsSySz76vW/KoEGDReOzxMWS+cdcCLJpxz/hY4fcelgnjV5v97uL4/0un38+4SwBjuIOyR4mPAwdLDScobiLydBbnhouiAiUZGQKsAJlPM/imFvIF/flKp9escV2mGd8x9fsa8mOZFZg5eEeZMHohQmsycbtsZuf2NMzKv2P33MR2kIC3hFbg/fsS1T8xPk1WljPMNI5Eh9gmSq9RcxE4qwxYFygYDzhur1jbDul/MrMZv4azNIy5GAvqzwa2X6EGg3b/Rqe/T7tJCP6RTr5OPZ0eeYqYxK65X4Xf/Yh78frhfuCftXSqPjMLUZDvmQo0ASwgc02YMm/1/77Fp6qBaSJMuy9o+vUtQnlMwoZlA4OmOzSYPKS5QKiaopytjSWczZdRmBbw/7hl64Z2kE+2jH3doQlI562LvHxcXkmfU4zHJvlGDFhVk58KbeC+sf7dQ7CHleEAjO0aTBGw6jhBLsfIvskDdLaIoK6zLMzIbzGb81bX6S8ZTK+NELMtwJlznQm5HxL4aAmVe2cDFst3zAIsLdaWS+YrAHh84RvwNlZZuZOQNvZRgM9E0CJWWWFK8D6Q8DdYfTVD3rIwbaOitE0mPFVbGQGsOtOizZAyXZ23jWbj6gz6U3GBBZopiJmvK+4Tt0kXoM1M4DqxFPCFefMgZ+0QE5KY1QqLsKGwf0fwllALcJu5x3wgn7WF5+sxJ/zBAgAl/AqT+RanrCmIscP62kOBHdj3MBZCuD1mJtuCKTTWXdR0A+2fILJK2vIuBr96ajapLoB1ZzDrjkWUcFySOKkKpVRfEkwGJkbduBrXNzMAN06ZdSb0z0ADWoTNxDsgzGiqenzWZqCMEy73hHaoJihrm4Du2DgGArgmcJXIz7EITAsnqeWwccQ8f9Hp3zgWPCrbVsWlqoiUluXalAbUsQlooxJFFsU9uLvkLQoAxJkNlxPOcl7cmVGYd11hNgViJh4IM1vn4SHTjREY84DaYCSTSAQx6sLcu7MENTZYVPBYJKrrI4KkFKJt+b3+wOqQZmUU1WyadMrp2dhYFn0vU7zfZYjp/iLC5iUAl2m2iPIVeJmwGZSbc23xewgyLciXzDdoqJfLCGRaejFM1j0xsz/gBOIlAJbHTLiB46v/M2plmAzQ/OX180V7PjG8sph/tRAr4J/Y9+9J+IUm53pERHZmSQOujppl3HW6fpw1Lg6u1QSz2zUKAAhK3RJJA0aV8FogwNO2MNdngtVCAbRp1AYLbhwbNCOp51VdR8Pka7DoGAGKm3E7EWVBUMvsWmxnmk0wHFwNFon1GeCHZiROKkOTETSlxWz9reAl8WuDmdGmsfBD/JWiAKyV5/2WhCnWF7+fOf7ITA6CC5yB28jMMppEO8i0HgoFB2Sg2OZfBGKD1XnN/BUjuBB4UObCEpzgAnpGOxOwnGnXRYNF2HwWlKCy1D8P+7dH/cP/Kf/HEM38jQGmbTF5aQKitjdg4Z2BiDQ2tLuLpmibTUQ19XK9kkdc2zhubaY962yCgkmmVsD9g5OJYv53/U8f9Of7GHk3LbOrjcAsqWOUy1NP6zNRtmyDhdhp7erQokECmxnFFlvD6AHb2DZo0aj+3TGgrKqItSHW1kE+3K3yTontWpiXrg3GhNbHEOiBCl8QpX5V2VjE6Y91DWzqhfj5diVYEK5G5KfQfTONR0ts7VhU5vUXE/XYTFvHUOSDhUknnFGoFcohjiDt2Khb1q5sDG8YHHr6DgLFdznINl6iadc2BAagf4cR/SNNsWoItJiI7rOKWiYsiNRk994j8xjHphoyjtQvT4xFnP54c/QoEU02tUxBrzXXnxWGbsPIttNampVRDBLRvQFoTTvtRT5rWBwFrxTRxmcr7XF2jccpG+fetv6giVmyjZm474sxMoxjPw44RL39IgAqSnPhulYAi8f6O0zIZ6SpaaFY/18T4xmpbGAXRlg7wMlzyaWZTmgqP2IKDNfpWp1/Z9f5/0lSI6wdi87tdDQHRGY0+eCXQutUM4kWunF3NAfUQJOP1v+e+eojroHBYnXbgcvRXBPs2ECfCnyvlmkHRxZrYA5cjuYFYD3FIrp42lN/1PMx4pDzuRzNHaEW+0WNeDaGA5cjR2Zggcby8WfJgcuRo/EA9YgBCyAIQsBOoWt2IE0JrsujASKSn4vPdV/egi1UFfwJnyuGbB2dbiCtdDtXMerkRwEf6TKnCdu0i22pGNp0T23B1NH13497fxwHvpXsSpd7k7Dd4/Y7VvkseDbFBAvG6/B0sHo67oDvzgDArSescw8WjeVCchYBjTh7E7cwAWNvkfGpMkzXCwKyj+1ZCcm6wtsDbdHpdMx774txAKE8mGKBmwqe5UQApG/qaataTQQy6BGeJAC7DANWmuBSBq0ghbnCfsP5gp81ww40s85TAhYIwSesOyl1xrw39O2DGIM3UhtOMU2EZ3kRbnt6iwEMX56hgUArp33fLMB1ajJFmFbhQvgJZkSdf1zh3kdgcYKZ9gpNvo6hLRWamfX1mzG15WemKUFQt3WdtzMkf7nzbAIA81XOz6nlts6Fs/ipZgww5SdhnnRSBNa9TVhEWzrjaiykz0JbHo0D1mmirHg2BQEOD/0s8JkaWd1ncQIMu0EfZ2jXa+atjQisNYM5tp00CDAGsD8xv42Ada4KRmnybAqAVWIBjExD8ZPaoSFnvQqacUnpkwhcbOelNVBj7rO/zvMC9YzzbBKAAh+LzndvIbDoXEnKk/SRk3bU64UmAi4AgDjAZW0E4a4YtEZewKoIUxRC1QcFBlYqPJsgDc4QwRN0h+eTUMQQT+u9SFhnA46uDgPYLC8i7wtz8DwnYIGm/CoCJ9vK0TTTIX4SsE5ExNArjFlosNdHMS922ferHMPeX9XzyOAshdwnzbOJEJiD+IIEOEjoizzQE37jDo7ZNwuFOTcwq0Ywy1ZC/IGsBIzvagA6KEpkMGueTQHAahHX2yrlU4lzNwvRrOK7A25HWBNayZvRuJ3qvQhgXM0DqlLi2TQFOGAvYQN9sMxocQJM+iqc4VEibBXhbGfN6DX1cpF6HzXoPAArDZ5NE0HEEA6paWZ5k6WMBFEyaAsBIff8Xc3IutC+5X8A3I8FwFARecY1FYTcYcG4i5FBCmzMHLj2cQ0oioBBRzMmhAcoaLRwXdF9fV+A9a0i80yhlnpAkNHj/IfsWDV6sXqSl3AMdtaHvetrEqF4CD7AYu9BWlE2NF2ypsHuCwQS9/E+zIF5mDrPciZ4wyc8w0Wvu/0izsxoq+Rvt4F6qnlrLmDELTM1aMf1YD9fSv7RjcEHyzJieCW0E2iwnwpkHubBs0lSnWmmO/Xy8f66Sv5M17WKiC5mAq4czCQJrq2MwXUjAiiwW+EoI/PwXoU/i5a0rmnh2cQIT38CLeOpX0/K7YvrPZXBIyczuUMDTRMu8LsTaENW5uGNmDSSmMcy/61yNAQQ+EdpvnihkOAiU419X4vpkGcR4FDCPByXboW5m4QqERreUY40y+A6F2bPh7wfgzA8ijEwD1PUXCsGbRRGPO/NPGzLcuDKzjTkfsLgieCcIodZmody10cssCIIt0LqceTAlViwO8Is+hm3Ks2keYiTBl+k3YoyeXFCkQ+Nns+RHPMAxUbW25pMhGtlHv+vCMdZw9FlX5m/QRrsRj2doXFjEEY6cm1fX/9hXPMw5eghlNtVT1HDT2jynhqOgNvF+3KT+GDOTEIIie+w3//Qwv5dxXvHd1q0IX4HMw8uECItYNuoLXaFFqugAEaaVOMeuAJAYmclknnYGWXXPKwrYZ/44y1gHr7H8yx4H6UZfDAvG4qJ4PAZ3H3B16nWJ9gk2L3RKsSJuwAwPHxzW40WIUtrh4U0D0f2ARGU0J9bQ9CCEq8b8r0p4hkeMamufn090KSJ3ljZL9RbTlD7/MiOANhCc0lGETvqaRfCVVo7EAzm4RpqnKMxAPYDakTeHw4oOjF4XkFF2mvwsCNuzOXvnM6Lupjaw+MD8HWTjhw5SpncixgcOXLgcuTIgcuRI0cOXI4cOXA5cuTA5ciRIwcuR44cuBw5cuBy5MjRkP4vwABjSFyrtBi9UAAAAABJRU5ErkJggg=="

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(66)
	__vue_template__ = __webpack_require__(67)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/EventDelivery.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(7);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _NotificationIcon = __webpack_require__(46);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(50);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(58);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder">
	//
	//         <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//
	//         <img class="ac25-page-top-logo" src="html/images/delivery.png" />
	//         <p class="ac25-order-number-info">
	//           <span>orden {{order.special_id}}</span>
	//           <notification-icon></notification-icon>
	//         </p>
	//
	//         <ul class="ac25-info-list ac25-w100">
	//           <li>
	//             <p class="ac25-info-list-title"> nombre </p>
	//             <p class="ac25-info-list-content"> {{ infoName }}  </p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> telefono </p>
	//             <p class="ac25-info-list-content"> {{ infoPhone }} </p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> direccion </p>
	//             <p class="ac25-info-list-content"> {{order.deliveryAddress_name}} </p>
	//           </li>
	//         </ul><!-- end info-list -->
	//
	//         <ul class="ac25-info-list ac25-w100 ac25-steps2">
	//           <li>
	//             <p class="ac25-info-list-title"> Deparmento </p>
	//             <p class="ac25-info-list-content"> {{order.deliveryAddress_apt}} </p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> Comuna </p>
	//             <p class="ac25-info-list-content"> {{order.deliveryAddress_county}} </p>
	//           </li>
	//         </ul><!-- end steps2 -->
	//
	//         <ul class="ac25-info-list ac25-w100 ac25-steps3">
	//           <li>
	//             <p class="ac25-info-list-title"> MTS3 </p>
	//             <p class="ac25-info-list-content">{{order.items_volume}}</p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> bultos </p>
	//             <p class="ac25-info-list-content">{{order.items_amount}}</p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> peso </p>
	//             <p class="ac25-info-list-content">n/a<!-- {{order.items_weight}} --></p>
	//           </li>
	//         </ul><!-- end steps3 -->
	//       </div><!-- end content-inner-holder -->
	//     </div><!-- end container -->
	//     <footer class="ac25-content-footer">
	//       <button-print></button-print>
	//       <button-scan></button-scan>
	//       <div class="clearfix"></div>
	// <!--       <a class="ac25-half-black ac25-half-border-right left waves-effect waves-light" v-if="counters.items_to_scan_remaining > 0">&nbsp;</a>
	//       <a v-link="'load-vehicle'" class="ac25-half-black ac25-half-border-right left waves-effect waves-light" v-if="counters.items_to_scan_remaining == 0">descargar</a> -->
	//       <a v-link="'load-vehicle'" class="ac25-half-black ac25-half-border-right left waves-effect waves-light">descargar</a>      
	//       <a v-link="'payment'" class="ac25-half-red right waves-effect waves-light">pagos</a>
	//     </footer><!-- end footer -->
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>
	var ORDER_URL = _common.urls.micro_api + '/order';

	exports.default = {
	  name: 'EventDelivery',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    NotificationIcon: _NotificationIcon2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      counters: _getters.getCounters
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  computed: {
	    infoName: function infoName() {
	      var name = this.order['deliveryAddress_forperson'];
	      return name === '-' ? this.order.customer.name : name;
	    },
	    infoPhone: function infoPhone() {
	      var phone = this.order['deliveryAddress_forperson_phone'];
	      return phone === '-' ? this.order.customer.phone : phone;
	    }
	  },
	  methods: {},
	  ready: function ready() {
	    console.info('=================================== EventDelivery is ready with this order: ', this.order.id);
	    console.info('order', this.order, 'counters', this.counters.items_to_scan_remaining);
	  }
	};
	// </script>
	//

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder\">\n\n        <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n\n        <img class=\"ac25-page-top-logo\" src=\"" + __webpack_require__(68) + "\" />\n        <p class=\"ac25-order-number-info\">\n          <span>orden {{order.special_id}}</span>\n          <notification-icon></notification-icon>\n        </p>\n\n        <ul class=\"ac25-info-list ac25-w100\">\n          <li>\n            <p class=\"ac25-info-list-title\"> nombre </p>\n            <p class=\"ac25-info-list-content\"> {{ infoName }}  </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> telefono </p>\n            <p class=\"ac25-info-list-content\"> {{ infoPhone }} </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> direccion </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_name}} </p>\n          </li>\n        </ul><!-- end info-list -->\n\n        <ul class=\"ac25-info-list ac25-w100 ac25-steps2\">\n          <li>\n            <p class=\"ac25-info-list-title\"> Deparmento </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_apt}} </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> Comuna </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_county}} </p>\n          </li>\n        </ul><!-- end steps2 -->\n\n        <ul class=\"ac25-info-list ac25-w100 ac25-steps3\">\n          <li>\n            <p class=\"ac25-info-list-title\"> MTS3 </p>\n            <p class=\"ac25-info-list-content\">{{order.items_volume}}</p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> bultos </p>\n            <p class=\"ac25-info-list-content\">{{order.items_amount}}</p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> peso </p>\n            <p class=\"ac25-info-list-content\">n/a<!-- {{order.items_weight}} --></p>\n          </li>\n        </ul><!-- end steps3 -->\n      </div><!-- end content-inner-holder -->\n    </div><!-- end container -->\n    <footer class=\"ac25-content-footer\">\n      <button-print></button-print>\n      <button-scan></button-scan>\n      <div class=\"clearfix\"></div>\n<!--       <a class=\"ac25-half-black ac25-half-border-right left waves-effect waves-light\" v-if=\"counters.items_to_scan_remaining > 0\">&nbsp;</a>\n      <a v-link=\"'load-vehicle'\" class=\"ac25-half-black ac25-half-border-right left waves-effect waves-light\" v-if=\"counters.items_to_scan_remaining == 0\">descargar</a> -->\n      <a v-link=\"'load-vehicle'\" class=\"ac25-half-black ac25-half-border-right left waves-effect waves-light\">descargar</a>      \n      <a v-link=\"'payment'\" class=\"ac25-half-red right waves-effect waves-light\">pagos</a>\n    </footer><!-- end footer -->\n  </div><!-- end content-global -->\n";

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAA+CAYAAAAClQafAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzN0YzQkFBNTgyNDExRTY5QzQ3ODI4RkRDNTdFRjc2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzN0YzQkFCNTgyNDExRTY5QzQ3ODI4RkRDNTdFRjc2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM3RjNCQTg1ODI0MTFFNjlDNDc4MjhGREM1N0VGNzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM3RjNCQTk1ODI0MTFFNjlDNDc4MjhGREM1N0VGNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5+vUb5AAATkElEQVR42uxdCZhWVRm+jICguYwiIK6MIrhTkGlOajG4loo5aIpFakNmprQNJi6B2IxaVi7JlIq7NvVo+pSKgwhBas0gLihYjkolihDiiglM78u8Nw/He+7y8////DOc73m+5/7/vefcc+6533u+5Sy3W1tbWxBHcw4+9HAcBgTxdEfl3Fn/DTx58pQzVQzouxcOU8BV4E+A3wDfA57Y+urSNzbk3t3igA6QfwqHloR7vMdKAeht/lVtHAS52AoHCuUzeO/v+BbJC8gPwGGGAG7TK+CDAPYlud6/e8L1/XRcC56ro02tcSCHUGyNw6bgpWk6A6TvhcM24BVI/36RBLcPOz3wsqwdlvKWId/SEgNjbxzKwW+ibu+lzNMDh+3Ab7kAjDS743AW+EPwsfj/C6R9zUN1g0DeE4fbDZC/yk4UXAneHLwL+DrwqEJp9HocfsieBi+zKoOQHYbDt8EjwFvrNE37h8CX4l5/tdJvi8PZ4JOkKUJ6DnwD+BrTNUD6o3G4TH9PwbXnIuowDIcLwbuC70OaiyJckrNVx811msL9APjHSL/A8WzsEI4BfxN8mJH3XZaj53vOkZcv6mL9vQDp/ujo6B6PyM77Lwc/Cb4FeV+MyMsO8hy1457GpeeZB3wV8n0Q0SGcAf4qmG1WpkuL6ZKB65BnpZGeabeQJceOuAeu3+jhmhrU3dXe2xunKaNf02+++xHQ3u8h7Y74/YThOteBw/dH4M5Huj/kA+i8ybHgX+JlnpsC4FvicD34KzHJ1lCocL87lIegmQbuY6RZbVkbj4GPQJ63lecSAzBzwIdEaWKkW6CO40Jcv9QwO38Nro4pj9rqNOS5O0J73wo+Mub5KPyjkPchKy87hIXgHXXqJqQ5PaLOtKKeSmjqD9Qes6zO72arHW26G3lONvJ8kufAg6xn72H8fxn8eeR7WXmq9QyLVNbyqA7LkxPoYyRDLhoF8N5rpDdlPYoGI/0LSeWWJVwPtcLClCB/WCAn6G4TIHYD7wP+Dk1j8Cah1kaeU6QF+6jnorD2huD0UJrf6fYHgX9qFDfE+E3z5uuOau1gWAYhyKcL5ATLj9mWKo9AHCutyf83yEwNn48m7Uw9EzuGX8kaqADvTw0NZkfU2wJOSBMNkJOOlHVgU/hsKwgwg0fJQnlbrlCtUTe2+f1qx5fA58ntGqj2+Q2YWnmSkeczODyqurayY6P1hbagGbmT0d7UNrchfSgrv1cd+vM9e5A7Ab0nQQq+E3xvyOZ7i6C3wLOtcw8JTy660bj/3eBrwGeC+6TS6HixPWWebSIBeTIi2VN40S8p/S0SFlb2BJyf4fDvDse16/Cb4G+W0FITnYnzqyPM5N+CT1R8YCekeRXn5wtcbfKtCc4huLbMyLu9fB3S3jSnce4umbXLVY95DpP/cWn4a5Hm26rHdEVDWcaRON8SkXdfHIbi2q3WeYLpWTDb9Gfg7+rS/kj7tJWWvTd78Tm49rmIMq7E4Xu8H67vi//sEOepHSlIY3D+3ahYQtg+cpWekfk4UxbIyog8YV1II5DmEQ/hVCC/SFo4SZFeKIs0tCoXRUXXcb+dpVBCGmuY+i6iG3o27ndLUjBukEBOusiR5jhqEAjEcIF8XSWiQL5O9c6d9Q8c/qG/9RJOavIzcG1NRPo23Pt8AZ2NVon/1PKDlWSyGouCe4Wl2YcYrsLfke9AgZx0ahTIVWYL0jbKMjlUp78okLNjOS4K5Mr7jABk09UC+UPq0emj0bo4Cvy0Q6MvSgigLtfxcrUjO+LRqMOHjrotM/7WCuRL1CmvdJRFn3C86sq28EBPBvlYWYpp6FkA8dGkREizWDGTsIzDUtybgb1pSPtv5J8RB/TBhs853ZFmvo7f0LEZQnNPCjO/v8z0dZ1IFMjNzgHp31YAaDtFIHvp8jSdYxR4LNLR7w1NnzCo9yKFX0Ek0mzbf46geQL6tvpfoyODen/JGP0+gf60gpHn0GrBuSb8/rLcgHqHu/ScI1B3vP7OstrxEhfIrXuwwwxjA5cjz5sxbf+B4hyfTfD9PbUDsJvpHsk9/JOs3JD2Bg/X74HIMzSHovpbpv1r1rUjQotdLmUs0PcyzPPjEwqu1PHBlBWtNBrikRSCGdZzmQGEVUH7+OKPBJq+DAQi/VBF6AcbEeesdexl+MmkQ3R8OCPIN2OkW3+vRL3+rt8PqM4HI80WRpCxzKj3Wj6Lfm8mf/ssdXTvKOhZqZe52lU3menbKMjGfP2MDuyBFI/R27IgPMVgXfGNkE6yo+IA9nkG0H+WhzLrbKvACuAdlBSMG2IBJY52zigM4XDBMtsvj6BhhrA9YZq2yLtWGmm8oQ2/b3VUYSAxDISlGfMNfeO/ASg0gbbMkNekC9Q2NLumWL1woKDfCOO8aa1cJXOcPFfBzYPBb8p9WGK0+39i5hysUcCTsZTzg/WHdV5P6Ki2ViCV9FeP40Ta3vo/1xFwyydFWWRzbKWVRqOnAfqHhl+fhlbp2I/Reghp3MP/IBQ0DvEo+GQCmCbmHTh/ukAzUUG3wVa6VfJbBiUIN4ecRurv7dKWtjuTRpsPMjodauS/4JyZZK062iMURDPNdl77p/Gi+uk33aIaw98O230bjodHgZ0doYb2QndglXF5dwVEXXSuOiN24DM8jhPJxlOUErtT7T4gD+U9CW0+P+L86qSKhUJKc3CPhKCQ7atzCGgM8l4G4fq3wy/viWuL5QOH5Z8V4aeGeTihpdqIUAYRAA7pWwqEUfvfYGjwsKNqlk9MX74uqnPRENrtMof/DG5SQHCRyj0Lv6+L8mtxnsOInM33HysAF8i/dfm4R0VYUZxaOlT35fPQ5N9B1o0ZUX/KaEfGSX7p8Ot3NN7ls4oXsG4c8vyqo+2rZJGQphRrlmJXJwDzfbmbRSWX6U4/Y3NXUCiCGnSkiTsdQnKAITC9FQhjdPk+ahcITbNhCk7GuXHGOO26oSDwtfh5jSFo0+MsDVznpIGf6K8ZlVxoAC80r1iPnSzBJuBapFXZUZ1mTMJpMMz/h5F2TyPfluDz1Nk14nd3KwDHCRKjIjgcT90F6YdYGt20VigYEw0XabxlooXtcCXuUwPexKjbVtLK4Xj98+qkbtP/09gxgze13tcEBZF6yOz/hYdo56bIcXTNsgonQvwziJ7jTvosx7WVh0NSJxrXlsgf2dnwsRkwOgl5ViD9HvJh+hj+7wJ1Fp+UlmK5nI46KewAgvYVPaSoMehe0urhRJclSDPAuM4A1jjDd6VlsVKdxwCjAzlWQ4Fhvk3kV5v+9CsC8q7BRzPJ6DKcLb+az03r5gKHxuypYB/N+vFI93Ocm634AJ/5EisgyXvup4Da7rj+uq4xsDPbaOOV8sd7qR1Cq+1e5Bll+N7sbHcz8szTc3xKdQpdl9P9ysSUkbj2Ya+ZxqlyaPA3E/JQKe6DdDcWqh64dzeXRv+ypd13ieC+AnNIJ8u8fsfQnIMlgDTXOUR1FEFuaOCDpDlI/QWkTwft4/f0CQ8JQW5pc3YAL0T4o6vkCgQO857XqH3DGXosq0ogf0ORyuEmyHVfdgpfotY0fNxd5O/3UDkcjjtF999ZHeQU18sQeGZY5rvLWllr+PuMM0w2rjWrHcMADLX4ULkB3WWujwWfYPrtOHBm3E3y57aS61UpkNOyORHpxniQF7RjGCgFcnVHafTDpa1iA2oQgscj8m4qIdpBwaIX5HPGrXDrLy1OgaOPO8+a4GH60ByHXI3rc2Lud6A02mtItzDiOkE+XGCloHMK6NMCVFKQbTMBi3V+X+bw8xFl/8vuMCLuNVB1+ABpH9NioHUxD0ccoFLgXYPrf3bcb39ZRQygLQjnqMfUYSt1eNspgrtAcRRPedbouM7OdEsOuWnF2hy1/Xic+7nS9AnWnyqdRG8hb2uSRu+WtPGEJ0+e8gZ0XjtUFtxRip9w7UA10rXhOt22R4Lk5eM2cSz9/Digd/evx5OnohFd20eD9sVan5AleQZBruuDcwC56fI5yQPdk6ciEQA9B9qWmvdyucajcc5cZ8DFUOXBR6su0xBnl17vge7JU2mB/QqAnQFqbhrRYl0jaK8oRLke6J48FR/skyzfvgzn1hayzDLf7J48dQxxtRuY68VfVxTeA92Tpy4CbNOK5ixH7uPwFDR6QecrrGe6a37zsBzu01I5d1ZTrpXYgHJd1Ij6tGYoZ4Pqn+XeSOfaSojz5Bvy3HYN4QSlEmjjvMiRdgCqyoccxrwL7mzcWAC8Mdq+j2bDMVLONR6c4ThGHcHW8tEHZbgn3++ltr+f5KOzEetyFHQe2MiNEoIVGbLnXK7rhQftQxdpy5mgum8Ipb031yzXRL0wTiPO2G6kqcH62wyZwlpfQm2cRY4oQ01RHZ92AKpzgJ312S0DyF31HFkgxcrJY5yhyBVs+8miPhUgDZc/c2blmTncl2b/McU03askeC/G9JYbO7k0BYdVqnPQ5hUubd6J24jtMBXP1wyOer56l3WcRu50z9oYK6ipQM/FLdk4m5STZTiENpnbPJlVA2f9PgBnn97fUT46hbZOL6rcY3s9jdTk0ISBQ9MnASLogkA3rYOPyZDa0PV8tSlkrlYyGmUG1xfqYQBqgpL7FnJdBRd4TbauPw3ux5lsNgft+wKWW7wFrvUEX99RQI99UZ6cQjpMPmgabV4e0zE05OAClCqVy0qM0uorXEomwQpytVt9VNwhz2BfLCvsaPxekyHffzmd1uLUn8NKC/RW+Zk2pyE+1MMe7Km1bVqtXpODe9CR5JKhOAvn/5aLbcILkC7tWyNAu7S5q35FsYIIUPC6XWAqBvQ9FXxVoctMO2GmwQrs2P5OtQSvIkaz1+RgFk1wldvJzXcG3hocYKVQT0ihkV1Ab83oYxarjRviypEc1cW4I9UR8tMQI3e1tjLixhyBO2JfX2wrCADnasRpQfteDONLAehxQhv2rPWKhrp6zDpFlVsDT6HWrXGYntVx2kXmfZcKwkkuRuPZXnQ82zBHh1nvMO2rCOwwci+L0mXSN+UytJkDsAlmLkHl3gJcFnyXrOoxRhpuyJJlPzkulf5b0sy6sjy/rAkJWrva43u9gFKuQbmaHN2CztIBunz1qHZsiHEj6wyXscZ1j6CAATiLOHbIr/Tww6XczouR94sB0lkCObcf40YhMzMwo/iJ20aXFUCAJwT5iypvrL66Mygnwa2OMY87exAul/rXx3QONYZb4GqzpiI9G78wvFx14Vg9I++XGdf75njf/gU33WMaPsqc4jhneReKCOcD6HUxneI4h1VUnlEbdnnrKCbmEef3F3Q47WPBk1eX/gtam5NiHpRfPsYyufmFYe5+tGuG2/LjH7d0FNAbHUAPfa20PWiVtRd6mpde34kENJegXL6CcKXaxtU5avr6mE7QNWRZX+yYEYA9HWDnVm2L8XupdY3DbdMKUW73AgpwqyOoUpFFCAN3lDSrGVfKPmmqoJzM+WF59s1Lpo0VFXc9X0uCzLUqMJd2+m3RhtMiwP7/Dhmg5xd4d8S5BwpZZiHXo7uA7sfTP252utqqxhLGmhhtV+pBuIqYse2K4KMhWBelsVbihtuitHmHupAAeX/56dzMc7NCluWXqZaOrx7p5oRBuYQgXGMniHvUSKijeGoSyF2fqrYtyZTWRlGG0yKAPRz8Bf2mL3530P65rUmFLtvvMFM6QE8KysUF4Rq6cNsQvBMyWEgN6BSrE9yRjnLvuKXzgdr2mUNp/Ervg2F9cJ6g57z1gRnuyWmwl5juQLGBXpWLrxVh/nf5CTZpgnIxGq8ljbbrpG28DuQ5PF99jPwVczjNJn4ghJ8Wu1ed9rpPfxm7wI4GH5/Dfb+f5NoUBOgJCzOyCFVDV5wC6zK/A3dQrjbIfxCu1NuYgjsul6i44h5x7dwhxCWp0NqTBXhG2E/GOfNDJdTu/AjmThluy+G1WzvKdI8bAvJTYN3C6QrK1cZovK44dk4rZWQXfdUE+hZgLkmdY3UE/GruvoUoNO/BuIRlgE0e0om+eiYroBNNPuKzjbTY1ekP66obl3CsHPw98M3FLLd7nkFO8/K3eRTkjRHodQXsGDpUxm3fmJ/LDtqj7lHEeeotHehP50JrSrViZXkCeLiFT3MQMz1zA4NGG4P5nmU8vKWzt6dAHBcfmNrJ9jF4u1Qrllaju6ZJ8iWk2fUz0xBJinKTKOuOqlnLKeRy28Yg3eKffGnzYrWxi+pjZChcjDKuk/ZlHTV83SNnoAfZp0maNC5HYORablNGIGQtpyUo0JBUQlDO7DjzFYQrVhs7rRiZ8M2OJFx91lSg7ZfzTe9a//l11Hs6oB6HGL9XFqvHGddJXlJn8tUbu9IKQG3hPCHmmafKXy/1ERtumsGx8fAjiXdVDOj7aNC+OUSxaFs2qfF/ZqGB3iKQe788N6DXBhvRTDiO5WtG2zCHi8hpsiU95MYlpwD2RPy8Sae43/rhHVglBgen8EdZAQE+3IM8d3M2xjRv6cLtOjpwL0et6gxDbgD7NBwmBh0fgWdg8CuoT3M+NHqrwRS+Jj8hJq9avWZj0OZGB5e01LRO/npLiYN9CjQ7F6xwD/eBQXGDcvyGG2fX3WHOuuvW1tbmIeXJUxcnv0zVkycPdE+ePHmge/LkyQPdkydPHuiePHnyQPfkyZMHuidPnjzQPXny5IHuydNGRf8TYAB8/h4+HcLgEQAAAABJRU5ErkJggg=="

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(70)
	__vue_template__ = __webpack_require__(74)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/LoadVehicle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ModalWait = __webpack_require__(71);

	var _ModalWait2 = _interopRequireDefault(_ModalWait);

	var _NotificationIcon = __webpack_require__(46);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(50);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(58);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _getters = __webpack_require__(29);

	var _actions = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ORDER_URL = _common.urls.micro_api + '/order'; // <template>
	//   <header-user-data></header-user-data>
	//   <modal-wait></modal-wait>
	//
	//   <div class="ac25-content-global">
	//     <div class="container">
	//
	//       <div class="ac25-content-inner-holder ac25-min-height-200" v-if="addressType == 'pickup'">
	//        <h4 class="ac25-top-red-text">CARGAR EL CAMION</h4>
	//        <p class="left clearfix ac25-subtitle"> Orden {{order.special_id}} </p>
	//        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//
	//        <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
	//         <li> Cargue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos.</li>
	//         <li> Una vez que este listo para pasar a la siguiente orden, presione terminar.</li>
	//       </ul>
	//
	//       <div class="clearfix"></div>
	//       <a @click="print('items-list')" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="html/images/print.png" class="left" /><span>imprimir listado de bultos</span> </a>
	//     </div><!-- end content-inner-holder -->
	//   </div><!-- end container -->
	//
	//   <div class="ac25-content-inner-holder ac25-min-height-200" v-if="addressType == 'delivery'">
	//    <h4 class="ac25-top-red-text">DESCARGAR<br />EL CAMION</h4>
	//    <p class="left clearfix ac25-subtitle"> Orden {{order.special_id}} </p>
	//    <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//
	//    <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
	//     <li> Descargue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos.</li>
	//     <li> Una vez que este listo para pasar a la siguiente orden, presione terminar.</li>
	//   </ul>
	//
	//   <div class="clearfix"></div>
	//   <a @click="print('items-list')" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="html/images/print.png" class="left" /><span>imprimir listado de bultos</span> </a>
	// </div><!-- end content-inner-holder -->
	// </div><!-- end container -->
	//
	// <footer class="ac25-content-footer">
	//   <a onclick="window.history.back()" class="ac25-half-black left waves-effect waves-light">volver</a>
	//   <a @click="finishOrder()" class="ac25-half-red right waves-effect waves-light">terminar</a>
	// </footer><!-- end footer -->
	//
	// </div><!-- end content-global -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'LoadVehicle',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ModalWait: _ModalWait2.default,
	    NotificationIcon: _NotificationIcon2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  vuex: {
	    actions: {
	      resetData: _actions.resetData
	    },
	    getters: {
	      order: _getters.getOrder,
	      counters: _getters.getCounters,
	      addressType: _getters.getAddressType
	    }
	  },
	  ready: function ready() {
	    console.info('=================================== LoadVehicle is ready with this order: ', this.order.id);
	  },
	  methods: {
	    finishOrder: function finishOrder() {
	      var _this = this;

	      var order_id = this.order.id;
	      var addressType = this.addressType;

	      _ModalWait2.default.showIt(true, 'finish-shipment');

	      this.$http.post(ORDER_URL + '/finish-shipment', {
	        order_id: order_id,
	        shipment_type: addressType,
	        address_type: addressType

	      }).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        _this.resetData();

	        /**
	         * safeguards
	         */
	        _ls2.default.save('order_id', 0);
	        _ls2.default.save('address_type', '');

	        console.info(response, 'success callback');
	        _this.$route.router.go('/available');
	      }, function (response) {
	        console.info(response.data, 'error callback');
	      });
	    },
	    print: function print(label) {

	      var setup = _ls2.default.get('setup');

	      if (!setup || !setup.printerMAC) {
	        return this.$route.router.go('/setup');
	      }

	      var mac = $.trim(setup.printerMAC).toUpperCase();
	      var order_id = this.order.id;

	      _ModalWait2.default.showIt(true, 'printing');
	      this.$http.get(ORDER_URL + '/' + order_id + '/opl-get-zpl/' + label).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        console.info(response, 'success callback');
	        console.info(label, 'Imprimiendo order #' + order_id + ' en impresora MAC: ' + mac);

	        var text = response.data.text;
	        if (!text) {
	          return alert('Texto no ha arrivado. Abortando impresión.');
	        }

	        cordova.plugins.zbtprinter.print(mac, text, function (success) {}, function (fail) {
	          alert('Fallo en plugin de impresión. Posiblemente ha ingresado una dirección MAC incorrecta. Error interno: ' + fail);
	        });
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(72)
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ModalWait.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getters = __webpack_require__(29);

	exports.default = {
		name: 'ModalWait',
		vuex: {
			getters: {
				modalVisible: _getters.getModalVisibility
			}
		},
		showIt: function showIt(visible, action) {
			var text = 'Comunicando con central...';
			switch (action) {
				case 'printing':
					text = 'Espere mientras se inicia impresión...';
					break;
				case 'finish-shipment':
					text = 'Espere mientras se procesa término de viaje...';
					break;
				case 'scan-item':
					text = 'Espere mientras obtiene información de escaneo...';
					break;
				case 'refresh-order':
					text = 'Espere mientras obtiene información de orden...';
					break;
			}
			$('#modalCustomDevText').html(text);
			$('#modalCustomDev').toggle(visible);
		},

		methods: {
			// showIt(visible) {
			// 	console.info(visible, 'visible');
			// 	$('#modalCustomDev').toggle(visible)
			// }
		},
		ready: function ready() {
			console.info(this.modalVisible, 'modalVisible');
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="ac25-red-loading-section modal-custom-dev" style="" id="modalCustomDev">
	// 		<div class="container">
	// 			<div class="ac25-loading-content">
	// 				<h5 id="modalCustomDevText">Comunicando con central...</h5>
	// 				<img src="../html/images/loading.gif" />
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <script>

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"ac25-red-loading-section modal-custom-dev\" style=\"\" id=\"modalCustomDev\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ac25-loading-content\">\n\t\t\t\t<h5 id=\"modalCustomDevText\">Comunicando con central...</h5>\n\t\t\t\t<img src=\"" + __webpack_require__(32) + "\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <modal-wait></modal-wait>\n\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\" v-if=\"addressType == 'pickup'\">\n       <h4 class=\"ac25-top-red-text\">CARGAR EL CAMION</h4>\n       <p class=\"left clearfix ac25-subtitle\"> Orden {{order.special_id}} </p>\n       <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n\n       <ul class=\"ac25-red-list clearfix ac25-fleft ac25-mtop60\">\n        <li> Cargue los <span class=\"ac25-large-font\">{{order.items_amount}}</span> bultos.</li>\n        <li> Una vez que este listo para pasar a la siguiente orden, presione terminar.</li>\n      </ul>\n\n      <div class=\"clearfix\"></div>\n      <a @click=\"print('items-list')\" class=\"ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light\"> <img src=\"" + __webpack_require__(75) + "\" class=\"left\" /><span>imprimir listado de bultos</span> </a>\n    </div><!-- end content-inner-holder -->\n  </div><!-- end container -->\n\n  <div class=\"ac25-content-inner-holder ac25-min-height-200\" v-if=\"addressType == 'delivery'\">\n   <h4 class=\"ac25-top-red-text\">DESCARGAR<br />EL CAMION</h4>\n   <p class=\"left clearfix ac25-subtitle\"> Orden {{order.special_id}} </p>\n   <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n\n   <ul class=\"ac25-red-list clearfix ac25-fleft ac25-mtop60\">\n    <li> Descargue los <span class=\"ac25-large-font\">{{order.items_amount}}</span> bultos.</li>\n    <li> Una vez que este listo para pasar a la siguiente orden, presione terminar.</li>\n  </ul>\n\n  <div class=\"clearfix\"></div>\n  <a @click=\"print('items-list')\" class=\"ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light\"> <img src=\"" + __webpack_require__(75) + "\" class=\"left\" /><span>imprimir listado de bultos</span> </a>\n</div><!-- end content-inner-holder -->\n</div><!-- end container -->\n\n<footer class=\"ac25-content-footer\">\n  <a onclick=\"window.history.back()\" class=\"ac25-half-black left waves-effect waves-light\">volver</a>\n  <a @click=\"finishOrder()\" class=\"ac25-half-red right waves-effect waves-light\">terminar</a>\n</footer><!-- end footer -->\n\n</div><!-- end content-global -->\n";

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAclJREFUeNrsWO1tgzAQNVH+wwZlg7JBzQYdgRGaCUImaEagE7SdoIxANmAEOoFro0NCyBiffRja5klPkRIwL8e7DzsSQjALJJIZc0MN93fMF0rsAl8kO+EOtUYjmVg8y8jIIrIqIrFHPCIVE8mbJPeJ8JJYtfiX58sbxDJfwQcWFo8jD6NxdLjnJNkQCEZH2MUGkUsea75DWyK0DbwssaVYtOCtxaIEhxJ7oRAcKsEYtOt0IaFaIFnpckWjKXkpkGQ24DO9norlZO3SdP0eEgw9dWWIyWrNyM6hn9pUgmWQiTFRZmOgEvjJ8tpciaWYrEIg13n2E6J325taXem6gi2GYr1rsdnkc9diX/dq2l9VZ+9i72JnEuzNNKYFRiH5YBJbwcyZTMa7bmVhpUYHXxI7NIZxz85HjeKZqAa3IGjAWXNG5jV8q3/6ThjNVBPRv5tgJtRgCU5kg4+1j49qnZ9C1dnOIWsFATsoTTb4Vm/iAGXphNhOn4kCFSPE8t42M3ujerIH4qPfKkEDtecrRusKwzN7uni2QERkk9kgWVlHQlkNKuZ3gGzTHMjExogt878cEVtbsdeNhWrHVNORZ7pR1jdzbfhHgAEABTm5f8wP3PEAAAAASUVORK5CYII="

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(77)
	__vue_template__ = __webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/HubReception.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(7);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ButtonPrint = __webpack_require__(50);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(58);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MICRO_API_URL = _common.urls.micro_api; // <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//        <h4 class="ac25-top-red-text">RECEPCIÓN DE<br />CARGA</h4>
	//        <p class="left clearfix ac25-subtitle"> Hub: Bodega Huechuraba </p>
	//        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//
	//        <div class="clearfix" style="height:100px"></div>
	//
	//        <span class="ac25-top-check-title">
	//         Bultos a recibir: <span class="ac25-large-font">{{order.items_amount}} / Orden #{{order.id}}
	//       </span>
	//
	//       <div class="clearfix" style="height:100px"></div>
	//
	//       <h4 class="ac25-top-red-text">IMPORTANTE!</h4>
	//       <p class="left clearfix ac25-subtitle"> Escanee uno a uno los bultos y sólo cuando el bulto a escanear se encuentre arriba del móvil. </p>
	//
	//       <div class="clearfix"></div>
	//
	//     </div><!-- end content-inner-holder -->
	//   </div><!-- end container -->
	//
	//   <footer class="ac25-content-footer">
	//     <button-print></button-print>
	//     <button-scan></button-scan>
	//     <div class="clearfix"></div>
	//   </footer><!-- end footer -->
	//
	// </div><!-- end content-global -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'HubReception',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      counters: _getters.getCounters,
	      addressType: _getters.getAddressType
	    }
	  },
	  ready: function ready() {
	    console.info('HubReception is ready ===================================');
	  },
	  methods: {}
	};
	// </script>
	//

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n       <h4 class=\"ac25-top-red-text\">RECEPCIÓN DE<br />CARGA</h4>\n       <p class=\"left clearfix ac25-subtitle\"> Hub: Bodega Huechuraba </p>\n       <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n\n       <div class=\"clearfix\" style=\"height:100px\"></div>\n\n       <span class=\"ac25-top-check-title\">\n        Bultos a recibir: <span class=\"ac25-large-font\">{{order.items_amount}} / Orden #{{order.id}}\n      </span>\n\n      <div class=\"clearfix\" style=\"height:100px\"></div>\n\n      <h4 class=\"ac25-top-red-text\">IMPORTANTE!</h4>\n      <p class=\"left clearfix ac25-subtitle\"> Escanee uno a uno los bultos y sólo cuando el bulto a escanear se encuentre arriba del móvil. </p>\n\n      <div class=\"clearfix\"></div>\n\n    </div><!-- end content-inner-holder -->\n  </div><!-- end container -->\n\n  <footer class=\"ac25-content-footer\">\n    <button-print></button-print>\n    <button-scan></button-scan>\n    <div class=\"clearfix\"></div>\n  </footer><!-- end footer -->\n\n</div><!-- end content-global -->\n";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(80)
	__vue_template__ = __webpack_require__(81)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/HubTransfer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ModalWait = __webpack_require__(71);

	var _ModalWait2 = _interopRequireDefault(_ModalWait);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ORDER_URL = _common.urls.micro_api + '/order'; // <template>
	//   <header-user-data></header-user-data>
	//   <modal-wait></modal-wait>
	//
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//         <h4 class="ac25-top-red-text">TRASBORDO DE<br />ENTREGA</h4>
	//         <p class="left clearfix ac25-subtitle"> Hub: Bodega Huechuraba </p>
	//         <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//
	//         <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
	//           <li> Entregue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos / Orden #{{order.id}}</li>
	//           <li> Asegúrese bien que la pesona que recepciona firme la orden de trasbordo.</li>
	//         </ul>
	//
	//         <div class="clearfix"></div>
	//         <a @click="print('items-list')" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="html/images/print.png" class="left" /><span>imprimir listado de bultos</span> </a>
	//       </div><!-- end content-inner-holder -->
	//     </div><!-- end container -->
	//
	//     <footer class="ac25-content-footer">
	//       <a @click="finishTransfer()" class="ac25-full-red-custom-dev right waves-effect waves-light" style="padding:100px 20px">terminar</a>
	//     </footer><!-- end footer -->
	//
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'HubTransfer',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ModalWait: _ModalWait2.default
	  },
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      counters: _getters.getCounters,
	      addressType: _getters.getAddressType
	    }
	  },
	  ready: function ready() {
	    console.info('HubTransfer is ready ===================================');
	  },
	  methods: {
	    print: function print(label) {

	      console.info(this.order, 'this.order de vuex----------------');
	      console.info(this.order.id, 'this.order.id de vuex ----------------');

	      var setup = _ls2.default.get('setup');

	      if (!setup || !setup.printerMAC) {
	        return this.$route.router.go('/setup');
	      }

	      var mac = $.trim(setup.printerMAC).toUpperCase();
	      var order_id = this.order.id; // fail
	      // var order_id = ls.get( 'order_id' )

	      _ModalWait2.default.showIt(true, 'printing');
	      this.$http.get(ORDER_URL + '/' + order_id + '/opl-get-zpl/' + label).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        console.info(response, 'success callback');
	        console.info(label, 'Imprimiendo order #' + order_id + ' en impresora MAC: ' + mac);

	        var text = response.data.text;
	        if (!text) {
	          return alert('Texto no ha arrivado. Abortando impresión.');
	        }

	        cordova.plugins.zbtprinter.print(mac, text, function (success) {}, function (fail) {
	          alert('Fallo en plugin de impresión. Posiblemente ha ingresado una dirección MAC incorrecta. Error interno: ' + fail);
	        });
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    },
	    finishTransfer: function finishTransfer() {
	      var _this = this;

	      console.info(this.order, 'this.order de vuex----------------');
	      console.info(this.order.id, 'this.order.id de vuex ----------------');

	      var order_id = this.order.id; // fail

	      var order_id = _ls2.default.get('order_id');
	      console.info(order_id, 'order_id de ls ----------------');

	      this.$http.post(ORDER_URL + '/finish-transfer', {
	        order_id: order_id

	      }).then(function (response) {
	        console.info(response, 'success callback');
	        _this.$route.router.go('/available');
	      }, function (response) {
	        console.info(response.data, 'error callback');
	      });
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <modal-wait></modal-wait>\n\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n        <h4 class=\"ac25-top-red-text\">TRASBORDO DE<br />ENTREGA</h4>\n        <p class=\"left clearfix ac25-subtitle\"> Hub: Bodega Huechuraba </p>\n        <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n\n        <ul class=\"ac25-red-list clearfix ac25-fleft ac25-mtop60\">\n          <li> Entregue los <span class=\"ac25-large-font\">{{order.items_amount}}</span> bultos / Orden #{{order.id}}</li>\n          <li> Asegúrese bien que la pesona que recepciona firme la orden de trasbordo.</li>\n        </ul>\n\n        <div class=\"clearfix\"></div>\n        <a @click=\"print('items-list')\" class=\"ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light\"> <img src=\"" + __webpack_require__(75) + "\" class=\"left\" /><span>imprimir listado de bultos</span> </a>\n      </div><!-- end content-inner-holder -->\n    </div><!-- end container -->\n\n    <footer class=\"ac25-content-footer\">\n      <a @click=\"finishTransfer()\" class=\"ac25-full-red-custom-dev right waves-effect waves-light\" style=\"padding:100px 20px\">terminar</a>\n    </footer><!-- end footer -->\n\n  </div><!-- end content-global -->\n";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(83)
	__vue_template__ = __webpack_require__(90)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/TripReception.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(7);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ButtonPrintTrip = __webpack_require__(84);

	var _ButtonPrintTrip2 = _interopRequireDefault(_ButtonPrintTrip);

	var _ButtonScanTrip = __webpack_require__(87);

	var _ButtonScanTrip2 = _interopRequireDefault(_ButtonScanTrip);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MICRO_API_URL = _common.urls.micro_api; // <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//        <h4 class="ac25-top-red-text">RECEPCIÓN DE<br />CARGA</h4>
	//        <p class="left clearfix ac25-subtitle"> Hub: Bodega Huechuraba </p>
	//        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//
	//        <div class="clearfix" style="height:100px"></div>
	//
	//        <span class="ac25-top-check-title">
	//         Bultos a recibir: <span class="ac25-large-font">{{trip_items_remaining_counter}} / Viaje #{{trip.id}}
	//       </span>
	//
	//       <div class="clearfix" style="height:100px"></div>
	//
	//       <h4 class="ac25-top-red-text">IMPORTANTE!</h4>
	//       <p class="left clearfix ac25-subtitle"> Escanee uno a uno los bultos y sólo cuando el bulto a escanear se encuentre en bodega. </p>
	//
	//       <div class="clearfix"></div>
	//
	//     </div><!-- end content-inner-holder -->
	//   </div><!-- end container -->
	//
	//   <footer class="ac25-content-footer">
	//     <button-print-trip></button-print-trip>
	//     <button-scan-trip></button-scan-trip>
	//     <div class="clearfix"></div>
	//   </footer><!-- end footer -->
	//
	// </div><!-- end content-global -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TripReception',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ButtonPrintTrip: _ButtonPrintTrip2.default,
	    ButtonScanTrip: _ButtonScanTrip2.default
	  },
	  vuex: {
	    getters: {
	      operation_type: _getters.getOperationType,
	      trip: _getters.getTrip,
	      trip_items_remaining_counter: _getters.getTripItemsRemainingCounter
	    }
	  },
	  ready: function ready() {
	    console.info('TripReception is ready ===================================');
	  },
	  methods: {}
	};
	// </script>
	//

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(85)
	__vue_template__ = __webpack_require__(86)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ButtonPrintTrip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ButtonPrintTrip',
	  data: function data() {
	    return {
	      grocer: false
	    };
	  },
	  ready: function ready() {
	    var grocer = _ls2.default.get('grocer');
	    this.grocer = grocer;

	    console.info('ButtonPrintTrip is ready for ' + (grocer ? 'Grocer' : 'OPL') + ' ===================================');
	  }
	};
	// </script>
	//
	// <template>
	//   <a v-link="'print-trip'" class="ac25-half-red ac25-half-border-right left waves-effect waves-light">
	//     <img src="../html/images/print-big.png" alt="" />
	//     <div style="margin-top:100px">
	//       <p class="ac25-no-margin">imprimir</p>
	//     </div>
	//   </a>
	// </template>
	//
	// <script>

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <a v-link=\"'print-trip'\" class=\"ac25-half-red ac25-half-border-right left waves-effect waves-light\">\n    <img src=\"" + __webpack_require__(57) + "\" alt=\"\" />\n    <div style=\"margin-top:100px\">\n      <p class=\"ac25-no-margin\">imprimir</p>\n    </div>\n  </a>\n";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(88)
	__vue_template__ = __webpack_require__(89)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ButtonScanTrip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getters = __webpack_require__(29);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<a v-link="'scan-trip'" class="ac25-half-black  right waves-effect waves-light">
	// 		<img src="../html/images/barcode-big-2.png" />
	//     <div style="margin-top:100px">
	//       <p class="ac25-no-margin" v-if="trip_items_remaining_counter > 0">escanear ({{trip_items_remaining_counter}})</p>
	//       <p class="ac25-no-margin" v-if="trip_items_remaining_counter <= 0">escaneo listo</p>
	//     </div>
	//   </a>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'ButtonScan',
	  vuex: {
	    getters: {
	      trip_items_remaining_counter: _getters.getTripItemsRemainingCounter
	    }
	  },
	  data: function data() {
	    return {
	      grocer: false
	    };
	  },
	  ready: function ready() {
	    var grocer = _ls2.default.get('grocer');
	    this.grocer = grocer;

	    console.info('ButtonScan is ready for ' + (grocer ? 'Grocer' : 'OPL') + ' ===================================');
	  }
	};
	// </script>
	//

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<a v-link=\"'scan-trip'\" class=\"ac25-half-black  right waves-effect waves-light\">\n\t\t<img src=\"" + __webpack_require__(61) + "\" />\n    <div style=\"margin-top:100px\">\n      <p class=\"ac25-no-margin\" v-if=\"trip_items_remaining_counter > 0\">escanear ({{trip_items_remaining_counter}})</p>\n      <p class=\"ac25-no-margin\" v-if=\"trip_items_remaining_counter <= 0\">escaneo listo</p>\n    </div>\n  </a>\n";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n       <h4 class=\"ac25-top-red-text\">RECEPCIÓN DE<br />CARGA</h4>\n       <p class=\"left clearfix ac25-subtitle\"> Hub: Bodega Huechuraba </p>\n       <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n\n       <div class=\"clearfix\" style=\"height:100px\"></div>\n\n       <span class=\"ac25-top-check-title\">\n        Bultos a recibir: <span class=\"ac25-large-font\">{{trip_items_remaining_counter}} / Viaje #{{trip.id}}\n      </span>\n\n      <div class=\"clearfix\" style=\"height:100px\"></div>\n\n      <h4 class=\"ac25-top-red-text\">IMPORTANTE!</h4>\n      <p class=\"left clearfix ac25-subtitle\"> Escanee uno a uno los bultos y sólo cuando el bulto a escanear se encuentre en bodega. </p>\n\n      <div class=\"clearfix\"></div>\n\n    </div><!-- end content-inner-holder -->\n  </div><!-- end container -->\n\n  <footer class=\"ac25-content-footer\">\n    <button-print-trip></button-print-trip>\n    <button-scan-trip></button-scan-trip>\n    <div class=\"clearfix\"></div>\n  </footer><!-- end footer -->\n\n</div><!-- end content-global -->\n";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(92)
	__vue_template__ = __webpack_require__(93)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/TripTransfer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ModalWait = __webpack_require__(71);

	var _ModalWait2 = _interopRequireDefault(_ModalWait);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TRIP_URL = _common.urls.micro_api + '/trip'; // <template>
	//   <header-user-data></header-user-data>
	//   <modal-wait></modal-wait>
	//
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//         <h4 class="ac25-top-red-text">TRASBORDO DE<br />ENTREGA</h4>
	//         <p class="left clearfix ac25-subtitle"> Hub: Bodega Huechuraba </p>
	//         <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//
	//         <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
	//           <li> Entregue los <span class="ac25-large-font">{{trip_items_remaining_counter}}</span> bultos / Viaje #{{trip.id}}</li>
	//           <li> Asegúrese bien que la pesona que recepciona firme la orden de trasbordo.</li>
	//         </ul>
	//
	//         <div class="clearfix"></div>
	//         <a @click="print('items-list-trip')" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="html/images/print.png" class="left" /><span>imprimir listado de bultos</span> </a>
	//       </div><!-- end content-inner-holder -->
	//     </div><!-- end container -->
	//
	//     <footer class="ac25-content-footer">
	//       <a @click="finishTransfer()" class="ac25-full-red-custom-dev right waves-effect waves-light" style="padding:100px 20px">terminar</a>
	//     </footer><!-- end footer -->
	//
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TripTransfer',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ModalWait: _ModalWait2.default
	  },
	  vuex: {
	    getters: {
	      operation_type: _getters.getOperationType,
	      trip: _getters.getTrip,
	      trip_items_remaining_counter: _getters.getTripItemsRemainingCounter
	    }
	  },
	  data: function data() {
	    return {
	      grocer: false
	    };
	  },

	  ready: function ready() {
	    var grocer = _ls2.default.get('grocer');
	    this.grocer = grocer;

	    console.info('TripTransfer is ready for ' + (grocer ? 'Grocer' : 'OPL') + ' ===================================');
	  },
	  methods: {
	    print: function print(label) {
	      var setup = _ls2.default.get('setup');

	      if (!setup || !setup.printerMAC) {
	        return this.$route.router.go('/setup');
	      }

	      var mac = $.trim(setup.printerMAC).toUpperCase();
	      var trip_id = this.trip.id;

	      _ModalWait2.default.showIt(true, 'printing');
	      this.$http.get(TRIP_URL + '/' + trip_id + '/opl-get-zpl/' + label + '/' + this.operation_type + '/' + (this.grocer ? 'grocer' : 'opl')).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        console.info(response, 'success callback');
	        console.info(label, 'Imprimiendo trip #' + trip_id + ' en impresora MAC: ' + mac);

	        var text = response.data.text;
	        if (!text) {
	          return alert('Texto no ha arrivado. Abortando impresión.');
	        }

	        cordova.plugins.zbtprinter.print(mac, text, function (success) {}, function (fail) {
	          alert('Fallo en plugin de impresión. Posiblemente ha ingresado una dirección MAC incorrecta. Error interno: ' + fail);
	        });
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    },
	    finishTransfer: function finishTransfer() {
	      var _this = this;

	      var trip_id = this.trip.id;

	      if (this.grocer) {
	        return this.$route.router.go('/stand-by-grocer');
	      } else {

	        var setup = _ls2.default.get('setup');
	        if (!setup || !setup.vehicleSelected) {
	          return this.$route.router.go('/setup');
	        }

	        var vehicleSelected = setup.vehicleSelected;

	        this.$http.post(TRIP_URL + '/finish-transfer', {
	          trip_id: trip_id,
	          vehicle_id: vehicleSelected

	        }).then(function (response) {
	          console.info(response, 'success callback');
	          _this.$route.router.go('/stand-by');
	        }, function (response) {
	          console.info(response.data, 'error callback');
	        });
	      }
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <modal-wait></modal-wait>\n\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n        <h4 class=\"ac25-top-red-text\">TRASBORDO DE<br />ENTREGA</h4>\n        <p class=\"left clearfix ac25-subtitle\"> Hub: Bodega Huechuraba </p>\n        <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n\n        <ul class=\"ac25-red-list clearfix ac25-fleft ac25-mtop60\">\n          <li> Entregue los <span class=\"ac25-large-font\">{{trip_items_remaining_counter}}</span> bultos / Viaje #{{trip.id}}</li>\n          <li> Asegúrese bien que la pesona que recepciona firme la orden de trasbordo.</li>\n        </ul>\n\n        <div class=\"clearfix\"></div>\n        <a @click=\"print('items-list-trip')\" class=\"ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light\"> <img src=\"" + __webpack_require__(75) + "\" class=\"left\" /><span>imprimir listado de bultos</span> </a>\n      </div><!-- end content-inner-holder -->\n    </div><!-- end container -->\n\n    <footer class=\"ac25-content-footer\">\n      <a @click=\"finishTransfer()\" class=\"ac25-full-red-custom-dev right waves-effect waves-light\" style=\"padding:100px 20px\">terminar</a>\n    </footer><!-- end footer -->\n\n  </div><!-- end content-global -->\n";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(95)
	__vue_template__ = __webpack_require__(96)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Print.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ModalWait = __webpack_require__(71);

	var _ModalWait2 = _interopRequireDefault(_ModalWait);

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _actions = __webpack_require__(18);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <modal-wait></modal-wait>
	//
	//   <ul class="ac25-main-menu">
	//     <li>
	//       <a class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <img src="html/images/print-big.png" alt="" />
	//           <p>imprimir</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a v-if="'pickup' == this.addressType"  @click="print('customer-order-full-pickup')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>orden completa</p>
	//         </div>
	//       </a>
	//       <a v-if="'delivery' == this.addressType"  @click="print('customer-order-full-delivery')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>orden completa</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a @click="print('internal-order')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>orden interna</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a v-if="'pickup' == this.addressType" @click="print('customer-pickup-order')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>orden cliente retiro</p>
	//         </div>
	//       </a>
	//       <a v-if="'delivery' == this.addressType" @click="print('customer-delivery-order')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>orden cliente entrega</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a __click="print('payments-history')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p><!-- historial de pago --></p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a v-if="'pickup' == this.addressType && order.pickup_adicionales_pdf != ''"   @click="print('customer-order-adicionales-pickup')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>adicionales retiro</p>
	//         </div>
	//       </a>
	//       <a v-if="'delivery' == this.addressType && order.delivery_adicionales_pdf != ''"   @click="print('customer-order-adicionales-delivery')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>adicionales entrega</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a onclick="window.history.back()" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>volver</p>
	//         </div>
	//       </a>
	//     </li>
	//   </ul><!-- end main-menu -->
	// </template>
	//
	// <script>
	var ORDER_URL = _common.urls.micro_api + '/order';

	exports.default = {
	  name: 'Print',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ModalWait: _ModalWait2.default
	  },
	  vuex: {
	    actions: {
	      showModal: _actions.showModal
	    },
	    getters: {
	      order: _getters.getOrder,
	      addressType: _getters.getAddressType
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  ready: function ready() {
	    console.info('=================================== Print is ready with this order: ', this.order.id);
	  },


	  methods: {
	    print: function print(label) {

	      var setup = _ls2.default.get('setup');

	      if (!setup || !setup.printerMAC) {
	        return this.$route.router.go('/setup');
	      }

	      var mac = $.trim(setup.printerMAC).toUpperCase();
	      var order_id = this.order.id;

	      _ModalWait2.default.showIt(true, 'printing');
	      this.$http.get(ORDER_URL + '/' + order_id + '/opl-get-zpl/' + label).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        console.info(response, 'success callback');
	        console.info(label, 'Imprimiendo order #' + order_id + ' en impresora MAC: ' + mac);

	        var text = response.data.text;
	        if (!text) {
	          return alert('Texto no ha arrivado. Abortando impresión.');
	        }

	        cordova.plugins.zbtprinter.print(mac, text, function (success) {}, function (fail) {
	          alert('Fallo en plugin de impresión. Posiblemente ha ingresado una dirección MAC incorrecta. Error interno: ' + fail);
	        });
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <modal-wait></modal-wait>\n\n  <ul class=\"ac25-main-menu\">\n    <li>\n      <a class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <img src=\"" + __webpack_require__(57) + "\" alt=\"\" />\n          <p>imprimir</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a v-if=\"'pickup' == this.addressType\"  @click=\"print('customer-order-full-pickup')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>orden completa</p>\n        </div>\n      </a>\n      <a v-if=\"'delivery' == this.addressType\"  @click=\"print('customer-order-full-delivery')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>orden completa</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a @click=\"print('internal-order')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>orden interna</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a v-if=\"'pickup' == this.addressType\" @click=\"print('customer-pickup-order')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>orden cliente retiro</p>\n        </div>\n      </a>\n      <a v-if=\"'delivery' == this.addressType\" @click=\"print('customer-delivery-order')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>orden cliente entrega</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a __click=\"print('payments-history')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p><!-- historial de pago --></p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a v-if=\"'pickup' == this.addressType && order.pickup_adicionales_pdf != ''\"   @click=\"print('customer-order-adicionales-pickup')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>adicionales retiro</p>\n        </div>\n      </a>\n      <a v-if=\"'delivery' == this.addressType && order.delivery_adicionales_pdf != ''\"   @click=\"print('customer-order-adicionales-delivery')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>adicionales entrega</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a onclick=\"window.history.back()\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>volver</p>\n        </div>\n      </a>\n    </li>\n  </ul><!-- end main-menu -->\n";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(98)
	__vue_template__ = __webpack_require__(99)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Scan.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ModalWait = __webpack_require__(71);

	var _ModalWait2 = _interopRequireDefault(_ModalWait);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _common = __webpack_require__(7);

	var _actions = __webpack_require__(18);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <modal-wait></modal-wait>
	//
	//   <div class="ac25-content-global">
	//     <div class="ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right">
	//
	//       <div class="container">
	//         <table class="standard-table version2 margin-top-20">
	//           <thead>
	//             <tr>
	//               <th>ID</th>
	//               <th>Nombre</th>
	//               <th>QR</th>
	//             </tr>
	//           </thead>
	//             <tr v-for="item in item_list" class="border-solid aling-bottom click" @click="scanItem(item.id)">
	//               <td><p class="border-red-bottom">{{ item.id }}</p></td>
	//               <td><p class="border-red-bottom">{{ item.name }}</p></td>
	//               <td><p class="border-red-bottom">{{ item.qr_id ? item.qr_id : 'NO ESCANEADO' }}</p></td>
	//             </tr>
	//         </table>
	//
	//         <p class="ac25-mid-page-paragraph">{{item_name_info}}</p>
	//       </div>
	//     </div><!-- end content-inner-holder -->
	//
	//     <footer class="ac25-newfoot ac25-height-auto">
	//       <a @click="back()" class="ac25-full-black waves-effect waves-light">volver</a>
	//     </footer><!-- end footer -->
	//
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>
	var ORDER_URL = _common.urls.micro_api + '/order';
	var barcodeScannerOptions = {
	  "preferFrontCamera": false, // iOS and Android
	  "showFlipCameraButton": true, // iOS and Android
	  "prompt": "Apuntar a codigo QR", // supported on Android only
	  "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
	  "orientation": "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
	};

	exports.default = {
	  name: 'Scan',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ModalWait: _ModalWait2.default
	  },
	  vuex: {
	    actions: {
	      showModal: _actions.showModal,
	      storeData: _actions.storeData,
	      setCounters: _actions.setCounters
	    },
	    getters: {
	      order: _getters.getOrder,
	      item: _getters.getItem,
	      counters: _getters.getCounters,
	      addressType: _getters.getAddressType
	    }
	  },
	  data: function data() {
	    return {
	      item: [],
	      qr_id: 0,
	      item_id_info: '',
	      item_name_info: '',
	      // v02
	      item_list: [],
	      item_id: 0
	    };
	  },

	  methods: {
	    back: function back() {
	      var addressType = _ls2.default.get('addressType');

	      if ('pickup' == this.addressType) {
	        return this.$route.router.go('/event-pickup');
	      }if ('delivery' == this.addressType) {
	        return this.$route.router.go('/event-delivery');
	      } else {
	        return this.$route.router.go('/available');
	      }
	    },


	    // really scan
	    // -----------
	    scanItem: function scanItem(item_id) {
	      var that = this;

	      if (typeof this.item_list[item_id] != 'undefined') {

	        var item = this.item_list[item_id];
	        this.item = item;

	        this.storeData({
	          type: 'item',
	          content: item
	        });
	      } else {
	        this.item_name_info = 'No hay más items que escanear para la orden ' + this.order.special_id;
	        return;
	      }

	      cordova.plugins.barcodeScanner.scan(function (result) {
	        console.info("RESULT\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);

	        if (result.cancelled) {
	          that.switherParseQrScanResult('Scan cancelled >:');
	        } else {
	          that.switherParseQrScanResult(null, result, item_id);
	        }
	      }, function (error) {
	        that.switherParseQrScanResult(error);
	      }, barcodeScannerOptions);
	    },
	    scan: function scan() {
	      var that = this;

	      cordova.plugins.barcodeScanner.scan(function (result) {
	        console.info("RESULT\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);

	        if (result.cancelled) {
	          that.switherParseQrScanResult('Scan cancelled >:');
	        } else {
	          that.switherParseQrScanResult(null, result);
	        }
	      }, function (error) {
	        that.switherParseQrScanResult(error);
	      }, barcodeScannerOptions);
	    },
	    switherParseQrScanResult: function switherParseQrScanResult(error, result, item_id) {
	      if (error) {
	        console.info("Scanning failed: " + error);
	        this.$route.router.go('/scan-failed');
	      } else {
	        var qr_id = result.text;

	        if (item_id) {
	          this.item_id = item_id;
	          this.item.qr_id = qr_id;
	          this.qr_id = qr_id;
	          this.updateItem();
	        } else {
	          this.item.qr_id = qr_id;
	          this.qr_id = qr_id;
	          this.updateItem();
	        }
	      }
	    },


	    // get next item to scan
	    // ---------------------
	    requestItem: function requestItem() {
	      var _this = this;

	      var order_id = this.order.id;
	      var item_id = 0;
	      var qr_id = 0;
	      var addressType = this.addressType;

	      _ModalWait2.default.showIt(true, 'scan-item');
	      this.$http.post(ORDER_URL + '/scan-item', {
	        order_id: order_id,
	        item_id: item_id,
	        qr_id: qr_id,
	        address_type: addressType
	      }).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        var data = response.data;
	        _this.switherParseItemRequest(null, data);
	      }, function (response) {
	        _ModalWait2.default.showIt(false);

	        _this.switherParseItemRequest(response);
	      });
	    },
	    switherParseItemRequest: function switherParseItemRequest(error, data) {
	      this.showModal(false);
	      console.info('(requestItem) data from ' + ORDER_URL + '/scan-item', data);

	      if (error) {

	        console.info(error, 'error callback');
	        this.$route.router.go('/scan-failed');
	      } else {

	        var item = data.item;
	        var user_messages = data.user_messages;

	        /**
	         * update item
	         * and placeholders
	         */
	        this.item = item; // esto esta bien

	        this.storeData({
	          type: 'item',
	          content: item
	        });

	        if (!item.length) {
	          this.item_id_info = '';
	          this.item_name_info = 'No hay más items que escanear para la orden ' + this.order.special_id;
	          return;
	        }

	        if (item.qr_id && item.qr_id > 0) {
	          this.item_id_info = 'item id #' + item.id + '<br />QR #' + item.qr_id;
	        } else {
	          this.item_id_info = 'item id #' + item.id;
	        }

	        this.item_name_info = item.name;

	        /**
	         * all ok here, waiting for user click scan button
	         */
	      }
	    },


	    // update item in db, call api
	    // --------------------------
	    updateItem: function updateItem(item_id) {
	      var _this2 = this;

	      var order_id = this.order.id;
	      var qr_id = this.qr_id;
	      var addressType = this.addressType;

	      if (!item_id) {
	        item_id = this.item.id;
	      }

	      _ModalWait2.default.showIt(true, 'scan-item');
	      this.$http.post(ORDER_URL + '/scan-item', {
	        // ------------------------------------------
	        order_id: order_id,
	        item_id: item_id,
	        qr_id: qr_id,
	        address_type: addressType

	      }).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        var data = response.data;
	        _this2.switherParseItemUpdated(null, data);
	      }, function (response) {
	        _ModalWait2.default.showIt(false);

	        _this2.switherParseItemUpdated(response);
	      });
	    },
	    switherParseItemUpdated: function switherParseItemUpdated(error, data) {
	      this.showModal(false);
	      console.info('(updateItem) data from ' + ORDER_URL + '/scan-item', data);

	      if (error) {

	        console.info(error, 'error callback');
	        this.$route.router.go('/scan-failed');
	      } else {

	        console.info(data, 'success callback');

	        // centralizar estos mensajes?
	        var user_messages = data.user_messages;
	        if (user_messages.length) {
	          alert(user_messages);
	        }

	        if (data.OK) {

	          // update items to scan
	          console.info('update items to scan < ----------------------------------------------------------------');
	          this.setCounters({
	            type: 'items_to_scan_remaining',
	            content: -1
	          });

	          console.info('counters.items_to_scan_remaining: ', this.counters.items_to_scan_remaining);

	          if (!this.counters.items_to_scan_remaining) {
	            return this.$route.router.go('/scan-finished');
	          }
	          return this.$route.router.go('/scan-succesful');
	        } else {

	          console.info(error, 'error callback');
	          this.$route.router.go('/scan-failed');
	        }
	      }
	    },
	    requestItemList: function requestItemList() {
	      var _this3 = this;

	      var order_id = this.order.id;
	      var addressType = this.addressType;

	      _ModalWait2.default.showIt(true, 'scan-item');
	      this.$http.post(ORDER_URL + '/scan-item-list', {
	        order_id: order_id,
	        address_type: addressType

	      }).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        var data = response.data;

	        if (data.success) {
	          console.info(data.items);
	          _this3.item_list = data.items;
	        }
	      }, function (response) {
	        _ModalWait2.default.showIt(false);

	        _this3.switherParseItemRequest(response);
	      });
	    }
	  },
	  ready: function ready() {
	    console.info('=================================== Scan is ready with this order: ', this.order.id);
	    this.requestItemList();
	  }
	};
	// </script>
	//

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <modal-wait></modal-wait>\n\n  <div class=\"ac25-content-global\">\n    <div class=\"ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right\">\n\n      <div class=\"container\">\n        <table class=\"standard-table version2 margin-top-20\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Nombre</th>\n              <th>QR</th>\n            </tr>\n          </thead>\n            <tr v-for=\"item in item_list\" class=\"border-solid aling-bottom click\" @click=\"scanItem(item.id)\">\n              <td><p class=\"border-red-bottom\">{{ item.id }}</p></td>\n              <td><p class=\"border-red-bottom\">{{ item.name }}</p></td>\n              <td><p class=\"border-red-bottom\">{{ item.qr_id ? item.qr_id : 'NO ESCANEADO' }}</p></td>\n            </tr>\n        </table>\n\n        <p class=\"ac25-mid-page-paragraph\">{{item_name_info}}</p>\n      </div>\n    </div><!-- end content-inner-holder -->\n\n    <footer class=\"ac25-newfoot ac25-height-auto\">\n      <a @click=\"back()\" class=\"ac25-full-black waves-effect waves-light\">volver</a>\n    </footer><!-- end footer -->\n\n  </div><!-- end content-global -->\n";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(101)
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/PrintTrip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ModalWait = __webpack_require__(71);

	var _ModalWait2 = _interopRequireDefault(_ModalWait);

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _actions = __webpack_require__(18);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <modal-wait></modal-wait>
	//
	//   <ul class="ac25-main-menu">
	//     <li>
	//       <a class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <img src="html/images/print-big.png" alt="" />
	//           <p>imprimir</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a @click="print('invoice')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p v-if="order.dte_type == 33">factura</p>
	//           <p v-if="order.dte_type == 39">boleta</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a @click="print('internal-order')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>orden interna</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a @click="print('items-list-trip')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>lista de bultos</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a __click="print('payments-history')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p><!-- historial de pago --></p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a __click="scan('special')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p><!-- especial --></p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a onclick="window.history.back()" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>volver</p>
	//         </div>
	//       </a>
	//     </li>
	//   </ul><!-- end main-menu -->
	// </template>
	//
	// <script>
	var TRIP_URL = _common.urls.micro_api + '/trip';

	exports.default = {
	  name: 'Print',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ModalWait: _ModalWait2.default
	  },
	  vuex: {
	    actions: {
	      showModal: _actions.showModal
	    },
	    getters: {
	      operation_type: _getters.getOperationType,
	      trip: _getters.getTrip
	    }
	  },
	  data: function data() {
	    return {
	      grocer: false
	    };
	  },
	  ready: function ready() {
	    console.info('=================================== Print is ready with this trip: ', this.trip.id);
	    var grocer = _ls2.default.get('grocer');
	    this.grocer = grocer;
	  },


	  methods: {
	    print: function print(label) {

	      var setup = _ls2.default.get('setup');

	      if (!setup || !setup.printerMAC) {
	        return this.$route.router.go('/setup');
	      }

	      var mac = $.trim(setup.printerMAC).toUpperCase();
	      var trip_id = this.trip.id;

	      _ModalWait2.default.showIt(true, 'printing');
	      this.$http.get(TRIP_URL + '/' + trip_id + '/opl-get-zpl/' + label + '/' + this.operation_type + '/' + (this.grocer ? 'grocer' : 'opl')).then(function (response) {
	        _ModalWait2.default.showIt(false);

	        console.info(response, 'success callback');
	        console.info(label, 'Imprimiendo trip #' + trip_id + ' en impresora MAC: ' + mac);

	        var text = response.data.text;
	        if (!text) {
	          return alert('Texto no ha arrivado. Abortando impresión.');
	        }

	        cordova.plugins.zbtprinter.print(mac, text, function (success) {}, function (fail) {
	          alert('Fallo en plugin de impresión. Posiblemente ha ingresado una dirección MAC incorrecta. Error interno: ' + fail);
	        });
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <modal-wait></modal-wait>\n\n  <ul class=\"ac25-main-menu\">\n    <li>\n      <a class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <img src=\"" + __webpack_require__(57) + "\" alt=\"\" />\n          <p>imprimir</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a @click=\"print('invoice')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p v-if=\"order.dte_type == 33\">factura</p>\n          <p v-if=\"order.dte_type == 39\">boleta</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a @click=\"print('internal-order')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>orden interna</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a @click=\"print('items-list-trip')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>lista de bultos</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a __click=\"print('payments-history')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p><!-- historial de pago --></p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a __click=\"scan('special')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p><!-- especial --></p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a onclick=\"window.history.back()\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>volver</p>\n        </div>\n      </a>\n    </li>\n  </ul><!-- end main-menu -->\n";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(104)
	__vue_template__ = __webpack_require__(105)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/ScanTrip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ModalWait = __webpack_require__(71);

	var _ModalWait2 = _interopRequireDefault(_ModalWait);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _common = __webpack_require__(7);

	var _actions = __webpack_require__(18);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <modal-wait></modal-wait>
	//
	//   <div class="ac25-content-global">
	//     <div class="ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right">
	//       <ul class="ac25-scan-list">
	//         <li>
	//           <a class="waves-effect waves-light">
	//             <div class="ac25-scan-list-content">
	//               <img class="ac25-scanlist-scan-code" src="html/images/barcode-big-2.png" />
	//               <div class="clearfix"></div>
	//               <span class="ac25-scanlist-scan-text">escanear</span>
	//             </div>
	//           </a>
	//         </li>
	//         <li>
	//           <a>
	//             <div class="ac25-scan-list-content">
	//               <p class="ac25-no-margin" v-if="trip_items_remaining_counter > 0">Quedan ({{trip_items_remaining_counter}}) bultos por escanear</p>
	//               <p class="ac25-no-margin" v-if="trip_items_remaining_counter <= 0">escaneo listo</p>
	//             </div>
	//           </a>
	//         </li>
	//       </ul><!-- end scan-list -->
	//       <div class="container">
	//         <p class="ac25-mid-page-paragraph">{{item_name_info}}</p>
	//       </div>
	//     </div><!-- end content-inner-holder -->
	//
	//     <footer class="ac25-newfoot ac25-height-auto">
	//       <a @click="scan()" v-if="trip_items_remaining_counter > 0" class="ac25-full-red-custom-dev waves-effect waves-light" style="padding:100px 0;">presione para escanear item</a>
	//       <a @click="back()" class="ac25-full-black waves-effect waves-light">volver</a>
	//     </footer><!-- end footer -->
	//
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>
	var TRIP_URL = _common.urls.micro_api + '/trip';

	var barcodeScannerOptions = {
	  "preferFrontCamera": true, // iOS and Android
	  "showFlipCameraButton": true, // iOS and Android
	  "prompt": "Apuntar a codigo QR", // supported on Android only
	  "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
	  "orientation": "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
	};

	exports.default = {
	  name: 'ScanTrip',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ModalWait: _ModalWait2.default
	  },
	  vuex: {
	    actions: {
	      showModal: _actions.showModal,
	      storeData: _actions.storeData
	    },
	    getters: {
	      trip: _getters.getTrip,
	      item: _getters.getItem,
	      trip_items_remaining_counter: _getters.getTripItemsRemainingCounter,
	      operation_type: _getters.getOperationType
	    }
	  },
	  data: function data() {
	    return {
	      item: [],
	      qr_id: 0,
	      grocer: false
	    };
	  },

	  methods: {
	    back: function back() {
	      var _this = this;

	      var trip_id = this.trip.id;

	      if (this.grocer) {
	        return this.$route.router.go('/stand-by-grocer');
	      } else {

	        var setup = _ls2.default.get('setup');
	        if (!setup || !setup.vehicleSelected) {
	          return this.$route.router.go('/setup');
	        }

	        var vehicleSelected = setup.vehicleSelected;

	        this.$http.post(TRIP_URL + '/finish-scan', {
	          trip_id: trip_id,
	          vehicle_id: vehicleSelected,
	          operator_type: this.grocer ? 'grocer' : 'opl'

	        }).then(function (response) {
	          console.info(response, 'success callback');
	          _this.$route.router.go('/stand-by');
	        }, function (response) {
	          console.info(response.data, 'error callback');
	        });
	      }
	    },


	    // REALLY SCAN
	    // -----------
	    scan: function scan() {
	      var that = this;

	      cordova.plugins.barcodeScanner.scan(function (result) {
	        console.info("RESULT\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);

	        if (result.cancelled) {
	          that.switherParseQrScanResult('Scan cancelled >:');
	        } else {
	          that.switherParseQrScanResult(null, result);
	        }
	      }, function (error) {
	        that.switherParseQrScanResult(error);
	      }, barcodeScannerOptions);
	    },


	    /**
	     * Parse QR Scan Result
	     * --------------------
	     */
	    switherParseQrScanResult: function switherParseQrScanResult(error, result) {
	      if (error) {
	        console.info("Scanning failed: " + error);
	        this.$route.router.go('/scan-failed-trip');
	      } else {
	        var qr_id = result.text;
	        this.qr_id = qr_id;
	        this.updateItem();
	      }
	    },


	    /**
	     * Get next item to scan
	     * ---------------------
	     */
	    requestItem: function requestItem() {
	      var _this2 = this;

	      var trip_id = this.trip.id;
	      var operation_type = this.operation_type;

	      this.showModal(true);
	      this.$http.get(TRIP_URL + '/' + trip_id + '/grocer-publish/' + operation_type + '/' + (this.grocer ? 'grocer' : 'opl')).then(function (response) {

	        if (!response.data || !response.data.trip) {
	          return alert('Viaje no existe');
	        }

	        var trip = response.data.trip;
	        var items_remaining = response.data.items_remaining;

	        _this2.storeData({
	          type: 'trip',
	          content: trip
	        });

	        _this2.storeData({
	          type: 'trip_items_remaining_counter',
	          content: items_remaining.length
	        });
	      }, function (response) {
	        _this2.switherParseItemRequest(response);
	      });
	    },


	    /**
	     * Send QR and trip
	     * ----------------
	     */
	    updateItem: function updateItem() {
	      var _this3 = this;

	      var trip_id = this.trip.id;
	      var qr_id = this.qr_id;
	      var operation_type = this.operation_type;

	      this.showModal(true);
	      this.$http.post(TRIP_URL + '/scan-item', {

	        trip_id: trip_id,
	        qr_id: qr_id,
	        operation_type: operation_type,
	        operator_type: this.grocer ? 'grocer' : 'opl'

	      }).then(function (response) {

	        var data = response.data;
	        var success = data.success;
	        var item = data.item;

	        var user_messages = data.user_messages;
	        if (user_messages.length) {
	          alert(user_messages);
	        }

	        /**
	         * Update item is store
	         * to show in ScanSuccesfulTrip
	         */
	        _this3.item = item;

	        _this3.storeData({
	          type: 'item',
	          content: item
	        });

	        if (success) {
	          return _this3.$route.router.go('/scan-succesful-trip');
	        }

	        return _this3.$route.router.go('/scan-failed-trip');
	      }, function (response) {

	        _this3.switherParseItemUpdated(response);
	      });
	    }
	  },

	  /**
	   * Ready
	   * -----
	   */
	  ready: function ready() {

	    var grocer = _ls2.default.get('grocer');
	    this.grocer = grocer;

	    console.info('Scan is ready for ' + (grocer ? 'Grocer' : 'OPL') + ' ===================================');
	    console.info('trip', this.trip, 'counters', this.trip_items_remaining_counter);

	    this.requestItem();
	  }
	};
	// </script>
	//

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <modal-wait></modal-wait>\n\n  <div class=\"ac25-content-global\">\n    <div class=\"ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right\">\n      <ul class=\"ac25-scan-list\">\n        <li>\n          <a class=\"waves-effect waves-light\">\n            <div class=\"ac25-scan-list-content\">\n              <img class=\"ac25-scanlist-scan-code\" src=\"" + __webpack_require__(61) + "\" />\n              <div class=\"clearfix\"></div>\n              <span class=\"ac25-scanlist-scan-text\">escanear</span>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a>\n            <div class=\"ac25-scan-list-content\">\n              <p class=\"ac25-no-margin\" v-if=\"trip_items_remaining_counter > 0\">Quedan ({{trip_items_remaining_counter}}) bultos por escanear</p>\n              <p class=\"ac25-no-margin\" v-if=\"trip_items_remaining_counter <= 0\">escaneo listo</p>\n            </div>\n          </a>\n        </li>\n      </ul><!-- end scan-list -->\n      <div class=\"container\">\n        <p class=\"ac25-mid-page-paragraph\">{{item_name_info}}</p>\n      </div>\n    </div><!-- end content-inner-holder -->\n\n    <footer class=\"ac25-newfoot ac25-height-auto\">\n      <a @click=\"scan()\" v-if=\"trip_items_remaining_counter > 0\" class=\"ac25-full-red-custom-dev waves-effect waves-light\" style=\"padding:100px 0;\">presione para escanear item</a>\n      <a @click=\"back()\" class=\"ac25-full-black waves-effect waves-light\">volver</a>\n    </footer><!-- end footer -->\n\n  </div><!-- end content-global -->\n";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(107)
	__vue_script__ = __webpack_require__(109)
	__vue_template__ = __webpack_require__(111)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Payment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(108);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ac17d50e&file=Payment.vue!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Payment.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ac17d50e&file=Payment.vue!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Payment.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(25)();
	// imports


	// module
	exports.push([module.id, "\n#ec_choose_image_verify {\n  display: none;\n  z-index: 10;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  position: absolute;\n  background-color: black;\n}\n\n#ec_image_verify_img {\n  top: 30px;\n  left: 0px;\n  right: 0px;\n  bottom: 150px;\n  position: fixed;\n  overflow: auto;\n}\n\n#ec_image_verify_img img {\n  height: 1060px;\n}\n\n#ec_image_verify_button {\n  bottom: 0px;\n  width: 100%;\n  height: 150px;\n  font-size: 30px;\n  position: fixed;\n  background-color: crimson;\n}\n\n.ec_receipt_buttons {\n  z-index: 4;\n  width: 100%;\n  height: 40px;\n  font-size: 40px;\n  background-color: aliceblue;\n  margin-top: 20px;\n}\n\n.ec_receipt_textbox {\n  font-size: 50px !important;\n  text-align: right;\n}\n\n#ec_choose_transfer_verify,\n#ec_choose_loading,\n#ec_choose_transfer_submit {\n  display: none;\n}\n\n#ec_choose_transfer_verify {\n  background-color: crimson;\n  color: white;\n}\n\n#ec_choose_transfer_submit {\n  background-color: rgb(0, 191, 0);\n  color: white;\n}\n", ""]);

	// exports


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(52);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _common = __webpack_require__(7);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ModalWait = __webpack_require__(71);

	var _ModalWait2 = _interopRequireDefault(_ModalWait);

	var _NotificationIcon = __webpack_require__(46);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(50);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(58);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	var _upload = __webpack_require__(110);

	var _upload2 = _interopRequireDefault(_upload);

	var _getters = __webpack_require__(29);

	var _actions = __webpack_require__(18);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Subir voucher
	 */
	// <template>
	//   <header-user-data></header-user-data>
	//   <modal-wait></modal-wait>
	//   <div class="ac25-content-global" id="windowPagos">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder padding-bottom-none row">
	//         <h4 class="ac25-top-red-text">ESTADO DE CUENTA</h4>
	//         <p class="ac25-order-number-info">
	//           <span>ORDEN {{order.special_id}}</span>
	//           <notification-icon></notification-icon>
	//         </p>
	//         <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//       </div>
	//       <div class="ac25-content-inner-holder without-padding-bottom row" style="margin-top: -30px">
	//         <div class="row">
	//           <div class="col s12">
	//             <ul class="ac25-info-list ac25-w100">
	//               <li>
	//                 <p class="ac25-info-list-content"> nombre: {{ infoName}} </p>
	//               </li>
	//               <li>
	//                 <p class="ac25-info-list-content"> teléfono: {{ infoPhone }} </p>
	//               </li>
	//               <li>
	//                 <p class="ac25-info-list-content"> dirección: {{order.pickupAddress_name}} </p>
	//               </li>
	//               <li>
	//                 <p class="ac25-info-list-content"> deparmento: {{order.pickupAddress_apt ? order.pickupAddress_apt : 'N/A'}} </p>
	//               </li>
	//               <li>
	//                 <p class="ac25-info-list-content">MTS3: {{order.items_volume}}</p>
	//               </li>
	//               <li>
	//                 <p class="ac25-info-list-content">bultos: {{order.items_amount}}</p>
	//               </li>
	//               <li>
	//                 <p class="ac25-info-list-content">precio: {{order.price_printable}}</p>
	//               </li>
	//             </ul>
	//           </div>
	//         </div>
	//         <div class="estados-box">
	//           <p class="estados-middle yellow" v-if="order.paymentStatus_id != 3" v-bind:style="{ background: order.paymentStatus_color }">{{ order.paymentStatus_name }}</p>
	//           <p class="estados-middle yellow" v-if="order.paymentStatus_id == 3" v-bind:style="{ background: order.paymentStatus_color }">PAGO PENDIENTE
	//             <br />${{order.paymentRemaining}}</p>
	//         </div>
	//       </div>
	//       <!-- end content-inner-holder -->
	//       <div class="ac25-content-inner-holder without-padding-bottom row" v-if="order.payments_array.length" style="margin-top: -50px">
	//         <p class="big-title sub"> Listado de pagos</p>
	//         <table class="standard-table version2">
	//           <thead>
	//             <tr>
	//               <th>Monto</th>
	//               <th>Fecha</th>
	//               <th>Medio de Pago</th>
	//             </tr>
	//           </thead>
	//           <tr v-for="payment in order.payments_array" class="border-solid">
	//             <td>
	//               <p class="border-red-bottom">${{ payment.total_amount }}</p>
	//             </td>
	//             <td>
	//               <p class="border-red-bottom">{{ payment.created_at }}</p>
	//             </td>
	//             <td>
	//               <p class="border-red-bottom">{{payment.payment_gateway ? payment.payment_gateway : 'Crédito'}}</p>
	//             </td>
	//           </tr>
	//         </table>
	//       </div>
	//       <!-- end white-holder -->
	//       <div class="clearfix"></div>
	//     </div>
	//     <!-- end container -->
	//     <!-- end footer -->
	//     <footer class="ac25-content-footer">
	//       <a @click="openIngresoPago()" class="ac25-full-black left waves-effect waves-light" style="padding:20px">ingreso pago</a>
	//       <a @click="refresh()" class="ac25-full-black left waves-effect waves-light" style="padding:20px">refrescar</a>
	//       <a @click="back()" class="ac25-full-black left waves-effect waves-light" style="padding:20px">volver</a>
	//     </footer>
	//     <!-- end footer -->
	//   </div>
	//   <!--
	//     Ventana ingreso de pagos
	//     ------------------------
	//   -->
	//   <div class="ac25-content-global" id="windowIngresoPago">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder padding-bottom-none row">
	//         <h4 class="ac25-top-red-text">INGRESO DE PAGO</h4>
	//         <p class="ac25-order-number-info">
	//           <span>ORDEN {{order.special_id}}</span>
	//           <notification-icon></notification-icon>
	//         </p>
	//         <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//       </div>
	//       <div class="">
	//         <div class="row">
	//           <div class="col s12">
	//             <ul class="ac25-w100">
	//               <li>
	//                 <p class="ac25-info-list-content">
	//                   <input type="radio" name="ingreso_payment_gateway" id="ingreso_payment_gateway1" value="redcompra">
	//                   <label for="ingreso_payment_gateway1" style="font-size:30px">Redcompra</label>
	//                   <br />
	//                   <br />
	//                   <br />
	//                   <input type="radio" name="ingreso_payment_gateway" id="ingreso_payment_gateway2" value="creditcard">
	//                   <label for="ingreso_payment_gateway2" style="font-size:30px">Tarjeta de crédito</label>
	//                 </p>
	//               </li>
	//             </ul>
	//           </div>
	//         </div>
	//         <div class="row">
	//           <div class="col s12">
	//             <ul class="ac25-w100">
	//               <li>
	//                 <p class="" style="font-size:30px">
	//                   Ingrese monto de pago
	//                   <input type="number" name="ingreso_pago_amount" id="ingreso_pago_amount" class="ec_receipt_textbox">
	//                 </p>
	//                 <p class="" style="font-size:30px">
	//                   Ingrese código de autorización
	//                   <input type="number" name="ingreso_pago_authorization_code" id="ingreso_pago_authorization_code" class="ec_receipt_textbox">
	//                 </p>
	//               </li>
	//             </ul>
	//           </div>
	//         </div>
	//         <div class="row" style="margin-top: -100px">
	//           <div class="col s12">
	//             <ul class="ac25-w100">
	//               <li>
	//                 <p class="">
	//                   <div id="ec_choose_loading" style="font-size:30px;color:crimson">Procesando comprobante, espere...</div>
	//                   <input type="hidden" name="ingreso_pago_voucher_url" id="ingreso_pago_voucher_url">
	//                   <!-- ec_receipt_upload_buttons -->
	//                   <div id="ec_receipt_upload_buttons">
	//                     <!-- ec_choose_transfer_camera -->
	//                     <input type="button" id="ec_choose_transfer_camera" value="Fotografiar comprobante" class="ec_receipt_buttons">
	//                     <!-- ec_choose_transfer_file -->
	//                     <input type="button" id="ec_choose_transfer_file" value="Subir comprobante" class="ec_receipt_buttons">
	//                     <!-- ec_choose_transfer_verify -->
	//                     <input type="button" id="ec_choose_transfer_verify" value="Verificar comprobante" @click="verifyVoucher()" class="ec_receipt_buttons">
	//                     <!-- ec_choose_transfer_submit -->
	//                     <input type="button" id="ec_choose_transfer_submit" value="Guardar pago" @click="processForm()" class="ec_receipt_buttons">
	//                   </div>
	//                   <div id="ec_choose_image_verify">
	//                     <div id="ec_image_verify_img"></div>
	//                     <input type="button" id="ec_image_verify_button" value="OK">
	//                   </div>
	//                 </p>
	//               </li>
	//             </ul>
	//           </div>
	//         </div>
	//       </div>
	//       <!-- end white-holder -->
	//       <div class="clearfix"></div>
	//     </div>
	//     <!-- end container -->
	//     <footer class="ac25-content-footer">
	//       <a @click="closeIngresoPago()" class="ac25-full-black left waves-effect waves-light">cerrar</a>
	//     </footer>
	//     <!-- end footer -->
	//   </div>
	//   <!-- end content-global -->
	// </template>
	// <style>
	// #ec_choose_image_verify {
	//   display: none;
	//   z-index: 10;
	//   top: 0px;
	//   bottom: 0px;
	//   left: 0px;
	//   right: 0px;
	//   position: absolute;
	//   background-color: black;
	// }
	//
	// #ec_image_verify_img {
	//   top: 30px;
	//   left: 0px;
	//   right: 0px;
	//   bottom: 150px;
	//   position: fixed;
	//   overflow: auto;
	// }
	//
	// #ec_image_verify_img img {
	//   height: 1060px;
	// }
	//
	// #ec_image_verify_button {
	//   bottom: 0px;
	//   width: 100%;
	//   height: 150px;
	//   font-size: 30px;
	//   position: fixed;
	//   background-color: crimson;
	// }
	//
	// .ec_receipt_buttons {
	//   z-index: 4;
	//   width: 100%;
	//   height: 40px;
	//   font-size: 40px;
	//   background-color: aliceblue;
	//   margin-top: 20px;
	// }
	//
	// .ec_receipt_textbox {
	//   font-size: 50px !important;
	//   text-align: right;
	// }
	//
	// #ec_choose_transfer_verify,
	// #ec_choose_loading,
	// #ec_choose_transfer_submit {
	//   display: none;
	// }
	//
	// #ec_choose_transfer_verify {
	//   background-color: crimson;
	//   color: white;
	// }
	//
	// #ec_choose_transfer_submit {
	//   background-color: rgb(0, 191, 0);
	//   color: white;
	// }
	// </style>
	// <script>
	var ORDER_URL = _common.urls.micro_api + '/order';
	var MICRO_API_URL = _common.urls.micro_api;

	exports.default = (0, _defineProperty3.default)({
	  name: 'Payment',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    ModalWait: _ModalWait2.default,
	    NotificationIcon: _NotificationIcon2.default
	  },
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      addressType: _getters.getAddressType
	    },
	    actions: {
	      storeData: _actions.storeData
	    }
	  },
	  computed: {
	    payments: function payments() {
	      if (typeof this.order.payments.data !== 'undefined') {
	        return this.order.payments.data;
	      }
	      return this.order.payments;
	    }
	  },
	  data: function data() {
	    return {
	      show_volver_button: false
	    };
	  },
	  methods: {
	    refresh: function refresh() {
	      this.reload();
	    },
	    reload: function reload() {
	      var setup = _ls2.default.get('setup');

	      if (!setup || !setup.vehicleSelected) {
	        return this.$route.router.go('/setup');
	      }

	      _ModalWait2.default.showIt(true, 'refresh-order');
	      var vehicleSelected = setup.vehicleSelected;

	      this.$http.get(MICRO_API_URL + '/vehicle/' + vehicleSelected + '/opl-request-order').then(function (response) {
	        _ModalWait2.default.showIt(false);
	        if (response.data && response.data.success) {}
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    },
	    back: function back() {
	      return this.$route.router.go('/event-' + this.addressType);
	    },
	    processForm: function processForm() {
	      _upload2.default.processForm(this.order.id);
	    },
	    verifyVoucher: function verifyVoucher() {
	      _upload2.default.verifyVoucher();
	    },
	    openIngresoPago: function openIngresoPago() {
	      var $w1 = $('#windowPagos');
	      $w1.hide();
	      var $w2 = $('#windowIngresoPago');
	      $w2.show();
	    },
	    closeIngresoPago: function closeIngresoPago() {
	      var $w1 = $('#windowPagos');
	      $w1.show();
	      var $w2 = $('#windowIngresoPago');
	      $w2.hide();
	      this.reload();
	    }
	  },
	  ready: function ready() {
	    console.info('=================================== Payment is ready with this order: ', this.order.id);
	    this.reload();
	    _upload2.default.init();

	    /**
	     * open siempre ventana prncipal
	     */
	    this.closeIngresoPago();
	  }
	}, 'computed', {
	  infoName: function infoName() {
	    var name = this.order[this.addressType + 'Address_forperson'];
	    return name === '-' ? this.order.customer.name : name;
	  },
	  infoPhone: function infoPhone() {
	    var phone = this.order[this.addressType + 'Address_forperson_phone'];
	    return phone === '-' ? this.order.customer.phone : phone;
	  }
	});
	// </script>
	//

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _common = __webpack_require__(7);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _global = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import un objecto default
	// import una variable
	var MICRO_API_URL = _common.urls.micro_api; // modules are singletons!!!
	exports.default = {
	  max_size: 1048576 * 10,

	  init: function init() {
	    var that = this;

	    $('#ec_choose_transfer_camera').on('click', function () {
	      if (typeof navigator.device === 'undefined') {
	        return alert('Camera device needed', 'No hay acceso a la cámara.');
	      }
	      navigator.device.capture.captureImage(function (mediaFiles) {
	        var photo = mediaFiles[0];
	        var imageURI = photo.fullPath;
	        var fileName = photo.name;
	        that.uploadPhotoByFileTransfer(imageURI, fileName);
	      }, function (e) {
	        console.info(e);
	      }, {
	        limit: 1
	      });
	    });

	    $('#ec_choose_transfer_file').on('click', function () {
	      if (typeof navigator.camera === 'undefined') {
	        return alert('Camera device needed', 'No hay acceso a la cámara.');
	      }
	      navigator.camera.getPicture(function (imageURI) {
	        var fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1) + '.jpeg';
	        that.uploadPhotoByFileTransfer(imageURI, fileName);
	      }, function (message) {
	        console.info(message);
	      }, {
	        quality: 50,
	        destinationType: navigator.camera.DestinationType.FILE_URI,
	        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
	        saveToPhotoAlbum: false
	      });
	    });
	  },


	  /**
	   * Using FileTransfer/Camera Phonegap API
	   * https://github.com/tim-kos/transloadit_xhr/blob/master/transloadit_xhr.js
	   */
	  uploadPhotoByFileTransfer: function uploadPhotoByFileTransfer(imageURI, fileName) {
	    var ft = new FileTransfer();
	    var options = new FileUploadOptions();
	    var url = 'http://api2.transloadit.com/assemblies';
	    var that = this;
	    var params = {};

	    $('#ec_receipt_upload_buttons').hide();
	    $('#ec_choose_loading').show();

	    options.fileKey = 'file';
	    options.fileName = fileName;
	    options.mimeType = 'image/jpeg';

	    var paramsVariable = {
	      auth: {
	        key: _common.credentials.transloaditKey,
	        max_size: this.max_size
	      },
	      steps: {
	        thumb: {
	          use: ':original',
	          robot: '/image/resize',
	          width: 75,
	          height: 75,
	          resize_strategy: 'pad',
	          background: '#000000'
	        }
	      }
	    };

	    params.params = paramsVariable;
	    options.params = params;

	    ft.upload(imageURI, encodeURI(url), function (r) {
	      var assembly = JSON.parse(r.response);
	      that.weCool(assembly);
	    }, function (error) {
	      $('#ec_choose_loading').hide();
	      $('#ec_receipt_upload_buttons').show();
	      console.info(error);
	    }, options);
	  },
	  weCool: function weCool(assembly) {
	    $('#ec_choose_loading').hide();
	    $('#ec_receipt_upload_buttons').show();
	    var that = this;

	    try {

	      if (typeof assembly.uploads === 'undefined') {
	        throw new Error('Image url missing from Transloadit');
	      }

	      var receiptUrl = assembly.uploads[0].url;
	      console.info('receiptUrl', receiptUrl);
	      $('#ingreso_pago_voucher_url').val(receiptUrl);
	      $('#ec_choose_transfer_verify').show();
	      $('#ec_choose_transfer_submit').show();
	    } catch (e) {
	      return alert(e.message, 'No se ha podido enviar pago');
	    }
	  },
	  verifyVoucher: function verifyVoucher() {
	    var that = this;
	    var receiptUrl = $('#ingreso_pago_voucher_url').val();
	    $('#ec_choose_image_verify').show();
	    $('#ec_image_verify_img').css('padding', '5px');
	    $('#ec_image_verify_img').html('').append($('<img>', {
	      src: receiptUrl,
	      height: '100%'
	    }));
	    $('#ec_image_verify_button').click(function () {
	      $('#ec_choose_image_verify').hide();
	    });
	  },
	  processForm: function processForm(order_id) {

	    /** Some validation */
	    var errors = [];
	    var form = {};
	    form.order_id = order_id;

	    form.payment_gateway = $('input[name="ingreso_payment_gateway"]:checked').val();
	    form.voucher_url = $('#ingreso_pago_voucher_url').val();
	    form.amount = $('#ingreso_pago_amount').val();
	    form.authorization_code = $('#ingreso_pago_authorization_code').val();

	    if (!form.payment_gateway) {
	      errors.push('Ingrese Tipo de pago');
	    }
	    if (form.amount === '' || $.isNumeric(form.amount) === false) {
	      errors.push('Ingrese un Monto numérico');
	    }
	    if (form.authorization_code === '' || $.isNumeric(form.authorization_code) === false) {
	      errors.push('Ingrese un Código de autorización numérico');
	    }
	    if (!form.voucher_url) {
	      errors.push('Ingrese Voucher');
	    }

	    console.info('datos de pago:', form);
	    if (errors.length) {
	      alert("Por favor:\n" + errors.join("\n"));
	      return;
	    }

	    this.send(form);
	  },
	  send: function send(form) {
	    $('#ec_receipt_upload_buttons').hide();
	    $('#ec_choose_loading').show();
	    var url = MICRO_API_URL + '/payment/mobile-store';
	    console.info('url para pagar:', url);
	    console.info('form para pagar:', form);

	    _vue2.default.http.post(url, {
	      order_id: form.order_id,
	      amount: form.amount,
	      payment_gateway: form.payment_gateway,
	      payment_type: 'opl',
	      authorization_code: form.authorization_code,
	      voucher_url: form.voucher_url
	    }).then(function (response) {
	      $('#ec_receipt_upload_buttons').show();
	      $('#ec_choose_loading').hide();
	      $('#ec_choose_transfer_verify').hide();
	      $('#ec_choose_transfer_submit').hide();

	      if (!response.data || !response.data.success) {
	        alert('Pago no procesado 1');
	      } else {
	        alert('Pago procesado OK');
	        $('input[name="ingreso_payment_gateway"]').prop('checked', false);
	        $('#ingreso_pago_voucher_url').val('');
	        $('#ingreso_pago_amount').val('');
	        $('#ingreso_pago_authorization_code').val('');
	      }
	    }, function (response) {
	      $('#ec_receipt_upload_buttons').show();
	      $('#ec_choose_loading').hide();

	      console.info('response post:', response);
	      alert('Pago no procesado 2');
	    });
	  }
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <modal-wait></modal-wait>\n  <div class=\"ac25-content-global\" id=\"windowPagos\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder padding-bottom-none row\">\n        <h4 class=\"ac25-top-red-text\">ESTADO DE CUENTA</h4>\n        <p class=\"ac25-order-number-info\">\n          <span>ORDEN {{order.special_id}}</span>\n          <notification-icon></notification-icon>\n        </p>\n        <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n      </div>\n      <div class=\"ac25-content-inner-holder without-padding-bottom row\" style=\"margin-top: -30px\">\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <ul class=\"ac25-info-list ac25-w100\">\n              <li>\n                <p class=\"ac25-info-list-content\"> nombre: {{ infoName}} </p>\n              </li>\n              <li>\n                <p class=\"ac25-info-list-content\"> teléfono: {{ infoPhone }} </p>\n              </li>\n              <li>\n                <p class=\"ac25-info-list-content\"> dirección: {{order.pickupAddress_name}} </p>\n              </li>\n              <li>\n                <p class=\"ac25-info-list-content\"> deparmento: {{order.pickupAddress_apt ? order.pickupAddress_apt : 'N/A'}} </p>\n              </li>\n              <li>\n                <p class=\"ac25-info-list-content\">MTS3: {{order.items_volume}}</p>\n              </li>\n              <li>\n                <p class=\"ac25-info-list-content\">bultos: {{order.items_amount}}</p>\n              </li>\n              <li>\n                <p class=\"ac25-info-list-content\">precio: {{order.price_printable}}</p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"estados-box\">\n          <p class=\"estados-middle yellow\" v-if=\"order.paymentStatus_id != 3\" v-bind:style=\"{ background: order.paymentStatus_color }\">{{ order.paymentStatus_name }}</p>\n          <p class=\"estados-middle yellow\" v-if=\"order.paymentStatus_id == 3\" v-bind:style=\"{ background: order.paymentStatus_color }\">PAGO PENDIENTE\n            <br />${{order.paymentRemaining}}</p>\n        </div>\n      </div>\n      <!-- end content-inner-holder -->\n      <div class=\"ac25-content-inner-holder without-padding-bottom row\" v-if=\"order.payments_array.length\" style=\"margin-top: -50px\">\n        <p class=\"big-title sub\"> Listado de pagos</p>\n        <table class=\"standard-table version2\">\n          <thead>\n            <tr>\n              <th>Monto</th>\n              <th>Fecha</th>\n              <th>Medio de Pago</th>\n            </tr>\n          </thead>\n          <tr v-for=\"payment in order.payments_array\" class=\"border-solid\">\n            <td>\n              <p class=\"border-red-bottom\">${{ payment.total_amount }}</p>\n            </td>\n            <td>\n              <p class=\"border-red-bottom\">{{ payment.created_at }}</p>\n            </td>\n            <td>\n              <p class=\"border-red-bottom\">{{payment.payment_gateway ? payment.payment_gateway : 'Crédito'}}</p>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <!-- end white-holder -->\n      <div class=\"clearfix\"></div>\n    </div>\n    <!-- end container -->\n    <!-- end footer -->\n    <footer class=\"ac25-content-footer\">\n      <a @click=\"openIngresoPago()\" class=\"ac25-full-black left waves-effect waves-light\" style=\"padding:20px\">ingreso pago</a>\n      <a @click=\"refresh()\" class=\"ac25-full-black left waves-effect waves-light\" style=\"padding:20px\">refrescar</a>\n      <a @click=\"back()\" class=\"ac25-full-black left waves-effect waves-light\" style=\"padding:20px\">volver</a>\n    </footer>\n    <!-- end footer -->\n  </div>\n  <!--\n    Ventana ingreso de pagos\n    ------------------------\n  -->\n  <div class=\"ac25-content-global\" id=\"windowIngresoPago\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder padding-bottom-none row\">\n        <h4 class=\"ac25-top-red-text\">INGRESO DE PAGO</h4>\n        <p class=\"ac25-order-number-info\">\n          <span>ORDEN {{order.special_id}}</span>\n          <notification-icon></notification-icon>\n        </p>\n        <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n      </div>\n      <div class=\"\">\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <ul class=\"ac25-w100\">\n              <li>\n                <p class=\"ac25-info-list-content\">\n                  <input type=\"radio\" name=\"ingreso_payment_gateway\" id=\"ingreso_payment_gateway1\" value=\"redcompra\">\n                  <label for=\"ingreso_payment_gateway1\" style=\"font-size:30px\">Redcompra</label>\n                  <br />\n                  <br />\n                  <br />\n                  <input type=\"radio\" name=\"ingreso_payment_gateway\" id=\"ingreso_payment_gateway2\" value=\"creditcard\">\n                  <label for=\"ingreso_payment_gateway2\" style=\"font-size:30px\">Tarjeta de crédito</label>\n                </p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <ul class=\"ac25-w100\">\n              <li>\n                <p class=\"\" style=\"font-size:30px\">\n                  Ingrese monto de pago\n                  <input type=\"number\" name=\"ingreso_pago_amount\" id=\"ingreso_pago_amount\" class=\"ec_receipt_textbox\">\n                </p>\n                <p class=\"\" style=\"font-size:30px\">\n                  Ingrese código de autorización\n                  <input type=\"number\" name=\"ingreso_pago_authorization_code\" id=\"ingreso_pago_authorization_code\" class=\"ec_receipt_textbox\">\n                </p>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: -100px\">\n          <div class=\"col s12\">\n            <ul class=\"ac25-w100\">\n              <li>\n                <p class=\"\">\n                  <div id=\"ec_choose_loading\" style=\"font-size:30px;color:crimson\">Procesando comprobante, espere...</div>\n                  <input type=\"hidden\" name=\"ingreso_pago_voucher_url\" id=\"ingreso_pago_voucher_url\">\n                  <!-- ec_receipt_upload_buttons -->\n                  <div id=\"ec_receipt_upload_buttons\">\n                    <!-- ec_choose_transfer_camera -->\n                    <input type=\"button\" id=\"ec_choose_transfer_camera\" value=\"Fotografiar comprobante\" class=\"ec_receipt_buttons\">\n                    <!-- ec_choose_transfer_file -->\n                    <input type=\"button\" id=\"ec_choose_transfer_file\" value=\"Subir comprobante\" class=\"ec_receipt_buttons\">\n                    <!-- ec_choose_transfer_verify -->\n                    <input type=\"button\" id=\"ec_choose_transfer_verify\" value=\"Verificar comprobante\" @click=\"verifyVoucher()\" class=\"ec_receipt_buttons\">\n                    <!-- ec_choose_transfer_submit -->\n                    <input type=\"button\" id=\"ec_choose_transfer_submit\" value=\"Guardar pago\" @click=\"processForm()\" class=\"ec_receipt_buttons\">\n                  </div>\n                  <div id=\"ec_choose_image_verify\">\n                    <div id=\"ec_image_verify_img\"></div>\n                    <input type=\"button\" id=\"ec_image_verify_button\" value=\"OK\">\n                  </div>\n                </p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- end white-holder -->\n      <div class=\"clearfix\"></div>\n    </div>\n    <!-- end container -->\n    <footer class=\"ac25-content-footer\">\n      <a @click=\"closeIngresoPago()\" class=\"ac25-full-black left waves-effect waves-light\">cerrar</a>\n    </footer>\n    <!-- end footer -->\n  </div>\n  <!-- end content-global -->\n";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(113)
	__vue_template__ = __webpack_require__(114)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Call.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	var _getters = __webpack_require__(29);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var phoneMobile = ''; // <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//        <h4 class="ac25-top-red-text">LLAMADO</h4>
	//        <p class="left clearfix ac25-subtitle" style="width:60%">
	//          Seleccione una de las opciones para iniciar un llamado telefónico.
	//          <br />
	//          <br />
	//          Llame a cliente sólo en caso de ser necesario.
	//        </p>
	//        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//      </div><!-- end content-inner-holder -->
	//    </div><!-- end container -->
	//
	//    <footer class="ac25-content-footer">
	//      <div v-if="addressType == 'pickup'">
	//        <a class="ac25-full-red-custom-dev waves-effect waves-light without-bottom" v-if="!order.pickupAddress_forperson_phone">&nbsp;</a>
	//        <a href="tel:{{order.pickupAddress_forperson_phone}}" class="ac25-full-red-custom-dev waves-effect waves-light without-bottom" v-if="order.pickupAddress_forperson_phone">llamar al cliente ({{order.pickupAddress_forperson}})</a>
	//     </div>   
	//      <div v-if="addressType == 'delivery'">
	//        <a class="ac25-full-red-custom-dev waves-effect waves-light without-bottom" v-if="!order.deliveryAddress_forperson_phone">&nbsp;</a>
	//        <a href="tel:{{order.deliveryAddress_forperson_phone}}" class="ac25-full-red-custom-dev waves-effect waves-light without-bottom" v-if="order.deliveryAddress_forperson_phone">llamar al cliente ({{order.deliveryAddress_forperson}})</a>
	//     </div>      
	//     <!--  <a class="ac25-full-red-custom-dev waves-effect waves-light" v-if="false"><!-- central llama a cliente -></a>
	//      <a href="tel:{{setup.phoneCentral}}" __click="callCentral()" class="ac25-full-red-custom-dev waves-effect waves-light">llamar a la central</a>
	//      <a href="tel:{{setup.phoneMobile}}" __click="callDriver()" class="ac25-full-red-custom-dev waves-effect waves-light">llamar al chofer</a> -->
	//      <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">terminar</a>
	//    </footer><!-- end footer -->
	//  </div><!-- end content-global -->  
	// </template>
	//
	// <script>

	var phoneCentral = '';

	exports.default = {
	  name: 'Call',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      addressType: _getters.getAddressType
	    }
	  },
	  data: function data() {
	    return {
	      setup: {}
	    };
	  },

	  methods: {
	    callCustomer: function callCustomer() {
	      var setup = _ls2.default.get('setup');
	      if (!setup || !setup.phoneMobile) {
	        return this.$route.router.go('/setup');
	      }
	      phoneMobile = setup.phoneMobile;

	      alert('Ring ring');
	    },
	    callCentralCustomer: function callCentralCustomer() {
	      var setup = _ls2.default.get('setup');
	      if (!setup || !setup.phoneMobile) {
	        return this.$route.router.go('/setup');
	      }
	      phoneMobile = setup.phoneMobile;

	      alert('Ring ring');
	    },
	    callCentral: function callCentral() {
	      var setup = _ls2.default.get('setup');
	      if (!setup || !setup.phoneMobile) {
	        return this.$route.router.go('/setup');
	      }
	      phoneMobile = setup.phoneMobile;

	      alert('Ring ring');
	    },
	    callDriver: function callDriver() {
	      var setup = _ls2.default.get('setup');
	      if (!setup || !setup.phoneMobile) {
	        return this.$route.router.go('/setup');
	      }
	      phoneMobile = setup.phoneMobile;

	      alert('Ring ring');
	    }
	  },
	  ready: function ready() {
	    console.info('Call is ready ===================================');
	    var setup = _ls2.default.get('setup');
	    this.setup = setup;
	  }
	};
	// </script>
	//

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n       <h4 class=\"ac25-top-red-text\">LLAMADO</h4>\n       <p class=\"left clearfix ac25-subtitle\" style=\"width:60%\">\n         Seleccione una de las opciones para iniciar un llamado telefónico.\n         <br />\n         <br />\n         Llame a cliente sólo en caso de ser necesario.\n       </p>\n       <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n     </div><!-- end content-inner-holder -->\n   </div><!-- end container -->\n\n   <footer class=\"ac25-content-footer\">\n     <div v-if=\"addressType == 'pickup'\">\n       <a class=\"ac25-full-red-custom-dev waves-effect waves-light without-bottom\" v-if=\"!order.pickupAddress_forperson_phone\">&nbsp;</a>\n       <a href=\"tel:{{order.pickupAddress_forperson_phone}}\" class=\"ac25-full-red-custom-dev waves-effect waves-light without-bottom\" v-if=\"order.pickupAddress_forperson_phone\">llamar al cliente ({{order.pickupAddress_forperson}})</a>\n    </div>   \n     <div v-if=\"addressType == 'delivery'\">\n       <a class=\"ac25-full-red-custom-dev waves-effect waves-light without-bottom\" v-if=\"!order.deliveryAddress_forperson_phone\">&nbsp;</a>\n       <a href=\"tel:{{order.deliveryAddress_forperson_phone}}\" class=\"ac25-full-red-custom-dev waves-effect waves-light without-bottom\" v-if=\"order.deliveryAddress_forperson_phone\">llamar al cliente ({{order.deliveryAddress_forperson}})</a>\n    </div>      \n    <!--  <a class=\"ac25-full-red-custom-dev waves-effect waves-light\" v-if=\"false\"><!-- central llama a cliente -></a>\n     <a href=\"tel:{{setup.phoneCentral}}\" __click=\"callCentral()\" class=\"ac25-full-red-custom-dev waves-effect waves-light\">llamar a la central</a>\n     <a href=\"tel:{{setup.phoneMobile}}\" __click=\"callDriver()\" class=\"ac25-full-red-custom-dev waves-effect waves-light\">llamar al chofer</a> -->\n     <a onclick=\"window.history.back()\" class=\"ac25-full-black waves-effect waves-light\">terminar</a>\n   </footer><!-- end footer -->\n </div><!-- end content-global -->  \n";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(116)
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Logout.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(1);

	var _director = __webpack_require__(6);

	var _director2 = _interopRequireDefault(_director);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Logout',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  methods: {
	    yes: function yes() {
	      _director2.default.logout();
	    },
	    no: function no() {
	      _index.router.go(window.history.back());
	    }
	  }
	};
	// </script>
	//
	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//        <h4 class="ac25-top-red-text">ECONOCARGO</h4>
	//        <img class="ac25-top-right-hand ac25-z-1" src="html/images/hand-black.png" v-link="'call'" />
	//      </div><!-- end content-inner-holder -->
	//    </div><!-- end container -->
	//    <footer class="ac25-content-footer">
	//    <a class="ac25-full-red-custom-dev waves-effect waves-light" style="padding:100px 20px">Esta seguro que desea cerrar la sesión?</a>
	//     <a @click="yes()" class="ac25-half-black left waves-effect waves-light" style="border:1px solid white">sí</a>
	//     <a @click="no()" class="ac25-half-black left waves-effect waves-light" style="border:1px solid white">no</a>
	//   </footer><!-- end footer -->
	// </div><!-- end content-global -->
	// </template>
	//
	// <script>

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n       <h4 class=\"ac25-top-red-text\">ECONOCARGO</h4>\n       <img class=\"ac25-top-right-hand ac25-z-1\" src=\"" + __webpack_require__(63) + "\" v-link=\"'call'\" />\n     </div><!-- end content-inner-holder -->\n   </div><!-- end container -->\n   <footer class=\"ac25-content-footer\">\n   <a class=\"ac25-full-red-custom-dev waves-effect waves-light\" style=\"padding:100px 20px\">Esta seguro que desea cerrar la sesión?</a>\n    <a @click=\"yes()\" class=\"ac25-half-black left waves-effect waves-light\" style=\"border:1px solid white\">sí</a>\n    <a @click=\"no()\" class=\"ac25-half-black left waves-effect waves-light\" style=\"border:1px solid white\">no</a>\n  </footer><!-- end footer -->\n</div><!-- end content-global -->\n";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(119)
	__vue_template__ = __webpack_require__(120)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Redirecting.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _director = __webpack_require__(6);

	var _director2 = _interopRequireDefault(_director);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// moder a service?
	// 
	// 
	// 
	// 

	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-red-loading-section">
	//     <div class="container">
	//       <div class="ac25-loading-content">
	//        <h5>Redireccionando</h5>
	//        <img src="html/images/loading.gif" />
	//      </div>
	//    </div>
	//  </div><!-- end red-loading-section -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'Redirecting',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  ready: function ready() {
	    console.info(this.$route);
	    // window.setTimeout(function(){
	    //   this.$route.router.go( '/stand-by' )
	    // }, 1000)
	  }
	};
	// </script>

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-red-loading-section\">\n    <div class=\"container\">\n      <div class=\"ac25-loading-content\">\n       <h5>Redireccionando</h5>\n       <img src=\"" + __webpack_require__(32) + "\" />\n     </div>\n   </div>\n </div><!-- end red-loading-section -->\n";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(122)
	__vue_template__ = __webpack_require__(123)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Available.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _director = __webpack_require__(6);

	var _director2 = _interopRequireDefault(_director);

	var _HeaderUserData = __webpack_require__(22);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _common = __webpack_require__(7);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-red-loading-section">
	//     <div class="container">
	//       <div class="ac25-loading-content">
	//        <h5>{{message}}</h5>
	//        <img src="html/images/loading.gif" />
	//      </div>
	//    </div>
	//  </div><!-- end red-loading-section -->
	// </template>
	//
	// <script>
	var MICRO_API_URL = _common.urls.micro_api;

	exports.default = {
	  name: 'Available',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  data: function data() {
	    return {
	      message: 'Poniendose a disposición de la central'
	    };
	  },
	  ready: function ready() {
	    console.info('Available is ready ===================================');

	    var grocer = _ls2.default.get('grocer');

	    if (grocer) {
	      return this.$route.router.go('/stand-by-grocer');
	    } else {
	      this.retry();
	    }
	  },

	  methods: {
	    retry: function retry() {

	      var setup = _ls2.default.get('setup');

	      if (!setup || !setup.vehicleSelected) {
	        return this.$route.router.go('/setup');
	      }

	      var vehicleSelected = setup.vehicleSelected;
	      var secs = 30000;
	      var that = this;

	      this.$http.get(MICRO_API_URL + '/vehicle/' + vehicleSelected + '/opl-available').then(function (response) {
	        console.info(response, 'success callback');

	        if (!response.ok) {

	          console.info('Informing i\'m available to central failed. Retrying in ' + secs + ' seconds');
	          setTimeout(function () {
	            that.retry();
	          }, secs);

	          return;
	        }

	        var result = response.data.result;

	        console.info('resultado desde api a estoy disponible:', result);

	        if (result == 'all ok') {
	          that.message = 'R4';

	          setTimeout(function () {
	            console.info('/stand-by despues de 1 second !!!!!!!!!!!!!!!!!!!!!');
	            return that.$route.router.go('/stand-by');
	          }, 1000);
	        } else {

	          if (result != 'shipment dispatched') {

	            that.message = 'Central informada, pero no se han recibido instrucciones. Nos pondremos en espera dentro de 5 segundos...';
	            console.info('/stand-by despues de retry !!!!!!!!!!!!!!!!!!!!!');
	            return that.$route.router.go('/stand-by');
	          }

	          /**
	           * NO enrutar aqui a ninguna parte ya que
	           * se espera un notificacion via pubnub que
	           * manejara el siguiente paso a seguir, asshole!!!
	           */
	        }
	      }, function (response) {
	        console.info(response, 'error callback');

	        var data = response.data;
	        if (401 == data.status_code) {
	          _director2.default.logout();
	        }
	      });
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-red-loading-section\">\n    <div class=\"container\">\n      <div class=\"ac25-loading-content\">\n       <h5>{{message}}</h5>\n       <img src=\"" + __webpack_require__(32) + "\" />\n     </div>\n   </div>\n </div><!-- end red-loading-section -->\n";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(125)
	__vue_template__ = __webpack_require__(126)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ScanSuccesful.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getters = __webpack_require__(29);

	exports.default = {
	  name: 'ScanSuccesful',
	  vuex: {
	    getters: {
	      order: _getters.getOrder,
	      item: _getters.getItem
	    }
	  }
	};
	// </script>
	//
	// <template>
	// 	<div class="ac25-content-global">
	//
	// 		<div class="container">
	// 			<div class="ac25-content-inner-holder ac25-min-height-200 center">
	// 				<p class="ac25-mtop140">
	// 					<img src="../html/images/green-check.png" />
	// 					<div class="clearfix"></div>
	// 					<span class="ac25-top-check-title"> Lectura exitosa </span>
	//
	// 					<div class="clearfix"></div>
	//
	// 					<img class="ac25-no-margin" src="../html/images/barcode-big-2.png" />
	// 					<p class="ac25-mid-page-paragraph ac25-no-margin"> {{item.name}}  </p>
	//
	// 					<div class="clearfix"></div>
	//
	// 					<p class="ac25-red-id-text ac25-no-margin">item id #{{item.id}}<br />QR #{{item.qr_id}}</p>
	// 				</p>
	// 			</div><!-- end content-inner-holder -->
	// 		</div><!-- end container -->
	//
	// 		<footer class="ac25-content-footer">
	// 			<a v-link="'available'" class="ac25-half-black left waves-effect waves-light">cancelar</a>
	// 			<a v-link="'scan'" class="ac25-half-red right waves-effect waves-light">siguiente</a>
	// 		</footer><!-- end footer -->
	//
	// 	</div><!-- end content-global -->
	// </template>
	//
	// <script>

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"ac25-content-global\">\n\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ac25-content-inner-holder ac25-min-height-200 center\">\n\t\t\t\t<p class=\"ac25-mtop140\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(33) + "\" />\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<span class=\"ac25-top-check-title\"> Lectura exitosa </span>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t<img class=\"ac25-no-margin\" src=\"" + __webpack_require__(61) + "\" />\n\t\t\t\t\t<p class=\"ac25-mid-page-paragraph ac25-no-margin\"> {{item.name}}  </p>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t<p class=\"ac25-red-id-text ac25-no-margin\">item id #{{item.id}}<br />QR #{{item.qr_id}}</p>\n\t\t\t\t</p>\n\t\t\t</div><!-- end content-inner-holder -->\n\t\t</div><!-- end container -->\n\n\t\t<footer class=\"ac25-content-footer\">\n\t\t\t<a v-link=\"'available'\" class=\"ac25-half-black left waves-effect waves-light\">cancelar</a>\n\t\t\t<a v-link=\"'scan'\" class=\"ac25-half-red right waves-effect waves-light\">siguiente</a>\n\t\t</footer><!-- end footer -->\n\n\t</div><!-- end content-global -->\n";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(128)
	__vue_template__ = __webpack_require__(129)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ScanFailed.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getters = __webpack_require__(29);

	exports.default = {
	    name: 'ScanFailed',
	    vuex: {
	        getters: {
	            order: _getters.getOrder,
	            item: _getters.getItem
	        }
	    }
	};
	// </script>
	//
	// <template>
	// 	<div class="ac25-content-global">
	//
	// 		<div class="container">
	// 			<div class="ac25-content-inner-holder ac25-min-height-200 center">
	// 				<p class="ac25-mtop140">
	// 					<img src="../html/images/info.png" />
	// 					<div class="clearfix"></div>
	// 					<span class="ac25-top-check-title"> Lectura fallida </span>
	//
	// 					<div class="clearfix"></div>
	//
	// 					<img class="ac25-no-margin" src="../html/images/barcode-big-2.png" />
	// 					<p class="ac25-mid-page-paragraph ac25-no-margin"> {{item.name}}  </p>
	//
	// 					<div class="clearfix"></div>
	//
	// 					<p class="ac25-red-id-text ac25-no-margin">item id #{{item.id}}</p>
	// 				</p>
	// 			</div><!-- end content-inner-holder -->
	// 		</div><!-- end container -->
	//
	// 		<footer class="ac25-content-footer">
	// 			<a v-link="'available'" class="ac25-half-black left waves-effect waves-light">cancelar</a>
	// 			<a v-link="'scan'" class="ac25-half-red right waves-effect waves-light">reintentar</a>
	// 		</footer><!-- end footer -->
	//
	// 	</div><!-- end content-global -->
	// </template>
	//
	// <script>

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"ac25-content-global\">\n\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ac25-content-inner-holder ac25-min-height-200 center\">\n\t\t\t\t<p class=\"ac25-mtop140\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(49) + "\" />\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<span class=\"ac25-top-check-title\"> Lectura fallida </span>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t<img class=\"ac25-no-margin\" src=\"" + __webpack_require__(61) + "\" />\n\t\t\t\t\t<p class=\"ac25-mid-page-paragraph ac25-no-margin\"> {{item.name}}  </p>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t<p class=\"ac25-red-id-text ac25-no-margin\">item id #{{item.id}}</p>\n\t\t\t\t</p>\n\t\t\t</div><!-- end content-inner-holder -->\n\t\t</div><!-- end container -->\n\n\t\t<footer class=\"ac25-content-footer\">\n\t\t\t<a v-link=\"'available'\" class=\"ac25-half-black left waves-effect waves-light\">cancelar</a>\n\t\t\t<a v-link=\"'scan'\" class=\"ac25-half-red right waves-effect waves-light\">reintentar</a>\n\t\t</footer><!-- end footer -->\n\n\t</div><!-- end content-global -->\n";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(131)
	__vue_template__ = __webpack_require__(132)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ScanFinished.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getters = __webpack_require__(29);

	exports.default = {
		name: 'ScanFinished',
		vuex: {
			getters: {
				addressType: _getters.getAddressType
			}
		},
		methods: {
			back: function back() {
				if ('pickup' == this.addressType) {
					return this.$route.router.go('/event-pickup');
				}if ('delivery' == this.addressType) {
					return this.$route.router.go('/event-delivery');
				} else {
					return this.$route.router.go('/available');
				}
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="ac25-content-global">
	//
	// 		<div class="container">
	// 			<div class="ac25-content-inner-holder ac25-min-height-200 center">
	// 				<p class="ac25-mtop140">
	// 					<img src="../html/images/green-check.png" />
	// 					<div class="clearfix"></div>
	// 					<span class="ac25-top-check-title"> escaneo terminado </span>
	// 					<div class="clearfix"></div>
	// 					<img src="../html/images/tasklist.png" />
	// 					<div class="clearfix"></div>
	// 				</p>
	// 			</div><!-- end content-inner-holder -->
	// 		</div><!-- end container -->
	//
	// 		<footer class="ac25-content-footer">
	// 			<a @click="back()" class="ac25-full-black waves-effect waves-light">terminar</a>
	// 		</footer><!-- end footer -->
	//
	// 	</div><!-- end content-global -->
	// </template>
	//
	// <script>

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"ac25-content-global\">\n\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ac25-content-inner-holder ac25-min-height-200 center\">\n\t\t\t\t<p class=\"ac25-mtop140\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(33) + "\" />\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<span class=\"ac25-top-check-title\"> escaneo terminado </span>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<img src=\"" + __webpack_require__(133) + "\" />\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</p>\n\t\t\t</div><!-- end content-inner-holder -->\n\t\t</div><!-- end container -->\n\n\t\t<footer class=\"ac25-content-footer\">\n\t\t\t<a @click=\"back()\" class=\"ac25-full-black waves-effect waves-light\">terminar</a>\n\t\t</footer><!-- end footer -->\n\n\t</div><!-- end content-global -->\n";

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAADeCAYAAAC65wucAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzNzIzQTY0NTgyNDExRTZCOEE3QkNDNTNBNDgxODJEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzNzIzQTY1NTgyNDExRTZCOEE3QkNDNTNBNDgxODJEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM3MjNBNjI1ODI0MTFFNkI4QTdCQ0M1M0E0ODE4MkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM3MjNBNjM1ODI0MTFFNkI4QTdCQ0M1M0E0ODE4MkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xCOYfAAATc0lEQVR42uxdCfyVUxo+bZYka1H4IdkZW5YRTdkZhiwlu2QZy1C20Yw1hhCK7EqDRPoZa5J9nTCaEMbytyd/a0kRaZ7Hd25d173f/v3vd+95nt/v7fS/9/vOPd85z/ee92zv22z+/PlG8Eenju3bI9kTsg+kB2SRCpfOhTwKGQf5V8O0xi9Ve/5oJgJWJF0zJH+EHA3ZDdI8YhbzIPdDroc8BDL+rFoVAcOSj9ruH5D1UspyCmQgSPigalcE9CPeSkhuguyc0U+waz5aXbMIWI5829BugyyX8U9Ng+wFEr6oWhcBC+TbHsmDPoOLtDEHsjtI+JgI6DgBQb4NkTwHadPEP/0dZFuQcLII6C75SLqXIGtXqQjsjruAhJ+62gbNjdsYXkXyER0hI+yUjwjomPbjHN8hOSjKLpB+6oLdIt/SSKZaDZQHfANZA13xV661RUtHX7xLEpKP83iTIO9BfrJ5bQVZJWZ+fCHOgpwkDVj/2u8PSJ6IefuTkIsgE6Gt5pXkSzuOc4lnQ7aPkfePkDWR7wciYP2Sb1HjLYtFHXh8CzkG5Bgd8nf6IrkKsnjE37kKv3GCBiH1i7/FIB/n63YMSz4C144w3nLenIi/1RfkXV4aMF9aawkkfWy3thZkKUgLyAzj7Tj5NiCLVpAl7P/Xj2H3HhiFfCVl5yh7VMTb3rfPFgc/2BemwdqoY1H2b0TA+OTjFMUtkGpphafRgN0SPsNTSLatUvn5ch6JZ7hDXXD0htsSyb1VJB9xWQp5XF7F8i8JGY267CICRscQ231WC7TfxqeQDzc5zK5yG58qAkbTfh2QdK1yMV5E1/VD0kxsHq9W+Vl2RZ02FwHD43c5KMPUFPN6vcrPwq54NREwPBbPQRneTDGv13LwPCuIgOGxbA7K8EKKeeVhz1/HPDZ0omkY2BXrIOkO2QCyLqQdpK0ldtsE5Wpd5QHIh5DV0zrJhnpqZfNcscqDqrllPucS4Hc+931nr6FwDfwLyGc2fQPyCuqpockIiMrkSsLhkANM/MX3vKMPKnVMygMr1tmIOq0vbsrglNkI1NsrmRAQFUgtdy6kJ++r04qkhjgVlTgso9H9AONtZmhl6hcTIINQh8+mQkC7FHY+hIvkLXL60OwaPrHdxdyI93KapNF4W/PvQMVNz7KgdoqpF6SLNVkWi5jFonaQtrLJ/gRfEtwMGYD6/Do2Ae2BHXZF6+X8rTscD3qzcQhom8OQjMx5Md+H9EbbvBB5FIwH3A7JMzVAPiG/WA3yhPU0EZ6AuGFHJA8lHMkKgrHmwjhw6k+hCIgLN0Nyd50bykLTgmOHO+0Gk8oExAXca3enWbh/ThDSwqJWE7bz04CcfuikuhIyAp0/XVmWgPawziGqIyFj9AbXdiqnAS9U3QhNhMEFbxDNrfbjtvPfq16EJsLGkB2LNeBRqhOhiXEs/2kJ7cedJ3slzIy7I26EPA55C/JVw7TG7+JmhjKxPHerjVLFHsZbWKiEuWiz2bb+6TWs+PQg/Sa2tp9xFLuR8TakbJGgPNylvRQz3Nokm3ahm4uzUPjvq1i55+FhXHNrEXXP5KywRzRx3Syfr9+BPI/6vg4pN1dcGrP8JPWOJGD3BJVwPgp7Zg4aYxVTv1vDcgm0OzcRDAERuZni/JjZbEMbcMOYN78LOUdNoRGt8TamxsFGJOBaMW8eWuqgR3BSE9I72LVxzX0SMO428YmqfsFiQlw7tnmCAchbGT6QNGttgVyIc36mDQkYZ9fLjIxDT32hNk0dMzMekHwb5968Hst8G6IAJumByuKdPBYslwTEG0UN+Jx4kxqeRZ3OFAGj4UxpwVTAOjw7r4XLLQHxxnJZ7zgNSBIP5o63dSkCxiDhNcZbd2QEy4JHesEfP9m6Yp1tgjq8Os+FzX2YBlQgvVT1E6/qE81VBYIIKIiAgiACCiKgIIiAgggoCCKgIAIKgggoiICCkAVa1vPDWXdzDB5NL68MPHNjw7TGGWp2EbApyNcZySOQVYs+7s8QsCDha2p6dcFZko+x0caXkI+gf7q78hq4TwSsH9wA6VzhOwba2VhNLwJmpf2OQdI74LIf1fQiYBbko4P1oQGX0aXIVDW9CJjFiJcO1hcJuLR/xmeaBUc1IM9ABDlYHw7y3admFwHT1n5/QbJPwGUvQ05Wk+cLLXNCoK5ITrMajPbZhdBUU0LeSy+dQU4SeSi7F/L8QU0uApYSaG8kY4u0McPC9sTn+4MwdwfcuwySO0ywf5sjkNe7McpGx030INuhTG9RiFpZK+DI/3P2BKiLd0RAr4HZqMPLNC4HEqPx/VaVNKF1888A0KuFsPvuilguEusCyDE1RrKwz8folSejXp5x3QbkykQl/4R0/XqXXdUoO5o1wc7VI9t9+D2Sf6LNv+7IZ0Gz5Uk8ay/XCfiV8Xe90dmUCXOPimNMk8EZ2X1nQLo6MgC9EXW5orMEtKEc7gm4bF9U0glF5FvW2n1B5kNku89268c5NAZg73KoyxqQOAUyK+AaemPfwhJklAn2iD8sqt1nQXuynWMD0S5OExBEoSOdIwMua2W1HuPZ7R5w7YuQU2MWZykHZ0LaOU1AS8IxSK4LoZ1OD7iGgVh6I7+5MYsy3UECvuc8AS0Y6WhKwjz6Wo0a90UgAV91jIAPi4Be4zPU134h7MFKGBo0cR0SgxwiH1+2cSLgQhK+HcIerGT3nZZSGbgqc64D5GuA9ExgrtQfASPYg2nafeXKcA6S7SAPQObUGfH+Z1+wjeMsT6aNvB5Koj24lfHc82Zq9/mQkH6Vf/GtbPcaNgtxG1dOFq1y3X1vpRxmV1vj1QQBaQ+i0WkPvgRp2wR2X1B5wh7l/MYItd0Fl9iDh5jKIaCeSsvuE0TASiTkMt2fy5CQmnHvvHUnQp0R0JLweiTb2umCZ40XwKYbPv9SzVf7qAnPCCAbw3YpdJc0oCCIgIIIKAgioKBBSL5hz3fw3MO6xgvYPAYDmjlqdhGwKci3MpIJxnNOWcBf8fmuIGGDml5dcJbk45rs+BLyEWsZb2e1IAJmCsbI3aDCd12s91RBBMxE+x2G5LCAyxZR04uAWZBvfeN5WvDDNOPtiRNEwFTJRz8u9A/YOuDSARiEzFPTi4BpY3iZQUcpbgL5NAgRAVPXfowFEnTCn27fTlCT5wt58Q9IzcUzv5wwfgMyGJrq9ZD3bhjC7pttvHMjmoQWAX9DoO2R0G1uwRPV5pD98PleIMzDAfe2MZ5vwcUCfuY45DU1RtkWseXh/GGte03g5t3PIJNQFx+LgGaBM6CbzG/doPHvsfh+04CTW9caL+6HH0Yhj5sjlquF8dx70G/NcvWmdfB8jxrPWXvVD+FX2wbkctmqFb7jYST6B1ysQiX2Q3JgQP6cbjkuBvl40OnCeiSfBXudF/CsPVwnYJAXBEY0GlbB7rsy4N5fPC1YF3BRQMeUezhgfvHFvsMeOXWTgCDH10geDbjsSFTSwTHsvmOjdjHWJOjv0BiAnrEOclkDEidCgryYXmtXOaLYfSNjlGV1SEfHBqJdnSagHZ2eFHBZa2sP9g9h971u4ns5bevgTMjSrmtAkvBa2636YR3IZQHXcL6vVwy7r4DPHSRgo/MELNh6xvPYlATHxJnvK3oRPjHezmmX8LgIaBb4X9nfxA+lynXeW1IoyoUOkY8v/BgRcCEJ4/r5e82ktM6LMjAsxNUOkI/mRs9qhy/L42YExvuN4rUz9XVe5MVBDEOITTKVnSPVKjj1xbXzDfGcr1S7MM1W79Bufoz7ZqDwmY2e7OQoHRCF2Tp/eNSltohl4ciYqzW1viryg9V6DVnES0Y90TVd5EntvPoHnGH9Az5v/CecR2RJPlsWRlxyzXG5011woeH/i+R4n0umBHwviICJScidMleU+YrbifbU/j4RsClIyNWPAyBPWK3HTQib4PMP1Hy1j1rxD3g7ktvVXNKAgiACCiKgILhjAyZBp47tGeqVk8if60C6NGBTk28Aki8gn5KA+Ps8e+ZDEAEzJ985SIaYhZtMlzFeiIfz1ewiYNbk64nk7Apfn4jvW6rpRcCsyMdzHSN8LuGZ4+XV9CJgFuSjJwM6H/LbqTPT2oWCCJg6LjaeKw0/jMRo+Cc1vQiYhd13YsBl70POUbOLgGmTr1OA3UfwrAl3Tiumb47QMkckYoR0Hr18HSR5IcJ9jFA+1gSfbz0tSr6CIwQEgUgcngHZruizCVZbhYlUzrm+TQOuobOhoWpuEbAcRhSTz2Jn43lC2MVv+Qzf72uCvSDw6CHPjcyP+YLwPMiakDY13tYcePFMyBTUxfcioNe4yyLpWeHrHSCDIAMr3LuG8XwL+oFOGXuF1KTFedNJEd2/nWrJV0/4Ec9Hk+XMPESMqvYgJOgU1RmorD0r2H30iB/ky+VkVPJ/IpKPdTIacn0dko/g5gzuMJ+MZ93adQJ+ZIJ9k4yy2q4YQ0PYfeNAvqtilIld+v4OmF98ecfa8BZuEtBOCP89hJa802o9aiiS4+gQdt8RMYs1wKExAF3RHegsAS0Jb7CjVD9Q2w0B+dgl3pCF3WfJvRKS1RwbiG7rNAEtqK0+DNE1Ph5iNBrZ7itCOwdnQpZ3noDWVS+71qAdyytlZPcV8KWDBPzSeQJaEtINx5kJsngngd1XKAMHRa6dN35GBFyIwZCJMe6j45394th9ZXCJQ+Rj5NBbRMCFGuhnOyqLGsnnJOtLJg3QN+BtDpCP+yL3TuDOuC41IEnI5SJ6xgrrKXWs9TGd1u9zyY5hIegy+L06JB6nvjiJvxGedVK1C5NL/4BEp47t6fkqKBgNCbJJSl1vpXJwhw6nf+rBP+B0yIuor1kZ1FP9+Ae0mugqu1TUp8Il36do9/mV400kbxrBjS64BOwGK3m9PyrBfJ8gAobSPjSQdzGeu94C6BO6b0oe8YUqI/fnYxnbFl3xFvjvlhBu33pO2+pFwKYmIQdK/1ZzqQsWBBFQEAEFwR0bMAkwgOFeQg5iGIjwgSyCtAgiYDnicevWKMj2RR9PwOdc/5ytplcXnCX5uGl1Ygn5CB73vFzNLgJmST4eqRwJWbfCJX2t215BBMwEJ0P29fmeNqC8Y4mAmWg/elgYHHDZo3G9JAgioB/5eMRwdMAzhTkGKoiAkcnH0TxDea0QcOkZ0H4vq9lFwLRBz/fdAq55yHietIQcIRfzgNBgeyA5HUIH429BLoKmmhDy3t3svX7g4ZuDZftJA5Yj0KFI7oV0NZ6riO7UVvj8qBD3rozknwGXcdR7AMgnx+TSgGVtt0rd4nB8T2+pz/jcO8YEn9U4F3k8maCMdN7DVZXWNd7WPOTFcGWNIuBCrORDIJaNTol46OizCnZf14D8H4NcEJN4+yA5xXgbYZvV0WzBJ3bAdrE9geh0F/yV8XfH0YGVVRrfDX/vGsLu+9zaffNiNNIwJHdBtqon8hW99HyxpuA5N3CagCDHt7ah/dCD3WiJ3RfmPMhByH9aDPIdguQEB8wvvtz3FtzeOTsIMZ4/vqCuYCAqaqcIdt9gkO/hmOUZ6NAYgLMOfZwmoNVShwZcxm7wVsg1Iew+DlpirXbY1ZS1HRuI9nBdA5KE440XZssP9N3XL4Td1ztBKK72Ds6EyD+gBbVWkpNvhfm+aQnymOUgAWeIgJ4W5DwVnVTGPfM7CHk8krAY9DXT6BgBnxMBF5KQziEPi3Erdz8PSuH3OWUzzCHyfWFtaxGwiAT3hLAHi8Eu96A4830VwN++3wHy0blTn2p7mcjrbhhOhYRZPptnBx2NKb4ANAX2Mt5Edz12x7SVH4BsloLJkhh59g+4IpLJkBV9LmMEzEsyLANf0I0gnPxuUfI1o7PnfX14piVcAdR2k7NwaVeP/gGn46F6G289t0WZS+6DXJpxGX62L8FkIzjVBRcI8JTxJqlL5/U4XXOg9veJgE1BQjoM3xxyo7VduJDe3a4jCzWOWnHPRg/4R6q5pAEFQQQUREBBEAEFEVAQREBBBBQEEVAQAQVBBBREQEEQAQURUBBEQEEEFAQRUMgUzZqSgEuovoUCbHCgtjFu/YkEjBM3rSV+tIOqXrDoHPO+mSRg3LMVPVTvgsXWMe/7hgR8N+bNOqMhFNAv5n0NJOCbMW/ubv0oC27bfz2RbBPz9qkk4NMJfv8WFGBfNYOz5NsTyW0JsniJrjnoduKjhGXhAfLrmDZMa/xYTVPXpKNb36622/1DgqzoVKB9s/nz5zPTpxOo0VLQYVDeHT2yfArZGg1LGs/3S4uU8nsayqpb4WD6yBQJ2MLEcFLTxFhKfKo66O97wUT0rSl0w4IQFgyWM24BAaEK55qiWByCkDEGWs79ailuBOR51Y2QMeiTekGgoV8GIUUjnDWRMKBzG9WTkAHoxHJTaL/3Ch/8ajMCvngbSV/Vk5AB6Ozz0GLy/YaAloRjkfRXfQkpox+4dW/ph2W3Y+HCK0RCISVwvvUIcGpkuS9/ZQOWwi6zjZRNKCSw+XqBfBMrXeC7IRU3MpTqpiZZCC3BTTBo5MZ+5AskYNHAhPu9uPanyWohCNPZ5UK62chXvvDtgst0yYyNcbAdKW+tuhaKwFAWN0BuBvHmhL0pEgFLyLgqkh2Mt4a8Pj8y3rmAVmoLJ2y7DyGvQSZBxtueMjL+L8AANYQQ98xZKowAAAAASUVORK5CYII="

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(135)
	__vue_template__ = __webpack_require__(136)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ScanSuccesfulTrip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getters = __webpack_require__(29);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div class="ac25-content-global">
	//
	// 		<div class="container">
	// 			<div class="ac25-content-inner-holder ac25-min-height-200 center">
	// 				<p class="ac25-mtop140">
	// 					<img src="../html/images/green-check.png" />
	// 					<div class="clearfix"></div>
	// 					<span class="ac25-top-check-title"> Lectura exitosa </span>
	//
	// 					<div class="clearfix"></div>
	//
	// 					<img class="ac25-no-margin" src="../html/images/barcode-big-2.png" />
	// 					<p class="ac25-mid-page-paragraph ac25-no-margin"> {{item.name}}  </p>
	//
	// 					<div class="clearfix"></div>
	//
	// 					<p class="ac25-red-id-text ac25-no-margin">item id #{{item.id}}<br />QR #{{item.qr_id}}</p>
	// 				</p>
	// 			</div><!-- end content-inner-holder -->
	// 		</div><!-- end container -->
	//
	// 		<footer class="ac25-content-footer">
	//       <a @click="back()" class="ac25-half-black left waves-effect waves-light">cancelar</a>
	//       <a v-link="'scan-trip'" class="ac25-half-red right waves-effect waves-light">siguiente</a>
	// 		</footer><!-- end footer -->
	//
	// 	</div><!-- end content-global -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'ScanSuccesfulTrip',
	  data: function data() {
	    return {
	      grocer: false
	    };
	  },
	  vuex: {
	    getters: {
	      item: _getters.getItem
	    }
	  },
	  ready: function ready() {
	    var grocer = _ls2.default.get('grocer');
	    this.grocer = grocer;

	    console.info('ScanSuccesfulTrip is ready for ' + (grocer ? 'Grocer' : 'OPL') + ' ===================================');
	  },

	  methods: {
	    back: function back() {
	      if (this.grocer) {
	        return this.$route.router.go('/stand-by-grocer');
	      } else {
	        return this.$route.router.go('/stand-by');
	      }
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"ac25-content-global\">\n\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ac25-content-inner-holder ac25-min-height-200 center\">\n\t\t\t\t<p class=\"ac25-mtop140\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(33) + "\" />\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<span class=\"ac25-top-check-title\"> Lectura exitosa </span>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t<img class=\"ac25-no-margin\" src=\"" + __webpack_require__(61) + "\" />\n\t\t\t\t\t<p class=\"ac25-mid-page-paragraph ac25-no-margin\"> {{item.name}}  </p>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t<p class=\"ac25-red-id-text ac25-no-margin\">item id #{{item.id}}<br />QR #{{item.qr_id}}</p>\n\t\t\t\t</p>\n\t\t\t</div><!-- end content-inner-holder -->\n\t\t</div><!-- end container -->\n\n\t\t<footer class=\"ac25-content-footer\">\n      <a @click=\"back()\" class=\"ac25-half-black left waves-effect waves-light\">cancelar</a>\n      <a v-link=\"'scan-trip'\" class=\"ac25-half-red right waves-effect waves-light\">siguiente</a>\n\t\t</footer><!-- end footer -->\n\n\t</div><!-- end content-global -->\n";

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(138)
	__vue_template__ = __webpack_require__(139)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ScanFailedTrip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getters = __webpack_require__(29);

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// 	<div class="ac25-content-global">
	//
	// 		<div class="container">
	// 			<div class="ac25-content-inner-holder ac25-min-height-200 center">
	// 				<p class="ac25-mtop140">
	// 					<img src="../html/images/info.png" />
	// 					<div class="clearfix"></div>
	// 					<span class="ac25-top-check-title"> Lectura fallida </span>
	//
	// 					<div class="clearfix"></div>
	//
	// 					<img class="ac25-no-margin" src="../html/images/barcode-big-2.png" />
	// 					<p class="ac25-mid-page-paragraph ac25-no-margin"> {{item.name}}  </p>
	//
	// 					<div class="clearfix"></div>
	//
	// 					<p class="ac25-red-id-text ac25-no-margin">item id #{{item.id}}</p>
	// 				</p>
	// 			</div><!-- end content-inner-holder -->
	// 		</div><!-- end container -->
	//
	// 		<footer class="ac25-content-footer">
	// 			<a @click="back()" class="ac25-half-black left waves-effect waves-light">cancelar</a>
	// 			<a v-link="'scan-trip'" class="ac25-half-red right waves-effect waves-light">reintentar</a>
	// 		</footer><!-- end footer -->
	//
	// 	</div><!-- end content-global -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'ScanFailedTrip',
	  data: function data() {
	    return {
	      grocer: false
	    };
	  },
	  vuex: {
	    getters: {
	      item: _getters.getItem
	    }
	  },
	  ready: function ready() {
	    var grocer = _ls2.default.get('grocer');
	    this.grocer = grocer;
	    console.info('ScanFinishedTrip is ready for ' + (grocer ? 'Grocer' : 'OPL') + ' ===================================');
	  },

	  methods: {
	    back: function back() {
	      if (this.grocer) {
	        return this.$route.router.go('/stand-by-grocer');
	      } else {
	        return this.$route.router.go('/stand-by');
	      }
	    }
	  }
	};
	// </script>
	//

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"ac25-content-global\">\n\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ac25-content-inner-holder ac25-min-height-200 center\">\n\t\t\t\t<p class=\"ac25-mtop140\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(49) + "\" />\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<span class=\"ac25-top-check-title\"> Lectura fallida </span>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t<img class=\"ac25-no-margin\" src=\"" + __webpack_require__(61) + "\" />\n\t\t\t\t\t<p class=\"ac25-mid-page-paragraph ac25-no-margin\"> {{item.name}}  </p>\n\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t<p class=\"ac25-red-id-text ac25-no-margin\">item id #{{item.id}}</p>\n\t\t\t\t</p>\n\t\t\t</div><!-- end content-inner-holder -->\n\t\t</div><!-- end container -->\n\n\t\t<footer class=\"ac25-content-footer\">\n\t\t\t<a @click=\"back()\" class=\"ac25-half-black left waves-effect waves-light\">cancelar</a>\n\t\t\t<a v-link=\"'scan-trip'\" class=\"ac25-half-red right waves-effect waves-light\">reintentar</a>\n\t\t</footer><!-- end footer -->\n\n\t</div><!-- end content-global -->\n";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(141)
	__vue_template__ = __webpack_require__(142)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/_current/econocargo/opl3/src/components/Partials/ScanFinishedTrip.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ls = __webpack_require__(9);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ScanFinishedTrip',
	  data: function data() {
	    return {
	      grocer: false
	    };
	  },
	  ready: function ready() {
	    var grocer = _ls2.default.get('grocer');
	    this.grocer = grocer;

	    console.info('ScanFinishedTrip is ready for ' + (grocer ? 'Grocer' : 'OPL') + ' ===================================');
	  },

	  methods: {
	    back: function back() {
	      if (this.grocer) {
	        return this.$route.router.go('/stand-by-grocer');
	      } else {
	        return this.$route.router.go('/stand-by');
	      }
	    }
	  }
	};
	// </script>
	//
	// <template>
	// 	<div class="ac25-content-global">
	//
	// 		<div class="container">
	// 			<div class="ac25-content-inner-holder ac25-min-height-200 center">
	// 				<p class="ac25-mtop140">
	// 					<img src="../html/images/green-check.png" />
	// 					<div class="clearfix"></div>
	// 					<span class="ac25-top-check-title"> escaneo terminado </span>
	// 					<div class="clearfix"></div>
	// 					<img src="../html/images/tasklist.png" />
	// 					<div class="clearfix"></div>
	// 				</p>
	// 			</div><!-- end content-inner-holder -->
	// 		</div><!-- end container -->
	//
	// 		<footer class="ac25-content-footer">
	// 			<a @click="back()" class="ac25-full-black waves-effect waves-light">terminar</a>
	// 		</footer><!-- end footer -->
	//
	// 	</div><!-- end content-global -->
	// </template>
	//
	// <script>

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"ac25-content-global\">\n\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ac25-content-inner-holder ac25-min-height-200 center\">\n\t\t\t\t<p class=\"ac25-mtop140\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(33) + "\" />\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<span class=\"ac25-top-check-title\"> escaneo terminado </span>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t<img src=\"" + __webpack_require__(133) + "\" />\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</p>\n\t\t\t</div><!-- end content-inner-holder -->\n\t\t</div><!-- end container -->\n\n\t\t<footer class=\"ac25-content-footer\">\n\t\t\t<a @click=\"back()\" class=\"ac25-full-black waves-effect waves-light\">terminar</a>\n\t\t</footer><!-- end footer -->\n\n\t</div><!-- end content-global -->\n";

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Install plugin.
	 */

	function install(Vue) {

	    var _ = __webpack_require__(145)(Vue);

	    Vue.url = __webpack_require__(146)(_);
	    Vue.http = __webpack_require__(147)(_);
	    Vue.resource = __webpack_require__(151)(_);

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function () {
	                return _.options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function () {
	                return _.options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        }

	    });
	}

	if (window.Vue) {
	    Vue.use(install);
	}

	module.exports = install;

/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * Utility functions.
	 */

	module.exports = function (Vue) {

	    var _ = Vue.util.extend({}, Vue.util);

	    _.isString = function (value) {
	        return typeof value === 'string';
	    };

	    _.isFunction = function (value) {
	        return typeof value === 'function';
	    };

	    _.options = function (fn, obj, options) {

	        options = options || {};

	        if (_.isFunction(options)) {
	            options = options.call(obj);
	        }

	        return _.extend(fn.bind({vm: obj, options: options}), fn, {options: options});
	    };

	    _.each = function (obj, iterator) {

	        var i, key;

	        if (typeof obj.length == 'number') {
	            for (i = 0; i < obj.length; i++) {
	                iterator.call(obj[i], obj[i], i);
	            }
	        } else if (_.isObject(obj)) {
	            for (key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    iterator.call(obj[key], obj[key], key);
	                }
	            }
	        }

	        return obj;
	    };

	    _.extend = function (target) {

	        var array = [], args = array.slice.call(arguments, 1), deep;

	        if (typeof target == 'boolean') {
	            deep = target;
	            target = args.shift();
	        }

	        args.forEach(function (arg) {
	            extend(target, arg, deep);
	        });

	        return target;
	    };

	    function extend(target, source, deep) {
	        for (var key in source) {
	            if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
	                if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
	                    target[key] = {};
	                }
	                if (_.isArray(source[key]) && !_.isArray(target[key])) {
	                    target[key] = [];
	                }
	                extend(target[key], source[key], deep);
	            } else if (source[key] !== undefined) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return _;
	};


/***/ },
/* 146 */
/***/ function(module, exports) {

	/**
	 * Service for URL templating.
	 */

	var ie = document.documentMode;
	var el = document.createElement('a');

	module.exports = function (_) {

	    function Url(url, params) {

	        var urlParams = {}, queryParams = {}, options = url, query;

	        if (!_.isPlainObject(options)) {
	            options = {url: url, params: params};
	        }

	        options = _.extend(true, {},
	            Url.options, this.options, options
	        );

	        url = options.url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {

	            if (options.params[name]) {
	                urlParams[name] = true;
	                return slash + encodeUriSegment(options.params[name]);
	            }

	            return '';
	        });

	        if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
	            url = options.root + '/' + url;
	        }

	        _.each(options.params, function (value, key) {
	            if (!urlParams[key]) {
	                queryParams[key] = value;
	            }
	        });

	        query = Url.params(queryParams);

	        if (query) {
	            url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	        }

	        return url;
	    }

	    /**
	     * Url options.
	     */

	    Url.options = {
	        url: '',
	        root: null,
	        params: {}
	    };

	    /**
	     * Encodes a Url parameter string.
	     *
	     * @param {Object} obj
	     */

	    Url.params = function (obj) {

	        var params = [];

	        params.add = function (key, value) {

	            if (_.isFunction (value)) {
	                value = value();
	            }

	            if (value === null) {
	                value = '';
	            }

	            this.push(encodeUriSegment(key) + '=' + encodeUriSegment(value));
	        };

	        serialize(params, obj);

	        return params.join('&');
	    };

	    /**
	     * Parse a URL and return its components.
	     *
	     * @param {String} url
	     */

	    Url.parse = function (url) {

	        if (ie) {
	            el.href = url;
	            url = el.href;
	        }

	        el.href = url;

	        return {
	            href: el.href,
	            protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	            port: el.port,
	            host: el.host,
	            hostname: el.hostname,
	            pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	            search: el.search ? el.search.replace(/^\?/, '') : '',
	            hash: el.hash ? el.hash.replace(/^#/, '') : ''
	        };
	    };

	    function serialize(params, obj, scope) {

	        var array = _.isArray(obj), plain = _.isPlainObject(obj), hash;

	        _.each(obj, function (value, key) {

	            hash = _.isObject(value) || _.isArray(value);

	            if (scope) {
	                key = scope + '[' + (plain || hash ? key : '') + ']';
	            }

	            if (!scope && array) {
	                params.add(value.name, value.value);
	            } else if (hash) {
	                serialize(params, value, key);
	            } else {
	                params.add(key, value);
	            }
	        });
	    }

	    function encodeUriSegment(value) {

	        return encodeUriQuery(value, true).
	            replace(/%26/gi, '&').
	            replace(/%3D/gi, '=').
	            replace(/%2B/gi, '+');
	    }

	    function encodeUriQuery(value, spaces) {

	        return encodeURIComponent(value).
	            replace(/%40/gi, '@').
	            replace(/%3A/gi, ':').
	            replace(/%24/g, '$').
	            replace(/%2C/gi, ',').
	            replace(/%20/g, (spaces ? '%20' : '+'));
	    }

	    return _.url = Url;
	};


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for sending network requests.
	 */

	var xhr = __webpack_require__(148);
	var jsonp = __webpack_require__(150);
	var Promise = __webpack_require__(149);

	module.exports = function (_) {

	    var originUrl = _.url.parse(location.href);
	    var jsonType = {'Content-Type': 'application/json;charset=utf-8'};

	    function Http(url, options) {

	        var promise;

	        if (_.isPlainObject(url)) {
	            options = url;
	            url = '';
	        }

	        options = _.extend({url: url}, options);
	        options = _.extend(true, {},
	            Http.options, this.options, options
	        );

	        if (options.crossOrigin === null) {
	            options.crossOrigin = crossOrigin(options.url);
	        }

	        options.method = options.method.toUpperCase();
	        options.headers = _.extend({}, Http.headers.common,
	            !options.crossOrigin ? Http.headers.custom : {},
	            Http.headers[options.method.toLowerCase()],
	            options.headers
	        );

	        if (_.isPlainObject(options.data) && /^(GET|JSONP)$/i.test(options.method)) {
	            _.extend(options.params, options.data);
	            delete options.data;
	        }

	        if (options.emulateHTTP && !options.crossOrigin && /^(PUT|PATCH|DELETE)$/i.test(options.method)) {
	            options.headers['X-HTTP-Method-Override'] = options.method;
	            options.method = 'POST';
	        }

	        if (options.emulateJSON && _.isPlainObject(options.data)) {
	            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	            options.data = _.url.params(options.data);
	        }

	        if (_.isObject(options.data) && /FormData/i.test(options.data.toString())) {
	            delete options.headers['Content-Type'];
	        }

	        if (_.isPlainObject(options.data)) {
	            options.data = JSON.stringify(options.data);
	        }

	        promise = (options.method == 'JSONP' ? jsonp : xhr).call(this.vm, _, options);
	        promise = extendPromise(promise.then(transformResponse, transformResponse), this.vm);

	        if (options.success) {
	            promise = promise.success(options.success);
	        }

	        if (options.error) {
	            promise = promise.error(options.error);
	        }

	        return promise;
	    }

	    function extendPromise(promise, vm) {

	        promise.success = function (fn) {

	            return extendPromise(promise.then(function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            }), vm);

	        };

	        promise.error = function (fn) {

	            return extendPromise(promise.then(undefined, function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            }), vm);

	        };

	        promise.always = function (fn) {

	            var cb = function (response) {
	                return fn.call(vm, response.data, response.status, response) || response;
	            };

	            return extendPromise(promise.then(cb, cb), vm);
	        };

	        return promise;
	    }

	    function transformResponse(response) {

	        try {
	            response.data = JSON.parse(response.responseText);
	        } catch (e) {
	            response.data = response.responseText;
	        }

	        return response.ok ? response : Promise.reject(response);
	    }

	    function crossOrigin(url) {

	        var requestUrl = _.url.parse(url);

	        return (requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host);
	    }

	    Http.options = {
	        method: 'get',
	        params: {},
	        data: '',
	        xhr: null,
	        jsonp: 'callback',
	        beforeSend: null,
	        crossOrigin: null,
	        emulateHTTP: false,
	        emulateJSON: false
	    };

	    Http.headers = {
	        put: jsonType,
	        post: jsonType,
	        patch: jsonType,
	        delete: jsonType,
	        common: {'Accept': 'application/json, text/plain, */*'},
	        custom: {'X-Requested-With': 'XMLHttpRequest'}
	    };

	    ['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {

	        Http[method] = function (url, data, success, options) {

	            if (_.isFunction(data)) {
	                options = success;
	                success = data;
	                data = undefined;
	            }

	            return this(url, _.extend({method: method, data: data, success: success}, options));
	        };
	    });

	    return _.http = Http;
	};


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * XMLHttp request.
	 */

	var Promise = __webpack_require__(149);
	var XDomain = window.XDomainRequest;

	module.exports = function (_, options) {

	    var request = new XMLHttpRequest(), promise;

	    if (XDomain && options.crossOrigin) {
	        request = new XDomainRequest(); options.headers = {};
	    }

	    if (_.isPlainObject(options.xhr)) {
	        _.extend(request, options.xhr);
	    }

	    if (_.isFunction(options.beforeSend)) {
	        options.beforeSend.call(this, request, options);
	    }

	    promise = new Promise(function (resolve, reject) {

	        request.open(options.method, _.url(options), true);

	        _.each(options.headers, function (value, header) {
	            request.setRequestHeader(header, value);
	        });

	        var handler = function (event) {

	            request.ok = event.type === 'load';

	            if (request.ok && request.status) {
	                request.ok = request.status >= 200 && request.status < 300;
	            }

	            (request.ok ? resolve : reject)(request);
	        };

	        request.onload = handler;
	        request.onabort = handler;
	        request.onerror = handler;

	        request.send(options.data);
	    });

	    return promise;
	};


/***/ },
/* 149 */
/***/ function(module, exports) {

	/**
	 * Promises/A+ polyfill v1.1.0 (https://github.com/bramstein/promis)
	 */

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING  = 2;

	function Promise(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise.reject = function (r) {
	    return new Promise(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise.resolve = function (x) {
	    return new Promise(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise.all = function all(iterable) {
	    return new Promise(function (resolve, reject) {
	        var count = 0,
	            result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            iterable[i].then(resolver(i), reject);
	        }
	    });
	};

	Promise.race = function race(iterable) {
	    return new Promise(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            iterable[i].then(resolve, reject);
	        }
	    });
	};

	var p = Promise.prototype;

	p.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;

	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p.notify = function notify() {
	    var promise = this;

	    async(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	p.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	var queue = [];
	var async = function (callback) {
	    queue.push(callback);

	    if (queue.length === 1) {
	        async.async();
	    }
	};

	async.run = function () {
	    while (queue.length) {
	        queue[0]();
	        queue.shift();
	    }
	};

	if (window.MutationObserver) {
	    var el = document.createElement('div');
	    var mo = new MutationObserver(async.run);

	    mo.observe(el, {
	        attributes: true
	    });

	    async.async = function () {
	        el.setAttribute("x", 0);
	    };
	} else {
	    async.async = function () {
	        setTimeout(async.run);
	    };
	}

	module.exports = window.Promise || Promise;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JSONP request.
	 */

	var Promise = __webpack_require__(149);

	module.exports = function (_, options) {

	    var callback = '_jsonp' + Math.random().toString(36).substr(2), response = {}, script, body;

	    options.params[options.jsonp] = callback;

	    if (_.isFunction(options.beforeSend)) {
	        options.beforeSend.call(this, {}, options);
	    }

	    return new Promise(function (resolve, reject) {

	        script = document.createElement('script');
	        script.src = _.url(options);
	        script.type = 'text/javascript';
	        script.async = true;

	        window[callback] = function (data) {
	            body = data;
	        };

	        var handler = function (event) {

	            delete window[callback];
	            document.body.removeChild(script);

	            if (event.type === 'load' && !body) {
	                event.type = 'error';
	            }

	            response.ok = event.type !== 'error';
	            response.status = response.ok ? 200 : 404;
	            response.responseText = body ? body : event.type;

	            (response.ok ? resolve : reject)(response);
	        };

	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });

	};


/***/ },
/* 151 */
/***/ function(module, exports) {

	/**
	 * Service for interacting with RESTful services.
	 */

	module.exports = function (_) {

	    function Resource(url, params, actions, options) {

	        var self = this, resource = {};

	        actions = _.extend({},
	            Resource.actions,
	            actions
	        );

	        _.each(actions, function (action, name) {

	            action = _.extend(true, {url: url, params: params || {}}, options, action);

	            resource[name] = function () {
	                return (self.$http || _.http)(opts(action, arguments));
	            };
	        });

	        return resource;
	    }

	    function opts(action, args) {

	        var options = _.extend({}, action), params = {}, data, success, error;

	        switch (args.length) {

	            case 4:

	                error = args[3];
	                success = args[2];

	            case 3:
	            case 2:

	                if (_.isFunction(args[1])) {

	                    if (_.isFunction(args[0])) {

	                        success = args[0];
	                        error = args[1];

	                        break;
	                    }

	                    success = args[1];
	                    error = args[2];

	                } else {

	                    params = args[0];
	                    data = args[1];
	                    success = args[2];

	                    break;
	                }

	            case 1:

	                if (_.isFunction(args[0])) {
	                    success = args[0];
	                } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                    data = args[0];
	                } else {
	                    params = args[0];
	                }

	                break;

	            case 0:

	                break;

	            default:

	                throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
	        }

	        options.data = data;
	        options.params = _.extend({}, options.params, params);

	        if (success) {
	            options.success = success;
	        }

	        if (error) {
	            options.error = error;
	        }

	        return options;
	    }

	    Resource.actions = {

	        get: {method: 'GET'},
	        save: {method: 'POST'},
	        query: {method: 'GET'},
	        update: {method: 'PUT'},
	        remove: {method: 'DELETE'},
	        delete: {method: 'DELETE'}

	    };

	    return _.resource = Resource;
	};


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSweetAlert=t():e.VueSweetAlert=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/build/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),a=n(r);t["default"]=a["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(6),a=n(r);o(5);var i={};i.install=function(e){e.prototype.$swal=a["default"]},t["default"]=i},function(e,t,o){t=e.exports=o(3)(),t.push([e.id,"body.swal2-in{overflow-y:hidden}.swal2-container,body.swal2-iosfix{position:fixed;left:0;right:0}.swal2-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:0;bottom:0;padding:10px;background-color:transparent;z-index:1060}.swal2-container:not(.swal2-in){pointer-events:none}.swal2-container.swal2-fade{-webkit-transition:background-color .1s;transition:background-color .1s}.swal2-container.swal2-in{background-color:rgba(0,0,0,.4)}.swal2-modal{background-color:#fff;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;border-radius:5px;box-sizing:border-box;text-align:center;margin:auto;overflow-x:hidden;overflow-y:auto;display:none;position:relative}.swal2-modal:focus{outline:none}.swal2-modal.swal2-loading{overflow-y:hidden}.swal2-modal .swal2-title{color:#595959;font-size:30px;text-align:center;font-weight:600;text-transform:none;position:relative;margin:0;padding:0;line-height:60px;display:block}.swal2-modal .swal2-spacer{height:10px;color:transparent;border:0}.swal2-modal .swal2-styled{border:0;border-radius:3px;box-shadow:none;color:#fff;cursor:pointer;font-size:17px;font-weight:500;margin:0 5px;padding:10px 32px}.swal2-modal .swal2-styled:not(.swal2-loading)[disabled]{opacity:.4;cursor:no-drop}.swal2-modal .swal2-styled.swal2-loading{box-sizing:border-box;border:4px solid transparent;border-color:transparent;width:40px;height:40px;padding:0;margin:-2px 30px;vertical-align:top;background-color:transparent!important;color:transparent;cursor:default;border-radius:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-modal .swal2-styled.swal2-loading,.swal2-modal :not(.swal2-styled).swal2-loading:after{-webkit-animation:rotate-loading 1.5s linear 0s infinite normal;animation:rotate-loading 1.5s linear 0s infinite normal}.swal2-modal :not(.swal2-styled).swal2-loading:after{display:inline-block;content:'';margin-left:5px;vertical-align:-1px;height:6px;width:6px;border:3px solid #999;border-right-color:transparent;border-radius:50%}.swal2-modal .swal2-image{margin:20px auto;max-width:100%}.swal2-modal .swal2-close{font-size:36px;line-height:36px;font-family:serif;position:absolute;top:5px;right:13px;cursor:pointer;color:#ccc;-webkit-transition:color .1s ease;transition:color .1s ease}.swal2-modal .swal2-close:hover{color:#d55}.swal2-modal>.swal2-checkbox,.swal2-modal>.swal2-file,.swal2-modal>.swal2-input,.swal2-modal>.swal2-radio,.swal2-modal>.swal2-select,.swal2-modal>.swal2-textarea{display:none}.swal2-modal .swal2-content{font-size:18px;text-align:center;font-weight:300;position:relative;float:none;margin:0;padding:0;line-height:normal;color:#545454}.swal2-modal .swal2-checkbox,.swal2-modal .swal2-file,.swal2-modal .swal2-input,.swal2-modal .swal2-radio,.swal2-modal .swal2-select,.swal2-modal .swal2-textarea{margin:20px auto}.swal2-modal .swal2-file,.swal2-modal .swal2-input,.swal2-modal .swal2-textarea{width:100%;box-sizing:border-box;border-radius:3px;border:1px solid #d9d9d9;font-size:18px;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);-webkit-transition:border-color box-shadow .3s;transition:border-color box-shadow .3s}.swal2-modal .swal2-file.swal2-inputerror,.swal2-modal .swal2-input.swal2-inputerror,.swal2-modal .swal2-textarea.swal2-inputerror{border-color:#f06e57}.swal2-modal .swal2-file:focus,.swal2-modal .swal2-input:focus,.swal2-modal .swal2-textarea:focus{outline:none;box-shadow:0 0 3px #c4e6f5;border:1px solid #b4dbed}.swal2-modal .swal2-file:focus::-webkit-input-placeholder,.swal2-modal .swal2-input:focus::-webkit-input-placeholder,.swal2-modal .swal2-textarea:focus::-webkit-input-placeholder{-webkit-transition:opacity .3s ease .03s;transition:opacity .3s ease .03s;opacity:.8}.swal2-modal .swal2-file:focus::-moz-placeholder,.swal2-modal .swal2-input:focus::-moz-placeholder,.swal2-modal .swal2-textarea:focus::-moz-placeholder{-webkit-transition:opacity .3s ease .03s;transition:opacity .3s ease .03s;opacity:.8}.swal2-modal .swal2-file:focus:-ms-input-placeholder,.swal2-modal .swal2-input:focus:-ms-input-placeholder,.swal2-modal .swal2-textarea:focus:-ms-input-placeholder{-webkit-transition:opacity .3s ease .03s;transition:opacity .3s ease .03s;opacity:.8}.swal2-modal .swal2-file:focus::placeholder,.swal2-modal .swal2-input:focus::placeholder,.swal2-modal .swal2-textarea:focus::placeholder{-webkit-transition:opacity .3s ease .03s;transition:opacity .3s ease .03s;opacity:.8}.swal2-modal .swal2-file::-webkit-input-placeholder,.swal2-modal .swal2-input::-webkit-input-placeholder,.swal2-modal .swal2-textarea::-webkit-input-placeholder{color:#e6e6e6}.swal2-modal .swal2-file::-moz-placeholder,.swal2-modal .swal2-input::-moz-placeholder,.swal2-modal .swal2-textarea::-moz-placeholder{color:#e6e6e6}.swal2-modal .swal2-file:-ms-input-placeholder,.swal2-modal .swal2-input:-ms-input-placeholder,.swal2-modal .swal2-textarea:-ms-input-placeholder{color:#e6e6e6}.swal2-modal .swal2-file::placeholder,.swal2-modal .swal2-input::placeholder,.swal2-modal .swal2-textarea::placeholder{color:#e6e6e6}.swal2-modal .swal2-range input{float:left;width:80%}.swal2-modal .swal2-range output{float:right;width:20%;font-size:20px;font-weight:600;text-align:center}.swal2-modal .swal2-range input,.swal2-modal .swal2-range output{height:43px;line-height:43px;vertical-align:middle;margin:20px auto;padding:0}.swal2-modal .swal2-input{height:43px;padding:0 12px}.swal2-modal .swal2-input[type=number]{max-width:150px}.swal2-modal .swal2-file{font-size:20px}.swal2-modal .swal2-textarea{height:108px;padding:12px}.swal2-modal .swal2-select{color:#545454;font-size:inherit;padding:5px 10px;min-width:40%;max-width:100%}.swal2-modal .swal2-radio{border:0}.swal2-modal .swal2-radio label:not(:first-child){margin-left:20px}.swal2-modal .swal2-radio input,.swal2-modal .swal2-radio span{vertical-align:middle}.swal2-modal .swal2-radio input{margin:0 3px 0 0}.swal2-modal .swal2-checkbox{color:#545454}.swal2-modal .swal2-checkbox input,.swal2-modal .swal2-checkbox span{vertical-align:middle}.swal2-modal .swal2-validationerror{background-color:#f0f0f0;margin:0 -20px;overflow:hidden;padding:10px;color:gray;font-size:16px;font-weight:300;display:none}.swal2-modal .swal2-validationerror:before{content:'!';display:inline-block;width:24px;height:24px;border-radius:50%;background-color:#ea7d7d;color:#fff;line-height:24px;text-align:center;margin-right:10px}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media (-ms-high-contrast:active),all and (-ms-high-contrast:none){.swal2-range input{width:100%!important}.swal2-range output{display:none}}.swal2-icon{width:80px;height:80px;border:4px solid transparent;border-radius:50%;margin:20px auto 30px;padding:0;position:relative;box-sizing:content-box;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .x-mark{position:relative;display:block}.swal2-icon.swal2-error .line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal2-icon.swal2-error .line.left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal2-icon.swal2-error .line.right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}.swal2-icon.swal2-warning{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#f8bb86;border-color:#facea8}.swal2-icon.swal2-info,.swal2-icon.swal2-warning{font-size:60px;line-height:80px;text-align:center}.swal2-icon.swal2-info{font-family:Open Sans,sans-serif;color:#3fc3ee;border-color:#9de0f6}.swal2-icon.swal2-question{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#87adbd;border-color:#c9dae1;font-size:60px;line-height:80px;text-align:center}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success:after,.swal2-icon.swal2-success:before{content:'';border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal2-icon.swal2-success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.swal2-icon.swal2-success .placeholder{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal2-icon.swal2-success .fix{width:7px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success .line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal2-icon.swal2-success .line.tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success .line.long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{font-weight:600;margin:0 0 20px;padding:0}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{background:#3085d6;border-radius:2em;color:#fff;height:2em;line-height:2em;text-align:center;width:2em;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle,.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{background:#3085d6;height:.4em;margin:0 -1px;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes hideSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes hideSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}.swal2-show{-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:hideSweetAlert .15s forwards;animation:hideSweetAlert .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}@-webkit-keyframes animate-success-tip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animate-success-tip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animate-success-long{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animate-success-long{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}.animate-success-tip{-webkit-animation:animate-success-tip .75s;animation:animate-success-tip .75s}.animate-success-long{-webkit-animation:animate-success-long .75s;animation:animate-success-long .75s}.swal2-success.animate:after{-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}@-webkit-keyframes animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}.animate-error-icon{-webkit-animation:animate-error-icon .5s;animation:animate-error-icon .5s}@-webkit-keyframes animate-x-mark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animate-x-mark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.animate-x-mark{-webkit-animation:animate-x-mark .5s;animation:animate-x-mark .5s}@-webkit-keyframes pulse-warning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulse-warning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.pulse-warning{-webkit-animation:pulse-warning .75s infinite alternate;animation:pulse-warning .75s infinite alternate}@-webkit-keyframes rotate-loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(n[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&n[i[0]]||(o&&!i[2]?i[2]=o:o&&(i[2]="("+i[2]+") and ("+o+")"),e.push(i))}},e}},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=f[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(c(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(c(n.parts[a],t));f[n.id]={id:n.id,refs:1,parts:i}}}}function r(e){for(var t=[],o={},n=0;n<e.length;n++){var r=e[n],a=r[0],i=r[1],s=r[2],l=r[3],c={css:i,media:s,sourceMap:l};o[a]?o[a].parts.push(c):t.push(o[a]={id:a,parts:[c]})}return t}function a(e,t){var o=g(),n=x[x.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var o,n,r;if(t.singleton){var a=b++;o=h||(h=s(t)),n=u.bind(null,o,a,!1),r=u.bind(null,o,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=l(t),n=p.bind(null,o),r=function(){i(o),o.href&&URL.revokeObjectURL(o.href)}):(o=s(t),n=d.bind(null,o),r=function(){i(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}function u(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function p(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var f={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},w=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=m(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,b=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=w()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var a=[],i=0;i<o.length;i++){var s=o[i],l=f[s.id];l.refs--,a.push(l)}if(e){var c=r(e);n(c,t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete f[l.id]}}}};var v=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t,o){var n=o(2);"string"==typeof n&&(n=[[e.id,n,""]]);o(4)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){/*!
		 * sweetalert2 v6.2.0
		 * Released under the MIT License.
		 */
	!function(t,o){e.exports=o()}(this,function(){"use strict";var e="swal2-",t=function(t){var o={};for(var n in t)o[t[n]]=e+t[n];return o},o=t(["container","in","iosfix","modal","overlay","fade","show","hide","noanimation","close","title","content","spacer","confirm","cancel","icon","image","input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled"]),n=t(["success","warning","info","question","error"]),r={title:"",text:"",html:"",type:null,customClass:"",animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusCancel:!1,showCloseButton:!1,showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onOpen:null,onClose:null},a=('\n  <div class="'+o.modal+'" style="display: none" tabIndex="-1">\n    <ul class="'+o.progresssteps+'"></ul>\n    <div class="'+o.icon+" "+n.error+'">\n      <span class="x-mark"><span class="line left"></span><span class="line right"></span></span>\n    </div>\n    <div class="'+o.icon+" "+n.question+'">?</div>\n    <div class="'+o.icon+" "+n.warning+'">!</div>\n    <div class="'+o.icon+" "+n.info+'">i</div>\n    <div class="'+o.icon+" "+n.success+'">\n      <span class="line tip"></span> <span class="line long"></span>\n      <div class="placeholder"></div> <div class="fix"></div>\n    </div>\n    <img class="'+o.image+'">\n    <h2 class="'+o.title+'"></h2>\n    <div class="'+o.content+'"></div>\n    <input class="'+o.input+'">\n    <input type="file" class="'+o.file+'">\n    <div class="'+o.range+'">\n      <output></output>\n      <input type="range">\n    </div>\n    <select class="'+o.select+'"></select>\n    <div class="'+o.radio+'"></div>\n    <label for="'+o.checkbox+'" class="'+o.checkbox+'">\n      <input type="checkbox">\n    </label>\n    <textarea class="'+o.textarea+'"></textarea>\n    <div class="'+o.validationerror+'"></div>\n    <hr class="'+o.spacer+'">\n    <button type="button" class="'+o.confirm+'">OK</button>\n    <button type="button" class="'+o.cancel+'">Cancel</button>\n    <span class="'+o.close+'">&times;</span>\n  </div>\n').replace(/(^|\n)\s*/g,""),i=void 0,s=document.getElementsByClassName(o.container);s.length?i=s[0]:(i=document.createElement("div"),i.className=o.container,i.innerHTML=a);var l=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var o="#",n=0;n<3;n++){var r=parseInt(e.substr(2*n,2),16);r=Math.round(Math.min(Math.max(0,r+r*t),255)).toString(16),o+=("00"+r).substr(r.length)}return o},c={previousWindowKeyDown:null,previousActiveElement:null,previousBodyPadding:null},u=function(){if("undefined"==typeof document)return void console.error("SweetAlert2 requires document to initialize");if(!document.getElementsByClassName(o.container).length){document.body.appendChild(i);var e=p(),t=P(e,o.input),n=P(e,o.file),r=e.querySelector("."+o.range+" input"),a=e.querySelector("."+o.range+" output"),s=P(e,o.select),l=e.querySelector("."+o.checkbox+" input"),c=P(e,o.textarea);return t.oninput=function(){$.resetValidationError()},t.onkeydown=function(e){setTimeout(function(){13===e.keyCode&&(e.stopPropagation(),$.clickConfirm())},0)},n.onchange=function(){$.resetValidationError()},r.oninput=function(){$.resetValidationError(),a.value=r.value},r.onchange=function(){$.resetValidationError(),r.previousSibling.value=r.value},s.onchange=function(){$.resetValidationError()},l.onchange=function(){$.resetValidationError()},c.oninput=function(){$.resetValidationError()},e}},d=function(e){return i.querySelector("."+e)},p=function(){return document.body.querySelector("."+o.modal)||u()},f=function(){var e=p();return e.querySelectorAll("."+o.icon)},m=function(){return d(o.title)},w=function(){return d(o.content)},g=function(){return d(o.image)},h=function(){return d(o.spacer)},b=function(){return d(o.progresssteps)},x=function(){return d(o.validationerror)},v=function(){return d(o.confirm)},y=function(){return d(o.cancel)},k=function(){return d(o.close)},C=function(t){var o=[v(),y()];return t&&o.reverse(),o.concat(Array.prototype.slice.call(p().querySelectorAll("button:not([class^="+e+"]), input:not([type=hidden]), textarea, select")))},S=function(e,t){return!!e.classList&&e.classList.contains(t)},A=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},E=function(e,t){if(e&&t){var o=t.split(/\s+/).filter(Boolean);o.forEach(function(t){e.classList.add(t)})}},B=function(e,t){if(e&&t){var o=t.split(/\s+/).filter(Boolean);o.forEach(function(t){e.classList.remove(t)})}},P=function(e,t){for(var o=0;o<e.childNodes.length;o++)if(S(e.childNodes[o],t))return e.childNodes[o]},L=function(e,t){t||(t="block"),e.style.opacity="",e.style.display=t},M=function(e){e.style.opacity="",e.style.display="none"},O=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},q=function(e){return e.offsetWidth||e.offsetHeight||e.getClientRects().length},T=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},z=function(e){if("function"==typeof MouseEvent){var t=new MouseEvent("click",{view:window,bubbles:!1,cancelable:!0});e.dispatchEvent(t)}else if(document.createEvent){var o=document.createEvent("MouseEvents");o.initEvent("click",!1,!1),e.dispatchEvent(o)}else document.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick()},H=function(){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",animation:"animationend"};for(var o in t)if(t.hasOwnProperty(o)&&void 0!==e.style[o])return t[o];return!1}(),V=function(){var e=p();window.onkeydown=c.previousWindowKeyDown,c.previousActiveElement&&c.previousActiveElement.focus&&c.previousActiveElement.focus(),clearTimeout(e.timeout)},N=function(){var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},j=function(e,t){var o=void 0;return function(){var n=function(){o=null,e()};clearTimeout(o),o=setTimeout(n,t)}},U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=(function(){function e(e){this.value=e}function t(t){function o(e,t){return new Promise(function(o,r){var s={key:e,arg:t,resolve:o,reject:r,next:null};i?i=i.next=s:(a=i=s,n(e,t))})}function n(o,a){try{var i=t[o](a),s=i.value;s instanceof e?Promise.resolve(s.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(i.done?"return":"normal",i.value)}catch(l){r("throw",l)}}function r(e,t){switch(e){case"return":a.resolve({value:t,done:!0});break;case"throw":a.reject(t);break;default:a.resolve({value:t,done:!1})}a=a.next,a?n(a.key,a.arg):i=null}var a,i;this._invoke=o,"function"!=typeof t["return"]&&(this["return"]=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype["throw"]=function(e){return this._invoke("throw",e)},t.prototype["return"]=function(e){return this._invoke("return",e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}),I=R({},r),_=[],D=void 0,W=function(e){var t=p();for(var a in e)r.hasOwnProperty(a)||"extraParams"===a||console.warn('SweetAlert2: Unknown parameter "'+a+'"');t.style.width="number"==typeof e.width?e.width+"px":e.width,t.style.padding=e.padding+"px",t.style.background=e.background;var i=m(),s=w(),l=v(),c=y(),u=k();if(i.innerHTML=e.title.split("\n").join("<br>"),e.text||e.html){if("object"===U(e.html))if(s.innerHTML="",0 in e.html)for(var d=0;d in e.html;d++)s.appendChild(e.html[d].cloneNode(!0));else s.appendChild(e.html.cloneNode(!0));else e.html?s.innerHTML=e.html:e.text&&(s.innerHTML=(""+e.text).split("\n").join("<br>"));L(s)}else M(s);e.showCloseButton?L(u):M(u),t.className=o.modal,e.customClass&&E(t,e.customClass);var x=b(),C=parseInt(null===e.currentProgressStep?$.getQueueStep():e.currentProgressStep,10);e.progressSteps.length?(L(x),O(x),C>=e.progressSteps.length&&console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(function(t,n){var r=document.createElement("li");if(E(r,o.progresscircle),r.innerHTML=t,n===C&&E(r,o.activeprogressstep),x.appendChild(r),n!==e.progressSteps.length-1){var a=document.createElement("li");E(a,o.progressline),a.style.width=e.progressStepsDistance,x.appendChild(a)}})):M(x);for(var S=f(),A=0;A<S.length;A++)M(S[A]);if(e.type){var P=!1;for(var q in n)if(e.type===q){P=!0;break}if(!P)return console.error("SweetAlert2: Unknown alert type: "+e.type),!1;var z=t.querySelector("."+o.icon+"."+n[e.type]);switch(L(z),e.type){case"success":E(z,"animate"),E(z.querySelector(".tip"),"animate-success-tip"),E(z.querySelector(".long"),"animate-success-long");break;case"error":E(z,"animate-error-icon"),E(z.querySelector(".x-mark"),"animate-x-mark");break;case"warning":E(z,"pulse-warning")}}var H=g();e.imageUrl?(H.setAttribute("src",e.imageUrl),L(H),e.imageWidth?H.setAttribute("width",e.imageWidth):H.removeAttribute("width"),e.imageHeight?H.setAttribute("height",e.imageHeight):H.removeAttribute("height"),H.className=o.image,e.imageClass&&E(H,e.imageClass)):M(H),e.showCancelButton?c.style.display="inline-block":M(c),e.showConfirmButton?T(l,"display"):M(l);var V=h();e.showConfirmButton||e.showCancelButton?L(V):M(V),l.innerHTML=e.confirmButtonText,c.innerHTML=e.cancelButtonText,e.buttonsStyling&&(l.style.backgroundColor=e.confirmButtonColor,c.style.backgroundColor=e.cancelButtonColor),l.className=o.confirm,E(l,e.confirmButtonClass),c.className=o.cancel,E(c,e.cancelButtonClass),e.buttonsStyling?(E(l,o.styled),E(c,o.styled)):(B(l,o.styled),B(c,o.styled),l.style.backgroundColor=l.style.borderLeftColor=l.style.borderRightColor="",c.style.backgroundColor=c.style.borderLeftColor=c.style.borderRightColor=""),e.animation===!0?B(t,o.noanimation):E(t,o.noanimation)},K=function(e,t){var n=p();e?(E(n,o.show),E(i,o.fade),B(n,o.hide)):B(n,o.fade),L(n),i.style.overflowY="hidden",H&&!S(n,o.noanimation)?n.addEventListener(H,function r(){n.removeEventListener(H,r),i.style.overflowY="auto"}):i.style.overflowY="auto",E(i,o["in"]),E(document.body,o["in"]),X(),Y(),c.previousActiveElement=document.activeElement,null!==t&&"function"==typeof t&&t(n)},X=function(){null===c.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(c.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=N()+"px")},Q=function(){null!==c.previousBodyPadding&&(document.body.style.paddingRight=c.previousBodyPadding,c.previousBodyPadding=null)},Y=function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(e&&!S(document.body,o.iosfix)){var t=document.body.scrollTop;document.body.style.top=t*-1+"px",E(document.body,o.iosfix)}},Z=function(){if(S(document.body,o.iosfix)){var e=parseInt(document.body.style.top,10);B(document.body,o.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},J=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===t[0])return console.error("SweetAlert2 expects at least 1 attribute!"),!1;var r=R({},I);switch(U(t[0])){case"string":r.title=t[0],r.text=t[1],r.type=t[2];break;case"object":R(r,t[0]),r.extraParams=t[0].extraParams,"email"===r.input&&null===r.inputValidator&&(r.inputValidator=function(e){return new Promise(function(t,o){var n=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;n.test(e)?t():o("Invalid email address")})});break;default:return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got '+U(t[0])),!1}W(r);var a=p();return new Promise(function(e,t){r.timer&&(a.timeout=setTimeout(function(){$.closeModal(r.onClose),t("timer")},r.timer));var n=function(e){switch(e=e||r.input){case"select":case"textarea":case"file":return P(a,o[e]);case"checkbox":return a.querySelector("."+o.checkbox+" input");case"radio":return a.querySelector("."+o.radio+" input:checked")||a.querySelector("."+o.radio+" input:first-child");case"range":return a.querySelector("."+o.range+" input");default:return P(a,o.input)}},s=function(){var e=n();if(!e)return null;switch(r.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return r.inputAutoTrim?e.value.trim():e.value}};r.input&&setTimeout(function(){var e=n();e&&A(e)},0);for(var u=function(t){r.showLoaderOnConfirm&&$.showLoading(),r.preConfirm?r.preConfirm(t,r.extraParams).then(function(o){$.closeModal(r.onClose),e(o||t)},function(e){$.hideLoading(),e&&$.showValidationError(e)}):($.closeModal(r.onClose),e(t))},d=function(e){var o=e||window.event,n=o.target||o.srcElement,a=v(),i=y(),c=a===n||a.contains(n),d=i===n||i.contains(n);switch(o.type){case"mouseover":case"mouseup":r.buttonsStyling&&(c?a.style.backgroundColor=l(r.confirmButtonColor,-.1):d&&(i.style.backgroundColor=l(r.cancelButtonColor,-.1)));break;case"mouseout":r.buttonsStyling&&(c?a.style.backgroundColor=r.confirmButtonColor:d&&(i.style.backgroundColor=r.cancelButtonColor));break;case"mousedown":r.buttonsStyling&&(c?a.style.backgroundColor=l(r.confirmButtonColor,-.2):d&&(i.style.backgroundColor=l(r.cancelButtonColor,-.2)));break;case"click":c&&$.isVisible()?r.input?!function(){var e=s();r.inputValidator?($.disableInput(),r.inputValidator(e,r.extraParams).then(function(){$.enableInput(),u(e)},function(e){$.enableInput(),e&&$.showValidationError(e)})):u(e)}():u(!0):d&&$.isVisible()&&($.closeModal(r.onClose),t("cancel"))}},f=a.querySelectorAll("button"),m=0;m<f.length;m++)f[m].onclick=d,f[m].onmouseover=d,f[m].onmouseout=d,f[m].onmousedown=d;k().onclick=function(){$.closeModal(r.onClose),t("close")},i.onclick=function(e){e.target===i&&r.allowOutsideClick&&($.closeModal(r.onClose),t("overlay"))};var w=v(),g=y();r.reverseButtons?w.parentNode.insertBefore(g,w):w.parentNode.insertBefore(w,g);var S=function(e,t){for(var o=C(r.focusCancel),n=0;n<o.length;n++){e+=t,e===o.length?e=0:e===-1&&(e=o.length-1);var a=o[e];if(q(a))return a.focus()}},O=function(e){var o=e||window.event,n=o.keyCode||o.which;if([9,13,32,27].indexOf(n)!==-1){for(var a=o.target||o.srcElement,i=C(r.focusCancel),s=-1,l=0;l<i.length;l++)if(a===i[l]){s=l;break}9===n?(o.shiftKey?S(s,-1):S(s,1),o.stopPropagation(),o.preventDefault()):13===n||32===n?s===-1&&(r.focusCancel?z(g,o):z(w,o)):27===n&&r.allowEscapeKey===!0&&($.closeModal(r.onClose),t("esc"))}};c.previousWindowKeyDown=window.onkeydown,window.onkeydown=O,r.buttonsStyling&&(w.style.borderLeftColor=r.confirmButtonColor,w.style.borderRightColor=r.confirmButtonColor),$.showLoading=$.enableLoading=function(){L(h()),L(w,"inline-block"),E(w,o.loading),E(a,o.loading),w.disabled=!0,g.disabled=!0},$.hideLoading=$.disableLoading=function(){r.showConfirmButton||(M(w),r.showCancelButton||M(h())),B(w,o.loading),B(a,o.loading),w.disabled=!1,g.disabled=!1},$.enableButtons=function(){w.disabled=!1,g.disabled=!1},$.disableButtons=function(){w.disabled=!0,g.disabled=!0},$.enableConfirmButton=function(){w.disabled=!1},$.disableConfirmButton=function(){w.disabled=!0},$.enableInput=function(){var e=n();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode,o=t.querySelectorAll("input"),r=0;r<o.length;r++)o[r].disabled=!1;else e.disabled=!1},$.disableInput=function(){var e=n();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode,o=t.querySelectorAll("input"),r=0;r<o.length;r++)o[r].disabled=!0;else e.disabled=!0},$.recalculateHeight=j(function(){var e=p(),t=e.style.display;e.style.minHeight="",L(e),e.style.minHeight=e.scrollHeight+1+"px",e.style.display=t},50),$.showValidationError=function(e){var t=x();t.innerHTML=e,L(t);var r=n();A(r),E(r,o.inputerror)},$.resetValidationError=function(){var e=x();M(e),$.recalculateHeight();var t=n();t&&B(t,o.inputerror)},$.getProgressSteps=function(){return r.progressSteps},$.setProgressSteps=function(e){r.progressSteps=e,W(r)},$.showProgressSteps=function(){L(b())},$.hideProgressSteps=function(){M(b())},$.enableButtons(),$.hideLoading(),$.resetValidationError();for(var T=["input","file","range","select","radio","checkbox","textarea"],H=void 0,V=0;V<T.length;V++){var N=o[T[V]],R=P(a,N);if(H=n(T[V])){for(var I in H.attributes)if(H.attributes.hasOwnProperty(I)){var _=H.attributes[I].name;"type"!==_&&"value"!==_&&H.removeAttribute(_)}for(var X in r.inputAttributes)H.setAttribute(X,r.inputAttributes[X])}R.className=N,r.inputClass&&E(R,r.inputClass),M(R)}var Q=void 0;!function(){switch(r.input){case"text":case"email":case"password":case"number":case"tel":H=P(a,o.input),H.value=r.inputValue,H.placeholder=r.inputPlaceholder,H.type=r.input,L(H);break;case"file":H=P(a,o.file),H.placeholder=r.inputPlaceholder,H.type=r.input,L(H);break;case"range":var e=P(a,o.range),t=e.querySelector("input"),i=e.querySelector("output");t.value=r.inputValue,t.type=r.input,i.value=r.inputValue,L(e);break;case"select":var s=P(a,o.select);if(s.innerHTML="",r.inputPlaceholder){var l=document.createElement("option");l.innerHTML=r.inputPlaceholder,l.value="",l.disabled=!0,l.selected=!0,s.appendChild(l)}Q=function(e){for(var t in e){var o=document.createElement("option");o.value=t,o.innerHTML=e[t],r.inputValue===t&&(o.selected=!0),s.appendChild(o)}L(s),s.focus()};break;case"radio":var c=P(a,o.radio);c.innerHTML="",Q=function(e){for(var t in e){var n=1,a=document.createElement("input"),i=document.createElement("label"),s=document.createElement("span");a.type="radio",a.name=o.radio,a.value=t,a.id=o.radio+"-"+n++,r.inputValue===t&&(a.checked=!0),s.innerHTML=e[t],i.appendChild(a),i.appendChild(s),i["for"]=a.id,c.appendChild(i)}L(c);var l=c.querySelectorAll("input");l.length&&l[0].focus()};break;case"checkbox":var u=P(a,o.checkbox),d=n("checkbox");d.type="checkbox",d.value=1,d.id=o.checkbox,d.checked=Boolean(r.inputValue);var p=u.getElementsByTagName("span");p.length&&u.removeChild(p[0]),p=document.createElement("span"),p.innerHTML=r.inputPlaceholder,u.appendChild(p),L(u);break;case"textarea":var f=P(a,o.textarea);f.value=r.inputValue,f.placeholder=r.inputPlaceholder,L(f);break;case null:break;default:console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "select", "checkbox", "textarea" or "file", got "'+r.input+'"')}}(),"select"!==r.input&&"radio"!==r.input||(r.inputOptions instanceof Promise?($.showLoading(),r.inputOptions.then(function(e){$.hideLoading(),Q(e)})):"object"===U(r.inputOptions)?Q(r.inputOptions):console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got "+U(r.inputOptions))),K(r.animation,r.onOpen),S(-1,1),i.scrollTop=0,"undefined"==typeof MutationObserver||D||(D=new MutationObserver($.recalculateHeight),D.observe(a,{childList:!0,characterData:!0,subtree:!0}))})},$=function F(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return F.isVisible()&&F.close(),J.apply(void 0,t)};return $.isVisible=function(){var e=p();return q(e)},$.queue=function(e){_=e;var t=p(),o=function(){_=[],t.removeAttribute("data-queue-step")},n=[];return new Promise(function(e,r){!function a(i,s){i<_.length?(t.setAttribute("data-queue-step",i),$(_[i]).then(function(e){n.push(e),a(i+1,s)},function(e){o(),r(e)})):(o(),e(n))}(0)})},$.getQueueStep=function(){return p().getAttribute("data-queue-step")},$.insertQueueStep=function(e,t){return t&&t<_.length?_.splice(t,0,e):_.push(e)},$.deleteQueueStep=function(e){"undefined"!=typeof _[e]&&_.splice(e,1)},$.close=$.closeModal=function(e){var t=p();B(t,o.show),E(t,o.hide);var r=t.querySelector("."+o.icon+"."+n.success);B(r,"animate"),B(r.querySelector(".tip"),"animate-success-tip"),B(r.querySelector(".long"),"animate-success-long");var a=t.querySelector("."+o.icon+"."+n.error);B(a,"animate-error-icon"),B(a.querySelector(".x-mark"),"animate-x-mark");var s=t.querySelector("."+o.icon+"."+n.warning);B(s,"pulse-warning"),V();var l=function(){M(t),t.style.minHeight="",B(i,o["in"]),B(document.body,o["in"]),Q(),Z()};H&&!S(t,o.noanimation)?t.addEventListener(H,function c(){t.removeEventListener(H,c),S(t,o.hide)&&l()}):l(),null!==e&&"function"==typeof e&&e(t)},$.clickConfirm=function(){return v().click()},$.clickCancel=function(){return y().click()},$.setDefaults=function(e){if(!e||"object"!==("undefined"==typeof e?"undefined":U(e)))return console.error("SweetAlert2: the argument for setDefaults() is required and has to be a object");for(var t in e)r.hasOwnProperty(t)||"extraParams"===t||(console.warn('SweetAlert2: Unknown parameter "'+t+'"'),delete e[t]);R(I,e)},$.resetDefaults=function(){I=R({},r)},$.noop=function(){},$.version="6.2.0",$}),window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2)}])});
	//# sourceMappingURL=vue-sweetalert.js.map

/***/ }
/******/ ]);