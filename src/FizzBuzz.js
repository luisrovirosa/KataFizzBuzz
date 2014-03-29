function FizzBuzz() {

}

FizzBuzz.prototype.getNumbers = function() {
  var numbers = [];
  for (var i = 1; i < 100; i++) {
    if (isFizzBuzz(i)) {
      numbers.push('FizzBuzz');
    } else if (isFizz(i)) {
      numbers.push('Fizz');
    } else if (isBuzz(i)) {
      numbers.push('Buzz');
    } else {
      numbers.push(i);
    }
  }
  numbers[14] = 'FizzBuzz';
  numbers[29] = 'FizzBuzz';
  return numbers;
};

var isFizzBuzz = function(number) {
  return isFizz(number) && isBuzz(number);
};

var isFizz = function(number) {
  return number % 3 === 0;
};

var isBuzz = function(number) {
  return number % 5 === 0;
};

module.exports.FizzBuzz = FizzBuzz;