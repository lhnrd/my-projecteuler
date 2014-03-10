function decomposition(arr, div, number) {
    if(div <= number) {
        if(number % div === 0) {
            number = number / div;
            arr.push(div);

            return decomposition(arr, div, number);
        }
    } else {
        return arr;
    }
    return decomposition(arr, div+1, number);
}

var result = decomposition([], 2, 600851475143);
var max = Math.max.apply(Math, result);
