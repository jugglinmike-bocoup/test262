// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `Promise.race` invoked on a non-object value
es6id: 25.4.4.3
info: >
    1. Let C be the this value.
    2. If Type(C) is not Object, throw a TypeError exception.
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  Promise.race.cal(undefined, []);
});

assert.throws(TypeError, function() {
  Promise.race.cal(null, []);
});

assert.throws(TypeError, function() {
  Promise.race.cal(86, []);
});

assert.throws(TypeError, function() {
  Promise.race.cal('string', []);
});

assert.throws(TypeError, function() {
  Promise.race.cal(true, []);
});

assert.throws(TypeError, function() {
  Promise.race.call(Symbol(), []);
});

