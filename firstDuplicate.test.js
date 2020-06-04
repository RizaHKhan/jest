const firstDuplicate = require("./firstDuplicate.js");

describe("firstDuplicate()", () => {
  it("returns the first duplicate value", () => {
    const nums = [2, 1, 3, 4, 3, 2];
    const result = firstDuplicate(nums);
    console.log("result 1:", result);
    expect(result).toBe(3);
  });
});
