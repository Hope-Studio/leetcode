class Solution {
  public int[] getNoZeroIntegers(int n) {
    int i = 1;
    int j = n - i;
    while (true) {
      if (!String.valueOf(i).contains("0") && !String.valueOf(j).contains("0"))
        return new int[] {i, j};
      i += 1;
      j = n - i;
    }
  }
}