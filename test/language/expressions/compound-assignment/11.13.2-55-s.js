// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.13.2-55-s
description: >
    Strict Mode - TypeError is thrown if The LeftHandSide of a
    Compound Assignment operator(|=) is a reference to a non-existent
    property of an object whose [[Extensible]] internal property is
    false
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.preventExtensions(obj);

        try {
            obj.len |= 10;
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
