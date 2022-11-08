import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.26451e38.js";const t={},i=e(`<h2 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C++</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token comment">/* data */</span>
  <span class="token keyword">int</span> val<span class="token punctuation">;</span>
  ListNode<span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token keyword">void</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token operator">-&gt;</span>val <span class="token operator">=</span> node<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
    node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> node<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[i];function p(c,l){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","sqm.html.vue"]]);export{u as default};