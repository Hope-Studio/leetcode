/*
 * Runtime: 216 ms, faster than 77.06% of TypeScript online submissions for Palindrome Number.
 *
 * Memory Usage: 49.6 MB, less than 22.63% of TypeScript online submissions for Palindrome Number.
 */

const isPalindrome = (x: number): boolean => {
  let string = String(x);
  for (let i = 0; i < string.length / 2; i++)
    if (string[i] != string[string.length - i - 1]) return false;
  return true;
};
