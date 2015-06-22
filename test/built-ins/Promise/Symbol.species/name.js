// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.4.4.6
description: Promise `Symbol.species` accessor function name
info: >
    The value of the name property of this function is "get [Symbol.species]".

    ES6 Section 17:

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
features: [Symbol.species]
includes: [propertyHelper.js]
---*/

var desc = Object.getOwnPropertyDescriptor(Promise, Symbol.species);

assert.sameValue(desc.get.name, 'get [Symbol.species]');

verifyNotEnumerable(desc.get, 'name');
verifyNotWritable(desc.get, 'name');
verifyConfigurable(desc.get, 'name');
