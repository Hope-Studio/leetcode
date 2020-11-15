class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int ans = numBottles;

        int amount = numBottles/numExchange;

        while(amount != 0){
            ans += amount;
            numBottles -= (numExchange -1)*amount;
            amount = numBottles/numExchange;
        }

        return ans;
    }
}