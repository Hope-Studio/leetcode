/*
 * Runtime: 96 ms, faster than 95.45% of TypeScript online submissions for Multiply Strings.
 *
 * Memory Usage: 40.3 MB, less than 9.09% of TypeScript online submissions for Multiply Strings.
 */

const multiply = (num1: string, num2: string): string =>
  (BigInt(num1) * BigInt(num2)).toString();
