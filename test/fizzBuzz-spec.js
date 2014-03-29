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
});