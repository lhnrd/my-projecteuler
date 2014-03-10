var largestPalindrom = (function() {
  function isPalindromic(number) {
    var str = number.toString();
    var reverse = str.split('').reverse().join('');

    if (str === reverse) {
      return true;
    }
    return false;
  }

  function findLargestPalindrom() {
    var i, j, largest = 0;
    for (i = 999; i > 100; i--) {
      for (j = 999; j > 100; j--) {
        var mult = i * j;
        if (isPalindromic(mult) && mult > largest) {
          largest = mult;
        }
      }
    }
    return largest;
  }

  return findLargestPalindrom();
})();

console.log(largestPalindrom);
