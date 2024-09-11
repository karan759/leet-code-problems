// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined


function sumZero(arr) {
  if (!arr.length) return undefined;

  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex < highIndex) {
    const sum = arr[lowIndex] + arr[highIndex];

    if (sum > 0) {
      highIndex--;
    } else if (sum < 0) {
      lowIndex++;
    } else {
      return [arr[lowIndex], arr[highIndex]];
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
