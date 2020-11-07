const reverse = (x) => {
  const result =
    parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);

  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31)) return 0;

  return result;
};
