var FizzBuzz = require('../src/FizzBuzz.js').FizzBuzz;

describe('FizzBuzz', function() {
  it("returns 99 elements", function() {
    var fizzBuzz = new FizzBuzz();
    var numbers = fizzBuzz.getNumbers();
    expect(numbers.length).toBe(99);
  });
});