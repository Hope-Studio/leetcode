import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p}from"./app.26451e38.js";const t={},o=p(`<h2 id="lizncu" tabindex="-1"><a class="header-anchor" href="#lizncu" aria-hidden="true">#</a> lizncu</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">A</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">A</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token class-name">A</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">[</span><span class="token class-name">A</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">A</span><span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">A</span><span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">int</span> k <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">A</span><span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> <span class="token class-name">A</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token class-name">A</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          target<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
          count<span class="token operator">++</span><span class="token punctuation">;</span>
          j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token class-name">A</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          target<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
          count<span class="token operator">++</span><span class="token punctuation">;</span>
          k<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          target<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> target<span class="token punctuation">[</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
          count <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
          k<span class="token operator">--</span><span class="token punctuation">;</span>
          j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> <span class="token class-name">A</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          target<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
          count<span class="token operator">++</span><span class="token punctuation">;</span>
          k<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> <span class="token class-name">A</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          target<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token class-name">A</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
          count<span class="token operator">++</span><span class="token punctuation">;</span>
          j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> target<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","Java.html.vue"]]);export{r as default};
