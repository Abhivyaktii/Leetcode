/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    
    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        // Step 3: Use the two-pointer technique to find pairs that sum to -nums[i]
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Move both pointers and skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase the sum by moving the left pointer
            } else {
                right--; // Decrease the sum by moving the right pointer
            }
        }
    }
    
    return result;
};
