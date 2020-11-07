/*
 * Runtime: 188 ms, faster than 36.71% of C++ online submissions for Two Sum.
 *
 * Memory Usage: 52.9 MB, less than 13.71% of C++ online submissions for Two
 * Sum.
 */

#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
 public:
  vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> prevMap;

    for (int i = 0; i < nums.size(); i++) {
      int j = target - nums[i];

      if (prevMap.count(j)) return {prevMap[j], i};
      prevMap[nums[i]] = i;
    }

    return {};
  }
};
