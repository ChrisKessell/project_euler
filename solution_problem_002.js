var num1 = 1;
var num2 = 2;
var total = 0;

var sumOfEvenFibonacciNumber = function() {
  while(num1 < 4000000 && num2 < 4000000) {
    if(num1 % 2 === 0) {
      total += num1;
    }
    if(num2 % 2 === 0) {
      total += num2;
    }
    num1 += num2;
    num2 += num1;
  } 
  return total;
};

sumOfEvenFibonacciNumber();