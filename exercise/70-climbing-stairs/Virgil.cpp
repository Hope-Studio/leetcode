#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  int climbStairs(int n) {
    int num1 = 1, num2 = 2;
    if (n == 1)
      return num1;
    else if (n == 2)
      return num2;
    else {
      for (int i = 2; i < n - 1; i++) {
        num2 += num1;
        num1 = num2 - num1;
      }
      return num1 + num2;
    }
  }
};
