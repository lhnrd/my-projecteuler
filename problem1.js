var limit = 1000, sum = 0;

for(var i = 0; i < limit; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
        sum += i;
    }
}
