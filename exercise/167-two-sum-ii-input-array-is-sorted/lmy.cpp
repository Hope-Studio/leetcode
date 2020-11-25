class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        for(int i=0;i<numbers.size();i++){
            int left=i+1;
            int deft=numbers.size()-1;
            while(left<deft){
                int mid=(left+deft)/2;
                int sum=numbers[i]+numbers[mid];
            }
        }
    }
};