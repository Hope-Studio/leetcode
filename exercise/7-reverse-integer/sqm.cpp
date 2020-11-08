#include<iostream>
#include<vector>
using namespace std;
class Solution {
public:
    int reverse(int x) {
        long sum = 0;
        vector<int> p;
        while (abs(x) >= 1)
        {
            p.push_back(x%10);
            x = x/10; 
        }
        for(int i = 0; i< p.size();i++)
        {
            sum = sum + (p[p.size() - i - 1] * pow(10, i));
            if (sum > (pow(2, 31) - 1) || sum < -pow(2, 31))
                return 0;
            
        }
        return sum; 
    }
};