(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["calendar"] = factory(require("vue"));
	else
		root["calendar"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toObject = __webpack_require__("241e");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $GOPS = __webpack_require__("9aa9");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "035a":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxMyAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjczMjIzMyAwLjczMjIzM0MxLjcwODU0IC0wLjI0NDA3OCAzLjI5MTQ2IC0wLjI0NDA3OCA0LjI2Nzc3IDAuNzMyMjMzTDEyLjI2NzggOC43MzIyM0MxMy4yNDQxIDkuNzA4NTQgMTMuMjQ0MSAxMS4yOTE1IDEyLjI2NzggMTIuMjY3OEw0LjI2Nzc3IDIwLjI2NzhDMy4yOTE0NiAyMS4yNDQxIDEuNzA4NTQgMjEuMjQ0MSAwLjczMjIzMyAyMC4yNjc4Qy0wLjI0NDA3OCAxOS4yOTE1IC0wLjI0NDA3OCAxNy43MDg1IDAuNzMyMjMzIDE2LjczMjJMNi45NjQ0NyAxMC41TDAuNzMyMjMzIDQuMjY3NzdDLTAuMjQ0MDc4IDMuMjkxNDYgLTAuMjQ0MDc4IDEuNzA4NTQgMC43MzIyMzMgMC43MzIyMzNaIiBmaWxsPSIjNUM3MDhFIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1472":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNUw4IDExTDE0IDUiIHN0cm9rZT0iIzVDNzA4RSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1792":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNy41IDM1QzcuODUxIDM1IDAgMjcuMTUgMCAxNy41QzAgNy44NTEgNy44NTEgMCAxNy41IDBDMjcuMTUgMCAzNSA3Ljg1MSAzNSAxNy41QzM1IDI3LjE1IDI3LjE1IDM1IDE3LjUgMzVaTTE3LjUgMS40MzhDOC42NDQgMS40MzggMS40MzggOC42NDQgMS40MzggMTcuNUMxLjQzOCAyNi4zNTYgOC42NDQgMzMuNTYyIDE3LjUgMzMuNTYyQzI2LjM1NiAzMy41NjIgMzMuNTYyIDI2LjM1NiAzMy41NjIgMTcuNUMzMy41NjIgOC42NDQgMjYuMzU2IDEuNDM4IDE3LjUgMS40MzhaIiBmaWxsPSIjM0U1MjcxIi8+DQo8cGF0aCBkPSJNMjcuMzU5IDEwLjE0NEwyOS45ODggMTIuNTcyTDMwLjk2NCAxMS41MTVMMjcuMTI4IDcuOTczQzI2Ljg1NCA3LjcxOSAyNi40MjggNy43MTkgMjYuMTUyIDcuOTczTDIyLjMxNiAxMS41MTZMMjMuMjkzIDEyLjU3M0wyNS45MjEgMTAuMTQ2VjExLjk0M0wyMi40OTEgMTUuMTExSDE2Ljc1MlYxMC4xNDVMMTkuMzggMTIuNTcyTDIwLjM1NyAxMS41MTVMMTYuNzUzIDguMTg2VjYuNDg4TDE5LjM4MSA4LjkxNkwyMC4zNTggNy44NTlMMTYuNTIzIDQuMzE3QzE2LjI0OCA0LjA2MyAxNS44MjIgNC4wNjMgMTUuNTQ3IDQuMzE3TDExLjcxMiA3Ljg2TDEyLjY4OCA4LjkxN0wxNS4zMTYgNi40ODlWOC4xODdMMTEuNzEyIDExLjUxNkwxMi42ODggMTIuNTczTDE1LjMxNiAxMC4xNDVWMTUuMTExSDEyLjE3MUMxMS45MTUgMTUuMTExIDExLjY3NyAxNS4yNDggMTEuNTQ4IDE1LjQ3TDUuNjMzIDI1LjY5OEM1LjUwNCAyNS45MiA1LjUwNCAyNi4xOTQgNS42MzMgMjYuNDE3QzUuNzYxIDI2LjY0IDUuOTk5MDEgMjYuNzc2IDYuMjU2MDEgMjYuNzc2SDI4LjY4N0MyOC45NDMgMjYuNzc2IDI5LjE4MSAyNi42MzkgMjkuMzEgMjYuNDE3QzI5LjQzOCAyNi4xOTQgMjkuNDM4IDI1LjkyIDI5LjMxIDI1LjY5OEwyNy4zNiAyMi4zMjVWMTMuODk5TDI5Ljk4OSAxNi4zMjdMMzAuOTY1IDE1LjI3MUwyNy4zNjEgMTEuOTQyVjEwLjE0NEgyNy4zNTlaTTExLjUzIDI1LjMzOEg3LjUwMkwxMS41MyAxOC4zNzJWMjUuMzM4Wk0xMi45NjggMjUuMzM4VjE4LjQyNkwxNy4xMTUgMjUuMzM4SDEyLjk2OFpNMTguNzkyIDI1LjMzOEwxMy41MTkgMTYuNTQ4SDIyLjM1OEwyNy40MzkgMjUuMzM4SDE4Ljc5MlpNMjMuNjg0IDE1Ljk2N0wyNS45MjEgMTMuOVYxOS44MzdMMjMuNjg0IDE1Ljk2N1oiIGZpbGw9IiMzRTUyNzEiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "1aa6":
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1c1e":
/***/ (function(module) {

module.exports = {"id":"baby","label":"Дети до года","range":["0/0/1","0/12"],"titles":[{"code":"DEFAULT","text":"В соответствии с инструкцией по применению препаратов"},{"code":"INSTR","text":"В соответствии с инструкцией по применению препаратов"},{"code":"INSTR_VAC","text":"В соответствии с инструкцией по применению препарата отдельно или в составе комбинированной вакцины"}],"headerLabels":[{"value":"0/0/1","label":"Первые <br/> 24 часа"},{"value":"0/0/3-7","label":"3-7 <br/> день"}],"notes":[{"number":1,"text":"Схема вакцинации против гепатита В, за исключением детей, относящихся к группам риска (Приказ МЗ РФ № 125н от 21.03.2014)."},{"number":2,"text":"Дополнительно может проводиться вакцинация по эпидемическим показаниям — контактные лица в очагах полиомиелита, с возраста 3 месяцев."},{"number":3,"text":"Дети групп риска."},{"number":4,"text":"Дети от 1 года до 18 лет, не болевшие, не привитые, привитые однократно против краснухи, не имеющие сведений о прививках против краснухи."},{"number":5,"text":"Профилактика инфекций входит в календарь по эпидемическим показаниям для групп риска."},{"number":6,"text":"Дети для активной вакцинации с целью профилактики заболеваний, вызываемых ротавирусами."},{"number":7,"text":"Дети в очагах менингококковой инфекции, вызванной менингококками серогрупп А или С. Вакцинация проводится в эндемичных регионах, а также в случае эпидемии, вызванной менингококками серогрупп A или C."},{"number":8,"text":"Лица, проживающие в регионах, неблагополучных по заболеваемости гепатитом A, выезжающие в неблагополучные страны (регионы), где регистрируется вспышечная заболеваемость гепатитом A. Контактные лица в очагах гепатита A."}],"items":[{"name":"Гепатит","note":1,"hint":{"html":"Гепатит В может приводить к развитию цирроза и рака печени. Вирус может передаваться во время родов, через кровь, через зараженные предметы. Вакцина: микрочастицы убитого вируса.","link":""},"items":["0/0/1","0/1","0/6"]},{"name":"Туберкулез","items":["0/0/3-7"],"hint":{"html":"Туберкулез может поражать людей из любых социальных групп. Инфекция распространяется в легкие, другие внутренние органы, кожу, кости, позвоночник. Вакцина: живая ослабленная бактерия.","link":"https://chaika.com/what-do-we-treat/diseases/tuberkulez"}},{"name":"Пневмококковая инфекция","items":["0/2","0/4.5"],"hint":{"html":"Пневмококк — одна из причин пневмоний, гнойного менингита, отита. Менингит может привести к смертельному исходу. Вакцина: убитая, с 2 мес (13 серотипов микроба) и с 2 лет (23 серотипа).","link":""}},{"name":"Дифтерия","items":[{"items":"0/3","title":"INSTR_VAC"},{"items":"0/4.5","title":"INSTR_VAC"},{"items":"0/6","title":"INSTR_VAC"}],"hint":{"html":"Дифтерия: при инфекции в зеве образуются пленки, закрывающие дыхательные пути, и человек может задохнуться. Вакцина: анатоксин, обычно в составе комбинированной вакцины.","link":""}},{"name":"Коклюш","items":[{"items":"0/3","title":"INSTR_VAC"},{"items":"0/4.5","title":"INSTR_VAC"},{"items":"0/6","title":"INSTR_VAC"}],"hint":{"html":"Коклюш — мучительный длительный кашель, может сопровождаться удушьем и даже привести к смерти из-за остановки дыхания. Вакцины: цельноклеточная или бесклеточная (обычно легче переносится).","link":""}},{"name":"Столбняка","items":[{"items":"0/3","title":"INSTR_VAC"},{"items":"0/4.5","title":"INSTR_VAC"},{"items":"0/6","title":"INSTR_VAC"}],"hint":{"html":"Столбняк: токсин поражает нервную систему, приводя к сильным судорогам, иногда смерти. Инфекция попадает через ранения. Вакцина: анатоксин, обычно в составе комбинированной вакцины.","link":""}},{"name":"Полиомиелит","note":2,"items":[{"items":"0/3","title":"INSTR_VAC"},{"items":"0/4.5","title":"INSTR_VAC"},{"items":"0/6","title":"INSTR_VAC"}],"hint":{"html":"Полиомиелит может навсегда парализовать руки или ноги или даже дыхательные мышцы. Вакцина: живая ослабленная или убитая (не может вызвать инфекцию), отдельная или в составе комбинированной.","link":""}},{"name":"Гемофильная инфекция, тип&nbsp;b","note":3,"items":[{"items":"0/3","title":"INSTR_VAC"},{"items":"0/4.5","title":"INSTR_VAC"},{"items":"0/6","title":"INSTR_VAC"}],"hint":{"html":"Гемофильная инфекция тип b — одна из причин гнойных менингитов и пневмоний у маленьких детей. Менингит может привести к глухоте или даже смерти. Вакцина: убитая, отдельная или в составе комбинированной.","link":""}},{"name":"Грипп","items":[{"items":["0/6","0/100500"],"title":"Ежегодно"}],"hint":{"html":"Грипп быстро распространяется от человека к человеку, может вызвать лихорадку, пневмонию, опасен осложнениями. Вакцина: убитая, содержит микрочастицы 3 подтипов вируса.","link":"https://chaika.com/what-do-we-treat/diseases/gripp-u-detei"}},{"name":"Корь","items":["0/12"],"hint":{"html":"Корь легко передается от человека к человеку. Опасна осложнениями — отит, пневмония, воспаление головного мозга. Вакцина: живая ослабленная, отдельная или в составе комбинированной.","link":""}},{"name":"Краснуха","note":4,"items":["0/12"],"hint":{"html":"Краснуха: основная опасность — заражение от детей беременных женщин и рождение у них детей с серьезными дефектами. Вакцина: живая ослабленная, отдельная или в составе комбинированной.","link":""}},{"name":"Эпидемический паротит","items":["0/12"],"hint":{"html":"Эпидемический паротит — сильный отек околоушных желез. Вирус у мальчиков может вызвать воспаление тканей яичка и дальнейшее бесплодие. Вакцина: живая ослабленная, отдельная или в составе комбинированной.","link":""}},{"name":"Ротавирусная инфекция","note":"5, 6","items":[{"epid":true,"items":["0/1.5","0/100500"],"title":"3 дозы в соответсвии с инструкцией по применению"}],"hint":{"html":"Ротавирус обычно проявляется в виде поноса и опасного для жизни маленьких детей обезвоживания. Вакцина: живая ослабленная, содержит несколько распространенных подтипов вируса.","link":""}},{"name":"Менингококковая инфекция","note":"5,7","items":[{"epid":true,"items":["0/9","0/100500"]}],"hint":{"html":"Менингококк — одна из частых причин менингита или сепсиса. Болезнь может унести жизнь ребенка за 24 часа. Вакцина: убитая, защищает от наиболее распространенных серотипов бактерии.","link":"https://chaika.com/what-do-we-treat/diseases/meningokokkovaia-infektsiia-u-detei"}},{"name":"Гепатит А","note":"5,8","items":[{"epid":true,"items":["0/12","0/100500"]}],"hint":{"html":"Гепатит А передается через воду или пищу. Обычно проявляется желтухой и поражением печени. Период восстановления может занимать несколько месяцев. Вакцины: убитые (инактивированные).","link":""}}]};

/***/ }),

/***/ "1ded":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxMyAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjczMjIzMyAwLjczMjIzM0MxLjcwODU0IC0wLjI0NDA3OCAzLjI5MTQ2IC0wLjI0NDA3OCA0LjI2Nzc3IDAuNzMyMjMzTDEyLjI2NzggOC43MzIyM0MxMy4yNDQxIDkuNzA4NTQgMTMuMjQ0MSAxMS4yOTE1IDEyLjI2NzggMTIuMjY3OEw0LjI2Nzc3IDIwLjI2NzhDMy4yOTE0NiAyMS4yNDQxIDEuNzA4NTQgMjEuMjQ0MSAwLjczMjIzMyAyMC4yNjc4Qy0wLjI0NDA3OCAxOS4yOTE1IC0wLjI0NDA3OCAxNy43MDg1IDAuNzMyMjMzIDE2LjczMjJMNi45NjQ0NyAxMC41TDAuNzMyMjMzIDQuMjY3NzdDLTAuMjQ0MDc4IDMuMjkxNDYgLTAuMjQ0MDc4IDEuNzA4NTQgMC43MzIyMzMgMC43MzIyMzNaIiBmaWxsPSIjRDdEREUxIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "1e63":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0Q3RERFMSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "201a":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+DQogICAgICAgIDxwYXRoIGQ9Ik00Mi45MTEgMzUuMzMzQzQyLjkxMSAzNi43MTMgNDEuNzkyIDM3LjgzMyA0MC40MTEgMzcuODMzQzM5LjAzIDM3LjgzMyAzNy45MTEgMzYuNzEzIDM3LjkxMSAzNS4zMzNDMzcuOTExIDMzLjk1MyAzOS4wMyAzMi44MzMgNDAuNDExIDMyLjgzM0M0MS43OTIgMzIuODMzIDQyLjkxMSAzMy45NTMgNDIuOTExIDM1LjMzM1oiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICAgICAgPHBhdGggZD0iTTUyLjUgODQuMDc1QzUyLjUgODUuNDU1IDUxLjM4MSA4Ni41NzUgNTAuMDAxIDg2LjU3NUM0OC42MiA4Ni41NzUgNDcuNTAxIDg1LjQ1NSA0Ny41MDEgODQuMDc1QzQ3LjUwMSA4Mi42OTUgNDguNjIgODEuNTc1IDUwLjAwMSA4MS41NzVDNTEuMzgxIDgxLjU3NSA1Mi41IDgyLjY5NSA1Mi41IDg0LjA3NVoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICAgICAgPHBhdGggZD0iTTUyLjc1IDk0LjgyNUM1Mi43NSA5Ni4yMDUgNTEuNjMxIDk3LjMyNSA1MC4yNTEgOTcuMzI1QzQ4Ljg3IDk3LjMyNSA0Ny43NTEgOTYuMjA1IDQ3Ljc1MSA5NC44MjVDNDcuNzUxIDkzLjQ0NSA0OC44NyA5Mi4zMjUgNTAuMjUxIDkyLjMyNUM1MS42MzEgOTIuMzI1IDUyLjc1IDkzLjQ0NSA1Mi43NSA5NC44MjVaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgICAgIDxwYXRoIGQ9Ik02Mi4wODggMzUuMzMzQzYyLjA4OCAzNi43MTMgNjAuOTY5IDM3LjgzMyA1OS41ODggMzcuODMzQzU4LjIwOSAzNy44MzMgNTcuMDg4IDM2LjcxMyA1Ny4wODggMzUuMzMzQzU3LjA4OCAzMy45NTMgNTguMjA5IDMyLjgzMyA1OS41ODggMzIuODMzQzYwLjk2OSAzMi44MzMgNjIuMDg4IDMzLjk1MyA2Mi4wODggMzUuMzMzWiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgICAgICA8cGF0aCBkPSJNNTQuNTMxIDQ2LjQ3OUM1MS42MDcgNDcuNDU1IDQ4LjM5MTEgNDcuNDU1IDQ1LjQ3MTEgNDYuNDc5TDQ0LjM5OSA0OS42OEM0Ni4yMDQgNTAuMjg0IDQ4LjEwMiA1MC41ODUgNTAuMDAxIDUwLjU4NUM1MS44OTcgNTAuNTg1IDUzLjc5MyA1MC4yODMgNTUuNiA0OS42OEw1NC41MzEgNDYuNDc5WiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgICAgICA8cGF0aCBkPSJNMjYuNTUyIDgxLjU3NVY4Ni4yMDRMMjYuMzc2IDg2LjU1NUMyNC4zIDkwLjcwNyAyMy4yMDIgOTUuMzU4IDIzLjIwMiA5OS45OTlIMjYuNTUyQzI2LjU1MiA5NS44NzQgMjcuNTI3IDkxLjc0MiAyOS4zNzYgODguMDUzTDI5LjcyNiA4Ny4zNUMyOS44NDMgODcuMTE4IDI5LjkwNCA4Ni44NiAyOS45MDQgODYuNlY4MS41NzZIMjYuNTUyVjgxLjU3NVoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICAgICAgPHBhdGggZD0iTTczLjYyMyA4Ni41NTVMNzMuNDQ5IDg2LjIwNFY4MS41NzVINzAuMVY4Ni42QzcwLjEgODYuODYgNzAuMTYxIDg3LjExOCA3MC4yNzYgODcuMzVMNzAuNjMgODguMDUzQzcyLjQ3OCA5MS43NDQgNzMuNDUyIDk1Ljg3NCA3My40NSAxMDBINzYuOEM3Ni44MDEgOTUuMzU3IDc1LjcwNSA5MC43MDkgNzMuNjIzIDg2LjU1NVoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICAgICAgPHBhdGggZD0iTTU5LjU4OCAyNy4zMzNDNTcuMDg4IDI3LjMzMyA1NC44NTQgMjguNDkxIDUzLjM4NyAzMC4yOThDNTAuMzY4IDI5LjEyNSA0OC4wMjMgMjkuNTEgNDYuNDg1IDMwLjE0N0M0NS4wMTggMjguNDI4IDQyLjg0MiAyNy4zMzMgNDAuNDEzIDI3LjMzM0MzNi4wMDcgMjcuMzMzIDMyLjQyMiAzMC45MjIgMzIuNDIyIDM1LjMzM0MzMi40MjIgMzkuNzQ0IDM2LjAwNyA0My4zMzMgNDAuNDEzIDQzLjMzM0M0NC44MTggNDMuMzMzIDQ4LjQwMyAzOS43NDQgNDguNDAzIDM1LjMzM0M0OC40MDMgMzQuNjEyIDQ4LjI5OSAzMy45MTYgNDguMTE5IDMzLjI1QzQ4Ljk0OSAzMi45ODYgNTAuMTg5IDMyLjg3MiA1MS44MzMgMzMuNDQ1QzUxLjY4NiAzNC4wNTEgNTEuNTk5IDM0LjY4MSA1MS41OTkgMzUuMzMyQzUxLjU5OSAzOS43NDMgNTUuMTg1IDQzLjMzMiA1OS41ODkgNDMuMzMyQzYzLjk5NSA0My4zMzIgNjcuNTgxIDM5Ljc0MyA2Ny41ODEgMzUuMzMyQzY3LjU4MSAzMC45MjEgNjMuOTk0IDI3LjMzMyA1OS41ODggMjcuMzMzWk00MC40MTIgNDAuMTMzQzM3Ljc2OCA0MC4xMzMgMzUuNjE3IDM3Ljk4IDM1LjYxNyAzNS4zMzNDMzUuNjE3IDMyLjY4NiAzNy43NjggMzAuNTMyIDQwLjQxMiAzMC41MzJDNDMuMDU1IDMwLjUzMiA0NS4yMDcgMzIuNjg2IDQ1LjIwNyAzNS4zMzNDNDUuMjA3IDM3Ljk4IDQzLjA1NSA0MC4xMzMgNDAuNDEyIDQwLjEzM1pNNTkuNTg4IDQwLjEzM0M1Ni45NDUgNDAuMTMzIDU0Ljc5NSAzNy45OCA1NC43OTUgMzUuMzMzQzU0Ljc5NSAzMi42ODYgNTYuOTQ1IDMwLjUzMiA1OS41ODggMzAuNTMyQzYyLjIzMyAzMC41MzIgNjQuMzgzIDMyLjY4NiA2NC4zODMgMzUuMzMzQzY0LjM4MyAzNy45OCA2Mi4yMzIgNDAuMTMzIDU5LjU4OCA0MC4xMzNaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgICAgIDxwYXRoIGQ9Ik03OS4yMTggNjguNDEzQzgwLjk3MiA2NS4yNiA4MS40NyA2Mi4yMiA4MC42NjggNTkuMzcxQzc5Ljc1NCA1Ni4xMTkgNzcuMzM2IDUzLjgyNiA3NS4yMzggNTIuMzgxQzc2LjE1NCA1MS4yMTQgNzcuMTIzIDQ5LjUwNSA3Ny4yOTMgNDcuMzY2Qzc3LjQ5IDQ0Ljg5IDc2LjYwMiA0Mi40NDIgNzQuNjUyIDQwLjA3M0M3NS44NzUgMzguODY0IDc2LjYzNCAzNy4xODYgNzYuNjM0IDM1LjMzNEM3Ni42MzQgMzMuNzI5IDc2LjA2NCAzMi4yNTQgNzUuMTE2IDMxLjEwMkM3NS41NTkgMjguNjQ2IDc1Ljc0OSAyNC4zNDYgNzUuNzQ5IDIyLjc1Qzc1Ljc1IDkuNzggNjQuNjggMCA1MC4wMDEgMEMzNS4zMjEgMCAyNC4yNTEgOS43OCAyNC4yNTEgMjIuNzVDMjQuMjUxIDI0LjM0NSAyNC40MzkgMjguNjQ3IDI0Ljg4MiAzMS4xMDNDMjMuOTM1IDMyLjI1NCAyMy4zNjUgMzMuNzI4IDIzLjM2NSAzNS4zMzNDMjMuMzY1IDM3LjE4NiAyNC4xMjQgMzguODYzIDI1LjM0NiA0MC4wNzJDMjMuMzk3IDQyLjQ0MSAyMi41MDggNDQuODg5IDIyLjcwNSA0Ny4zNjVDMjIuODc3IDQ5LjUwNCAyMy44NDYgNTEuMjEzIDI0Ljc2IDUyLjM4QzIyLjY2MiA1My44MjUgMjAuMjQ0IDU2LjExOCAxOS4zMyA1OS4zN0MxOC41MyA2Mi4yMTkgMTkuMDI5IDY1LjI2IDIwLjc4MSA2OC40MTNDMTYuNTQgNzEuNDY3IDEzLjM3NSA3Ni4yNDkgMTMuMzc3IDgxLjFWMTAwSDE2LjcwN1Y4MS4xQzE2LjcwNSA3NS4yMzIgMjMuMDg4IDY5LjI1NCAyOC45MDMgNjguNTJMMzAuMDU1IDY4LjM0OEMzMC43ODQgNzMuMjUgMzIuNzM4IDc2LjQ4IDM1LjkwNSA3Ny45MTFDMzcuMTU0IDc4LjQ3NiAzOC40ODUgNzguNzAzIDM5LjgyIDc4LjcwM0M0My45NjYgNzguNzAzIDQ4LjEzOCA3Ni41MTIgNDkuOTk4IDc1LjM5M0M1MS44NTkgNzYuNTExIDU2LjAzMSA3OC43MDMgNjAuMTc3IDc4LjcwM0M2MS41MTEgNzguNzAzIDYyLjg0MyA3OC40NzUgNjQuMDkxIDc3LjkxMUM2Ny4yNTcgNzYuNDc5IDY5LjIxMyA3My4yNSA2OS45NDIgNjguMzQ5TDcxLjA5NyA2OC41MjJDNzYuOTExIDY5LjI1NCA4My4yOTQgNzUuMjMyIDgzLjI5MiA4MS4xVjEwMEg4Ni42MjJWODEuMUM4Ni42MjQgNzYuMjQ4IDgzLjQ2MSA3MS40NjcgNzkuMjE4IDY4LjQxM1pNNzMuMzA1IDM1LjMzM0M3My4zMDUgMzcuMTcxIDcxLjgxMyAzOC42NjYgNjkuOTc3IDM4LjY2Nkg2OS4zMDhMNjkuNzE1IDMySDY5Ljk3N0M3MS44MTIgMzIgNzMuMzA1IDMzLjQ5NSA3My4zMDUgMzUuMzMzWk01MC4wMDEgMy41QzYyLjY4NCAzLjUgNzIuMjUgMTEuNzc2IDcyLjI1IDIyLjc1QzcyLjI1IDI0LjEzMiA3Mi4xMTggMjYuODgxIDcxLjg5IDI4Ljk1QzcxLjI4NCAyOC43NjggNzAuNjQyIDI4LjY2NyA2OS45NzcgMjguNjY3SDY5Ljk3M1YyNS45MTZDNjkuOTczIDIxLjMyOCA2Ni4yNDEgMTcuNTk0IDYxLjY1MSAxNy41OTRINTguMzIxQzU3Ljc3IDE3LjU5NCA1Ny4yNTUgMTcuODY3IDU2Ljk0NiAxOC4zMjNMNTYuMzcyIDE5LjE2N0M1NC45NDYgMjEuMzA0IDUyLjU2MyAyMi41ODQgNTAuMDA0IDIyLjU4N0M0Ny40MzggMjIuNTg0IDQ1LjA1MyAyMS4zMDYgNDMuNjIxIDE5LjE1NUw0My4wNTcgMTguMzIyQzQyLjc0NiAxNy44NjYgNDIuMjMxIDE3LjU5MyA0MS42OCAxNy41OTNIMzguMzVDMzMuNzYyIDE3LjU5MyAzMC4wMyAyMS4zMjYgMzAuMDMgMjUuOTE1VjI3Ljc4NEwzMC4wMjkgMjguNjY2SDMwLjAyNkMyOS4zNiAyOC42NjYgMjguNzE4IDI4Ljc2NyAyOC4xMTIgMjguOTVDMjcuODg0IDI2Ljg4MSAyNy43NTMgMjQuMTMyIDI3Ljc1MyAyMi43NUMyNy43NTEgMTEuNzc2IDM3LjMxNSAzLjUgNTAuMDAxIDMuNVpNNTAuMDI4IDcwLjgyMkM0Ni4yODcgNzAuODIyIDQzLjEzIDY5LjUzNSA0MC4wMzUgNjYuNzQ3QzQxLjk4MyA2Ni4wNCA0My4zNDMgNjQuMTc4IDQzLjMyNyA2Mi4wMzNWNTkuNzg1QzQ1LjQwNyA2MC41NiA0Ny42NSA2MSA1MCA2MUM1Mi4zNTEgNjEgNTQuNTk1IDYwLjU2IDU2LjY3NiA1OS43ODRWNjIuMDIxQzU2LjY1OSA2NC4xODggNTguMDM1IDY2LjA2NiA2MC4wMDQgNjYuNzYzQzU2Ljg5NyA2OS41NzQgNTMuODEyIDcwLjgyMiA1MC4wMjggNzAuODIyWk01MCA1Ny42NjZDNDEuNTUgNTcuNjY2IDM0LjYzOCA1MS4wNDUgMzQuMjY2IDQyLjU2NUwzMy4zNTcgMjguNjc3VjI1LjkxNkMzMy4zNTcgMjMuMTYzIDM1LjU5NyAyMC45MjMgMzguMzQ5IDIwLjkyM0g0MC43OThMNDAuODU3IDIxLjAxMkM0Mi44OTggMjQuMDc4IDQ2LjMxNCAyNS45MTEgNTAuMDAyIDI1LjkxNkM1My42ODMgMjUuOTExIDU3LjA5NyAyNC4wNzcgNTkuMTMyIDIxLjAyNkw1OS4yIDIwLjkyM0g2MS42NDlDNjQuNDAzIDIwLjkyMyA2Ni42NDMgMjMuMTYzIDY2LjY0MyAyNS45MTZWMjguNjc3TDY1LjczMyA0Mi41OTRDNjUuMzYxIDUxLjA0NSA1OC40NDkgNTcuNjY2IDUwIDU3LjY2NlpNMzAuMDI0IDMySDMwLjI4NkwzMC42OTMgMzguNjY3SDMwLjAyNUMyOC4xODggMzguNjY3IDI2LjY5NSAzNy4xNzIgMjYuNjk1IDM1LjMzNEMyNi42OTQgMzMuNDk1IDI4LjE4OCAzMiAzMC4wMjQgMzJaTTI4LjQ4NiA2NS4yMTNDMjYuOTAzIDY1LjQxMyAyNS4zMTcgNjUuOTE2IDIzLjc5NCA2Ni42MzVDMjIuNTQyIDY0LjM0NyAyMi4xNjYgNjIuMjIyIDIyLjcgNjAuMzE5QzIzLjU3MyA1Ny4yMTQgMjYuNjIyIDU1LjIwNiAyOC4zNiA1NC4yODZDMjguODg1IDU0LjAwNyAyOS4yMzEgNTMuNDc2IDI5LjI4IDUyLjg4NEMyOS4zMzEgNTIuMjkgMjkuMDcxIDUxLjcwOCAyOC41OTggNTEuMzQ1QzI4LjU3NyA1MS4zMjggMjYuMzgxIDQ5LjYxMyAyNi4xOTQgNDcuMDZDMjYuMDY5IDQ1LjM4IDI2Ljg0NSA0My42MTcgMjguNDc2IDQxLjgxMkMyOC45NzUgNDEuOTMgMjkuNDkxIDQyIDMwLjAyNCA0MkgzMC44OTZMMzAuOTQxIDQyLjc0QzMxLjIzMSA0OS4zMDggMzQuNzg4IDU0Ljk0OSAzOS45OTcgNTguMTZWNjIuMDQ3QzQwLjAwMiA2Mi44OTIgMzkuMzc2IDYzLjYwOSAzOC41NDIgNjMuNzEzTDI4LjQ4NiA2NS4yMTNaTTM3LjM0MiA3NC43MkMzNS4zMyA3My44MDggMzQuMDQ5IDcxLjQ4MSAzMy41MSA2Ny44MzJMMzUuODAyIDY3LjQ5QzM4Ljg2NCA3MC44MDQgNDIuMDQgNzIuODU2IDQ1LjU2MiA3My43NjZDNDIuOTg2IDc0LjkwNyAzOS43MTggNzUuNzk3IDM3LjM0MiA3NC43MlpNNjIuNjU2IDc0LjcyQzYwLjI4NCA3NS43OTYgNTcuMDI1IDc0LjkxMiA1NC40NTMgNzMuNzc2QzU3Ljk4MSA3Mi44NzIgNjEuMTY3IDcwLjgyIDY0LjI0NSA2Ny41TDY2LjQ4OCA2Ny44MzRDNjUuOTQ4IDcxLjQ4IDY0LjY2OCA3My44MDggNjIuNjU2IDc0LjcyWk03Ni4yMDUgNjYuNjM1Qzc0LjY4MSA2NS45MTYgNzMuMDk0IDY1LjQxMiA3MS41MSA2NS4yMTNMNjEuNDU5IDYzLjcxM0M2MC42MjMgNjMuNjA5IDU5Ljk5OCA2Mi44OTIgNjAuMDA0IDYyLjAzM1Y1OC4xNjJDNjUuMjEzIDU0Ljk1MyA2OC43NyA0OS4zMTkgNjkuMDU3IDQyLjc2OEw2OS4xMDQgNDJINjkuOTc3QzcwLjUxIDQyIDcxLjAyNiA0MS45MyA3MS41MjMgNDEuODExQzczLjE1NyA0My42MTUgNzMuOTMyIDQ1LjM3OSA3My44MDcgNDcuMDU5QzczLjYxOCA0OS42MTIgNzEuNDIyIDUxLjMyOCA3MS40MDkgNTEuMzM4QzcwLjkzIDUxLjY5NyA3MC42NjcgNTIuMjc3IDcwLjcxNCA1Mi44NzVDNzAuNzYxIDUzLjQ3MyA3MS4xMSA1NC4wMDQgNzEuNjQyIDU0LjI4NUM3My4zOCA1NS4yMDUgNzYuNDI3IDU3LjIxMyA3Ny4zIDYwLjMxOEM3Ny44MzMgNjIuMjIyIDc3LjQ1OSA2NC4zNDcgNzYuMjA1IDY2LjYzNVoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8L2c+DQogICAgPGRlZnM+DQogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDAiPg0KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIi8+DQogICAgICAgIDwvY2xpcFBhdGg+DQogICAgPC9kZWZzPg0KPC9zdmc+DQo="

/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2c99":
/***/ (function(module) {

module.exports = {"id":"pupil","label":"Дошкольники <br/> и школьники","range":["6","18"],"timeline":["18"],"headerLabels":[{"value":"18","label":"до 18 <br/> лет"}],"titles":[{"code":"DEFAULT","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"INSTR","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"INSTR_VAC","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препарата отдельно или в&nbsp;составе комбинированной вакцины"},{"code":"REVAC","text":"Ревакцинация в&nbsp;возрасте 6-7 лет в&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"ANNUAL","text":"Ежегодно"},{"code":"NOT_YET","text":"Дети от&nbsp;1&nbsp;года до&nbsp;18&nbsp;лет не&nbsp;привитые ранее"}],"notes":[{"number":1,"text":"Дополнительно может проводиться вакцинация по&nbsp;эпидемическим показаниям&nbsp;&mdash; контактные лица в&nbsp;очагах полиомиелита, с&nbsp;возраста 3&nbsp;месяцев."},{"number":2,"text":"Дети от&nbsp;1&nbsp;года до&nbsp;18&nbsp;лет не&nbsp;привитые ранее."},{"number":3,"text":"Профилактика инфекций входит в&nbsp;календарь по&nbsp;эпидемическим показаниям для групп риска."},{"number":4,"text":"Дети и&nbsp;взрослые в&nbsp;очагах менингококковой инфекции, вызванной менингококками серогрупп&nbsp;A или C.&nbsp;Вакцинация проводится в&nbsp;эндемичных регионах, а&nbsp;также в&nbsp;случае эпидемии, вызванной менингококками серогрупп&nbsp;A или C.&nbsp;Лица, подлежащие призыву на&nbsp;военную службу."},{"number":5,"text":"Лица, проживающие в&nbsp;регионах, неблагополучных по&nbsp;заболеваемости гепатитом&nbsp;A, а&nbsp;также лица, подверженные профессиональному риску заражения (медицинские работники, работники сферы обслуживания населения, занятые на&nbsp;предприятиях пищевой промышленности, а&nbsp;также обслуживающие водопроводные и&nbsp;канализационные сооружения, оборудование и&nbsp;сети). Лица, выезжающие в&nbsp;неблагополучные страны (регионы), где регистрируется вспышечная заболеваемость гепатитом A. Контактные лица в&nbsp;очагах гепатита&nbsp;A."},{"number":6,"text":"Лица, проживающие на&nbsp;эндемичных по&nbsp;клещевому вирусному энцефалиту территориях; лица, выезжающие на&nbsp;эндемичные по&nbsp;клещевому вирусному энцефалиту территории, а&nbsp;также прибывшие на&nbsp;эти территории лица, выполняющие следующие работы: сельскохозяйственные, гидромелиоративные, строительные, по&nbsp;выемке и&nbsp;перемещению грунта, заготовительные, промысловые, геологические, изыскательские, экспедиционные, дератизационные и&nbsp;дезинсекционные;по лесозаготовке, расчистке и&nbsp;благоустройству леса, зон оздоровления и&nbsp;отдыха населения."},{"number":7,"text":"Лица из&nbsp;групп риска, включая подлежащих призыву на&nbsp;военную службу, ранее не&nbsp;привитые и&nbsp;не&nbsp;болевшие ветряной оспой."}],"items":[{"name":"Туберкулез","note":"","hint":{"html":"Вакцина: живая ослабленная бактерия.","link":"https://chaika.com/what-do-we-treat/diseases/tuberkulez"},"items":[{"title":"REVAC","items":["6","7"]}]},{"name":"Корь","note":"","hint":{"html":"Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":["6"]},{"name":"Краснуха","note":"","hint":{"html":"Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":["6"]},{"name":"Эпидемический паротит","note":"","hint":{"html":"Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":["6"]},{"name":"Дифтерия","note":"","hint":{"html":"Вакцина: анатоксин, обычно в&nbsp;составе комбинированной вакцины.","link":""},"items":[{"title":"REVAC","items":["6","7"]},"14"]},{"name":"Столбняк","note":"","hint":{"html":"Вакцина: анатоксин, обычно в составе комбинированной вакцины.","link":""},"items":[{"title":"REVAC","items":["6","7"]},"14"]},{"name":"Полиомиелит","note":"1","hint":{"html":"Вакцина: живая ослабленная или убитая (не&nbsp;может вызвать инфекцию), отдельная или в&nbsp;составе комбинированной.","link":""},"items":["14"]},{"name":"Грипп","note":"","hint":{"html":"Вакцина: убитая, содержит микрочастицы 3&nbsp;подтипов вируса.","link":"https://chaika.com/what-do-we-treat/diseases/gripp-u-detei"},"items":[{"title":"ANNUAL","items":["6","100500"]}]},{"name":"Гепатит B","note":"2","hint":{"html":"Вакцина: микрочастицы убитого вируса.","link":""},"items":[{"title":"NOT_YET","items":["6","100500"]}]},{"name":"Менингококковая инфекция","note":"3,4","hint":{"html":"Вакцина: убитая, защищает от&nbsp;наиболее распространенных серотипов бактерии.","link":"https://chaika.com/what-do-we-treat/diseases/meningokokkovaia-infektsiia-u-detei"},"items":[{"epid":true,"items":["6"," 100500"]}]},{"name":"Гепатит А","note":"3,5","hint":{"html":"Вакцины: убитые (инактивированные).","link":""},"items":[{"epid":true,"items":["6","100500"]}]},{"name":"Клещевой вирусный энцефалит","note":"3,6","hint":{"html":"Вакцина: убитый вирус.","link":"https://chaika.com/what-do-we-treat/diseases/kleshchevoi-entsefalit"},"items":[{"epid":true,"items":["6","100500"]}]},{"name":"Ветряная оспа","note":"3,7","hint":{"html":"Вакцина: живая ослабленная.","link":"https://chaika.com/what-do-we-treat/diseases/vetrianaia-ospa-u-detei"},"items":[{"epid":true,"items":["6","100500"]}]}]};

/***/ }),

/***/ "2ce4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7909");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4d4683f0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "321a":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNC43OTUgMjQuNDUyQzI1LjAyIDI0LjY3MyAyNS4zNTEgMjQuNzc1IDI1LjY2MiAyNC43MTdDMjUuNzIyIDI0LjcwMSAyNS43ODYgMjQuNjg0IDI1Ljg0MSAyNC42NThDMjUuOTAxIDI0LjYzNSAyNS45NTQgMjQuNjAxIDI2LjAwNyAyNC41NzJDMjYuMDYyIDI0LjUzNiAyNi4xMDYgMjQuNDk3IDI2LjE1MyAyNC40NTJDMjYuMzMxIDI0LjI3NSAyNi40MzQgMjQuMDI3IDI2LjQzNCAyMy43NzNDMjYuNDM0IDIzLjUyIDI2LjMzIDIzLjI3NSAyNi4xNTMgMjMuMDk1QzI2LjEwNSAyMy4wNSAyNi4wNjEgMjMuMDA5IDI2LjAwNyAyMi45OEMyNS45NTQgMjIuOTQzIDI1LjkwMSAyMi45MTQgMjUuODQxIDIyLjg4NkMyNS43ODYgMjIuODY1IDI1LjcyMiAyMi44NDUgMjUuNjYyIDIyLjgzMUMyNS42IDIyLjgxOSAyNS41MzYgMjIuODEzIDI1LjQ3NSAyMi44MTNDMjUuMjIyIDIyLjgxMyAyNC45NzQgMjIuOTE1IDI0Ljc5NCAyMy4wOTRDMjQuNjE2IDIzLjI3NCAyNC41MTcgMjMuNTE5IDI0LjUxNyAyMy43NzJDMjQuNTE4IDI0LjAyNyAyNC42MTcgMjQuMjc1IDI0Ljc5NSAyNC40NTJaIiBmaWxsPSIjM0U1MjcxIi8+DQo8cGF0aCBkPSJNMTguNzA5OSAyOS4yNzlDMTguNzIwOSAyOS4zNCAxOC43Mzk5IDI5LjM5OSAxOC43NjI5IDI5LjQ1NUMxOC43ODQ5IDI5LjUxNiAxOC44MTY5IDI5LjU3MiAxOC44NTA5IDI5LjYyM0MxOC44ODY5IDI5LjY3NCAxOC45MjI5IDI5LjcyNSAxOC45Njk5IDI5Ljc2OUMxOS4wMTM5IDI5LjgxMSAxOS4wNjU5IDI5Ljg1MyAxOS4xMTc5IDI5Ljg4OEMxOS4xNjY5IDI5LjkxOCAxOS4yMjQ5IDI5Ljk1MiAxOS4yODA5IDI5Ljk3NkMxOS4zMzk5IDI5Ljk5OSAxOS4zOTg5IDMwLjAxNyAxOS40NjI5IDMwLjAzMkMxOS41ODQ5IDMwLjA1NyAxOS43MDk5IDMwLjA1NyAxOS44MzY5IDMwLjAzMkMxOS44OTY5IDMwLjAxNyAxOS45NTg5IDMwIDIwLjAxNDkgMjkuOTc2QzIwLjA3NTkgMjkuOTUzIDIwLjEyOTkgMjkuOTE4IDIwLjE4MDkgMjkuODg4QzIwLjIzMjkgMjkuODUzIDIwLjI4MTkgMjkuODExIDIwLjMyNjkgMjkuNzY5QzIwLjM2OTkgMjkuNzI0IDIwLjQxMDkgMjkuNjczIDIwLjQ0NDkgMjkuNjIzQzIwLjQ4MDkgMjkuNTcyIDIwLjUwNzkgMjkuNTE2IDIwLjUzNDkgMjkuNDU1QzIwLjU1NzkgMjkuMzk5IDIwLjU3ODkgMjkuMzQgMjAuNTg5OSAyOS4yNzlDMjAuNjAxOSAyOS4yMTggMjAuNjA5OSAyOS4xNTIgMjAuNjA5OSAyOS4wOTFDMjAuNjA5OSAyOS4wMjcgMjAuNjAxOSAyOC45NjggMjAuNTg5OSAyOC45MDNDMjAuNTc4OSAyOC44NDMgMjAuNTU4OSAyOC43ODQgMjAuNTM0OSAyOC43MjNDMjAuNTA4OSAyOC42NjQgMjAuNDgwOSAyOC42MSAyMC40NDQ5IDI4LjU1NUMyMC40MTA5IDI4LjUwNiAyMC4zNjk5IDI4LjQ1NCAyMC4zMjY5IDI4LjQxQzIwLjI4MTkgMjguMzY3IDIwLjIzMjkgMjguMzI2IDIwLjE4MDkgMjguMjk2QzIwLjEyOTkgMjguMjYgMjAuMDc1OSAyOC4yMyAyMC4wMTQ5IDI4LjIwM0MxOS45NTg5IDI4LjE4MiAxOS44OTY5IDI4LjE2MSAxOS44MzY5IDI4LjE0OEMxOS43NzM5IDI4LjEzNyAxOS43MDk5IDI4LjEzIDE5LjY0ODkgMjguMTNDMTkuNTg2OSAyOC4xMyAxOS41MjI5IDI4LjEzNyAxOS40NjI5IDI4LjE0OEMxOS4zOTk5IDI4LjE2MSAxOS4zMzk5IDI4LjE4MiAxOS4yODA5IDI4LjIwM0MxOS4yMjQ5IDI4LjIyOSAxOS4xNjg5IDI4LjI2IDE5LjExNzkgMjguMjk2QzE5LjA2NDkgMjguMzI2IDE5LjAxNDkgMjguMzY3IDE4Ljk2OTkgMjguNDFDMTguOTI4OSAyOC40NTQgMTguODg2OSAyOC41MDYgMTguODUwOSAyOC41NTVDMTguODE2OSAyOC42MSAxOC43ODU5IDI4LjY2NCAxOC43NjI5IDI4LjcyM0MxOC43MzY5IDI4Ljc4NCAxOC43MjA5IDI4Ljg0MyAxOC43MDc5IDI4LjkwM0MxOC42OTI5IDI4Ljk2NyAxOC42ODk5IDI5LjAyNiAxOC42ODk5IDI5LjA5MUMxOC42ODk5IDI5LjE1MiAxOC42OTI5IDI5LjIxOSAxOC43MDk5IDI5LjI3OVoiIGZpbGw9IiMzRTUyNzEiLz4NCjxwYXRoIGQ9Ik0xNS4zMzggNi41ODNDMTUuNTU5IDYuODA4IDE1Ljg5MyA2LjkwOSAxNi4yMDIgNi44NDlDMTYuMjYyIDYuODM0IDE2LjMyNCA2LjgxNiAxNi4zODIgNi43OTNDMTYuNDQxIDYuNzY4IDE2LjQ5NSA2LjczNSAxNi41NDggNi43MDNDMTYuNiA2LjY2NiAxNi42NSA2LjYyOCAxNi42OTUgNi41ODNDMTYuNzM2IDYuNTQgMTYuNzc4IDYuNDkgMTYuODA5IDYuNDM1QzE2Ljg0NyA2LjM4OCAxNi44NzYgNi4zMzEgMTYuOTAxIDYuMjcyQzE2LjkyMyA2LjIxNCAxNi45NDIgNi4xNTQgMTYuOTU1IDYuMDk0QzE2Ljk2OCA2LjAzMiAxNi45NzUgNS45NjggMTYuOTc1IDUuOTA2QzE2Ljk3NSA1LjY1NCAxNi44NzEgNS40MDkgMTYuNjk2IDUuMjI1QzE2LjUxNCA1LjA0OSAxNi4yNjYgNC45NDggMTYuMDE1IDQuOTQ4QzE1Ljk1NSA0Ljk0OCAxNS44OTMgNC45NTMgMTUuODI4IDQuOTY1QzE1Ljc2NiA0Ljk4IDE1LjcwNiA0Ljk5NSAxNS42NSA1LjAyM0MxNS41OSA1LjA0NSAxNS41MzYgNS4wNzMgMTUuNDgzIDUuMTA5QzE1LjQzMSA1LjE0MiAxNS4zODQgNS4xODQgMTUuMzM3IDUuMjI1QzE1LjI5NCA1LjI3NCAxNS4yNTMgNS4zMjIgMTUuMjE1IDUuMzcyQzE1LjE4NCA1LjQyNiAxNS4xNTIgNS40ODMgMTUuMTI5IDUuNTM3QzE1LjEwNSA1LjU5NyAxNS4wODYgNS42NiAxNS4wNzUgNS43MkMxNS4wNjIgNS43OCAxNS4wNTQgNS44NDMgMTUuMDU0IDUuOTA2QzE1LjA1NyA2LjE1OSAxNS4xNTkgNi40MDUgMTUuMzM4IDYuNTgzWiIgZmlsbD0iIzNFNTI3MSIvPg0KPHBhdGggZD0iTTEwLjUwMSAxOC4wMzVDMTAuNTE1IDE4LjA5NyAxMC41MzMgMTguMTU2IDEwLjU1NiAxOC4yMTFDMTAuNTc4IDE4LjI3MiAxMC42MTEgMTguMzMgMTAuNjQzIDE4LjM4MUMxMC42NzcgMTguNDM1IDEwLjcxNiAxOC40ODIgMTAuNzYyIDE4LjUyNUMxMC44MDUgMTguNTcgMTAuODU2IDE4LjYxIDEwLjkwOSAxOC42NDlDMTAuOTU5IDE4LjY4IDExLjAxOCAxOC43MTEgMTEuMDc2IDE4LjczNkMxMS4xMzQgMTguNzU4IDExLjE5MyAxOC43NzcgMTEuMjU2IDE4Ljc4NkMxMS4zNzkgMTguODE1IDExLjUwNSAxOC44MTUgMTEuNjMxIDE4Ljc4NkMxMS42OTQgMTguNzc3IDExLjc1NCAxOC43NTkgMTEuODA5IDE4LjczNkMxMS44NyAxOC43MTEgMTEuOTIzIDE4LjY4IDExLjk3NiAxOC42NDlDMTIuMDMgMTguNjEgMTIuMDc1IDE4LjU3IDEyLjEyMSAxOC41MjVDMTIuMTY2IDE4LjQ4MiAxMi4yMDUgMTguNDM1IDEyLjI0IDE4LjM4MUMxMi4yNzUgMTguMzMgMTIuMzA0IDE4LjI3MiAxMi4zMjkgMTguMjExQzEyLjM1MyAxOC4xNTYgMTIuMzc0IDE4LjA5OCAxMi4zODUgMTguMDM1QzEyLjM5NyAxNy45NzUgMTIuNDAyIDE3LjkwOSAxMi40MDIgMTcuODQ3QzEyLjQwMiAxNy43ODQgMTIuMzk3IDE3LjcyNCAxMi4zODUgMTcuNjZDMTIuMzc0IDE3LjYgMTIuMzUzIDE3LjUzNyAxMi4zMjkgMTcuNDhDMTIuMzA1IDE3LjQyIDEyLjI3NSAxNy4zNjcgMTIuMjQgMTcuMzEyQzEyLjIwNiAxNy4yNjEgMTIuMTY2IDE3LjIxNCAxMi4xMjEgMTcuMTY5QzEyLjA3NSAxNy4xMjQgMTIuMDMgMTcuMDgxIDExLjk3NiAxNy4wNUMxMS45MjMgMTcuMDEyIDExLjg3IDE2Ljk4NiAxMS44MDkgMTYuOTYyQzExLjc1NCAxNi45MzcgMTEuNjk0IDE2LjkxNyAxMS42MzEgMTYuOTA3QzExLjU2OCAxNi44OTIgMTEuNTA1IDE2Ljg4NyAxMS40NDMgMTYuODg3QzExLjM4MSAxNi44ODcgMTEuMzE5IDE2Ljg5MSAxMS4yNTYgMTYuOTA3QzExLjE5NCAxNi45MTcgMTEuMTM0IDE2LjkzNyAxMS4wNzYgMTYuOTYyQzExLjAxOSAxNi45ODUgMTAuOTYyIDE3LjAxMiAxMC45MDkgMTcuMDVDMTAuODU2IDE3LjA4MSAxMC44MDggMTcuMTI0IDEwLjc2MiAxNy4xNjlDMTAuNzIgMTcuMjE0IDEwLjY3OCAxNy4yNjEgMTAuNjQzIDE3LjMxMkMxMC42MDggMTcuMzY3IDEwLjU4IDE3LjQyIDEwLjU1NiAxNy40OEMxMC41MzMgMTcuNTQgMTAuNTE0IDE3LjYgMTAuNTAxIDE3LjY2QzEwLjQ4NyAxNy43MjMgMTAuNDgzIDE3Ljc4NCAxMC40ODMgMTcuODQ3QzEwLjQ4NCAxNy45MDkgMTAuNDg4IDE3Ljk3NiAxMC41MDEgMTguMDM1WiIgZmlsbD0iIzNFNTI3MSIvPg0KPHBhdGggZD0iTTI4LjEzMiAxNy40NEMyNy42MjIgMTcuNDQgMjcuMTQzIDE3LjI0MiAyNi43OCAxNi44ODFMMjEuNjg3IDExLjc4OEMyMS4zMjYgMTEuNDI4IDIxLjEyNyAxMC45NDYgMjEuMTI5IDEwLjQzM0MyMS4xMzEgOS45MjMgMjEuMzMgOS40NDIgMjEuNjkxIDkuMDhDMjIuNDE2IDguMzU2IDIzLjY3OCA4LjM1MyAyNC40MDEgOS4wNzZMMjkuNDkzIDE0LjE2OEMyOS44NTQgMTQuNTMxIDMwLjA1MyAxNS4wMTIgMzAuMDUyIDE1LjUyNEMzMC4wNTEgMTYuMDM2IDI5Ljg1MSAxNi41MTYgMjkuNDg5IDE2Ljg3N0MyOS4xMjggMTcuMjQgMjguNjQ2IDE3LjQ0IDI4LjEzMiAxNy40NFpNMjMuMDUxIDkuOTU2QzIyLjkyMiA5Ljk1NiAyMi44MDEgMTAuMDA2IDIyLjcxMSAxMC4wOTdDMjIuNjE4IDEwLjE4OCAyMi41NjggMTAuMzA5IDIyLjU2OCAxMC40MzhDMjIuNTY4IDEwLjU2NCAyMi42MTUgMTAuNjgzIDIyLjcwNSAxMC43NzFMMjcuNzk4IDE1Ljg2NEMyNy45NzcgMTYuMDQyIDI4LjI5MiAxNi4wNCAyOC40NzIgMTUuODYxQzI4LjU2MyAxNS43NyAyOC42MTQgMTUuNjUgMjguNjE0IDE1LjUyMkMyOC42MTQgMTUuMzk0IDI4LjU2NSAxNS4yNzUgMjguNDc1IDE1LjE4NkwyMy4zODQgMTAuMDk0QzIzLjI5NCAxMC4wMDUgMjMuMTc3IDkuOTU2IDIzLjA1MSA5Ljk1NloiIGZpbGw9IiMzRTUyNzEiLz4NCjxwYXRoIGQ9Ik0xMS45NTEgMjkuMDY2QzExLjQ0IDI5LjA2NiAxMC45NiAyOC44NjggMTAuNiAyOC41MDdMNS41MDggMjMuNDE1QzUuMTQ3IDIzLjA1NCA0Ljk0NyAyMi41NzMgNC45NDggMjIuMDYxQzQuOTQ5IDIxLjU0OSA1LjE0OCAyMS4wNjkgNS41MSAyMC43MDZDNi4yMzYgMTkuOTgxIDcuNDk3IDE5Ljk4MSA4LjIxOSAyMC43MDJMMTMuMzExIDI1Ljc5NUMxNC4wNTYgMjYuNTQgMTQuMDU0IDI3Ljc1NSAxMy4zMDggMjguNTAzQzEyLjk0NiAyOC44NjYgMTIuNDY0IDI5LjA2NiAxMS45NTEgMjkuMDY2Wk02Ljg2OCAyMS41ODNDNi43NCAyMS41ODMgNi42MTggMjEuNjMzIDYuNTI3IDIxLjcyNUM2LjQzNyAyMS44MTUgNi4zODcgMjEuOTM2IDYuMzg3IDIyLjA2M0M2LjM4NyAyMi4xOTIgNi40MzYgMjIuMzA5IDYuNTI1IDIyLjM5OUwxMS42MTcgMjcuNDkxQzExLjc5NCAyNy42NjkgMTIuMTExIDI3LjY2OSAxMi4yOTEgMjcuNDg5QzEyLjQ3OCAyNy4zMDEgMTIuNDc5IDI2Ljk5OCAxMi4yOTUgMjYuODEzTDcuMjAzIDIxLjcyMUM3LjExMyAyMS42MzEgNi45OTUgMjEuNTgzIDYuODY4IDIxLjU4M1oiIGZpbGw9IiMzRTUyNzEiLz4NCjxwYXRoIGQ9Ik0xNi44MTYgMjUuNjA5QzE2LjMxMSAyNS42MDkgMTUuODMgMjUuNDA4IDE1LjQ2MSAyNS4wNDFDMTUuMDk3IDI0LjY3NyAxNC44OTggMjQuMTkzIDE0Ljg5NyAyMy42NzlDMTQuODk2IDIzLjE2MyAxNS4wOTQgMjIuNjggMTUuNDU3IDIyLjMyTDIwLjU0OCAxNy4yMjhDMjEuMjc1IDE2LjUwNSAyMi41MzYgMTYuNTA5IDIzLjI2IDE3LjIzMkMyMy42MiAxNy41OTQgMjMuODIxIDE4LjA3NiAyMy44MjEgMTguNTg5QzIzLjgyIDE5LjEwMSAyMy42MjEgMTkuNTggMjMuMjYxIDE5Ljk0TDE4LjE3IDI1LjA0MkMxNy44MDMgMjUuNDA4IDE3LjMyMiAyNS42MDkgMTYuODE2IDI1LjYwOVpNMjEuODk5IDE4LjEwN0MyMS43NzIgMTguMTA3IDIxLjY1MiAxOC4xNTYgMjEuNTY0IDE4LjI0NEwxNi40NzIgMjMuMzM2QzE2LjM4MyAyMy40MjYgMTYuMzM0IDIzLjU0NyAxNi4zMzQgMjMuNjc4QzE2LjMzNCAyMy44MDkgMTYuMzg1IDIzLjkzMiAxNi40NzYgMjQuMDIzQzE2LjU3MiAyNC4xMTggMTYuNjkzIDI0LjE3MiAxNi44MTQgMjQuMTcySDE2LjgxNkMxNi45MzcgMjQuMTcyIDE3LjA1NiAyNC4xMTkgMTcuMTUxIDI0LjAyNEwyMi4yNDIgMTguOTIzQzIyLjMzMiAxOC44MzQgMjIuMzgxIDE4LjcxNSAyMi4zODEgMTguNTg4QzIyLjM4MSAxOC40NTkgMjIuMzMxIDE4LjMzOCAyMi4yNCAxOC4yNDhDMjIuMTQ5IDE4LjE1OCAyMi4wMjggMTguMTA3IDIxLjg5OSAxOC4xMDdaIiBmaWxsPSIjM0U1MjcxIi8+DQo8cGF0aCBkPSJNMTUuMDk4IDEzLjc3M0g3Ljg5ODAxQzYuODQzMDEgMTMuNzczIDUuOTg0MDEgMTIuOTEzIDUuOTg0MDEgMTEuODU1QzUuOTg0MDEgMTAuNzk3IDYuODQzMDEgOS45Mzc5OSA3Ljg5ODAxIDkuOTM3OTlIMTUuMDk4QzE2LjE1NCA5LjkzNzk5IDE3LjAxMiAxMC43OTggMTcuMDEyIDExLjg1NUMxNy4wMTIgMTIuOTEyIDE2LjE1MyAxMy43NzMgMTUuMDk4IDEzLjc3M1pNNy44OTgwMSAxMS4zNzVDNy42MzYwMSAxMS4zNzUgNy40MjIwMSAxMS41OSA3LjQyMjAxIDExLjg1NEM3LjQyMjAxIDEyLjExOSA3LjYzNTAxIDEyLjMzMyA3Ljg5ODAxIDEyLjMzM0gxNS4wOThDMTUuMzYxIDEyLjMzMyAxNS41NzQgMTIuMTE4IDE1LjU3NCAxMS44NTRDMTUuNTc0IDExLjU5IDE1LjM2MSAxMS4zNzUgMTUuMDk4IDExLjM3NUg3Ljg5ODAxWiIgZmlsbD0iIzNFNTI3MSIvPg0KPHBhdGggZD0iTTE3LjUgMzVDNy44NTEgMzUgMCAyNy4xNDkgMCAxNy41QzAgNy44NTEgNy44NTEgMCAxNy41IDBDMjcuMTUgMCAzNSA3Ljg1MSAzNSAxNy41QzM1IDI3LjE0OSAyNy4xNSAzNSAxNy41IDM1Wk0xNy41IDEuNDM4QzguNjQ0IDEuNDM4IDEuNDM4IDguNjQ0IDEuNDM4IDE3LjVDMS40MzggMjYuMzU2IDguNjQ0IDMzLjU2MiAxNy41IDMzLjU2MkMyNi4zNTYgMzMuNTYyIDMzLjU2MiAyNi4zNTYgMzMuNTYyIDE3LjVDMzMuNTYyIDguNjQ0IDI2LjM1NiAxLjQzOCAxNy41IDEuNDM4WiIgZmlsbD0iIzNFNTI3MSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "3589":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNy41IDExLjIxMkMxNS42NzYgMTEuMjEyIDE0LjE5MiAxMi42OTYgMTQuMTkyIDE0LjUyQzE0LjE5MiAxNi4zNDUgMTUuNjc2IDE3LjgyOSAxNy41IDE3LjgyOUMxOS4zMjQgMTcuODI5IDIwLjgwOSAxNi4zNDUgMjAuODA5IDE0LjUyQzIwLjgwOSAxMi42OTYgMTkuMzI0IDExLjIxMiAxNy41IDExLjIxMlpNMTcuNSAxNi4zOUMxNi40NjkgMTYuMzkgMTUuNjMgMTUuNTUxIDE1LjYzIDE0LjUyQzE1LjYzIDEzLjQ4OSAxNi40NjkgMTIuNjUgMTcuNSAxMi42NUMxOC41MzEgMTIuNjUgMTkuMzcgMTMuNDg5IDE5LjM3IDE0LjUyQzE5LjM3IDE1LjU1MSAxOC41MzEgMTYuMzkgMTcuNSAxNi4zOVoiIGZpbGw9IiMzRTUyNzEiLz4NCjxwYXRoIGQ9Ik0xNy41IDBDNy44NSAwIDAgNy44NTEgMCAxNy41QzAgMjcuMTUgNy44NSAzNSAxNy41IDM1QzI3LjE1IDM1IDM1IDI3LjE1IDM1IDE3LjVDMzUgNy44NTEgMjcuMTUgMCAxNy41IDBaTTEuNDM4IDE3LjVDMS40MzggMTYuMzI3IDEuNTcyIDE1LjE4NiAxLjgxMyAxNC4wODNMNC40OTkgMjAuNjZDNC42MDYgMjAuOTIyIDQuODU4IDIxLjA5NiA1LjE0MSAyMS4xMDVMOC4xMjYgMjEuMjA3TDExLjA1NyAyNi4wMTFMOS4wNTQgMjcuNzQ4QzguODYxIDI3LjkxNiA4Ljc3IDI4LjE3NSA4LjgxOSAyOC40MjVMOS4zNzIgMzEuMzI4QzQuNjMyIDI4LjUzMiAxLjQzOCAyMy4zODkgMS40MzggMTcuNVpNMjcuNDQyIDMwLjA5MUMyNC43MDQgMzIuMjU3IDIxLjI1NCAzMy41NjIgMTcuNSAzMy41NjJDMTUuMTg0IDMzLjU2MiAxMi45ODUgMzMuMDU5IDEwLjk5NCAzMi4xNzJMMTAuMzA4IDI4LjU2NEwxMi40NTggMjYuN0MxMi43MjMgMjYuNDcxIDEyLjc4NCAyNi4wODIgMTIuNjAxIDI1Ljc4M0w5LjE1MSAyMC4xMjhDOS4wMjUgMTkuOTIxIDguODAzIDE5Ljc5MSA4LjU2MiAxOS43ODRMNS42NTQgMTkuNjg0TDIuNDcgMTEuODg4QzQuNzUzIDUuNzk1IDEwLjYxOSAxLjQzOCAxNy41IDEuNDM4QzIwLjc1NiAxLjQzOCAyMy43ODUgMi40MTggMjYuMzE5IDQuMDlMMjUuNDEyIDYuMzU0TDIyLjkwMiA2LjM2MkMyMi43MTMgNi4zNjIgMjIuNTMgNi40MzggMjIuMzk2IDYuNTcxTDIwLjU2NSA4LjM5NUMxOS42MzkgNy45MzYgMTguNjAyIDcuNjcgMTcuNTAxIDcuNjdDMTMuNjc0IDcuNjcgMTAuNTYgMTAuNzkzIDEwLjU2IDE0LjYzMUMxMC41NiAxNC42NSAxMC42NTEgMTYuNzMzIDExLjE5OSAxNy43NzFDMTIuNDU5IDIwLjY3MyAxNS41MTcgMjUuNzk3IDE2LjY2NiAyNi45MkMxNi44OCAyNy4xMjEgMTcuMTUgMjcuMzI1IDE3LjUxOCAyNy4zMjVDMTcuOTE2IDI3LjMyNSAxOC4xODUgMjcuMDggMTguMzUzIDI2LjkyNUMxOC43OCAyNi40OTggMTkuNDYzIDI1LjUzMSAyMC4yMTcgMjQuMzQxSDI0LjM4N0wyNy40NDMgMjcuNjQxVjMwLjA5MUgyNy40NDJaTTE3LjUwOSAyNS43MjJDMTYuNDUxIDI0LjUwNiAxMy43MDYgMTkuOTM4IDEyLjQ5NCAxNy4xNTJDMTIuMTU1IDE2LjUwNiAxMi4wMDUgMTQuOTE5IDExLjk5OCAxNC42MzNDMTEuOTk4IDExLjU4OCAxNC40NjYgOS4xMSAxNy41IDkuMTFDMjAuNTMzIDkuMTEgMjMuMDAxIDExLjU4OCAyMy4wMDEgMTQuNjMyQzIzLjAwMSAxNC42NDYgMjIuOTgxIDE2LjE0NCAyMi41MDQgMTcuMTU4QzIxLjMzMyAxOS44NzUgMTguNTczIDI0LjQ3OSAxNy41MDkgMjUuNzIyWk0yOC44ODEgMjguODJWMjcuMzYxQzI4Ljg4MSAyNy4xNzkgMjguODEzIDI3LjAwNSAyOC42OSAyNi44NzJMMjUuMjMxIDIzLjEzNUMyNS4wOTQgMjIuOTg4IDI0LjkwMyAyMi45MDUgMjQuNzAzIDIyLjkwNUgyMS4wOTlDMjIuMTUzIDIxLjEzMSAyMy4yMDggMTkuMTYgMjMuODE2IDE3Ljc1QzI0LjQzMyAxNi40MzkgMjQuNDQgMTQuNjUxIDI0LjQ0IDE0LjYzM0MyNC40NCAxMi40MjggMjMuNDExIDEwLjQ2MyAyMS44MTEgOS4xODZMMjMuMjAzIDcuODAxTDI1LjkwMyA3Ljc5MkMyNi4xOTggNy43OTEgMjYuNDYxIDcuNjEyIDI2LjU2OSA3LjM0TDI3LjUxOCA0Ljk2NkMzMS4xOTcgNy45MTIgMzMuNTYyIDEyLjQzMiAzMy41NjIgMTcuNUMzMy41NjIgMjEuOTEzIDMxLjc3MSAyNS45MTUgMjguODgxIDI4LjgyWiIgZmlsbD0iIzNFNTI3MSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "54af":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+DQoNCiAgICA8c3ltYm9sIGlkPSJwdXBpbCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgICAgICA8cGF0aCBkPSJNMTEuNDA4IDYwLjYwOUMxMC4zNTQgNjAuNjA5IDkuMjQ4OTkgNjAuNTMxIDguMDk0OTkgNjAuMzc1QzcuNTE4OTkgNjAuMjk3IDcuMDE4OTkgNTkuOTM3IDYuNzYwOTkgNTkuNDE2QzYuNTAzOTkgNTguODk0IDYuNTIxOTkgNTguMjc4IDYuODA5OTkgNTcuNzczQzEwLjA2OSA1Mi4wNjIgOC42OTI5OSA0Ny45NiA3LjM2Mjk5IDQzLjk5MkM2LjI1Mzk5IDQwLjY4NiA1LjEwNzk5IDM3LjI2OCA2LjkzMDk5IDMzLjQ5QzEwLjgwNCAyNS40NjggMTguOTg4IDI1LjcwMiAyMi40NDYgMjUuODdMMjEuNTk0IDI5LjM3NkMxOC4yNzQgMjkuMjIgMTIuOTQ4IDI5LjA3NiAxMC4wODMgMzUuMDEyQzguODc4OTkgMzcuNTA3IDkuNjczOTkgMzkuODc3IDEwLjY4MSA0Mi44NzlDMTEuOTQyIDQ2LjY0MSAxMy40NzYgNTEuMjE0IDExLjAzNSA1Ny4xMDZDMTQuMTc4IDU3LjEzOSAxNi43MTEgNTYuNDE3IDE4LjU2MiA1NC44NkMyMi41MDkgNTEuNTM4IDIyLjc0MyA0NS4yMTggMjIuODQyIDQyLjUyTDI2LjM0IDQyLjY0OUMyNi4yMjMgNDUuODExIDI1Ljk0OSA1My4yMTcgMjAuODE1IDU3LjUzOEMxOC4zODYgNTkuNTgxIDE1LjIzIDYwLjYwOSAxMS40MDggNjAuNjA5WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgIDxwYXRoIGQ9Ik04OC41OTIgNjAuNjQ2Qzg5LjY0NiA2MC42NDYgOTAuNzUxIDYwLjU2OCA5MS45MDUgNjAuNDEyQzkyLjQ4MSA2MC4zMzQgOTIuOTgxIDU5Ljk3NCA5My4yMzkgNTkuNDUzQzkzLjQ5NiA1OC45MzEgOTMuNDc4IDU4LjMxNSA5My4xOSA1Ny44MUM4OS45MzEgNTIuMDk5IDkxLjMwNyA0Ny45OTcgOTIuNjM3IDQ0LjAyOUM5My43NDYgNDAuNzIzIDk0Ljg5MiAzNy4zMDUgOTMuMDY5IDMzLjUyN0M4OS4xOTYgMjUuNTA1IDgxLjAxMiAyNS43MzkgNzcuNTU0IDI1LjkwN0w3OC40MDYgMjkuNDEzQzgxLjcyNiAyOS4yNTcgODcuMDUyIDI5LjExMyA4OS45MTcgMzUuMDQ5QzkxLjEyMSAzNy41NDQgOTAuMzI2IDM5LjkxNCA4OS4zMTkgNDIuOTE2Qzg4LjA1OCA0Ni42NzggODYuNTI0IDUxLjI1MSA4OC45NjUgNTcuMTQzQzg1LjgyMiA1Ny4xNzYgODMuMjg5IDU2LjQ1NCA4MS40MzggNTQuODk3Qzc3LjQ5MSA1MS41NzUgNzcuMjU3IDQ1LjI1NSA3Ny4xNTggNDIuNTU3TDczLjY2IDQyLjY4NkM3My43NzcgNDUuODQ4IDc0LjA1MSA1My4yNTQgNzkuMTg1IDU3LjU3NUM4MS42MTQgNTkuNjE4IDg0Ljc3IDYwLjY0NiA4OC41OTIgNjAuNjQ2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgIDxwYXRoIGQ9Ik04NS40NDcgMzQuMjQ2Qzg1LjQ0NyAyOS44MiA4Mi4wMDcgMjYuMTkgNzcuNjYgMjUuODdDNzcuNjczIDI2LjIwNiA3Ny42ODUgMjYuNTQyIDc3LjY4NSAyNi44ODFDNzcuNjg2IDEyLjA1OSA2NS42MjYgMCA1MC44MDMgMEg0OS4zMDFDMzQuNDc5IDAgMjIuNDIgMTIuMDU5IDIyLjQyIDI2Ljg4MUMyMi40MiAyNi41NDIgMjIuNDMzIDI2LjIwNiAyMi40NDUgMjUuODdDMTguMDk4IDI2LjE5IDE0LjY1OCAyOS44MiAxNC42NTggMzQuMjQ2QzE0LjY1OCAzOC44MTQgMTguMzIgNDIuNTM2IDIyLjg2MSA0Mi42NDZDMjUuMTM5IDU1LjE3NSAzNi4xMjQgNjQuNzA4IDQ5LjMgNjQuNzA4SDUwLjgwMkM2My45OCA2NC43MDggNzQuOTY1IDU1LjE3NiA3Ny4yNDMgNDIuNjQ2QzgxLjc4NSA0Mi41MzYgODUuNDQ3IDM4LjgxNCA4NS40NDcgMzQuMjQ2Wk0xOC4xNTggMzQuMjQ2QzE4LjE1OCAzMS43NjIgMjAuMDIxIDI5LjcyNSAyMi40MiAyOS40MDRWMzcuODI3QzIyLjQyIDM4LjI1MiAyMi40MzMgMzguNjc1IDIyLjQ1MiAzOS4wOTVDMjAuMDM4IDM4Ljc4OCAxOC4xNTggMzYuNzQzIDE4LjE1OCAzNC4yNDZaTTIyLjU5OCA0MC44NzlDMjIuNiA0MC44ODkgMjIuNjAxIDQwLjg5OSAyMi42MDIgNDAuOTA3QzIyLjYwMSA0MC44OTggMjIuNiA0MC44ODkgMjIuNTk4IDQwLjg3OVpNNzQuMTg2IDM3LjgyN0M3NC4xODYgNTAuNzIgNjMuNjk3IDYxLjIwOCA1MC44MDMgNjEuMjA4SDQ5LjMwMUMzNi40MDggNjEuMjA4IDI1LjkyIDUwLjcyIDI1LjkyIDM3LjgyN1YyNi44ODFDMjUuOTIgMTMuOTg4IDM2LjQwOCAzLjUgNDkuMzAxIDMuNUg1MC44MDNDNjMuNjk3IDMuNSA3NC4xODYgMTMuOTg4IDc0LjE4NiAyNi44ODFWMzcuODI3Wk03Ny41MDggNDAuODc5Qzc3LjUwNiA0MC44ODkgNzcuNTA1IDQwLjg5OSA3Ny41MDQgNDAuOTA3Qzc3LjUwNSA0MC44OTggNzcuNTA2IDQwLjg4OSA3Ny41MDggNDAuODc5Wk03Ny42NTMgMzkuMDk1Qzc3LjY3MyAzOC42NzUgNzcuNjg1IDM4LjI1MiA3Ny42ODUgMzcuODI3VjI5LjQwNEM4MC4wODMgMjkuNzI0IDgxLjk0NyAzMS43NjEgODEuOTQ3IDM0LjI0NkM4MS45NDcgMzYuNzQzIDgwLjA2NyAzOC43ODggNzcuNjUzIDM5LjA5NVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICA8cGF0aCBkPSJNMzcuODU0IDM3LjI5NEMzOS41MTA5IDM3LjI5NCA0MC44NTQgMzUuOTUwOSA0MC44NTQgMzQuMjk0QzQwLjg1NCAzMi42MzcyIDM5LjUxMDkgMzEuMjk0IDM3Ljg1NCAzMS4yOTRDMzYuMTk3MSAzMS4yOTQgMzQuODU0IDMyLjYzNzIgMzQuODU0IDM0LjI5NEMzNC44NTQgMzUuOTUwOSAzNi4xOTcxIDM3LjI5NCAzNy44NTQgMzcuMjk0WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgIDxwYXRoIGQ9Ik02Mi4yNTIgMzcuMjk0QzYzLjkwODkgMzcuMjk0IDY1LjI1MiAzNS45NTA5IDY1LjI1MiAzNC4yOTRDNjUuMjUyIDMyLjYzNzIgNjMuOTA4OSAzMS4yOTQgNjIuMjUyIDMxLjI5NEM2MC41OTUyIDMxLjI5NCA1OS4yNTIgMzIuNjM3MiA1OS4yNTIgMzQuMjk0QzU5LjI1MiAzNS45NTA5IDYwLjU5NTIgMzcuMjk0IDYyLjI1MiAzNy4yOTRaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgPHBhdGggZD0iTTQwLjA3IDYwLjY2NlY2Ny42NDZDNDAuMDc2IDY4LjQ5MSAzOS40NDkgNjkuMjA4IDM4LjYxMyA2OS4zMTJMMjMuNjEzIDcxLjE3OUMxNy43MzcgNzEuOTEgMTMuMzQxIDc2LjkyNCAxMy4zODYgODIuODMzVjEwMEgxNi43MlY4Mi44MTlDMTYuNjg5IDc4LjU5MSAxOS44MjkgNzUuMDA3IDI0LjAyOCA3NC40ODVMMzkuMDMgNzIuNjE5QzQxLjU0NCA3Mi4zMDYgNDMuNDI2IDcwLjE1NiA0My40MDUgNjcuNjM0VjYwLjY2Nkg0MC4wN1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICA8cGF0aCBkPSJNNzYuNTA4IDcxLjI2Mkw2MS41MTIgNjkuMzk2QzYwLjY3MyA2OS4yOTEgNjAuMDQ2IDY4LjU3NyA2MC4wNTMgNjcuNzE4VjYwLjY2Nkg1Ni43MThWNjcuNzA1QzU2LjY5OSA3MC4yMzggNTguNTgxIDcyLjM4OCA2MS4wOTcgNzIuNzA1TDc2LjA5NyA3NC41N0M4MC4yOTUgNzUuMDkzIDgzLjQzNyA3OC42NzQgODMuNDAzIDgyLjkxNlYxMDBIODYuNzM2VjgyLjkyOEM4Ni43OCA3Ny4wMDkgODIuMzg0IDcxLjk5IDc2LjUwOCA3MS4yNjJaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgPHBhdGggZD0iTTYyLjg3IDcxLjkyNkw2Mi43ODMgNzIuOTQ3QzYyLjI2MiA3OS41NDMgNTYuNjY4IDg0LjcwOCA1MC4wNTMgODQuNzFDNDMuNDM4IDg0LjcwOCAzNy44NDYgNzkuNTQyIDM3LjMyMSA3Mi45MzlMMzcuMjI4IDcxLjg0NUwzMy45MjkgNzIuMjU1TDM0LjAxIDczLjIxQzM0LjY3IDgxLjUyIDQxLjcxOSA4OC4wMyA1MC4wNTUgODguMDMyQzU4LjM5MyA4OC4wMyA2NS40MzggODEuNTE5IDY2LjA5NiA3My4yMkw2Ni4xNzEgNzIuMzM3TDYyLjg3IDcxLjkyNloiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICA8cGF0aCBkPSJNMjMuMTggMTAwSDI2LjUwMkMyNi41MDIgOTYuMDcgMjkuNTkzIDczLjI1NCAyOS41OTMgNzMuMjU0TDI2LjI4NiA3My41ODRMMjMuMTggMTAwWiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgIDxwYXRoIGQ9Ik03My44MTkgNzMuNTg0TDcwLjUxMiA3My4yNTRDNzAuNTEyIDczLjI1NCA3My42MDMgOTYuMDcgNzMuNjAzIDEwMEg3Ni45MjVMNzMuODE5IDczLjU4NFoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICA8cGF0aCBkPSJNNzYuMDU0IDI5LjM3NkM2Mi4yNDMgMjkuMzc2IDUzLjE2MyAyMS4wNDIgNTAuMDY0IDE3LjQ5NkM0Ni45NiAyMS4wNDEgMzcuODY2IDI5LjM3NiAyNC4wNTQgMjkuMzc2VjI1Ljg3NkMzOS45MzkgMjUuODc2IDQ4LjMwNCAxNC4xNTggNDguNjEgMTMuNzAyQzQ4LjkzNCAxMy4yMTggNDkuNDgxIDEyLjkyNSA1MC4wNjUgMTIuOTI1QzUwLjA2NyAxMi45MjUgNTAuMDY5IDEyLjkyNSA1MC4wNzEgMTIuOTI1QzUwLjY1NiAxMi45MjcgNTEuMjA0IDEzLjIyIDUxLjUyNiAxMy43MDhDNTEuODI5IDE0LjE2IDYwLjE3MSAyNS44NzYgNzYuMDU0IDI1Ljg3NlYyOS4zNzZaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgPHBhdGggZD0iTTYwLjYzNSA0NS45OTVDNTkuODM4IDQ1LjQ0NiA1OC43NDggNDUuNjQ5IDU4LjIwMSA0Ni40NDRDNTguMTA3IDQ2LjU3NCA1NS42NTggNDkuOTA2IDUwLjA1NCA0OS45MzJDNDQuNDUgNDkuOTA2IDQyIDQ2LjU3NCA0MS45MDcgNDYuNDQ0QzQxLjM2IDQ1LjY0OSA0MC4yNyA0NS40NDYgMzkuNDczIDQ1Ljk5NUMzOC42NzcgNDYuNTQzIDM4LjQ3NiA0Ny42MzIgMzkuMDI0IDQ4LjQyOUMzOS4xNjUgNDguNjMyIDQyLjUzOCA1My40MDUgNTAuMDU0IDUzLjQzMkM1Ny41NzEgNTMuNDA1IDYwLjk0NCA0OC42MzIgNjEuMDg0IDQ4LjQyOUM2MS42MzIgNDcuNjMyIDYxLjQzMSA0Ni41NDMgNjAuNjM1IDQ1Ljk5NVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgIDwvc3ltYm9sPg0KDQogICAgPHN5bWJvbCBpZD0iYmFieSIgdmlld0JveD0iMCAwIDEwMCAxMDAiPg0KICAgICAgICA8cGF0aCBkPSJNNDkuNTk1IDBDMzIuNzI1IDAgMTkgMTMuNzI0IDE5IDMwLjU5NlY2OS40MDRDMTkgODYuMjc0IDMyLjcyNSAxMDAgNDkuNTk1IDEwMEM2Ni40NjQgMTAwIDgwLjE5MSA4Ni4yNzQgODAuMTkxIDY5LjQwNFYzMC41OTZDODAuMTkxIDEzLjcyNCA2Ni40NjQgMCA0OS41OTUgMFpNNDkuNTk1IDMuMzgxQzY0LjYwMSAzLjM4MSA3Ni44MSAxNS41ODggNzYuODEgMzAuNTk2VjQyLjI1OUM3NC41MDkgNDYuMjIyIDY3LjUyNyA1NS4wMTYgNDkuNjAzIDU4Ljg5NUMzMS42NCA1NS4wMDggMjQuNjY1IDQ2LjE4NSAyMi4zODEgNDIuMjMzVjMwLjU5NkMyMi4zODEgMTUuNTg4IDM0LjU4OSAzLjM4MSA0OS41OTUgMy4zODFaTTQ5LjU5NSA5Ni42MTlDMzQuNTg5IDk2LjYxOSAyMi4zODEgODQuNDExIDIyLjM4MSA2OS40MDNWNDguMzI5QzMzLjg2NSA2MS45ODggNTYuNjIyIDY0LjIzNSA3MC4yOTYgNjQuMjM1QzcyLjgxOSA2NC4yMzUgNzUuMDMyIDY0LjE1OSA3Ni44MSA2NC4wNjRWNjkuNDA0Qzc2LjgxIDg0LjQxMiA2NC42MDEgOTYuNjE5IDQ5LjU5NSA5Ni42MTlaTTc2LjgxIDYwLjU1NUM2OS42MDEgNjAuOTc5IDYzLjI5NCA2MC44MTEgNTcuNzk4IDYwLjIxQzY1LjEyNCA1Ny44MjQgNzEuOTY0IDU0LjA5NCA3Ni44MSA0OC4zNFY2MC41NTVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NS43MDIgMjAuNzE4QzYyLjg5NDcgMTUuNjc3OCA1OC4wODU3IDEyLjA0OTcgNTIuNDQ2MSAxMS4xMjM4TDU0LjU4MiA4Ljk4OEM1NS4yNjYgOC4zMDQgNTUuMjY2IDcuMTk3IDU0LjU4MiA2LjUxM0M1My44OTggNS44MjkgNTIuNzkxIDUuODI5IDUyLjEwNyA2LjUxM0w0OS4zNDUgOS4yNzZMNDYuNTgzIDYuNTEzQzQ1LjkgNS44MjkgNDQuNzkyIDUuODI5IDQ0LjEwOCA2LjUxM0M0My40MjQgNy4xOTcgNDMuNDI0IDguMzA0IDQ0LjEwOCA4Ljk4OEw0Ni4zMTg5IDExLjE5ODlDNDAuODYyMyAxMi4yMzM0IDM2LjIyMzUgMTUuODA0OCAzMy40ODcgMjAuNzE4QzMzLjIyMiAyMC42OSAzMi45NTMgMjAuNjcxIDMyLjY4IDIwLjY3MUMyOC42NzkgMjAuNjcxIDI1LjQyMyAyMy45MjcgMjUuNDIzIDI3LjkyOEMyNS40MjMgMzEuNDQ2IDI3LjkzOCAzNC4zODUgMzEuMjY0IDM1LjA0NkMzMy4wNjIgNDQuMDg2IDQwLjU5NSA1MC44OTIgNDkuNTk1IDUwLjg5MkM1OC41OTUgNTAuODkyIDY2LjEyOCA0NC4wODYgNjcuOTI1IDM1LjA0NkM3MS4yNTEgMzQuMzg0IDczLjc2NyAzMS40NDUgNzMuNzY3IDI3LjkyOEM3My43NjcgMjMuOTI3IDcwLjUxMSAyMC42NzEgNjYuNTA3IDIwLjY3MUM2Ni4yMzYgMjAuNjcxIDY1Ljk2OCAyMC42OSA2NS43MDIgMjAuNzE4Wk02OC4zMjIgMzEuMjQ4QzY3Ljc3OSAzMS41NDYgNjcuMTY4IDMxLjcyOSA2Ni41MDggMzEuNzI5QzY1LjkxNiAzMS43MjkgNjUuMzYyIDMxLjU4MSA2NC44NjIgMzEuMzM3QzY0LjgzMSAzMi41NTUgNjQuNjc2IDMzLjczNiA2NC40MTcgMzQuODc1QzYyLjc2MyA0Mi4wNzUgNTYuNzU1IDQ3LjQzNCA0OS41OTcgNDcuNDM0QzQyLjQzOSA0Ny40MzQgMzYuNDMxIDQyLjA3NiAzNC43NzcgMzQuODc0QzM0LjUxNiAzMy43MzYgMzQuMzYxIDMyLjU1NSAzNC4zMzEgMzEuMzM2QzMzLjgzIDMxLjU4IDMzLjI3NSAzMS43MjkgMzIuNjgyIDMxLjcyOUMzMi4wMjMgMzEuNzI5IDMxLjQxMSAzMS41NDUgMzAuODcgMzEuMjQ5QzI5LjY5MiAzMC42MDMgMjguODgxIDI5LjM2NSAyOC44ODEgMjcuOTI4QzI4Ljg4MSAyNi4wODIgMzAuMjA2IDI0LjU0MSAzMS45NTUgMjQuMjAxQzMyLjE5IDI0LjE1NSAzMi40MzIgMjQuMTI4IDMyLjY4MSAyNC4xMjhDMzMuNjg1IDI0LjEyOCAzNC41OTMgMjQuNTI1IDM1LjI3NCAyNS4xNjRDMzUuNjY1IDI0LjAyMyAzNi4xNjIgMjIuOTM5IDM2Ljc2NCAyMS45MzNDMzkuNDkgMTcuMzc2IDQ0LjIxOSAxNC4zNDkgNDkuNTk2IDE0LjM0OUM1NC45NzIgMTQuMzQ5IDU5LjcwMSAxNy4zNzYgNjIuNDI4IDIxLjkzM0M2My4wMyAyMi45NCA2My41MjggMjQuMDIzIDYzLjkxOCAyNS4xNjNDNjQuNTk4IDI0LjUyNSA2NS41MDYgMjQuMTI4IDY2LjUwOCAyNC4xMjhDNjYuNzU4IDI0LjEyOCA2NyAyNC4xNTUgNjcuMjM3IDI0LjIwMUM2OC45ODcgMjQuNTQyIDcwLjMxMSAyNi4wODIgNzAuMzExIDI3LjkyOEM3MC4zMSAyOS4zNjUgNjkuNDk5IDMwLjYwMyA2OC4zMjIgMzEuMjQ4Wk00Mi42MTggMjkuNjEyQzQzLjcyMjUgMjkuNjEyIDQ0LjYxOCAyOC43MTY2IDQ0LjYxOCAyNy42MTJDNDQuNjE4IDI2LjUwNzQgNDMuNzIyNSAyNS42MTIgNDIuNjE4IDI1LjYxMkM0MS41MTM0IDI1LjYxMiA0MC42MTggMjYuNTA3NCA0MC42MTggMjcuNjEyQzQwLjYxOCAyOC43MTY2IDQxLjUxMzQgMjkuNjEyIDQyLjYxOCAyOS42MTJaTTU2LjU3MiAyOS42MTJDNTcuNjc2NSAyOS42MTIgNTguNTcyIDI4LjcxNjYgNTguNTcyIDI3LjYxMkM1OC41NzIgMjYuNTA3NCA1Ny42NzY1IDI1LjYxMiA1Ni41NzIgMjUuNjEyQzU1LjQ2NzQgMjUuNjEyIDU0LjU3MiAyNi41MDc0IDU0LjU3MiAyNy42MTJDNTQuNTcyIDI4LjcxNjYgNTUuNDY3NCAyOS42MTIgNTYuNTcyIDI5LjYxMloiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICA8cGF0aCBkPSJNNDkuNTk1IDQ5LjE0MkM1My43MzcxIDQ5LjE0MiA1Ny4wOTUgNDUuNzg0MSA1Ny4wOTUgNDEuNjQyQzU3LjA5NSAzNy40OTk4IDUzLjczNzEgMzQuMTQyIDQ5LjU5NSAzNC4xNDJDNDUuNDUyOCAzNC4xNDIgNDIuMDk1IDM3LjQ5OTggNDIuMDk1IDQxLjY0MkM0Mi4wOTUgNDUuNzg0MSA0NS40NTI4IDQ5LjE0MiA0OS41OTUgNDkuMTQyWiIgZmlsbD0id2hpdGUiLz4NCiAgICAgICAgPHBhdGggZD0iTTQ5LjU5NSA1MC44OTJDNDQuNDk0IDUwLjg5MiA0MC4zNDUgNDYuNzQzIDQwLjM0NSA0MS42NDJDNDAuMzQ1IDM2LjU0MSA0NC40OTQgMzIuMzkyIDQ5LjU5NSAzMi4zOTJDNTQuNjk3IDMyLjM5MiA1OC44NDUgMzYuNTQxIDU4Ljg0NSA0MS42NDJDNTguODQ1IDQ2Ljc0MyA1NC42OTcgNTAuODkyIDQ5LjU5NSA1MC44OTJaTTQ5LjU5NSAzNS44OTJDNDYuNDI1IDM1Ljg5MiA0My44NDUgMzguNDcxIDQzLjg0NSA0MS42NDJDNDMuODQ1IDQ0LjgxMyA0Ni40MjUgNDcuMzkyIDQ5LjU5NSA0Ny4zOTJDNTIuNzY1IDQ3LjM5MiA1NS4zNDUgNDQuODEzIDU1LjM0NSA0MS42NDJDNTUuMzQ1IDM4LjQ3MSA1Mi43NjUgMzUuODkyIDQ5LjU5NSAzNS44OTJaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgPHBhdGggZD0iTTQ1Ljc2NzkgNTAuMzk2QzQ1Ljc2NzkgNTIuNTA4IDQ3LjQ4MDkgNTQuMjI0IDQ5LjU5MjkgNTQuMjI0QzUxLjcwNzkgNTQuMjI0IDUzLjQyMjkgNTIuNTA4IDUzLjQyMjkgNTAuMzk2QzUzLjQyMjkgNDguMjgxIDQ5Ljg0NjkgNDEuMjI0IDQ5LjU5MjkgNDEuMjI0QzQ5LjM0MDkgNDEuMjI1IDQ1Ljc2NzkgNDguMjgxIDQ1Ljc2NzkgNTAuMzk2WiIgZmlsbD0id2hpdGUiLz4NCiAgICAgICAgPHBhdGggZD0iTTQ5LjU5MjkgNTUuOTc1QzQ2LjUxODkgNTUuOTc1IDQ0LjAxNzkgNTMuNDczIDQ0LjAxNzkgNTAuMzk3QzQ0LjAxNzkgNDkuOTU5IDQ0LjAxNzkgNDguNjI2IDQ1Ljk5MzkgNDQuMjkyQzQ4LjA4OTkgMzkuNjk1IDQ4LjUyNjkgMzkuNDc2IDQ5LjU5MzkgMzkuNDc2QzUwLjY2MDkgMzkuNDc2IDUxLjA5OTkgMzkuNjk2IDUzLjE5NTkgNDQuMjkyQzU1LjE3NDkgNDguNjI1IDU1LjE3NDkgNDkuOTU5IDU1LjE3NDkgNTAuMzk3QzU1LjE3MjkgNTMuNDczIDUyLjY2ODkgNTUuOTc1IDQ5LjU5MjkgNTUuOTc1Wk00OS41OTQ5IDQ0Ljg0NUM0OC42MjA5IDQ2LjkwMSA0Ny41MTc5IDQ5LjU1MSA0Ny41MTc5IDUwLjM5N0M0Ny41MTc5IDUxLjU0MyA0OC40NDg5IDUyLjQ3NSA0OS41OTI5IDUyLjQ3NUM1MC43Mzg5IDUyLjQ3NSA1MS42NzI5IDUxLjU0MiA1MS42NzI5IDUwLjM5N0M1MS42NzI5IDQ5LjU1IDUwLjU2ODkgNDYuODk5IDQ5LjU5NDkgNDQuODQ1WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgPC9zeW1ib2w+DQoNCiAgICA8c3ltYm9sIGlkPSJ0b2RkbGVyIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+DQogICAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPg0KICAgICAgICAgICAgPHBhdGggZD0iTTc2LjcyNSA2OS43NjFMNjcuOTAzIDY4LjU3MUM2OS4xOSA2Ny42MzcgNzAuNDE1IDY2LjYwMSA3MS41NjMgNjUuNDU0Qzc0LjY4MiA2Mi4zMzQgNzcuMDI0IDU4LjY1MyA3OC40OTkgNTQuNjQ4QzgzLjc3NCA1NC4yNTQgODcuOTQ4IDQ5Ljg0OCA4Ny45NDggNDQuNDc0Qzg3Ljk0OCAzOS43NCA4NC43MDIgMzUuNzU4IDgwLjMyMSAzNC42MVYyOS44MjJDODAuMzIgMTMuMzc4IDY2Ljk0MyAwIDUwLjUgMEMzNC4wNTcgMCAyMC42NzkgMTMuMzc4IDIwLjY3OSAyOS44MjFWMzQuNjA5QzE2LjI5OCAzNS43NTYgMTMuMDUyIDM5LjczOSAxMy4wNTIgNDQuNDczQzEzLjA1MiA0OS44NSAxNy4yMyA1NC4yNTcgMjIuNTA3IDU0LjY0OEMyMi41MDUgNTQuNjQyIDIyLjUwMyA1NC42MzUgMjIuNSA1NC42MjlDMjQuNTcgNjAuMjY1IDI4LjI5IDY1LjExMiAzMy4wNzkgNjguNTcyTDI0LjI5MiA2OS43NkMxOC4yOTcgNzAuNTA0IDEzLjc4MSA3NS42MjQgMTMuNzg2IDgxLjY2MlYxMDBIMTcuMjFWODEuNjZDMTcuMjA3IDc4LjQ5NiAxOC45NDUgNzUuNjkzIDIxLjU2NCA3NC4yMDhDMjIuMzQ2IDc1LjExNSAyMy4zOTggNzUuODg0IDI0LjM5IDc2LjU5OEMyNS40MTcgNzcuMzM4IDI2LjY5OCA3OC4yNTkgMjYuOTM3IDc4LjkwOEMyNy4xNjYgNzkuNTI0IDI2Ljc2MiA4MS4wMzkgMjYuNDM3IDgyLjI1NkMyNS44NDggODQuNDYgMjUuMTgxIDg2Ljk1OCAyNi41NzkgODguNzk5QzI3Ljk1MyA5MC42MDggMzAuNTEyIDkwLjY2IDMyLjc3IDkwLjcwNkMzNC4wNSA5MC43MzIgMzUuNjQ0IDkwLjc2NSAzNi4xNzkgOTEuMTcyQzM2LjcyOSA5MS41ODkgMzcuMjA1IDkzLjEyMSAzNy41ODggOTQuMzUzQzM4LjI1OSA5Ni41MTggMzkuMDIxIDk4Ljk3MSA0MS4xNTUgOTkuNzYxQzQzLjM2NiAxMDAuNTgyIDQ1LjU1MiA5OS4xMzcgNDcuNDgxIDk3Ljg2NUM0OC41MjEgOTcuMTc4IDQ5LjgxNCA5Ni4zMjUgNTAuNDk3IDk2LjMyNUM1MS4xOCA5Ni4zMjUgNTIuNDczIDk3LjE3OSA1My41MTIgOTcuODY1QzU1LjA0OSA5OC44OCA1Ni43NDggMTAwLjAwMiA1OC40OTQgMTAwLjAwMkM1OC45MzkgMTAwLjAwMiA1OS4zODkgOTkuOTI5IDU5Ljg0IDk5Ljc2MkM2MS45NzMgOTguOTcyIDYyLjczNiA5Ni41MTkgNjMuNDA4IDk0LjM1M0M2My43OTEgOTMuMTIzIDY0LjI2NyA5MS41OSA2NC44MTggOTEuMTcyQzY1LjM1MSA5MC43NjcgNjYuOTQ1IDkwLjczNCA2OC4yMjYgOTAuNzA5QzcwLjQ4NCA5MC42NjMgNzMuMDQyIDkwLjYxMSA3NC40MTkgODguODAxQzc1LjgxNSA4Ni45NiA3NS4xNDkgODQuNDYyIDc0LjU2IDgyLjI1OEM3NC4yMzYgODEuMDQxIDczLjgzMSA3OS41MjggNzQuMDYgNzguOTExQzc0LjMgNzguMjYyIDc1LjU4MSA3Ny4zNCA3Ni42MDkgNzYuNTk5Qzc3LjYwMSA3NS44ODMgNzguNjU0IDc1LjExNiA3OS40MzcgNzQuMjA2QzgyLjA1MiA3NS42OSA4My43OTIgNzguNDk1IDgzLjc5MSA4MS42NjNWMTAwSDg3LjIxM1Y4MS42NjRDODcuMjE5IDc1LjYyNCA4Mi43MDMgNzAuNTA2IDc2LjcyNSA2OS43NjFaTTgwLjMyIDQ0LjM5M1YzOC4yNjlDODIuNzUgMzkuMjg1IDg0LjQ2MSA0MS42ODMgODQuNDYxIDQ0LjQ3NEM4NC40NjEgNDcuNTM4IDgyLjM5OSA1MC4xMjYgNzkuNTkgNTAuOTM0QzgwLjA2NiA0OC44MDkgODAuMzIgNDYuNjE5IDgwLjMyIDQ0LjM5M1pNMTYuNTM5IDQ0LjQ3NEMxNi41MzkgNDEuNjgzIDE4LjI1IDM5LjI4NCAyMC42OCAzOC4yNjlWNDQuMzkzQzIwLjY4IDQ2LjY0MiAyMC45NDMgNDguODI5IDIxLjQxNyA1MC45MzVDMTguNjA0IDUwLjEzIDE2LjUzOSA0Ny41NDEgMTYuNTM5IDQ0LjQ3NFpNMjEuODk5IDUyLjgwMUMyMS45MDEgNTIuODA5IDIxLjkwMyA1Mi44MTcgMjEuOTA1IDUyLjgyNEMyMS45MDMgNTIuODE2IDIxLjkwMSA1Mi44MDkgMjEuODk5IDUyLjgwMVpNMjQuMTY2IDQ0LjM5M1YyOS44MjFDMjQuMTY2IDE1LjMgMzUuOTc5IDMuNDg2IDUwLjUgMy40ODZDNjUuMDE5IDMuNDg2IDc2LjgzMyAxNS4yOTkgNzYuODMzIDI5LjgyMVY0NC4zOTJDNzYuODMzIDUxLjM5MyA3NC4wODUgNTcuOTk3IDY5LjA5NyA2Mi45ODhDNjQuMTA3IDY3Ljk3OCA1Ny41MDMgNzAuNzI2IDUwLjUgNzAuNzI2QzM1Ljk3OSA3MC43MjcgMjQuMTY2IDU4LjkxMyAyNC4xNjYgNDQuMzkzWk02MS42MzUgNzIuMDVDNjAuMjU0IDc2LjgzMSA1NS40MiA4MC45MTggNTAuNDk5IDgwLjkxOEM0NS41NzcgODAuOTE4IDQwLjc0NSA3Ni44MjkgMzkuMzY0IDcyLjA0OEM0Mi44MDcgNzMuNDQgNDYuNTY0IDc0LjIxMyA1MC41MDEgNzQuMjEzQzU0LjM3NSA3NC4yMTMgNTguMTM5IDczLjQ2NiA2MS42MzUgNzIuMDVaTTc0LjU3MiA3My43NjlDNzMuMDEzIDc0Ljg5MSA3MS40MDIgNzYuMDUzIDcwLjc5MSA3Ny42OTdDNzAuMTc4IDc5LjM1NCA3MC42OTUgODEuMjg3IDcxLjE5MyA4My4xNTZDNzEuNDk4IDg0LjI5OCA3Mi4wMDcgODYuMjEgNzEuNjQyIDg2LjY5MkM3MS4yODcgODcuMTU4IDY5LjMyNiA4Ny4xOTggNjguMTU2IDg3LjIyMUM2Ni4xODUgODcuMjYgNjQuMTQ2IDg3LjMwMSA2Mi43MDkgODguMzkzQzYxLjI3IDg5LjQ4NyA2MC42NjQgOTEuNDM0IDYwLjA4IDkzLjMxN0M1OS43MzIgOTQuNDMxIDU5LjE1MiA5Ni4yOTcgNTguNjI5IDk2LjQ5MkM1OC4wNyA5Ni42ODMgNTYuNDIgOTUuNjA2IDU1LjQzNCA5NC45NTVDNTMuODU2IDkzLjkxNCA1Mi4yMjUgOTIuODM3IDUwLjQ5NyA5Mi44MzdDNDguNzY4IDkyLjgzNyA0Ny4xMzggOTMuOTE0IDQ1LjU2MSA5NC45NTVDNDQuNTczIDk1LjYwNiA0Mi45MTggOTYuNjg1IDQyLjM2NiA5Ni40OTJDNDEuODQyIDk2LjI5OCA0MS4yNjMgOTQuNDMyIDQwLjkxNyA5My4zMThDNDAuMzMzIDkxLjQzNSAzOS43MjcgODkuNDg3IDM4LjI4OCA4OC4zOTRDMzYuODUxIDg3LjMwMSAzNC44MTMgODcuMjU5IDMyLjg0MiA4Ny4yMkMzMS42NzEgODcuMTk2IDI5LjcxMSA4Ny4xNTYgMjkuMzU2IDg2LjY5MUMyOC45OSA4Ni4yMDkgMjkuNTAxIDg0LjI5NyAyOS44MDYgODMuMTU2QzMwLjMwNiA4MS4yODYgMzAuODIyIDc5LjM1MyAzMC4yMDggNzcuNjk2QzI5LjU5OSA3Ni4wNTEgMjcuOTg3IDc0Ljg5IDI2LjQyOSA3My43NjhDMjYuMTU2IDczLjU3MiAyNS44MTIgNzMuMzIyIDI1LjQ2NSA3My4wNTZMMzUuNzA2IDcxLjY3MkMzNi45NTkgNzguNDg2IDQzLjU1IDg0LjQwNCA1MC41IDg0LjQwNEM1Ny40NTEgODQuNDA0IDY0LjA0MiA3OC40ODYgNjUuMjk2IDcxLjY3M0w3NS41NCA3My4wNTVDNzUuMTkxIDczLjMyMSA3NC44NDYgNzMuNTcyIDc0LjU3MiA3My43NjlaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC41NjcgMzkuOTExQzM2LjM2MTkgMzkuOTExIDM3LjgxNyAzOC40NTU5IDM3LjgxNyAzNi42NjFDMzcuODE3IDM0Ljg2NjEgMzYuMzYxOSAzMy40MTEgMzQuNTY3IDMzLjQxMUMzMi43NzIxIDMzLjQxMSAzMS4zMTcgMzQuODY2MSAzMS4zMTcgMzYuNjYxQzMxLjMxNyAzOC40NTU5IDMyLjc3MjEgMzkuOTExIDM0LjU2NyAzOS45MTFaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ni40MzIgMzkuOTExQzY4LjIyNjkgMzkuOTExIDY5LjY4MiAzOC40NTU5IDY5LjY4MiAzNi42NjFDNjkuNjgyIDM0Ljg2NjEgNjguMjI2OSAzMy40MTEgNjYuNDMyIDMzLjQxMUM2NC42MzcxIDMzLjQxMSA2My4xODIgMzQuODY2MSA2My4xODIgMzYuNjYxQzYzLjE4MiAzOC40NTU5IDY0LjYzNzEgMzkuOTExIDY2LjQzMiAzOS45MTFaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik01MyA0NC41ODdINDhDNDcuMDM0IDQ0LjU4NyA0Ni4yNSA0My44MDQgNDYuMjUgNDIuODM3QzQ2LjI1IDQxLjg3IDQ3LjAzNCA0MS4wODcgNDggNDEuMDg3SDUzQzUzLjk2NyA0MS4wODcgNTQuNzUgNDEuODcgNTQuNzUgNDIuODM3QzU0Ljc1IDQzLjgwNCA1My45NjcgNDQuNTg3IDUzIDQ0LjU4N1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICAgICAgPHBhdGggZD0iTTM4Ljc1IDUwLjcwMlY1Mi40NTJDMzguNzUgNTguMzgxIDQ0LjU3MiA2My4yMDQgNTAuNDk5IDYzLjIwNEM1Ni40MjggNjMuMjA0IDYyLjI1IDU4LjM4MSA2Mi4yNSA1Mi40NTJWNTAuNzAySDM4Ljc1Wk01MC40OTkgNTkuNzA0QzQ3LjEwNCA1OS43MDQgNDMuMjQ4IDU3LjM1OCA0Mi40NjMgNTQuMjAySDQ4Ljc1VjU3LjE3MUg1Mi4yNVY1NC4yMDJINTguNTM3QzU3Ljc1MiA1Ny4zNTggNTMuODk1IDU5LjcwNCA1MC40OTkgNTkuNzA0WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgICAgICA8cGF0aCBkPSJNNDMuNTY3IDI1LjE3MkM0MS41MzcgMjUuMTcyIDM5LjU4OSAyNC4yNzEgMzcuNzc2IDIyLjQ5M0MzNi4wOTIgMjAuODQyIDM1LjMyOCAxOC43NzUgMzUuNTY1IDE2LjUxN0MzNi4zOSA4LjY3MzA0IDQ5LjM0NCAwLjM1NjAzNyA0OS40NzUgMC4yNzMwMzdDNTAuMDQxIC0wLjA4ODk2MzIgNTAuNzY0IC0wLjA5MDk2MzIgNTEuMzM1IDAuMjYyMDM3QzUxLjQ2OCAwLjM0MzAzNyA2NC41MTEgOC41MTEwNCA2NS40MjMgMTYuMzVDNjUuNjg3IDE4LjYwNiA2NC45NDQgMjAuNjgxIDYzLjI4IDIyLjM1MUM2MS40NjQgMjQuMTcxIDU5LjUwMSAyNS4wOTMgNTcuNDQ0IDI1LjA5M0M1NC40MDUgMjUuMDkzIDUyLjAwNSAyMy4wNjUgNTAuNTIzIDIxLjUwN0M0OS4wNDggMjMuMDk2IDQ2LjY0MiAyNS4xNzIgNDMuNTY3IDI1LjE3MlpNNTAuNDI2IDMuODQxMDRDNDYuMzg3IDYuNjE1MDQgMzkuNTA2IDEyLjUxNSAzOS4wNDcgMTYuODgzQzM4LjkyIDE4LjA5MSAzOS4yOTUgMTkuMDc5IDQwLjIyNyAxOS45OTRDNDEuMzYzIDIxLjEwNyA0Mi40ODYgMjEuNjcyIDQzLjU2NyAyMS42NzJDNDUuODUzIDIxLjY3MiA0Ny44NzIgMTkuMjcgNDguODQyIDE4LjExNUM0OC45ODIgMTcuOTQ5IDQ5LjEwMiAxNy44MDYgNDkuMjAxIDE3LjY5NUM0OS41MzEgMTcuMzIzIDUwLjAwMyAxNy4xMSA1MC41IDE3LjEwN0M1MC45NzkgMTcuMDg0IDUxLjQ3MSAxNy4zMTIgNTEuODA0IDE3LjY4QzUxLjkwNCAxNy43OSA1Mi4wMjUgMTcuOTMxIDUyLjE2NyAxOC4wOTVDNTMuMTQyIDE5LjIzMSA1NS4xNzMgMjEuNTkzIDU3LjQ0NCAyMS41OTNDNTguNTM4IDIxLjU5MyA1OS42NjcgMjEuMDE3IDYwLjgwMSAxOS44NzlDNjEuNzIzIDE4Ljk1NCA2Mi4wODYgMTcuOTYyIDYxLjk0NiAxNi43NTVDNjEuNDM5IDEyLjM5IDU0LjQ5NCA2LjU2ODA0IDUwLjQyNiAzLjg0MTA0WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgIDwvZz4NCiAgICAgICAgPGRlZnM+DQogICAgICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4NCiAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD0iNzUiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMpIi8+DQogICAgICAgICAgICA8L2NsaXBQYXRoPg0KICAgICAgICA8L2RlZnM+DQogICAgPC9zeW1ib2w+DQoNCiAgICA8c3ltYm9sIGlkPSJhZHVsdCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPg0KICAgICAgICA8cGF0aCBkPSJNNDMuNCAzMC40NzlDNDMuNCAzMi4zMDEgNDEuOTIyIDMzLjc3OCA0MC4xIDMzLjc3OEMzOC4yNzggMzMuNzc4IDM2LjggMzIuMzAxIDM2LjggMzAuNDc5QzM2LjggMjguNjU2IDM4LjI3OSAyNy4xNzggNDAuMTAxIDI3LjE3OEM0MS45MjMgMjcuMTc4IDQzLjQgMjguNjU2IDQzLjQgMzAuNDc5WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgIDxwYXRoIGQ9Ik02My4yIDMwLjQ3OUM2My4yIDMyLjMwMSA2MS43MjEgMzMuNzc4IDU5LjkgMzMuNzc4QzU4LjA3NyAzMy43NzggNTYuNjAxIDMyLjMwMSA1Ni42MDEgMzAuNDc5QzU2LjYwMSAyOC42NTYgNTguMDc3IDI3LjE3OCA1OS45IDI3LjE3OEM2MS43MjIgMjcuMTc4IDYzLjIgMjguNjU2IDYzLjIgMzAuNDc5WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgIDxwYXRoIGQ9Ik01MCA1My41MzhDNDguMDQ4IDUzLjUzOCA0Ni4xNTkgNTIuNzY3IDQ0LjgxOSA1MS40MjRDNDQuMTM2IDUwLjc0IDQ0LjEzOCA0OS42MzIgNDQuODIyIDQ4Ljk1QzQ1LjUwNyA0OC4yNjcgNDYuNjE1IDQ4LjI2OCA0Ny4yOTggNDguOTUzQzQ3Ljk4NiA0OS42NDMgNDguOTcxIDUwLjAzOCA1MCA1MC4wMzhDNTEuMDI5IDUwLjAzOCA1Mi4wMTUgNDkuNjQyIDUyLjcwMiA0OC45NTNDNTMuMzg1IDQ4LjI2OCA1NC40OTMgNDguMjY3IDU1LjE3OCA0OC45NUM1NS44NjIgNDkuNjMyIDU1Ljg2NCA1MC43NDEgNTUuMTgxIDUxLjQyNEM1My44NDEgNTIuNzY4IDUxLjk1MiA1My41MzggNTAgNTMuNTM4WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgIDxwYXRoIGQ9Ik03NS42NTEgNjkuNzk5TDY0Ljk2IDY4LjUxNEM2My42NTcgNjguMzM3IDYyLjY3MSA2Ny4yMTEgNjIuNjY5IDY1LjkwMVY2Mi42MDdDNjUuODY2IDYwLjM3NCA2OC40ODEgNTcuMjk0IDcwLjEyOCA1My41ODVDNzEuMTA4IDUxLjM3NSA3MS42MDQgNDkuMDI5IDcxLjU5OSA0Ni42MTVWMzYuOTVDNzQuOTU1IDM2LjYxOCA3Ny41ODUgMzMuNzgxIDc3LjU4NSAzMC4zMzlDNzcuNTg1IDI4LjE2MSA3Ni41MTkgMjYuMjQ2IDc0Ljg5NyAyNS4wMzRMNzUuMjA5IDIyLjMyQzc1LjgxNSAxNS41NCA3MS44NTEgOS4yODcgNjUuNTIgNi45MjZDNjIuMDYgMi41OCA1Ni43MzQgMCA1MS4xNjYgMEg1MC41SDQ5LjVINDguODM0QzQzLjI2NiAwIDM3Ljk0IDIuNTggMzQuNDggNi45MjVDMjguMTQ5IDkuMjg1IDI0LjE4NCAxNS41MzggMjQuNzkxIDIyLjMxOUwyNS4xMDQgMjUuMDM0QzIzLjQ4MSAyNi4yNDUgMjIuNDE1IDI4LjE2MSAyMi40MTUgMzAuMzM5QzIyLjQxNSAzMy43ODEgMjUuMDQ2IDM2LjYxOCAyOC40MDEgMzYuOTVWNDUuOTMyQzI4LjM5OSA0OC44MzcgMjkuMTQxIDUxLjcxNSAzMC41NTcgNTQuMjU4TDMxLjE2OCA1NS4zNDlDMzIuNzE5IDU4LjE0IDM0Ljg0MiA2MC40OTUgMzcuMzM0IDYyLjMyMVY2NS44OThDMzcuMzMgNjcuMjEyIDM2LjM0NCA2OC4zMzggMzUuMDQ3IDY4LjUxNUwyNC4zNDYgNjkuOEMxNi45MjYgNzAuNzkyIDExLjMzMiA3Ny4xODUgMTEuMzMyIDg0LjY2N1Y5Mi42NjdWMTAwSDE0LjY2NlY5NC4zMzRIMjYuNjY2VjEwMEgyOS45OThWOTIuNjY2QzI5Ljk5OCA5MS43NDUgMjkuMjUyIDkxIDI4LjMzMiA5MUgxNC42NjdWODQuNjY2QzE0LjY2NyA3OC44NDUgMTkuMDE3IDczLjg3MyAyNC43ODYgNzMuMTA0TDMyLjk4IDcyLjEyMUwzNi4wMjcgODcuOTY2QzM2LjEyNyA4OC41MTggMzYuNDk4IDg4Ljk4MyAzNy4wMTUgODkuMjAyQzM3LjIyNCA4OS4yOTEgMzcuNDQ3IDg5LjMzNSAzNy42NjUgODkuMzM1QzM3Ljk4OSA4OS4zMzUgMzguMzEzIDg5LjIzOSAzOC41OTEgODkuMDU2TDQ4LjI3OSA4My41NjdMNDguMzMyIDgzLjYyN1YxMDBINTEuNjY2VjgzLjYyNEw1MS43MTkgODMuNTYzTDYxLjQwNyA4OS4wNTJDNjEuNjg2IDg5LjIzOCA2Mi4wMTEgODkuMzMzIDYyLjMzMyA4OS4zMzNDNjIuNTU0IDg5LjMzMyA2Mi43NzYgODkuMjg5IDYyLjk4MyA4OS4xOThDNjMuNTAxIDg4Ljk3OSA2My44NzIgODguNTEzIDYzLjk3MSA4Ny45NjJMNjcuMDE5IDcyLjExOEw3NS4yMSA3My4xMDJDODAuOTgxIDczLjg3MiA4NS4zMzEgNzguODQ0IDg1LjMzMSA4NC42NjVWOTFINzEuNjY3QzcwLjc0NSA5MSA2OS45OTkgOTEuNzQ1IDY5Ljk5OSA5Mi42NjZWMTAwSDczLjMzM1Y5NC4zMzRIODUuMzMzVjEwMEg4OC42NjdWOTIuNjY2Vjg0LjY2NkM4OC42NjcgNzcuMTg0IDgzLjA3MyA3MC43OSA3NS42NTEgNjkuNzk5Wk02OC4yNzYgMzQuNTQ3TDYxLjgyIDQ1LjI1MUM2MS41ODIgNDUuNjYzIDYxLjE0MiA0NS45MTggNjAuNjI0IDQ1LjkxOEM2MC4xMDMgNDUuOTA4IDU5Ljc1MiA0NS43MSA1OS40OTUgNDUuMzE4QzU3LjY0MyA0Mi41NzYgNTQuNTYyIDM5LjkzMSA1MS4yNDcgMzkuOTE2SDQ4Ljc1NEM0OC43NDIgMzkuOTE2IDQ4LjczMSAzOS45MTYgNDguNzE5IDM5LjkxNkM0NS4zOTQgMzkuOTE2IDQyLjI5OSA0Mi41NTkgNDAuNDI0IDQ1LjMzM0M0MC4xODEgNDUuNyAzOS43NzYgNDUuOTE4IDM5LjM2OSA0NS45MThIMzkuMzY3QzM4LjkwMyA0NS45MDggMzguNDcxIDQ1LjY1MSAzOC4yNDUgNDUuMjU4TDMxLjcyNCAzNC41NDlWMjUuMjc4QzM1LjgwNyAyMi45ODYgMzguOTA5IDE5LjY2MyA0MC40NTkgMTcuNzY2QzQzLjQ4NyAxOS43ODYgNTEuMzg2IDIzLjg3MiA2OC4yNzYgMjYuMzU4VjM0LjU0N1pNNzEuNTk5IDMzLjU5M1YyNy4wODFDNzMuMTE3IDI3LjM4OCA3NC4yNjEgMjguNzMxIDc0LjI2MSAzMC4zMzhDNzQuMjYxIDMxLjk0MyA3My4xMTYgMzMuMjg3IDcxLjU5OSAzMy41OTNaTTI4LjQwMSAzMy41OTNDMjYuODg0IDMzLjI4NiAyNS43MzkgMzEuOTQzIDI1LjczOSAzMC4zMzhDMjUuNzM5IDI4LjczMSAyNi44ODUgMjcuMzg4IDI4LjQwMSAyNy4wODFWMzMuNTkzWk0yOC4yMzggMjMuMTEyTDI4LjExMiAyMi4wMTlDMjcuNjI4IDE2LjYxNCAzMC44ODMgMTEuNjM1IDM2LjAzMSA5LjkxNEMzNi4zNSA5LjgwOCAzNi42MzEgOS42MDQgMzYuODM0IDkuMzM0QzM5LjY1MiA1LjU3OCA0NC4xMzggMy4zMzQgNDguODM0IDMuMzM0SDQ5LjVINTAuNUg1MS4xNjZDNTUuODYyIDMuMzM0IDYwLjM0OCA1LjU3OCA2My4xNjYgOS4zMzRDNjMuMzY5IDkuNjA1IDYzLjY0OSA5LjgwOCA2My45NjkgOS45MTRDNjkuMTE2IDExLjYzNiA3Mi4zNzIgMTYuNjE0IDcxLjg4OCAyMi4wMTlMNzEuNzQxIDIzLjI5OEM0OC4xNjEgMjAuMjg5IDQxLjQxMiAxNC4xMjcgNDEuMzU5IDE0LjA3NkM0MC45OTIgMTMuNzEzIDQwLjQ3NiAxMy41MjkgMzkuOTY3IDEzLjU3OUMzOS40NTIgMTMuNjI3IDM4Ljk4NSAxMy45IDM4LjY5MSAxNC4zMjVDMzguNjQ2IDE0LjM4OSAzNC4zMjggMjAuNTIxIDI4LjIzOCAyMy4xMTJaTTM0LjA2OSA1My43MjVMMzMuNDU4IDUyLjYzN0MzMi4zMjIgNTAuNTkyIDMxLjcyMiA0OC4yNzIgMzEuNzI0IDQ1LjkzNFY0MC45NTZMMzUuMzU0IDQ2LjkxN0MzNi4xNjYgNDguMzIgMzcuNjc0IDQ5LjIxNSAzOS4zMjggNDkuMjVDMzkuMzMzIDQ5LjI1IDM5LjMzNyA0OS4yNSAzOS4zNCA0OS4yNUM0MC45MDIgNDkuMjUgNDIuMzQ3IDQ4LjQ3MyA0My4xOTggNDcuMTg1QzQ0LjQzOSA0NS4zNDcgNDYuNTAzIDQzLjI1MiA0OC43MjYgNDMuMjUyQzQ4LjczNSA0My4yNTIgNDguNzQxIDQzLjI1MiA0OC43NDkgNDMuMjUySDUxLjI0QzUzLjQ0NyA0My4yNiA1NS41IDQ1LjM1NyA1Ni43MjMgNDcuMTY5QzU3LjU4OCA0OC40NzkgNTkuMDI3IDQ5LjI1MiA2MC41NTEgNDkuMjUyQzYwLjU5IDQ5LjI1MiA2MC42NjYgNDkuMjUgNjAuNjY2IDQ5LjI1QzYyLjMyOSA0OS4yNSA2My44NzggNDguMzU1IDY0LjcxNiA0Ni45MDJMNjguMjc2IDQwLjk5OVY0Ni42MThDNjguMjggNDguNTY3IDY3Ljg4MSA1MC40NTggNjcuMDg5IDUyLjI0QzY0LjEzMSA1OC45MDUgNTcuNTA2IDYzLjIyIDUwLjIxNSA2My4yMzFDNDMuNTE2IDYzLjIyOCAzNy4zMjkgNTkuNTg4IDM0LjA2OSA1My43MjVaTTM4Ljg1NCA4NC44NzVMMzYuMjg1IDcxLjYzNUMzNi42OTEgNzEuNTIxIDM3LjA4MiA3MS4zNzYgMzcuNDQ3IDcxLjE4NEw0Ni4wMzUgODAuOTk4TDM4Ljg1NCA4NC44NzVaTTQ5Ljk5OSA4MC40NjlMMzkuODUzIDY4Ljg3NEM0MC4zNjUgNjcuOTkxIDQwLjY2NSA2Ni45NzcgNDAuNjY3IDY1LjlWNjQuMzM3QzQzLjU5NCA2NS43NjYgNDYuODQ5IDY2LjU1MiA1MC4yMTggNjYuNTUzQzUzLjQyOCA2Ni41NDkgNTYuNTI5IDY1LjgzNiA1OS4zMzUgNjQuNTM2VjY1LjkwM0M1OS4zMzcgNjYuOTc2IDU5LjYzNyA2Ny45ODkgNjAuMTQ3IDY4Ljg2OUw0OS45OTkgODAuNDY5Wk02MS4xNDYgODQuODczTDUzLjk2NiA4MC45OTZMNjIuNTUzIDcxLjE4MkM2Mi45MTggNzEuMzc0IDYzLjMxIDcxLjUxOSA2My43MTYgNzEuNjMzTDYxLjE0NiA4NC44NzNaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICA8L3N5bWJvbD4NCg0KICAgIDxzeW1ib2wgaWQ9Im9sZCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPg0KICAgICAgICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik00Mi45MTEgMzUuMzMzQzQyLjkxMSAzNi43MTMgNDEuNzkyIDM3LjgzMyA0MC40MTEgMzcuODMzQzM5LjAzIDM3LjgzMyAzNy45MTEgMzYuNzEzIDM3LjkxMSAzNS4zMzNDMzcuOTExIDMzLjk1MyAzOS4wMyAzMi44MzMgNDAuNDExIDMyLjgzM0M0MS43OTIgMzIuODMzIDQyLjkxMSAzMy45NTMgNDIuOTExIDM1LjMzM1oiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICAgICAgPHBhdGggZD0iTTUyLjUgODQuMDc1QzUyLjUgODUuNDU1IDUxLjM4MSA4Ni41NzUgNTAuMDAxIDg2LjU3NUM0OC42MiA4Ni41NzUgNDcuNTAxIDg1LjQ1NSA0Ny41MDEgODQuMDc1QzQ3LjUwMSA4Mi42OTUgNDguNjIgODEuNTc1IDUwLjAwMSA4MS41NzVDNTEuMzgxIDgxLjU3NSA1Mi41IDgyLjY5NSA1Mi41IDg0LjA3NVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICAgICAgPHBhdGggZD0iTTUyLjc1IDk0LjgyNUM1Mi43NSA5Ni4yMDUgNTEuNjMxIDk3LjMyNSA1MC4yNTEgOTcuMzI1QzQ4Ljg3IDk3LjMyNSA0Ny43NTEgOTYuMjA1IDQ3Ljc1MSA5NC44MjVDNDcuNzUxIDkzLjQ0NSA0OC44NyA5Mi4zMjUgNTAuMjUxIDkyLjMyNUM1MS42MzEgOTIuMzI1IDUyLjc1IDkzLjQ0NSA1Mi43NSA5NC44MjVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Mi4wODggMzUuMzMzQzYyLjA4OCAzNi43MTMgNjAuOTY5IDM3LjgzMyA1OS41ODggMzcuODMzQzU4LjIwOSAzNy44MzMgNTcuMDg4IDM2LjcxMyA1Ny4wODggMzUuMzMzQzU3LjA4OCAzMy45NTMgNTguMjA5IDMyLjgzMyA1OS41ODggMzIuODMzQzYwLjk2OSAzMi44MzMgNjIuMDg4IDMzLjk1MyA2Mi4wODggMzUuMzMzWiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgICAgICA8cGF0aCBkPSJNNTQuNTMxIDQ2LjQ3OUM1MS42MDcgNDcuNDU1IDQ4LjM5MTEgNDcuNDU1IDQ1LjQ3MTEgNDYuNDc5TDQ0LjM5OSA0OS42OEM0Ni4yMDQgNTAuMjg0IDQ4LjEwMiA1MC41ODUgNTAuMDAxIDUwLjU4NUM1MS44OTcgNTAuNTg1IDUzLjc5MyA1MC4yODMgNTUuNiA0OS42OEw1NC41MzEgNDYuNDc5WiIgZmlsbD0iY3VycmVudENvbG9yIi8+DQogICAgICAgICAgICA8cGF0aCBkPSJNMjYuNTUyIDgxLjU3NVY4Ni4yMDRMMjYuMzc2IDg2LjU1NUMyNC4zIDkwLjcwNyAyMy4yMDIgOTUuMzU4IDIzLjIwMiA5OS45OTlIMjYuNTUyQzI2LjU1MiA5NS44NzQgMjcuNTI3IDkxLjc0MiAyOS4zNzYgODguMDUzTDI5LjcyNiA4Ny4zNUMyOS44NDMgODcuMTE4IDI5LjkwNCA4Ni44NiAyOS45MDQgODYuNlY4MS41NzZIMjYuNTUyVjgxLjU3NVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICAgICAgPHBhdGggZD0iTTczLjYyMyA4Ni41NTVMNzMuNDQ5IDg2LjIwNFY4MS41NzVINzAuMVY4Ni42QzcwLjEgODYuODYgNzAuMTYxIDg3LjExOCA3MC4yNzYgODcuMzVMNzAuNjMgODguMDUzQzcyLjQ3OCA5MS43NDQgNzMuNDUyIDk1Ljg3NCA3My40NSAxMDBINzYuOEM3Ni44MDEgOTUuMzU3IDc1LjcwNSA5MC43MDkgNzMuNjIzIDg2LjU1NVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICAgICAgPHBhdGggZD0iTTU5LjU4OCAyNy4zMzNDNTcuMDg4IDI3LjMzMyA1NC44NTQgMjguNDkxIDUzLjM4NyAzMC4yOThDNTAuMzY4IDI5LjEyNSA0OC4wMjMgMjkuNTEgNDYuNDg1IDMwLjE0N0M0NS4wMTggMjguNDI4IDQyLjg0MiAyNy4zMzMgNDAuNDEzIDI3LjMzM0MzNi4wMDcgMjcuMzMzIDMyLjQyMiAzMC45MjIgMzIuNDIyIDM1LjMzM0MzMi40MjIgMzkuNzQ0IDM2LjAwNyA0My4zMzMgNDAuNDEzIDQzLjMzM0M0NC44MTggNDMuMzMzIDQ4LjQwMyAzOS43NDQgNDguNDAzIDM1LjMzM0M0OC40MDMgMzQuNjEyIDQ4LjI5OSAzMy45MTYgNDguMTE5IDMzLjI1QzQ4Ljk0OSAzMi45ODYgNTAuMTg5IDMyLjg3MiA1MS44MzMgMzMuNDQ1QzUxLjY4NiAzNC4wNTEgNTEuNTk5IDM0LjY4MSA1MS41OTkgMzUuMzMyQzUxLjU5OSAzOS43NDMgNTUuMTg1IDQzLjMzMiA1OS41ODkgNDMuMzMyQzYzLjk5NSA0My4zMzIgNjcuNTgxIDM5Ljc0MyA2Ny41ODEgMzUuMzMyQzY3LjU4MSAzMC45MjEgNjMuOTk0IDI3LjMzMyA1OS41ODggMjcuMzMzWk00MC40MTIgNDAuMTMzQzM3Ljc2OCA0MC4xMzMgMzUuNjE3IDM3Ljk4IDM1LjYxNyAzNS4zMzNDMzUuNjE3IDMyLjY4NiAzNy43NjggMzAuNTMyIDQwLjQxMiAzMC41MzJDNDMuMDU1IDMwLjUzMiA0NS4yMDcgMzIuNjg2IDQ1LjIwNyAzNS4zMzNDNDUuMjA3IDM3Ljk4IDQzLjA1NSA0MC4xMzMgNDAuNDEyIDQwLjEzM1pNNTkuNTg4IDQwLjEzM0M1Ni45NDUgNDAuMTMzIDU0Ljc5NSAzNy45OCA1NC43OTUgMzUuMzMzQzU0Ljc5NSAzMi42ODYgNTYuOTQ1IDMwLjUzMiA1OS41ODggMzAuNTMyQzYyLjIzMyAzMC41MzIgNjQuMzgzIDMyLjY4NiA2NC4zODMgMzUuMzMzQzY0LjM4MyAzNy45OCA2Mi4yMzIgNDAuMTMzIDU5LjU4OCA0MC4xMzNaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik03OS4yMTggNjguNDEzQzgwLjk3MiA2NS4yNiA4MS40NyA2Mi4yMiA4MC42NjggNTkuMzcxQzc5Ljc1NCA1Ni4xMTkgNzcuMzM2IDUzLjgyNiA3NS4yMzggNTIuMzgxQzc2LjE1NCA1MS4yMTQgNzcuMTIzIDQ5LjUwNSA3Ny4yOTMgNDcuMzY2Qzc3LjQ5IDQ0Ljg5IDc2LjYwMiA0Mi40NDIgNzQuNjUyIDQwLjA3M0M3NS44NzUgMzguODY0IDc2LjYzNCAzNy4xODYgNzYuNjM0IDM1LjMzNEM3Ni42MzQgMzMuNzI5IDc2LjA2NCAzMi4yNTQgNzUuMTE2IDMxLjEwMkM3NS41NTkgMjguNjQ2IDc1Ljc0OSAyNC4zNDYgNzUuNzQ5IDIyLjc1Qzc1Ljc1IDkuNzggNjQuNjggMCA1MC4wMDEgMEMzNS4zMjEgMCAyNC4yNTEgOS43OCAyNC4yNTEgMjIuNzVDMjQuMjUxIDI0LjM0NSAyNC40MzkgMjguNjQ3IDI0Ljg4MiAzMS4xMDNDMjMuOTM1IDMyLjI1NCAyMy4zNjUgMzMuNzI4IDIzLjM2NSAzNS4zMzNDMjMuMzY1IDM3LjE4NiAyNC4xMjQgMzguODYzIDI1LjM0NiA0MC4wNzJDMjMuMzk3IDQyLjQ0MSAyMi41MDggNDQuODg5IDIyLjcwNSA0Ny4zNjVDMjIuODc3IDQ5LjUwNCAyMy44NDYgNTEuMjEzIDI0Ljc2IDUyLjM4QzIyLjY2MiA1My44MjUgMjAuMjQ0IDU2LjExOCAxOS4zMyA1OS4zN0MxOC41MyA2Mi4yMTkgMTkuMDI5IDY1LjI2IDIwLjc4MSA2OC40MTNDMTYuNTQgNzEuNDY3IDEzLjM3NSA3Ni4yNDkgMTMuMzc3IDgxLjFWMTAwSDE2LjcwN1Y4MS4xQzE2LjcwNSA3NS4yMzIgMjMuMDg4IDY5LjI1NCAyOC45MDMgNjguNTJMMzAuMDU1IDY4LjM0OEMzMC43ODQgNzMuMjUgMzIuNzM4IDc2LjQ4IDM1LjkwNSA3Ny45MTFDMzcuMTU0IDc4LjQ3NiAzOC40ODUgNzguNzAzIDM5LjgyIDc4LjcwM0M0My45NjYgNzguNzAzIDQ4LjEzOCA3Ni41MTIgNDkuOTk4IDc1LjM5M0M1MS44NTkgNzYuNTExIDU2LjAzMSA3OC43MDMgNjAuMTc3IDc4LjcwM0M2MS41MTEgNzguNzAzIDYyLjg0MyA3OC40NzUgNjQuMDkxIDc3LjkxMUM2Ny4yNTcgNzYuNDc5IDY5LjIxMyA3My4yNSA2OS45NDIgNjguMzQ5TDcxLjA5NyA2OC41MjJDNzYuOTExIDY5LjI1NCA4My4yOTQgNzUuMjMyIDgzLjI5MiA4MS4xVjEwMEg4Ni42MjJWODEuMUM4Ni42MjQgNzYuMjQ4IDgzLjQ2MSA3MS40NjcgNzkuMjE4IDY4LjQxM1pNNzMuMzA1IDM1LjMzM0M3My4zMDUgMzcuMTcxIDcxLjgxMyAzOC42NjYgNjkuOTc3IDM4LjY2Nkg2OS4zMDhMNjkuNzE1IDMySDY5Ljk3N0M3MS44MTIgMzIgNzMuMzA1IDMzLjQ5NSA3My4zMDUgMzUuMzMzWk01MC4wMDEgMy41QzYyLjY4NCAzLjUgNzIuMjUgMTEuNzc2IDcyLjI1IDIyLjc1QzcyLjI1IDI0LjEzMiA3Mi4xMTggMjYuODgxIDcxLjg5IDI4Ljk1QzcxLjI4NCAyOC43NjggNzAuNjQyIDI4LjY2NyA2OS45NzcgMjguNjY3SDY5Ljk3M1YyNS45MTZDNjkuOTczIDIxLjMyOCA2Ni4yNDEgMTcuNTk0IDYxLjY1MSAxNy41OTRINTguMzIxQzU3Ljc3IDE3LjU5NCA1Ny4yNTUgMTcuODY3IDU2Ljk0NiAxOC4zMjNMNTYuMzcyIDE5LjE2N0M1NC45NDYgMjEuMzA0IDUyLjU2MyAyMi41ODQgNTAuMDA0IDIyLjU4N0M0Ny40MzggMjIuNTg0IDQ1LjA1MyAyMS4zMDYgNDMuNjIxIDE5LjE1NUw0My4wNTcgMTguMzIyQzQyLjc0NiAxNy44NjYgNDIuMjMxIDE3LjU5MyA0MS42OCAxNy41OTNIMzguMzVDMzMuNzYyIDE3LjU5MyAzMC4wMyAyMS4zMjYgMzAuMDMgMjUuOTE1VjI3Ljc4NEwzMC4wMjkgMjguNjY2SDMwLjAyNkMyOS4zNiAyOC42NjYgMjguNzE4IDI4Ljc2NyAyOC4xMTIgMjguOTVDMjcuODg0IDI2Ljg4MSAyNy43NTMgMjQuMTMyIDI3Ljc1MyAyMi43NUMyNy43NTEgMTEuNzc2IDM3LjMxNSAzLjUgNTAuMDAxIDMuNVpNNTAuMDI4IDcwLjgyMkM0Ni4yODcgNzAuODIyIDQzLjEzIDY5LjUzNSA0MC4wMzUgNjYuNzQ3QzQxLjk4MyA2Ni4wNCA0My4zNDMgNjQuMTc4IDQzLjMyNyA2Mi4wMzNWNTkuNzg1QzQ1LjQwNyA2MC41NiA0Ny42NSA2MSA1MCA2MUM1Mi4zNTEgNjEgNTQuNTk1IDYwLjU2IDU2LjY3NiA1OS43ODRWNjIuMDIxQzU2LjY1OSA2NC4xODggNTguMDM1IDY2LjA2NiA2MC4wMDQgNjYuNzYzQzU2Ljg5NyA2OS41NzQgNTMuODEyIDcwLjgyMiA1MC4wMjggNzAuODIyWk01MCA1Ny42NjZDNDEuNTUgNTcuNjY2IDM0LjYzOCA1MS4wNDUgMzQuMjY2IDQyLjU2NUwzMy4zNTcgMjguNjc3VjI1LjkxNkMzMy4zNTcgMjMuMTYzIDM1LjU5NyAyMC45MjMgMzguMzQ5IDIwLjkyM0g0MC43OThMNDAuODU3IDIxLjAxMkM0Mi44OTggMjQuMDc4IDQ2LjMxNCAyNS45MTEgNTAuMDAyIDI1LjkxNkM1My42ODMgMjUuOTExIDU3LjA5NyAyNC4wNzcgNTkuMTMyIDIxLjAyNkw1OS4yIDIwLjkyM0g2MS42NDlDNjQuNDAzIDIwLjkyMyA2Ni42NDMgMjMuMTYzIDY2LjY0MyAyNS45MTZWMjguNjc3TDY1LjczMyA0Mi41OTRDNjUuMzYxIDUxLjA0NSA1OC40NDkgNTcuNjY2IDUwIDU3LjY2NlpNMzAuMDI0IDMySDMwLjI4NkwzMC42OTMgMzguNjY3SDMwLjAyNUMyOC4xODggMzguNjY3IDI2LjY5NSAzNy4xNzIgMjYuNjk1IDM1LjMzNEMyNi42OTQgMzMuNDk1IDI4LjE4OCAzMiAzMC4wMjQgMzJaTTI4LjQ4NiA2NS4yMTNDMjYuOTAzIDY1LjQxMyAyNS4zMTcgNjUuOTE2IDIzLjc5NCA2Ni42MzVDMjIuNTQyIDY0LjM0NyAyMi4xNjYgNjIuMjIyIDIyLjcgNjAuMzE5QzIzLjU3MyA1Ny4yMTQgMjYuNjIyIDU1LjIwNiAyOC4zNiA1NC4yODZDMjguODg1IDU0LjAwNyAyOS4yMzEgNTMuNDc2IDI5LjI4IDUyLjg4NEMyOS4zMzEgNTIuMjkgMjkuMDcxIDUxLjcwOCAyOC41OTggNTEuMzQ1QzI4LjU3NyA1MS4zMjggMjYuMzgxIDQ5LjYxMyAyNi4xOTQgNDcuMDZDMjYuMDY5IDQ1LjM4IDI2Ljg0NSA0My42MTcgMjguNDc2IDQxLjgxMkMyOC45NzUgNDEuOTMgMjkuNDkxIDQyIDMwLjAyNCA0MkgzMC44OTZMMzAuOTQxIDQyLjc0QzMxLjIzMSA0OS4zMDggMzQuNzg4IDU0Ljk0OSAzOS45OTcgNTguMTZWNjIuMDQ3QzQwLjAwMiA2Mi44OTIgMzkuMzc2IDYzLjYwOSAzOC41NDIgNjMuNzEzTDI4LjQ4NiA2NS4yMTNaTTM3LjM0MiA3NC43MkMzNS4zMyA3My44MDggMzQuMDQ5IDcxLjQ4MSAzMy41MSA2Ny44MzJMMzUuODAyIDY3LjQ5QzM4Ljg2NCA3MC44MDQgNDIuMDQgNzIuODU2IDQ1LjU2MiA3My43NjZDNDIuOTg2IDc0LjkwNyAzOS43MTggNzUuNzk3IDM3LjM0MiA3NC43MlpNNjIuNjU2IDc0LjcyQzYwLjI4NCA3NS43OTYgNTcuMDI1IDc0LjkxMiA1NC40NTMgNzMuNzc2QzU3Ljk4MSA3Mi44NzIgNjEuMTY3IDcwLjgyIDY0LjI0NSA2Ny41TDY2LjQ4OCA2Ny44MzRDNjUuOTQ4IDcxLjQ4IDY0LjY2OCA3My44MDggNjIuNjU2IDc0LjcyWk03Ni4yMDUgNjYuNjM1Qzc0LjY4MSA2NS45MTYgNzMuMDk0IDY1LjQxMiA3MS41MSA2NS4yMTNMNjEuNDU5IDYzLjcxM0M2MC42MjMgNjMuNjA5IDU5Ljk5OCA2Mi44OTIgNjAuMDA0IDYyLjAzM1Y1OC4xNjJDNjUuMjEzIDU0Ljk1MyA2OC43NyA0OS4zMTkgNjkuMDU3IDQyLjc2OEw2OS4xMDQgNDJINjkuOTc3QzcwLjUxIDQyIDcxLjAyNiA0MS45MyA3MS41MjMgNDEuODExQzczLjE1NyA0My42MTUgNzMuOTMyIDQ1LjM3OSA3My44MDcgNDcuMDU5QzczLjYxOCA0OS42MTIgNzEuNDIyIDUxLjMyOCA3MS40MDkgNTEuMzM4QzcwLjkzIDUxLjY5NyA3MC42NjcgNTIuMjc3IDcwLjcxNCA1Mi44NzVDNzAuNzYxIDUzLjQ3MyA3MS4xMSA1NC4wMDQgNzEuNjQyIDU0LjI4NUM3My4zOCA1NS4yMDUgNzYuNDI3IDU3LjIxMyA3Ny4zIDYwLjMxOEM3Ny44MzMgNjIuMjIyIDc3LjQ1OSA2NC4zNDcgNzYuMjA1IDY2LjYzNVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPg0KICAgICAgICA8L2c+DQogICAgICAgIDxkZWZzPg0KICAgICAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMCI+DQogICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIi8+DQogICAgICAgICAgICA8L2NsaXBQYXRoPg0KICAgICAgICA8L2RlZnM+DQogICAgPC9zeW1ib2w+DQoNCg0KDQoNCjwvc3ZnPg0KDQoNCg=="

/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "557f":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZD0iTTQzLjQgMzAuNDc5QzQzLjQgMzIuMzAxIDQxLjkyMiAzMy43NzggNDAuMSAzMy43NzhDMzguMjc4IDMzLjc3OCAzNi44IDMyLjMwMSAzNi44IDMwLjQ3OUMzNi44IDI4LjY1NiAzOC4yNzkgMjcuMTc4IDQwLjEwMSAyNy4xNzhDNDEuOTIzIDI3LjE3OCA0My40IDI4LjY1NiA0My40IDMwLjQ3OVoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8cGF0aCBkPSJNNjMuMiAzMC40NzlDNjMuMiAzMi4zMDEgNjEuNzIxIDMzLjc3OCA1OS45IDMzLjc3OEM1OC4wNzcgMzMuNzc4IDU2LjYwMSAzMi4zMDEgNTYuNjAxIDMwLjQ3OUM1Ni42MDEgMjguNjU2IDU4LjA3NyAyNy4xNzggNTkuOSAyNy4xNzhDNjEuNzIyIDI3LjE3OCA2My4yIDI4LjY1NiA2My4yIDMwLjQ3OVoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8cGF0aCBkPSJNNTAgNTMuNTM4QzQ4LjA0OCA1My41MzggNDYuMTU5IDUyLjc2NyA0NC44MTkgNTEuNDI0QzQ0LjEzNiA1MC43NCA0NC4xMzggNDkuNjMyIDQ0LjgyMiA0OC45NUM0NS41MDcgNDguMjY3IDQ2LjYxNSA0OC4yNjggNDcuMjk4IDQ4Ljk1M0M0Ny45ODYgNDkuNjQzIDQ4Ljk3MSA1MC4wMzggNTAgNTAuMDM4QzUxLjAyOSA1MC4wMzggNTIuMDE1IDQ5LjY0MiA1Mi43MDIgNDguOTUzQzUzLjM4NSA0OC4yNjggNTQuNDkzIDQ4LjI2NyA1NS4xNzggNDguOTVDNTUuODYyIDQ5LjYzMiA1NS44NjQgNTAuNzQxIDU1LjE4MSA1MS40MjRDNTMuODQxIDUyLjc2OCA1MS45NTIgNTMuNTM4IDUwIDUzLjUzOFoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8cGF0aCBkPSJNNzUuNjUxIDY5Ljc5OUw2NC45NiA2OC41MTRDNjMuNjU3IDY4LjMzNyA2Mi42NzEgNjcuMjExIDYyLjY2OSA2NS45MDFWNjIuNjA3QzY1Ljg2NiA2MC4zNzQgNjguNDgxIDU3LjI5NCA3MC4xMjggNTMuNTg1QzcxLjEwOCA1MS4zNzUgNzEuNjA0IDQ5LjAyOSA3MS41OTkgNDYuNjE1VjM2Ljk1Qzc0Ljk1NSAzNi42MTggNzcuNTg1IDMzLjc4MSA3Ny41ODUgMzAuMzM5Qzc3LjU4NSAyOC4xNjEgNzYuNTE5IDI2LjI0NiA3NC44OTcgMjUuMDM0TDc1LjIwOSAyMi4zMkM3NS44MTUgMTUuNTQgNzEuODUxIDkuMjg3IDY1LjUyIDYuOTI2QzYyLjA2IDIuNTggNTYuNzM0IDAgNTEuMTY2IDBINTAuNUg0OS41SDQ4LjgzNEM0My4yNjYgMCAzNy45NCAyLjU4IDM0LjQ4IDYuOTI1QzI4LjE0OSA5LjI4NSAyNC4xODQgMTUuNTM4IDI0Ljc5MSAyMi4zMTlMMjUuMTA0IDI1LjAzNEMyMy40ODEgMjYuMjQ1IDIyLjQxNSAyOC4xNjEgMjIuNDE1IDMwLjMzOUMyMi40MTUgMzMuNzgxIDI1LjA0NiAzNi42MTggMjguNDAxIDM2Ljk1VjQ1LjkzMkMyOC4zOTkgNDguODM3IDI5LjE0MSA1MS43MTUgMzAuNTU3IDU0LjI1OEwzMS4xNjggNTUuMzQ5QzMyLjcxOSA1OC4xNCAzNC44NDIgNjAuNDk1IDM3LjMzNCA2Mi4zMjFWNjUuODk4QzM3LjMzIDY3LjIxMiAzNi4zNDQgNjguMzM4IDM1LjA0NyA2OC41MTVMMjQuMzQ2IDY5LjhDMTYuOTI2IDcwLjc5MiAxMS4zMzIgNzcuMTg1IDExLjMzMiA4NC42NjdWOTIuNjY3VjEwMEgxNC42NjZWOTQuMzM0SDI2LjY2NlYxMDBIMjkuOTk4VjkyLjY2NkMyOS45OTggOTEuNzQ1IDI5LjI1MiA5MSAyOC4zMzIgOTFIMTQuNjY3Vjg0LjY2NkMxNC42NjcgNzguODQ1IDE5LjAxNyA3My44NzMgMjQuNzg2IDczLjEwNEwzMi45OCA3Mi4xMjFMMzYuMDI3IDg3Ljk2NkMzNi4xMjcgODguNTE4IDM2LjQ5OCA4OC45ODMgMzcuMDE1IDg5LjIwMkMzNy4yMjQgODkuMjkxIDM3LjQ0NyA4OS4zMzUgMzcuNjY1IDg5LjMzNUMzNy45ODkgODkuMzM1IDM4LjMxMyA4OS4yMzkgMzguNTkxIDg5LjA1Nkw0OC4yNzkgODMuNTY3TDQ4LjMzMiA4My42MjdWMTAwSDUxLjY2NlY4My42MjRMNTEuNzE5IDgzLjU2M0w2MS40MDcgODkuMDUyQzYxLjY4NiA4OS4yMzggNjIuMDExIDg5LjMzMyA2Mi4zMzMgODkuMzMzQzYyLjU1NCA4OS4zMzMgNjIuNzc2IDg5LjI4OSA2Mi45ODMgODkuMTk4QzYzLjUwMSA4OC45NzkgNjMuODcyIDg4LjUxMyA2My45NzEgODcuOTYyTDY3LjAxOSA3Mi4xMThMNzUuMjEgNzMuMTAyQzgwLjk4MSA3My44NzIgODUuMzMxIDc4Ljg0NCA4NS4zMzEgODQuNjY1VjkxSDcxLjY2N0M3MC43NDUgOTEgNjkuOTk5IDkxLjc0NSA2OS45OTkgOTIuNjY2VjEwMEg3My4zMzNWOTQuMzM0SDg1LjMzM1YxMDBIODguNjY3VjkyLjY2NlY4NC42NjZDODguNjY3IDc3LjE4NCA4My4wNzMgNzAuNzkgNzUuNjUxIDY5Ljc5OVpNNjguMjc2IDM0LjU0N0w2MS44MiA0NS4yNTFDNjEuNTgyIDQ1LjY2MyA2MS4xNDIgNDUuOTE4IDYwLjYyNCA0NS45MThDNjAuMTAzIDQ1LjkwOCA1OS43NTIgNDUuNzEgNTkuNDk1IDQ1LjMxOEM1Ny42NDMgNDIuNTc2IDU0LjU2MiAzOS45MzEgNTEuMjQ3IDM5LjkxNkg0OC43NTRDNDguNzQyIDM5LjkxNiA0OC43MzEgMzkuOTE2IDQ4LjcxOSAzOS45MTZDNDUuMzk0IDM5LjkxNiA0Mi4yOTkgNDIuNTU5IDQwLjQyNCA0NS4zMzNDNDAuMTgxIDQ1LjcgMzkuNzc2IDQ1LjkxOCAzOS4zNjkgNDUuOTE4SDM5LjM2N0MzOC45MDMgNDUuOTA4IDM4LjQ3MSA0NS42NTEgMzguMjQ1IDQ1LjI1OEwzMS43MjQgMzQuNTQ5VjI1LjI3OEMzNS44MDcgMjIuOTg2IDM4LjkwOSAxOS42NjMgNDAuNDU5IDE3Ljc2NkM0My40ODcgMTkuNzg2IDUxLjM4NiAyMy44NzIgNjguMjc2IDI2LjM1OFYzNC41NDdaTTcxLjU5OSAzMy41OTNWMjcuMDgxQzczLjExNyAyNy4zODggNzQuMjYxIDI4LjczMSA3NC4yNjEgMzAuMzM4Qzc0LjI2MSAzMS45NDMgNzMuMTE2IDMzLjI4NyA3MS41OTkgMzMuNTkzWk0yOC40MDEgMzMuNTkzQzI2Ljg4NCAzMy4yODYgMjUuNzM5IDMxLjk0MyAyNS43MzkgMzAuMzM4QzI1LjczOSAyOC43MzEgMjYuODg1IDI3LjM4OCAyOC40MDEgMjcuMDgxVjMzLjU5M1pNMjguMjM4IDIzLjExMkwyOC4xMTIgMjIuMDE5QzI3LjYyOCAxNi42MTQgMzAuODgzIDExLjYzNSAzNi4wMzEgOS45MTRDMzYuMzUgOS44MDggMzYuNjMxIDkuNjA0IDM2LjgzNCA5LjMzNEMzOS42NTIgNS41NzggNDQuMTM4IDMuMzM0IDQ4LjgzNCAzLjMzNEg0OS41SDUwLjVINTEuMTY2QzU1Ljg2MiAzLjMzNCA2MC4zNDggNS41NzggNjMuMTY2IDkuMzM0QzYzLjM2OSA5LjYwNSA2My42NDkgOS44MDggNjMuOTY5IDkuOTE0QzY5LjExNiAxMS42MzYgNzIuMzcyIDE2LjYxNCA3MS44ODggMjIuMDE5TDcxLjc0MSAyMy4yOThDNDguMTYxIDIwLjI4OSA0MS40MTIgMTQuMTI3IDQxLjM1OSAxNC4wNzZDNDAuOTkyIDEzLjcxMyA0MC40NzYgMTMuNTI5IDM5Ljk2NyAxMy41NzlDMzkuNDUyIDEzLjYyNyAzOC45ODUgMTMuOSAzOC42OTEgMTQuMzI1QzM4LjY0NiAxNC4zODkgMzQuMzI4IDIwLjUyMSAyOC4yMzggMjMuMTEyWk0zNC4wNjkgNTMuNzI1TDMzLjQ1OCA1Mi42MzdDMzIuMzIyIDUwLjU5MiAzMS43MjIgNDguMjcyIDMxLjcyNCA0NS45MzRWNDAuOTU2TDM1LjM1NCA0Ni45MTdDMzYuMTY2IDQ4LjMyIDM3LjY3NCA0OS4yMTUgMzkuMzI4IDQ5LjI1QzM5LjMzMyA0OS4yNSAzOS4zMzcgNDkuMjUgMzkuMzQgNDkuMjVDNDAuOTAyIDQ5LjI1IDQyLjM0NyA0OC40NzMgNDMuMTk4IDQ3LjE4NUM0NC40MzkgNDUuMzQ3IDQ2LjUwMyA0My4yNTIgNDguNzI2IDQzLjI1MkM0OC43MzUgNDMuMjUyIDQ4Ljc0MSA0My4yNTIgNDguNzQ5IDQzLjI1Mkg1MS4yNEM1My40NDcgNDMuMjYgNTUuNSA0NS4zNTcgNTYuNzIzIDQ3LjE2OUM1Ny41ODggNDguNDc5IDU5LjAyNyA0OS4yNTIgNjAuNTUxIDQ5LjI1MkM2MC41OSA0OS4yNTIgNjAuNjY2IDQ5LjI1IDYwLjY2NiA0OS4yNUM2Mi4zMjkgNDkuMjUgNjMuODc4IDQ4LjM1NSA2NC43MTYgNDYuOTAyTDY4LjI3NiA0MC45OTlWNDYuNjE4QzY4LjI4IDQ4LjU2NyA2Ny44ODEgNTAuNDU4IDY3LjA4OSA1Mi4yNEM2NC4xMzEgNTguOTA1IDU3LjUwNiA2My4yMiA1MC4yMTUgNjMuMjMxQzQzLjUxNiA2My4yMjggMzcuMzI5IDU5LjU4OCAzNC4wNjkgNTMuNzI1Wk0zOC44NTQgODQuODc1TDM2LjI4NSA3MS42MzVDMzYuNjkxIDcxLjUyMSAzNy4wODIgNzEuMzc2IDM3LjQ0NyA3MS4xODRMNDYuMDM1IDgwLjk5OEwzOC44NTQgODQuODc1Wk00OS45OTkgODAuNDY5TDM5Ljg1MyA2OC44NzRDNDAuMzY1IDY3Ljk5MSA0MC42NjUgNjYuOTc3IDQwLjY2NyA2NS45VjY0LjMzN0M0My41OTQgNjUuNzY2IDQ2Ljg0OSA2Ni41NTIgNTAuMjE4IDY2LjU1M0M1My40MjggNjYuNTQ5IDU2LjUyOSA2NS44MzYgNTkuMzM1IDY0LjUzNlY2NS45MDNDNTkuMzM3IDY2Ljk3NiA1OS42MzcgNjcuOTg5IDYwLjE0NyA2OC44NjlMNDkuOTk5IDgwLjQ2OVpNNjEuMTQ2IDg0Ljg3M0w1My45NjYgODAuOTk2TDYyLjU1MyA3MS4xODJDNjIuOTE4IDcxLjM3NCA2My4zMSA3MS41MTkgNjMuNzE2IDcxLjYzM0w2MS4xNDYgODQuODczWiIgZmlsbD0iIzVDNzA4RSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5889":
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}("undefined"!=typeof self?self:this,function(){return function(t){function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/dist/",i(i.s=0)}([function(t,i,e){"use strict";function o(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function n(t){return Math.max(t.offsetWidth,t.scrollWidth)}function s(t){return Math.max(t.offsetHeight,t.scrollHeight)}function r(t,i,e){for(var o=void 0,n=t.childNodes,s=document.createRange(),r=0;o=n[r],r<n.length;r++)if(3===o.nodeType){s.selectNodeContents(o);var h=s.getBoundingClientRect();if(i>=h.left&&e>=h.top&&i<=h.right&&e<=h.bottom)return o}return!1}function h(){var t=window.getSelection?window.getSelection():document.selection;t&&(t.removeAllRanges?t.removeAllRanges():t.empty&&t.empty())}Object.defineProperty(i,"__esModule",{value:!0});var c=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},l=function(){function t(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(i,e,o){return e&&t(i.prototype,e),o&&t(i,o),i}}(),p=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(o(this,t),!(i.viewport&&i.viewport instanceof Element))return void console.error('"viewport" config property must be present and must be Element');var e={handle:i.viewport,content:i.viewport.children[0],bounce:!0,friction:.05,bounceForce:.1,textSelection:!1,onClick:function(){},shouldScroll:function(){return!0},onUpdate:function(){}};if(this.props=c({},e,i),!this.props.content)return void console.error("Viewport does not have any content");this.viewport={width:this.props.viewport.clientWidth,height:this.props.viewport.clientHeight},this.content={width:n(this.props.content),height:s(this.props.content)},this.position={x:0,y:0},this.velocity={x:0,y:0},this.friction=1-this.props.friction,this.bounceForce=this.props.bounceForce,this.isDragging=!1,this.dragStartPosition={x:0,y:0},this.dragOffsetPosition=c({},this.dragStartPosition),this.dragPosition=c({},this.position),this.isScrollEnabled=!!this.props.emulateScroll,this.isScrolling=!1,this.scrollOffset={x:0,y:0},this.bounce=this.props.bounce,this.textSelection=this.props.textSelection,this.boundX={from:Math.min(-this.content.width+this.viewport.width,0),to:0},this.boundY={from:Math.min(-this.content.height+this.viewport.height,0),to:0},this.mode={x:"x"==this.props.mode,y:"y"==this.props.mode,xy:"x"!==this.props.mode&&"y"!==this.props.mode},this.isRunning=!1,this.rafID=null,this.events={},this.animate(),this.handleEvents()}return l(t,[{key:"run",value:function(){var t=this;this.isRunning=!0,cancelAnimationFrame(this.rafID),this.rafID=requestAnimationFrame(function(){return t.animate()})}},{key:"animate",value:function(){var t=this;this.isRunning&&(this.update(),this.notify(),this.rafID=requestAnimationFrame(function(){return t.animate()}))}},{key:"update",value:function(){this.applyBoundForce(),this.applyDragForce(),this.applyScrollForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.mode.y||(this.position.x+=this.velocity.x),this.mode.x||(this.position.y+=this.velocity.y),this.bounce&&!this.isScrolling||(this.position.x=Math.max(Math.min(this.position.x,this.boundX.to),this.boundX.from),this.position.y=Math.max(Math.min(this.position.y,this.boundY.to),this.boundY.from)),!this.isDragging&&!this.isScrolling&&Math.abs(this.velocity.x)<.1&&Math.abs(this.velocity.y)<.1&&(this.isRunning=!1)}},{key:"applyForce",value:function(t){this.velocity.x+=t.x,this.velocity.y+=t.y}},{key:"applyBoundForce",value:function(){if(this.bounce&&!this.isDragging){var t=this.position.x<this.boundX.from,i=this.position.x>this.boundX.to,e=this.position.y<this.boundY.from,o=this.position.y>this.boundY.to,n={x:0,y:0};if(t||i){var s=t?this.boundX.from:this.boundX.to,r=s-this.position.x,h=r*this.bounceForce,c=this.position.x+(this.velocity.x+h)/(1-this.friction);t&&c<this.boundX.from||i&&c>this.boundX.to||(h=r*this.bounceForce-this.velocity.x),n.x=h}if(e||o){var l=e?this.boundY.from:this.boundY.to,p=l-this.position.y,a=p*this.bounceForce,u=this.position.y+(this.velocity.y+a)/(1-this.friction);e&&u<this.boundY.from||o&&u>this.boundY.to||(a=p*this.bounceForce-this.velocity.y),n.y=a}this.applyForce(n)}}},{key:"applyDragForce",value:function(){if(this.isDragging){var t={x:this.dragPosition.x-this.position.x,y:this.dragPosition.y-this.position.y},i={x:t.x-this.velocity.x,y:t.y-this.velocity.y};this.applyForce(i)}}},{key:"applyScrollForce",value:function(){if(this.isScrolling){var t={x:this.scrollOffset.x-this.velocity.x,y:this.scrollOffset.y-this.velocity.y};this.scrollOffset.x=0,this.scrollOffset.y=0,this.applyForce(t)}}},{key:"setPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.velocity.x=0,this.velocity.y=0,this.position.x=-t.x||0,this.position.y=-t.y||0,this.run()}},{key:"getUpdate",value:function(){return{isRunning:this.isRunning,isDragging:this.isDragging,isScrolling:this.isScrolling,position:{x:-this.position.x,y:-this.position.y},dragOffsetPosition:this.dragOffsetPosition,viewport:c({},this.viewport),content:c({},this.content)}}},{key:"notify",value:function(){this.props.onUpdate(this.getUpdate())}},{key:"updateMetrics",value:function(){this.viewport.width=this.props.viewport.clientWidth,this.viewport.height=this.props.viewport.clientHeight,this.content.width=n(this.props.content),this.content.height=s(this.props.content),this.boundX.from=Math.min(-this.content.width+this.viewport.width,0),this.boundY.from=Math.min(-this.content.height+this.viewport.height,0),this.run()}},{key:"handleEvents",value:function(){var t=this,i=this.props.viewport,e={x:0,y:0},o={x:0,y:0},n=!1,s=function(i){var e=void 0,s=void 0;n?(e=i.touches[0].pageX,s=i.touches[0].pageY):(e=i.pageX,s=i.pageY),t.dragOffsetPosition.x=e-o.x,t.dragOffsetPosition.y=s-o.y,t.dragPosition.x=t.dragStartPosition.x+t.dragOffsetPosition.x,t.dragPosition.y=t.dragStartPosition.y+t.dragOffsetPosition.y,n||i.preventDefault()};this.events.pointerdown=function(c){var l=void 0,p=void 0,a=void 0,u=void 0;n=!(!c.touches||!c.touches[0]),n?(l=c.touches[0].pageX,p=c.touches[0].pageY,a=c.touches[0].clientX,u=c.touches[0].clientY):(l=c.pageX,p=c.pageY,a=c.clientX,u=c.clientY);var d=i.getBoundingClientRect();if(!(a-d.left>=i.clientLeft+i.clientWidth)&&!(u-d.top>=i.clientTop+i.clientHeight)&&t.props.shouldScroll(t.getUpdate(),c)){if(t.textSelection){if(r(c.target,a,u))return;h()}t.isDragging=!0,(e.x||e.y)&&(t.position.x=e.x,t.position.y=e.y,e.x=0,e.y=0),o.x=l,o.y=p,t.dragStartPosition.x=t.position.x,t.dragStartPosition.y=t.position.y,s(c),t.run();var v=void 0,f=void 0;f=function(i){t.isDragging=!1,n?(window.removeEventListener("touchmove",s),window.removeEventListener("touchend",v)):(window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",v))},n?(v=window.addEventListener("touchend",f),window.addEventListener("touchmove",s)):(v=window.addEventListener("mouseup",f),window.addEventListener("mousemove",s))}};var c=null;this.events.wheel=function(i){t.velocity.x=0,t.isScrollEnabled&&(t.isScrolling=!0,t.scrollOffset.x=-i.deltaX,t.scrollOffset.y=-i.deltaY,t.run(),clearTimeout(c),c=setTimeout(function(){return t.isScrolling=!1},80),i.preventDefault())},this.events.scroll=function(i){var o=t.props.viewport.scrollLeft,n=t.props.viewport.scrollTop;Math.abs(t.position.x+o)>3&&(t.position.x=-o,t.velocity.x=0),Math.abs(t.position.y+n)>3&&(t.position.y=-n,t.velocity.y=0),e.x=-t.props.viewport.scrollLeft,e.y=-t.props.viewport.scrollTop},this.events.click=function(i){t.props.onClick(t.getUpdate(),i)},this.events.resize=this.updateMetrics.bind(this),this.props.handle.addEventListener("mousedown",this.events.pointerdown),this.props.handle.addEventListener("touchstart",this.events.pointerdown),this.props.handle.addEventListener("click",this.events.click),this.props.viewport.addEventListener("wheel",this.events.wheel),this.props.viewport.addEventListener("scroll",this.events.scroll),window.addEventListener("resize",this.events.resize)}},{key:"destroy",value:function(){this.props.handle.removeEventListener("mousedown",this.events.pointerdown),this.props.handle.removeEventListener("touchstart",this.events.pointerdown),this.props.handle.removeEventListener("click",this.events.click),this.props.viewport.removeEventListener("wheel",this.events.wheel),this.props.viewport.removeEventListener("scroll",this.events.scroll),window.removeEventListener("resize",this.events.resize)}}]),t}();i.default=p,t.exports=i.default}])});

/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63ab":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNy41IDBDNy44NTEgMCAwIDcuODUxIDAgMTcuNUMwIDI3LjE1IDcuODUxIDM1IDE3LjUgMzVDMjcuMTUgMzUgMzUgMjcuMTUgMzUgMTcuNUMzNSA3Ljg1MSAyNy4xNSAwIDE3LjUgMFpNMTcuNSAxLjQzOEMyNS43NyAxLjQzOCAzMi41OTQgNy43MjEgMzMuNDYzIDE1Ljc2M0gyNi4wNjhDMjUuNzYgMTUuNzYzIDI1LjQ4OCAxNS45NTcgMjUuMzg4IDE2LjI0N0wyMy45NSAyMC40MThMMjIuNTM0IDEzLjc4NkMyMi40NjcgMTMuNDY5IDIyLjE5NSAxMy4yMzcgMjEuODcxIDEzLjIxOEMyMS41NDMgMTMuMjAyIDIxLjI1MSAxMy40MDEgMjEuMTQ5IDEzLjcwOEwxNy4xODUgMjUuNTM4TDE0LjA2OCA2LjM1N0MxNC4wMTcgNi4wMzggMTMuNzU5IDUuNzkzIDEzLjQzOSA1Ljc1OEMxMy4xMTUgNS43MTcgMTIuODEzIDUuOTA0IDEyLjY5MiA2LjIwM0w4Ljc5IDE1Ljg2NUgxLjUyMUMyLjM0MyA3Ljc3NCA5LjE5NiAxLjQzOCAxNy41IDEuNDM4Wk0xNy41IDMzLjU2MkM4LjY0NCAzMy41NjIgMS40MzggMjYuMzU3IDEuNDM4IDE3LjVDMS40MzggMTcuNDM0IDEuNDQ3IDE3LjM3IDEuNDQ4IDE3LjMwNEg5LjI3NEM5LjU2NyAxNy4zMDQgOS44MzEgMTcuMTI2IDkuOTQxIDE2Ljg1NEwxMy4wNjIgOS4xMjlMMTYuMjMzIDI4LjY0M0MxNi4yODYgMjguOTY5IDE2LjU1NSAyOS4yMTggMTYuODg1IDI5LjI0NEMxNi45MDUgMjkuMjQ2IDE2LjkyNCAyOS4yNDcgMTYuOTQ0IDI5LjI0N0MxNy4yNTEgMjkuMjQ3IDE3LjUyNiAyOS4wNTIgMTcuNjI1IDI4Ljc1N0wyMS42NzcgMTYuNjYyTDIzLjA4MyAyMy4yNUMyMy4xNSAyMy41NjYgMjMuNDIgMjMuNzk5IDIzLjc0MiAyMy44MThDMjQuMDgyIDIzLjgzOSAyNC4zNjEgMjMuNjM4IDI0LjQ2NiAyMy4zMzRMMjYuNTgxIDE3LjIwMkgzMy41NDdDMzMuNTQ4IDE3LjMwMyAzMy41NjIgMTcuNCAzMy41NjIgMTcuNTAxQzMzLjU2MiAyNi4zNTYgMjYuMzU2IDMzLjU2MiAxNy41IDMzLjU2MloiIGZpbGw9IiMzRTUyNzEiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "704e":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNy41IDM1QzcuODUgMzUgMCAyNy4xNDkgMCAxNy41QzAgNy44NTEgNy44NSAwIDE3LjUgMEMyNy4xNSAwIDM1IDcuODUxIDM1IDE3LjVDMzUgMjcuMTQ5IDI3LjE1IDM1IDE3LjUgMzVaTTE3LjUgMS40MzhDOC42NDMgMS40MzggMS40MzggOC42NDQgMS40MzggMTcuNUMxLjQzOCAyNi4zNTYgOC42NDMgMzMuNTYyIDE3LjUgMzMuNTYyQzI2LjM1NiAzMy41NjIgMzMuNTYyIDI2LjM1NyAzMy41NjIgMTcuNUMzMy41NjIgOC42NDMgMjYuMzU2IDEuNDM4IDE3LjUgMS40MzhaIiBmaWxsPSIjM0U1MjcxIi8+DQo8cGF0aCBkPSJNMjIuODgzIDUuMDg3MDFIMTcuNzY5SDE3LjIzMkgxMi4xMThDMTEuNzA1IDUuMDg3MDEgMTEuMzcgNS40MjIwMSAxMS4zNyA1LjgzNjAxVjEzLjQ0NUMxMS4zNyAxMy42ODIgMTEuNDgyIDEzLjkwNiAxMS42NzMgMTQuMDQ2TDE2Ljc4MSAxOC4zMTFWMTkuOTA1TDE1LjU0IDIyLjQxNUwxMi42MDIgMjIuODQ0QzEyLjMzMSAyMi44ODMgMTIuMTA3IDIzLjA3MyAxMi4wMjIgMjMuMzMzQzExLjkzNyAyMy41OTQgMTIuMDA4IDIzLjg3OSAxMi4yMDQgMjQuMDdMMTQuMzI5IDI2LjEzOUwxMy44MjUgMjkuMDcyQzEzLjc3OSAyOS4zNDMgMTMuODg5IDI5LjYxNSAxNC4xMTEgMjkuNzc1QzE0LjIzNiAyOS44NjcgMTQuMzg0IDI5LjkxMyAxNC41MzQgMjkuOTEzQzE0LjY0OCAyOS45MTMgMTQuNzYzIDI5Ljg4NyAxNC44NjkgMjkuODMxTDE3LjUwMiAyOC40NDRMMjAuMTMyIDI5LjgzQzIwLjM3MSAyOS45NiAyMC42NjYgMjkuOTM4IDIwLjg4OSAyOS43NzVDMjEuMTExIDI5LjYxNiAyMS4yMjIgMjkuMzQyIDIxLjE3NSAyOS4wNzJMMjAuNjcyIDI2LjEzOUwyMi43OTcgMjQuMDdDMjIuOTkyIDIzLjg3OSAyMy4wNjQgMjMuNTkzIDIyLjk3OSAyMy4zMzNDMjIuODk0IDIzLjA3MyAyMi42NjkgMjIuODgzIDIyLjM5OSAyMi44NDRMMTkuNDYxIDIyLjQxNUwxOC4yMiAxOS44OThWMTguMzExTDIzLjMyOSAxNC4wNDZDMjMuNTE5IDEzLjkwNiAyMy42MzIgMTMuNjgyIDIzLjYzMiAxMy40NDVWNS44MzYwMUMyMy42MzEgNS40MjIwMSAyMy4yOTUgNS4wODcwMSAyMi44ODMgNS4wODcwMVpNMTQuNTAzIDE0LjQ2NkwxMi44NjYgMTMuMDY4VjYuNTg0MDFIMTQuNTAzVjE0LjQ2NlpNMTkuMTc5IDIzLjgyN0wyMC43NDggMjQuMDU2TDE5LjU5OSAyNS4xNzVDMTkuMzA0IDI1LjQ3OCAxOS4xNzEgMjUuOTAzIDE5LjI0MyAyNi4zMTNMMTkuNTEyIDI3Ljg3NkwxOC4wOTQgMjcuMTI5QzE3LjcyMyAyNi45NDQgMTcuMzA2IDI2LjkzNCAxNi44OTggMjcuMTM2TDE1LjQ5MSAyNy44NzdMMTUuNzYgMjYuMzE1QzE1LjgzMiAyNS45IDE1LjY5OCAyNS40NzIgMTUuMzkxIDI1LjE2NUwxNC4yNTMgMjQuMDU3TDE1LjgyNSAyMy44MjhDMTYuMjUxIDIzLjc2NSAxNi42MTYgMjMuNDk4IDE2Ljc5OSAyMy4xMkwxNy41MDIgMjEuNjk1TDE4LjIwMiAyMy4xMTRDMTguMzg2IDIzLjQ5NiAxOC43NSAyMy43NjMgMTkuMTc5IDIzLjgyN1pNMTcuNSAxNy4wMjdMMTUuODQ1IDE1LjYxMkgxNS45NDJWNi41ODQwMUgxNy4yMzJIMTcuNzY5SDE5LjA1OFYxNS42MTNIMTkuMTU2TDE3LjUgMTcuMDI3Wk0yMi4xMzMgMTMuMDY4TDIwLjQ5NiAxNC40NjZWNi41ODQwMUgyMi4xMzNWMTMuMDY4WiIgZmlsbD0iIzNFNTI3MSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "72e4":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".sup{display:inline-block;font-size:.7em;text-transform:uppercase;-webkit-transform:translateY(-.25em);transform:translateY(-.25em);margin:0 .3em}.active{fill:#53b2f1;stroke:#53b2f1}.tbl{display:table}.tbl--header{min-width:500px}.tbl__row{display:table-row}.tbl__cell{display:table-cell}.tbl__cell.highlighted{background:#f7f7f7}.tbl__cell-name{font-size:16px;padding:10px 40px 10px 0;width:170px;min-width:170px;max-width:170px;vertical-align:middle}.tbl__cell-name-inner{outline:none;cursor:pointer}.active>.tbl__cell-name-inner,.tbl__cell-name-inner:focus,.tbl__cell-name-inner:hover{color:#53b2f1}.tbl__cell-name-inner .sup{position:absolute}.tbl__cell-header{text-align:center;padding:0 9px;min-width:108px;width:108px;font-size:14px}.tbl__cell-header:first-child{padding-left:0}.tbl__cell-header:last-child{padding-right:0}.tbl__cell-value{text-align:center;vertical-align:middle}.tbl__cell-spacer{height:20px}.tbl__cell-line{background-image:url(" + escape(__webpack_require__("1e63")) + ");background-repeat:repeat-y;background-position:50% 0}.tbl__header-box{border:1px solid #dfe4e7;border-radius:26px;height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;max-width:100px;margin-left:auto;margin-right:auto}.tbl__header-box.active{background:#ff5251;color:#fff;border-color:#ff5251}.tbl__cell-icons{vertical-align:middle;text-align:right}.tbl__cell-icons .icons-set{margin-right:10px}.legend{display:block;margin:0;list-style:none;padding:0;max-width:860px}.legend li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1em}.legend li:last-child{margin-bottom:0}.legend__item-symbol{-webkit-box-flex:0;-ms-flex:0 0 30px;flex:0 0 30px;margin-right:15px;text-align:center}.legend__item-symbol .dot{font-size:20px}.value-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:default}", ""]);

// exports


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "7405":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".sup{display:inline-block;font-size:.7em;text-transform:uppercase;-webkit-transform:translateY(-.25em);transform:translateY(-.25em);margin:0 .3em}.active{fill:#53b2f1;stroke:#53b2f1}.tippy-backdrop{background:#fff}.tippy-tooltip{padding:15px;color:inherit;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1)}.tippy-tooltip.dark-theme{background:#fff}.tippy-content{text-align:left;color:#3e5271;font-size:14px;line-height:1.5em}.tooltip-link{color:#53b2f1}.tooltip-text+.tooltip-link{margin-top:10px}", ""]);

// exports


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "77f6":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxMyAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjczMjIzMyAwLjczMjIzM0MxLjcwODU0IC0wLjI0NDA3OCAzLjI5MTQ2IC0wLjI0NDA3OCA0LjI2Nzc3IDAuNzMyMjMzTDEyLjI2NzggOC43MzIyM0MxMy4yNDQxIDkuNzA4NTQgMTMuMjQ0MSAxMS4yOTE1IDEyLjI2NzggMTIuMjY3OEw0LjI2Nzc3IDIwLjI2NzhDMy4yOTE0NiAyMS4yNDQxIDEuNzA4NTQgMjEuMjQ0MSAwLjczMjIzMyAyMC4yNjc4Qy0wLjI0NDA3OCAxOS4yOTE1IC0wLjI0NDA3OCAxNy43MDg1IDAuNzMyMjMzIDE2LjczMjJMNi45NjQ0NyAxMC41TDAuNzMyMjMzIDQuMjY3NzdDLTAuMjQ0MDc4IDMuMjkxNDYgLTAuMjQ0MDc4IDEuNzA4NTQgMC43MzIyMzMgMC43MzIyMzNaIiBmaWxsPSIjNTNCM0YyIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "7909":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".sup{display:inline-block;font-size:.7em;text-transform:uppercase;-webkit-transform:translateY(-.25em);transform:translateY(-.25em);margin:0 .3em}.active{fill:#53b2f1;stroke:#53b2f1}.name{font-family:Gotham Pro,sans-serif}.dot{display:inline-block;width:1em;height:1em;font-size:25px;color:#3e5271;border-radius:50%;background:currentColor}.dot.light{color:#53b2f1}.dot.inactive{color:#dfe4e7}.arrow{font-size:24px;position:relative;height:5px;background:currentColor}.arrow:before{content:\"\";display:block;position:absolute;top:-8px;right:-1px;width:13px;height:21px;background-position:50% 50%;background-repeat:no-repeat;background-size:contain;z-index:1}.arrow.light{color:#53b2f1}.arrow.light:before{background-image:url(" + escape(__webpack_require__("77f6")) + ")}.arrow.dark{color:#5c708e}.arrow.dark:before{background-image:url(" + escape(__webpack_require__("035a")) + ")}.arrow.inactive{color:#dfe4e7}.arrow.inactive:before{background-image:url(" + escape(__webpack_require__("1ded")) + ")}.iline{height:5px;background:currentColor}.iline.light{color:#53b2f1}.iline.dark{color:#5c708e}.iline.inactive{color:#dfe4e7}.line{-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%}.from{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;margin:0 0 0 auto}.from--prev{margin-left:0}.to{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;margin:0 auto 0 0}", ""]);

// exports


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a14":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCAzNCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS41MTEzOSAyOS40NjY5VjIuMjExMUMxLjUxMTM5IDIuMDQ2OTEgMS41MzY0MyAxLjUxMTM5IDEuODYxMDkgMS41MTEzOUgyMy40NjYxQzIzLjQ0MTMgMS42MDY2MiAyMy40MjI4IDEuNzA0NjQgMjMuNDIyOCAxLjgwNjY3VjEwLjU3NzlIMzIuMTkzN0MzMi4yOTU4IDEwLjU3NzkgMzIuMzkyOCAxMC41NTkgMzIuNDg4NCAxMC41MzQzQzMyLjQ4ODQgMTAuNTQ1NCAzMi40ODkgMTAuNTQ5OCAzMi40ODkgMTAuNTYxMlYyOS40NjY5SDEuNTExMzlaTTEuODYxMDkgNDIuMzExMkMxLjgwNzYgNDIuMzExMiAxLjc1OTM2IDQyLjI5MTcgMS43MTE0NCA0Mi4yNzQ0QzEuNTkzOTQgNDIuMjE4MSAxLjUxMTM5IDQyLjEwMDMgMS41MTEzOSA0MS45NjE1VjMwLjk3OEgzMi40ODlWNDEuOTYxNUMzMi40ODkgNDIuMTAwMyAzMi40MDY4IDQyLjIxNzUgMzIuMjg5MyA0Mi4yNzQ0QzMyLjI0MTMgNDIuMjkxNyAzMi4xOTMxIDQyLjMxMTIgMzIuMTM5MyA0Mi4zMTEySDEuODYxMDlaTTMxLjMwNTkgOS4wNjY1NEgyNC45MzI4VjIuNjkzNzJMMzEuMzA1OSA5LjA2NjU0Wk0zMy41ODQ0IDkuMjA4MTNMMzMuMDAxOSA4LjYyNTYxTDI1LjM3NDQgMC45OTgzOUwyNC43OTE5IDAuNDE1NTU4QzI0LjUyODEgMC4xNTE4MTUgMjQuMTYyNiAwIDIzLjc4ODUgMEgxLjg2MDczQzAuOTY0Njg4IDAgMCAwLjY5MjI4NyAwIDIuMjExMDVWMjkuNDY2OVY0MS45NjE1VjQyLjMxMTJDMCA0Mi45NDM4IDAuNjM2MDE0IDQzLjU2IDEuMzg4NTkgNDMuNzU0NUMxLjQyNjYzIDQzLjc2NDEgMS40NjI4IDQzLjc3ODYgMS41MDIwNyA0My43ODYzQzEuNjE5ODcgNDMuODA5NSAxLjczOTg0IDQzLjgyMjUgMS44NjA3MyA0My44MjI1SDMyLjEzOUMzMi4yNTk4IDQzLjgyMjUgMzIuMzc5OCA0My44MDk1IDMyLjQ5NzYgNDMuNzg2M0MzMi41MzY5IDQzLjc3ODYgMzIuNTczMSA0My43NjQxIDMyLjYxMTEgNDMuNzU0NUMzMy4zNjM3IDQzLjU2IDM0IDQyLjk0MzggMzQgNDIuMzExMlY0MS45NjE1VjI5LjQ2NjlWMTAuNTYxMkMzNCA5Ljk4MTc0IDMzLjkzMDQgOS41NTQxMiAzMy41ODQ0IDkuMjA4MTNaIiBmaWxsPSIjNUM3MDhFIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjI3MjIgMzYuMzIyQzExLjE5NTggMzYuNTMyIDExLjA5NjkgMzYuNjk1MiAxMC45NzI5IDM2LjgxMjRDMTAuODQ4OSAzNi45Mjk2IDEwLjcxMjggMzcuMDE0IDEwLjU2NDcgMzcuMDY1M0MxMC40MTY2IDM3LjExNjcgMTAuMjY2NyAzNy4xNDMyIDEwLjExNTUgMzcuMTQzMkg4Ljk3ODg3VjM0LjEyNzFIOS45MDgzMUMxMC4yMjQ5IDM0LjEyNzEgMTAuNDc5NyAzNC4xNzcxIDEwLjY3MyAzNC4yNzY3QzEwLjg2NTYgMzQuMzc2MyAxMS4wMTUyIDM0LjUwMDMgMTEuMTIyNSAzNC42NDg0QzExLjIyODkgMzQuNzk2NSAxMS4yOTk0IDM0Ljk1MTQgMTEuMzM0IDM1LjExMzFDMTEuMzY4IDM1LjI3NDggMTEuMzg1MyAzNS40MTc2IDExLjM4NTMgMzUuNTQxNkMxMS4zODUzIDM1Ljg1MTcgMTEuMzQ3NiAzNi4xMTE4IDExLjI3MjIgMzYuMzIyWk0xMS43NDI1IDMzLjgwNjhDMTEuNDkwOCAzMy42MDA1IDExLjIwNjYgMzMuNDQ0NyAxMC44OSAzMy4zNDJDMTAuNTczNCAzMy4yMzg1IDEwLjI1MzEgMzMuMTg3MSA5LjkyOTk1IDMzLjE4NzFINy43NDAyM1Y0MC44MDAxSDguOTgwMTFWMzguMDUyM0g5Ljg5OTY1QzEwLjI5ODUgMzguMDUyMyAxMC42NjQzIDM3Ljk5MzkgMTAuOTk0NSAzNy44NzY3QzExLjMyNDQgMzcuNzU5OCAxMS42MDczIDM3LjU5NDQgMTEuODQxNCAzNy4zODE0QzEyLjA3NTUgMzcuMTY4IDEyLjI1NzkgMzYuOTA0NiAxMi4zODkgMzYuNTkxMUMxMi41MTk4IDM2LjI3NzIgMTIuNTg1NiAzNS45Mjg1IDEyLjU4NTYgMzUuNTQyM0MxMi41ODU2IDM1LjE3NzQgMTIuNTA3NyAzNC44NDg0IDEyLjM1MjggMzQuNTU1M0MxMi4xOTc5IDM0LjI2MjUgMTEuOTkzOCAzNC4wMTM2IDExLjc0MjUgMzMuODA2OFoiIGZpbGw9IiM1QzcwOEUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzI3OCAzOS4wODUxQzE3Ljk1NjIgMzkuNjIyMiAxNy4zNTAxIDM5Ljg5MDMgMTYuNTEwMSAzOS44OTAzSDE1LjI4MDdWMzQuMTI2M0gxNi4wMDM2QzE2LjU5NiAzNC4xMjYzIDE3LjA3OCAzNC4yMDQyIDE3LjQ1IDM0LjM1OTFDMTcuODIxNCAzNC41MTQgMTguMTE2IDM0LjcxNzIgMTguMzMzMSAzNC45Njg4QzE4LjU0OTggMzUuMjIwMiAxOC42OTU4IDM1LjUwMDcgMTguNzcyMSAzNS44MTA1QzE4Ljg0NzYgMzYuMTIwMyAxOC44ODU2IDM2LjQzMzggMTguODg1NiAzNi43NTA0QzE4Ljg4NTYgMzcuNzY5NSAxOC42OTk1IDM4LjU0ODcgMTguMzI3OCAzOS4wODUxWk0xOS4yMzE3IDM0LjMwMjJDMTguOTExMyAzMy45NjUyIDE4LjUwODUgMzMuNjk0IDE4LjAyMjcgMzMuNDkxNUMxNy41MzY3IDMzLjI4OTMgMTYuOTczOSAzMy4xODczIDE2LjMzMzkgMzMuMTg3M0gxNC4wNDA5VjQwLjgwMDJIMTYuOTIyNkMxNy4wMTg0IDQwLjgwMDIgMTcuMTY2NSA0MC43ODgyIDE3LjM2NjkgNDAuNzY0MUMxNy41NjYgNDAuNzM5NiAxNy43ODcxIDQwLjY4NTIgMTguMDI4IDQwLjU5ODdDMTguMjY5MSA0MC41MTIxIDE4LjUxODMgNDAuMzgyOCAxOC43NzY4IDQwLjIxMDlDMTkuMDM1IDQwLjAzODQgMTkuMjY3MiAzOS44MDI4IDE5LjQ3NDEgMzkuNTAyOUMxOS42ODA5IDM5LjIwMjkgMTkuODUxMyAzOC44MzEzIDE5Ljk4NTUgMzguMzg2N0MyMC4xMiAzNy45NDI3IDIwLjE4NzQgMzcuNDA2OCAyMC4xODc0IDM2Ljc4MDdDMjAuMTg3NCAzNi4zMjU2IDIwLjEwNzkgMzUuODgzMSAxOS45NTAyIDM1LjQ1M0MxOS43OTA3IDM1LjAyMzkgMTkuNTUxNyAzNC42NDAyIDE5LjIzMTcgMzQuMzAyMloiIGZpbGw9IiM1QzcwOEUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEuOTg0NyA0MC44MDAySDIzLjI0NVYzNy4zNzA3SDI2LjQyNjZWMzYuNTIzOEgyMy4yNDVWMzQuMTI3MkgyNi43NDZWMzMuMTg3M0gyMS45ODQ3VjQwLjgwMDJaIiBmaWxsPSIjNUM3MDhFIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0Ljk4NTQgMTkuMDg0OEMyNC43NTI1IDE5LjQxMDMgMjQuMjQ3OSAxOS40MTgxIDI0LjA3MTEgMTkuNDE4MUMyMy42Njg1IDE5LjQxODEgMjMuNTE4MiAxOS4xNzg0IDIyLjkwMjMgMTguNzA0OEMyMy40MSAxOC42Mzk4IDIzLjg4OSAxOC42MjMxIDI0LjI3MDUgMTguNjIzMUMyNC45NDIxIDE4LjYyMzEgMjUuMDY1NCAxOC43MjIxIDI1LjE1ODUgMTguNzcxOUMyNS4xNDE4IDE4LjgyNTcgMjUuMDk3OSAxOC45MjY4IDI0Ljk4NTQgMTkuMDg0OFpNMTUuMjM4NyAxOS40NDY3QzE2LjAwNTUgMTcuNjE5MSAxNi43MTg4IDE1LjYwMDcgMTcuMjU4OSAxMy43MzE2QzE4LjEwNzQgMTUuMjU2MiAxOS4xMjY4IDE2LjczNTQgMjAuMTQ2OCAxNy45MjAyQzE4LjUzNDQgMTguMjk5IDE2LjgxNzcgMTguODMzMyAxNS4yMzg3IDE5LjQ0NjdaTTE2LjgwMDUgNy4zMzgwM0MxNi44MzMgNy4zMjc1MiAxNy41ODk5IDguMTY5NzcgMTYuODcyOSA5Ljc2OEMxNS43OTU2IDguNjY1NzIgMTYuNzI2MyA3LjM2MzA4IDE2LjgwMDUgNy4zMzgwM1pNMTAuNjA0MyAyNC42NTY3QzEwLjI1MDkgMjQuMzg1OSAxMC4yNzEzIDI0LjIwMjggMTAuMjc4NyAyNC4xMzQyQzEwLjMyNTQgMjMuNzE0IDEwLjk4MzcgMjIuOTY4NSAxMi41OTgzIDIyLjA2MDdDMTEuMzc0MiAyNC4zMjE1IDEwLjcxNjkgMjQuNjIxNSAxMC42MDQzIDI0LjY1NjdaTTI0LjEyMzEgMTcuMzQ4NkMyMy40Mjg2IDE3LjM0ODYgMjIuNTc2MiAxNy40MzkyIDIxLjU4NTggMTcuNjE5MUMyMC4yMDMxIDE2LjE1MTcgMTguNzU5OCAxNC4wMDkgMTcuNzQxMyAxMS45MDUyQzE4Ljc1MTggNy42NTIyNSAxOC4yNDYyIDcuMDUwMjUgMTguMDIzIDYuNzY2MUMxNy43ODYxIDYuNDY0MDIgMTcuNDUxMyA1Ljk3MzYzIDE3LjA3MDQgNS45NzM2M0MxNi45MTExIDUuOTczNjMgMTYuNDc2MSA2LjA0NTk4IDE2LjMwMjkgNi4xMDM4QzE1Ljg2NzYgNi4yNDg1MSAxNS42MzM1IDYuNTgzOTggMTUuNDQ2MiA3LjAyMTQ5QzE0LjkxMTkgOC4yNzAzMyAxNS42NDUgMTAuMzk5NCAxNi4zOTg4IDEyLjA0MDdDMTUuNzU0NCAxNC42MDQ1IDE0LjY3MzIgMTcuNjcyNiAxMy41MzY5IDIwLjE2MjlDMTAuNjczMSAyMS40NzQ1IDkuMTUyNSAyMi43NjI5IDkuMDE0OTEgMjMuOTkyQzguOTY1MTMgMjQuNDM5NCA5LjA3MDU2IDI1LjA5NTggOS44NTcxNSAyNS42ODZDMTAuMDcyNyAyNS44NDY4IDEwLjMyNSAyNS45MzIyIDEwLjU4ODEgMjUuOTMyMkMxMS4yNDg4IDI1LjkzMjIgMTEuOTE2NyAyNS40MjYzIDEyLjY4OTcgMjQuMzQwNEMxMy4yNTM3IDIzLjU0ODYgMTMuODU4OCAyMi40Njg5IDE0LjQ5MDQgMjEuMTI4NUMxNi41MTM4IDIwLjI0MzYgMTkuMDE2NyAxOS40NDQzIDIxLjE2MDQgMTguOTk2M0MyMi4zNTQyIDIwLjE0MjUgMjMuNDIzMSAyMC43MjI4IDI0LjM0MiAyMC43MjI4QzI1LjAxODggMjAuNzIyOCAyNS41OTkyIDIwLjQxMTUgMjYuMDE5NCAxOS44MjMxQzI2LjQ1NjkgMTkuMjEgMjYuNTU2NSAxOC42NjE4IDI2LjMxNCAxOC4xOTA4QzI2LjAyMjggMTcuNjI1IDI1LjMwNjEgMTcuMzQ4NiAyNC4xMjMxIDE3LjM0ODZaIiBmaWxsPSIjNUM3MDhFIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "923c":
/***/ (function(module) {

module.exports = {"id":"adult","label":"Взрослые","range":["18","55"],"titles":[{"code":"DEFAULT","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"INSTR","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"INSTR_VAC","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препарата отдельно или в&nbsp;составе комбинированной вакцины"},{"code":"EVERY_10","text":"Каждые 10 лет"},{"code":"TO_35_INCL","text":"До&nbsp;35&nbsp;лет включительно"},{"code":"ANNUAL","text":"Ежегодно"},{"code":"WOMAN_TO_25_NOT_YET","text":"Женщины до&nbsp;25&nbsp;лет, не&nbsp;болевшие и&nbsp;не&nbsp;привитые ранее"},{"code":"ADULT_36_55_RISK","text":"Взрослые от&nbsp;36&nbsp;до&nbsp;55&nbsp;лет, относящие к&nbsp;группам риска"},{"code":"VERY_LONG_TEXT","text":"Взрослые от&nbsp;18&nbsp;до&nbsp;55&nbsp;лет, не&nbsp;привитые ранее; контактные лица из&nbsp;очагов заболевания, не&nbsp;болевшие, не&nbsp;привитые ранее и&nbsp;не&nbsp;имеющие сведений о&nbsp;профилактических прививках против гепатита&nbsp;В"},{"code":"ANNUAL_RISK_1","text":"Ежегодно группы риска <span class='sup'>1</span>"}],"notes":[{"number":1,"text":"Вакцинация также проводится контактным лицам без ограничения возраста из&nbsp;очагов заболевания, ранее не&nbsp;болевшим, не&nbsp;привитым и&nbsp;не&nbsp;имеющим сведений о&nbsp;профилактических прививках против кори или однократно привитым; взрослым от&nbsp;36&nbsp;до&nbsp;55&nbsp;лет, относящимся к&nbsp;группам риска (работники медицинских и&nbsp;образовательных организаций , организаций торговли, транспорта, коммунальной и&nbsp;социальной сферы; лицам, работающим вахтовым методом и&nbsp;сотрудникам государственных контрольных органов в&nbsp;пунктах пропуска через государственную границу&nbsp;РФ) не&nbsp;болевшим, не&nbsp;привитым ранее, привитым однократно, не&nbsp;имеющим сведений о&nbsp;прививках против кори."},{"number":2,"text":"Взрослые, работающие по&nbsp;отдельным профессиям и&nbsp;должностям (работники медицинских и&nbsp;образовательных организаций, транспорта, коммунальной сферы); беременные женщины, лица, подлежащие призыву на&nbsp;военную службу; лица с&nbsp;хроническими заболеваниями, в&nbsp;том числе и&nbsp;с&nbsp;заболеваниями легких, сердечно-сосудистыми заболеваниями, метаболическими нарушениями и&nbsp;ожирением."},{"number":3,"text":"Профилактика инфекций входит в&nbsp;календарь по&nbsp;эпидемическим показаниям для групп риска."},{"number":4,"text":"Взрослые из&nbsp;групп риска, включая лиц, подлежащих призыву на&nbsp;военную службу."},{"number":5,"text":"Лица, проживающие в&nbsp;регионах, неблагополучных по&nbsp;заболеваемости гепатитом&nbsp;A, а&nbsp;также лица, подверженные профессиональному риску заражения (медицинские работники, работники сферы обслуживания населения, занятые на&nbsp;предприятиях пищевой промышленности, а&nbsp;также обслуживающие водопроводные и&nbsp;канализационные сооружения, оборудование и&nbsp;сети). Лица, выезжающие в&nbsp;неблагополучные страны (регионы), где регистрируется вспышечная заболеваемость гепатитом A. Контактные лица в&nbsp;очагах гепатита&nbsp;A."},{"number":6,"text":"В&nbsp;очагах менингококковой инфекции, вызванной менингококками серогрупп&nbsp;A или C.&nbsp;Вакцинация проводится в&nbsp;эндемичных регионах, а&nbsp;также в&nbsp;случае эпидемии, вызванной менингококками серогрупп&nbsp;A или C. Лица, подлежащие призыву на&nbsp;военную службу."},{"number":7,"text":"С&nbsp;профилактической целью вакцинируют лиц, имеющих высокий риск заражения бешенством: лица, работающие с&nbsp;&laquo;уличным&raquo; вирусом бешенства, ветеринарные работники, егеря, охотники, лесники, лица, выполняющие работы по&nbsp;отлову и&nbsp;содержанию животных."},{"number":8,"text":"В&nbsp;очагах козье-овечьего типа бруцеллеза лица, выполняющие следующие работы: по&nbsp;заготовке, хранению, обработке сырья и&nbsp;продуктов животноводства, полученных из&nbsp;хозяйств, где регистрируются заболевания скота бруцеллезом; по&nbsp;убою скота, больного бруцеллезом, заготовке и&nbsp;переработке полученных от&nbsp;него мяса и&nbsp;мясопродуктов; животноводы, ветеринарные работники, зоотехники в&nbsp;хозяйствах, энзоотичных по&nbsp;бруцеллезу; лица, работающие с&nbsp;живыми культурами возбудителя бруцеллеза."},{"number":9,"text":"Лица, занятые в&nbsp;сфере коммунального благоустройства (работники, обслуживающие канализационные сети, сооружения и&nbsp;оборудование, а&nbsp;также организаций, осуществляющих санитарную очистку населенных мест, сбор, транспортировку и&nbsp;утилизацию бытовых отходов). Лица, работающие с&nbsp;живыми культурами возбудителей брюшного тифа. Население, проживающее на&nbsp;территориях с&nbsp;хроническими водными эпидемиями брюшного тифа.Лица, выезжающие в&nbsp;гиперэндемичные по&nbsp;брюшному тифу страны (регионы). Контактные лица в&nbsp;очагах брюшного тифа по&nbsp;эпидемическим показаниям. По&nbsp;эпидемическим показаниям прививки проводят при угрозе возникновения эпидемии или вспышки (стихийные бедствия, крупные аварии на&nbsp;водопроводной и&nbsp;канализационной сети), а&nbsp;также в&nbsp;период эпидемии, при этом в&nbsp;угрожаемом регионе проводят массовую вакцинацию населения."},{"number":10,"text":"Люди из&nbsp;групп риска, включая лиц, подлежащих призыву на&nbsp;военную службу, ранее не&nbsp;привитые и&nbsp;не&nbsp;болевшие ветряной оспой."},{"number":11,"text":"Лица, выезжающие за&nbsp;пределы Российской Федерации в&nbsp;энзоотичные по&nbsp;желтой лихорадке страны (регионы). Лица, работающие с&nbsp;живыми культурами возбудителя желтой лихорадки."},{"number":12,"text":"Лица, проживающие на&nbsp;эндемичных по&nbsp;клещевому вирусному энцефалиту территориях; лица, выезжающие на&nbsp;эндемичные по&nbsp;клещевому вирусному энцефалиту территории, а&nbsp;также прибывшие на&nbsp;эти территории лица, выполняющие следующие работы: сельскохозяйственные, гидромелиоративные, строительные, по&nbsp;выемке и&nbsp;перемещению грунта, заготовительные, промысловые, геологические, изыскательские, экспедиционные, дератизационные и&nbsp;дезинсекционные; по&nbsp;лесозаготовке, расчистке и&nbsp;благоустройству леса, зон оздоровления и&nbsp;отдыха населения. Лица, работающие с&nbsp;живыми культурами возбудителя клещевого энцефалита."},{"number":13,"text":"Лица, выполняющие следующие работы: по&nbsp;заготовке, хранению, обработке сырья и&nbsp;продуктов животноводства, полученных из&nbsp;хозяйств, расположенных на&nbsp;энзоотичных по&nbsp;лептоспирозу территориях; по&nbsp;убою скота, больного лептоспирозом, заготовке и&nbsp;переработке мяса и&nbsp;мясопродуктов, полученных от&nbsp;больных лептоспирозом животных; по&nbsp;отлову и&nbsp;содержанию безнадзорных животных. Лица, работающие с&nbsp;живыми культурами возбудителя лептоспироза."},{"number":14,"text":"Лица, выполняющие работы по&nbsp;заготовке, хранению, обработке сырья и&nbsp;продуктов животноводства, полученных из&nbsp;хозяйств, где регистрируются заболевания лихорадкой Ку. Лица, выполняющие работы по&nbsp;заготовке, хранению и&nbsp;переработке сельскохозяйственной продукции на&nbsp;энзоотичных территориях по&nbsp;лихорадке Ку. Лица, работающие с&nbsp;живыми культурами возбудителей лихорадки&nbsp;Ку."},{"number":15,"text":"Контактные лица в&nbsp;очагах полиомиелита, лица, работающие с&nbsp;живым полиовирусом, с&nbsp;материалами, инфицированными (потенциально инфицированными) диким вирусом полиомиелита, без ограничения возраста."},{"number":16,"text":"Лица, выполняющие следующие работы: зооветработники и&nbsp;другие лица, профессионально занятые предубойным содержанием скота, а&nbsp;также убоем, снятием шкур и&nbsp;разделкой туш; сбор, хранение, транспортировка и&nbsp;первичная обработка сырья животного происхождения; сельскохозяйственные, гидромелиоративные, строительные, по&nbsp;выемке и&nbsp;перемещению грунта, заготовительные, промысловые, геологические, изыскательские, экспедиционные на&nbsp;энзоотичных по&nbsp;сибирской язве территориях. Лица, работающие с&nbsp;материалом, подозрительным на&nbsp;инфицирование возбудителем сибирской язвы."},{"number":17,"text":"Лица, проживающие на&nbsp;энзоотичных по&nbsp;туляремии территориях, а&nbsp;также прибывшие на&nbsp;эти территории лица, выполняющие следующие работы: сельскохозяйственные, гидромелиоративные, строительные, другие работы по&nbsp;выемке и&nbsp;перемещению грунта, заготовительные, промысловые, геологические, изыскательские, экспедиционные, дератизационные и&nbsp;дезинсекционные; по&nbsp;лесозаготовке, расчистке и&nbsp;благоустройству леса, зон оздоровления и&nbsp;отдыха населения. Лица, работающие с&nbsp;живыми культурами возбудителя туляремии."},{"number":18,"text":"Лица, выезжающие в&nbsp;неблагополучные по&nbsp;холере страны (регионы).Население субъектов Российской Федерации в&nbsp;случае осложнения санитарно-эпидемиологической обстановки по&nbsp;холере в&nbsp;сопредельных странах, а&nbsp;также на&nbsp;территории Российской Федерации."},{"number":19,"text":"Лица, проживающие на&nbsp;энзоотичных по&nbsp;чуме территориях. Лица, работающие с&nbsp;живыми культурами возбудителя чумы."},{"number":20,"text":"Работники медицинских организаций (их&nbsp;структурных подразделений) инфекционного профиля. Лица, занятые в&nbsp;сфере общественного питания и&nbsp;коммунального благоустройства. По&nbsp;эпидемическим показаниям прививки проводятся при угрозе возникновения эпидемии или вспышки (стихийные бедствия, крупные аварии на&nbsp;водопроводной и&nbsp;канализационной сети), а&nbsp;также в&nbsp;период эпидемии, при этом в&nbsp;угрожаемом регионе проводят массовую вакцинацию населения. Профилактические прививки предпочтительно проводить перед сезонным подъемом заболеваемости шигеллезами. Профилактические прививки предпочтительно проводить перед сезонным подъемом заболеваемости шигеллезами."},{"number":21,"text":"Контактные лица из&nbsp;очагов заболевания, не&nbsp;болевшие, не&nbsp;привитые и&nbsp;не&nbsp;имеющие сведений о&nbsp;профилактических прививках против эпидемического паротита."}],"items":[{"name":"Дифтерия","note":"","hint":{"html":"Вакцина: анатоксин, обычно в&nbsp;составе комбинированной вакцины.","link":""},"items":[{"title":"EVERY_10","items":["18","100500"]}]},{"name":"Столбняк","note":"","hint":{"html":"Вакцина: анатоксин, обычно в&nbsp;составе комбинированной вакцины.","link":""},"items":[{"title":"EVERY_10","items":["18","100500"]}]},{"name":"Корь","note":"1","hint":{"html":"Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":[{"title":"TO_35_INCL","items":["18","35"]},{"title":"ADULT_36_55_RISK","items":["35","100500"]}]},{"name":"Краснуха","note":"","hint":{"html":"Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":[{"title":"WOMAN_TO_25_NOT_YET","items":["18","25"]}]},{"name":"Гепатит В","note":"","hint":{"html":"Вакцина: микрочастицы убитого вируса.","link":""},"items":[{"title":"VERY_LONG_TEXT","items":["18","100500"]}]},{"name":"Грипп","note":"2","icons":"WORK_INFECT WAR CHRON","hint":{"html":"Вакцина: убитая, содержит микрочастицы 3&nbsp;подтипов вируса.","link":""},"items":[{"title":"ANNUAL_RISK_1","items":["18","100500"]}]},{"name":"Пневмококковая инфекция","note":"3,4","icons":"CHRON","hint":{"html":"Вакцина: убитая, с&nbsp;2&nbsp;мес (13&nbsp;серотипов микроба) и&nbsp;с&nbsp;2&nbsp;лет (23&nbsp;серотипа).","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Гепатит А","note":"3,5","icons":"WORK_INFECT LIVE_TERR VISIT_TERR CONTACTS","hint":{"html":"Вакцины: убитые (инактивированные).","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Менингококковая инфекция","note":"3,6","icons":"LIVE_TERR WAR CONTACTS","hint":{"html":"Вакцина: убитая, защищает от&nbsp;наиболее распространенных серотипов бактерии.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Бешенство","note":"3,7","icons":"WORK_INFECT","hint":{"html":"Вакцина: убитый вирус.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Бруцеллез","note":"3,8","icons":"WORK_INFECT","hint":{"html":"Вакцина: убитая бактерия.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Брюшной тиф","note":"3,9","icons":"WORK_INFECT LIVE_TERR VISIT_TERR CONTACTS","hint":{"html":"Вакцины: частицы бактерии.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Ветряная оспа","note":"3,10","icons":"WAR","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Желтая лихорадка","note":"3,11","icons":"VISIT_TERR","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Клещевой вирусный энцефалит","note":"3,12","icons":"WORK_INFECT LIVE_TERR VISIT_TERR","hint":{"html":"Вакцина: убитый вирус.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Лептоспироз","note":"3,13","icons":"WORK_INFECT","hint":{"html":"Вакцина: убитая бактерия.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Лихорадки Ку","note":"3,14","icons":"WORK_INFECT","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Полиомиелит","note":"3,15","icons":"WORK_INFECT CONTACTS","hint":{"html":"Вакцина: живая ослабленная или убитая (не&nbsp;может вызвать инфекцию), отдельная или в&nbsp;составе комбинированной.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Сибирская язва","note":"3,16","icons":"WORK_INFECT","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Туляремия","note":"3,17","icons":"WORK_INFECT LIVE_TERR","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Холера","note":"3,18","icons":"VISIT_TERR CONTACTS","hint":{"html":"Вакцины: живая ослабленная или убитая.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Чума","note":"3,19","icons":"WORK_INFECT LIVE_TERR","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Шигеллез","note":"3,20","icons":"WORK_INFECT VISIT_TERR CONTACTS","hint":{"html":"Вакцина: частицы (антигены) бактерии.","link":""},"items":[{"epid":true,"items":["18","100500"]}]},{"name":"Эпидемический паротит","note":"3,21","icons":"CONTACTS","hint":{"html":"Вакцина: живая ослабленная, отдельная или в составе комбинированной.","link":""},"items":[{"epid":true,"items":["18","100500"]}]}]};

/***/ }),

/***/ "942a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f174");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7bce48a6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "98a7":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZD0iTTQ5LjU5NSAwQzMyLjcyNSAwIDE5IDEzLjcyNCAxOSAzMC41OTZWNjkuNDA0QzE5IDg2LjI3NCAzMi43MjUgMTAwIDQ5LjU5NSAxMDBDNjYuNDY0IDEwMCA4MC4xOTEgODYuMjc0IDgwLjE5MSA2OS40MDRWMzAuNTk2QzgwLjE5MSAxMy43MjQgNjYuNDY0IDAgNDkuNTk1IDBaTTQ5LjU5NSAzLjM4MUM2NC42MDEgMy4zODEgNzYuODEgMTUuNTg4IDc2LjgxIDMwLjU5NlY0Mi4yNTlDNzQuNTA5IDQ2LjIyMiA2Ny41MjcgNTUuMDE2IDQ5LjYwMyA1OC44OTVDMzEuNjQgNTUuMDA4IDI0LjY2NSA0Ni4xODUgMjIuMzgxIDQyLjIzM1YzMC41OTZDMjIuMzgxIDE1LjU4OCAzNC41ODkgMy4zODEgNDkuNTk1IDMuMzgxWk00OS41OTUgOTYuNjE5QzM0LjU4OSA5Ni42MTkgMjIuMzgxIDg0LjQxMSAyMi4zODEgNjkuNDAzVjQ4LjMyOUMzMy44NjUgNjEuOTg4IDU2LjYyMiA2NC4yMzUgNzAuMjk2IDY0LjIzNUM3Mi44MTkgNjQuMjM1IDc1LjAzMiA2NC4xNTkgNzYuODEgNjQuMDY0VjY5LjQwNEM3Ni44MSA4NC40MTIgNjQuNjAxIDk2LjYxOSA0OS41OTUgOTYuNjE5Wk03Ni44MSA2MC41NTVDNjkuNjAxIDYwLjk3OSA2My4yOTQgNjAuODExIDU3Ljc5OCA2MC4yMUM2NS4xMjQgNTcuODI0IDcxLjk2NCA1NC4wOTQgNzYuODEgNDguMzRWNjAuNTU1WiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjUuNzAyIDIwLjcxOEM2Mi44OTQ3IDE1LjY3NzggNTguMDg1NyAxMi4wNDk3IDUyLjQ0NjEgMTEuMTIzOEw1NC41ODIgOC45ODhDNTUuMjY2IDguMzA0IDU1LjI2NiA3LjE5NyA1NC41ODIgNi41MTNDNTMuODk4IDUuODI5IDUyLjc5MSA1LjgyOSA1Mi4xMDcgNi41MTNMNDkuMzQ1IDkuMjc2TDQ2LjU4MyA2LjUxM0M0NS45IDUuODI5IDQ0Ljc5MiA1LjgyOSA0NC4xMDggNi41MTNDNDMuNDI0IDcuMTk3IDQzLjQyNCA4LjMwNCA0NC4xMDggOC45ODhMNDYuMzE4OSAxMS4xOTg5QzQwLjg2MjMgMTIuMjMzNCAzNi4yMjM1IDE1LjgwNDggMzMuNDg3IDIwLjcxOEMzMy4yMjIgMjAuNjkgMzIuOTUzIDIwLjY3MSAzMi42OCAyMC42NzFDMjguNjc5IDIwLjY3MSAyNS40MjMgMjMuOTI3IDI1LjQyMyAyNy45MjhDMjUuNDIzIDMxLjQ0NiAyNy45MzggMzQuMzg1IDMxLjI2NCAzNS4wNDZDMzMuMDYyIDQ0LjA4NiA0MC41OTUgNTAuODkyIDQ5LjU5NSA1MC44OTJDNTguNTk1IDUwLjg5MiA2Ni4xMjggNDQuMDg2IDY3LjkyNSAzNS4wNDZDNzEuMjUxIDM0LjM4NCA3My43NjcgMzEuNDQ1IDczLjc2NyAyNy45MjhDNzMuNzY3IDIzLjkyNyA3MC41MTEgMjAuNjcxIDY2LjUwNyAyMC42NzFDNjYuMjM2IDIwLjY3MSA2NS45NjggMjAuNjkgNjUuNzAyIDIwLjcxOFpNNjguMzIyIDMxLjI0OEM2Ny43NzkgMzEuNTQ2IDY3LjE2OCAzMS43MjkgNjYuNTA4IDMxLjcyOUM2NS45MTYgMzEuNzI5IDY1LjM2MiAzMS41ODEgNjQuODYyIDMxLjMzN0M2NC44MzEgMzIuNTU1IDY0LjY3NiAzMy43MzYgNjQuNDE3IDM0Ljg3NUM2Mi43NjMgNDIuMDc1IDU2Ljc1NSA0Ny40MzQgNDkuNTk3IDQ3LjQzNEM0Mi40MzkgNDcuNDM0IDM2LjQzMSA0Mi4wNzYgMzQuNzc3IDM0Ljg3NEMzNC41MTYgMzMuNzM2IDM0LjM2MSAzMi41NTUgMzQuMzMxIDMxLjMzNkMzMy44MyAzMS41OCAzMy4yNzUgMzEuNzI5IDMyLjY4MiAzMS43MjlDMzIuMDIzIDMxLjcyOSAzMS40MTEgMzEuNTQ1IDMwLjg3IDMxLjI0OUMyOS42OTIgMzAuNjAzIDI4Ljg4MSAyOS4zNjUgMjguODgxIDI3LjkyOEMyOC44ODEgMjYuMDgyIDMwLjIwNiAyNC41NDEgMzEuOTU1IDI0LjIwMUMzMi4xOSAyNC4xNTUgMzIuNDMyIDI0LjEyOCAzMi42ODEgMjQuMTI4QzMzLjY4NSAyNC4xMjggMzQuNTkzIDI0LjUyNSAzNS4yNzQgMjUuMTY0QzM1LjY2NSAyNC4wMjMgMzYuMTYyIDIyLjkzOSAzNi43NjQgMjEuOTMzQzM5LjQ5IDE3LjM3NiA0NC4yMTkgMTQuMzQ5IDQ5LjU5NiAxNC4zNDlDNTQuOTcyIDE0LjM0OSA1OS43MDEgMTcuMzc2IDYyLjQyOCAyMS45MzNDNjMuMDMgMjIuOTQgNjMuNTI4IDI0LjAyMyA2My45MTggMjUuMTYzQzY0LjU5OCAyNC41MjUgNjUuNTA2IDI0LjEyOCA2Ni41MDggMjQuMTI4QzY2Ljc1OCAyNC4xMjggNjcgMjQuMTU1IDY3LjIzNyAyNC4yMDFDNjguOTg3IDI0LjU0MiA3MC4zMTEgMjYuMDgyIDcwLjMxMSAyNy45MjhDNzAuMzEgMjkuMzY1IDY5LjQ5OSAzMC42MDMgNjguMzIyIDMxLjI0OFpNNDIuNjE4IDI5LjYxMkM0My43MjI1IDI5LjYxMiA0NC42MTggMjguNzE2NiA0NC42MTggMjcuNjEyQzQ0LjYxOCAyNi41MDc0IDQzLjcyMjUgMjUuNjEyIDQyLjYxOCAyNS42MTJDNDEuNTEzNCAyNS42MTIgNDAuNjE4IDI2LjUwNzQgNDAuNjE4IDI3LjYxMkM0MC42MTggMjguNzE2NiA0MS41MTM0IDI5LjYxMiA0Mi42MTggMjkuNjEyWk01Ni41NzIgMjkuNjEyQzU3LjY3NjUgMjkuNjEyIDU4LjU3MiAyOC43MTY2IDU4LjU3MiAyNy42MTJDNTguNTcyIDI2LjUwNzQgNTcuNjc2NSAyNS42MTIgNTYuNTcyIDI1LjYxMkM1NS40Njc0IDI1LjYxMiA1NC41NzIgMjYuNTA3NCA1NC41NzIgMjcuNjEyQzU0LjU3MiAyOC43MTY2IDU1LjQ2NzQgMjkuNjEyIDU2LjU3MiAyOS42MTJaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgPHBhdGggZD0iTTQ5LjU5NSA0OS4xNDJDNTMuNzM3MSA0OS4xNDIgNTcuMDk1IDQ1Ljc4NDEgNTcuMDk1IDQxLjY0MkM1Ny4wOTUgMzcuNDk5OCA1My43MzcxIDM0LjE0MiA0OS41OTUgMzQuMTQyQzQ1LjQ1MjggMzQuMTQyIDQyLjA5NSAzNy40OTk4IDQyLjA5NSA0MS42NDJDNDIuMDk1IDQ1Ljc4NDEgNDUuNDUyOCA0OS4xNDIgNDkuNTk1IDQ5LjE0MloiIGZpbGw9IndoaXRlIi8+DQogICAgPHBhdGggZD0iTTQ5LjU5NSA1MC44OTJDNDQuNDk0IDUwLjg5MiA0MC4zNDUgNDYuNzQzIDQwLjM0NSA0MS42NDJDNDAuMzQ1IDM2LjU0MSA0NC40OTQgMzIuMzkyIDQ5LjU5NSAzMi4zOTJDNTQuNjk3IDMyLjM5MiA1OC44NDUgMzYuNTQxIDU4Ljg0NSA0MS42NDJDNTguODQ1IDQ2Ljc0MyA1NC42OTcgNTAuODkyIDQ5LjU5NSA1MC44OTJaTTQ5LjU5NSAzNS44OTJDNDYuNDI1IDM1Ljg5MiA0My44NDUgMzguNDcxIDQzLjg0NSA0MS42NDJDNDMuODQ1IDQ0LjgxMyA0Ni40MjUgNDcuMzkyIDQ5LjU5NSA0Ny4zOTJDNTIuNzY1IDQ3LjM5MiA1NS4zNDUgNDQuODEzIDU1LjM0NSA0MS42NDJDNTUuMzQ1IDM4LjQ3MSA1Mi43NjUgMzUuODkyIDQ5LjU5NSAzNS44OTJaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgPHBhdGggZD0iTTQ1Ljc2NzkgNTAuMzk2QzQ1Ljc2NzkgNTIuNTA4IDQ3LjQ4MDkgNTQuMjI0IDQ5LjU5MjkgNTQuMjI0QzUxLjcwNzkgNTQuMjI0IDUzLjQyMjkgNTIuNTA4IDUzLjQyMjkgNTAuMzk2QzUzLjQyMjkgNDguMjgxIDQ5Ljg0NjkgNDEuMjI0IDQ5LjU5MjkgNDEuMjI0QzQ5LjM0MDkgNDEuMjI1IDQ1Ljc2NzkgNDguMjgxIDQ1Ljc2NzkgNTAuMzk2WiIgZmlsbD0id2hpdGUiLz4NCiAgICA8cGF0aCBkPSJNNDkuNTkyOSA1NS45NzVDNDYuNTE4OSA1NS45NzUgNDQuMDE3OSA1My40NzMgNDQuMDE3OSA1MC4zOTdDNDQuMDE3OSA0OS45NTkgNDQuMDE3OSA0OC42MjYgNDUuOTkzOSA0NC4yOTJDNDguMDg5OSAzOS42OTUgNDguNTI2OSAzOS40NzYgNDkuNTkzOSAzOS40NzZDNTAuNjYwOSAzOS40NzYgNTEuMDk5OSAzOS42OTYgNTMuMTk1OSA0NC4yOTJDNTUuMTc0OSA0OC42MjUgNTUuMTc0OSA0OS45NTkgNTUuMTc0OSA1MC4zOTdDNTUuMTcyOSA1My40NzMgNTIuNjY4OSA1NS45NzUgNDkuNTkyOSA1NS45NzVaTTQ5LjU5NDkgNDQuODQ1QzQ4LjYyMDkgNDYuOTAxIDQ3LjUxNzkgNDkuNTUxIDQ3LjUxNzkgNTAuMzk3QzQ3LjUxNzkgNTEuNTQzIDQ4LjQ0ODkgNTIuNDc1IDQ5LjU5MjkgNTIuNDc1QzUwLjczODkgNTIuNDc1IDUxLjY3MjkgNTEuNTQyIDUxLjY3MjkgNTAuMzk3QzUxLjY3MjkgNDkuNTUgNTAuNTY4OSA0Ni44OTkgNDkuNTk0OSA0NC44NDVaIiBmaWxsPSIjNUM3MDhFIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c62":
/***/ (function(module) {

module.exports = [{"symbol":"dot dark","text":"Возраст вакцинации в&nbsp;соответствии с&nbsp;национальным календарем профилактических прививок."},{"symbol":"arrow dark","text":"Прививка рекомендована с&nbsp;указанного возраста в&nbsp;соответствии с&nbsp;национальным календарем профилактических прививок."},{"symbol":"arrow light","text":"Прививка рекомендована с&nbsp;указанного возраста в&nbsp;соответствии с&nbsp;календарем профилактических прививок по&nbsp;эпидемическим показаниям."},{"symbol":"iline dark","text":"Возрастной интервал вакцинации в&nbsp;соответствии с&nbsp;национальным календарем прививок."}];

/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "aa71":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("72e4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b8c70cf2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "afb7":
/***/ (function(module) {

module.exports = {"id":"toddler","label":"С года до трех","range":["0/12","3"],"timeline":["3"],"titles":[{"code":"DEFAULT","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"INSTR","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"INSTR_VAC","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препарата отдельно или в&nbsp;составе комбинированной вакцины"},{"code":"EPID_2_5","text":"По&nbsp;эпидемическим показаниям дети в&nbsp;возрасте от&nbsp;2&nbsp;до&nbsp;5&nbsp;лет"},{"code":"ANNUAL","text":"Ежегодно"},{"code":"NOT_YET","text":"Дети от&nbsp;1&nbsp;года до&nbsp;18&nbsp;лет не&nbsp;привитые ранее"}],"notes":[{"number":1,"text":"Дети от&nbsp;1&nbsp;года до&nbsp;18&nbsp;лет, не&nbsp;болевшие, не&nbsp;привитые, привитые однократно против краснухи, не&nbsp;имеющие сведений о&nbsp;прививках против краснухи."},{"number":2,"text":"Дополнительно может проводиться вакцинация по&nbsp;эпидемическим показаниям&nbsp;&mdash; контактные лица в&nbsp;очагах полиомиелита, с&nbsp;возраста 3&nbsp;месяцев."},{"number":3,"text":"Дети групп риска."},{"number":4,"text":"Схема вакцинации против гепатита&nbsp;В, за&nbsp;исключением детей из&nbsp;групп риска (Приказ МЗ&nbsp;РФ &#8470;&nbsp;125н от&nbsp;21.03.2014)."},{"number":5,"text":"Профилактика инфекций входит в&nbsp;календарь по&nbsp;эпидемическим показаниям для групп риска."},{"number":6,"text":"Лица, проживающие в&nbsp;регионах, неблагополучных по&nbsp;заболеваемости гепатитом&nbsp;A, выезжающие в&nbsp;неблагополучные страны (регионы), где регистрируется вспышечная заболеваемость гепатитом A.&nbsp;Контактные лица в&nbsp;очагах гепатита&nbsp;A."},{"number":7,"text":"В&nbsp;очагах менингококковой инфекции, вызванной менингококками серогрупп&nbsp;A или C.&nbsp;Вакцинация проводится в&nbsp;эндемичных регионах, а&nbsp;также в&nbsp;случае эпидемии, вызванной менингококками серогрупп&nbsp;A или&nbsp;C."},{"number":8,"text":"Лица, проживающие на&nbsp;эндемичных по&nbsp;клещевому вирусному энцефалиту территориях; лица, выезжающие на&nbsp;эндемичные по&nbsp;клещевому вирусному энцефалиту территории"},{"number":9,"text":"Дети из&nbsp;групп риска, ранее не&nbsp;привитые и&nbsp;не&nbsp;болевшие ветряной оспой."}],"items":[{"name":"Корь","note":"","hint":{"html":"Корь легко передается от&nbsp;человека к&nbsp;человеку. Опасна осложнениями&nbsp;&mdash; отит, пневмония, воспаление головного мозга. Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":["0/12"]},{"name":"Краснуха","note":"1","hint":{"html":"Краснуха: основная опасность&nbsp;&mdash; заражение от&nbsp;детей беременных женщин и&nbsp;рождение у&nbsp;них детей с&nbsp;серьезными дефектами. Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":["0/12"]},{"name":"Эпидемический паротит","note":"","hint":{"html":"Эпидемический паротит&nbsp;&mdash; сильный отек околоушных желез. Вирус у&nbsp;мальчиков может вызвать воспаление тканей яичка и&nbsp;дальнейшее бесплодие. Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":["0/12"]},{"name":"Пневмококковая инфекция","note":"","hint":{"html":"Пневмококк&nbsp;&mdash; одна из&nbsp;причин пневмоний, гнойного менингита, отита. Менингит может привести к&nbsp;смертельному исходу. Вакцина: убитая, с&nbsp;2&nbsp;мес (13&nbsp;серотипов микроба) и&nbsp;с&nbsp;2&nbsp;лет (23&nbsp;серотипа).","link":""},"items":["0/15",{"epid":true,"title":"EPID_2_5","items":["2","5"]}]},{"name":"Дифтерия","note":"","hint":{"html":"Дифтерия: при инфекции в&nbsp;зеве образуются пленки, закрывающие дыхательные пути, и&nbsp;человек может задохнуться. Вакцина: анатоксин, обычно в&nbsp;составе комбинированной вакцины.","link":""},"items":["0/18"]},{"name":"Коклюш","note":"","hint":{"html":"Коклюш&nbsp;&mdash; мучительный длительный кашель, может сопровождаться удушьем и&nbsp;даже привести к&nbsp;смерти из-за остановки дыхания. Вакцины: цельноклеточная или бесклеточная (обычно легче переносится).","link":""},"items":[{"title":"INSTR_VAC","items":"0/18"}]},{"name":"Столбняк","note":"","hint":{"html":"Столбняк: токсин поражает нервную систему, приводя к&nbsp;сильным судорогам, иногда смерти. Инфекция попадает через ранения. Вакцина: анатоксин, обычно в&nbsp;составе комбинированной вакцины.","link":""},"items":[{"title":"INSTR_VAC","items":"0/18"}]},{"name":"Полиомиелит","note":"2","hint":{"html":"Полиомиелит может навсегда парализовать руки или ноги или даже дыхательные мышцы. Вакцина: живая ослабленная или убитая (не&nbsp;может вызвать инфекцию), отдельная или в&nbsp;составе комбинированной.","link":""},"items":["0/18","0/20"]},{"name":"Гемофильная инфекция, тип&nbsp;b","note":"3","hint":{"html":"Гемофильная инфекция тип b&nbsp;&mdash; одна из&nbsp;причин гнойных менингитов и&nbsp;пневмоний у&nbsp;маленьких детей. Менингит может привести к&nbsp;глухоте или даже смерти. Вакцина: убитая, отдельная или в&nbsp;составе комбинированной.","link":""},"items":["0/18"]},{"name":"Грипп","note":"","hint":{"html":"Грипп быстро распространяется от&nbsp;человека к&nbsp;человеку, может вызвать лихорадку, пневмонию, опасен осложнениями. Вакцина: убитая, содержит микрочастицы 3&nbsp;подтипов вируса.","link":"https://chaika.com/what-do-we-treat/diseases/gripp-u-detei"},"items":[{"title":"ANNUAL","items":["0/12","100500"]}]},{"name":"Гепатит B","note":"4","hint":{"html":"Гепатит В&nbsp;может приводить к&nbsp;развитию цирроза и&nbsp;рака печени. Вирус может передаваться во&nbsp;время родов, через кровь, через зараженные предметы. Вакцина: микрочастицы убитого вируса.","link":""},"items":[{"epid":true,"title":"NOT_YET","items":["0/12","100500"]}]},{"name":"Гепатит А","note":"5,6","hint":{"html":"Гепатит А&nbsp;передается через воду или пищу. Обычно проявляется желтухой и&nbsp;поражением печени. Период восстановления может занимать несколько месяцев. Вакцины: убитые (инактивированные).","link":""},"items":[{"epid":true,"items":["0/12","100500"]}]},{"name":"Менингококковая инфекция","note":"5,7","hint":{"html":"Менингококк&nbsp;&mdash; одна из&nbsp;частых причин менингита или сепсиса. Болезнь может унести жизнь ребенка за&nbsp;24&nbsp;часа. Вакцина: убитая, защищает от&nbsp;наиболее распространенных серотипов бактерии.","link":" https://chaika.com/what-do-we-treat/diseases/meningokokkovaia-infektsiia-u-detei"},"items":[{"epid":true,"items":["0/12","100500"]}]},{"name":"Клещевой вирусный энцефалит","note":"5,8","hint":{"html":"Клещевой энцефалит передается при укусе инфицированного клеща, развивается менингит и/или энцефалит. Вакцина: убитый вирус.","link":"https://chaika.com/what-do-we-treat/diseases/kleshchevoi-entsefalit"},"items":[{"epid":true,"items":["0/12","100500"]}]},{"name":"Ветряная оспа","note":"5,9","hint":{"html":"Ветряная оспа проявляется в&nbsp;виде зудящей сыпи (у&nbsp;детей) или болезненного опоясывающего герпеса (у&nbsp;взрослых). Вакцина: живая ослабленная.","link":"https://chaika.com/what-do-we-treat/diseases/vetrianaia-ospa-u-detei"},"items":[{"epid":true,"items":["0/12","100500"]}]}]};

/***/ }),

/***/ "b041":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b473":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tbl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa71");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tbl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tbl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tbl_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b54a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__("386b")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "b5e3":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNy41IDM1QzcuODUxIDM1IDAgMjcuMTUgMCAxNy41QzAgNy44NTEgNy44NTEgMCAxNy41IDBDMjcuMTUgMCAzNSA3Ljg1MSAzNSAxNy41QzM1IDI3LjE1IDI3LjE1IDM1IDE3LjUgMzVaTTE3LjUgMS40MzhDOC42NDQgMS40MzggMS40MzggOC42NDQgMS40MzggMTcuNUMxLjQzOCAyNi4zNTUgOC42NDQgMzMuNTYyIDE3LjUgMzMuNTYyQzI2LjM1NSAzMy41NjIgMzMuNTYyIDI2LjM1NSAzMy41NjIgMTcuNUMzMy41NjIgOC42NDQgMjYuMzU1IDEuNDM4IDE3LjUgMS40MzhaIiBmaWxsPSIjM0U1MjcxIi8+DQo8cGF0aCBkPSJNMzEuMDYyIDE4LjE5NEMzMC45MzcgMTguMDM3IDMwLjc1NCAxNy45NCAzMC41NTUgMTcuOTJMMjAuODc2IDE3LjAwNUMyMC43MzggMTYuMTMyIDIwLjI3MiAxNS4zNzYgMTkuNjA1IDE0Ljg1MUwyMy41NzggNS44OTVDMjMuNjYgNS43MTIgMjMuNjYzIDUuNTA1IDIzLjU4OCA1LjMyQzIzLjUxMyA1LjEzNSAyMy4zNjUgNC45ODggMjMuMTgxIDQuOTE0QzE5LjUxNiAzLjQ0NSAxNS40ODIgMy40NDUgMTEuODE4IDQuOTE0QzExLjYzMyA0Ljk4OSAxMS40ODYgNS4xMzUgMTEuNDExIDUuMzJDMTEuMzM2IDUuNTA1IDExLjMzOSA1LjcxMyAxMS40MiA1Ljg5NUwxNS40IDE0Ljg0NUMxNC43MyAxNS4zNjkgMTQuMjYgMTYuMTI5IDE0LjEyMiAxNy4wMDVMNC40NDQwMiAxNy45MkM0LjI0NTAyIDE3Ljk0IDQuMDYzMDIgMTguMDM3IDMuOTM4MDIgMTguMTk0QzMuODEzMDIgMTguMzUxIDMuNzU4MDIgMTguNTUgMy43ODQwMiAxOC43NDhDNC4zMDAwMiAyMi42NjMgNi4yNzkwMiAyNi4xNzggOS4zNTcwMiAyOC42NTFDOS40ODgwMiAyOC43NTYgOS42NTEwMiAyOC44MTIgOS44MTcwMiAyOC44MTJDOS44NDcwMiAyOC44MTIgOS44NzkwMiAyOC44MSA5LjkxMDAyIDI4LjgwNkMxMC4xMDggMjguNzgxIDEwLjI4NyAyOC42NzUgMTAuNDA2IDI4LjUxN0wxNi4yMjQgMjAuNzE3QzE2LjYxOSAyMC44NzYgMTcuMDQ5IDIwLjk2OCAxNy41IDIwLjk2OEMxNy45NTEgMjAuOTY4IDE4LjM4IDIwLjg3NiAxOC43NzYgMjAuNzE3TDI0LjU5MyAyOC41MTdDMjQuNzEzIDI4LjY3NSAyNC44OTIgMjguNzgxIDI1LjA5IDI4LjgwNkMyNS4xMiAyOC44MSAyNS4xNTIgMjguODEyIDI1LjE4MyAyOC44MTJDMjUuMzUgMjguODEyIDI1LjUxMiAyOC43NTYgMjUuNjQ0IDI4LjY1MUMyOC43MjEgMjYuMTc5IDMwLjcgMjIuNjYzIDMxLjIxNCAxOC43NDhDMzEuMjQyIDE4LjU1MSAzMS4xODcgMTguMzUyIDMxLjA2MiAxOC4xOTRaTTEzLjA4MyA2LjAxNEMxNS45NTggNS4wMzkgMTkuMDQzIDUuMDM5IDIxLjkxOCA2LjAxNEwxOC4yODUgMTQuMjA2QzE4LjAzMSAxNC4xNDYgMTcuNzcxIDE0LjEwNyAxNy41IDE0LjEwN0MxNy4yMzIgMTQuMTA3IDE2Ljk3NSAxNC4xNDUgMTYuNzI0IDE0LjIwM0wxMy4wODMgNi4wMTRaTTkuNjk2MDIgMjcuMDExQzcuNDM2MDIgMjQuOTg0IDUuOTIzMDIgMjIuMjkzIDUuMzYyMDIgMTkuMzExTDE0LjIxNiAxOC40NzZDMTQuMzY4IDE5LjAwOCAxNC42MzkgMTkuNDkxIDE1LjAxMSAxOS44ODVMOS42OTYwMiAyNy4wMTFaTTE1LjU0IDE3LjUzOEMxNS41NCAxNi40NTggMTYuNDE5IDE1LjU3OCAxNy41IDE1LjU3OEMxOC41ODEgMTUuNTc4IDE5LjQ1OSAxNi40NTggMTkuNDU5IDE3LjUzOEMxOS40NTkgMTguNjIgMTguNTggMTkuNDk4IDE3LjUgMTkuNDk4QzE2LjQxOSAxOS40OTggMTUuNTQgMTguNjE5IDE1LjU0IDE3LjUzOFpNMjUuMzA2IDI3LjAxMUwxOS45OTEgMTkuODg1QzIwLjM2MSAxOS40OSAyMC42MzIgMTkuMDA4IDIwLjc4NSAxOC40NzZMMjkuNjM5IDE5LjMxMUMyOS4wNzggMjIuMjkzIDI3LjU2NCAyNC45ODMgMjUuMzA2IDI3LjAxMVoiIGZpbGw9IiMzRTUyNzEiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "be9c":
/***/ (function(module) {

module.exports = {"id":"old","label":"Старше 55 лет","range":["55","60"],"titles":[{"code":"DEFAULT","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"INSTR","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препаратов"},{"code":"INSTR_VAC","text":"В&nbsp;соответствии с&nbsp;инструкцией по&nbsp;применению препарата отдельно или в&nbsp;составе комбинированной вакцины"},{"code":"EVERY_10","text":"Каждые 10 лет"},{"code":"TO_35_INCL","text":"До&nbsp;35&nbsp;лет включительно"},{"code":"ANNUAL","text":"Ежегодно"},{"code":"WOMAN_TO_25_NOT_YET","text":"Женщины до&nbsp;25&nbsp;лет, не&nbsp;болевшие и&nbsp;не&nbsp;привитые ранее"},{"code":"ADULT_36_55_RISK","text":"Взрослые от&nbsp;36&nbsp;до&nbsp;55&nbsp;лет, относящие к&nbsp;группам риска"},{"code":"VERY_LONG_TEXT","text":"Взрослые от&nbsp;18&nbsp;до&nbsp;55&nbsp;лет, не&nbsp;привитые ранее; контактные лица из&nbsp;очагов заболевания, не&nbsp;болевшие, не&nbsp;привитые ранее и&nbsp;не&nbsp;имеющие сведений о&nbsp;профилактических прививках против гепатита&nbsp;В"},{"code":"ANNUAL_RISK_1","text":"Ежегодно группы риска <span class='sup'>1</span>"},{"code":"EPID","text":"По эпидемическим показаниям без ограничения возраста"}],"notes":[{"number":1,"text":"Работающие по&nbsp;отдельным профессиям и&nbsp;должностям (работники медицинских и&nbsp;образовательных организаций, транспорта, коммунальной сферы); лица, подлежащие призыву на&nbsp;военную службу; лица с&nbsp;хроническими заболеваниями, в&nbsp;том числе с&nbsp;заболеваниями легких, сердечно-сосудистыми заболеваниями, метаболическими нарушениями и&nbsp;ожирением."},{"number":2,"text":"Профилактика инфекций входит в&nbsp;календарь по&nbsp;эпидемическим показаниям для групп риска."},{"number":3,"text":"Лица, проживающие в&nbsp;регионах, неблагополучных по&nbsp;заболеваемости гепатитом&nbsp;A, а&nbsp;также лица, подверженные профессиональному риску заражения (медицинские работники, работники сферы обслуживания населения, занятые на&nbsp;предприятиях пищевой промышленности, а&nbsp;также обслуживающие водопроводные и&nbsp;канализационные сооружения, оборудование и&nbsp;сети). Лица, выезжающие в&nbsp;неблагополучные страны (регионы), где регистрируется вспышечная заболеваемость гепатитом A.&nbsp;Контактные лица в&nbsp;очагах гепатита&nbsp;A."},{"number":4,"text":"В&nbsp;очагах менингококковой инфекции, вызванной менингококками серогрупп&nbsp;A или C.&nbsp;Вакцинация проводится в&nbsp;эндемичных регионах, а&nbsp;также в&nbsp;случае эпидемии, вызванной менингококками серогрупп&nbsp;A или&nbsp;C."},{"number":5,"text":"С&nbsp;профилактической целью вакцинируют лиц, имеющих высокий риск заражения бешенством: лица, работающие с&nbsp;&laquo;уличным&raquo; вирусом бешенства; ветеринарные работники; егеря, охотники, лесники; лица, выполняющие работы по&nbsp;отлову и&nbsp;содержанию животных."},{"number":6,"text":"В&nbsp;очагах козье-овечьего типа бруцеллеза лица, выполняющие следующие работы: по&nbsp;заготовке, хранению, обработке сырья и&nbsp;продуктов животноводства, полученных из&nbsp;хозяйств, где регистрируются заболевания скота бруцеллезом; по&nbsp;убою скота, больного бруцеллезом, заготовке и&nbsp;переработке полученных от&nbsp;него мяса и&nbsp;мясопродуктов. Животноводы, ветеринарные работники, зоотехники в&nbsp;хозяйствах, энзоотичных по&nbsp;бруцеллезу. Лица, работающие с&nbsp;живыми культурами возбудителя бруцеллеза."},{"number":7,"text":"Лица, занятые в&nbsp;сфере коммунального благоустройства (работники, обслуживающие канализационные сети, сооружения и&nbsp;оборудование, а&nbsp;также организаций, осуществляющих санитарную очистку населенных мест, сбор, транспортировку и&nbsp;утилизацию бытовых отходов). Лица, работающие с&nbsp;живыми культурами возбудителей брюшного тифа. Население, проживающее на&nbsp;территориях с&nbsp;хроническими водными эпидемиями брюшного тифа. Лица, выезжающие в&nbsp;гиперэндемичные по&nbsp;брюшному тифу страны (регионы). Контактные лица в&nbsp;очагах брюшного тифа по&nbsp;эпидемическим показаниям. По&nbsp;эпидемическим показаниям прививки проводят при угрозе возникновения эпидемии или вспышки (стихийные бедствия, крупные аварии на&nbsp;водопроводной и&nbsp;канализационной сети), а&nbsp;также в&nbsp;период эпидемии, при этом в&nbsp;угрожаемом регионе проводят массовую вакцинацию населения."},{"number":8,"text":"Взрослые из&nbsp;групп риска, ранее не&nbsp;привитые и&nbsp;не&nbsp;болевшие ветряной оспой."},{"number":9,"text":"Контактные лица из&nbsp;очагов заболевания, не&nbsp;болевшие, не&nbsp;привитые и&nbsp;не&nbsp;имеющие сведений о&nbsp;профилактических прививках против вирусного гепатита&nbsp;B."},{"number":10,"text":"Лица, выезжающие за&nbsp;пределы Российской Федерации в&nbsp;энзоотичные по желтой лихорадке страны (регионы). Лица, работающие с&nbsp;живыми культурами возбудителя желтой лихорадки."},{"number":11,"text":"Лица, проживающие на&nbsp;эндемичных по&nbsp;клещевому вирусному энцефалиту территориях; лица, выезжающие на&nbsp;эндемичные по&nbsp;клещевому вирусному энцефалиту территории, а&nbsp;также прибывшие на&nbsp;эти территории лица, выполняющие следующие работы: сельскохозяйственные, гидромелиоративные, строительные, по&nbsp;выемке и&nbsp;перемещению грунта, заготовительные, промысловые, геологические, изыскательские, экспедиционные, дератизационные и&nbsp;дезинсекционные; по&nbsp;лесозаготовке, расчистке и&nbsp;благоустройству леса, зон оздоровления и&nbsp;отдыха населения. Лица, работающие с&nbsp;живыми культурами возбудителя клещевого энцефалита."},{"number":12,"text":"Лица, выполняющие следующие работы: по&nbsp;заготовке, хранению, обработке сырья и&nbsp;продуктов животноводства, полученных из&nbsp;хозяйств, расположенных на&nbsp;энзоотичных по&nbsp;лептоспирозу территориях; по&nbsp;убою скота, больного лептоспирозом, заготовке и&nbsp;переработке мяса и&nbsp;мясопродуктов, полученных от&nbsp;больных лептоспирозом животных; по&nbsp;отлову и&nbsp;содержанию безнадзорных животных."},{"number":13,"text":"Лица, выполняющие работы по&nbsp;заготовке, хранению, обработке сырья и&nbsp;продуктов животноводства, полученных из&nbsp;хозяйств, где регистрируются заболевания лихорадкой Ку. Лица, выполняющие работы по&nbsp;заготовке, хранению и&nbsp;переработке сельскохозяйственной продукции на&nbsp;энзоотичных территориях по&nbsp;лихорадке Ку. Лица, работающие с&nbsp;живыми культурами возбудителей лихорадки&nbsp;Ку."},{"number":14,"text":"Контактные лица в&nbsp;очагах полиомиелита; лица, работающие с&nbsp;живым полиовирусом, с&nbsp;материалами, инфицированными (потенциально инфицированными) диким вирусом полиомиелита, без ограничения возраста."},{"number":15,"text":"Лица, выполняющие следующие работы: зооветработники и&nbsp;другие лица, профессионально занятые предубойным содержанием скота, а&nbsp;также убоем, снятием шкур и&nbsp;разделкой туш; сбор, хранение, транспортировка и&nbsp;первичная обработка сырья животного происхождения; сельскохозяйственные, гидромелиоративные, строительные, по&nbsp;выемке и&nbsp;перемещению грунта, заготовительные, промысловые, геологические, изыскательские, экспедиционные на&nbsp;энзоотичных по&nbsp;сибирской язве территориях. Лица, работающие с&nbsp;материалом, подозрительным на&nbsp;инфицирование возбудителем сибирской язвы."},{"number":16,"text":"Лица, проживающие на&nbsp;энзоотичных по&nbsp;туляремии территориях, а&nbsp;также прибывшие на&nbsp;эти территории лица, выполняющие следующие работы: сельскохозяйственные, гидромелиоративные, строительные, другие работы по&nbsp;выемке и&nbsp;перемещению грунта, заготовительные, промысловые, геологические, изыскательские, экспедиционные, дератизационные и&nbsp;дезинсекционные; по&nbsp;лесозаготовке, расчистке и&nbsp;благоустройству леса, зон оздоровления и&nbsp;отдыха населения. Лица, работающие с&nbsp;живыми культурами возбудителя туляремии."},{"number":17,"text":"Лица, выезжающие в&nbsp;неблагополучные по&nbsp;холере страны (регионы). Население субъектов Российской Федерации в&nbsp;случае осложнения санитарно-эпидемиологической обстановки по&nbsp;холере в&nbsp;сопредельных странах, а&nbsp;также на&nbsp;территории Российской Федерации."},{"number":18,"text":"Лица, проживающие на&nbsp;энзоотичных по&nbsp;чуме территориях. Лица, работающие с&nbsp;живыми культурами возбудителя чумы."},{"number":19,"text":"Работники медицинских организаций (их&nbsp;структурных подразделений) инфекционного профиля. Лица, занятые в&nbsp;сфере общественного питания и&nbsp;коммунального благоустройства. По&nbsp;эпидемическим показаниям прививки проводятся при угрозе возникновения эпидемии или вспышки (стихийные бедствия, крупные аварии на&nbsp;водопроводной и&nbsp;канализационной сети), а&nbsp;также в&nbsp;период эпидемии, при этом в&nbsp;угрожаемом регионе проводят массовую вакцинацию населения. Профилактические прививки предпочтительно проводить перед сезонным подъемом заболеваемости шигеллезами."},{"number":20,"text":"Контактные лица из&nbsp;очагов заболевания, не&nbsp;болевшие, не&nbsp;привитые и&nbsp;не&nbsp;имеющие сведений о&nbsp;профилактических прививках против эпидемического паротита."}],"items":[{"name":"Дифтерия","note":"","hint":{"html":"Вакцина: анатоксин, обычно в&nbsp;составе комбинированной вакцины.","link":""},"items":[["55","100500"]]},{"name":"Столбняк","note":"","hint":{"html":"Вакцина: анатоксин, обычно в&nbsp;составе комбинированной вакцины.","link":""},"items":[["55","100500"]]},{"name":"Грипп","note":"1","icons":"WORK_INFECT WAR CHRON","hint":{"html":"Вакцина: убитая, содержит микрочастицы 3 подтипов вируса.","link":""},"items":[{"title":"ANNUAL_RISK_1","items":["55","60"]},{"title":"ANNUAL","items":["60","100500"]}]},{"name":"Корь","note":"","icons":"CONTACTS","hint":{"html":"Вакцина: живая ослабленная, отдельная или в&nbsp;составе комбинированной.","link":""},"items":[{"epid":true,"title":"EPID","items":["55","100500"]}]},{"name":"Пневмококковая инфекция","note":"2","icons":"CHRON","hint":{"html":"Вакцина: убитая, с&nbsp;2&nbsp;мес (13&nbsp;серотипов микроба) и&nbsp;с&nbsp;2&nbsp;лет (23&nbsp;серотипа).","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Гепатита А","note":"2,3","icons":"WORK_INFECT LIVE_TERR VISIT_TERR CONTACTS","hint":{"html":"Вакцины: убитые (инактивированные).","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Менингококковая инфекция","note":"2,4","icons":"LIVE_TERR WAR CONTACTS","hint":{"html":"Вакцина: убитая, защищает от&nbsp;наиболее распространенных серотипов бактерии.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Бешенство","note":"2,5","icons":"WORK_INFECT","hint":{"html":"Вакцина: убитый вирус.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Бруцеллез","note":"2,6","icons":"WORK_INFECT","hint":{"html":"Вакцина: убитая бактерия.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Брюшной тиф","note":"2,7","icons":"WORK_INFECT LIVE_TERR VISIT_TERR CONTACTS","hint":{"html":"Вакцины: частицы бактерии.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Ветряная оспа","note":"2,8","icons":"WAR","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Гепатит В","note":"2,9","icons":"CONTACTS","hint":{"html":"Вакцина: микрочастицы убитого вируса.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Желтая лихорадка","note":"2,10","icons":"VISIT_TERR","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Клещевой вирусный энцефалит","note":"2,11","icons":"WORK_INFECT LIVE_TERR VISIT_TERR","hint":{"html":"Вакцина: убитый вирус.","link":"https://chaika.com/what-do-we-treat/diseases/kleshchevoi-entsefalit"},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Лептоспироз","note":"2,12","icons":"WORK_INFECT","hint":{"html":"Вакцина: убитая бактерия.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Лихорадка Ку","note":"2,13","icons":"WORK_INFECT","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Полиомиелит","note":"2,14","icons":"WORK_INFECT CONTACTS","hint":{"html":"Вакцина: живая ослабленная или убитая (не&nbsp;может вызвать инфекцию), отдельная или в&nbsp;составе комбинированной.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Сибирская язва","note":"2,15","icons":"WORK_INFECT","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Туляремия","note":"2,16","icons":"WORK_INFECT LIVE_TERR","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Холера","note":"2,17","icons":"VISIT_TERR CONTACTS","hint":{"html":"Вакцины: живая ослабленная или убитая.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Чума","note":"2,18","icons":"WORK_INFECT LIVE_TERR","hint":{"html":"Вакцина: живая ослабленная.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Шигеллез","note":"2,19","icons":"WORK_INFECT VISIT_TERR CONTACTS","hint":{"html":"Вакцина: частицы (антигены) бактерии.","link":""},"items":[{"epid":true,"items":["55","100500"]}]},{"name":"Эпидемический паротит","note":"2,20","icons":"CONTACTS","hint":{"html":"Вакцина: живая ослабленная, отдельная или в составе комбинированной.","link":""},"items":[{"epid":true,"items":["55","100500"]}]}]};

/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8b5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d0a7":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-tippy v2.1.3
 * (c) 2019 Georges KABBOUCHI
 * Released under the MIT License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(4);

var plugin = {
  install: function install(Vue, options) {
    Vue.directive('tippy-html', {
      componentUpdated: function componentUpdated(el) {
        var els = el._tipppyReferences;
        if (els && els.length > 0) {
          Vue.nextTick(function () {
            els.forEach(function (et) {
              if (et._tippy) {
                var content = et._tippy.popper.querySelector('.tippy-content');
                content.innerHTML = el.innerHTML;
              }
            });
          });
        }
      },
      unbind: function unbind(el) {
        delete el._tipppyReference;
      }
    });

    function createTippy(el, binding, vnode) {
      var handlers = vnode.data && vnode.data.on || vnode.componentOptions && vnode.componentOptions.listeners;

      var opts = binding.value || {};

      opts = Object.assign({ dynamicTitle: true, reactive: false, showOnLoad: false }, options, opts);

      if (handlers && handlers['show']) {
        opts.onShow = function () {
          handlers['show'].fns(el, vnode);
        };
      }

      if (handlers && handlers['shown']) {
        opts.onShown = function () {
          handlers['shown'].fns(el, vnode);
        };
      }
      if (handlers && handlers['hidden']) {
        opts.onHidden = function () {
          handlers['hidden'].fns(el, vnode);
        };
      }

      if (handlers && handlers['hide']) {
        opts.onHide = function () {
          handlers['hide'].fns(el, vnode);
        };
      }

      if (opts.html) {
        var selector = opts.html;
        if (opts.reactive || !(typeof selector === 'string')) {
          opts.html = selector instanceof Element ? selector : selector instanceof Vue ? selector.$el : document.querySelector(selector);
        } else {
          var htmlElement = document.querySelector(opts.html);
          if (htmlElement) {
            if (htmlElement._tipppyReferences) {
              htmlElement._tipppyReferences.push(el);
            } else {
              htmlElement._tipppyReferences = [el];
            }
          } else {
            console.error('[VueTippy] Selector ' + opts.html + ' not found');
            return;
          }
        }
      }

      if (opts.html || el.getAttribute('data-tippy-html')) {
        opts.dynamicTitle = false;
      }

      if (el.getAttribute('data-tippy-html')) {
        var htmlEl = document.querySelector(el.getAttribute('data-tippy-html'));
        if (htmlEl) {
          if (htmlEl._tipppyReferences) {
            htmlEl._tipppyReferences.push(el);
          } else {
            htmlEl._tipppyReferences = [el];
          }
        } else {
          console.error('[VueTippy] Selector \'' + el.getAttribute('data-tippy-html') + '\' not found', el);
          return;
        }
      }

      new Tippy(el, opts);

      if (opts.showOnLoad) {
        el._tippy.show();
      }

      Vue.nextTick(function () {
        if (handlers && handlers['init']) {
          handlers['init'].fns(el._tippy, el);
        }
      });
    }

    Vue.directive('tippy', {
      inserted: function inserted(el, binding, vnode) {
        Vue.nextTick(function () {
          createTippy(el, binding, vnode);
        });
      },
      unbind: function unbind(el) {
        el._tippy && el._tippy.destroy();
      },
      componentUpdated: function componentUpdated(el, binding, vnode) {
        var opts = binding.value || {};
        var oldOpts = binding.oldValue || {};

        if (el._tippy && JSON.stringify(opts) !== JSON.stringify(oldOpts)) {
          Vue.nextTick(function () {
            createTippy(el, binding, vnode);
          });
        }

        if (el._tippy && el._tippy.popperInstance && opts.show) {
          el._tippy.show();
        } else if (el._tippy && el._tippy.popperInstance && !opts.show && opts.trigger === 'manual') {
          el._tippy.hide();
        }
      }
    });

    Vue.component('tippy', {
      render: function render(createElement) {
        return createElement('div', this.$slots.default);
      },

      props: {
        to: {
          type: String,
          required: true
        },
        placement: {
          type: String,
          default: 'top'
        },
        theme: {
          type: String,
          default: 'light'
        },
        interactive: {
          type: [Boolean, String],
          default: false
        },
        arrow: {
          type: [Boolean, String],
          default: false
        },
        arrowType: {
          type: String,
          default: 'sharp'
        },
        arrowTransform: {
          type: String,
          default: ''
        },
        trigger: {
          type: String,
          default: 'mouseenter focus'
        },
        interactiveBorder: {
          type: Number,
          default: 2
        },
        animation: {
          type: String,
          default: 'shift-away'
        },
        animationFill: {
          type: [Boolean, String],
          default: true
        },
        distance: {
          type: Number,
          default: 10
        },

        delay: {
          type: [Number, Array],
          default: function _default() {
            return [0, 20];
          }
        },
        duration: {
          type: [Number, Array],
          default: function _default() {
            return [325, 275];
          }
        },

        offset: {
          type: Number,
          default: 0
        },
        followCursor: {
          type: [Boolean, String],
          default: false
        },
        sticky: {
          type: [Boolean, String],
          default: false
        },
        size: {
          type: String,
          default: 'regular'
        },
        watchProps: {
          type: [Boolean, String],
          default: false
        }
      },
      watch: {
        '$props': {
          deep: true,
          handler: function handler(val, oldVal) {
            var _this = this;

            document.querySelectorAll('[name=' + this.to + ']').forEach(function (elem) {
              if (!_this.watchProps) return;

              elem._tippy && elem._tippy.destroy();
              var value = Object.assign({ reactive: true, html: _this.$el }, _this.$props);
              createTippy(elem, { value: value }, _this.$vnode);
            });
          }
        }
      },
      mounted: function mounted() {
        var _this2 = this;

        document.querySelectorAll('[name=' + this.to + ']').forEach(function (elem) {
          var value = Object.assign({ reactive: true, html: _this2.$el }, _this2.$props);
          createTippy(elem, { value: value }, _this2.$vnode);
        });
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

exports.default = plugin;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
* Tippy.js v2.6.0
* (c) 2017-2018 atomiks
* MIT
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var styles = ".tippy-touch{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{max-width:350px;-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[data-html]{max-width:96%;max-width:calc(100% - 20px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 90%;transform-origin:0 90%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,25%);transform:scale(6) translate(-50%,25%);opacity:1}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,25%);transform:scale(1) translate(-50%,25%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(90deg);transform:translateY(0) rotateX(90deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -90%;transform-origin:0 -90%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,-125%);transform:scale(6) translate(-50%,-125%);opacity:1}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,-125%);transform:scale(1) translate(-50%,-125%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-90deg);transform:translateY(0) rotateX(-90deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:100% 0;transform-origin:100% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(40%,-50%);transform:scale(6) translate(40%,-50%);opacity:1}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(40%,-50%);transform:scale(1.5) translate(40%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-90deg);transform:translateX(0) rotateY(-90deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-100% 0;transform-origin:-100% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-140%,-50%);transform:scale(6) translate(-140%,-50%);opacity:1}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(-140%,-50%);transform:scale(1.5) translate(-140%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(90deg);transform:translateX(0) rotateY(90deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-animatefill] .tippy-content{transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98),-webkit-clip-path cubic-bezier(.46,.1,.52,.98)}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:26%;left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:\"\";float:left;padding-top:100%}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(100% 100% at 50% 50%);clip-path:ellipse(100% 100% at 50% 50%)}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(5% 50% at 50% 50%);clip-path:ellipse(5% 50% at 50% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 0 50%);clip-path:ellipse(135% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 0 50%);clip-path:ellipse(40% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 100% 50%);clip-path:ellipse(135% 100% at 100% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 100% 50%);clip-path:ellipse(40% 100% at 100% 50%)}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}";

var version = "2.6.0";

var isBrowser = typeof window !== 'undefined';

var isIE = isBrowser && /MSIE |Trident\//.test(navigator.userAgent);

var browser = {};

if (isBrowser) {
  browser.supported = 'requestAnimationFrame' in window;
  browser.supportsTouch = 'ontouchstart' in window;
  browser.usingTouch = false;
  browser.dynamicInputDetection = true;
  browser.iOS = /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;
  browser.onUserInputChange = function () {};
}

/**
 * Selector constants used for grabbing elements
 */
var selectors = {
  POPPER: '.tippy-popper',
  TOOLTIP: '.tippy-tooltip',
  CONTENT: '.tippy-content',
  BACKDROP: '.tippy-backdrop',
  ARROW: '.tippy-arrow',
  ROUND_ARROW: '.tippy-roundarrow',
  REFERENCE: '[data-tippy]'
};

var defaults = {
  placement: 'top',
  livePlacement: true,
  trigger: 'mouseenter focus',
  animation: 'shift-away',
  html: false,
  animateFill: true,
  arrow: false,
  delay: [0, 20],
  duration: [350, 300],
  interactive: false,
  interactiveBorder: 2,
  theme: 'dark',
  size: 'regular',
  distance: 10,
  offset: 0,
  hideOnClick: true,
  multiple: false,
  followCursor: false,
  inertia: false,
  updateDuration: 350,
  sticky: false,
  appendTo: function appendTo() {
    return document.body;
  },
  zIndex: 9999,
  touchHold: false,
  performance: false,
  dynamicTitle: false,
  flip: true,
  flipBehavior: 'flip',
  arrowType: 'sharp',
  arrowTransform: '',
  maxWidth: '',
  target: null,
  allowTitleHTML: true,
  popperOptions: {},
  createPopperInstanceOnInit: false,
  onShow: function onShow() {},
  onShown: function onShown() {},
  onHide: function onHide() {},
  onHidden: function onHidden() {}
};

/**
 * The keys of the defaults object for reducing down into a new object
 * Used in `getIndividualOptions()`
 */
var defaultsKeys = browser.supported && Object.keys(defaults);

/**
 * Determines if a value is an object literal
 * @param {*} value
 * @return {Boolean}
 */
function isObjectLiteral(value) {
  return {}.toString.call(value) === '[object Object]';
}

/**
 * Ponyfill for Array.from
 * @param {*} value
 * @return {Array}
 */
function toArray(value) {
  return [].slice.call(value);
}

/**
 * Returns an array of elements based on the selector input
 * @param {String|Element|Element[]|NodeList|Object} selector
 * @return {Element[]}
 */
function getArrayOfElements(selector) {
  if (selector instanceof Element || isObjectLiteral(selector)) {
    return [selector];
  }

  if (selector instanceof NodeList) {
    return toArray(selector);
  }

  if (Array.isArray(selector)) {
    return selector;
  }

  try {
    return toArray(document.querySelectorAll(selector));
  } catch (_) {
    return [];
  }
}

/**
 * Polyfills needed props/methods for a virtual reference object
 * NOTE: in v3.0 this will be pure
 * @param {Object} reference
 */
function polyfillVirtualReferenceProps(reference) {
  reference.refObj = true;
  reference.attributes = reference.attributes || {};
  reference.setAttribute = function (key, val) {
    reference.attributes[key] = val;
  };
  reference.getAttribute = function (key) {
    return reference.attributes[key];
  };
  reference.removeAttribute = function (key) {
    delete reference.attributes[key];
  };
  reference.hasAttribute = function (key) {
    return key in reference.attributes;
  };
  reference.addEventListener = function () {};
  reference.removeEventListener = function () {};
  reference.classList = {
    classNames: {},
    add: function add(key) {
      return reference.classList.classNames[key] = true;
    },
    remove: function remove(key) {
      delete reference.classList.classNames[key];
      return true;
    },
    contains: function contains(key) {
      return key in reference.classList.classNames;
    }
  };
}

/**
 * Returns the supported prefixed property - only `webkit` is needed, `moz`, `ms` and `o` are obsolete
 * @param {String} property
 * @return {String} - browser supported prefixed property
 */
function prefix(property) {
  var prefixes = ['', 'webkit'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var _prefix = prefixes[i];
    var prefixedProp = _prefix ? _prefix + upperProp : property;
    if (typeof document.body.style[prefixedProp] !== 'undefined') {
      return prefixedProp;
    }
  }

  return null;
}

/**
 * Creates a div element
 * @return {Element}
 */
function div() {
  return document.createElement('div');
}

/**
 * Creates a popper element then returns it
 * @param {Number} id - the popper id
 * @param {String} title - the tooltip's `title` attribute
 * @param {Object} options - individual options
 * @return {Element} - the popper element
 */
function createPopperElement(id, title, options) {
  var popper = div();
  popper.setAttribute('class', 'tippy-popper');
  popper.setAttribute('role', 'tooltip');
  popper.setAttribute('id', 'tippy-' + id);
  popper.style.zIndex = options.zIndex;
  popper.style.maxWidth = options.maxWidth;

  var tooltip = div();
  tooltip.setAttribute('class', 'tippy-tooltip');
  tooltip.setAttribute('data-size', options.size);
  tooltip.setAttribute('data-animation', options.animation);
  tooltip.setAttribute('data-state', 'hidden');
  options.theme.split(' ').forEach(function (t) {
    tooltip.classList.add(t + '-theme');
  });

  var content = div();
  content.setAttribute('class', 'tippy-content');

  if (options.arrow) {
    var arrow = div();
    arrow.style[prefix('transform')] = options.arrowTransform;

    if (options.arrowType === 'round') {
      arrow.classList.add('tippy-roundarrow');
      arrow.innerHTML = '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>';
    } else {
      arrow.classList.add('tippy-arrow');
    }

    tooltip.appendChild(arrow);
  }

  if (options.animateFill) {
    // Create animateFill circle element for animation
    tooltip.setAttribute('data-animatefill', '');
    var backdrop = div();
    backdrop.classList.add('tippy-backdrop');
    backdrop.setAttribute('data-state', 'hidden');
    tooltip.appendChild(backdrop);
  }

  if (options.inertia) {
    // Change transition timing function cubic bezier
    tooltip.setAttribute('data-inertia', '');
  }

  if (options.interactive) {
    tooltip.setAttribute('data-interactive', '');
  }

  var html = options.html;
  if (html) {
    var templateId = void 0;

    if (html instanceof Element) {
      content.appendChild(html);
      templateId = '#' + (html.id || 'tippy-html-template');
    } else {
      // trick linters: https://github.com/atomiks/tippyjs/issues/197
      content[ true && 'innerHTML'] = document.querySelector(html)[ true && 'innerHTML'];
      templateId = html;
    }

    popper.setAttribute('data-html', '');
    tooltip.setAttribute('data-template-id', templateId);

    if (options.interactive) {
      popper.setAttribute('tabindex', '-1');
    }
  } else {
    content[options.allowTitleHTML ? 'innerHTML' : 'textContent'] = title;
  }

  tooltip.appendChild(content);
  popper.appendChild(tooltip);

  return popper;
}

/**
 * Creates a trigger by adding the necessary event listeners to the reference element
 * @param {String} eventType - the custom event specified in the `trigger` setting
 * @param {Element} reference
 * @param {Object} handlers - the handlers for each event
 * @param {Object} options
 * @return {Array} - array of listener objects
 */
function createTrigger(eventType, reference, handlers, options) {
  var onTrigger = handlers.onTrigger,
      onMouseLeave = handlers.onMouseLeave,
      onBlur = handlers.onBlur,
      onDelegateShow = handlers.onDelegateShow,
      onDelegateHide = handlers.onDelegateHide;

  var listeners = [];

  if (eventType === 'manual') return listeners;

  var on = function on(eventType, handler) {
    reference.addEventListener(eventType, handler);
    listeners.push({ event: eventType, handler: handler });
  };

  if (!options.target) {
    on(eventType, onTrigger);

    if (browser.supportsTouch && options.touchHold) {
      on('touchstart', onTrigger);
      on('touchend', onMouseLeave);
    }
    if (eventType === 'mouseenter') {
      on('mouseleave', onMouseLeave);
    }
    if (eventType === 'focus') {
      on(isIE ? 'focusout' : 'blur', onBlur);
    }
  } else {
    if (browser.supportsTouch && options.touchHold) {
      on('touchstart', onDelegateShow);
      on('touchend', onDelegateHide);
    }
    if (eventType === 'mouseenter') {
      on('mouseover', onDelegateShow);
      on('mouseout', onDelegateHide);
    }
    if (eventType === 'focus') {
      on('focusin', onDelegateShow);
      on('focusout', onDelegateHide);
    }
    if (eventType === 'click') {
      on('click', onDelegateShow);
    }
  }

  return listeners;
}

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

/**
 * Returns an object of settings to override global settings
 * @param {Element} reference
 * @param {Object} instanceOptions
 * @return {Object} - individual options
 */
function getIndividualOptions(reference, instanceOptions) {
  var options = defaultsKeys.reduce(function (acc, key) {
    var val = reference.getAttribute('data-tippy-' + key.toLowerCase()) || instanceOptions[key];

    // Convert strings to booleans
    if (val === 'false') val = false;
    if (val === 'true') val = true;

    // Convert number strings to true numbers
    if (isFinite(val) && !isNaN(parseFloat(val))) {
      val = parseFloat(val);
    }

    // Convert array strings to actual arrays
    if (key !== 'target' && typeof val === 'string' && val.trim().charAt(0) === '[') {
      val = JSON.parse(val);
    }

    acc[key] = val;

    return acc;
  }, {});

  return _extends({}, instanceOptions, options);
}

/**
 * Evaluates/modifies the options object for appropriate behavior
 * @param {Element|Object} reference
 * @param {Object} options
 * @return {Object} modified/evaluated options
 */
function evaluateOptions(reference, options) {
  // animateFill is disabled if an arrow is true
  if (options.arrow) {
    options.animateFill = false;
  }

  if (options.appendTo && typeof options.appendTo === 'function') {
    options.appendTo = options.appendTo();
  }

  if (typeof options.html === 'function') {
    options.html = options.html(reference);
  }

  return options;
}

/**
 * Returns inner elements of the popper element
 * @param {Element} popper
 * @return {Object}
 */
function getInnerElements(popper) {
  var select = function select(s) {
    return popper.querySelector(s);
  };
  return {
    tooltip: select(selectors.TOOLTIP),
    backdrop: select(selectors.BACKDROP),
    content: select(selectors.CONTENT),
    arrow: select(selectors.ARROW) || select(selectors.ROUND_ARROW)
  };
}

/**
 * Removes the title from an element, setting `data-original-title`
 * appropriately
 * @param {Element} el
 */
function removeTitle(el) {
  var title = el.getAttribute('title');
  // Only set `data-original-title` attr if there is a title
  if (title) {
    el.setAttribute('data-original-title', title);
  }
  el.removeAttribute('title');
}

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.4
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser$1 && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE$1(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE$1(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE$1(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE$1(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck$1 = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
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

var defineProperty$1 = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

var _extends$1 = Object.assign || function (target) {
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

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE$1(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE$1(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE$1()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$1(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/**
 * Triggers document reflow.
 * Use void because some minifiers or engines think simply accessing the property
 * is unnecessary.
 * @param {Element} popper
 */
function reflow(popper) {
  void popper.offsetHeight;
}

/**
 * Wrapper util for popper position updating.
 * Updates the popper's position and invokes the callback on update.
 * Hackish workaround until Popper 2.0's update() becomes sync.
 * @param {Popper} popperInstance
 * @param {Function} callback: to run once popper's position was updated
 * @param {Boolean} updateAlreadyCalled: was scheduleUpdate() already called?
 */
function updatePopperPosition(popperInstance, callback, updateAlreadyCalled) {
  var popper = popperInstance.popper,
      options = popperInstance.options;

  var onCreate = options.onCreate;
  var onUpdate = options.onUpdate;

  options.onCreate = options.onUpdate = function () {
    reflow(popper), callback && callback(), onUpdate();
    options.onCreate = onCreate;
    options.onUpdate = onUpdate;
  };

  if (!updateAlreadyCalled) {
    popperInstance.scheduleUpdate();
  }
}

/**
 * Returns the core placement ('top', 'bottom', 'left', 'right') of a popper
 * @param {Element} popper
 * @return {String}
 */
function getPopperPlacement(popper) {
  return popper.getAttribute('x-placement').replace(/-.+/, '');
}

/**
 * Determines if the mouse's cursor is outside the interactive border
 * @param {MouseEvent} event
 * @param {Element} popper
 * @param {Object} options
 * @return {Boolean}
 */
function cursorIsOutsideInteractiveBorder(event, popper, options) {
  if (!popper.getAttribute('x-placement')) return true;

  var x = event.clientX,
      y = event.clientY;
  var interactiveBorder = options.interactiveBorder,
      distance = options.distance;


  var rect = popper.getBoundingClientRect();
  var placement = getPopperPlacement(popper);
  var borderWithDistance = interactiveBorder + distance;

  var exceeds = {
    top: rect.top - y > interactiveBorder,
    bottom: y - rect.bottom > interactiveBorder,
    left: rect.left - x > interactiveBorder,
    right: x - rect.right > interactiveBorder
  };

  switch (placement) {
    case 'top':
      exceeds.top = rect.top - y > borderWithDistance;
      break;
    case 'bottom':
      exceeds.bottom = y - rect.bottom > borderWithDistance;
      break;
    case 'left':
      exceeds.left = rect.left - x > borderWithDistance;
      break;
    case 'right':
      exceeds.right = x - rect.right > borderWithDistance;
      break;
  }

  return exceeds.top || exceeds.bottom || exceeds.left || exceeds.right;
}

/**
 * Transforms the `arrowTransform` numbers based on the placement axis
 * @param {String} type 'scale' or 'translate'
 * @param {Number[]} numbers
 * @param {Boolean} isVertical
 * @param {Boolean} isReverse
 * @return {String}
 */
function transformNumbersBasedOnPlacementAxis(type, numbers, isVertical, isReverse) {
  if (!numbers.length) return '';

  var transforms = {
    scale: function () {
      if (numbers.length === 1) {
        return '' + numbers[0];
      } else {
        return isVertical ? numbers[0] + ', ' + numbers[1] : numbers[1] + ', ' + numbers[0];
      }
    }(),
    translate: function () {
      if (numbers.length === 1) {
        return isReverse ? -numbers[0] + 'px' : numbers[0] + 'px';
      } else {
        if (isVertical) {
          return isReverse ? numbers[0] + 'px, ' + -numbers[1] + 'px' : numbers[0] + 'px, ' + numbers[1] + 'px';
        } else {
          return isReverse ? -numbers[1] + 'px, ' + numbers[0] + 'px' : numbers[1] + 'px, ' + numbers[0] + 'px';
        }
      }
    }()
  };

  return transforms[type];
}

/**
 * Transforms the `arrowTransform` x or y axis based on the placement axis
 * @param {String} axis 'X', 'Y', ''
 * @param {Boolean} isVertical
 * @return {String}
 */
function transformAxis(axis, isVertical) {
  if (!axis) return '';
  var map = {
    X: 'Y',
    Y: 'X'
  };
  return isVertical ? axis : map[axis];
}

/**
 * Computes and applies the necessary arrow transform
 * @param {Element} popper
 * @param {Element} arrow
 * @param {String} arrowTransform
 */
function computeArrowTransform(popper, arrow, arrowTransform) {
  var placement = getPopperPlacement(popper);
  var isVertical = placement === 'top' || placement === 'bottom';
  var isReverse = placement === 'right' || placement === 'bottom';

  var getAxis = function getAxis(re) {
    var match = arrowTransform.match(re);
    return match ? match[1] : '';
  };

  var getNumbers = function getNumbers(re) {
    var match = arrowTransform.match(re);
    return match ? match[1].split(',').map(parseFloat) : [];
  };

  var re = {
    translate: /translateX?Y?\(([^)]+)\)/,
    scale: /scaleX?Y?\(([^)]+)\)/
  };

  var matches = {
    translate: {
      axis: getAxis(/translate([XY])/),
      numbers: getNumbers(re.translate)
    },
    scale: {
      axis: getAxis(/scale([XY])/),
      numbers: getNumbers(re.scale)
    }
  };

  var computedTransform = arrowTransform.replace(re.translate, 'translate' + transformAxis(matches.translate.axis, isVertical) + '(' + transformNumbersBasedOnPlacementAxis('translate', matches.translate.numbers, isVertical, isReverse) + ')').replace(re.scale, 'scale' + transformAxis(matches.scale.axis, isVertical) + '(' + transformNumbersBasedOnPlacementAxis('scale', matches.scale.numbers, isVertical, isReverse) + ')');

  arrow.style[prefix('transform')] = computedTransform;
}

/**
 * Returns the distance taking into account the default distance due to
 * the transform: translate setting in CSS
 * @param {Number} distance
 * @return {String}
 */
function getOffsetDistanceInPx(distance) {
  return -(distance - defaults.distance) + 'px';
}

var matches = {};

if (isBrowser) {
  var e = Element.prototype;
  matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s);
    var i = matches.length;
    while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line no-empty
    return i > -1;
  };
}

var matches$1 = matches;

/**
 * Ponyfill to get the closest parent element
 * @param {Element} element - child of parent to be returned
 * @param {String} parentSelector - selector to match the parent if found
 * @return {Element}
 */
function closest(element, parentSelector) {
  var fn = Element.prototype.closest || function (selector) {
    var el = this;
    while (el) {
      if (matches$1.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
  };

  return fn.call(element, parentSelector);
}

/**
 * Returns the value taking into account the value being either a number or array
 * @param {Number|Array} value
 * @param {Number} index
 * @return {Number}
 */
function getValue(value, index) {
  return Array.isArray(value) ? value[index] : value;
}

/**
 * Sets the visibility state of an element for transition to begin
 * @param {Element[]} els - array of elements
 * @param {String} type - 'visible' or 'hidden'
 */
function setVisibilityState(els, type) {
  els.forEach(function (el) {
    if (!el) return;
    el.setAttribute('data-state', type);
  });
}

/**
 * Sets the transition property to each element
 * @param {Element[]} els - Array of elements
 * @param {String} value
 */
function applyTransitionDuration(els, value) {
  els.filter(Boolean).forEach(function (el) {
    el.style[prefix('transitionDuration')] = value + 'ms';
  });
}

/**
 * Focuses an element while preventing a scroll jump if it's not entirely within the viewport
 * @param {Element} el
 */
function focus(el) {
  var x = window.scrollX || window.pageXOffset;
  var y = window.scrollY || window.pageYOffset;
  el.focus();
  scroll(x, y);
}

var key = {};
var store = function store(data) {
  return function (k) {
    return k === key && data;
  };
};

var Tippy = function () {
  function Tippy(config) {
    classCallCheck(this, Tippy);

    for (var _key in config) {
      this[_key] = config[_key];
    }

    this.state = {
      destroyed: false,
      visible: false,
      enabled: true
    };

    this._ = store({
      mutationObservers: []
    });
  }

  /**
   * Enables the tooltip to allow it to show or hide
   * @memberof Tippy
   * @public
   */


  createClass(Tippy, [{
    key: 'enable',
    value: function enable() {
      this.state.enabled = true;
    }

    /**
     * Disables the tooltip from showing or hiding, but does not destroy it
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.state.enabled = false;
    }

    /**
     * Shows the tooltip
     * @param {Number} duration in milliseconds
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'show',
    value: function show(duration) {
      var _this = this;

      if (this.state.destroyed || !this.state.enabled) return;

      var popper = this.popper,
          reference = this.reference,
          options = this.options;

      var _getInnerElements = getInnerElements(popper),
          tooltip = _getInnerElements.tooltip,
          backdrop = _getInnerElements.backdrop,
          content = _getInnerElements.content;

      // If the `dynamicTitle` option is true, the instance is allowed
      // to be created with an empty title. Make sure that the tooltip
      // content is not empty before showing it


      if (options.dynamicTitle && !reference.getAttribute('data-original-title')) {
        return;
      }

      // Do not show tooltip if reference contains 'disabled' attribute. FF fix for #221
      if (reference.hasAttribute('disabled')) return;

      // Destroy tooltip if the reference element is no longer on the DOM
      if (!reference.refObj && !document.documentElement.contains(reference)) {
        this.destroy();
        return;
      }

      options.onShow.call(popper, this);

      duration = getValue(duration !== undefined ? duration : options.duration, 0);

      // Prevent a transition when popper changes position
      applyTransitionDuration([popper, tooltip, backdrop], 0);

      popper.style.visibility = 'visible';
      this.state.visible = true;

      _mount.call(this, function () {
        if (!_this.state.visible) return;

        if (!_hasFollowCursorBehavior.call(_this)) {
          // FIX: Arrow will sometimes not be positioned correctly. Force another update.
          _this.popperInstance.scheduleUpdate();
        }

        // Set initial position near the cursor
        if (_hasFollowCursorBehavior.call(_this)) {
          _this.popperInstance.disableEventListeners();
          var delay = getValue(options.delay, 0);
          var lastTriggerEvent = _this._(key).lastTriggerEvent;
          if (lastTriggerEvent) {
            _this._(key).followCursorListener(delay && _this._(key).lastMouseMoveEvent ? _this._(key).lastMouseMoveEvent : lastTriggerEvent);
          }
        }

        // Re-apply transition durations
        applyTransitionDuration([tooltip, backdrop, backdrop ? content : null], duration);

        if (backdrop) {
          getComputedStyle(backdrop)[prefix('transform')];
        }

        if (options.interactive) {
          reference.classList.add('tippy-active');
        }

        if (options.sticky) {
          _makeSticky.call(_this);
        }

        setVisibilityState([tooltip, backdrop], 'visible');

        _onTransitionEnd.call(_this, duration, function () {
          if (!options.updateDuration) {
            tooltip.classList.add('tippy-notransition');
          }

          if (options.interactive) {
            focus(popper);
          }

          reference.setAttribute('aria-describedby', 'tippy-' + _this.id);

          options.onShown.call(popper, _this);
        });
      });
    }

    /**
     * Hides the tooltip
     * @param {Number} duration in milliseconds
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'hide',
    value: function hide(duration) {
      var _this2 = this;

      if (this.state.destroyed || !this.state.enabled) return;

      var popper = this.popper,
          reference = this.reference,
          options = this.options;

      var _getInnerElements2 = getInnerElements(popper),
          tooltip = _getInnerElements2.tooltip,
          backdrop = _getInnerElements2.backdrop,
          content = _getInnerElements2.content;

      options.onHide.call(popper, this);

      duration = getValue(duration !== undefined ? duration : options.duration, 1);

      if (!options.updateDuration) {
        tooltip.classList.remove('tippy-notransition');
      }

      if (options.interactive) {
        reference.classList.remove('tippy-active');
      }

      popper.style.visibility = 'hidden';
      this.state.visible = false;

      applyTransitionDuration([tooltip, backdrop, backdrop ? content : null], duration);

      setVisibilityState([tooltip, backdrop], 'hidden');

      if (options.interactive && options.trigger.indexOf('click') > -1) {
        focus(reference);
      }

      _onTransitionEnd.call(this, duration, function () {
        if (_this2.state.visible || !options.appendTo.contains(popper)) return;

        if (!_this2._(key).isPreparingToShow) {
          document.removeEventListener('mousemove', _this2._(key).followCursorListener);
          _this2._(key).lastMouseMoveEvent = null;
        }

        if (_this2.popperInstance) {
          _this2.popperInstance.disableEventListeners();
        }

        reference.removeAttribute('aria-describedby');

        options.appendTo.removeChild(popper);

        options.onHidden.call(popper, _this2);
      });
    }

    /**
     * Destroys the tooltip instance
     * @param {Boolean} destroyTargetInstances - relevant only when destroying delegates
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      var destroyTargetInstances = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.state.destroyed) return;

      // Ensure the popper is hidden
      if (this.state.visible) {
        this.hide(0);
      }

      this.listeners.forEach(function (listener) {
        _this3.reference.removeEventListener(listener.event, listener.handler);
      });

      // Restore title
      if (this.title) {
        this.reference.setAttribute('title', this.title);
      }

      delete this.reference._tippy;

      var attributes = ['data-original-title', 'data-tippy', 'data-tippy-delegate'];
      attributes.forEach(function (attr) {
        _this3.reference.removeAttribute(attr);
      });

      if (this.options.target && destroyTargetInstances) {
        toArray(this.reference.querySelectorAll(this.options.target)).forEach(function (child) {
          return child._tippy && child._tippy.destroy();
        });
      }

      if (this.popperInstance) {
        this.popperInstance.destroy();
      }

      this._(key).mutationObservers.forEach(function (observer) {
        observer.disconnect();
      });

      this.state.destroyed = true;
    }
  }]);
  return Tippy;
}();

/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 * Standalone functions to be called with the instance's `this` context to make
 * them truly private and not accessible on the prototype
 */

/**
 * Determines if the tooltip instance has followCursor behavior
 * @return {Boolean}
 * @memberof Tippy
 * @private
 */
function _hasFollowCursorBehavior() {
  var lastTriggerEvent = this._(key).lastTriggerEvent;
  return this.options.followCursor && !browser.usingTouch && lastTriggerEvent && lastTriggerEvent.type !== 'focus';
}

/**
 * Creates the Tippy instance for the child target of the delegate container
 * @param {Event} event
 * @memberof Tippy
 * @private
 */
function _createDelegateChildTippy(event) {
  var targetEl = closest(event.target, this.options.target);
  if (targetEl && !targetEl._tippy) {
    var title = targetEl.getAttribute('title') || this.title;
    if (title) {
      targetEl.setAttribute('title', title);
      tippy(targetEl, _extends({}, this.options, { target: null }));
      _enter.call(targetEl._tippy, event);
    }
  }
}

/**
 * Method used by event listeners to invoke the show method, taking into account delays and
 * the `wait` option
 * @param {Event} event
 * @memberof Tippy
 * @private
 */
function _enter(event) {
  var _this4 = this;

  var options = this.options;


  _clearDelayTimeouts.call(this);

  if (this.state.visible) return;

  // Is a delegate, create Tippy instance for the child target
  if (options.target) {
    _createDelegateChildTippy.call(this, event);
    return;
  }

  this._(key).isPreparingToShow = true;

  if (options.wait) {
    options.wait.call(this.popper, this.show.bind(this), event);
    return;
  }

  // If the tooltip has a delay, we need to be listening to the mousemove as soon as the trigger
  // event is fired so that it's in the correct position upon mount.
  if (_hasFollowCursorBehavior.call(this)) {
    if (!this._(key).followCursorListener) {
      _setFollowCursorListener.call(this);
    }

    var _getInnerElements3 = getInnerElements(this.popper),
        arrow = _getInnerElements3.arrow;

    if (arrow) arrow.style.margin = '0';
    document.addEventListener('mousemove', this._(key).followCursorListener);
  }

  var delay = getValue(options.delay, 0);

  if (delay) {
    this._(key).showTimeout = setTimeout(function () {
      _this4.show();
    }, delay);
  } else {
    this.show();
  }
}

/**
 * Method used by event listeners to invoke the hide method, taking into account delays
 * @memberof Tippy
 * @private
 */
function _leave() {
  var _this5 = this;

  _clearDelayTimeouts.call(this);

  if (!this.state.visible) return;

  this._(key).isPreparingToShow = false;

  var delay = getValue(this.options.delay, 1);

  if (delay) {
    this._(key).hideTimeout = setTimeout(function () {
      if (_this5.state.visible) {
        _this5.hide();
      }
    }, delay);
  } else {
    this.hide();
  }
}

/**
 * Returns relevant listeners for the instance
 * @return {Object} of listeners
 * @memberof Tippy
 * @private
 */
function _getEventListeners() {
  var _this6 = this;

  var onTrigger = function onTrigger(event) {
    if (!_this6.state.enabled) return;

    var shouldStopEvent = browser.supportsTouch && browser.usingTouch && ['mouseenter', 'mouseover', 'focus'].indexOf(event.type) > -1;

    if (shouldStopEvent && _this6.options.touchHold) return;

    _this6._(key).lastTriggerEvent = event;

    // Toggle show/hide when clicking click-triggered tooltips
    if (event.type === 'click' && _this6.options.hideOnClick !== 'persistent' && _this6.state.visible) {
      _leave.call(_this6);
    } else {
      _enter.call(_this6, event);
    }
  };

  var onMouseLeave = function onMouseLeave(event) {
    if (['mouseleave', 'mouseout'].indexOf(event.type) > -1 && browser.supportsTouch && browser.usingTouch && _this6.options.touchHold) return;

    if (_this6.options.interactive) {
      var hide = _leave.bind(_this6);

      var onMouseMove = function onMouseMove(event) {
        var referenceCursorIsOver = closest(event.target, selectors.REFERENCE);
        var cursorIsOverPopper = closest(event.target, selectors.POPPER) === _this6.popper;
        var cursorIsOverReference = referenceCursorIsOver === _this6.reference;

        if (cursorIsOverPopper || cursorIsOverReference) return;

        if (cursorIsOutsideInteractiveBorder(event, _this6.popper, _this6.options)) {
          document.body.removeEventListener('mouseleave', hide);
          document.removeEventListener('mousemove', onMouseMove);

          _leave.call(_this6, onMouseMove);
        }
      };

      document.body.addEventListener('mouseleave', hide);
      document.addEventListener('mousemove', onMouseMove);
      return;
    }

    _leave.call(_this6);
  };

  var onBlur = function onBlur(event) {
    if (event.target !== _this6.reference || browser.usingTouch) return;

    if (_this6.options.interactive) {
      if (!event.relatedTarget) return;
      if (closest(event.relatedTarget, selectors.POPPER)) return;
    }

    _leave.call(_this6);
  };

  var onDelegateShow = function onDelegateShow(event) {
    if (closest(event.target, _this6.options.target)) {
      _enter.call(_this6, event);
    }
  };

  var onDelegateHide = function onDelegateHide(event) {
    if (closest(event.target, _this6.options.target)) {
      _leave.call(_this6);
    }
  };

  return {
    onTrigger: onTrigger,
    onMouseLeave: onMouseLeave,
    onBlur: onBlur,
    onDelegateShow: onDelegateShow,
    onDelegateHide: onDelegateHide
  };
}

/**
 * Creates and returns a new popper instance
 * @return {Popper}
 * @memberof Tippy
 * @private
 */
function _createPopperInstance() {
  var _this7 = this;

  var popper = this.popper,
      reference = this.reference,
      options = this.options;

  var _getInnerElements4 = getInnerElements(popper),
      tooltip = _getInnerElements4.tooltip;

  var popperOptions = options.popperOptions;

  var arrowSelector = options.arrowType === 'round' ? selectors.ROUND_ARROW : selectors.ARROW;
  var arrow = tooltip.querySelector(arrowSelector);

  var config = _extends({
    placement: options.placement
  }, popperOptions || {}, {
    modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
      arrow: _extends({
        element: arrowSelector
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.arrow : {}),
      flip: _extends({
        enabled: options.flip,
        padding: options.distance + 5 /* 5px from viewport boundary */
        , behavior: options.flipBehavior
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.flip : {}),
      offset: _extends({
        offset: options.offset
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.offset : {})
    }),
    onCreate: function onCreate() {
      tooltip.style[getPopperPlacement(popper)] = getOffsetDistanceInPx(options.distance);

      if (arrow && options.arrowTransform) {
        computeArrowTransform(popper, arrow, options.arrowTransform);
      }
    },
    onUpdate: function onUpdate() {
      var styles = tooltip.style;
      styles.top = '';
      styles.bottom = '';
      styles.left = '';
      styles.right = '';
      styles[getPopperPlacement(popper)] = getOffsetDistanceInPx(options.distance);

      if (arrow && options.arrowTransform) {
        computeArrowTransform(popper, arrow, options.arrowTransform);
      }
    }
  });

  _addMutationObserver.call(this, {
    target: popper,
    callback: function callback() {
      _this7.popperInstance.update();
    },
    options: {
      childList: true,
      subtree: true,
      characterData: true
    }
  });

  return new Popper(reference, popper, config);
}

/**
 * Appends the popper element to the DOM, updating or creating the popper instance
 * @param {Function} callback
 * @memberof Tippy
 * @private
 */
function _mount(callback) {
  var options = this.options;


  if (!this.popperInstance) {
    this.popperInstance = _createPopperInstance.call(this);
    if (!options.livePlacement) {
      this.popperInstance.disableEventListeners();
    }
  } else {
    this.popperInstance.scheduleUpdate();
    if (options.livePlacement && !_hasFollowCursorBehavior.call(this)) {
      this.popperInstance.enableEventListeners();
    }
  }

  // If the instance previously had followCursor behavior, it will be positioned incorrectly
  // if triggered by `focus` afterwards - update the reference back to the real DOM element
  if (!_hasFollowCursorBehavior.call(this)) {
    var _getInnerElements5 = getInnerElements(this.popper),
        arrow = _getInnerElements5.arrow;

    if (arrow) arrow.style.margin = '';
    this.popperInstance.reference = this.reference;
  }

  updatePopperPosition(this.popperInstance, callback, true);

  if (!options.appendTo.contains(this.popper)) {
    options.appendTo.appendChild(this.popper);
  }
}

/**
 * Clears the show and hide delay timeouts
 * @memberof Tippy
 * @private
 */
function _clearDelayTimeouts() {
  var _ref = this._(key),
      showTimeout = _ref.showTimeout,
      hideTimeout = _ref.hideTimeout;

  clearTimeout(showTimeout);
  clearTimeout(hideTimeout);
}

/**
 * Sets the mousemove event listener function for `followCursor` option
 * @memberof Tippy
 * @private
 */
function _setFollowCursorListener() {
  var _this8 = this;

  this._(key).followCursorListener = function (event) {
    var _$lastMouseMoveEvent = _this8._(key).lastMouseMoveEvent = event,
        clientX = _$lastMouseMoveEvent.clientX,
        clientY = _$lastMouseMoveEvent.clientY;

    if (!_this8.popperInstance) return;

    _this8.popperInstance.reference = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          top: clientY,
          left: clientX,
          right: clientX,
          bottom: clientY
        };
      },
      clientWidth: 0,
      clientHeight: 0
    };

    _this8.popperInstance.scheduleUpdate();
  };
}

/**
 * Updates the popper's position on each animation frame
 * @memberof Tippy
 * @private
 */
function _makeSticky() {
  var _this9 = this;

  var applyTransitionDuration$$1 = function applyTransitionDuration$$1() {
    _this9.popper.style[prefix('transitionDuration')] = _this9.options.updateDuration + 'ms';
  };

  var removeTransitionDuration = function removeTransitionDuration() {
    _this9.popper.style[prefix('transitionDuration')] = '';
  };

  var updatePosition = function updatePosition() {
    if (_this9.popperInstance) {
      _this9.popperInstance.update();
    }

    applyTransitionDuration$$1();

    if (_this9.state.visible) {
      requestAnimationFrame(updatePosition);
    } else {
      removeTransitionDuration();
    }
  };

  updatePosition();
}

/**
 * Adds a mutation observer to an element and stores it in the instance
 * @param {Object}
 * @memberof Tippy
 * @private
 */
function _addMutationObserver(_ref2) {
  var target = _ref2.target,
      callback = _ref2.callback,
      options = _ref2.options;

  if (!window.MutationObserver) return;

  var observer = new MutationObserver(callback);
  observer.observe(target, options);

  this._(key).mutationObservers.push(observer);
}

/**
 * Fires the callback functions once the CSS transition ends for `show` and `hide` methods
 * @param {Number} duration
 * @param {Function} callback - callback function to fire once transition completes
 * @memberof Tippy
 * @private
 */
function _onTransitionEnd(duration, callback) {
  // Make callback synchronous if duration is 0
  if (!duration) {
    return callback();
  }

  var _getInnerElements6 = getInnerElements(this.popper),
      tooltip = _getInnerElements6.tooltip;

  var toggleListeners = function toggleListeners(action, listener) {
    if (!listener) return;
    tooltip[action + 'EventListener']('transition' in document.body.style ? 'transitionend' : 'webkitTransitionEnd', listener);
  };

  var listener = function listener(e) {
    if (e.target === tooltip) {
      toggleListeners('remove', listener);
      callback();
    }
  };

  toggleListeners('remove', this._(key).transitionendListener);
  toggleListeners('add', listener);

  this._(key).transitionendListener = listener;
}

var idCounter = 1;

/**
 * Creates tooltips for each reference element
 * @param {Element[]} els
 * @param {Object} config
 * @return {Tippy[]} Array of Tippy instances
 */
function createTooltips(els, config) {
  return els.reduce(function (acc, reference) {
    var id = idCounter;

    var options = evaluateOptions(reference, config.performance ? config : getIndividualOptions(reference, config));

    var title = reference.getAttribute('title');

    // Don't create an instance when:
    // * the `title` attribute is falsy (null or empty string), and
    // * it's not a delegate for tooltips, and
    // * there is no html template specified, and
    // * `dynamicTitle` option is false
    if (!title && !options.target && !options.html && !options.dynamicTitle) {
      return acc;
    }

    // Delegates should be highlighted as different
    reference.setAttribute(options.target ? 'data-tippy-delegate' : 'data-tippy', '');

    removeTitle(reference);

    var popper = createPopperElement(id, title, options);

    var tippy = new Tippy({
      id: id,
      reference: reference,
      popper: popper,
      options: options,
      title: title,
      popperInstance: null
    });

    if (options.createPopperInstanceOnInit) {
      tippy.popperInstance = _createPopperInstance.call(tippy);
      tippy.popperInstance.disableEventListeners();
    }

    var listeners = _getEventListeners.call(tippy);
    tippy.listeners = options.trigger.trim().split(' ').reduce(function (acc, eventType) {
      return acc.concat(createTrigger(eventType, reference, listeners, options));
    }, []);

    // Update tooltip content whenever the title attribute on the reference changes
    if (options.dynamicTitle) {
      _addMutationObserver.call(tippy, {
        target: reference,
        callback: function callback() {
          var _getInnerElements = getInnerElements(popper),
              content = _getInnerElements.content;

          var title = reference.getAttribute('title');
          if (title) {
            content[options.allowTitleHTML ? 'innerHTML' : 'textContent'] = tippy.title = title;
            removeTitle(reference);
          }
        },

        options: {
          attributes: true
        }
      });
    }

    // Shortcuts
    reference._tippy = tippy;
    popper._tippy = tippy;
    popper._reference = reference;

    acc.push(tippy);

    idCounter++;

    return acc;
  }, []);
}

/**
 * Hides all poppers
 * @param {Tippy} excludeTippy - tippy to exclude if needed
 */
function hideAllPoppers(excludeTippy) {
  var poppers = toArray(document.querySelectorAll(selectors.POPPER));

  poppers.forEach(function (popper) {
    var tippy = popper._tippy;
    if (!tippy) return;

    var options = tippy.options;


    if ((options.hideOnClick === true || options.trigger.indexOf('focus') > -1) && (!excludeTippy || popper !== excludeTippy.popper)) {
      tippy.hide();
    }
  });
}

/**
 * Adds the needed event listeners
 */
function bindEventListeners(useCapture) {
  var onDocumentTouch = function onDocumentTouch() {
    if (browser.usingTouch) return;

    browser.usingTouch = true;

    if (browser.iOS) {
      document.body.classList.add('tippy-touch');
    }

    if (browser.dynamicInputDetection && window.performance) {
      document.addEventListener('mousemove', onDocumentMouseMove);
    }

    browser.onUserInputChange('touch');
  };

  var onDocumentMouseMove = function () {
    var time = void 0;

    return function () {
      var now = performance.now();

      // Chrome 60+ is 1 mousemove per animation frame, use 20ms time difference
      if (now - time < 20) {
        browser.usingTouch = false;
        document.removeEventListener('mousemove', onDocumentMouseMove);
        if (!browser.iOS) {
          document.body.classList.remove('tippy-touch');
        }
        browser.onUserInputChange('mouse');
      }

      time = now;
    };
  }();

  var onDocumentClick = function onDocumentClick(event) {
    // Simulated events dispatched on the document
    if (!(event.target instanceof Element)) {
      return hideAllPoppers();
    }

    var reference = closest(event.target, selectors.REFERENCE);
    var popper = closest(event.target, selectors.POPPER);

    if (popper && popper._tippy && popper._tippy.options.interactive) {
      return;
    }

    if (reference && reference._tippy) {
      var options = reference._tippy.options;

      var isClickTrigger = options.trigger.indexOf('click') > -1;
      var isMultiple = options.multiple;

      // Hide all poppers except the one belonging to the element that was clicked
      if (!isMultiple && browser.usingTouch || !isMultiple && isClickTrigger) {
        return hideAllPoppers(reference._tippy);
      }

      if (options.hideOnClick !== true || isClickTrigger) {
        return;
      }
    }

    hideAllPoppers();
  };

  var onWindowBlur = function onWindowBlur() {
    var _document = document,
        el = _document.activeElement;

    if (el && el.blur && matches$1.call(el, selectors.REFERENCE)) {
      el.blur();
    }
  };

  var onWindowResize = function onWindowResize() {
    toArray(document.querySelectorAll(selectors.POPPER)).forEach(function (popper) {
      var tippyInstance = popper._tippy;
      if (tippyInstance && !tippyInstance.options.livePlacement) {
        tippyInstance.popperInstance.scheduleUpdate();
      }
    });
  };

  document.addEventListener('click', onDocumentClick, useCapture);
  document.addEventListener('touchstart', onDocumentTouch);
  window.addEventListener('blur', onWindowBlur);
  window.addEventListener('resize', onWindowResize);

  if (!browser.supportsTouch && (navigator.maxTouchPoints || navigator.msMaxTouchPoints)) {
    document.addEventListener('pointerdown', onDocumentTouch);
  }
}

var eventListenersBound = false;
var useCapture = false;

/**
 * Exported module
 * @param {String|Element|Element[]|NodeList|Object} selector
 * @param {Object} options
 * @param {Boolean} one - create one tooltip
 * @return {Object}
 */
function tippy(selector, options, one) {
  if (browser.supported && !eventListenersBound) {
    bindEventListeners(useCapture);
    eventListenersBound = true;
  }

  if (isObjectLiteral(selector)) {
    polyfillVirtualReferenceProps(selector);
  }

  options = _extends({}, defaults, options);

  var references = getArrayOfElements(selector);
  var firstReference = references[0];

  return {
    selector: selector,
    options: options,
    tooltips: browser.supported ? createTooltips(one && firstReference ? [firstReference] : references, options) : [],
    destroyAll: function destroyAll() {
      this.tooltips.forEach(function (tooltip) {
        return tooltip.destroy();
      });
      this.tooltips = [];
    }
  };
}

tippy.version = version;
tippy.browser = browser;
tippy.defaults = defaults;
tippy.one = function (selector, options) {
  return tippy(selector, options, true).tooltips[0];
};
tippy.disableAnimations = function () {
  defaults.updateDuration = defaults.duration = 0;
  defaults.animateFill = false;
};
tippy.useCapture = function () {
  useCapture = true;
};

/**
 * Injects CSS styles to document head
 * @param {String} css
 */
function injectCSS() {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isBrowser && browser.supported) {
    var head = document.head || document.querySelector('head');
    var style = document.createElement('style');
    style.type = 'text/css';
    head.insertBefore(style, head.firstChild);

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
}

injectCSS(styles);

return tippy;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tippy = __webpack_require__(2);

var _tippy2 = _interopRequireDefault(_tippy);

__webpack_require__(1);

var _plugin = __webpack_require__(0);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Tippy = _tippy2.default;

exports.default = _plugin2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback /*, thisArg*/) {
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {
      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".tippy-popper[x-placement^=top] .tippy-tooltip.light-theme .tippy-arrow {\n  border-top: 7px solid #fff;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n}\n\n.tippy-popper[x-placement^=top] .tippy-tooltip.light-theme .tippy-roundarrow {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\n\n.tippy-popper[x-placement^=bottom] .tippy-tooltip.light-theme .tippy-arrow {\n  border-bottom: 7px solid #fff;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n}\n\n.tippy-popper[x-placement^=bottom] .tippy-tooltip.light-theme .tippy-roundarrow {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\n\n.tippy-popper[x-placement^=left] .tippy-tooltip.light-theme .tippy-arrow {\n  border-left: 7px solid #fff;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n}\n\n.tippy-popper[x-placement^=left] .tippy-tooltip.light-theme .tippy-roundarrow {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\n\n.tippy-popper[x-placement^=right] .tippy-tooltip.light-theme .tippy-arrow {\n  border-right: 7px solid #fff;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n}\n\n.tippy-popper[x-placement^=right] .tippy-tooltip.light-theme .tippy-roundarrow {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\n\n.tippy-popper .tippy-tooltip.light-theme {\n  color: #26323d;\n  box-shadow: 0 0 20px 4px rgba(154, 161, 177, 0.15), 0 4px 80px -8px rgba(36, 40, 47, 0.25), 0 4px 4px -2px rgba(91, 94, 105, 0.15);\n  background-color: #fff;\n}\n\n.tippy-popper .tippy-tooltip.light-theme .tippy-backdrop {\n  background-color: #fff;\n}\n\n.tippy-popper .tippy-tooltip.light-theme[data-animatefill] {\n  background-color: transparent;\n}\n\n.tippy-popper[x-placement^=top] .tippy-tooltip.translucent-theme .tippy-arrow {\n  border-top: 7px solid rgba(0, 0, 0, 0.7);\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n}\n\n.tippy-popper[x-placement^=top] .tippy-tooltip.translucent-theme .tippy-roundarrow {\n  width: 24px;\n  height: 24px;\n  fill: rgba(0, 0, 0, 0.7);\n}\n\n.tippy-popper[x-placement^=bottom] .tippy-tooltip.translucent-theme .tippy-arrow {\n  border-bottom: 7px solid rgba(0, 0, 0, 0.7);\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n}\n\n.tippy-popper[x-placement^=bottom] .tippy-tooltip.translucent-theme .tippy-roundarrow {\n  width: 24px;\n  height: 24px;\n  fill: rgba(0, 0, 0, 0.7);\n}\n\n.tippy-popper[x-placement^=left] .tippy-tooltip.translucent-theme .tippy-arrow {\n  border-left: 7px solid rgba(0, 0, 0, 0.7);\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n}\n\n.tippy-popper[x-placement^=left] .tippy-tooltip.translucent-theme .tippy-roundarrow {\n  width: 24px;\n  height: 24px;\n  fill: rgba(0, 0, 0, 0.7);\n}\n\n.tippy-popper[x-placement^=right] .tippy-tooltip.translucent-theme .tippy-arrow {\n  border-right: 7px solid rgba(0, 0, 0, 0.7);\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n}\n\n.tippy-popper[x-placement^=right] .tippy-tooltip.translucent-theme .tippy-roundarrow {\n  width: 24px;\n  height: 24px;\n  fill: rgba(0, 0, 0, 0.7);\n}\n\n.tippy-popper .tippy-tooltip.translucent-theme,\n.tippy-popper .tippy-tooltip.translucent-theme .tippy-backdrop {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.tippy-popper .tippy-tooltip.translucent-theme[data-animatefill] {\n  background-color: transparent;\n}\n\n.tippy-tooltip.gradient-theme {\n  background: linear-gradient(45deg, #8c61f5, #ff9cad);\n  font-weight: bold;\n}\n\n.tippy-tooltip.gradient-theme::after {\n  position: absolute;\n  left: 0;\n  top: 5px;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(45deg, #8c61f5, #ff9cad);\n  -webkit-filter: blur(12px) brightness(1.2);\n  filter: blur(12px) brightness(1.2);\n  opacity: 0.8;\n  font-weight: bold;\n  z-index: -1;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
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
			var newStyles = listToStyles(newList, options);
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
};

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

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
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
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
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
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

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
		update = updateLink.bind(null, styleElement, options);
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

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

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


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e25c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7405");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("a31b17ec", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e4c3":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./adult.svg": "557f",
	"./baby.svg": "98a7",
	"./old.svg": "201a",
	"./pupil.svg": "f4e1",
	"./toddler.svg": "f263"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "e4c3";

/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e611":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("942a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "f174":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".sup{display:inline-block;font-size:.7em;text-transform:uppercase;-webkit-transform:translateY(-.25em);transform:translateY(-.25em);margin:0 .3em}.active{fill:#53b2f1;stroke:#53b2f1}@font-face{font-family:Gotham Pro;src:url(" + escape(__webpack_require__("1aa6")) + ");font-weight:400}.body{background:#fafbfc;font-family:Gotham Pro}.chart{color:#3e5271}.chart *{-webkit-box-sizing:border-box;box-sizing:border-box}.terms{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:720px;padding:0 40px}.grid,.terms{display:-webkit-box;display:-ms-flexbox;display:flex}.grid__aside{padding-top:72px}.grid__main{overflow:auto;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.icons-set{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.icons-set>img{margin-right:.4em;width:1em;height:1em;font-size:35px;cursor:pointer}.icons-set>img:last-child{margin-right:0}.icons-set--sm>img{font-size:25px}.icons-description{margin:50px 0}.person{width:1em;height:1em}.persons{position:relative}@media screen and (max-width:1023px){.persons{max-width:320px;margin-left:auto;margin-right:auto}}[class*=persons__arrow-]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:1em;height:1em;font-size:25px;background-position:50% 50%;background-repeat:no-repeat;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='25' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.636 23.007l.679.678 11.341-11.342L12.313 1l-.678.678L22.3 12.343 11.636 23.007z' fill='%235C708E'/%3E%3C/svg%3E\");cursor:pointer}@media screen and (min-width:1024px){[class*=persons__arrow-]{display:none}}[class*=persons__arrow-].disabled{opacity:.4;pointer-events:none}.persons__arrow-prev{left:0;-webkit-transform:translateY(-50%) scaleX(-1);transform:translateY(-50%) scaleX(-1)}.persons__arrow-next{right:0}.persons__inner{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;margin:50px 0}@media screen and (max-width:1023px){.persons__inner{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.persons__item{cursor:pointer;color:#5c708e;width:145px;text-align:center}.persons__item--active{color:#ff5251}@media screen and (max-width:1023px){.persons__item{display:none}.persons__item--active{display:block}}.persons__item-icon{text-align:center;margin-bottom:15px}.persons__item-icon *{font-size:100px;vertical-align:top}.persons__item-label{text-transform:uppercase;font-weight:700;font-size:14px;letter-spacing:.15em;line-height:1.5em}.notes{margin-top:50px;max-width:840px}.notes__title{font-size:14px;text-transform:uppercase;font-weight:700;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:20px 0}.notes__title:hover{color:#53b2f1}.notes__title-icon{margin-left:5px}.notes.is-open .notes__title-icon{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.notes-list{font-size:14px;margin:0;padding:0;list-style:none}.notes-list li{position:relative;margin-bottom:1.25em}.notes-list li:last-child{margin-bottom:0}.notes-list__note{position:absolute;left:0}.notes-list__text{display:block;padding-left:15px}.document{background:#fff;border:1px solid #dfe4e7;padding:40px 60px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;max-width:800px;border-radius:4px;margin:50px auto;text-decoration:none;color:inherit}.document:hover{color:#53b2f1}.document__icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;margin-right:30px}.document__text{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.copyright{margin:50px 0}.copyright__link{color:#53b2f1;margin-left:.5em}", ""]);

// exports


/***/ }),

/***/ "f263":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+DQogICAgICAgIDxwYXRoIGQ9Ik03Ni43MjUgNjkuNzYxTDY3LjkwMyA2OC41NzFDNjkuMTkgNjcuNjM3IDcwLjQxNSA2Ni42MDEgNzEuNTYzIDY1LjQ1NEM3NC42ODIgNjIuMzM0IDc3LjAyNCA1OC42NTMgNzguNDk5IDU0LjY0OEM4My43NzQgNTQuMjU0IDg3Ljk0OCA0OS44NDggODcuOTQ4IDQ0LjQ3NEM4Ny45NDggMzkuNzQgODQuNzAyIDM1Ljc1OCA4MC4zMjEgMzQuNjFWMjkuODIyQzgwLjMyIDEzLjM3OCA2Ni45NDMgMCA1MC41IDBDMzQuMDU3IDAgMjAuNjc5IDEzLjM3OCAyMC42NzkgMjkuODIxVjM0LjYwOUMxNi4yOTggMzUuNzU2IDEzLjA1MiAzOS43MzkgMTMuMDUyIDQ0LjQ3M0MxMy4wNTIgNDkuODUgMTcuMjMgNTQuMjU3IDIyLjUwNyA1NC42NDhDMjIuNTA1IDU0LjY0MiAyMi41MDMgNTQuNjM1IDIyLjUgNTQuNjI5QzI0LjU3IDYwLjI2NSAyOC4yOSA2NS4xMTIgMzMuMDc5IDY4LjU3MkwyNC4yOTIgNjkuNzZDMTguMjk3IDcwLjUwNCAxMy43ODEgNzUuNjI0IDEzLjc4NiA4MS42NjJWMTAwSDE3LjIxVjgxLjY2QzE3LjIwNyA3OC40OTYgMTguOTQ1IDc1LjY5MyAyMS41NjQgNzQuMjA4QzIyLjM0NiA3NS4xMTUgMjMuMzk4IDc1Ljg4NCAyNC4zOSA3Ni41OThDMjUuNDE3IDc3LjMzOCAyNi42OTggNzguMjU5IDI2LjkzNyA3OC45MDhDMjcuMTY2IDc5LjUyNCAyNi43NjIgODEuMDM5IDI2LjQzNyA4Mi4yNTZDMjUuODQ4IDg0LjQ2IDI1LjE4MSA4Ni45NTggMjYuNTc5IDg4Ljc5OUMyNy45NTMgOTAuNjA4IDMwLjUxMiA5MC42NiAzMi43NyA5MC43MDZDMzQuMDUgOTAuNzMyIDM1LjY0NCA5MC43NjUgMzYuMTc5IDkxLjE3MkMzNi43MjkgOTEuNTg5IDM3LjIwNSA5My4xMjEgMzcuNTg4IDk0LjM1M0MzOC4yNTkgOTYuNTE4IDM5LjAyMSA5OC45NzEgNDEuMTU1IDk5Ljc2MUM0My4zNjYgMTAwLjU4MiA0NS41NTIgOTkuMTM3IDQ3LjQ4MSA5Ny44NjVDNDguNTIxIDk3LjE3OCA0OS44MTQgOTYuMzI1IDUwLjQ5NyA5Ni4zMjVDNTEuMTggOTYuMzI1IDUyLjQ3MyA5Ny4xNzkgNTMuNTEyIDk3Ljg2NUM1NS4wNDkgOTguODggNTYuNzQ4IDEwMC4wMDIgNTguNDk0IDEwMC4wMDJDNTguOTM5IDEwMC4wMDIgNTkuMzg5IDk5LjkyOSA1OS44NCA5OS43NjJDNjEuOTczIDk4Ljk3MiA2Mi43MzYgOTYuNTE5IDYzLjQwOCA5NC4zNTNDNjMuNzkxIDkzLjEyMyA2NC4yNjcgOTEuNTkgNjQuODE4IDkxLjE3MkM2NS4zNTEgOTAuNzY3IDY2Ljk0NSA5MC43MzQgNjguMjI2IDkwLjcwOUM3MC40ODQgOTAuNjYzIDczLjA0MiA5MC42MTEgNzQuNDE5IDg4LjgwMUM3NS44MTUgODYuOTYgNzUuMTQ5IDg0LjQ2MiA3NC41NiA4Mi4yNThDNzQuMjM2IDgxLjA0MSA3My44MzEgNzkuNTI4IDc0LjA2IDc4LjkxMUM3NC4zIDc4LjI2MiA3NS41ODEgNzcuMzQgNzYuNjA5IDc2LjU5OUM3Ny42MDEgNzUuODgzIDc4LjY1NCA3NS4xMTYgNzkuNDM3IDc0LjIwNkM4Mi4wNTIgNzUuNjkgODMuNzkyIDc4LjQ5NSA4My43OTEgODEuNjYzVjEwMEg4Ny4yMTNWODEuNjY0Qzg3LjIxOSA3NS42MjQgODIuNzAzIDcwLjUwNiA3Ni43MjUgNjkuNzYxWk04MC4zMiA0NC4zOTNWMzguMjY5QzgyLjc1IDM5LjI4NSA4NC40NjEgNDEuNjgzIDg0LjQ2MSA0NC40NzRDODQuNDYxIDQ3LjUzOCA4Mi4zOTkgNTAuMTI2IDc5LjU5IDUwLjkzNEM4MC4wNjYgNDguODA5IDgwLjMyIDQ2LjYxOSA4MC4zMiA0NC4zOTNaTTE2LjUzOSA0NC40NzRDMTYuNTM5IDQxLjY4MyAxOC4yNSAzOS4yODQgMjAuNjggMzguMjY5VjQ0LjM5M0MyMC42OCA0Ni42NDIgMjAuOTQzIDQ4LjgyOSAyMS40MTcgNTAuOTM1QzE4LjYwNCA1MC4xMyAxNi41MzkgNDcuNTQxIDE2LjUzOSA0NC40NzRaTTIxLjg5OSA1Mi44MDFDMjEuOTAxIDUyLjgwOSAyMS45MDMgNTIuODE3IDIxLjkwNSA1Mi44MjRDMjEuOTAzIDUyLjgxNiAyMS45MDEgNTIuODA5IDIxLjg5OSA1Mi44MDFaTTI0LjE2NiA0NC4zOTNWMjkuODIxQzI0LjE2NiAxNS4zIDM1Ljk3OSAzLjQ4NiA1MC41IDMuNDg2QzY1LjAxOSAzLjQ4NiA3Ni44MzMgMTUuMjk5IDc2LjgzMyAyOS44MjFWNDQuMzkyQzc2LjgzMyA1MS4zOTMgNzQuMDg1IDU3Ljk5NyA2OS4wOTcgNjIuOTg4QzY0LjEwNyA2Ny45NzggNTcuNTAzIDcwLjcyNiA1MC41IDcwLjcyNkMzNS45NzkgNzAuNzI3IDI0LjE2NiA1OC45MTMgMjQuMTY2IDQ0LjM5M1pNNjEuNjM1IDcyLjA1QzYwLjI1NCA3Ni44MzEgNTUuNDIgODAuOTE4IDUwLjQ5OSA4MC45MThDNDUuNTc3IDgwLjkxOCA0MC43NDUgNzYuODI5IDM5LjM2NCA3Mi4wNDhDNDIuODA3IDczLjQ0IDQ2LjU2NCA3NC4yMTMgNTAuNTAxIDc0LjIxM0M1NC4zNzUgNzQuMjEzIDU4LjEzOSA3My40NjYgNjEuNjM1IDcyLjA1Wk03NC41NzIgNzMuNzY5QzczLjAxMyA3NC44OTEgNzEuNDAyIDc2LjA1MyA3MC43OTEgNzcuNjk3QzcwLjE3OCA3OS4zNTQgNzAuNjk1IDgxLjI4NyA3MS4xOTMgODMuMTU2QzcxLjQ5OCA4NC4yOTggNzIuMDA3IDg2LjIxIDcxLjY0MiA4Ni42OTJDNzEuMjg3IDg3LjE1OCA2OS4zMjYgODcuMTk4IDY4LjE1NiA4Ny4yMjFDNjYuMTg1IDg3LjI2IDY0LjE0NiA4Ny4zMDEgNjIuNzA5IDg4LjM5M0M2MS4yNyA4OS40ODcgNjAuNjY0IDkxLjQzNCA2MC4wOCA5My4zMTdDNTkuNzMyIDk0LjQzMSA1OS4xNTIgOTYuMjk3IDU4LjYyOSA5Ni40OTJDNTguMDcgOTYuNjgzIDU2LjQyIDk1LjYwNiA1NS40MzQgOTQuOTU1QzUzLjg1NiA5My45MTQgNTIuMjI1IDkyLjgzNyA1MC40OTcgOTIuODM3QzQ4Ljc2OCA5Mi44MzcgNDcuMTM4IDkzLjkxNCA0NS41NjEgOTQuOTU1QzQ0LjU3MyA5NS42MDYgNDIuOTE4IDk2LjY4NSA0Mi4zNjYgOTYuNDkyQzQxLjg0MiA5Ni4yOTggNDEuMjYzIDk0LjQzMiA0MC45MTcgOTMuMzE4QzQwLjMzMyA5MS40MzUgMzkuNzI3IDg5LjQ4NyAzOC4yODggODguMzk0QzM2Ljg1MSA4Ny4zMDEgMzQuODEzIDg3LjI1OSAzMi44NDIgODcuMjJDMzEuNjcxIDg3LjE5NiAyOS43MTEgODcuMTU2IDI5LjM1NiA4Ni42OTFDMjguOTkgODYuMjA5IDI5LjUwMSA4NC4yOTcgMjkuODA2IDgzLjE1NkMzMC4zMDYgODEuMjg2IDMwLjgyMiA3OS4zNTMgMzAuMjA4IDc3LjY5NkMyOS41OTkgNzYuMDUxIDI3Ljk4NyA3NC44OSAyNi40MjkgNzMuNzY4QzI2LjE1NiA3My41NzIgMjUuODEyIDczLjMyMiAyNS40NjUgNzMuMDU2TDM1LjcwNiA3MS42NzJDMzYuOTU5IDc4LjQ4NiA0My41NSA4NC40MDQgNTAuNSA4NC40MDRDNTcuNDUxIDg0LjQwNCA2NC4wNDIgNzguNDg2IDY1LjI5NiA3MS42NzNMNzUuNTQgNzMuMDU1Qzc1LjE5MSA3My4zMjEgNzQuODQ2IDczLjU3MiA3NC41NzIgNzMuNzY5WiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgICAgICA8cGF0aCBkPSJNMzQuNTY3IDM5LjkxMUMzNi4zNjE5IDM5LjkxMSAzNy44MTcgMzguNDU1OSAzNy44MTcgMzYuNjYxQzM3LjgxNyAzNC44NjYxIDM2LjM2MTkgMzMuNDExIDM0LjU2NyAzMy40MTFDMzIuNzcyMSAzMy40MTEgMzEuMzE3IDM0Ljg2NjEgMzEuMzE3IDM2LjY2MUMzMS4zMTcgMzguNDU1OSAzMi43NzIxIDM5LjkxMSAzNC41NjcgMzkuOTExWiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgICAgICA8cGF0aCBkPSJNNjYuNDMyIDM5LjkxMUM2OC4yMjY5IDM5LjkxMSA2OS42ODIgMzguNDU1OSA2OS42ODIgMzYuNjYxQzY5LjY4MiAzNC44NjYxIDY4LjIyNjkgMzMuNDExIDY2LjQzMiAzMy40MTFDNjQuNjM3MSAzMy40MTEgNjMuMTgyIDM0Ljg2NjEgNjMuMTgyIDM2LjY2MUM2My4xODIgMzguNDU1OSA2NC42MzcxIDM5LjkxMSA2Ni40MzIgMzkuOTExWiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgICAgICA8cGF0aCBkPSJNNTMgNDQuNTg3SDQ4QzQ3LjAzNCA0NC41ODcgNDYuMjUgNDMuODA0IDQ2LjI1IDQyLjgzN0M0Ni4yNSA0MS44NyA0Ny4wMzQgNDEuMDg3IDQ4IDQxLjA4N0g1M0M1My45NjcgNDEuMDg3IDU0Ljc1IDQxLjg3IDU0Ljc1IDQyLjgzN0M1NC43NSA0My44MDQgNTMuOTY3IDQ0LjU4NyA1MyA0NC41ODdaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgICAgIDxwYXRoIGQ9Ik0zOC43NSA1MC43MDJWNTIuNDUyQzM4Ljc1IDU4LjM4MSA0NC41NzIgNjMuMjA0IDUwLjQ5OSA2My4yMDRDNTYuNDI4IDYzLjIwNCA2Mi4yNSA1OC4zODEgNjIuMjUgNTIuNDUyVjUwLjcwMkgzOC43NVpNNTAuNDk5IDU5LjcwNEM0Ny4xMDQgNTkuNzA0IDQzLjI0OCA1Ny4zNTggNDIuNDYzIDU0LjIwMkg0OC43NVY1Ny4xNzFINTIuMjVWNTQuMjAySDU4LjUzN0M1Ny43NTIgNTcuMzU4IDUzLjg5NSA1OS43MDQgNTAuNDk5IDU5LjcwNFoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICAgICAgPHBhdGggZD0iTTQzLjU2NyAyNS4xNzJDNDEuNTM3IDI1LjE3MiAzOS41ODkgMjQuMjcxIDM3Ljc3NiAyMi40OTNDMzYuMDkyIDIwLjg0MiAzNS4zMjggMTguNzc1IDM1LjU2NSAxNi41MTdDMzYuMzkgOC42NzMwNCA0OS4zNDQgMC4zNTYwMzcgNDkuNDc1IDAuMjczMDM3QzUwLjA0MSAtMC4wODg5NjMyIDUwLjc2NCAtMC4wOTA5NjMyIDUxLjMzNSAwLjI2MjAzN0M1MS40NjggMC4zNDMwMzcgNjQuNTExIDguNTExMDQgNjUuNDIzIDE2LjM1QzY1LjY4NyAxOC42MDYgNjQuOTQ0IDIwLjY4MSA2My4yOCAyMi4zNTFDNjEuNDY0IDI0LjE3MSA1OS41MDEgMjUuMDkzIDU3LjQ0NCAyNS4wOTNDNTQuNDA1IDI1LjA5MyA1Mi4wMDUgMjMuMDY1IDUwLjUyMyAyMS41MDdDNDkuMDQ4IDIzLjA5NiA0Ni42NDIgMjUuMTcyIDQzLjU2NyAyNS4xNzJaTTUwLjQyNiAzLjg0MTA0QzQ2LjM4NyA2LjYxNTA0IDM5LjUwNiAxMi41MTUgMzkuMDQ3IDE2Ljg4M0MzOC45MiAxOC4wOTEgMzkuMjk1IDE5LjA3OSA0MC4yMjcgMTkuOTk0QzQxLjM2MyAyMS4xMDcgNDIuNDg2IDIxLjY3MiA0My41NjcgMjEuNjcyQzQ1Ljg1MyAyMS42NzIgNDcuODcyIDE5LjI3IDQ4Ljg0MiAxOC4xMTVDNDguOTgyIDE3Ljk0OSA0OS4xMDIgMTcuODA2IDQ5LjIwMSAxNy42OTVDNDkuNTMxIDE3LjMyMyA1MC4wMDMgMTcuMTEgNTAuNSAxNy4xMDdDNTAuOTc5IDE3LjA4NCA1MS40NzEgMTcuMzEyIDUxLjgwNCAxNy42OEM1MS45MDQgMTcuNzkgNTIuMDI1IDE3LjkzMSA1Mi4xNjcgMTguMDk1QzUzLjE0MiAxOS4yMzEgNTUuMTczIDIxLjU5MyA1Ny40NDQgMjEuNTkzQzU4LjUzOCAyMS41OTMgNTkuNjY3IDIxLjAxNyA2MC44MDEgMTkuODc5QzYxLjcyMyAxOC45NTQgNjIuMDg2IDE3Ljk2MiA2MS45NDYgMTYuNzU1QzYxLjQzOSAxMi4zOSA1NC40OTQgNi41NjgwNCA1MC40MjYgMy44NDEwNFoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8L2c+DQogICAgPGRlZnM+DQogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDAiPg0KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9Ijc1IiBoZWlnaHQ9IjEwMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzKSIvPg0KICAgICAgICA8L2NsaXBQYXRoPg0KICAgIDwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "f4e1":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZD0iTTExLjQwOCA2MC42MDlDMTAuMzU0IDYwLjYwOSA5LjI0ODk5IDYwLjUzMSA4LjA5NDk5IDYwLjM3NUM3LjUxODk5IDYwLjI5NyA3LjAxODk5IDU5LjkzNyA2Ljc2MDk5IDU5LjQxNkM2LjUwMzk5IDU4Ljg5NCA2LjUyMTk5IDU4LjI3OCA2LjgwOTk5IDU3Ljc3M0MxMC4wNjkgNTIuMDYyIDguNjkyOTkgNDcuOTYgNy4zNjI5OSA0My45OTJDNi4yNTM5OSA0MC42ODYgNS4xMDc5OSAzNy4yNjggNi45MzA5OSAzMy40OUMxMC44MDQgMjUuNDY4IDE4Ljk4OCAyNS43MDIgMjIuNDQ2IDI1Ljg3TDIxLjU5NCAyOS4zNzZDMTguMjc0IDI5LjIyIDEyLjk0OCAyOS4wNzYgMTAuMDgzIDM1LjAxMkM4Ljg3ODk5IDM3LjUwNyA5LjY3Mzk5IDM5Ljg3NyAxMC42ODEgNDIuODc5QzExLjk0MiA0Ni42NDEgMTMuNDc2IDUxLjIxNCAxMS4wMzUgNTcuMTA2QzE0LjE3OCA1Ny4xMzkgMTYuNzExIDU2LjQxNyAxOC41NjIgNTQuODZDMjIuNTA5IDUxLjUzOCAyMi43NDMgNDUuMjE4IDIyLjg0MiA0Mi41MkwyNi4zNCA0Mi42NDlDMjYuMjIzIDQ1LjgxMSAyNS45NDkgNTMuMjE3IDIwLjgxNSA1Ny41MzhDMTguMzg2IDU5LjU4MSAxNS4yMyA2MC42MDkgMTEuNDA4IDYwLjYwOVoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8cGF0aCBkPSJNODguNTkyIDYwLjY0NkM4OS42NDYgNjAuNjQ2IDkwLjc1MSA2MC41NjggOTEuOTA1IDYwLjQxMkM5Mi40ODEgNjAuMzM0IDkyLjk4MSA1OS45NzQgOTMuMjM5IDU5LjQ1M0M5My40OTYgNTguOTMxIDkzLjQ3OCA1OC4zMTUgOTMuMTkgNTcuODFDODkuOTMxIDUyLjA5OSA5MS4zMDcgNDcuOTk3IDkyLjYzNyA0NC4wMjlDOTMuNzQ2IDQwLjcyMyA5NC44OTIgMzcuMzA1IDkzLjA2OSAzMy41MjdDODkuMTk2IDI1LjUwNSA4MS4wMTIgMjUuNzM5IDc3LjU1NCAyNS45MDdMNzguNDA2IDI5LjQxM0M4MS43MjYgMjkuMjU3IDg3LjA1MiAyOS4xMTMgODkuOTE3IDM1LjA0OUM5MS4xMjEgMzcuNTQ0IDkwLjMyNiAzOS45MTQgODkuMzE5IDQyLjkxNkM4OC4wNTggNDYuNjc4IDg2LjUyNCA1MS4yNTEgODguOTY1IDU3LjE0M0M4NS44MjIgNTcuMTc2IDgzLjI4OSA1Ni40NTQgODEuNDM4IDU0Ljg5N0M3Ny40OTEgNTEuNTc1IDc3LjI1NyA0NS4yNTUgNzcuMTU4IDQyLjU1N0w3My42NiA0Mi42ODZDNzMuNzc3IDQ1Ljg0OCA3NC4wNTEgNTMuMjU0IDc5LjE4NSA1Ny41NzVDODEuNjE0IDU5LjYxOCA4NC43NyA2MC42NDYgODguNTkyIDYwLjY0NloiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8cGF0aCBkPSJNODUuNDQ3IDM0LjI0NkM4NS40NDcgMjkuODIgODIuMDA3IDI2LjE5IDc3LjY2IDI1Ljg3Qzc3LjY3MyAyNi4yMDYgNzcuNjg1IDI2LjU0MiA3Ny42ODUgMjYuODgxQzc3LjY4NiAxMi4wNTkgNjUuNjI2IDAgNTAuODAzIDBINDkuMzAxQzM0LjQ3OSAwIDIyLjQyIDEyLjA1OSAyMi40MiAyNi44ODFDMjIuNDIgMjYuNTQyIDIyLjQzMyAyNi4yMDYgMjIuNDQ1IDI1Ljg3QzE4LjA5OCAyNi4xOSAxNC42NTggMjkuODIgMTQuNjU4IDM0LjI0NkMxNC42NTggMzguODE0IDE4LjMyIDQyLjUzNiAyMi44NjEgNDIuNjQ2QzI1LjEzOSA1NS4xNzUgMzYuMTI0IDY0LjcwOCA0OS4zIDY0LjcwOEg1MC44MDJDNjMuOTggNjQuNzA4IDc0Ljk2NSA1NS4xNzYgNzcuMjQzIDQyLjY0NkM4MS43ODUgNDIuNTM2IDg1LjQ0NyAzOC44MTQgODUuNDQ3IDM0LjI0NlpNMTguMTU4IDM0LjI0NkMxOC4xNTggMzEuNzYyIDIwLjAyMSAyOS43MjUgMjIuNDIgMjkuNDA0VjM3LjgyN0MyMi40MiAzOC4yNTIgMjIuNDMzIDM4LjY3NSAyMi40NTIgMzkuMDk1QzIwLjAzOCAzOC43ODggMTguMTU4IDM2Ljc0MyAxOC4xNTggMzQuMjQ2Wk0yMi41OTggNDAuODc5QzIyLjYgNDAuODg5IDIyLjYwMSA0MC44OTkgMjIuNjAyIDQwLjkwN0MyMi42MDEgNDAuODk4IDIyLjYgNDAuODg5IDIyLjU5OCA0MC44NzlaTTc0LjE4NiAzNy44MjdDNzQuMTg2IDUwLjcyIDYzLjY5NyA2MS4yMDggNTAuODAzIDYxLjIwOEg0OS4zMDFDMzYuNDA4IDYxLjIwOCAyNS45MiA1MC43MiAyNS45MiAzNy44MjdWMjYuODgxQzI1LjkyIDEzLjk4OCAzNi40MDggMy41IDQ5LjMwMSAzLjVINTAuODAzQzYzLjY5NyAzLjUgNzQuMTg2IDEzLjk4OCA3NC4xODYgMjYuODgxVjM3LjgyN1pNNzcuNTA4IDQwLjg3OUM3Ny41MDYgNDAuODg5IDc3LjUwNSA0MC44OTkgNzcuNTA0IDQwLjkwN0M3Ny41MDUgNDAuODk4IDc3LjUwNiA0MC44ODkgNzcuNTA4IDQwLjg3OVpNNzcuNjUzIDM5LjA5NUM3Ny42NzMgMzguNjc1IDc3LjY4NSAzOC4yNTIgNzcuNjg1IDM3LjgyN1YyOS40MDRDODAuMDgzIDI5LjcyNCA4MS45NDcgMzEuNzYxIDgxLjk0NyAzNC4yNDZDODEuOTQ3IDM2Ljc0MyA4MC4wNjcgMzguNzg4IDc3LjY1MyAzOS4wOTVaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgPHBhdGggZD0iTTM3Ljg1NCAzNy4yOTRDMzkuNTEwOSAzNy4yOTQgNDAuODU0IDM1Ljk1MDkgNDAuODU0IDM0LjI5NEM0MC44NTQgMzIuNjM3MiAzOS41MTA5IDMxLjI5NCAzNy44NTQgMzEuMjk0QzM2LjE5NzEgMzEuMjk0IDM0Ljg1NCAzMi42MzcyIDM0Ljg1NCAzNC4yOTRDMzQuODU0IDM1Ljk1MDkgMzYuMTk3MSAzNy4yOTQgMzcuODU0IDM3LjI5NFoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8cGF0aCBkPSJNNjIuMjUyIDM3LjI5NEM2My45MDg5IDM3LjI5NCA2NS4yNTIgMzUuOTUwOSA2NS4yNTIgMzQuMjk0QzY1LjI1MiAzMi42MzcyIDYzLjkwODkgMzEuMjk0IDYyLjI1MiAzMS4yOTRDNjAuNTk1MiAzMS4yOTQgNTkuMjUyIDMyLjYzNzIgNTkuMjUyIDM0LjI5NEM1OS4yNTIgMzUuOTUwOSA2MC41OTUyIDM3LjI5NCA2Mi4yNTIgMzcuMjk0WiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgIDxwYXRoIGQ9Ik00MC4wNyA2MC42NjZWNjcuNjQ2QzQwLjA3NiA2OC40OTEgMzkuNDQ5IDY5LjIwOCAzOC42MTMgNjkuMzEyTDIzLjYxMyA3MS4xNzlDMTcuNzM3IDcxLjkxIDEzLjM0MSA3Ni45MjQgMTMuMzg2IDgyLjgzM1YxMDBIMTYuNzJWODIuODE5QzE2LjY4OSA3OC41OTEgMTkuODI5IDc1LjAwNyAyNC4wMjggNzQuNDg1TDM5LjAzIDcyLjYxOUM0MS41NDQgNzIuMzA2IDQzLjQyNiA3MC4xNTYgNDMuNDA1IDY3LjYzNFY2MC42NjZINDAuMDdaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgPHBhdGggZD0iTTc2LjUwOCA3MS4yNjJMNjEuNTEyIDY5LjM5NkM2MC42NzMgNjkuMjkxIDYwLjA0NiA2OC41NzcgNjAuMDUzIDY3LjcxOFY2MC42NjZINTYuNzE4VjY3LjcwNUM1Ni42OTkgNzAuMjM4IDU4LjU4MSA3Mi4zODggNjEuMDk3IDcyLjcwNUw3Ni4wOTcgNzQuNTdDODAuMjk1IDc1LjA5MyA4My40MzcgNzguNjc0IDgzLjQwMyA4Mi45MTZWMTAwSDg2LjczNlY4Mi45MjhDODYuNzggNzcuMDA5IDgyLjM4NCA3MS45OSA3Ni41MDggNzEuMjYyWiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgIDxwYXRoIGQ9Ik02Mi44NyA3MS45MjZMNjIuNzgzIDcyLjk0N0M2Mi4yNjIgNzkuNTQzIDU2LjY2OCA4NC43MDggNTAuMDUzIDg0LjcxQzQzLjQzOCA4NC43MDggMzcuODQ2IDc5LjU0MiAzNy4zMjEgNzIuOTM5TDM3LjIyOCA3MS44NDVMMzMuOTI5IDcyLjI1NUwzNC4wMSA3My4yMUMzNC42NyA4MS41MiA0MS43MTkgODguMDMgNTAuMDU1IDg4LjAzMkM1OC4zOTMgODguMDMgNjUuNDM4IDgxLjUxOSA2Ni4wOTYgNzMuMjJMNjYuMTcxIDcyLjMzN0w2Mi44NyA3MS45MjZaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgPHBhdGggZD0iTTIzLjE4IDEwMEgyNi41MDJDMjYuNTAyIDk2LjA3IDI5LjU5MyA3My4yNTQgMjkuNTkzIDczLjI1NEwyNi4yODYgNzMuNTg0TDIzLjE4IDEwMFoiIGZpbGw9IiM1QzcwOEUiLz4NCiAgICA8cGF0aCBkPSJNNzMuODE5IDczLjU4NEw3MC41MTIgNzMuMjU0QzcwLjUxMiA3My4yNTQgNzMuNjAzIDk2LjA3IDczLjYwMyAxMDBINzYuOTI1TDczLjgxOSA3My41ODRaIiBmaWxsPSIjNUM3MDhFIi8+DQogICAgPHBhdGggZD0iTTc2LjA1NCAyOS4zNzZDNjIuMjQzIDI5LjM3NiA1My4xNjMgMjEuMDQyIDUwLjA2NCAxNy40OTZDNDYuOTYgMjEuMDQxIDM3Ljg2NiAyOS4zNzYgMjQuMDU0IDI5LjM3NlYyNS44NzZDMzkuOTM5IDI1Ljg3NiA0OC4zMDQgMTQuMTU4IDQ4LjYxIDEzLjcwMkM0OC45MzQgMTMuMjE4IDQ5LjQ4MSAxMi45MjUgNTAuMDY1IDEyLjkyNUM1MC4wNjcgMTIuOTI1IDUwLjA2OSAxMi45MjUgNTAuMDcxIDEyLjkyNUM1MC42NTYgMTIuOTI3IDUxLjIwNCAxMy4yMiA1MS41MjYgMTMuNzA4QzUxLjgyOSAxNC4xNiA2MC4xNzEgMjUuODc2IDc2LjA1NCAyNS44NzZWMjkuMzc2WiIgZmlsbD0iIzVDNzA4RSIvPg0KICAgIDxwYXRoIGQ9Ik02MC42MzUgNDUuOTk1QzU5LjgzOCA0NS40NDYgNTguNzQ4IDQ1LjY0OSA1OC4yMDEgNDYuNDQ0QzU4LjEwNyA0Ni41NzQgNTUuNjU4IDQ5LjkwNiA1MC4wNTQgNDkuOTMyQzQ0LjQ1IDQ5LjkwNiA0MiA0Ni41NzQgNDEuOTA3IDQ2LjQ0NEM0MS4zNiA0NS42NDkgNDAuMjcgNDUuNDQ2IDM5LjQ3MyA0NS45OTVDMzguNjc3IDQ2LjU0MyAzOC40NzYgNDcuNjMyIDM5LjAyNCA0OC40MjlDMzkuMTY1IDQ4LjYzMiA0Mi41MzggNTMuNDA1IDUwLjA1NCA1My40MzJDNTcuNTcxIDUzLjQwNSA2MC45NDQgNDguNjMyIDYxLjA4NCA0OC40MjlDNjEuNjMyIDQ3LjYzMiA2MS40MzEgNDYuNTQzIDYwLjYzNSA0NS45OTVaIiBmaWxsPSIjNUM3MDhFIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "f57b":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./angle-round-dark.svg": "035a",
	"./angle-round-light.svg": "77f6",
	"./angle-round-mute.svg": "1ded",
	"./angle.svg": "1472",
	"./army.svg": "704e",
	"./dot.svg": "1e63",
	"./health.svg": "63ab",
	"./infection.svg": "321a",
	"./location.svg": "3589",
	"./pdf-icon.svg": "7a14",
	"./persons.svg": "54af",
	"./persons/adult.svg": "557f",
	"./persons/baby.svg": "98a7",
	"./persons/old.svg": "201a",
	"./persons/pupil.svg": "f4e1",
	"./persons/toddler.svg": "f263",
	"./travel.svg": "1792",
	"./work.svg": "b5e3"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "f57b";

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67ca9303-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar.vue?vue&type=template&id=40b89388&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chart"},[_c('div',{ref:"persons",staticClass:"persons"},[_c('div',{staticClass:"persons__arrow-prev",class:_vm.arrowClass('prev'),attrs:{"title":"Назад"},on:{"click":function($event){return _vm.changePerson('prev')}}}),_c('div',{staticClass:"persons__arrow-next",class:_vm.arrowClass('next'),attrs:{"title":"Вперед"},on:{"click":function($event){return _vm.changePerson('next')}}}),_c('div',{staticClass:"persons__inner"},_vm._l((_vm.dataset),function(person){return _c('div',{staticClass:"persons__item",class:{ 'persons__item--active': person.id === _vm.age },on:{"click":function($event){_vm.age = person.id}}},[_c('div',{staticClass:"persons__item-icon"},[(!_vm.IEVersion)?_c('svg',{staticClass:"person"},[_c('use',{attrs:{"xlink:href":__webpack_require__("54af") + "#" + (person.id)}})]):[_c('img',{attrs:{"src":__webpack_require__("e4c3")("./" + (person.id) + ".svg")}})]],2),_c('div',{staticClass:"persons__item-label",domProps:{"innerHTML":_vm._s(person.label)}})])}),0)]),_c('div',{staticClass:"grid"},[_c('div',{staticClass:"grid__aside"},[_c('div',{ref:"tableHeight",staticClass:"tbl"},_vm._l((_vm.items),function(item,idx){return _c('div',{staticClass:"tbl__row"},[_c('div',{staticClass:"tbl__cell tbl__cell-icons"},[(item.icons)?[_c('div',{staticClass:"icons-set icons-set--sm"},_vm._l((item.icons.split(' ')),function(icon){return _c('img',{directives:[{name:"tippy",rawName:"v-tippy",value:({ html: ("#icon_" + (_vm.getIcon(icon).image)) }),expression:"{ html: `#icon_${getIcon(icon).image}` }"}],staticClass:"tbl__cell-icon",attrs:{"src":__webpack_require__("f57b")("./" + (_vm.getIcon(icon).image) + ".svg")}})}),0)]:_vm._e()],2),_c('div',{staticClass:"tbl__cell tbl__cell-name",class:{ 'active': _vm.activeRow === idx },on:{"mouseleave":function($event){_vm.activeRow = null},"mouseenter":function($event){_vm.activeRow = idx}}},[_c('div',{directives:[{name:"tippy",rawName:"v-tippy",value:({ html: ("#name_" + idx) }),expression:"{ html: `#name_${idx}` }"}],staticClass:"tbl__cell-name-inner"},[_c('span',{staticClass:"tbl__cell-name-text",domProps:{"innerHTML":_vm._s(item.name)}}),(item.note)?_c('span',{staticClass:"sup",domProps:{"innerHTML":_vm._s(item.note)}}):_vm._e(),_c('div',{staticStyle:{"display":"none"},attrs:{"id":("name_" + idx)},domProps:{"innerHTML":_vm._s(_vm.getItemTooltip(item))}})])])])}),0)]),_c('div',{ref:"main",staticClass:"grid__main draggable"},[_c('div',{staticClass:"grid__main-top"},[_c('div',{ref:"headers",staticClass:"tbl tbl--header"},[_c('div',{staticClass:"tbl__row"},_vm._l((_vm.headers),function(header){return _c('div',{staticClass:"tbl__cell tbl__cell-header"},[_c('div',{staticClass:"tbl__header-box",class:{ 'active': _vm.active && _vm.active.value === header.value },domProps:{"innerHTML":_vm._s(header.label)},on:{"click":function($event){return _vm.select(header)}}})])}),0),_c('div',{staticClass:"tbl__row"},_vm._l((_vm.headers),function(header){return _c('div',{staticClass:"tbl__cell tbl__cell-line tbl__cell-spacer"})}),0)])]),_c('div',{staticClass:"grid__main-center"},[_c('tbl',{ref:"table",attrs:{"headers":_vm.headers,"widths":_vm.widths,"rows":_vm.items,"active-row":_vm.activeRow,"range":_vm.range,"active":_vm.active},on:{"rowchange":function($event){_vm.activeRow = $event}}})],1),_c('div',{staticClass:"grid__main-bottom"})])]),_c('div',{staticClass:"icons-description icons-set"},[_vm._l((_vm.icons),function(icon){return [_c('img',{directives:[{name:"tippy",rawName:"v-tippy",value:({ html: ("#icon_" + (icon.image)) }),expression:"{ html: `#icon_${icon.image}` }"}],staticClass:"icons-description__item icons-set",attrs:{"src":__webpack_require__("f57b")("./" + (icon.image) + ".svg"),"content":"Ipsum"}}),_c('div',{staticStyle:{"display":"none"},attrs:{"id":("icon_" + (icon.image))},domProps:{"innerHTML":_vm._s(icon.name)}})]})],2),_c('ul',{staticClass:"legend"},_vm._l((_vm.legend),function(line){return _c('li',{staticClass:"legend__item"},[_c('div',{staticClass:"legend__item-symbol"},[_c('div',{staticClass:"symbol",class:line.symbol})]),_c('div',{staticClass:"legend__item-text",domProps:{"innerHTML":_vm._s(line.text)}})])}),0),(_vm.data.notes)?_c('div',{staticClass:"notes",class:{ 'is-open': _vm.showNotes }},[_c('h3',{staticClass:"notes__title",on:{"click":function($event){_vm.showNotes = !_vm.showNotes}}},[_c('span',[_vm._v("Примечания")]),_c('img',{staticClass:"notes__title-icon",attrs:{"src":__webpack_require__("1472")}})]),(_vm.showNotes)?_c('ul',{staticClass:"notes-list"},_vm._l((_vm.data.notes),function(note){return _c('li',[_c('span',{staticClass:"notes-list__note sup"},[_vm._v(_vm._s(note.number))]),_c('span',{staticClass:"notes-list__text",domProps:{"innerHTML":_vm._s(note.text)}})])}),0):_vm._e()]):_vm._e(),_c('a',{staticClass:"document",attrs:{"href":_vm.documentLink,"target":"_blank"}},[_c('div',{staticClass:"document__text"},[_vm._v("\n      Приказ МЗ РФ № 125н от 21.03.2014 об утверждении национального календаря профилактических прививок и календаря профилактических прививок по эпидемическим показаниям\n    ")])]),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"copyright"},[_c('span',{staticClass:"copyright__label"},[_vm._v("Источник:")]),_c('a',{staticClass:"copyright__link",attrs:{"href":"https://www.privivka.ru/?utm_source=link&utm_medium=klinika&utm_campaign=chaika","target":"_blank"}},[_vm._v("privivka.ru")])])}]


// CONCATENATED MODULE: ./src/components/Calendar.vue?vue&type=template&id=40b89388&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__("b54a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./src/assets/stylesheets/index.scss
var stylesheets = __webpack_require__("2ce4");

// EXTERNAL MODULE: ./src/assets/stylesheets/elements/tippy.scss
var tippy = __webpack_require__("e25c");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./src/chart/Term.js




var Term_Term =
/*#__PURE__*/
function () {
  _createClass(Term, [{
    key: "defaults",
    value: function defaults() {
      return {
        duration: null,
        value: null,
        label: null,
        title: null,
        from: null,
        to: null
      };
    }
  }]);

  function Term(options) {
    _classCallCheck(this, Term);

    Object.assign(this, this.defaults(), options);

    if (Array.isArray(this.duration)) {
      this.from = this.duration[0];
      this.to = this.duration[1];
    }
  }

  _createClass(Term, [{
    key: "hasDuration",
    value: function hasDuration() {
      return Array.isArray(this.duration);
    }
  }, {
    key: "isExt",
    value: function isExt(value) {
      if (this.from.value === value) return 'start';
      if (this.to.value === value) return 'end';
      return false;
    }
  }, {
    key: "contains",
    value: function contains(value) {
      if (this.hasDuration()) {
        return value >= this.from.value && value <= this.to.value;
      } else {
        return this.value === value;
      }
    }
  }]);

  return Term;
}();


// CONCATENATED MODULE: ./src/utils.js
var debounce = function debounce(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var timer;
  return function () {
    var _this = this,
        _arguments = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(_this, _arguments);
    }, delay);
  };
};
function plural(number, one, two, five) {
  var isFloat = number % 1 !== 0;
  if (isFloat) return two;
  var n = Math.abs(number);
  n %= 100;

  if (n > 5 && n < 20) {
    return five;
  }

  n %= 10;
  if (n === 1) return one;
  if (n >= 2 && n <= 4) return two;
  return five;
}
/* harmony default export */ var utils = ({
  debounce: debounce,
  plural: plural
});
// CONCATENATED MODULE: ./src/chart/parser.js







function parseNumber(string) {
  return string.split('/').map(function (val) {
    var number;

    if (val.indexOf('-') > -1) {
      val = val.split('-');
      number = [Number(val[0]), Number(val[1])];
    } else {
      number = Number(val);
    }

    return number;
  });
}
function parseLabel(date) {
  var years = date.years ? "".concat(date.years, " <br/> ").concat(plural(date.years, 'год', 'года', 'лет')) : null;
  var months = date.months ? "".concat(date.months, " <br/> ").concat(plural(date.months, 'месяц', 'месяца', 'месяцев')) : null;
  var days = date.days ? (Array.isArray(date.days) ? date.days.join('-') : date.days) + ' <br/> ' + plural(date.days, 'день', 'дня', 'дней') : null;
  return [years, months, days].filter(function (item) {
    return !!item;
  }).join(' ');
}
function parseDuration(from, to) {
  return (to - from) / 2 + from;
}
function parseTermValue(value) {
  if (Array.isArray(value)) {
    return parseDuration(value[0], value[1]);
  } else {
    return value;
  }
}
function termToValue(term) {
  var value = parseTermValue(term.years) + parseTermValue(term.months) / 12 + parseTermValue(term.days) / 365;
  return Math.round(value * 100) / 100;
}
function parseTerm(number) {
  return {
    years: number[0] || 0,
    months: number[1] || 0,
    days: number[2] || 0
  };
}
function getAllValues(terms, range) {
  return terms.reduce(function (acc, term) {
    if (term.hasDuration()) {
      acc = acc.concat(getAllValues(term.duration, range));
    } else {
      acc.push(term);
    }

    return acc;
  }, []).reduce(function (acc, term) {
    var isExists = acc.find(function (t) {
      return t.value === term.value;
    });
    if (!isExists) acc.push(term);
    return acc;
  }, []).sort(function (a, b) {
    return a.value < b.value ? -1 : 0;
  }).filter(function (term) {
    return range.contains(term.value);
  });
}
function parseTitle(title) {
  var titles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var key = title || 'DEFAULT';
  var found = titles.find(function (item) {
    return item.code === key;
  });
  return found ? found.text : title || null;
}
function parseObject(object) {
  var isArray = Array.isArray(object.items);
  var numbers;
  var label;
  var term;
  var title = object.title;

  if (!isArray) {
    numbers = parseNumber(object.items);
    term = parseTerm(numbers);
    label = parseLabel(term);
  }

  return new Term_Term({
    epid: object.epid,
    duration: isArray ? object.items.map(parseItem) : null,
    value: isArray ? null : termToValue(term),
    label: label,
    title: title,
    original: object.items
  });
}
function parseArray(array) {
  return new Term_Term({
    duration: array.map(parseItem),
    original: array
  });
}
function parseValue(string) {
  var number = parseNumber(string);
  var term = parseTerm(number);
  var value = termToValue(term);
  var label = parseLabel(term);
  return new Term_Term({
    value: value,
    label: label,
    original: string
  });
}
function parseItem(item) {
  var isArray = Array.isArray(item);
  var isObject = typeof_typeof(item) === 'object' && !isArray;

  if (isArray) {
    return parseArray(item);
  } else if (isObject) {
    return parseObject(item);
  } else {
    return parseValue(item);
  }
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"67ca9303-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tbl.vue?vue&type=template&id=e552dd9c&
var Tblvue_type_template_id_e552dd9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tbl"},_vm._l((_vm.terms),function(termRow,rowIndex){return _c('div',{staticClass:"tbl__row"},_vm._l((termRow),function(terms,offset){return _c('div',{staticClass:"tbl__cell tbl__cell-value tbl__cell-line tbl__cell-container",style:({ 'min-width': _vm.minWidth(offset) }),on:{"mouseenter":function($event){return _vm.onRowHoverIn(rowIndex)},"mouseleave":function($event){return _vm.onRowHoverOut(rowIndex)}}},[(terms)?_c('div',{staticClass:"value-wrapper"},[_vm._l((terms),function(term){return [_c('div',{directives:[{name:"tippy",rawName:"v-tippy",value:({ html: ("#term_" + rowIndex + "_" + offset) }),expression:"{ html: `#term_${rowIndex}_${offset}` }"}],staticClass:"symbol",class:term.className},[_c('div',{staticStyle:{"display":"none"},attrs:{"id":("term_" + rowIndex + "_" + offset)},domProps:{"innerHTML":_vm._s(term.title)}})])]})],2):_vm._e()])}),0)}),0)}
var Tblvue_type_template_id_e552dd9c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tbl.vue?vue&type=template&id=e552dd9c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tbl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tblvue_type_script_lang_js_ = ({
  props: ['headers', 'rows', 'range', 'active', 'activeRow', 'widths'],
  data: function data() {
    return {
      term: null
    };
  },
  computed: {
    terms: function terms() {
      var _this = this;

      return this.rows.map(function (row, rowIndex) {
        return _this.headers.map(function (header, headerIndex) {
          var terms = _this.getTerms(row, header); // row.items.find(term => term.contains(header.value));


          if (!terms.length) return null;
          return terms.map(function (term, idx) {
            return _this.processTerm(term, header, rowIndex, headerIndex, idx);
          });
        });
      });
    }
  },
  methods: {
    processTerm: function processTerm(term, header, rowIndex, headerIndex, idx) {
      var hasHover = this.activeRow !== null;
      var hasActive = this.active !== null;
      var activityClass = '';

      if (hasActive || hasHover) {
        var isActive = hasActive && term.contains(this.active.value);
        var isHovered = hasHover && this.activeRow === rowIndex;
        activityClass = !isActive && !isHovered ? ' inactive ' : '';
      }

      var mainClass = this.symbolClass(term, header);
      var colorClass = term.epid ? 'light' : 'dark';
      return {
        title: term.title,
        className: "".concat(mainClass, " ").concat(colorClass, " ").concat(activityClass)
      };
    },
    getTerms: function getTerms(row, header) {
      return row.items.filter(function (term) {
        return term.contains(header.value);
      });
    },
    onRowHoverIn: function onRowHoverIn(index) {
      this.$emit('rowchange', index);
    },
    onRowHoverOut: function onRowHoverOut() {
      this.$emit('rowchange', null);
    },
    symbolClass: function symbolClass(term, header) {
      var classList = '';
      if (!term) return classList;
      var isFirst = header.value <= this.headers[0].value;
      var isLast = header.value >= this.headers[this.headers.length - 1].value;

      if (term.hasDuration()) {
        var ext = term.isExt(header.value);

        if (ext) {
          classList += ext === 'start' ? 'from iline' : 'to arrow';
        } else {
          classList += ' line iline ';
        }

        ;

        if (isFirst || isLast) {
          classList += isFirst && term.from.value < this.range.from.value ? ' prev iline ' : '';
          classList += isLast && term.to.value > this.range.to.value ? ' next arrow ' : '';
        }
      } else {
        classList = 'dot';
      }

      return classList;
    },
    minWidth: function minWidth(offset) {
      return this.widths[offset] + 'px';
    }
  }
});
// CONCATENATED MODULE: ./src/components/Tbl.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tblvue_type_script_lang_js_ = (Tblvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Tbl.vue?vue&type=style&index=0&lang=scss&
var Tblvue_type_style_index_0_lang_scss_ = __webpack_require__("b473");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Tbl.vue






/* normalize component */

var component = normalizeComponent(
  components_Tblvue_type_script_lang_js_,
  Tblvue_type_template_id_e552dd9c_render,
  Tblvue_type_template_id_e552dd9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tbl = (component.exports);
// CONCATENATED MODULE: ./src/data/dataset.js
/* harmony default export */ var dataset = ([__webpack_require__("1c1e"), __webpack_require__("afb7"), __webpack_require__("2c99"), __webpack_require__("923c"), __webpack_require__("be9c")]);
// CONCATENATED MODULE: ./src/icons.js
/* harmony default export */ var icons = ([{
  code: 'WORK_INFECT',
  image: 'work',
  name: 'Работающие в условиях, связанных с риском заражения'
}, {
  code: 'LIVE_TERR',
  image: 'location',
  name: 'Проживающие на территориях с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями'
}, {
  code: 'VISIT_TERR',
  image: 'travel',
  name: 'Выезжающие на территории с высоким уровнем заболеваемости (риска заболеваемости) данными инфекциями'
}, {
  code: 'WAR',
  image: 'army',
  name: 'Лица, подлежащие призыву на военную службу'
}, {
  code: 'CONTACTS',
  image: 'infection',
  name: 'Контактные лица в очагах инфекции или при угрозе возникновения вспышки'
}, {
  code: 'CHRON',
  image: 'health',
  name: 'При наличии хронических заболеваний или других состояний здоровья'
}]);
// EXTERNAL MODULE: ./src/legend.json
var legend = __webpack_require__("9c62");

// EXTERNAL MODULE: ./node_modules/hammerjs/hammer.js
var hammer = __webpack_require__("c8b5");
var hammer_default = /*#__PURE__*/__webpack_require__.n(hammer);

// EXTERNAL MODULE: ./node_modules/scrollbooster/dist/scrollbooster.min.js
var scrollbooster_min = __webpack_require__("5889");
var scrollbooster_min_default = /*#__PURE__*/__webpack_require__.n(scrollbooster_min);

// CONCATENATED MODULE: ./src/mixins/browser.js
/* harmony default export */ var browser = ({
  computed: {
    IEVersion: function IEVersion() {
      if (!window) return false;
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE');

      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      return false;
    }
  }
});
// EXTERNAL MODULE: ./node_modules/vue-tippy/dist/vue-tippy.js
var vue_tippy = __webpack_require__("d0a7");
var vue_tippy_default = /*#__PURE__*/__webpack_require__.n(vue_tippy);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












var Calendarvue_type_script_lang_js_dataset = dataset.map(prepareData);
var digitsRegexp = /\d+(.\d+)?/g;
var documentLink = 'http://ivo.garant.ru/#/document/70647158/paragraph/1:0';

function prepareData(data) {
  var headers = [];
  var rows = data.items.map(function (row) {
    return Object.assign({}, row, {
      items: row.items.map(function (i) {
        var item = parseItem(i);
        item.title = parseTitle(item.title, data.titles);
        return item;
      })
    });
  });

  if (data.timeline) {
    data.timeline.forEach(function (item) {
      return headers.push(parseItem(item));
    });
  }

  var range = parseArray(data.range);
  rows.forEach(function (row) {
    return row.items.forEach(function (term) {
      return headers.push(term);
    });
  });
  headers = getAllValues(headers, range);

  if (data.headerLabels) {
    headers.forEach(function (header) {
      var found = data.headerLabels.find(function (item) {
        return item.value === header.original;
      });
      header.label = found ? found.label : header.label;
    });
  }

  return Object.assign({}, data, {
    range: range,
    items: rows,
    headers: headers
  });
}

var Calendarvue_type_script_lang_js_component = {
  components: {
    Tbl: Tbl
  },
  mixins: [browser],
  data: function data() {
    return {
      highlight: null,
      hammer: null,
      scrollable: null,
      dataset: Calendarvue_type_script_lang_js_dataset,
      age: 'baby',
      active: null,
      icons: icons,
      legend: legend,
      activeRow: null,
      showNotes: false,
      widths: [],
      documentLink: documentLink
    };
  },
  computed: {
    data: function data() {
      var _this = this;

      return this.dataset.find(function (item) {
        return item.id === _this.age;
      });
    },
    range: function range() {
      return this.data.range;
    },
    headers: function headers() {
      return this.data.headers;
    },
    items: function items() {
      return this.data.items;
    }
  },
  watch: {
    data: function data() {
      this.active = null;
      this.calcHeights();
      this.calcWidths();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    window.addEventListener('load', this.calcHeights);
    window.addEventListener('load', this.calcWidths);
    this.calcHeights();
    this.calcWidths();
    this.hammer = new hammer_default.a(this.$refs.persons, {
      directions: hammer_default.a.DIRECTION_HORIZONTAL
    });
    this.hammer.on('swipe', function (e) {
      var dir = e.direction === hammer_default.a.DIRECTION_LEFT ? 'next' : 'prev';

      _this2.changePerson(dir);
    });
    var draggable = this.$refs.main;
    this.scrollable = new scrollbooster_min_default.a({
      viewport: draggable,
      friction: 0.5,
      textSelection: true,
      mode: 'x',
      onUpdate: function onUpdate(e) {
        this.viewport.scrollLeft = e.position.x;
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.scrollable.destroy();
    window.removeEventListener('load', this.calcHeights);
  },
  methods: {
    getItemTooltip: function getItemTooltip(item) {
      var more = item.hint.link ? "<br/> <a href=\"".concat(item.hint.link, "\" class=\"tooltip-link\" target=\"_blank\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>") : '';
      return "<div class=\"tooltip-text\">".concat(item.hint.html, "</div>").concat(more);
    },
    changePerson: function changePerson(dir) {
      var _this3 = this;

      var idx = this.dataset.findIndex(function (data) {
        return data.id === _this3.age;
      });
      var prev = idx - 1;
      var next = idx + 1;
      var to = idx;

      if (dir === 'next') {
        to = next >= this.dataset.length ? idx : next;
      } else {
        to = prev < 0 ? idx : prev;
      }

      this.age = this.dataset[to].id;
    },
    arrowClass: function arrowClass(dir) {
      var _this4 = this;

      var currentIndex = this.dataset.findIndex(function (data) {
        return data.id === _this4.age;
      });
      if (dir === 'next') return currentIndex >= this.dataset.length - 1 ? 'disabled' : '';
      if (dir === 'prev') return currentIndex <= 0 ? 'disabled' : '';
    },
    calcWidths: function calcWidths() {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.widths = [].map.call(_this5.$refs.headers.querySelectorAll('.tbl__cell-header'), function (el) {
          return el.offsetWidth;
        });
      });
    },
    calcHeights: function calcHeights() {
      var _this6 = this;

      this.$nextTick(function () {
        var table = _this6.$refs.table;
        var ref = _this6.$refs.tableHeight;
        var heights = [].map.call(ref.querySelectorAll('.tbl__cell-name'), _this6.calcHeight);
        [].forEach.call(table.$el.querySelectorAll('.tbl__row'), function (row, index) {
          var height = heights[index];
          [].forEach.call(row.querySelectorAll('.tbl__cell'), function (cell) {
            return cell.style.height = height + 'px';
          });
        });
      });
    },
    changeData: function changeData(key) {
      this.age = key;
    },
    select: function select(item) {
      this.active = this.active && this.active.value === item.value ? null : item;
    },
    calcHeight: function calcHeight(element) {
      return element.offsetHeight;
    },
    getIcon: function getIcon(code) {
      return this.icons.find(function (icon) {
        return icon.code === code;
      });
    }
  }
};
Calendarvue_type_script_lang_js_component = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(Calendarvue_type_script_lang_js_component);
Calendarvue_type_script_lang_js_component.use({
  install: function install() {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_tippy_default.a, {
      animateFill: false,
      trigger: 'mouseenter',
      maxWidth: '300px',
      interactive: true,
      delay: [0, 0],
      duration: [0, 0]
    });
  }
});
/* harmony default export */ var Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_component);
// CONCATENATED MODULE: ./src/components/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Calendar.vue?vue&type=style&index=0&lang=scss&
var Calendarvue_type_style_index_0_lang_scss_ = __webpack_require__("e611");

// CONCATENATED MODULE: ./src/components/Calendar.vue






/* normalize component */

var Calendar_component = normalizeComponent(
  components_Calendarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Calendar = (Calendar_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Calendar);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=calendar.umd.js.map