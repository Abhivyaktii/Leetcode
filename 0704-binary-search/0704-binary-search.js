/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    let left = 0;
    let right = n-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            return mid;
        }
        if(nums[mid]<target){
            left = mid + 1;
        }
        if(nums[mid]>target){
            right = mid - 1;
        }
    }
    return -1
};