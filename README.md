# Javascript Error Handling

<details>
<summary>Table of content</summary>

- [Bascis of Error handling](#bascis-of-error-handling)
- [Syntax Errors](#syntax-errors)
- [Runtime Errors](#runtime-errors)
  - [Reference Error](#reference-error)
  - [Type Error](#type-error)
  - [Range Error](#range-error)
  - [Custom Error](#custom-error)
- [Error Object](#error-object)
  - [Properties of the Error Object](#properties-of-the-error-object)
  - [Creating custom errors](#creating-custom-errors)
- [Try-catch](#try-catch)
  - [Syntax](#syntax)
  - [Best practices](#best-practices)

</details>

## Bascis of Error handling

Error handling in JavaScript involves dealing with different types of errors that can occur during the execution of a program, ensuring that your code remains robust. The `try...catch` statement is one of the primary mechanisms for handling errors in JavaScript. These errors can be broadly categorized into two main types: syntax errors and runtime errors.

## Syntax Errors

Syntax errors occur when there is a mistake in the structure of your code. These errors are detected by the JavaScript interpreter before the code is executed. They often result from typos, missing or misplaced punctuation, or incorrect language constructs. Examples include missing parentheses, semicolons, or misspelled keywords.

```js
// SyntaxError, missing closing parenthesis
console.log("Hello world;
```

## Runtime Errors

Runtime errors, also known as exceptions, occur during the execution of your code. They can be caused by various factors such as invalid user input, unexpected conditions, or external dependencies. Runtime errors can further be categorized into different types based on their nature.

[Back to top](#javascript-error-handling)

### Reference Error

This occurs when you try to use a variable or function that is not defined.

```js
// ReferenceError: nonExistingVariable is not defined
console.log(nonExistingVariable);

// ReferenceError: Cannot access 'greeting' before initialization
greeting();
const greeting = () => console.log("Hello there!");
```

[Back to top](#javascript-error-handling)

### Type Errorr

This occurs when a value is not of the expected type.

```js
function createSubArrayOfArray(arr) {
  const slicedArr = arr.slice(3);
  console.log(slicedArr);
}
// TypeError: arr.slice is not a function at createSubstringOfArray.
createSubArrayOfArray(1); // Slice method don't exist on numbers.

// Will work
createSubArrayOfArray([1, 2, 3, 4, 5]);

// TypeError: Cannot read properties of null (reading 'toUpperCase')
let x = null;
console.log(x.toUpperCase());
```

[Back to top](#javascript-error-handling)

### Range Error

### Custom Error

## Error Object

### Properties of the Error Object

### Creating custom errors

## Try-catch

### Best practices
