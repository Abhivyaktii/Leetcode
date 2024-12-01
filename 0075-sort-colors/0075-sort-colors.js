/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;               // Boundary for 0s
    let right = nums.length - 1; // Boundary for 2s
    let i = 0;                  // Current pointer

    while (i <= right) {
        if (nums[i] === 0) {
            // Swap nums[i] with nums[left]
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            // Swap nums[i] with nums[right]
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            // nums[i] === 1, just move forward
            i++;
        }
    }
}