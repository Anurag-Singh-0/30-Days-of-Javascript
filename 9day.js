/* 🟠  2703. Return Length of Arguments Passed

Write a function argumentsLength that returns the count of arguments passed to it.

Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1🟠 */

/* Solution 👇 */

// This is my solution, Where chatGPT is saying

/* What you're doing:
You define args = [5], which is an array with one element.

Then you pass this array as a single argument to argumentsLength.

Inside your function:

args becomes an array like: [[5]]

So args[0] is [5] — an array

args[0].length is 1, because [5] has one element

So this works accidentally, but it doesn't solve the actual question */

let args = [5];

var argumentsLength = function (...args) {
  return args.length; // So this is the right approach to solve this question
  //   return args[0].length;  // This is my approach to solve this question
};

let res = argumentsLength(args);
console.log(res);
