#include <iostream>
#include <vector>
using namespace std;

class Solution {
 public:
  string reverseLeftWords(string s, int n) {
    string re = "";
    int N;
    N = s.size();
    for (int i = n; i < N; i++) re += s[i];
    for (int i = 0; i < n; i++) re += s[i];
    return re;
  }
};
