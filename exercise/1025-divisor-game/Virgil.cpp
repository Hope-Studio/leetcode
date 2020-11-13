#include <algorithm>
#include <iostream>
using namespace std;
//博弈论，n为偶数先手必赢；
class Solution {
 public:
  bool divisorGame(int N) {
    if (N % 2 == 0)
      return true;
    else
      return false;
  }
};
