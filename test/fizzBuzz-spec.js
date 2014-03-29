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
  it("the 10th element is Buzz", function() {
    expect(numbers[9]).toBe("Buzz");
  });
  it("the 15th element is FizzBuzz", function() {
    expect(numbers[14]).toBe("FizzBuzz");
  });
  it("the 30th element is FizzBuzz", function() {
    expect(numbers[29]).toBe('FizzBuzz');
  });
  it("the 13 element is Fizz because contains a 3", function() {
    expect(numbers[12]).toBe('Fizz');
  });
  it("the 52 is Buzz because contains a 5", function() {
    expect(numbers[51]).toBe('Buzz');
  });
  it("the 53 is FizzBuzz because contains a 3 and 5", function() {
    expect(numbers[52]).toBe('FizzBuzz');
  });
});