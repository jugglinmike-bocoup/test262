// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.1.2.1
description: TypedArray cannot be invoked as a constructor
info: >
    If SameValue(%TypedArray%, newTarget) is true, throw a TypeError
    exception.
features: [TypedArray]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);

assert.throws(TypeError, function() {
  new TypedArray();
});
