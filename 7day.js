/*🟠 2626. Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method 🟠*/

/* Solution 👇 */

let = nums = [1, 2, 3, 4];

let = fn = function sum(accum, curr) {
  return accum + curr;
};

let init = 0;

var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
};

console.log(reduce(nums, fn, init));

/*__________________________________________________________________________*/

// Example 1: Count Letters in a Word

// let word = "banana";

// let count = word.split("").reduce((acc, char) => {
//   acc[char] = (acc[char] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);

/*__________________________________________________________________________*/

// Example 2: Convert Array to Object

// let users = [
//   { id: 1, name: "Anuag" },
//   { id: 2, name: "Jinx" },
// ];

// let res = users.reduce((acc, user) => {
//   acc[user.id] = user.name;
//   return acc;
// }, {});

// console.log(res);

/*__________________________________________________________________________*/

//Scenario 1: Use reduce to calculate total amount after discount applied on total amount of the value like grand total 50% Discount on Grand Total

// const prices = [100, 200, 300];
// const discount = 50;

// let discountPrice = prices.reduce((acc, price) => {
//   return acc + price * (discount / 100);
// }, 0);
// console.log(discountPrice);

//Scenario 2: Use reduce to calculate total amount after discount applied on "each element" Flat ₹50 Discount on Each Item

// let discountPrice = prices.reduce((acc, price) => {
//   return acc + (price - discount);
// }, 0);

// console.log(discountPrice);

/*__________________________________________________________________________*/
