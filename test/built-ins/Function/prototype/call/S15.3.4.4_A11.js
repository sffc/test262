// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype.call.length property has the attribute DontEnum
es5id: 15.3.4.4_A11
description: >
    Checking if enumerating the Function.prototype.call.length
    property fails
---*/

//CHECK#0
if (!(Function.prototype.call.hasOwnProperty('length'))) {
  throw new Test262Error('#0: the Function.prototype.call has length property.');
}


// CHECK#1
if (Function.prototype.call.propertyIsEnumerable('length')) {
  throw new Test262Error('#1: the Function.prototype.call.length property has the attributes DontEnum');
}

// CHECK#2
for (var p in Function.prototype.call) {
  if (p === "length")
    throw new Test262Error('#2: the Function.prototype.call.length property has the attributes DontEnum');
}
