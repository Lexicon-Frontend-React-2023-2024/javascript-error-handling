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

"RangeError" is an error that occurs when you try to manipulate a value outside the permissible range. This typically happens when working with arrays or strings, and the index or length you're trying to use is not valid.

```js
// RangeError because the index 5 is out of bounds for the array. Although, javascript will try and avoid crashing so it will problably return undefined to you.
const arr = [1, 2, 3];
console.log(arr[5]);
```

[Back to top](#javascript-error-handling)

### Custom Error

You can also throw and catch custom errors using the `throw` statement.

```js
throw new Error("This is a custom error");
```

[Back to top](#javascript-error-handling)

## Error Object

In JavaScript, the `Error` object is a built-in object that provides information about runtime errors. When an error occurs, an `Error` object is created and thrown. This object contains properties such as `name` and `message` that provide information about the type and description of the error.

[Back to top](#javascript-error-handling)

### Properties of the Error Object

`name`: represents the name of the error. Common values include "Error", "SyntaxError", "TypeError", etc.

`message`: Contains a human-readable description of the error. Provides additional details about what went wrong.

[Back to top](#javascript-error-handling)

### Creating custom errors

You can also create and throw your own custom errors by extending the Error object. This allows you to define custom properties and behaviors for specific error types in your application.

```js
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "CustomError";
    this.errorCode = errorCode;
  }
}

const response = {statusCode = 500};

try {
  throw new CustomError("This is a custom error", statusCode )
} catch (error){
  console.log(error.name)
  console.log(error.message)
  console.log(error.errorCode)
}
```

[Back to top](#javascript-error-handling)

## Try-catch

The `try...catch` statement allows you to execute a block of code and catch any exceptions _(errors)_ that may occur during its execution. This helps prevent the entire program from crashing when an error occurs, allowing you to gracefully handle exceptional situations.

### Syntax

```js
try {
  // Code that might throw an exception.
} catch (error) {
  // Code to handle the exception
} finally {
  // Code that will be executed regardless of whether an exception occurred or not.
}
```

- The `try` block contains the code that may throw an exception.

- If an exception occurs in the `try` block, the control is transferred to the `catch` block.

- The `catch` block contains the code to handle the exception, and the error argument represents the exception _(error)_ object.

- The `finally` block (optional) contains code that will be executed regardless of whether an exception occurred or not.

[Back to top](#javascript-error-handling)

### Best practices

1. **Specific Error Types:**

Use specific error types (Error, SyntaxError, TypeError, etc.) based on the nature of the error.

2. **Avoid Generic Catches:**

Avoid catching generic exceptions unless necessary. Be specific about the errors you want to handle.

3. **Rethrowing Errors:**

You can rethrow caught errors using throw error; if you want the error to propagate up the call stack.

4. **Cleanup in Finally:**

Use the finally block for cleanup operations or releasing resources. This is optional.

5. **Logging:**

Log detailed information about errors for debugging purposes.
By using try...catch, you can make your JavaScript code more resilient and handle unexpected situations more gracefully. It's an essential tool for building reliable and robust applications.
