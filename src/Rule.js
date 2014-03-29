function Rule(method, value) {
  this.method = method;
  this.value = value;
}

Rule.prototype.check = function(number) {
  return this.method(number);
};

Rule.prototype.getValue = function() {
  return this.value;
};

module.exports.Rule = Rule;


