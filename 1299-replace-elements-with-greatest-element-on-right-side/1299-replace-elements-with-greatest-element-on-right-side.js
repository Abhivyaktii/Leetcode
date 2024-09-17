/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const n = arr.length;
    const resultArray = new Array(n).fill(0);
    
    resultArray[n - 1] = -1;
    
    let maxRight = arr[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        resultArray[i] = maxRight;
        if (arr[i] > maxRight) {
            maxRight = arr[i];
        }
    }

    return resultArray;
};
