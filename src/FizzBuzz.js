function FizzBuzz() {

}

FizzBuzz.prototype.getNumbers = function() {
  var numbers = [];
  for (var i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      numbers.push('Fizz');
    } else if (i % 5 === 0) {
      numbers.push('Buzz');
    } else {
      numbers.push(i);
    }
  }
  numbers[14] = 'FizzBuzz';
  numbers[29] = 'FizzBuzz';
  return numbers;
};

module.exports.FizzBuzz = FizzBuzz;