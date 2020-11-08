#include <algorithm>
#include <iostream>
#include <string>
using namespace std;

class Solution {
 public:
  bool isPalindrome(int x) {
    string tmp = to_string(x);
    string tmp2 = tmp;
    reverse(tmp2.begin(), tmp2.end());
    if (tmp == tmp2) return true;
    return false;
  }
};
