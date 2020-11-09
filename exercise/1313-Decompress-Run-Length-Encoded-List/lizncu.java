class Solution {
    public int[] decompressRLElist(int[] nums) {

        int mount = 0;

        for(int i = 0;i < nums.length;i = i + 2){
            mount += nums[i];
        }

        int[] ans = new int[mount];

        int count = 0;

        for(int i = 0; i+1 < nums.length;i = i + 2){
            for(int j = nums[i];j > 0;j--){
                ans[count++] = nums[i+1];
            }
        }

        return ans;

    }
}