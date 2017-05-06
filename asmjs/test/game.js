// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = (typeof Module !== 'undefined' ? Module : null) || {};

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (Module['ENVIRONMENT']) {
  if (Module['ENVIRONMENT'] === 'WEB') {
    ENVIRONMENT_IS_WEB = true;
  } else if (Module['ENVIRONMENT'] === 'WORKER') {
    ENVIRONMENT_IS_WORKER = true;
  } else if (Module['ENVIRONMENT'] === 'NODE') {
    ENVIRONMENT_IS_NODE = true;
  } else if (Module['ENVIRONMENT'] === 'SHELL') {
    ENVIRONMENT_IS_SHELL = true;
  } else {
    throw new Error('The provided Module[\'ENVIRONMENT\'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.');
  }
} else {
  ENVIRONMENT_IS_WEB = typeof window === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}


if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = console.log;
  if (!Module['printErr']) Module['printErr'] = console.warn;

  var nodeFS;
  var nodePath;

  Module['read'] = function read(filename, binary) {
    if (!nodeFS) nodeFS = require('fs');
    if (!nodePath) nodePath = require('path');
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  Module['load'] = function load(f) {
    globalEval(read(f));
  };

  if (!Module['thisProgram']) {
    if (process['argv'].length > 1) {
      Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
    } else {
      Module['thisProgram'] = 'unknown-program';
    }
  }

  Module['arguments'] = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available' };
  }

  Module['readBinary'] = function readBinary(f) {
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    var data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof quit === 'function') {
    Module['quit'] = function(status, toThrow) {
      quit(status);
    }
  }

}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    Module['readBinary'] = function read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return xhr.response;
    };
  }

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
      } else {
        onerror();
      }
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof console !== 'undefined') {
    if (!Module['print']) Module['print'] = function print(x) {
      console.log(x);
    };
    if (!Module['printErr']) Module['printErr'] = function printErr(x) {
      console.warn(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (ENVIRONMENT_IS_WORKER) {
    Module['load'] = importScripts;
  }

  if (typeof Module['setWindowTitle'] === 'undefined') {
    Module['setWindowTitle'] = function(title) { document.title = title };
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
if (!Module['thisProgram']) {
  Module['thisProgram'] = './this.program';
}
if (!Module['quit']) {
  Module['quit'] = function(status, toThrow) {
    throw toThrow;
  }
}

// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  setTempRet0: function (value) {
    tempRet0 = value;
    return value;
  },
  getTempRet0: function () {
    return tempRet0;
  },
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  STACK_ALIGN: 16,
  prepVararg: function (ptr, type) {
    if (type === 'double' || type === 'i64') {
      // move so the load is aligned
      if (ptr & 7) {
        assert((ptr & 7) === 4);
        ptr += 4;
      }
    } else {
      assert((ptr & 3) === 0);
    }
    return ptr;
  },
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      assert(args.length == sig.length-1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
    } else {
      assert(sig.length == 1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[sig]) {
      Runtime.funcWrappers[sig] = {};
    }
    var sigCache = Runtime.funcWrappers[sig];
    if (!sigCache[func]) {
      // optimize away arguments usage in common cases
      if (sig.length === 1) {
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func);
        };
      } else if (sig.length === 2) {
        sigCache[func] = function dynCall_wrapper(arg) {
          return Runtime.dynCall(sig, func, [arg]);
        };
      } else {
        // general case
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
        };
      }
    }
    return sigCache[func];
  },
  getCompilerSetting: function (name) {
    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+15)&-16);(assert((((STACKTOP|0) < (STACK_MAX|0))|0))|0); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + (assert(!staticSealed),size))|0;STATICTOP = (((STATICTOP)+15)&-16); return ret; },
  dynamicAlloc: function (size) { assert(DYNAMICTOP_PTR);var ret = HEAP32[DYNAMICTOP_PTR>>2];var end = (((ret + size + 15)|0) & -16);HEAP32[DYNAMICTOP_PTR>>2] = end;if (end >= TOTAL_MEMORY) {var success = enlargeMemory();if (!success) {HEAP32[DYNAMICTOP_PTR>>2] = ret;return 0;}}return ret;},
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 16))*(quantum ? quantum : 16); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}



Module["Runtime"] = Runtime;



//========================================
// Runtime essentials
//========================================

var ABORT = 0; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  if (!func) {
    try { func = eval('_' + ident); } catch(e) {}
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}

var cwrap, ccall;
(function(){
  var JSfuncs = {
    // Helpers for cwrap -- it can't refer to Runtime directly because it might
    // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
    // out what the minified function name is.
    'stackSave': function() {
      Runtime.stackSave()
    },
    'stackRestore': function() {
      Runtime.stackRestore()
    },
    // type conversion from js to c
    'arrayToC' : function(arr) {
      var ret = Runtime.stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
    'stringToC' : function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = Runtime.stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    }
  };
  // For fast lookup of conversion functions
  var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

  // C calling interface.
  ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    assert(returnType !== 'array', 'Return type should not be "array".');
    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];
        if (converter) {
          if (stack === 0) stack = Runtime.stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }
    var ret = func.apply(null, cArgs);
    if ((!opts || !opts.async) && typeof EmterpreterAsync === 'object') {
      assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling ccall');
    }
    if (opts && opts.async) assert(!returnType, 'async ccalls cannot return values');
    if (returnType === 'string') ret = Pointer_stringify(ret);
    if (stack !== 0) {
      if (opts && opts.async) {
        EmterpreterAsync.asyncFinalizers.push(function() {
          Runtime.stackRestore(stack);
        });
        return;
      }
      Runtime.stackRestore(stack);
    }
    return ret;
  }

  var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
  function parseJSFunc(jsfunc) {
    // Match the body and the return value of a javascript function source
    var parsed = jsfunc.toString().match(sourceRegex).slice(1);
    return {arguments : parsed[0], body : parsed[1], returnValue: parsed[2]}
  }

  // sources of useful functions. we create this lazily as it can trigger a source decompression on this entire file
  var JSsource = null;
  function ensureJSsource() {
    if (!JSsource) {
      JSsource = {};
      for (var fun in JSfuncs) {
        if (JSfuncs.hasOwnProperty(fun)) {
          // Elements of toCsource are arrays of three items:
          // the code, and the return value
          JSsource[fun] = parseJSFunc(JSfuncs[fun]);
        }
      }
    }
  }

  cwrap = function cwrap(ident, returnType, argTypes) {
    argTypes = argTypes || [];
    var cfunc = getCFunc(ident);
    // When the function takes numbers and returns a number, we can just return
    // the original function
    var numericArgs = argTypes.every(function(type){ return type === 'number'});
    var numericRet = (returnType !== 'string');
    if ( numericRet && numericArgs) {
      return cfunc;
    }
    // Creation of the arguments list (["$1","$2",...,"$nargs"])
    var argNames = argTypes.map(function(x,i){return '$'+i});
    var funcstr = "(function(" + argNames.join(',') + ") {";
    var nargs = argTypes.length;
    if (!numericArgs) {
      // Generate the code needed to convert the arguments from javascript
      // values to pointers
      ensureJSsource();
      funcstr += 'var stack = ' + JSsource['stackSave'].body + ';';
      for (var i = 0; i < nargs; i++) {
        var arg = argNames[i], type = argTypes[i];
        if (type === 'number') continue;
        var convertCode = JSsource[type + 'ToC']; // [code, return]
        funcstr += 'var ' + convertCode.arguments + ' = ' + arg + ';';
        funcstr += convertCode.body + ';';
        funcstr += arg + '=(' + convertCode.returnValue + ');';
      }
    }

    // When the code is compressed, the name of cfunc is not literally 'cfunc' anymore
    var cfuncname = parseJSFunc(function(){return cfunc}).returnValue;
    // Call the function
    funcstr += 'var ret = ' + cfuncname + '(' + argNames.join(',') + ');';
    if (!numericRet) { // Return type can only by 'string' or 'number'
      // Convert the result to a string
      var strgfy = parseJSFunc(function(){return Pointer_stringify}).returnValue;
      funcstr += 'ret = ' + strgfy + '(ret);';
    }
    funcstr += "if (typeof EmterpreterAsync === 'object') { assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') }";
    if (!numericArgs) {
      // If we had a stack, restore it
      ensureJSsource();
      funcstr += JSsource['stackRestore'].body.replace('()', '(stack)') + ';';
    }
    funcstr += 'return ret})';
    return eval(funcstr);
  };
})();
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;

function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module["setValue"] = setValue;


function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module["getValue"] = getValue;

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
Module["ALLOC_STACK"] = ALLOC_STACK;
Module["ALLOC_STATIC"] = ALLOC_STATIC;
Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
Module["ALLOC_NONE"] = ALLOC_NONE;

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}
Module["allocate"] = allocate;

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return Runtime.staticAlloc(size);
  if (!runtimeInitialized) return Runtime.dynamicAlloc(size);
  return _malloc(size);
}
Module["getMemory"] = getMemory;

function Pointer_stringify(ptr, /* optional */ length) {
  if (length === 0 || !ptr) return '';
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))>>0)];
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return Module['UTF8ToString'](ptr);
}
Module["Pointer_stringify"] = Pointer_stringify;

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}
Module["AsciiToString"] = AsciiToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}
Module["stringToAscii"] = stringToAscii;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}
Module["UTF8ArrayToString"] = UTF8ArrayToString;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}
Module["UTF8ToString"] = UTF8ToString;

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}
Module["stringToUTF8Array"] = stringToUTF8Array;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}
Module["stringToUTF8"] = stringToUTF8;

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}
Module["lengthBytesUTF8"] = lengthBytesUTF8;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}


function UTF32ToString(ptr) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}


function demangle(func) {
  var __cxa_demangle_func = Module['___cxa_demangle'] || Module['__cxa_demangle'];
  if (__cxa_demangle_func) {
    try {
      var s =
        func.substr(1);
      var len = lengthBytesUTF8(s)+1;
      var buf = _malloc(len);
      stringToUTF8(s, buf, len);
      var status = _malloc(4);
      var ret = __cxa_demangle_func(buf, 0, 0, status);
      if (getValue(status, 'i32') === 0 && ret) {
        return Pointer_stringify(ret);
      }
      // otherwise, libcxxabi failed
    } catch(e) {
      // ignore problems here
    } finally {
      if (buf) _free(buf);
      if (status) _free(status);
      if (ret) _free(ret);
    }
    // failure when using libcxxabi, don't demangle
    return func;
  }
  Runtime.warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
  return func;
}

function demangleAll(text) {
  var regex =
    /__Z[\w\d_]+/g;
  return text.replace(regex,
    function(x) {
      var y = demangle(x);
      return x === y ? x : (x + ' [' + y + ']');
    });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}
Module["stackTrace"] = stackTrace;

// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;
var MIN_TOTAL_MEMORY = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP;
var buffer;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBuffer(buf) {
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  HEAPU32[(STACK_MAX >> 2)-1] = 0x02135467;
  HEAPU32[(STACK_MAX >> 2)-2] = 0x89BACDFE;
}

function checkStackCookie() {
  if (HEAPU32[(STACK_MAX >> 2)-1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2)-2] != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2)-2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2)-1].toString(16));
  }
  // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - asm.stackSave() + allocSize) + ' bytes available!');
}

function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}


function enlargeMemory() {
  abortOnCannotGrowMemory();
}


var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
if (TOTAL_MEMORY < TOTAL_STACK) Module.printErr('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'JS engine does not provide full typed array support');



// Use a provided buffer, if there is one, or else allocate a new one
if (Module['buffer']) {
  buffer = Module['buffer'];
  assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
} else {
  // Use a WebAssembly memory where available
  {
    buffer = new ArrayBuffer(TOTAL_MEMORY);
  }
  assert(buffer.byteLength === TOTAL_MEMORY);
}
updateGlobalBufferViews();


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)
  HEAP32[0] = 0x63736d65; /* 'emsc' */
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

Module['HEAP'] = HEAP;
Module['buffer'] = buffer;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  checkStackCookie();
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module["addOnPreRun"] = addOnPreRun;

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module["addOnInit"] = addOnInit;

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module["addOnPreMain"] = addOnPreMain;

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module["addOnExit"] = addOnExit;

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module["addOnPostRun"] = addOnPostRun;

// Tools


function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
Module["intArrayFromString"] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module["intArrayToString"] = intArrayToString;

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
function writeStringToMemory(string, buffer, dontAddNull) {
  Runtime.warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var lastChar, end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}
Module["writeStringToMemory"] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}
Module["writeArrayToMemory"] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}
Module["writeAsciiToMemory"] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];


if (!Math['clz32']) Math['clz32'] = function(x) {
  x = x >>> 0;
  for (var i = 0; i < 32; i++) {
    if (x & (1 << (31 - i))) return i;
  }
  return 32;
};
Math.clz32 = Math['clz32']

if (!Math['trunc']) Math['trunc'] = function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
Math.trunc = Math['trunc'];

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            Module.printErr('still waiting on run dependencies:');
          }
          Module.printErr('dependency: ' + dep);
        }
        if (shown) {
          Module.printErr('(end of list)');
        }
      }, 10000);
    }
  } else {
    Module.printErr('warning: run dependency added without ID');
  }
}
Module["addRunDependency"] = addRunDependency;

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    Module.printErr('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module["removeRunDependency"] = removeRunDependency;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;



var /* show errors on likely calls to FS when it was not included */ FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;



// === Body ===

var ASM_CONSTS = [];




STATIC_BASE = 8;

STATICTOP = STATIC_BASE + 5216;
  /* global initializers */  __ATINIT__.push();
  

/* memory initializer */ allocate([1,0,0,0,2,0,0,0,3,0,0,0,2,0,0,192,3,0,0,192,4,0,0,192,5,0,0,192,6,0,0,192,7,0,0,192,8,0,0,192,9,0,0,192,10,0,0,192,11,0,0,192,12,0,0,192,13,0,0,192,14,0,0,192,15,0,0,192,16,0,0,192,17,0,0,192,18,0,0,192,19,0,0,192,20,0,0,192,21,0,0,192,22,0,0,192,23,0,0,192,24,0,0,192,25,0,0,192,26,0,0,192,27,0,0,192,28,0,0,192,29,0,0,192,30,0,0,192,31,0,0,192,0,0,0,179,1,0,0,195,2,0,0,195,3,0,0,195,4,0,0,195,5,0,0,195,6,0,0,195,7,0,0,195,8,0,0,195,9,0,0,195,10,0,0,195,11,0,0,195,12,0,0,195,13,0,0,211,14,0,0,195,15,0,0,195,0,0,12,187,1,0,12,195,2,0,12,195,3,0,12,195,4,0,12,211,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,6,0,0,0,92,16,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,212,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,100,0,0,0,232,3,0,0,16,39,0,0,160,134,1,0,64,66,15,0,128,150,152,0,0,225,245,5,95,112,137,0,255,9,47,15,252,13,0,0,92,20,0,0,92,20,0,0,92,20,0,0,92,20,0,0,92,20,0,0,92,20,0,0,92,20,0,0,92,20,0,0,92,20,0,0,127,127,127,127,127,127,127,127,127,127,127,127,127,127,0,0,110,117,108,108,0,102,97,108,115,101,0,116,114,117,101,0,34,34,0,117,37,48,52,120,0,37,49,46,49,53,103,0,37,108,103,0,37,49,46,49,55,103,0,105,100,0,120,0,121,0,112,108,97,121,101,114,0,101,110,101,109,105,101,115,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,1,2,3,4,5,6,7,8,9,255,255,255,255,255,255,255,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,255,255,255,255,255,255,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,1,2,4,7,3,6,5,0,17,0,10,0,17,17,17,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,15,10,17,17,17,3,10,7,0,1,19,9,11,11,0,0,9,6,11,0,0,11,0,6,17,0,0,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,10,10,17,17,17,0,10,0,0,2,0,9,11,0,0,0,9,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,13,0,0,0,0,9,14,0,0,0,0,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,10,0,0,0,0,9,11,0,0,0,0,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,45,43,32,32,32,48,88,48,120,0,40,110,117,108,108,41,0,45,48,88,43,48,88,32,48,88,45,48,120,43,48,120,32,48,120,0,105,110,102,0,73,78,70,0,78,65,78,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115,111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110,0,0,105,110,102,105,110,105,116,121,0,110,97,110,0,46,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);





/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


   
  Module["_i64Subtract"] = _i64Subtract;

   
  Module["_i64Add"] = _i64Add;

   
  Module["_memset"] = _memset;

   
  Module["_bitshift64Lshr"] = _bitshift64Lshr;

   
  Module["_bitshift64Shl"] = _bitshift64Shl;

  function _abort() {
      Module['abort']();
    }

  function ___lock() {}

  function ___unlock() {}

  
  var SYSCALLS={varargs:0,get:function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function () {
        var ret = Pointer_stringify(SYSCALLS.get());
        return ret;
      },get64:function () {
        var low = SYSCALLS.get(), high = SYSCALLS.get();
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },getZero:function () {
        assert(SYSCALLS.get() === 0);
      }};function ___syscall6(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // close
      var stream = SYSCALLS.getStreamFromFD();
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  
  
  var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_STATIC); 
  Module["_llvm_cttz_i32"] = _llvm_cttz_i32; 
  Module["___udivmoddi4"] = ___udivmoddi4; 
  Module["___udivdi3"] = ___udivdi3;

  
   
  Module["___muldsi3"] = ___muldsi3; 
  Module["___muldi3"] = ___muldi3;

  
  function ___setErrNo(value) {
      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
      else Module.printErr('failed to set errno from JS');
      return value;
    } 
  Module["_sbrk"] = _sbrk;

   
  Module["___uremdi3"] = ___uremdi3;

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 
  Module["_memcpy"] = _memcpy;

   
  Module["_llvm_bswap_i32"] = _llvm_bswap_i32;

  function ___syscall140(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // llseek
      var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
      var offset = offset_low;
      assert(offset_high === 0);
      FS.llseek(stream, offset, whence);
      HEAP32[((result)>>2)]=stream.position;
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall146(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // writev
      // hack to support printf in NO_FILESYSTEM
      var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      var ret = 0;
      if (!___syscall146.buffer) {
        ___syscall146.buffers = [null, [], []]; // 1 => stdout, 2 => stderr
        ___syscall146.printChar = function(stream, curr) {
          var buffer = ___syscall146.buffers[stream];
          assert(buffer);
          if (curr === 0 || curr === 10) {
            (stream === 1 ? Module['print'] : Module['printErr'])(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
      }
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          ___syscall146.printChar(stream, HEAPU8[ptr+j]);
        }
        ret += len;
      }
      return ret;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___syscall54(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // ioctl
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }
/* flush anything remaining in the buffer during shutdown */ __ATEXIT__.push(function() { var fflush = Module["_fflush"]; if (fflush) fflush(0); var printChar = ___syscall146.printChar; if (!printChar) return; var buffers = ___syscall146.buffers; if (buffers[1].length) printChar(1, 10); if (buffers[2].length) printChar(2, 10); });;
DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC);

STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");



function nullFunc_ii(x) { Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iii(x) { Module["printErr"]("Invalid function pointer called with signature 'iii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vi(x) { Module["printErr"]("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "abortStackOverflow": abortStackOverflow, "nullFunc_ii": nullFunc_ii, "nullFunc_iiii": nullFunc_iiii, "nullFunc_iii": nullFunc_iii, "nullFunc_vi": nullFunc_vi, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "___lock": ___lock, "_abort": _abort, "___setErrNo": ___setErrNo, "___syscall6": ___syscall6, "___syscall140": ___syscall140, "_emscripten_memcpy_big": _emscripten_memcpy_big, "___syscall54": ___syscall54, "___unlock": ___unlock, "___syscall146": ___syscall146, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "cttz_i8": cttz_i8 };
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var abortStackOverflow=env.abortStackOverflow;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_iii=env.nullFunc_iii;
  var nullFunc_vi=env.nullFunc_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var ___lock=env.___lock;
  var _abort=env._abort;
  var ___setErrNo=env.___setErrNo;
  var ___syscall6=env.___syscall6;
  var ___syscall140=env.___syscall140;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var ___syscall146=env.___syscall146;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
  if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(size|0);

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function _cJSON_Delete($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = 0;
 while(1) {
  $3 = $1;
  $4 = ($3|0)!=(0|0);
  if (!($4)) {
   break;
  }
  $5 = $1;
  $6 = HEAP32[$5>>2]|0;
  $2 = $6;
  $7 = $1;
  $8 = ((($7)) + 12|0);
  $9 = HEAP32[$8>>2]|0;
  $10 = $9 & 256;
  $11 = ($10|0)!=(0);
  if (!($11)) {
   $12 = $1;
   $13 = ((($12)) + 8|0);
   $14 = HEAP32[$13>>2]|0;
   $15 = ($14|0)!=(0|0);
   if ($15) {
    $16 = $1;
    $17 = ((($16)) + 8|0);
    $18 = HEAP32[$17>>2]|0;
    _cJSON_Delete($18);
   }
  }
  $19 = $1;
  $20 = ((($19)) + 12|0);
  $21 = HEAP32[$20>>2]|0;
  $22 = $21 & 256;
  $23 = ($22|0)!=(0);
  if (!($23)) {
   $24 = $1;
   $25 = ((($24)) + 16|0);
   $26 = HEAP32[$25>>2]|0;
   $27 = ($26|0)!=(0|0);
   if ($27) {
    $28 = HEAP32[(12)>>2]|0;
    $29 = $1;
    $30 = ((($29)) + 16|0);
    $31 = HEAP32[$30>>2]|0;
    FUNCTION_TABLE_vi[$28 & 3]($31);
   }
  }
  $32 = $1;
  $33 = ((($32)) + 12|0);
  $34 = HEAP32[$33>>2]|0;
  $35 = $34 & 512;
  $36 = ($35|0)!=(0);
  if (!($36)) {
   $37 = $1;
   $38 = ((($37)) + 32|0);
   $39 = HEAP32[$38>>2]|0;
   $40 = ($39|0)!=(0|0);
   if ($40) {
    $41 = HEAP32[(12)>>2]|0;
    $42 = $1;
    $43 = ((($42)) + 32|0);
    $44 = HEAP32[$43>>2]|0;
    FUNCTION_TABLE_vi[$41 & 3]($44);
   }
  }
  $45 = HEAP32[(12)>>2]|0;
  $46 = $1;
  FUNCTION_TABLE_vi[$45 & 3]($46);
  $47 = $2;
  $1 = $47;
 }
 STACKTOP = sp;return;
}
function _cJSON_New_Item($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $3 = $1;
 $4 = HEAP32[$3>>2]|0;
 $5 = (FUNCTION_TABLE_ii[$4 & 7](40)|0);
 $2 = $5;
 $6 = $2;
 $7 = ($6|0)!=(0|0);
 if (!($7)) {
  $9 = $2;
  STACKTOP = sp;return ($9|0);
 }
 $8 = $2;
 dest=$8; stop=dest+40|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 $9 = $2;
 STACKTOP = sp;return ($9|0);
}
function _get_decimal_point() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = (_localeconv()|0);
 $0 = $1;
 $2 = $0;
 $3 = HEAP32[$2>>2]|0;
 $4 = HEAP8[$3>>0]|0;
 STACKTOP = sp;return ($4|0);
}
function _cJSON_Print($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = (_print($2,1,8)|0);
 STACKTOP = sp;return ($3|0);
}
function _print($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $7 = sp + 4|0;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $8 = 0;
 dest=$7; stop=dest+36|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 $9 = $6;
 $10 = HEAP32[$9>>2]|0;
 $11 = (FUNCTION_TABLE_ii[$10 & 7](256)|0);
 HEAP32[$7>>2] = $11;
 $12 = $5;
 $13 = ((($7)) + 20|0);
 HEAP32[$13>>2] = $12;
 $14 = ((($7)) + 24|0);
 $15 = $6;
 ;HEAP32[$14>>2]=HEAP32[$15>>2]|0;HEAP32[$14+4>>2]=HEAP32[$15+4>>2]|0;HEAP32[$14+8>>2]=HEAP32[$15+8>>2]|0;
 $16 = HEAP32[$7>>2]|0;
 $17 = ($16|0)==(0|0);
 do {
  if (!($17)) {
   $18 = $4;
   $19 = (_print_value($18,$7)|0);
   $20 = ($19|0)!=(0);
   if ($20) {
    _update_offset($7);
    $21 = $6;
    $22 = ((($21)) + 8|0);
    $23 = HEAP32[$22>>2]|0;
    $24 = ($23|0)!=(0|0);
    $25 = $6;
    if ($24) {
     $26 = ((($25)) + 8|0);
     $27 = HEAP32[$26>>2]|0;
     $28 = HEAP32[$7>>2]|0;
     $29 = ((($7)) + 4|0);
     $30 = HEAP32[$29>>2]|0;
     $31 = (FUNCTION_TABLE_iii[$27 & 3]($28,$30)|0);
     $8 = $31;
     HEAP32[$7>>2] = 0;
     $32 = $8;
     $33 = ($32|0)==(0|0);
     if ($33) {
      break;
     }
    } else {
     $34 = HEAP32[$25>>2]|0;
     $35 = ((($7)) + 8|0);
     $36 = HEAP32[$35>>2]|0;
     $37 = (($36) + 1)|0;
     $38 = (FUNCTION_TABLE_ii[$34 & 7]($37)|0);
     $8 = $38;
     $39 = $8;
     $40 = ($39|0)==(0|0);
     if ($40) {
      break;
     }
     $41 = $8;
     $42 = HEAP32[$7>>2]|0;
     $43 = ((($7)) + 4|0);
     $44 = HEAP32[$43>>2]|0;
     $45 = ((($7)) + 8|0);
     $46 = HEAP32[$45>>2]|0;
     $47 = (($46) + 1)|0;
     $48 = ($44>>>0)<($47>>>0);
     if ($48) {
      $49 = ((($7)) + 4|0);
      $50 = HEAP32[$49>>2]|0;
      $54 = $50;
     } else {
      $51 = ((($7)) + 8|0);
      $52 = HEAP32[$51>>2]|0;
      $53 = (($52) + 1)|0;
      $54 = $53;
     }
     _memcpy(($41|0),($42|0),($54|0))|0;
     $55 = $8;
     $56 = ((($7)) + 8|0);
     $57 = HEAP32[$56>>2]|0;
     $58 = (($55) + ($57)|0);
     HEAP8[$58>>0] = 0;
     $59 = $6;
     $60 = ((($59)) + 4|0);
     $61 = HEAP32[$60>>2]|0;
     $62 = HEAP32[$7>>2]|0;
     FUNCTION_TABLE_vi[$61 & 3]($62);
    }
    $63 = $8;
    $3 = $63;
    $76 = $3;
    STACKTOP = sp;return ($76|0);
   }
  }
 } while(0);
 $64 = HEAP32[$7>>2]|0;
 $65 = ($64|0)!=(0|0);
 if ($65) {
  $66 = $6;
  $67 = ((($66)) + 4|0);
  $68 = HEAP32[$67>>2]|0;
  $69 = HEAP32[$7>>2]|0;
  FUNCTION_TABLE_vi[$68 & 3]($69);
 }
 $70 = $8;
 $71 = ($70|0)!=(0|0);
 if ($71) {
  $72 = $6;
  $73 = ((($72)) + 4|0);
  $74 = HEAP32[$73>>2]|0;
  $75 = $8;
  FUNCTION_TABLE_vi[$74 & 3]($75);
 }
 $3 = 0;
 $76 = $3;
 STACKTOP = sp;return ($76|0);
}
function _print_value($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = 0;
 $7 = $3;
 $8 = ($7|0)==(0|0);
 $9 = $4;
 $10 = ($9|0)==(0|0);
 $or$cond = $8 | $10;
 L1: do {
  if ($or$cond) {
   $2 = 0;
  } else {
   $11 = $3;
   $12 = ((($11)) + 12|0);
   $13 = HEAP32[$12>>2]|0;
   $14 = $13 & 255;
   switch ($14|0) {
   case 4:  {
    $15 = $4;
    $16 = (_ensure($15,5)|0);
    $5 = $16;
    $17 = $5;
    $18 = ($17|0)==(0|0);
    if ($18) {
     $2 = 0;
     break L1;
    } else {
     $19 = $5;
     (_strcpy($19,816)|0);
     $2 = 1;
     break L1;
    }
    break;
   }
   case 1:  {
    $20 = $4;
    $21 = (_ensure($20,6)|0);
    $5 = $21;
    $22 = $5;
    $23 = ($22|0)==(0|0);
    if ($23) {
     $2 = 0;
     break L1;
    } else {
     $24 = $5;
     (_strcpy($24,821)|0);
     $2 = 1;
     break L1;
    }
    break;
   }
   case 2:  {
    $25 = $4;
    $26 = (_ensure($25,5)|0);
    $5 = $26;
    $27 = $5;
    $28 = ($27|0)==(0|0);
    if ($28) {
     $2 = 0;
     break L1;
    } else {
     $29 = $5;
     (_strcpy($29,827)|0);
     $2 = 1;
     break L1;
    }
    break;
   }
   case 8:  {
    $30 = $3;
    $31 = $4;
    $32 = (_print_number($30,$31)|0);
    $2 = $32;
    break L1;
    break;
   }
   case 128:  {
    $6 = 0;
    $33 = $3;
    $34 = ((($33)) + 16|0);
    $35 = HEAP32[$34>>2]|0;
    $36 = ($35|0)==(0|0);
    if ($36) {
     $37 = $4;
     $38 = ((($37)) + 16|0);
     $39 = HEAP32[$38>>2]|0;
     $40 = ($39|0)!=(0);
     if (!($40)) {
      $41 = $4;
      $42 = ((($41)) + 24|0);
      $43 = ((($42)) + 4|0);
      $44 = HEAP32[$43>>2]|0;
      $45 = $4;
      $46 = HEAP32[$45>>2]|0;
      FUNCTION_TABLE_vi[$44 & 3]($46);
     }
     $2 = 0;
     break L1;
    } else {
     $47 = $3;
     $48 = ((($47)) + 16|0);
     $49 = HEAP32[$48>>2]|0;
     $50 = (_strlen($49)|0);
     $51 = (($50) + 1)|0;
     $6 = $51;
     $52 = $4;
     $53 = $6;
     $54 = (_ensure($52,$53)|0);
     $5 = $54;
     $55 = $5;
     $56 = ($55|0)==(0|0);
     if ($56) {
      $2 = 0;
      break L1;
     } else {
      $57 = $5;
      $58 = $3;
      $59 = ((($58)) + 16|0);
      $60 = HEAP32[$59>>2]|0;
      $61 = $6;
      _memcpy(($57|0),($60|0),($61|0))|0;
      $2 = 1;
      break L1;
     }
    }
    break;
   }
   case 16:  {
    $62 = $3;
    $63 = $4;
    $64 = (_print_string($62,$63)|0);
    $2 = $64;
    break L1;
    break;
   }
   case 32:  {
    $65 = $3;
    $66 = $4;
    $67 = (_print_array($65,$66)|0);
    $2 = $67;
    break L1;
    break;
   }
   case 64:  {
    $68 = $3;
    $69 = $4;
    $70 = (_print_object($68,$69)|0);
    $2 = $70;
    break L1;
    break;
   }
   default: {
    $2 = 0;
    break L1;
   }
   }
  }
 } while(0);
 $71 = $2;
 STACKTOP = sp;return ($71|0);
}
function _update_offset($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = 0;
 $3 = $1;
 $4 = ($3|0)==(0|0);
 if ($4) {
  STACKTOP = sp;return;
 }
 $5 = $1;
 $6 = HEAP32[$5>>2]|0;
 $7 = ($6|0)==(0|0);
 if ($7) {
  STACKTOP = sp;return;
 }
 $8 = $1;
 $9 = HEAP32[$8>>2]|0;
 $10 = $1;
 $11 = ((($10)) + 8|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = (($9) + ($12)|0);
 $2 = $13;
 $14 = $2;
 $15 = (_strlen($14)|0);
 $16 = $1;
 $17 = ((($16)) + 8|0);
 $18 = HEAP32[$17>>2]|0;
 $19 = (($18) + ($15))|0;
 HEAP32[$17>>2] = $19;
 STACKTOP = sp;return;
}
function _ensure($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = 0;
 $6 = 0;
 $7 = $3;
 $8 = ($7|0)==(0|0);
 if (!($8)) {
  $9 = $3;
  $10 = HEAP32[$9>>2]|0;
  $11 = ($10|0)==(0|0);
  if (!($11)) {
   $12 = $3;
   $13 = ((($12)) + 4|0);
   $14 = HEAP32[$13>>2]|0;
   $15 = ($14>>>0)>(0);
   if ($15) {
    $16 = $3;
    $17 = ((($16)) + 8|0);
    $18 = HEAP32[$17>>2]|0;
    $19 = $3;
    $20 = ((($19)) + 4|0);
    $21 = HEAP32[$20>>2]|0;
    $22 = ($18>>>0)>=($21>>>0);
    if ($22) {
     $2 = 0;
     $102 = $2;
     STACKTOP = sp;return ($102|0);
    }
   }
   $23 = $4;
   $24 = ($23>>>0)>(2147483647);
   if ($24) {
    $2 = 0;
    $102 = $2;
    STACKTOP = sp;return ($102|0);
   }
   $25 = $3;
   $26 = ((($25)) + 8|0);
   $27 = HEAP32[$26>>2]|0;
   $28 = (($27) + 1)|0;
   $29 = $4;
   $30 = (($29) + ($28))|0;
   $4 = $30;
   $31 = $4;
   $32 = $3;
   $33 = ((($32)) + 4|0);
   $34 = HEAP32[$33>>2]|0;
   $35 = ($31>>>0)<=($34>>>0);
   $36 = $3;
   if ($35) {
    $37 = HEAP32[$36>>2]|0;
    $38 = $3;
    $39 = ((($38)) + 8|0);
    $40 = HEAP32[$39>>2]|0;
    $41 = (($37) + ($40)|0);
    $2 = $41;
    $102 = $2;
    STACKTOP = sp;return ($102|0);
   }
   $42 = ((($36)) + 16|0);
   $43 = HEAP32[$42>>2]|0;
   $44 = ($43|0)!=(0);
   if ($44) {
    $2 = 0;
    $102 = $2;
    STACKTOP = sp;return ($102|0);
   }
   $45 = $4;
   $46 = ($45>>>0)>(1073741823);
   $47 = $4;
   do {
    if ($46) {
     $48 = ($47>>>0)<=(2147483647);
     if ($48) {
      $6 = 2147483647;
      break;
     }
     $2 = 0;
     $102 = $2;
     STACKTOP = sp;return ($102|0);
    } else {
     $49 = $47<<1;
     $6 = $49;
    }
   } while(0);
   $50 = $3;
   $51 = ((($50)) + 24|0);
   $52 = ((($51)) + 8|0);
   $53 = HEAP32[$52>>2]|0;
   $54 = ($53|0)!=(0|0);
   $55 = $3;
   $56 = ((($55)) + 24|0);
   if ($54) {
    $57 = ((($56)) + 8|0);
    $58 = HEAP32[$57>>2]|0;
    $59 = $3;
    $60 = HEAP32[$59>>2]|0;
    $61 = $6;
    $62 = (FUNCTION_TABLE_iii[$58 & 3]($60,$61)|0);
    $5 = $62;
   } else {
    $63 = HEAP32[$56>>2]|0;
    $64 = $6;
    $65 = (FUNCTION_TABLE_ii[$63 & 7]($64)|0);
    $5 = $65;
    $66 = $5;
    $67 = ($66|0)!=(0|0);
    if (!($67)) {
     $68 = $3;
     $69 = ((($68)) + 24|0);
     $70 = ((($69)) + 4|0);
     $71 = HEAP32[$70>>2]|0;
     $72 = $3;
     $73 = HEAP32[$72>>2]|0;
     FUNCTION_TABLE_vi[$71 & 3]($73);
     $74 = $3;
     $75 = ((($74)) + 4|0);
     HEAP32[$75>>2] = 0;
     $76 = $3;
     HEAP32[$76>>2] = 0;
     $2 = 0;
     $102 = $2;
     STACKTOP = sp;return ($102|0);
    }
    $77 = $5;
    $78 = ($77|0)!=(0|0);
    if ($78) {
     $79 = $5;
     $80 = $3;
     $81 = HEAP32[$80>>2]|0;
     $82 = $3;
     $83 = ((($82)) + 8|0);
     $84 = HEAP32[$83>>2]|0;
     $85 = (($84) + 1)|0;
     _memcpy(($79|0),($81|0),($85|0))|0;
    }
    $86 = $3;
    $87 = ((($86)) + 24|0);
    $88 = ((($87)) + 4|0);
    $89 = HEAP32[$88>>2]|0;
    $90 = $3;
    $91 = HEAP32[$90>>2]|0;
    FUNCTION_TABLE_vi[$89 & 3]($91);
   }
   $92 = $6;
   $93 = $3;
   $94 = ((($93)) + 4|0);
   HEAP32[$94>>2] = $92;
   $95 = $5;
   $96 = $3;
   HEAP32[$96>>2] = $95;
   $97 = $5;
   $98 = $3;
   $99 = ((($98)) + 8|0);
   $100 = HEAP32[$99>>2]|0;
   $101 = (($97) + ($100)|0);
   $2 = $101;
   $102 = $2;
   STACKTOP = sp;return ($102|0);
  }
 }
 $2 = 0;
 $102 = $2;
 STACKTOP = sp;return ($102|0);
}
function _print_number($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$sink = 0, $$sink2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0.0, $19 = 0.0, $2 = 0, $20 = 0, $21 = 0, $22 = 0.0, $23 = 0, $24 = 0, $25 = 0, $26 = 0.0;
 var $27 = 0.0, $28 = 0, $29 = 0.0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0.0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_buffer5 = 0, $vararg_buffer8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(112|0);
 $vararg_buffer8 = sp + 40|0;
 $vararg_buffer5 = sp + 32|0;
 $vararg_buffer3 = sp + 24|0;
 $vararg_buffer = sp + 16|0;
 $9 = sp + 74|0;
 $11 = sp;
 $3 = $0;
 $4 = $1;
 $5 = 0;
 $12 = $3;
 $13 = ((($12)) + 24|0);
 $14 = +HEAPF64[$13>>3];
 $6 = $14;
 $7 = 0;
 $8 = 0;
 $15 = (_get_decimal_point()|0);
 $10 = $15;
 $16 = $4;
 $17 = ($16|0)==(0|0);
 if ($17) {
  $2 = 0;
  $69 = $2;
  STACKTOP = sp;return ($69|0);
 }
 $18 = $6;
 $19 = $18 * 0.0;
 $20 = $19 != 0.0;
 do {
  if ($20) {
   $21 = (_sprintf($9,816,$vararg_buffer)|0);
   $7 = $21;
  } else {
   $22 = $6;
   HEAPF64[$vararg_buffer3>>3] = $22;
   $23 = (_sprintf($9,841,$vararg_buffer3)|0);
   $7 = $23;
   HEAP32[$vararg_buffer5>>2] = $11;
   $24 = (_sscanf($9,848,$vararg_buffer5)|0);
   $25 = ($24|0)!=(1);
   if (!($25)) {
    $26 = +HEAPF64[$11>>3];
    $27 = $6;
    $28 = $26 != $27;
    if (!($28)) {
     break;
    }
   }
   $29 = $6;
   HEAPF64[$vararg_buffer8>>3] = $29;
   $30 = (_sprintf($9,852,$vararg_buffer8)|0);
   $7 = $30;
  }
 } while(0);
 $31 = $7;
 $32 = ($31|0)<(0);
 $33 = $7;
 $34 = ($33|0)>(25);
 $or$cond = $32 | $34;
 if ($or$cond) {
  $2 = 0;
  $69 = $2;
  STACKTOP = sp;return ($69|0);
 }
 $35 = $4;
 $36 = $7;
 $37 = (_ensure($35,$36)|0);
 $5 = $37;
 $38 = $5;
 $39 = ($38|0)==(0|0);
 if ($39) {
  $2 = 0;
  $69 = $2;
  STACKTOP = sp;return ($69|0);
 }
 $8 = 0;
 while(1) {
  $40 = $8;
  $41 = $7;
  $42 = ($40>>>0)<($41>>>0);
  if (!($42)) {
   break;
  }
  $43 = $8;
  $44 = (($9) + ($43)|0);
  $45 = HEAP8[$44>>0]|0;
  $46 = $45&255;
  $47 = $10;
  $48 = $47&255;
  $49 = ($46|0)==($48|0);
  if ($49) {
   $50 = $5;
   $51 = $8;
   $52 = (($50) + ($51)|0);
   $$sink = 46;$$sink2 = $52;
  } else {
   $53 = $8;
   $54 = (($9) + ($53)|0);
   $55 = HEAP8[$54>>0]|0;
   $56 = $5;
   $57 = $8;
   $58 = (($56) + ($57)|0);
   $$sink = $55;$$sink2 = $58;
  }
  HEAP8[$$sink2>>0] = $$sink;
  $59 = $8;
  $60 = (($59) + 1)|0;
  $8 = $60;
 }
 $61 = $5;
 $62 = $8;
 $63 = (($61) + ($62)|0);
 HEAP8[$63>>0] = 0;
 $64 = $7;
 $65 = $4;
 $66 = ((($65)) + 8|0);
 $67 = HEAP32[$66>>2]|0;
 $68 = (($67) + ($64))|0;
 HEAP32[$66>>2] = $68;
 $2 = 1;
 $69 = $2;
 STACKTOP = sp;return ($69|0);
}
function _print_string($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2;
 $5 = ((($4)) + 16|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = $3;
 $8 = (_print_string_ptr($6,$7)|0);
 STACKTOP = sp;return ($8|0);
}
function _print_array($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = 0;
 $6 = 0;
 $8 = $3;
 $9 = ((($8)) + 8|0);
 $10 = HEAP32[$9>>2]|0;
 $7 = $10;
 $11 = $4;
 $12 = ($11|0)==(0|0);
 if ($12) {
  $2 = 0;
  $74 = $2;
  STACKTOP = sp;return ($74|0);
 }
 $13 = $4;
 $14 = (_ensure($13,1)|0);
 $5 = $14;
 $15 = $5;
 $16 = ($15|0)==(0|0);
 if ($16) {
  $2 = 0;
  $74 = $2;
  STACKTOP = sp;return ($74|0);
 }
 $17 = $5;
 HEAP8[$17>>0] = 91;
 $18 = $4;
 $19 = ((($18)) + 8|0);
 $20 = HEAP32[$19>>2]|0;
 $21 = (($20) + 1)|0;
 HEAP32[$19>>2] = $21;
 $22 = $4;
 $23 = ((($22)) + 12|0);
 $24 = HEAP32[$23>>2]|0;
 $25 = (($24) + 1)|0;
 HEAP32[$23>>2] = $25;
 while(1) {
  $26 = $7;
  $27 = ($26|0)!=(0|0);
  if (!($27)) {
   label = 16;
   break;
  }
  $28 = $7;
  $29 = $4;
  $30 = (_print_value($28,$29)|0);
  $31 = ($30|0)!=(0);
  if (!($31)) {
   label = 8;
   break;
  }
  $32 = $4;
  _update_offset($32);
  $33 = $7;
  $34 = HEAP32[$33>>2]|0;
  $35 = ($34|0)!=(0|0);
  if ($35) {
   $36 = $4;
   $37 = ((($36)) + 20|0);
   $38 = HEAP32[$37>>2]|0;
   $39 = ($38|0)!=(0);
   $40 = $39 ? 2 : 1;
   $6 = $40;
   $41 = $4;
   $42 = $6;
   $43 = (($42) + 1)|0;
   $44 = (_ensure($41,$43)|0);
   $5 = $44;
   $45 = $5;
   $46 = ($45|0)==(0|0);
   if ($46) {
    label = 11;
    break;
   }
   $47 = $5;
   $48 = ((($47)) + 1|0);
   $5 = $48;
   HEAP8[$47>>0] = 44;
   $49 = $4;
   $50 = ((($49)) + 20|0);
   $51 = HEAP32[$50>>2]|0;
   $52 = ($51|0)!=(0);
   if ($52) {
    $53 = $5;
    $54 = ((($53)) + 1|0);
    $5 = $54;
    HEAP8[$53>>0] = 32;
   }
   $55 = $5;
   HEAP8[$55>>0] = 0;
   $56 = $6;
   $57 = $4;
   $58 = ((($57)) + 8|0);
   $59 = HEAP32[$58>>2]|0;
   $60 = (($59) + ($56))|0;
   HEAP32[$58>>2] = $60;
  }
  $61 = $7;
  $62 = HEAP32[$61>>2]|0;
  $7 = $62;
 }
 if ((label|0) == 8) {
  $2 = 0;
  $74 = $2;
  STACKTOP = sp;return ($74|0);
 }
 else if ((label|0) == 11) {
  $2 = 0;
  $74 = $2;
  STACKTOP = sp;return ($74|0);
 }
 else if ((label|0) == 16) {
  $63 = $4;
  $64 = (_ensure($63,2)|0);
  $5 = $64;
  $65 = $5;
  $66 = ($65|0)==(0|0);
  if ($66) {
   $2 = 0;
   $74 = $2;
   STACKTOP = sp;return ($74|0);
  } else {
   $67 = $5;
   $68 = ((($67)) + 1|0);
   $5 = $68;
   HEAP8[$67>>0] = 93;
   $69 = $5;
   HEAP8[$69>>0] = 0;
   $70 = $4;
   $71 = ((($70)) + 12|0);
   $72 = HEAP32[$71>>2]|0;
   $73 = (($72) + -1)|0;
   HEAP32[$71>>2] = $73;
   $2 = 1;
   $74 = $2;
   STACKTOP = sp;return ($74|0);
  }
 }
 return (0)|0;
}
function _print_object($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
 var $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
 var $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = 0;
 $6 = 0;
 $10 = $3;
 $11 = ((($10)) + 8|0);
 $12 = HEAP32[$11>>2]|0;
 $7 = $12;
 $13 = $4;
 $14 = ($13|0)==(0|0);
 if ($14) {
  $2 = 0;
  $175 = $2;
  STACKTOP = sp;return ($175|0);
 }
 $15 = $4;
 $16 = ((($15)) + 20|0);
 $17 = HEAP32[$16>>2]|0;
 $18 = ($17|0)!=(0);
 $19 = $18 ? 2 : 1;
 $6 = $19;
 $20 = $4;
 $21 = $6;
 $22 = (($21) + 1)|0;
 $23 = (_ensure($20,$22)|0);
 $5 = $23;
 $24 = $5;
 $25 = ($24|0)==(0|0);
 if ($25) {
  $2 = 0;
  $175 = $2;
  STACKTOP = sp;return ($175|0);
 }
 $26 = $5;
 $27 = ((($26)) + 1|0);
 $5 = $27;
 HEAP8[$26>>0] = 123;
 $28 = $4;
 $29 = ((($28)) + 12|0);
 $30 = HEAP32[$29>>2]|0;
 $31 = (($30) + 1)|0;
 HEAP32[$29>>2] = $31;
 $32 = $4;
 $33 = ((($32)) + 20|0);
 $34 = HEAP32[$33>>2]|0;
 $35 = ($34|0)!=(0);
 if ($35) {
  $36 = $5;
  $37 = ((($36)) + 1|0);
  $5 = $37;
  HEAP8[$36>>0] = 10;
 }
 $38 = $6;
 $39 = $4;
 $40 = ((($39)) + 8|0);
 $41 = HEAP32[$40>>2]|0;
 $42 = (($41) + ($38))|0;
 HEAP32[$40>>2] = $42;
 while(1) {
  $43 = $7;
  $44 = ($43|0)!=(0|0);
  $45 = $4;
  if (!($44)) {
   label = 31;
   break;
  }
  $46 = ((($45)) + 20|0);
  $47 = HEAP32[$46>>2]|0;
  $48 = ($47|0)!=(0);
  if ($48) {
   $49 = $4;
   $50 = $4;
   $51 = ((($50)) + 12|0);
   $52 = HEAP32[$51>>2]|0;
   $53 = (_ensure($49,$52)|0);
   $5 = $53;
   $54 = $5;
   $55 = ($54|0)==(0|0);
   if ($55) {
    label = 11;
    break;
   }
   $8 = 0;
   while(1) {
    $56 = $8;
    $57 = $4;
    $58 = ((($57)) + 12|0);
    $59 = HEAP32[$58>>2]|0;
    $60 = ($56>>>0)<($59>>>0);
    if (!($60)) {
     break;
    }
    $61 = $5;
    $62 = ((($61)) + 1|0);
    $5 = $62;
    HEAP8[$61>>0] = 9;
    $63 = $8;
    $64 = (($63) + 1)|0;
    $8 = $64;
   }
   $65 = $4;
   $66 = ((($65)) + 12|0);
   $67 = HEAP32[$66>>2]|0;
   $68 = $4;
   $69 = ((($68)) + 8|0);
   $70 = HEAP32[$69>>2]|0;
   $71 = (($70) + ($67))|0;
   HEAP32[$69>>2] = $71;
  }
  $72 = $7;
  $73 = ((($72)) + 32|0);
  $74 = HEAP32[$73>>2]|0;
  $75 = $4;
  $76 = (_print_string_ptr($74,$75)|0);
  $77 = ($76|0)!=(0);
  if (!($77)) {
   label = 17;
   break;
  }
  $78 = $4;
  _update_offset($78);
  $79 = $4;
  $80 = ((($79)) + 20|0);
  $81 = HEAP32[$80>>2]|0;
  $82 = ($81|0)!=(0);
  $83 = $82 ? 2 : 1;
  $6 = $83;
  $84 = $4;
  $85 = $6;
  $86 = (_ensure($84,$85)|0);
  $5 = $86;
  $87 = $5;
  $88 = ($87|0)==(0|0);
  if ($88) {
   label = 19;
   break;
  }
  $89 = $5;
  $90 = ((($89)) + 1|0);
  $5 = $90;
  HEAP8[$89>>0] = 58;
  $91 = $4;
  $92 = ((($91)) + 20|0);
  $93 = HEAP32[$92>>2]|0;
  $94 = ($93|0)!=(0);
  if ($94) {
   $95 = $5;
   $96 = ((($95)) + 1|0);
   $5 = $96;
   HEAP8[$95>>0] = 9;
  }
  $97 = $6;
  $98 = $4;
  $99 = ((($98)) + 8|0);
  $100 = HEAP32[$99>>2]|0;
  $101 = (($100) + ($97))|0;
  HEAP32[$99>>2] = $101;
  $102 = $7;
  $103 = $4;
  $104 = (_print_value($102,$103)|0);
  $105 = ($104|0)!=(0);
  if (!($105)) {
   label = 23;
   break;
  }
  $106 = $4;
  _update_offset($106);
  $107 = $4;
  $108 = ((($107)) + 20|0);
  $109 = HEAP32[$108>>2]|0;
  $110 = ($109|0)!=(0);
  $111 = $110 ? 1 : 0;
  $112 = $7;
  $113 = HEAP32[$112>>2]|0;
  $114 = ($113|0)!=(0|0);
  $115 = $114 ? 1 : 0;
  $116 = (($111) + ($115))|0;
  $6 = $116;
  $117 = $4;
  $118 = $6;
  $119 = (($118) + 1)|0;
  $120 = (_ensure($117,$119)|0);
  $5 = $120;
  $121 = $5;
  $122 = ($121|0)==(0|0);
  if ($122) {
   label = 25;
   break;
  }
  $123 = $7;
  $124 = HEAP32[$123>>2]|0;
  $125 = ($124|0)!=(0|0);
  if ($125) {
   $126 = $5;
   $127 = ((($126)) + 1|0);
   $5 = $127;
   HEAP8[$126>>0] = 44;
  }
  $128 = $4;
  $129 = ((($128)) + 20|0);
  $130 = HEAP32[$129>>2]|0;
  $131 = ($130|0)!=(0);
  if ($131) {
   $132 = $5;
   $133 = ((($132)) + 1|0);
   $5 = $133;
   HEAP8[$132>>0] = 10;
  }
  $134 = $5;
  HEAP8[$134>>0] = 0;
  $135 = $6;
  $136 = $4;
  $137 = ((($136)) + 8|0);
  $138 = HEAP32[$137>>2]|0;
  $139 = (($138) + ($135))|0;
  HEAP32[$137>>2] = $139;
  $140 = $7;
  $141 = HEAP32[$140>>2]|0;
  $7 = $141;
 }
 if ((label|0) == 11) {
  $2 = 0;
  $175 = $2;
  STACKTOP = sp;return ($175|0);
 }
 else if ((label|0) == 17) {
  $2 = 0;
  $175 = $2;
  STACKTOP = sp;return ($175|0);
 }
 else if ((label|0) == 19) {
  $2 = 0;
  $175 = $2;
  STACKTOP = sp;return ($175|0);
 }
 else if ((label|0) == 23) {
  $2 = 0;
  $175 = $2;
  STACKTOP = sp;return ($175|0);
 }
 else if ((label|0) == 25) {
  $2 = 0;
  $175 = $2;
  STACKTOP = sp;return ($175|0);
 }
 else if ((label|0) == 31) {
  $142 = $4;
  $143 = ((($142)) + 20|0);
  $144 = HEAP32[$143>>2]|0;
  $145 = ($144|0)!=(0);
  if ($145) {
   $146 = $4;
   $147 = ((($146)) + 12|0);
   $148 = HEAP32[$147>>2]|0;
   $149 = (($148) + 1)|0;
   $150 = $149;
  } else {
   $150 = 2;
  }
  $151 = (_ensure($45,$150)|0);
  $5 = $151;
  $152 = $5;
  $153 = ($152|0)==(0|0);
  if ($153) {
   $2 = 0;
   $175 = $2;
   STACKTOP = sp;return ($175|0);
  }
  $154 = $4;
  $155 = ((($154)) + 20|0);
  $156 = HEAP32[$155>>2]|0;
  $157 = ($156|0)!=(0);
  L45: do {
   if ($157) {
    $9 = 0;
    while(1) {
     $158 = $9;
     $159 = $4;
     $160 = ((($159)) + 12|0);
     $161 = HEAP32[$160>>2]|0;
     $162 = (($161) - 1)|0;
     $163 = ($158>>>0)<($162>>>0);
     if (!($163)) {
      break L45;
     }
     $164 = $5;
     $165 = ((($164)) + 1|0);
     $5 = $165;
     HEAP8[$164>>0] = 9;
     $166 = $9;
     $167 = (($166) + 1)|0;
     $9 = $167;
    }
   }
  } while(0);
  $168 = $5;
  $169 = ((($168)) + 1|0);
  $5 = $169;
  HEAP8[$168>>0] = 125;
  $170 = $5;
  HEAP8[$170>>0] = 0;
  $171 = $4;
  $172 = ((($171)) + 12|0);
  $173 = HEAP32[$172>>2]|0;
  $174 = (($173) + -1)|0;
  HEAP32[$172>>2] = $174;
  $2 = 1;
  $175 = $2;
  STACKTOP = sp;return ($175|0);
 }
 return (0)|0;
}
function _print_string_ptr($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer = sp;
 $3 = $0;
 $4 = $1;
 $5 = 0;
 $6 = 0;
 $7 = 0;
 $8 = 0;
 $9 = 0;
 $10 = $4;
 $11 = ($10|0)==(0|0);
 if ($11) {
  $2 = 0;
  $113 = $2;
  STACKTOP = sp;return ($113|0);
 }
 $12 = $3;
 $13 = ($12|0)==(0|0);
 if ($13) {
  $14 = $4;
  $15 = (_ensure($14,3)|0);
  $6 = $15;
  $16 = $6;
  $17 = ($16|0)==(0|0);
  if ($17) {
   $2 = 0;
   $113 = $2;
   STACKTOP = sp;return ($113|0);
  } else {
   $18 = $6;
   (_strcpy($18,832)|0);
   $2 = 1;
   $113 = $2;
   STACKTOP = sp;return ($113|0);
  }
 }
 $19 = $3;
 $5 = $19;
 while(1) {
  $20 = $5;
  $21 = HEAP8[$20>>0]|0;
  $22 = ($21<<24>>24)!=(0);
  $23 = $5;
  if (!($22)) {
   break;
  }
  $24 = HEAP8[$23>>0]|0;
  $25 = $24&255;
  switch ($25|0) {
  case 9: case 13: case 10: case 12: case 8: case 92: case 34:  {
   $26 = $9;
   $27 = (($26) + 1)|0;
   $9 = $27;
   break;
  }
  default: {
   $28 = $5;
   $29 = HEAP8[$28>>0]|0;
   $30 = $29&255;
   $31 = ($30|0)<(32);
   if ($31) {
    $32 = $9;
    $33 = (($32) + 5)|0;
    $9 = $33;
   }
  }
  }
  $34 = $5;
  $35 = ((($34)) + 1|0);
  $5 = $35;
 }
 $36 = $3;
 $37 = $23;
 $38 = $36;
 $39 = (($37) - ($38))|0;
 $40 = $9;
 $41 = (($39) + ($40))|0;
 $8 = $41;
 $42 = $4;
 $43 = $8;
 $44 = (($43) + 3)|0;
 $45 = (_ensure($42,$44)|0);
 $6 = $45;
 $46 = $6;
 $47 = ($46|0)==(0|0);
 if ($47) {
  $2 = 0;
  $113 = $2;
  STACKTOP = sp;return ($113|0);
 }
 $48 = $9;
 $49 = ($48|0)==(0);
 $50 = $6;
 HEAP8[$50>>0] = 34;
 $51 = $6;
 $52 = ((($51)) + 1|0);
 if ($49) {
  $53 = $3;
  $54 = $8;
  _memcpy(($52|0),($53|0),($54|0))|0;
  $55 = $6;
  $56 = $8;
  $57 = (($56) + 1)|0;
  $58 = (($55) + ($57)|0);
  HEAP8[$58>>0] = 34;
  $59 = $6;
  $60 = $8;
  $61 = (($60) + 2)|0;
  $62 = (($59) + ($61)|0);
  HEAP8[$62>>0] = 0;
  $2 = 1;
  $113 = $2;
  STACKTOP = sp;return ($113|0);
 }
 $7 = $52;
 $63 = $3;
 $5 = $63;
 while(1) {
  $64 = $5;
  $65 = HEAP8[$64>>0]|0;
  $66 = $65&255;
  $67 = ($66|0)!=(0);
  if (!($67)) {
   break;
  }
  $68 = $5;
  $69 = HEAP8[$68>>0]|0;
  $70 = $69&255;
  $71 = ($70|0)>(31);
  if ($71) {
   $72 = $5;
   $73 = HEAP8[$72>>0]|0;
   $74 = $73&255;
   $75 = ($74|0)!=(34);
   if ($75) {
    $76 = $5;
    $77 = HEAP8[$76>>0]|0;
    $78 = $77&255;
    $79 = ($78|0)!=(92);
    if ($79) {
     $80 = $5;
     $81 = HEAP8[$80>>0]|0;
     $82 = $7;
     HEAP8[$82>>0] = $81;
    } else {
     label = 24;
    }
   } else {
    label = 24;
   }
  } else {
   label = 24;
  }
  L37: do {
   if ((label|0) == 24) {
    label = 0;
    $83 = $7;
    $84 = ((($83)) + 1|0);
    $7 = $84;
    HEAP8[$83>>0] = 92;
    $85 = $5;
    $86 = HEAP8[$85>>0]|0;
    $87 = $86&255;
    switch ($87|0) {
    case 92:  {
     $88 = $7;
     HEAP8[$88>>0] = 92;
     break L37;
     break;
    }
    case 34:  {
     $89 = $7;
     HEAP8[$89>>0] = 34;
     break L37;
     break;
    }
    case 8:  {
     $90 = $7;
     HEAP8[$90>>0] = 98;
     break L37;
     break;
    }
    case 12:  {
     $91 = $7;
     HEAP8[$91>>0] = 102;
     break L37;
     break;
    }
    case 10:  {
     $92 = $7;
     HEAP8[$92>>0] = 110;
     break L37;
     break;
    }
    case 13:  {
     $93 = $7;
     HEAP8[$93>>0] = 114;
     break L37;
     break;
    }
    case 9:  {
     $94 = $7;
     HEAP8[$94>>0] = 116;
     break L37;
     break;
    }
    default: {
     $95 = $7;
     $96 = $5;
     $97 = HEAP8[$96>>0]|0;
     $98 = $97&255;
     HEAP32[$vararg_buffer>>2] = $98;
     (_sprintf($95,835,$vararg_buffer)|0);
     $99 = $7;
     $100 = ((($99)) + 4|0);
     $7 = $100;
     break L37;
    }
    }
   }
  } while(0);
  $101 = $5;
  $102 = ((($101)) + 1|0);
  $5 = $102;
  $103 = $7;
  $104 = ((($103)) + 1|0);
  $7 = $104;
 }
 $105 = $6;
 $106 = $8;
 $107 = (($106) + 1)|0;
 $108 = (($105) + ($107)|0);
 HEAP8[$108>>0] = 34;
 $109 = $6;
 $110 = $8;
 $111 = (($110) + 2)|0;
 $112 = (($109) + ($111)|0);
 HEAP8[$112>>0] = 0;
 $2 = 1;
 $113 = $2;
 STACKTOP = sp;return ($113|0);
}
function _cJSON_AddItemToArray($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = 0;
 $5 = $3;
 $6 = ($5|0)==(0|0);
 $7 = $2;
 $8 = ($7|0)==(0|0);
 $or$cond = $6 | $8;
 if ($or$cond) {
  STACKTOP = sp;return;
 }
 $9 = $2;
 $10 = ((($9)) + 8|0);
 $11 = HEAP32[$10>>2]|0;
 $4 = $11;
 $12 = $4;
 $13 = ($12|0)==(0|0);
 if ($13) {
  $14 = $3;
  $15 = $2;
  $16 = ((($15)) + 8|0);
  HEAP32[$16>>2] = $14;
  STACKTOP = sp;return;
 }
 while(1) {
  $17 = $4;
  $18 = HEAP32[$17>>2]|0;
  $19 = ($18|0)!=(0|0);
  $20 = $4;
  if (!($19)) {
   break;
  }
  $21 = HEAP32[$20>>2]|0;
  $4 = $21;
 }
 $22 = $3;
 _suffix_object($20,$22);
 STACKTOP = sp;return;
}
function _suffix_object($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $3;
 $5 = $2;
 HEAP32[$5>>2] = $4;
 $6 = $2;
 $7 = $3;
 $8 = ((($7)) + 4|0);
 HEAP32[$8>>2] = $6;
 STACKTOP = sp;return;
}
function _cJSON_AddItemToObject($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $6 = $3;
 $7 = $4;
 $8 = (_cJSON_strdup($7,8)|0);
 $9 = $5;
 _cJSON_AddItemToObjectCS($6,$8,$9);
 $10 = $5;
 $11 = ((($10)) + 12|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = $12 & -513;
 HEAP32[$11>>2] = $13;
 STACKTOP = sp;return;
}
function _cJSON_strdup($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $3 = $0;
 $4 = $1;
 $5 = 0;
 $6 = 0;
 $7 = $3;
 $8 = ($7|0)==(0|0);
 do {
  if ($8) {
   $2 = 0;
  } else {
   $9 = $3;
   $10 = (_strlen($9)|0);
   $11 = (($10) + 1)|0;
   $5 = $11;
   $12 = $4;
   $13 = HEAP32[$12>>2]|0;
   $14 = $5;
   $15 = (FUNCTION_TABLE_ii[$13 & 7]($14)|0);
   $6 = $15;
   $16 = ($15|0)!=(0|0);
   if ($16) {
    $17 = $6;
    $18 = $3;
    $19 = $5;
    _memcpy(($17|0),($18|0),($19|0))|0;
    $20 = $6;
    $2 = $20;
    break;
   } else {
    $2 = 0;
    break;
   }
  }
 } while(0);
 $21 = $2;
 STACKTOP = sp;return ($21|0);
}
function _cJSON_AddItemToObjectCS($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $6 = $5;
 $7 = ($6|0)!=(0|0);
 if (!($7)) {
  STACKTOP = sp;return;
 }
 $8 = $5;
 $9 = ((($8)) + 12|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = $10 & 512;
 $12 = ($11|0)!=(0);
 if (!($12)) {
  $13 = $5;
  $14 = ((($13)) + 32|0);
  $15 = HEAP32[$14>>2]|0;
  $16 = ($15|0)!=(0|0);
  if ($16) {
   $17 = HEAP32[(12)>>2]|0;
   $18 = $5;
   $19 = ((($18)) + 32|0);
   $20 = HEAP32[$19>>2]|0;
   FUNCTION_TABLE_vi[$17 & 3]($20);
  }
 }
 $21 = $4;
 $22 = $5;
 $23 = ((($22)) + 32|0);
 HEAP32[$23>>2] = $21;
 $24 = $5;
 $25 = ((($24)) + 12|0);
 $26 = HEAP32[$25>>2]|0;
 $27 = $26 | 512;
 HEAP32[$25>>2] = $27;
 $28 = $3;
 $29 = $5;
 _cJSON_AddItemToArray($28,$29);
 STACKTOP = sp;return;
}
function _cJSON_CreateNumber($0) {
 $0 = +$0;
 var $$sink$sink = 0, $$sink2$sink = 0, $1 = 0.0, $10 = 0, $11 = 0.0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0.0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0.0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $3 = (_cJSON_New_Item(8)|0);
 $2 = $3;
 $4 = $2;
 $5 = ($4|0)!=(0|0);
 if (!($5)) {
  $21 = $2;
  STACKTOP = sp;return ($21|0);
 }
 $6 = $2;
 $7 = ((($6)) + 12|0);
 HEAP32[$7>>2] = 8;
 $8 = $1;
 $9 = $2;
 $10 = ((($9)) + 24|0);
 HEAPF64[$10>>3] = $8;
 $11 = $1;
 $12 = $11 >= 2147483647.0;
 do {
  if ($12) {
   $13 = $2;
   $$sink$sink = 2147483647;$$sink2$sink = $13;
  } else {
   $14 = $1;
   $15 = $14 <= -2147483648.0;
   if ($15) {
    $16 = $2;
    $$sink$sink = -2147483648;$$sink2$sink = $16;
    break;
   } else {
    $17 = $1;
    $18 = (~~(($17)));
    $19 = $2;
    $$sink$sink = $18;$$sink2$sink = $19;
    break;
   }
  }
 } while(0);
 $20 = ((($$sink2$sink)) + 20|0);
 HEAP32[$20>>2] = $$sink$sink;
 $21 = $2;
 STACKTOP = sp;return ($21|0);
}
function _cJSON_CreateArray() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = (_cJSON_New_Item(8)|0);
 $0 = $1;
 $2 = $0;
 $3 = ($2|0)!=(0|0);
 if ($3) {
  $4 = $0;
  $5 = ((($4)) + 12|0);
  HEAP32[$5>>2] = 32;
 }
 $6 = $0;
 STACKTOP = sp;return ($6|0);
}
function _cJSON_CreateObject() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = (_cJSON_New_Item(8)|0);
 $0 = $1;
 $2 = $0;
 $3 = ($2|0)!=(0|0);
 if ($3) {
  $4 = $0;
  $5 = ((($4)) + 12|0);
  HEAP32[$5>>2] = 64;
 }
 $6 = $0;
 STACKTOP = sp;return ($6|0);
}
function _loadApp($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $6 = $2;
 ;HEAP32[$6>>2]=0|0;HEAP32[$6+4>>2]=0|0;HEAP32[$6+8>>2]=0|0;HEAP32[$6+12>>2]=0|0;HEAP32[$6+16>>2]=0|0;
 $7 = $3;
 $8 = ($7*12)|0;
 $9 = (_malloc($8)|0);
 $10 = $2;
 $11 = ((($10)) + 12|0);
 HEAP32[$11>>2] = $9;
 $12 = $3;
 $13 = $2;
 $14 = ((($13)) + 16|0);
 HEAP32[$14>>2] = $12;
 $4 = 0;
 while(1) {
  $15 = $4;
  $16 = $3;
  $17 = ($15|0)<($16|0);
  if (!($17)) {
   break;
  }
  $18 = $2;
  $19 = ((($18)) + 12|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = $4;
  $22 = (($20) + (($21*12)|0)|0);
  $5 = $22;
  $23 = $5;
  ;HEAP32[$23>>2]=0|0;HEAP32[$23+4>>2]=0|0;HEAP32[$23+8>>2]=0|0;
  $24 = $4;
  $25 = $5;
  HEAP32[$25>>2] = $24;
  $26 = $4;
  $27 = (($26) + 1)|0;
  $4 = $27;
 }
 STACKTOP = sp;return;
}
function _unloadApp($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = ((($2)) + 12|0);
 $4 = HEAP32[$3>>2]|0;
 _free($4);
 STACKTOP = sp;return;
}
function _updateApp($0,$1) {
 $0 = $0|0;
 $1 = +$1;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = 0;
 while(1) {
  $6 = $4;
  $7 = $2;
  $8 = ((($7)) + 16|0);
  $9 = HEAP32[$8>>2]|0;
  $10 = ($6|0)<($9|0);
  if (!($10)) {
   break;
  }
  $11 = $2;
  $12 = ((($11)) + 12|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = $4;
  $15 = (($13) + (($14*12)|0)|0);
  $5 = $15;
  $16 = $5;
  $17 = ((($16)) + 8|0);
  $18 = HEAP32[$17>>2]|0;
  $19 = (($18) + 1)|0;
  HEAP32[$17>>2] = $19;
  $20 = $4;
  $21 = (($20) + 1)|0;
  $4 = $21;
 }
 STACKTOP = sp;return;
}
function _onInit() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 _loadApp(3584,5);
 return;
}
function _onUpdate($0) {
 $0 = +$0;
 var $1 = 0.0, $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 _updateApp(3584,$2);
 STACKTOP = sp;return;
}
function _onDestroy() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 _unloadApp(3584);
 return;
}
function _gameData() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0.0, $13 = 0, $14 = 0, $15 = 0, $16 = 0.0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0.0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0.0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0.0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0.0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $8 = HEAP32[(3600)>>2]|0;
 $0 = $8;
 $9 = (_cJSON_CreateArray()|0);
 $1 = $9;
 $10 = $1;
 $11 = HEAP32[896]|0;
 $12 = (+($11|0));
 $13 = (_cJSON_CreateNumber($12)|0);
 _cJSON_AddItemToObject($10,859,$13);
 $14 = $1;
 $15 = HEAP32[(3588)>>2]|0;
 $16 = (+($15|0));
 $17 = (_cJSON_CreateNumber($16)|0);
 _cJSON_AddItemToObject($14,862,$17);
 $18 = $1;
 $19 = HEAP32[(3592)>>2]|0;
 $20 = (+($19|0));
 $21 = (_cJSON_CreateNumber($20)|0);
 _cJSON_AddItemToObject($18,864,$21);
 $22 = (_cJSON_CreateArray()|0);
 $2 = $22;
 $3 = 0;
 while(1) {
  $23 = $3;
  $24 = $0;
  $25 = ($23|0)<($24|0);
  $26 = (_cJSON_CreateObject()|0);
  if (!($25)) {
   break;
  }
  $4 = $26;
  $27 = HEAP32[(3596)>>2]|0;
  $28 = $3;
  $29 = (($27) + (($28*12)|0)|0);
  $5 = $29;
  $30 = $4;
  $31 = $5;
  $32 = HEAP32[$31>>2]|0;
  $33 = (+($32|0));
  $34 = (_cJSON_CreateNumber($33)|0);
  _cJSON_AddItemToObject($30,859,$34);
  $35 = $4;
  $36 = $5;
  $37 = ((($36)) + 4|0);
  $38 = HEAP32[$37>>2]|0;
  $39 = (+($38|0));
  $40 = (_cJSON_CreateNumber($39)|0);
  _cJSON_AddItemToObject($35,862,$40);
  $41 = $4;
  $42 = $5;
  $43 = ((($42)) + 8|0);
  $44 = HEAP32[$43>>2]|0;
  $45 = (+($44|0));
  $46 = (_cJSON_CreateNumber($45)|0);
  _cJSON_AddItemToObject($41,864,$46);
  $47 = $2;
  $48 = $4;
  _cJSON_AddItemToArray($47,$48);
  $49 = $3;
  $50 = (($49) + 1)|0;
  $3 = $50;
 }
 $6 = $26;
 $51 = $6;
 $52 = $1;
 _cJSON_AddItemToObject($51,866,$52);
 $53 = $6;
 $54 = $2;
 _cJSON_AddItemToObject($53,873,$54);
 $55 = $6;
 $56 = (_cJSON_Print($55)|0);
 $7 = $56;
 $57 = $6;
 _cJSON_Delete($57);
 $58 = $7;
 STACKTOP = sp;return ($58|0);
}
function _emscripten_get_global_libc() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (3604|0);
}
function ___stdio_close($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 $1 = ((($0)) + 60|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = (_dummy_570($2)|0);
 HEAP32[$vararg_buffer>>2] = $3;
 $4 = (___syscall6(6,($vararg_buffer|0))|0);
 $5 = (___syscall_ret($4)|0);
 STACKTOP = sp;return ($5|0);
}
function ___stdio_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$04756 = 0, $$04855 = 0, $$04954 = 0, $$051 = 0, $$1 = 0, $$150 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0;
 var $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $3 = sp + 32|0;
 $4 = ((($0)) + 28|0);
 $5 = HEAP32[$4>>2]|0;
 HEAP32[$3>>2] = $5;
 $6 = ((($3)) + 4|0);
 $7 = ((($0)) + 20|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = (($8) - ($5))|0;
 HEAP32[$6>>2] = $9;
 $10 = ((($3)) + 8|0);
 HEAP32[$10>>2] = $1;
 $11 = ((($3)) + 12|0);
 HEAP32[$11>>2] = $2;
 $12 = (($9) + ($2))|0;
 $13 = ((($0)) + 60|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = $3;
 HEAP32[$vararg_buffer>>2] = $14;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $15;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = 2;
 $16 = (___syscall146(146,($vararg_buffer|0))|0);
 $17 = (___syscall_ret($16)|0);
 $18 = ($12|0)==($17|0);
 L1: do {
  if ($18) {
   label = 3;
  } else {
   $$04756 = 2;$$04855 = $12;$$04954 = $3;$26 = $17;
   while(1) {
    $25 = ($26|0)<(0);
    if ($25) {
     break;
    }
    $34 = (($$04855) - ($26))|0;
    $35 = ((($$04954)) + 4|0);
    $36 = HEAP32[$35>>2]|0;
    $37 = ($26>>>0)>($36>>>0);
    $38 = ((($$04954)) + 8|0);
    $$150 = $37 ? $38 : $$04954;
    $39 = $37 << 31 >> 31;
    $$1 = (($39) + ($$04756))|0;
    $40 = $37 ? $36 : 0;
    $$0 = (($26) - ($40))|0;
    $41 = HEAP32[$$150>>2]|0;
    $42 = (($41) + ($$0)|0);
    HEAP32[$$150>>2] = $42;
    $43 = ((($$150)) + 4|0);
    $44 = HEAP32[$43>>2]|0;
    $45 = (($44) - ($$0))|0;
    HEAP32[$43>>2] = $45;
    $46 = HEAP32[$13>>2]|0;
    $47 = $$150;
    HEAP32[$vararg_buffer3>>2] = $46;
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    HEAP32[$vararg_ptr6>>2] = $47;
    $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
    HEAP32[$vararg_ptr7>>2] = $$1;
    $48 = (___syscall146(146,($vararg_buffer3|0))|0);
    $49 = (___syscall_ret($48)|0);
    $50 = ($34|0)==($49|0);
    if ($50) {
     label = 3;
     break L1;
    } else {
     $$04756 = $$1;$$04855 = $34;$$04954 = $$150;$26 = $49;
    }
   }
   $27 = ((($0)) + 16|0);
   HEAP32[$27>>2] = 0;
   HEAP32[$4>>2] = 0;
   HEAP32[$7>>2] = 0;
   $28 = HEAP32[$0>>2]|0;
   $29 = $28 | 32;
   HEAP32[$0>>2] = $29;
   $30 = ($$04756|0)==(2);
   if ($30) {
    $$051 = 0;
   } else {
    $31 = ((($$04954)) + 4|0);
    $32 = HEAP32[$31>>2]|0;
    $33 = (($2) - ($32))|0;
    $$051 = $33;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $19 = ((($0)) + 44|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = ((($0)) + 48|0);
  $22 = HEAP32[$21>>2]|0;
  $23 = (($20) + ($22)|0);
  $24 = ((($0)) + 16|0);
  HEAP32[$24>>2] = $23;
  HEAP32[$4>>2] = $20;
  HEAP32[$7>>2] = $20;
  $$051 = $2;
 }
 STACKTOP = sp;return ($$051|0);
}
function ___stdio_seek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre = 0, $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $3 = sp + 20|0;
 $4 = ((($0)) + 60|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = $3;
 HEAP32[$vararg_buffer>>2] = $5;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = 0;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $1;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $6;
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 HEAP32[$vararg_ptr4>>2] = $2;
 $7 = (___syscall140(140,($vararg_buffer|0))|0);
 $8 = (___syscall_ret($7)|0);
 $9 = ($8|0)<(0);
 if ($9) {
  HEAP32[$3>>2] = -1;
  $10 = -1;
 } else {
  $$pre = HEAP32[$3>>2]|0;
  $10 = $$pre;
 }
 STACKTOP = sp;return ($10|0);
}
function ___syscall_ret($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0>>>0)>(4294963200);
 if ($1) {
  $2 = (0 - ($0))|0;
  $3 = (___errno_location()|0);
  HEAP32[$3>>2] = $2;
  $$0 = -1;
 } else {
  $$0 = $0;
 }
 return ($$0|0);
}
function ___errno_location() {
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (___pthread_self_103()|0);
 $1 = ((($0)) + 64|0);
 return ($1|0);
}
function ___pthread_self_103() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 return ($0|0);
}
function _pthread_self() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (224|0);
}
function _dummy_570($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($0|0);
}
function ___stdout_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $3 = sp + 16|0;
 $4 = ((($0)) + 36|0);
 HEAP32[$4>>2] = 8;
 $5 = HEAP32[$0>>2]|0;
 $6 = $5 & 64;
 $7 = ($6|0)==(0);
 if ($7) {
  $8 = ((($0)) + 60|0);
  $9 = HEAP32[$8>>2]|0;
  $10 = $3;
  HEAP32[$vararg_buffer>>2] = $9;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = 21523;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = $10;
  $11 = (___syscall54(54,($vararg_buffer|0))|0);
  $12 = ($11|0)==(0);
  if (!($12)) {
   $13 = ((($0)) + 75|0);
   HEAP8[$13>>0] = -1;
  }
 }
 $14 = (___stdio_write($0,$1,$2)|0);
 STACKTOP = sp;return ($14|0);
}
function ___shlim($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$sink = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 104|0);
 HEAP32[$2>>2] = $1;
 $3 = ((($0)) + 8|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ((($0)) + 4|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = $4;
 $8 = $6;
 $9 = (($7) - ($8))|0;
 $10 = ((($0)) + 108|0);
 HEAP32[$10>>2] = $9;
 $11 = ($1|0)!=(0);
 $12 = ($9|0)>($1|0);
 $or$cond = $11 & $12;
 $13 = (($6) + ($1)|0);
 $$sink = $or$cond ? $13 : $4;
 $14 = ((($0)) + 100|0);
 HEAP32[$14>>2] = $$sink;
 return;
}
function ___intscan($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0154222 = 0, $$0157 = 0, $$0157$ = 0, $$0159 = 0, $$1155192 = 0, $$1158 = 0, $$1160 = 0, $$1160169 = 0, $$1165 = 0, $$1165167 = 0, $$1165168 = 0, $$166 = 0, $$2156210 = 0, $$2161$be = 0, $$2161$lcssa = 0, $$3162$be = 0, $$3162215 = 0, $$4163$be = 0, $$4163$lcssa = 0, $$5$be = 0;
 var $$6$be = 0, $$6$lcssa = 0, $$7$be = 0, $$7198 = 0, $$8 = 0, $$9$be = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0;
 var $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0;
 var $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0;
 var $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0;
 var $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0;
 var $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0;
 var $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0;
 var $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0;
 var $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0;
 var $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0;
 var $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0;
 var $294 = 0, $295 = 0, $296 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond12 = 0;
 var $or$cond187 = 0, $or$cond5 = 0, $or$cond7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ($1>>>0)>(36);
 L1: do {
  if ($5) {
   $8 = (___errno_location()|0);
   HEAP32[$8>>2] = 22;
   $289 = 0;$290 = 0;
  } else {
   $6 = ((($0)) + 4|0);
   $7 = ((($0)) + 100|0);
   while(1) {
    $9 = HEAP32[$6>>2]|0;
    $10 = HEAP32[$7>>2]|0;
    $11 = ($9>>>0)<($10>>>0);
    if ($11) {
     $12 = ((($9)) + 1|0);
     HEAP32[$6>>2] = $12;
     $13 = HEAP8[$9>>0]|0;
     $14 = $13&255;
     $16 = $14;
    } else {
     $15 = (___shgetc($0)|0);
     $16 = $15;
    }
    $17 = (_isspace($16)|0);
    $18 = ($17|0)==(0);
    if ($18) {
     break;
    }
   }
   L11: do {
    switch ($16|0) {
    case 43: case 45:  {
     $19 = ($16|0)==(45);
     $20 = $19 << 31 >> 31;
     $21 = HEAP32[$6>>2]|0;
     $22 = HEAP32[$7>>2]|0;
     $23 = ($21>>>0)<($22>>>0);
     if ($23) {
      $24 = ((($21)) + 1|0);
      HEAP32[$6>>2] = $24;
      $25 = HEAP8[$21>>0]|0;
      $26 = $25&255;
      $$0157 = $20;$$0159 = $26;
      break L11;
     } else {
      $27 = (___shgetc($0)|0);
      $$0157 = $20;$$0159 = $27;
      break L11;
     }
     break;
    }
    default: {
     $$0157 = 0;$$0159 = $16;
    }
    }
   } while(0);
   $28 = ($1|0)==(0);
   $29 = $1 | 16;
   $30 = ($29|0)==(16);
   $31 = ($$0159|0)==(48);
   $or$cond5 = $30 & $31;
   do {
    if ($or$cond5) {
     $32 = HEAP32[$6>>2]|0;
     $33 = HEAP32[$7>>2]|0;
     $34 = ($32>>>0)<($33>>>0);
     if ($34) {
      $35 = ((($32)) + 1|0);
      HEAP32[$6>>2] = $35;
      $36 = HEAP8[$32>>0]|0;
      $37 = $36&255;
      $40 = $37;
     } else {
      $38 = (___shgetc($0)|0);
      $40 = $38;
     }
     $39 = $40 | 32;
     $41 = ($39|0)==(120);
     if (!($41)) {
      if ($28) {
       $$1160169 = $40;$$1165168 = 8;
       label = 46;
       break;
      } else {
       $$1160 = $40;$$1165 = $1;
       label = 32;
       break;
      }
     }
     $42 = HEAP32[$6>>2]|0;
     $43 = HEAP32[$7>>2]|0;
     $44 = ($42>>>0)<($43>>>0);
     if ($44) {
      $45 = ((($42)) + 1|0);
      HEAP32[$6>>2] = $45;
      $46 = HEAP8[$42>>0]|0;
      $47 = $46&255;
      $50 = $47;
     } else {
      $48 = (___shgetc($0)|0);
      $50 = $48;
     }
     $49 = ((882) + ($50)|0);
     $51 = HEAP8[$49>>0]|0;
     $52 = ($51&255)>(15);
     if ($52) {
      $53 = HEAP32[$7>>2]|0;
      $54 = ($53|0)!=(0|0);
      if ($54) {
       $55 = HEAP32[$6>>2]|0;
       $56 = ((($55)) + -1|0);
       HEAP32[$6>>2] = $56;
      }
      $57 = ($2|0)==(0);
      if ($57) {
       ___shlim($0,0);
       $289 = 0;$290 = 0;
       break L1;
      }
      if (!($54)) {
       $289 = 0;$290 = 0;
       break L1;
      }
      $58 = HEAP32[$6>>2]|0;
      $59 = ((($58)) + -1|0);
      HEAP32[$6>>2] = $59;
      $289 = 0;$290 = 0;
      break L1;
     } else {
      $$1160169 = $50;$$1165168 = 16;
      label = 46;
     }
    } else {
     $$166 = $28 ? 10 : $1;
     $60 = ((882) + ($$0159)|0);
     $61 = HEAP8[$60>>0]|0;
     $62 = $61&255;
     $63 = ($62>>>0)<($$166>>>0);
     if ($63) {
      $$1160 = $$0159;$$1165 = $$166;
      label = 32;
     } else {
      $64 = HEAP32[$7>>2]|0;
      $65 = ($64|0)==(0|0);
      if (!($65)) {
       $66 = HEAP32[$6>>2]|0;
       $67 = ((($66)) + -1|0);
       HEAP32[$6>>2] = $67;
      }
      ___shlim($0,0);
      $68 = (___errno_location()|0);
      HEAP32[$68>>2] = 22;
      $289 = 0;$290 = 0;
      break L1;
     }
    }
   } while(0);
   L43: do {
    if ((label|0) == 32) {
     $69 = ($$1165|0)==(10);
     if ($69) {
      $70 = (($$1160) + -48)|0;
      $71 = ($70>>>0)<(10);
      if ($71) {
       $$0154222 = 0;$74 = $70;
       while(1) {
        $72 = ($$0154222*10)|0;
        $73 = (($72) + ($74))|0;
        $75 = HEAP32[$6>>2]|0;
        $76 = HEAP32[$7>>2]|0;
        $77 = ($75>>>0)<($76>>>0);
        if ($77) {
         $78 = ((($75)) + 1|0);
         HEAP32[$6>>2] = $78;
         $79 = HEAP8[$75>>0]|0;
         $80 = $79&255;
         $$2161$be = $80;
        } else {
         $81 = (___shgetc($0)|0);
         $$2161$be = $81;
        }
        $82 = (($$2161$be) + -48)|0;
        $83 = ($82>>>0)<(10);
        $84 = ($73>>>0)<(429496729);
        $85 = $83 & $84;
        if ($85) {
         $$0154222 = $73;$74 = $82;
        } else {
         break;
        }
       }
       $$2161$lcssa = $$2161$be;$291 = $73;$292 = 0;
      } else {
       $$2161$lcssa = $$1160;$291 = 0;$292 = 0;
      }
      $86 = (($$2161$lcssa) + -48)|0;
      $87 = ($86>>>0)<(10);
      if ($87) {
       $$3162215 = $$2161$lcssa;$88 = $291;$89 = $292;$93 = $86;
       while(1) {
        $90 = (___muldi3(($88|0),($89|0),10,0)|0);
        $91 = tempRet0;
        $92 = ($93|0)<(0);
        $94 = $92 << 31 >> 31;
        $95 = $93 ^ -1;
        $96 = $94 ^ -1;
        $97 = ($91>>>0)>($96>>>0);
        $98 = ($90>>>0)>($95>>>0);
        $99 = ($91|0)==($96|0);
        $100 = $99 & $98;
        $101 = $97 | $100;
        if ($101) {
         $$1165167 = 10;$$8 = $$3162215;$293 = $88;$294 = $89;
         label = 72;
         break L43;
        }
        $102 = (_i64Add(($90|0),($91|0),($93|0),($94|0))|0);
        $103 = tempRet0;
        $104 = HEAP32[$6>>2]|0;
        $105 = HEAP32[$7>>2]|0;
        $106 = ($104>>>0)<($105>>>0);
        if ($106) {
         $107 = ((($104)) + 1|0);
         HEAP32[$6>>2] = $107;
         $108 = HEAP8[$104>>0]|0;
         $109 = $108&255;
         $$3162$be = $109;
        } else {
         $110 = (___shgetc($0)|0);
         $$3162$be = $110;
        }
        $111 = (($$3162$be) + -48)|0;
        $112 = ($111>>>0)<(10);
        $113 = ($103>>>0)<(429496729);
        $114 = ($102>>>0)<(2576980378);
        $115 = ($103|0)==(429496729);
        $116 = $115 & $114;
        $117 = $113 | $116;
        $or$cond7 = $112 & $117;
        if ($or$cond7) {
         $$3162215 = $$3162$be;$88 = $102;$89 = $103;$93 = $111;
        } else {
         break;
        }
       }
       $118 = ($111>>>0)>(9);
       if ($118) {
        $$1158 = $$0157;$263 = $103;$265 = $102;
       } else {
        $$1165167 = 10;$$8 = $$3162$be;$293 = $102;$294 = $103;
        label = 72;
       }
      } else {
       $$1158 = $$0157;$263 = $292;$265 = $291;
      }
     } else {
      $$1160169 = $$1160;$$1165168 = $$1165;
      label = 46;
     }
    }
   } while(0);
   L63: do {
    if ((label|0) == 46) {
     $119 = (($$1165168) + -1)|0;
     $120 = $119 & $$1165168;
     $121 = ($120|0)==(0);
     if ($121) {
      $126 = ($$1165168*23)|0;
      $127 = $126 >>> 5;
      $128 = $127 & 7;
      $129 = (1138 + ($128)|0);
      $130 = HEAP8[$129>>0]|0;
      $131 = $130 << 24 >> 24;
      $132 = ((882) + ($$1160169)|0);
      $133 = HEAP8[$132>>0]|0;
      $134 = $133&255;
      $135 = ($134>>>0)<($$1165168>>>0);
      if ($135) {
       $$1155192 = 0;$138 = $134;
       while(1) {
        $136 = $$1155192 << $131;
        $137 = $138 | $136;
        $139 = HEAP32[$6>>2]|0;
        $140 = HEAP32[$7>>2]|0;
        $141 = ($139>>>0)<($140>>>0);
        if ($141) {
         $142 = ((($139)) + 1|0);
         HEAP32[$6>>2] = $142;
         $143 = HEAP8[$139>>0]|0;
         $144 = $143&255;
         $$4163$be = $144;
        } else {
         $145 = (___shgetc($0)|0);
         $$4163$be = $145;
        }
        $146 = ((882) + ($$4163$be)|0);
        $147 = HEAP8[$146>>0]|0;
        $148 = $147&255;
        $149 = ($148>>>0)<($$1165168>>>0);
        $150 = ($137>>>0)<(134217728);
        $151 = $150 & $149;
        if ($151) {
         $$1155192 = $137;$138 = $148;
        } else {
         break;
        }
       }
       $$4163$lcssa = $$4163$be;$155 = $147;$158 = 0;$160 = $137;
      } else {
       $$4163$lcssa = $$1160169;$155 = $133;$158 = 0;$160 = 0;
      }
      $152 = (_bitshift64Lshr(-1,-1,($131|0))|0);
      $153 = tempRet0;
      $154 = $155&255;
      $156 = ($154>>>0)>=($$1165168>>>0);
      $157 = ($158>>>0)>($153>>>0);
      $159 = ($160>>>0)>($152>>>0);
      $161 = ($158|0)==($153|0);
      $162 = $161 & $159;
      $163 = $157 | $162;
      $or$cond187 = $156 | $163;
      if ($or$cond187) {
       $$1165167 = $$1165168;$$8 = $$4163$lcssa;$293 = $160;$294 = $158;
       label = 72;
       break;
      } else {
       $164 = $160;$165 = $158;$169 = $155;
      }
      while(1) {
       $166 = (_bitshift64Shl(($164|0),($165|0),($131|0))|0);
       $167 = tempRet0;
       $168 = $169&255;
       $170 = $168 | $166;
       $171 = HEAP32[$6>>2]|0;
       $172 = HEAP32[$7>>2]|0;
       $173 = ($171>>>0)<($172>>>0);
       if ($173) {
        $174 = ((($171)) + 1|0);
        HEAP32[$6>>2] = $174;
        $175 = HEAP8[$171>>0]|0;
        $176 = $175&255;
        $$5$be = $176;
       } else {
        $177 = (___shgetc($0)|0);
        $$5$be = $177;
       }
       $178 = ((882) + ($$5$be)|0);
       $179 = HEAP8[$178>>0]|0;
       $180 = $179&255;
       $181 = ($180>>>0)>=($$1165168>>>0);
       $182 = ($167>>>0)>($153>>>0);
       $183 = ($170>>>0)>($152>>>0);
       $184 = ($167|0)==($153|0);
       $185 = $184 & $183;
       $186 = $182 | $185;
       $or$cond = $181 | $186;
       if ($or$cond) {
        $$1165167 = $$1165168;$$8 = $$5$be;$293 = $170;$294 = $167;
        label = 72;
        break L63;
       } else {
        $164 = $170;$165 = $167;$169 = $179;
       }
      }
     }
     $122 = ((882) + ($$1160169)|0);
     $123 = HEAP8[$122>>0]|0;
     $124 = $123&255;
     $125 = ($124>>>0)<($$1165168>>>0);
     if ($125) {
      $$2156210 = 0;$189 = $124;
      while(1) {
       $187 = Math_imul($$2156210, $$1165168)|0;
       $188 = (($189) + ($187))|0;
       $190 = HEAP32[$6>>2]|0;
       $191 = HEAP32[$7>>2]|0;
       $192 = ($190>>>0)<($191>>>0);
       if ($192) {
        $193 = ((($190)) + 1|0);
        HEAP32[$6>>2] = $193;
        $194 = HEAP8[$190>>0]|0;
        $195 = $194&255;
        $$6$be = $195;
       } else {
        $196 = (___shgetc($0)|0);
        $$6$be = $196;
       }
       $197 = ((882) + ($$6$be)|0);
       $198 = HEAP8[$197>>0]|0;
       $199 = $198&255;
       $200 = ($199>>>0)<($$1165168>>>0);
       $201 = ($188>>>0)<(119304647);
       $202 = $201 & $200;
       if ($202) {
        $$2156210 = $188;$189 = $199;
       } else {
        break;
       }
      }
      $$6$lcssa = $$6$be;$204 = $198;$295 = $188;$296 = 0;
     } else {
      $$6$lcssa = $$1160169;$204 = $123;$295 = 0;$296 = 0;
     }
     $203 = $204&255;
     $205 = ($203>>>0)<($$1165168>>>0);
     if ($205) {
      $206 = (___udivdi3(-1,-1,($$1165168|0),0)|0);
      $207 = tempRet0;
      $$7198 = $$6$lcssa;$209 = $296;$211 = $295;$218 = $204;
      while(1) {
       $208 = ($209>>>0)>($207>>>0);
       $210 = ($211>>>0)>($206>>>0);
       $212 = ($209|0)==($207|0);
       $213 = $212 & $210;
       $214 = $208 | $213;
       if ($214) {
        $$1165167 = $$1165168;$$8 = $$7198;$293 = $211;$294 = $209;
        label = 72;
        break L63;
       }
       $215 = (___muldi3(($211|0),($209|0),($$1165168|0),0)|0);
       $216 = tempRet0;
       $217 = $218&255;
       $219 = $217 ^ -1;
       $220 = ($216>>>0)>(4294967295);
       $221 = ($215>>>0)>($219>>>0);
       $222 = ($216|0)==(-1);
       $223 = $222 & $221;
       $224 = $220 | $223;
       if ($224) {
        $$1165167 = $$1165168;$$8 = $$7198;$293 = $211;$294 = $209;
        label = 72;
        break L63;
       }
       $225 = (_i64Add(($217|0),0,($215|0),($216|0))|0);
       $226 = tempRet0;
       $227 = HEAP32[$6>>2]|0;
       $228 = HEAP32[$7>>2]|0;
       $229 = ($227>>>0)<($228>>>0);
       if ($229) {
        $230 = ((($227)) + 1|0);
        HEAP32[$6>>2] = $230;
        $231 = HEAP8[$227>>0]|0;
        $232 = $231&255;
        $$7$be = $232;
       } else {
        $233 = (___shgetc($0)|0);
        $$7$be = $233;
       }
       $234 = ((882) + ($$7$be)|0);
       $235 = HEAP8[$234>>0]|0;
       $236 = $235&255;
       $237 = ($236>>>0)<($$1165168>>>0);
       if ($237) {
        $$7198 = $$7$be;$209 = $226;$211 = $225;$218 = $235;
       } else {
        $$1165167 = $$1165168;$$8 = $$7$be;$293 = $225;$294 = $226;
        label = 72;
        break;
       }
      }
     } else {
      $$1165167 = $$1165168;$$8 = $$6$lcssa;$293 = $295;$294 = $296;
      label = 72;
     }
    }
   } while(0);
   if ((label|0) == 72) {
    $238 = ((882) + ($$8)|0);
    $239 = HEAP8[$238>>0]|0;
    $240 = $239&255;
    $241 = ($240>>>0)<($$1165167>>>0);
    if ($241) {
     while(1) {
      $242 = HEAP32[$6>>2]|0;
      $243 = HEAP32[$7>>2]|0;
      $244 = ($242>>>0)<($243>>>0);
      if ($244) {
       $245 = ((($242)) + 1|0);
       HEAP32[$6>>2] = $245;
       $246 = HEAP8[$242>>0]|0;
       $247 = $246&255;
       $$9$be = $247;
      } else {
       $248 = (___shgetc($0)|0);
       $$9$be = $248;
      }
      $249 = ((882) + ($$9$be)|0);
      $250 = HEAP8[$249>>0]|0;
      $251 = $250&255;
      $252 = ($251>>>0)<($$1165167>>>0);
      if (!($252)) {
       break;
      }
     }
     $253 = (___errno_location()|0);
     HEAP32[$253>>2] = 34;
     $254 = $3 & 1;
     $255 = ($254|0)==(0);
     $256 = (0)==(0);
     $257 = $255 & $256;
     $$0157$ = $257 ? $$0157 : 0;
     $$1158 = $$0157$;$263 = $4;$265 = $3;
    } else {
     $$1158 = $$0157;$263 = $294;$265 = $293;
    }
   }
   $258 = HEAP32[$7>>2]|0;
   $259 = ($258|0)==(0|0);
   if (!($259)) {
    $260 = HEAP32[$6>>2]|0;
    $261 = ((($260)) + -1|0);
    HEAP32[$6>>2] = $261;
   }
   $262 = ($263>>>0)<($4>>>0);
   $264 = ($265>>>0)<($3>>>0);
   $266 = ($263|0)==($4|0);
   $267 = $266 & $264;
   $268 = $262 | $267;
   if (!($268)) {
    $269 = $3 & 1;
    $270 = ($269|0)!=(0);
    $271 = (0)!=(0);
    $272 = $270 | $271;
    $273 = ($$1158|0)!=(0);
    $or$cond12 = $272 | $273;
    if (!($or$cond12)) {
     $274 = (___errno_location()|0);
     HEAP32[$274>>2] = 34;
     $275 = (_i64Add(($3|0),($4|0),-1,-1)|0);
     $276 = tempRet0;
     $289 = $276;$290 = $275;
     break;
    }
    $277 = ($263>>>0)>($4>>>0);
    $278 = ($265>>>0)>($3>>>0);
    $279 = ($263|0)==($4|0);
    $280 = $279 & $278;
    $281 = $277 | $280;
    if ($281) {
     $282 = (___errno_location()|0);
     HEAP32[$282>>2] = 34;
     $289 = $4;$290 = $3;
     break;
    }
   }
   $283 = ($$1158|0)<(0);
   $284 = $283 << 31 >> 31;
   $285 = $265 ^ $$1158;
   $286 = $263 ^ $284;
   $287 = (_i64Subtract(($285|0),($286|0),($$1158|0),($284|0))|0);
   $288 = tempRet0;
   $289 = $288;$290 = $287;
  }
 } while(0);
 tempRet0 = ($289);
 return ($290|0);
}
function ___shgetc($0) {
 $0 = $0|0;
 var $$0 = 0, $$phi$trans$insert = 0, $$phi$trans$insert28$phi$trans$insert = 0, $$pre = 0, $$pre$phi34Z2D = 0, $$pre29$pre = 0, $$pre35 = 0, $$sink = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 104|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)==(0);
 if ($3) {
  label = 3;
 } else {
  $4 = ((($0)) + 108|0);
  $5 = HEAP32[$4>>2]|0;
  $6 = ($5|0)<($2|0);
  if ($6) {
   label = 3;
  } else {
   label = 4;
  }
 }
 if ((label|0) == 3) {
  $7 = (___uflow($0)|0);
  $8 = ($7|0)<(0);
  if ($8) {
   label = 4;
  } else {
   $10 = HEAP32[$1>>2]|0;
   $11 = ($10|0)==(0);
   $$phi$trans$insert = ((($0)) + 8|0);
   if ($11) {
    $$pre = HEAP32[$$phi$trans$insert>>2]|0;
    $$phi$trans$insert28$phi$trans$insert = ((($0)) + 4|0);
    $$pre29$pre = HEAP32[$$phi$trans$insert28$phi$trans$insert>>2]|0;
    $$pre35 = ((($0)) + 108|0);
    $$pre$phi34Z2D = $$pre35;$$sink = $$pre;$26 = $$pre;$29 = $$pre29$pre;
   } else {
    $12 = HEAP32[$$phi$trans$insert>>2]|0;
    $13 = ((($0)) + 4|0);
    $14 = HEAP32[$13>>2]|0;
    $15 = $14;
    $16 = (($12) - ($15))|0;
    $17 = ((($0)) + 108|0);
    $18 = HEAP32[$17>>2]|0;
    $19 = (($10) - ($18))|0;
    $20 = ($16|0)<($19|0);
    $21 = $12;
    if ($20) {
     $$pre$phi34Z2D = $17;$$sink = $21;$26 = $21;$29 = $14;
    } else {
     $22 = (($19) + -1)|0;
     $23 = (($14) + ($22)|0);
     $$pre$phi34Z2D = $17;$$sink = $23;$26 = $21;$29 = $14;
    }
   }
   $24 = ((($0)) + 100|0);
   HEAP32[$24>>2] = $$sink;
   $25 = ($26|0)==(0|0);
   if (!($25)) {
    $27 = $26;
    $28 = $29;
    $30 = HEAP32[$$pre$phi34Z2D>>2]|0;
    $31 = (($27) + 1)|0;
    $32 = (($31) - ($28))|0;
    $33 = (($32) + ($30))|0;
    HEAP32[$$pre$phi34Z2D>>2] = $33;
   }
   $34 = ((($29)) + -1|0);
   $35 = HEAP8[$34>>0]|0;
   $36 = $35&255;
   $37 = ($36|0)==($7|0);
   if ($37) {
    $$0 = $7;
   } else {
    $38 = $7&255;
    HEAP8[$34>>0] = $38;
    $$0 = $7;
   }
  }
 }
 if ((label|0) == 4) {
  $9 = ((($0)) + 100|0);
  HEAP32[$9>>2] = 0;
  $$0 = -1;
 }
 return ($$0|0);
}
function _isspace($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(32);
 $2 = (($0) + -9)|0;
 $3 = ($2>>>0)<(5);
 $4 = $1 | $3;
 $5 = $4&1;
 return ($5|0);
}
function ___uflow($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 $2 = (___toread($0)|0);
 $3 = ($2|0)==(0);
 if ($3) {
  $4 = ((($0)) + 32|0);
  $5 = HEAP32[$4>>2]|0;
  $6 = (FUNCTION_TABLE_iiii[$5 & 15]($0,$1,1)|0);
  $7 = ($6|0)==(1);
  if ($7) {
   $8 = HEAP8[$1>>0]|0;
   $9 = $8&255;
   $$0 = $9;
  } else {
   $$0 = -1;
  }
 } else {
  $$0 = -1;
 }
 STACKTOP = sp;return ($$0|0);
}
function ___toread($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $sext = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = HEAP8[$1>>0]|0;
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 HEAP8[$1>>0] = $6;
 $7 = ((($0)) + 20|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ((($0)) + 28|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = ($8>>>0)>($10>>>0);
 if ($11) {
  $12 = ((($0)) + 36|0);
  $13 = HEAP32[$12>>2]|0;
  (FUNCTION_TABLE_iiii[$13 & 15]($0,0,0)|0);
 }
 $14 = ((($0)) + 16|0);
 HEAP32[$14>>2] = 0;
 HEAP32[$9>>2] = 0;
 HEAP32[$7>>2] = 0;
 $15 = HEAP32[$0>>2]|0;
 $16 = $15 & 4;
 $17 = ($16|0)==(0);
 if ($17) {
  $19 = ((($0)) + 44|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = ((($0)) + 48|0);
  $22 = HEAP32[$21>>2]|0;
  $23 = (($20) + ($22)|0);
  $24 = ((($0)) + 8|0);
  HEAP32[$24>>2] = $23;
  $25 = ((($0)) + 4|0);
  HEAP32[$25>>2] = $23;
  $26 = $15 << 27;
  $sext = $26 >> 31;
  $$0 = $sext;
 } else {
  $18 = $15 | 32;
  HEAP32[$0>>2] = $18;
  $$0 = -1;
 }
 return ($$0|0);
}
function _copysign($0,$1) {
 $0 = +$0;
 $1 = +$1;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $0;$2 = HEAP32[tempDoublePtr>>2]|0;
 $3 = HEAP32[tempDoublePtr+4>>2]|0;
 HEAPF64[tempDoublePtr>>3] = $1;$4 = HEAP32[tempDoublePtr>>2]|0;
 $5 = HEAP32[tempDoublePtr+4>>2]|0;
 $6 = $3 & 2147483647;
 $7 = $5 & -2147483648;
 $8 = $7 | $6;
 HEAP32[tempDoublePtr>>2] = $2;HEAP32[tempDoublePtr+4>>2] = $8;$9 = +HEAPF64[tempDoublePtr>>3];
 return (+$9);
}
function _strcmp($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$011 = 0, $$0710 = 0, $$lcssa = 0, $$lcssa8 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $2 = HEAP8[$0>>0]|0;
 $3 = HEAP8[$1>>0]|0;
 $4 = ($2<<24>>24)!=($3<<24>>24);
 $5 = ($2<<24>>24)==(0);
 $or$cond9 = $5 | $4;
 if ($or$cond9) {
  $$lcssa = $3;$$lcssa8 = $2;
 } else {
  $$011 = $1;$$0710 = $0;
  while(1) {
   $6 = ((($$0710)) + 1|0);
   $7 = ((($$011)) + 1|0);
   $8 = HEAP8[$6>>0]|0;
   $9 = HEAP8[$7>>0]|0;
   $10 = ($8<<24>>24)!=($9<<24>>24);
   $11 = ($8<<24>>24)==(0);
   $or$cond = $11 | $10;
   if ($or$cond) {
    $$lcssa = $9;$$lcssa8 = $8;
    break;
   } else {
    $$011 = $7;$$0710 = $6;
   }
  }
 }
 $12 = $$lcssa8&255;
 $13 = $$lcssa&255;
 $14 = (($12) - ($13))|0;
 return ($14|0);
}
function _sprintf($0,$1,$varargs) {
 $0 = $0|0;
 $1 = $1|0;
 $varargs = $varargs|0;
 var $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = sp;
 HEAP32[$2>>2] = $varargs;
 $3 = (_vsprintf($0,$1,$2)|0);
 STACKTOP = sp;return ($3|0);
}
function _vsprintf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = (_vsnprintf($0,2147483647,$1,$2)|0);
 return ($3|0);
}
function _vsnprintf($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$$015 = 0, $$0 = 0, $$014 = 0, $$015 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(128|0);
 $4 = sp + 124|0;
 $5 = sp;
 dest=$5; src=596; stop=dest+124|0; do { HEAP32[dest>>2]=HEAP32[src>>2]|0; dest=dest+4|0; src=src+4|0; } while ((dest|0) < (stop|0));
 $6 = (($1) + -1)|0;
 $7 = ($6>>>0)>(2147483646);
 if ($7) {
  $8 = ($1|0)==(0);
  if ($8) {
   $$014 = $4;$$015 = 1;
   label = 4;
  } else {
   $9 = (___errno_location()|0);
   HEAP32[$9>>2] = 75;
   $$0 = -1;
  }
 } else {
  $$014 = $0;$$015 = $1;
  label = 4;
 }
 if ((label|0) == 4) {
  $10 = $$014;
  $11 = (-2 - ($10))|0;
  $12 = ($$015>>>0)>($11>>>0);
  $$$015 = $12 ? $11 : $$015;
  $13 = ((($5)) + 48|0);
  HEAP32[$13>>2] = $$$015;
  $14 = ((($5)) + 20|0);
  HEAP32[$14>>2] = $$014;
  $15 = ((($5)) + 44|0);
  HEAP32[$15>>2] = $$014;
  $16 = (($$014) + ($$$015)|0);
  $17 = ((($5)) + 16|0);
  HEAP32[$17>>2] = $16;
  $18 = ((($5)) + 28|0);
  HEAP32[$18>>2] = $16;
  $19 = (_vfprintf($5,$2,$3)|0);
  $20 = ($$$015|0)==(0);
  if ($20) {
   $$0 = $19;
  } else {
   $21 = HEAP32[$14>>2]|0;
   $22 = HEAP32[$17>>2]|0;
   $23 = ($21|0)==($22|0);
   $24 = $23 << 31 >> 31;
   $25 = (($21) + ($24)|0);
   HEAP8[$25>>0] = 0;
   $$0 = $19;
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function _vfprintf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$0 = 0, $$1 = 0, $$1$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $vacopy_currentptr = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(224|0);
 $3 = sp + 120|0;
 $4 = sp + 80|0;
 $5 = sp;
 $6 = sp + 136|0;
 dest=$4; stop=dest+40|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 $vacopy_currentptr = HEAP32[$2>>2]|0;
 HEAP32[$3>>2] = $vacopy_currentptr;
 $7 = (_printf_core(0,$1,$3,$5,$4)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  $$0 = -1;
 } else {
  $9 = ((($0)) + 76|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = ($10|0)>(-1);
  if ($11) {
   $12 = (___lockfile($0)|0);
   $40 = $12;
  } else {
   $40 = 0;
  }
  $13 = HEAP32[$0>>2]|0;
  $14 = $13 & 32;
  $15 = ((($0)) + 74|0);
  $16 = HEAP8[$15>>0]|0;
  $17 = ($16<<24>>24)<(1);
  if ($17) {
   $18 = $13 & -33;
   HEAP32[$0>>2] = $18;
  }
  $19 = ((($0)) + 48|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = ($20|0)==(0);
  if ($21) {
   $23 = ((($0)) + 44|0);
   $24 = HEAP32[$23>>2]|0;
   HEAP32[$23>>2] = $6;
   $25 = ((($0)) + 28|0);
   HEAP32[$25>>2] = $6;
   $26 = ((($0)) + 20|0);
   HEAP32[$26>>2] = $6;
   HEAP32[$19>>2] = 80;
   $27 = ((($6)) + 80|0);
   $28 = ((($0)) + 16|0);
   HEAP32[$28>>2] = $27;
   $29 = (_printf_core($0,$1,$3,$5,$4)|0);
   $30 = ($24|0)==(0|0);
   if ($30) {
    $$1 = $29;
   } else {
    $31 = ((($0)) + 36|0);
    $32 = HEAP32[$31>>2]|0;
    (FUNCTION_TABLE_iiii[$32 & 15]($0,0,0)|0);
    $33 = HEAP32[$26>>2]|0;
    $34 = ($33|0)==(0|0);
    $$ = $34 ? -1 : $29;
    HEAP32[$23>>2] = $24;
    HEAP32[$19>>2] = 0;
    HEAP32[$28>>2] = 0;
    HEAP32[$25>>2] = 0;
    HEAP32[$26>>2] = 0;
    $$1 = $$;
   }
  } else {
   $22 = (_printf_core($0,$1,$3,$5,$4)|0);
   $$1 = $22;
  }
  $35 = HEAP32[$0>>2]|0;
  $36 = $35 & 32;
  $37 = ($36|0)==(0);
  $$1$ = $37 ? $$1 : -1;
  $38 = $35 | $14;
  HEAP32[$0>>2] = $38;
  $39 = ($40|0)==(0);
  if (!($39)) {
   ___unlockfile($0);
  }
  $$0 = $$1$;
 }
 STACKTOP = sp;return ($$0|0);
}
function _printf_core($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$$ = 0, $$$0259 = 0, $$$0262 = 0, $$$0269 = 0, $$$4266 = 0, $$$5 = 0, $$0 = 0, $$0228 = 0, $$0228$ = 0, $$0229322 = 0, $$0232 = 0, $$0235 = 0, $$0237 = 0, $$0240$lcssa = 0, $$0240$lcssa357 = 0, $$0240321 = 0, $$0243 = 0, $$0247 = 0, $$0249$lcssa = 0;
 var $$0249306 = 0, $$0252 = 0, $$0253 = 0, $$0254 = 0, $$0254$$0254$ = 0, $$0259 = 0, $$0262$lcssa = 0, $$0262311 = 0, $$0269 = 0, $$0269$phi = 0, $$1 = 0, $$1230333 = 0, $$1233 = 0, $$1236 = 0, $$1238 = 0, $$1241332 = 0, $$1244320 = 0, $$1248 = 0, $$1250 = 0, $$1255 = 0;
 var $$1260 = 0, $$1263 = 0, $$1263$ = 0, $$1270 = 0, $$2 = 0, $$2234 = 0, $$2239 = 0, $$2242305 = 0, $$2245 = 0, $$2251 = 0, $$2256 = 0, $$2256$ = 0, $$2256$$$2256 = 0, $$2261 = 0, $$2271 = 0, $$284$ = 0, $$289 = 0, $$290 = 0, $$3257 = 0, $$3265 = 0;
 var $$3272 = 0, $$3303 = 0, $$377 = 0, $$4258355 = 0, $$4266 = 0, $$5 = 0, $$6268 = 0, $$lcssa295 = 0, $$pre = 0, $$pre346 = 0, $$pre347 = 0, $$pre347$pre = 0, $$pre349 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0;
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0;
 var $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0;
 var $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0;
 var $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0;
 var $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0;
 var $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0;
 var $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0;
 var $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0;
 var $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0;
 var $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0;
 var $306 = 0.0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0;
 var $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded4 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $isdigit = 0, $isdigit275 = 0, $isdigit277 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp274 = 0;
 var $isdigittmp276 = 0, $narrow = 0, $or$cond = 0, $or$cond281 = 0, $or$cond283 = 0, $or$cond286 = 0, $storemerge = 0, $storemerge273310 = 0, $storemerge278 = 0, $trunc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $5 = sp + 16|0;
 $6 = sp;
 $7 = sp + 24|0;
 $8 = sp + 8|0;
 $9 = sp + 20|0;
 HEAP32[$5>>2] = $1;
 $10 = ($0|0)!=(0|0);
 $11 = ((($7)) + 40|0);
 $12 = $11;
 $13 = ((($7)) + 39|0);
 $14 = ((($8)) + 4|0);
 $$0243 = 0;$$0247 = 0;$$0269 = 0;$21 = $1;
 L1: while(1) {
  $15 = ($$0247|0)>(-1);
  do {
   if ($15) {
    $16 = (2147483647 - ($$0247))|0;
    $17 = ($$0243|0)>($16|0);
    if ($17) {
     $18 = (___errno_location()|0);
     HEAP32[$18>>2] = 75;
     $$1248 = -1;
     break;
    } else {
     $19 = (($$0243) + ($$0247))|0;
     $$1248 = $19;
     break;
    }
   } else {
    $$1248 = $$0247;
   }
  } while(0);
  $20 = HEAP8[$21>>0]|0;
  $22 = ($20<<24>>24)==(0);
  if ($22) {
   label = 87;
   break;
  } else {
   $23 = $20;$25 = $21;
  }
  L9: while(1) {
   switch ($23<<24>>24) {
   case 37:  {
    $$0249306 = $25;$27 = $25;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $$0249$lcssa = $25;$39 = $25;
    break L9;
    break;
   }
   default: {
   }
   }
   $24 = ((($25)) + 1|0);
   HEAP32[$5>>2] = $24;
   $$pre = HEAP8[$24>>0]|0;
   $23 = $$pre;$25 = $24;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $26 = ((($27)) + 1|0);
     $28 = HEAP8[$26>>0]|0;
     $29 = ($28<<24>>24)==(37);
     if (!($29)) {
      $$0249$lcssa = $$0249306;$39 = $27;
      break L12;
     }
     $30 = ((($$0249306)) + 1|0);
     $31 = ((($27)) + 2|0);
     HEAP32[$5>>2] = $31;
     $32 = HEAP8[$31>>0]|0;
     $33 = ($32<<24>>24)==(37);
     if ($33) {
      $$0249306 = $30;$27 = $31;
      label = 9;
     } else {
      $$0249$lcssa = $30;$39 = $31;
      break;
     }
    }
   }
  } while(0);
  $34 = $$0249$lcssa;
  $35 = $21;
  $36 = (($34) - ($35))|0;
  if ($10) {
   _out($0,$21,$36);
  }
  $37 = ($36|0)==(0);
  if (!($37)) {
   $$0269$phi = $$0269;$$0243 = $36;$$0247 = $$1248;$21 = $39;$$0269 = $$0269$phi;
   continue;
  }
  $38 = ((($39)) + 1|0);
  $40 = HEAP8[$38>>0]|0;
  $41 = $40 << 24 >> 24;
  $isdigittmp = (($41) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $42 = ((($39)) + 2|0);
   $43 = HEAP8[$42>>0]|0;
   $44 = ($43<<24>>24)==(36);
   $45 = ((($39)) + 3|0);
   $$377 = $44 ? $45 : $38;
   $$$0269 = $44 ? 1 : $$0269;
   $isdigittmp$ = $44 ? $isdigittmp : -1;
   $$0253 = $isdigittmp$;$$1270 = $$$0269;$storemerge = $$377;
  } else {
   $$0253 = -1;$$1270 = $$0269;$storemerge = $38;
  }
  HEAP32[$5>>2] = $storemerge;
  $46 = HEAP8[$storemerge>>0]|0;
  $47 = $46 << 24 >> 24;
  $48 = (($47) + -32)|0;
  $49 = ($48>>>0)<(32);
  L24: do {
   if ($49) {
    $$0262311 = 0;$329 = $46;$51 = $48;$storemerge273310 = $storemerge;
    while(1) {
     $50 = 1 << $51;
     $52 = $50 & 75913;
     $53 = ($52|0)==(0);
     if ($53) {
      $$0262$lcssa = $$0262311;$$lcssa295 = $329;$62 = $storemerge273310;
      break L24;
     }
     $54 = $50 | $$0262311;
     $55 = ((($storemerge273310)) + 1|0);
     HEAP32[$5>>2] = $55;
     $56 = HEAP8[$55>>0]|0;
     $57 = $56 << 24 >> 24;
     $58 = (($57) + -32)|0;
     $59 = ($58>>>0)<(32);
     if ($59) {
      $$0262311 = $54;$329 = $56;$51 = $58;$storemerge273310 = $55;
     } else {
      $$0262$lcssa = $54;$$lcssa295 = $56;$62 = $55;
      break;
     }
    }
   } else {
    $$0262$lcssa = 0;$$lcssa295 = $46;$62 = $storemerge;
   }
  } while(0);
  $60 = ($$lcssa295<<24>>24)==(42);
  if ($60) {
   $61 = ((($62)) + 1|0);
   $63 = HEAP8[$61>>0]|0;
   $64 = $63 << 24 >> 24;
   $isdigittmp276 = (($64) + -48)|0;
   $isdigit277 = ($isdigittmp276>>>0)<(10);
   if ($isdigit277) {
    $65 = ((($62)) + 2|0);
    $66 = HEAP8[$65>>0]|0;
    $67 = ($66<<24>>24)==(36);
    if ($67) {
     $68 = (($4) + ($isdigittmp276<<2)|0);
     HEAP32[$68>>2] = 10;
     $69 = HEAP8[$61>>0]|0;
     $70 = $69 << 24 >> 24;
     $71 = (($70) + -48)|0;
     $72 = (($3) + ($71<<3)|0);
     $73 = $72;
     $74 = $73;
     $75 = HEAP32[$74>>2]|0;
     $76 = (($73) + 4)|0;
     $77 = $76;
     $78 = HEAP32[$77>>2]|0;
     $79 = ((($62)) + 3|0);
     $$0259 = $75;$$2271 = 1;$storemerge278 = $79;
    } else {
     label = 23;
    }
   } else {
    label = 23;
   }
   if ((label|0) == 23) {
    label = 0;
    $80 = ($$1270|0)==(0);
    if (!($80)) {
     $$0 = -1;
     break;
    }
    if ($10) {
     $arglist_current = HEAP32[$2>>2]|0;
     $81 = $arglist_current;
     $82 = ((0) + 4|0);
     $expanded4 = $82;
     $expanded = (($expanded4) - 1)|0;
     $83 = (($81) + ($expanded))|0;
     $84 = ((0) + 4|0);
     $expanded8 = $84;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $85 = $83 & $expanded6;
     $86 = $85;
     $87 = HEAP32[$86>>2]|0;
     $arglist_next = ((($86)) + 4|0);
     HEAP32[$2>>2] = $arglist_next;
     $$0259 = $87;$$2271 = 0;$storemerge278 = $61;
    } else {
     $$0259 = 0;$$2271 = 0;$storemerge278 = $61;
    }
   }
   HEAP32[$5>>2] = $storemerge278;
   $88 = ($$0259|0)<(0);
   $89 = $$0262$lcssa | 8192;
   $90 = (0 - ($$0259))|0;
   $$$0262 = $88 ? $89 : $$0262$lcssa;
   $$$0259 = $88 ? $90 : $$0259;
   $$1260 = $$$0259;$$1263 = $$$0262;$$3272 = $$2271;$94 = $storemerge278;
  } else {
   $91 = (_getint($5)|0);
   $92 = ($91|0)<(0);
   if ($92) {
    $$0 = -1;
    break;
   }
   $$pre346 = HEAP32[$5>>2]|0;
   $$1260 = $91;$$1263 = $$0262$lcssa;$$3272 = $$1270;$94 = $$pre346;
  }
  $93 = HEAP8[$94>>0]|0;
  $95 = ($93<<24>>24)==(46);
  do {
   if ($95) {
    $96 = ((($94)) + 1|0);
    $97 = HEAP8[$96>>0]|0;
    $98 = ($97<<24>>24)==(42);
    if (!($98)) {
     $125 = ((($94)) + 1|0);
     HEAP32[$5>>2] = $125;
     $126 = (_getint($5)|0);
     $$pre347$pre = HEAP32[$5>>2]|0;
     $$0254 = $126;$$pre347 = $$pre347$pre;
     break;
    }
    $99 = ((($94)) + 2|0);
    $100 = HEAP8[$99>>0]|0;
    $101 = $100 << 24 >> 24;
    $isdigittmp274 = (($101) + -48)|0;
    $isdigit275 = ($isdigittmp274>>>0)<(10);
    if ($isdigit275) {
     $102 = ((($94)) + 3|0);
     $103 = HEAP8[$102>>0]|0;
     $104 = ($103<<24>>24)==(36);
     if ($104) {
      $105 = (($4) + ($isdigittmp274<<2)|0);
      HEAP32[$105>>2] = 10;
      $106 = HEAP8[$99>>0]|0;
      $107 = $106 << 24 >> 24;
      $108 = (($107) + -48)|0;
      $109 = (($3) + ($108<<3)|0);
      $110 = $109;
      $111 = $110;
      $112 = HEAP32[$111>>2]|0;
      $113 = (($110) + 4)|0;
      $114 = $113;
      $115 = HEAP32[$114>>2]|0;
      $116 = ((($94)) + 4|0);
      HEAP32[$5>>2] = $116;
      $$0254 = $112;$$pre347 = $116;
      break;
     }
    }
    $117 = ($$3272|0)==(0);
    if (!($117)) {
     $$0 = -1;
     break L1;
    }
    if ($10) {
     $arglist_current2 = HEAP32[$2>>2]|0;
     $118 = $arglist_current2;
     $119 = ((0) + 4|0);
     $expanded11 = $119;
     $expanded10 = (($expanded11) - 1)|0;
     $120 = (($118) + ($expanded10))|0;
     $121 = ((0) + 4|0);
     $expanded15 = $121;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $122 = $120 & $expanded13;
     $123 = $122;
     $124 = HEAP32[$123>>2]|0;
     $arglist_next3 = ((($123)) + 4|0);
     HEAP32[$2>>2] = $arglist_next3;
     $330 = $124;
    } else {
     $330 = 0;
    }
    HEAP32[$5>>2] = $99;
    $$0254 = $330;$$pre347 = $99;
   } else {
    $$0254 = -1;$$pre347 = $94;
   }
  } while(0);
  $$0252 = 0;$128 = $$pre347;
  while(1) {
   $127 = HEAP8[$128>>0]|0;
   $129 = $127 << 24 >> 24;
   $130 = (($129) + -65)|0;
   $131 = ($130>>>0)>(57);
   if ($131) {
    $$0 = -1;
    break L1;
   }
   $132 = ((($128)) + 1|0);
   HEAP32[$5>>2] = $132;
   $133 = HEAP8[$128>>0]|0;
   $134 = $133 << 24 >> 24;
   $135 = (($134) + -65)|0;
   $136 = ((1147 + (($$0252*58)|0)|0) + ($135)|0);
   $137 = HEAP8[$136>>0]|0;
   $138 = $137&255;
   $139 = (($138) + -1)|0;
   $140 = ($139>>>0)<(8);
   if ($140) {
    $$0252 = $138;$128 = $132;
   } else {
    break;
   }
  }
  $141 = ($137<<24>>24)==(0);
  if ($141) {
   $$0 = -1;
   break;
  }
  $142 = ($137<<24>>24)==(19);
  $143 = ($$0253|0)>(-1);
  do {
   if ($142) {
    if ($143) {
     $$0 = -1;
     break L1;
    } else {
     label = 49;
    }
   } else {
    if ($143) {
     $144 = (($4) + ($$0253<<2)|0);
     HEAP32[$144>>2] = $138;
     $145 = (($3) + ($$0253<<3)|0);
     $146 = $145;
     $147 = $146;
     $148 = HEAP32[$147>>2]|0;
     $149 = (($146) + 4)|0;
     $150 = $149;
     $151 = HEAP32[$150>>2]|0;
     $152 = $6;
     $153 = $152;
     HEAP32[$153>>2] = $148;
     $154 = (($152) + 4)|0;
     $155 = $154;
     HEAP32[$155>>2] = $151;
     label = 49;
     break;
    }
    if (!($10)) {
     $$0 = 0;
     break L1;
    }
    _pop_arg($6,$138,$2);
   }
  } while(0);
  if ((label|0) == 49) {
   label = 0;
   if (!($10)) {
    $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
    continue;
   }
  }
  $156 = HEAP8[$128>>0]|0;
  $157 = $156 << 24 >> 24;
  $158 = ($$0252|0)!=(0);
  $159 = $157 & 15;
  $160 = ($159|0)==(3);
  $or$cond281 = $158 & $160;
  $161 = $157 & -33;
  $$0235 = $or$cond281 ? $161 : $157;
  $162 = $$1263 & 8192;
  $163 = ($162|0)==(0);
  $164 = $$1263 & -65537;
  $$1263$ = $163 ? $$1263 : $164;
  L71: do {
   switch ($$0235|0) {
   case 110:  {
    $trunc = $$0252&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $171 = HEAP32[$6>>2]|0;
     HEAP32[$171>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
     continue L1;
     break;
    }
    case 1:  {
     $172 = HEAP32[$6>>2]|0;
     HEAP32[$172>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
     continue L1;
     break;
    }
    case 2:  {
     $173 = ($$1248|0)<(0);
     $174 = $173 << 31 >> 31;
     $175 = HEAP32[$6>>2]|0;
     $176 = $175;
     $177 = $176;
     HEAP32[$177>>2] = $$1248;
     $178 = (($176) + 4)|0;
     $179 = $178;
     HEAP32[$179>>2] = $174;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
     continue L1;
     break;
    }
    case 3:  {
     $180 = $$1248&65535;
     $181 = HEAP32[$6>>2]|0;
     HEAP16[$181>>1] = $180;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
     continue L1;
     break;
    }
    case 4:  {
     $182 = $$1248&255;
     $183 = HEAP32[$6>>2]|0;
     HEAP8[$183>>0] = $182;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
     continue L1;
     break;
    }
    case 6:  {
     $184 = HEAP32[$6>>2]|0;
     HEAP32[$184>>2] = $$1248;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
     continue L1;
     break;
    }
    case 7:  {
     $185 = ($$1248|0)<(0);
     $186 = $185 << 31 >> 31;
     $187 = HEAP32[$6>>2]|0;
     $188 = $187;
     $189 = $188;
     HEAP32[$189>>2] = $$1248;
     $190 = (($188) + 4)|0;
     $191 = $190;
     HEAP32[$191>>2] = $186;
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
     continue L1;
     break;
    }
    default: {
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $192 = ($$0254>>>0)>(8);
    $193 = $192 ? $$0254 : 8;
    $194 = $$1263$ | 8;
    $$1236 = 120;$$1255 = $193;$$3265 = $194;
    label = 61;
    break;
   }
   case 88: case 120:  {
    $$1236 = $$0235;$$1255 = $$0254;$$3265 = $$1263$;
    label = 61;
    break;
   }
   case 111:  {
    $210 = $6;
    $211 = $210;
    $212 = HEAP32[$211>>2]|0;
    $213 = (($210) + 4)|0;
    $214 = $213;
    $215 = HEAP32[$214>>2]|0;
    $216 = (_fmt_o($212,$215,$11)|0);
    $217 = $$1263$ & 8;
    $218 = ($217|0)==(0);
    $219 = $216;
    $220 = (($12) - ($219))|0;
    $221 = ($$0254|0)>($220|0);
    $222 = (($220) + 1)|0;
    $223 = $218 | $221;
    $$0254$$0254$ = $223 ? $$0254 : $222;
    $$0228 = $216;$$1233 = 0;$$1238 = 1611;$$2256 = $$0254$$0254$;$$4266 = $$1263$;$248 = $212;$250 = $215;
    label = 67;
    break;
   }
   case 105: case 100:  {
    $224 = $6;
    $225 = $224;
    $226 = HEAP32[$225>>2]|0;
    $227 = (($224) + 4)|0;
    $228 = $227;
    $229 = HEAP32[$228>>2]|0;
    $230 = ($229|0)<(0);
    if ($230) {
     $231 = (_i64Subtract(0,0,($226|0),($229|0))|0);
     $232 = tempRet0;
     $233 = $6;
     $234 = $233;
     HEAP32[$234>>2] = $231;
     $235 = (($233) + 4)|0;
     $236 = $235;
     HEAP32[$236>>2] = $232;
     $$0232 = 1;$$0237 = 1611;$242 = $231;$243 = $232;
     label = 66;
     break L71;
    } else {
     $237 = $$1263$ & 2048;
     $238 = ($237|0)==(0);
     $239 = $$1263$ & 1;
     $240 = ($239|0)==(0);
     $$ = $240 ? 1611 : (1613);
     $$$ = $238 ? $$ : (1612);
     $241 = $$1263$ & 2049;
     $narrow = ($241|0)!=(0);
     $$284$ = $narrow&1;
     $$0232 = $$284$;$$0237 = $$$;$242 = $226;$243 = $229;
     label = 66;
     break L71;
    }
    break;
   }
   case 117:  {
    $165 = $6;
    $166 = $165;
    $167 = HEAP32[$166>>2]|0;
    $168 = (($165) + 4)|0;
    $169 = $168;
    $170 = HEAP32[$169>>2]|0;
    $$0232 = 0;$$0237 = 1611;$242 = $167;$243 = $170;
    label = 66;
    break;
   }
   case 99:  {
    $259 = $6;
    $260 = $259;
    $261 = HEAP32[$260>>2]|0;
    $262 = (($259) + 4)|0;
    $263 = $262;
    $264 = HEAP32[$263>>2]|0;
    $265 = $261&255;
    HEAP8[$13>>0] = $265;
    $$2 = $13;$$2234 = 0;$$2239 = 1611;$$2251 = $11;$$5 = 1;$$6268 = $164;
    break;
   }
   case 109:  {
    $266 = (___errno_location()|0);
    $267 = HEAP32[$266>>2]|0;
    $268 = (_strerror($267)|0);
    $$1 = $268;
    label = 71;
    break;
   }
   case 115:  {
    $269 = HEAP32[$6>>2]|0;
    $270 = ($269|0)!=(0|0);
    $271 = $270 ? $269 : 1621;
    $$1 = $271;
    label = 71;
    break;
   }
   case 67:  {
    $278 = $6;
    $279 = $278;
    $280 = HEAP32[$279>>2]|0;
    $281 = (($278) + 4)|0;
    $282 = $281;
    $283 = HEAP32[$282>>2]|0;
    HEAP32[$8>>2] = $280;
    HEAP32[$14>>2] = 0;
    HEAP32[$6>>2] = $8;
    $$4258355 = -1;$331 = $8;
    label = 75;
    break;
   }
   case 83:  {
    $$pre349 = HEAP32[$6>>2]|0;
    $284 = ($$0254|0)==(0);
    if ($284) {
     _pad_684($0,32,$$1260,0,$$1263$);
     $$0240$lcssa357 = 0;
     label = 84;
    } else {
     $$4258355 = $$0254;$331 = $$pre349;
     label = 75;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $306 = +HEAPF64[$6>>3];
    $307 = (_fmt_fp($0,$306,$$1260,$$0254,$$1263$,$$0235)|0);
    $$0243 = $307;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
    continue L1;
    break;
   }
   default: {
    $$2 = $21;$$2234 = 0;$$2239 = 1611;$$2251 = $11;$$5 = $$0254;$$6268 = $$1263$;
   }
   }
  } while(0);
  L95: do {
   if ((label|0) == 61) {
    label = 0;
    $195 = $6;
    $196 = $195;
    $197 = HEAP32[$196>>2]|0;
    $198 = (($195) + 4)|0;
    $199 = $198;
    $200 = HEAP32[$199>>2]|0;
    $201 = $$1236 & 32;
    $202 = (_fmt_x($197,$200,$11,$201)|0);
    $203 = ($197|0)==(0);
    $204 = ($200|0)==(0);
    $205 = $203 & $204;
    $206 = $$3265 & 8;
    $207 = ($206|0)==(0);
    $or$cond283 = $207 | $205;
    $208 = $$1236 >> 4;
    $209 = (1611 + ($208)|0);
    $$289 = $or$cond283 ? 1611 : $209;
    $$290 = $or$cond283 ? 0 : 2;
    $$0228 = $202;$$1233 = $$290;$$1238 = $$289;$$2256 = $$1255;$$4266 = $$3265;$248 = $197;$250 = $200;
    label = 67;
   }
   else if ((label|0) == 66) {
    label = 0;
    $244 = (_fmt_u($242,$243,$11)|0);
    $$0228 = $244;$$1233 = $$0232;$$1238 = $$0237;$$2256 = $$0254;$$4266 = $$1263$;$248 = $242;$250 = $243;
    label = 67;
   }
   else if ((label|0) == 71) {
    label = 0;
    $272 = (_memchr($$1,0,$$0254)|0);
    $273 = ($272|0)==(0|0);
    $274 = $272;
    $275 = $$1;
    $276 = (($274) - ($275))|0;
    $277 = (($$1) + ($$0254)|0);
    $$3257 = $273 ? $$0254 : $276;
    $$1250 = $273 ? $277 : $272;
    $$2 = $$1;$$2234 = 0;$$2239 = 1611;$$2251 = $$1250;$$5 = $$3257;$$6268 = $164;
   }
   else if ((label|0) == 75) {
    label = 0;
    $$0229322 = $331;$$0240321 = 0;$$1244320 = 0;
    while(1) {
     $285 = HEAP32[$$0229322>>2]|0;
     $286 = ($285|0)==(0);
     if ($286) {
      $$0240$lcssa = $$0240321;$$2245 = $$1244320;
      break;
     }
     $287 = (_wctomb($9,$285)|0);
     $288 = ($287|0)<(0);
     $289 = (($$4258355) - ($$0240321))|0;
     $290 = ($287>>>0)>($289>>>0);
     $or$cond286 = $288 | $290;
     if ($or$cond286) {
      $$0240$lcssa = $$0240321;$$2245 = $287;
      break;
     }
     $291 = ((($$0229322)) + 4|0);
     $292 = (($287) + ($$0240321))|0;
     $293 = ($$4258355>>>0)>($292>>>0);
     if ($293) {
      $$0229322 = $291;$$0240321 = $292;$$1244320 = $287;
     } else {
      $$0240$lcssa = $292;$$2245 = $287;
      break;
     }
    }
    $294 = ($$2245|0)<(0);
    if ($294) {
     $$0 = -1;
     break L1;
    }
    _pad_684($0,32,$$1260,$$0240$lcssa,$$1263$);
    $295 = ($$0240$lcssa|0)==(0);
    if ($295) {
     $$0240$lcssa357 = 0;
     label = 84;
    } else {
     $$1230333 = $331;$$1241332 = 0;
     while(1) {
      $296 = HEAP32[$$1230333>>2]|0;
      $297 = ($296|0)==(0);
      if ($297) {
       $$0240$lcssa357 = $$0240$lcssa;
       label = 84;
       break L95;
      }
      $298 = (_wctomb($9,$296)|0);
      $299 = (($298) + ($$1241332))|0;
      $300 = ($299|0)>($$0240$lcssa|0);
      if ($300) {
       $$0240$lcssa357 = $$0240$lcssa;
       label = 84;
       break L95;
      }
      $301 = ((($$1230333)) + 4|0);
      _out($0,$9,$298);
      $302 = ($299>>>0)<($$0240$lcssa>>>0);
      if ($302) {
       $$1230333 = $301;$$1241332 = $299;
      } else {
       $$0240$lcssa357 = $$0240$lcssa;
       label = 84;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 67) {
   label = 0;
   $245 = ($$2256|0)>(-1);
   $246 = $$4266 & -65537;
   $$$4266 = $245 ? $246 : $$4266;
   $247 = ($248|0)!=(0);
   $249 = ($250|0)!=(0);
   $251 = $247 | $249;
   $252 = ($$2256|0)!=(0);
   $or$cond = $252 | $251;
   $253 = $$0228;
   $254 = (($12) - ($253))|0;
   $255 = $251 ^ 1;
   $256 = $255&1;
   $257 = (($256) + ($254))|0;
   $258 = ($$2256|0)>($257|0);
   $$2256$ = $258 ? $$2256 : $257;
   $$2256$$$2256 = $or$cond ? $$2256$ : $$2256;
   $$0228$ = $or$cond ? $$0228 : $11;
   $$2 = $$0228$;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $11;$$5 = $$2256$$$2256;$$6268 = $$$4266;
  }
  else if ((label|0) == 84) {
   label = 0;
   $303 = $$1263$ ^ 8192;
   _pad_684($0,32,$$1260,$$0240$lcssa357,$303);
   $304 = ($$1260|0)>($$0240$lcssa357|0);
   $305 = $304 ? $$1260 : $$0240$lcssa357;
   $$0243 = $305;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
   continue;
  }
  $308 = $$2251;
  $309 = $$2;
  $310 = (($308) - ($309))|0;
  $311 = ($$5|0)<($310|0);
  $$$5 = $311 ? $310 : $$5;
  $312 = (($$$5) + ($$2234))|0;
  $313 = ($$1260|0)<($312|0);
  $$2261 = $313 ? $312 : $$1260;
  _pad_684($0,32,$$2261,$312,$$6268);
  _out($0,$$2239,$$2234);
  $314 = $$6268 ^ 65536;
  _pad_684($0,48,$$2261,$312,$314);
  _pad_684($0,48,$$$5,$310,0);
  _out($0,$$2,$310);
  $315 = $$6268 ^ 8192;
  _pad_684($0,32,$$2261,$312,$315);
  $$0243 = $$2261;$$0247 = $$1248;$$0269 = $$3272;$21 = $132;
 }
 L114: do {
  if ((label|0) == 87) {
   $316 = ($0|0)==(0|0);
   if ($316) {
    $317 = ($$0269|0)==(0);
    if ($317) {
     $$0 = 0;
    } else {
     $$2242305 = 1;
     while(1) {
      $318 = (($4) + ($$2242305<<2)|0);
      $319 = HEAP32[$318>>2]|0;
      $320 = ($319|0)==(0);
      if ($320) {
       $$3303 = $$2242305;
       break;
      }
      $321 = (($3) + ($$2242305<<3)|0);
      _pop_arg($321,$319,$2);
      $322 = (($$2242305) + 1)|0;
      $323 = ($322|0)<(10);
      if ($323) {
       $$2242305 = $322;
      } else {
       $$0 = 1;
       break L114;
      }
     }
     while(1) {
      $326 = (($4) + ($$3303<<2)|0);
      $327 = HEAP32[$326>>2]|0;
      $328 = ($327|0)==(0);
      $325 = (($$3303) + 1)|0;
      if (!($328)) {
       $$0 = -1;
       break L114;
      }
      $324 = ($325|0)<(10);
      if ($324) {
       $$3303 = $325;
      } else {
       $$0 = 1;
       break;
      }
     }
    }
   } else {
    $$0 = $$1248;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___lockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___unlockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function _out($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = HEAP32[$0>>2]|0;
 $4 = $3 & 32;
 $5 = ($4|0)==(0);
 if ($5) {
  (___fwritex($1,$2,$0)|0);
 }
 return;
}
function _getint($0) {
 $0 = $0|0;
 var $$0$lcssa = 0, $$06 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $isdigit = 0, $isdigit5 = 0, $isdigittmp = 0, $isdigittmp4 = 0, $isdigittmp7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP8[$1>>0]|0;
 $3 = $2 << 24 >> 24;
 $isdigittmp4 = (($3) + -48)|0;
 $isdigit5 = ($isdigittmp4>>>0)<(10);
 if ($isdigit5) {
  $$06 = 0;$7 = $1;$isdigittmp7 = $isdigittmp4;
  while(1) {
   $4 = ($$06*10)|0;
   $5 = (($isdigittmp7) + ($4))|0;
   $6 = ((($7)) + 1|0);
   HEAP32[$0>>2] = $6;
   $8 = HEAP8[$6>>0]|0;
   $9 = $8 << 24 >> 24;
   $isdigittmp = (($9) + -48)|0;
   $isdigit = ($isdigittmp>>>0)<(10);
   if ($isdigit) {
    $$06 = $5;$7 = $6;$isdigittmp7 = $isdigittmp;
   } else {
    $$0$lcssa = $5;
    break;
   }
  }
 } else {
  $$0$lcssa = 0;
 }
 return ($$0$lcssa|0);
}
function _pop_arg($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$mask = 0, $$mask31 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0;
 var $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded30 = 0, $expanded31 = 0;
 var $expanded32 = 0, $expanded34 = 0, $expanded35 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded41 = 0, $expanded42 = 0, $expanded44 = 0, $expanded45 = 0, $expanded46 = 0, $expanded48 = 0, $expanded49 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded55 = 0, $expanded56 = 0, $expanded58 = 0, $expanded59 = 0;
 var $expanded60 = 0, $expanded62 = 0, $expanded63 = 0, $expanded65 = 0, $expanded66 = 0, $expanded67 = 0, $expanded69 = 0, $expanded70 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded76 = 0, $expanded77 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded83 = 0, $expanded84 = 0, $expanded86 = 0, $expanded87 = 0;
 var $expanded88 = 0, $expanded90 = 0, $expanded91 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(20);
 L1: do {
  if (!($3)) {
   do {
    switch ($1|0) {
    case 9:  {
     $arglist_current = HEAP32[$2>>2]|0;
     $4 = $arglist_current;
     $5 = ((0) + 4|0);
     $expanded28 = $5;
     $expanded = (($expanded28) - 1)|0;
     $6 = (($4) + ($expanded))|0;
     $7 = ((0) + 4|0);
     $expanded32 = $7;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $8 = $6 & $expanded30;
     $9 = $8;
     $10 = HEAP32[$9>>2]|0;
     $arglist_next = ((($9)) + 4|0);
     HEAP32[$2>>2] = $arglist_next;
     HEAP32[$0>>2] = $10;
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = HEAP32[$2>>2]|0;
     $11 = $arglist_current2;
     $12 = ((0) + 4|0);
     $expanded35 = $12;
     $expanded34 = (($expanded35) - 1)|0;
     $13 = (($11) + ($expanded34))|0;
     $14 = ((0) + 4|0);
     $expanded39 = $14;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $15 = $13 & $expanded37;
     $16 = $15;
     $17 = HEAP32[$16>>2]|0;
     $arglist_next3 = ((($16)) + 4|0);
     HEAP32[$2>>2] = $arglist_next3;
     $18 = ($17|0)<(0);
     $19 = $18 << 31 >> 31;
     $20 = $0;
     $21 = $20;
     HEAP32[$21>>2] = $17;
     $22 = (($20) + 4)|0;
     $23 = $22;
     HEAP32[$23>>2] = $19;
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = HEAP32[$2>>2]|0;
     $24 = $arglist_current5;
     $25 = ((0) + 4|0);
     $expanded42 = $25;
     $expanded41 = (($expanded42) - 1)|0;
     $26 = (($24) + ($expanded41))|0;
     $27 = ((0) + 4|0);
     $expanded46 = $27;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $28 = $26 & $expanded44;
     $29 = $28;
     $30 = HEAP32[$29>>2]|0;
     $arglist_next6 = ((($29)) + 4|0);
     HEAP32[$2>>2] = $arglist_next6;
     $31 = $0;
     $32 = $31;
     HEAP32[$32>>2] = $30;
     $33 = (($31) + 4)|0;
     $34 = $33;
     HEAP32[$34>>2] = 0;
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = HEAP32[$2>>2]|0;
     $35 = $arglist_current8;
     $36 = ((0) + 8|0);
     $expanded49 = $36;
     $expanded48 = (($expanded49) - 1)|0;
     $37 = (($35) + ($expanded48))|0;
     $38 = ((0) + 8|0);
     $expanded53 = $38;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $39 = $37 & $expanded51;
     $40 = $39;
     $41 = $40;
     $42 = $41;
     $43 = HEAP32[$42>>2]|0;
     $44 = (($41) + 4)|0;
     $45 = $44;
     $46 = HEAP32[$45>>2]|0;
     $arglist_next9 = ((($40)) + 8|0);
     HEAP32[$2>>2] = $arglist_next9;
     $47 = $0;
     $48 = $47;
     HEAP32[$48>>2] = $43;
     $49 = (($47) + 4)|0;
     $50 = $49;
     HEAP32[$50>>2] = $46;
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = HEAP32[$2>>2]|0;
     $51 = $arglist_current11;
     $52 = ((0) + 4|0);
     $expanded56 = $52;
     $expanded55 = (($expanded56) - 1)|0;
     $53 = (($51) + ($expanded55))|0;
     $54 = ((0) + 4|0);
     $expanded60 = $54;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $55 = $53 & $expanded58;
     $56 = $55;
     $57 = HEAP32[$56>>2]|0;
     $arglist_next12 = ((($56)) + 4|0);
     HEAP32[$2>>2] = $arglist_next12;
     $58 = $57&65535;
     $59 = $58 << 16 >> 16;
     $60 = ($59|0)<(0);
     $61 = $60 << 31 >> 31;
     $62 = $0;
     $63 = $62;
     HEAP32[$63>>2] = $59;
     $64 = (($62) + 4)|0;
     $65 = $64;
     HEAP32[$65>>2] = $61;
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = HEAP32[$2>>2]|0;
     $66 = $arglist_current14;
     $67 = ((0) + 4|0);
     $expanded63 = $67;
     $expanded62 = (($expanded63) - 1)|0;
     $68 = (($66) + ($expanded62))|0;
     $69 = ((0) + 4|0);
     $expanded67 = $69;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $70 = $68 & $expanded65;
     $71 = $70;
     $72 = HEAP32[$71>>2]|0;
     $arglist_next15 = ((($71)) + 4|0);
     HEAP32[$2>>2] = $arglist_next15;
     $$mask31 = $72 & 65535;
     $73 = $0;
     $74 = $73;
     HEAP32[$74>>2] = $$mask31;
     $75 = (($73) + 4)|0;
     $76 = $75;
     HEAP32[$76>>2] = 0;
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = HEAP32[$2>>2]|0;
     $77 = $arglist_current17;
     $78 = ((0) + 4|0);
     $expanded70 = $78;
     $expanded69 = (($expanded70) - 1)|0;
     $79 = (($77) + ($expanded69))|0;
     $80 = ((0) + 4|0);
     $expanded74 = $80;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $81 = $79 & $expanded72;
     $82 = $81;
     $83 = HEAP32[$82>>2]|0;
     $arglist_next18 = ((($82)) + 4|0);
     HEAP32[$2>>2] = $arglist_next18;
     $84 = $83&255;
     $85 = $84 << 24 >> 24;
     $86 = ($85|0)<(0);
     $87 = $86 << 31 >> 31;
     $88 = $0;
     $89 = $88;
     HEAP32[$89>>2] = $85;
     $90 = (($88) + 4)|0;
     $91 = $90;
     HEAP32[$91>>2] = $87;
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = HEAP32[$2>>2]|0;
     $92 = $arglist_current20;
     $93 = ((0) + 4|0);
     $expanded77 = $93;
     $expanded76 = (($expanded77) - 1)|0;
     $94 = (($92) + ($expanded76))|0;
     $95 = ((0) + 4|0);
     $expanded81 = $95;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $96 = $94 & $expanded79;
     $97 = $96;
     $98 = HEAP32[$97>>2]|0;
     $arglist_next21 = ((($97)) + 4|0);
     HEAP32[$2>>2] = $arglist_next21;
     $$mask = $98 & 255;
     $99 = $0;
     $100 = $99;
     HEAP32[$100>>2] = $$mask;
     $101 = (($99) + 4)|0;
     $102 = $101;
     HEAP32[$102>>2] = 0;
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = HEAP32[$2>>2]|0;
     $103 = $arglist_current23;
     $104 = ((0) + 8|0);
     $expanded84 = $104;
     $expanded83 = (($expanded84) - 1)|0;
     $105 = (($103) + ($expanded83))|0;
     $106 = ((0) + 8|0);
     $expanded88 = $106;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $107 = $105 & $expanded86;
     $108 = $107;
     $109 = +HEAPF64[$108>>3];
     $arglist_next24 = ((($108)) + 8|0);
     HEAP32[$2>>2] = $arglist_next24;
     HEAPF64[$0>>3] = $109;
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = HEAP32[$2>>2]|0;
     $110 = $arglist_current26;
     $111 = ((0) + 8|0);
     $expanded91 = $111;
     $expanded90 = (($expanded91) - 1)|0;
     $112 = (($110) + ($expanded90))|0;
     $113 = ((0) + 8|0);
     $expanded95 = $113;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $114 = $112 & $expanded93;
     $115 = $114;
     $116 = +HEAPF64[$115>>3];
     $arglist_next27 = ((($115)) + 8|0);
     HEAP32[$2>>2] = $arglist_next27;
     HEAPF64[$0>>3] = $116;
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_x($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$05$lcssa = 0, $$056 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $4 = ($0|0)==(0);
 $5 = ($1|0)==(0);
 $6 = $4 & $5;
 if ($6) {
  $$05$lcssa = $2;
 } else {
  $$056 = $2;$15 = $1;$8 = $0;
  while(1) {
   $7 = $8 & 15;
   $9 = (1659 + ($7)|0);
   $10 = HEAP8[$9>>0]|0;
   $11 = $10&255;
   $12 = $11 | $3;
   $13 = $12&255;
   $14 = ((($$056)) + -1|0);
   HEAP8[$14>>0] = $13;
   $16 = (_bitshift64Lshr(($8|0),($15|0),4)|0);
   $17 = tempRet0;
   $18 = ($16|0)==(0);
   $19 = ($17|0)==(0);
   $20 = $18 & $19;
   if ($20) {
    $$05$lcssa = $14;
    break;
   } else {
    $$056 = $14;$15 = $17;$8 = $16;
   }
  }
 }
 return ($$05$lcssa|0);
}
function _fmt_o($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$06 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==(0);
 $4 = ($1|0)==(0);
 $5 = $3 & $4;
 if ($5) {
  $$0$lcssa = $2;
 } else {
  $$06 = $2;$11 = $1;$7 = $0;
  while(1) {
   $6 = $7&255;
   $8 = $6 & 7;
   $9 = $8 | 48;
   $10 = ((($$06)) + -1|0);
   HEAP8[$10>>0] = $9;
   $12 = (_bitshift64Lshr(($7|0),($11|0),3)|0);
   $13 = tempRet0;
   $14 = ($12|0)==(0);
   $15 = ($13|0)==(0);
   $16 = $14 & $15;
   if ($16) {
    $$0$lcssa = $10;
    break;
   } else {
    $$06 = $10;$11 = $13;$7 = $12;
   }
  }
 }
 return ($$0$lcssa|0);
}
function _fmt_u($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$010$lcssa$off0 = 0, $$012 = 0, $$09$lcssa = 0, $$0914 = 0, $$1$lcssa = 0, $$111 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(0);
 $4 = ($0>>>0)>(4294967295);
 $5 = ($1|0)==(0);
 $6 = $5 & $4;
 $7 = $3 | $6;
 if ($7) {
  $$0914 = $2;$8 = $0;$9 = $1;
  while(1) {
   $10 = (___uremdi3(($8|0),($9|0),10,0)|0);
   $11 = tempRet0;
   $12 = $10&255;
   $13 = $12 | 48;
   $14 = ((($$0914)) + -1|0);
   HEAP8[$14>>0] = $13;
   $15 = (___udivdi3(($8|0),($9|0),10,0)|0);
   $16 = tempRet0;
   $17 = ($9>>>0)>(9);
   $18 = ($8>>>0)>(4294967295);
   $19 = ($9|0)==(9);
   $20 = $19 & $18;
   $21 = $17 | $20;
   if ($21) {
    $$0914 = $14;$8 = $15;$9 = $16;
   } else {
    break;
   }
  }
  $$010$lcssa$off0 = $15;$$09$lcssa = $14;
 } else {
  $$010$lcssa$off0 = $0;$$09$lcssa = $2;
 }
 $22 = ($$010$lcssa$off0|0)==(0);
 if ($22) {
  $$1$lcssa = $$09$lcssa;
 } else {
  $$012 = $$010$lcssa$off0;$$111 = $$09$lcssa;
  while(1) {
   $23 = (($$012>>>0) % 10)&-1;
   $24 = $23 | 48;
   $25 = $24&255;
   $26 = ((($$111)) + -1|0);
   HEAP8[$26>>0] = $25;
   $27 = (($$012>>>0) / 10)&-1;
   $28 = ($$012>>>0)<(10);
   if ($28) {
    $$1$lcssa = $26;
    break;
   } else {
    $$012 = $27;$$111 = $26;
   }
  }
 }
 return ($$1$lcssa|0);
}
function _strerror($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (___pthread_self_104()|0);
 $2 = ((($1)) + 188|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = (___strerror_l($0,$3)|0);
 return ($4|0);
}
function _memchr($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$035$lcssa = 0, $$035$lcssa65 = 0, $$03555 = 0, $$036$lcssa = 0, $$036$lcssa64 = 0, $$03654 = 0, $$046 = 0, $$137$lcssa = 0, $$13745 = 0, $$140 = 0, $$2 = 0, $$23839 = 0, $$3 = 0, $$lcssa = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond53 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $1 & 255;
 $4 = $0;
 $5 = $4 & 3;
 $6 = ($5|0)!=(0);
 $7 = ($2|0)!=(0);
 $or$cond53 = $7 & $6;
 L1: do {
  if ($or$cond53) {
   $8 = $1&255;
   $$03555 = $0;$$03654 = $2;
   while(1) {
    $9 = HEAP8[$$03555>>0]|0;
    $10 = ($9<<24>>24)==($8<<24>>24);
    if ($10) {
     $$035$lcssa65 = $$03555;$$036$lcssa64 = $$03654;
     label = 6;
     break L1;
    }
    $11 = ((($$03555)) + 1|0);
    $12 = (($$03654) + -1)|0;
    $13 = $11;
    $14 = $13 & 3;
    $15 = ($14|0)!=(0);
    $16 = ($12|0)!=(0);
    $or$cond = $16 & $15;
    if ($or$cond) {
     $$03555 = $11;$$03654 = $12;
    } else {
     $$035$lcssa = $11;$$036$lcssa = $12;$$lcssa = $16;
     label = 5;
     break;
    }
   }
  } else {
   $$035$lcssa = $0;$$036$lcssa = $2;$$lcssa = $7;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($$lcssa) {
   $$035$lcssa65 = $$035$lcssa;$$036$lcssa64 = $$036$lcssa;
   label = 6;
  } else {
   $$2 = $$035$lcssa;$$3 = 0;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $17 = HEAP8[$$035$lcssa65>>0]|0;
   $18 = $1&255;
   $19 = ($17<<24>>24)==($18<<24>>24);
   if ($19) {
    $$2 = $$035$lcssa65;$$3 = $$036$lcssa64;
   } else {
    $20 = Math_imul($3, 16843009)|0;
    $21 = ($$036$lcssa64>>>0)>(3);
    L11: do {
     if ($21) {
      $$046 = $$035$lcssa65;$$13745 = $$036$lcssa64;
      while(1) {
       $22 = HEAP32[$$046>>2]|0;
       $23 = $22 ^ $20;
       $24 = (($23) + -16843009)|0;
       $25 = $23 & -2139062144;
       $26 = $25 ^ -2139062144;
       $27 = $26 & $24;
       $28 = ($27|0)==(0);
       if (!($28)) {
        break;
       }
       $29 = ((($$046)) + 4|0);
       $30 = (($$13745) + -4)|0;
       $31 = ($30>>>0)>(3);
       if ($31) {
        $$046 = $29;$$13745 = $30;
       } else {
        $$0$lcssa = $29;$$137$lcssa = $30;
        label = 11;
        break L11;
       }
      }
      $$140 = $$046;$$23839 = $$13745;
     } else {
      $$0$lcssa = $$035$lcssa65;$$137$lcssa = $$036$lcssa64;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $32 = ($$137$lcssa|0)==(0);
     if ($32) {
      $$2 = $$0$lcssa;$$3 = 0;
      break;
     } else {
      $$140 = $$0$lcssa;$$23839 = $$137$lcssa;
     }
    }
    while(1) {
     $33 = HEAP8[$$140>>0]|0;
     $34 = ($33<<24>>24)==($18<<24>>24);
     if ($34) {
      $$2 = $$140;$$3 = $$23839;
      break L8;
     }
     $35 = ((($$140)) + 1|0);
     $36 = (($$23839) + -1)|0;
     $37 = ($36|0)==(0);
     if ($37) {
      $$2 = $35;$$3 = 0;
      break;
     } else {
      $$140 = $35;$$23839 = $36;
     }
    }
   }
  }
 } while(0);
 $38 = ($$3|0)!=(0);
 $39 = $38 ? $$2 : 0;
 return ($39|0);
}
function _pad_684($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa = 0, $$011 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(256|0);
 $5 = sp;
 $6 = $4 & 73728;
 $7 = ($6|0)==(0);
 $8 = ($2|0)>($3|0);
 $or$cond = $8 & $7;
 if ($or$cond) {
  $9 = (($2) - ($3))|0;
  $10 = ($9>>>0)<(256);
  $11 = $10 ? $9 : 256;
  _memset(($5|0),($1|0),($11|0))|0;
  $12 = ($9>>>0)>(255);
  if ($12) {
   $13 = (($2) - ($3))|0;
   $$011 = $9;
   while(1) {
    _out($0,$5,256);
    $14 = (($$011) + -256)|0;
    $15 = ($14>>>0)>(255);
    if ($15) {
     $$011 = $14;
    } else {
     break;
    }
   }
   $16 = $13 & 255;
   $$0$lcssa = $16;
  } else {
   $$0$lcssa = $9;
  }
  _out($0,$5,$$0$lcssa);
 }
 STACKTOP = sp;return;
}
function _wctomb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 if ($2) {
  $$0 = 0;
 } else {
  $3 = (_wcrtomb($0,$1,0)|0);
  $$0 = $3;
 }
 return ($$0|0);
}
function _fmt_fp($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = +$1;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$ = 0, $$$ = 0, $$$$559 = 0.0, $$$3484 = 0, $$$3484691 = 0, $$$3484692 = 0, $$$3501 = 0, $$$4502 = 0, $$$542 = 0.0, $$$559 = 0.0, $$0 = 0, $$0463$lcssa = 0, $$0463584 = 0, $$0464594 = 0, $$0471 = 0.0, $$0479 = 0, $$0487642 = 0, $$0488 = 0, $$0488653 = 0, $$0488655 = 0;
 var $$0496$$9 = 0, $$0497654 = 0, $$0498 = 0, $$0509582 = 0.0, $$0510 = 0, $$0511 = 0, $$0514637 = 0, $$0520 = 0, $$0521 = 0, $$0521$ = 0, $$0523 = 0, $$0525 = 0, $$0527 = 0, $$0527629 = 0, $$0527631 = 0, $$0530636 = 0, $$1465 = 0, $$1467 = 0.0, $$1469 = 0.0, $$1472 = 0.0;
 var $$1480 = 0, $$1482$lcssa = 0, $$1482661 = 0, $$1489641 = 0, $$1499$lcssa = 0, $$1499660 = 0, $$1508583 = 0, $$1512$lcssa = 0, $$1512607 = 0, $$1515 = 0, $$1524 = 0, $$1526 = 0, $$1528614 = 0, $$1531$lcssa = 0, $$1531630 = 0, $$1598 = 0, $$2 = 0, $$2473 = 0.0, $$2476 = 0, $$2476$$547 = 0;
 var $$2476$$549 = 0, $$2483$ph = 0, $$2500 = 0, $$2513 = 0, $$2516618 = 0, $$2529 = 0, $$2532617 = 0, $$3 = 0.0, $$3477 = 0, $$3484$lcssa = 0, $$3484648 = 0, $$3501$lcssa = 0, $$3501647 = 0, $$3533613 = 0, $$4 = 0.0, $$4478$lcssa = 0, $$4478590 = 0, $$4492 = 0, $$4502 = 0, $$4518 = 0;
 var $$5$lcssa = 0, $$534$ = 0, $$539 = 0, $$539$ = 0, $$542 = 0.0, $$546 = 0, $$548 = 0, $$5486$lcssa = 0, $$5486623 = 0, $$5493597 = 0, $$5519$ph = 0, $$555 = 0, $$556 = 0, $$559 = 0.0, $$5602 = 0, $$6 = 0, $$6494589 = 0, $$7495601 = 0, $$7505 = 0, $$7505$ = 0;
 var $$7505$ph = 0, $$8 = 0, $$9$ph = 0, $$lcssa673 = 0, $$neg = 0, $$neg567 = 0, $$pn = 0, $$pn566 = 0, $$pr = 0, $$pr564 = 0, $$pre = 0, $$pre$phi690Z2D = 0, $$pre689 = 0, $$sink545$lcssa = 0, $$sink545622 = 0, $$sink562 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0;
 var $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0.0, $117 = 0.0, $118 = 0.0, $119 = 0, $12 = 0, $120 = 0;
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0;
 var $14 = 0.0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0;
 var $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0.0, $229 = 0.0, $23 = 0;
 var $230 = 0, $231 = 0.0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0;
 var $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0;
 var $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0;
 var $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0;
 var $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0;
 var $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0;
 var $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0.0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0;
 var $358 = 0, $359 = 0, $36 = 0.0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0;
 var $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0.0, $52 = 0, $53 = 0, $54 = 0, $55 = 0.0, $56 = 0.0, $57 = 0.0, $58 = 0.0, $59 = 0.0, $6 = 0, $60 = 0.0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0.0, $88 = 0.0, $89 = 0.0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $exitcond = 0;
 var $narrow = 0, $not$ = 0, $notlhs = 0, $notrhs = 0, $or$cond = 0, $or$cond3$not = 0, $or$cond537 = 0, $or$cond541 = 0, $or$cond544 = 0, $or$cond554 = 0, $or$cond6 = 0, $scevgep684 = 0, $scevgep684685 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 560|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(560|0);
 $6 = sp + 8|0;
 $7 = sp;
 $8 = sp + 524|0;
 $9 = $8;
 $10 = sp + 512|0;
 HEAP32[$7>>2] = 0;
 $11 = ((($10)) + 12|0);
 (___DOUBLE_BITS_685($1)|0);
 $12 = tempRet0;
 $13 = ($12|0)<(0);
 if ($13) {
  $14 = -$1;
  $$0471 = $14;$$0520 = 1;$$0521 = 1628;
 } else {
  $15 = $4 & 2048;
  $16 = ($15|0)==(0);
  $17 = $4 & 1;
  $18 = ($17|0)==(0);
  $$ = $18 ? (1629) : (1634);
  $$$ = $16 ? $$ : (1631);
  $19 = $4 & 2049;
  $narrow = ($19|0)!=(0);
  $$534$ = $narrow&1;
  $$0471 = $1;$$0520 = $$534$;$$0521 = $$$;
 }
 (___DOUBLE_BITS_685($$0471)|0);
 $20 = tempRet0;
 $21 = $20 & 2146435072;
 $22 = ($21>>>0)<(2146435072);
 $23 = (0)<(0);
 $24 = ($21|0)==(2146435072);
 $25 = $24 & $23;
 $26 = $22 | $25;
 do {
  if ($26) {
   $35 = (+_frexpl($$0471,$7));
   $36 = $35 * 2.0;
   $37 = $36 != 0.0;
   if ($37) {
    $38 = HEAP32[$7>>2]|0;
    $39 = (($38) + -1)|0;
    HEAP32[$7>>2] = $39;
   }
   $40 = $5 | 32;
   $41 = ($40|0)==(97);
   if ($41) {
    $42 = $5 & 32;
    $43 = ($42|0)==(0);
    $44 = ((($$0521)) + 9|0);
    $$0521$ = $43 ? $$0521 : $44;
    $45 = $$0520 | 2;
    $46 = ($3>>>0)>(11);
    $47 = (12 - ($3))|0;
    $48 = ($47|0)==(0);
    $49 = $46 | $48;
    do {
     if ($49) {
      $$1472 = $36;
     } else {
      $$0509582 = 8.0;$$1508583 = $47;
      while(1) {
       $50 = (($$1508583) + -1)|0;
       $51 = $$0509582 * 16.0;
       $52 = ($50|0)==(0);
       if ($52) {
        break;
       } else {
        $$0509582 = $51;$$1508583 = $50;
       }
      }
      $53 = HEAP8[$$0521$>>0]|0;
      $54 = ($53<<24>>24)==(45);
      if ($54) {
       $55 = -$36;
       $56 = $55 - $51;
       $57 = $51 + $56;
       $58 = -$57;
       $$1472 = $58;
       break;
      } else {
       $59 = $36 + $51;
       $60 = $59 - $51;
       $$1472 = $60;
       break;
      }
     }
    } while(0);
    $61 = HEAP32[$7>>2]|0;
    $62 = ($61|0)<(0);
    $63 = (0 - ($61))|0;
    $64 = $62 ? $63 : $61;
    $65 = ($64|0)<(0);
    $66 = $65 << 31 >> 31;
    $67 = (_fmt_u($64,$66,$11)|0);
    $68 = ($67|0)==($11|0);
    if ($68) {
     $69 = ((($10)) + 11|0);
     HEAP8[$69>>0] = 48;
     $$0511 = $69;
    } else {
     $$0511 = $67;
    }
    $70 = $61 >> 31;
    $71 = $70 & 2;
    $72 = (($71) + 43)|0;
    $73 = $72&255;
    $74 = ((($$0511)) + -1|0);
    HEAP8[$74>>0] = $73;
    $75 = (($5) + 15)|0;
    $76 = $75&255;
    $77 = ((($$0511)) + -2|0);
    HEAP8[$77>>0] = $76;
    $notrhs = ($3|0)<(1);
    $78 = $4 & 8;
    $79 = ($78|0)==(0);
    $$0523 = $8;$$2473 = $$1472;
    while(1) {
     $80 = (~~(($$2473)));
     $81 = (1659 + ($80)|0);
     $82 = HEAP8[$81>>0]|0;
     $83 = $82&255;
     $84 = $83 | $42;
     $85 = $84&255;
     $86 = ((($$0523)) + 1|0);
     HEAP8[$$0523>>0] = $85;
     $87 = (+($80|0));
     $88 = $$2473 - $87;
     $89 = $88 * 16.0;
     $90 = $86;
     $91 = (($90) - ($9))|0;
     $92 = ($91|0)==(1);
     if ($92) {
      $notlhs = $89 == 0.0;
      $or$cond3$not = $notrhs & $notlhs;
      $or$cond = $79 & $or$cond3$not;
      if ($or$cond) {
       $$1524 = $86;
      } else {
       $93 = ((($$0523)) + 2|0);
       HEAP8[$86>>0] = 46;
       $$1524 = $93;
      }
     } else {
      $$1524 = $86;
     }
     $94 = $89 != 0.0;
     if ($94) {
      $$0523 = $$1524;$$2473 = $89;
     } else {
      break;
     }
    }
    $95 = ($3|0)!=(0);
    $96 = $77;
    $97 = $11;
    $98 = $$1524;
    $99 = (($98) - ($9))|0;
    $100 = (($97) - ($96))|0;
    $101 = (($99) + -2)|0;
    $102 = ($101|0)<($3|0);
    $or$cond537 = $95 & $102;
    $103 = (($3) + 2)|0;
    $$pn = $or$cond537 ? $103 : $99;
    $$0525 = (($100) + ($45))|0;
    $104 = (($$0525) + ($$pn))|0;
    _pad_684($0,32,$2,$104,$4);
    _out($0,$$0521$,$45);
    $105 = $4 ^ 65536;
    _pad_684($0,48,$2,$104,$105);
    _out($0,$8,$99);
    $106 = (($$pn) - ($99))|0;
    _pad_684($0,48,$106,0,0);
    _out($0,$77,$100);
    $107 = $4 ^ 8192;
    _pad_684($0,32,$2,$104,$107);
    $$sink562 = $104;
    break;
   }
   $108 = ($3|0)<(0);
   $$539 = $108 ? 6 : $3;
   if ($37) {
    $109 = $36 * 268435456.0;
    $110 = HEAP32[$7>>2]|0;
    $111 = (($110) + -28)|0;
    HEAP32[$7>>2] = $111;
    $$3 = $109;$$pr = $111;
   } else {
    $$pre = HEAP32[$7>>2]|0;
    $$3 = $36;$$pr = $$pre;
   }
   $112 = ($$pr|0)<(0);
   $113 = ((($6)) + 288|0);
   $$556 = $112 ? $6 : $113;
   $$0498 = $$556;$$4 = $$3;
   while(1) {
    $114 = (~~(($$4))>>>0);
    HEAP32[$$0498>>2] = $114;
    $115 = ((($$0498)) + 4|0);
    $116 = (+($114>>>0));
    $117 = $$4 - $116;
    $118 = $117 * 1.0E+9;
    $119 = $118 != 0.0;
    if ($119) {
     $$0498 = $115;$$4 = $118;
    } else {
     break;
    }
   }
   $120 = ($$pr|0)>(0);
   if ($120) {
    $$1482661 = $$556;$$1499660 = $115;$122 = $$pr;
    while(1) {
     $121 = ($122|0)<(29);
     $123 = $121 ? $122 : 29;
     $$0488653 = ((($$1499660)) + -4|0);
     $124 = ($$0488653>>>0)<($$1482661>>>0);
     if ($124) {
      $$2483$ph = $$1482661;
     } else {
      $$0488655 = $$0488653;$$0497654 = 0;
      while(1) {
       $125 = HEAP32[$$0488655>>2]|0;
       $126 = (_bitshift64Shl(($125|0),0,($123|0))|0);
       $127 = tempRet0;
       $128 = (_i64Add(($126|0),($127|0),($$0497654|0),0)|0);
       $129 = tempRet0;
       $130 = (___uremdi3(($128|0),($129|0),1000000000,0)|0);
       $131 = tempRet0;
       HEAP32[$$0488655>>2] = $130;
       $132 = (___udivdi3(($128|0),($129|0),1000000000,0)|0);
       $133 = tempRet0;
       $$0488 = ((($$0488655)) + -4|0);
       $134 = ($$0488>>>0)<($$1482661>>>0);
       if ($134) {
        break;
       } else {
        $$0488655 = $$0488;$$0497654 = $132;
       }
      }
      $135 = ($132|0)==(0);
      if ($135) {
       $$2483$ph = $$1482661;
      } else {
       $136 = ((($$1482661)) + -4|0);
       HEAP32[$136>>2] = $132;
       $$2483$ph = $136;
      }
     }
     $$2500 = $$1499660;
     while(1) {
      $137 = ($$2500>>>0)>($$2483$ph>>>0);
      if (!($137)) {
       break;
      }
      $138 = ((($$2500)) + -4|0);
      $139 = HEAP32[$138>>2]|0;
      $140 = ($139|0)==(0);
      if ($140) {
       $$2500 = $138;
      } else {
       break;
      }
     }
     $141 = HEAP32[$7>>2]|0;
     $142 = (($141) - ($123))|0;
     HEAP32[$7>>2] = $142;
     $143 = ($142|0)>(0);
     if ($143) {
      $$1482661 = $$2483$ph;$$1499660 = $$2500;$122 = $142;
     } else {
      $$1482$lcssa = $$2483$ph;$$1499$lcssa = $$2500;$$pr564 = $142;
      break;
     }
    }
   } else {
    $$1482$lcssa = $$556;$$1499$lcssa = $115;$$pr564 = $$pr;
   }
   $144 = ($$pr564|0)<(0);
   if ($144) {
    $145 = (($$539) + 25)|0;
    $146 = (($145|0) / 9)&-1;
    $147 = (($146) + 1)|0;
    $148 = ($40|0)==(102);
    $$3484648 = $$1482$lcssa;$$3501647 = $$1499$lcssa;$150 = $$pr564;
    while(1) {
     $149 = (0 - ($150))|0;
     $151 = ($149|0)<(9);
     $152 = $151 ? $149 : 9;
     $153 = ($$3484648>>>0)<($$3501647>>>0);
     if ($153) {
      $157 = 1 << $152;
      $158 = (($157) + -1)|0;
      $159 = 1000000000 >>> $152;
      $$0487642 = 0;$$1489641 = $$3484648;
      while(1) {
       $160 = HEAP32[$$1489641>>2]|0;
       $161 = $160 & $158;
       $162 = $160 >>> $152;
       $163 = (($162) + ($$0487642))|0;
       HEAP32[$$1489641>>2] = $163;
       $164 = Math_imul($161, $159)|0;
       $165 = ((($$1489641)) + 4|0);
       $166 = ($165>>>0)<($$3501647>>>0);
       if ($166) {
        $$0487642 = $164;$$1489641 = $165;
       } else {
        break;
       }
      }
      $167 = HEAP32[$$3484648>>2]|0;
      $168 = ($167|0)==(0);
      $169 = ((($$3484648)) + 4|0);
      $$$3484 = $168 ? $169 : $$3484648;
      $170 = ($164|0)==(0);
      if ($170) {
       $$$3484692 = $$$3484;$$4502 = $$3501647;
      } else {
       $171 = ((($$3501647)) + 4|0);
       HEAP32[$$3501647>>2] = $164;
       $$$3484692 = $$$3484;$$4502 = $171;
      }
     } else {
      $154 = HEAP32[$$3484648>>2]|0;
      $155 = ($154|0)==(0);
      $156 = ((($$3484648)) + 4|0);
      $$$3484691 = $155 ? $156 : $$3484648;
      $$$3484692 = $$$3484691;$$4502 = $$3501647;
     }
     $172 = $148 ? $$556 : $$$3484692;
     $173 = $$4502;
     $174 = $172;
     $175 = (($173) - ($174))|0;
     $176 = $175 >> 2;
     $177 = ($176|0)>($147|0);
     $178 = (($172) + ($147<<2)|0);
     $$$4502 = $177 ? $178 : $$4502;
     $179 = HEAP32[$7>>2]|0;
     $180 = (($179) + ($152))|0;
     HEAP32[$7>>2] = $180;
     $181 = ($180|0)<(0);
     if ($181) {
      $$3484648 = $$$3484692;$$3501647 = $$$4502;$150 = $180;
     } else {
      $$3484$lcssa = $$$3484692;$$3501$lcssa = $$$4502;
      break;
     }
    }
   } else {
    $$3484$lcssa = $$1482$lcssa;$$3501$lcssa = $$1499$lcssa;
   }
   $182 = ($$3484$lcssa>>>0)<($$3501$lcssa>>>0);
   $183 = $$556;
   if ($182) {
    $184 = $$3484$lcssa;
    $185 = (($183) - ($184))|0;
    $186 = $185 >> 2;
    $187 = ($186*9)|0;
    $188 = HEAP32[$$3484$lcssa>>2]|0;
    $189 = ($188>>>0)<(10);
    if ($189) {
     $$1515 = $187;
    } else {
     $$0514637 = $187;$$0530636 = 10;
     while(1) {
      $190 = ($$0530636*10)|0;
      $191 = (($$0514637) + 1)|0;
      $192 = ($188>>>0)<($190>>>0);
      if ($192) {
       $$1515 = $191;
       break;
      } else {
       $$0514637 = $191;$$0530636 = $190;
      }
     }
    }
   } else {
    $$1515 = 0;
   }
   $193 = ($40|0)!=(102);
   $194 = $193 ? $$1515 : 0;
   $195 = (($$539) - ($194))|0;
   $196 = ($40|0)==(103);
   $197 = ($$539|0)!=(0);
   $198 = $197 & $196;
   $$neg = $198 << 31 >> 31;
   $199 = (($195) + ($$neg))|0;
   $200 = $$3501$lcssa;
   $201 = (($200) - ($183))|0;
   $202 = $201 >> 2;
   $203 = ($202*9)|0;
   $204 = (($203) + -9)|0;
   $205 = ($199|0)<($204|0);
   if ($205) {
    $206 = ((($$556)) + 4|0);
    $207 = (($199) + 9216)|0;
    $208 = (($207|0) / 9)&-1;
    $209 = (($208) + -1024)|0;
    $210 = (($206) + ($209<<2)|0);
    $211 = (($207|0) % 9)&-1;
    $$0527629 = (($211) + 1)|0;
    $212 = ($$0527629|0)<(9);
    if ($212) {
     $$0527631 = $$0527629;$$1531630 = 10;
     while(1) {
      $213 = ($$1531630*10)|0;
      $$0527 = (($$0527631) + 1)|0;
      $exitcond = ($$0527|0)==(9);
      if ($exitcond) {
       $$1531$lcssa = $213;
       break;
      } else {
       $$0527631 = $$0527;$$1531630 = $213;
      }
     }
    } else {
     $$1531$lcssa = 10;
    }
    $214 = HEAP32[$210>>2]|0;
    $215 = (($214>>>0) % ($$1531$lcssa>>>0))&-1;
    $216 = ($215|0)==(0);
    $217 = ((($210)) + 4|0);
    $218 = ($217|0)==($$3501$lcssa|0);
    $or$cond541 = $218 & $216;
    if ($or$cond541) {
     $$4492 = $210;$$4518 = $$1515;$$8 = $$3484$lcssa;
    } else {
     $219 = (($214>>>0) / ($$1531$lcssa>>>0))&-1;
     $220 = $219 & 1;
     $221 = ($220|0)==(0);
     $$542 = $221 ? 9007199254740992.0 : 9007199254740994.0;
     $222 = (($$1531$lcssa|0) / 2)&-1;
     $223 = ($215>>>0)<($222>>>0);
     $224 = ($215|0)==($222|0);
     $or$cond544 = $218 & $224;
     $$559 = $or$cond544 ? 1.0 : 1.5;
     $$$559 = $223 ? 0.5 : $$559;
     $225 = ($$0520|0)==(0);
     if ($225) {
      $$1467 = $$$559;$$1469 = $$542;
     } else {
      $226 = HEAP8[$$0521>>0]|0;
      $227 = ($226<<24>>24)==(45);
      $228 = -$$542;
      $229 = -$$$559;
      $$$542 = $227 ? $228 : $$542;
      $$$$559 = $227 ? $229 : $$$559;
      $$1467 = $$$$559;$$1469 = $$$542;
     }
     $230 = (($214) - ($215))|0;
     HEAP32[$210>>2] = $230;
     $231 = $$1469 + $$1467;
     $232 = $231 != $$1469;
     if ($232) {
      $233 = (($230) + ($$1531$lcssa))|0;
      HEAP32[$210>>2] = $233;
      $234 = ($233>>>0)>(999999999);
      if ($234) {
       $$5486623 = $$3484$lcssa;$$sink545622 = $210;
       while(1) {
        $235 = ((($$sink545622)) + -4|0);
        HEAP32[$$sink545622>>2] = 0;
        $236 = ($235>>>0)<($$5486623>>>0);
        if ($236) {
         $237 = ((($$5486623)) + -4|0);
         HEAP32[$237>>2] = 0;
         $$6 = $237;
        } else {
         $$6 = $$5486623;
        }
        $238 = HEAP32[$235>>2]|0;
        $239 = (($238) + 1)|0;
        HEAP32[$235>>2] = $239;
        $240 = ($239>>>0)>(999999999);
        if ($240) {
         $$5486623 = $$6;$$sink545622 = $235;
        } else {
         $$5486$lcssa = $$6;$$sink545$lcssa = $235;
         break;
        }
       }
      } else {
       $$5486$lcssa = $$3484$lcssa;$$sink545$lcssa = $210;
      }
      $241 = $$5486$lcssa;
      $242 = (($183) - ($241))|0;
      $243 = $242 >> 2;
      $244 = ($243*9)|0;
      $245 = HEAP32[$$5486$lcssa>>2]|0;
      $246 = ($245>>>0)<(10);
      if ($246) {
       $$4492 = $$sink545$lcssa;$$4518 = $244;$$8 = $$5486$lcssa;
      } else {
       $$2516618 = $244;$$2532617 = 10;
       while(1) {
        $247 = ($$2532617*10)|0;
        $248 = (($$2516618) + 1)|0;
        $249 = ($245>>>0)<($247>>>0);
        if ($249) {
         $$4492 = $$sink545$lcssa;$$4518 = $248;$$8 = $$5486$lcssa;
         break;
        } else {
         $$2516618 = $248;$$2532617 = $247;
        }
       }
      }
     } else {
      $$4492 = $210;$$4518 = $$1515;$$8 = $$3484$lcssa;
     }
    }
    $250 = ((($$4492)) + 4|0);
    $251 = ($$3501$lcssa>>>0)>($250>>>0);
    $$$3501 = $251 ? $250 : $$3501$lcssa;
    $$5519$ph = $$4518;$$7505$ph = $$$3501;$$9$ph = $$8;
   } else {
    $$5519$ph = $$1515;$$7505$ph = $$3501$lcssa;$$9$ph = $$3484$lcssa;
   }
   $$7505 = $$7505$ph;
   while(1) {
    $252 = ($$7505>>>0)>($$9$ph>>>0);
    if (!($252)) {
     $$lcssa673 = 0;
     break;
    }
    $253 = ((($$7505)) + -4|0);
    $254 = HEAP32[$253>>2]|0;
    $255 = ($254|0)==(0);
    if ($255) {
     $$7505 = $253;
    } else {
     $$lcssa673 = 1;
     break;
    }
   }
   $256 = (0 - ($$5519$ph))|0;
   do {
    if ($196) {
     $not$ = $197 ^ 1;
     $257 = $not$&1;
     $$539$ = (($257) + ($$539))|0;
     $258 = ($$539$|0)>($$5519$ph|0);
     $259 = ($$5519$ph|0)>(-5);
     $or$cond6 = $258 & $259;
     if ($or$cond6) {
      $260 = (($5) + -1)|0;
      $$neg567 = (($$539$) + -1)|0;
      $261 = (($$neg567) - ($$5519$ph))|0;
      $$0479 = $260;$$2476 = $261;
     } else {
      $262 = (($5) + -2)|0;
      $263 = (($$539$) + -1)|0;
      $$0479 = $262;$$2476 = $263;
     }
     $264 = $4 & 8;
     $265 = ($264|0)==(0);
     if ($265) {
      if ($$lcssa673) {
       $266 = ((($$7505)) + -4|0);
       $267 = HEAP32[$266>>2]|0;
       $268 = ($267|0)==(0);
       if ($268) {
        $$2529 = 9;
       } else {
        $269 = (($267>>>0) % 10)&-1;
        $270 = ($269|0)==(0);
        if ($270) {
         $$1528614 = 0;$$3533613 = 10;
         while(1) {
          $271 = ($$3533613*10)|0;
          $272 = (($$1528614) + 1)|0;
          $273 = (($267>>>0) % ($271>>>0))&-1;
          $274 = ($273|0)==(0);
          if ($274) {
           $$1528614 = $272;$$3533613 = $271;
          } else {
           $$2529 = $272;
           break;
          }
         }
        } else {
         $$2529 = 0;
        }
       }
      } else {
       $$2529 = 9;
      }
      $275 = $$0479 | 32;
      $276 = ($275|0)==(102);
      $277 = $$7505;
      $278 = (($277) - ($183))|0;
      $279 = $278 >> 2;
      $280 = ($279*9)|0;
      $281 = (($280) + -9)|0;
      if ($276) {
       $282 = (($281) - ($$2529))|0;
       $283 = ($282|0)>(0);
       $$546 = $283 ? $282 : 0;
       $284 = ($$2476|0)<($$546|0);
       $$2476$$547 = $284 ? $$2476 : $$546;
       $$1480 = $$0479;$$3477 = $$2476$$547;$$pre$phi690Z2D = 0;
       break;
      } else {
       $285 = (($281) + ($$5519$ph))|0;
       $286 = (($285) - ($$2529))|0;
       $287 = ($286|0)>(0);
       $$548 = $287 ? $286 : 0;
       $288 = ($$2476|0)<($$548|0);
       $$2476$$549 = $288 ? $$2476 : $$548;
       $$1480 = $$0479;$$3477 = $$2476$$549;$$pre$phi690Z2D = 0;
       break;
      }
     } else {
      $$1480 = $$0479;$$3477 = $$2476;$$pre$phi690Z2D = $264;
     }
    } else {
     $$pre689 = $4 & 8;
     $$1480 = $5;$$3477 = $$539;$$pre$phi690Z2D = $$pre689;
    }
   } while(0);
   $289 = $$3477 | $$pre$phi690Z2D;
   $290 = ($289|0)!=(0);
   $291 = $290&1;
   $292 = $$1480 | 32;
   $293 = ($292|0)==(102);
   if ($293) {
    $294 = ($$5519$ph|0)>(0);
    $295 = $294 ? $$5519$ph : 0;
    $$2513 = 0;$$pn566 = $295;
   } else {
    $296 = ($$5519$ph|0)<(0);
    $297 = $296 ? $256 : $$5519$ph;
    $298 = ($297|0)<(0);
    $299 = $298 << 31 >> 31;
    $300 = (_fmt_u($297,$299,$11)|0);
    $301 = $11;
    $302 = $300;
    $303 = (($301) - ($302))|0;
    $304 = ($303|0)<(2);
    if ($304) {
     $$1512607 = $300;
     while(1) {
      $305 = ((($$1512607)) + -1|0);
      HEAP8[$305>>0] = 48;
      $306 = $305;
      $307 = (($301) - ($306))|0;
      $308 = ($307|0)<(2);
      if ($308) {
       $$1512607 = $305;
      } else {
       $$1512$lcssa = $305;
       break;
      }
     }
    } else {
     $$1512$lcssa = $300;
    }
    $309 = $$5519$ph >> 31;
    $310 = $309 & 2;
    $311 = (($310) + 43)|0;
    $312 = $311&255;
    $313 = ((($$1512$lcssa)) + -1|0);
    HEAP8[$313>>0] = $312;
    $314 = $$1480&255;
    $315 = ((($$1512$lcssa)) + -2|0);
    HEAP8[$315>>0] = $314;
    $316 = $315;
    $317 = (($301) - ($316))|0;
    $$2513 = $315;$$pn566 = $317;
   }
   $318 = (($$0520) + 1)|0;
   $319 = (($318) + ($$3477))|0;
   $$1526 = (($319) + ($291))|0;
   $320 = (($$1526) + ($$pn566))|0;
   _pad_684($0,32,$2,$320,$4);
   _out($0,$$0521,$$0520);
   $321 = $4 ^ 65536;
   _pad_684($0,48,$2,$320,$321);
   if ($293) {
    $322 = ($$9$ph>>>0)>($$556>>>0);
    $$0496$$9 = $322 ? $$556 : $$9$ph;
    $323 = ((($8)) + 9|0);
    $324 = $323;
    $325 = ((($8)) + 8|0);
    $$5493597 = $$0496$$9;
    while(1) {
     $326 = HEAP32[$$5493597>>2]|0;
     $327 = (_fmt_u($326,0,$323)|0);
     $328 = ($$5493597|0)==($$0496$$9|0);
     if ($328) {
      $334 = ($327|0)==($323|0);
      if ($334) {
       HEAP8[$325>>0] = 48;
       $$1465 = $325;
      } else {
       $$1465 = $327;
      }
     } else {
      $329 = ($327>>>0)>($8>>>0);
      if ($329) {
       $330 = $327;
       $331 = (($330) - ($9))|0;
       _memset(($8|0),48,($331|0))|0;
       $$0464594 = $327;
       while(1) {
        $332 = ((($$0464594)) + -1|0);
        $333 = ($332>>>0)>($8>>>0);
        if ($333) {
         $$0464594 = $332;
        } else {
         $$1465 = $332;
         break;
        }
       }
      } else {
       $$1465 = $327;
      }
     }
     $335 = $$1465;
     $336 = (($324) - ($335))|0;
     _out($0,$$1465,$336);
     $337 = ((($$5493597)) + 4|0);
     $338 = ($337>>>0)>($$556>>>0);
     if ($338) {
      break;
     } else {
      $$5493597 = $337;
     }
    }
    $339 = ($289|0)==(0);
    if (!($339)) {
     _out($0,3580,1);
    }
    $340 = ($337>>>0)<($$7505>>>0);
    $341 = ($$3477|0)>(0);
    $342 = $340 & $341;
    if ($342) {
     $$4478590 = $$3477;$$6494589 = $337;
     while(1) {
      $343 = HEAP32[$$6494589>>2]|0;
      $344 = (_fmt_u($343,0,$323)|0);
      $345 = ($344>>>0)>($8>>>0);
      if ($345) {
       $346 = $344;
       $347 = (($346) - ($9))|0;
       _memset(($8|0),48,($347|0))|0;
       $$0463584 = $344;
       while(1) {
        $348 = ((($$0463584)) + -1|0);
        $349 = ($348>>>0)>($8>>>0);
        if ($349) {
         $$0463584 = $348;
        } else {
         $$0463$lcssa = $348;
         break;
        }
       }
      } else {
       $$0463$lcssa = $344;
      }
      $350 = ($$4478590|0)<(9);
      $351 = $350 ? $$4478590 : 9;
      _out($0,$$0463$lcssa,$351);
      $352 = ((($$6494589)) + 4|0);
      $353 = (($$4478590) + -9)|0;
      $354 = ($352>>>0)<($$7505>>>0);
      $355 = ($$4478590|0)>(9);
      $356 = $354 & $355;
      if ($356) {
       $$4478590 = $353;$$6494589 = $352;
      } else {
       $$4478$lcssa = $353;
       break;
      }
     }
    } else {
     $$4478$lcssa = $$3477;
    }
    $357 = (($$4478$lcssa) + 9)|0;
    _pad_684($0,48,$357,9,0);
   } else {
    $358 = ((($$9$ph)) + 4|0);
    $$7505$ = $$lcssa673 ? $$7505 : $358;
    $359 = ($$3477|0)>(-1);
    if ($359) {
     $360 = ((($8)) + 9|0);
     $361 = ($$pre$phi690Z2D|0)==(0);
     $362 = $360;
     $363 = (0 - ($9))|0;
     $364 = ((($8)) + 8|0);
     $$5602 = $$3477;$$7495601 = $$9$ph;
     while(1) {
      $365 = HEAP32[$$7495601>>2]|0;
      $366 = (_fmt_u($365,0,$360)|0);
      $367 = ($366|0)==($360|0);
      if ($367) {
       HEAP8[$364>>0] = 48;
       $$0 = $364;
      } else {
       $$0 = $366;
      }
      $368 = ($$7495601|0)==($$9$ph|0);
      do {
       if ($368) {
        $372 = ((($$0)) + 1|0);
        _out($0,$$0,1);
        $373 = ($$5602|0)<(1);
        $or$cond554 = $361 & $373;
        if ($or$cond554) {
         $$2 = $372;
         break;
        }
        _out($0,3580,1);
        $$2 = $372;
       } else {
        $369 = ($$0>>>0)>($8>>>0);
        if (!($369)) {
         $$2 = $$0;
         break;
        }
        $scevgep684 = (($$0) + ($363)|0);
        $scevgep684685 = $scevgep684;
        _memset(($8|0),48,($scevgep684685|0))|0;
        $$1598 = $$0;
        while(1) {
         $370 = ((($$1598)) + -1|0);
         $371 = ($370>>>0)>($8>>>0);
         if ($371) {
          $$1598 = $370;
         } else {
          $$2 = $370;
          break;
         }
        }
       }
      } while(0);
      $374 = $$2;
      $375 = (($362) - ($374))|0;
      $376 = ($$5602|0)>($375|0);
      $377 = $376 ? $375 : $$5602;
      _out($0,$$2,$377);
      $378 = (($$5602) - ($375))|0;
      $379 = ((($$7495601)) + 4|0);
      $380 = ($379>>>0)<($$7505$>>>0);
      $381 = ($378|0)>(-1);
      $382 = $380 & $381;
      if ($382) {
       $$5602 = $378;$$7495601 = $379;
      } else {
       $$5$lcssa = $378;
       break;
      }
     }
    } else {
     $$5$lcssa = $$3477;
    }
    $383 = (($$5$lcssa) + 18)|0;
    _pad_684($0,48,$383,18,0);
    $384 = $11;
    $385 = $$2513;
    $386 = (($384) - ($385))|0;
    _out($0,$$2513,$386);
   }
   $387 = $4 ^ 8192;
   _pad_684($0,32,$2,$320,$387);
   $$sink562 = $320;
  } else {
   $27 = $5 & 32;
   $28 = ($27|0)!=(0);
   $29 = $28 ? 1647 : 1651;
   $30 = ($$0471 != $$0471) | (0.0 != 0.0);
   $31 = $28 ? 3576 : 1655;
   $$0510 = $30 ? $31 : $29;
   $32 = (($$0520) + 3)|0;
   $33 = $4 & -65537;
   _pad_684($0,32,$2,$32,$33);
   _out($0,$$0521,$$0520);
   _out($0,$$0510,3);
   $34 = $4 ^ 8192;
   _pad_684($0,32,$2,$32,$34);
   $$sink562 = $32;
  }
 } while(0);
 $388 = ($$sink562|0)<($2|0);
 $$555 = $388 ? $2 : $$sink562;
 STACKTOP = sp;return ($$555|0);
}
function ___DOUBLE_BITS_685($0) {
 $0 = +$0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $0;$1 = HEAP32[tempDoublePtr>>2]|0;
 $2 = HEAP32[tempDoublePtr+4>>2]|0;
 tempRet0 = ($2);
 return ($1|0);
}
function _frexpl($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_frexp($0,$1));
 return (+$2);
}
function _frexp($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$0 = 0.0, $$016 = 0.0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0.0, $storemerge = 0, $trunc$clear = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $0;$2 = HEAP32[tempDoublePtr>>2]|0;
 $3 = HEAP32[tempDoublePtr+4>>2]|0;
 $4 = (_bitshift64Lshr(($2|0),($3|0),52)|0);
 $5 = tempRet0;
 $6 = $4&65535;
 $trunc$clear = $6 & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $7 = $0 != 0.0;
  if ($7) {
   $8 = $0 * 1.8446744073709552E+19;
   $9 = (+_frexp($8,$1));
   $10 = HEAP32[$1>>2]|0;
   $11 = (($10) + -64)|0;
   $$016 = $9;$storemerge = $11;
  } else {
   $$016 = $0;$storemerge = 0;
  }
  HEAP32[$1>>2] = $storemerge;
  $$0 = $$016;
  break;
 }
 case 2047:  {
  $$0 = $0;
  break;
 }
 default: {
  $12 = $4 & 2047;
  $13 = (($12) + -1022)|0;
  HEAP32[$1>>2] = $13;
  $14 = $3 & -2146435073;
  $15 = $14 | 1071644672;
  HEAP32[tempDoublePtr>>2] = $2;HEAP32[tempDoublePtr+4>>2] = $15;$16 = +HEAPF64[tempDoublePtr>>3];
  $$0 = $16;
 }
 }
 return (+$$0);
}
function _wcrtomb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $not$ = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==(0|0);
 do {
  if ($3) {
   $$0 = 1;
  } else {
   $4 = ($1>>>0)<(128);
   if ($4) {
    $5 = $1&255;
    HEAP8[$0>>0] = $5;
    $$0 = 1;
    break;
   }
   $6 = (___pthread_self_431()|0);
   $7 = ((($6)) + 188|0);
   $8 = HEAP32[$7>>2]|0;
   $9 = HEAP32[$8>>2]|0;
   $not$ = ($9|0)==(0|0);
   if ($not$) {
    $10 = $1 & -128;
    $11 = ($10|0)==(57216);
    if ($11) {
     $13 = $1&255;
     HEAP8[$0>>0] = $13;
     $$0 = 1;
     break;
    } else {
     $12 = (___errno_location()|0);
     HEAP32[$12>>2] = 84;
     $$0 = -1;
     break;
    }
   }
   $14 = ($1>>>0)<(2048);
   if ($14) {
    $15 = $1 >>> 6;
    $16 = $15 | 192;
    $17 = $16&255;
    $18 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $17;
    $19 = $1 & 63;
    $20 = $19 | 128;
    $21 = $20&255;
    HEAP8[$18>>0] = $21;
    $$0 = 2;
    break;
   }
   $22 = ($1>>>0)<(55296);
   $23 = $1 & -8192;
   $24 = ($23|0)==(57344);
   $or$cond = $22 | $24;
   if ($or$cond) {
    $25 = $1 >>> 12;
    $26 = $25 | 224;
    $27 = $26&255;
    $28 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $27;
    $29 = $1 >>> 6;
    $30 = $29 & 63;
    $31 = $30 | 128;
    $32 = $31&255;
    $33 = ((($0)) + 2|0);
    HEAP8[$28>>0] = $32;
    $34 = $1 & 63;
    $35 = $34 | 128;
    $36 = $35&255;
    HEAP8[$33>>0] = $36;
    $$0 = 3;
    break;
   }
   $37 = (($1) + -65536)|0;
   $38 = ($37>>>0)<(1048576);
   if ($38) {
    $39 = $1 >>> 18;
    $40 = $39 | 240;
    $41 = $40&255;
    $42 = ((($0)) + 1|0);
    HEAP8[$0>>0] = $41;
    $43 = $1 >>> 12;
    $44 = $43 & 63;
    $45 = $44 | 128;
    $46 = $45&255;
    $47 = ((($0)) + 2|0);
    HEAP8[$42>>0] = $46;
    $48 = $1 >>> 6;
    $49 = $48 & 63;
    $50 = $49 | 128;
    $51 = $50&255;
    $52 = ((($0)) + 3|0);
    HEAP8[$47>>0] = $51;
    $53 = $1 & 63;
    $54 = $53 | 128;
    $55 = $54&255;
    HEAP8[$52>>0] = $55;
    $$0 = 4;
    break;
   } else {
    $56 = (___errno_location()|0);
    HEAP32[$56>>2] = 84;
    $$0 = -1;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___pthread_self_431() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 return ($0|0);
}
function ___pthread_self_104() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 return ($0|0);
}
function ___strerror_l($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$012$lcssa = 0, $$01214 = 0, $$016 = 0, $$113 = 0, $$115 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $$016 = 0;
 while(1) {
  $3 = (1675 + ($$016)|0);
  $4 = HEAP8[$3>>0]|0;
  $5 = $4&255;
  $6 = ($5|0)==($0|0);
  if ($6) {
   label = 2;
   break;
  }
  $7 = (($$016) + 1)|0;
  $8 = ($7|0)==(87);
  if ($8) {
   $$01214 = 1763;$$115 = 87;
   label = 5;
   break;
  } else {
   $$016 = $7;
  }
 }
 if ((label|0) == 2) {
  $2 = ($$016|0)==(0);
  if ($2) {
   $$012$lcssa = 1763;
  } else {
   $$01214 = 1763;$$115 = $$016;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $$113 = $$01214;
   while(1) {
    $9 = HEAP8[$$113>>0]|0;
    $10 = ($9<<24>>24)==(0);
    $11 = ((($$113)) + 1|0);
    if ($10) {
     break;
    } else {
     $$113 = $11;
    }
   }
   $12 = (($$115) + -1)|0;
   $13 = ($12|0)==(0);
   if ($13) {
    $$012$lcssa = $11;
    break;
   } else {
    $$01214 = $11;$$115 = $12;
    label = 5;
   }
  }
 }
 $14 = ((($1)) + 20|0);
 $15 = HEAP32[$14>>2]|0;
 $16 = (___lctrans($$012$lcssa,$15)|0);
 return ($16|0);
}
function ___lctrans($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (___lctrans_impl($0,$1)|0);
 return ($2|0);
}
function ___lctrans_impl($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(0|0);
 if ($2) {
  $$0 = 0;
 } else {
  $3 = HEAP32[$1>>2]|0;
  $4 = ((($1)) + 4|0);
  $5 = HEAP32[$4>>2]|0;
  $6 = (___mo_lookup($3,$5,$0)|0);
  $$0 = $6;
 }
 $7 = ($$0|0)!=(0|0);
 $8 = $7 ? $$0 : $0;
 return ($8|0);
}
function ___mo_lookup($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$090 = 0, $$094 = 0, $$191 = 0, $$195 = 0, $$4 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond102 = 0, $or$cond104 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = HEAP32[$0>>2]|0;
 $4 = (($3) + 1794895138)|0;
 $5 = ((($0)) + 8|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = (_swapc($6,$4)|0);
 $8 = ((($0)) + 12|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = (_swapc($9,$4)|0);
 $11 = ((($0)) + 16|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = (_swapc($12,$4)|0);
 $14 = $1 >>> 2;
 $15 = ($7>>>0)<($14>>>0);
 L1: do {
  if ($15) {
   $16 = $7 << 2;
   $17 = (($1) - ($16))|0;
   $18 = ($10>>>0)<($17>>>0);
   $19 = ($13>>>0)<($17>>>0);
   $or$cond = $18 & $19;
   if ($or$cond) {
    $20 = $13 | $10;
    $21 = $20 & 3;
    $22 = ($21|0)==(0);
    if ($22) {
     $23 = $10 >>> 2;
     $24 = $13 >>> 2;
     $$090 = 0;$$094 = $7;
     while(1) {
      $25 = $$094 >>> 1;
      $26 = (($$090) + ($25))|0;
      $27 = $26 << 1;
      $28 = (($27) + ($23))|0;
      $29 = (($0) + ($28<<2)|0);
      $30 = HEAP32[$29>>2]|0;
      $31 = (_swapc($30,$4)|0);
      $32 = (($28) + 1)|0;
      $33 = (($0) + ($32<<2)|0);
      $34 = HEAP32[$33>>2]|0;
      $35 = (_swapc($34,$4)|0);
      $36 = ($35>>>0)<($1>>>0);
      $37 = (($1) - ($35))|0;
      $38 = ($31>>>0)<($37>>>0);
      $or$cond102 = $36 & $38;
      if (!($or$cond102)) {
       $$4 = 0;
       break L1;
      }
      $39 = (($35) + ($31))|0;
      $40 = (($0) + ($39)|0);
      $41 = HEAP8[$40>>0]|0;
      $42 = ($41<<24>>24)==(0);
      if (!($42)) {
       $$4 = 0;
       break L1;
      }
      $43 = (($0) + ($35)|0);
      $44 = (_strcmp($2,$43)|0);
      $45 = ($44|0)==(0);
      if ($45) {
       break;
      }
      $62 = ($$094|0)==(1);
      $63 = ($44|0)<(0);
      $64 = (($$094) - ($25))|0;
      $$195 = $63 ? $25 : $64;
      $$191 = $63 ? $$090 : $26;
      if ($62) {
       $$4 = 0;
       break L1;
      } else {
       $$090 = $$191;$$094 = $$195;
      }
     }
     $46 = (($27) + ($24))|0;
     $47 = (($0) + ($46<<2)|0);
     $48 = HEAP32[$47>>2]|0;
     $49 = (_swapc($48,$4)|0);
     $50 = (($46) + 1)|0;
     $51 = (($0) + ($50<<2)|0);
     $52 = HEAP32[$51>>2]|0;
     $53 = (_swapc($52,$4)|0);
     $54 = ($53>>>0)<($1>>>0);
     $55 = (($1) - ($53))|0;
     $56 = ($49>>>0)<($55>>>0);
     $or$cond104 = $54 & $56;
     if ($or$cond104) {
      $57 = (($0) + ($53)|0);
      $58 = (($53) + ($49))|0;
      $59 = (($0) + ($58)|0);
      $60 = HEAP8[$59>>0]|0;
      $61 = ($60<<24>>24)==(0);
      $$ = $61 ? $57 : 0;
      $$4 = $$;
     } else {
      $$4 = 0;
     }
    } else {
     $$4 = 0;
    }
   } else {
    $$4 = 0;
   }
  } else {
   $$4 = 0;
  }
 } while(0);
 return ($$4|0);
}
function _swapc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$ = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(0);
 $3 = (_llvm_bswap_i32(($0|0))|0);
 $$ = $2 ? $0 : $3;
 return ($$|0);
}
function ___fwritex($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$038 = 0, $$042 = 0, $$1 = 0, $$139 = 0, $$141 = 0, $$143 = 0, $$pre = 0, $$pre47 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($2)) + 16|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ($4|0)==(0|0);
 if ($5) {
  $7 = (___towrite($2)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = HEAP32[$3>>2]|0;
   $12 = $$pre;
   label = 5;
  } else {
   $$1 = 0;
  }
 } else {
  $6 = $4;
  $12 = $6;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $9 = ((($2)) + 20|0);
   $10 = HEAP32[$9>>2]|0;
   $11 = (($12) - ($10))|0;
   $13 = ($11>>>0)<($1>>>0);
   $14 = $10;
   if ($13) {
    $15 = ((($2)) + 36|0);
    $16 = HEAP32[$15>>2]|0;
    $17 = (FUNCTION_TABLE_iiii[$16 & 15]($2,$0,$1)|0);
    $$1 = $17;
    break;
   }
   $18 = ((($2)) + 75|0);
   $19 = HEAP8[$18>>0]|0;
   $20 = ($19<<24>>24)>(-1);
   L10: do {
    if ($20) {
     $$038 = $1;
     while(1) {
      $21 = ($$038|0)==(0);
      if ($21) {
       $$139 = 0;$$141 = $0;$$143 = $1;$31 = $14;
       break L10;
      }
      $22 = (($$038) + -1)|0;
      $23 = (($0) + ($22)|0);
      $24 = HEAP8[$23>>0]|0;
      $25 = ($24<<24>>24)==(10);
      if ($25) {
       break;
      } else {
       $$038 = $22;
      }
     }
     $26 = ((($2)) + 36|0);
     $27 = HEAP32[$26>>2]|0;
     $28 = (FUNCTION_TABLE_iiii[$27 & 15]($2,$0,$$038)|0);
     $29 = ($28>>>0)<($$038>>>0);
     if ($29) {
      $$1 = $28;
      break L5;
     }
     $30 = (($0) + ($$038)|0);
     $$042 = (($1) - ($$038))|0;
     $$pre47 = HEAP32[$9>>2]|0;
     $$139 = $$038;$$141 = $30;$$143 = $$042;$31 = $$pre47;
    } else {
     $$139 = 0;$$141 = $0;$$143 = $1;$31 = $14;
    }
   } while(0);
   _memcpy(($31|0),($$141|0),($$143|0))|0;
   $32 = HEAP32[$9>>2]|0;
   $33 = (($32) + ($$143)|0);
   HEAP32[$9>>2] = $33;
   $34 = (($$139) + ($$143))|0;
   $$1 = $34;
  }
 } while(0);
 return ($$1|0);
}
function ___towrite($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = HEAP8[$1>>0]|0;
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 HEAP8[$1>>0] = $6;
 $7 = HEAP32[$0>>2]|0;
 $8 = $7 & 8;
 $9 = ($8|0)==(0);
 if ($9) {
  $11 = ((($0)) + 8|0);
  HEAP32[$11>>2] = 0;
  $12 = ((($0)) + 4|0);
  HEAP32[$12>>2] = 0;
  $13 = ((($0)) + 44|0);
  $14 = HEAP32[$13>>2]|0;
  $15 = ((($0)) + 28|0);
  HEAP32[$15>>2] = $14;
  $16 = ((($0)) + 20|0);
  HEAP32[$16>>2] = $14;
  $17 = ((($0)) + 48|0);
  $18 = HEAP32[$17>>2]|0;
  $19 = (($14) + ($18)|0);
  $20 = ((($0)) + 16|0);
  HEAP32[$20>>2] = $19;
  $$0 = 0;
 } else {
  $10 = $7 | 32;
  HEAP32[$0>>2] = $10;
  $$0 = -1;
 }
 return ($$0|0);
}
function _sn_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $10 = 0, $11 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 16|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ((($0)) + 20|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = $6;
 $8 = (($4) - ($7))|0;
 $9 = ($8>>>0)>($2>>>0);
 $$ = $9 ? $2 : $8;
 _memcpy(($6|0),($1|0),($$|0))|0;
 $10 = HEAP32[$5>>2]|0;
 $11 = (($10) + ($$)|0);
 HEAP32[$5>>2] = $11;
 return ($2|0);
}
function ___floatscan($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$0105$ph = 0, $$0106$ph = 0, $$0107$lcssa = 0, $$0107127 = 0, $$0113 = 0, $$0114 = 0.0, $$1$lcssa = 0, $$1108 = 0, $$1128 = 0, $$2 = 0, $$2109125 = 0, $$3110 = 0, $$3126 = 0, $$4 = 0, $$4111 = 0, $$5 = 0, $$6 = 0, $$in = 0, $$old8 = 0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0.0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0.0, $14 = 0, $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0.0, $54 = 0.0, $55 = 0.0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond5 = 0, $or$cond7 = 0, $or$cond9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 switch ($1|0) {
 case 0:  {
  $$0105$ph = -149;$$0106$ph = 24;
  label = 4;
  break;
 }
 case 1:  {
  $$0105$ph = -1074;$$0106$ph = 53;
  label = 4;
  break;
 }
 case 2:  {
  $$0105$ph = -1074;$$0106$ph = 53;
  label = 4;
  break;
 }
 default: {
  $$0114 = 0.0;
 }
 }
 L4: do {
  if ((label|0) == 4) {
   $3 = ((($0)) + 4|0);
   $4 = ((($0)) + 100|0);
   while(1) {
    $5 = HEAP32[$3>>2]|0;
    $6 = HEAP32[$4>>2]|0;
    $7 = ($5>>>0)<($6>>>0);
    if ($7) {
     $8 = ((($5)) + 1|0);
     HEAP32[$3>>2] = $8;
     $9 = HEAP8[$5>>0]|0;
     $10 = $9&255;
     $12 = $10;
    } else {
     $11 = (___shgetc($0)|0);
     $12 = $11;
    }
    $13 = (_isspace($12)|0);
    $14 = ($13|0)==(0);
    if ($14) {
     break;
    }
   }
   L13: do {
    switch ($12|0) {
    case 43: case 45:  {
     $15 = ($12|0)==(45);
     $16 = $15&1;
     $17 = $16 << 1;
     $18 = (1 - ($17))|0;
     $19 = HEAP32[$3>>2]|0;
     $20 = HEAP32[$4>>2]|0;
     $21 = ($19>>>0)<($20>>>0);
     if ($21) {
      $22 = ((($19)) + 1|0);
      HEAP32[$3>>2] = $22;
      $23 = HEAP8[$19>>0]|0;
      $24 = $23&255;
      $$0 = $24;$$0113 = $18;
      break L13;
     } else {
      $25 = (___shgetc($0)|0);
      $$0 = $25;$$0113 = $18;
      break L13;
     }
     break;
    }
    default: {
     $$0 = $12;$$0113 = 1;
    }
    }
   } while(0);
   $$0107127 = 0;$$1128 = $$0;
   while(1) {
    $26 = $$1128 | 32;
    $27 = (3567 + ($$0107127)|0);
    $28 = HEAP8[$27>>0]|0;
    $29 = $28 << 24 >> 24;
    $30 = ($26|0)==($29|0);
    if (!($30)) {
     $$0107$lcssa = $$0107127;$$1$lcssa = $$1128;
     break;
    }
    $31 = ($$0107127>>>0)<(7);
    do {
     if ($31) {
      $32 = HEAP32[$3>>2]|0;
      $33 = HEAP32[$4>>2]|0;
      $34 = ($32>>>0)<($33>>>0);
      if ($34) {
       $35 = ((($32)) + 1|0);
       HEAP32[$3>>2] = $35;
       $36 = HEAP8[$32>>0]|0;
       $37 = $36&255;
       $$2 = $37;
       break;
      } else {
       $38 = (___shgetc($0)|0);
       $$2 = $38;
       break;
      }
     } else {
      $$2 = $$1128;
     }
    } while(0);
    $39 = (($$0107127) + 1)|0;
    $40 = ($39>>>0)<(8);
    if ($40) {
     $$0107127 = $39;$$1128 = $$2;
    } else {
     $$0107$lcssa = $39;$$1$lcssa = $$2;
     break;
    }
   }
   L29: do {
    switch ($$0107$lcssa|0) {
    case 8:  {
     break;
    }
    case 3:  {
     label = 23;
     break;
    }
    default: {
     $41 = ($$0107$lcssa>>>0)>(3);
     $42 = ($2|0)!=(0);
     $or$cond5 = $42 & $41;
     if ($or$cond5) {
      $43 = ($$0107$lcssa|0)==(8);
      if ($43) {
       break L29;
      } else {
       label = 23;
       break L29;
      }
     }
     $56 = ($$0107$lcssa|0)==(0);
     L34: do {
      if ($56) {
       $$2109125 = 0;$$3126 = $$1$lcssa;
       while(1) {
        $57 = $$3126 | 32;
        $58 = (3576 + ($$2109125)|0);
        $59 = HEAP8[$58>>0]|0;
        $60 = $59 << 24 >> 24;
        $61 = ($57|0)==($60|0);
        if (!($61)) {
         $$3110 = $$2109125;$$5 = $$3126;
         break L34;
        }
        $62 = ($$2109125>>>0)<(2);
        do {
         if ($62) {
          $63 = HEAP32[$3>>2]|0;
          $64 = HEAP32[$4>>2]|0;
          $65 = ($63>>>0)<($64>>>0);
          if ($65) {
           $66 = ((($63)) + 1|0);
           HEAP32[$3>>2] = $66;
           $67 = HEAP8[$63>>0]|0;
           $68 = $67&255;
           $$4 = $68;
           break;
          } else {
           $69 = (___shgetc($0)|0);
           $$4 = $69;
           break;
          }
         } else {
          $$4 = $$3126;
         }
        } while(0);
        $70 = (($$2109125) + 1)|0;
        $71 = ($70>>>0)<(3);
        if ($71) {
         $$2109125 = $70;$$3126 = $$4;
        } else {
         $$3110 = $70;$$5 = $$4;
         break;
        }
       }
      } else {
       $$3110 = $$0107$lcssa;$$5 = $$1$lcssa;
      }
     } while(0);
     switch ($$3110|0) {
     case 3:  {
      $72 = HEAP32[$3>>2]|0;
      $73 = HEAP32[$4>>2]|0;
      $74 = ($72>>>0)<($73>>>0);
      if ($74) {
       $75 = ((($72)) + 1|0);
       HEAP32[$3>>2] = $75;
       $76 = HEAP8[$72>>0]|0;
       $77 = $76&255;
       $80 = $77;
      } else {
       $78 = (___shgetc($0)|0);
       $80 = $78;
      }
      $79 = ($80|0)==(40);
      if ($79) {
       $$4111 = 1;
      } else {
       $81 = HEAP32[$4>>2]|0;
       $82 = ($81|0)==(0|0);
       if ($82) {
        $$0114 = nan;
        break L4;
       }
       $83 = HEAP32[$3>>2]|0;
       $84 = ((($83)) + -1|0);
       HEAP32[$3>>2] = $84;
       $$0114 = nan;
       break L4;
      }
      while(1) {
       $85 = HEAP32[$3>>2]|0;
       $86 = HEAP32[$4>>2]|0;
       $87 = ($85>>>0)<($86>>>0);
       if ($87) {
        $88 = ((($85)) + 1|0);
        HEAP32[$3>>2] = $88;
        $89 = HEAP8[$85>>0]|0;
        $90 = $89&255;
        $93 = $90;
       } else {
        $91 = (___shgetc($0)|0);
        $93 = $91;
       }
       $92 = (($93) + -48)|0;
       $94 = ($92>>>0)<(10);
       $95 = (($93) + -65)|0;
       $96 = ($95>>>0)<(26);
       $or$cond = $94 | $96;
       if (!($or$cond)) {
        $97 = (($93) + -97)|0;
        $98 = ($97>>>0)<(26);
        $99 = ($93|0)==(95);
        $or$cond7 = $99 | $98;
        if (!($or$cond7)) {
         break;
        }
       }
       $111 = (($$4111) + 1)|0;
       $$4111 = $111;
      }
      $100 = ($93|0)==(41);
      if ($100) {
       $$0114 = nan;
       break L4;
      }
      $101 = HEAP32[$4>>2]|0;
      $102 = ($101|0)==(0|0);
      if (!($102)) {
       $103 = HEAP32[$3>>2]|0;
       $104 = ((($103)) + -1|0);
       HEAP32[$3>>2] = $104;
      }
      if (!($42)) {
       $106 = (___errno_location()|0);
       HEAP32[$106>>2] = 22;
       ___shlim($0,0);
       $$0114 = 0.0;
       break L4;
      }
      $105 = ($$4111|0)==(0);
      if ($105) {
       $$0114 = nan;
       break L4;
      } else {
       $$in = $$4111;
      }
      while(1) {
       $107 = (($$in) + -1)|0;
       if (!($102)) {
        $108 = HEAP32[$3>>2]|0;
        $109 = ((($108)) + -1|0);
        HEAP32[$3>>2] = $109;
       }
       $110 = ($107|0)==(0);
       if ($110) {
        $$0114 = nan;
        break L4;
       } else {
        $$in = $107;
       }
      }
      break;
     }
     case 0:  {
      $117 = ($$5|0)==(48);
      if ($117) {
       $118 = HEAP32[$3>>2]|0;
       $119 = HEAP32[$4>>2]|0;
       $120 = ($118>>>0)<($119>>>0);
       if ($120) {
        $121 = ((($118)) + 1|0);
        HEAP32[$3>>2] = $121;
        $122 = HEAP8[$118>>0]|0;
        $123 = $122&255;
        $126 = $123;
       } else {
        $124 = (___shgetc($0)|0);
        $126 = $124;
       }
       $125 = $126 | 32;
       $127 = ($125|0)==(120);
       if ($127) {
        $128 = (+_hexfloat($0,$$0106$ph,$$0105$ph,$$0113,$2));
        $$0114 = $128;
        break L4;
       }
       $129 = HEAP32[$4>>2]|0;
       $130 = ($129|0)==(0|0);
       if ($130) {
        $$6 = 48;
       } else {
        $131 = HEAP32[$3>>2]|0;
        $132 = ((($131)) + -1|0);
        HEAP32[$3>>2] = $132;
        $$6 = 48;
       }
      } else {
       $$6 = $$5;
      }
      $133 = (+_decfloat($0,$$6,$$0106$ph,$$0105$ph,$$0113,$2));
      $$0114 = $133;
      break L4;
      break;
     }
     default: {
      $112 = HEAP32[$4>>2]|0;
      $113 = ($112|0)==(0|0);
      if (!($113)) {
       $114 = HEAP32[$3>>2]|0;
       $115 = ((($114)) + -1|0);
       HEAP32[$3>>2] = $115;
      }
      $116 = (___errno_location()|0);
      HEAP32[$116>>2] = 22;
      ___shlim($0,0);
      $$0114 = 0.0;
      break L4;
     }
     }
    }
    }
   } while(0);
   if ((label|0) == 23) {
    $44 = HEAP32[$4>>2]|0;
    $45 = ($44|0)==(0|0);
    if (!($45)) {
     $46 = HEAP32[$3>>2]|0;
     $47 = ((($46)) + -1|0);
     HEAP32[$3>>2] = $47;
    }
    $48 = ($2|0)!=(0);
    $49 = ($$0107$lcssa>>>0)>(3);
    $or$cond9 = $48 & $49;
    if ($or$cond9) {
     $$1108 = $$0107$lcssa;
     while(1) {
      if (!($45)) {
       $50 = HEAP32[$3>>2]|0;
       $51 = ((($50)) + -1|0);
       HEAP32[$3>>2] = $51;
      }
      $52 = (($$1108) + -1)|0;
      $$old8 = ($52>>>0)>(3);
      if ($$old8) {
       $$1108 = $52;
      } else {
       break;
      }
     }
    }
   }
   $53 = (+($$0113|0));
   $54 = $53 * inf;
   $55 = $54;
   $$0114 = $55;
  }
 } while(0);
 return (+$$0114);
}
function _hexfloat($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0 = 0, $$0133 = 0, $$0142 = 0, $$0146 = 0, $$0148 = 0, $$0148$ = 0, $$0151 = 0.0, $$0152 = 0.0, $$0155 = 0.0, $$0155$ = 0.0, $$0159 = 0, $$0165 = 0.0, $$0166 = 0, $$0166169 = 0, $$0166170 = 0, $$1$ph = 0, $$1147 = 0, $$1149 = 0, $$1153 = 0.0, $$1156 = 0.0;
 var $$1160 = 0, $$2 = 0, $$2$lcssa = 0, $$2144 = 0, $$2150 = 0, $$2154 = 0.0, $$2157 = 0.0, $$2161 = 0, $$3145 = 0, $$3158$lcssa = 0.0, $$3158179 = 0.0, $$3162$lcssa = 0, $$3162183 = 0, $$4 = 0.0, $$4163$lcssa = 0, $$4163178 = 0, $$5 = 0.0, $$5164 = 0, $$6 = 0, $$pn = 0.0;
 var $$pre = 0.0, $$pre$phiZ2D = 0.0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0.0, $143 = 0.0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0.0, $154 = 0.0, $155 = 0.0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0.0, $167 = 0.0, $168 = 0.0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0.0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0.0, $197 = 0, $198 = 0.0, $199 = 0.0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0.0, $206 = 0.0;
 var $207 = 0.0, $208 = 0.0, $209 = 0.0, $21 = 0, $210 = 0.0, $211 = 0, $212 = 0, $213 = 0.0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0.0, $67 = 0.0;
 var $68 = 0.0, $69 = 0.0, $7 = 0, $70 = 0, $71 = 0, $72 = 0.0, $73 = 0.0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0.0, $96 = 0.0, $97 = 0, $98 = 0, $99 = 0, $not$ = 0, $or$cond = 0, $or$cond168 = 0, $or$cond206 = 0, $or$cond4 = 0;
 var $or$cond6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($0)) + 4|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ((($0)) + 100|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ($6>>>0)<($8>>>0);
 if ($9) {
  $10 = ((($6)) + 1|0);
  HEAP32[$5>>2] = $10;
  $11 = HEAP8[$6>>0]|0;
  $12 = $11&255;
  $$0 = $12;$$0142 = 0;
 } else {
  $13 = (___shgetc($0)|0);
  $$0 = $13;$$0142 = 0;
 }
 L4: while(1) {
  switch ($$0|0) {
  case 46:  {
   label = 8;
   break L4;
   break;
  }
  case 48:  {
   break;
  }
  default: {
   $$0146 = 0;$$0148 = 0;$$0152 = 1.0;$$0155 = 0.0;$$0159 = 0;$$2 = $$0;$$2144 = $$0142;$101 = 0;$53 = 0;$55 = 0;$99 = 0;
   break L4;
  }
  }
  $14 = HEAP32[$5>>2]|0;
  $15 = HEAP32[$7>>2]|0;
  $16 = ($14>>>0)<($15>>>0);
  if ($16) {
   $17 = ((($14)) + 1|0);
   HEAP32[$5>>2] = $17;
   $18 = HEAP8[$14>>0]|0;
   $19 = $18&255;
   $$0 = $19;$$0142 = 1;
   continue;
  } else {
   $20 = (___shgetc($0)|0);
   $$0 = $20;$$0142 = 1;
   continue;
  }
 }
 if ((label|0) == 8) {
  $21 = HEAP32[$5>>2]|0;
  $22 = HEAP32[$7>>2]|0;
  $23 = ($21>>>0)<($22>>>0);
  if ($23) {
   $24 = ((($21)) + 1|0);
   HEAP32[$5>>2] = $24;
   $25 = HEAP8[$21>>0]|0;
   $26 = $25&255;
   $$1$ph = $26;
  } else {
   $27 = (___shgetc($0)|0);
   $$1$ph = $27;
  }
  $28 = ($$1$ph|0)==(48);
  if ($28) {
   $36 = 0;$37 = 0;
   while(1) {
    $29 = HEAP32[$5>>2]|0;
    $30 = HEAP32[$7>>2]|0;
    $31 = ($29>>>0)<($30>>>0);
    if ($31) {
     $32 = ((($29)) + 1|0);
     HEAP32[$5>>2] = $32;
     $33 = HEAP8[$29>>0]|0;
     $34 = $33&255;
     $41 = $34;
    } else {
     $35 = (___shgetc($0)|0);
     $41 = $35;
    }
    $38 = (_i64Add(($36|0),($37|0),-1,-1)|0);
    $39 = tempRet0;
    $40 = ($41|0)==(48);
    if ($40) {
     $36 = $38;$37 = $39;
    } else {
     $$0146 = 1;$$0148 = 0;$$0152 = 1.0;$$0155 = 0.0;$$0159 = 0;$$2 = $41;$$2144 = 1;$101 = $39;$53 = 0;$55 = 0;$99 = $38;
     break;
    }
   }
  } else {
   $$0146 = 1;$$0148 = 0;$$0152 = 1.0;$$0155 = 0.0;$$0159 = 0;$$2 = $$1$ph;$$2144 = $$0142;$101 = 0;$53 = 0;$55 = 0;$99 = 0;
  }
 }
 while(1) {
  $42 = (($$2) + -48)|0;
  $43 = ($42>>>0)<(10);
  $44 = ($$2|0)==(46);
  if (!($43)) {
   $45 = $$2 | 32;
   $46 = (($45) + -97)|0;
   $47 = ($46>>>0)<(6);
   $or$cond6 = $44 | $47;
   if (!($or$cond6)) {
    $$2$lcssa = $$2;
    break;
   }
  }
  if ($44) {
   $48 = ($$0146|0)==(0);
   if ($48) {
    $$1147 = 1;$$2150 = $$0148;$$2154 = $$0152;$$2157 = $$0155;$$2161 = $$0159;$$3145 = $$2144;$214 = $55;$215 = $53;$216 = $55;$217 = $53;
   } else {
    $$2$lcssa = 46;
    break;
   }
  } else {
   $49 = ($$2|0)>(57);
   $50 = $$2 | 32;
   $51 = (($50) + -87)|0;
   $$0133 = $49 ? $51 : $42;
   $52 = ($53|0)<(0);
   $54 = ($55>>>0)<(8);
   $56 = ($53|0)==(0);
   $57 = $56 & $54;
   $58 = $52 | $57;
   do {
    if ($58) {
     $59 = $$0159 << 4;
     $60 = (($$0133) + ($59))|0;
     $$1149 = $$0148;$$1153 = $$0152;$$1156 = $$0155;$$1160 = $60;
    } else {
     $61 = ($53|0)<(0);
     $62 = ($55>>>0)<(14);
     $63 = ($53|0)==(0);
     $64 = $63 & $62;
     $65 = $61 | $64;
     if ($65) {
      $66 = (+($$0133|0));
      $67 = $$0152 * 0.0625;
      $68 = $67 * $66;
      $69 = $$0155 + $68;
      $$1149 = $$0148;$$1153 = $67;$$1156 = $69;$$1160 = $$0159;
      break;
     } else {
      $70 = ($$0133|0)==(0);
      $71 = ($$0148|0)!=(0);
      $or$cond = $71 | $70;
      $72 = $$0152 * 0.5;
      $73 = $$0155 + $72;
      $$0155$ = $or$cond ? $$0155 : $73;
      $$0148$ = $or$cond ? $$0148 : 1;
      $$1149 = $$0148$;$$1153 = $$0152;$$1156 = $$0155$;$$1160 = $$0159;
      break;
     }
    }
   } while(0);
   $74 = (_i64Add(($55|0),($53|0),1,0)|0);
   $75 = tempRet0;
   $$1147 = $$0146;$$2150 = $$1149;$$2154 = $$1153;$$2157 = $$1156;$$2161 = $$1160;$$3145 = 1;$214 = $99;$215 = $101;$216 = $74;$217 = $75;
  }
  $76 = HEAP32[$5>>2]|0;
  $77 = HEAP32[$7>>2]|0;
  $78 = ($76>>>0)<($77>>>0);
  if ($78) {
   $79 = ((($76)) + 1|0);
   HEAP32[$5>>2] = $79;
   $80 = HEAP8[$76>>0]|0;
   $81 = $80&255;
   $$0146 = $$1147;$$0148 = $$2150;$$0152 = $$2154;$$0155 = $$2157;$$0159 = $$2161;$$2 = $81;$$2144 = $$3145;$101 = $215;$53 = $217;$55 = $216;$99 = $214;
   continue;
  } else {
   $82 = (___shgetc($0)|0);
   $$0146 = $$1147;$$0148 = $$2150;$$0152 = $$2154;$$0155 = $$2157;$$0159 = $$2161;$$2 = $82;$$2144 = $$3145;$101 = $215;$53 = $217;$55 = $216;$99 = $214;
   continue;
  }
 }
 $83 = ($$2144|0)==(0);
 do {
  if ($83) {
   $84 = HEAP32[$7>>2]|0;
   $85 = ($84|0)!=(0|0);
   if ($85) {
    $86 = HEAP32[$5>>2]|0;
    $87 = ((($86)) + -1|0);
    HEAP32[$5>>2] = $87;
   }
   $88 = ($4|0)==(0);
   if ($88) {
    ___shlim($0,0);
   } else {
    if ($85) {
     $89 = HEAP32[$5>>2]|0;
     $90 = ((($89)) + -1|0);
     HEAP32[$5>>2] = $90;
    }
    $91 = ($$0146|0)==(0);
    $92 = ($84|0)==(0|0);
    $or$cond206 = $91 | $92;
    if (!($or$cond206)) {
     $93 = HEAP32[$5>>2]|0;
     $94 = ((($93)) + -1|0);
     HEAP32[$5>>2] = $94;
    }
   }
   $95 = (+($3|0));
   $96 = $95 * 0.0;
   $$0165 = $96;
  } else {
   $97 = ($$0146|0)==(0);
   $98 = $97 ? $55 : $99;
   $100 = $97 ? $53 : $101;
   $102 = ($53|0)<(0);
   $103 = ($55>>>0)<(8);
   $104 = ($53|0)==(0);
   $105 = $104 & $103;
   $106 = $102 | $105;
   if ($106) {
    $$3162183 = $$0159;$108 = $55;$109 = $53;
    while(1) {
     $107 = $$3162183 << 4;
     $110 = (_i64Add(($108|0),($109|0),1,0)|0);
     $111 = tempRet0;
     $112 = ($111|0)<(0);
     $113 = ($110>>>0)<(8);
     $114 = ($111|0)==(0);
     $115 = $114 & $113;
     $116 = $112 | $115;
     if ($116) {
      $$3162183 = $107;$108 = $110;$109 = $111;
     } else {
      $$3162$lcssa = $107;
      break;
     }
    }
   } else {
    $$3162$lcssa = $$0159;
   }
   $117 = $$2$lcssa | 32;
   $118 = ($117|0)==(112);
   if ($118) {
    $119 = (_scanexp($0,$4)|0);
    $120 = tempRet0;
    $121 = ($119|0)==(0);
    $122 = ($120|0)==(-2147483648);
    $123 = $121 & $122;
    if ($123) {
     $124 = ($4|0)==(0);
     if ($124) {
      ___shlim($0,0);
      $$0165 = 0.0;
      break;
     }
     $125 = HEAP32[$7>>2]|0;
     $126 = ($125|0)==(0|0);
     if ($126) {
      $137 = 0;$138 = 0;
     } else {
      $127 = HEAP32[$5>>2]|0;
      $128 = ((($127)) + -1|0);
      HEAP32[$5>>2] = $128;
      $137 = 0;$138 = 0;
     }
    } else {
     $137 = $119;$138 = $120;
    }
   } else {
    $129 = HEAP32[$7>>2]|0;
    $130 = ($129|0)==(0|0);
    if ($130) {
     $137 = 0;$138 = 0;
    } else {
     $131 = HEAP32[$5>>2]|0;
     $132 = ((($131)) + -1|0);
     HEAP32[$5>>2] = $132;
     $137 = 0;$138 = 0;
    }
   }
   $133 = (_bitshift64Shl(($98|0),($100|0),2)|0);
   $134 = tempRet0;
   $135 = (_i64Add(($133|0),($134|0),-32,-1)|0);
   $136 = tempRet0;
   $139 = (_i64Add(($135|0),($136|0),($137|0),($138|0))|0);
   $140 = tempRet0;
   $141 = ($$3162$lcssa|0)==(0);
   if ($141) {
    $142 = (+($3|0));
    $143 = $142 * 0.0;
    $$0165 = $143;
    break;
   }
   $144 = (0 - ($2))|0;
   $145 = ($144|0)<(0);
   $146 = $145 << 31 >> 31;
   $147 = ($140|0)>($146|0);
   $148 = ($139>>>0)>($144>>>0);
   $149 = ($140|0)==($146|0);
   $150 = $149 & $148;
   $151 = $147 | $150;
   if ($151) {
    $152 = (___errno_location()|0);
    HEAP32[$152>>2] = 34;
    $153 = (+($3|0));
    $154 = $153 * 1.7976931348623157E+308;
    $155 = $154 * 1.7976931348623157E+308;
    $$0165 = $155;
    break;
   }
   $156 = (($2) + -106)|0;
   $157 = ($156|0)<(0);
   $158 = $157 << 31 >> 31;
   $159 = ($140|0)<($158|0);
   $160 = ($139>>>0)<($156>>>0);
   $161 = ($140|0)==($158|0);
   $162 = $161 & $160;
   $163 = $159 | $162;
   if ($163) {
    $165 = (___errno_location()|0);
    HEAP32[$165>>2] = 34;
    $166 = (+($3|0));
    $167 = $166 * 2.2250738585072014E-308;
    $168 = $167 * 2.2250738585072014E-308;
    $$0165 = $168;
    break;
   }
   $164 = ($$3162$lcssa|0)>(-1);
   if ($164) {
    $$3158179 = $$0155;$$4163178 = $$3162$lcssa;$173 = $139;$174 = $140;
    while(1) {
     $169 = !($$3158179 >= 0.5);
     $170 = $$4163178 << 1;
     $171 = $$3158179 + -1.0;
     $not$ = $169 ^ 1;
     $172 = $not$&1;
     $$5164 = $170 | $172;
     $$pn = $169 ? $$3158179 : $171;
     $$4 = $$3158179 + $$pn;
     $175 = (_i64Add(($173|0),($174|0),-1,-1)|0);
     $176 = tempRet0;
     $177 = ($$5164|0)>(-1);
     if ($177) {
      $$3158179 = $$4;$$4163178 = $$5164;$173 = $175;$174 = $176;
     } else {
      $$3158$lcssa = $$4;$$4163$lcssa = $$5164;$184 = $175;$185 = $176;
      break;
     }
    }
   } else {
    $$3158$lcssa = $$0155;$$4163$lcssa = $$3162$lcssa;$184 = $139;$185 = $140;
   }
   $178 = ($1|0)<(0);
   $179 = $178 << 31 >> 31;
   $180 = ($2|0)<(0);
   $181 = $180 << 31 >> 31;
   $182 = (_i64Subtract(32,0,($2|0),($181|0))|0);
   $183 = tempRet0;
   $186 = (_i64Add(($182|0),($183|0),($184|0),($185|0))|0);
   $187 = tempRet0;
   $188 = ($179|0)>($187|0);
   $189 = ($1>>>0)>($186>>>0);
   $190 = ($179|0)==($187|0);
   $191 = $190 & $189;
   $192 = $188 | $191;
   if ($192) {
    $193 = ($186|0)>(0);
    if ($193) {
     $$0166 = $186;
     label = 59;
    } else {
     $$0166170 = 0;$197 = 84;
     label = 61;
    }
   } else {
    $$0166 = $1;
    label = 59;
   }
   if ((label|0) == 59) {
    $194 = ($$0166|0)<(53);
    $195 = (84 - ($$0166))|0;
    if ($194) {
     $$0166170 = $$0166;$197 = $195;
     label = 61;
    } else {
     $$pre = (+($3|0));
     $$0151 = 0.0;$$0166169 = $$0166;$$pre$phiZ2D = $$pre;
    }
   }
   if ((label|0) == 61) {
    $196 = (+($3|0));
    $198 = (+_scalbn(1.0,$197));
    $199 = (+_copysignl($198,$196));
    $$0151 = $199;$$0166169 = $$0166170;$$pre$phiZ2D = $196;
   }
   $200 = ($$0166169|0)<(32);
   $201 = $$3158$lcssa != 0.0;
   $or$cond4 = $201 & $200;
   $202 = $$4163$lcssa & 1;
   $203 = ($202|0)==(0);
   $or$cond168 = $203 & $or$cond4;
   $204 = $or$cond168&1;
   $$6 = (($204) + ($$4163$lcssa))|0;
   $$5 = $or$cond168 ? 0.0 : $$3158$lcssa;
   $205 = (+($$6>>>0));
   $206 = $$pre$phiZ2D * $205;
   $207 = $$0151 + $206;
   $208 = $$pre$phiZ2D * $$5;
   $209 = $208 + $207;
   $210 = $209 - $$0151;
   $211 = $210 != 0.0;
   if (!($211)) {
    $212 = (___errno_location()|0);
    HEAP32[$212>>2] = 34;
   }
   $213 = (+_scalbnl($210,$184));
   $$0165 = $213;
  }
 } while(0);
 return (+$$0165);
}
function _decfloat($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$ = 0, $$$0345 = 0, $$$0350 = 0, $$$0385 = 0, $$$0401 = 0, $$$5355 = 0, $$$5390 = 0, $$0329 = 0, $$0332490 = 0, $$0333 = 0, $$0334 = 0, $$0336486 = 0, $$0340496 = 0, $$0341$lcssa = 0, $$0341463 = 0, $$0341464 = 0, $$0341465 = 0, $$0341513 = 0, $$0345$lcssa = 0, $$0345467 = 0;
 var $$0345468 = 0, $$0345469 = 0, $$0345512 = 0, $$0350$lcssa554 = 0, $$0350494 = 0, $$0360 = 0.0, $$0361 = 0.0, $$0365484 = 0.0, $$0372 = 0, $$0380 = 0, $$0380$ph = 0, $$0385$lcssa553 = 0, $$0385493 = 0, $$0393 = 0, $$0396 = 0, $$0401$lcssa = 0, $$0401473 = 0, $$0401474 = 0, $$0401475 = 0, $$0401509 = 0;
 var $$1 = 0.0, $$10 = 0, $$1330$be = 0, $$1330$ph = 0, $$1335 = 0, $$1337 = 0, $$1362 = 0.0, $$1366 = 0.0, $$1373 = 0, $$1373$ph448 = 0, $$1381 = 0, $$1381$ph = 0, $$1381$ph558 = 0, $$1394$lcssa = 0, $$1394511 = 0, $$2 = 0, $$2343 = 0, $$2347 = 0, $$2352$ph449 = 0, $$2367 = 0.0;
 var $$2371$v = 0, $$2374 = 0, $$2387$ph447 = 0, $$2395 = 0, $$2398 = 0, $$2403 = 0, $$3$be = 0, $$3$lcssa = 0, $$3344503 = 0, $$3348 = 0, $$3364 = 0.0, $$3368 = 0.0, $$3375 = 0, $$3383 = 0, $$3399$lcssa = 0, $$3399510 = 0, $$3514 = 0, $$413 = 0, $$425 = 0, $$4349495 = 0;
 var $$4354 = 0, $$4354$ph = 0, $$4354$ph559 = 0, $$4376 = 0, $$4384 = 0, $$4389$ph = 0, $$4389$ph445 = 0, $$4400 = 0, $$4485 = 0, $$5 = 0, $$5$in = 0, $$5355488 = 0, $$5390487 = 0, $$6378$ph = 0, $$6489 = 0, $$9483 = 0, $$neg442 = 0, $$neg443 = 0, $$pre = 0, $$promoted = 0;
 var $$sink = 0, $$sink421$off0 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0.0, $103 = 0.0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0.0, $12 = 0, $120 = 0.0, $121 = 0.0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0.0, $132 = 0.0, $133 = 0.0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0.0, $144 = 0.0, $145 = 0.0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0.0, $159 = 0.0, $16 = 0, $160 = 0.0, $161 = 0, $162 = 0.0, $163 = 0.0, $164 = 0.0, $165 = 0, $166 = 0, $167 = 0, $168 = 0.0, $169 = 0.0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0.0, $177 = 0.0, $178 = 0.0, $179 = 0, $18 = 0, $180 = 0.0, $181 = 0.0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0;
 var $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0;
 var $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0;
 var $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0;
 var $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0;
 var $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0;
 var $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0.0, $304 = 0, $305 = 0, $306 = 0.0, $307 = 0.0, $308 = 0, $309 = 0.0, $31 = 0, $310 = 0.0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0;
 var $316 = 0, $317 = 0.0, $318 = 0.0, $319 = 0, $32 = 0, $320 = 0.0, $321 = 0.0, $322 = 0.0, $323 = 0.0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0;
 var $334 = 0.0, $335 = 0.0, $336 = 0, $337 = 0.0, $338 = 0.0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0.0, $343 = 0.0, $344 = 0.0, $345 = 0.0, $346 = 0, $347 = 0, $348 = 0.0, $349 = 0, $35 = 0, $350 = 0.0, $351 = 0.0;
 var $352 = 0.0, $353 = 0, $354 = 0, $355 = 0, $356 = 0.0, $357 = 0, $358 = 0.0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0.0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0;
 var $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $39 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0;
 var $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0;
 var $98 = 0, $99 = 0, $cond = 0, $exitcond = 0, $exitcond551 = 0, $narrow = 0, $not$ = 0, $or$cond = 0, $or$cond11 = 0, $or$cond14 = 0, $or$cond415 = 0, $or$cond417 = 0, $or$cond419 = 0, $or$cond420 = 0, $or$cond422 = 0, $or$cond422$not = 0, $or$cond423 = 0, $or$cond426 = 0, $or$cond5 = 0, $sum = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 512|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(512|0);
 $6 = sp;
 $sum = (($3) + ($2))|0;
 $7 = (0 - ($sum))|0;
 $8 = ((($0)) + 4|0);
 $9 = ((($0)) + 100|0);
 $$0329 = $1;$$0396 = 0;
 L1: while(1) {
  switch ($$0329|0) {
  case 46:  {
   label = 6;
   break L1;
   break;
  }
  case 48:  {
   break;
  }
  default: {
   $$0393 = 0;$$2 = $$0329;$$2398 = $$0396;$366 = 0;$367 = 0;
   break L1;
  }
  }
  $10 = HEAP32[$8>>2]|0;
  $11 = HEAP32[$9>>2]|0;
  $12 = ($10>>>0)<($11>>>0);
  if ($12) {
   $13 = ((($10)) + 1|0);
   HEAP32[$8>>2] = $13;
   $14 = HEAP8[$10>>0]|0;
   $15 = $14&255;
   $$0329 = $15;$$0396 = 1;
   continue;
  } else {
   $16 = (___shgetc($0)|0);
   $$0329 = $16;$$0396 = 1;
   continue;
  }
 }
 if ((label|0) == 6) {
  $17 = HEAP32[$8>>2]|0;
  $18 = HEAP32[$9>>2]|0;
  $19 = ($17>>>0)<($18>>>0);
  if ($19) {
   $20 = ((($17)) + 1|0);
   HEAP32[$8>>2] = $20;
   $21 = HEAP8[$17>>0]|0;
   $22 = $21&255;
   $$1330$ph = $22;
  } else {
   $23 = (___shgetc($0)|0);
   $$1330$ph = $23;
  }
  $24 = ($$1330$ph|0)==(48);
  if ($24) {
   $25 = 0;$26 = 0;
   while(1) {
    $27 = (_i64Add(($25|0),($26|0),-1,-1)|0);
    $28 = tempRet0;
    $29 = HEAP32[$8>>2]|0;
    $30 = HEAP32[$9>>2]|0;
    $31 = ($29>>>0)<($30>>>0);
    if ($31) {
     $32 = ((($29)) + 1|0);
     HEAP32[$8>>2] = $32;
     $33 = HEAP8[$29>>0]|0;
     $34 = $33&255;
     $$1330$be = $34;
    } else {
     $35 = (___shgetc($0)|0);
     $$1330$be = $35;
    }
    $36 = ($$1330$be|0)==(48);
    if ($36) {
     $25 = $27;$26 = $28;
    } else {
     $$0393 = 1;$$2 = $$1330$be;$$2398 = 1;$366 = $27;$367 = $28;
     break;
    }
   }
  } else {
   $$0393 = 1;$$2 = $$1330$ph;$$2398 = $$0396;$366 = 0;$367 = 0;
  }
 }
 HEAP32[$6>>2] = 0;
 $37 = (($$2) + -48)|0;
 $38 = ($37>>>0)<(10);
 $39 = ($$2|0)==(46);
 $40 = $39 | $38;
 L20: do {
  if ($40) {
   $41 = ((($6)) + 496|0);
   $$0341513 = 0;$$0345512 = 0;$$0401509 = 0;$$1394511 = $$0393;$$3399510 = $$2398;$$3514 = $$2;$368 = $39;$369 = $37;$370 = $366;$371 = $367;$44 = 0;$45 = 0;
   L22: while(1) {
    do {
     if ($368) {
      $cond = ($$1394511|0)==(0);
      if ($cond) {
       $$2343 = $$0341513;$$2347 = $$0345512;$$2395 = 1;$$2403 = $$0401509;$$4400 = $$3399510;$372 = $44;$373 = $45;$374 = $44;$375 = $45;
      } else {
       break L22;
      }
     } else {
      $43 = ($$0345512|0)<(125);
      $46 = (_i64Add(($44|0),($45|0),1,0)|0);
      $47 = tempRet0;
      $48 = ($$3514|0)!=(48);
      if (!($43)) {
       if (!($48)) {
        $$2343 = $$0341513;$$2347 = $$0345512;$$2395 = $$1394511;$$2403 = $$0401509;$$4400 = $$3399510;$372 = $370;$373 = $371;$374 = $46;$375 = $47;
        break;
       }
       $57 = HEAP32[$41>>2]|0;
       $58 = $57 | 1;
       HEAP32[$41>>2] = $58;
       $$2343 = $$0341513;$$2347 = $$0345512;$$2395 = $$1394511;$$2403 = $$0401509;$$4400 = $$3399510;$372 = $370;$373 = $371;$374 = $46;$375 = $47;
       break;
      }
      $$$0401 = $48 ? $46 : $$0401509;
      $49 = ($$0341513|0)==(0);
      $$pre = (($6) + ($$0345512<<2)|0);
      if ($49) {
       $$sink = $369;
      } else {
       $50 = HEAP32[$$pre>>2]|0;
       $51 = ($50*10)|0;
       $52 = (($$3514) + -48)|0;
       $53 = (($52) + ($51))|0;
       $$sink = $53;
      }
      HEAP32[$$pre>>2] = $$sink;
      $54 = (($$0341513) + 1)|0;
      $55 = ($54|0)==(9);
      $56 = $55&1;
      $$$0345 = (($56) + ($$0345512))|0;
      $$413 = $55 ? 0 : $54;
      $$2343 = $$413;$$2347 = $$$0345;$$2395 = $$1394511;$$2403 = $$$0401;$$4400 = 1;$372 = $370;$373 = $371;$374 = $46;$375 = $47;
     }
    } while(0);
    $59 = HEAP32[$8>>2]|0;
    $60 = HEAP32[$9>>2]|0;
    $61 = ($59>>>0)<($60>>>0);
    if ($61) {
     $62 = ((($59)) + 1|0);
     HEAP32[$8>>2] = $62;
     $63 = HEAP8[$59>>0]|0;
     $64 = $63&255;
     $$3$be = $64;
    } else {
     $65 = (___shgetc($0)|0);
     $$3$be = $65;
    }
    $66 = (($$3$be) + -48)|0;
    $67 = ($66>>>0)<(10);
    $68 = ($$3$be|0)==(46);
    $69 = $68 | $67;
    if ($69) {
     $$0341513 = $$2343;$$0345512 = $$2347;$$0401509 = $$2403;$$1394511 = $$2395;$$3399510 = $$4400;$$3514 = $$3$be;$368 = $68;$369 = $66;$370 = $372;$371 = $373;$44 = $374;$45 = $375;
    } else {
     $$0341$lcssa = $$2343;$$0345$lcssa = $$2347;$$0401$lcssa = $$2403;$$1394$lcssa = $$2395;$$3$lcssa = $$3$be;$$3399$lcssa = $$4400;$72 = $374;$73 = $372;$75 = $375;$76 = $373;
     label = 29;
     break L20;
    }
   }
   $42 = ($$3399510|0)!=(0);
   $$0341465 = $$0341513;$$0345469 = $$0345512;$$0401475 = $$0401509;$376 = $44;$377 = $45;$378 = $370;$379 = $371;$380 = $42;
   label = 37;
  } else {
   $$0341$lcssa = 0;$$0345$lcssa = 0;$$0401$lcssa = 0;$$1394$lcssa = $$0393;$$3$lcssa = $$2;$$3399$lcssa = $$2398;$72 = 0;$73 = $366;$75 = 0;$76 = $367;
   label = 29;
  }
 } while(0);
 do {
  if ((label|0) == 29) {
   $70 = ($$1394$lcssa|0)==(0);
   $71 = $70 ? $72 : $73;
   $74 = $70 ? $75 : $76;
   $77 = ($$3399$lcssa|0)!=(0);
   $78 = $$3$lcssa | 32;
   $79 = ($78|0)==(101);
   $or$cond415 = $77 & $79;
   if (!($or$cond415)) {
    $94 = ($$3$lcssa|0)>(-1);
    if ($94) {
     $$0341465 = $$0341$lcssa;$$0345469 = $$0345$lcssa;$$0401475 = $$0401$lcssa;$376 = $72;$377 = $75;$378 = $71;$379 = $74;$380 = $77;
     label = 37;
     break;
    } else {
     $$0341464 = $$0341$lcssa;$$0345468 = $$0345$lcssa;$$0401474 = $$0401$lcssa;$381 = $72;$382 = $75;$383 = $77;$384 = $71;$385 = $74;
     label = 39;
     break;
    }
   }
   $80 = (_scanexp($0,$5)|0);
   $81 = tempRet0;
   $82 = ($80|0)==(0);
   $83 = ($81|0)==(-2147483648);
   $84 = $82 & $83;
   if ($84) {
    $85 = ($5|0)==(0);
    if ($85) {
     ___shlim($0,0);
     $$1 = 0.0;
     break;
    }
    $86 = HEAP32[$9>>2]|0;
    $87 = ($86|0)==(0|0);
    if ($87) {
     $90 = 0;$91 = 0;
    } else {
     $88 = HEAP32[$8>>2]|0;
     $89 = ((($88)) + -1|0);
     HEAP32[$8>>2] = $89;
     $90 = 0;$91 = 0;
    }
   } else {
    $90 = $80;$91 = $81;
   }
   $92 = (_i64Add(($90|0),($91|0),($71|0),($74|0))|0);
   $93 = tempRet0;
   $$0341463 = $$0341$lcssa;$$0345467 = $$0345$lcssa;$$0401473 = $$0401$lcssa;$105 = $92;$106 = $72;$108 = $93;$109 = $75;
   label = 41;
  }
 } while(0);
 if ((label|0) == 37) {
  $95 = HEAP32[$9>>2]|0;
  $96 = ($95|0)==(0|0);
  if ($96) {
   $$0341464 = $$0341465;$$0345468 = $$0345469;$$0401474 = $$0401475;$381 = $376;$382 = $377;$383 = $380;$384 = $378;$385 = $379;
   label = 39;
  } else {
   $97 = HEAP32[$8>>2]|0;
   $98 = ((($97)) + -1|0);
   HEAP32[$8>>2] = $98;
   if ($380) {
    $$0341463 = $$0341465;$$0345467 = $$0345469;$$0401473 = $$0401475;$105 = $378;$106 = $376;$108 = $379;$109 = $377;
    label = 41;
   } else {
    label = 40;
   }
  }
 }
 if ((label|0) == 39) {
  if ($383) {
   $$0341463 = $$0341464;$$0345467 = $$0345468;$$0401473 = $$0401474;$105 = $384;$106 = $381;$108 = $385;$109 = $382;
   label = 41;
  } else {
   label = 40;
  }
 }
 do {
  if ((label|0) == 40) {
   $99 = (___errno_location()|0);
   HEAP32[$99>>2] = 22;
   ___shlim($0,0);
   $$1 = 0.0;
  }
  else if ((label|0) == 41) {
   $100 = HEAP32[$6>>2]|0;
   $101 = ($100|0)==(0);
   if ($101) {
    $102 = (+($4|0));
    $103 = $102 * 0.0;
    $$1 = $103;
    break;
   }
   $104 = ($105|0)==($106|0);
   $107 = ($108|0)==($109|0);
   $110 = $104 & $107;
   $111 = ($109|0)<(0);
   $112 = ($106>>>0)<(10);
   $113 = ($109|0)==(0);
   $114 = $113 & $112;
   $115 = $111 | $114;
   $or$cond = $115 & $110;
   if ($or$cond) {
    $116 = ($2|0)>(30);
    $117 = $100 >>> $2;
    $118 = ($117|0)==(0);
    $or$cond417 = $116 | $118;
    if ($or$cond417) {
     $119 = (+($4|0));
     $120 = (+($100>>>0));
     $121 = $119 * $120;
     $$1 = $121;
     break;
    }
   }
   $122 = (($3|0) / -2)&-1;
   $123 = ($122|0)<(0);
   $124 = $123 << 31 >> 31;
   $125 = ($108|0)>($124|0);
   $126 = ($105>>>0)>($122>>>0);
   $127 = ($108|0)==($124|0);
   $128 = $127 & $126;
   $129 = $125 | $128;
   if ($129) {
    $130 = (___errno_location()|0);
    HEAP32[$130>>2] = 34;
    $131 = (+($4|0));
    $132 = $131 * 1.7976931348623157E+308;
    $133 = $132 * 1.7976931348623157E+308;
    $$1 = $133;
    break;
   }
   $134 = (($3) + -106)|0;
   $135 = ($134|0)<(0);
   $136 = $135 << 31 >> 31;
   $137 = ($108|0)<($136|0);
   $138 = ($105>>>0)<($134>>>0);
   $139 = ($108|0)==($136|0);
   $140 = $139 & $138;
   $141 = $137 | $140;
   if ($141) {
    $142 = (___errno_location()|0);
    HEAP32[$142>>2] = 34;
    $143 = (+($4|0));
    $144 = $143 * 2.2250738585072014E-308;
    $145 = $144 * 2.2250738585072014E-308;
    $$1 = $145;
    break;
   }
   $146 = ($$0341463|0)==(0);
   if ($146) {
    $$3348 = $$0345467;
   } else {
    $147 = ($$0341463|0)<(9);
    if ($147) {
     $148 = (($6) + ($$0345467<<2)|0);
     $$promoted = HEAP32[$148>>2]|0;
     $$3344503 = $$0341463;$150 = $$promoted;
     while(1) {
      $149 = ($150*10)|0;
      $151 = (($$3344503) + 1)|0;
      $exitcond551 = ($151|0)==(9);
      if ($exitcond551) {
       break;
      } else {
       $$3344503 = $151;$150 = $149;
      }
     }
     HEAP32[$148>>2] = $149;
    }
    $152 = (($$0345467) + 1)|0;
    $$3348 = $152;
   }
   $153 = ($$0401473|0)<(9);
   if ($153) {
    $154 = ($$0401473|0)<=($105|0);
    $155 = ($105|0)<(18);
    $or$cond5 = $154 & $155;
    if ($or$cond5) {
     $156 = ($105|0)==(9);
     $157 = HEAP32[$6>>2]|0;
     if ($156) {
      $158 = (+($4|0));
      $159 = (+($157>>>0));
      $160 = $158 * $159;
      $$1 = $160;
      break;
     }
     $161 = ($105|0)<(9);
     if ($161) {
      $162 = (+($4|0));
      $163 = (+($157>>>0));
      $164 = $162 * $163;
      $165 = (8 - ($105))|0;
      $166 = (720 + ($165<<2)|0);
      $167 = HEAP32[$166>>2]|0;
      $168 = (+($167|0));
      $169 = $164 / $168;
      $$1 = $169;
      break;
     }
     $$neg442 = Math_imul($105, -3)|0;
     $$neg443 = (($2) + 27)|0;
     $170 = (($$neg443) + ($$neg442))|0;
     $171 = ($170|0)>(30);
     $172 = $157 >>> $170;
     $173 = ($172|0)==(0);
     $or$cond419 = $171 | $173;
     if ($or$cond419) {
      $174 = (($105) + -10)|0;
      $175 = (720 + ($174<<2)|0);
      $176 = (+($4|0));
      $177 = (+($157>>>0));
      $178 = $176 * $177;
      $179 = HEAP32[$175>>2]|0;
      $180 = (+($179|0));
      $181 = $178 * $180;
      $$1 = $181;
      break;
     }
    }
   }
   $182 = (($105|0) % 9)&-1;
   $183 = ($182|0)==(0);
   if ($183) {
    $$0380$ph = 0;$$1373$ph448 = $$3348;$$2352$ph449 = 0;$$2387$ph447 = $105;
   } else {
    $184 = ($105|0)>(-1);
    $185 = (($182) + 9)|0;
    $186 = $184 ? $182 : $185;
    $187 = (8 - ($186))|0;
    $188 = (720 + ($187<<2)|0);
    $189 = HEAP32[$188>>2]|0;
    $190 = ($$3348|0)==(0);
    if ($190) {
     $$0350$lcssa554 = 0;$$0372 = 0;$$0385$lcssa553 = $105;
    } else {
     $191 = (1000000000 / ($189|0))&-1;
     $$0340496 = 0;$$0350494 = 0;$$0385493 = $105;$$4349495 = 0;
     while(1) {
      $192 = (($6) + ($$4349495<<2)|0);
      $193 = HEAP32[$192>>2]|0;
      $194 = (($193>>>0) % ($189>>>0))&-1;
      $195 = (($193>>>0) / ($189>>>0))&-1;
      $196 = (($195) + ($$0340496))|0;
      HEAP32[$192>>2] = $196;
      $197 = Math_imul($191, $194)|0;
      $198 = ($$4349495|0)==($$0350494|0);
      $199 = ($196|0)==(0);
      $or$cond420 = $198 & $199;
      $200 = (($$0350494) + 1)|0;
      $201 = $200 & 127;
      $202 = (($$0385493) + -9)|0;
      $$$0385 = $or$cond420 ? $202 : $$0385493;
      $$$0350 = $or$cond420 ? $201 : $$0350494;
      $203 = (($$4349495) + 1)|0;
      $204 = ($203|0)==($$3348|0);
      if ($204) {
       break;
      } else {
       $$0340496 = $197;$$0350494 = $$$0350;$$0385493 = $$$0385;$$4349495 = $203;
      }
     }
     $205 = ($197|0)==(0);
     if ($205) {
      $$0350$lcssa554 = $$$0350;$$0372 = $$3348;$$0385$lcssa553 = $$$0385;
     } else {
      $206 = (($6) + ($$3348<<2)|0);
      $207 = (($$3348) + 1)|0;
      HEAP32[$206>>2] = $197;
      $$0350$lcssa554 = $$$0350;$$0372 = $207;$$0385$lcssa553 = $$$0385;
     }
    }
    $208 = (9 - ($186))|0;
    $209 = (($208) + ($$0385$lcssa553))|0;
    $$0380$ph = 0;$$1373$ph448 = $$0372;$$2352$ph449 = $$0350$lcssa554;$$2387$ph447 = $209;
   }
   L101: while(1) {
    $210 = ($$2387$ph447|0)<(18);
    $211 = ($$2387$ph447|0)==(18);
    $212 = (($6) + ($$2352$ph449<<2)|0);
    $$0380 = $$0380$ph;$$1373 = $$1373$ph448;
    while(1) {
     if (!($210)) {
      if (!($211)) {
       $$1381$ph = $$0380;$$4354$ph = $$2352$ph449;$$4389$ph445 = $$2387$ph447;$$6378$ph = $$1373;
       break L101;
      }
      $213 = HEAP32[$212>>2]|0;
      $214 = ($213>>>0)<(9007199);
      if (!($214)) {
       $$1381$ph = $$0380;$$4354$ph = $$2352$ph449;$$4389$ph445 = 18;$$6378$ph = $$1373;
       break L101;
      }
     }
     $215 = (($$1373) + 127)|0;
     $$0334 = 0;$$2374 = $$1373;$$5$in = $215;
     while(1) {
      $$5 = $$5$in & 127;
      $216 = (($6) + ($$5<<2)|0);
      $217 = HEAP32[$216>>2]|0;
      $218 = (_bitshift64Shl(($217|0),0,29)|0);
      $219 = tempRet0;
      $220 = (_i64Add(($218|0),($219|0),($$0334|0),0)|0);
      $221 = tempRet0;
      $222 = ($221>>>0)>(0);
      $223 = ($220>>>0)>(1000000000);
      $224 = ($221|0)==(0);
      $225 = $224 & $223;
      $226 = $222 | $225;
      if ($226) {
       $227 = (___udivdi3(($220|0),($221|0),1000000000,0)|0);
       $228 = tempRet0;
       $229 = (___uremdi3(($220|0),($221|0),1000000000,0)|0);
       $230 = tempRet0;
       $$1335 = $227;$$sink421$off0 = $229;
      } else {
       $$1335 = 0;$$sink421$off0 = $220;
      }
      HEAP32[$216>>2] = $$sink421$off0;
      $231 = (($$2374) + 127)|0;
      $232 = $231 & 127;
      $233 = ($$5|0)!=($232|0);
      $234 = ($$5|0)==($$2352$ph449|0);
      $or$cond422 = $233 | $234;
      $or$cond422$not = $or$cond422 ^ 1;
      $235 = ($$sink421$off0|0)==(0);
      $or$cond423 = $235 & $or$cond422$not;
      $$3375 = $or$cond423 ? $$5 : $$2374;
      $236 = (($$5) + -1)|0;
      if ($234) {
       break;
      } else {
       $$0334 = $$1335;$$2374 = $$3375;$$5$in = $236;
      }
     }
     $237 = (($$0380) + -29)|0;
     $238 = ($$1335|0)==(0);
     if ($238) {
      $$0380 = $237;$$1373 = $$3375;
     } else {
      break;
     }
    }
    $239 = (($$2387$ph447) + 9)|0;
    $240 = (($$2352$ph449) + 127)|0;
    $241 = $240 & 127;
    $242 = ($241|0)==($$3375|0);
    $243 = (($$3375) + 127)|0;
    $244 = $243 & 127;
    $245 = (($$3375) + 126)|0;
    $246 = $245 & 127;
    $247 = (($6) + ($246<<2)|0);
    if ($242) {
     $248 = (($6) + ($244<<2)|0);
     $249 = HEAP32[$248>>2]|0;
     $250 = HEAP32[$247>>2]|0;
     $251 = $250 | $249;
     HEAP32[$247>>2] = $251;
     $$4376 = $244;
    } else {
     $$4376 = $$3375;
    }
    $252 = (($6) + ($241<<2)|0);
    HEAP32[$252>>2] = $$1335;
    $$0380$ph = $237;$$1373$ph448 = $$4376;$$2352$ph449 = $241;$$2387$ph447 = $239;
   }
   L119: while(1) {
    $289 = (($$6378$ph) + 1)|0;
    $287 = $289 & 127;
    $290 = (($$6378$ph) + 127)|0;
    $291 = $290 & 127;
    $292 = (($6) + ($291<<2)|0);
    $$1381$ph558 = $$1381$ph;$$4354$ph559 = $$4354$ph;$$4389$ph = $$4389$ph445;
    while(1) {
     $265 = ($$4389$ph|0)==(18);
     $293 = ($$4389$ph|0)>(27);
     $$425 = $293 ? 9 : 1;
     $$1381 = $$1381$ph558;$$4354 = $$4354$ph559;
     while(1) {
      $$0336486 = 0;
      while(1) {
       $253 = (($$0336486) + ($$4354))|0;
       $254 = $253 & 127;
       $255 = ($254|0)==($$6378$ph|0);
       if ($255) {
        $$1337 = 2;
        label = 88;
        break;
       }
       $256 = (($6) + ($254<<2)|0);
       $257 = HEAP32[$256>>2]|0;
       $258 = (752 + ($$0336486<<2)|0);
       $259 = HEAP32[$258>>2]|0;
       $260 = ($257>>>0)<($259>>>0);
       if ($260) {
        $$1337 = 2;
        label = 88;
        break;
       }
       $261 = ($257>>>0)>($259>>>0);
       if ($261) {
        break;
       }
       $262 = (($$0336486) + 1)|0;
       $263 = ($262|0)<(2);
       if ($263) {
        $$0336486 = $262;
       } else {
        $$1337 = $262;
        label = 88;
        break;
       }
      }
      if ((label|0) == 88) {
       label = 0;
       $264 = ($$1337|0)==(2);
       $or$cond11 = $265 & $264;
       if ($or$cond11) {
        $$0365484 = 0.0;$$4485 = 0;$$9483 = $$6378$ph;
        break L119;
       }
      }
      $266 = (($$425) + ($$1381))|0;
      $267 = ($$4354|0)==($$6378$ph|0);
      if ($267) {
       $$1381 = $266;$$4354 = $$6378$ph;
      } else {
       break;
      }
     }
     $268 = 1 << $$425;
     $269 = (($268) + -1)|0;
     $270 = 1000000000 >>> $$425;
     $$0332490 = 0;$$5355488 = $$4354;$$5390487 = $$4389$ph;$$6489 = $$4354;
     while(1) {
      $271 = (($6) + ($$6489<<2)|0);
      $272 = HEAP32[$271>>2]|0;
      $273 = $272 & $269;
      $274 = $272 >>> $$425;
      $275 = (($274) + ($$0332490))|0;
      HEAP32[$271>>2] = $275;
      $276 = Math_imul($273, $270)|0;
      $277 = ($$6489|0)==($$5355488|0);
      $278 = ($275|0)==(0);
      $or$cond426 = $277 & $278;
      $279 = (($$5355488) + 1)|0;
      $280 = $279 & 127;
      $281 = (($$5390487) + -9)|0;
      $$$5390 = $or$cond426 ? $281 : $$5390487;
      $$$5355 = $or$cond426 ? $280 : $$5355488;
      $282 = (($$6489) + 1)|0;
      $283 = $282 & 127;
      $284 = ($283|0)==($$6378$ph|0);
      if ($284) {
       break;
      } else {
       $$0332490 = $276;$$5355488 = $$$5355;$$5390487 = $$$5390;$$6489 = $283;
      }
     }
     $285 = ($276|0)==(0);
     if ($285) {
      $$1381$ph558 = $266;$$4354$ph559 = $$$5355;$$4389$ph = $$$5390;
      continue;
     }
     $286 = ($287|0)==($$$5355|0);
     if (!($286)) {
      break;
     }
     $294 = HEAP32[$292>>2]|0;
     $295 = $294 | 1;
     HEAP32[$292>>2] = $295;
     $$1381$ph558 = $266;$$4354$ph559 = $$$5355;$$4389$ph = $$$5390;
    }
    $288 = (($6) + ($$6378$ph<<2)|0);
    HEAP32[$288>>2] = $276;
    $$1381$ph = $266;$$4354$ph = $$$5355;$$4389$ph445 = $$$5390;$$6378$ph = $287;
   }
   while(1) {
    $296 = (($$4485) + ($$4354))|0;
    $297 = $296 & 127;
    $298 = ($297|0)==($$9483|0);
    $299 = (($$9483) + 1)|0;
    $300 = $299 & 127;
    if ($298) {
     $301 = (($300) + -1)|0;
     $302 = (($6) + ($301<<2)|0);
     HEAP32[$302>>2] = 0;
     $$10 = $300;
    } else {
     $$10 = $$9483;
    }
    $303 = $$0365484 * 1.0E+9;
    $304 = (($6) + ($297<<2)|0);
    $305 = HEAP32[$304>>2]|0;
    $306 = (+($305>>>0));
    $307 = $303 + $306;
    $308 = (($$4485) + 1)|0;
    $exitcond = ($308|0)==(2);
    if ($exitcond) {
     break;
    } else {
     $$0365484 = $307;$$4485 = $308;$$9483 = $$10;
    }
   }
   $309 = (+($4|0));
   $310 = $309 * $307;
   $311 = (($$1381) + 53)|0;
   $312 = (($311) - ($3))|0;
   $313 = ($312|0)<($2|0);
   $314 = ($312|0)>(0);
   $$ = $314 ? $312 : 0;
   $$0333 = $313 ? $$ : $2;
   $315 = ($$0333|0)<(53);
   if ($315) {
    $316 = (105 - ($$0333))|0;
    $317 = (+_scalbn(1.0,$316));
    $318 = (+_copysignl($317,$310));
    $319 = (53 - ($$0333))|0;
    $320 = (+_scalbn(1.0,$319));
    $321 = (+_fmodl($310,$320));
    $322 = $310 - $321;
    $323 = $318 + $322;
    $$0360 = $318;$$0361 = $321;$$1366 = $323;
   } else {
    $$0360 = 0.0;$$0361 = 0.0;$$1366 = $310;
   }
   $324 = (($$4354) + 2)|0;
   $325 = $324 & 127;
   $326 = ($325|0)==($$10|0);
   if ($326) {
    $$3364 = $$0361;
   } else {
    $327 = (($6) + ($325<<2)|0);
    $328 = HEAP32[$327>>2]|0;
    $329 = ($328>>>0)<(500000000);
    do {
     if ($329) {
      $330 = ($328|0)==(0);
      if ($330) {
       $331 = (($$4354) + 3)|0;
       $332 = $331 & 127;
       $333 = ($332|0)==($$10|0);
       if ($333) {
        $$1362 = $$0361;
        break;
       }
      }
      $334 = $309 * 0.25;
      $335 = $334 + $$0361;
      $$1362 = $335;
     } else {
      $336 = ($328|0)==(500000000);
      if (!($336)) {
       $337 = $309 * 0.75;
       $338 = $337 + $$0361;
       $$1362 = $338;
       break;
      }
      $339 = (($$4354) + 3)|0;
      $340 = $339 & 127;
      $341 = ($340|0)==($$10|0);
      if ($341) {
       $342 = $309 * 0.5;
       $343 = $342 + $$0361;
       $$1362 = $343;
       break;
      } else {
       $344 = $309 * 0.75;
       $345 = $344 + $$0361;
       $$1362 = $345;
       break;
      }
     }
    } while(0);
    $346 = (53 - ($$0333))|0;
    $347 = ($346|0)>(1);
    if ($347) {
     $348 = (+_fmodl($$1362,1.0));
     $349 = $348 != 0.0;
     if ($349) {
      $$3364 = $$1362;
     } else {
      $350 = $$1362 + 1.0;
      $$3364 = $350;
     }
    } else {
     $$3364 = $$1362;
    }
   }
   $351 = $$1366 + $$3364;
   $352 = $351 - $$0360;
   $353 = $311 & 2147483647;
   $354 = (-2 - ($sum))|0;
   $355 = ($353|0)>($354|0);
   do {
    if ($355) {
     $356 = (+Math_abs((+$352)));
     $357 = !($356 >= 9007199254740992.0);
     $358 = $352 * 0.5;
     $not$ = $357 ^ 1;
     $359 = $not$&1;
     $$3383 = (($359) + ($$1381))|0;
     $$2367 = $357 ? $352 : $358;
     $360 = (($$3383) + 50)|0;
     $361 = ($360|0)>($7|0);
     if (!($361)) {
      $362 = ($$0333|0)!=($312|0);
      $narrow = $362 | $357;
      $$2371$v = $313 & $narrow;
      $363 = $$3364 != 0.0;
      $or$cond14 = $363 & $$2371$v;
      if (!($or$cond14)) {
       $$3368 = $$2367;$$4384 = $$3383;
       break;
      }
     }
     $364 = (___errno_location()|0);
     HEAP32[$364>>2] = 34;
     $$3368 = $$2367;$$4384 = $$3383;
    } else {
     $$3368 = $352;$$4384 = $$1381;
    }
   } while(0);
   $365 = (+_scalbnl($$3368,$$4384));
   $$1 = $365;
  }
 } while(0);
 STACKTOP = sp;return (+$$1);
}
function _scanexp($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$04861 = 0, $$049 = 0, $$1$be = 0, $$160 = 0, $$2$be = 0, $$2$lcssa = 0, $$254 = 0, $$3$be = 0, $$lcssa = 0, $$pre = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ((($0)) + 100|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = ($3>>>0)<($5>>>0);
 if ($6) {
  $7 = ((($3)) + 1|0);
  HEAP32[$2>>2] = $7;
  $8 = HEAP8[$3>>0]|0;
  $9 = $8&255;
  $11 = $9;
 } else {
  $10 = (___shgetc($0)|0);
  $11 = $10;
 }
 switch ($11|0) {
 case 43: case 45:  {
  $12 = ($11|0)==(45);
  $13 = $12&1;
  $14 = HEAP32[$2>>2]|0;
  $15 = HEAP32[$4>>2]|0;
  $16 = ($14>>>0)<($15>>>0);
  if ($16) {
   $17 = ((($14)) + 1|0);
   HEAP32[$2>>2] = $17;
   $18 = HEAP8[$14>>0]|0;
   $19 = $18&255;
   $22 = $19;
  } else {
   $20 = (___shgetc($0)|0);
   $22 = $20;
  }
  $21 = (($22) + -48)|0;
  $23 = ($21>>>0)>(9);
  $24 = ($1|0)!=(0);
  $or$cond3 = $24 & $23;
  if ($or$cond3) {
   $25 = HEAP32[$4>>2]|0;
   $26 = ($25|0)==(0|0);
   if ($26) {
    $$0 = $13;$$049 = $22;
   } else {
    $27 = HEAP32[$2>>2]|0;
    $28 = ((($27)) + -1|0);
    HEAP32[$2>>2] = $28;
    $$0 = $13;$$049 = $22;
   }
  } else {
   $$0 = $13;$$049 = $22;
  }
  break;
 }
 default: {
  $$0 = 0;$$049 = $11;
 }
 }
 $29 = (($$049) + -48)|0;
 $30 = ($29>>>0)>(9);
 if ($30) {
  $31 = HEAP32[$4>>2]|0;
  $32 = ($31|0)==(0|0);
  if ($32) {
   $100 = -2147483648;$101 = 0;
  } else {
   $33 = HEAP32[$2>>2]|0;
   $34 = ((($33)) + -1|0);
   HEAP32[$2>>2] = $34;
   $100 = -2147483648;$101 = 0;
  }
 } else {
  $$04861 = 0;$$160 = $$049;
  while(1) {
   $35 = ($$04861*10)|0;
   $36 = (($$160) + -48)|0;
   $37 = (($36) + ($35))|0;
   $38 = HEAP32[$2>>2]|0;
   $39 = HEAP32[$4>>2]|0;
   $40 = ($38>>>0)<($39>>>0);
   if ($40) {
    $41 = ((($38)) + 1|0);
    HEAP32[$2>>2] = $41;
    $42 = HEAP8[$38>>0]|0;
    $43 = $42&255;
    $$1$be = $43;
   } else {
    $44 = (___shgetc($0)|0);
    $$1$be = $44;
   }
   $45 = (($$1$be) + -48)|0;
   $46 = ($45>>>0)<(10);
   $47 = ($37|0)<(214748364);
   $48 = $46 & $47;
   if ($48) {
    $$04861 = $37;$$160 = $$1$be;
   } else {
    break;
   }
  }
  $49 = ($37|0)<(0);
  $50 = $49 << 31 >> 31;
  $51 = (($$1$be) + -48)|0;
  $52 = ($51>>>0)<(10);
  if ($52) {
   $$254 = $$1$be;$56 = $37;$57 = $50;
   while(1) {
    $58 = (___muldi3(($56|0),($57|0),10,0)|0);
    $59 = tempRet0;
    $60 = ($$254|0)<(0);
    $61 = $60 << 31 >> 31;
    $62 = (_i64Add(($$254|0),($61|0),-48,-1)|0);
    $63 = tempRet0;
    $64 = (_i64Add(($62|0),($63|0),($58|0),($59|0))|0);
    $65 = tempRet0;
    $66 = HEAP32[$2>>2]|0;
    $67 = HEAP32[$4>>2]|0;
    $68 = ($66>>>0)<($67>>>0);
    if ($68) {
     $69 = ((($66)) + 1|0);
     HEAP32[$2>>2] = $69;
     $70 = HEAP8[$66>>0]|0;
     $71 = $70&255;
     $$2$be = $71;
    } else {
     $72 = (___shgetc($0)|0);
     $$2$be = $72;
    }
    $73 = (($$2$be) + -48)|0;
    $74 = ($73>>>0)<(10);
    $75 = ($65|0)<(21474836);
    $76 = ($64>>>0)<(2061584302);
    $77 = ($65|0)==(21474836);
    $78 = $77 & $76;
    $79 = $75 | $78;
    $80 = $74 & $79;
    if ($80) {
     $$254 = $$2$be;$56 = $64;$57 = $65;
    } else {
     $$2$lcssa = $$2$be;$94 = $64;$95 = $65;
     break;
    }
   }
  } else {
   $$2$lcssa = $$1$be;$94 = $37;$95 = $50;
  }
  $53 = (($$2$lcssa) + -48)|0;
  $54 = ($53>>>0)<(10);
  $55 = HEAP32[$4>>2]|0;
  if ($54) {
   $83 = $55;
   while(1) {
    $81 = HEAP32[$2>>2]|0;
    $82 = ($81>>>0)<($83>>>0);
    if ($82) {
     $84 = ((($81)) + 1|0);
     HEAP32[$2>>2] = $84;
     $85 = HEAP8[$81>>0]|0;
     $86 = $85&255;
     $$3$be = $86;$102 = $83;
    } else {
     $87 = (___shgetc($0)|0);
     $$pre = HEAP32[$4>>2]|0;
     $$3$be = $87;$102 = $$pre;
    }
    $88 = (($$3$be) + -48)|0;
    $89 = ($88>>>0)<(10);
    if ($89) {
     $83 = $102;
    } else {
     $$lcssa = $102;
     break;
    }
   }
  } else {
   $$lcssa = $55;
  }
  $90 = ($$lcssa|0)==(0|0);
  if (!($90)) {
   $91 = HEAP32[$2>>2]|0;
   $92 = ((($91)) + -1|0);
   HEAP32[$2>>2] = $92;
  }
  $93 = ($$0|0)!=(0);
  $96 = (_i64Subtract(0,0,($94|0),($95|0))|0);
  $97 = tempRet0;
  $98 = $93 ? $96 : $94;
  $99 = $93 ? $97 : $95;
  $100 = $99;$101 = $98;
 }
 tempRet0 = ($100);
 return ($101|0);
}
function _scalbn($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$ = 0, $$$ = 0, $$0 = 0.0, $$020 = 0, $$1 = 0, $$1$ = 0, $$21 = 0.0, $$22 = 0.0, $10 = 0.0, $11 = 0, $12 = 0, $13 = 0.0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0.0, $2 = 0, $20 = 0.0;
 var $3 = 0.0, $4 = 0, $5 = 0, $6 = 0.0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)>(1023);
 if ($2) {
  $3 = $0 * 8.9884656743115795E+307;
  $4 = (($1) + -1023)|0;
  $5 = ($4|0)>(1023);
  $6 = $3 * 8.9884656743115795E+307;
  $7 = (($1) + -2046)|0;
  $8 = ($7|0)<(1023);
  $$ = $8 ? $7 : 1023;
  $$$ = $5 ? $$ : $4;
  $$21 = $5 ? $6 : $3;
  $$0 = $$21;$$020 = $$$;
 } else {
  $9 = ($1|0)<(-1022);
  if ($9) {
   $10 = $0 * 2.2250738585072014E-308;
   $11 = (($1) + 1022)|0;
   $12 = ($11|0)<(-1022);
   $13 = $10 * 2.2250738585072014E-308;
   $14 = (($1) + 2044)|0;
   $15 = ($14|0)>(-1022);
   $$1 = $15 ? $14 : -1022;
   $$1$ = $12 ? $$1 : $11;
   $$22 = $12 ? $13 : $10;
   $$0 = $$22;$$020 = $$1$;
  } else {
   $$0 = $0;$$020 = $1;
  }
 }
 $16 = (($$020) + 1023)|0;
 $17 = (_bitshift64Shl(($16|0),0,52)|0);
 $18 = tempRet0;
 HEAP32[tempDoublePtr>>2] = $17;HEAP32[tempDoublePtr+4>>2] = $18;$19 = +HEAPF64[tempDoublePtr>>3];
 $20 = $$0 * $19;
 return (+$20);
}
function _copysignl($0,$1) {
 $0 = +$0;
 $1 = +$1;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_copysign($0,$1));
 return (+$2);
}
function _fmodl($0,$1) {
 $0 = +$0;
 $1 = +$1;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_fmod($0,$1));
 return (+$2);
}
function _scalbnl($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_scalbn($0,$1));
 return (+$2);
}
function _fmod($0,$1) {
 $0 = +$0;
 $1 = +$1;
 var $$ = 0.0, $$070 = 0.0, $$071$lcssa = 0, $$07194 = 0, $$073$lcssa = 0, $$073100 = 0, $$172$ph = 0, $$174 = 0, $$275$lcssa = 0, $$27586 = 0, $$376$lcssa = 0, $$37683 = 0, $$lcssa = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0.0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0;
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0.0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0;
 var $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0.0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0;
 var $160 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0.0, $28 = 0.0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0.0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $0;$2 = HEAP32[tempDoublePtr>>2]|0;
 $3 = HEAP32[tempDoublePtr+4>>2]|0;
 HEAPF64[tempDoublePtr>>3] = $1;$4 = HEAP32[tempDoublePtr>>2]|0;
 $5 = HEAP32[tempDoublePtr+4>>2]|0;
 $6 = (_bitshift64Lshr(($2|0),($3|0),52)|0);
 $7 = tempRet0;
 $8 = $6 & 2047;
 $9 = (_bitshift64Lshr(($4|0),($5|0),52)|0);
 $10 = tempRet0;
 $11 = $9 & 2047;
 $12 = $3 & -2147483648;
 $13 = (_bitshift64Shl(($4|0),($5|0),1)|0);
 $14 = tempRet0;
 $15 = ($13|0)==(0);
 $16 = ($14|0)==(0);
 $17 = $15 & $16;
 L1: do {
  if ($17) {
   label = 3;
  } else {
   $18 = (___DOUBLE_BITS_272($1)|0);
   $19 = tempRet0;
   $20 = $19 & 2147483647;
   $21 = ($20>>>0)>(2146435072);
   $22 = ($18>>>0)>(0);
   $23 = ($20|0)==(2146435072);
   $24 = $23 & $22;
   $25 = $21 | $24;
   $26 = ($8|0)==(2047);
   $or$cond = $26 | $25;
   if ($or$cond) {
    label = 3;
   } else {
    $29 = (_bitshift64Shl(($2|0),($3|0),1)|0);
    $30 = tempRet0;
    $31 = ($30>>>0)>($14>>>0);
    $32 = ($29>>>0)>($13>>>0);
    $33 = ($30|0)==($14|0);
    $34 = $33 & $32;
    $35 = $31 | $34;
    if (!($35)) {
     $36 = ($29|0)==($13|0);
     $37 = ($30|0)==($14|0);
     $38 = $36 & $37;
     $39 = $0 * 0.0;
     $$ = $38 ? $39 : $0;
     return (+$$);
    }
    $40 = ($8|0)==(0);
    if ($40) {
     $41 = (_bitshift64Shl(($2|0),($3|0),12)|0);
     $42 = tempRet0;
     $43 = ($42|0)>(-1);
     $44 = ($41>>>0)>(4294967295);
     $45 = ($42|0)==(-1);
     $46 = $45 & $44;
     $47 = $43 | $46;
     if ($47) {
      $$073100 = 0;$49 = $41;$50 = $42;
      while(1) {
       $48 = (($$073100) + -1)|0;
       $51 = (_bitshift64Shl(($49|0),($50|0),1)|0);
       $52 = tempRet0;
       $53 = ($52|0)>(-1);
       $54 = ($51>>>0)>(4294967295);
       $55 = ($52|0)==(-1);
       $56 = $55 & $54;
       $57 = $53 | $56;
       if ($57) {
        $$073100 = $48;$49 = $51;$50 = $52;
       } else {
        $$073$lcssa = $48;
        break;
       }
      }
     } else {
      $$073$lcssa = 0;
     }
     $58 = (1 - ($$073$lcssa))|0;
     $59 = (_bitshift64Shl(($2|0),($3|0),($58|0))|0);
     $60 = tempRet0;
     $$174 = $$073$lcssa;$87 = $59;$88 = $60;
    } else {
     $61 = $3 & 1048575;
     $62 = $61 | 1048576;
     $$174 = $8;$87 = $2;$88 = $62;
    }
    $63 = ($11|0)==(0);
    if ($63) {
     $64 = (_bitshift64Shl(($4|0),($5|0),12)|0);
     $65 = tempRet0;
     $66 = ($65|0)>(-1);
     $67 = ($64>>>0)>(4294967295);
     $68 = ($65|0)==(-1);
     $69 = $68 & $67;
     $70 = $66 | $69;
     if ($70) {
      $$07194 = 0;$72 = $64;$73 = $65;
      while(1) {
       $71 = (($$07194) + -1)|0;
       $74 = (_bitshift64Shl(($72|0),($73|0),1)|0);
       $75 = tempRet0;
       $76 = ($75|0)>(-1);
       $77 = ($74>>>0)>(4294967295);
       $78 = ($75|0)==(-1);
       $79 = $78 & $77;
       $80 = $76 | $79;
       if ($80) {
        $$07194 = $71;$72 = $74;$73 = $75;
       } else {
        $$071$lcssa = $71;
        break;
       }
      }
     } else {
      $$071$lcssa = 0;
     }
     $81 = (1 - ($$071$lcssa))|0;
     $82 = (_bitshift64Shl(($4|0),($5|0),($81|0))|0);
     $83 = tempRet0;
     $$172$ph = $$071$lcssa;$89 = $82;$90 = $83;
    } else {
     $84 = $5 & 1048575;
     $85 = $84 | 1048576;
     $$172$ph = $11;$89 = $4;$90 = $85;
    }
    $86 = ($$174|0)>($$172$ph|0);
    $91 = (_i64Subtract(($87|0),($88|0),($89|0),($90|0))|0);
    $92 = tempRet0;
    $93 = ($92|0)>(-1);
    $94 = ($91>>>0)>(4294967295);
    $95 = ($92|0)==(-1);
    $96 = $95 & $94;
    $97 = $93 | $96;
    L23: do {
     if ($86) {
      $$27586 = $$174;$101 = $92;$156 = $97;$157 = $87;$158 = $88;$99 = $91;
      while(1) {
       if ($156) {
        $98 = ($99|0)==(0);
        $100 = ($101|0)==(0);
        $102 = $98 & $100;
        if ($102) {
         break;
        } else {
         $104 = $99;$105 = $101;
        }
       } else {
        $104 = $157;$105 = $158;
       }
       $106 = (_bitshift64Shl(($104|0),($105|0),1)|0);
       $107 = tempRet0;
       $108 = (($$27586) + -1)|0;
       $109 = ($108|0)>($$172$ph|0);
       $110 = (_i64Subtract(($106|0),($107|0),($89|0),($90|0))|0);
       $111 = tempRet0;
       $112 = ($111|0)>(-1);
       $113 = ($110>>>0)>(4294967295);
       $114 = ($111|0)==(-1);
       $115 = $114 & $113;
       $116 = $112 | $115;
       if ($109) {
        $$27586 = $108;$101 = $111;$156 = $116;$157 = $106;$158 = $107;$99 = $110;
       } else {
        $$275$lcssa = $108;$$lcssa = $116;$118 = $110;$120 = $111;$159 = $106;$160 = $107;
        break L23;
       }
      }
      $103 = $0 * 0.0;
      $$070 = $103;
      break L1;
     } else {
      $$275$lcssa = $$174;$$lcssa = $97;$118 = $91;$120 = $92;$159 = $87;$160 = $88;
     }
    } while(0);
    if ($$lcssa) {
     $117 = ($118|0)==(0);
     $119 = ($120|0)==(0);
     $121 = $117 & $119;
     if ($121) {
      $129 = $0 * 0.0;
      $$070 = $129;
      break;
     } else {
      $123 = $120;$125 = $118;
     }
    } else {
     $123 = $160;$125 = $159;
    }
    $122 = ($123>>>0)<(1048576);
    $124 = ($125>>>0)<(0);
    $126 = ($123|0)==(1048576);
    $127 = $126 & $124;
    $128 = $122 | $127;
    if ($128) {
     $$37683 = $$275$lcssa;$130 = $125;$131 = $123;
     while(1) {
      $132 = (_bitshift64Shl(($130|0),($131|0),1)|0);
      $133 = tempRet0;
      $134 = (($$37683) + -1)|0;
      $135 = ($133>>>0)<(1048576);
      $136 = ($132>>>0)<(0);
      $137 = ($133|0)==(1048576);
      $138 = $137 & $136;
      $139 = $135 | $138;
      if ($139) {
       $$37683 = $134;$130 = $132;$131 = $133;
      } else {
       $$376$lcssa = $134;$141 = $132;$142 = $133;
       break;
      }
     }
    } else {
     $$376$lcssa = $$275$lcssa;$141 = $125;$142 = $123;
    }
    $140 = ($$376$lcssa|0)>(0);
    if ($140) {
     $143 = (_i64Add(($141|0),($142|0),0,-1048576)|0);
     $144 = tempRet0;
     $145 = (_bitshift64Shl(($$376$lcssa|0),0,52)|0);
     $146 = tempRet0;
     $147 = $143 | $145;
     $148 = $144 | $146;
     $153 = $148;$154 = $147;
    } else {
     $149 = (1 - ($$376$lcssa))|0;
     $150 = (_bitshift64Lshr(($141|0),($142|0),($149|0))|0);
     $151 = tempRet0;
     $153 = $151;$154 = $150;
    }
    $152 = $153 | $12;
    HEAP32[tempDoublePtr>>2] = $154;HEAP32[tempDoublePtr+4>>2] = $152;$155 = +HEAPF64[tempDoublePtr>>3];
    $$070 = $155;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $27 = $0 * $1;
  $28 = $27 / $27;
  $$070 = $28;
 }
 return (+$$070);
}
function ___DOUBLE_BITS_272($0) {
 $0 = +$0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $0;$1 = HEAP32[tempDoublePtr>>2]|0;
 $2 = HEAP32[tempDoublePtr+4>>2]|0;
 tempRet0 = ($2);
 return ($1|0);
}
function _strlen($0) {
 $0 = $0|0;
 var $$0 = 0, $$015$lcssa = 0, $$01519 = 0, $$1$lcssa = 0, $$pn = 0, $$pre = 0, $$sink = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 & 3;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $$015$lcssa = $0;
   label = 4;
  } else {
   $$01519 = $0;$23 = $1;
   while(1) {
    $4 = HEAP8[$$01519>>0]|0;
    $5 = ($4<<24>>24)==(0);
    if ($5) {
     $$sink = $23;
     break L1;
    }
    $6 = ((($$01519)) + 1|0);
    $7 = $6;
    $8 = $7 & 3;
    $9 = ($8|0)==(0);
    if ($9) {
     $$015$lcssa = $6;
     label = 4;
     break;
    } else {
     $$01519 = $6;$23 = $7;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0 = $$015$lcssa;
  while(1) {
   $10 = HEAP32[$$0>>2]|0;
   $11 = (($10) + -16843009)|0;
   $12 = $10 & -2139062144;
   $13 = $12 ^ -2139062144;
   $14 = $13 & $11;
   $15 = ($14|0)==(0);
   $16 = ((($$0)) + 4|0);
   if ($15) {
    $$0 = $16;
   } else {
    break;
   }
  }
  $17 = $10&255;
  $18 = ($17<<24>>24)==(0);
  if ($18) {
   $$1$lcssa = $$0;
  } else {
   $$pn = $$0;
   while(1) {
    $19 = ((($$pn)) + 1|0);
    $$pre = HEAP8[$19>>0]|0;
    $20 = ($$pre<<24>>24)==(0);
    if ($20) {
     $$1$lcssa = $19;
     break;
    } else {
     $$pn = $19;
    }
   }
  }
  $21 = $$1$lcssa;
  $$sink = $21;
 }
 $22 = (($$sink) - ($1))|0;
 return ($22|0);
}
function _mbrtowc($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$ = 0, $$0 = 0, $$03952 = 0, $$04051 = 0, $$04350 = 0, $$1 = 0, $$141 = 0, $$144 = 0, $$2 = 0, $$47 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = sp;
 $5 = ($3|0)==(0|0);
 $$ = $5 ? 3668 : $3;
 $6 = HEAP32[$$>>2]|0;
 $7 = ($1|0)==(0|0);
 L1: do {
  if ($7) {
   $8 = ($6|0)==(0);
   if ($8) {
    $$0 = 0;
   } else {
    label = 17;
   }
  } else {
   $9 = ($0|0)==(0|0);
   $$47 = $9 ? $4 : $0;
   $10 = ($2|0)==(0);
   if ($10) {
    $$0 = -2;
   } else {
    $11 = ($6|0)==(0);
    if ($11) {
     $12 = HEAP8[$1>>0]|0;
     $13 = ($12<<24>>24)>(-1);
     if ($13) {
      $14 = $12&255;
      HEAP32[$$47>>2] = $14;
      $15 = ($12<<24>>24)!=(0);
      $16 = $15&1;
      $$0 = $16;
      break;
     }
     $17 = (___pthread_self_422()|0);
     $18 = ((($17)) + 188|0);
     $19 = HEAP32[$18>>2]|0;
     $20 = HEAP32[$19>>2]|0;
     $not$ = ($20|0)==(0|0);
     $21 = HEAP8[$1>>0]|0;
     if ($not$) {
      $22 = $21 << 24 >> 24;
      $23 = $22 & 57343;
      HEAP32[$$47>>2] = $23;
      $$0 = 1;
      break;
     }
     $24 = $21&255;
     $25 = (($24) + -194)|0;
     $26 = ($25>>>0)>(50);
     if ($26) {
      label = 17;
      break;
     }
     $27 = ((($1)) + 1|0);
     $28 = (20 + ($25<<2)|0);
     $29 = HEAP32[$28>>2]|0;
     $30 = (($2) + -1)|0;
     $31 = ($30|0)==(0);
     if ($31) {
      $$2 = $29;
     } else {
      $$03952 = $27;$$04051 = $29;$$04350 = $30;
      label = 11;
     }
    } else {
     $$03952 = $1;$$04051 = $6;$$04350 = $2;
     label = 11;
    }
    L14: do {
     if ((label|0) == 11) {
      $32 = HEAP8[$$03952>>0]|0;
      $33 = $32&255;
      $34 = $33 >>> 3;
      $35 = (($34) + -16)|0;
      $36 = $$04051 >> 26;
      $37 = (($34) + ($36))|0;
      $38 = $35 | $37;
      $39 = ($38>>>0)>(7);
      if ($39) {
       label = 17;
       break L1;
      } else {
       $$1 = $$03952;$$141 = $$04051;$$144 = $$04350;$43 = $32;
      }
      while(1) {
       $40 = $$141 << 6;
       $41 = ((($$1)) + 1|0);
       $42 = $43&255;
       $44 = (($42) + -128)|0;
       $45 = $44 | $40;
       $46 = (($$144) + -1)|0;
       $47 = ($45|0)<(0);
       if (!($47)) {
        break;
       }
       $49 = ($46|0)==(0);
       if ($49) {
        $$2 = $45;
        break L14;
       }
       $50 = HEAP8[$41>>0]|0;
       $51 = $50 & -64;
       $52 = ($51<<24>>24)==(-128);
       if ($52) {
        $$1 = $41;$$141 = $45;$$144 = $46;$43 = $50;
       } else {
        label = 17;
        break L1;
       }
      }
      HEAP32[$$>>2] = 0;
      HEAP32[$$47>>2] = $45;
      $48 = (($2) - ($46))|0;
      $$0 = $48;
      break L1;
     }
    } while(0);
    HEAP32[$$>>2] = $$2;
    $$0 = -2;
   }
  }
 } while(0);
 if ((label|0) == 17) {
  HEAP32[$$>>2] = 0;
  $53 = (___errno_location()|0);
  HEAP32[$53>>2] = 84;
  $$0 = -1;
 }
 STACKTOP = sp;return ($$0|0);
}
function ___pthread_self_422() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_pthread_self()|0);
 return ($0|0);
}
function _localeconv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (760|0);
}
function _strcpy($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___stpcpy($0,$1)|0);
 return ($0|0);
}
function ___stpcpy($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$lcssa = 0, $$025$lcssa = 0, $$02536 = 0, $$026$lcssa = 0, $$02642 = 0, $$027$lcssa = 0, $$02741 = 0, $$029 = 0, $$037 = 0, $$1$ph = 0, $$128$ph = 0, $$12834 = 0, $$135 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $1;
 $3 = $0;
 $4 = $2 ^ $3;
 $5 = $4 & 3;
 $6 = ($5|0)==(0);
 L1: do {
  if ($6) {
   $7 = $2 & 3;
   $8 = ($7|0)==(0);
   if ($8) {
    $$026$lcssa = $1;$$027$lcssa = $0;
   } else {
    $$02642 = $1;$$02741 = $0;
    while(1) {
     $9 = HEAP8[$$02642>>0]|0;
     HEAP8[$$02741>>0] = $9;
     $10 = ($9<<24>>24)==(0);
     if ($10) {
      $$029 = $$02741;
      break L1;
     }
     $11 = ((($$02642)) + 1|0);
     $12 = ((($$02741)) + 1|0);
     $13 = $11;
     $14 = $13 & 3;
     $15 = ($14|0)==(0);
     if ($15) {
      $$026$lcssa = $11;$$027$lcssa = $12;
      break;
     } else {
      $$02642 = $11;$$02741 = $12;
     }
    }
   }
   $16 = HEAP32[$$026$lcssa>>2]|0;
   $17 = (($16) + -16843009)|0;
   $18 = $16 & -2139062144;
   $19 = $18 ^ -2139062144;
   $20 = $19 & $17;
   $21 = ($20|0)==(0);
   if ($21) {
    $$02536 = $$027$lcssa;$$037 = $$026$lcssa;$24 = $16;
    while(1) {
     $22 = ((($$037)) + 4|0);
     $23 = ((($$02536)) + 4|0);
     HEAP32[$$02536>>2] = $24;
     $25 = HEAP32[$22>>2]|0;
     $26 = (($25) + -16843009)|0;
     $27 = $25 & -2139062144;
     $28 = $27 ^ -2139062144;
     $29 = $28 & $26;
     $30 = ($29|0)==(0);
     if ($30) {
      $$02536 = $23;$$037 = $22;$24 = $25;
     } else {
      $$0$lcssa = $22;$$025$lcssa = $23;
      break;
     }
    }
   } else {
    $$0$lcssa = $$026$lcssa;$$025$lcssa = $$027$lcssa;
   }
   $$1$ph = $$0$lcssa;$$128$ph = $$025$lcssa;
   label = 8;
  } else {
   $$1$ph = $1;$$128$ph = $0;
   label = 8;
  }
 } while(0);
 if ((label|0) == 8) {
  $31 = HEAP8[$$1$ph>>0]|0;
  HEAP8[$$128$ph>>0] = $31;
  $32 = ($31<<24>>24)==(0);
  if ($32) {
   $$029 = $$128$ph;
  } else {
   $$12834 = $$128$ph;$$135 = $$1$ph;
   while(1) {
    $33 = ((($$135)) + 1|0);
    $34 = ((($$12834)) + 1|0);
    $35 = HEAP8[$33>>0]|0;
    HEAP8[$34>>0] = $35;
    $36 = ($35<<24>>24)==(0);
    if ($36) {
     $$029 = $34;
     break;
    } else {
     $$12834 = $34;$$135 = $33;
    }
   }
  }
 }
 return ($$029|0);
}
function ___ofl_lock() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___lock((3672|0));
 return (3680|0);
}
function ___ofl_unlock() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___unlock((3672|0));
 return;
}
function _fflush($0) {
 $0 = $0|0;
 var $$0 = 0, $$023 = 0, $$02325 = 0, $$02327 = 0, $$024$lcssa = 0, $$02426 = 0, $$1 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 do {
  if ($1) {
   $8 = HEAP32[148]|0;
   $9 = ($8|0)==(0|0);
   if ($9) {
    $29 = 0;
   } else {
    $10 = HEAP32[148]|0;
    $11 = (_fflush($10)|0);
    $29 = $11;
   }
   $12 = (___ofl_lock()|0);
   $$02325 = HEAP32[$12>>2]|0;
   $13 = ($$02325|0)==(0|0);
   if ($13) {
    $$024$lcssa = $29;
   } else {
    $$02327 = $$02325;$$02426 = $29;
    while(1) {
     $14 = ((($$02327)) + 76|0);
     $15 = HEAP32[$14>>2]|0;
     $16 = ($15|0)>(-1);
     if ($16) {
      $17 = (___lockfile($$02327)|0);
      $26 = $17;
     } else {
      $26 = 0;
     }
     $18 = ((($$02327)) + 20|0);
     $19 = HEAP32[$18>>2]|0;
     $20 = ((($$02327)) + 28|0);
     $21 = HEAP32[$20>>2]|0;
     $22 = ($19>>>0)>($21>>>0);
     if ($22) {
      $23 = (___fflush_unlocked($$02327)|0);
      $24 = $23 | $$02426;
      $$1 = $24;
     } else {
      $$1 = $$02426;
     }
     $25 = ($26|0)==(0);
     if (!($25)) {
      ___unlockfile($$02327);
     }
     $27 = ((($$02327)) + 56|0);
     $$023 = HEAP32[$27>>2]|0;
     $28 = ($$023|0)==(0|0);
     if ($28) {
      $$024$lcssa = $$1;
      break;
     } else {
      $$02327 = $$023;$$02426 = $$1;
     }
    }
   }
   ___ofl_unlock();
   $$0 = $$024$lcssa;
  } else {
   $2 = ((($0)) + 76|0);
   $3 = HEAP32[$2>>2]|0;
   $4 = ($3|0)>(-1);
   if (!($4)) {
    $5 = (___fflush_unlocked($0)|0);
    $$0 = $5;
    break;
   }
   $6 = (___lockfile($0)|0);
   $phitmp = ($6|0)==(0);
   $7 = (___fflush_unlocked($0)|0);
   if ($phitmp) {
    $$0 = $7;
   } else {
    ___unlockfile($0);
    $$0 = $7;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___fflush_unlocked($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 20|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ((($0)) + 28|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ($2>>>0)>($4>>>0);
 if ($5) {
  $6 = ((($0)) + 36|0);
  $7 = HEAP32[$6>>2]|0;
  (FUNCTION_TABLE_iiii[$7 & 15]($0,0,0)|0);
  $8 = HEAP32[$1>>2]|0;
  $9 = ($8|0)==(0|0);
  if ($9) {
   $$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $10 = ((($0)) + 4|0);
  $11 = HEAP32[$10>>2]|0;
  $12 = ((($0)) + 8|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = ($11>>>0)<($13>>>0);
  if ($14) {
   $15 = $11;
   $16 = $13;
   $17 = (($15) - ($16))|0;
   $18 = ((($0)) + 40|0);
   $19 = HEAP32[$18>>2]|0;
   (FUNCTION_TABLE_iiii[$19 & 15]($0,$17,1)|0);
  }
  $20 = ((($0)) + 16|0);
  HEAP32[$20>>2] = 0;
  HEAP32[$3>>2] = 0;
  HEAP32[$1>>2] = 0;
  HEAP32[$12>>2] = 0;
  HEAP32[$10>>2] = 0;
  $$0 = 0;
 }
 return ($$0|0);
}
function _sscanf($0,$1,$varargs) {
 $0 = $0|0;
 $1 = $1|0;
 $varargs = $varargs|0;
 var $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = sp;
 HEAP32[$2>>2] = $varargs;
 $3 = (_vsscanf($0,$1,$2)|0);
 STACKTOP = sp;return ($3|0);
}
function _vsscanf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(128|0);
 $3 = sp;
 dest=$3; stop=dest+124|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 $4 = ((($3)) + 32|0);
 HEAP32[$4>>2] = 9;
 $5 = ((($3)) + 44|0);
 HEAP32[$5>>2] = $0;
 $6 = ((($3)) + 76|0);
 HEAP32[$6>>2] = -1;
 $7 = ((($3)) + 84|0);
 HEAP32[$7>>2] = $0;
 $8 = (_vfscanf($3,$1,$2)|0);
 STACKTOP = sp;return ($8|0);
}
function _do_read($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = (___string_read($0,$1,$2)|0);
 return ($3|0);
}
function _vfscanf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$$0266 = 0, $$$0268 = 0, $$$0305 = 0, $$$3 = 0, $$0266$lcssa = 0, $$0266417 = 0, $$0268 = 0, $$0272 = 0, $$0273429 = 0, $$0276$ph = 0, $$0278$ph = 0, $$0278$ph$phi = 0, $$0278$ph336 = 0, $$0283428 = 0, $$0286420 = 0, $$0288$ = 0, $$0288425 = 0, $$0292 = 0, $$0293 = 0;
 var $$0305423 = 0, $$10 = 0, $$11 = 0, $$1267 = 0, $$1271 = 0, $$1274 = 0, $$1277$ph = 0, $$1279 = 0, $$1284 = 0, $$1289 = 0, $$2 = 0, $$2275 = 0, $$2280 = 0, $$2280$ph = 0, $$2280$ph$phi = 0, $$2285 = 0, $$2290 = 0, $$2307$ph = 0, $$3$lcssa = 0, $$319 = 0;
 var $$320 = 0, $$321 = 0, $$322 = 0, $$327 = 0, $$328$le439 = 0, $$328$le441 = 0, $$3281 = 0, $$3291 = 0, $$3416 = 0, $$4282 = 0, $$4309 = 0, $$5 = 0, $$5299 = 0, $$5310 = 0, $$6 = 0, $$6311 = 0, $$7 = 0, $$7$ph = 0, $$7312 = 0, $$8 = 0;
 var $$8313 = 0, $$9 = 0, $$9314 = 0, $$9314$ph = 0, $$lcssa355 = 0, $$not = 0, $$old4 = 0, $$ph = 0, $$ph353 = 0, $$pre = 0, $$pre$phi516Z2D = 0, $$pre507 = 0, $$pre509 = 0, $$pre511 = 0, $$pre512 = 0, $$pre513 = 0, $$pre514 = 0, $$pre515 = 0, $$sink443 = 0, $$sroa$2$0$$sroa_idx13 = 0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0;
 var $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0;
 var $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0;
 var $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0;
 var $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0;
 var $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0;
 var $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0.0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0.0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0;
 var $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0;
 var $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_next = 0, $expanded = 0, $expanded1 = 0, $expanded3 = 0, $expanded4 = 0, $expanded5 = 0, $factor = 0, $factor331 = 0, $isdigit = 0;
 var $isdigit316 = 0, $isdigit316415 = 0, $isdigittmp = 0, $isdigittmp315 = 0, $isdigittmp315414 = 0, $narrow = 0, $narrow469 = 0, $or$cond = 0, $or$cond3 = 0, $or$cond318 = 0, $or$cond5 = 0, $trunc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 288|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(288|0);
 $3 = sp + 8|0;
 $4 = sp + 17|0;
 $5 = sp;
 $6 = sp + 16|0;
 $7 = ((($0)) + 76|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ($8|0)>(-1);
 if ($9) {
  $10 = (___lockfile($0)|0);
  $306 = $10;
 } else {
  $306 = 0;
 }
 $11 = HEAP8[$1>>0]|0;
 $12 = ($11<<24>>24)==(0);
 L4: do {
  if ($12) {
   $$3291 = 0;
  } else {
   $13 = ((($0)) + 4|0);
   $14 = ((($0)) + 100|0);
   $15 = ((($0)) + 108|0);
   $16 = ((($0)) + 8|0);
   $17 = ((($4)) + 10|0);
   $18 = ((($4)) + 33|0);
   $$sroa$2$0$$sroa_idx13 = ((($3)) + 4|0);
   $19 = ((($4)) + 46|0);
   $20 = ((($4)) + 94|0);
   $21 = ((($4)) + 1|0);
   $22 = ((($4)) + 1|0);
   $$0273429 = $1;$$0283428 = 0;$$0288425 = 0;$$0305423 = 0;$102 = 0;$24 = $11;
   L6: while(1) {
    $23 = $24&255;
    $25 = (_isspace($23)|0);
    $26 = ($25|0)==(0);
    L8: do {
     if ($26) {
      $53 = ($24<<24>>24)==(37);
      L10: do {
       if ($53) {
        $54 = ((($$0273429)) + 1|0);
        $55 = HEAP8[$54>>0]|0;
        L12: do {
         switch ($55<<24>>24) {
         case 37:  {
          break L10;
          break;
         }
         case 42:  {
          $76 = ((($$0273429)) + 2|0);
          $$0293 = 0;$$2275 = $76;
          break;
         }
         default: {
          $77 = $55&255;
          $isdigittmp = (($77) + -48)|0;
          $isdigit = ($isdigittmp>>>0)<(10);
          if ($isdigit) {
           $78 = ((($$0273429)) + 2|0);
           $79 = HEAP8[$78>>0]|0;
           $80 = ($79<<24>>24)==(36);
           if ($80) {
            $81 = (_arg_n($2,$isdigittmp)|0);
            $82 = ((($$0273429)) + 3|0);
            $$0293 = $81;$$2275 = $82;
            break L12;
           }
          }
          $arglist_current = HEAP32[$2>>2]|0;
          $83 = $arglist_current;
          $84 = ((0) + 4|0);
          $expanded1 = $84;
          $expanded = (($expanded1) - 1)|0;
          $85 = (($83) + ($expanded))|0;
          $86 = ((0) + 4|0);
          $expanded5 = $86;
          $expanded4 = (($expanded5) - 1)|0;
          $expanded3 = $expanded4 ^ -1;
          $87 = $85 & $expanded3;
          $88 = $87;
          $89 = HEAP32[$88>>2]|0;
          $arglist_next = ((($88)) + 4|0);
          HEAP32[$2>>2] = $arglist_next;
          $$0293 = $89;$$2275 = $54;
         }
         }
        } while(0);
        $90 = HEAP8[$$2275>>0]|0;
        $91 = $90&255;
        $isdigittmp315414 = (($91) + -48)|0;
        $isdigit316415 = ($isdigittmp315414>>>0)<(10);
        if ($isdigit316415) {
         $$0266417 = 0;$$3416 = $$2275;$95 = $91;
         while(1) {
          $92 = ($$0266417*10)|0;
          $93 = (($92) + -48)|0;
          $94 = (($93) + ($95))|0;
          $96 = ((($$3416)) + 1|0);
          $97 = HEAP8[$96>>0]|0;
          $98 = $97&255;
          $isdigittmp315 = (($98) + -48)|0;
          $isdigit316 = ($isdigittmp315>>>0)<(10);
          if ($isdigit316) {
           $$0266417 = $94;$$3416 = $96;$95 = $98;
          } else {
           $$0266$lcssa = $94;$$3$lcssa = $96;$$lcssa355 = $97;
           break;
          }
         }
        } else {
         $$0266$lcssa = 0;$$3$lcssa = $$2275;$$lcssa355 = $90;
        }
        $99 = ($$lcssa355<<24>>24)==(109);
        $100 = ($$0293|0)!=(0|0);
        $101 = ((($$3$lcssa)) + 1|0);
        $$$0305 = $99 ? 0 : $$0305423;
        $$327 = $99 ? 0 : $102;
        $$$3 = $99 ? $101 : $$3$lcssa;
        $narrow = $100 & $99;
        $103 = ((($$$3)) + 1|0);
        $104 = HEAP8[$$$3>>0]|0;
        switch ($104<<24>>24) {
        case 104:  {
         $105 = HEAP8[$103>>0]|0;
         $106 = ($105<<24>>24)==(104);
         $107 = ((($$$3)) + 2|0);
         $$319 = $106 ? $107 : $103;
         $$320 = $106 ? -2 : -1;
         $$0268 = $$320;$$5 = $$319;
         break;
        }
        case 108:  {
         $108 = HEAP8[$103>>0]|0;
         $109 = ($108<<24>>24)==(108);
         $110 = ((($$$3)) + 2|0);
         $$321 = $109 ? $110 : $103;
         $$322 = $109 ? 3 : 1;
         $$0268 = $$322;$$5 = $$321;
         break;
        }
        case 106:  {
         $$0268 = 3;$$5 = $103;
         break;
        }
        case 116: case 122:  {
         $$0268 = 1;$$5 = $103;
         break;
        }
        case 76:  {
         $$0268 = 2;$$5 = $103;
         break;
        }
        case 110: case 112: case 67: case 83: case 91: case 99: case 115: case 88: case 71: case 70: case 69: case 65: case 103: case 102: case 101: case 97: case 120: case 117: case 111: case 105: case 100:  {
         $$0268 = 0;$$5 = $$$3;
         break;
        }
        default: {
         $$7312 = $$$0305;$309 = $$327;$narrow469 = $narrow;
         label = 137;
         break L6;
        }
        }
        $111 = HEAP8[$$5>>0]|0;
        $112 = $111&255;
        $113 = $112 & 47;
        $114 = ($113|0)==(3);
        $115 = $112 | 32;
        $$ = $114 ? $115 : $112;
        $$$0268 = $114 ? 1 : $$0268;
        $trunc = $$&255;
        switch ($trunc<<24>>24) {
        case 99:  {
         $116 = ($$0266$lcssa|0)>(1);
         $$$0266 = $116 ? $$0266$lcssa : 1;
         $$1267 = $$$0266;$$1284 = $$0283428;
         break;
        }
        case 91:  {
         $$1267 = $$0266$lcssa;$$1284 = $$0283428;
         break;
        }
        case 110:  {
         $117 = ($$0283428|0)<(0);
         $118 = $117 << 31 >> 31;
         _store_int($$0293,$$$0268,$$0283428,$118);
         $$11 = $$5;$$1289 = $$0288425;$$2285 = $$0283428;$$6311 = $$$0305;$307 = $$327;
         break L8;
         break;
        }
        default: {
         ___shlim($0,0);
         while(1) {
          $119 = HEAP32[$13>>2]|0;
          $120 = HEAP32[$14>>2]|0;
          $121 = ($119>>>0)<($120>>>0);
          if ($121) {
           $122 = ((($119)) + 1|0);
           HEAP32[$13>>2] = $122;
           $123 = HEAP8[$119>>0]|0;
           $124 = $123&255;
           $126 = $124;
          } else {
           $125 = (___shgetc($0)|0);
           $126 = $125;
          }
          $127 = (_isspace($126)|0);
          $128 = ($127|0)==(0);
          if ($128) {
           break;
          }
         }
         $129 = HEAP32[$14>>2]|0;
         $130 = ($129|0)==(0|0);
         if ($130) {
          $$pre507 = HEAP32[$13>>2]|0;
          $138 = $$pre507;
         } else {
          $131 = HEAP32[$13>>2]|0;
          $132 = ((($131)) + -1|0);
          HEAP32[$13>>2] = $132;
          $133 = $132;
          $138 = $133;
         }
         $134 = HEAP32[$15>>2]|0;
         $135 = HEAP32[$16>>2]|0;
         $136 = (($134) + ($$0283428))|0;
         $137 = (($136) + ($138))|0;
         $139 = (($137) - ($135))|0;
         $$1267 = $$0266$lcssa;$$1284 = $139;
        }
        }
        ___shlim($0,$$1267);
        $140 = HEAP32[$13>>2]|0;
        $141 = HEAP32[$14>>2]|0;
        $142 = ($140>>>0)<($141>>>0);
        if ($142) {
         $143 = ((($140)) + 1|0);
         HEAP32[$13>>2] = $143;
         $147 = $141;
        } else {
         $144 = (___shgetc($0)|0);
         $145 = ($144|0)<(0);
         if ($145) {
          $$7312 = $$$0305;$309 = $$327;$narrow469 = $narrow;
          label = 137;
          break L6;
         }
         $$pre509 = HEAP32[$14>>2]|0;
         $147 = $$pre509;
        }
        $146 = ($147|0)==(0|0);
        if (!($146)) {
         $148 = HEAP32[$13>>2]|0;
         $149 = ((($148)) + -1|0);
         HEAP32[$13>>2] = $149;
        }
        L55: do {
         switch ($trunc<<24>>24) {
         case 91: case 99: case 115:  {
          $150 = ($$|0)==(99);
          $151 = $$ | 16;
          $152 = ($151|0)==(115);
          L57: do {
           if ($152) {
            $153 = ($$|0)==(115);
            _memset(($21|0),-1,256)|0;
            HEAP8[$4>>0] = 0;
            if ($153) {
             HEAP8[$18>>0] = 0;
             ;HEAP8[$17>>0]=0|0;HEAP8[$17+1>>0]=0|0;HEAP8[$17+2>>0]=0|0;HEAP8[$17+3>>0]=0|0;HEAP8[$17+4>>0]=0|0;
             $$9 = $$5;
            } else {
             $$9 = $$5;
            }
           } else {
            $154 = ((($$5)) + 1|0);
            $155 = HEAP8[$154>>0]|0;
            $156 = ($155<<24>>24)==(94);
            $157 = ((($$5)) + 2|0);
            $$0292 = $156&1;
            $$6 = $156 ? $157 : $154;
            $158 = $156&1;
            _memset(($22|0),($158|0),256)|0;
            HEAP8[$4>>0] = 0;
            $159 = HEAP8[$$6>>0]|0;
            switch ($159<<24>>24) {
            case 45:  {
             $$sink443 = $19;
             label = 64;
             break;
            }
            case 93:  {
             $$sink443 = $20;
             label = 64;
             break;
            }
            default: {
             $$pre514 = $$0292 ^ 1;
             $$pre515 = $$pre514&255;
             $$7$ph = $$6;$$pre$phi516Z2D = $$pre515;
            }
            }
            if ((label|0) == 64) {
             label = 0;
             $160 = ((($$6)) + 1|0);
             $161 = $$0292 ^ 1;
             $162 = $161&255;
             HEAP8[$$sink443>>0] = $162;
             $$7$ph = $160;$$pre$phi516Z2D = $162;
            }
            $$7 = $$7$ph;
            while(1) {
             $163 = HEAP8[$$7>>0]|0;
             L69: do {
              switch ($163<<24>>24) {
              case 0:  {
               $$7312 = $$$0305;$309 = $$327;$narrow469 = $narrow;
               label = 137;
               break L6;
               break;
              }
              case 93:  {
               $$9 = $$7;
               break L57;
               break;
              }
              case 45:  {
               $164 = ((($$7)) + 1|0);
               $165 = HEAP8[$164>>0]|0;
               switch ($165<<24>>24) {
               case 93: case 0:  {
                $$8 = $$7;$176 = 45;
                break L69;
                break;
               }
               default: {
               }
               }
               $166 = ((($$7)) + -1|0);
               $167 = HEAP8[$166>>0]|0;
               $168 = ($167&255)<($165&255);
               if ($168) {
                $169 = $167&255;
                $$0286420 = $169;
                while(1) {
                 $170 = (($$0286420) + 1)|0;
                 $171 = (($4) + ($170)|0);
                 HEAP8[$171>>0] = $$pre$phi516Z2D;
                 $172 = HEAP8[$164>>0]|0;
                 $173 = $172&255;
                 $174 = ($170|0)<($173|0);
                 if ($174) {
                  $$0286420 = $170;
                 } else {
                  $$8 = $164;$176 = $172;
                  break;
                 }
                }
               } else {
                $$8 = $164;$176 = $165;
               }
               break;
              }
              default: {
               $$8 = $$7;$176 = $163;
              }
              }
             } while(0);
             $175 = $176&255;
             $177 = (($175) + 1)|0;
             $178 = (($4) + ($177)|0);
             HEAP8[$178>>0] = $$pre$phi516Z2D;
             $179 = ((($$8)) + 1|0);
             $$7 = $179;
            }
           }
          } while(0);
          $180 = (($$1267) + 1)|0;
          $181 = $150 ? $180 : 31;
          $182 = ($$$0268|0)==(1);
          L77: do {
           if ($182) {
            if ($narrow) {
             $183 = $181 << 2;
             $184 = (_malloc($183)|0);
             $185 = ($184|0)==(0|0);
             if ($185) {
              $$7312 = 0;$309 = 0;$narrow469 = 1;
              label = 137;
              break L6;
             } else {
              $311 = $184;
             }
            } else {
             $311 = $$0293;
            }
            HEAP32[$3>>2] = 0;
            HEAP32[$$sroa$2$0$$sroa_idx13>>2] = 0;
            $$0276$ph = $181;$$0278$ph = 0;$$ph = $311;
            L82: while(1) {
             $186 = ($$ph|0)==(0|0);
             $$0278$ph336 = $$0278$ph;
             while(1) {
              L86: while(1) {
               $187 = HEAP32[$13>>2]|0;
               $188 = HEAP32[$14>>2]|0;
               $189 = ($187>>>0)<($188>>>0);
               if ($189) {
                $190 = ((($187)) + 1|0);
                HEAP32[$13>>2] = $190;
                $191 = HEAP8[$187>>0]|0;
                $192 = $191&255;
                $195 = $192;
               } else {
                $193 = (___shgetc($0)|0);
                $195 = $193;
               }
               $194 = (($195) + 1)|0;
               $196 = (($4) + ($194)|0);
               $197 = HEAP8[$196>>0]|0;
               $198 = ($197<<24>>24)==(0);
               if ($198) {
                break L82;
               }
               $199 = $195&255;
               HEAP8[$6>>0] = $199;
               $200 = (_mbrtowc($5,$6,1,$3)|0);
               switch ($200|0) {
               case -1:  {
                $$7312 = 0;$309 = $$ph;$narrow469 = $narrow;
                label = 137;
                break L6;
                break;
               }
               case -2:  {
                break;
               }
               default: {
                break L86;
               }
               }
              }
              if ($186) {
               $$1279 = $$0278$ph336;
              } else {
               $201 = (($$ph) + ($$0278$ph336<<2)|0);
               $202 = (($$0278$ph336) + 1)|0;
               $203 = HEAP32[$5>>2]|0;
               HEAP32[$201>>2] = $203;
               $$1279 = $202;
              }
              $204 = ($$1279|0)==($$0276$ph|0);
              $or$cond = $narrow & $204;
              if ($or$cond) {
               break;
              } else {
               $$0278$ph336 = $$1279;
              }
             }
             $factor331 = $$0276$ph << 1;
             $205 = $factor331 | 1;
             $206 = $205 << 2;
             $207 = (_realloc($$ph,$206)|0);
             $208 = ($207|0)==(0|0);
             if ($208) {
              $$7312 = 0;$309 = $$ph;$narrow469 = 1;
              label = 137;
              break L6;
             } else {
              $$0278$ph$phi = $$0276$ph;$$0276$ph = $205;$$ph = $207;$$0278$ph = $$0278$ph$phi;
             }
            }
            $209 = (_mbsinit($3)|0);
            $210 = ($209|0)==(0);
            if ($210) {
             $$7312 = 0;$309 = $$ph;$narrow469 = $narrow;
             label = 137;
             break L6;
            } else {
             $$4282 = $$0278$ph336;$$4309 = 0;$$5299 = $$ph;$312 = $$ph;
            }
           } else {
            if ($narrow) {
             $211 = (_malloc($181)|0);
             $212 = ($211|0)==(0|0);
             if ($212) {
              $$7312 = 0;$309 = 0;$narrow469 = 1;
              label = 137;
              break L6;
             } else {
              $$1277$ph = $181;$$2280$ph = 0;$$2307$ph = $211;
             }
             while(1) {
              $$2280 = $$2280$ph;
              while(1) {
               $213 = HEAP32[$13>>2]|0;
               $214 = HEAP32[$14>>2]|0;
               $215 = ($213>>>0)<($214>>>0);
               if ($215) {
                $216 = ((($213)) + 1|0);
                HEAP32[$13>>2] = $216;
                $217 = HEAP8[$213>>0]|0;
                $218 = $217&255;
                $221 = $218;
               } else {
                $219 = (___shgetc($0)|0);
                $221 = $219;
               }
               $220 = (($221) + 1)|0;
               $222 = (($4) + ($220)|0);
               $223 = HEAP8[$222>>0]|0;
               $224 = ($223<<24>>24)==(0);
               if ($224) {
                $$4282 = $$2280;$$4309 = $$2307$ph;$$5299 = 0;$312 = 0;
                break L77;
               }
               $225 = $221&255;
               $226 = (($$2280) + 1)|0;
               $227 = (($$2307$ph) + ($$2280)|0);
               HEAP8[$227>>0] = $225;
               $228 = ($226|0)==($$1277$ph|0);
               if ($228) {
                break;
               } else {
                $$2280 = $226;
               }
              }
              $factor = $$1277$ph << 1;
              $229 = $factor | 1;
              $230 = (_realloc($$2307$ph,$229)|0);
              $231 = ($230|0)==(0|0);
              if ($231) {
               $$7312 = $$2307$ph;$309 = 0;$narrow469 = 1;
               label = 137;
               break L6;
              } else {
               $$2280$ph$phi = $$1277$ph;$$1277$ph = $229;$$2307$ph = $230;$$2280$ph = $$2280$ph$phi;
              }
             }
            }
            $232 = ($$0293|0)==(0|0);
            if ($232) {
             $250 = $147;
             while(1) {
              $248 = HEAP32[$13>>2]|0;
              $249 = ($248>>>0)<($250>>>0);
              if ($249) {
               $251 = ((($248)) + 1|0);
               HEAP32[$13>>2] = $251;
               $252 = HEAP8[$248>>0]|0;
               $253 = $252&255;
               $256 = $253;
              } else {
               $254 = (___shgetc($0)|0);
               $256 = $254;
              }
              $255 = (($256) + 1)|0;
              $257 = (($4) + ($255)|0);
              $258 = HEAP8[$257>>0]|0;
              $259 = ($258<<24>>24)==(0);
              if ($259) {
               $$4282 = 0;$$4309 = 0;$$5299 = 0;$312 = 0;
               break L77;
              }
              $$pre512 = HEAP32[$14>>2]|0;
              $250 = $$pre512;
             }
            } else {
             $$3281 = 0;$235 = $147;
             while(1) {
              $233 = HEAP32[$13>>2]|0;
              $234 = ($233>>>0)<($235>>>0);
              if ($234) {
               $236 = ((($233)) + 1|0);
               HEAP32[$13>>2] = $236;
               $237 = HEAP8[$233>>0]|0;
               $238 = $237&255;
               $241 = $238;
              } else {
               $239 = (___shgetc($0)|0);
               $241 = $239;
              }
              $240 = (($241) + 1)|0;
              $242 = (($4) + ($240)|0);
              $243 = HEAP8[$242>>0]|0;
              $244 = ($243<<24>>24)==(0);
              if ($244) {
               $$4282 = $$3281;$$4309 = $$0293;$$5299 = 0;$312 = 0;
               break L77;
              }
              $245 = $241&255;
              $246 = (($$3281) + 1)|0;
              $247 = (($$0293) + ($$3281)|0);
              HEAP8[$247>>0] = $245;
              $$pre511 = HEAP32[$14>>2]|0;
              $$3281 = $246;$235 = $$pre511;
             }
            }
           }
          } while(0);
          $260 = HEAP32[$14>>2]|0;
          $261 = ($260|0)==(0|0);
          if ($261) {
           $$pre513 = HEAP32[$13>>2]|0;
           $268 = $$pre513;
          } else {
           $262 = HEAP32[$13>>2]|0;
           $263 = ((($262)) + -1|0);
           HEAP32[$13>>2] = $263;
           $264 = $263;
           $268 = $264;
          }
          $265 = HEAP32[$15>>2]|0;
          $266 = HEAP32[$16>>2]|0;
          $267 = (($268) - ($266))|0;
          $269 = (($267) + ($265))|0;
          $270 = ($269|0)==(0);
          if ($270) {
           $$9314$ph = $$4309;$$ph353 = $312;
           label = 139;
           break L6;
          }
          $$not = $150 ^ 1;
          $271 = ($269|0)==($$1267|0);
          $or$cond318 = $271 | $$not;
          if (!($or$cond318)) {
           $$9314$ph = $$4309;$$ph353 = $312;
           label = 139;
           break L6;
          }
          do {
           if ($narrow) {
            if ($182) {
             HEAP32[$$0293>>2] = $$5299;
             break;
            } else {
             HEAP32[$$0293>>2] = $$4309;
             break;
            }
           }
          } while(0);
          if ($150) {
           $$10 = $$9;$$5310 = $$4309;$310 = $312;
          } else {
           $272 = ($$5299|0)==(0|0);
           if (!($272)) {
            $273 = (($$5299) + ($$4282<<2)|0);
            HEAP32[$273>>2] = 0;
           }
           $274 = ($$4309|0)==(0|0);
           if ($274) {
            $$10 = $$9;$$5310 = 0;$310 = $312;
            break L55;
           }
           $275 = (($$4309) + ($$4282)|0);
           HEAP8[$275>>0] = 0;
           $$10 = $$9;$$5310 = $$4309;$310 = $312;
          }
          break;
         }
         case 120: case 88: case 112:  {
          $$0272 = 16;
          label = 125;
          break;
         }
         case 111:  {
          $$0272 = 8;
          label = 125;
          break;
         }
         case 117: case 100:  {
          $$0272 = 10;
          label = 125;
          break;
         }
         case 105:  {
          $$0272 = 0;
          label = 125;
          break;
         }
         case 71: case 103: case 70: case 102: case 69: case 101: case 65: case 97:  {
          $285 = (+___floatscan($0,$$$0268,0));
          $286 = HEAP32[$15>>2]|0;
          $287 = HEAP32[$13>>2]|0;
          $288 = HEAP32[$16>>2]|0;
          $289 = (($288) - ($287))|0;
          $290 = ($286|0)==($289|0);
          if ($290) {
           $$9314$ph = $$$0305;$$ph353 = $$327;
           label = 139;
           break L6;
          }
          $291 = ($$0293|0)==(0|0);
          if ($291) {
           $$10 = $$5;$$5310 = $$$0305;$310 = $$327;
          } else {
           switch ($$$0268|0) {
           case 0:  {
            $292 = $285;
            HEAPF32[$$0293>>2] = $292;
            $$10 = $$5;$$5310 = $$$0305;$310 = $$327;
            break L55;
            break;
           }
           case 1:  {
            HEAPF64[$$0293>>3] = $285;
            $$10 = $$5;$$5310 = $$$0305;$310 = $$327;
            break L55;
            break;
           }
           case 2:  {
            HEAPF64[$$0293>>3] = $285;
            $$10 = $$5;$$5310 = $$$0305;$310 = $$327;
            break L55;
            break;
           }
           default: {
            $$10 = $$5;$$5310 = $$$0305;$310 = $$327;
            break L55;
           }
           }
          }
          break;
         }
         default: {
          $$10 = $$5;$$5310 = $$$0305;$310 = $$327;
         }
         }
        } while(0);
        do {
         if ((label|0) == 125) {
          label = 0;
          $276 = (___intscan($0,$$0272,0,-1,-1)|0);
          $277 = tempRet0;
          $278 = HEAP32[$15>>2]|0;
          $279 = HEAP32[$13>>2]|0;
          $280 = HEAP32[$16>>2]|0;
          $281 = (($280) - ($279))|0;
          $282 = ($278|0)==($281|0);
          if ($282) {
           $$9314$ph = $$$0305;$$ph353 = $$327;
           label = 139;
           break L6;
          }
          $283 = ($$|0)==(112);
          $or$cond3 = $100 & $283;
          if ($or$cond3) {
           $284 = $276;
           HEAP32[$$0293>>2] = $284;
           $$10 = $$5;$$5310 = $$$0305;$310 = $$327;
           break;
          } else {
           _store_int($$0293,$$$0268,$276,$277);
           $$10 = $$5;$$5310 = $$$0305;$310 = $$327;
           break;
          }
         }
        } while(0);
        $293 = HEAP32[$15>>2]|0;
        $294 = HEAP32[$13>>2]|0;
        $295 = HEAP32[$16>>2]|0;
        $296 = (($293) + ($$1284))|0;
        $297 = (($296) + ($294))|0;
        $298 = (($297) - ($295))|0;
        $299 = $100&1;
        $$0288$ = (($299) + ($$0288425))|0;
        $$11 = $$10;$$1289 = $$0288$;$$2285 = $298;$$6311 = $$5310;$307 = $310;
        break L8;
       }
      } while(0);
      $56 = $53&1;
      $57 = (($$0273429) + ($56)|0);
      ___shlim($0,0);
      $58 = HEAP32[$13>>2]|0;
      $59 = HEAP32[$14>>2]|0;
      $60 = ($58>>>0)<($59>>>0);
      if ($60) {
       $61 = ((($58)) + 1|0);
       HEAP32[$13>>2] = $61;
       $62 = HEAP8[$58>>0]|0;
       $63 = $62&255;
       $68 = $63;
      } else {
       $64 = (___shgetc($0)|0);
       $68 = $64;
      }
      $65 = HEAP8[$57>>0]|0;
      $66 = $65&255;
      $67 = ($68|0)==($66|0);
      if (!($67)) {
       label = 22;
       break L6;
      }
      $75 = (($$0283428) + 1)|0;
      $$11 = $57;$$1289 = $$0288425;$$2285 = $75;$$6311 = $$0305423;$307 = $102;
     } else {
      $$1274 = $$0273429;
      while(1) {
       $27 = ((($$1274)) + 1|0);
       $28 = HEAP8[$27>>0]|0;
       $29 = $28&255;
       $30 = (_isspace($29)|0);
       $31 = ($30|0)==(0);
       if ($31) {
        break;
       } else {
        $$1274 = $27;
       }
      }
      ___shlim($0,0);
      while(1) {
       $32 = HEAP32[$13>>2]|0;
       $33 = HEAP32[$14>>2]|0;
       $34 = ($32>>>0)<($33>>>0);
       if ($34) {
        $35 = ((($32)) + 1|0);
        HEAP32[$13>>2] = $35;
        $36 = HEAP8[$32>>0]|0;
        $37 = $36&255;
        $39 = $37;
       } else {
        $38 = (___shgetc($0)|0);
        $39 = $38;
       }
       $40 = (_isspace($39)|0);
       $41 = ($40|0)==(0);
       if ($41) {
        break;
       }
      }
      $42 = HEAP32[$14>>2]|0;
      $43 = ($42|0)==(0|0);
      if ($43) {
       $$pre = HEAP32[$13>>2]|0;
       $51 = $$pre;
      } else {
       $44 = HEAP32[$13>>2]|0;
       $45 = ((($44)) + -1|0);
       HEAP32[$13>>2] = $45;
       $46 = $45;
       $51 = $46;
      }
      $47 = HEAP32[$15>>2]|0;
      $48 = HEAP32[$16>>2]|0;
      $49 = (($47) + ($$0283428))|0;
      $50 = (($49) + ($51))|0;
      $52 = (($50) - ($48))|0;
      $$11 = $$1274;$$1289 = $$0288425;$$2285 = $52;$$6311 = $$0305423;$307 = $102;
     }
    } while(0);
    $300 = ((($$11)) + 1|0);
    $301 = HEAP8[$300>>0]|0;
    $302 = ($301<<24>>24)==(0);
    if ($302) {
     $$3291 = $$1289;
     break L4;
    } else {
     $$0273429 = $300;$$0283428 = $$2285;$$0288425 = $$1289;$$0305423 = $$6311;$102 = $307;$24 = $301;
    }
   }
   if ((label|0) == 22) {
    $69 = HEAP32[$14>>2]|0;
    $70 = ($69|0)==(0|0);
    if (!($70)) {
     $71 = HEAP32[$13>>2]|0;
     $72 = ((($71)) + -1|0);
     HEAP32[$13>>2] = $72;
    }
    $73 = ($68|0)>(-1);
    $74 = ($$0288425|0)!=(0);
    $or$cond5 = $74 | $73;
    if ($or$cond5) {
     $$3291 = $$0288425;
     break;
    } else {
     $$1271 = 0;$$8313 = $$0305423;$308 = $102;
     label = 138;
    }
   }
   else if ((label|0) == 137) {
    $$328$le441 = $narrow469&1;
    $$old4 = ($$0288425|0)==(0);
    if ($$old4) {
     $$1271 = $$328$le441;$$8313 = $$7312;$308 = $309;
     label = 138;
    } else {
     $$2 = $$328$le441;$$2290 = $$0288425;$$9314 = $$7312;$304 = $309;
    }
   }
   else if ((label|0) == 139) {
    $$328$le439 = $narrow&1;
    $$2 = $$328$le439;$$2290 = $$0288425;$$9314 = $$9314$ph;$304 = $$ph353;
   }
   if ((label|0) == 138) {
    $$2 = $$1271;$$2290 = -1;$$9314 = $$8313;$304 = $308;
   }
   $303 = ($$2|0)==(0);
   if ($303) {
    $$3291 = $$2290;
   } else {
    _free($$9314);
    _free($304);
    $$3291 = $$2290;
   }
  }
 } while(0);
 $305 = ($306|0)==(0);
 if (!($305)) {
  ___unlockfile($0);
 }
 STACKTOP = sp;return ($$3291|0);
}
function _arg_n($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arglist_current = 0, $arglist_next = 0, $expanded = 0, $expanded1 = 0, $expanded3 = 0, $expanded4 = 0, $expanded5 = 0, $vacopy_currentptr = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = sp;
 $vacopy_currentptr = HEAP32[$0>>2]|0;
 HEAP32[$2>>2] = $vacopy_currentptr;
 $$0 = $1;
 while(1) {
  $3 = ($$0>>>0)>(1);
  $arglist_current = HEAP32[$2>>2]|0;
  $4 = $arglist_current;
  $5 = ((0) + 4|0);
  $expanded1 = $5;
  $expanded = (($expanded1) - 1)|0;
  $6 = (($4) + ($expanded))|0;
  $7 = ((0) + 4|0);
  $expanded5 = $7;
  $expanded4 = (($expanded5) - 1)|0;
  $expanded3 = $expanded4 ^ -1;
  $8 = $6 & $expanded3;
  $9 = $8;
  $10 = HEAP32[$9>>2]|0;
  $arglist_next = ((($9)) + 4|0);
  HEAP32[$2>>2] = $arglist_next;
  $11 = (($$0) + -1)|0;
  if ($3) {
   $$0 = $11;
  } else {
   break;
  }
 }
 STACKTOP = sp;return ($10|0);
}
function _store_int($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ($0|0)==(0|0);
 L1: do {
  if (!($4)) {
   switch ($1|0) {
   case -2:  {
    $5 = $2&255;
    HEAP8[$0>>0] = $5;
    break L1;
    break;
   }
   case -1:  {
    $6 = $2&65535;
    HEAP16[$0>>1] = $6;
    break L1;
    break;
   }
   case 0:  {
    HEAP32[$0>>2] = $2;
    break L1;
    break;
   }
   case 1:  {
    HEAP32[$0>>2] = $2;
    break L1;
    break;
   }
   case 3:  {
    $7 = $0;
    $8 = $7;
    HEAP32[$8>>2] = $2;
    $9 = (($7) + 4)|0;
    $10 = $9;
    HEAP32[$10>>2] = $3;
    break L1;
    break;
   }
   default: {
    break L1;
   }
   }
  }
 } while(0);
 return;
}
function _mbsinit($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  $5 = 1;
 } else {
  $2 = HEAP32[$0>>2]|0;
  $3 = ($2|0)==(0);
  $5 = $3;
 }
 $4 = $5&1;
 return ($4|0);
}
function ___string_read($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$027 = 0, $$027$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 84|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = (($2) + 256)|0;
 $6 = (_memchr($4,0,$5)|0);
 $7 = ($6|0)==(0|0);
 $8 = $6;
 $9 = $4;
 $10 = (($8) - ($9))|0;
 $$027 = $7 ? $5 : $10;
 $11 = ($$027>>>0)<($2>>>0);
 $$027$ = $11 ? $$027 : $2;
 _memcpy(($1|0),($4|0),($$027$|0))|0;
 $12 = (($4) + ($$027$)|0);
 $13 = ((($0)) + 4|0);
 HEAP32[$13>>2] = $12;
 $14 = (($4) + ($$027)|0);
 $15 = ((($0)) + 8|0);
 HEAP32[$15>>2] = $14;
 HEAP32[$3>>2] = $14;
 return ($$027$|0);
}
function _malloc($0) {
 $0 = $0|0;
 var $$$0192$i = 0, $$$0193$i = 0, $$$4236$i = 0, $$$4351$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0189$i = 0, $$0192$lcssa$i = 0, $$01928$i = 0, $$0193$lcssa$i = 0, $$01937$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0;
 var $$0212$i$i = 0, $$024371$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0289$i$i = 0, $$0295$i$i = 0, $$0296$i$i = 0, $$0342$i = 0, $$0344$i = 0, $$0345$i = 0, $$0347$i = 0, $$0353$i = 0, $$0358$i = 0, $$0359$$i = 0, $$0359$i = 0, $$0361$i = 0, $$0362$i = 0, $$0368$i = 0, $$1196$i = 0, $$1198$i = 0;
 var $$124470$i = 0, $$1291$i$i = 0, $$1293$i$i = 0, $$1343$i = 0, $$1348$i = 0, $$1363$i = 0, $$1370$i = 0, $$1374$i = 0, $$2234253237$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2355$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3350$i = 0, $$3372$i = 0, $$4$lcssa$i = 0, $$4$ph$i = 0, $$415$i = 0;
 var $$4236$i = 0, $$4351$lcssa$i = 0, $$435114$i = 0, $$4357$$4$i = 0, $$4357$ph$i = 0, $$435713$i = 0, $$723948$i = 0, $$749$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i19$i = 0, $$pre$i210 = 0, $$pre$i212 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i211Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi11$i$iZ2D = 0, $$pre$phiZ2D = 0;
 var $$pre10$i$i = 0, $$sink1$i = 0, $$sink1$i$i = 0, $$sink16$i = 0, $$sink2$i = 0, $$sink2$i204 = 0, $$sink3$i = 0, $1 = 0, $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0;
 var $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0, $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0;
 var $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0, $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0;
 var $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0, $1053 = 0, $1054 = 0, $1055 = 0, $1056 = 0, $1057 = 0, $1058 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0;
 var $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0;
 var $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0;
 var $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0;
 var $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0;
 var $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0;
 var $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0;
 var $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0;
 var $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0;
 var $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0;
 var $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0;
 var $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0;
 var $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0;
 var $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0;
 var $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0;
 var $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0;
 var $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0;
 var $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0;
 var $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0;
 var $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0;
 var $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0;
 var $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0;
 var $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0;
 var $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0;
 var $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0;
 var $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0;
 var $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0;
 var $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0;
 var $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0;
 var $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0;
 var $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0;
 var $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0;
 var $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0;
 var $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0;
 var $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0;
 var $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0;
 var $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0;
 var $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0;
 var $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0;
 var $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0;
 var $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0;
 var $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0;
 var $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0;
 var $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0;
 var $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0, $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0;
 var $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0, $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0;
 var $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0, $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0;
 var $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0, $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0;
 var $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0, $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0;
 var $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0, $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0;
 var $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i208 = 0, $exitcond$i$i = 0, $not$$i = 0, $not$$i$i = 0, $not$$i17$i = 0, $not$$i209 = 0, $not$$i216 = 0, $not$1$i = 0, $not$1$i203 = 0, $not$5$i = 0, $not$7$i$i = 0, $not$8$i = 0, $not$9$i = 0;
 var $or$cond$i = 0, $or$cond$i214 = 0, $or$cond1$i = 0, $or$cond10$i = 0, $or$cond11$i = 0, $or$cond11$not$i = 0, $or$cond12$i = 0, $or$cond2$i = 0, $or$cond2$i215 = 0, $or$cond5$i = 0, $or$cond50$i = 0, $or$cond51$i = 0, $or$cond7$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 $2 = ($0>>>0)<(245);
 do {
  if ($2) {
   $3 = ($0>>>0)<(11);
   $4 = (($0) + 11)|0;
   $5 = $4 & -8;
   $6 = $3 ? 16 : $5;
   $7 = $6 >>> 3;
   $8 = HEAP32[921]|0;
   $9 = $8 >>> $7;
   $10 = $9 & 3;
   $11 = ($10|0)==(0);
   if (!($11)) {
    $12 = $9 & 1;
    $13 = $12 ^ 1;
    $14 = (($13) + ($7))|0;
    $15 = $14 << 1;
    $16 = (3724 + ($15<<2)|0);
    $17 = ((($16)) + 8|0);
    $18 = HEAP32[$17>>2]|0;
    $19 = ((($18)) + 8|0);
    $20 = HEAP32[$19>>2]|0;
    $21 = ($16|0)==($20|0);
    do {
     if ($21) {
      $22 = 1 << $14;
      $23 = $22 ^ -1;
      $24 = $8 & $23;
      HEAP32[921] = $24;
     } else {
      $25 = HEAP32[(3700)>>2]|0;
      $26 = ($20>>>0)<($25>>>0);
      if ($26) {
       _abort();
       // unreachable;
      }
      $27 = ((($20)) + 12|0);
      $28 = HEAP32[$27>>2]|0;
      $29 = ($28|0)==($18|0);
      if ($29) {
       HEAP32[$27>>2] = $16;
       HEAP32[$17>>2] = $20;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $30 = $14 << 3;
    $31 = $30 | 3;
    $32 = ((($18)) + 4|0);
    HEAP32[$32>>2] = $31;
    $33 = (($18) + ($30)|0);
    $34 = ((($33)) + 4|0);
    $35 = HEAP32[$34>>2]|0;
    $36 = $35 | 1;
    HEAP32[$34>>2] = $36;
    $$0 = $19;
    STACKTOP = sp;return ($$0|0);
   }
   $37 = HEAP32[(3692)>>2]|0;
   $38 = ($6>>>0)>($37>>>0);
   if ($38) {
    $39 = ($9|0)==(0);
    if (!($39)) {
     $40 = $9 << $7;
     $41 = 2 << $7;
     $42 = (0 - ($41))|0;
     $43 = $41 | $42;
     $44 = $40 & $43;
     $45 = (0 - ($44))|0;
     $46 = $44 & $45;
     $47 = (($46) + -1)|0;
     $48 = $47 >>> 12;
     $49 = $48 & 16;
     $50 = $47 >>> $49;
     $51 = $50 >>> 5;
     $52 = $51 & 8;
     $53 = $52 | $49;
     $54 = $50 >>> $52;
     $55 = $54 >>> 2;
     $56 = $55 & 4;
     $57 = $53 | $56;
     $58 = $54 >>> $56;
     $59 = $58 >>> 1;
     $60 = $59 & 2;
     $61 = $57 | $60;
     $62 = $58 >>> $60;
     $63 = $62 >>> 1;
     $64 = $63 & 1;
     $65 = $61 | $64;
     $66 = $62 >>> $64;
     $67 = (($65) + ($66))|0;
     $68 = $67 << 1;
     $69 = (3724 + ($68<<2)|0);
     $70 = ((($69)) + 8|0);
     $71 = HEAP32[$70>>2]|0;
     $72 = ((($71)) + 8|0);
     $73 = HEAP32[$72>>2]|0;
     $74 = ($69|0)==($73|0);
     do {
      if ($74) {
       $75 = 1 << $67;
       $76 = $75 ^ -1;
       $77 = $8 & $76;
       HEAP32[921] = $77;
       $98 = $77;
      } else {
       $78 = HEAP32[(3700)>>2]|0;
       $79 = ($73>>>0)<($78>>>0);
       if ($79) {
        _abort();
        // unreachable;
       }
       $80 = ((($73)) + 12|0);
       $81 = HEAP32[$80>>2]|0;
       $82 = ($81|0)==($71|0);
       if ($82) {
        HEAP32[$80>>2] = $69;
        HEAP32[$70>>2] = $73;
        $98 = $8;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $83 = $67 << 3;
     $84 = (($83) - ($6))|0;
     $85 = $6 | 3;
     $86 = ((($71)) + 4|0);
     HEAP32[$86>>2] = $85;
     $87 = (($71) + ($6)|0);
     $88 = $84 | 1;
     $89 = ((($87)) + 4|0);
     HEAP32[$89>>2] = $88;
     $90 = (($87) + ($84)|0);
     HEAP32[$90>>2] = $84;
     $91 = ($37|0)==(0);
     if (!($91)) {
      $92 = HEAP32[(3704)>>2]|0;
      $93 = $37 >>> 3;
      $94 = $93 << 1;
      $95 = (3724 + ($94<<2)|0);
      $96 = 1 << $93;
      $97 = $98 & $96;
      $99 = ($97|0)==(0);
      if ($99) {
       $100 = $98 | $96;
       HEAP32[921] = $100;
       $$pre = ((($95)) + 8|0);
       $$0199 = $95;$$pre$phiZ2D = $$pre;
      } else {
       $101 = ((($95)) + 8|0);
       $102 = HEAP32[$101>>2]|0;
       $103 = HEAP32[(3700)>>2]|0;
       $104 = ($102>>>0)<($103>>>0);
       if ($104) {
        _abort();
        // unreachable;
       } else {
        $$0199 = $102;$$pre$phiZ2D = $101;
       }
      }
      HEAP32[$$pre$phiZ2D>>2] = $92;
      $105 = ((($$0199)) + 12|0);
      HEAP32[$105>>2] = $92;
      $106 = ((($92)) + 8|0);
      HEAP32[$106>>2] = $$0199;
      $107 = ((($92)) + 12|0);
      HEAP32[$107>>2] = $95;
     }
     HEAP32[(3692)>>2] = $84;
     HEAP32[(3704)>>2] = $87;
     $$0 = $72;
     STACKTOP = sp;return ($$0|0);
    }
    $108 = HEAP32[(3688)>>2]|0;
    $109 = ($108|0)==(0);
    if ($109) {
     $$0197 = $6;
    } else {
     $110 = (0 - ($108))|0;
     $111 = $108 & $110;
     $112 = (($111) + -1)|0;
     $113 = $112 >>> 12;
     $114 = $113 & 16;
     $115 = $112 >>> $114;
     $116 = $115 >>> 5;
     $117 = $116 & 8;
     $118 = $117 | $114;
     $119 = $115 >>> $117;
     $120 = $119 >>> 2;
     $121 = $120 & 4;
     $122 = $118 | $121;
     $123 = $119 >>> $121;
     $124 = $123 >>> 1;
     $125 = $124 & 2;
     $126 = $122 | $125;
     $127 = $123 >>> $125;
     $128 = $127 >>> 1;
     $129 = $128 & 1;
     $130 = $126 | $129;
     $131 = $127 >>> $129;
     $132 = (($130) + ($131))|0;
     $133 = (3988 + ($132<<2)|0);
     $134 = HEAP32[$133>>2]|0;
     $135 = ((($134)) + 4|0);
     $136 = HEAP32[$135>>2]|0;
     $137 = $136 & -8;
     $138 = (($137) - ($6))|0;
     $139 = ((($134)) + 16|0);
     $140 = HEAP32[$139>>2]|0;
     $not$5$i = ($140|0)==(0|0);
     $$sink16$i = $not$5$i&1;
     $141 = (((($134)) + 16|0) + ($$sink16$i<<2)|0);
     $142 = HEAP32[$141>>2]|0;
     $143 = ($142|0)==(0|0);
     if ($143) {
      $$0192$lcssa$i = $134;$$0193$lcssa$i = $138;
     } else {
      $$01928$i = $134;$$01937$i = $138;$145 = $142;
      while(1) {
       $144 = ((($145)) + 4|0);
       $146 = HEAP32[$144>>2]|0;
       $147 = $146 & -8;
       $148 = (($147) - ($6))|0;
       $149 = ($148>>>0)<($$01937$i>>>0);
       $$$0193$i = $149 ? $148 : $$01937$i;
       $$$0192$i = $149 ? $145 : $$01928$i;
       $150 = ((($145)) + 16|0);
       $151 = HEAP32[$150>>2]|0;
       $not$$i = ($151|0)==(0|0);
       $$sink1$i = $not$$i&1;
       $152 = (((($145)) + 16|0) + ($$sink1$i<<2)|0);
       $153 = HEAP32[$152>>2]|0;
       $154 = ($153|0)==(0|0);
       if ($154) {
        $$0192$lcssa$i = $$$0192$i;$$0193$lcssa$i = $$$0193$i;
        break;
       } else {
        $$01928$i = $$$0192$i;$$01937$i = $$$0193$i;$145 = $153;
       }
      }
     }
     $155 = HEAP32[(3700)>>2]|0;
     $156 = ($$0192$lcssa$i>>>0)<($155>>>0);
     if ($156) {
      _abort();
      // unreachable;
     }
     $157 = (($$0192$lcssa$i) + ($6)|0);
     $158 = ($$0192$lcssa$i>>>0)<($157>>>0);
     if (!($158)) {
      _abort();
      // unreachable;
     }
     $159 = ((($$0192$lcssa$i)) + 24|0);
     $160 = HEAP32[$159>>2]|0;
     $161 = ((($$0192$lcssa$i)) + 12|0);
     $162 = HEAP32[$161>>2]|0;
     $163 = ($162|0)==($$0192$lcssa$i|0);
     do {
      if ($163) {
       $173 = ((($$0192$lcssa$i)) + 20|0);
       $174 = HEAP32[$173>>2]|0;
       $175 = ($174|0)==(0|0);
       if ($175) {
        $176 = ((($$0192$lcssa$i)) + 16|0);
        $177 = HEAP32[$176>>2]|0;
        $178 = ($177|0)==(0|0);
        if ($178) {
         $$3$i = 0;
         break;
        } else {
         $$1196$i = $177;$$1198$i = $176;
        }
       } else {
        $$1196$i = $174;$$1198$i = $173;
       }
       while(1) {
        $179 = ((($$1196$i)) + 20|0);
        $180 = HEAP32[$179>>2]|0;
        $181 = ($180|0)==(0|0);
        if (!($181)) {
         $$1196$i = $180;$$1198$i = $179;
         continue;
        }
        $182 = ((($$1196$i)) + 16|0);
        $183 = HEAP32[$182>>2]|0;
        $184 = ($183|0)==(0|0);
        if ($184) {
         break;
        } else {
         $$1196$i = $183;$$1198$i = $182;
        }
       }
       $185 = ($$1198$i>>>0)<($155>>>0);
       if ($185) {
        _abort();
        // unreachable;
       } else {
        HEAP32[$$1198$i>>2] = 0;
        $$3$i = $$1196$i;
        break;
       }
      } else {
       $164 = ((($$0192$lcssa$i)) + 8|0);
       $165 = HEAP32[$164>>2]|0;
       $166 = ($165>>>0)<($155>>>0);
       if ($166) {
        _abort();
        // unreachable;
       }
       $167 = ((($165)) + 12|0);
       $168 = HEAP32[$167>>2]|0;
       $169 = ($168|0)==($$0192$lcssa$i|0);
       if (!($169)) {
        _abort();
        // unreachable;
       }
       $170 = ((($162)) + 8|0);
       $171 = HEAP32[$170>>2]|0;
       $172 = ($171|0)==($$0192$lcssa$i|0);
       if ($172) {
        HEAP32[$167>>2] = $162;
        HEAP32[$170>>2] = $165;
        $$3$i = $162;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $186 = ($160|0)==(0|0);
     L73: do {
      if (!($186)) {
       $187 = ((($$0192$lcssa$i)) + 28|0);
       $188 = HEAP32[$187>>2]|0;
       $189 = (3988 + ($188<<2)|0);
       $190 = HEAP32[$189>>2]|0;
       $191 = ($$0192$lcssa$i|0)==($190|0);
       do {
        if ($191) {
         HEAP32[$189>>2] = $$3$i;
         $cond$i = ($$3$i|0)==(0|0);
         if ($cond$i) {
          $192 = 1 << $188;
          $193 = $192 ^ -1;
          $194 = $108 & $193;
          HEAP32[(3688)>>2] = $194;
          break L73;
         }
        } else {
         $195 = HEAP32[(3700)>>2]|0;
         $196 = ($160>>>0)<($195>>>0);
         if ($196) {
          _abort();
          // unreachable;
         } else {
          $197 = ((($160)) + 16|0);
          $198 = HEAP32[$197>>2]|0;
          $not$1$i = ($198|0)!=($$0192$lcssa$i|0);
          $$sink2$i = $not$1$i&1;
          $199 = (((($160)) + 16|0) + ($$sink2$i<<2)|0);
          HEAP32[$199>>2] = $$3$i;
          $200 = ($$3$i|0)==(0|0);
          if ($200) {
           break L73;
          } else {
           break;
          }
         }
        }
       } while(0);
       $201 = HEAP32[(3700)>>2]|0;
       $202 = ($$3$i>>>0)<($201>>>0);
       if ($202) {
        _abort();
        // unreachable;
       }
       $203 = ((($$3$i)) + 24|0);
       HEAP32[$203>>2] = $160;
       $204 = ((($$0192$lcssa$i)) + 16|0);
       $205 = HEAP32[$204>>2]|0;
       $206 = ($205|0)==(0|0);
       do {
        if (!($206)) {
         $207 = ($205>>>0)<($201>>>0);
         if ($207) {
          _abort();
          // unreachable;
         } else {
          $208 = ((($$3$i)) + 16|0);
          HEAP32[$208>>2] = $205;
          $209 = ((($205)) + 24|0);
          HEAP32[$209>>2] = $$3$i;
          break;
         }
        }
       } while(0);
       $210 = ((($$0192$lcssa$i)) + 20|0);
       $211 = HEAP32[$210>>2]|0;
       $212 = ($211|0)==(0|0);
       if (!($212)) {
        $213 = HEAP32[(3700)>>2]|0;
        $214 = ($211>>>0)<($213>>>0);
        if ($214) {
         _abort();
         // unreachable;
        } else {
         $215 = ((($$3$i)) + 20|0);
         HEAP32[$215>>2] = $211;
         $216 = ((($211)) + 24|0);
         HEAP32[$216>>2] = $$3$i;
         break;
        }
       }
      }
     } while(0);
     $217 = ($$0193$lcssa$i>>>0)<(16);
     if ($217) {
      $218 = (($$0193$lcssa$i) + ($6))|0;
      $219 = $218 | 3;
      $220 = ((($$0192$lcssa$i)) + 4|0);
      HEAP32[$220>>2] = $219;
      $221 = (($$0192$lcssa$i) + ($218)|0);
      $222 = ((($221)) + 4|0);
      $223 = HEAP32[$222>>2]|0;
      $224 = $223 | 1;
      HEAP32[$222>>2] = $224;
     } else {
      $225 = $6 | 3;
      $226 = ((($$0192$lcssa$i)) + 4|0);
      HEAP32[$226>>2] = $225;
      $227 = $$0193$lcssa$i | 1;
      $228 = ((($157)) + 4|0);
      HEAP32[$228>>2] = $227;
      $229 = (($157) + ($$0193$lcssa$i)|0);
      HEAP32[$229>>2] = $$0193$lcssa$i;
      $230 = ($37|0)==(0);
      if (!($230)) {
       $231 = HEAP32[(3704)>>2]|0;
       $232 = $37 >>> 3;
       $233 = $232 << 1;
       $234 = (3724 + ($233<<2)|0);
       $235 = 1 << $232;
       $236 = $8 & $235;
       $237 = ($236|0)==(0);
       if ($237) {
        $238 = $8 | $235;
        HEAP32[921] = $238;
        $$pre$i = ((($234)) + 8|0);
        $$0189$i = $234;$$pre$phi$iZ2D = $$pre$i;
       } else {
        $239 = ((($234)) + 8|0);
        $240 = HEAP32[$239>>2]|0;
        $241 = HEAP32[(3700)>>2]|0;
        $242 = ($240>>>0)<($241>>>0);
        if ($242) {
         _abort();
         // unreachable;
        } else {
         $$0189$i = $240;$$pre$phi$iZ2D = $239;
        }
       }
       HEAP32[$$pre$phi$iZ2D>>2] = $231;
       $243 = ((($$0189$i)) + 12|0);
       HEAP32[$243>>2] = $231;
       $244 = ((($231)) + 8|0);
       HEAP32[$244>>2] = $$0189$i;
       $245 = ((($231)) + 12|0);
       HEAP32[$245>>2] = $234;
      }
      HEAP32[(3692)>>2] = $$0193$lcssa$i;
      HEAP32[(3704)>>2] = $157;
     }
     $246 = ((($$0192$lcssa$i)) + 8|0);
     $$0 = $246;
     STACKTOP = sp;return ($$0|0);
    }
   } else {
    $$0197 = $6;
   }
  } else {
   $247 = ($0>>>0)>(4294967231);
   if ($247) {
    $$0197 = -1;
   } else {
    $248 = (($0) + 11)|0;
    $249 = $248 & -8;
    $250 = HEAP32[(3688)>>2]|0;
    $251 = ($250|0)==(0);
    if ($251) {
     $$0197 = $249;
    } else {
     $252 = (0 - ($249))|0;
     $253 = $248 >>> 8;
     $254 = ($253|0)==(0);
     if ($254) {
      $$0358$i = 0;
     } else {
      $255 = ($249>>>0)>(16777215);
      if ($255) {
       $$0358$i = 31;
      } else {
       $256 = (($253) + 1048320)|0;
       $257 = $256 >>> 16;
       $258 = $257 & 8;
       $259 = $253 << $258;
       $260 = (($259) + 520192)|0;
       $261 = $260 >>> 16;
       $262 = $261 & 4;
       $263 = $262 | $258;
       $264 = $259 << $262;
       $265 = (($264) + 245760)|0;
       $266 = $265 >>> 16;
       $267 = $266 & 2;
       $268 = $263 | $267;
       $269 = (14 - ($268))|0;
       $270 = $264 << $267;
       $271 = $270 >>> 15;
       $272 = (($269) + ($271))|0;
       $273 = $272 << 1;
       $274 = (($272) + 7)|0;
       $275 = $249 >>> $274;
       $276 = $275 & 1;
       $277 = $276 | $273;
       $$0358$i = $277;
      }
     }
     $278 = (3988 + ($$0358$i<<2)|0);
     $279 = HEAP32[$278>>2]|0;
     $280 = ($279|0)==(0|0);
     L117: do {
      if ($280) {
       $$2355$i = 0;$$3$i201 = 0;$$3350$i = $252;
       label = 81;
      } else {
       $281 = ($$0358$i|0)==(31);
       $282 = $$0358$i >>> 1;
       $283 = (25 - ($282))|0;
       $284 = $281 ? 0 : $283;
       $285 = $249 << $284;
       $$0342$i = 0;$$0347$i = $252;$$0353$i = $279;$$0359$i = $285;$$0362$i = 0;
       while(1) {
        $286 = ((($$0353$i)) + 4|0);
        $287 = HEAP32[$286>>2]|0;
        $288 = $287 & -8;
        $289 = (($288) - ($249))|0;
        $290 = ($289>>>0)<($$0347$i>>>0);
        if ($290) {
         $291 = ($289|0)==(0);
         if ($291) {
          $$415$i = $$0353$i;$$435114$i = 0;$$435713$i = $$0353$i;
          label = 85;
          break L117;
         } else {
          $$1343$i = $$0353$i;$$1348$i = $289;
         }
        } else {
         $$1343$i = $$0342$i;$$1348$i = $$0347$i;
        }
        $292 = ((($$0353$i)) + 20|0);
        $293 = HEAP32[$292>>2]|0;
        $294 = $$0359$i >>> 31;
        $295 = (((($$0353$i)) + 16|0) + ($294<<2)|0);
        $296 = HEAP32[$295>>2]|0;
        $297 = ($293|0)==(0|0);
        $298 = ($293|0)==($296|0);
        $or$cond2$i = $297 | $298;
        $$1363$i = $or$cond2$i ? $$0362$i : $293;
        $299 = ($296|0)==(0|0);
        $not$8$i = $299 ^ 1;
        $300 = $not$8$i&1;
        $$0359$$i = $$0359$i << $300;
        if ($299) {
         $$2355$i = $$1363$i;$$3$i201 = $$1343$i;$$3350$i = $$1348$i;
         label = 81;
         break;
        } else {
         $$0342$i = $$1343$i;$$0347$i = $$1348$i;$$0353$i = $296;$$0359$i = $$0359$$i;$$0362$i = $$1363$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 81) {
      $301 = ($$2355$i|0)==(0|0);
      $302 = ($$3$i201|0)==(0|0);
      $or$cond$i = $301 & $302;
      if ($or$cond$i) {
       $303 = 2 << $$0358$i;
       $304 = (0 - ($303))|0;
       $305 = $303 | $304;
       $306 = $250 & $305;
       $307 = ($306|0)==(0);
       if ($307) {
        $$0197 = $249;
        break;
       }
       $308 = (0 - ($306))|0;
       $309 = $306 & $308;
       $310 = (($309) + -1)|0;
       $311 = $310 >>> 12;
       $312 = $311 & 16;
       $313 = $310 >>> $312;
       $314 = $313 >>> 5;
       $315 = $314 & 8;
       $316 = $315 | $312;
       $317 = $313 >>> $315;
       $318 = $317 >>> 2;
       $319 = $318 & 4;
       $320 = $316 | $319;
       $321 = $317 >>> $319;
       $322 = $321 >>> 1;
       $323 = $322 & 2;
       $324 = $320 | $323;
       $325 = $321 >>> $323;
       $326 = $325 >>> 1;
       $327 = $326 & 1;
       $328 = $324 | $327;
       $329 = $325 >>> $327;
       $330 = (($328) + ($329))|0;
       $331 = (3988 + ($330<<2)|0);
       $332 = HEAP32[$331>>2]|0;
       $$4$ph$i = 0;$$4357$ph$i = $332;
      } else {
       $$4$ph$i = $$3$i201;$$4357$ph$i = $$2355$i;
      }
      $333 = ($$4357$ph$i|0)==(0|0);
      if ($333) {
       $$4$lcssa$i = $$4$ph$i;$$4351$lcssa$i = $$3350$i;
      } else {
       $$415$i = $$4$ph$i;$$435114$i = $$3350$i;$$435713$i = $$4357$ph$i;
       label = 85;
      }
     }
     if ((label|0) == 85) {
      while(1) {
       label = 0;
       $334 = ((($$435713$i)) + 4|0);
       $335 = HEAP32[$334>>2]|0;
       $336 = $335 & -8;
       $337 = (($336) - ($249))|0;
       $338 = ($337>>>0)<($$435114$i>>>0);
       $$$4351$i = $338 ? $337 : $$435114$i;
       $$4357$$4$i = $338 ? $$435713$i : $$415$i;
       $339 = ((($$435713$i)) + 16|0);
       $340 = HEAP32[$339>>2]|0;
       $not$1$i203 = ($340|0)==(0|0);
       $$sink2$i204 = $not$1$i203&1;
       $341 = (((($$435713$i)) + 16|0) + ($$sink2$i204<<2)|0);
       $342 = HEAP32[$341>>2]|0;
       $343 = ($342|0)==(0|0);
       if ($343) {
        $$4$lcssa$i = $$4357$$4$i;$$4351$lcssa$i = $$$4351$i;
        break;
       } else {
        $$415$i = $$4357$$4$i;$$435114$i = $$$4351$i;$$435713$i = $342;
        label = 85;
       }
      }
     }
     $344 = ($$4$lcssa$i|0)==(0|0);
     if ($344) {
      $$0197 = $249;
     } else {
      $345 = HEAP32[(3692)>>2]|0;
      $346 = (($345) - ($249))|0;
      $347 = ($$4351$lcssa$i>>>0)<($346>>>0);
      if ($347) {
       $348 = HEAP32[(3700)>>2]|0;
       $349 = ($$4$lcssa$i>>>0)<($348>>>0);
       if ($349) {
        _abort();
        // unreachable;
       }
       $350 = (($$4$lcssa$i) + ($249)|0);
       $351 = ($$4$lcssa$i>>>0)<($350>>>0);
       if (!($351)) {
        _abort();
        // unreachable;
       }
       $352 = ((($$4$lcssa$i)) + 24|0);
       $353 = HEAP32[$352>>2]|0;
       $354 = ((($$4$lcssa$i)) + 12|0);
       $355 = HEAP32[$354>>2]|0;
       $356 = ($355|0)==($$4$lcssa$i|0);
       do {
        if ($356) {
         $366 = ((($$4$lcssa$i)) + 20|0);
         $367 = HEAP32[$366>>2]|0;
         $368 = ($367|0)==(0|0);
         if ($368) {
          $369 = ((($$4$lcssa$i)) + 16|0);
          $370 = HEAP32[$369>>2]|0;
          $371 = ($370|0)==(0|0);
          if ($371) {
           $$3372$i = 0;
           break;
          } else {
           $$1370$i = $370;$$1374$i = $369;
          }
         } else {
          $$1370$i = $367;$$1374$i = $366;
         }
         while(1) {
          $372 = ((($$1370$i)) + 20|0);
          $373 = HEAP32[$372>>2]|0;
          $374 = ($373|0)==(0|0);
          if (!($374)) {
           $$1370$i = $373;$$1374$i = $372;
           continue;
          }
          $375 = ((($$1370$i)) + 16|0);
          $376 = HEAP32[$375>>2]|0;
          $377 = ($376|0)==(0|0);
          if ($377) {
           break;
          } else {
           $$1370$i = $376;$$1374$i = $375;
          }
         }
         $378 = ($$1374$i>>>0)<($348>>>0);
         if ($378) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$$1374$i>>2] = 0;
          $$3372$i = $$1370$i;
          break;
         }
        } else {
         $357 = ((($$4$lcssa$i)) + 8|0);
         $358 = HEAP32[$357>>2]|0;
         $359 = ($358>>>0)<($348>>>0);
         if ($359) {
          _abort();
          // unreachable;
         }
         $360 = ((($358)) + 12|0);
         $361 = HEAP32[$360>>2]|0;
         $362 = ($361|0)==($$4$lcssa$i|0);
         if (!($362)) {
          _abort();
          // unreachable;
         }
         $363 = ((($355)) + 8|0);
         $364 = HEAP32[$363>>2]|0;
         $365 = ($364|0)==($$4$lcssa$i|0);
         if ($365) {
          HEAP32[$360>>2] = $355;
          HEAP32[$363>>2] = $358;
          $$3372$i = $355;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $379 = ($353|0)==(0|0);
       L164: do {
        if ($379) {
         $470 = $250;
        } else {
         $380 = ((($$4$lcssa$i)) + 28|0);
         $381 = HEAP32[$380>>2]|0;
         $382 = (3988 + ($381<<2)|0);
         $383 = HEAP32[$382>>2]|0;
         $384 = ($$4$lcssa$i|0)==($383|0);
         do {
          if ($384) {
           HEAP32[$382>>2] = $$3372$i;
           $cond$i208 = ($$3372$i|0)==(0|0);
           if ($cond$i208) {
            $385 = 1 << $381;
            $386 = $385 ^ -1;
            $387 = $250 & $386;
            HEAP32[(3688)>>2] = $387;
            $470 = $387;
            break L164;
           }
          } else {
           $388 = HEAP32[(3700)>>2]|0;
           $389 = ($353>>>0)<($388>>>0);
           if ($389) {
            _abort();
            // unreachable;
           } else {
            $390 = ((($353)) + 16|0);
            $391 = HEAP32[$390>>2]|0;
            $not$$i209 = ($391|0)!=($$4$lcssa$i|0);
            $$sink3$i = $not$$i209&1;
            $392 = (((($353)) + 16|0) + ($$sink3$i<<2)|0);
            HEAP32[$392>>2] = $$3372$i;
            $393 = ($$3372$i|0)==(0|0);
            if ($393) {
             $470 = $250;
             break L164;
            } else {
             break;
            }
           }
          }
         } while(0);
         $394 = HEAP32[(3700)>>2]|0;
         $395 = ($$3372$i>>>0)<($394>>>0);
         if ($395) {
          _abort();
          // unreachable;
         }
         $396 = ((($$3372$i)) + 24|0);
         HEAP32[$396>>2] = $353;
         $397 = ((($$4$lcssa$i)) + 16|0);
         $398 = HEAP32[$397>>2]|0;
         $399 = ($398|0)==(0|0);
         do {
          if (!($399)) {
           $400 = ($398>>>0)<($394>>>0);
           if ($400) {
            _abort();
            // unreachable;
           } else {
            $401 = ((($$3372$i)) + 16|0);
            HEAP32[$401>>2] = $398;
            $402 = ((($398)) + 24|0);
            HEAP32[$402>>2] = $$3372$i;
            break;
           }
          }
         } while(0);
         $403 = ((($$4$lcssa$i)) + 20|0);
         $404 = HEAP32[$403>>2]|0;
         $405 = ($404|0)==(0|0);
         if ($405) {
          $470 = $250;
         } else {
          $406 = HEAP32[(3700)>>2]|0;
          $407 = ($404>>>0)<($406>>>0);
          if ($407) {
           _abort();
           // unreachable;
          } else {
           $408 = ((($$3372$i)) + 20|0);
           HEAP32[$408>>2] = $404;
           $409 = ((($404)) + 24|0);
           HEAP32[$409>>2] = $$3372$i;
           $470 = $250;
           break;
          }
         }
        }
       } while(0);
       $410 = ($$4351$lcssa$i>>>0)<(16);
       do {
        if ($410) {
         $411 = (($$4351$lcssa$i) + ($249))|0;
         $412 = $411 | 3;
         $413 = ((($$4$lcssa$i)) + 4|0);
         HEAP32[$413>>2] = $412;
         $414 = (($$4$lcssa$i) + ($411)|0);
         $415 = ((($414)) + 4|0);
         $416 = HEAP32[$415>>2]|0;
         $417 = $416 | 1;
         HEAP32[$415>>2] = $417;
        } else {
         $418 = $249 | 3;
         $419 = ((($$4$lcssa$i)) + 4|0);
         HEAP32[$419>>2] = $418;
         $420 = $$4351$lcssa$i | 1;
         $421 = ((($350)) + 4|0);
         HEAP32[$421>>2] = $420;
         $422 = (($350) + ($$4351$lcssa$i)|0);
         HEAP32[$422>>2] = $$4351$lcssa$i;
         $423 = $$4351$lcssa$i >>> 3;
         $424 = ($$4351$lcssa$i>>>0)<(256);
         if ($424) {
          $425 = $423 << 1;
          $426 = (3724 + ($425<<2)|0);
          $427 = HEAP32[921]|0;
          $428 = 1 << $423;
          $429 = $427 & $428;
          $430 = ($429|0)==(0);
          if ($430) {
           $431 = $427 | $428;
           HEAP32[921] = $431;
           $$pre$i210 = ((($426)) + 8|0);
           $$0368$i = $426;$$pre$phi$i211Z2D = $$pre$i210;
          } else {
           $432 = ((($426)) + 8|0);
           $433 = HEAP32[$432>>2]|0;
           $434 = HEAP32[(3700)>>2]|0;
           $435 = ($433>>>0)<($434>>>0);
           if ($435) {
            _abort();
            // unreachable;
           } else {
            $$0368$i = $433;$$pre$phi$i211Z2D = $432;
           }
          }
          HEAP32[$$pre$phi$i211Z2D>>2] = $350;
          $436 = ((($$0368$i)) + 12|0);
          HEAP32[$436>>2] = $350;
          $437 = ((($350)) + 8|0);
          HEAP32[$437>>2] = $$0368$i;
          $438 = ((($350)) + 12|0);
          HEAP32[$438>>2] = $426;
          break;
         }
         $439 = $$4351$lcssa$i >>> 8;
         $440 = ($439|0)==(0);
         if ($440) {
          $$0361$i = 0;
         } else {
          $441 = ($$4351$lcssa$i>>>0)>(16777215);
          if ($441) {
           $$0361$i = 31;
          } else {
           $442 = (($439) + 1048320)|0;
           $443 = $442 >>> 16;
           $444 = $443 & 8;
           $445 = $439 << $444;
           $446 = (($445) + 520192)|0;
           $447 = $446 >>> 16;
           $448 = $447 & 4;
           $449 = $448 | $444;
           $450 = $445 << $448;
           $451 = (($450) + 245760)|0;
           $452 = $451 >>> 16;
           $453 = $452 & 2;
           $454 = $449 | $453;
           $455 = (14 - ($454))|0;
           $456 = $450 << $453;
           $457 = $456 >>> 15;
           $458 = (($455) + ($457))|0;
           $459 = $458 << 1;
           $460 = (($458) + 7)|0;
           $461 = $$4351$lcssa$i >>> $460;
           $462 = $461 & 1;
           $463 = $462 | $459;
           $$0361$i = $463;
          }
         }
         $464 = (3988 + ($$0361$i<<2)|0);
         $465 = ((($350)) + 28|0);
         HEAP32[$465>>2] = $$0361$i;
         $466 = ((($350)) + 16|0);
         $467 = ((($466)) + 4|0);
         HEAP32[$467>>2] = 0;
         HEAP32[$466>>2] = 0;
         $468 = 1 << $$0361$i;
         $469 = $470 & $468;
         $471 = ($469|0)==(0);
         if ($471) {
          $472 = $470 | $468;
          HEAP32[(3688)>>2] = $472;
          HEAP32[$464>>2] = $350;
          $473 = ((($350)) + 24|0);
          HEAP32[$473>>2] = $464;
          $474 = ((($350)) + 12|0);
          HEAP32[$474>>2] = $350;
          $475 = ((($350)) + 8|0);
          HEAP32[$475>>2] = $350;
          break;
         }
         $476 = HEAP32[$464>>2]|0;
         $477 = ($$0361$i|0)==(31);
         $478 = $$0361$i >>> 1;
         $479 = (25 - ($478))|0;
         $480 = $477 ? 0 : $479;
         $481 = $$4351$lcssa$i << $480;
         $$0344$i = $481;$$0345$i = $476;
         while(1) {
          $482 = ((($$0345$i)) + 4|0);
          $483 = HEAP32[$482>>2]|0;
          $484 = $483 & -8;
          $485 = ($484|0)==($$4351$lcssa$i|0);
          if ($485) {
           label = 139;
           break;
          }
          $486 = $$0344$i >>> 31;
          $487 = (((($$0345$i)) + 16|0) + ($486<<2)|0);
          $488 = $$0344$i << 1;
          $489 = HEAP32[$487>>2]|0;
          $490 = ($489|0)==(0|0);
          if ($490) {
           label = 136;
           break;
          } else {
           $$0344$i = $488;$$0345$i = $489;
          }
         }
         if ((label|0) == 136) {
          $491 = HEAP32[(3700)>>2]|0;
          $492 = ($487>>>0)<($491>>>0);
          if ($492) {
           _abort();
           // unreachable;
          } else {
           HEAP32[$487>>2] = $350;
           $493 = ((($350)) + 24|0);
           HEAP32[$493>>2] = $$0345$i;
           $494 = ((($350)) + 12|0);
           HEAP32[$494>>2] = $350;
           $495 = ((($350)) + 8|0);
           HEAP32[$495>>2] = $350;
           break;
          }
         }
         else if ((label|0) == 139) {
          $496 = ((($$0345$i)) + 8|0);
          $497 = HEAP32[$496>>2]|0;
          $498 = HEAP32[(3700)>>2]|0;
          $499 = ($497>>>0)>=($498>>>0);
          $not$9$i = ($$0345$i>>>0)>=($498>>>0);
          $500 = $499 & $not$9$i;
          if ($500) {
           $501 = ((($497)) + 12|0);
           HEAP32[$501>>2] = $350;
           HEAP32[$496>>2] = $350;
           $502 = ((($350)) + 8|0);
           HEAP32[$502>>2] = $497;
           $503 = ((($350)) + 12|0);
           HEAP32[$503>>2] = $$0345$i;
           $504 = ((($350)) + 24|0);
           HEAP32[$504>>2] = 0;
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $505 = ((($$4$lcssa$i)) + 8|0);
       $$0 = $505;
       STACKTOP = sp;return ($$0|0);
      } else {
       $$0197 = $249;
      }
     }
    }
   }
  }
 } while(0);
 $506 = HEAP32[(3692)>>2]|0;
 $507 = ($506>>>0)<($$0197>>>0);
 if (!($507)) {
  $508 = (($506) - ($$0197))|0;
  $509 = HEAP32[(3704)>>2]|0;
  $510 = ($508>>>0)>(15);
  if ($510) {
   $511 = (($509) + ($$0197)|0);
   HEAP32[(3704)>>2] = $511;
   HEAP32[(3692)>>2] = $508;
   $512 = $508 | 1;
   $513 = ((($511)) + 4|0);
   HEAP32[$513>>2] = $512;
   $514 = (($511) + ($508)|0);
   HEAP32[$514>>2] = $508;
   $515 = $$0197 | 3;
   $516 = ((($509)) + 4|0);
   HEAP32[$516>>2] = $515;
  } else {
   HEAP32[(3692)>>2] = 0;
   HEAP32[(3704)>>2] = 0;
   $517 = $506 | 3;
   $518 = ((($509)) + 4|0);
   HEAP32[$518>>2] = $517;
   $519 = (($509) + ($506)|0);
   $520 = ((($519)) + 4|0);
   $521 = HEAP32[$520>>2]|0;
   $522 = $521 | 1;
   HEAP32[$520>>2] = $522;
  }
  $523 = ((($509)) + 8|0);
  $$0 = $523;
  STACKTOP = sp;return ($$0|0);
 }
 $524 = HEAP32[(3696)>>2]|0;
 $525 = ($524>>>0)>($$0197>>>0);
 if ($525) {
  $526 = (($524) - ($$0197))|0;
  HEAP32[(3696)>>2] = $526;
  $527 = HEAP32[(3708)>>2]|0;
  $528 = (($527) + ($$0197)|0);
  HEAP32[(3708)>>2] = $528;
  $529 = $526 | 1;
  $530 = ((($528)) + 4|0);
  HEAP32[$530>>2] = $529;
  $531 = $$0197 | 3;
  $532 = ((($527)) + 4|0);
  HEAP32[$532>>2] = $531;
  $533 = ((($527)) + 8|0);
  $$0 = $533;
  STACKTOP = sp;return ($$0|0);
 }
 $534 = HEAP32[1039]|0;
 $535 = ($534|0)==(0);
 if ($535) {
  HEAP32[(4164)>>2] = 4096;
  HEAP32[(4160)>>2] = 4096;
  HEAP32[(4168)>>2] = -1;
  HEAP32[(4172)>>2] = -1;
  HEAP32[(4176)>>2] = 0;
  HEAP32[(4128)>>2] = 0;
  $536 = $1;
  $537 = $536 & -16;
  $538 = $537 ^ 1431655768;
  HEAP32[$1>>2] = $538;
  HEAP32[1039] = $538;
  $542 = 4096;
 } else {
  $$pre$i212 = HEAP32[(4164)>>2]|0;
  $542 = $$pre$i212;
 }
 $539 = (($$0197) + 48)|0;
 $540 = (($$0197) + 47)|0;
 $541 = (($542) + ($540))|0;
 $543 = (0 - ($542))|0;
 $544 = $541 & $543;
 $545 = ($544>>>0)>($$0197>>>0);
 if (!($545)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $546 = HEAP32[(4124)>>2]|0;
 $547 = ($546|0)==(0);
 if (!($547)) {
  $548 = HEAP32[(4116)>>2]|0;
  $549 = (($548) + ($544))|0;
  $550 = ($549>>>0)<=($548>>>0);
  $551 = ($549>>>0)>($546>>>0);
  $or$cond1$i = $550 | $551;
  if ($or$cond1$i) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $552 = HEAP32[(4128)>>2]|0;
 $553 = $552 & 4;
 $554 = ($553|0)==(0);
 L244: do {
  if ($554) {
   $555 = HEAP32[(3708)>>2]|0;
   $556 = ($555|0)==(0|0);
   L246: do {
    if ($556) {
     label = 163;
    } else {
     $$0$i$i = (4132);
     while(1) {
      $557 = HEAP32[$$0$i$i>>2]|0;
      $558 = ($557>>>0)>($555>>>0);
      if (!($558)) {
       $559 = ((($$0$i$i)) + 4|0);
       $560 = HEAP32[$559>>2]|0;
       $561 = (($557) + ($560)|0);
       $562 = ($561>>>0)>($555>>>0);
       if ($562) {
        break;
       }
      }
      $563 = ((($$0$i$i)) + 8|0);
      $564 = HEAP32[$563>>2]|0;
      $565 = ($564|0)==(0|0);
      if ($565) {
       label = 163;
       break L246;
      } else {
       $$0$i$i = $564;
      }
     }
     $588 = (($541) - ($524))|0;
     $589 = $588 & $543;
     $590 = ($589>>>0)<(2147483647);
     if ($590) {
      $591 = (_sbrk(($589|0))|0);
      $592 = HEAP32[$$0$i$i>>2]|0;
      $593 = HEAP32[$559>>2]|0;
      $594 = (($592) + ($593)|0);
      $595 = ($591|0)==($594|0);
      if ($595) {
       $596 = ($591|0)==((-1)|0);
       if ($596) {
        $$2234253237$i = $589;
       } else {
        $$723948$i = $589;$$749$i = $591;
        label = 180;
        break L244;
       }
      } else {
       $$2247$ph$i = $591;$$2253$ph$i = $589;
       label = 171;
      }
     } else {
      $$2234253237$i = 0;
     }
    }
   } while(0);
   do {
    if ((label|0) == 163) {
     $566 = (_sbrk(0)|0);
     $567 = ($566|0)==((-1)|0);
     if ($567) {
      $$2234253237$i = 0;
     } else {
      $568 = $566;
      $569 = HEAP32[(4160)>>2]|0;
      $570 = (($569) + -1)|0;
      $571 = $570 & $568;
      $572 = ($571|0)==(0);
      $573 = (($570) + ($568))|0;
      $574 = (0 - ($569))|0;
      $575 = $573 & $574;
      $576 = (($575) - ($568))|0;
      $577 = $572 ? 0 : $576;
      $$$i = (($577) + ($544))|0;
      $578 = HEAP32[(4116)>>2]|0;
      $579 = (($$$i) + ($578))|0;
      $580 = ($$$i>>>0)>($$0197>>>0);
      $581 = ($$$i>>>0)<(2147483647);
      $or$cond$i214 = $580 & $581;
      if ($or$cond$i214) {
       $582 = HEAP32[(4124)>>2]|0;
       $583 = ($582|0)==(0);
       if (!($583)) {
        $584 = ($579>>>0)<=($578>>>0);
        $585 = ($579>>>0)>($582>>>0);
        $or$cond2$i215 = $584 | $585;
        if ($or$cond2$i215) {
         $$2234253237$i = 0;
         break;
        }
       }
       $586 = (_sbrk(($$$i|0))|0);
       $587 = ($586|0)==($566|0);
       if ($587) {
        $$723948$i = $$$i;$$749$i = $566;
        label = 180;
        break L244;
       } else {
        $$2247$ph$i = $586;$$2253$ph$i = $$$i;
        label = 171;
       }
      } else {
       $$2234253237$i = 0;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 171) {
     $597 = (0 - ($$2253$ph$i))|0;
     $598 = ($$2247$ph$i|0)!=((-1)|0);
     $599 = ($$2253$ph$i>>>0)<(2147483647);
     $or$cond7$i = $599 & $598;
     $600 = ($539>>>0)>($$2253$ph$i>>>0);
     $or$cond10$i = $600 & $or$cond7$i;
     if (!($or$cond10$i)) {
      $610 = ($$2247$ph$i|0)==((-1)|0);
      if ($610) {
       $$2234253237$i = 0;
       break;
      } else {
       $$723948$i = $$2253$ph$i;$$749$i = $$2247$ph$i;
       label = 180;
       break L244;
      }
     }
     $601 = HEAP32[(4164)>>2]|0;
     $602 = (($540) - ($$2253$ph$i))|0;
     $603 = (($602) + ($601))|0;
     $604 = (0 - ($601))|0;
     $605 = $603 & $604;
     $606 = ($605>>>0)<(2147483647);
     if (!($606)) {
      $$723948$i = $$2253$ph$i;$$749$i = $$2247$ph$i;
      label = 180;
      break L244;
     }
     $607 = (_sbrk(($605|0))|0);
     $608 = ($607|0)==((-1)|0);
     if ($608) {
      (_sbrk(($597|0))|0);
      $$2234253237$i = 0;
      break;
     } else {
      $609 = (($605) + ($$2253$ph$i))|0;
      $$723948$i = $609;$$749$i = $$2247$ph$i;
      label = 180;
      break L244;
     }
    }
   } while(0);
   $611 = HEAP32[(4128)>>2]|0;
   $612 = $611 | 4;
   HEAP32[(4128)>>2] = $612;
   $$4236$i = $$2234253237$i;
   label = 178;
  } else {
   $$4236$i = 0;
   label = 178;
  }
 } while(0);
 if ((label|0) == 178) {
  $613 = ($544>>>0)<(2147483647);
  if ($613) {
   $614 = (_sbrk(($544|0))|0);
   $615 = (_sbrk(0)|0);
   $616 = ($614|0)!=((-1)|0);
   $617 = ($615|0)!=((-1)|0);
   $or$cond5$i = $616 & $617;
   $618 = ($614>>>0)<($615>>>0);
   $or$cond11$i = $618 & $or$cond5$i;
   $619 = $615;
   $620 = $614;
   $621 = (($619) - ($620))|0;
   $622 = (($$0197) + 40)|0;
   $623 = ($621>>>0)>($622>>>0);
   $$$4236$i = $623 ? $621 : $$4236$i;
   $or$cond11$not$i = $or$cond11$i ^ 1;
   $624 = ($614|0)==((-1)|0);
   $not$$i216 = $623 ^ 1;
   $625 = $624 | $not$$i216;
   $or$cond50$i = $625 | $or$cond11$not$i;
   if (!($or$cond50$i)) {
    $$723948$i = $$$4236$i;$$749$i = $614;
    label = 180;
   }
  }
 }
 if ((label|0) == 180) {
  $626 = HEAP32[(4116)>>2]|0;
  $627 = (($626) + ($$723948$i))|0;
  HEAP32[(4116)>>2] = $627;
  $628 = HEAP32[(4120)>>2]|0;
  $629 = ($627>>>0)>($628>>>0);
  if ($629) {
   HEAP32[(4120)>>2] = $627;
  }
  $630 = HEAP32[(3708)>>2]|0;
  $631 = ($630|0)==(0|0);
  do {
   if ($631) {
    $632 = HEAP32[(3700)>>2]|0;
    $633 = ($632|0)==(0|0);
    $634 = ($$749$i>>>0)<($632>>>0);
    $or$cond12$i = $633 | $634;
    if ($or$cond12$i) {
     HEAP32[(3700)>>2] = $$749$i;
    }
    HEAP32[(4132)>>2] = $$749$i;
    HEAP32[(4136)>>2] = $$723948$i;
    HEAP32[(4144)>>2] = 0;
    $635 = HEAP32[1039]|0;
    HEAP32[(3720)>>2] = $635;
    HEAP32[(3716)>>2] = -1;
    $$01$i$i = 0;
    while(1) {
     $636 = $$01$i$i << 1;
     $637 = (3724 + ($636<<2)|0);
     $638 = ((($637)) + 12|0);
     HEAP32[$638>>2] = $637;
     $639 = ((($637)) + 8|0);
     HEAP32[$639>>2] = $637;
     $640 = (($$01$i$i) + 1)|0;
     $exitcond$i$i = ($640|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $$01$i$i = $640;
     }
    }
    $641 = (($$723948$i) + -40)|0;
    $642 = ((($$749$i)) + 8|0);
    $643 = $642;
    $644 = $643 & 7;
    $645 = ($644|0)==(0);
    $646 = (0 - ($643))|0;
    $647 = $646 & 7;
    $648 = $645 ? 0 : $647;
    $649 = (($$749$i) + ($648)|0);
    $650 = (($641) - ($648))|0;
    HEAP32[(3708)>>2] = $649;
    HEAP32[(3696)>>2] = $650;
    $651 = $650 | 1;
    $652 = ((($649)) + 4|0);
    HEAP32[$652>>2] = $651;
    $653 = (($649) + ($650)|0);
    $654 = ((($653)) + 4|0);
    HEAP32[$654>>2] = 40;
    $655 = HEAP32[(4172)>>2]|0;
    HEAP32[(3712)>>2] = $655;
   } else {
    $$024371$i = (4132);
    while(1) {
     $656 = HEAP32[$$024371$i>>2]|0;
     $657 = ((($$024371$i)) + 4|0);
     $658 = HEAP32[$657>>2]|0;
     $659 = (($656) + ($658)|0);
     $660 = ($$749$i|0)==($659|0);
     if ($660) {
      label = 190;
      break;
     }
     $661 = ((($$024371$i)) + 8|0);
     $662 = HEAP32[$661>>2]|0;
     $663 = ($662|0)==(0|0);
     if ($663) {
      break;
     } else {
      $$024371$i = $662;
     }
    }
    if ((label|0) == 190) {
     $664 = ((($$024371$i)) + 12|0);
     $665 = HEAP32[$664>>2]|0;
     $666 = $665 & 8;
     $667 = ($666|0)==(0);
     if ($667) {
      $668 = ($630>>>0)>=($656>>>0);
      $669 = ($630>>>0)<($$749$i>>>0);
      $or$cond51$i = $669 & $668;
      if ($or$cond51$i) {
       $670 = (($658) + ($$723948$i))|0;
       HEAP32[$657>>2] = $670;
       $671 = HEAP32[(3696)>>2]|0;
       $672 = ((($630)) + 8|0);
       $673 = $672;
       $674 = $673 & 7;
       $675 = ($674|0)==(0);
       $676 = (0 - ($673))|0;
       $677 = $676 & 7;
       $678 = $675 ? 0 : $677;
       $679 = (($630) + ($678)|0);
       $680 = (($$723948$i) - ($678))|0;
       $681 = (($671) + ($680))|0;
       HEAP32[(3708)>>2] = $679;
       HEAP32[(3696)>>2] = $681;
       $682 = $681 | 1;
       $683 = ((($679)) + 4|0);
       HEAP32[$683>>2] = $682;
       $684 = (($679) + ($681)|0);
       $685 = ((($684)) + 4|0);
       HEAP32[$685>>2] = 40;
       $686 = HEAP32[(4172)>>2]|0;
       HEAP32[(3712)>>2] = $686;
       break;
      }
     }
    }
    $687 = HEAP32[(3700)>>2]|0;
    $688 = ($$749$i>>>0)<($687>>>0);
    if ($688) {
     HEAP32[(3700)>>2] = $$749$i;
     $752 = $$749$i;
    } else {
     $752 = $687;
    }
    $689 = (($$749$i) + ($$723948$i)|0);
    $$124470$i = (4132);
    while(1) {
     $690 = HEAP32[$$124470$i>>2]|0;
     $691 = ($690|0)==($689|0);
     if ($691) {
      label = 198;
      break;
     }
     $692 = ((($$124470$i)) + 8|0);
     $693 = HEAP32[$692>>2]|0;
     $694 = ($693|0)==(0|0);
     if ($694) {
      break;
     } else {
      $$124470$i = $693;
     }
    }
    if ((label|0) == 198) {
     $695 = ((($$124470$i)) + 12|0);
     $696 = HEAP32[$695>>2]|0;
     $697 = $696 & 8;
     $698 = ($697|0)==(0);
     if ($698) {
      HEAP32[$$124470$i>>2] = $$749$i;
      $699 = ((($$124470$i)) + 4|0);
      $700 = HEAP32[$699>>2]|0;
      $701 = (($700) + ($$723948$i))|0;
      HEAP32[$699>>2] = $701;
      $702 = ((($$749$i)) + 8|0);
      $703 = $702;
      $704 = $703 & 7;
      $705 = ($704|0)==(0);
      $706 = (0 - ($703))|0;
      $707 = $706 & 7;
      $708 = $705 ? 0 : $707;
      $709 = (($$749$i) + ($708)|0);
      $710 = ((($689)) + 8|0);
      $711 = $710;
      $712 = $711 & 7;
      $713 = ($712|0)==(0);
      $714 = (0 - ($711))|0;
      $715 = $714 & 7;
      $716 = $713 ? 0 : $715;
      $717 = (($689) + ($716)|0);
      $718 = $717;
      $719 = $709;
      $720 = (($718) - ($719))|0;
      $721 = (($709) + ($$0197)|0);
      $722 = (($720) - ($$0197))|0;
      $723 = $$0197 | 3;
      $724 = ((($709)) + 4|0);
      HEAP32[$724>>2] = $723;
      $725 = ($717|0)==($630|0);
      do {
       if ($725) {
        $726 = HEAP32[(3696)>>2]|0;
        $727 = (($726) + ($722))|0;
        HEAP32[(3696)>>2] = $727;
        HEAP32[(3708)>>2] = $721;
        $728 = $727 | 1;
        $729 = ((($721)) + 4|0);
        HEAP32[$729>>2] = $728;
       } else {
        $730 = HEAP32[(3704)>>2]|0;
        $731 = ($717|0)==($730|0);
        if ($731) {
         $732 = HEAP32[(3692)>>2]|0;
         $733 = (($732) + ($722))|0;
         HEAP32[(3692)>>2] = $733;
         HEAP32[(3704)>>2] = $721;
         $734 = $733 | 1;
         $735 = ((($721)) + 4|0);
         HEAP32[$735>>2] = $734;
         $736 = (($721) + ($733)|0);
         HEAP32[$736>>2] = $733;
         break;
        }
        $737 = ((($717)) + 4|0);
        $738 = HEAP32[$737>>2]|0;
        $739 = $738 & 3;
        $740 = ($739|0)==(1);
        if ($740) {
         $741 = $738 & -8;
         $742 = $738 >>> 3;
         $743 = ($738>>>0)<(256);
         L314: do {
          if ($743) {
           $744 = ((($717)) + 8|0);
           $745 = HEAP32[$744>>2]|0;
           $746 = ((($717)) + 12|0);
           $747 = HEAP32[$746>>2]|0;
           $748 = $742 << 1;
           $749 = (3724 + ($748<<2)|0);
           $750 = ($745|0)==($749|0);
           do {
            if (!($750)) {
             $751 = ($745>>>0)<($752>>>0);
             if ($751) {
              _abort();
              // unreachable;
             }
             $753 = ((($745)) + 12|0);
             $754 = HEAP32[$753>>2]|0;
             $755 = ($754|0)==($717|0);
             if ($755) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $756 = ($747|0)==($745|0);
           if ($756) {
            $757 = 1 << $742;
            $758 = $757 ^ -1;
            $759 = HEAP32[921]|0;
            $760 = $759 & $758;
            HEAP32[921] = $760;
            break;
           }
           $761 = ($747|0)==($749|0);
           do {
            if ($761) {
             $$pre10$i$i = ((($747)) + 8|0);
             $$pre$phi11$i$iZ2D = $$pre10$i$i;
            } else {
             $762 = ($747>>>0)<($752>>>0);
             if ($762) {
              _abort();
              // unreachable;
             }
             $763 = ((($747)) + 8|0);
             $764 = HEAP32[$763>>2]|0;
             $765 = ($764|0)==($717|0);
             if ($765) {
              $$pre$phi11$i$iZ2D = $763;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $766 = ((($745)) + 12|0);
           HEAP32[$766>>2] = $747;
           HEAP32[$$pre$phi11$i$iZ2D>>2] = $745;
          } else {
           $767 = ((($717)) + 24|0);
           $768 = HEAP32[$767>>2]|0;
           $769 = ((($717)) + 12|0);
           $770 = HEAP32[$769>>2]|0;
           $771 = ($770|0)==($717|0);
           do {
            if ($771) {
             $781 = ((($717)) + 16|0);
             $782 = ((($781)) + 4|0);
             $783 = HEAP32[$782>>2]|0;
             $784 = ($783|0)==(0|0);
             if ($784) {
              $785 = HEAP32[$781>>2]|0;
              $786 = ($785|0)==(0|0);
              if ($786) {
               $$3$i$i = 0;
               break;
              } else {
               $$1291$i$i = $785;$$1293$i$i = $781;
              }
             } else {
              $$1291$i$i = $783;$$1293$i$i = $782;
             }
             while(1) {
              $787 = ((($$1291$i$i)) + 20|0);
              $788 = HEAP32[$787>>2]|0;
              $789 = ($788|0)==(0|0);
              if (!($789)) {
               $$1291$i$i = $788;$$1293$i$i = $787;
               continue;
              }
              $790 = ((($$1291$i$i)) + 16|0);
              $791 = HEAP32[$790>>2]|0;
              $792 = ($791|0)==(0|0);
              if ($792) {
               break;
              } else {
               $$1291$i$i = $791;$$1293$i$i = $790;
              }
             }
             $793 = ($$1293$i$i>>>0)<($752>>>0);
             if ($793) {
              _abort();
              // unreachable;
             } else {
              HEAP32[$$1293$i$i>>2] = 0;
              $$3$i$i = $$1291$i$i;
              break;
             }
            } else {
             $772 = ((($717)) + 8|0);
             $773 = HEAP32[$772>>2]|0;
             $774 = ($773>>>0)<($752>>>0);
             if ($774) {
              _abort();
              // unreachable;
             }
             $775 = ((($773)) + 12|0);
             $776 = HEAP32[$775>>2]|0;
             $777 = ($776|0)==($717|0);
             if (!($777)) {
              _abort();
              // unreachable;
             }
             $778 = ((($770)) + 8|0);
             $779 = HEAP32[$778>>2]|0;
             $780 = ($779|0)==($717|0);
             if ($780) {
              HEAP32[$775>>2] = $770;
              HEAP32[$778>>2] = $773;
              $$3$i$i = $770;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $794 = ($768|0)==(0|0);
           if ($794) {
            break;
           }
           $795 = ((($717)) + 28|0);
           $796 = HEAP32[$795>>2]|0;
           $797 = (3988 + ($796<<2)|0);
           $798 = HEAP32[$797>>2]|0;
           $799 = ($717|0)==($798|0);
           do {
            if ($799) {
             HEAP32[$797>>2] = $$3$i$i;
             $cond$i$i = ($$3$i$i|0)==(0|0);
             if (!($cond$i$i)) {
              break;
             }
             $800 = 1 << $796;
             $801 = $800 ^ -1;
             $802 = HEAP32[(3688)>>2]|0;
             $803 = $802 & $801;
             HEAP32[(3688)>>2] = $803;
             break L314;
            } else {
             $804 = HEAP32[(3700)>>2]|0;
             $805 = ($768>>>0)<($804>>>0);
             if ($805) {
              _abort();
              // unreachable;
             } else {
              $806 = ((($768)) + 16|0);
              $807 = HEAP32[$806>>2]|0;
              $not$$i17$i = ($807|0)!=($717|0);
              $$sink1$i$i = $not$$i17$i&1;
              $808 = (((($768)) + 16|0) + ($$sink1$i$i<<2)|0);
              HEAP32[$808>>2] = $$3$i$i;
              $809 = ($$3$i$i|0)==(0|0);
              if ($809) {
               break L314;
              } else {
               break;
              }
             }
            }
           } while(0);
           $810 = HEAP32[(3700)>>2]|0;
           $811 = ($$3$i$i>>>0)<($810>>>0);
           if ($811) {
            _abort();
            // unreachable;
           }
           $812 = ((($$3$i$i)) + 24|0);
           HEAP32[$812>>2] = $768;
           $813 = ((($717)) + 16|0);
           $814 = HEAP32[$813>>2]|0;
           $815 = ($814|0)==(0|0);
           do {
            if (!($815)) {
             $816 = ($814>>>0)<($810>>>0);
             if ($816) {
              _abort();
              // unreachable;
             } else {
              $817 = ((($$3$i$i)) + 16|0);
              HEAP32[$817>>2] = $814;
              $818 = ((($814)) + 24|0);
              HEAP32[$818>>2] = $$3$i$i;
              break;
             }
            }
           } while(0);
           $819 = ((($813)) + 4|0);
           $820 = HEAP32[$819>>2]|0;
           $821 = ($820|0)==(0|0);
           if ($821) {
            break;
           }
           $822 = HEAP32[(3700)>>2]|0;
           $823 = ($820>>>0)<($822>>>0);
           if ($823) {
            _abort();
            // unreachable;
           } else {
            $824 = ((($$3$i$i)) + 20|0);
            HEAP32[$824>>2] = $820;
            $825 = ((($820)) + 24|0);
            HEAP32[$825>>2] = $$3$i$i;
            break;
           }
          }
         } while(0);
         $826 = (($717) + ($741)|0);
         $827 = (($741) + ($722))|0;
         $$0$i18$i = $826;$$0287$i$i = $827;
        } else {
         $$0$i18$i = $717;$$0287$i$i = $722;
        }
        $828 = ((($$0$i18$i)) + 4|0);
        $829 = HEAP32[$828>>2]|0;
        $830 = $829 & -2;
        HEAP32[$828>>2] = $830;
        $831 = $$0287$i$i | 1;
        $832 = ((($721)) + 4|0);
        HEAP32[$832>>2] = $831;
        $833 = (($721) + ($$0287$i$i)|0);
        HEAP32[$833>>2] = $$0287$i$i;
        $834 = $$0287$i$i >>> 3;
        $835 = ($$0287$i$i>>>0)<(256);
        if ($835) {
         $836 = $834 << 1;
         $837 = (3724 + ($836<<2)|0);
         $838 = HEAP32[921]|0;
         $839 = 1 << $834;
         $840 = $838 & $839;
         $841 = ($840|0)==(0);
         do {
          if ($841) {
           $842 = $838 | $839;
           HEAP32[921] = $842;
           $$pre$i19$i = ((($837)) + 8|0);
           $$0295$i$i = $837;$$pre$phi$i20$iZ2D = $$pre$i19$i;
          } else {
           $843 = ((($837)) + 8|0);
           $844 = HEAP32[$843>>2]|0;
           $845 = HEAP32[(3700)>>2]|0;
           $846 = ($844>>>0)<($845>>>0);
           if (!($846)) {
            $$0295$i$i = $844;$$pre$phi$i20$iZ2D = $843;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         HEAP32[$$pre$phi$i20$iZ2D>>2] = $721;
         $847 = ((($$0295$i$i)) + 12|0);
         HEAP32[$847>>2] = $721;
         $848 = ((($721)) + 8|0);
         HEAP32[$848>>2] = $$0295$i$i;
         $849 = ((($721)) + 12|0);
         HEAP32[$849>>2] = $837;
         break;
        }
        $850 = $$0287$i$i >>> 8;
        $851 = ($850|0)==(0);
        do {
         if ($851) {
          $$0296$i$i = 0;
         } else {
          $852 = ($$0287$i$i>>>0)>(16777215);
          if ($852) {
           $$0296$i$i = 31;
           break;
          }
          $853 = (($850) + 1048320)|0;
          $854 = $853 >>> 16;
          $855 = $854 & 8;
          $856 = $850 << $855;
          $857 = (($856) + 520192)|0;
          $858 = $857 >>> 16;
          $859 = $858 & 4;
          $860 = $859 | $855;
          $861 = $856 << $859;
          $862 = (($861) + 245760)|0;
          $863 = $862 >>> 16;
          $864 = $863 & 2;
          $865 = $860 | $864;
          $866 = (14 - ($865))|0;
          $867 = $861 << $864;
          $868 = $867 >>> 15;
          $869 = (($866) + ($868))|0;
          $870 = $869 << 1;
          $871 = (($869) + 7)|0;
          $872 = $$0287$i$i >>> $871;
          $873 = $872 & 1;
          $874 = $873 | $870;
          $$0296$i$i = $874;
         }
        } while(0);
        $875 = (3988 + ($$0296$i$i<<2)|0);
        $876 = ((($721)) + 28|0);
        HEAP32[$876>>2] = $$0296$i$i;
        $877 = ((($721)) + 16|0);
        $878 = ((($877)) + 4|0);
        HEAP32[$878>>2] = 0;
        HEAP32[$877>>2] = 0;
        $879 = HEAP32[(3688)>>2]|0;
        $880 = 1 << $$0296$i$i;
        $881 = $879 & $880;
        $882 = ($881|0)==(0);
        if ($882) {
         $883 = $879 | $880;
         HEAP32[(3688)>>2] = $883;
         HEAP32[$875>>2] = $721;
         $884 = ((($721)) + 24|0);
         HEAP32[$884>>2] = $875;
         $885 = ((($721)) + 12|0);
         HEAP32[$885>>2] = $721;
         $886 = ((($721)) + 8|0);
         HEAP32[$886>>2] = $721;
         break;
        }
        $887 = HEAP32[$875>>2]|0;
        $888 = ($$0296$i$i|0)==(31);
        $889 = $$0296$i$i >>> 1;
        $890 = (25 - ($889))|0;
        $891 = $888 ? 0 : $890;
        $892 = $$0287$i$i << $891;
        $$0288$i$i = $892;$$0289$i$i = $887;
        while(1) {
         $893 = ((($$0289$i$i)) + 4|0);
         $894 = HEAP32[$893>>2]|0;
         $895 = $894 & -8;
         $896 = ($895|0)==($$0287$i$i|0);
         if ($896) {
          label = 265;
          break;
         }
         $897 = $$0288$i$i >>> 31;
         $898 = (((($$0289$i$i)) + 16|0) + ($897<<2)|0);
         $899 = $$0288$i$i << 1;
         $900 = HEAP32[$898>>2]|0;
         $901 = ($900|0)==(0|0);
         if ($901) {
          label = 262;
          break;
         } else {
          $$0288$i$i = $899;$$0289$i$i = $900;
         }
        }
        if ((label|0) == 262) {
         $902 = HEAP32[(3700)>>2]|0;
         $903 = ($898>>>0)<($902>>>0);
         if ($903) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$898>>2] = $721;
          $904 = ((($721)) + 24|0);
          HEAP32[$904>>2] = $$0289$i$i;
          $905 = ((($721)) + 12|0);
          HEAP32[$905>>2] = $721;
          $906 = ((($721)) + 8|0);
          HEAP32[$906>>2] = $721;
          break;
         }
        }
        else if ((label|0) == 265) {
         $907 = ((($$0289$i$i)) + 8|0);
         $908 = HEAP32[$907>>2]|0;
         $909 = HEAP32[(3700)>>2]|0;
         $910 = ($908>>>0)>=($909>>>0);
         $not$7$i$i = ($$0289$i$i>>>0)>=($909>>>0);
         $911 = $910 & $not$7$i$i;
         if ($911) {
          $912 = ((($908)) + 12|0);
          HEAP32[$912>>2] = $721;
          HEAP32[$907>>2] = $721;
          $913 = ((($721)) + 8|0);
          HEAP32[$913>>2] = $908;
          $914 = ((($721)) + 12|0);
          HEAP32[$914>>2] = $$0289$i$i;
          $915 = ((($721)) + 24|0);
          HEAP32[$915>>2] = 0;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $1047 = ((($709)) + 8|0);
      $$0 = $1047;
      STACKTOP = sp;return ($$0|0);
     }
    }
    $$0$i$i$i = (4132);
    while(1) {
     $916 = HEAP32[$$0$i$i$i>>2]|0;
     $917 = ($916>>>0)>($630>>>0);
     if (!($917)) {
      $918 = ((($$0$i$i$i)) + 4|0);
      $919 = HEAP32[$918>>2]|0;
      $920 = (($916) + ($919)|0);
      $921 = ($920>>>0)>($630>>>0);
      if ($921) {
       break;
      }
     }
     $922 = ((($$0$i$i$i)) + 8|0);
     $923 = HEAP32[$922>>2]|0;
     $$0$i$i$i = $923;
    }
    $924 = ((($920)) + -47|0);
    $925 = ((($924)) + 8|0);
    $926 = $925;
    $927 = $926 & 7;
    $928 = ($927|0)==(0);
    $929 = (0 - ($926))|0;
    $930 = $929 & 7;
    $931 = $928 ? 0 : $930;
    $932 = (($924) + ($931)|0);
    $933 = ((($630)) + 16|0);
    $934 = ($932>>>0)<($933>>>0);
    $935 = $934 ? $630 : $932;
    $936 = ((($935)) + 8|0);
    $937 = ((($935)) + 24|0);
    $938 = (($$723948$i) + -40)|0;
    $939 = ((($$749$i)) + 8|0);
    $940 = $939;
    $941 = $940 & 7;
    $942 = ($941|0)==(0);
    $943 = (0 - ($940))|0;
    $944 = $943 & 7;
    $945 = $942 ? 0 : $944;
    $946 = (($$749$i) + ($945)|0);
    $947 = (($938) - ($945))|0;
    HEAP32[(3708)>>2] = $946;
    HEAP32[(3696)>>2] = $947;
    $948 = $947 | 1;
    $949 = ((($946)) + 4|0);
    HEAP32[$949>>2] = $948;
    $950 = (($946) + ($947)|0);
    $951 = ((($950)) + 4|0);
    HEAP32[$951>>2] = 40;
    $952 = HEAP32[(4172)>>2]|0;
    HEAP32[(3712)>>2] = $952;
    $953 = ((($935)) + 4|0);
    HEAP32[$953>>2] = 27;
    ;HEAP32[$936>>2]=HEAP32[(4132)>>2]|0;HEAP32[$936+4>>2]=HEAP32[(4132)+4>>2]|0;HEAP32[$936+8>>2]=HEAP32[(4132)+8>>2]|0;HEAP32[$936+12>>2]=HEAP32[(4132)+12>>2]|0;
    HEAP32[(4132)>>2] = $$749$i;
    HEAP32[(4136)>>2] = $$723948$i;
    HEAP32[(4144)>>2] = 0;
    HEAP32[(4140)>>2] = $936;
    $955 = $937;
    while(1) {
     $954 = ((($955)) + 4|0);
     HEAP32[$954>>2] = 7;
     $956 = ((($955)) + 8|0);
     $957 = ($956>>>0)<($920>>>0);
     if ($957) {
      $955 = $954;
     } else {
      break;
     }
    }
    $958 = ($935|0)==($630|0);
    if (!($958)) {
     $959 = $935;
     $960 = $630;
     $961 = (($959) - ($960))|0;
     $962 = HEAP32[$953>>2]|0;
     $963 = $962 & -2;
     HEAP32[$953>>2] = $963;
     $964 = $961 | 1;
     $965 = ((($630)) + 4|0);
     HEAP32[$965>>2] = $964;
     HEAP32[$935>>2] = $961;
     $966 = $961 >>> 3;
     $967 = ($961>>>0)<(256);
     if ($967) {
      $968 = $966 << 1;
      $969 = (3724 + ($968<<2)|0);
      $970 = HEAP32[921]|0;
      $971 = 1 << $966;
      $972 = $970 & $971;
      $973 = ($972|0)==(0);
      if ($973) {
       $974 = $970 | $971;
       HEAP32[921] = $974;
       $$pre$i$i = ((($969)) + 8|0);
       $$0211$i$i = $969;$$pre$phi$i$iZ2D = $$pre$i$i;
      } else {
       $975 = ((($969)) + 8|0);
       $976 = HEAP32[$975>>2]|0;
       $977 = HEAP32[(3700)>>2]|0;
       $978 = ($976>>>0)<($977>>>0);
       if ($978) {
        _abort();
        // unreachable;
       } else {
        $$0211$i$i = $976;$$pre$phi$i$iZ2D = $975;
       }
      }
      HEAP32[$$pre$phi$i$iZ2D>>2] = $630;
      $979 = ((($$0211$i$i)) + 12|0);
      HEAP32[$979>>2] = $630;
      $980 = ((($630)) + 8|0);
      HEAP32[$980>>2] = $$0211$i$i;
      $981 = ((($630)) + 12|0);
      HEAP32[$981>>2] = $969;
      break;
     }
     $982 = $961 >>> 8;
     $983 = ($982|0)==(0);
     if ($983) {
      $$0212$i$i = 0;
     } else {
      $984 = ($961>>>0)>(16777215);
      if ($984) {
       $$0212$i$i = 31;
      } else {
       $985 = (($982) + 1048320)|0;
       $986 = $985 >>> 16;
       $987 = $986 & 8;
       $988 = $982 << $987;
       $989 = (($988) + 520192)|0;
       $990 = $989 >>> 16;
       $991 = $990 & 4;
       $992 = $991 | $987;
       $993 = $988 << $991;
       $994 = (($993) + 245760)|0;
       $995 = $994 >>> 16;
       $996 = $995 & 2;
       $997 = $992 | $996;
       $998 = (14 - ($997))|0;
       $999 = $993 << $996;
       $1000 = $999 >>> 15;
       $1001 = (($998) + ($1000))|0;
       $1002 = $1001 << 1;
       $1003 = (($1001) + 7)|0;
       $1004 = $961 >>> $1003;
       $1005 = $1004 & 1;
       $1006 = $1005 | $1002;
       $$0212$i$i = $1006;
      }
     }
     $1007 = (3988 + ($$0212$i$i<<2)|0);
     $1008 = ((($630)) + 28|0);
     HEAP32[$1008>>2] = $$0212$i$i;
     $1009 = ((($630)) + 20|0);
     HEAP32[$1009>>2] = 0;
     HEAP32[$933>>2] = 0;
     $1010 = HEAP32[(3688)>>2]|0;
     $1011 = 1 << $$0212$i$i;
     $1012 = $1010 & $1011;
     $1013 = ($1012|0)==(0);
     if ($1013) {
      $1014 = $1010 | $1011;
      HEAP32[(3688)>>2] = $1014;
      HEAP32[$1007>>2] = $630;
      $1015 = ((($630)) + 24|0);
      HEAP32[$1015>>2] = $1007;
      $1016 = ((($630)) + 12|0);
      HEAP32[$1016>>2] = $630;
      $1017 = ((($630)) + 8|0);
      HEAP32[$1017>>2] = $630;
      break;
     }
     $1018 = HEAP32[$1007>>2]|0;
     $1019 = ($$0212$i$i|0)==(31);
     $1020 = $$0212$i$i >>> 1;
     $1021 = (25 - ($1020))|0;
     $1022 = $1019 ? 0 : $1021;
     $1023 = $961 << $1022;
     $$0206$i$i = $1023;$$0207$i$i = $1018;
     while(1) {
      $1024 = ((($$0207$i$i)) + 4|0);
      $1025 = HEAP32[$1024>>2]|0;
      $1026 = $1025 & -8;
      $1027 = ($1026|0)==($961|0);
      if ($1027) {
       label = 292;
       break;
      }
      $1028 = $$0206$i$i >>> 31;
      $1029 = (((($$0207$i$i)) + 16|0) + ($1028<<2)|0);
      $1030 = $$0206$i$i << 1;
      $1031 = HEAP32[$1029>>2]|0;
      $1032 = ($1031|0)==(0|0);
      if ($1032) {
       label = 289;
       break;
      } else {
       $$0206$i$i = $1030;$$0207$i$i = $1031;
      }
     }
     if ((label|0) == 289) {
      $1033 = HEAP32[(3700)>>2]|0;
      $1034 = ($1029>>>0)<($1033>>>0);
      if ($1034) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$1029>>2] = $630;
       $1035 = ((($630)) + 24|0);
       HEAP32[$1035>>2] = $$0207$i$i;
       $1036 = ((($630)) + 12|0);
       HEAP32[$1036>>2] = $630;
       $1037 = ((($630)) + 8|0);
       HEAP32[$1037>>2] = $630;
       break;
      }
     }
     else if ((label|0) == 292) {
      $1038 = ((($$0207$i$i)) + 8|0);
      $1039 = HEAP32[$1038>>2]|0;
      $1040 = HEAP32[(3700)>>2]|0;
      $1041 = ($1039>>>0)>=($1040>>>0);
      $not$$i$i = ($$0207$i$i>>>0)>=($1040>>>0);
      $1042 = $1041 & $not$$i$i;
      if ($1042) {
       $1043 = ((($1039)) + 12|0);
       HEAP32[$1043>>2] = $630;
       HEAP32[$1038>>2] = $630;
       $1044 = ((($630)) + 8|0);
       HEAP32[$1044>>2] = $1039;
       $1045 = ((($630)) + 12|0);
       HEAP32[$1045>>2] = $$0207$i$i;
       $1046 = ((($630)) + 24|0);
       HEAP32[$1046>>2] = 0;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $1048 = HEAP32[(3696)>>2]|0;
  $1049 = ($1048>>>0)>($$0197>>>0);
  if ($1049) {
   $1050 = (($1048) - ($$0197))|0;
   HEAP32[(3696)>>2] = $1050;
   $1051 = HEAP32[(3708)>>2]|0;
   $1052 = (($1051) + ($$0197)|0);
   HEAP32[(3708)>>2] = $1052;
   $1053 = $1050 | 1;
   $1054 = ((($1052)) + 4|0);
   HEAP32[$1054>>2] = $1053;
   $1055 = $$0197 | 3;
   $1056 = ((($1051)) + 4|0);
   HEAP32[$1056>>2] = $1055;
   $1057 = ((($1051)) + 8|0);
   $$0 = $1057;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $1058 = (___errno_location()|0);
 HEAP32[$1058>>2] = 12;
 $$0 = 0;
 STACKTOP = sp;return ($$0|0);
}
function _free($0) {
 $0 = $0|0;
 var $$0212$i = 0, $$0212$in$i = 0, $$0383 = 0, $$0384 = 0, $$0396 = 0, $$0403 = 0, $$1 = 0, $$1382 = 0, $$1387 = 0, $$1390 = 0, $$1398 = 0, $$1402 = 0, $$2 = 0, $$3 = 0, $$3400 = 0, $$pre = 0, $$pre$phi443Z2D = 0, $$pre$phi445Z2D = 0, $$pre$phiZ2D = 0, $$pre442 = 0;
 var $$pre444 = 0, $$sink3 = 0, $$sink5 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0;
 var $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0;
 var $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0;
 var $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0;
 var $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0;
 var $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0;
 var $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0;
 var $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0;
 var $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0;
 var $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0;
 var $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0;
 var $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0;
 var $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $cond421 = 0, $cond422 = 0, $not$ = 0, $not$405 = 0, $not$437 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + -8|0);
 $3 = HEAP32[(3700)>>2]|0;
 $4 = ($2>>>0)<($3>>>0);
 if ($4) {
  _abort();
  // unreachable;
 }
 $5 = ((($0)) + -4|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = $6 & 3;
 $8 = ($7|0)==(1);
 if ($8) {
  _abort();
  // unreachable;
 }
 $9 = $6 & -8;
 $10 = (($2) + ($9)|0);
 $11 = $6 & 1;
 $12 = ($11|0)==(0);
 L10: do {
  if ($12) {
   $13 = HEAP32[$2>>2]|0;
   $14 = ($7|0)==(0);
   if ($14) {
    return;
   }
   $15 = (0 - ($13))|0;
   $16 = (($2) + ($15)|0);
   $17 = (($13) + ($9))|0;
   $18 = ($16>>>0)<($3>>>0);
   if ($18) {
    _abort();
    // unreachable;
   }
   $19 = HEAP32[(3704)>>2]|0;
   $20 = ($16|0)==($19|0);
   if ($20) {
    $104 = ((($10)) + 4|0);
    $105 = HEAP32[$104>>2]|0;
    $106 = $105 & 3;
    $107 = ($106|0)==(3);
    if (!($107)) {
     $$1 = $16;$$1382 = $17;$113 = $16;
     break;
    }
    $108 = (($16) + ($17)|0);
    $109 = ((($16)) + 4|0);
    $110 = $17 | 1;
    $111 = $105 & -2;
    HEAP32[(3692)>>2] = $17;
    HEAP32[$104>>2] = $111;
    HEAP32[$109>>2] = $110;
    HEAP32[$108>>2] = $17;
    return;
   }
   $21 = $13 >>> 3;
   $22 = ($13>>>0)<(256);
   if ($22) {
    $23 = ((($16)) + 8|0);
    $24 = HEAP32[$23>>2]|0;
    $25 = ((($16)) + 12|0);
    $26 = HEAP32[$25>>2]|0;
    $27 = $21 << 1;
    $28 = (3724 + ($27<<2)|0);
    $29 = ($24|0)==($28|0);
    if (!($29)) {
     $30 = ($24>>>0)<($3>>>0);
     if ($30) {
      _abort();
      // unreachable;
     }
     $31 = ((($24)) + 12|0);
     $32 = HEAP32[$31>>2]|0;
     $33 = ($32|0)==($16|0);
     if (!($33)) {
      _abort();
      // unreachable;
     }
    }
    $34 = ($26|0)==($24|0);
    if ($34) {
     $35 = 1 << $21;
     $36 = $35 ^ -1;
     $37 = HEAP32[921]|0;
     $38 = $37 & $36;
     HEAP32[921] = $38;
     $$1 = $16;$$1382 = $17;$113 = $16;
     break;
    }
    $39 = ($26|0)==($28|0);
    if ($39) {
     $$pre444 = ((($26)) + 8|0);
     $$pre$phi445Z2D = $$pre444;
    } else {
     $40 = ($26>>>0)<($3>>>0);
     if ($40) {
      _abort();
      // unreachable;
     }
     $41 = ((($26)) + 8|0);
     $42 = HEAP32[$41>>2]|0;
     $43 = ($42|0)==($16|0);
     if ($43) {
      $$pre$phi445Z2D = $41;
     } else {
      _abort();
      // unreachable;
     }
    }
    $44 = ((($24)) + 12|0);
    HEAP32[$44>>2] = $26;
    HEAP32[$$pre$phi445Z2D>>2] = $24;
    $$1 = $16;$$1382 = $17;$113 = $16;
    break;
   }
   $45 = ((($16)) + 24|0);
   $46 = HEAP32[$45>>2]|0;
   $47 = ((($16)) + 12|0);
   $48 = HEAP32[$47>>2]|0;
   $49 = ($48|0)==($16|0);
   do {
    if ($49) {
     $59 = ((($16)) + 16|0);
     $60 = ((($59)) + 4|0);
     $61 = HEAP32[$60>>2]|0;
     $62 = ($61|0)==(0|0);
     if ($62) {
      $63 = HEAP32[$59>>2]|0;
      $64 = ($63|0)==(0|0);
      if ($64) {
       $$3 = 0;
       break;
      } else {
       $$1387 = $63;$$1390 = $59;
      }
     } else {
      $$1387 = $61;$$1390 = $60;
     }
     while(1) {
      $65 = ((($$1387)) + 20|0);
      $66 = HEAP32[$65>>2]|0;
      $67 = ($66|0)==(0|0);
      if (!($67)) {
       $$1387 = $66;$$1390 = $65;
       continue;
      }
      $68 = ((($$1387)) + 16|0);
      $69 = HEAP32[$68>>2]|0;
      $70 = ($69|0)==(0|0);
      if ($70) {
       break;
      } else {
       $$1387 = $69;$$1390 = $68;
      }
     }
     $71 = ($$1390>>>0)<($3>>>0);
     if ($71) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$$1390>>2] = 0;
      $$3 = $$1387;
      break;
     }
    } else {
     $50 = ((($16)) + 8|0);
     $51 = HEAP32[$50>>2]|0;
     $52 = ($51>>>0)<($3>>>0);
     if ($52) {
      _abort();
      // unreachable;
     }
     $53 = ((($51)) + 12|0);
     $54 = HEAP32[$53>>2]|0;
     $55 = ($54|0)==($16|0);
     if (!($55)) {
      _abort();
      // unreachable;
     }
     $56 = ((($48)) + 8|0);
     $57 = HEAP32[$56>>2]|0;
     $58 = ($57|0)==($16|0);
     if ($58) {
      HEAP32[$53>>2] = $48;
      HEAP32[$56>>2] = $51;
      $$3 = $48;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $72 = ($46|0)==(0|0);
   if ($72) {
    $$1 = $16;$$1382 = $17;$113 = $16;
   } else {
    $73 = ((($16)) + 28|0);
    $74 = HEAP32[$73>>2]|0;
    $75 = (3988 + ($74<<2)|0);
    $76 = HEAP32[$75>>2]|0;
    $77 = ($16|0)==($76|0);
    do {
     if ($77) {
      HEAP32[$75>>2] = $$3;
      $cond421 = ($$3|0)==(0|0);
      if ($cond421) {
       $78 = 1 << $74;
       $79 = $78 ^ -1;
       $80 = HEAP32[(3688)>>2]|0;
       $81 = $80 & $79;
       HEAP32[(3688)>>2] = $81;
       $$1 = $16;$$1382 = $17;$113 = $16;
       break L10;
      }
     } else {
      $82 = HEAP32[(3700)>>2]|0;
      $83 = ($46>>>0)<($82>>>0);
      if ($83) {
       _abort();
       // unreachable;
      } else {
       $84 = ((($46)) + 16|0);
       $85 = HEAP32[$84>>2]|0;
       $not$405 = ($85|0)!=($16|0);
       $$sink3 = $not$405&1;
       $86 = (((($46)) + 16|0) + ($$sink3<<2)|0);
       HEAP32[$86>>2] = $$3;
       $87 = ($$3|0)==(0|0);
       if ($87) {
        $$1 = $16;$$1382 = $17;$113 = $16;
        break L10;
       } else {
        break;
       }
      }
     }
    } while(0);
    $88 = HEAP32[(3700)>>2]|0;
    $89 = ($$3>>>0)<($88>>>0);
    if ($89) {
     _abort();
     // unreachable;
    }
    $90 = ((($$3)) + 24|0);
    HEAP32[$90>>2] = $46;
    $91 = ((($16)) + 16|0);
    $92 = HEAP32[$91>>2]|0;
    $93 = ($92|0)==(0|0);
    do {
     if (!($93)) {
      $94 = ($92>>>0)<($88>>>0);
      if ($94) {
       _abort();
       // unreachable;
      } else {
       $95 = ((($$3)) + 16|0);
       HEAP32[$95>>2] = $92;
       $96 = ((($92)) + 24|0);
       HEAP32[$96>>2] = $$3;
       break;
      }
     }
    } while(0);
    $97 = ((($91)) + 4|0);
    $98 = HEAP32[$97>>2]|0;
    $99 = ($98|0)==(0|0);
    if ($99) {
     $$1 = $16;$$1382 = $17;$113 = $16;
    } else {
     $100 = HEAP32[(3700)>>2]|0;
     $101 = ($98>>>0)<($100>>>0);
     if ($101) {
      _abort();
      // unreachable;
     } else {
      $102 = ((($$3)) + 20|0);
      HEAP32[$102>>2] = $98;
      $103 = ((($98)) + 24|0);
      HEAP32[$103>>2] = $$3;
      $$1 = $16;$$1382 = $17;$113 = $16;
      break;
     }
    }
   }
  } else {
   $$1 = $2;$$1382 = $9;$113 = $2;
  }
 } while(0);
 $112 = ($113>>>0)<($10>>>0);
 if (!($112)) {
  _abort();
  // unreachable;
 }
 $114 = ((($10)) + 4|0);
 $115 = HEAP32[$114>>2]|0;
 $116 = $115 & 1;
 $117 = ($116|0)==(0);
 if ($117) {
  _abort();
  // unreachable;
 }
 $118 = $115 & 2;
 $119 = ($118|0)==(0);
 if ($119) {
  $120 = HEAP32[(3708)>>2]|0;
  $121 = ($10|0)==($120|0);
  $122 = HEAP32[(3704)>>2]|0;
  if ($121) {
   $123 = HEAP32[(3696)>>2]|0;
   $124 = (($123) + ($$1382))|0;
   HEAP32[(3696)>>2] = $124;
   HEAP32[(3708)>>2] = $$1;
   $125 = $124 | 1;
   $126 = ((($$1)) + 4|0);
   HEAP32[$126>>2] = $125;
   $127 = ($$1|0)==($122|0);
   if (!($127)) {
    return;
   }
   HEAP32[(3704)>>2] = 0;
   HEAP32[(3692)>>2] = 0;
   return;
  }
  $128 = ($10|0)==($122|0);
  if ($128) {
   $129 = HEAP32[(3692)>>2]|0;
   $130 = (($129) + ($$1382))|0;
   HEAP32[(3692)>>2] = $130;
   HEAP32[(3704)>>2] = $113;
   $131 = $130 | 1;
   $132 = ((($$1)) + 4|0);
   HEAP32[$132>>2] = $131;
   $133 = (($113) + ($130)|0);
   HEAP32[$133>>2] = $130;
   return;
  }
  $134 = $115 & -8;
  $135 = (($134) + ($$1382))|0;
  $136 = $115 >>> 3;
  $137 = ($115>>>0)<(256);
  L108: do {
   if ($137) {
    $138 = ((($10)) + 8|0);
    $139 = HEAP32[$138>>2]|0;
    $140 = ((($10)) + 12|0);
    $141 = HEAP32[$140>>2]|0;
    $142 = $136 << 1;
    $143 = (3724 + ($142<<2)|0);
    $144 = ($139|0)==($143|0);
    if (!($144)) {
     $145 = HEAP32[(3700)>>2]|0;
     $146 = ($139>>>0)<($145>>>0);
     if ($146) {
      _abort();
      // unreachable;
     }
     $147 = ((($139)) + 12|0);
     $148 = HEAP32[$147>>2]|0;
     $149 = ($148|0)==($10|0);
     if (!($149)) {
      _abort();
      // unreachable;
     }
    }
    $150 = ($141|0)==($139|0);
    if ($150) {
     $151 = 1 << $136;
     $152 = $151 ^ -1;
     $153 = HEAP32[921]|0;
     $154 = $153 & $152;
     HEAP32[921] = $154;
     break;
    }
    $155 = ($141|0)==($143|0);
    if ($155) {
     $$pre442 = ((($141)) + 8|0);
     $$pre$phi443Z2D = $$pre442;
    } else {
     $156 = HEAP32[(3700)>>2]|0;
     $157 = ($141>>>0)<($156>>>0);
     if ($157) {
      _abort();
      // unreachable;
     }
     $158 = ((($141)) + 8|0);
     $159 = HEAP32[$158>>2]|0;
     $160 = ($159|0)==($10|0);
     if ($160) {
      $$pre$phi443Z2D = $158;
     } else {
      _abort();
      // unreachable;
     }
    }
    $161 = ((($139)) + 12|0);
    HEAP32[$161>>2] = $141;
    HEAP32[$$pre$phi443Z2D>>2] = $139;
   } else {
    $162 = ((($10)) + 24|0);
    $163 = HEAP32[$162>>2]|0;
    $164 = ((($10)) + 12|0);
    $165 = HEAP32[$164>>2]|0;
    $166 = ($165|0)==($10|0);
    do {
     if ($166) {
      $177 = ((($10)) + 16|0);
      $178 = ((($177)) + 4|0);
      $179 = HEAP32[$178>>2]|0;
      $180 = ($179|0)==(0|0);
      if ($180) {
       $181 = HEAP32[$177>>2]|0;
       $182 = ($181|0)==(0|0);
       if ($182) {
        $$3400 = 0;
        break;
       } else {
        $$1398 = $181;$$1402 = $177;
       }
      } else {
       $$1398 = $179;$$1402 = $178;
      }
      while(1) {
       $183 = ((($$1398)) + 20|0);
       $184 = HEAP32[$183>>2]|0;
       $185 = ($184|0)==(0|0);
       if (!($185)) {
        $$1398 = $184;$$1402 = $183;
        continue;
       }
       $186 = ((($$1398)) + 16|0);
       $187 = HEAP32[$186>>2]|0;
       $188 = ($187|0)==(0|0);
       if ($188) {
        break;
       } else {
        $$1398 = $187;$$1402 = $186;
       }
      }
      $189 = HEAP32[(3700)>>2]|0;
      $190 = ($$1402>>>0)<($189>>>0);
      if ($190) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$$1402>>2] = 0;
       $$3400 = $$1398;
       break;
      }
     } else {
      $167 = ((($10)) + 8|0);
      $168 = HEAP32[$167>>2]|0;
      $169 = HEAP32[(3700)>>2]|0;
      $170 = ($168>>>0)<($169>>>0);
      if ($170) {
       _abort();
       // unreachable;
      }
      $171 = ((($168)) + 12|0);
      $172 = HEAP32[$171>>2]|0;
      $173 = ($172|0)==($10|0);
      if (!($173)) {
       _abort();
       // unreachable;
      }
      $174 = ((($165)) + 8|0);
      $175 = HEAP32[$174>>2]|0;
      $176 = ($175|0)==($10|0);
      if ($176) {
       HEAP32[$171>>2] = $165;
       HEAP32[$174>>2] = $168;
       $$3400 = $165;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $191 = ($163|0)==(0|0);
    if (!($191)) {
     $192 = ((($10)) + 28|0);
     $193 = HEAP32[$192>>2]|0;
     $194 = (3988 + ($193<<2)|0);
     $195 = HEAP32[$194>>2]|0;
     $196 = ($10|0)==($195|0);
     do {
      if ($196) {
       HEAP32[$194>>2] = $$3400;
       $cond422 = ($$3400|0)==(0|0);
       if ($cond422) {
        $197 = 1 << $193;
        $198 = $197 ^ -1;
        $199 = HEAP32[(3688)>>2]|0;
        $200 = $199 & $198;
        HEAP32[(3688)>>2] = $200;
        break L108;
       }
      } else {
       $201 = HEAP32[(3700)>>2]|0;
       $202 = ($163>>>0)<($201>>>0);
       if ($202) {
        _abort();
        // unreachable;
       } else {
        $203 = ((($163)) + 16|0);
        $204 = HEAP32[$203>>2]|0;
        $not$ = ($204|0)!=($10|0);
        $$sink5 = $not$&1;
        $205 = (((($163)) + 16|0) + ($$sink5<<2)|0);
        HEAP32[$205>>2] = $$3400;
        $206 = ($$3400|0)==(0|0);
        if ($206) {
         break L108;
        } else {
         break;
        }
       }
      }
     } while(0);
     $207 = HEAP32[(3700)>>2]|0;
     $208 = ($$3400>>>0)<($207>>>0);
     if ($208) {
      _abort();
      // unreachable;
     }
     $209 = ((($$3400)) + 24|0);
     HEAP32[$209>>2] = $163;
     $210 = ((($10)) + 16|0);
     $211 = HEAP32[$210>>2]|0;
     $212 = ($211|0)==(0|0);
     do {
      if (!($212)) {
       $213 = ($211>>>0)<($207>>>0);
       if ($213) {
        _abort();
        // unreachable;
       } else {
        $214 = ((($$3400)) + 16|0);
        HEAP32[$214>>2] = $211;
        $215 = ((($211)) + 24|0);
        HEAP32[$215>>2] = $$3400;
        break;
       }
      }
     } while(0);
     $216 = ((($210)) + 4|0);
     $217 = HEAP32[$216>>2]|0;
     $218 = ($217|0)==(0|0);
     if (!($218)) {
      $219 = HEAP32[(3700)>>2]|0;
      $220 = ($217>>>0)<($219>>>0);
      if ($220) {
       _abort();
       // unreachable;
      } else {
       $221 = ((($$3400)) + 20|0);
       HEAP32[$221>>2] = $217;
       $222 = ((($217)) + 24|0);
       HEAP32[$222>>2] = $$3400;
       break;
      }
     }
    }
   }
  } while(0);
  $223 = $135 | 1;
  $224 = ((($$1)) + 4|0);
  HEAP32[$224>>2] = $223;
  $225 = (($113) + ($135)|0);
  HEAP32[$225>>2] = $135;
  $226 = HEAP32[(3704)>>2]|0;
  $227 = ($$1|0)==($226|0);
  if ($227) {
   HEAP32[(3692)>>2] = $135;
   return;
  } else {
   $$2 = $135;
  }
 } else {
  $228 = $115 & -2;
  HEAP32[$114>>2] = $228;
  $229 = $$1382 | 1;
  $230 = ((($$1)) + 4|0);
  HEAP32[$230>>2] = $229;
  $231 = (($113) + ($$1382)|0);
  HEAP32[$231>>2] = $$1382;
  $$2 = $$1382;
 }
 $232 = $$2 >>> 3;
 $233 = ($$2>>>0)<(256);
 if ($233) {
  $234 = $232 << 1;
  $235 = (3724 + ($234<<2)|0);
  $236 = HEAP32[921]|0;
  $237 = 1 << $232;
  $238 = $236 & $237;
  $239 = ($238|0)==(0);
  if ($239) {
   $240 = $236 | $237;
   HEAP32[921] = $240;
   $$pre = ((($235)) + 8|0);
   $$0403 = $235;$$pre$phiZ2D = $$pre;
  } else {
   $241 = ((($235)) + 8|0);
   $242 = HEAP32[$241>>2]|0;
   $243 = HEAP32[(3700)>>2]|0;
   $244 = ($242>>>0)<($243>>>0);
   if ($244) {
    _abort();
    // unreachable;
   } else {
    $$0403 = $242;$$pre$phiZ2D = $241;
   }
  }
  HEAP32[$$pre$phiZ2D>>2] = $$1;
  $245 = ((($$0403)) + 12|0);
  HEAP32[$245>>2] = $$1;
  $246 = ((($$1)) + 8|0);
  HEAP32[$246>>2] = $$0403;
  $247 = ((($$1)) + 12|0);
  HEAP32[$247>>2] = $235;
  return;
 }
 $248 = $$2 >>> 8;
 $249 = ($248|0)==(0);
 if ($249) {
  $$0396 = 0;
 } else {
  $250 = ($$2>>>0)>(16777215);
  if ($250) {
   $$0396 = 31;
  } else {
   $251 = (($248) + 1048320)|0;
   $252 = $251 >>> 16;
   $253 = $252 & 8;
   $254 = $248 << $253;
   $255 = (($254) + 520192)|0;
   $256 = $255 >>> 16;
   $257 = $256 & 4;
   $258 = $257 | $253;
   $259 = $254 << $257;
   $260 = (($259) + 245760)|0;
   $261 = $260 >>> 16;
   $262 = $261 & 2;
   $263 = $258 | $262;
   $264 = (14 - ($263))|0;
   $265 = $259 << $262;
   $266 = $265 >>> 15;
   $267 = (($264) + ($266))|0;
   $268 = $267 << 1;
   $269 = (($267) + 7)|0;
   $270 = $$2 >>> $269;
   $271 = $270 & 1;
   $272 = $271 | $268;
   $$0396 = $272;
  }
 }
 $273 = (3988 + ($$0396<<2)|0);
 $274 = ((($$1)) + 28|0);
 HEAP32[$274>>2] = $$0396;
 $275 = ((($$1)) + 16|0);
 $276 = ((($$1)) + 20|0);
 HEAP32[$276>>2] = 0;
 HEAP32[$275>>2] = 0;
 $277 = HEAP32[(3688)>>2]|0;
 $278 = 1 << $$0396;
 $279 = $277 & $278;
 $280 = ($279|0)==(0);
 do {
  if ($280) {
   $281 = $277 | $278;
   HEAP32[(3688)>>2] = $281;
   HEAP32[$273>>2] = $$1;
   $282 = ((($$1)) + 24|0);
   HEAP32[$282>>2] = $273;
   $283 = ((($$1)) + 12|0);
   HEAP32[$283>>2] = $$1;
   $284 = ((($$1)) + 8|0);
   HEAP32[$284>>2] = $$1;
  } else {
   $285 = HEAP32[$273>>2]|0;
   $286 = ($$0396|0)==(31);
   $287 = $$0396 >>> 1;
   $288 = (25 - ($287))|0;
   $289 = $286 ? 0 : $288;
   $290 = $$2 << $289;
   $$0383 = $290;$$0384 = $285;
   while(1) {
    $291 = ((($$0384)) + 4|0);
    $292 = HEAP32[$291>>2]|0;
    $293 = $292 & -8;
    $294 = ($293|0)==($$2|0);
    if ($294) {
     label = 124;
     break;
    }
    $295 = $$0383 >>> 31;
    $296 = (((($$0384)) + 16|0) + ($295<<2)|0);
    $297 = $$0383 << 1;
    $298 = HEAP32[$296>>2]|0;
    $299 = ($298|0)==(0|0);
    if ($299) {
     label = 121;
     break;
    } else {
     $$0383 = $297;$$0384 = $298;
    }
   }
   if ((label|0) == 121) {
    $300 = HEAP32[(3700)>>2]|0;
    $301 = ($296>>>0)<($300>>>0);
    if ($301) {
     _abort();
     // unreachable;
    } else {
     HEAP32[$296>>2] = $$1;
     $302 = ((($$1)) + 24|0);
     HEAP32[$302>>2] = $$0384;
     $303 = ((($$1)) + 12|0);
     HEAP32[$303>>2] = $$1;
     $304 = ((($$1)) + 8|0);
     HEAP32[$304>>2] = $$1;
     break;
    }
   }
   else if ((label|0) == 124) {
    $305 = ((($$0384)) + 8|0);
    $306 = HEAP32[$305>>2]|0;
    $307 = HEAP32[(3700)>>2]|0;
    $308 = ($306>>>0)>=($307>>>0);
    $not$437 = ($$0384>>>0)>=($307>>>0);
    $309 = $308 & $not$437;
    if ($309) {
     $310 = ((($306)) + 12|0);
     HEAP32[$310>>2] = $$1;
     HEAP32[$305>>2] = $$1;
     $311 = ((($$1)) + 8|0);
     HEAP32[$311>>2] = $306;
     $312 = ((($$1)) + 12|0);
     HEAP32[$312>>2] = $$0384;
     $313 = ((($$1)) + 24|0);
     HEAP32[$313>>2] = 0;
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $314 = HEAP32[(3716)>>2]|0;
 $315 = (($314) + -1)|0;
 HEAP32[(3716)>>2] = $315;
 $316 = ($315|0)==(0);
 if ($316) {
  $$0212$in$i = (4140);
 } else {
  return;
 }
 while(1) {
  $$0212$i = HEAP32[$$0212$in$i>>2]|0;
  $317 = ($$0212$i|0)==(0|0);
  $318 = ((($$0212$i)) + 8|0);
  if ($317) {
   break;
  } else {
   $$0212$in$i = $318;
  }
 }
 HEAP32[(3716)>>2] = -1;
 return;
}
function _realloc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 if ($2) {
  $3 = (_malloc($1)|0);
  $$1 = $3;
  return ($$1|0);
 }
 $4 = ($1>>>0)>(4294967231);
 if ($4) {
  $5 = (___errno_location()|0);
  HEAP32[$5>>2] = 12;
  $$1 = 0;
  return ($$1|0);
 }
 $6 = ($1>>>0)<(11);
 $7 = (($1) + 11)|0;
 $8 = $7 & -8;
 $9 = $6 ? 16 : $8;
 $10 = ((($0)) + -8|0);
 $11 = (_try_realloc_chunk($10,$9)|0);
 $12 = ($11|0)==(0|0);
 if (!($12)) {
  $13 = ((($11)) + 8|0);
  $$1 = $13;
  return ($$1|0);
 }
 $14 = (_malloc($1)|0);
 $15 = ($14|0)==(0|0);
 if ($15) {
  $$1 = 0;
  return ($$1|0);
 }
 $16 = ((($0)) + -4|0);
 $17 = HEAP32[$16>>2]|0;
 $18 = $17 & -8;
 $19 = $17 & 3;
 $20 = ($19|0)==(0);
 $21 = $20 ? 8 : 4;
 $22 = (($18) - ($21))|0;
 $23 = ($22>>>0)<($1>>>0);
 $24 = $23 ? $22 : $1;
 _memcpy(($14|0),($0|0),($24|0))|0;
 _free($0);
 $$1 = $14;
 return ($$1|0);
}
function _try_realloc_chunk($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$1272 = 0, $$1275 = 0, $$2 = 0, $$3 = 0, $$pre = 0, $$pre$phiZ2D = 0, $$sink1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0;
 var $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0;
 var $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0;
 var $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0;
 var $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var $cond = 0, $not$ = 0, $notlhs = 0, $notrhs = 0, $or$cond$not = 0, $or$cond3 = 0, $storemerge = 0, $storemerge1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 4|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = $3 & -8;
 $5 = (($0) + ($4)|0);
 $6 = HEAP32[(3700)>>2]|0;
 $7 = $3 & 3;
 $notlhs = ($0>>>0)>=($6>>>0);
 $notrhs = ($7|0)!=(1);
 $or$cond$not = $notrhs & $notlhs;
 $8 = ($0>>>0)<($5>>>0);
 $or$cond3 = $or$cond$not & $8;
 if (!($or$cond3)) {
  _abort();
  // unreachable;
 }
 $9 = ((($5)) + 4|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = $10 & 1;
 $12 = ($11|0)==(0);
 if ($12) {
  _abort();
  // unreachable;
 }
 $13 = ($7|0)==(0);
 if ($13) {
  $14 = ($1>>>0)<(256);
  if ($14) {
   $$2 = 0;
   return ($$2|0);
  }
  $15 = (($1) + 4)|0;
  $16 = ($4>>>0)<($15>>>0);
  if (!($16)) {
   $17 = (($4) - ($1))|0;
   $18 = HEAP32[(4164)>>2]|0;
   $19 = $18 << 1;
   $20 = ($17>>>0)>($19>>>0);
   if (!($20)) {
    $$2 = $0;
    return ($$2|0);
   }
  }
  $$2 = 0;
  return ($$2|0);
 }
 $21 = ($4>>>0)<($1>>>0);
 if (!($21)) {
  $22 = (($4) - ($1))|0;
  $23 = ($22>>>0)>(15);
  if (!($23)) {
   $$2 = $0;
   return ($$2|0);
  }
  $24 = (($0) + ($1)|0);
  $25 = $3 & 1;
  $26 = $25 | $1;
  $27 = $26 | 2;
  HEAP32[$2>>2] = $27;
  $28 = ((($24)) + 4|0);
  $29 = $22 | 3;
  HEAP32[$28>>2] = $29;
  $30 = (($24) + ($22)|0);
  $31 = ((($30)) + 4|0);
  $32 = HEAP32[$31>>2]|0;
  $33 = $32 | 1;
  HEAP32[$31>>2] = $33;
  _dispose_chunk($24,$22);
  $$2 = $0;
  return ($$2|0);
 }
 $34 = HEAP32[(3708)>>2]|0;
 $35 = ($5|0)==($34|0);
 if ($35) {
  $36 = HEAP32[(3696)>>2]|0;
  $37 = (($36) + ($4))|0;
  $38 = ($37>>>0)>($1>>>0);
  $39 = (($37) - ($1))|0;
  $40 = (($0) + ($1)|0);
  if (!($38)) {
   $$2 = 0;
   return ($$2|0);
  }
  $41 = $39 | 1;
  $42 = ((($40)) + 4|0);
  $43 = $3 & 1;
  $44 = $43 | $1;
  $45 = $44 | 2;
  HEAP32[$2>>2] = $45;
  HEAP32[$42>>2] = $41;
  HEAP32[(3708)>>2] = $40;
  HEAP32[(3696)>>2] = $39;
  $$2 = $0;
  return ($$2|0);
 }
 $46 = HEAP32[(3704)>>2]|0;
 $47 = ($5|0)==($46|0);
 if ($47) {
  $48 = HEAP32[(3692)>>2]|0;
  $49 = (($48) + ($4))|0;
  $50 = ($49>>>0)<($1>>>0);
  if ($50) {
   $$2 = 0;
   return ($$2|0);
  }
  $51 = (($49) - ($1))|0;
  $52 = ($51>>>0)>(15);
  $53 = $3 & 1;
  if ($52) {
   $54 = (($0) + ($1)|0);
   $55 = (($54) + ($51)|0);
   $56 = $53 | $1;
   $57 = $56 | 2;
   HEAP32[$2>>2] = $57;
   $58 = ((($54)) + 4|0);
   $59 = $51 | 1;
   HEAP32[$58>>2] = $59;
   HEAP32[$55>>2] = $51;
   $60 = ((($55)) + 4|0);
   $61 = HEAP32[$60>>2]|0;
   $62 = $61 & -2;
   HEAP32[$60>>2] = $62;
   $storemerge = $54;$storemerge1 = $51;
  } else {
   $63 = $53 | $49;
   $64 = $63 | 2;
   HEAP32[$2>>2] = $64;
   $65 = (($0) + ($49)|0);
   $66 = ((($65)) + 4|0);
   $67 = HEAP32[$66>>2]|0;
   $68 = $67 | 1;
   HEAP32[$66>>2] = $68;
   $storemerge = 0;$storemerge1 = 0;
  }
  HEAP32[(3692)>>2] = $storemerge1;
  HEAP32[(3704)>>2] = $storemerge;
  $$2 = $0;
  return ($$2|0);
 }
 $69 = $10 & 2;
 $70 = ($69|0)==(0);
 if (!($70)) {
  $$2 = 0;
  return ($$2|0);
 }
 $71 = $10 & -8;
 $72 = (($71) + ($4))|0;
 $73 = ($72>>>0)<($1>>>0);
 if ($73) {
  $$2 = 0;
  return ($$2|0);
 }
 $74 = (($72) - ($1))|0;
 $75 = $10 >>> 3;
 $76 = ($10>>>0)<(256);
 L49: do {
  if ($76) {
   $77 = ((($5)) + 8|0);
   $78 = HEAP32[$77>>2]|0;
   $79 = ((($5)) + 12|0);
   $80 = HEAP32[$79>>2]|0;
   $81 = $75 << 1;
   $82 = (3724 + ($81<<2)|0);
   $83 = ($78|0)==($82|0);
   if (!($83)) {
    $84 = ($78>>>0)<($6>>>0);
    if ($84) {
     _abort();
     // unreachable;
    }
    $85 = ((($78)) + 12|0);
    $86 = HEAP32[$85>>2]|0;
    $87 = ($86|0)==($5|0);
    if (!($87)) {
     _abort();
     // unreachable;
    }
   }
   $88 = ($80|0)==($78|0);
   if ($88) {
    $89 = 1 << $75;
    $90 = $89 ^ -1;
    $91 = HEAP32[921]|0;
    $92 = $91 & $90;
    HEAP32[921] = $92;
    break;
   }
   $93 = ($80|0)==($82|0);
   if ($93) {
    $$pre = ((($80)) + 8|0);
    $$pre$phiZ2D = $$pre;
   } else {
    $94 = ($80>>>0)<($6>>>0);
    if ($94) {
     _abort();
     // unreachable;
    }
    $95 = ((($80)) + 8|0);
    $96 = HEAP32[$95>>2]|0;
    $97 = ($96|0)==($5|0);
    if ($97) {
     $$pre$phiZ2D = $95;
    } else {
     _abort();
     // unreachable;
    }
   }
   $98 = ((($78)) + 12|0);
   HEAP32[$98>>2] = $80;
   HEAP32[$$pre$phiZ2D>>2] = $78;
  } else {
   $99 = ((($5)) + 24|0);
   $100 = HEAP32[$99>>2]|0;
   $101 = ((($5)) + 12|0);
   $102 = HEAP32[$101>>2]|0;
   $103 = ($102|0)==($5|0);
   do {
    if ($103) {
     $113 = ((($5)) + 16|0);
     $114 = ((($113)) + 4|0);
     $115 = HEAP32[$114>>2]|0;
     $116 = ($115|0)==(0|0);
     if ($116) {
      $117 = HEAP32[$113>>2]|0;
      $118 = ($117|0)==(0|0);
      if ($118) {
       $$3 = 0;
       break;
      } else {
       $$1272 = $117;$$1275 = $113;
      }
     } else {
      $$1272 = $115;$$1275 = $114;
     }
     while(1) {
      $119 = ((($$1272)) + 20|0);
      $120 = HEAP32[$119>>2]|0;
      $121 = ($120|0)==(0|0);
      if (!($121)) {
       $$1272 = $120;$$1275 = $119;
       continue;
      }
      $122 = ((($$1272)) + 16|0);
      $123 = HEAP32[$122>>2]|0;
      $124 = ($123|0)==(0|0);
      if ($124) {
       break;
      } else {
       $$1272 = $123;$$1275 = $122;
      }
     }
     $125 = ($$1275>>>0)<($6>>>0);
     if ($125) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$$1275>>2] = 0;
      $$3 = $$1272;
      break;
     }
    } else {
     $104 = ((($5)) + 8|0);
     $105 = HEAP32[$104>>2]|0;
     $106 = ($105>>>0)<($6>>>0);
     if ($106) {
      _abort();
      // unreachable;
     }
     $107 = ((($105)) + 12|0);
     $108 = HEAP32[$107>>2]|0;
     $109 = ($108|0)==($5|0);
     if (!($109)) {
      _abort();
      // unreachable;
     }
     $110 = ((($102)) + 8|0);
     $111 = HEAP32[$110>>2]|0;
     $112 = ($111|0)==($5|0);
     if ($112) {
      HEAP32[$107>>2] = $102;
      HEAP32[$110>>2] = $105;
      $$3 = $102;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $126 = ($100|0)==(0|0);
   if (!($126)) {
    $127 = ((($5)) + 28|0);
    $128 = HEAP32[$127>>2]|0;
    $129 = (3988 + ($128<<2)|0);
    $130 = HEAP32[$129>>2]|0;
    $131 = ($5|0)==($130|0);
    do {
     if ($131) {
      HEAP32[$129>>2] = $$3;
      $cond = ($$3|0)==(0|0);
      if ($cond) {
       $132 = 1 << $128;
       $133 = $132 ^ -1;
       $134 = HEAP32[(3688)>>2]|0;
       $135 = $134 & $133;
       HEAP32[(3688)>>2] = $135;
       break L49;
      }
     } else {
      $136 = HEAP32[(3700)>>2]|0;
      $137 = ($100>>>0)<($136>>>0);
      if ($137) {
       _abort();
       // unreachable;
      } else {
       $138 = ((($100)) + 16|0);
       $139 = HEAP32[$138>>2]|0;
       $not$ = ($139|0)!=($5|0);
       $$sink1 = $not$&1;
       $140 = (((($100)) + 16|0) + ($$sink1<<2)|0);
       HEAP32[$140>>2] = $$3;
       $141 = ($$3|0)==(0|0);
       if ($141) {
        break L49;
       } else {
        break;
       }
      }
     }
    } while(0);
    $142 = HEAP32[(3700)>>2]|0;
    $143 = ($$3>>>0)<($142>>>0);
    if ($143) {
     _abort();
     // unreachable;
    }
    $144 = ((($$3)) + 24|0);
    HEAP32[$144>>2] = $100;
    $145 = ((($5)) + 16|0);
    $146 = HEAP32[$145>>2]|0;
    $147 = ($146|0)==(0|0);
    do {
     if (!($147)) {
      $148 = ($146>>>0)<($142>>>0);
      if ($148) {
       _abort();
       // unreachable;
      } else {
       $149 = ((($$3)) + 16|0);
       HEAP32[$149>>2] = $146;
       $150 = ((($146)) + 24|0);
       HEAP32[$150>>2] = $$3;
       break;
      }
     }
    } while(0);
    $151 = ((($145)) + 4|0);
    $152 = HEAP32[$151>>2]|0;
    $153 = ($152|0)==(0|0);
    if (!($153)) {
     $154 = HEAP32[(3700)>>2]|0;
     $155 = ($152>>>0)<($154>>>0);
     if ($155) {
      _abort();
      // unreachable;
     } else {
      $156 = ((($$3)) + 20|0);
      HEAP32[$156>>2] = $152;
      $157 = ((($152)) + 24|0);
      HEAP32[$157>>2] = $$3;
      break;
     }
    }
   }
  }
 } while(0);
 $158 = ($74>>>0)<(16);
 $159 = $3 & 1;
 if ($158) {
  $160 = $72 | $159;
  $161 = $160 | 2;
  HEAP32[$2>>2] = $161;
  $162 = (($0) + ($72)|0);
  $163 = ((($162)) + 4|0);
  $164 = HEAP32[$163>>2]|0;
  $165 = $164 | 1;
  HEAP32[$163>>2] = $165;
  $$2 = $0;
  return ($$2|0);
 } else {
  $166 = (($0) + ($1)|0);
  $167 = $159 | $1;
  $168 = $167 | 2;
  HEAP32[$2>>2] = $168;
  $169 = ((($166)) + 4|0);
  $170 = $74 | 3;
  HEAP32[$169>>2] = $170;
  $171 = (($166) + ($74)|0);
  $172 = ((($171)) + 4|0);
  $173 = HEAP32[$172>>2]|0;
  $174 = $173 | 1;
  HEAP32[$172>>2] = $174;
  _dispose_chunk($166,$74);
  $$2 = $0;
  return ($$2|0);
 }
 return (0)|0;
}
function _dispose_chunk($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0419 = 0, $$0420 = 0, $$0431 = 0, $$0438 = 0, $$1 = 0, $$1418 = 0, $$1426 = 0, $$1429 = 0, $$1433 = 0, $$1437 = 0, $$2 = 0, $$3 = 0, $$3435 = 0, $$pre = 0, $$pre$phi24Z2D = 0, $$pre$phi26Z2D = 0, $$pre$phiZ2D = 0, $$pre23 = 0, $$pre25 = 0, $$sink2 = 0;
 var $$sink4 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0;
 var $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0;
 var $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0;
 var $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0;
 var $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0;
 var $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0;
 var $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0;
 var $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = 0, $cond = 0, $cond17 = 0, $not$ = 0, $not$1 = 0, $not$19 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (($0) + ($1)|0);
 $3 = ((($0)) + 4|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = $4 & 1;
 $6 = ($5|0)==(0);
 L1: do {
  if ($6) {
   $7 = HEAP32[$0>>2]|0;
   $8 = $4 & 3;
   $9 = ($8|0)==(0);
   if ($9) {
    return;
   }
   $10 = (0 - ($7))|0;
   $11 = (($0) + ($10)|0);
   $12 = (($7) + ($1))|0;
   $13 = HEAP32[(3700)>>2]|0;
   $14 = ($11>>>0)<($13>>>0);
   if ($14) {
    _abort();
    // unreachable;
   }
   $15 = HEAP32[(3704)>>2]|0;
   $16 = ($11|0)==($15|0);
   if ($16) {
    $100 = ((($2)) + 4|0);
    $101 = HEAP32[$100>>2]|0;
    $102 = $101 & 3;
    $103 = ($102|0)==(3);
    if (!($103)) {
     $$1 = $11;$$1418 = $12;
     break;
    }
    $104 = (($11) + ($12)|0);
    $105 = ((($11)) + 4|0);
    $106 = $12 | 1;
    $107 = $101 & -2;
    HEAP32[(3692)>>2] = $12;
    HEAP32[$100>>2] = $107;
    HEAP32[$105>>2] = $106;
    HEAP32[$104>>2] = $12;
    return;
   }
   $17 = $7 >>> 3;
   $18 = ($7>>>0)<(256);
   if ($18) {
    $19 = ((($11)) + 8|0);
    $20 = HEAP32[$19>>2]|0;
    $21 = ((($11)) + 12|0);
    $22 = HEAP32[$21>>2]|0;
    $23 = $17 << 1;
    $24 = (3724 + ($23<<2)|0);
    $25 = ($20|0)==($24|0);
    if (!($25)) {
     $26 = ($20>>>0)<($13>>>0);
     if ($26) {
      _abort();
      // unreachable;
     }
     $27 = ((($20)) + 12|0);
     $28 = HEAP32[$27>>2]|0;
     $29 = ($28|0)==($11|0);
     if (!($29)) {
      _abort();
      // unreachable;
     }
    }
    $30 = ($22|0)==($20|0);
    if ($30) {
     $31 = 1 << $17;
     $32 = $31 ^ -1;
     $33 = HEAP32[921]|0;
     $34 = $33 & $32;
     HEAP32[921] = $34;
     $$1 = $11;$$1418 = $12;
     break;
    }
    $35 = ($22|0)==($24|0);
    if ($35) {
     $$pre25 = ((($22)) + 8|0);
     $$pre$phi26Z2D = $$pre25;
    } else {
     $36 = ($22>>>0)<($13>>>0);
     if ($36) {
      _abort();
      // unreachable;
     }
     $37 = ((($22)) + 8|0);
     $38 = HEAP32[$37>>2]|0;
     $39 = ($38|0)==($11|0);
     if ($39) {
      $$pre$phi26Z2D = $37;
     } else {
      _abort();
      // unreachable;
     }
    }
    $40 = ((($20)) + 12|0);
    HEAP32[$40>>2] = $22;
    HEAP32[$$pre$phi26Z2D>>2] = $20;
    $$1 = $11;$$1418 = $12;
    break;
   }
   $41 = ((($11)) + 24|0);
   $42 = HEAP32[$41>>2]|0;
   $43 = ((($11)) + 12|0);
   $44 = HEAP32[$43>>2]|0;
   $45 = ($44|0)==($11|0);
   do {
    if ($45) {
     $55 = ((($11)) + 16|0);
     $56 = ((($55)) + 4|0);
     $57 = HEAP32[$56>>2]|0;
     $58 = ($57|0)==(0|0);
     if ($58) {
      $59 = HEAP32[$55>>2]|0;
      $60 = ($59|0)==(0|0);
      if ($60) {
       $$3 = 0;
       break;
      } else {
       $$1426 = $59;$$1429 = $55;
      }
     } else {
      $$1426 = $57;$$1429 = $56;
     }
     while(1) {
      $61 = ((($$1426)) + 20|0);
      $62 = HEAP32[$61>>2]|0;
      $63 = ($62|0)==(0|0);
      if (!($63)) {
       $$1426 = $62;$$1429 = $61;
       continue;
      }
      $64 = ((($$1426)) + 16|0);
      $65 = HEAP32[$64>>2]|0;
      $66 = ($65|0)==(0|0);
      if ($66) {
       break;
      } else {
       $$1426 = $65;$$1429 = $64;
      }
     }
     $67 = ($$1429>>>0)<($13>>>0);
     if ($67) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$$1429>>2] = 0;
      $$3 = $$1426;
      break;
     }
    } else {
     $46 = ((($11)) + 8|0);
     $47 = HEAP32[$46>>2]|0;
     $48 = ($47>>>0)<($13>>>0);
     if ($48) {
      _abort();
      // unreachable;
     }
     $49 = ((($47)) + 12|0);
     $50 = HEAP32[$49>>2]|0;
     $51 = ($50|0)==($11|0);
     if (!($51)) {
      _abort();
      // unreachable;
     }
     $52 = ((($44)) + 8|0);
     $53 = HEAP32[$52>>2]|0;
     $54 = ($53|0)==($11|0);
     if ($54) {
      HEAP32[$49>>2] = $44;
      HEAP32[$52>>2] = $47;
      $$3 = $44;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $68 = ($42|0)==(0|0);
   if ($68) {
    $$1 = $11;$$1418 = $12;
   } else {
    $69 = ((($11)) + 28|0);
    $70 = HEAP32[$69>>2]|0;
    $71 = (3988 + ($70<<2)|0);
    $72 = HEAP32[$71>>2]|0;
    $73 = ($11|0)==($72|0);
    do {
     if ($73) {
      HEAP32[$71>>2] = $$3;
      $cond = ($$3|0)==(0|0);
      if ($cond) {
       $74 = 1 << $70;
       $75 = $74 ^ -1;
       $76 = HEAP32[(3688)>>2]|0;
       $77 = $76 & $75;
       HEAP32[(3688)>>2] = $77;
       $$1 = $11;$$1418 = $12;
       break L1;
      }
     } else {
      $78 = HEAP32[(3700)>>2]|0;
      $79 = ($42>>>0)<($78>>>0);
      if ($79) {
       _abort();
       // unreachable;
      } else {
       $80 = ((($42)) + 16|0);
       $81 = HEAP32[$80>>2]|0;
       $not$1 = ($81|0)!=($11|0);
       $$sink2 = $not$1&1;
       $82 = (((($42)) + 16|0) + ($$sink2<<2)|0);
       HEAP32[$82>>2] = $$3;
       $83 = ($$3|0)==(0|0);
       if ($83) {
        $$1 = $11;$$1418 = $12;
        break L1;
       } else {
        break;
       }
      }
     }
    } while(0);
    $84 = HEAP32[(3700)>>2]|0;
    $85 = ($$3>>>0)<($84>>>0);
    if ($85) {
     _abort();
     // unreachable;
    }
    $86 = ((($$3)) + 24|0);
    HEAP32[$86>>2] = $42;
    $87 = ((($11)) + 16|0);
    $88 = HEAP32[$87>>2]|0;
    $89 = ($88|0)==(0|0);
    do {
     if (!($89)) {
      $90 = ($88>>>0)<($84>>>0);
      if ($90) {
       _abort();
       // unreachable;
      } else {
       $91 = ((($$3)) + 16|0);
       HEAP32[$91>>2] = $88;
       $92 = ((($88)) + 24|0);
       HEAP32[$92>>2] = $$3;
       break;
      }
     }
    } while(0);
    $93 = ((($87)) + 4|0);
    $94 = HEAP32[$93>>2]|0;
    $95 = ($94|0)==(0|0);
    if ($95) {
     $$1 = $11;$$1418 = $12;
    } else {
     $96 = HEAP32[(3700)>>2]|0;
     $97 = ($94>>>0)<($96>>>0);
     if ($97) {
      _abort();
      // unreachable;
     } else {
      $98 = ((($$3)) + 20|0);
      HEAP32[$98>>2] = $94;
      $99 = ((($94)) + 24|0);
      HEAP32[$99>>2] = $$3;
      $$1 = $11;$$1418 = $12;
      break;
     }
    }
   }
  } else {
   $$1 = $0;$$1418 = $1;
  }
 } while(0);
 $108 = HEAP32[(3700)>>2]|0;
 $109 = ($2>>>0)<($108>>>0);
 if ($109) {
  _abort();
  // unreachable;
 }
 $110 = ((($2)) + 4|0);
 $111 = HEAP32[$110>>2]|0;
 $112 = $111 & 2;
 $113 = ($112|0)==(0);
 if ($113) {
  $114 = HEAP32[(3708)>>2]|0;
  $115 = ($2|0)==($114|0);
  $116 = HEAP32[(3704)>>2]|0;
  if ($115) {
   $117 = HEAP32[(3696)>>2]|0;
   $118 = (($117) + ($$1418))|0;
   HEAP32[(3696)>>2] = $118;
   HEAP32[(3708)>>2] = $$1;
   $119 = $118 | 1;
   $120 = ((($$1)) + 4|0);
   HEAP32[$120>>2] = $119;
   $121 = ($$1|0)==($116|0);
   if (!($121)) {
    return;
   }
   HEAP32[(3704)>>2] = 0;
   HEAP32[(3692)>>2] = 0;
   return;
  }
  $122 = ($2|0)==($116|0);
  if ($122) {
   $123 = HEAP32[(3692)>>2]|0;
   $124 = (($123) + ($$1418))|0;
   HEAP32[(3692)>>2] = $124;
   HEAP32[(3704)>>2] = $$1;
   $125 = $124 | 1;
   $126 = ((($$1)) + 4|0);
   HEAP32[$126>>2] = $125;
   $127 = (($$1) + ($124)|0);
   HEAP32[$127>>2] = $124;
   return;
  }
  $128 = $111 & -8;
  $129 = (($128) + ($$1418))|0;
  $130 = $111 >>> 3;
  $131 = ($111>>>0)<(256);
  L96: do {
   if ($131) {
    $132 = ((($2)) + 8|0);
    $133 = HEAP32[$132>>2]|0;
    $134 = ((($2)) + 12|0);
    $135 = HEAP32[$134>>2]|0;
    $136 = $130 << 1;
    $137 = (3724 + ($136<<2)|0);
    $138 = ($133|0)==($137|0);
    if (!($138)) {
     $139 = ($133>>>0)<($108>>>0);
     if ($139) {
      _abort();
      // unreachable;
     }
     $140 = ((($133)) + 12|0);
     $141 = HEAP32[$140>>2]|0;
     $142 = ($141|0)==($2|0);
     if (!($142)) {
      _abort();
      // unreachable;
     }
    }
    $143 = ($135|0)==($133|0);
    if ($143) {
     $144 = 1 << $130;
     $145 = $144 ^ -1;
     $146 = HEAP32[921]|0;
     $147 = $146 & $145;
     HEAP32[921] = $147;
     break;
    }
    $148 = ($135|0)==($137|0);
    if ($148) {
     $$pre23 = ((($135)) + 8|0);
     $$pre$phi24Z2D = $$pre23;
    } else {
     $149 = ($135>>>0)<($108>>>0);
     if ($149) {
      _abort();
      // unreachable;
     }
     $150 = ((($135)) + 8|0);
     $151 = HEAP32[$150>>2]|0;
     $152 = ($151|0)==($2|0);
     if ($152) {
      $$pre$phi24Z2D = $150;
     } else {
      _abort();
      // unreachable;
     }
    }
    $153 = ((($133)) + 12|0);
    HEAP32[$153>>2] = $135;
    HEAP32[$$pre$phi24Z2D>>2] = $133;
   } else {
    $154 = ((($2)) + 24|0);
    $155 = HEAP32[$154>>2]|0;
    $156 = ((($2)) + 12|0);
    $157 = HEAP32[$156>>2]|0;
    $158 = ($157|0)==($2|0);
    do {
     if ($158) {
      $168 = ((($2)) + 16|0);
      $169 = ((($168)) + 4|0);
      $170 = HEAP32[$169>>2]|0;
      $171 = ($170|0)==(0|0);
      if ($171) {
       $172 = HEAP32[$168>>2]|0;
       $173 = ($172|0)==(0|0);
       if ($173) {
        $$3435 = 0;
        break;
       } else {
        $$1433 = $172;$$1437 = $168;
       }
      } else {
       $$1433 = $170;$$1437 = $169;
      }
      while(1) {
       $174 = ((($$1433)) + 20|0);
       $175 = HEAP32[$174>>2]|0;
       $176 = ($175|0)==(0|0);
       if (!($176)) {
        $$1433 = $175;$$1437 = $174;
        continue;
       }
       $177 = ((($$1433)) + 16|0);
       $178 = HEAP32[$177>>2]|0;
       $179 = ($178|0)==(0|0);
       if ($179) {
        break;
       } else {
        $$1433 = $178;$$1437 = $177;
       }
      }
      $180 = ($$1437>>>0)<($108>>>0);
      if ($180) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$$1437>>2] = 0;
       $$3435 = $$1433;
       break;
      }
     } else {
      $159 = ((($2)) + 8|0);
      $160 = HEAP32[$159>>2]|0;
      $161 = ($160>>>0)<($108>>>0);
      if ($161) {
       _abort();
       // unreachable;
      }
      $162 = ((($160)) + 12|0);
      $163 = HEAP32[$162>>2]|0;
      $164 = ($163|0)==($2|0);
      if (!($164)) {
       _abort();
       // unreachable;
      }
      $165 = ((($157)) + 8|0);
      $166 = HEAP32[$165>>2]|0;
      $167 = ($166|0)==($2|0);
      if ($167) {
       HEAP32[$162>>2] = $157;
       HEAP32[$165>>2] = $160;
       $$3435 = $157;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $181 = ($155|0)==(0|0);
    if (!($181)) {
     $182 = ((($2)) + 28|0);
     $183 = HEAP32[$182>>2]|0;
     $184 = (3988 + ($183<<2)|0);
     $185 = HEAP32[$184>>2]|0;
     $186 = ($2|0)==($185|0);
     do {
      if ($186) {
       HEAP32[$184>>2] = $$3435;
       $cond17 = ($$3435|0)==(0|0);
       if ($cond17) {
        $187 = 1 << $183;
        $188 = $187 ^ -1;
        $189 = HEAP32[(3688)>>2]|0;
        $190 = $189 & $188;
        HEAP32[(3688)>>2] = $190;
        break L96;
       }
      } else {
       $191 = HEAP32[(3700)>>2]|0;
       $192 = ($155>>>0)<($191>>>0);
       if ($192) {
        _abort();
        // unreachable;
       } else {
        $193 = ((($155)) + 16|0);
        $194 = HEAP32[$193>>2]|0;
        $not$ = ($194|0)!=($2|0);
        $$sink4 = $not$&1;
        $195 = (((($155)) + 16|0) + ($$sink4<<2)|0);
        HEAP32[$195>>2] = $$3435;
        $196 = ($$3435|0)==(0|0);
        if ($196) {
         break L96;
        } else {
         break;
        }
       }
      }
     } while(0);
     $197 = HEAP32[(3700)>>2]|0;
     $198 = ($$3435>>>0)<($197>>>0);
     if ($198) {
      _abort();
      // unreachable;
     }
     $199 = ((($$3435)) + 24|0);
     HEAP32[$199>>2] = $155;
     $200 = ((($2)) + 16|0);
     $201 = HEAP32[$200>>2]|0;
     $202 = ($201|0)==(0|0);
     do {
      if (!($202)) {
       $203 = ($201>>>0)<($197>>>0);
       if ($203) {
        _abort();
        // unreachable;
       } else {
        $204 = ((($$3435)) + 16|0);
        HEAP32[$204>>2] = $201;
        $205 = ((($201)) + 24|0);
        HEAP32[$205>>2] = $$3435;
        break;
       }
      }
     } while(0);
     $206 = ((($200)) + 4|0);
     $207 = HEAP32[$206>>2]|0;
     $208 = ($207|0)==(0|0);
     if (!($208)) {
      $209 = HEAP32[(3700)>>2]|0;
      $210 = ($207>>>0)<($209>>>0);
      if ($210) {
       _abort();
       // unreachable;
      } else {
       $211 = ((($$3435)) + 20|0);
       HEAP32[$211>>2] = $207;
       $212 = ((($207)) + 24|0);
       HEAP32[$212>>2] = $$3435;
       break;
      }
     }
    }
   }
  } while(0);
  $213 = $129 | 1;
  $214 = ((($$1)) + 4|0);
  HEAP32[$214>>2] = $213;
  $215 = (($$1) + ($129)|0);
  HEAP32[$215>>2] = $129;
  $216 = HEAP32[(3704)>>2]|0;
  $217 = ($$1|0)==($216|0);
  if ($217) {
   HEAP32[(3692)>>2] = $129;
   return;
  } else {
   $$2 = $129;
  }
 } else {
  $218 = $111 & -2;
  HEAP32[$110>>2] = $218;
  $219 = $$1418 | 1;
  $220 = ((($$1)) + 4|0);
  HEAP32[$220>>2] = $219;
  $221 = (($$1) + ($$1418)|0);
  HEAP32[$221>>2] = $$1418;
  $$2 = $$1418;
 }
 $222 = $$2 >>> 3;
 $223 = ($$2>>>0)<(256);
 if ($223) {
  $224 = $222 << 1;
  $225 = (3724 + ($224<<2)|0);
  $226 = HEAP32[921]|0;
  $227 = 1 << $222;
  $228 = $226 & $227;
  $229 = ($228|0)==(0);
  if ($229) {
   $230 = $226 | $227;
   HEAP32[921] = $230;
   $$pre = ((($225)) + 8|0);
   $$0438 = $225;$$pre$phiZ2D = $$pre;
  } else {
   $231 = ((($225)) + 8|0);
   $232 = HEAP32[$231>>2]|0;
   $233 = HEAP32[(3700)>>2]|0;
   $234 = ($232>>>0)<($233>>>0);
   if ($234) {
    _abort();
    // unreachable;
   } else {
    $$0438 = $232;$$pre$phiZ2D = $231;
   }
  }
  HEAP32[$$pre$phiZ2D>>2] = $$1;
  $235 = ((($$0438)) + 12|0);
  HEAP32[$235>>2] = $$1;
  $236 = ((($$1)) + 8|0);
  HEAP32[$236>>2] = $$0438;
  $237 = ((($$1)) + 12|0);
  HEAP32[$237>>2] = $225;
  return;
 }
 $238 = $$2 >>> 8;
 $239 = ($238|0)==(0);
 if ($239) {
  $$0431 = 0;
 } else {
  $240 = ($$2>>>0)>(16777215);
  if ($240) {
   $$0431 = 31;
  } else {
   $241 = (($238) + 1048320)|0;
   $242 = $241 >>> 16;
   $243 = $242 & 8;
   $244 = $238 << $243;
   $245 = (($244) + 520192)|0;
   $246 = $245 >>> 16;
   $247 = $246 & 4;
   $248 = $247 | $243;
   $249 = $244 << $247;
   $250 = (($249) + 245760)|0;
   $251 = $250 >>> 16;
   $252 = $251 & 2;
   $253 = $248 | $252;
   $254 = (14 - ($253))|0;
   $255 = $249 << $252;
   $256 = $255 >>> 15;
   $257 = (($254) + ($256))|0;
   $258 = $257 << 1;
   $259 = (($257) + 7)|0;
   $260 = $$2 >>> $259;
   $261 = $260 & 1;
   $262 = $261 | $258;
   $$0431 = $262;
  }
 }
 $263 = (3988 + ($$0431<<2)|0);
 $264 = ((($$1)) + 28|0);
 HEAP32[$264>>2] = $$0431;
 $265 = ((($$1)) + 16|0);
 $266 = ((($$1)) + 20|0);
 HEAP32[$266>>2] = 0;
 HEAP32[$265>>2] = 0;
 $267 = HEAP32[(3688)>>2]|0;
 $268 = 1 << $$0431;
 $269 = $267 & $268;
 $270 = ($269|0)==(0);
 if ($270) {
  $271 = $267 | $268;
  HEAP32[(3688)>>2] = $271;
  HEAP32[$263>>2] = $$1;
  $272 = ((($$1)) + 24|0);
  HEAP32[$272>>2] = $263;
  $273 = ((($$1)) + 12|0);
  HEAP32[$273>>2] = $$1;
  $274 = ((($$1)) + 8|0);
  HEAP32[$274>>2] = $$1;
  return;
 }
 $275 = HEAP32[$263>>2]|0;
 $276 = ($$0431|0)==(31);
 $277 = $$0431 >>> 1;
 $278 = (25 - ($277))|0;
 $279 = $276 ? 0 : $278;
 $280 = $$2 << $279;
 $$0419 = $280;$$0420 = $275;
 while(1) {
  $281 = ((($$0420)) + 4|0);
  $282 = HEAP32[$281>>2]|0;
  $283 = $282 & -8;
  $284 = ($283|0)==($$2|0);
  if ($284) {
   label = 121;
   break;
  }
  $285 = $$0419 >>> 31;
  $286 = (((($$0420)) + 16|0) + ($285<<2)|0);
  $287 = $$0419 << 1;
  $288 = HEAP32[$286>>2]|0;
  $289 = ($288|0)==(0|0);
  if ($289) {
   label = 118;
   break;
  } else {
   $$0419 = $287;$$0420 = $288;
  }
 }
 if ((label|0) == 118) {
  $290 = HEAP32[(3700)>>2]|0;
  $291 = ($286>>>0)<($290>>>0);
  if ($291) {
   _abort();
   // unreachable;
  }
  HEAP32[$286>>2] = $$1;
  $292 = ((($$1)) + 24|0);
  HEAP32[$292>>2] = $$0420;
  $293 = ((($$1)) + 12|0);
  HEAP32[$293>>2] = $$1;
  $294 = ((($$1)) + 8|0);
  HEAP32[$294>>2] = $$1;
  return;
 }
 else if ((label|0) == 121) {
  $295 = ((($$0420)) + 8|0);
  $296 = HEAP32[$295>>2]|0;
  $297 = HEAP32[(3700)>>2]|0;
  $298 = ($296>>>0)>=($297>>>0);
  $not$19 = ($$0420>>>0)>=($297>>>0);
  $299 = $298 & $not$19;
  if (!($299)) {
   _abort();
   // unreachable;
  }
  $300 = ((($296)) + 12|0);
  HEAP32[$300>>2] = $$1;
  HEAP32[$295>>2] = $$1;
  $301 = ((($$1)) + 8|0);
  HEAP32[$301>>2] = $296;
  $302 = ((($$1)) + 12|0);
  HEAP32[$302>>2] = $$0420;
  $303 = ((($$1)) + 24|0);
  HEAP32[$303>>2] = 0;
  return;
 }
}
function runPostSets() {
}
function _i64Subtract(a, b, c, d) {
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a - c)>>>0;
    h = (b - d)>>>0;
    h = (b - d - (((c>>>0) > (a>>>0))|0))>>>0; // Borrow one from high word to low word on underflow.
    return ((tempRet0 = h,l|0)|0);
}
function _i64Add(a, b, c, d) {
    /*
      x = a + b*2^32
      y = c + d*2^32
      result = l + h*2^32
    */
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a + c)>>>0;
    h = (b + d + (((l>>>0) < (a>>>0))|0))>>>0; // Add carry from low word to high word on overflow.
    return ((tempRet0 = h,l|0)|0);
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
    end = (ptr + num)|0;

    value = value & 0xff;
    if ((num|0) >= 67 /* 64 bytes for an unrolled loop + 3 bytes for unaligned head*/) {
      while ((ptr&3) != 0) {
        HEAP8[((ptr)>>0)]=value;
        ptr = (ptr+1)|0;
      }

      aligned_end = (end & -4)|0;
      block_aligned_end = (aligned_end - 64)|0;
      value4 = value | (value << 8) | (value << 16) | (value << 24);

      while((ptr|0) <= (block_aligned_end|0)) {
        HEAP32[((ptr)>>2)]=value4;
        HEAP32[(((ptr)+(4))>>2)]=value4;
        HEAP32[(((ptr)+(8))>>2)]=value4;
        HEAP32[(((ptr)+(12))>>2)]=value4;
        HEAP32[(((ptr)+(16))>>2)]=value4;
        HEAP32[(((ptr)+(20))>>2)]=value4;
        HEAP32[(((ptr)+(24))>>2)]=value4;
        HEAP32[(((ptr)+(28))>>2)]=value4;
        HEAP32[(((ptr)+(32))>>2)]=value4;
        HEAP32[(((ptr)+(36))>>2)]=value4;
        HEAP32[(((ptr)+(40))>>2)]=value4;
        HEAP32[(((ptr)+(44))>>2)]=value4;
        HEAP32[(((ptr)+(48))>>2)]=value4;
        HEAP32[(((ptr)+(52))>>2)]=value4;
        HEAP32[(((ptr)+(56))>>2)]=value4;
        HEAP32[(((ptr)+(60))>>2)]=value4;
        ptr = (ptr + 64)|0;
      }

      while ((ptr|0) < (aligned_end|0) ) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    // The remaining bytes.
    while ((ptr|0) < (end|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (end-num)|0;
}
function _bitshift64Lshr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = high >>> bits;
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    tempRet0 = 0;
    return (high >>> (bits - 32))|0;
}
function _bitshift64Shl(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = (high << bits) | ((low&(ander << (32 - bits))) >>> (32 - bits));
      return low << bits;
    }
    tempRet0 = low << (bits - 32);
    return 0;
}
function _llvm_cttz_i32(x) {
    x = x|0;
    var ret = 0;
    ret = ((HEAP8[(((cttz_i8)+(x & 0xff))>>0)])|0);
    if ((ret|0) < 8) return ret|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 8)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 8)|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 16)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 16)|0;
    return (((HEAP8[(((cttz_i8)+(x >>> 24))>>0)])|0) + 24)|0;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    $rem = $rem | 0;
    var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0;
    $n_sroa_0_0_extract_trunc = $a$0;
    $n_sroa_1_4_extract_shift$0 = $a$1;
    $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
    $d_sroa_0_0_extract_trunc = $b$0;
    $d_sroa_1_4_extract_shift$0 = $b$1;
    $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
    if (($n_sroa_1_4_extract_trunc | 0) == 0) {
      $4 = ($rem | 0) != 0;
      if (($d_sroa_1_4_extract_trunc | 0) == 0) {
        if ($4) {
          HEAP32[$rem >> 2] = ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
          HEAP32[$rem + 4 >> 2] = 0;
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$4) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
    }
    $17 = ($d_sroa_1_4_extract_trunc | 0) == 0;
    do {
      if (($d_sroa_0_0_extract_trunc | 0) == 0) {
        if ($17) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
            HEAP32[$rem + 4 >> 2] = 0;
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        if (($n_sroa_0_0_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0;
            HEAP32[$rem + 4 >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0);
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
        if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0 | $a$0 & -1;
            HEAP32[$rem + 4 >> 2] = $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0;
          }
          $_0$1 = 0;
          $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0);
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $49 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
        $51 = $49 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        if ($51 >>> 0 <= 30) {
          $57 = $51 + 1 | 0;
          $58 = 31 - $51 | 0;
          $sr_1_ph = $57;
          $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0);
          $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0);
          $q_sroa_0_1_ph = 0;
          $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58;
          break;
        }
        if (($rem | 0) == 0) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = 0 | $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$17) {
          $117 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
          $119 = $117 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          if ($119 >>> 0 <= 31) {
            $125 = $119 + 1 | 0;
            $126 = 31 - $119 | 0;
            $130 = $119 - 31 >> 31;
            $sr_1_ph = $125;
            $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126;
            $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130;
            $q_sroa_0_1_ph = 0;
            $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126;
            break;
          }
          if (($rem | 0) == 0) {
            $_0$1 = 0;
            $_0$0 = 0;
            return (tempRet0 = $_0$1, $_0$0) | 0;
          }
          HEAP32[$rem >> 2] = 0 | $a$0 & -1;
          HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
        if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
          $86 = (Math_clz32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0;
          $88 = $86 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          $89 = 64 - $88 | 0;
          $91 = 32 - $88 | 0;
          $92 = $91 >> 31;
          $95 = $88 - 32 | 0;
          $105 = $95 >> 31;
          $sr_1_ph = $88;
          $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105;
          $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0);
          $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92;
          $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31;
          break;
        }
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc;
          HEAP32[$rem + 4 >> 2] = 0;
        }
        if (($d_sroa_0_0_extract_trunc | 0) == 1) {
          $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$0 = 0 | $a$0 & -1;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        } else {
          $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
          $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0);
          $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
      }
    } while (0);
    if (($sr_1_ph | 0) == 0) {
      $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
      $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
      $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
      $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = 0;
    } else {
      $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1;
      $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0;
      $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, -1, -1) | 0;
      $137$1 = tempRet0;
      $q_sroa_1_1198 = $q_sroa_1_1_ph;
      $q_sroa_0_1199 = $q_sroa_0_1_ph;
      $r_sroa_1_1200 = $r_sroa_1_1_ph;
      $r_sroa_0_1201 = $r_sroa_0_1_ph;
      $sr_1202 = $sr_1_ph;
      $carry_0203 = 0;
      while (1) {
        $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1;
        $149 = $carry_0203 | $q_sroa_0_1199 << 1;
        $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31);
        $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0;
        _i64Subtract($137$0 | 0, $137$1 | 0, $r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0) | 0;
        $150$1 = tempRet0;
        $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1;
        $152 = $151$0 & 1;
        $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0, $151$0 & $d_sroa_0_0_insert_insert99$0 | 0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1 | 0) | 0;
        $r_sroa_0_0_extract_trunc = $154$0;
        $r_sroa_1_4_extract_trunc = tempRet0;
        $155 = $sr_1202 - 1 | 0;
        if (($155 | 0) == 0) {
          break;
        } else {
          $q_sroa_1_1198 = $147;
          $q_sroa_0_1199 = $149;
          $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
          $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
          $sr_1202 = $155;
          $carry_0203 = $152;
        }
      }
      $q_sroa_1_1_lcssa = $147;
      $q_sroa_0_1_lcssa = $149;
      $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
      $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = $152;
    }
    $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
    $q_sroa_0_0_insert_ext75$1 = 0;
    $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1;
    if (($rem | 0) != 0) {
      HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa;
      HEAP32[$rem + 4 >> 2] = $r_sroa_1_1_lcssa | 0;
    }
    $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1;
    $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0;
    return (tempRet0 = $_0$1, $_0$0) | 0;
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $1$0 = 0;
    $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0;
    return $1$0 | 0;
}
function ___muldsi3($a, $b) {
    $a = $a | 0;
    $b = $b | 0;
    var $1 = 0, $2 = 0, $3 = 0, $6 = 0, $8 = 0, $11 = 0, $12 = 0;
    $1 = $a & 65535;
    $2 = $b & 65535;
    $3 = Math_imul($2, $1) | 0;
    $6 = $a >>> 16;
    $8 = ($3 >>> 16) + (Math_imul($2, $6) | 0) | 0;
    $11 = $b >>> 16;
    $12 = Math_imul($11, $1) | 0;
    return (tempRet0 = (($8 >>> 16) + (Math_imul($11, $6) | 0) | 0) + ((($8 & 65535) + $12 | 0) >>> 16) | 0, 0 | ($8 + $12 << 16 | $3 & 65535)) | 0;
}
function ___muldi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $x_sroa_0_0_extract_trunc = 0, $y_sroa_0_0_extract_trunc = 0, $1$0 = 0, $1$1 = 0, $2 = 0;
    $x_sroa_0_0_extract_trunc = $a$0;
    $y_sroa_0_0_extract_trunc = $b$0;
    $1$0 = ___muldsi3($x_sroa_0_0_extract_trunc, $y_sroa_0_0_extract_trunc) | 0;
    $1$1 = tempRet0;
    $2 = Math_imul($a$1, $y_sroa_0_0_extract_trunc) | 0;
    return (tempRet0 = ((Math_imul($b$1, $x_sroa_0_0_extract_trunc) | 0) + $2 | 0) + $1$1 | $1$1 & 0, 0 | $1$0 & -1) | 0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        ___setErrNo(12);
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $rem = 0, __stackBase__ = 0;
    __stackBase__ = STACKTOP;
    STACKTOP = STACKTOP + 16 | 0;
    $rem = __stackBase__ | 0;
    ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) | 0;
    STACKTOP = __stackBase__;
    return (tempRet0 = HEAP32[$rem + 4 >> 2] | 0, HEAP32[$rem >> 2] | 0) | 0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    var aligned_dest_end = 0;
    var block_aligned_dest_end = 0;
    var dest_end = 0;
    // Test against a benchmarked cutoff limit for when HEAPU8.set() becomes faster to use.
    if ((num|0) >=
      8192
    ) {
      return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    }

    ret = dest|0;
    dest_end = (dest + num)|0;
    if ((dest&3) == (src&3)) {
      // The initial unaligned < 4-byte front.
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      aligned_dest_end = (dest_end & -4)|0;
      block_aligned_dest_end = (aligned_dest_end - 64)|0;
      while ((dest|0) <= (block_aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        HEAP32[(((dest)+(4))>>2)]=((HEAP32[(((src)+(4))>>2)])|0);
        HEAP32[(((dest)+(8))>>2)]=((HEAP32[(((src)+(8))>>2)])|0);
        HEAP32[(((dest)+(12))>>2)]=((HEAP32[(((src)+(12))>>2)])|0);
        HEAP32[(((dest)+(16))>>2)]=((HEAP32[(((src)+(16))>>2)])|0);
        HEAP32[(((dest)+(20))>>2)]=((HEAP32[(((src)+(20))>>2)])|0);
        HEAP32[(((dest)+(24))>>2)]=((HEAP32[(((src)+(24))>>2)])|0);
        HEAP32[(((dest)+(28))>>2)]=((HEAP32[(((src)+(28))>>2)])|0);
        HEAP32[(((dest)+(32))>>2)]=((HEAP32[(((src)+(32))>>2)])|0);
        HEAP32[(((dest)+(36))>>2)]=((HEAP32[(((src)+(36))>>2)])|0);
        HEAP32[(((dest)+(40))>>2)]=((HEAP32[(((src)+(40))>>2)])|0);
        HEAP32[(((dest)+(44))>>2)]=((HEAP32[(((src)+(44))>>2)])|0);
        HEAP32[(((dest)+(48))>>2)]=((HEAP32[(((src)+(48))>>2)])|0);
        HEAP32[(((dest)+(52))>>2)]=((HEAP32[(((src)+(52))>>2)])|0);
        HEAP32[(((dest)+(56))>>2)]=((HEAP32[(((src)+(56))>>2)])|0);
        HEAP32[(((dest)+(60))>>2)]=((HEAP32[(((src)+(60))>>2)])|0);
        dest = (dest+64)|0;
        src = (src+64)|0;
      }
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    } else {
      // In the unaligned copy case, unroll a bit as well.
      aligned_dest_end = (dest_end - 4)|0;
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        HEAP8[(((dest)+(1))>>0)]=((HEAP8[(((src)+(1))>>0)])|0);
        HEAP8[(((dest)+(2))>>0)]=((HEAP8[(((src)+(2))>>0)])|0);
        HEAP8[(((dest)+(3))>>0)]=((HEAP8[(((src)+(3))>>0)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    }
    // The remaining unaligned < 4 byte tail.
    while ((dest|0) < (dest_end|0)) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
    }
    return ret|0;
}
function _llvm_bswap_i32(x) {
    x = x|0;
    return (((x&0xff)<<24) | (((x>>8)&0xff)<<16) | (((x>>16)&0xff)<<8) | (x>>>24))|0;
}

  
function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&7](a1|0)|0;
}


function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&15](a1|0,a2|0,a3|0)|0;
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&3](a1|0,a2|0)|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&3](a1|0);
}

function b0(p0) {
 p0 = p0|0; nullFunc_ii(0);return 0;
}
function b1(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_iiii(1);return 0;
}
function b2(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_iii(2);return 0;
}
function b3(p0) {
 p0 = p0|0; nullFunc_vi(3);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,_malloc,b0,b0,___stdio_close,b0,b0,b0];
var FUNCTION_TABLE_iiii = [b1,b1,b1,b1,b1,___stdout_write,___stdio_seek,_sn_write,___stdio_write,_do_read,b1,b1,b1,b1,b1,b1];
var FUNCTION_TABLE_iii = [b2,b2,b2,_realloc];
var FUNCTION_TABLE_vi = [b3,b3,_free,b3];

  return { _llvm_cttz_i32: _llvm_cttz_i32, _gameData: _gameData, _bitshift64Lshr: _bitshift64Lshr, _onInit: _onInit, _bitshift64Shl: _bitshift64Shl, _fflush: _fflush, _memset: _memset, _sbrk: _sbrk, _memcpy: _memcpy, ___errno_location: ___errno_location, ___muldi3: ___muldi3, ___uremdi3: ___uremdi3, _i64Subtract: _i64Subtract, ___udivmoddi4: ___udivmoddi4, _i64Add: _i64Add, _onUpdate: _onUpdate, _onDestroy: _onDestroy, _emscripten_get_global_libc: _emscripten_get_global_libc, ___udivdi3: ___udivdi3, _llvm_bswap_i32: _llvm_bswap_i32, ___muldsi3: ___muldsi3, _free: _free, _malloc: _malloc, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

var real_stackSave = asm["stackSave"]; asm["stackSave"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackSave.apply(null, arguments);
};

var real_getTempRet0 = asm["getTempRet0"]; asm["getTempRet0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_getTempRet0.apply(null, arguments);
};

var real_setThrew = asm["setThrew"]; asm["setThrew"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_setThrew.apply(null, arguments);
};

var real__gameData = asm["_gameData"]; asm["_gameData"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__gameData.apply(null, arguments);
};

var real__bitshift64Lshr = asm["_bitshift64Lshr"]; asm["_bitshift64Lshr"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Lshr.apply(null, arguments);
};

var real__onInit = asm["_onInit"]; asm["_onInit"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__onInit.apply(null, arguments);
};

var real__bitshift64Shl = asm["_bitshift64Shl"]; asm["_bitshift64Shl"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Shl.apply(null, arguments);
};

var real__fflush = asm["_fflush"]; asm["_fflush"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__fflush.apply(null, arguments);
};

var real__llvm_cttz_i32 = asm["_llvm_cttz_i32"]; asm["_llvm_cttz_i32"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__llvm_cttz_i32.apply(null, arguments);
};

var real__sbrk = asm["_sbrk"]; asm["_sbrk"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__sbrk.apply(null, arguments);
};

var real____errno_location = asm["___errno_location"]; asm["___errno_location"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____errno_location.apply(null, arguments);
};

var real____muldi3 = asm["___muldi3"]; asm["___muldi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____muldi3.apply(null, arguments);
};

var real____uremdi3 = asm["___uremdi3"]; asm["___uremdi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____uremdi3.apply(null, arguments);
};

var real_stackAlloc = asm["stackAlloc"]; asm["stackAlloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackAlloc.apply(null, arguments);
};

var real__i64Subtract = asm["_i64Subtract"]; asm["_i64Subtract"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Subtract.apply(null, arguments);
};

var real____udivmoddi4 = asm["___udivmoddi4"]; asm["___udivmoddi4"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____udivmoddi4.apply(null, arguments);
};

var real_setTempRet0 = asm["setTempRet0"]; asm["setTempRet0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_setTempRet0.apply(null, arguments);
};

var real__i64Add = asm["_i64Add"]; asm["_i64Add"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Add.apply(null, arguments);
};

var real__onUpdate = asm["_onUpdate"]; asm["_onUpdate"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__onUpdate.apply(null, arguments);
};

var real__onDestroy = asm["_onDestroy"]; asm["_onDestroy"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__onDestroy.apply(null, arguments);
};

var real__emscripten_get_global_libc = asm["_emscripten_get_global_libc"]; asm["_emscripten_get_global_libc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_get_global_libc.apply(null, arguments);
};

var real____udivdi3 = asm["___udivdi3"]; asm["___udivdi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____udivdi3.apply(null, arguments);
};

var real__llvm_bswap_i32 = asm["_llvm_bswap_i32"]; asm["_llvm_bswap_i32"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__llvm_bswap_i32.apply(null, arguments);
};

var real____muldsi3 = asm["___muldsi3"]; asm["___muldsi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____muldsi3.apply(null, arguments);
};

var real__free = asm["_free"]; asm["_free"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__free.apply(null, arguments);
};

var real_establishStackSpace = asm["establishStackSpace"]; asm["establishStackSpace"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_establishStackSpace.apply(null, arguments);
};

var real_stackRestore = asm["stackRestore"]; asm["stackRestore"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackRestore.apply(null, arguments);
};

var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__malloc.apply(null, arguments);
};
var stackSave = Module["stackSave"] = asm["stackSave"];
var getTempRet0 = Module["getTempRet0"] = asm["getTempRet0"];
var _memset = Module["_memset"] = asm["_memset"];
var setThrew = Module["setThrew"] = asm["setThrew"];
var _gameData = Module["_gameData"] = asm["_gameData"];
var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];
var _onInit = Module["_onInit"] = asm["_onInit"];
var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];
var _fflush = Module["_fflush"] = asm["_fflush"];
var _llvm_cttz_i32 = Module["_llvm_cttz_i32"] = asm["_llvm_cttz_i32"];
var _sbrk = Module["_sbrk"] = asm["_sbrk"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var ___errno_location = Module["___errno_location"] = asm["___errno_location"];
var ___muldi3 = Module["___muldi3"] = asm["___muldi3"];
var ___uremdi3 = Module["___uremdi3"] = asm["___uremdi3"];
var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];
var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];
var ___udivmoddi4 = Module["___udivmoddi4"] = asm["___udivmoddi4"];
var setTempRet0 = Module["setTempRet0"] = asm["setTempRet0"];
var _i64Add = Module["_i64Add"] = asm["_i64Add"];
var _onUpdate = Module["_onUpdate"] = asm["_onUpdate"];
var _onDestroy = Module["_onDestroy"] = asm["_onDestroy"];
var _emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = asm["_emscripten_get_global_libc"];
var ___udivdi3 = Module["___udivdi3"] = asm["___udivdi3"];
var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = asm["_llvm_bswap_i32"];
var ___muldsi3 = Module["___muldsi3"] = asm["___muldsi3"];
var _free = Module["_free"] = asm["_free"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];
var stackRestore = Module["stackRestore"] = asm["stackRestore"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
;

Runtime.stackAlloc = Module['stackAlloc'];
Runtime.stackSave = Module['stackSave'];
Runtime.stackRestore = Module['stackRestore'];
Runtime.establishStackSpace = Module['establishStackSpace'];

Runtime.setTempRet0 = Module['setTempRet0'];
Runtime.getTempRet0 = Module['getTempRet0'];



// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;





function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  ensureInitRuntime();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString(Module['thisProgram']), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);


  try {

    var ret = Module['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
    exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      Module.printErr('exception thrown: ' + toLog);
      Module['quit'](1, e);
    }
  } finally {
    calledMain = true;
  }
}




function run(args) {
  args = args || Module['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
      Module.printErr('pre-main prep time: ' + (Date.now() - preloadStartTime) + ' ms');
    }

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (Module['_main'] && shouldRunNow) Module['callMain'](args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = Module.run = run;

function exit(status, implicit) {
  if (implicit && Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') implicitly called by end of main(), but noExitRuntime, so not exiting the runtime (you can use emscripten_force_exit, if you want to force a true shutdown)');
    return;
  }

  if (Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') called, but noExitRuntime, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)');
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  if (ENVIRONMENT_IS_NODE) {
    process['exit'](status);
  }
  Module['quit'](status, new ExitStatus(status));
}
Module['exit'] = Module.exit = exit;

var abortDecorators = [];

function abort(what) {
  if (what !== undefined) {
    Module.print(what);
    Module.printErr(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '';

  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
  if (abortDecorators) {
    abortDecorators.forEach(function(decorator) {
      output = decorator(output, what);
    });
  }
  throw output;
}
Module['abort'] = Module.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}


run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}



