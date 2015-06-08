// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.1.1-1gs
description: Strict Mode - 'this' object at the global scope is not undefined
flags: [onlyStrict]
---*/

if (this===undefined) {
    throw NotEarlyError;
}
