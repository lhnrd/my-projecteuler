var numbers = [6,4];
var multiples = {};

numbers.sort(function (a,b) {
  return b - a;
});

function getNumberMultiples (number) {
  var _tmp = number;
  var div = 2;
  var mult = [];

  while(_tmp !== 1 && _tmp >= div) {
    if(_tmp % div === 0) {
      mult.push(div);
      _tmp = _tmp / div;

      while(_tmp % div === 0) {
        mult.push(div);
        _tmp = _tmp / div;
      }
    }
    div++;
  }
  return mult;
}

numbers.forEach(function (number) {
  multiples[number] = getNumberMultiples(number);
});
console.log(multiples);

var commonNr = [];
var tmpMultiple;

for(var nr in multiples) {
  tmpMultiple = multiples[nr].shift();
  var _tmp =
}
