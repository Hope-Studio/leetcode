class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int a=0,b=0,c=0;
        for(int i=0;i<=bills.size()-1;i++){
            if(bills[i]==5)
            a++;
            if(bills[i]==10)
            a--;b++;
            if(bills[i]==20){
                if(a>0&&b>0){
                    a--;b--;c++;
                }
                else
                a=a-3;
            }
            if(a<0||b<0||c<0){
                return false;
                break;
            }
        }
        return true;
    }
};