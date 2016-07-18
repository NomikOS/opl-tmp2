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

	var _StandBy = __webpack_require__(13);

	var _StandBy2 = _interopRequireDefault(_StandBy);

	var _Setup = __webpack_require__(25);

	var _Setup2 = _interopRequireDefault(_Setup);

	var _EventPickup = __webpack_require__(28);

	var _EventPickup2 = _interopRequireDefault(_EventPickup);

	var _EventDelivery = __webpack_require__(40);

	var _EventDelivery2 = _interopRequireDefault(_EventDelivery);

	var _LoadVehicle = __webpack_require__(43);

	var _LoadVehicle2 = _interopRequireDefault(_LoadVehicle);

	var _HubReception = __webpack_require__(47);

	var _HubReception2 = _interopRequireDefault(_HubReception);

	var _HubTransfer = __webpack_require__(50);

	var _HubTransfer2 = _interopRequireDefault(_HubTransfer);

	var _Print = __webpack_require__(53);

	var _Print2 = _interopRequireDefault(_Print);

	var _Scan = __webpack_require__(56);

	var _Scan2 = _interopRequireDefault(_Scan);

	var _Payment = __webpack_require__(59);

	var _Payment2 = _interopRequireDefault(_Payment);

	var _Call = __webpack_require__(62);

	var _Call2 = _interopRequireDefault(_Call);

	var _Logout = __webpack_require__(65);

	var _Logout2 = _interopRequireDefault(_Logout);

	var _LoggedIn = __webpack_require__(68);

	var _LoggedIn2 = _interopRequireDefault(_LoggedIn);

	var _Redirecting = __webpack_require__(71);

	var _Redirecting2 = _interopRequireDefault(_Redirecting);

	var _Available = __webpack_require__(74);

	var _Available2 = _interopRequireDefault(_Available);

	var _vueRouter = __webpack_require__(77);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(78);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _director = __webpack_require__(17);

	var _director2 = _interopRequireDefault(_director);

	var _ls = __webpack_require__(19);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.config.debug = true;

	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueRouter2.default);

	var router = exports.router = new _vueRouter2.default();

	router.map({
	  '/setup': {
	    component: _Setup2.default
	  },
	  '/stand-by': {
	    component: _StandBy2.default
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
	  '/hub-reception': {
	    component: _HubReception2.default
	  },
	  '/hub-transfer': {
	    component: _HubTransfer2.default
	  },
	  '/print': {
	    component: _Print2.default
	  },
	  '/scan': {
	    component: _Scan2.default
	  },
	  '/payment': {
	    component: _Payment2.default
	  },
	  '/call': {
	    component: _Call2.default
	  },
	  '/logged-in': {
	    component: _LoggedIn2.default
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
	  // '*': {
	  //   component: {
	  //     template: '<div>' +
	  //       '<center><p>Ruta no existe, Deje el trago.</p></center>' +
	  //       '</div>'
	  //   }
	  '*': {
	    component: _EventPickup2.default
	  }
	});

	router.start(_App2.default, '#app');

	// console.info('Vue.http.interceptors.push< ------------------');
	// Vue.http.interceptors.push((request, next) => {

	//     // modify request
	//     request.method = 'POST';

	//     // continue to next interceptor
	//     next();
	// });

	/**
	 * Set Authorization token
	 */


	// Vue.http.interceptors.push( {

	//   request: function( request ) {

	//     var access_token = ls.get( 'access_token' )   
	//     console.info(access_token, 'access_token inside interceptor');

	//     request.headers[ 'Authorization' ] = 'Bearer: ' + access_token
	//     // request.headers[ 'Accept' ] = 'application/vnd.mob.v1+json'
	//     // request.emulateJSON = true;
	//     return request
	//   },

	//   response: function( response ) {

	//     if ( response.headers( 'Auth-Token' ) ) {
	//       auth.actions.setToken( response.headers( 'Auth-Token' ) );
	//     }

	//     if ( response.status == 500 ) {

	//       if ( response.data.message == 'Token has expired, but is still valid.' ) {
	//         console.log( 'RETRY', response );
	//       } else {
	//         alert( 'Whoops, an unknown error occured.' );
	//       }

	//     }

	//     return response;
	//   }

	// } );

	_director2.default.init();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
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
	 * Camelize a hyphen-delmited string.
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

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
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
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

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
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
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
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
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
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
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
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
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
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
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
	    // needs to reigster itself as a child of that fragment
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
	  return parseExpression(path).get(obj);
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
	      key = parseExpression(key.slice(1)).get.call(original, original);
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
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
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

	function parseExpression(exp, needSet) {
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
	  parseExpression: parseExpression,
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
	    var res = parseExpression(expOrFn, this.twoWay);
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
	        // new isntance
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
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
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
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
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
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
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
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
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
	  // check ref for v-for and router-view
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
	    var fn = parseExpression(expression).get;
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
	    var res = parseExpression(exp);
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
	    var res = parseExpression(exp, true);
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
	 * Filter filter for arrays
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

	Vue.version = '1.0.26';

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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

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

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
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
	    var timeout = cachedSetTimeout(cleanUpNextTick);
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
	    cachedClearTimeout(timeout);
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
	        cachedSetTimeout(drainQueue, 0);
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
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/App.vue"
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

	var _store = __webpack_require__(6);

	var _store2 = _interopRequireDefault(_store);

	var _global = __webpack_require__(8);

	var _actions = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {},

		vuex: {
			actions: {
				loadData: _actions.loadData
			}
		},

		/**
	  * Make this and all child components aware of the new store
	  */
		store: _store2.default,

		ready: function ready() {
			console.info('APP is ready ===================================');
			this.initPubnub();
		},

		methods: {
			initPubnub: function initPubnub() {

				console.info('pubnub cargado y listo para disparar');

				var that = this;
				_global.pubnub.subscribe({
					channel: 'notifications-opl',

					message: function message(_message) {
						console.info(_message);

						var type = _message.type;
						console.info(type);

						switch (type) {
							case 'order-pickup':
								that.loadData({
									type: 'order',
									content: _message.order
								});
								break;

							case 'print-order':
								var mac = 'AC:3F:A4:56:66:EC';
								// var text = message.order_zpl
								var text = '^GFA,116484,116484,51,,:::::::::::::::::::::::::::::::::::P07JF8,O01KF8,:O01KFiU07C,O03KFiV03,O03FN01CL07V038M038gG01CL01CJ0A4,O03EM01FFCJ07FFI03FJ0FEI03FF8K03FF8J03EJ0IFEK01FFCJ01FFC00124,O03EM07IFI01IFC003FJ0FEI0IFEK0IFEJ07FJ0JFEJ07IFJ07IF001248,O03EL03JFC007JF003F8I07E007JF8I07JF8I07FJ0KF8003JFC003JFC0128,O03EL07JFE01KF803FCI07E00KFCI0KFCI0FFJ0KFC007JFE007JFC0124,O07EL0LF03FE0FFC03FCI07C01FF07FE001KFE001FF8001KFE00KFC00FF83FF0081,O07CK01FE00FE07F803FE07FEI07C07FC01FE003FC01FC001FF8001F801FE01FF00F801FE00FF0066,O07CK03F8003E0FEI0FE07FEI07C07FI07F007FI07C003FF8001FI07E03FC003803F8007F8018,O07CK07FI0181FCI07F07FFI07C0FCI03F80FEI03I03EF8001FI03E07FL07EI01F8,O07CK0FEK03F8I03F07FF800FC1FCI01F81F8M07EFC001FI03E0FEL0FCJ0FC,O07JF81FCK07FJ01F07DFC00FC3FJ01F83F8M0FCFC003FI03E0FCK01FCJ0FC,O07JF81F8K07EJ01F07DFC00F83FK0F83FN0F87C003FI03E1F8K01F8J0FC,O0KF81FL07CJ01F87CFE00F83EK0F83EM01F87E003EI03E1FL03FK07E,O0KF83FL0FCJ01F87C7E00F87EK0F87EM03F07E003EI03E3FL03FK07E,O0FCJ03FL0FCJ01F8FC7F00F87CK0F87EM03F03E003EI07E3FL03FK07E,O0F8J03EL0F8J01F8FC3F00F87CK0F87CM07E03E003EI0FC3EL03EK07C,O0F8J07EL0F8J01F0F81F80F8FCK0F8FCM07C03F007E001FC7EL07EK07C,O0F8J07EK01F8J01F0F81FC1F8FCK0F8FCM0FC03F007KF07EJ0FC7EK07C,N01F8J07EK01F8J01F0F80FE1F8FCK0F8FCL01F801F007KF07EJ0FC7EK0FC,N01FK07EK01F8J01F0F80FE1F0FCJ01F8FCL01F001F807JFE07EJ07C7EK0FC,N01FK07EK01F8J03F1F807F1F0FCJ01F0FCL03KF807JF807EJ0FC7EK0F8,N01FK07EK01F8J07E1F003F1F0FCJ03F0FCL03KF807IFE007EJ0FC7EJ01F8,N01FK07FL0FCJ0FC1F003FBF0FEJ07E0FEL07KFC07C07F007FJ0F83FJ03F,N01FK03FL0FCJ0FC1F001FBF07EJ07E07EL0LFC07C03F003FJ0F83FJ07F,N01FK03F8I040FCI01F81FI0FFE07EJ0FC07FJ080LFC0FC03F803F8I0F83FJ07E,N01FK01FC001E07FI03F83FI0FFE03F8003F803F8003C1F8I07C0F801FC01FCI0F83FC001FC,N03FK01FE007F07F800FF03FI07FE03FC007F803FC00FE1FJ07C0F801FC01FE001F81FC003FC,N03KF00FFE7FF03FE07FE03FI07FE01FF03FF001FFCFFE3EJ07E0F800FE00FFC3FF80FF81FF,N03KF00KFE01KFC03FI03FE00KFC001KFC3EJ07E0F8007E00LF007JFE,N03KF003JF800KF003EI01FC007JF8I07JF07CJ03F1F8007F003JFE003JF8,N07KF001JFI07IFC003EI01FC003IFEJ03IFE0FCJ03F1FI03F001JF8001JF,N07KFI0IFCI01IF8003EJ0FC001IF8J01IF80F8J03F1FI03F8007FFEJ07FFE,X07CK01FV0FN0F8gG07CL078,,::::iG03Q08,gX0CT04M02Q08,:gW01E64609838980C10F0E010C926060B81800D8700383040D86,gX087I9FCC8EE373CC3B0108F7B199DC6E0379DC0FICF33998,gX0870198CC0C64330C218308C618198CC606330C1800CC21818,gX0861F90CF186C13087F83098419F90C820413FC100FC8411F8,gW0184311083986C13087F0219841B190C820C13FC101I841318,gW018421308198CC260860031986321108C606330018909867318,gW01E43F309F9F87E60F3E03F18FE3F308FC07F3F81F9F983D3F,gX0CC3D308F1783C60E3C01D10DC3D3087803B1F00F1E98031D,hL03gU046,hL03gU07E,jH01,,:::::::::::::::::::::::::::kF8,kFC,,::::::::::J02gU04L08,I01FC3FF1FF03FFC703FFEFFC0KF80C0E061F83FE07F0FFCKF8,I030E30398783C00703060CJ06181C1E0E0630C3070C38C0E0618,I0607301981C3C00783060CJ06180C1E0F06606303181CC060618gG0C,I0C03301980C3C006C3060CJ06180C130D86602301B00CC060618g03F,I0C03301980C3C006C3060CJ06180C330D86700301300CC060618U01E0E073801C1E00E0FE3C0781F,I0C01BF7180C3FF8663060FF80061FB8330CC63E03033006FDC061FFT01E0E061801C3F80E1FE7F0FE3F8,I0C01BFE180C3FFC633060FFC0061FF0618C660FC3FE3006FF8061FF8S01F0E061C07C3B83E1FE771CE738,I0C01B0C180C3C00633060CJ0618607F8C6600E3FC3006C300618U01F0E06180FC7187E180E31C671C,I0C03306180C3C0061B060CJ0618307FCC36006300300CC180618U01F8E06181DC71CEE180E3806718,I0C03303180C3C0060F060CJ061818C0CC1E602300300CC0C0618U01FCE07F809C71C4E1FCE381E3F8,I060630398183C0060F060CJ06181CC0CC1E6063001818C0E0618U01DCE03F001C71C0E3FCE383C3F,I038E3019FF83FFC607060FFC006180C806C0E38E3I0E38C06061FF8S01CEEK01C71C0E18EE383E3F8,I01F8300DFE03FFC603060FFC0061807806C061FC3I07E0C03061FF8S01CEEK01C71C0E00EE380771C,iQ01C7EK01C71C0E00EE380771C,iQ01C7EK01C7180E30EE318771C,iQ01C3EK01C7380E38EE71C771C,iQ01C1EK01C3F80E3FC7F1FE7F8,iQ01C1EK01C1F00E0F83E07C1F,,:::::::kFC,,::::::::::::::::::I01F80200198M07FC3E1F07F1FF3E07C1F,I070C0600198M07F8663987F1FE730CC398,I0606J018O010C330C4I046198630C,I0C020701D803907040030C300C4I0C6198600C,I0C001F83F987F1F860060C3008DC01860986008,I0C0030C6198C330CI0607E078FE01861CFC078,I0C003046198C3304I0C07E078C303061CFC078,I0C00606419983606I0C0C300C030303E98600C,I0C02606419983606I080C100C018200C98200C,I0C0620441988320400180C12048106001982204,I060630C6198C330C00180C330CC30606198630C,I071C39C73986739C40180E739CE7060631CE39C,I01F81F83F983F1F8601807E1F87E0603E0FC1F8,T03,S0C3,S0FE,S07C,,::::I0E06L03O018O03I0600FCT03O01FF8M06,I0E06L03O018O03I060386T03O0181CM0C,I0F06L03O018O03I060303T03O0180C,I0D860E038C3700C7020018023C03803B038606010780C38C0701C03003C033C0180C1C07181E01C,I0D863F1IF3F87DF830019867F1FC07F0FC606I0FE7DIF1F8FE03007F1F7F0180C7E3FFE3F8FE,I0CC661986330C630CI01986C31860C3186606001866186330CC30300C318C301FB8C330C6618C3,I0CI60986330C630CI01986031860C3186606J066186330CC303I03180301FF0C130C6018C3,I0C66C0D86330663FEI019861F1860831FF606I03E618633FEC303001F181F0186181B0C60F8C3,I0C36C0D86330663FCI019867F1860831FE606010FE618633FCC303007F187F0183181B0C63F8C3,I0C1E40986330462J021986C31860831006060318661863200C30300C318C3018188130C6618C3,I0C1E61986330C630C0021986831860C3186603031066186330CC303008318830181CC330C6418C3,I0C0E73986339C638C20331CEC71860E71C66038E18E6186338CC303FCC718C70180CE730C6638C3,I0C063F18633F860F8301F0FE7D18607F07C600FC0FA618630F8C303FE7D187D018067E30C63E8C3,,:::::::hO04,I0FFCL031800CN0CgG03FC04U02S03O018,I0CN031800CN0CgG0E060CU06S03O018,I0CO018Q0Cg018030CU06S03O018,I0CI0E303C019J023C0380C3C063C0031C038C0F01C30C98E18F01C1C0380E037070381E0041C63700C3801E18,I0C007FFC7F31980D867F1FC0C7F3E7F01F7E1IF1FCFE23FC9FF9FCFE7F1FC3F1FF9F8FE3F30CIFBF87CFC03F18,I0FF8618CC331800D86C31860CC330C3018C3186330CC32218IC30CC3431866198630C8661B0CC31B0C618606198,I0FFC618C0331800D86031860C033003018C1186300CC36618IC00CC3601866098630CC06030CC31B0C618606018,I0C00618C1F31800D861F1860C1F301F01981986307CC34418IC07CC378183C0D863FEF06030CC31B0661FF06018,I0C00618C7F31800D867F1860C7F307F0198198631FCC34C188CC1FCC31F183C0D863FC3E6030CC31B0661FE06018,I0C00618CC331800D86C31860CC330C301881186330CC34C118CC30CC303182409862I066030CC31B0461I06018,I0C00618C8331800D86831860C833083018C3186320CC364310CC20CC3419866198630C8361B0CC31B0C618606198,I0FFC618CC731900DCEC71864CC730C7118E7186331CC3667F0EC31CC3631CE7398738CC67339CC31B9C61C627318,I0FFC618C7D31980CFE7D1866C7D307D1987E18631F4C3239C07C1F4C33E1FC3F1838F87C3E1FCC31BF8607C33E18,W0CgO03I0CO018,W0CgO01C038O018,V01CgP0IFP018,V038gP01F8P018,,:::I0FFC6037FFI0607F007C7FC7C01F0FF8F800F8,I0C0E60303J0E07F00CC7F8C60398FF1CC01CC,I0C0660303I01E040018601186030C021860186,I0C066030304036040018603180030C06006I06,I0C0660303060060DC01860611003040C004I04,I0FDC60303J060FE00FC0617C030E0C03C003C,I0FF860303J060C300FC0C1C6030E1803C003C,I0C3060303J0600301860C18601F4180067806,I0C1860303J0600181820818300641I06FC06,I0C0C60303J06081018218182I0C301020102,I0C0E30603J060C3018618186030C301860186,I0C0638E03040060E711CE180CE2318301CE01CE,I0C031FC030600607E18FC1807C31F0300FC00FC,,::::::::001FFC006001F0FF8181F1FF7FC7F0F87C,J0CI0600398FF038319FE7F87F198E6,J0CI060030C02078618040104030CC3,J0C03862030C060586I0C0304030CC3,J0C0FC6303040C0D844018060DC30CC1,J0C18660030E0C1985F018060FE1F8C38,J0C18660030E18318718300C0C31F8C38,J0C1FF6001F418218618300C00330C7D,J0C1FE6I064107FC60C2008001B0419,J0C1006J0C307FC608601808130403,J0C18660030C3001861860180C330CC3,J0C1C66203183001833860180E739CC6,J0C07C6301F0300181F0601807E1F87C,,:::::::::::::::kFC,kF8,,::::::::::::::::::I01F80200198M07FC3E1F03C07C1F0F8,I070C0600198M07F863398660CC319CC,I0606J018O010C330CC318661986,I0C020701D803907040030CI0CC31866I06,I0C001F83F987F1F86006088008C318644004,I0C0030C6198C330CI060BE078C10FC5F03C,I0C003046198C3304I0C0E3078C10FC7183C,I0C00606419983606I0C0C300CC118661806,I0C02606419983606I080C180CC318260C06,I0C0620441988320400180C1204C318260902,I060630C6198C330C00180C330CC318661986,I071C39C73986739C401806739C661CE339CE,I01F81F83F983F1F8601803E1F83C0FC1F0FC,T03,S0C3,S0FE,S07C,,::gJ01,I0FFCX07EM0C003M018P018Q0C06O01FF87FF8C,I0Cg0C3M0C003M018P018Q0C06O01800781CC,I0CY01818W018P018Q0C06O01800780CC,I0CI0E301C061C0E03C1018081C068003C00701C0018011E03800E1878400E00810C060E0701C001800780CC,I0C007FFCFE3E7E3F87F181C007E3E83C7E31F87F0018C33F9FC03F18FE41BF00830C067F1F87F001800780CC,I0FF8618CC330C3218C3I0F80C330C2CCI30C430018C3619860619986616180C20FFE61B0C43001FF07FB8C,I0FFC618CC330C33I03I03F0C330C6CC033046I018C3019860609806636180C60FFE61B046I01FF87FF0C,I0C00618CC1B0FFBC01FJ038FFB044CC03606780018C30F9860C0D83E227FC0660C0661E06780018007860C,I0C00618CC1B0FF0F87FJ018FF306IC036061F0018C33F9860C0D8FE367F80640C0661E061F0018007830C,I0C00618CC13080018C300180880302IC03204030218C3619860409986164I02C0C0661A04030018007818C,I0C00618CC330C320C83001818C33038CCI30C418218C34198606199061C6180380C0661B0C41801800781CC,I0FFC618CE730E3318C7100E38E33038CE6339C630330E763986073998E1C7180380C0661B9C63101FF8780CFF,I0FFC618CFE303E1F07D1807F03E3018C7C31F83E01F07F3E98603F18FA0C1F00180C06619F83E181FF87806FF8,P0ChU01,P0ChU03,P0ChU0E,:,::::J0CN06018I01C0CP03FEL03006M03J03F00C0187F078,I01EN06018I01C0CP0307L03006M03J07381C0387F0CC,I01EP018I01E0CP0303O06R06183C07840186,I0130400E03801D83C01B0C021C100780301861C2I0760E01C1E007804186C05840186,I033041BF1FC63F87F01B0D867E106FE03013E7E20F0FE3F0FE3F30FE00180C0D8DC186,I0330616198I618C30198D86C318586030330C330B186618C361B18600180C198FE182,I0618636198I61803018CD86C318C0603FE30C131B186618C360300600300C318C3182,I07F8227FD8664181F018CD86FFI83E03FC31819131067FCC360303E00600C21803182,I07FC367F98664187F0186D86FF0D8FE030031819B31067F8C36030FE01C00C7FC01986,I0C0C16401866418C30183D868005986030030810B3106400C360318603800C7FC81186,I0C0C1C6198I618830183D86C307106030030C30E3186618C361B10607I0C018C3186,I08061C719866738C70181DCEE30718E030030E70E31CE718C373318E07F80C018E70CC,0018060C1F18663F87D0180CFE3E030FA0300307E0630FE1F0C33E30FA07F80C0187E078,,::::::::I01F8V06K01FER0C,I070CV06K0187R0C,I0606V06K01818Q0C,I0C020700E30010E0F0406001C018187806380E078DC0E03C,I0C001F87FFCC37F1FC606007E01810FE3FFC3F0FCFE3F07F,I0C0030C618CC361B0C00600C301FF186318661986C3618C3,I0C00304618CC36180C00600C101FF006318661980C361803,I0C00606618CC36187C0060181818183E31867FD80C37FC1F,I0C02606618CC3619FC006018181818FE31867F980C37F87F,I0C06204618CC361B0C00600810181986318640180C3400C3,I060630C618CC361A0C00600C30181906318661986C361883,I071C39C618CE761B1C407F8E701FF98E3186719IC3718C7,I01F81F8618C7F619F4607FC7E01FF0FA31861F0F8C31F07D,,::::::::I0FFC6037FF003E03E00F81F01800300607800FE,I0C0E60303I07306301CC3303800700E0CC00FE,I0C0660303I0618C301866187800F01E186008,I0C0660303040618C00186618D801B016186008,I0C066030306060I801826181800303618601B8,I0FDC60303I061CBE01873F01800306618201FC,I0FF860303I061CE301873F0180030C61820186,I0C3060303I03E8C300FA618180030861827806,I0C1860303J0C8C18032608180031FF186FC03,I0C0C60303J018C1I06608180031FF1860102,I0C0E30603I0618C30186618180030061860186,I0C0638E0304063067118C738182030060CC01CE,I0C031FC030603E03E18F83F01830300607800FC,,:::::::J02P08,I01FC3M03FM060018K01FFI0601980062J03,I03863M0618L060018K0183800601980066J03,I0603N0C0CV01818006018J06,I0C030030E080C040E034001E00380E0180C016E18078070F0180381C,I0C0031F3F0C0E003F1F41E3F18FC3F81808C37F198FC6F9FCFB0FC7F,I0C00318618007C061986166199862181818C361I98I630CC318643,I0C1F318608001F861986366019823001FF0C361I9806600CC31826,I0C1F318C0CI01C7FD8226601B033C01FE0C360D99806607CC330378,I0C03318C0CJ0C7F983I601B030F81800C360D9980661FCC33031F,I0E0331840800C0440181I6019020181800C360I9806630CC310203,I060331861800C0C61981C661998620C1800C361I98I620CC3186418,I038F3187388071C71981C67319CE3181800E773I9CC6731CC31CE63,I01FC3183F0C03F81F180C63E18FC1F018007F7F198F8639F4C30FC3E,,:::::::::::::::kFC,,:::::::::::::::::I07C00FFC7FF00C0400800FFC003C07FE1FC0400F00E0301C001FFC3F8006040101E03FI0700FE03FF87FE,I07FC0FFEIF80E0E01C00FFE00FF07FF1FF8E00F07F830FF803FFE3FF007060187F83FF03FE0FFC7FFC7FF,I07FE0FFC7FF01E0E01C00FFC01C387FE181C601B0E1C31E3C01FFC30380F07018E1C3FF878F0C0E3FF87FE,I06030CI07001E0E01C00CI01818600180E601B1C0E3380E001C0301C0F07818C0C3018E038C0703806,I06038CI0700330E01C00CI0380C6001806301B180633006001C0300C1987819C063018C018C0303806,I06018CI0700330E01C00CI01800600180630I380037006001C0300C1986C18C003019C018C0303806,I06018CI0700338E01C00CI01E00600180E30I3I036007001C0301C19C6E18F003019801CC0703806,I06018FFC0700618E01C00FFC00FE07FE1FFC18I3I036003001C03FF830C66187F03039800CFFE03807FE,I06018FFC0700618E01C00FFC003F87FE1FF818633I036003001C03FF030C63181FC3FF1800CFFC03807FE,I06018CI0700E1CE01C00CK03C60018700C633I036003001C030E070E639801E3FC1800CC3803806,I06018CI0700FFCE01C00CL0C60018300CC33I036007001C030607FE61980063001801CC1803806,I06018CI0700C0EE01C00CI0300C60018180CC3380737006001C0303060760D98063001C018C0C03806,I06038CI0701806E01C00CI0300C600181C06C318063300E001C03038C0360F98063I0C038C0E03806,I06070CI0701806E01C00CI0181C600180E07831C0E3180C001C0301CC03E078C0E3I06030C0703806,I07FE0FFE0701803FFDFF8FFE01FF87FF180607830FFC31FF8001C0300CC01E038FFC3I07FE0C0303807FF,I07F80FFE0703003FFDFF8FFE007F07FF1807030303F8307FI01C0300F801E0383F83I01FC0C0383807FF,,::::::::T07FF07E01FC78383F87C3EE1F807F,001FFD8M07FF0FF83FE78387FC7C3EE3FE0FF8,J0C18M07FE1E7878F7C38F1E7C3EE79E1E3C,J0CO07001C1CF07FC39E0F7E3EE7073C1E,J0C0038070407003800E03FE39C077E7IE00380E,J0C19FC1F8607FE3800E03FF39C07767IE00380E,J0C198630C007FE3800E03F739C07766IE00380E,J0C1986304007FE3800E03F3B9C0I76IE00380E,J0C1983606007003800E03F3B9C0I7JE00380E,J0C1983606007003818E03F1F9C0773JE06380E,J0C1982204007003C1CF07F1F9E0F73CEEF073C1E,J0C198630C007001E3878F70F8F1E73CEE78E1E3C,J0C19CE39C407FF0FF83FE70787FC73CEE3FE0FF8,J0C19FC1F8607FF07F01FC70783F871CEE1FC07F,L018,:::,:::::::::::::::::::::::::::hV01L08,I0FFCJ018L03J07FEI04CL03S0F806010C0FC09F83C0301F,I0CL018L03J0607I0CCL03R01CC0E031C1CE1B9C66070318,I0CL018L03J0603I0CM03R01861E023C186130CC30F0618,I0C001C0F1B81E003B07006030E0E00C38203J0870381CI0636026C106120CC31B06,I0C007E1F9FC3F807F1F806033F1FC7CFC3030061BF8FC7FI0406060C006300CC303044,I0FF0C330D866180C330C07EE618CC61860030061B0D8643003C06040C006200CC10305F,I0FF8C3301860180C330C07FC618CC61820030061B0D866I03C06040C00C2018C1030718,I0C00FFB01860F80833FE06187FIC63030030061B0DFF78I0606040C0182030C1030618,I0C00FF301863F80833FC060C7F8CC63030030061B0DFE1FI06060C0C07060E0C303060C,I0C0080301866180832I0606400CC61020030061B0DI03010206080C0E041C0C3030608,I0C00C330D864180C330C0607618CC61860030061B0D8641818606080C1C04380C3030618,I0C00E3399866380E738C0603718EC61CE203FC73B0DC66301CE06180C1FEC3FC66030338,I0C003E1F1863E807F0F806019F07C60FC303FE3FB0C7C3E00FC06180C1FEC3FC3C0301F,,::::::::I0C06N0FFCI08CM018J0181E007C0FM0C07C03E03C,I0C06N0C0E0018CM018J0383300E6198K01C0C6073066,I0C06N0C060018N018J0786180C330CK03C1860618C3,I0C060E031E00C060E1C01870401D81C00D861880330C01E006C1802018C3,I0C063F1F3F80C063F3ECF9F8603F87E0018618C0230C03F800C1103010C3,I0FFE61986180FDC6198CC30C00618C3001860801E304061800C17C00F0C1,I0FFE60980180FF86198CC30400618C3001860801E304001800C1C600F0C1,I0C06C0D80F80C307FD8CC60600418FF801860800330400F800C1860018C1,I0C06C0D83F80C187F98CC60600418FF001861800330C03F800C1830018C3,I0C0640986180C0C4018CC204004188I01861808130C061800C1820408C3,I0C0661984180C0E6198CC30C00618C300186180C330C041800C1860618C3,I0C0673986380C06719IC39C40738E300183308E7198063800C0CE273866,I0C063F183E80C031F0ECC1F8603F83E00181E0C7E0F003E800C07C33F03C,,:::::::i02K01,I0FFCJ018L03J07FEI08Q06R01F00C02181F817E0780607C,I0CL018L03J06J018Q06R03981C063839C3E70CC0E0C6,I0CL018L03J06J018Q06R030C3C047830C2C31861E186,I0C001C0F1B81E003B07006I0E1C30E0720F0406I020E07038I0C6C04D820C2831863618,I0C007E1F9FC3F807F1F806007F3FF3F0FE1FC60601867F1F8FEI080C0C1800C6031860611,I0FF0C330D866180C330C07FC619986198630C006018661B0C8600780C081800C4031820617C,I0FF8C3301860180C330C07FE619986198600C006018661B0CCI0780C0818018406182061C6,I0C00FFB01860F80833FE0600619987FF0607C006018661BFEFJ0C0C081803040C18206186,I0C00FF301863F80833FC0600619987FB061FC006018661BFC3EI0C0C18180E0C3818606183,I0C0080301866180832I0600619984010630C006018661AI0602040C10181C087018606182,I0C00C330D864180C330C0600619986198620C006018661B0C83030C0C10183808E018606186,I0C00E3399866380E738C07FE619D8718CE31C407F9CE61B8CC6039C0C30183FD8FF0CC060CE,I0C003E1F1863E807F0F807FE618F81F07E1F4607FCFE618F87C01F80C30183FD8FF0780607C,gU06,gS0186,gS01FC,gT0F8,,::::I0C06N0FFC001S03K0303C00F81EL0181F007C078,I0C06N0CJ03S03K0706601CC33L0383180E60CC,I0C06N0CJ03S03K0F0C30186618K0786180C3186,I0C060E031E00CI0E3831C0721E0803B03801B0C3100661803C00D8600403186,I0C063F1F3F80C007F7DF7E0FE3F8C07F0FC0030C3180461807F0018440602186,I0FFE61986180FF861B18C318661800C31860030C1003C6080C300185F001E182,I0FFE60980180FFC61B18C318601800C31860030C1003C608003001871801E182,I0C06C0D80F80C0061B18FFB060F800831FF0030C1I0660801F0018618003182,I0C06C0D83F80C0061B18FF3063F800831FE0030C3I0661807F001860C003186,I0C0640986180C0061B188010661800831J030C301026180C30018608081186,I0C0661984180C0061B18C318641800C31860030C3018661808300186180C3186,I0C0673986380FFC61B98E30CE63880E71C600306611CE3300C700183384E70CC,I0C063F183E80FFC619D83E07E3E8C07F07C00303C18FC1E007D00181F067E078,gL06,gJ0186,gJ01FC,gK0F8,,:::::::::::::::::::::::::gO04,001FFCN06M03K01F83,J0CO06M03K030C3,J0CO06M03K0606,J0C031E038386E01C063B07040602,J0C1F3F9FCFE7F07E3E7F1F8607003,J0C186198686618C330C330C003E03,J0C1801986C0618C130C3304I0FC3,J0C180F986F060D81B083606J0E3,J0C183F9863E60D81B083606J063,J0C186198606608813083204006023,J0C184198683618C330C330C006063,J0C1863986C6738E730E739C4038E3,J0C183E9867C7F07E307F1F8601FC3,,::::::::I0C06M03N0C,::I0C06008701E3700218F0DC078,I0C06619F83F3F986F9FCFE0FE,I0FFE61B0C61B0D86C30CC3186,I0FFE61B0C6030D86C00CC3006,I0C0661BFE6030D86C07CC183E,I0C0661BFC6030D86C1FCC18FE,I0C0661A006030D86C30CC1186,I0C0661B0C61B0D86C20CC3106,I0C0673B8C7330DCEC31CE718E,I0C063F8F83E30CFEC1F4FE0FA,,:::::::J08,I03FL026P0FCL08,I0618K066O0386K018,I0C0CK06P0303K018,I0C041E038700F03907006010380E1C30E,I0E003F9FCFE1FC7F1F806I0FC7F3FF3F,I07C06198I630CC330C060018661998618,I01F80198I600CC3304060018661998608,J01C0F98I607D8360606001FF61998C0C,K0C3F98I61FD8360606011FE61998C0C,I0C046198I630C83204060310061998408,I0C0C4198I620CC330C030318661998618,I071C639867631C6739C038E1C6619D8738,I03F83E9863E1F43F1F800FC07C618F83F,W03,V0C3,V0FE,V07C,,:::::::::::::::::::::::::::I0E06I08,I0E060018,I0F060018,I0D860E1C3C0E04,I0D863F3E7F3F86,I0CC66198C3218,I0CI6098033,I0C66C0D81F3C,I0C36C0D87F0F8,I0C1E4098C3018,I0C1E61988320C,I0C0E739CC73184,I0C063F0E7D1F06,,::::::::I0CS06T0C003M0184P02W04I08,I0CS06T0C003M018CP06W0C0018,I0CgN0C003O0CP06W0C0018,I0C00380C380E3J0E03800871800EC1C3070180E00E01E01C60387I0781C070701C078E0E1C010C,I0C00FC7CFC7FFC067F0FE61BFFE01FC7E31F8F83F99F03F8IF8FCF800FC7E3F9FC7E0FDF3F3EC37C,I0C01866186618C066188661B0C6030CCI30CC02198C0618C31986600186C330D0CC3186C6198C36,I0C01826186618C06618C061B0C6030CC13304C03018C0018C31986600180C130D80C3180C6198C36,I0C030361FF618C0660CF061B0C6020D81B606C03C18C00F8C319FF60018181B0DE0FF980C7FD8C36,I0C030361FE618C0660C3E61B0C6020D81B606C00F98C03F8C319FE60018181B0C7CFF180C7F98C36,I0C01026100618C066080661B0C6020C813204C00198C0618C319006001808130C0C80180C4018C36,I0C01866186618C066188361B0C6030CCI30CC020D8C0418C31986600186C330D06C3186C6198C36,I0FF1CE61C6618C06738C673B0C6039CE7339CC03198E0638C319C67201CCE730D8CE31CCE719CE76,I0FF8FC607C618C067F07C3FB0C601FC7E31F8C01F18703E8C3187C3B00F87E30CF83E0F871F0E7F6,X06gX02,:X06,:,:::M066I0CJ018N0361001806CT06K04V078R08,M066I0CJ018N0363I0C06CT06K0CV06R018,M06Y0303I0C0CU06K0CV0CR018,I03C076007001C0F001C1C801C303800C0C0401E038C00438060E078E008E001C061C0E00F0E030E301C071C010E3,I07F0FE63F8C7F1F98FE3F807E367C00608C41BF9IF30CFE063F0FDF61BF807E3E7E3F81F3F1F7FFC7E3FBEC37FFC,I0C3186630CC4330D8C36180C3363I0618C6161986330C860661986C61A180C330C32180C6198618CC330D8C3618C,J03186630CC603018C36180C3363I0218C6301986330CC00661980C61BI0C330C13I0C6198618CC330D8C3618C,I01F1066306C783018C3C180FFB63I0330C220F986330CF0067FD80C61BC00FFB181BC00C7FD8618CFFB0D8C3618C,I07F1066306C1F3018C3C180FF363I0330C363F986330C3E067F980C618F80FF31818F80C7F98618CFF30D8C3618C,I0C31066304C033018C3418080363I0120C1661986330C060640180C6181808030810180C4018618C8030D8C3618C,I083186630CC41B0D8C36180C3363I01E0C1C41986330C830661986C61A0C0C330C320C0C6198618CC330D8C3618C,I0C71CE639CC633998CI380E33638800E0C1C63986339CC606719CCE73B180E330E73180C7198618CE330DCE7618C,I07D0FE63F8C3E1F18C31F803E361CC00C0C0C3E98631FC7C061F0F873F9F003E307E1F00C1F18618C3E30CE7F618C,O03R018,O03Q0618,O03Q07F,O03Q03E,,::::hJ03I0CK0118W01C0C,hJ03I0CK0318W01C0C,hJ03I0CK03Y01E0C,I03C0072004780E3I0E0701CI0781C0707200438030E0DC0701B807I0E070390021C001B0C010E0F003C078,I07F00FE30CFE7FFC07F1F8FEI0FC7E3F8FE30CFC033F0FE1F8FFD9FC07F1F87F1867E001B0CC37F1F807F0FC,I0C3018630D86618C061B0CC300186C330D8630D8603618C330CC3190C061B0CC3186C300198CC361B0C0C3186,J03018630C06618C061B04C300180C130D8630D8603608C3304C31980061B0CC3186C30018IC361BJ0318,I01F010630C3E618C061E06C30018181B0F0630DFF03C0CC1E06C319E0061BFE83186FF8018IC361BI01F18,I07F010630CFE618C061E06C30018181B0F0630DFE03C0CC1E06C3187C061BFC83186FF00186CC361BI07F18,I0C3010630D86618C061A04C3001808130D0630DI03408C1204C3180C061A00831868I0183CC361BI0C318,I083018630D06618C061B0CC300186C330D8630D8603618C330CC31906061B0CC3186C300183CC361B0C083186,I0C700CE39D8E618C061B9CC3201CCE730CCE39DC603738E739CC3998C061B8C671CEE310181CE761B980C71CC,I07D007E1FCFA618C0619F8C3300F87E30C7E1FC7C033F0FE1F8C1D8F80618F83F0FE3E18180C7F619F007D0F8,N06W02P06gN03,N06W02N0186gN03,N06gL01FCgN03,N06gM0F8gN03,,::::N0CO0300CJ018P03P0CU018Q031806,:X03M018hQ01806,I01C03800E300801C37003C0098FI0200F0180047I0E3I01E03C00E303C104038C0047I0E01B86E,I07E1FCC7FFC0837E3F8C7E6199FC0020DFCFB30DFC07FFCC03F87E07FFC7F18D9IF30DFC07F31FC7F,I0C3186C618C0C2C330IC3619B0C0030B0CC330D0C0618CC0618C30618CC30D9986330D0C061B186618,I0C3186C618C0C6C330IC061980C003180CC330D800618CC0018C00618C03079986330D80061B186618,I0FF986C618C044FFB0IC061987C001107CC330DE00618CC00F8C00618C1F071986330DE0061B183618,I0FF186C618C06CFF30IC06199FC001B1FCC330C7C0618CC03F8C00618C7F071986330C7C061B183618,I080186C618C02C8030IC0619B0CI0B30CC330C0C0618CC0618C00618CC3079986330C0C061B182618,I0C3186C618C038C330IC3619A0CI0E20CC330D060618CC0418C30618C830D9986330D06061B186618,I0E3186C618C038E330CCE6739B1C400E31CC339D8C0618CC0638E60618CC718D986339D8C061B1CE619,I03E186C618C0183E30CC7C3F99F460061F4C31FCF80618CC03E87C0618C7D30798631FCF8061B1FC6198,gP04,:,:::::::::::::kFC,,::::::::::::::::::::gK03,gK06,gK04,I07C00C7F00FFC01C00380C0700802007C00FFC01FC03FF1FFC33F80038,I07FC0C7FE0FFE0FF01FE0C3FE0C03007FC0FFE01FF83FFBFFE33FF01FF,I07FE0C6070FFC1C383870C78F0E03007FE0FFC0181C3FF1FFC330383C78,I06030C6038C00381C7038CE038F03006030CI0180E3I01C03301C701C,I06038C6018C00300C6018CC018F03006038CI018063I01C03300C600C,I06018C6018C007I0EI0DC018D83006018CI018063I01C03300CE00C,I06018C6038C006I0CI0D801CDC3006018CI0180E3I01C03301CC00E,I06018C7FF0FFC6I0CI0D800IC3006018FFC01FFC3FF01C033FF8C006,I06018C7FE0FFC6I0CI0D800CC63006018FFC01FF83FF01C033FF0C006,I06018C61C0C006I0CI0D800CC73006018CI018703I01C0330E0C006,I06018C60C0C006I0CI0D801CC33006018CI018303I01C033060C00E,I06018C6060C00700EE01CDC018C1B006018CI018183I01C033030E00C,I06038C6070C00300C6018CC038C1F006038CI0181C3I01C033038601C,I06070C6038C00381C7038C6030C0F006070CI0180E3I01C03301C3018,I07FE0C6018FFE1FF83FF0C7FE0C07007FE0FFE018063FF81C03300C3FF,I07F80C601CFFE07F00FE0C1FC0C07007F80FFE018073FF81C03300E0FE,,:::::::::::::::::::::::::::::::::::::::::I01F80200198M03E03E1F87C07C3F1FF1FC,I070C0600198M07306639CE60C6739FE1FC,I0606J018N0618C330CC3186618041,I0C020701D803907040618C320C031804180C1,I0C001F83F987F1F860608C300C021100181837,I0C0030C6198C330C0061C7E00C1E17C018183F8,I0C003046198C33040061C7E0181E1C60303030C,I0C00606419983606003E8C3030031860603I0C,I0C02606419983606I0C8C10E0031831C02I06,I0C06204419883204I018C11C08118238060204,I060630C6198C330C00618C3380C31867006030C,I071C39C73986739C40630E73FCE70CE7F86039C,I01F81F83F983F1F8603E07E3FC7E07C7F8601F8,T03,S0C3,S0FE,S07C,,::::I0E06L03O07EO0380EM03O01,I0E06L03N01C3O03C0EM06O03,I0F06L03N01818N03C0EW03,I0D860E038C3700C702030083C0E0780341E1E038C0F001E0700E3831C,I0D863F1IF3F87DF8303I07F3F8FE036163F9IF1FC03F1F87F7DF7E,I0CC661986330C630C003I0C3219860361661986330C061B0C61B18C3,I0CI60986330C630C003J033I060323601986300C06030C61B18C1,I0C66C0D86330663FE003I01F3C03E033260F986307C0603FE61B19818,I0C36C0D86330663FC0030087F0F8FE033263F98631FC0603FC61B19818,I0C1E40986330462J03018C301986031I61986330C06020061B1881,I0C1E61986330C630C0018188320D06031C641986320C061B0C61B18C3,I0C0E73986339C638C201C70C73198E031C663986331C07338C61B98E7,I0C063F18633F860F83007E07D1F0FA030C63E98631F403E0F8619D87E,,::::::::I01F8I06CJ018M06,I070CI06CJ018M06,I0606I06CJ018M06,I0C020F06C38101800E03806001C0701C07038,I0C001FC6CFC181803F0FE06007E1F8FE1F8FE,I0C0030C6D8600180618860600C330CC330C86,I0CJ0C6D8600180608C00600C3304C330CC,I0CI07C6DFF00180C0CF00600FFE06C33FEF,I0C021FC6DFE00180C0C3E0600FF606C33FC3E,I0C0630C6DJ018040806060080204C32I06,I060620C6D8600180618830600C330CC330C83,I071C31C6DC6101FE738C607F8E339CC338CC6,I01F81F46C7C181FF3F07C07FC3E1F8C30F87C,,::::::::I0E06U03F0181F0FF9F,I0E06U073838318FF398,I0F06U0618786180230C,I0D860087180E018E040418D86I0600C,I0D8661BFFE3F0FBF060018184400C008,I0CC661B0C6618C618I018185F00C078,I0CI61B0C6618C608I0301871818078,I0CI61B0C67FIC0CI060186181800C,I0C3661B0C67F8CC0C001C01860C1I0C,I0C1E61B0C6400C408003801860830204,I0C1E61B0C6618C61800700186183030C,I0C0E73B0C6718C738407F8183383039C,I0C063FB0C61F0C3F0607F8181F0301F8,,::::::::I01F8V06K01FER0C,I070CV06K0187R0C,I0606V06K01818Q0C,I0C020700E30010E0F0406001C018187806380E078DC0E03C,I0C001F87FFCC37F1FC606007E01810FE3FFC3F0FCFE3F07F,I0C0030C618CC361B0C00600C301FF186318661986C3618C3,I0C00304618CC36180C00600C101FF006318661980C361803,I0C00606618CC36187C0060181818183E31867FD80C37FC1F,I0C02606618CC3619FC006018181818FE31867F980C37F87F,I0C06204618CC361B0C00600810181986318640180C3400C3,I060630C618CC361A0C00600C30181906318661986C361883,I071C39C618CE761B1C407F8E701FF98E3186719IC3718C7,I01F81F8618C7F619F4607FC7E01FF0FA31861F0F8C31F07D,,:::::::S0102,I0FF8I02I011FC1EI0FF8787FC,I0C3CI06I0330E18I0FF0CC7F8,I0C0EI06I026073K0218601,I0C0607070E02C033C0800618603,I0C063F8FBF06C037C0C00C18606,I0C0630C66184C01BK0C18206,I0C0630C66084C01BJ0181820C,I0C063066C0C4C01BJ0181820C,I0C063066C0IC033J01018608,I0C0630464088C033J03018618,I0C0C30C661886063J03018618,I0FFC39C7739838E31080300CC18,I0FF03F83BF181F8318C03007818,L03,:::,::::::::::::::::::::::::::I0CJ02J03E01800307E0F8030FE0F8FF8,I0CJ06J0730380070E71CC070FE18CFF,I0CJ06J06187800F0C31860F08030C02,I0C007871J018D801B0830060B0803I06,I0C00FEF98I010180030030041B1B82200C,I0C01866K0F01800300303C331FC2F80C,I0CI066K0F01800300603C6318638C18,I0C003E6001E0181800300C0064300630C18,I0C00FE6003F01818003038006FF8033061,I0C01866J040818003070102FF9023043,I0C01066J0618180030E01860318630C3,I0FF18E71I0738182030FF1CE031CE19C3,I0FF8FA398003F0183030FF0FC030FC0F83,,::::::::I0CP07FC0C00183F0F80307F0F8FF8,I0CP07F81C0038739CC0707F18CFF,I0CQ0103C0078619860F04030C02,I0C00380E1J0306C00D8418060B0403I06,I0C00FC7F18I0600C0018018041B0DC2200C,I0C0186618J0600C00180183C330FE2F80C,I0C0182618J0C00C00180303C630C338C18,I0C030361800F0C00C0018060064300330C18,I0C030361801F8800C00181C006FF801B061,I0C0102618I01800C001838102FF8813043,I0C0186618I01800C001870186030C330C3,I0FF1CE619I01800C10187F9CE030E719C3,I0FF8FC6198001800C18187F8FC0307E0F83,,:::::::::::::::kFC,kF8,,::::::::::::::::::::gK03,gK06,gK04,I07C00C7F00FFC01C00380C0700802007C00FFC01FF84011FFC3F807FE01E0018,I07FC0C7FE0FFE0FF01FE0C3FE0C03007FC0FFE01FFC601BFFE3FF07FF0FF801C,I07FE0C6070FFC1C383870C78F0E03007FE0FFC01FF87019FFC30387FE1E1C03C,I06030C6038C00381C7038CE038F03006030CI0180078181C0301C600380E03C,I06038C6018C00300C6018CC018F03006038CI0180078181C0300C6003006066,I06018C6018C007I0EI0DC018D83006018CI018006C181C0300C6003J066,I06018C6038C006I0CI0D801CDC3006018CI018006E181C0301C6006J067,I06018C7FF0FFC6I0CI0D800IC3006018FFC01FF866181C03FF87FE6J0C3,I06018C7FE0FFC6I0CI0D800CC63006018FFC01FF863181C03FF07FE607F0C3,I06018C61C0C006I0CI0D800CC73006018CI0180063981C030E0600607F1C38,I06018C60C0C006I0CI0D801CC33006018CI0180061981C0306060070071FF8,I06018C6060C00700EE01CDC018C1B006018CI0180060D81C030306003007181C,I06038C6070C00300C6018CC038C1F006038CI0180060F81C030386003007300C,I06070C6038C00381C7038C6030C0F006070CI0180060781C0301C6001C0F300C,I07FE0C6018FFE1FF83FF0C7FE0C07007FE0FFE01FFC60381C0300C7FF1FFE3006,I07F80C601CFFE07F00FE0C1FC0C07007F80FFE01FFC60381C0300E7FF07F86006,,:::::::::::::::::::::::::::::::::::::::::I01F80200198M03E03E1F87C07C3F1FF1FC,I070C0600198M07306639CE60C6739FE1FC,I0606J018N0618C330CC3186618041,I0C020701D803907040618C320C031804180C1,I0C001F83F987F1F860608C300C021100181837,I0C0030C6198C330C0061C7E00C1E17C018183F8,I0C003046198C33040061C7E0181E1C60303030C,I0C00606419983606003E8C3030031860603I0C,I0C02606419983606I0C8C10E0031831C02I06,I0C06204419883204I018C11C08118238060204,I060630C6198C330C00618C3380C31867006030C,I071C39C73986739C40630E73FCE70CE7F86039C,I01F81F83F983F1F8603E07E3FC7E07C7F8601F8,T03,S0C3,S0FE,S07C,,:::I0E06L03O07EO0380EM03O01,I0E06L03N01C3O03C0EM06O03,I0F06L03N01818N03C0EW03,I0D860E038C3700C702030083C0E0780341E1E038C0F001E0700E3831C,I0D863F1IF3F87DF8303I07F3F8FE036163F9IF1FC03F1F87F7DF7E,I0CC661986330C630C003I0C3219860361661986330C061B0C61B18C3,I0CI60986330C630C003J033I060323601986300C06030C61B18C1,I0C66C0D86330663FE003I01F3C03E033260F986307C0603FE61B19818,I0C36C0D86330663FC0030087F0F8FE033263F98631FC0603FC61B19818,I0C1E40986330462J03018C301986031I61986330C06020061B1881,I0C1E61986330C630C0018188320D06031C641986320C061B0C61B18C3,I0C0E73986339C638C201C70C73198E031C663986331C07338C61B98E7,I0C063F18633F860F83007E07D1F0FA030C63E98631F403E0F8619D87E,,::::::::I01F8I06CJ018M06,I070CI06CJ018M06,I0606I06CJ018M06,I0C020F06C38101800E03806001C0701C07038,I0C001FC6CFC181803F0FE06007E1F8FE1F8FE,I0C0030C6D8600180618860600C330CC330C86,I0CJ0C6D8600180608C00600C3304C330CC,I0CI07C6DFF00180C0CF00600FFE06C33FEF,I0C021FC6DFE00180C0C3E0600FF606C33FC3E,I0C0630C6DJ018040806060080204C32I06,I060620C6D8600180618830600C330CC330C83,I071C31C6DC6101FE738C607F8E339CC338CC6,I01F81F46C7C181FF3F07C07FC3E1F8C30F87C,,::::::::I0E06U03F0181F0FF9F,I0E06U073838318FF398,I0F06U0618786180230C,I0D860087180E018E040418D86I0600C,I0D8661BFFE3F0FBF060018184400C008,I0CC661B0C6618C618I018185F00C078,I0CI61B0C6618C608I0301871818078,I0CI61B0C67FIC0CI060186181800C,I0C3661B0C67F8CC0C001C01860C1I0C,I0C1E61B0C6400C408003801860830204,I0C1E61B0C6618C61800700186183030C,I0C0E73B0C6718C738407F8183383039C,I0C063FB0C61F0C3F0607F8181F0301F8,,::::::::I01F8V06K01FER0C,I070CV06K0187R0C,I0606V06K01818Q0C,I0C020700E30010E0F0406001C018187806380E078DC0E03C,I0C001F87FFCC37F1FC606007E01810FE3FFC3F0FCFE3F07F,I0C0030C618CC361B0C00600C301FF186318661986C3618C3,I0C00304618CC36180C00600C101FF006318661980C361803,I0C00606618CC36187C0060181818183E31867FD80C37FC1F,I0C02606618CC3619FC006018181818FE31867F980C37F87F,I0C06204618CC361B0C00600810181986318640180C3400C3,I060630C618CC361A0C00600C30181906318661986C361883,I071C39C618CE761B1C407F8E701FF98E3186719IC3718C7,I01F81F8618C7F619F4607FC7E01FF0FA31861F0F8C31F07D,,:::::::S0102,I0FF8I02I011FC1EI0FF8787FC,I0C3CI06I0330E18I0FF0CC7F8,I0C0EI06I026073K0218601,I0C0607070E02C033C0800618603,I0C063F8FBF06C037C0C00C18606,I0C0630C66184C01BK0C18206,I0C0630C66084C01BJ0181820C,I0C063066C0C4C01BJ0181820C,I0C063066C0IC033J01018608,I0C0630464088C033J03018618,I0C0C30C661886063J03018618,I0FFC39C7739838E31080300CC18,I0FF03F83BF181F8318C03007818,L03,:::,::::::::::::::::::::::::::I0CJ02J03E01800307E0F8030FE0F8FF8,I0CJ06J0730380070E71CC070FE18CFF,I0CJ06J06187800F0C31860F08030C02,I0C007871J018D801B0830060B0803I06,I0C00FEF98I010180030030041B1B82200C,I0C01866K0F01800300303C331FC2F80C,I0CI066K0F01800300603C6318638C18,I0C003E6001E0181800300C0064300630C18,I0C00FE6003F01818003038006FF8033061,I0C01866J040818003070102FF9023043,I0C01066J0618180030E01860318630C3,I0FF18E71I0738182030FF1CE031CE19C3,I0FF8FA398003F0183030FF0FC030FC0F83,,::::::::I0CP07FC0C00183F0F80307F0F8FF8,I0CP07F81C0038739CC0707F18CFF,I0CQ0103C0078619860F04030C02,I0C00380E1J0306C00D8418060B0403I06,I0C00FC7F18I0600C0018018041B0DC2200C,I0C0186618J0600C00180183C330FE2F80C,I0C0182618J0C00C00180303C630C338C18,I0C030361800F0C00C0018060064300330C18,I0C030361801F8800C00181C006FF801B061,I0C0102618I01800C001838102FF8813043,I0C0186618I01800C001870186030C330C3,I0FF1CE619I01800C10187F9CE030E719C3,I0FF8FC6198001800C18187F8FC0307E0F83,,:::::::::::::::kFC,kF8,,:::::::::::::::::::::::I06006018100431FF9FF80F03FF8038001F003FFI03800C07FI07800C,I0F00E01C180631FF9FFC3FC7FFC1FF001FF03FF801FE00E07FE03FE00E,I0F00E03C1C0631FF9FF870E3FF83C7801FF83FF0038701E0607078701E,I0F80E03C1E06318018006060380701C0180C3J070381E06038E0381E,I0F81E0661E0631801800E030380600C0180E3J060183306018C01833,I0F81E0661B06318018006I0380E00C018063J0EI03306018CI033,I0EC160671B86318018007800380C00E018063J0CI033860398I0338,I0EC360C3198631FF1FF83F80380C006018063FF00CI06187FF18I0618,I0EC260C318C631FF1FF80FE0380C006018063FF00CI06187FE181FC618,I0E6261C398E6318018J0F0380C006018063J0CI0E1C61C181FCE1C,I0EI61FF9866318018J030380C00E018063J0CI0FFC60C1C01CFFC,I0E646181D83631801800C030380E00C018063J0E01CC0E6060C01CC0E,I0E3C6300D83E31801800C030380601C0180E3J060198066070C01D806,I0E3C6300F81E31801800607038030180181C3J070398066038703D806,I0E186300780E31801FFC7FE03803FF001FF83FF803FF180360187FF9803,I0E186600780E31801FFC1FC03800FE001FE03FF800FE3003601C1FE3003,,:::::::::::::::::::::::::::::::::::::::::I0FFI031N0F8,I0C380033M01CC,I0C0C0033M0186,I0C0C00B38701C10186,I0C0861B7DF87F18182,I0FF861B330C4300187,I0FF861B33046I0187,I0C0C61B360678I0FA,I0C0C61B36061FI032,I0C0C61B320403J06,I0C0C61B330C4180186,I0FFC73B3B9C631018C,I0FF83FB1DF83E180F8,,:::::::gK01,I0FF8P0FF9FC6060FE,I0C1CP0FF1FC60C1C3,I0C0CQ021006183018,I0C060E0700E080061006306018,I0C043F1FC3F0C00C3706606,I0C0C6190C618I0C3F86E06,I0FF861980608001830C7F060F8,I0FF07FDE0C0C001800C73060F8,I0C007F87CC0C001I066186018,I0C004I0C408003020461C7018,I0C0061906618003030C60C3018,I0C007198C738803039C6061C788,I0C001F0F83F0C0301F86030FE0C,,:::::::I0E0388K0303F,I0F0398K070738,I0F0398K0F0618,I0D079C38201B0418,I0D85BEFE30030018,I0D859886I030018,I0C8D98CJ03003,I0CC998FJ03006,I0CC9983EI0301C,I0C599806I03038,I0C719883I0307,I0C719CC6200307F8,I0C318E7C300307F8,,:::::::::::::::::::I0FF8M077L0E,I0FFCI03I077L0E,I0FFEI07I077L0E,I0E0FI07I077L0E,I0E070F8FDFC770F801EE3E007E3F8FE7B9FC,I0E071FCIFC771FC03FE7F00FF7F8FCFFBFC,I0E0738C738E7738C071EE301C771CF1C7B8E,I0E0738E700E7738E070EE381C001CE1C380E,I0E077FE70FEI7FE070IF81C01FCE1C38FE,I0E073FE73EE773FE070EFF81C07DCE1C3BEE,I0E0F300738E773I070EC001C371CE1C3B8E,I0E1E38E738E7738E071EE381C771CE1E7B8E,I0FFC1FC7FFE771FC03FE7F00FF7FCE0FFBFE,I0FF80F83DEE770F801EE3E007E3DCE07B9EE,gT038,gR01C7,gR01FF,gS07E,,::::::::::::::::J0CI098J03K0FC010018I03E0780F8FF9F83E,I01E00198J03J0386030018I0730CC198FF39C73,I01E0018K03J0303J018I06198630C0230C618,I01300DC03C00B07006010381D80406198630C0620C618,I03307FF87E61B1F806I0FC3F80606098630C0C00C608,I03306198C361B30C0600186618I061D821F80C00C61C,I06186198C061B3040600182618I061D821F81801861C,I07F86198C061B6060600303418I03E98230C180303E8,I07FC6198C061B6060601303418J0C986304100E00C8,I0C0C6198C061B2040603102418J01986304301C0018,I0C0C6198C361B30C0303186618I06198630C30380618,I080661D8E673B39C038E1CE738840630CC39C303FC63,00180660F87C3FB1F800FC0FC3F8C603E0781F8303FC3E,,:::::::J08,I03F063604K018I01F8,I06186360CK018I039C,I0C0C036M018I030C,I0C040360E03801D838020C01E00438063807038,I0E006363F1FC03F8FCI0C03F30CFC3FFC1F8FE,I07C063661986061986I0C061B0D86318630C86,I01F863660986061986001806030D863186304C,J01C636C0D860419FF003006030DFF3183606F,K0C636C0D860419FE00E006030DFE31836063E,I0C04636409860419I01C006030D00318220406,I0C0C636619860619860380061B0D86318630C83,I071C636739860739C603FC07339DC631CE39CC6,I03F86363F18603F87C03FC03E1FC7C31FC1F87C,gS018,:::,::::I0CS03F07CO018K03L01F01FP0C064L0C1FF1F,I0CS0738C6O03CK03L0398318N01E06CK01C1FE33,I0CS061986O03CK03L030C618N01E06CK03C004618,I0C00780C720E040419801E038CI0260383C370382I0C600781C6I01306E0E0806C00C618780E3,I0C00FE7CFE3F060019103F1IFI0661FC7E3F8FC3I08440FCIF8003307F3F0C00C018618FC7FFC,I0C01866186618I0197C619863I066186C330D86I0785F186C318003306C618I0C0183F186618C,I0CI066186608I031C6601863I0C3186C030D82I07871980C318006186C608I0C0303F180618C,I0C003E6306C0CI06186601863I0FF186C030F03J0C61980C318007F86CC0CI0C03061980618C,I0C00FE6306C0C001C183601863I0FF986C030F03J0C60D80C318007FC6CC0CI0C02060980618C,I0C01866106408003818260186300181986C030D020020460980C31800C0C6C408I0C06060980618C,I0C01066186618007018661986300181986C330D860030C61986C31800C0C6C618I0C06061986618C,I0FF18E60CE738407F8CE73186320100D86E630DCE2039C339IC318808066E738800C060739CC618C,I0FF8FA607E3F0607F87C3E186330300D867C30CFC301F81F0F8C318C1806673F0C00C0603F0F8618C,Q06,O0186,O01FC,P0F8,,:::I0E06I08K0FFI062L06P06J03I0CO0CU043,I0E060018K0C380066L06P06J03I0CO0CU0C2,I0F060018K0C0C0066W06J03gO0C,I0D860E1C3C100C0C01670E0038007001C07186E07831E0038020407001C00E43C033C038E23C,I0D863F3E7F180C08C36FBF00FE63F807E3FFE7F0FE33F8CFC020C1FCCFE01FC7F1F7F1FDF37F,I0CC66198C3I0FF8C3I618086630C0C330C6619863618D86030810IC3030CC318C3186C3C3,I0CI609803I0FF8C3I6080C0630C0C330C6618063018D860318180CC3030C031803186C303,I0C66C0D81FI0C0CC366C0C0F0630C0FFB0C660C3E30F8DFF01981E0CC3060C1F181F186C31F,I0C36C0D87FI0C0CC366C0C03E630C0FF30C660CFE33F8DFE019007IC3060C7F187F186C37F,I0C1E4098C3I0C0CC366408006630C08030C6609863618DJ0BI0IC3020CC318C3186C3C3,I0C1E619883I0C0CC3I618083630C0C330C6619063418D8600E0106CC3030C831883186C383,I0C0E739CC7100FFCE7677380C6630C0E330C67398E3638DC600E018IC3019CC718C7186E3C7,I0C063F0E7D180FF87F63BF007C630C03E30C67F0FA33E8C7C00600F8CC300FC7D187D186737D,hN0CJ04P0C,hN0CJ0CN030C,hM01CI038N03F8,hM038I038N01F,,:::::::::::::::::::::::::::J0CI098J03K0FC010018I03E0780F8FF9F83E,I01E00198J03J0386030018I0730CC198FF39C73,I01E0018K03J0303J018I06198630C0230C618,I01300DC03C00B07006010381D80406198630C0620C618,I03307FF87E61B1F806I0FC3F80606098630C0C00C608,I03306198C361B30C0600186618I061D821F80C00C61C,I06186198C061B3040600182618I061D821F81801861C,I07F86198C061B6060600303418I03E98230C180303E8,I07FC6198C061B6060601303418J0C986304100E00C8,I0C0C6198C061B2040603102418J01986304301C0018,I0C0C6198C361B30C0303186618I06198630C30380618,I080661D8E673B39C038E1CE738840630CC39C303FC63,00180660F87C3FB1F800FC0FC3F8C603E0781F8303FC3E,,:::::::J08,I03F063604K018I01F8,I06186360CK018I039C,I0C0C036M018I030C,I0C040360E03801D838020C01E00438063807038,I0E006363F1FC03F8FCI0C03F30CFC3FFC1F8FE,I07C063661986061986I0C061B0D86318630C86,I01F863660986061986001806030D863186304C,J01C636C0D860419FF003006030DFF3183606F,K0C636C0D860419FE00E006030DFE31836063E,I0C04636409860419I01C006030D00318220406,I0C0C636619860619860380061B0D86318630C83,I071C636739860739C603FC07339DC631CE39CC6,I03F86363F18603F87C03FC03E1FC7C31FC1F87C,gS018,:::,::::I0CS03F07CO018K03L01F01FP0C064L0C1FF1F,I0CS0738C6O03CK03L0398318N01E06CK01C1FE33,I0CS061986O03CK03L030C618N01E06CK03C004618,I0C00780C720E040419801E038CI0260383C370382I0C600781C6I01306E0E0806C00C618780E3,I0C00FE7CFE3F060019103F1IFI0661FC7E3F8FC3I08440FCIF8003307F3F0C00C018618FC7FFC,I0C01866186618I0197C619863I066186C330D86I0785F186C318003306C618I0C0183F186618C,I0CI066186608I031C6601863I0C3186C030D82I07871980C318006186C608I0C0303F180618C,I0C003E6306C0CI06186601863I0FF186C030F03J0C61980C318007F86CC0CI0C03061980618C,I0C00FE6306C0C001C183601863I0FF986C030F03J0C60D80C318007FC6CC0CI0C02060980618C,I0C01866106408003818260186300181986C030D020020460980C31800C0C6C408I0C06060980618C,I0C01066186618007018661986300181986C330D860030C61986C31800C0C6C618I0C06061986618C,I0FF18E60CE738407F8CE73186320100D86E630DCE2039C339IC318808066E738800C060739CC618C,I0FF8FA607E3F0607F87C3E186330300D867C30CFC301F81F0F8C318C1806673F0C00C0603F0F8618C,Q06,O0186,O01FC,P0F8,,::::I0E06I08K0FFI062L06P06J03I0CO0CU043,I0E060018K0C380066L06P06J03I0CO0CU0C2,I0F060018K0C0C0066W06J03gO0C,I0D860E1C3C100C0C01670E0038007001C07186E07831E0038020407001C00E43C033C038E23C,I0D863F3E7F180C08C36FBF00FE63F807E3FFE7F0FE33F8CFC020C1FCCFE01FC7F1F7F1FDF37F,I0CC66198C3I0FF8C3I618086630C0C330C6619863618D86030810IC3030CC318C3186C3C3,I0CI609803I0FF8C3I6080C0630C0C330C6618063018D860318180CC3030C031803186C303,I0C66C0D81FI0C0CC366C0C0F0630C0FFB0C660C3E30F8DFF01981E0CC3060C1F181F186C31F,I0C36C0D87FI0C0CC366C0C03E630C0FF30C660CFE33F8DFE019007IC3060C7F187F186C37F,I0C1E4098C3I0C0CC366408006630C08030C6609863618DJ0BI0IC3020CC318C3186C3C3,I0C1E619883I0C0CC3I618083630C0C330C6619063418D8600E0106CC3030C831883186C383,I0C0E739CC7100FFCE7677380C6630C0E330C67398E3638DC600E018IC3019CC718C7186E3C7,I0C063F0E7D180FF87F63BF007C630C03E30C67F0FA33E8C7C00600F8CC300FC7D187D186737D,hN0CJ04P0C,hN0CJ0CN030C,hM01CI038N03F8,hM038I038N01F,,::::::::::::::::::::::::::J0CI098J03K0FC010018I03E0780F8FF9F83E,I01E00198J03J0386030018I0730CC198FF39C73,I01E0018K03J0303J018I06198630C0230C618,I01300DC03C00B07006010381D80406198630C0620C618,I03307FF87E61B1F806I0FC3F80606098630C0C00C608,I03306198C361B30C0600186618I061D821F80C00C61C,I06186198C061B3040600182618I061D821F81801861C,I07F86198C061B6060600303418I03E98230C180303E8,I07FC6198C061B6060601303418J0C986304100E00C8,I0C0C6198C061B2040603102418J01986304301C0018,I0C0C6198C361B30C0303186618I06198630C30380618,I080661D8E673B39C038E1CE738840630CC39C303FC63,00180660F87C3FB1F800FC0FC3F8C603E0781F8303FC3E,,:::::::J08,I03F063604K018I01F8,I06186360CK018I039C,I0C0C036M018I030C,I0C040360E03801D838020C01E00438063807038,I0E006363F1FC03F8FCI0C03F30CFC3FFC1F8FE,I07C063661986061986I0C061B0D86318630C86,I01F863660986061986001806030D863186304C,J01C636C0D860419FF003006030DFF3183606F,K0C636C0D860419FE00E006030DFE31836063E,I0C04636409860419I01C006030D00318220406,I0C0C636619860619860380061B0D86318630C83,I071C636739860739C603FC07339DC631CE39CC6,I03F86363F18603F87C03FC03E1FC7C31FC1F87C,gS018,:::,::::I0CS03F07CO018K03L01F01FP0C064L0C1FF1F,I0CS0738C6O03CK03L0398318N01E06CK01C1FE33,I0CS061986O03CK03L030C618N01E06CK03C004618,I0C00780C720E040419801E038CI0260383C370382I0C600781C6I01306E0E0806C00C618780E3,I0C00FE7CFE3F060019103F1IFI0661FC7E3F8FC3I08440FCIF8003307F3F0C00C018618FC7FFC,I0C01866186618I0197C619863I066186C330D86I0785F186C318003306C618I0C0183F186618C,I0CI066186608I031C6601863I0C3186C030D82I07871980C318006186C608I0C0303F180618C,I0C003E6306C0CI06186601863I0FF186C030F03J0C61980C318007F86CC0CI0C03061980618C,I0C00FE6306C0C001C183601863I0FF986C030F03J0C60D80C318007FC6CC0CI0C02060980618C,I0C01866106408003818260186300181986C030D020020460980C31800C0C6C408I0C06060980618C,I0C01066186618007018661986300181986C330D860030C61986C31800C0C6C618I0C06061986618C,I0FF18E60CE738407F8CE73186320100D86E630DCE2039C339IC318808066E738800C060739CC618C,I0FF8FA607E3F0607F87C3E186330300D867C30CFC301F81F0F8C318C1806673F0C00C0603F0F8618C,Q06,O0186,O01FC,P0F8,,::::I0E06I08K0FFI062L06P06J03I0CO0CU043,I0E060018K0C380066L06P06J03I0CO0CU0C2,I0F060018K0C0C0066W06J03gO0C,I0D860E1C3C100C0C01670E0038007001C07186E07831E0038020407001C00E43C033C038E23C,I0D863F3E7F180C08C36FBF00FE63F807E3FFE7F0FE33F8CFC020C1FCCFE01FC7F1F7F1FDF37F,I0CC66198C3I0FF8C3I618086630C0C330C6619863618D86030810IC3030CC318C3186C3C3,I0CI609803I0FF8C3I6080C0630C0C330C6618063018D860318180CC3030C031803186C303,I0C66C0D81FI0C0CC366C0C0F0630C0FFB0C660C3E30F8DFF01981E0CC3060C1F181F186C31F,I0C36C0D87FI0C0CC366C0C03E630C0FF30C660CFE33F8DFE019007IC3060C7F187F186C37F,I0C1E4098C3I0C0CC366408006630C08030C6609863618DJ0BI0IC3020CC318C3186C3C3,I0C1E619883I0C0CC3I618083630C0C330C6619063418D8600E0106CC3030C831883186C383,I0C0E739CC7100FFCE7677380C6630C0E330C67398E3638DC600E018IC3019CC718C7186E3C7,I0C063F0E7D180FF87F63BF007C630C03E30C67F0FA33E8C7C00600F8CC300FC7D187D186737D,hN0CJ04P0C,hN0CJ0CN030C,hM01CI038N03F8,hM038I038N01F,,:::::::::::::::::::::::::::J0CI098J03K0FC010018I03E0780F8FF9F83E,I01E00198J03J0386030018I0730CC198FF39C73,I01E0018K03J0303J018I06198630C0230C618,I01300DC03C00B07006010381D80406198630C0620C618,I03307FF87E61B1F806I0FC3F80606098630C0C00C608,I03306198C361B30C0600186618I061D821F80C00C61C,I06186198C061B3040600182618I061D821F81801861C,I07F86198C061B6060600303418I03E98230C180303E8,I07FC6198C061B6060601303418J0C986304100E00C8,I0C0C6198C061B2040603102418J01986304301C0018,I0C0C6198C361B30C0303186618I06198630C30380618,I080661D8E673B39C038E1CE738840630CC39C303FC63,00180660F87C3FB1F800FC0FC3F8C603E0781F8303FC3E,,::::::J08,I03F063604K018I01F8,I06186360CK018I039C,I0C0C036M018I030C,I0C040360E03801D838020C01E00438063807038,I0E006363F1FC03F8FCI0C03F30CFC3FFC1F8FE,I07C063661986061986I0C061B0D86318630C86,I01F863660986061986001806030D863186304C,J01C636C0D860419FF003006030DFF3183606F,K0C636C0D860419FE00E006030DFE31836063E,I0C04636409860419I01C006030D00318220406,I0C0C636619860619860380061B0D86318630C83,I071C636739860739C603FC07339DC631CE39CC6,I03F86363F18603F87C03FC03E1FC7C31FC1F87C,gS018,:::,::::I0CS03F07CO018K03L01F01FP0C064L0C1FF1F,I0CS0738C6O03CK03L0398318N01E06CK01C1FE33,I0CS061986O03CK03L030C618N01E06CK03C004618,I0C00780C720E040419801E038CI0260383C370382I0C600781C6I01306E0E0806C00C618780E3,I0C00FE7CFE3F060019103F1IFI0661FC7E3F8FC3I08440FCIF8003307F3F0C00C018618FC7FFC,I0C01866186618I0197C619863I066186C330D86I0785F186C318003306C618I0C0183F186618C,I0CI066186608I031C6601863I0C3186C030D82I07871980C318006186C608I0C0303F180618C,I0C003E6306C0CI06186601863I0FF186C030F03J0C61980C318007F86CC0CI0C03061980618C,I0C00FE6306C0C001C183601863I0FF986C030F03J0C60D80C318007FC6CC0CI0C02060980618C,I0C01866106408003818260186300181986C030D020020460980C31800C0C6C408I0C06060980618C,I0C01066186618007018661986300181986C330D860030C61986C31800C0C6C618I0C06061986618C,I0FF18E60CE738407F8CE73186320100D86E630DCE2039C339IC318808066E738800C060739CC618C,I0FF8FA607E3F0607F87C3E186330300D867C30CFC301F81F0F8C318C1806673F0C00C0603F0F8618C,Q06,O0186,O01FC,P0F8,,::::I0E06I08K0FFI062L06P06J03I0CO0CU043,I0E060018K0C380066L06P06J03I0CO0CU0C2,I0F060018K0C0C0066W06J03gO0C,I0D860E1C3C100C0C01670E0038007001C07186E07831E0038020407001C00E43C033C038E23C,I0D863F3E7F180C08C36FBF00FE63F807E3FFE7F0FE33F8CFC020C1FCCFE01FC7F1F7F1FDF37F,I0CC66198C3I0FF8C3I618086630C0C330C6619863618D86030810IC3030CC318C3186C3C3,I0CI609803I0FF8C3I6080C0630C0C330C6618063018D860318180CC3030C031803186C303,I0C66C0D81FI0C0CC366C0C0F0630C0FFB0C660C3E30F8DFF01981E0CC3060C1F181F186C31F,I0C36C0D87FI0C0CC366C0C03E630C0FF30C660CFE33F8DFE019007IC3060C7F187F186C37F,I0C1E4098C3I0C0CC366408006630C08030C6609863618DJ0BI0IC3020CC318C3186C3C3,I0C1E619883I0C0CC3I618083630C0C330C6619063418D8600E0106CC3030C831883186C383,I0C0E739CC7100FFCE7677380C6630C0E330C67398E3638DC600E018IC3019CC718C7186E3C7,I0C063F0E7D180FF87F63BF007C630C03E30C67F0FA33E8C7C00600F8CC300FC7D187D186737D,hN0CJ04P0C,hN0CJ0CN030C,hM01CI038N03F8,hM038I038N01F,,:::::::::::::::::::::::::::J0CI098J03K0FC010018I03E0780F8FF9F83E,I01E00198J03J0386030018I0730CC198FF39C73,I01E0018K03J0303J018I06198630C0230C618,I01300DC03C00B07006010381D80406198630C0620C618,I03307FF87E61B1F806I0FC3F80606098630C0C00C608,I03306198C361B30C0600186618I061D821F80C00C61C,I06186198C061B3040600182618I061D821F81801861C,I07F86198C061B6060600303418I03E98230C180303E8,I07FC6198C061B6060601303418J0C986304100E00C8,I0C0C6198C061B2040603102418J01986304301C0018,I0C0C6198C361B30C0303186618I06198630C30380618,I080661D8E673B39C038E1CE738840630CC39C303FC63,00180660F87C3FB1F800FC0FC3F8C603E0781F8303FC3E,,:::::::J08,I03F063604K018I01F8,I06186360CK018I039C,I0C0C036M018I030C,I0C040360E03801D838020C01E00438063807038,I0E006363F1FC03F8FCI0C03F30CFC3FFC1F8FE,I07C063661986061986I0C061B0D86318630C86,I01F863660986061986001806030D863186304C,J01C636C0D860419FF003006030DFF3183606F,K0C636C0D860419FE00E006030DFE31836063E,I0C04636409860419I01C006030D00318220406,I0C0C636619860619860380061B0D86318630C83,I071C636739860739C603FC07339DC631CE39CC6,I03F86363F18603F87C03FC03E1FC7C31FC1F87C,gS018,:::,:::I0CS03F07CO018K03L01F01FP0C064L0C1FF1F,I0CS0738C6O03CK03L0398318N01E06CK01C1FE33,I0CS061986O03CK03L030C618N01E06CK03C004618,I0C00780C720E040419801E038CI0260383C370382I0C600781C6I01306E0E0806C00C618780E3,I0C00FE7CFE3F060019103F1IFI0661FC7E3F8FC3I08440FCIF8003307F3F0C00C018618FC7FFC,I0C01866186618I0197C619863I066186C330D86I0785F186C318003306C618I0C0183F186618C,I0CI066186608I031C6601863I0C3186C030D82I07871980C318006186C608I0C0303F180618C,I0C003E6306C0CI06186601863I0FF186C030F03J0C61980C318007F86CC0CI0C03061980618C,I0C00FE6306C0C001C183601863I0FF986C030F03J0C60D80C318007FC6CC0CI0C02060980618C,I0C01866106408003818260186300181986C030D020020460980C31800C0C6C408I0C06060980618C,I0C01066186618007018661986300181986C330D860030C61986C31800C0C6C618I0C06061986618C,I0FF18E60CE738407F8CE73186320100D86E630DCE2039C339IC318808066E738800C060739CC618C,I0FF8FA607E3F0607F87C3E186330300D867C30CFC301F81F0F8C318C1806673F0C00C0603F0F8618C,Q06,O0186,O01FC,P0F8,,::::I0E06I08K0FFI062L06P06J03I0CO0CU043,I0E060018K0C380066L06P06J03I0CO0CU0C2,I0F060018K0C0C0066W06J03gO0C,I0D860E1C3C100C0C01670E0038007001C07186E07831E0038020407001C00E43C033C038E23C,I0D863F3E7F180C08C36FBF00FE63F807E3FFE7F0FE33F8CFC020C1FCCFE01FC7F1F7F1FDF37F,I0CC66198C3I0FF8C3I618086630C0C330C6619863618D86030810IC3030CC318C3186C3C3,I0CI609803I0FF8C3I6080C0630C0C330C6618063018D860318180CC3030C031803186C303,I0C66C0D81FI0C0CC366C0C0F0630C0FFB0C660C3E30F8DFF01981E0CC3060C1F181F186C31F,I0C36C0D87FI0C0CC366C0C03E630C0FF30C660CFE33F8DFE019007IC3060C7F187F186C37F,I0C1E4098C3I0C0CC366408006630C08030C6609863618DJ0BI0IC3020CC318C3186C3C3,I0C1E619883I0C0CC3I618083630C0C330C6619063418D8600E0106CC3030C831883186C383,I0C0E739CC7100FFCE7677380C6630C0E330C67398E3638DC600E018IC3019CC718C7186E3C7,I0C063F0E7D180FF87F63BF007C630C03E30C67F0FA33E8C7C00600F8CC300FC7D187D186737D,hN0CJ04P0C,hN0CJ0CN030C,hM01CI038N03F8,hM038I038N01F,,:::::::::::::::::::::::::::J0CI098J03K0FC010018I03E0780F8FF9F83E,I01E00198J03J0386030018I0730CC198FF39C73,I01E0018K03J0303J018I06198630C0230C618,I01300DC03C00B07006010381D80406198630C0620C618,I03307FF87E61B1F806I0FC3F80606098630C0C00C608,I03306198C361B30C0600186618I061D821F80C00C61C,I06186198C061B3040600182618I061D821F81801861C,I07F86198C061B6060600303418I03E98230C180303E8,I07FC6198C061B6060601303418J0C986304100E00C8,I0C0C6198C061B2040603102418J01986304301C0018,I0C0C6198C361B30C0303186618I06198630C30380618,I080661D8E673B39C038E1CE738840630CC39C303FC63,00180660F87C3FB1F800FC0FC3F8C603E0781F8303FC3E,,:::::::J08,I03F063604K018I01F8,I06186360CK018I039C,I0C0C036M018I030C,I0C040360E03801D838020C01E00438063807038,I0E006363F1FC03F8FCI0C03F30CFC3FFC1F8FE,I07C063661986061986I0C061B0D86318630C86,I01F863660986061986001806030D863186304C,J01C636C0D860419FF003006030DFF3183606F,K0C636C0D860419FE00E006030DFE31836063E,I0C04636409860419I01C006030D00318220406,I0C0C636619860619860380061B0D86318630C83,I071C636739860739C603FC07339DC631CE39CC6,I03F86363F18603F87C03FC03E1FC7C31FC1F87C,gS018,:::,::::I0CS03F07CO018K03L01F01FP0C064L0C1FF1F,I0CS0738C6O03CK03L0398318N01E06CK01C1FE33,I0CS061986O03CK03L030C618N01E06CK03C004618,I0C00780C720E040419801E038CI0260383C370382I0C600781C6I01306E0E0806C00C618780E3,I0C00FE7CFE3F060019103F1IFI0661FC7E3F8FC3I08440FCIF8003307F3F0C00C018618FC7FFC,I0C01866186618I0197C619863I066186C330D86I0785F186C318003306C618I0C0183F186618C,I0CI066186608I031C6601863I0C3186C030D82I07871980C318006186C608I0C0303F180618C,I0C003E6306C0CI06186601863I0FF186C030F03J0C61980C318007F86CC0CI0C03061980618C,I0C00FE6306C0C001C183601863I0FF986C030F03J0C60D80C318007FC6CC0CI0C02060980618C,I0C01866106408003818260186300181986C030D020020460980C31800C0C6C408I0C06060980618C,I0C01066186618007018661986300181986C330D860030C61986C31800C0C6C618I0C06061986618C,I0FF18E60CE738407F8CE73186320100D86E630DCE2039C339IC318808066E738800C060739CC618C,I0FF8FA607E3F0607F87C3E186330300D867C30CFC301F81F0F8C318C1806673F0C00C0603F0F8618C,Q06,O0186,O01FC,P0F8,,:::I0E06I08K0FFI062L06P06J03I0CO0CU043,I0E060018K0C380066L06P06J03I0CO0CU0C2,I0F060018K0C0C0066W06J03gO0C,I0D860E1C3C100C0C01670E0038007001C07186E07831E0038020407001C00E43C033C038E23C,I0D863F3E7F180C08C36FBF00FE63F807E3FFE7F0FE33F8CFC020C1FCCFE01FC7F1F7F1FDF37F,I0CC66198C3I0FF8C3I618086630C0C330C6619863618D86030810IC3030CC318C3186C3C3,I0CI609803I0FF8C3I6080C0630C0C330C6618063018D860318180CC3030C031803186C303,I0C66C0D81FI0C0CC366C0C0F0630C0FFB0C660C3E30F8DFF01981E0CC3060C1F181F186C31F,I0C36C0D87FI0C0CC366C0C03E630C0FF30C660CFE33F8DFE019007IC3060C7F187F186C37F,I0C1E4098C3I0C0CC366408006630C08030C6609863618DJ0BI0IC3020CC318C3186C3C3,I0C1E619883I0C0CC3I618083630C0C330C6619063418D8600E0106CC3030C831883186C383,I0C0E739CC7100FFCE7677380C6630C0E330C67398E3638DC600E018IC3019CC718C7186E3C7,I0C063F0E7D180FF87F63BF007C630C03E30C67F0FA33E8C7C00600F8CC300FC7D187D186737D,hN0CJ04P0C,hN0CJ0CN030C,hM01CI038N03F8,hM038I038N01F,,:::::::::::::::::';

								cordova.plugins.zbtprinter.print(mac, text, function (success) {}, function (fail) {
									alert(fail);
								});
								break;

							case 'shipment-notification':
								// that.loadData( message.notification )
								break;
						}
					}
				});
			}
		}
	};
	// </script>
	// <template>
	// 	<router-view></router-view>
	// </template>
	//
	// <script>

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(7);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Make vue aware of Vuex
	/*
	 * @Author: Igor Parra
	 * @Date:   2016-07-15 12:20:57
	 * @Last Modified by:   Igor Parra
	 * @Last Modified time: 2016-07-15 16:55:49
	 */

	_vue2.default.use(_vuex2.default);

	// Create an object to hold the initial state when
	// the app starts up
	var state = {
	  // When the app starts, count is set to 0
	  count: 0,
	  order: { id: 0 },
	  shipmentNotification: {}
	};

	var mutations = {
	  // A mutation receives the current state as the first argument
	  // You can make any modifications you want inside this function

	  INCREMENT: function INCREMENT(state, amount) {
	    state.count = state.count + amount;
	  },
	  LOAD_DATA: function LOAD_DATA(state, data) {
	    var type = data.type;
	    var content = data.content;
	    state[type] = content;
	  }
	};

	// Combine the initial state and the mutations to create a Vuex store.
	// This store can be linked to our app.
	exports.default = new _vuex2.default.Store({
	  state: state,
	  mutations: mutations
	});

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pubnub = undefined;

	var _common = __webpack_require__(9);

	var pubnub = exports.pubnub = __webpack_require__(10)({
	  publish_key: _common.credentials.pubnub.publishKey,
	  subscribe_key: _common.credentials.pubnub.subscribeKey
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	var urls = exports.urls = {
	  app: 'http://localhost:8080/#!',
	  passport_website: 'http://passport.testing.agente.cl/login2.html',
	  passport_api: 'http://passport.api.testing.agente.cl',
	  micro_api: 'http://ltl-micro.api.testing.agente.cl'
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*! 3.15.2 / modern */
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

		/* globals 'Modern' */
		/* eslint curly: 0, camelcase: 0, dot-notation: 0 */

		var packageJSON = __webpack_require__(1);
		var pubNubCore = __webpack_require__(2);
		var crypto_obj = __webpack_require__(5);
		var CryptoJS = __webpack_require__(6);
		var WS = __webpack_require__(7);

		/**
		 * UTIL LOCALS
		 */
		var PNSDK = 'PubNub-JS-' + 'Modern' + '/' + packageJSON.version;

		/**
		 * LOCAL STORAGE
		 */
		var db = (function () {
		  var ls = typeof localStorage !== 'undefined' && localStorage;
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

		    data.pnsdk = PNSDK;
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
		  setup.params = { pnsdk: PNSDK };

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
	/***/ function(module, exports) {

		module.exports = {
			"name": "pubnub",
			"preferGlobal": false,
			"version": "3.15.2",
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
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/* eslint camelcase: 0, no-use-before-define: 0, no-unused-expressions: 0  */
		/* eslint eqeqeq: 0, one-var: 0 */
		/* eslint no-redeclare: 0 */
		/* eslint guard-for-in: 0 */
		/* eslint block-scoped-var: 0 space-return-throw-case: 0, no-unused-vars: 0 */

		var packageJSON = __webpack_require__(1);
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
		  return function (origin, failover) {
		    return origin.indexOf('pubsub.') > 0
		      && origin.replace(
		        'pubsub', 'ps' + (
		          failover ? utils.generateUUID().split('-')[0] :
		            (++ori < max ? ori : ori = 1)
		        )) || origin;
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
		          badge: msg['apns']['badge']
		        }
		      };
		      for (var k in msg['apns']) {
		        m['pn_apns'][k] = msg['apns'][k];
		      }
		      var exclude1 = ['badge', 'alert'];
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

		  function _get_url_params(data) {
		    if (!data) data = {};
		    utils.each(params, function (key, value) {
		      if (!(key in data)) data[key] = value;
		    });
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

		    xdr(PUB_QUEUE.shift());
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

		    xdr({
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


		      xdr({
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

		      xdr({
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
		      xdr({
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
		      xdr({
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

		      xdr({
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
		          STD_ORIGIN = nextorigin(ORIGIN, 1);
		          SUB_ORIGIN = nextorigin(ORIGIN, 1);

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
		        SUB_RECEIVER = xdr({
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

		                if (channel2) {
		                  if (channel && channel.indexOf('-pnpres') >= 0
		                    && channel2.indexOf('-pnpres') < 0) {
		                    channel2 += '-pnpres';
		                  }
		                  chobj = CHANNEL_GROUPS[channel2] || CHANNELS[channel2] || { callback: function () {} };
		                } else {
		                  chobj = CHANNELS[channel];
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

		      xdr({
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

		      xdr({
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

		      xdr({
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

		      var timestamp = Math.floor(new Date().getTime() / 1000);
		      var sign_input = SUBSCRIBE_KEY + '\n' + PUBLISH_KEY + '\n' + 'grant' + '\n';

		      var data = { w: w, r: r, timestamp: timestamp };

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

		      sign_input += _get_pam_sign_input_from_params(data);

		      var signature = hmac_SHA256(sign_input, SECRET_KEY);

		      signature = signature.replace(/\+/g, '-');
		      signature = signature.replace(/\//g, '_');

		      data['signature'] = signature;

		      xdr({
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

		      xdr({
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

		      var timestamp = Math.floor(new Date().getTime() / 1000);
		      var sign_input = SUBSCRIBE_KEY + '\n' + PUBLISH_KEY + '\n' + 'audit' + '\n';

		      var data = { timestamp: timestamp };
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

		      sign_input += _get_pam_sign_input_from_params(data);

		      var signature = hmac_SHA256(sign_input, SECRET_KEY);

		      signature = signature.replace(/\+/g, '-');
		      signature = signature.replace(/\//g, '_');

		      data['signature'] = signature;
		      xdr({
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

		      xdr({
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
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// An action will receive the store as the first argument.
	// Since we are only interested in the dispatch (and optionally the state)
	// we can pull those two parameters using the ES6 destructuring feature
	var incrementCounter = exports.incrementCounter = function incrementCounter(_ref) {
	  var dispatch = _ref.dispatch;
	  var state = _ref.state;

	  dispatch('INCREMENT', 10);
	};
	var loadData = exports.loadData = function loadData(_ref2, data) {
	  var dispatch = _ref2.dispatch;
	  var state = _ref2.state;

	  dispatch('LOAD_DATA', data);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n\t<router-view></router-view>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/StandBy.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'StandBy',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  destroyed: function destroyed() {
	    console.info('StandBy is destroyed ===================================');
	  }
	};
	// </script>
	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-red-loading-section">
	//     <div class="container">
	//       <div class="ac25-loading-content">
	//         <h5>Esperando Evento...</h5>
	//         <img src="/html/images/loading.gif" alt="" />
	//       </div>
	//     </div>
	//     <img class="ac25-top-right-hand ac25-loading" src="/html/images/hand.png" v-link="'call'" />
	//   </div><!-- end red-loading-section -->
	//   <footer class="ac25-newfoot">
	//     <a v-link="'logout'" class="ac25-full-black waves-effect waves-light">CERRAR SESSION</a>
	//   </footer><!-- end footer -->
	// </template>
	//
	// <script>

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(16)
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Partials/HeaderUserData.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _director = __webpack_require__(17);

	var _director2 = _interopRequireDefault(_director);

	var _global = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="ac25-top-bar ac25-border-bottom">
	//        <div class="container">
	//           <span class="left" v-if="!user.authenticated">Aplicación no disponible hasta autorizar usuario</span>
	//           <span class="left" v-if="user.authenticated">OPERADOR: {{user.profile.name}}</span>         
	//           <span class="right">VER: 0.1</span>
	//        </div><!-- end .container -->
	//     </div><!-- end .top-bar -->
	// </template>
	//
	// <script>
	exports.default = {

	  name: 'HeaderUserData',

	  // props: {
	  //   comment: Object
	  // },

	  data: function data() {
	    return {
	      user: _director2.default.user
	    };
	  },


	  methods: {
	    logout: function logout() {
	      _director2.default.logout();
	    }
	  },

	  created: function created() {
	    ;
	  },
	  ready: function ready() {
	    console.info('HeaderUserData is ready ===================================');
	  }
	};
	// </script>

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(1);

	var _common = __webpack_require__(9);

	var _utils = __webpack_require__(18);

	var _utils2 = _interopRequireDefault(_utils);

	var _ls = __webpack_require__(19);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import una variable

	// modules are singletons!!!


	var PASSPORT_WEBSITE_LOGIN_URL = _common.urls.passport_website + '?continue=' + _common.urls.app + '/logged-in'; // import un objecto default

	var PASSPORT_WEBSITE_LOGOUT_URL = _common.urls.passport_website + '?action=logout';
	var PASSPORT_API_URL = _common.urls.passport_api;
	var SIGNUP_URL = _common.urls.api + 'users/';

	exports.default = {

	  user: {
	    authenticated: false,
	    profile: {}
	  },

	  /**
	   * Chek for phone setup and user director
	   * --------------------------------------
	   */
	  fixPaths: function fixPaths() {
	    console.info(_utils2.default.inDev(), 'utils.inDev() ???');
	    if (!_utils2.default.inDev()) {
	      $('img').each(function () {
	        var src = $(this).attr('src');

	        console.info(src, 'first images sources');

	        if (src.substr(0, 1) === '/') {
	          src = src.substr(1, src.length);
	        }
	        console.info(src, 'after images sources');

	        $(this).attr('src', src);
	      });
	    }
	  },
	  init: function init() {

	    this.fixPaths();
	    var access_token = _ls2.default.get('access_token');

	    /**
	     * Access token is needed
	     */
	    if (access_token) {

	      var setup = _ls2.default.get('setup');

	      /**
	       * Setup is needed
	       */
	      if (setup) {} else {

	        console.info('going to setup');
	        return _index.router.go('setup');
	      }

	      this.user.authenticated = true;

	      var profile = _ls2.default.get('profile');
	      if (profile) {
	        this.user.profile = profile;
	      }

	      /**
	       *   initPubnub
	       */
	      // this.initPubnub()
	    } else {

	      this.user.authenticated = false;
	      // this.goPassport()
	      //
	      //
	      //
	    }
	  },


	  /**
	   * Save access_token and user_id returned by passport website
	   * Ex: http://localhost:8080/#!/logged-in/?token=6BIxefKZa8WWMmigflo6aexeUDRL1mwej7Du4j4X&uid=5
	   */
	  loggedIn: function loggedIn(context) {
	    console.info('loggedIn:');

	    var token = _utils2.default.getUrlVariable('token');
	    var uid = _utils2.default.getUrlVariable('uid');

	    _ls2.default.save('access_token', token);
	    _ls2.default.save('user_id', uid);

	    context.$http.get(PASSPORT_API_URL + '/user/' + uid + '/profile').then(function (response) {
	      console.info(response, 'success callback');

	      var profile = response.data.data;
	      _ls2.default.save('profile', profile);

	      // router.go( 'stand-by' )
	    }, function (response) {
	      console.info(response, 'error callback');
	    });
	  },
	  goPassport: function goPassport() {
	    return location.href = PASSPORT_WEBSITE_LOGIN_URL;
	  },
	  logout: function logout() {
	    _ls2.default.clean();
	    return location.href = PASSPORT_WEBSITE_LOGOUT_URL;
	  },
	  getAuthHeader: function getAuthHeader() {
	    return {
	      'Authorization': 'Bearer ' + localStorage.getItem('token')
	    };
	  }
	};

/***/ },
/* 18 */
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
		getUrlVariable: function getUrlVariable(name) {
			console.info(window.location.href, 'window.location.href -------------------');
			var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
			if (!results) {
				return '';
			}
			return results[1] || 0;

			// var query = window.location.search.substring( 1 );
			// var vars = query.split( "&" );
			// for ( var i = 0; i < vars.length; i++ ) {
			// 	var pair = vars[ i ].split( "=" );
			// 	if ( pair[ 0 ] == variable ) {
			// 		return pair[ 1 ];
			// 	}
			// }
			// return ( false );
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(20);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var name_db = 'agenteOPL';

	/**
	 * init global db
	 */
	if (localStorage.getItem(name_db) === null) {
	    localStorage.setItem(name_db, (0, _stringify2.default)({}));
	}

	exports.default = {
	    name_db: name_db,
	    save: function save(name, value) {
	        var db = JSON.parse(localStorage.getItem(name_db));
	        db[name] = value;
	        localStorage.setItem(name_db, (0, _stringify2.default)(db));
	    },
	    get: function get(name) {
	        var db = JSON.parse(localStorage.getItem(name_db));
	        return db[name];
	    },
	    clean: function clean(name) {
	        localStorage.setItem(name_db, (0, _stringify2.default)({}));
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(22);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"ac25-top-bar ac25-border-bottom\">\n       <div class=\"container\">\n          <span class=\"left\" v-if=\"!user.authenticated\">Aplicación no disponible hasta autorizar usuario</span>\n          <span class=\"left\" v-if=\"user.authenticated\">OPERADOR: {{user.profile.name}}</span>          \n          <span class=\"right\">VER: 0.1</span>\n       </div><!-- end .container -->\n    </div><!-- end .top-bar -->\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-red-loading-section\">\n    <div class=\"container\">\n      <div class=\"ac25-loading-content\">\n        <h5>Esperando Evento...</h5>\n        <img src=\"/html/images/loading.gif\" alt=\"\" />\n      </div>\n    </div>\n    <img class=\"ac25-top-right-hand ac25-loading\" src=\"/html/images/hand.png\" v-link=\"'call'\" />\n  </div><!-- end red-loading-section -->\n  <footer class=\"ac25-newfoot\">\n    <a v-link=\"'logout'\" class=\"ac25-full-black waves-effect waves-light\">CERRAR SESSION</a>\n  </footer><!-- end footer -->\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(26)
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Setup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(9);

	var _ls = __webpack_require__(19);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//         <h4 class="ac25-top-red-text">CONFIGURACIÓN</h4>
	//
	//         <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
	//           <form>
	//             <p>
	//               <label>Seleccion vehículo</label>
	//               <select v-model="db.vehicleSelected">
	//                 <option v-for="option in vehicleOptions" v-bind:value="option.id">
	//                   {{ option.name }}
	//                 </option>
	//               </select>
	//             </p>
	//             <p>
	//               <label>Teléfono móvil</label>
	//               <input type="text" v-model="db.phoneMobile">
	//             </p>
	//             <p>
	//               <label>Teléfono central</label>
	//               <input type="text" v-model="db.phoneCentral">
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
	      db: {
	        vehicleSelected: '',
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

	      var setup = _ls2.default.get('setup');
	      console.info(setup, 'setup');

	      if (setup) {
	        this.db = setup;
	      }

	      var that = this;

	      this.$http.get(ORDER_URL + '/get-setup-data').then(function (response) {
	        console.info(response, 'success callback');

	        that.vehicleOptions = response.data.vehicles;
	        $('select').show();
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    },
	    save: function save() {

	      var setup = this.db;
	      _ls2.default.save('setup', setup);

	      this.$route.router.go('available');
	    },
	    cancel: function cancel() {}
	  }
	};
	// </script>

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n        <h4 class=\"ac25-top-red-text\">CONFIGURACIÓN</h4>\n\n        <ul class=\"ac25-red-list clearfix ac25-fleft ac25-mtop60\">\n          <form>\n            <p>\n              <label>Seleccion vehículo</label>\n              <select v-model=\"db.vehicleSelected\">\n                <option v-for=\"option in vehicleOptions\" v-bind:value=\"option.id\">\n                  {{ option.name }}\n                </option>\n              </select>\n            </p>\n            <p>\n              <label>Teléfono móvil</label>\n              <input type=\"text\" v-model=\"db.phoneMobile\">\n            </p>\n            <p>\n              <label>Teléfono central</label>\n              <input type=\"text\" v-model=\"db.phoneCentral\">\n            </p>            \n          </form>\n        </ul>\n\n        <div class=\"clearfix\"></div>\n      </div><!-- end content-inner-holder -->\n    </div><!-- end container -->\n\n    <footer class=\"ac25-content-footer\">\n      <a @click=\"cancel()\" class=\"ac25-half-black left waves-effect waves-light\">cancelar</a>\n      <a @click=\"save()\" class=\"ac25-half-red right waves-effect waves-light\">guardar</a>\n    </footer><!-- end footer -->\n\n  </div><!-- end content-global -->\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(29)
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/EventPickup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(9);

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _NotificationIcon = __webpack_require__(30);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(33);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(36);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ORDER_URL = _common.urls.micro_api + '/order'; // <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder">
	//
	//         <img class="ac25-top-right-hand ac25-z-1" src="/html/images/hand-black.png" v-link="'call'" />
	//
	//         <img class="ac25-page-top-logo" src="/html/images/pickup.png" />
	//         <p class="ac25-order-number-info">
	//           <span>orden {{order.special_id}}</span>
	//           <notification-icon></notification-icon>
	//         </p>
	//
	//         <ul class="ac25-info-list ac25-w100">
	//           <li>
	//             <p class="ac25-info-list-title"> nombre </p>
	//             <p class="ac25-info-list-content"> {{order.pickupAddress_person_name}}  </p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> telefono </p>
	//             <p class="ac25-info-list-content"> {{order.pickupAddress_person_phone}} </p>
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
	//             <p class="ac25-info-list-content">{{order.items_weight}}</p>
	//           </li>
	//         </ul><!-- end steps3 -->
	//       </div><!-- end content-inner-holder -->
	//     </div><!-- end container -->
	//     <footer class="ac25-content-footer">
	//       <button-print></button-print>
	//       <button-scan></button-scan>
	//       <div class="clearfix"></div>
	//       <a v-link="'load-vehicle'" class="ac25-half-black ac25-half-border-right left waves-effect waves-light">cargar</a>
	//       <a v-link="'payment'" class="ac25-half-red right waves-effect waves-light">pagos</a>
	//     </footer><!-- end footer -->
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>


	exports.default = {
	  name: 'EventPickup',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    NotificationIcon: _NotificationIcon2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  data: function data() {
	    return {
	      order: {}
	    };
	  },
	  ready: function ready() {
	    console.info('EventPickup is ready ===================================, AJAX...');
	    this.load();
	  },
	  methods: {
	    load: function load() {
	      var _this = this;

	      this.$http.get(ORDER_URL + '/137').then(function (response) {
	        console.info(response, 'success callback');
	        var order = response.data.data;
	        _this.order = order;
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(31)
	__vue_template__ = __webpack_require__(32)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Partials/NotificationIcon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <a v-if="notification" @click="popup()"><img class="" src="/html/images/info.png" /></a>
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
/* 32 */
/***/ function(module, exports) {

	module.exports = "\n<a v-if=\"notification\" @click=\"popup()\"><img class=\"\" src=\"/html/images/info.png\" /></a>\n";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(34)
	__vue_template__ = __webpack_require__(35)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Partials/ButtonPrint.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<a v-link="'print'" class="ac25-half-red ac25-half-border-right left waves-effect waves-light">
	// 		<img src="/html/images/print-big.png" alt="" />
	// 		<p class="ac25-no-margin">imprimir</p>
	// 	</a>
	// </template>
	//
	// <script>
	exports.default = {
		name: 'ButtonPrint',
		ready: function ready() {
			console.info('ButtonPrint is ready ===================================');
		}
	};
	// </script>

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\n\t<a v-link=\"'print'\" class=\"ac25-half-red ac25-half-border-right left waves-effect waves-light\">\n\t\t<img src=\"/html/images/print-big.png\" alt=\"\" />\n\t\t<p class=\"ac25-no-margin\">imprimir</p>\n\t</a>\n";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(37)
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Partials/ButtonScan.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <a v-link="'scan'" class="ac25-half-black  right waves-effect waves-light">
	//     <img src="/html/images/barcode-big-2.png" alt="" />
	//     <p class="ac25-no-margin">escanear</p>
	//   </a>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'ButtonScan',
	  ready: function ready() {
	    console.info('ButtonScan is ready ===================================');
	  }
	};
	// </script>

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n  <a v-link=\"'scan'\" class=\"ac25-half-black  right waves-effect waves-light\">\n    <img src=\"/html/images/barcode-big-2.png\" alt=\"\" />\n    <p class=\"ac25-no-margin\">escanear</p>\n  </a>\n";

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder\">\n\n        <img class=\"ac25-top-right-hand ac25-z-1\" src=\"/html/images/hand-black.png\" v-link=\"'call'\" />\n\n        <img class=\"ac25-page-top-logo\" src=\"/html/images/pickup.png\" />\n        <p class=\"ac25-order-number-info\">\n          <span>orden {{order.special_id}}</span>\n          <notification-icon></notification-icon>\n        </p>\n\n        <ul class=\"ac25-info-list ac25-w100\">\n          <li>\n            <p class=\"ac25-info-list-title\"> nombre </p>\n            <p class=\"ac25-info-list-content\"> {{order.pickupAddress_person_name}}  </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> telefono </p>\n            <p class=\"ac25-info-list-content\"> {{order.pickupAddress_person_phone}} </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> direccion </p>\n            <p class=\"ac25-info-list-content\"> {{order.pickupAddress_name}} </p>\n          </li>\n        </ul><!-- end info-list -->\n\n        <ul class=\"ac25-info-list ac25-w100 ac25-steps2\">\n          <li>\n            <p class=\"ac25-info-list-title\"> Deparmento </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_apt}} </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> Comuna </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_county}} </p>\n          </li>\n        </ul><!-- end steps2 -->\n\n        <ul class=\"ac25-info-list ac25-w100 ac25-steps3\">\n          <li>\n            <p class=\"ac25-info-list-title\"> MTS3 </p>\n            <p class=\"ac25-info-list-content\">{{order.items_volume}}</p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> bultos </p>\n            <p class=\"ac25-info-list-content\">{{order.items_amount}}</p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> peso </p>\n            <p class=\"ac25-info-list-content\">{{order.items_weight}}</p>\n          </li>\n        </ul><!-- end steps3 -->\n      </div><!-- end content-inner-holder -->\n    </div><!-- end container -->\n    <footer class=\"ac25-content-footer\">\n      <button-print></button-print>\n      <button-scan></button-scan>\n      <div class=\"clearfix\"></div>\n      <a v-link=\"'load-vehicle'\" class=\"ac25-half-black ac25-half-border-right left waves-effect waves-light\">cargar</a>\n      <a v-link=\"'payment'\" class=\"ac25-half-red right waves-effect waves-light\">pagos</a>\n    </footer><!-- end footer -->\n  </div><!-- end content-global -->\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(41)
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/EventDelivery.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(9);

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _NotificationIcon = __webpack_require__(30);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(33);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(36);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ORDER_URL = _common.urls.micro_api + '/order'; // <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder">
	//
	//         <img class="ac25-top-right-hand ac25-z-1" src="/html/images/hand-black.png" v-link="'call'" />
	//
	//         <img class="ac25-page-top-logo" src="/html/images/pickup.png" />
	//         <p class="ac25-order-number-info">
	//           <span>orden {{order.special_id}}</span>
	//           <notification-icon></notification-icon>
	//         </p>
	//
	//         <ul class="ac25-info-list ac25-w100">
	//           <li>
	//             <p class="ac25-info-list-title"> nombre </p>
	//             <p class="ac25-info-list-content"> {{order.deliveryAddress_person_name}}  </p>
	//           </li>
	//           <li>
	//             <p class="ac25-info-list-title"> telefono </p>
	//             <p class="ac25-info-list-content"> {{order.deliveryAddress_person_phone}} </p>
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
	//             <p class="ac25-info-list-content">{{order.items_weight}}</p>
	//           </li>
	//         </ul><!-- end steps3 -->
	//       </div><!-- end content-inner-holder -->
	//     </div><!-- end container -->
	//     <footer class="ac25-content-footer">
	//       <button-print></button-print>
	//       <button-scan></button-scan>
	//       <div class="clearfix"></div>
	//       <a v-link="'load-vehicle'" class="ac25-half-black ac25-half-border-right left waves-effect waves-light">cargar</a>
	//       <a v-link="'payment'" class="ac25-half-red right waves-effect waves-light">pagos</a>
	//     </footer><!-- end footer -->
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>


	exports.default = {
	  name: 'EventDelivery',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    NotificationIcon: _NotificationIcon2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  data: function data() {
	    return {
	      order: {}
	    };
	  },
	  ready: function ready() {
	    console.info('EventDelivery is ready ===================================, AJAX...');
	    this.load();
	  },
	  methods: {
	    load: function load() {
	      var _this = this;

	      this.$http.get(ORDER_URL + '/137').then(function (response) {
	        console.info(response, 'success callback');
	        var order = response.data.data;
	        _this.order = order;
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder\">\n\n        <img class=\"ac25-top-right-hand ac25-z-1\" src=\"/html/images/hand-black.png\" v-link=\"'call'\" />\n\n        <img class=\"ac25-page-top-logo\" src=\"/html/images/pickup.png\" />\n        <p class=\"ac25-order-number-info\">\n          <span>orden {{order.special_id}}</span>\n          <notification-icon></notification-icon>\n        </p>\n\n        <ul class=\"ac25-info-list ac25-w100\">\n          <li>\n            <p class=\"ac25-info-list-title\"> nombre </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_person_name}}  </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> telefono </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_person_phone}} </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> direccion </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_name}} </p>\n          </li>\n        </ul><!-- end info-list -->\n\n        <ul class=\"ac25-info-list ac25-w100 ac25-steps2\">\n          <li>\n            <p class=\"ac25-info-list-title\"> Deparmento </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_apt}} </p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> Comuna </p>\n            <p class=\"ac25-info-list-content\"> {{order.deliveryAddress_county}} </p>\n          </li>\n        </ul><!-- end steps2 -->\n\n        <ul class=\"ac25-info-list ac25-w100 ac25-steps3\">\n          <li>\n            <p class=\"ac25-info-list-title\"> MTS3 </p>\n            <p class=\"ac25-info-list-content\">{{order.items_volume}}</p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> bultos </p>\n            <p class=\"ac25-info-list-content\">{{order.items_amount}}</p>\n          </li>\n          <li>\n            <p class=\"ac25-info-list-title\"> peso </p>\n            <p class=\"ac25-info-list-content\">{{order.items_weight}}</p>\n          </li>\n        </ul><!-- end steps3 -->\n      </div><!-- end content-inner-holder -->\n    </div><!-- end container -->\n    <footer class=\"ac25-content-footer\">\n      <button-print></button-print>\n      <button-scan></button-scan>\n      <div class=\"clearfix\"></div>\n      <a v-link=\"'load-vehicle'\" class=\"ac25-half-black ac25-half-border-right left waves-effect waves-light\">cargar</a>\n      <a v-link=\"'payment'\" class=\"ac25-half-red right waves-effect waves-light\">pagos</a>\n    </footer><!-- end footer -->\n  </div><!-- end content-global -->\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(44)
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/LoadVehicle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(9);

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _NotificationIcon = __webpack_require__(30);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(33);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(36);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	var _getters = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// <header-user-data></header-user-data>
	// <div class="ac25-content-global">
	//   <div class="container">
	//     <div class="ac25-content-inner-holder ac25-min-height-200">
	//      <h4 class="ac25-top-red-text">CARGAR EL CAMION</h4>
	//      <p class="left clearfix ac25-subtitle"> Orden {{order.special_id}} </p>
	//      <img class="ac25-top-right-hand ac25-z-1" src="/html/images/hand-black.png" v-link="'call'" />
	//
	//      <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
	//       <li> Cargue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos. </li>
	//       <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.
	//       </li>
	//     </ul>
	//
	//     <div class="clearfix"></div>
	//     <a href="#" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="/html/images/print.png"  class="left" />  <span>imprimir listado de bultos</span> </a>
	//   </div><!-- end content-inner-holder -->
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


	var ORDER_URL = _common.urls.micro_api + '/order';

	// import { loadOrder } from '../vuex/actions'


	exports.default = {
	  name: 'LoadVehicle',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    NotificationIcon: _NotificationIcon2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  vuex: {
	    getters: {
	      order: _getters.getOrder
	    }
	  },
	  // vuex: {
	  //   actions: {
	  //     loadOrder: loadOrder
	  //   }
	  // },
	  // data: function() {
	  //   return {
	  //     order: {}
	  //   };
	  // },
	  ready: function ready() {
	    console.info('LoadVehicle is ready ===================================');
	    this.load();
	  },
	  methods: {
	    load: function load() {
	      // this.order = this.getOrder()
	      // this.$http.get( ORDER_URL + '/137' ).then( ( response ) => {
	      //   console.info( response, 'success callback' );
	      //   var order = response.data.data
	      //   this.order = order

	      //   // this.loadOrder(order)

	      // }, ( response ) => {
	      //   console.info( response, 'error callback' );
	      // } );
	    },
	    finishOrder: function finishOrder() {
	      var _this = this;

	      this.$http.put(ORDER_URL + '/137/finish-pickup').then(function (response) {
	        console.info(response, 'success callback');
	        var order = response.data.data;

	        _this.$route.router.go('available');
	      }, function (response) {
	        console.info(response.data, 'error callback');
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCount = getCount;
	exports.getOrder = getOrder;
	// This getter is a function which just returns the count
	// With ES6 you can also write it as:
	// export const getCount = state => state.count

	function getCount(state) {
	  return state.count;
	}
	function getOrder(state) {
	  return state.order;
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<header-user-data></header-user-data>\n<div class=\"ac25-content-global\">\n  <div class=\"container\">\n    <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n     <h4 class=\"ac25-top-red-text\">CARGAR EL CAMION</h4>\n     <p class=\"left clearfix ac25-subtitle\"> Orden {{order.special_id}} </p>\n     <img class=\"ac25-top-right-hand ac25-z-1\" src=\"/html/images/hand-black.png\" v-link=\"'call'\" />\n\n     <ul class=\"ac25-red-list clearfix ac25-fleft ac25-mtop60\">\n      <li> Cargue los <span class=\"ac25-large-font\">{{order.items_amount}}</span> bultos. </li>\n      <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.\n      </li>\n    </ul>\n\n    <div class=\"clearfix\"></div>\n    <a href=\"#\" class=\"ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light\"> <img src=\"/html/images/print.png\"  class=\"left\" />  <span>imprimir listado de bultos</span> </a>\n  </div><!-- end content-inner-holder -->\n</div><!-- end container -->\n\n<footer class=\"ac25-content-footer\">\n  <a onclick=\"window.history.back()\" class=\"ac25-half-black left waves-effect waves-light\">volver</a>\n  <a @click=\"finishOrder()\" class=\"ac25-half-red right waves-effect waves-light\">terminar</a>\n</footer><!-- end footer -->\n\n</div><!-- end content-global -->\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(48)
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/HubReception.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common = __webpack_require__(9);

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _NotificationIcon = __webpack_require__(30);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(33);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(36);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MICRO_API_URL = _common.urls.micro_api; // <template>
	// <header-user-data></header-user-data>
	// <div class="ac25-content-global">
	//   <div class="container">
	//     <div class="ac25-content-inner-holder ac25-min-height-200">
	//      <h4 class="ac25-top-red-text">CARGAR EL CAMION</h4>
	//      <p class="left clearfix ac25-subtitle"> Orden {{order.special_id}} </p>
	//      <img class="ac25-top-right-hand ac25-z-1" src="/html/images/hand-black.png" v-link="'call'" />
	//
	//      <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
	//       <li> Cargue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos. </li>
	//       <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.</li>
	//     </ul>
	//
	//     <div class="clearfix"></div>
	//     <a href="#" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="/html/images/print.png"  class="left" alt="" />  <span>imprimir listado de bultos</span> </a>
	//   </div><!-- end content-inner-holder -->
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
	  name: 'HubReception',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    NotificationIcon: _NotificationIcon2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  data: function data() {
	    return {
	      order: {}
	    };
	  },
	  ready: function ready() {
	    console.info('HubReception is ready ===================================');
	    this.load();
	  },
	  methods: {
	    load: function load() {
	      var _this = this;

	      this.$http.get(MICRO_API_URL + '/137').then(function (response) {
	        console.info(response, 'success callback');
	        var order = response.data.data;
	        _this.order = order;
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    },
	    finishOrder: function finishOrder() {
	      var _this2 = this;

	      this.$http.put(MICRO_API_URL + '/137/finish-pickup').then(function (response) {
	        console.info(response, 'success callback');
	        var order = response.data.data;

	        _this2.$route.router.go('available');
	      }, function (response) {
	        console.info(response.data, 'error callback');
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<header-user-data></header-user-data>\n<div class=\"ac25-content-global\">\n  <div class=\"container\">\n    <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n     <h4 class=\"ac25-top-red-text\">CARGAR EL CAMION</h4>\n     <p class=\"left clearfix ac25-subtitle\"> Orden {{order.special_id}} </p>\n     <img class=\"ac25-top-right-hand ac25-z-1\" src=\"/html/images/hand-black.png\" v-link=\"'call'\" />\n\n     <ul class=\"ac25-red-list clearfix ac25-fleft ac25-mtop60\">\n      <li> Cargue los <span class=\"ac25-large-font\">{{order.items_amount}}</span> bultos. </li>\n      <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.</li>\n    </ul>\n\n    <div class=\"clearfix\"></div>\n    <a href=\"#\" class=\"ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light\"> <img src=\"/html/images/print.png\"  class=\"left\" alt=\"\" />  <span>imprimir listado de bultos</span> </a>\n  </div><!-- end content-inner-holder -->\n</div><!-- end container -->\n\n<footer class=\"ac25-content-footer\">\n  <a onclick=\"window.history.back()\" class=\"ac25-half-black left waves-effect waves-light\">volver</a>\n  <a @click=\"finishOrder()\" class=\"ac25-half-red right waves-effect waves-light\">terminar</a>\n</footer><!-- end footer -->\n\n</div><!-- end content-global -->\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(51)
	__vue_template__ = __webpack_require__(52)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/HubTransfer.vue"
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

	var _common = __webpack_require__(9);

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _NotificationIcon = __webpack_require__(30);

	var _NotificationIcon2 = _interopRequireDefault(_NotificationIcon);

	var _ButtonPrint = __webpack_require__(33);

	var _ButtonPrint2 = _interopRequireDefault(_ButtonPrint);

	var _ButtonScan = __webpack_require__(36);

	var _ButtonScan2 = _interopRequireDefault(_ButtonScan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MICRO_API_URL = _common.urls.micro_api; // <template>
	// <header-user-data></header-user-data>
	// <div class="ac25-content-global">
	//   <div class="container">
	//     <div class="ac25-content-inner-holder ac25-min-height-200">
	//      <h4 class="ac25-top-red-text">CARGAR EL CAMION</h4>
	//      <p class="left clearfix ac25-subtitle"> Orden {{order.special_id}} </p>
	//      <img class="ac25-top-right-hand ac25-z-1" src="/html/images/hand-black.png" v-link="'call'" />
	//
	//      <ul class="ac25-red-list clearfix ac25-fleft ac25-mtop60">
	//       <li> Cargue los <span class="ac25-large-font">{{order.items_amount}}</span> bultos. </li>
	//       <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.</li>
	//     </ul>
	//
	//     <div class="clearfix"></div>
	//     <a href="#" class="ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light"> <img src="/html/images/print.png"  class="left" alt="" />  <span>imprimir listado de bultos</span> </a>
	//   </div><!-- end content-inner-holder -->
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
	  name: 'HubReception',
	  components: {
	    HeaderUserData: _HeaderUserData2.default,
	    NotificationIcon: _NotificationIcon2.default,
	    ButtonPrint: _ButtonPrint2.default,
	    ButtonScan: _ButtonScan2.default
	  },
	  data: function data() {
	    return {
	      order: {}
	    };
	  },
	  ready: function ready() {
	    console.info('HubReception is ready ===================================');
	    this.load();
	  },
	  methods: {
	    load: function load() {
	      var _this = this;

	      this.$http.get(MICRO_API_URL + '/137').then(function (response) {
	        console.info(response, 'success callback');
	        var order = response.data.data;
	        _this.order = order;
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    },
	    finishOrder: function finishOrder() {
	      var _this2 = this;

	      this.$http.put(MICRO_API_URL + '/137/finish-pickup').then(function (response) {
	        console.info(response, 'success callback');
	        var order = response.data.data;

	        _this2.$route.router.go('available');
	      }, function (response) {
	        console.info(response.data, 'error callback');
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n<header-user-data></header-user-data>\n<div class=\"ac25-content-global\">\n  <div class=\"container\">\n    <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n     <h4 class=\"ac25-top-red-text\">CARGAR EL CAMION</h4>\n     <p class=\"left clearfix ac25-subtitle\"> Orden {{order.special_id}} </p>\n     <img class=\"ac25-top-right-hand ac25-z-1\" src=\"/html/images/hand-black.png\" v-link=\"'call'\" />\n\n     <ul class=\"ac25-red-list clearfix ac25-fleft ac25-mtop60\">\n      <li> Cargue los <span class=\"ac25-large-font\">{{order.items_amount}}</span> bultos. </li>\n      <li> Una vez que este listo para pasar a la siguiente orden, persione terminar.</li>\n    </ul>\n\n    <div class=\"clearfix\"></div>\n    <a href=\"#\" class=\"ac25-print-button ac25-mbottom50 clearfix waves-effect waves-light\"> <img src=\"/html/images/print.png\"  class=\"left\" alt=\"\" />  <span>imprimir listado de bultos</span> </a>\n  </div><!-- end content-inner-holder -->\n</div><!-- end container -->\n\n<footer class=\"ac25-content-footer\">\n  <a onclick=\"window.history.back()\" class=\"ac25-half-black left waves-effect waves-light\">volver</a>\n  <a @click=\"finishOrder()\" class=\"ac25-half-red right waves-effect waves-light\">terminar</a>\n</footer><!-- end footer -->\n\n</div><!-- end content-global -->\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(54)
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Print.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <ul class="ac25-main-menu">
	//     <li>
	//       <a href="#" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <img src="/html/images/print-big.png" alt="" />
	//           <p>imprimir</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a href="#" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>factura</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a @click="print('internal_order')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>orden interna</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a @click="print('customer_order')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>orden cliente</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a @click="print('payments_history')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>historial de pago</p>
	//         </div>
	//       </a>
	//     </li>
	//     <li>
	//       <a @click="scan('special')" class="waves-effect waves-light">
	//         <div class="ac25-main-menu-content">
	//           <p>especial</p>
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
	exports.default = {

	  name: 'Print',

	  data: function data() {
	    return {
	      // user: director.user
	    };
	  },


	  methods: {

	    // print() {
	    //   cordova.plugins.zbtprinter.print("^XA^FO10,10^AFN,26,13^FDWelcome to the new world order, Pak!^FS^XZ",
	    //     function(success) {
	    //       console.info("zbtprinter ok !!!!!!!!!");
	    //     }, function(fail) {
	    //       console.info(fail, 'zbtprinter fail !!!!!!!!!');
	    //     });
	    // },
	    //
	    // find() {
	    //   cordova.plugins.zbtprinter.find( function( mac ) {
	    //     alert( mac );
	    //   }, function( fail ) {
	    //     alert( fail );
	    //   } )
	    // },

	    print: function print(label) {
	      console.info(label);
	      var mac = 'AC:3F:A4:56:66:EC';
	      var text = '';

	      // text = '! U1 setvar "device.languages" "zpl"\r\nline_print "\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n"'
	      // text = '"\r\nTEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n"'
	      // text = '"^XA^FO10,10^AFN,26,13^Welcome to the new world order, Pak!^FS^XZ"'
	      //
	      // cordova.plugins.zbtprinter.print("AC:3F:A4:1D:7A:5C", "! U1 setvar "device.languages" "line_print"\r\nTEXT ***Print test***\r\nPRINT\r\n",
	      // text = '! U1 setvar "device.languages" "zpl" TEXT ***Welcome to the new world order, Pak!***\r\nPRINT\r\n'

	      // https://km.zebra.com/kb/index?page=content&id=SA315&actp=RSS codigos de barra
	      text = '^XA^FO10,10^AFN,26,13^FDWelcome to the new world order, Pak!^FS^XZ'; // ok

	      var text = '';
	      text = "^XA";
	      text += "^FO20,30^GB750,1100,4^FS";
	      text += "^FO20,30^GB750,200,4^FS";
	      text += "^FO20,30^GB750,400,4^FS";
	      text += "^FO20,30^GB750,700,4^FS";
	      text += "^FO20,226^GB325,204,4^FS";
	      text += "^FO30,40^ADN,36,20^FDShip to:^FS";
	      text += "^FO30,260^ADN,18,10^FDPart number #^FS";
	      text += "^FO360,260^ADN,18,10^FDDescription:^FS";
	      text += "^FO30,750^ADN,36,20^FDFrom:^FS";
	      text += "^FO150,125^ADN,36,20^FDAcme Printing^FS";
	      text += "^FO60,330^ADN,36,20^FD14042^FS";
	      text += "^FO400,330^ADN,36,20^FDScrew^FS";
	      text += "^FO70,480^BY4^B3N,,200^FD12345678^FS";
	      text += "^FO150,800^ADN,36,20^FDEconocargo^FS";
	      text += "^XZ";

	      text = '^XA^LL400^FO10,10^AFN,26,13^FDNew world order now, 400dots^FS'; // ok     
	      text += '^FO400,100^BQN,2,10^FDnew world order, 400dots^FS^XZ';

	      cordova.plugins.zbtprinter.print(mac, text, function (success) {}, function (fail) {
	        alert(fail);
	      });
	    },
	    scan: function scan() {
	      cordova.plugins.barcodeScanner.scan(function (result) {
	        console.info("RESULT\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
	        alert("ORDEN ID: " + result.text);
	      }, function (error) {
	        alert("Scanning failed: " + error);
	      }, {
	        "preferFrontCamera": true, // iOS and Android
	        "showFlipCameraButton": true, // iOS and Android
	        "prompt": "Apuntar a codigo QR", // supported on Android only
	        "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
	        "orientation": "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
	      });
	    }
	  },

	  ready: function ready() {
	    console.info('Print is ready ===================================');
	  }
	};
	// </script>

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n  <ul class=\"ac25-main-menu\">\n    <li>\n      <a href=\"#\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <img src=\"/html/images/print-big.png\" alt=\"\" />\n          <p>imprimir</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>factura</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a @click=\"print('internal_order')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>orden interna</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a @click=\"print('customer_order')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>orden cliente</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a @click=\"print('payments_history')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>historial de pago</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a @click=\"scan('special')\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>especial</p>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a onclick=\"window.history.back()\" class=\"waves-effect waves-light\">\n        <div class=\"ac25-main-menu-content\">\n          <p>volver</p>\n        </div>\n      </a>\n    </li>\n  </ul><!-- end main-menu -->\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(57)
	__vue_template__ = __webpack_require__(58)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Scan.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <header-user-data></header-user-data>
	//
	//   <div class="ac25-content-global">
	//     <div class="ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right">
	//       <ul class="ac25-scan-list">
	//         <li>
	//           <a href="#" class="waves-effect waves-light">
	//             <div class="ac25-scan-list-content">
	//               <img class="ac25-scanlist-scan-code" src="/html/images/barcode-big-2.png" alt="" />
	//               <div class="clearfix"></div>
	//               <span class="ac25-scanlist-scan-text">escanear</span>
	//             </div>
	//           </a>
	//         </li>
	//         <li>
	//           <a href="#">
	//             <div class="ac25-scan-list-content">
	//               <span class="ac25-sclanlist-scan-id">id 45889901</span>
	//             </div>
	//           </a>
	//         </li>
	//       </ul><!-- end scan-list -->
	//       <div class="container">
	//         <p class="ac25-mid-page-paragraph"> Sofa americano de 3 cuerpos  </p>
	//       </div>
	//     </div><!-- end content-inner-holder -->
	//     <footer class="ac25-newfoot ac25-height-auto">
	//       <img class="ac25-cam-image" src="/html/images/cam-img.png" alt="" />
	//       <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">volver</a>
	//     </footer><!-- end footer -->
	//
	//   </div><!-- end content-global -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'Scan',
	  data: function data() {
	    return {
	      // user: director.user
	    };
	  },

	  methods: {
	    scan: function scan() {
	      // director.logout()
	    }
	  },
	  ready: function ready() {
	    console.info('Scan is ready ===================================');
	  }
	};
	// </script>

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n\n  <div class=\"ac25-content-global\">\n    <div class=\"ac25-content-inner-holder ac25-ptop15 ac25-no-padding-left ac25-no-padding-right\">\n      <ul class=\"ac25-scan-list\">\n        <li>\n          <a href=\"#\" class=\"waves-effect waves-light\">\n            <div class=\"ac25-scan-list-content\">\n              <img class=\"ac25-scanlist-scan-code\" src=\"/html/images/barcode-big-2.png\" alt=\"\" />\n              <div class=\"clearfix\"></div>\n              <span class=\"ac25-scanlist-scan-text\">escanear</span>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"#\">\n            <div class=\"ac25-scan-list-content\">\n              <span class=\"ac25-sclanlist-scan-id\">id 45889901</span>\n            </div>\n          </a>\n        </li>\n      </ul><!-- end scan-list -->\n      <div class=\"container\">\n        <p class=\"ac25-mid-page-paragraph\"> Sofa americano de 3 cuerpos  </p>\n      </div>\n    </div><!-- end content-inner-holder -->\n    <footer class=\"ac25-newfoot ac25-height-auto\">\n      <img class=\"ac25-cam-image\" src=\"/html/images/cam-img.png\" alt=\"\" />\n      <a onclick=\"window.history.back()\" class=\"ac25-full-black waves-effect waves-light\">volver</a>\n    </footer><!-- end footer -->\n\n  </div><!-- end content-global -->\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(60)
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Payment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	//     <div class="ac25-red-loading-section">
	//         <div class="container">
	//             <div class="ac25-loading-content">
	//                <h5>No disponible en esta versión</h5>
	//             </div>
	//         </div>
	//     </div><!-- end red-loading-section -->
	//     <footer class="ac25-newfoot">
	//         <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">volver</a>
	//     </footer><!-- end footer -->
	// </template>
	//
	// <script>
	exports.default = {
		name: 'Payment',
		ready: function ready() {
			console.info('Payment is ready ===================================');
		}
	};
	// </script>

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"ac25-red-loading-section\">\n        <div class=\"container\">\n            <div class=\"ac25-loading-content\">\n               <h5>No disponible en esta versión</h5>\n            </div>\n        </div>\n    </div><!-- end red-loading-section -->\n    <footer class=\"ac25-newfoot\">\n        <a onclick=\"window.history.back()\" class=\"ac25-full-black waves-effect waves-light\">volver</a>\n    </footer><!-- end footer -->\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(63)
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Call.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Call',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  methods: {
	    callCustomer: function callCustomer() {
	      alert('Ring ring');
	    },
	    callCentralCustomer: function callCentralCustomer() {
	      alert('Ring ring');
	    },
	    callCentral: function callCentral() {
	      alert('Ring ring');
	    },
	    callDriver: function callDriver() {
	      alert('Ring ring');
	    }
	  },
	  ready: function ready() {
	    console.info('Call is ready ===================================');
	  }
	};
	// </script>
	// <template>
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
	//        <img class="ac25-top-right-hand ac25-z-1" src="/html/images/hand-black.png" />
	//      </div><!-- end content-inner-holder -->
	//    </div><!-- end container -->
	//    <footer class="ac25-content-footer">
	//    <a @click="callCustomer()" class="ac25-full-red-custom waves-effect waves-light">llamar al cliente</a>
	//    <a @click="callCentralCustomer()" class="ac25-full-red-custom waves-effect waves-light">central llama a cliente</a>
	//    <a @click="callCentral()" class="ac25-full-red-custom waves-effect waves-light">llamar a la central</a>
	//     <a @click="callDriver()" class="ac25-full-red-custom waves-effect waves-light">llamar al chofer</a>
	//     <a onclick="window.history.back()" class="ac25-full-black waves-effect waves-light">terminar</a>
	//   </footer><!-- end footer -->
	// </div><!-- end content-global --> 
	// </template>
	//
	// <script>

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n       <h4 class=\"ac25-top-red-text\">LLAMADO</h4>\n       <p class=\"left clearfix ac25-subtitle\" style=\"width:60%\">\n         Seleccione una de las opciones para iniciar un llamado telefónico.\n         <br />\n         <br />\n         Llame a cliente sólo en caso de ser necesario.\n       </p>\n       <img class=\"ac25-top-right-hand ac25-z-1\" src=\"/html/images/hand-black.png\" />\n     </div><!-- end content-inner-holder -->\n   </div><!-- end container -->\n   <footer class=\"ac25-content-footer\">\n   <a @click=\"callCustomer()\" class=\"ac25-full-red-custom waves-effect waves-light\">llamar al cliente</a>\n   <a @click=\"callCentralCustomer()\" class=\"ac25-full-red-custom waves-effect waves-light\">central llama a cliente</a>\n   <a @click=\"callCentral()\" class=\"ac25-full-red-custom waves-effect waves-light\">llamar a la central</a>\n    <a @click=\"callDriver()\" class=\"ac25-full-red-custom waves-effect waves-light\">llamar al chofer</a>\n    <a onclick=\"window.history.back()\" class=\"ac25-full-black waves-effect waves-light\">terminar</a>\n  </footer><!-- end footer -->\n</div><!-- end content-global -->  \n";

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
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Logout.vue"
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

	var _index = __webpack_require__(1);

	var _director = __webpack_require__(17);

	var _director2 = _interopRequireDefault(_director);

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Call',
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
	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-content-global">
	//     <div class="container">
	//       <div class="ac25-content-inner-holder ac25-min-height-200">
	//        <h4 class="ac25-top-red-text">ECONOCARGO</h4>
	//        <img class="ac25-top-right-hand ac25-z-1" src="/html/images/hand-black.png" />
	//      </div><!-- end content-inner-holder -->
	//    </div><!-- end container -->
	//    <footer class="ac25-content-footer">
	//    <a @click="callCustomer()" class="ac25-full-red-custom waves-effect waves-light" style="padding:100px 20px">Esta seguro que desea cerrar la cerrar?</a>
	//     <a @click="yes()" class="ac25-half-black left waves-effect waves-light" style="border:1px solid white">sí</a>
	//     <a @click="no()" class="ac25-half-black left waves-effect waves-light" style="border:1px solid white">no</a>
	//   </footer><!-- end footer -->
	// </div><!-- end content-global --> 
	// </template>
	//
	// <script>

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-content-global\">\n    <div class=\"container\">\n      <div class=\"ac25-content-inner-holder ac25-min-height-200\">\n       <h4 class=\"ac25-top-red-text\">ECONOCARGO</h4>\n       <img class=\"ac25-top-right-hand ac25-z-1\" src=\"/html/images/hand-black.png\" />\n     </div><!-- end content-inner-holder -->\n   </div><!-- end container -->\n   <footer class=\"ac25-content-footer\">\n   <a @click=\"callCustomer()\" class=\"ac25-full-red-custom waves-effect waves-light\" style=\"padding:100px 20px\">Esta seguro que desea cerrar la cerrar?</a>\n    <a @click=\"yes()\" class=\"ac25-half-black left waves-effect waves-light\" style=\"border:1px solid white\">sí</a>\n    <a @click=\"no()\" class=\"ac25-half-black left waves-effect waves-light\" style=\"border:1px solid white\">no</a>\n  </footer><!-- end footer -->\n</div><!-- end content-global -->  \n";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(69)
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/LoggedIn.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _director = __webpack_require__(17);

	var _director2 = _interopRequireDefault(_director);

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-red-loading-section">
	//     <div class="container">
	//       <div class="ac25-loading-content">
	//        <h5>Autentificado</h5>
	//        <img src="/html/images/loading.gif" />
	//      </div>
	//    </div>
	//  </div><!-- end red-loading-section -->
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'LoggedIn',
	  components: {
	    HeaderUserData: _HeaderUserData2.default
	  },
	  ready: function ready() {
	    console.info('LoggedIn is ready =================================== !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	    _director2.default.loggedIn(this);
	  }
	};
	// </script>

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-red-loading-section\">\n    <div class=\"container\">\n      <div class=\"ac25-loading-content\">\n       <h5>Autentificado</h5>\n       <img src=\"/html/images/loading.gif\" />\n     </div>\n   </div>\n </div><!-- end red-loading-section -->\n";

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
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Redirecting.vue"
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

	var _director = __webpack_require__(17);

	var _director2 = _interopRequireDefault(_director);

	var _HeaderUserData = __webpack_require__(15);

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
	//        <img src="/html/images/loading.gif" />
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
	    //   this.$route.router.go( 'stand-by' )
	    // }, 1000)
	  }
	};
	// </script>

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-red-loading-section\">\n    <div class=\"container\">\n      <div class=\"ac25-loading-content\">\n       <h5>Redireccionando</h5>\n       <img src=\"/html/images/loading.gif\" />\n     </div>\n   </div>\n </div><!-- end red-loading-section -->\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(75)
	__vue_template__ = __webpack_require__(76)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/nomikos/dev/econocargo/opl3/src/components/Available.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _director = __webpack_require__(17);

	var _director2 = _interopRequireDefault(_director);

	var _HeaderUserData = __webpack_require__(15);

	var _HeaderUserData2 = _interopRequireDefault(_HeaderUserData);

	var _common = __webpack_require__(9);

	var _ls = __webpack_require__(19);

	var _ls2 = _interopRequireDefault(_ls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <header-user-data></header-user-data>
	//   <div class="ac25-red-loading-section">
	//     <div class="container">
	//       <div class="ac25-loading-content">
	//        <h5>{{message}}</h5>
	//        <img src="/html/images/loading.gif" />
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
	    this.retry();

	    // centar esto de retry para todos los ajax
	  },

	  methods: {
	    retry: function retry() {
	      var _this = this;

	      var setup = _ls2.default.get('setup');
	      var vehicleSelected = setup.vehicleSelected;

	      this.$http.get(MICRO_API_URL + '/' + vehicleSelected + '/opl-available').then(function (response) {
	        console.info(response, 'success callback');

	        var result = response.data.result;
	        if (result != 'OK') {
	          return _this.retry();
	        }

	        _this.message = 'R4';
	      }, function (response) {
	        console.info(response, 'error callback');
	      });
	    }
	  }
	};
	// </script>

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n  <header-user-data></header-user-data>\n  <div class=\"ac25-red-loading-section\">\n    <div class=\"container\">\n      <div class=\"ac25-loading-content\">\n       <h5>{{message}}</h5>\n       <img src=\"/html/images/loading.gif\" />\n     </div>\n   </div>\n </div><!-- end red-loading-section -->\n";

/***/ },
/* 77 */
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Install plugin.
	 */

	function install(Vue) {

	    var _ = __webpack_require__(79)(Vue);

	    Vue.url = __webpack_require__(80)(_);
	    Vue.http = __webpack_require__(81)(_);
	    Vue.resource = __webpack_require__(85)(_);

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
/* 79 */
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
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Service for sending network requests.
	 */

	var xhr = __webpack_require__(82);
	var jsonp = __webpack_require__(84);
	var Promise = __webpack_require__(83);

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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * XMLHttp request.
	 */

	var Promise = __webpack_require__(83);
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
/* 83 */
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JSONP request.
	 */

	var Promise = __webpack_require__(83);

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
/* 85 */
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


/***/ }
/******/ ]);