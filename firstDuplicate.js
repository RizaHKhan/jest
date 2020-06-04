function firstDuplicate(nums) {
  let newArray = [];

  for (let x = 0; x < nums.length; x++) {
    if (newArray.hasOwnProperty(nums[x])) {
      return nums[x];
    }

    newArray.push(nums[x]);
  }

  return -1;
}

module.exports = firstDuplicate;
