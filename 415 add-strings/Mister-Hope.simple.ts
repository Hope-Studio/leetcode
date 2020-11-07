/*
 * Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Add Strings.
 *
 * Memory Usage: 40.2 MB, less than 7.14% of TypeScript online submissions for Add Strings.
 */

const addStrings = (num1: string, num2: string): string =>
  (BigInt(num1) + BigInt(num2)).toString();
