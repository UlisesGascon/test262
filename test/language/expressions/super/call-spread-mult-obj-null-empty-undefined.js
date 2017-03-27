// This file was procedurally generated from the following sources:
// - src/spread/mult-obj-null-empty-undefined.case
// - src/spread/default/super-call.template
/*---
description: Object Spread operator following other arguments with null, undefined and empty object (SuperCall)
esid: sec-super-keyword-runtime-semantics-evaluation
es6id: 12.3.5.1
features: [object-spread]
flags: [generated]
includes: [compareArray.js]
info: |
    SuperCall : super Arguments

    1. Let newTarget be GetNewTarget().
    2. If newTarget is undefined, throw a ReferenceError exception.
    3. Let func be GetSuperConstructor().
    4. ReturnIfAbrupt(func).
    5. Let argList be ArgumentListEvaluation of Arguments.
    [...]

    Pending Runtime Semantics: PropertyDefinitionEvaluation

    PropertyDefinition:...AssignmentExpression

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let fromValue be GetValue(exprValue).
    3. ReturnIfAbrupt(fromValue).
    4. Let excludedNames be a new empty List.
    5. Return CopyDataProperties(object, fromValue, excludedNames).

---*/

var callCount = 0;

class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 1);
    assert.sameValue(obj.b, 2);
    assert.sameValue(obj.c, 3);
    assert.sameValue(obj.d, 4);
    assert(compareArray(Object.keys(obj), ["a", "b", "c", "d"]));
    callCount += 1;
  }
}

class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({a: 1, ...null, b: 2, ...undefined, c: 3, ...{}, ...{...{}}, d: 4});
  }
}

new Test262ChildClass();
assert.sameValue(callCount, 1);
