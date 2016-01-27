// This file was procedurally generated from the following sources:
// - src/cases/dstr-binding/ary-name-init-fn-anon.hashes
// - src/cases/dstr-binding/default/gen-func-decl.hashes
/*---
description: SingleNameBinding assigns inferred name to anonymous functions (generator function declaration)
es6id: 14.4.12
info: >
    13.3.3.6 Runtime Semantics: IteratorBindingInitialization
    
    SingleNameBinding : BindingIdentifier Initializeropt
    
    [...]
    6. If Initializer is present and v is undefined, then
       a. Let defaultValue be the result of evaluating Initializer.
       b. Let v be GetValue(defaultValue).
       c. ReturnIfAbrupt(v).
       d. If IsAnonymousFunctionDefinition(Initializer) is true, then
          i. Let hasNameProperty be HasOwnProperty(v, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(v,
               bindingId).
    7. If environment is undefined, return PutValue(lhs, v).
    8. Return InitializeReferencedBinding(lhs, v).

    GeneratorDeclaration : function * ( FormalParameters ) { GeneratorBody }
    
        [...]
        2. Let F be GeneratorFunctionCreate(Normal, FormalParameters,
           GeneratorBody, scope, strict).
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
---*/


var callCount = 0;
function* f([x = function() {}]) {
  assert.sameValue(x.name, 'x');;
  callCount = callCount + 1;
};
f([]).next();
assert.sameValue(callCount, 1);
