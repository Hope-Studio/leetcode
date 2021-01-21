class Solution {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        int ans = 0;
        int flag = 0;
        for(int i = 0;i < boxTypes.length;i++)
        {
            int max = 0;
            for(int j = 0;j<boxTypes.length;j++)
            {
                if(boxTypes[j][1] > max)
                {
                    max = boxTypes[j][1];
                    flag = j;
                }
            }
            if(truckSize >= boxTypes[flag][0])
            {
                ans += boxTypes[flag][0]*boxTypes[flag][1];
                truckSize -= boxTypes[flag][0];
            }
            else{
                ans += truckSize*boxTypes[flag][1];
                break;
            }
            boxTypes[flag][1] = 0;
            flag = 0;
        }
        return ans;
    }
}
    
