class Solution {
public:
    int reverse(int x) {
        int tmp = x;
        int res = 0;
        while(tmp){
            int pop = tmp%10;
            tmp/=10;
            if(res>2147483647/10||(res==2147483647&&pop>7)) return 0;
            if(res<-2147483647/10||(res==-2147483647&&pop<-8)) return 0;
            res = res*10 + pop;
        }
        return res;
    }
};