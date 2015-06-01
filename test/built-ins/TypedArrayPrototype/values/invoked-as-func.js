// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.29
description: If Type(O) is not Object, throw a TypeError exception.
features: [TypedArray]
---*/

var values = Object.getPrototypeOf(Int8Array).prototype.values;

assert.sameValue(typeof values, 'function');

assert.throws(TypeError, function() {
  values();
});
