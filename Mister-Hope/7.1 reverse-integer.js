const reverse = (x) => {
  if (x < -2147483648 || x > 2147483647) return 0;
  let ans = 0;
  while (x) {
    let temp = ans * 10 + (x % 10);
    if (parseInt(temp / 10) != ans) return 0;
    ans = temp;
    x = parseInt(x / 10);
  }
  if (ans < -2147483648 || ans > 2147483647) return 0;

  return ans;
};
