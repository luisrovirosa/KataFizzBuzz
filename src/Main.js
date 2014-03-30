var FizzBuzz = require('./FizzBuzz.js').FizzBuzz;

function Main() {
  var fizzBuzz = new FizzBuzz();
  this.numbers = fizzBuzz.getNumbers();
}
;

Main.prototype.setColumns = function(columns) {
  this.columns = columns || this.columns
  this.iterations = this.numbers.length / this.columns;

}

var getNumberToPrint = function(value) {
  var response = '        ' + value + "\t";
  return response.slice(-9);
};

Main.prototype.getLineToPrint = function(iteration) {
  var line = '';
  for (var j = 0; j < this.columns; j++) {
    line += getNumberToPrint(this.numbers[iteration + j * this.iterations]);
  }
  return line;
};

Main.prototype.run = function(columns) {
  this.setColumns(columns);
  for (var i = 0; i < this.iterations; i++) {
    console.log(this.getLineToPrint(i));
  }
};


var main = new Main();
main.run(3);
