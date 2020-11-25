class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int sum=0;
        int emptybottles=numBottles;
        while(numBottles!=0){
            sum+=numBottles;
            numBottles=emptybottles/numExchange;
            emptybottles=emptybottles-numBottles*numExchange+numBottles;
        }
        return sum;
    }
};