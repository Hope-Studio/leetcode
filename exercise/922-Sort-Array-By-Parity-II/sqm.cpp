#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& A) {
        vector<int> even(A.size()/2);
        vector<int> odd(A.size()/2);
        vector<int> result(A.size());
        int evenIndex = 0;
        int oddIndex = 0;
        int resultIndex = 0;
        for(int i=0;i<A.size();i++)
        {
            if(A[i]%2==0)
            even[evenIndex++]=A[i];
            else
            odd[oddIndex++]=A[i];
        }
        for(int i=0;i<oddIndex;i++)
        {
            result[resultIndex++]=even[i];
            result[resultIndex++]=odd[i];
        }
        return result;

    }
};
