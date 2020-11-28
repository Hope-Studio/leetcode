#include<iostream>
#include<vector>
using namespace std;
class Solution {
public:
    vector<int> printNumbers(int n) {
        vector<int> a;
        if(n==0)
        return a;
        for(int i=1;i<pow(10,n);i++)
        {
            a.push_back(i);
        }
    return a;
    }
};