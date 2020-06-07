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
  let myArray = nums.toString().split("");
  return myArray.every((item) => parseInt(item) % 2 === 0);
};

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

let properNounCorrection = (str) => {
  const newStr = str.toLowerCase().split("");
  let newWord = "";
  for (let x = 0; x < newStr.length; x++) {
    if (x === 0) {
      newStr[x] = newStr[x].toUpperCase();
    }

    newWord = newWord.concat(newStr[x]);
  }

  return newWord;
};

let sumAllNumbersInRange = (arr) => {
  let sum = 0;
  const newArray = arr.sort((a, b) => a - b);
  for (let x = newArray[0]; x <= newArray[newArray.length - 1]; x++) {
    sum += x;
  }

  return sum;
};

let diffTwoArrays = (arr1, arr2) => {
  let newArray = [];

  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      newArray.push(item);
    }
  });

  arr2.forEach((item) => {
    if (!arr1.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

console.log(diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5 ]));

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
  properNounCorrection,
  sumAllNumbersInRange,
  diffTwoArrays,
};
