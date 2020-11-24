class Solution {
    public int[] sortedSquares(int[] A) {

        

        if(A[0] >= 0){
            for(int i = 0;i < A.length;i++){
                A[i] = A[i]*A[i];
            }
            return A;
        }

        else if(A[A.length-1] < 0){
            int[] target = new int[A.length];
            int count = 0;

            for(int i = A.length-1; i >= 0;i--){
                target[count] = A[i]*A[i];
                count++;
            }

            return target;
        }

        else{

            int i = 0;
            while(!(A[i] < 0 && A[i+1] >= 0)){
                i++;
            }
            int k = i;
            int j = i+1;

            int[] target = new int[A.length];
            int count = 0;

            while(k >= 0 && j < A.length){
                if(A[k]*A[k] > A[j]*A[j]){
                    target[count] = A[j]*A[j];
                    count++;
                    j++;
                }
                else if(A[k]*A[k] < A[j]*A[j]){
                    target[count] = A[k]*A[k];
                    count++;
                    k--;
                }
                else{
                    target[count] = target[count+1] = A[k]*A[k];
                    count += 2;
                    k--;
                    j++;
                }
            }
        

            if(count <= A.length-1){
                while(k >= 0){
                    target[count] = A[k]*A[k];
                    count++;
                    k--;
                }
                while(j < A.length){
                    target[count] = A[j]*A[j];
                    count++;
                    j++;
                }

                return target;
            }

            return target;
        }
    }
                

        
        
    
}