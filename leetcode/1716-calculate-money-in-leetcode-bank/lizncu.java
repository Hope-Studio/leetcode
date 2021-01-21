class Solution {
    public int totalMoney(int n) { 
        int day = n % 7;
        int week = n/7;   
        return 28 * week + 7*(week)*(week-1)/2 + day*(week)+(1+day)*day/2;
    }
}