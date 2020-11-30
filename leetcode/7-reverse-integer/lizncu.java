class Solution {
  public int reverse(int x) {
    long n = 0;

    if (x < 0) {
      x = -x;
      while (x != 0) {
        n = x % 10 + n * 10;
        x = x / 10;
      }
      n = -n;
    } else if (x > 0) {
      while (x != 0) {
        n = x % 10 + n * 10;
        x = x / 10;
      }
    } else {
      n = x;
    }
    if (n > Integer.MAX_VALUE || n < Integer.MIN_VALUE) {
      return 0;
    } else {
      return (int) n;
    }
  }
}
