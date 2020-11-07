const twoSum = (nums: number[], target: number): number[] => {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    let j = arr[target - nums[i]];
    if (j !== undefined) return [j, i];
    arr[nums[i]] = i;
  }

  throw new Error("No solution");
};
