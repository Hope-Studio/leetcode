import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as r,a as e,d as t,b as i,e as o,r as d}from"./app.26451e38.js";const c={},h={id:"_1431-kids-with-the-greatest-number-of-candies",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#_1431-kids-with-the-greatest-number-of-candies","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",target:"_blank",rel:"noopener noreferrer"},p=o('<p>Given the array <code>candies</code> and the integer <code>extraCandies</code>, where <code>candies[i]</code> represents the number of candies that the <strong><em>ith</em></strong> kid has.</p><p>For each kid check if there is a way to distribute <code>extraCandies</code> among the kids such that he or she can have the <strong>greatest</strong> number of candies among them. Notice that multiple kids can have the <strong>greatest</strong> number of candies.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> candies = [2,3,5,1,3], extraCandies = 3</p><p><strong>Output:</strong> [true,true,true,false,true]</p><p><strong>Explanation:</strong></p><ul><li>Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.</li><li>Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.</li><li>Kid 3 has 5 candies and this is already the greatest number of candies among the kids.</li><li>Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.</li><li>Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.</li></ul><p><strong>Example 2:</strong></p><p><strong>Input:</strong> candies = [4,2,1,1,2], extraCandies = 1</p><p><strong>Output:</strong> [true,false,false,false,false]</p><p><strong>Explanation:</strong> There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> candies = [12,1,12], extraCandies = 10</p><p><strong>Output:</strong> [true,false,true]</p><h2 id="constraints" tabindex="-1"><a class="header-anchor" href="#constraints" aria-hidden="true">#</a> Constraints</h2><ul><li><code>2 &lt;= candies.length &lt;= 100</code></li><li><code>1 &lt;= candies[i] &lt;= 100</code></li><li><code>1 &lt;= extraCandies &lt;= 50</code></li></ul>',16);function u(m,f){const a=d("ExternalLinkIcon");return n(),r("div",null,[e("h1",h,[l,t(),e("a",g,[t("1431. Kids With the Greatest Number of Candies"),i(a)])]),p])}const k=s(c,[["render",u],["__file","index.html.vue"]]);export{k as default};
