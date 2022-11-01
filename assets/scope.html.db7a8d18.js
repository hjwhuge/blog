import{_ as n,a}from"./app.c7499a6b.js";const s={},e=a(`<h1 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h1><h3 id="\u4F5C\u7528\u57DF-1" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF-1" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h3><h4 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h4><ul><li>\u7F16\u7A0B\u8BED\u8A00\u6700\u57FA\u672C\u529F\u80FD\u4E4B\u4E00\u3002</li><li>\u5B83\u7528\u6765\u5B58\u50A8\u53D8\u91CF\u5F53\u4E2D\u7684\u503C\uFF0C\u5E76\u4E14\u80FD\u5728\u4E4B\u540E\u5BF9\u8FD9\u4E2A\u503C\u8FDB\u884C\u8BBF\u95EE\u6216\u4FEE\u6539\u3002</li><li>\u53EF\u5206\u4E3A\u8BCD\u6CD5\u4F5C\u7528\u57DF\u548C\u52A8\u6001\u4F5C\u7528\u57DF</li></ul><h4 id="\u8BCD\u6CD5-\u9759\u6001-\u4F5C\u7528\u57DF\u4E0E\u52A8\u6001\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5-\u9759\u6001-\u4F5C\u7528\u57DF\u4E0E\u52A8\u6001\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u8BCD\u6CD5(\u9759\u6001)\u4F5C\u7528\u57DF\u4E0E\u52A8\u6001\u4F5C\u7528\u57DF</h4><ul><li>javascript \u91C7\u7528\u7684\u662F\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u8FD9\u4E5F\u662F\u5927\u90E8\u5206\u8BED\u8A00\u6240\u91C7\u7528\u7684 <ul><li>\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u5728\u51FD\u6570\u5B9A\u4E49\u7684\u65F6\u5019\u5C31\u51B3\u5B9A\u4E86</li></ul></li><li>\u52A8\u6001\u4F5C\u7528\u57DF(\u5982\uFF0CBash \u811A\u672C) <ul><li>\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u662F\u5728\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019\u624D\u51B3\u5B9A\u7684</li></ul></li></ul><h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7ED3\u679C\u662F ???</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5047\u8BBE JavaScript \u91C7\u7528\u9759\u6001\u4F5C\u7528\u57DF\uFF0C\u8BA9\u6211\u4EEC\u5206\u6790\u4E0B\u6267\u884C\u8FC7\u7A0B\uFF1A</p><ul><li>\u6267\u884C foo \u51FD\u6570\uFF0C\u5148\u4ECE foo \u51FD\u6570\u5185\u90E8\u67E5\u627E\u662F\u5426\u6709\u5C40\u90E8\u53D8\u91CF value\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u6839\u636E\u4E66\u5199\u7684\u4F4D\u7F6E\uFF0C\u67E5\u627E\u4E0A\u9762\u4E00\u5C42\u7684\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F value \u7B49\u4E8E 1\uFF0C\u6240\u4EE5\u7ED3\u679C\u4F1A\u6253\u5370 1\u3002</li></ul><p>\u5047\u8BBE JavaScript \u91C7\u7528\u52A8\u6001\u4F5C\u7528\u57DF\uFF0C\u8BA9\u6211\u4EEC\u5206\u6790\u4E0B\u6267\u884C\u8FC7\u7A0B\uFF1A</p><ul><li>\u6267\u884C foo \u51FD\u6570\uFF0C\u4F9D\u7136\u662F\u4ECE foo \u51FD\u6570\u5185\u90E8\u67E5\u627E\u662F\u5426\u6709\u5C40\u90E8\u53D8\u91CF value\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u4ECE\u8C03\u7528\u51FD\u6570\u7684\u4F5C\u7528\u57DF\uFF0C\u4E5F\u5C31\u662F bar \u51FD\u6570\u5185\u90E8\u67E5\u627E value \u53D8\u91CF\uFF0C\u6240\u4EE5\u7ED3\u679C\u4F1A\u6253\u5370 2\u3002</li></ul><p>\u56E0\u4E3A JavaScript \u91C7\u7528\u7684\u662F\u9759\u6001\u4F5C\u7528\u57DF\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u4F8B\u5B50\u7684\u7ED3\u679C\u662F 1\u3002</p>`,13);function p(t,l){return e}var o=n(s,[["render",p]]);export{o as default};
