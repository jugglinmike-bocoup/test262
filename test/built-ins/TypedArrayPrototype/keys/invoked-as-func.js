// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.15
description: If Type(O) is not Object, throw a TypeError exception.
features: [TypedArray]
---*/

var keys = Object.getPrototypeOf(Int8Array).prototype.keys;

assert.sameValue(typeof keys, 'function');

assert.throws(TypeError, function() {
  keys();
});
