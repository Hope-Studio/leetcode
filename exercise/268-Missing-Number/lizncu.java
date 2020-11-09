class Solution {
  public int missingNumber(int[] nums) {
    int num = nums.length;

    num = (0 + num) * (num + 1) / 2;

    for (int i = 0; i < nums.length; i++) {
      num -= nums[i];
    }

    return num;
  }
}
