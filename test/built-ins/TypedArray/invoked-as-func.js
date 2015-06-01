// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.1.1
description: If NewTarget is undefined, throw a TypeError exception.
features: [TypedArray]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);

assert.throws(TypeError, function() {
  TypedArray();
});
