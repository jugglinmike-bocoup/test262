// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.values does not see an element removed by a getter that is hit during iteration
es7id: pending
author: Jordan Harband
---*/

var bDeletesC = {
    a: 'A',
    get b() {
        delete this.c;
        return 'B';
    },
    c: 'C'
};

var result = Object.values(bDeletesC);

assert.sameValue(Array.isArray(result), true, 'result is an array');
assert.sameValue(result.length, 2, 'result has 2 items');

assert.sameValue(result[0], 'A', 'first value is "A"');
assert.sameValue(result[1], 'B', 'second value is "B"');
