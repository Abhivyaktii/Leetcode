/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function(arr, fn) {
    // return arr.map(item=> fn(item))
    // const result = [];
    // return arr.reduce((acc,item,index) => {
    //     if (fn(item, index)) acc.push(item);
    //     return acc;
    //     // result.push(fn(item, index));
    // }, []);
    
// };

// var filter = function(arr, fn) {
//     var ans = [];
//     for(var i = 0; i < arr.length; i++){
//         if(fn(arr[i],i))
//          ans.push(arr[i]);
//     }
//     return ans;
// };

var filter = function(arr, fn) {
    brr=[];
    j=0;
    for(i=0;i<arr.length;i++){
        if(fn(arr[i],i)!=false){
            brr[j]=arr[i];
            j++;
        }
    }
    return brr;
}