#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& A) {
        int l = 0, r = A.size() - 1;
        while(l < r){
            if(A[l] % 2 == 0) l++;
            else swap(A[l], A[r]), r--;
        }
        return A;
    }
};
