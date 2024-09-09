var merge = function(nums1, m, nums2, n) {
    let num1Counter = m - 1;
    let num2Counter = n - 1;
    let numCounter = m + n - 1;

    // Merge nums1 and nums2 in reverse order
    while (num1Counter >= 0 && num2Counter >= 0) {
        if (nums1[num1Counter] < nums2[num2Counter]) {
            nums1[numCounter] = nums2[num2Counter];
            num2Counter--;  // Decrement only if nums2 element is used
        } else {
            nums1[numCounter] = nums1[num1Counter];
            num1Counter--;  // Decrement only if nums1 element is used
        }
        numCounter--;
    }

    // If there are remaining elements in nums2, copy them over
    while (num2Counter >= 0) {
        nums1[numCounter] = nums2[num2Counter];
        numCounter--;
        num2Counter--;
    }
};
