import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.ade70d4c.js";const p={},t=e(`<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * Runtime: 120 ms, faster than 96.86% of JavaScript online submissions for Add Two Numbers.
 *
 * Memory Usage: 43.7 MB, less than 6.82% of JavaScript online submissions for Add Two Numbers.
 */</span>

<span class="token keyword">const</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> l1Pointer <span class="token operator">=</span> l1<span class="token punctuation">;</span> <span class="token comment">// list 1 pointer</span>
  <span class="token keyword">let</span> l2Pointer <span class="token operator">=</span> l2<span class="token punctuation">;</span> <span class="token comment">// list 2 pointer</span>

  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> prevPointer <span class="token operator">=</span> prev<span class="token punctuation">;</span> <span class="token comment">// prev pointer</span>
  <span class="token keyword">let</span> needCarry <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>l1Pointer <span class="token operator">||</span> l2Pointer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentPosition <span class="token operator">=</span> l1Pointer <span class="token operator">||</span> l2Pointer<span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span>
      <span class="token punctuation">(</span>l1Pointer<span class="token operator">?.</span>val <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>l2Pointer<span class="token operator">?.</span>val <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>needCarry <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">=</span> sum <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">;</span>
      needCarry <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> needCarry <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    currentPosition<span class="token punctuation">.</span>val <span class="token operator">=</span> sum<span class="token punctuation">;</span>
    prevPointer<span class="token punctuation">.</span>next <span class="token operator">=</span> currentPosition<span class="token punctuation">;</span>
    prevPointer <span class="token operator">=</span> prevPointer<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>l1Pointer<span class="token punctuation">)</span> l1Pointer <span class="token operator">=</span> l1Pointer<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l2Pointer<span class="token punctuation">)</span> l2Pointer <span class="token operator">=</span> l2Pointer<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>needCarry<span class="token punctuation">)</span> prevPointer<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
 * Runtime: 132 ms, faster than 87.59% of TypeScript online submissions for Add Two Numbers.
 *
 * Memory Usage: 44.5 MB, less than 5.32% of TypeScript online submissions for Add Two Numbers.
 */</span>

<span class="token keyword">const</span> addTwoNumbers <span class="token operator">=</span> <span class="token punctuation">(</span>
  l1<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  l2<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> l1Pointer <span class="token operator">=</span> l1<span class="token punctuation">;</span> <span class="token comment">// list 1 pointer</span>
  <span class="token keyword">let</span> l2Pointer <span class="token operator">=</span> l2<span class="token punctuation">;</span> <span class="token comment">// list 2 pointer</span>

  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> prevPointer <span class="token operator">=</span> prev<span class="token punctuation">;</span> <span class="token comment">// prev pointer</span>
  <span class="token keyword">let</span> needCarry <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> currentPosition <span class="token operator">=</span> l1Pointer <span class="token operator">||</span> l2Pointer<span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>currentPosition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span>
      <span class="token punctuation">(</span>l1Pointer<span class="token operator">?.</span>val <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>l2Pointer<span class="token operator">?.</span>val <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>needCarry <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">=</span> sum <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">;</span>
      needCarry <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> needCarry <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    currentPosition<span class="token punctuation">.</span>val <span class="token operator">=</span> sum<span class="token punctuation">;</span>
    prevPointer<span class="token punctuation">.</span>next <span class="token operator">=</span> currentPosition<span class="token punctuation">;</span>
    prevPointer <span class="token operator">=</span> prevPointer<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>l1Pointer<span class="token punctuation">)</span> l1Pointer <span class="token operator">=</span> l1Pointer<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l2Pointer<span class="token punctuation">)</span> l2Pointer <span class="token operator">=</span> l2Pointer<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    currentPosition <span class="token operator">=</span> l1Pointer <span class="token operator">||</span> l2Pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>needCarry<span class="token punctuation">)</span> prevPointer<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","Mister-Hope.html.vue"]]);export{k as default};
