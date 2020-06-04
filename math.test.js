const { sum, subtract, multiply, divide } = require("./math.js");

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
});
