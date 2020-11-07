/*
 * Runtime: 112 ms, faster than 13.44% of JavaScript online submissions for Reverse Integer.
 *
 * Memory Usage: 40.1 MB, less than 19.67% of JavaScript online submissions for Reverse Integer.
 */

const reverse = (x) => {
  const result =
    parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31)) return 0;

  return result;
};
