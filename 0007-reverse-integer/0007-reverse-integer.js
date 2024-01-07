/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(number) {
     const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    // Convert the number to a string
    let strNumber = String(Math.abs(number));

    // Manually reverse the string
    let reversedStr = '';
    for (let i = strNumber.length - 1; i >= 0; i--) {
        reversedStr += strNumber[i];
    }

    // Convert the reversed string back to a number, add the sign, and check for overflow
    let reversedNumber = (number < 0 ? -1 : 1) * parseInt(reversedStr, 10);

    // Check for integer overflow
    if (reversedNumber > INT_MAX || reversedNumber < INT_MIN) {
        return 0;
    }

    return reversedNumber;
};