// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.27
description: >
    "length" property of TypedArrayPrototype.toLocaleString
info: >
    ES6 section 17: Every built-in Function object, including constructors, has
    a length property whose value is an integer. Unless otherwise specified,
    this value is equal to the largest number of named arguments shown in the
    subclause headings for the function description, including optional
    parameters.

    [...]

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.sameValue(TypedArrayPrototype.toLocaleString.length, 2);

verifyNotEnumerable(TypedArrayPrototype.toLocaleString, 'length');
verifyNotWritable(TypedArrayPrototype.toLocaleString, 'length');
verifyConfigurable(TypedArrayPrototype.toLocaleString, 'length');
