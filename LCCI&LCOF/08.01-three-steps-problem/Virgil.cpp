#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  int waysToStep(int n) {
    long long num1 = 1, num2 = 2, num3 = 4;
    if (n == 1)
      return num1;
    else if (n == 2)
      return num2;
    else if (n == 3)
      return num3;
    else {
      for (int i = 3; i < n; i++) {
        num3 = num3 + num1 + num2;
        num2 = num3 - num2 - num1;
        num1 = num3 - num2 - num1;
        num3 %= 1000000007;
        num2 %= 1000000007;
        num1 %= 1000000007;
      }
      return num3;
    }
  }
};