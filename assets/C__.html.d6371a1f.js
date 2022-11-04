import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.26451e38.js";const t={},p=e(`<h2 id="lmy" tabindex="-1"><a class="header-anchor" href="#lmy" aria-hidden="true">#</a> lmy</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token keyword">int</span> <span class="token function">numWaterBottles</span><span class="token punctuation">(</span><span class="token keyword">int</span> numBottles<span class="token punctuation">,</span> <span class="token keyword">int</span> numExchange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> emptybottles <span class="token operator">=</span> numBottles<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>numBottles <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> numBottles<span class="token punctuation">;</span>
      numBottles <span class="token operator">=</span> emptybottles <span class="token operator">/</span> numExchange<span class="token punctuation">;</span>
      emptybottles <span class="token operator">=</span> emptybottles <span class="token operator">-</span> numBottles <span class="token operator">*</span> numExchange <span class="token operator">+</span> numBottles<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","C++.html.vue"]]);export{d as default};
