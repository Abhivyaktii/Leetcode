/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    
    for(let i = 0; i < rowLength; i++){
        let minNum = matrix[i][0];
        let maxNum = matrix[i][colLength - 1];
        
        if(target >= minNum && target <= maxNum){
            // Binary search within the row
            let left = 0;
            let right = colLength - 1;
            
            while(left <= right){
                let mid = Math.floor((left + right) / 2);
                if(matrix[i][mid] === target){
                    return true;
                } else if(matrix[i][mid] < target){
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    }
    return false;
};