class Solution {
<<<<<<< HEAD
    public int[] createTargetArray(int[] nums, int[] index) {

        int[] target = new int[index.length];

        for(int i = 0;i < index.length;i++){

            if(index[i] >= i){
                target[index[i]] = nums[i];
            }
            else{
                for(int j = nums.length-1;j > index[i];j--){
                    target[j] = target[j-1];
                }
                target[index[i]] = nums[i];
            }

        }

        return target;
    }
=======
  public int[] createTargetArray(int[] nums, int[] index) {
    int[] target = new int[index.length];

    for(int i = 0;i < index.length;i++){
      if (index[i] >= i) {
        target[index[i]] = nums[i];
      } else {
        for(int j = nums.length-1;j > index[i];j--){
            target[j] = target[j-1];
        }
        target[index[i]] = nums[i];
      }
    }

    return target;
  }
>>>>>>> master
}