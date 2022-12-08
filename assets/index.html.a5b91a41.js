import{_ as o,V as i,W as r,X as e,$ as t,Y as s,a0 as a,z as d}from"./framework.8f854aa5.js";const m={},p={id:"_1450-number-of-students-doing-homework-at-a-given-time",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#_1450-number-of-students-doing-homework-at-a-given-time","aria-hidden":"true"},"#",-1),l={href:"https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/",target:"_blank",rel:"noopener noreferrer"},g=a('<p>Given two integer arrays <code>startTime</code> and <code>endTime</code> and given an integer <code>queryTime</code>.</p><p>The <code>ith</code> student started doing their homework at the time <code>startTime[i]</code> and finished it at time <code>endTime[i]</code>.</p><p>Return <em>the number of students</em> doing their homework at time <code>queryTime</code>. More formally, return the number of students where <code>queryTime</code> lays in the interval <code>[startTime[i], endTime[i]]</code> inclusive.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> startTime = [1,2,3], endTime = [3,2,7], queryTime = 4</p><p><strong>Output:</strong> 1</p><p><strong>Explanation:</strong> We have 3 students where:</p><ul><li>The first student started doing homework at time 1 and finished at time 3 and wasn&#39;t doing anything at time 4.</li><li>The second student started doing homework at time 2 and finished at time 2 and also wasn&#39;t doing anything at time 4.</li><li>The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.</li></ul><p><strong>Example 2:</strong></p><p><strong>Input:</strong> startTime = [4], endTime = [4], queryTime = 4</p><p><strong>Output:</strong> 1</p><p><strong>Explanation:</strong> The only student was doing their homework at the queryTime.</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> startTime = [4], endTime = [4], queryTime = 5</p><p><strong>Output:</strong> 0</p><p><strong>Example 4:</strong></p><p><strong>Input:</strong> startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7</p><p><strong>Output:</strong> 0</p><p><strong>Example 5:</strong></p><p><strong>Input:</strong> startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5</p><p><strong>Output:</strong> 5</p><h2 id="constraints" tabindex="-1"><a class="header-anchor" href="#constraints" aria-hidden="true">#</a> Constraints</h2><ul><li><code>startTime.length == endTime.length</code></li><li><code>1 &lt;= startTime.length &lt;= 100</code></li><li><code>1 &lt;= startTime[i] &lt;= endTime[i] &lt;= 1000</code></li><li><code>1 &lt;= queryTime &lt;= 1000</code></li></ul>',23);function h(u,T){const n=d("ExternalLinkIcon");return i(),r("div",null,[e("h1",p,[c,t(),e("a",l,[t("1450. Number of Students Doing Homework at a Given Time"),s(n)])]),g])}const f=o(m,[["render",h],["__file","index.html.vue"]]);export{f as default};
