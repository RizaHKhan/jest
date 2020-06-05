let sum = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let addAllPrimeNumbers = (num) => {
  let primes = [2];
  for (x = 3; x <= num; x += 2) {
    primes.push(x);
  }

  for (i = 3; i <= Math.sqrt(num); i += 2) {
    for (k = 0; k < primes.length; k++) {
      if (primes[k] % i === 0 && primes[k] != i) {
        primes.splice(k, 1);
        k--;
      }
    }
  }
  return primes.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

module.exports = { sum, subtract, multiply, divide, addAllPrimeNumbers };
