/*
 * Runtime: 4 ms, faster than 93.51% of C++ online submissions for Integer to
 * Roman.
 *
 * Memory Usage: 9.2 MB, less than 11.00% of C++ online submissions for Integer
 * to Roman.
 */

#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  string intToRoman(int num) {
    if (num <= 0) return "";

    vector<string> numerals{
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",
    };
    vector<int> weights{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};

    string result = "";

    for (int i = 0; i < weights.size() && num != 0; i++) {
      for (int j = 1; j <= num / weights[i]; j++) result += numerals[i];

      num %= weights[i];
    }

    return result;
  }
};
