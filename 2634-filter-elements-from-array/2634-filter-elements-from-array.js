/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // return arr.map(item=> fn(item))
    // const result = [];
    return arr.reduce((acc,item,index) => {
        if (fn(item, index)) acc.push(item);
        return acc;
        // result.push(fn(item, index));
    }, []);
};