/* ⭐ Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 

Example 1:

Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output

The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached. ⭐ */

/* ⭐ Solution ⭐ */

var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((res) => {
          clearTimeout(timeout);
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(timeout);
          reject(err);
        });
    });
  };
};

let fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

let t = 150;
let inputs = [5];

const limited = timeLimit(fn, t);

console.log(limited(inputs));
