#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  int maxSubArray(vector<int>& nums) {
    if (nums.size() == 1) return nums[0];
    vector<int> dp(nums.size());
    dp[0] = nums[0];
    int maxn = dp[0];
    for (int i = 1; i < nums.size(); i++) {
      dp[i] = max(dp[i - 1] + nums[i], nums[i]);
      maxn = max(maxn, dp[i]);
    }
    return maxn;
  }
};