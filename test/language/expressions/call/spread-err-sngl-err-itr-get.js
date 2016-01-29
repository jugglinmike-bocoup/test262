// This file was procedurally generated from the following sources:
// - src/cases/spread/sngl-err-itr-get.hashes
// - src/cases/spread/error/call-expr.hashes
/*---
description: Spread operator applied to the only argument when GetIterator fails (CallExpression)
es6id: 12.3.4.1
features: [Symbol.iterator]

info: >
    CallExpression : MemberExpression Arguments
    
    [...]
    9. Return EvaluateDirectCall(func, thisValue, Arguments, tailCall).
    
    12.3.4.3 Runtime Semantics: EvaluateDirectCall
    
    1. Let argList be ArgumentListEvaluation(arguments).
    [...]
    6. Let result be Call(func, thisValue, argList).
    [...]

    12.3.6.1 Runtime Semantics: ArgumentListEvaluation
    
    ArgumentList : ... AssignmentExpression
    
    1. Let list be an empty List.
    2. Let spreadRef be the result of evaluating AssignmentExpression.
    3. Let spreadObj be GetValue(spreadRef).
    4. Let iterator be GetIterator(spreadObj).
    5. ReturnIfAbrupt(iterator).
    
    7.4.1 GetIterator ( obj, method )
    
    [...]
    3. Let iterator be Call(method,obj).
    4. ReturnIfAbrupt(iterator).
---*/
var iter = {};
iter[Symbol.iterator] = function() {
  throw new Test262Error();
};


assert.throws(Test262Error, function() {
  (function() {}(...iter));
});
