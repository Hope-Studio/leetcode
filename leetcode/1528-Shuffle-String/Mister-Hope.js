/*
 * Runtime: 84 ms, faster than 87.24% of JavaScript online submissions for Shuffle String.
 *
 * Memory Usage: 40.3 MB, less than 7.04% of JavaScript online submissions for Shuffle String.
 */
const restoreString = (s, indices) => {
  const result = [];

  for (let i = 0; i < indices.length; i++) result[indices[i]] = s.charAt(i);

  return result.join("");
};
