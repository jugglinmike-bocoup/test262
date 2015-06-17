// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6.1.2-1gs
description: >
    Strict Mode - SyntaxError is thrown when FutureReservedWord
    'implements' occurs in strict mode code
negative: SyntaxError
flags: [onlyStrict]
---*/

throw NotEarlyError;
var implements = 1;
