/*
 * Runtime: 88 ms, faster than 98.12% of TypeScript online submissions for Reverse Integer.
 *
 * Memory Usage: 40.3 MB, less than 34.59% of TypeScript online submissions for Reverse Integer.
 */

const reverse = (x: number): number => {
  const result =
    parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31)) return 0;

  return result;
};
