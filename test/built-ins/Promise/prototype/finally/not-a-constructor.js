// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Promise.prototype.finally does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, Promise.prototype.finally, arrow-function]
---*/

assert.sameValue(
  isConstructor(Promise.prototype.finally),
  false,
  'isConstructor(Promise.prototype.finally) must return false'
);

assert.throws(TypeError, () => {
  let p = new Promise(() => {}); new p.finally();
}, '`let p = new Promise(() => {}); new p.finally()` throws TypeError');
    
