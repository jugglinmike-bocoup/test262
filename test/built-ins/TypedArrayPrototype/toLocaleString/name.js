// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.27
description: >
    "name" property of TypedArrayPrototype.toLocaleString
info: >
    ES6 section 17: Every built-in Function object, including constructors,
    that is not identified as an anonymous function has a name property whose
    value is a String. Unless otherwise specified, this value is the name that
    is given to the function in this specification.

    [...]

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.sameValue(TypedArrayPrototype.toLocaleString.name, 'toLocaleString');

verifyNotEnumerable(TypedArrayPrototype.toLocaleString, 'name');
verifyNotWritable(TypedArrayPrototype.toLocaleString, 'name');
verifyConfigurable(TypedArrayPrototype.toLocaleString, 'name');
