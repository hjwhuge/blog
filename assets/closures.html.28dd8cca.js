import{_ as t,r as e,o,b as c,d as n,f as a,F as l,a as u,e as p}from"./app.c7499a6b.js";const i={},r=u(`<h1 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h1><blockquote><p>\u662F\u6307\u4E00\u4E2A\u51FD\u6570\u53EF\u4EE5\u8BB0\u4F4F\u5176\u5916\u90E8\u53D8\u91CF\u5E76\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E9B\u53D8\u91CF \uFF08javascript.info\uFF09</p></blockquote><p>MDN \u5B9A\u4E49\uFF1A\u4E00\u4E2A\u51FD\u6570\u548C\u5BF9\u5176\u5468\u56F4\u72B6\u6001\uFF08\u8BCD\u6CD5\u73AF\u5883\uFF09\u7684\u5F15\u7528\u6346\u7ED1\u5728\u4E00\u8D77\uFF08\u6216\u8005\u8BF4\u51FD\u6570\u88AB\u5F15\u7528\u5305\u56F4\uFF09\uFF0C\u8FD9\u6837\u7684\u7EC4\u5408\u5C31\u662F\u95ED\u5305\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u95ED\u5305\u8BA9\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A\u5185\u5C42\u51FD\u6570\u4E2D\u8BBF\u95EE\u5230\u5176\u5916\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u3002\u5728 JavaScript \u4E2D\uFF0C\u6BCF\u5F53\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u95ED\u5305\u5C31\u4F1A\u5728\u51FD\u6570\u521B\u5EFA\u7684\u540C\u65F6\u88AB\u521B\u5EFA\u51FA\u6765\u3002</p><h2 id="\u95ED\u5305-1" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305-1" aria-hidden="true">#</a> \u95ED\u5305</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Mozilla&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> displayName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> myFunc <span class="token operator">=</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8BF4\u660E\uFF1A\u5728\u4E00\u4E9B\u7F16\u7A0B\u8BED\u8A00\u4E2D\uFF0C\u4E00\u4E2A\u51FD\u6570\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u4EC5\u5B58\u5728\u4E8E\u6B64\u51FD\u6570\u7684\u6267\u884C\u671F\u95F4\u3002\u4E00\u65E6 makeFunc() \u6267\u884C\u5B8C\u6BD5\uFF0C\u4F60\u53EF\u80FD\u4F1A\u8BA4\u4E3A name \u53D8\u91CF\u5C06\u4E0D\u80FD\u518D\u88AB\u8BBF\u95EE\u3002\u7136\u800C\uFF0C\u56E0\u4E3A\u4EE3\u7801\u4ECD\u6309\u9884\u671F\u8FD0\u884C\uFF0C\u6240\u4EE5\u5728 JavaScript \u4E2D\u60C5\u51B5\u663E\u7136\u4E0E\u6B64\u4E0D\u540C\u3002</p><p>\u539F\u56E0\u5728\u4E8E\uFF0CJavaScript \u4E2D\u7684\u51FD\u6570\u4F1A\u5F62\u6210\u4E86\u95ED\u5305\u3002 \u95ED\u5305\u662F\u7531\u51FD\u6570\u4EE5\u53CA\u58F0\u660E\u8BE5\u51FD\u6570\u7684\u8BCD\u6CD5\u73AF\u5883\u7EC4\u5408\u800C\u6210\u7684\u3002\u8BE5\u73AF\u5883\u5305\u542B\u4E86\u8FD9\u4E2A\u95ED\u5305\u521B\u5EFA\u65F6\u4F5C\u7528\u57DF\u5185\u7684\u4EFB\u4F55\u5C40\u90E8\u53D8\u91CF\u3002\u5728\u672C\u4F8B\u5B50\u4E2D\uFF0CmyFunc \u662F\u6267\u884C makeFunc \u65F6\u521B\u5EFA\u7684 displayName \u51FD\u6570\u5B9E\u4F8B\u7684\u5F15\u7528\u3002displayName \u7684\u5B9E\u4F8B\u7EF4\u6301\u4E86\u4E00\u4E2A\u5BF9\u5B83\u7684\u8BCD\u6CD5\u73AF\u5883\uFF08\u53D8\u91CF name \u5B58\u5728\u4E8E\u5176\u4E2D\uFF09\u7684\u5F15\u7528\u3002\u56E0\u6B64\uFF0C\u5F53 myFunc \u88AB\u8C03\u7528\u65F6\uFF0C\u53D8\u91CF name \u4ECD\u7136\u53EF\u7528\uFF0C\u5176\u503C Mozilla \u5C31\u88AB\u4F20\u9012\u5230 alert \u4E2D\u3002</p><h2 id="\u95ED\u5305\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u5E94\u7528" aria-hidden="true">#</a> \u95ED\u5305\u5E94\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6700\u7B80\u5355\u95ED\u5305</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6A21\u5757\u5316\u5F00\u53D1</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//\u79C1\u6709\u53D8\u91CF\uFF0C\u4E00\u76F4\u5B58\u5728\u5185\u5B58\u4E2D  ,\u672C\u6765\u5E94\u8BE5\u91CA\u653E\uFF0C\u540E\u9762\u6709\u51FD\u6570\u4E00\u76F4\u5728\u4F7F\u7528</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u53EF\u4EE5\u65B9\u6CD5</span>
    a<span class="token operator">++</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5FAA\u73AF\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6</span>
<span class="token comment">// for(var i=0;i&lt;btns.length;i++){</span>

<span class="token comment">//     btns[i].onclick=function(){</span>
<span class="token comment">//         console.log(i);</span>
<span class="token comment">//     }</span>

<span class="token comment">// }</span>

<span class="token comment">// \u95ED\u5305</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> btns<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    btns<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7528\u533F\u540D\u51FD\u6570\u6A21\u4EFF\u5757\u7EA7\u4F5C\u7528\u57DF</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u8FD9\u91CC\u662F\u5757\u7EA7\u4F5C\u7528\u57DF</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="\u5E38\u89C1\u95ED\u5305\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95ED\u5305\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95ED\u5305\u9762\u8BD5\u9898</h2><h3 id="\u5FAA\u73AF\u4E2D\u521B\u5EFA\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u4E2D\u521B\u5EFA\u95ED\u5305" aria-hidden="true">#</a> \u5FAA\u73AF\u4E2D\u521B\u5EFA\u95ED\u5305</h3><p>\u95EE\u9898\uFF1A\u4E0D\u7BA1\u6267\u884C aInputs \u4E2D\u54EA\u4E2A\u51FD\u6570\uFF0C\u90FD\u662F\u6253\u5370 6</p><p>\u539F\u56E0\uFF1ATODO</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> aInputs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  aInputs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
aInputs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u89E3\u6CD5\u4E00\uFF1A\u589E\u52A0\u95ED\u5305</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> aInputs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  aInputs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">makeCallback</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">makeCallback</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
aInputs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u89E3\u6CD5\u4E8C\uFF1A\u5229\u7528 let \u5173\u952E\u5B57</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> aInputs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  aInputs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
aInputs<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u76F8\u5173\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a> \u76F8\u5173\u94FE\u63A5</h2>`,19),k={href:"https://zh.javascript.info/closure",target:"_blank",rel:"noopener noreferrer"},b=p("javascript.info \u95ED\u5305"),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"},d=p("MDN \u95ED\u5305"),h={href:"https://github.com/mqyqingfeng/Blog/issues/9",target:"_blank",rel:"noopener noreferrer"},f=p("\u51B4\u7FBD \u535A\u5BA2"),v={href:"https://www.zhihu.com/question/34210214",target:"_blank",rel:"noopener noreferrer"},g=p("\u77E5\u4E4E\u8BA8\u8BBA \u95ED\u5305"),y={href:"https://juejin.cn/post/6957913856488243237",target:"_blank",rel:"noopener noreferrer"},_=p("JavaScript \u7684\u9759\u6001\u4F5C\u7528\u57DF\u94FE\u4E0E\u201C\u52A8\u6001\u201D\u95ED\u5305\u94FE");function w(j,x){const s=e("ExternalLinkIcon");return o(),c(l,null,[r,n("ul",null,[n("li",null,[n("a",k,[b,a(s)])]),n("li",null,[n("a",m,[d,a(s)])]),n("li",null,[n("a",h,[f,a(s)])]),n("li",null,[n("a",v,[g,a(s)])]),n("li",null,[n("a",y,[_,a(s)])])])],64)}var N=t(i,[["render",w]]);export{N as default};
