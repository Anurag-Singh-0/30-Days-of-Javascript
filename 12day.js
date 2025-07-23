/* ⭐ 2723. Add Two Promises
 Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem. ⭐ */

/* ⭐ Solution ⭐ */

/* ⭐ First Approach ⭐ */

let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

var addTwoPromises = async function (promise1, promise2) {
  return promise1.resolve + promise2.resolve;
};

console.log(addTwoPromises(2, 5));
console.log(addTwoPromises(10, -12));

/* ⭐ Second Approach ⭐ */

/* 🎁 Bonus: Cleaner Version with .then()
If you don’t want to use async/await, you can also do: */

/* function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([val1, val2]) => val1 + val2);
}

addTwoPromises(promise1, promise2).then((result) => {
  console.log(result); // Output: 7
}); */
