// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.31
description: >
    "name" property of "@@toStringTag" accessor function
info: >
    The initial value of the name property of this function is "get
    [Symbol.toStringTag]".

    ES6 section 17: Unless otherwise specified, the name property of a built-in
    Function object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray, Symbol.toStringTag]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, Symbol.toStringTag
).get;

assert.sameValue(getter.name, 'get [Symbol.toStringTag]');

verifyNotEnumerable(getter, 'name');
verifyNotWritable(getter, 'name');
verifyConfigurable(getter, 'name');
