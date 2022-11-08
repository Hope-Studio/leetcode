import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p}from"./app.26451e38.js";const t={},e=p(`<h2 id="sqm" tabindex="-1"><a class="header-anchor" href="#sqm" aria-hidden="true">#</a> sqm</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">sortArrayByParity</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> A<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> A<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        l<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> A<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","C++.html.vue"]]);export{k as default};