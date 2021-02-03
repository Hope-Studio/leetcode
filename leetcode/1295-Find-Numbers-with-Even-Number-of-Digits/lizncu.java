class Solution {
  public int findNumbers(int[] nums) {
    int ans = 0;

    for (int i = 0; i < nums.length; i++) {
      int count = 0;
      if (nums[i] == 0) {
        continue;
      } else {
        while (nums[i] != 0) {
          nums[i] /= 10;
          count++;
        }
      }
      if (count % 2 == 0) {
        ans++;
      }
    }

    return ans;
  }
}