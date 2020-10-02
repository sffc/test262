// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  RegExp.prototype[Symbol.match] does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, Symbol, Symbol.match, arrow-function]
---*/

assert.sameValue(
  isConstructor(RegExp.prototype[Symbol.match]),
  false,
  'isConstructor(RegExp.prototype[Symbol.match]) must return false'
);

assert.throws(TypeError, () => {
  let re = new RegExp(''); new re[Symbol.match]();
}, '`let re = new RegExp(\'\'); new re[Symbol.match]()` throws TypeError');
    
