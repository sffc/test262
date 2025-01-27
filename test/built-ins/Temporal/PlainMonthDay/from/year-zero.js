// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday.from
description: Negative zero, as an extended year, is rejected
features: [Temporal, arrow-function]
---*/

const invalidStrings = [
    "-000000-08",
    "-000000-08-24",
    "-000000-08-24T15:43:27",
    "-000000-08-24T15:43:27+01:00[UTC]"
];
invalidStrings.forEach((arg) => {
  assert.throws(
    RangeError,
    () => { Temporal.PlainMonthDay.from(arg); },
    "reject minus zero as extended year"
  );
});
