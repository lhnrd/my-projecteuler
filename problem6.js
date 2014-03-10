var sumOfSquares = squareOfSum = 0;
(function(numbers) {
    for(var i =  1, len = numbers; i <= len; i++) {
        sumOfSquares += Math.pow(i, 2);
        squareOfSum += i;
    }
    squareOfSum = Math.pow(squareOfSum, 2);
    alert(squareOfSum - sumOfSquares);
})(100);
