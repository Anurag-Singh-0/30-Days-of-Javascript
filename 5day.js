/* 🟠  Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method. 🟠 */

/* Solution 👇 */

var map = function (arr, fn) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};

let arr = [1, 2, 3];
let fn = (arr, idx) => arr + idx;

console.log(map(arr, fn));
