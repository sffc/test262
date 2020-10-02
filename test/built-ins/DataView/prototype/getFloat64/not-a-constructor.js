// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  DataView.prototype.getFloat64 does not implement [[Construct]]
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
includes: [isConstructor.js]
features: [Reflect.construct, DataView, arrow-function, ArrayBuffer]
---*/

assert.sameValue(
  isConstructor(DataView.prototype.getFloat64),
  false,
  'isConstructor(DataView.prototype.getFloat64) must return false'
);

assert.throws(TypeError, () => {
  let dv = new DataView(new ArrayBuffer(16)); new dv.getFloat64(0, 0);
}, '`let dv = new DataView(new ArrayBuffer(16)); new dv.getFloat64(0, 0)` throws TypeError');
    
