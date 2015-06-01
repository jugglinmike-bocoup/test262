// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.28
description: >
    "@@iterator" property of TypedArrayPrototype
info: >
    The initial value of the @@iterator property is the same function object as
    the initial value of the %TypedArray%.prototype.values property.

    ES6 section 17: Every other data property described in clauses 18 through
    26 and in Annex B.2 has the attributes { [[Writable]]: true,
    [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [TypedArray, Symbol.iterator]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.sameValue(
  TypedArrayPrototype[Symbol.iterator], TypedArrayPrototype.values
);

verifyNotEnumerable(TypedArrayPrototype, Symbol.iterator);
verifyWritable(TypedArrayPrototype, Symbol.iterator);
verifyConfigurable(TypedArrayPrototype, Symbol.iterator);
