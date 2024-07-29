/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext(number) {
    let sum = 0;
    while (number > 0) {
      let digit = number % 10;
      sum += digit * digit;
      number = Math.floor(number / 10);
    }
    return sum;
  }

  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
};