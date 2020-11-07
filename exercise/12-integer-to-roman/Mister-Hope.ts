/*
 * Runtime: 160 ms, faster than 77.17% of TypeScript online submissions for Integer to Roman.
 *
 * Memory Usage: 46.6 MB, less than 19.57% of TypeScript online submissions for Integer to Roman.
 */

const intToRoman = (num: number): string => {
  const numerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const weights = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = "";

  for (let i = 0; i < weights.length && num !== 0; i++) {
    for (let j = 1; j <= num / weights[i]; j++) result += numerals[i];

    num %= weights[i];
  }

  return result;
};
