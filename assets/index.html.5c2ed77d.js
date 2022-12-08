import{_ as s,V as o,W as r,X as e,$ as t,Y as a,a0 as c,z as d}from"./framework.8f854aa5.js";const i={},l={id:"_1313-decompress-run-length-encoded-list",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_1313-decompress-run-length-encoded-list","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/decompress-run-length-encoded-list/",target:"_blank",rel:"noopener noreferrer"},u=c('<p>We are given a list <code>nums</code> of integers representing a list compressed with run-length encoding.</p><p>Consider each adjacent pair of elements <code>[freq, val] = [nums[2*i], nums[2*i+1]]</code> (with <code>i &gt;= 0</code>). For each such pair, there are <code>freq</code> elements with value <code>val</code> concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.</p><p>Return the decompressed list.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> nums = [1,2,3,4]</p><p><strong>Output:</strong> [2,4,4,4]</p><p><strong>Explanation:</strong> The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2]. The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4]. At the end the concatenation [2] + [4,4,4] is [2,4,4,4].</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> nums = [1,1,2,3]</p><p><strong>Output:</strong> [1,3,3]</p><h2 id="constraints" tabindex="-1"><a class="header-anchor" href="#constraints" aria-hidden="true">#</a> Constraints</h2><ul><li><code>2 &lt;= nums.length &lt;= 100</code></li><li><code>nums.length % 2 == 0</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul>',12);function m(g,_){const n=d("ExternalLinkIcon");return o(),r("div",null,[e("h1",l,[p,t(),e("a",h,[t("1313. Decompress Run-Length Encoded List"),a(n)])]),u])}const x=s(i,[["render",m],["__file","index.html.vue"]]);export{x as default};
