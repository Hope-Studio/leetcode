/*
 * Runtime: 112 ms, faster than 48.98% of JavaScript online submissions for Two Sum.
 *
 * Memory Usage: 48.3 MB, less than 5.73% of JavaScript online submissions for Two Sum.
 */

const twoSum = (nums, target) => {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    let j = arr[target - nums[i]];
    if (j !== undefined) return [j, i];
    arr[nums[i]] = i;
  }

  throw new Error("No solution");
};
