// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-static-async-gen-meth-super.case
// - src/class-elements/syntax/invalid/cls-expr-elements-invalid-syntax.template
/*---
description: Static Async Generator Methods cannot contain direct super (class expression)
esid: prod-ClassElement
features: [async-iteration, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : static MethodDefinition
        It is a Syntax Error if HasDirectSuper of MethodDefinition is true.

---*/


throw "Test262: This statement should not be evaluated.";

var C = class extends Function{
  static async * method() {
      super();
  }
};