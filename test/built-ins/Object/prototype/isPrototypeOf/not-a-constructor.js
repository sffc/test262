// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Object.prototype.isPrototypeOf does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, arrow-function]
---*/

assert.sameValue(
  isConstructor(Object.prototype.isPrototypeOf),
  false,
  'isConstructor(Object.prototype.isPrototypeOf) must return false'
);

assert.throws(TypeError, () => {
  new Object.prototype.isPrototypeOf({});
}, '`new Object.prototype.isPrototypeOf({})` throws TypeError');
    
