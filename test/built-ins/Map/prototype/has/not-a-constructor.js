// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Map.prototype.has does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, Map, arrow-function]
---*/

assert.sameValue(isConstructor(Map.prototype.has), false, 'isConstructor(Map.prototype.has) must return false');

assert.throws(TypeError, () => {
  let m = new Map(); new m.has();
}, '`let m = new Map(); new m.has()` throws TypeError');
    
