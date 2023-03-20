import{_ as n,W as s,X as a,a1 as e}from"./framework-adda929d.js";const t={},p=e(`<h2 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C++</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","lmy.html.vue"]]);export{r as default};
