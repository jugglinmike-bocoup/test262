// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.28
description: >
    "toString" property of TypedArrayPrototype
info: >
    The initial value of the %TypedArray%.prototype.toString data property is
    the same built-in function object as the Array.prototype.toString method
    defined in 22.1.3.27.

    ES6 section 17: Every other data property described in clauses 18 through
    26 and in Annex B.2 has the attributes { [[Writable]]: true,
    [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;

assert.sameValue(TypedArrayPrototype.toString, Array.prototype.toString);

verifyNotEnumerable(TypedArrayPrototype, 'toString');
verifyWritable(TypedArrayPrototype, 'toString');
verifyConfigurable(TypedArrayPrototype, 'toString');
