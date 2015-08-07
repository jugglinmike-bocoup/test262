// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.10.3
description: Invocation of `Symbol.toPrimitive` method during coercion
info: >
    [...]
    7. Return the result of performing Abstract Equality Comparison rval ==
       lval.

    ES6 Section 7.2.12 Abstract Equality Comparison

    [...]
    10. If Type(x) is either String, Number, or Symbol and Type(y) is Object,
        then return the result of the comparison x == ToPrimitive(y).

    ES6 Section 7.1.1 ToPrimitive ( input [, PreferredType] )

    [...]
    4. Let exoticToPrim be GetMethod(input, @@toPrimitive).
    5. ReturnIfAbrupt(exoticToPrim).
    6. If exoticToPrim is not undefined, then
       a. Let result be Call(exoticToPrim, input, «hint»).
       [...]
features: [Symbol.toPrimitive]
---*/

var y = {};
var thisVal, args;

y[Symbol.toPrimitive] = function() {
  thisVal = this;
  args = arguments;
};

0 == y;
assert.sameValue(thisVal, y);
assert.sameValue(args.length, 1);
assert.sameValue(args[0], 'default');
