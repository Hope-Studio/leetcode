class Solution {
    public int[] sumZero(int n) {
        int[] ans = new int[n];
        if(n % 2 == 0)
        {
            for(int i = 0;i < n/2;i++)
            {
                ans[i] = (i+1);
                ans[n-1-i] = -(i+1);
            }
        }
        else
        {
            ans[0] = 0;
            for(int i = 1;i < (n+1)/2;i++)
            {
                ans[i] = i;
                ans[n-i] = -i;
            }
        }
        return ans;
    }
}