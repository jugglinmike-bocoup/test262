// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.4
description: TypedArrayPrototype constructor
info: >
    The initial value of %TypedArray%.prototype.constructor is the %TypedArray%
    intrinsic object.

    ES6 section 17: Every other data property described in clauses 18 through
    26 and in Annex B.2 has the attributes { [[Writable]]: true,
    [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);
var TypedArrayPrototype = TypedArray.prototype;

assert.sameValue(TypedArrayPrototype.constructor, TypedArray);

verifyNotEnumerable(TypedArrayPrototype, 'constructor');
verifyWritable(TypedArrayPrototype, 'constructor');
verifyConfigurable(TypedArrayPrototype, 'constructor');
