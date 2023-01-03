class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        StrsLength=len(strs)
        eachStrLength=len(strs[0])
        
        deleted=0
        
        for col in range (eachStrLength):
            for row in range (StrsLength-1):
                if strs[row][col]>strs[row+1][col]:
                    deleted+=1
                    break
        return deleted
                
        
        