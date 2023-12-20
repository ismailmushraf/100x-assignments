/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, t * 1000);
  })
}

async function calculateTime(t1, t2, t3) {
  let starttime = new Date().getTime();
  await Promise.all([wait(t1), wait(t2), wait(t3)]);
  let endtime = new Date().getTime();
  return endtime - starttime; 
}

module.exports = calculateTime;
