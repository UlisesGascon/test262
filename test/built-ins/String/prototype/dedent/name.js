// Copyright (C) 2022 Ulises Gascon. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: string.prototype.dedent
description: >
  String.prototype.dedent.name is "dedent".
info: |
  String.prototype.dedent ( )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
author: Ulises Gascon
---*/

assert.sameValue(String.prototype.dedent.name, "dedent");

verifyNotEnumerable(String.prototype.dedent, "name");
verifyNotWritable(String.prototype.dedent, "name");
verifyConfigurable(String.prototype.dedent, "name");
