# Test262 Authoring Guidelines

## Test Case Names

There is a substantial amount of variation in existing test names and that's ok.

Test cases should be created in files that are named to identify a feature, API (or aspect of either), that's being tested. Previously, there was a naming system based on the specification section and algorithm step that was the focus of the test. This protocol doesn't work if the section or algorithm step changes.

Take a look at these examples:

- `Math.fround` handling of `Infinity`: `test/built-ins/Math/fround/Math.fround_Infinity.js`
- `Array.prototype.find` use with `Proxy`: `test/Array/prototype/find/Array.prototype.find_callable-Proxy-1.js`
- `arguments` implements an `iterator` interface: `test/language/arguments-object/iterator-interface.js`



## Test Case Style

A test file has three sections: Copyright, Frontmatter, and Body.  A test looks roughly like this:

```javascript
// Copyright (C) 2015 [Contributor Name]. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: brief description
 info: >
   verbose test description, multiple lines OK.
   (this is rarely necessary, usually description is enough)
---*/

[Test Code]
```

### Copyright

The copyright block must be the first section of the test.  The copyright block must use `//` style comments.

### Frontmatter

The Test262 frontmatter is a string of [YAML](https://en.wikipedia.org/wiki/YAML) enclosed by the comment start tag `/*---` and end tag `---*/`.  There must be exactly one Frontmatter per test.

Test262 supports the following tags:

 - [**description**](#description)
 - [**info**](#info)
 - [**negative**](#negative)
 - [**es5id**](#es5id)
 - [**es6id**](#es6id)
 - [**includes**](#includes)
 - [**timeout**](#timeout)
 - [**author**](#author)
 - [**flags**](#flags)
 - [**features**](#features)

#### description
**description**: [string]

This should be a short, one-line description of the purpose of this
testcase.  This is the string displayed by the browser runnner.

Eg: Insert &lt;LS&gt; between chunks of one string

#### info
**info**: [multiline string]

This allows a long, free-form comment.

Eg: Object.prototype.toString - '[object Null]' will be returned when
'this' value is null

#### negative
**negative**: [regex]

This means the test is expected to throw an error of the given type.  If no error is thrown, a test failure is reported.

If an error is thrown, it is implicitly converted to a string.  The second parameter is a regular expression that will be matched against this string.  If the match fails, a test failure is reported.  Thus the regular expression can match either the error name, or the message contents, or both.

For best practices on how to use the negative tag please see Handling Errors and Negative Test Cases, below.

#### es5id
**es5id**: [es5-test-id]

This tag identifies the portion of the ECMAScript 5.1 standard that is tested by this test.  It was automatically generated for tests that were originally written for the ES5 version of the test suite and are now part of the ES6 version.

When writing a new test for ES6, it is only necessary to include this tag when the test covers a part of the ES5 spec that is incorporated into ES6. All other tests should specify the `es6id` (see below) instead.

#### es6id
**es6id**: [es6-test-id]

This tag identifies the portion of the ECMAScript 6 standard that is tested by this test.

#### includes
**includes**: [file-list]

This tag names a list of helper files that will be included in the test environment prior to running the test.  Filenames **must** include the `.js` extension.

The helper files are found in the `test/harness/` directory. When some code is used repeatedly across a group of tests, a new helper function (or group of helpers) can be defined. Helpers increase test complexity, so they should be created and used sparingly.

#### timeout
**timeout**: [integer]

This tag specifies the number of milliseconds to wait before the test runner declares an [asynchronous test](#writing-asynchronous-tests) to have timed out.  It has no effect on synchronous tests.

Test authors **should not** use this tag except as a last resort.  Each runner is allowed to provide its own default timeout, and the user may be permitted to override this in order to account for unusually fast or slow hardware, network delays, etc.

#### author
**author**: [string]

This tag is used to identify the author of a test case. It's optional.

#### flags
**flags**: [list]

This tag is for boolean properties associated with the test.

- **`onlyStrict`** - only run the test in strict mode (*not supported by the browser runner*)
- **`noStrict`** - only run the test in "sloppy" mode

#### features
**features**: [list]

Some tests require the use of language features that are not directly described by the test file's location in the directory structure. These features features should be formally listed here.

## Test Environment

Each test case is run in a fresh JavaScript environment; in a browser, this will be a new `IFRAME`; for a console runner, this will be a new process.  The test harness code is loaded before the test is run.  The test harness defines the following helper functions:

Function | Purpose
---------|--------
Test262Error(message) | constructor for an error object that indicates a test failure
$ERROR(message) | helper function: construct a Test262Error object and throw it
$DONE(arg) | helper function for asynchronous tests; see Writing Asynchronous Tests, below
NotEarlyError | preconstructed error object used for testing syntax and other early errors; see Syntax Error & Early Error, below
assert(value, message) | helper function that will throw a new Test262Error instance if the specified value is not strictly equal to the JavaScript `true` value; accepts an optional string message for use in creating the error
assert.sameValue(actual, expected, message) | helper function that will throw a new Test262Error instance if the first two arguments are not the same value (see implementation for specifics); accepts an optional string message for use in creating the error
assert.notSameValue(actual, unexpected, message) | helper function that will throw a new Test262Error instance if the first two arguments are the same value (see implementation for specifics); accepts an optional string message for use in creating the error
assert.throws(expectedErrorConstructor, fn) | helper function that will throw a new Test262Error instance if the provided function does not throw an error, or if the constructor of the value thrown does not match the provided constructor

```
/// error class
function Test262Error(message) {
//[omitted body]
}

/// helper function that throws
function $ERROR(message) {
    throw new Test262Error(message);
}

/// helper function for asynchronous tests
function $DONE(arg) {
//[omitted body]
}

var NotEarlyError = new Error(...);
```

## Handling Errors and Negative Test Cases

Expectations for **parsing errors** should be declared using [the `negative` frontmatter flag](#negative):

```javascript
/*---
negative: SyntaxError
---*/

throw NotEarlyError;
var var = var;
```

Expectations for **runtime errors** should be defined using the `assert.throws` method and the appropriate JavaScript Error constructor function:

```javascript
assert.throws(ReferenceError, function() {
  1 += 1; // expect this to throw ReferenceError
});
```

## Writing Asynchronous Tests

An asynchronous test is any test that includes the string `$DONE` anywhere in the test file.  The test runner checks for the presence of this string; if it is found, the runner expects that the `$DONE()` function will be called to signal test completion.

 * If the argument to `$DONE` is omitted, is `undefined`, or is any other falsy value, the test is considered to have passed.

 * If the argument to `$DONE` is a truthy value, the test is considered to have failed and the argument is displayed as the failure reason.

A common idiom when writing asynchronous tests is the following:

```js
var p = new Promise(function () { /* some test code */ });

p.then(function checkAssertions(arg) {
    if (!expected_condition) {
      $ERROR("failure message");
    }

}).then($DONE, $DONE);
```

Function `checkAssertions` implicitly returns `undefined` if the expected condition is observed.  The return value of function `checkAssertions` is then used to asynchronously invoke the first function of the final `then` call, resulting in a call to `$DONE(undefined)`, which signals a passing test.

If the expected condition is not observed, function `checkAssertions` throws a `Test262Error` via function $ERROR.  This is caught by the Promise and then used to asynchronously invoke the second function in the call -- which is also `$DONE` -- resulting in a call to `$DONE(error_object)`, which signals a failing test.

### Checking Exception Type and Message in Asynchronous Tests

This idiom can be extended to check for specific exception types or messages:

```js
p.then(function () {
    // some code that is expected to throw a TypeError

    return "Expected exception to be thrown";
}).then($DONE, function (e) {
   if (!e instanceof TypeError) {
      $ERROR("Expected TypeError but got " + e);
   }

   if (!/expected message/.test(e.message)) {
      $ERROR("Expected message to contain 'expected message' but found " + e.message);
   }

}).then($DONE, $DONE);

```

As above, exceptions that are thrown from a `then` clause are passed to a later `$DONE` function and reported asynchronously.
