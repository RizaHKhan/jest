const {
  sum,
  subtract,
  multiply,
  divide,
  addAllPrimeNumbers,
  check_prime,
  sumAllPrimes,
  evenDigitsOnly,
  allConsecutiveNums,
    properNounCorrection
} = require("./math.js");

describe("math.js", () => {
  it("should add two numbers", () => {
    const results = sum(1, 2);
    expect(results).toBe(3);
  });

  it("should subtract two numbers", () => {
    const results = subtract(1, 1);
    expect(results).toBe(0);
  });

  it("should multiply two items", () => {
    const results = multiply(2, 2);
    expect(results).toBe(4);
  });

  it("should divide two numbers", () => {
    const results = divide(2, 2);
    expect(results).toBe(1);
  });

  it("should sum up all prime numbers in an array", () => {
    const results = addAllPrimeNumbers(10);
    expect(results).toBe(17);
  });

  it("should sum up all prime numbers", () => {
    const results = sumAllPrimes(10);
    expect(results).toBe(17);
  });

  it("should return true if all the digits are event", () => {
    const nums = 248622;

    const results = evenDigitsOnly(nums);
    expect(results).toBe(true);
  });

  it("should return false if all the digits are event", () => {
    const nums = 248322;

    const results = evenDigitsOnly(nums);
    expect(results).toBe(false);
  });

  it("should returns the length of the numbers missing from the lowest to highest value in the array", () => {
    const array = [6, 2, 3, 9, 9, 10];
    const results = allConsecutiveNums(array);
    expect(results).toBe(4);
  });

  it('should return 1', () => {
    const array = [1, 3]
    const results = allConsecutiveNums(array)
    expect(results).toBe(1)
  })

    it('should return the work with proper capitalizatoin', () => {
        const str = 'pARIS'
        const results = properNounCorrection(str)
        expect(results).toBe('Paris')
    })
it('should return the work with proper capitalizatoin', () => {
        const str = 'RARIS'
        const results = properNounCorrection(str)
        expect(results).toBe('Raris')
    })
});
