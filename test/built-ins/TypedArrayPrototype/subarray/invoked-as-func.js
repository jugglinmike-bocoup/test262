// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.26
description: If Type(O) is not Object, throw a TypeError exception.
info: >
    This function is not generic. The this value must be an object with a
    [[TypedArrayName]] internal slot.
features: [TypedArray]
---*/

var subarray = Object.getPrototypeOf(Int8Array).prototype.subarray;

assert.sameValue(typeof subarray, 'function');

assert.throws(TypeError, function() {
  subarray();
});
