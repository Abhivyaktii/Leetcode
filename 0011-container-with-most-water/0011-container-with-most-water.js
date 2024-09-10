/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    len = height.length;
    let rightPointer = 0;
    let leftPointer = len-1;
    let maxArea = 0;
    while(rightPointer<leftPointer){
        console.log(rightPointer, leftPointer);
        if(height[rightPointer]<height[leftPointer]){
            maxArea = Math.max(height[rightPointer]*(leftPointer - rightPointer), maxArea);
            rightPointer++;
        } else {
            maxArea = Math.max(height[leftPointer]*(leftPointer - rightPointer), maxArea);
            leftPointer--;
        }
    }
    console.log(maxArea);
    return maxArea
};