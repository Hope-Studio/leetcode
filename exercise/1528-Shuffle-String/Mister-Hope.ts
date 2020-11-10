/*
 * Runtime: 92 ms, faster than 72.15% of TypeScript online submissions for Shuffle String.
 *
 * Memory Usage: 40.4 MB, less than 35.44% of TypeScript online submissions for Shuffle String.
 */
const restoreString = (s: string, indices: number[]): string => {
  const result: string[] = [];

  for (let i = 0; i < indices.length; i++) result[indices[i]] = s.charAt(i);

  return result.join("");
};
