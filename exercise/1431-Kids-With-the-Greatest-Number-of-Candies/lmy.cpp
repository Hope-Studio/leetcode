#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> ans;
        int n=candies[0];
        for(int i=0;i<candies.size();i++)
        n=max(n,candies[i]);
        for(int i=0;i<candies.size();i++){
            if(candies[i]+extraCandies>=n)
            ans.push_back(true);
            else
            ans.push_back(false);
        }
        return ans;
    }
};