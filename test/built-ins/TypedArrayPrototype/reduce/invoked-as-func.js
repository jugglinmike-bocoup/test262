// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.19
description: If Type(O) is not Object, throw a TypeError exception.
info: >
    This function is not generic. ValidateTypedArray is applied to the this
    value prior to evaluating the algorithm. If its result is an abrupt
    completion that exception is thrown instead of evaluating the algorithm.
features: [TypedArray]
---*/

var reduce = Object.getPrototypeOf(Int8Array).prototype.reduce;

assert.sameValue(typeof reduce, 'function');

assert.throws(TypeError, function() {
  reduce();
});
