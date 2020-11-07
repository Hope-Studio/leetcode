/*
 * Runtime: 84 ms, faster than 82.80% of JavaScript online submissions for Add Binary.
 *
 * Memory Usage: 38.8 MB, less than 6.01% of JavaScript online submissions for Add Binary.
 */

const addBinary = (a, b) => (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
