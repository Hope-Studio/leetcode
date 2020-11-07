/*
 * Runtime: 124 ms, faster than 50.73% of TypeScript online submissions for Two Sum.
 *
 * Memory Usage: 48.7 MB, less than 5.74% of TypeScript online submissions for Two Sum.
 */

const twoSum = (nums: number[], target: number): number[] => {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    let j = arr[target - nums[i]];
    if (j !== undefined) return [j, i];
    arr[nums[i]] = i;
  }

  throw new Error("No solution");
};
