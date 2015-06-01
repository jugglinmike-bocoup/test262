// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.4
description: >
    @@species property returns the `this` value
features: [TypedArray, Symbol.species]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);
var value = {};
var getter = Object.getOwnPropertyDescriptor(TypedArray, Symbol.species).get;

assert.sameValue(getter.call({}), value);
