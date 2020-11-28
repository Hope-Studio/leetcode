#include<iostream>
using namespace std;
class Solution {
public:
    int hammingDistance(int x, int y) {
        int d=x^y,c=0;
        while(d)
        {
            d=d&(d-1);
            c++;
        }
        return c;

    }
};