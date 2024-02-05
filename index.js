// ########## SyntaxError ##########
// console.log("Hello world";

// ########## ReferenceError ##########
// console.log(nonExistingVariable);

// greeting();
// const greeting = () => console.log("Hello there!");

// ########## TypeError ##########

// function createSubstringOfArray(arr) {
//   const slicedArr = arr.slice(3);
//   console.log(slicedArr);
// }

// createSubstringOfArray(1);

// createSubstringOfArray([1, 2, 3, 4, 5]);

// let x = null;
// console.log(x.toUpperCase());

// ########## RangeError ##########

// RangeError because the index 5 is out of bounds for the array. Although, javascript will try and avoid crashing so it will problably return undefined to you.
// const arr = [1, 2, 3];
// console.log(arr[5]);

// throw new RangeError("Error");

// ########## Custom Error ##########

// throw new Error("This is a custom error");

// ########## Create Custom Error ##########

class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "CustomError";
    this.errorCode = errorCode;
  }
}

const response = { statusCode: 404 };

try {
  throw new CustomError("This is a custom error", response.statusCode);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.errorCode);
}
