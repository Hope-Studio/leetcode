/**
 * Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Add Binary.
 *
 * Memory Usage: 40.3 MB, less than 6.78% of TypeScript online submissions for Add Binary.
 */

const addBinary = (a: string, b: string): string =>
  (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
