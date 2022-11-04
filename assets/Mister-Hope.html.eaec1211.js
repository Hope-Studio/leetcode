import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p}from"./app.26451e38.js";const t={},o=p(`<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Runtime: 140 ms, faster than 90.82% of JavaScript online submissions for 3Sum.
 *
 * Memory Usage: 48.9 MB, less than 5.15% of JavaScript online submissions for 3Sum.
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result<span class="token punctuation">;</span>

  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> big <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> small <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>big <span class="token operator">&lt;</span> small<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>big<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>small<span class="token punctuation">]</span> <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> big<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>big<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>small<span class="token punctuation">]</span> <span class="token operator">&gt;</span> sum<span class="token punctuation">)</span> small<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>big<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>small<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>big <span class="token operator">&lt;</span> small <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>big<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>big <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> big<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>big <span class="token operator">&lt;</span> small <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>small<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>small <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> small<span class="token operator">--</span><span class="token punctuation">;</span>
          big<span class="token operator">++</span><span class="token punctuation">;</span>
          small<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Runtime: 156 ms, faster than 82.24% of TypeScript online submissions for 3Sum.
 *
 *  Memory Usage: 49.3 MB, less than 5.26% of TypeScript online submissions for 3Sum.
 */</span>

<span class="token keyword">const</span> threeSum <span class="token operator">=</span> <span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> result<span class="token punctuation">;</span>

  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> big <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> small <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>big <span class="token operator">&lt;</span> small<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>big<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>small<span class="token punctuation">]</span> <span class="token operator">&lt;</span> sum<span class="token punctuation">)</span> big<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>big<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>small<span class="token punctuation">]</span> <span class="token operator">&gt;</span> sum<span class="token punctuation">)</span> small<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
          result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>big<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>small<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>big <span class="token operator">&lt;</span> small <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>big<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>big <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> big<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token keyword">while</span> <span class="token punctuation">(</span>big <span class="token operator">&lt;</span> small <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>small<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>small <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> small<span class="token operator">--</span><span class="token punctuation">;</span>
          big<span class="token operator">++</span><span class="token punctuation">;</span>
          small<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","Mister-Hope.html.vue"]]);export{k as default};
