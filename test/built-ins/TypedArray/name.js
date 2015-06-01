// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2
description: name property of TypedArray
info: >
    TypedArray has a 'name' property whose value is "TypedArray".

    ES6 section 17: Unless otherwise specified, the name property of a built-in
    Function object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);

assert.sameValue(TypedArray.name, 'TypedArray');

verifyNotEnumerable(TypedArray, 'name');
verifyNotWritable(TypedArray, 'name');
verifyConfigurable(TypedArray, 'name');
