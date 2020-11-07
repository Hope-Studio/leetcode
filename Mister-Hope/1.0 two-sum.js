const twoSum = (nums, target) => {
  let i = 0;
  let { length } = nums;

  while (i < length) {
    let j = i + 1;
    while (j < length) {
      if (nums[i] + nums[j] === target) return [i, j];
      j++;
    }
    i++;
  }
};
