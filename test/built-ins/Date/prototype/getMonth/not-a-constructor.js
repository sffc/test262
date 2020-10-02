// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Date.prototype.getMonth does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, arrow-function]
---*/

assert.sameValue(
  isConstructor(Date.prototype.getMonth),
  false,
  'isConstructor(Date.prototype.getMonth) must return false'
);

assert.throws(TypeError, () => {
  let date = new Date(Date.now()); new date.getMonth();
}, '`let date = new Date(Date.now()); new date.getMonth()` throws TypeError');
    
