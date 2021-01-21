class Solution {
    public int minTimeToVisitAllPoints(int[][] points) {

        int[] arr = new int[2];
        int time = 0;
        for(int i = 1; i < points.length; i++)
        {
            arr = points[i-1];
            int x = Math.abs(arr[0] - points[i][0]);
            int y = Math.abs(arr[1] - points[i][1]);
            time +=  x > y ? x:y;  
        }
        return time;
    }
}