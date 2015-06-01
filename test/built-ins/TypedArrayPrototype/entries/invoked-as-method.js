// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.6
description: Requires a [[TypedArrayName]] internal slot.
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.sameValue(typeof TypedArrayPrototype.entries, 'function');

assert.throws(TypeError, function() {
  TypedArrayPrototype.entries();
});
