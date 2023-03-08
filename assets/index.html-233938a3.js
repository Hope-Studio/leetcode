import{_ as o,W as r,X as s,Y as e,a0 as n,Z as i,a1 as a,C as l}from"./framework-45146e23.js";const p={},u={id:"_292-nim-game",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#_292-nim-game","aria-hidden":"true"},"#",-1),c={href:"https://leetcode.com/problems/nim-game/",target:"_blank",rel:"noopener noreferrer"},h=a('<p>You are playing the following Nim Game with your friend:</p><ul><li>Initially, there is a heap of stones on the table.</li><li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li><li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li><li>The one who removes the last stone is the winner.</li></ul><p>Given <code>n</code>, the number of stones in the heap, return <code>true</code> <em>if you can win the game assuming both you and your friend play optimally, otherwise return</em> <code>false</code>.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> n = 4</p><p><strong>Output:</strong> false</p><p><strong>Explanation:</strong> These are the possible outcomes:</p><ol><li>You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.</li><li>You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.</li><li>You remove 3 stones. Your friend removes the last stone. Your friend wins.</li></ol><p>In all outcomes, your friend wins.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> n = 1</p><p><strong>Output:</strong> true</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> n = 2</p><p><strong>Output:</strong> true</p><h2 id="constraints" tabindex="-1"><a class="header-anchor" href="#constraints" aria-hidden="true">#</a> Constraints</h2><ul><li><code>1 &lt;= n &lt;= 231 - 1</code></li></ul>',17);function m(g,f){const t=l("ExternalLinkIcon");return r(),s("div",null,[e("h1",u,[d,n(),e("a",c,[n("292. Nim Game"),i(t)])]),h])}const x=o(p,[["render",m],["__file","index.html.vue"]]);export{x as default};
