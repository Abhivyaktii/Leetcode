/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const setOfNums = new Set(nums);
    let lenthOfSubSeq = 0;

    for (let num of setOfNums) {
        // Only start counting from the beginning of a sequence
        if (!setOfNums.has(num - 1)) {
            let currentNum = num;
            let streak = 1;

            // Continue counting the sequence
            while (setOfNums.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            // Update the maximum length of the subsequence found
            lenthOfSubSeq = Math.max(lenthOfSubSeq, streak);
        }
    }

    return lenthOfSubSeq;
};

