// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.5
description: >
    "length" property of TypedArrayPrototype.copyWithin
info: >
    The length property of the "copyWithin" method is 2.

    ES6 section 17: Unless otherwise specified, the length property of a
    built-in Function object has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.sameValue(TypedArrayPrototype.copyWithin.length, 2);

verifyNotEnumerable(TypedArrayPrototype.copyWithin, 'length');
verifyNotWritable(TypedArrayPrototype.copyWithin, 'length');
verifyConfigurable(TypedArrayPrototype.copyWithin, 'length');
