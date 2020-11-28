class Solution {
<<<<<<< HEAD
    public int xorOperation(int n, int start) {
        int result = start;
        
        for(int i = 1; i < n; i++){
            result = result ^ (start + i * 2);
        }
        
        return result;

    }
=======
  public int xorOperation(int n, int start) {
    int result = start;
    
    for(int i = 1; i < n; i++){
      result = result ^ (start + i * 2);
    }
    
    return result;
  }
>>>>>>> master
}