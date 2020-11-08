/*
 * Runtime: 76 ms, faster than 74.71% of JavaScript online submissions for Plus One.
 *
 * Memory Usage: 38.9 MB, less than 51.87% of JavaScript online submissions for Plus One.
 */

var plusOne = (digits) => {
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
