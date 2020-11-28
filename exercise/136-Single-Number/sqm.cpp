#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  int singleNumber(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int tmp;
    for (int i = 0; i < nums.size(); i += 2) {
      tmp = nums[i];
      if (i == nums.size() - 1) return tmp;
      if (tmp != nums[i + 1]) return tmp;
    }
    return -1;
  }
};
