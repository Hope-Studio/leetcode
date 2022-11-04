import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.26451e38.js";const p={},o=t(`<h2 id="mister-hope" tabindex="-1"><a class="header-anchor" href="#mister-hope" aria-hidden="true">#</a> Mister-Hope</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * Runtime: 24 ms, faster than 22.26% of C++ online submissions for Integer to
 * Roman.
 *
 * Memory Usage: 12.6 MB, less than 11.00% of C++ online submissions for Integer
 * to Roman.
 */</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  string <span class="token function">intToRoman</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> thousands<span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MMM&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> hundreds<span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;CC&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;CCC&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;CD&quot;</span><span class="token punctuation">,</span>
                            <span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DCC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DCCC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CM&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> tens<span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;X&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;XX&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;XXX&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;XL&quot;</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;L&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LX&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LXX&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LXXX&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XC&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> units<span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;I&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;II&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;III&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;IV&quot;</span><span class="token punctuation">,</span>
                         <span class="token string">&quot;V&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;VI&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;VII&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;VIII&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;IX&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> thousands<span class="token punctuation">[</span>num <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">]</span> <span class="token operator">+</span> hundreds<span class="token punctuation">[</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">+</span>
           tens<span class="token punctuation">[</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">+</span> units<span class="token punctuation">[</span>num <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/*
 * Runtime: 4 ms, faster than 93.51% of C++ online submissions for Integer to
 * Roman.
 *
 * Memory Usage: 9.2 MB, less than 11.00% of C++ online submissions for Integer
 * to Roman.
 */</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span><span class="token operator">:</span>
  string <span class="token function">intToRoman</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    vector<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> numerals<span class="token punctuation">{</span>
        <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;L&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;XL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;X&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;IX&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;V&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;IV&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;I&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> weights<span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    string result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> weights<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> num <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> num <span class="token operator">/</span> weights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> result <span class="token operator">+=</span> numerals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

      num <span class="token operator">%=</span> weights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(u,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","C++.html.vue"]]);export{k as default};
