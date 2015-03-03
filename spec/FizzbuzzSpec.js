describe('Fizzbuzz', function() {
var fizzbuzz = new Fizzbuzz();

  describe('knows when a number', function() {

    it('is divisible by 3', function() {      
      
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);

    });

    it('is not divisible by 3', function() {

      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false)

    });

    it('is divisible by 5', function() {

      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)

    });

    it('is not divisible by 5', function() {

      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false)

    });

    it('is divisible by 15', function() {

      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)

    });

    it('is not divisible by 15', function() {

      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false)

    });

  });

  describe('The game', function() {

    it('should say "Fizz" if the number is divisible by 3', function() {

      expect(fizzbuzz.fizz(3)).toBe("Fizz")

    });

    it('should say "Buzz" if the number is divisible by 5', function() {

      expect(fizzbuzz.buzz(5)).toBe("Buzz")

    });

    it('should say "Fizzbuzz" if the number is divisible by 15', function() { 

      expect(fizzbuzz.fizzbuzz(15)).toBe("FizzBuzz")

    });

  });

});