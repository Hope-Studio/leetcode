/**
 * Runtime: 84 ms, faster than 97.73% of JavaScript online submissions for Reverse Integer.
 *
 * Memory Usage: 40.4 MB, less than 19.67% of JavaScript online submissions for Reverse Integer.
 */

const reverse = (x) => {
  if (x > -2147483648 && x < 2147483648) {
    let y =
      x > 0
        ? Number(String(x).split("").reverse().join(""))
        : 0 -
          Number(
            String(0 - x)
              .split("")
              .reverse()
              .join("")
          );
    return y > -2147483648 && y < 2147483648 ? y : 0;
  }
  return 0;
};
