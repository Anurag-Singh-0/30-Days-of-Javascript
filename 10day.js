/* 🟠  2666. Allow One Function Call

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.🟠 */

/* Solution 👇 */

let fn = (a, b, c) => a + b + c;

var once = function (fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
      return result;
    } else {
      return undefined;
    }
  };
};

const onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));

/* ✅ Real-World Example:
Imagine you have a "submit" button that should only work once to avoid double submissions. You’d want the submit function to run only once, even if the user clicks many times */
