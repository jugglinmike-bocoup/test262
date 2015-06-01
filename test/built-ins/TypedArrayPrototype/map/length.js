// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.18
description: >
    "length" property of TypedArrayPrototype.map
info: >
    The length property of the "map" method is 1.

    ES6 section 17: Unless otherwise specified, the length property of a
    built-in Function object has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.sameValue(TypedArrayPrototype.map.length, 1);

verifyNotEnumerable(TypedArrayPrototype.map, 'length');
verifyNotWritable(TypedArrayPrototype.map, 'length');
verifyConfigurable(TypedArrayPrototype.map, 'length');
