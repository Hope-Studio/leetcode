/*
 * Runtime: 168 ms, faster than 53.26% of JavaScript online submissions for Integer to Roman.
 *
 * Memory Usage: 45.5 MB, less than 6.38% of JavaScript online submissions for Integer to Roman.
 */

const intToRoman = (num) => {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const val1 = num % 1000;
  const val2 = val1 % 100;
  const val3 = val2 % 10;
  return (
    thousands[(num - val1) / 1000] +
    hundreds[(val1 - val2) / 100] +
    tens[(val2 - val3) / 10] +
    units[val3 % 10]
  );
};
