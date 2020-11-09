class Solution {
    public boolean isPalindrome(int x) {
        
        int k = x;
        int sum = 0;
        while(x!=0 && x>0){
            sum = sum*10 + x%10;
            x = x/10;
        }

        if(k == sum){
            return true;
        }
        return false;
    }
}