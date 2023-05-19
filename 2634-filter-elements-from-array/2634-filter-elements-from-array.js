/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // return arr.map(item=> fn(item))
    const result = [];
    arr.forEach((item,index) => {
        if (fn(item, index)) result.push(item);
        // result.push(fn(item, index));
    });
    return result;
};