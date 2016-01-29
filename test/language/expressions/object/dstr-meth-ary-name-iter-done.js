// This file was procedurally generated from the following sources:
// - src/cases/dstr-binding/ary-name-iter-done.hashes
// - src/cases/dstr-binding/default/meth.hashes
/*---
description: SingleNameBinding when value iteration was completed previously (method)
es6id: 14.3.8
info: >
    MethodDefinition : PropertyName ( StrictFormalParameters ) { FunctionBody }
    
    [...]
    6. Let closure be FunctionCreate(kind, StrictFormalParameters,
       FunctionBody, scope, strict). If functionPrototype was passed as a
       parameter then pass its value as the functionPrototype optional argument
       of FunctionCreate.
    [...]
    
    9.2.1 [[Call]] ( thisArgument, argumentsList)
    
    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]
    
    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )
    
    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]
    
    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)
    
    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization
    
    SingleNameBinding : BindingIdentifier Initializeropt
    
    [...]
    4. If iteratorRecord.[[done]] is false, then
       [...]
    5. If iteratorRecord.[[done]] is true, let v be undefined.
    [...]
    8. Return InitializeReferencedBinding(lhs, v).
---*/


var callCount = 0;
var obj = {
  method([_, x]) {
    assert.sameValue(x, undefined);
    callCount = callCount + 1;
  }
};

obj.method([]);
assert.sameValue(callCount, 1);
