// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.1
description: >
    "from" cannot be invoked as a function
info: >
    If IsConstructor(C) is false, throw a TypeError exception.
features: [TypedArray]
---*/

var from = Object.getPrototypeOf(Int8Array).from;

assert.throws(TypeError, function() {
  from([]);
});
