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
