/* 🟠  Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it 🟠 */

/* Solution 👇 */

let createCounter = (init) => {
  let count = init;

  function increment() {
    count = count + 1;
    return count;
  }

  function decrement() {
    count = count - 1;
    return count;
  }

  function reset() {
    count = init;
    return count;
  }

  return { increment, decrement, reset };
};

let res = createCounter(10);

console.log(res.increment());
console.log(res.reset());
console.log(res.decrement());

// console.log(createCounter(10).increment());
// console.log(createCounter(10).decrement());
// console.log(createCounter(10).reset());

