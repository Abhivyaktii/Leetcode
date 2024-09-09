/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequency = {};

    // Step 1: Count frequencies
    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Step 2: Convert frequency object to an array of [num, freq] pairs
    const frequencyArray = Object.entries(frequency);
    
    // Step 3: Sort the array by frequency in descending order
    frequencyArray.sort((a, b) => b[1] - a[1]);

    // Step 4: Extract the top k elements
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(parseInt(frequencyArray[i][0]));
    }

    return result;
};
