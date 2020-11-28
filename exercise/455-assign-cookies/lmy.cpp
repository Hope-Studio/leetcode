class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        sort(g.begin(),g.end());
        sort(s.begin(),s.end());
        int k = s.size() - 1;
        int ans = 0;
        for (int i = g.size() - 1; i >= 0; i--) {
            if (k>=0&&s[k] >= g[i]) {
                ans++;
                k--;
            }
        }
        return ans;
    }
};