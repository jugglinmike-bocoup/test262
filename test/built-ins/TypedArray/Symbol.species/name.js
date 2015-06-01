// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.1
description: >
    "name" property of @@species accessor function
info: >
    The value of the name property of this function is "get [Symbol.species]".

    ES6 section 17: Unless otherwise specified, the name property of a built-in
    Function object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray, Symbol.species]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);
var getter = Object.getOwnPropertyDescriptor(TypedArray, Symbol.species).get;

assert.sameValue(getter.name, 'get [Symbol.species]');

verifyNotEnumerable(getter, 'name');
verifyNotWritable(getter, 'name');
verifyConfigurable(getter, 'name');
