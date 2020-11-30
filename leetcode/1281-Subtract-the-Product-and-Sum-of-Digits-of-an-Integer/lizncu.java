class Solution {
  public int subtractProductAndSum(int n) {
    int add = 0;
    int mul = 1;

    while (n != 0) {
      add += n % 10;
      mul *= n % 10;
      n = n / 10;
    }

    return (mul - add);
  }
}
