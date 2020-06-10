const {
  translatePigLatin,
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

  it("should return 1", () => {
    const array = [1, 3];
    const results = allConsecutiveNums(array);
    expect(results).toBe(1);
  });

  it("should return the work with proper capitalizatoin", () => {
    const str = "pARIS";
    const results = properNounCorrection(str);
    expect(results).toBe("Paris");
  });
  it("should return the work with proper capitalizatoin", () => {
    const str = "RARIS";
    const results = properNounCorrection(str);
    expect(results).toBe("Raris");
  });

  it("should add all numbers from the smallest to largest numbers", () => {
    const array = [1, 4];
    const results = sumAllNumbersInRange(array);
    expect(results).toBe(10);
  });

  it("should add all numbers from the smallest to largest numbers", () => {
    const array = [1, 2];
    const results = sumAllNumbersInRange(array);
    expect(results).toBe(3);
  });

  it("should add all numbers from the smallest to largest numbers", () => {
    const array = [5, 7];
    const results = sumAllNumbersInRange(array);
    expect(results).toBe(18);
  });

  it("should add all numbers from the smallest to largest numbers", () => {
    const array = [5, 10];
    const results = sumAllNumbersInRange(array);
    expect(results).toBe(45);
  });

  it("should add all numbers from the smallest to largest numbers", () => {
    const array = [10, 5];
    const results = sumAllNumbersInRange(array);
    expect(results).toBe(45);
  });

  it("compare two arrays and return a new array with any items found only in one of the two given arrays", () => {
    const array1 = [1, 2, 3, 5];
    const array2 = [1, 2, 3, 4, 5];
    const results = diffTwoArrays(array1, array2);
    expect(results).toStrictEqual([4]);
  });

  it("should remove all elements from the intial array that are of the same value as these arguements", () => {
    const results = seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3);
    expect(results).toStrictEqual([1, 1]);
  });

  it("should remove all elements from the intial array that are of the same value as these arguements", () => {
    const results = seekAndDestroy(["tree", "hamburger", 53], "tree", 53);
    expect(results).toStrictEqual(["hamburger"]);
  });

  it("should remove all elements from the intial array that are of the same value as these arguements", () => {
    const results = seekAndDestroy([3, 5, 1, 2, 2], 2, 3, 5);
    expect(results).toStrictEqual([1]);
  });

  it("should return an array of all objects that have matching name and value pairs", () => {
    const results = whatIsInAName(
      [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
      ],
      { last: "Capulet" }
    );
    expect(results).toStrictEqual([{ first: "Tybalt", last: "Capulet" }]);
  });

  it("should return an array of all objects that have matching name and value pairs", () => {
    const results = whatIsInAName(
      [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }],
      { apple: 1 }
    );
    expect(results).toStrictEqual([
      { apple: 1 },
      { apple: 1 },
      { apple: 1, bat: 2 },
    ]);
  });

  it("should return an array of all objects that have matching name and value pairs", () => {
    const results = whatIsInAName(
      [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
      { apple: 1, bat: 2 }
    );
    expect(results).toStrictEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ]);
  });

  it("should covert string to spinal case", () => {
    const results = spinalCase("This Is Spinal Tap");
    expect(results).toBe("this-is-spinal-tap");
  });

  it("should covert string to spinal case", () => {
    const results = spinalCase("The_Andy_Griffith_Show");
    expect(results).toBe("the-andy-griffith-show");
  });

  it("should covert string to spinal case", () => {
    const results = spinalCase("Teletubbies say Eh-oh");
    expect(results).toBe("teletubbies-say-eh-oh");
  });

  it("should covert string to spinal case", () => {
    const results = spinalCase("thisIsSpinalTap");
    expect(results).toBe("this-is-spinal-tap");
  });

  it("should covert string to spinal case", () => {
    const results = spinalCase("AllThe-small Things");
    expect(results).toBe("all-the-small-things");
  });

  it("should translate to pig latin", () => {
    const results = translatePigLatin("california");
    expect(results).toBe("aliforniacay");
  });
  it("should translate to pig latin", () => {
    const results = translatePigLatin("paragraphs");
    expect(results).toBe("aragraphspay");
  });
  it("should translate to pig latin", () => {
    const results = translatePigLatin("glove");
    expect(results).toBe("oveglay");
  });
  it("should translate to pig latin", () => {
    const results = translatePigLatin("eight");
    expect(results).toBe("eightway");
  });
});
