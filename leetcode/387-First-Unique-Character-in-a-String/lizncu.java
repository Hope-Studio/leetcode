class Solution {
  public int firstUniqChar(String s) {
    if (s.length() < 1) {
      return -1;
    }

    int[] flag = new int[s.length()];

    for (int i = 0; i < s.length(); i++) {
      if (flag[i] == 1) {
        continue;
      }
      for (int j = i + 1; j < s.length(); j++) {
        if (s.charAt(i) == s.charAt(j)) {
          flag[i] = flag[j] = 1;
        }
      }
      if (flag[i] != 1) {
        return i;
      }
    }

    if (flag[s.length() - 1] == 1) {
      return -1;
    } else {
      return s.length() - 1;
    }
  }
}