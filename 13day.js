/* ⭐ 2621. Sleep
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
Note that minor deviation from millis in the actual sleep duration is acceptable. ⭐ */

/* ⭐ Solution ⭐ */

async function sleep(millis) {
  return new Promise((res) => {
    setTimeout(() => {
      res(millis);
    }, millis);
  });
}

let millis = 100;

sleep(millis).then((data) => {
  console.log(data);
});
