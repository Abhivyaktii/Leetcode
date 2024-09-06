/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // Sort the array
    nums.sort((a, b) => a - b);

    let longestSequence = 1;
    let counter = 1;
    let previousNumber = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Skip duplicate numbers
        if (nums[i] === previousNumber) {
            continue;
        }

        // Check if the current number is consecutive to the previous one
        if (nums[i] === previousNumber + 1) {
            counter++;
        } else {
            // If it's not consecutive, update the longest sequence
            longestSequence = Math.max(longestSequence, counter);
            counter = 1;  // Reset counter for the new sequence
        }

        // Update the previous number to the current one
        previousNumber = nums[i];
    }

    // After the loop, check the last sequence
    longestSequence = Math.max(longestSequence, counter);

    return longestSequence;
};
