import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.26451e38.js";const e={},p=t(`<h2 id="mister-hope" tabindex="-1"><a class="header-anchor" href="#mister-hope" aria-hidden="true">#</a> Mister-Hope</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * Runtime: 76 ms, faster than 74.71% of JavaScript online submissions for Plus One.
 *
 * Memory Usage: 38.9 MB, less than 51.87% of JavaScript online submissions for Plus One.
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">plusOne</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> digits<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    num<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    x<span class="token operator">--</span><span class="token punctuation">;</span>
    num <span class="token operator">=</span> digits<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  digits<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  x <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">(</span>digits<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> digits<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> digits<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","JavaScript.html.vue"]]);export{d as default};
