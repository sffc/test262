// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  Number.prototype.toFixed does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, arrow-function]
---*/

assert.sameValue(
  isConstructor(Number.prototype.toFixed),
  false,
  'isConstructor(Number.prototype.toFixed) must return false'
);

assert.throws(TypeError, () => {
  new Number.prototype.toFixed();
}, '`new Number.prototype.toFixed()` throws TypeError');
    
