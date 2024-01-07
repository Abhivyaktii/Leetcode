/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
     if (num < 0) {
        return false;
    }

    // Reverse the number
    let reversed = 0;
    let original = num;

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    // Compare reversed with the original number
    return reversed === original;
};