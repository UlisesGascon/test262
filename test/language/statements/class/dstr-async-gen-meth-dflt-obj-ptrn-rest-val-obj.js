// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-rest-val-obj.case
// - src/dstr-binding/default/cls-decl-async-gen-meth-dflt.template
/*---
description: Rest object contains just unextracted data (class expression async generator method (default parameters))
esid: sec-class-definitions-runtime-semantics-evaluation
features: [async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    ClassDeclaration : class BindingIdentifier ClassTail

    1. Let className be StringValue of BindingIdentifier.
    2. Let value be the result of ClassDefinitionEvaluation of ClassTail with
       argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
           i. Let status be the result of performing
              PropertyDefinitionEvaluation for m with arguments proto and
              false.
        [...]

    Runtime Semantics: PropertyDefinitionEvaluation

    AsyncGeneratorMethod :
        async [no LineTerminator here] * PropertyName ( UniqueFormalParameters )
            { AsyncGeneratorBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this AsyncGeneratorMethod is strict mode code, let strict be true.
       Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be ! AsyncGeneratorFunctionCreate(Method, UniqueFormalParameters,
       AsyncGeneratorBody, scope, strict).
    [...]

---*/


var callCount = 0;
class C {
  async *method({a, b, ...rest} = {x: 1, y: 2, a: 5, b: 3}) {
    assert.sameValue(rest.x, 1);
    assert.sameValue(rest.y, 2);
    assert.sameValue(rest.a, undefined);
    assert.sameValue(rest.b, undefined);

    verifyEnumerable(rest, "x");
    verifyWritable(rest, "x");
    verifyConfigurable(rest, "x");

    verifyEnumerable(rest, "y");
    verifyWritable(rest, "y");
    verifyConfigurable(rest, "y");

    callCount = callCount + 1;
  }
};

new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);
