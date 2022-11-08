import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.26451e38.js";const t={},o=e(`<h2 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">numWaterBottles</span><span class="token punctuation">(</span><span class="token keyword">int</span> numBottles<span class="token punctuation">,</span> <span class="token keyword">int</span> numExchange<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ans <span class="token operator">=</span> numBottles<span class="token punctuation">;</span>

    <span class="token keyword">int</span> amount <span class="token operator">=</span> numBottles <span class="token operator">/</span> numExchange<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>amount <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ans <span class="token operator">+=</span> amount<span class="token punctuation">;</span>
      numBottles <span class="token operator">-=</span> <span class="token punctuation">(</span>numExchange <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> amount<span class="token punctuation">;</span>
      amount <span class="token operator">=</span> numBottles <span class="token operator">/</span> numExchange<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function c(l,i){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","lizncu.html.vue"]]);export{d as default};