var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0;
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return number % 15 === 0;
};

Fizzbuzz.prototype.fizz = function(number) { 
  if(this.isDivisibleByThree(number) === true) { return "Fizz"; } 
};

Fizzbuzz.prototype.buzz = function(number) { 
  if(this.isDivisibleByFive(number) === true) { return "Buzz"; }
};

Fizzbuzz.prototype.fizzbuzz = function(number) { 
  if(this.isDivisibleByFifteen(number) === true) { return "FizzBuzz"; }
}