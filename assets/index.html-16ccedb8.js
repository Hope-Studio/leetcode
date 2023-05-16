import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c,a as e,d as t,b as s,e as p}from"./app-b54447e7.js";const l={},i={id:"_860-lemonade-change",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#_860-lemonade-change","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/lemonade-change/",target:"_blank",rel:"noopener noreferrer"},u=p("<p>At a lemonade stand, each lemonade costs <code>$5</code>.</p><p>Customers are standing in a queue to buy from you, and order one at a time (in the order specified by <code>bills</code>).</p><p>Each customer will only buy one lemonade and pay with either a <code>$5</code>, <code>$10</code>, or <code>$20</code> bill. You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.</p><p>Note that you don&#39;t have any change in hand at first.</p><p>Return <code>true</code> if and only if you can provide every customer with correct change.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> [5,5,5,10,20]</p><p><strong>Output:</strong> true</p><p><strong>Explanation:</strong></p><p>From the first 3 customers, we collect three $5 bills in order.</p><p>From the fourth customer, we collect a $10 bill and give back a $5.</p><p>From the fifth customer, we give a $10 bill and a $5 bill.</p><p>Since all customers got correct change, we output true.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> [5,5,10]</p><p><strong>Output:</strong> true</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> [10,10]</p><p><strong>Output:</strong> false</p><p><strong>Example 4:</strong></p><p><strong>Input:</strong> [5,5,10,10,20]</p><p><strong>Output:</strong> false</p><p><strong>Explanation:</strong></p><p>From the first two customers in order, we collect two $5 bills.</p><p>For the next two customers in order, we collect a $10 bill and give back a $5 bill.</p><p>For the last customer, we can&#39;t give change of $15 back because we only have two $10 bills.</p><p>Since not every customer received correct change, the answer is false.</p><p><strong>Note:</strong></p><ul><li><code>0 &lt;= bills.length &lt;= 10000</code></li><li><code>bills[i]</code> will be either <code>5</code>, <code>10</code>, or <code>20</code>.</li></ul>",29);function g(m,f){const o=r("ExternalLinkIcon");return a(),c("div",null,[e("h1",i,[d,t(),e("a",h,[t("860. Lemonade Change"),s(o)])]),u])}const w=n(l,[["render",g],["__file","index.html.vue"]]);export{w as default};
