/* 🟠 Question : Write a function createHelloWorld. It should return a new function that always returns "Hello World" 🟠 */

/* Solution 👇 */

function createHelloWorld() {
    return function(){
        return "Hello World"
    }
}

let res = createHelloWorld();
console.log(res);