function FizzBuzz() {

}

FizzBuzz.prototype.getNumbers = function() {
  var numbers = [];
  for (var i = 1; i < 100; i++) {
    numbers.push(i);
  }
  numbers[2] = 'Fizz';
  numbers[4] = 'Buzz';
  return numbers;
};

module.exports.FizzBuzz = FizzBuzz;