// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.2.3
description: >
    "prototype" property of TypedArray
info: >
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArray = Object.getPrototypeOf(Int8Array);

verifyNotEnumerable(TypedArray, 'prototype');
verifyNotWritable(TypedArray, 'prototype');
verifyNotConfigurable(TypedArray, 'prototype');
