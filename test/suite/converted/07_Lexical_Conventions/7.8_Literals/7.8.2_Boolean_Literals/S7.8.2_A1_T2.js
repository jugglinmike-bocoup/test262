// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Literal :: BooleanLiteral
 *
 * @id: S7.8.2_A1_T2;
 * @section: 7.8.2;
 * @description: BooleanLiteral :: false;
 */

//CHECK#1
if (Boolean(false) !== false) {
  $ERROR('#1: Boolean(false) === false. Actual: Boolean(false) === ' + (Boolean(false)));
} 
 
