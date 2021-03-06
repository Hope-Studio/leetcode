/*
 * Runtime: 76 ms, faster than 92.50% of TypeScript online submissions for Plus One.
 *
 * Memory Usage: 39.2 MB, less than 15.00% of TypeScript online submissions for Plus One.
 */

const plusOne = (digits: number[]): number[] => {
  let x = digits.length,
    num;
  do {
    x--;
    num = digits[x];
  } while (num === 9);
  digits.fill(0, x + 1);
  x >= 0 ? (digits[x] = num + 1) : digits.unshift(1);
  return digits;
};
