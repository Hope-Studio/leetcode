#include <algorithm>
#include <iostream>
using namespace std;

class Solution {
 public:
  bool divisorGame(int N) {
    if (N % 2 == 0)
      return true;
    else
      return false;
  }
};
