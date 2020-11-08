/*
 * Runtime: 24 ms, faster than 22.26% of C++ online submissions for Integer to
 * Roman.
 *
 * Memory Usage: 12.6 MB, less than 11.00% of C++ online submissions for Integer
 * to Roman.
 */

#include <iostream>
#include <vector>
using namespace std;
class Solution {
 public:
  string intToRoman(int num) {
    if (num <= 0) return "";

    vector<string> thousands{"", "M", "MM", "MMM"};
    vector<string> hundreds{"",  "C",  "CC",  "CCC",  "CD",
                            "D", "DC", "DCC", "DCCC", "CM"};
    vector<string> tens{"",  "X",  "XX",  "XXX",  "XL",
                        "L", "LX", "LXX", "LXXX", "XC"};
    vector<string> units{"",  "I",  "II",  "III",  "IV",
                         "V", "VI", "VII", "VIII", "IX"};

    return thousands[num / 1000] + hundreds[(num % 1000) / 100] +
           tens[(num % 100) / 10] + units[num % 10];
  }
};
