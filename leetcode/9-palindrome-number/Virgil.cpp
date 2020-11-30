#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  bool isPalindrome(int x) {
    int a[10001], cnt = 0;
    if (!x)
      return true;
    else if (x < 0)
      return false;
    else {
      while (x > 0) {
        a[cnt] = x % 10;
        x /= 10;
        cnt++;
      }
      for (int i = 0; i <= (cnt - 1) / 2; i++) {
        if (a[i] != a[cnt - i - 1]) return false;
      }
      return true;
    }
  }
};
