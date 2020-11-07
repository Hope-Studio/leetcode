var plusOne = (digits) => {
  let x = digits.length,
    num;
  do {
    x--;
    num = digits[x];
  } while (num === 9);
  digits.fill(0, x + 1);
  x >= 0 ? (digits[x] = num + 1) : digits.unshift(1);
  return digits;
};
