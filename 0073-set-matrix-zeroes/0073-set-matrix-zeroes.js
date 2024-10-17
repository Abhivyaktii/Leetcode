/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix.length === 0) return;
    
    const zeroRows = new Set();
    const zeroCols = new Set();
    
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col]===0){
                zeroCols.add(col);
                zeroRows.add(row);
            }
        }
    };
    
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(zeroCols.has(col) || zeroRows.has(row)){
               matrix[row][col] = 0;
            }
        }
    };
    
    
};