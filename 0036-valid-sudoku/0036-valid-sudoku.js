/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
    
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      
      if (value === '.') continue;

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(value) || cols[j].has(value) || boxes[boxIndex].has(value)) {
        return false;
      }

      rows[i].add(value);
      cols[j].add(value);
      boxes[boxIndex].add(value);
    }
  }

  return true;
};