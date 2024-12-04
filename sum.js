function twoSum(nums, target) {
  const temp = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (temp[target - num] !== undefined) {
      return [temp[target - num], index];
    }
    temp[num] = index;
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
