/**
 * Runtime: 164 ms, faster than 75.00% of TypeScript online submissions for 3Sum.
 *
 *  Memory Usage: 49.3 MB, less than 5.26% of TypeScript online submissions for 3Sum.
 */

const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];

  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let big = i + 1;
    let small = nums.length - 1;
    let sum = 0 - nums[i];

    if (i >= 0 && nums[i] !== nums[i - 1])
      while (big < small)
        if (nums[big] + nums[small] < sum) big++;
        else if (nums[big] + nums[small] > sum) small--;
        else {
          result.push([nums[i], nums[big], nums[small]]);
          while (big < small && nums[big] === nums[big + 1]) big++;
          while (big < small && nums[small] === nums[small - 1]) small--;
          big++;
          small--;
        }
  }

  return result;
};
