/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = new Map();
    for(let num of nums2){
        while(stack.length > 0 && num > stack[stack.length - 1]){
            let smallerNumber = stack.pop();
            map.set(smallerNumber, num);    
        }
        stack.push(num)
    }
    while(stack.length){
        lastNum = stack.pop();
        map.set(lastNum, -1);
    }
    let result = nums1.map(num => map.get(num));
    return result;
};