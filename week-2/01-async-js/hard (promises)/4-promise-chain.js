/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(t) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  let start = new Date().getTime();

  return wait(t1).then(() => wait(t2).then(() => wait(t3).then((response) => {
    return new Date().getTime() - start;
  })))
}

module.exports = calculateTime;
