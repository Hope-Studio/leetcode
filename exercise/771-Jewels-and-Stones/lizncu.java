class Solution {
    public int numJewelsInStones(String J, String S) {
        
        int count = 0;
        
        for(int i = 0;i < J.length();i++){
            for(int j = 0;j < S.length();j++){
                if(S.charAt(j) == J.charAt(i)){
                    count++;
                }
            }
        }

        return count;
    }
}