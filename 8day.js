/* 🟠 Question :2629. Function Composition

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output. 🟠 */

/* Solution 👇 */

/* Solving this question using reduceRight() method */
// reduceRight is a javascript method that goes from right to left over the array
const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
// const x = 4;

// var compose = function (functions) {
//     if (functions.length === 0) {
//         return function (x) {
//             return x;
//     };
//   }

//   return function (x) {
//     return functions.reduceRight((acc, fn) => fn(acc), x);
//   };
// };

// const composedFn = compose(functions);
// console.log(composedFn(x));

/* Solving this same question using for loop */

var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return function (x) {
    let result = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

const composedFn = compose(functions);
console.log(composedFn(4));



/* 🟠 This is all about, what is composition function and identity function🟠 */
// https://chatgpt.com/share/687bfa7a-13f4-800d-b946-a25dd875aa74

/* Composition function */

// This will happen without composition
// const double = (x) => x * 2;
// const square = (x) => x * x;

// let res = square(double(3));
// console.log(res);

// Now, with Composition
// const compose = (f, g) => (x) => f(g(x));

// const res = compose(square, double);

// console.log(res(3));
