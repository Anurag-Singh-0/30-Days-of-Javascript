/* ⭐ 2623. Memoize 
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.⭐*/

/* ⭐ Solution ⭐ */

/* ⭐ First Approach ⭐ */

// function memoize(fn) {
//   const cache = new Map();
//   let callCount = 0;

//   const memoizedFn = (...args) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) {
//       return cache.get(key);
//     } else {
//       const result = fn(...args);
//       cache.set(key, result);
//       callCount++;
//       return result;
//     }
//   };

//   memoizedFn.getCallCount = () => callCount;

//   return memoizedFn;
// }

// let fn = function (a, b) {
//   return a + b;
// };

// let memorizefn = memoize(fn);

// console.log(memorizefn(2, 3));
// console.log(memorizefn(2, 3));

// console.log(memorizefn.getCallCount());

/* ⭐ Second Approach ⭐ */

function memoize(fn) {
  let cache = {};
  let callCount = 0;
  const memoizedFn = function (...args) {
    let key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      // To check the key is exist in object or not, [1. use "in" operator], [2. use "hasOwnProperty(key) method"]
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      callCount++;
      return result;
    }
  };

  memoizedFn.getCountCall = () => callCount;
  return memoizedFn;
}

function fn(a, b) {
  return a + b;
}

let memorizefnRes = memoize(fn);

console.log(memorizefnRes(2, 3));

console.log(memorizefnRes.getCountCall());
