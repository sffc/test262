// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  TypedArray.prototype.sort does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js, testTypedArray.js]
features: [Reflect.construct, arrow-function, TypedArray]
---*/

assert.sameValue(
  isConstructor(TypedArray.prototype.sort),
  false,
  'isConstructor(TypedArray.prototype.sort) must return false'
);

assert.throws(TypeError, () => {
  let u8 = new Uint8Array(1); new u8.sort();
}, '`let u8 = new Uint8Array(1); new u8.sort()` throws TypeError');
    
