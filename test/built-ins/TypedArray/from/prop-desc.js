// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.1
description: >
    "from" property of TypedArray
info: >
    ES6 section 17: Every other data property described in clauses 18 through
    26 and in Annex B.2 has the attributes { [[Writable]]: true,
    [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);

verifyNotEnumerable(TypedArray, 'from');
verifyWritable(TypedArray, 'from');
verifyConfigurable(TypedArray, 'from');
