/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length == 0) return undefined;
    let largeNum = numbers.reduce(function(accum, currVal) {
        if (accum>currVal) return accum;
        else return currVal;
    }, -Infinity);
    return largeNum;
}

module.exports = findLargestElement;