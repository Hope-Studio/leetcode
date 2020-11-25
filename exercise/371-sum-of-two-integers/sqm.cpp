#include<iostream>
using namespace std;
class Solution {
public:
    int getSum(int a, int b) {
        while(b>0)
        {
            a++;
            b--;
        }
        while(b<0)
        {
            a--;
            b++;
        }
        return a;

    }
};