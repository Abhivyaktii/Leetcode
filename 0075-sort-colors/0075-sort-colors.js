/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let numsLen = nums.length;
    for(let i = 0; i<numsLen; i++){
        if(nums[i]===0){
            [nums[left], nums[i]] = [nums[i], nums[left]]
            left++;
        }
        
    };
    
    let right = numsLen-1;
    for(let i= numsLen-1; i>=0;i--){
        if(nums[i]===2){
            [nums[right], nums[i]] = [nums[i], nums[right]]
            right--;
        }
        
    }
};