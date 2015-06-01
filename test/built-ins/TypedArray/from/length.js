// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.1
description: >
    "length" property of TypedArray.from
info: >
    The length property of the "from" method is 1.

    ES6 section 17: Unless otherwise specified, the length property of a
    built-in Function object has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);

assert.sameValue(TypedArray.from.length, 1);

verifyNotEnumerable(TypedArray.from, 'length');
verifyNotWritable(TypedArray.from, 'length');
verifyConfigurable(TypedArray.from, 'length');
