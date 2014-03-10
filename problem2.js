var limit = 4000000;

function recfib(n) {
    return n < 2 ? n : recfib(n-1) + recfib(n-2);
}

function limitfib(limit) {
    var one = 0, two = 1;
    var sum = 0;
    var num = 0;

    while(num < limit) {
        num = one + two;
        one = two;
        two = num;

        if(num % 2 == 0 && num < limit)
            sum += num;
    }

    return sum;
}

limitfib(4000000);
