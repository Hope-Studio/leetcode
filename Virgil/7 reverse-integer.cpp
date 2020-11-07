#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  int reverse(int x) {
    int num[33] = {0};
    int flag = 1, i = 0, m = 0;
    long long result = 0;
    if (x < 0) {
      flag = -1;
      x = abs(x);
    }
    while (x > 0) {
      num[i] = x % 10;
      x /= 10;
      i++;
      m++;
    }
    for (int j = 0; j < i; j++, m--)
      result += num[j] * pow(10, m - 1);
    if (result * flag > 2147483647 || result * flag < -2147483648)
      return 0;
    else
      return result * flag;
  }
};
