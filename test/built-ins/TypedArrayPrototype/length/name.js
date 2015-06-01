// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.17
description: >
    "name" property of "length" accessor function
info: >
    ES6 section 17: Every built-in Function object, including constructors,
    that is not identified as an anonymous function has a name property whose
    value is a String. [...] For functions that are specified as properties of
    objects, the name value is the property name string used to access the
    function. Functions that are specified as get or set accessor functions of
    built-in properties have "get " or "set " prepended to the property name
    string.

    Unless otherwise specified, the name property of a built-in
    Function object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

var TypedArrayPrototype = Object.getPrototypeOf(Int8Array).prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, 'length'
).get;

assert.sameValue(getter.name, 'get length');

verifyNotEnumerable(getter, 'name');
verifyNotWritable(getter, 'name');
verifyConfigurable(getter, 'name');
