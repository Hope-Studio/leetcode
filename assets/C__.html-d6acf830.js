import{_ as n,W as s,X as a,a1 as e}from"./framework-adda929d.js";const t={},p=e(`<h2 id="sqm" tabindex="-1"><a class="header-anchor" href="#sqm" aria-hidden="true">#</a> sqm</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">TreeNode</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> val<span class="token punctuation">;</span>
  TreeNode<span class="token operator">*</span> left<span class="token punctuation">;</span>
  TreeNode<span class="token operator">*</span> right<span class="token punctuation">;</span>
  <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">val</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">left</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">right</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  TreeNode<span class="token operator">*</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>TreeNode<span class="token operator">*</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">swap</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>left<span class="token punctuation">,</span> root<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token operator">-&gt;</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","C__.html.vue"]]);export{r as default};
