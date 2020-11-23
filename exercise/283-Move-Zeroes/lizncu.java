class Solution {
  public void moveZeroes(int[] nums) {
    for (int i = 0, count = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        if (count != i) {
          nums[count] = nums[i];
          nums[i] = 0;
        }

        count++;
      }
    }
  }
}