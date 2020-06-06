let sum = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let addAllPrimeNumbers = (num) => {
  let primes = [];
  for (let x = 1; x <= num; x++) {
    if (check_prime(x)) {
      primes.push(x);
    }
  }
  return primes.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

let check_prime = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let y = 2; y < num; y++) {
      if (num % y === 0) {
        return false;
      }
    }
    return true;
  }
};

let sumAllPrimes = (num) => {
  let primesTotal = 0;

  for (let i = 2; i < num; i++) {
    for (let x = 2; x <= i; x++) {
      // This is at the end of the loop
      if (i === x) {
        primesTotal += i;
      }
      // This will break the loop before i gets to be x
      if (i % x === 0) {
        break;
      }
    }
  }

  return primesTotal;
};

let evenDigitsOnly = (nums) => {
  let myArray = nums.toString().split('')
  return myArray.every(item => parseInt(item) % 2 === 0)
}

let allConsecutiveNums = (nums) => {
  nums.sort((a, b) => a - b);
  let missingNums = [];
  for (let x = nums[0]; x <= nums[nums.length - 1]; x++) {
    if (nums.indexOf(x) < 0) {
      missingNums.push(x);
    }
  }

  return missingNums.length;
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  addAllPrimeNumbers,
  check_prime,
  sumAllPrimes,
  evenDigitsOnly,
  allConsecutiveNums,
};
