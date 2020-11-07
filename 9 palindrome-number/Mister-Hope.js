/*
 * Runtime: 236 ms, faster than 30.44% of JavaScript online submissions for Palindrome Number.
 *
 * Memory Usage: 47.3 MB, less than 5.10% of JavaScript online submissions for Palindrome Number.
 */

const isPalindrome = (x) => {
  let string = String(x);
  for (let i = 0; i < string.length / 2; i++)
    if (string[i] != string[string.length - i - 1]) return false;
  return true;
};
