#include<iostream>
#include<vector>
using namespace std;
class Solution {
public:
    #include <algorithm>
    bool canMakeArithmeticProgression(vector<int>& arr) {
        sort(arr.begin(),arr.end());
        for(int i=1;i<arr.size()-1;i++)
        {
            if(arr[i+1]-arr[i]!=arr[i]-arr[i-1])
            return false;
        }
       return true;
    }
};