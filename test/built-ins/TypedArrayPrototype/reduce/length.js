// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.19
description: >
    "length" property of TypedArrayPrototype.reduce
info: >
    The length property of the "reduce" method is 1.

    ES6 section 17: Unless otherwise specified, the length property of a
    built-in Function object has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.sameValue(TypedArrayPrototype.reduce.length, 1);

verifyNotEnumerable(TypedArrayPrototype.reduce, 'length');
verifyNotWritable(TypedArrayPrototype.reduce, 'length');
verifyConfigurable(TypedArrayPrototype.reduce, 'length');
