/**
 * Runtime: 160 ms, faster than 80.43% of JavaScript online submissions for Roman to Integer.
 *
 * Memory Usage: 43.6 MB, less than 5.78% of JavaScript online submissions for Roman to Integer.
 */

const romanToInt = (s) => {
  let result = 0,
    map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (let i = s.length - 1; i >= 0; i--) {
    let val = map[s.charAt(i)];
    if (i < s.length - 1 && val < map[s.charAt(i + 1)]) val = -val;
    result += val;
  }
  return result;
};
