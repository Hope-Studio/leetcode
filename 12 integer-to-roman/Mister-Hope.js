/*
 * Runtime: 176 ms, faster than 33.68% of JavaScript online submissions for Integer to Roman.
 *
 * Memory Usage: 45.2 MB, less than 6.38% of JavaScript online submissions for Integer to Roman.
 */

const intToRoman = (num) => {
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
