class Solution {
  public int busyStudent(int[] startTime, int[] endTime, int queryTime) {
    int count = 0;

    for (int i = 0; i < startTime.length; i++) {
      count += startTime[i] <= queryTime && queryTime <= endTime[i] ? 1 : 0;
    }

    return count;
  }
}
