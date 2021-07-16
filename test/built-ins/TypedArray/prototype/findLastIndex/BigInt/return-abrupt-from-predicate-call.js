// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findlastindex
description: >
  Return abrupt from predicate call.
info: |
   %TypedArray%.prototype.findLastIndex ( predicate [ , thisArg ] )

  ...
  5. Let k be len - 1.
  6. Repeat, while k ≥ 0
    ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
  ...
includes: [testBigIntTypedArray.js]
features: [BigInt, TypedArray]
---*/

var predicate = function() {
  throw new Test262Error();
};

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA(1);
  assert.throws(Test262Error, function() {
    sample.findLastIndex(predicate);
  });
});
