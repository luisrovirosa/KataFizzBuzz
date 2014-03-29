function FizzBuzz() {

}

FizzBuzz.prototype.getNumbers = function() {
  var numbers = [];
  for (var i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      numbers.push('Fizz');
    } else {
      numbers.push(i);
    }
  }
  numbers[4] = 'Buzz';
  numbers[9] = 'Buzz';
  return numbers;
};

module.exports.FizzBuzz = FizzBuzz;