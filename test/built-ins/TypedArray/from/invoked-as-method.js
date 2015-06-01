// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.1
description: >
    "from" cannot be invoked as a method of TypedArray
features: [TypedArray]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);

assert.throws(TypeError, function() {
  TypedArray.from([]);
});
