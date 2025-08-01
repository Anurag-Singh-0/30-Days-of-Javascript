/* 🟠 Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". 🟠 */

/* Solution 👇 */

function expect(val) {
  function toBe(anotherVal) {
    if (val === anotherVal) {
      return true;
    } else {
      return "Not equal";
    }
  }

  function notToBe(anotherVal) {
    if (val !== anotherVal) {
      return true;
    } else {
      return "Equal";
    }
  }

  return { toBe, notToBe };
}

let res = expect(10).toBe(10);
console.log(res);