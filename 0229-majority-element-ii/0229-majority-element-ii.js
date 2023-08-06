/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const elementCount = {}
    
    for (const num of nums){
        if(!elementCount[num]){
            elementCount[num]=1
        }else{
            elementCount[num]+=1
        }
    }
    
    const len = nums.length
    const outputArray = []
    for (const num in  elementCount){
        if(elementCount[num]>len/3){
            outputArray.push(parseInt(num,10))
        }
    }
    return outputArray
};