/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let result = new Array(n).fill(0);
    let stack = [];
    
    for(let i=0;i<n;i++){
        while(stack.length > 0 && temperatures[i]> temperatures[stack[stack.length-1]]){
            const preViousIndex = stack.pop();
            result[preViousIndex] = i-preViousIndex;
        }
        stack.push(i);
    }
    return result
};