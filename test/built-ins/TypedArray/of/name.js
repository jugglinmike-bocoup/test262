// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.2
description: >
    "name" property of TypedArray.of
info: >
    The "name" property of the "of" method is "of".

    ES6 section 17: Every built-in Function object, including constructors,
    that is not identified as an anonymous function has a name property whose
    value is a String. Unless otherwise specified, this value is the name that
    is given to the function in this specification.

    [...]

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);

assert.sameValue(TypedArray.of.name, 'of');

verifyNotEnumerable(TypedArray.of, 'name');
verifyNotWritable(TypedArray.of, 'name');
verifyConfigurable(TypedArray.of, 'name');
