// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.2.1-7-s
description: >
    eval - a direct eval declaring a var named 'eval' throws
    SyntaxError in strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    eval('var eval;');
    return false;
  }
  catch (e) {
    return (e instanceof SyntaxError);
  }
 }
runTestCase(testcase);
