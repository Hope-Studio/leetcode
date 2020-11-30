/*
 * Runtime: 1 ms, faster than 99.95% of Java online submissions for Shuffle String.
 *
 * Memory Usage: 39.4 MB, less than 7.86% of Java online submissions for Shuffle String.
 */

class Solution {
  public String restoreString(String s, int[] indices) {
    char[] chars = new char[s.length()];

    for (int i = 0; i < indices.length; i++) chars[indices[i]] = s.charAt(i);

    return new String(chars);
  }
}
