var findGCD = function(nums) {
    const sortedNums = nums.slice().sort((a, b) => a - b); // Use slice to create a new array and sort numerically
    let minNum = sortedNums[0];
    let maxNum = sortedNums[nums.length - 1];

    while (minNum !== 0) { // Change the condition to check if minNum is not 0
        let temp = minNum;
        minNum = maxNum % minNum;
        maxNum = temp;
    }

    return maxNum; // Return maxNum, which now contains the GCD
};
