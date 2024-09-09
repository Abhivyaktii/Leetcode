/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    const result = new Array(len);

    result[0] = 1;
    for(let i=1; i<len;i++){
        //all the lefts
        result[i] = result[i-1]*nums[i-1];
    }
    let suffixProduct = 1;
    for(let j=len-1; j>=0;j--){
        //all the rights
        result[j] *= suffixProduct;
        suffixProduct *= nums[j];  
    }
    return result
};