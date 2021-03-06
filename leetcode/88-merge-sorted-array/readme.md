# [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

Given two sorted integer arrays _nums1_ and _nums2_, merge _nums2_ into _nums1_ as one sorted array.

**Note:**

- The number of elements initialized in _nums1_ and _nums2_ are $m$ and $n$ respectively.
- You may assume that _nums1_ has enough space (size that is **equal** to $m$ + $n$) to hold additional elements from _nums2_.

**Example:**

**Input:**

nums1 = \[1,2,3,0,0,0\], m = 3

nums2 = \[2,5,6\], n = 3

**Output:** \[1,2,2,3,5,6\]

## Constraints

- -10^9^ <= nums1[i], nums2[i] <= 10^9^
- `nums1.length == m + n`
- `nums2.length == n`
