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

function seekAndDestroy() {
  let argsArray = [];
  let arr = [];
  for (let x = 1; x < arguments.length; x++) {
    argsArray.push(arguments[x]);
  }

  arguments[0].forEach((item) => {
    if (!argsArray.includes(item)) {
      arr.push(item);
    }
  });

  return arr;
}

function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);

  return collection.filter((obj) => {
    for (let i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
  });
}

let spinalCase = (str) => {
  return str.replace(/([A-Z])/g, ' $1')
    .replace(/[^A-Za-z0-9]/g, ' ')
    .replace(/\s{1,}/g,'-')
    .replace(/^\-|[\-]$/g, '')
    .toLowerCase()
};

module.exports = {
  spinalCase,
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
  seekAndDestroy,
  whatIsInAName,
};
