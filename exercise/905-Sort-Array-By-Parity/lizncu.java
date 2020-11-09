class Solution {
    public int[] sortArrayByParity(int[] A) {
       
        int[] ans = new int[A.length];
        int front = 0,
            rear = A.length - 1;

        for(int i = 0;i < A.length;i++){
            if(A[i] % 2 == 0){
                ans[front++] = A[i]; 
            }
            else{
                ans[rear--] = A[i];
            }

            
        }

        return ans;
    }
}