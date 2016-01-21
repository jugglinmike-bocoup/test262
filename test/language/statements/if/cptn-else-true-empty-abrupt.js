// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.6.7
description: >
    Completion value when expression is true with an `else` clause and body
    returns an abrupt completion
info: >
    IfStatement : if ( Expression ) Statement else Statement

    4. If exprValue is true, then
       a. Let stmtCompletion be the result of evaluating the first Statement.
    5. Else,
       [...]
    6. ReturnIfAbrupt(stmtCompletion).
---*/

assert.sameValue(
  eval('1; do { if (true) { break; } else { } } while (false)'), undefined
);
assert.sameValue(
  eval('2; do { 3; if (true) { break; } else { } } while (false)'), 3
);
assert.sameValue(
  eval('4; do { if (true) { break; } else { 5; } } while (false)'), undefined
);
assert.sameValue(
  eval('6; do { 7; if (true) { break; } else { 8; } } while (false)'), 7
);

assert.sameValue(
  eval('1; do { if (true) { continue; } else { } } while (false)'), undefined
);
assert.sameValue(
  eval('2; do { 3; if (true) { continue; } else { } } while (false)'), 3
);
assert.sameValue(
  eval('4; do { if (true) { continue; } else { 5; } } while (false)'), undefined
);
assert.sameValue(
  eval('6; do { 7; if (true) { continue; } else { 8; } } while (false)'), 7
);
