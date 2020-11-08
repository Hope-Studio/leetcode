#include <iostream>
using namespace std;

class Solution {
 public:
  int romanToInt(string s) {
    int l = s.size();
    int m[99] = {};
    m['I'] = 1;
    m['V'] = 5;
    m['X'] = 10;
    m['L'] = 50;
    m['C'] = 100;
    m['D'] = 500;
    m['M'] = 1000;
    int sum = 0;
    for (int i = 0; i < s.size(); i++) {
      m[s[i]] < m[s[i + 1]] ? sum -= m[s[i]] : sum += m[s[i]];
    }
    return sum;
  }
};
