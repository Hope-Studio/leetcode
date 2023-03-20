import{_ as n,W as s,X as a,a1 as e}from"./framework-adda929d.js";const p={},t=e(`<h2 id="lizncu" tabindex="-1"><a class="header-anchor" href="#lizncu" aria-hidden="true">#</a> lizncu</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> k <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">=</span> sum <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> x <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
      x <span class="token operator">=</span> x <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> sum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Java.html.vue"]]);export{r as default};
