function FizzBuzz() {

}

FizzBuzz.prototype.getNumbers = function() {
  var numbers = [];
  for (var i = 1; i < 100; i++) {
    numbers.push(calculate(i));
  }

  return numbers;
};

var calculate = function(number) {
  var response = number;
  if (isFizzBuzz(number)) {
    response = 'FizzBuzz';
  } else if (isFizz(number)) {
    response = 'Fizz';
  } else if (isBuzz(number)) {
    response = 'Buzz';
  }

  return response;
};

var isFizzBuzz = function(number) {
  return isFizz(number) && isBuzz(number);
};

var isFizz = function(number) {
  return isMultiple(number, 3) || contains(number, '3');
};

var isBuzz = function(number) {
  return isMultiple(number, 5) || contains(number, '5');
};

var isMultiple = function(number, multiple) {
  return 0 === number % multiple;
};

var contains = function(number, stringToCheck) {
  var stringNumber = new String(number);
  return -1 !== stringNumber.indexOf(stringToCheck);
};


module.exports.FizzBuzz = FizzBuzz;