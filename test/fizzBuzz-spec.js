var FizzBuzz = require('../src/FizzBuzz.js').FizzBuzz;

describe('FizzBuzz', function() {
  var fizzBuzz;
  var numbers;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
    numbers = fizzBuzz.getNumbers();
  });

  it("returns 99 elements", function() {
    expect(numbers.length).toBe(99);
  });

  it("the first element is 1", function() {
    expect(numbers[0]).toBe(1);
  });
  it("the second element is 2", function() {
    expect(numbers[1]).toBe(2);
  });
  it("all the values are Fizz, Buzz, FizzBuzz or a number", function() {
    var validNumbers = numbers.filter(function(n) {
      return "Fizz" === n || "Buzz" === n || "FizzBuzz" === n || !isNaN(n);
    });
    expect(validNumbers.length).toBe(99);
  });
  it("the third element is Fizz", function() {
    expect(numbers[2]).toBe("Fizz");
  });
  it("the fifth element is Buzz", function() {
    expect(numbers[4]).toBe("Buzz");
  });
  it("the sixth element is Fizz", function() {
    expect(numbers[5]).toBe("Fizz");
  });

});