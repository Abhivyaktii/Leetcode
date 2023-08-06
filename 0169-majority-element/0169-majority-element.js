/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const elementCount = {};

  // Count the occurrences of each element in the array
  for (const num of nums) {
    if (elementCount[num] === undefined) {
      elementCount[num] = 1;
    } else {
      elementCount[num]++;
    }
  }

  const n = nums.length;

  // Find the majority element by checking the count in the object
  for (const num in elementCount) {
    if (elementCount[num] > n / 2) {
      return parseInt(num, 10); // Convert the key back to a number before returning
    }
  }
};