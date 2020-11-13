class Solution {
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {

    int Length = nums1.length + nums2.length;
    boolean IsOne = false;
    int Location = Length / 2 + 1;

    if (Length % 2 != 0) {
      IsOne = true;
    }

    int[] num = new int[2000];
    int i = 0;
    int m = 0, n = 0;

    while (m < nums1.length && n < nums2.length && i <= Location) {
      if (nums1[m] < nums2[n]) {
        num[i] = nums1[m];
        m++;
        i++;
      } else if (nums1[m] > nums2[n]) {
        num[i] = nums2[n];
        n++;
        i++;
      } else {
        num[i] = nums1[m];
        num[++i] = nums2[n];
        m++;
        n++;
        i++;
      }
    }

    if (i < Location) {
      if (n < nums2.length) {
        for (; i < Location; i++) {
          num[i] = nums2[n];
          n++;
        }
      } else {
        for (; i < Location; i++) {
          num[i] = nums1[m];
          m++;
        }
      }
    }

    if (IsOne) {
      return num[Location - 1];
    }

    else {
      return (double) (num[Location - 2] + num[Location - 1]) / 2;
    }

  }
}
