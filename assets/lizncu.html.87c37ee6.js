import{_ as n,V as s,W as a,a0 as p}from"./framework.8f854aa5.js";const t={},o=p(`<h2 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token class-name">Length</span> <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length <span class="token operator">+</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token class-name">IsOne</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token class-name">Location</span> <span class="token operator">=</span> <span class="token class-name">Length</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Length</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">IsOne</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2000</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>m <span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> nums2<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">Location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
        m<span class="token operator">++</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        n<span class="token operator">++</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        num<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
        num<span class="token punctuation">[</span><span class="token operator">++</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        m<span class="token operator">++</span><span class="token punctuation">;</span>
        n<span class="token operator">++</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token class-name">Location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">Location</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          num<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
          n<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">Location</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          num<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
          m<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">IsOne</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> num<span class="token punctuation">[</span><span class="token class-name">Location</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>num<span class="token punctuation">[</span><span class="token class-name">Location</span> <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> num<span class="token punctuation">[</span><span class="token class-name">Location</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","lizncu.html.vue"]]);export{k as default};