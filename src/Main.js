var FizzBuzz = require('./FizzBuzz.js').FizzBuzz;

function Main() {
  var fizzBuzz = new FizzBuzz();
  this.numbers = fizzBuzz.getNumbers();
}


Main.prototype.setColumns = function(columns) {
  this.columns = columns || 1;
  this.iterations = Math.ceil(this.numbers.length / this.columns);
};

Main.prototype.getNumberToPrint = function(position) {
  if (this.numbers.length <= position) {
    return '';
  }
  var number = '      ' + (position + 1) + ': ';
  var response = '        ' + this.numbers[position] + "\t\t";
  return number.slice(-4) + response.slice(-10);
};

Main.prototype.getLineToPrint = function(iteration) {
  var line = '';
  for (var j = 0; j < this.columns; j++) {
    var element = iteration + j * this.iterations;
    line += this.getNumberToPrint(element);
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
main.run(5);
