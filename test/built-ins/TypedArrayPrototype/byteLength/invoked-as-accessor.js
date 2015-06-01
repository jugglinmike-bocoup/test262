// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.2
description: >
    If O does not have a [[ViewedArrayBuffer]] internal slot, throw a TypeError
    exception.
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.throws(TypeError, function() {
  TypedArrayPrototype.byteLength;
});
