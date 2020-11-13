#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  int maxSubArray(vector<int>& nums) {
    if (nums.size() == 0)
      return 0;
    else if (nums.size() == 1)
      return nums[0];
    else {
      vector<int> dp(nums.size());
      dp[0] = nums[0];
      dp[1] = max(nums[0], nums[1]);
      int maxn = 0;
      for (int i = 2; i < nums.size(); i++) {
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]);
        maxn = max(dp[i], maxn);
      }
      return maxn;
    }
  }
};
