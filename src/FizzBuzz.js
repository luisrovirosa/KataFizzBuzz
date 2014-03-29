var Rule = require('./Rule.js').Rule;

function FizzBuzz() {
  this.rules = [
    new Rule(isFizzBuzz, 'FizzBuzz'),
    new Rule(isFizz, 'Fizz'),
    new Rule(isBuzz, 'Buzz')
  ];
}

FizzBuzz.prototype.getNumbers = function() {
  var numbers = [];
  for (var i = 1; i < 100; i++) {
    numbers.push(this.calculate(i));
  }

  return numbers;
};

FizzBuzz.prototype.calculate = function(number) {
  for (var i = 0; i < this.rules.length; i++) {
    var rule = this.rules[i];
    if (rule.check(number)) {
      return rule.getValue();
    }
  }
  return number;
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