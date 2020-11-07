
/*
 * Runtime: 10 ms, faster than 41.97% of Java online submissions for Two Sum.
 * 
 * Memory Usage: 56.5 MB, less than 6.02% of Java online submissions for Two Sum.
 */

import java.util.HashMap;

class Solution {
  public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (int i = 0; i < nums.length; i++) {
      int j = target - nums[i];

      if (map.containsKey(j))
        return new int[] { map.get(j), i };

      map.put(nums[i], i);
    }

    throw new IllegalArgumentException("No solution");
  }
}
