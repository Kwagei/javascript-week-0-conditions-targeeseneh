


function gcd(num1, num2) {
  let divisor = 2;
  let greatestDivisor = 1;

  if (num1 < 2 || num2 < 2) {
    return 1;
  }

  while (num1 >= divisor && num2 >= divisor) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(gcd(12, 18));
Output: 6




function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

function primeFactors(num) {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      while (num % i === 0) {
        factors.push(i);
        num /= i;
      }
    }
  }
  return factors;
}

console.log(primeFactors(84).slice(0, 12)); 
Output: [2, 2, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7]





function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); 
Output: true





function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

console.log(factorial(5));
 Output: 120




function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FIZZBUZZ";
  } else if (num % 3 === 0) {
    return "FIZZ";
  } else if (num % 5 === 0) {
    return "BUZZ";
  } else {
    return num;
  }
}

console.log(fizzBuzz(15)); 
Output: FIZZBUZZ