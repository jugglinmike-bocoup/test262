// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.17
description: >
    "length" property of TypedArrayPrototype
info: >
    %TypedArray%.prototype.length is an accessor property whose set accessor
    function is undefined.
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;
var desc = Object.getOwnPropertyDescriptor(TypedArrayPrototype, 'length');

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');
