$(document).ready(function(){var e=$("a.blog-pager-older-link").attr("href");$("a.blog-pager-older-link").load(e+" .post-title:first",function(){var e=$("a.blog-pager-older-link").text();$("a.blog-pager-older-link").text(e)});var r=$("a.blog-pager-newer-link").attr("href");$("a.blog-pager-newer-link").load(r+" .post-title:first",function(){var e=$("a.blog-pager-newer-link:first").text();$("a.blog-pager-newer-link").text(e)})});
function blockLinks(e,n){for(var a=document.getElementById(e),i=a.getElementsByTagName(n),t=0;t<i.length;t++)-1!==i[t].innerHTML.indexOf("</a>")&&(i[t].innerHTML="Maaf <span style='background-color: red; color: white; padding: 3px;'><b>link hidup</b></span> tidak akan tampil di sini!",i[t].className="spammer-detected")}blockLinks("comment_block","p");
function showhide(){var e=document.getElementById("share-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};
var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:3,homePage:window.location.origin,numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:182,noImage:"https://1.bp.blogspot.com/-jHWwEwTEwQ4/WJJ4k71QSYI/AAAAAAAApVc/XO_OitR_VGQS_Wquq1pv1h1D-dgiejSuQCLcB/s200/nothumb_large.png",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span style="display:block;clear:both;"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+(\-c)?/, "/s"+d.thumbnailSize):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+v+'"'+b+'><img alt="" class="related-post-item-thumbnail lazyload" data-src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);

function toggleVisibility(e){visibleDivId=visibleDivId===e?null:e,hideNonVisibleDivs()}function hideNonVisibleDivs(){var e,n,i;for(e=0;e<divs.length;e++)n=divs[e],i=document.getElementById(n),visibleDivId===n?i.style.display="block":i.style.display="none"}

var disqus_url=disqus_blogger_current_url;!function(){"use strict";var e=function(){var e=document.getElementById("comments");return e||(e=document.getElementById("disqus-blogger-comment-block")),e},n=e();if(n){var i=document.createElement("div");i.id="disqus_thread",n.innerHTML="",n.appendChild(i),n.style.display="block";var s=document.createElement("script");s.async=!0,s.src="//"+disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.body).appendChild(s)}}(),!function(e,n,i){var s,t=e.getElementsByTagName(n)[0];e.getElementById(i)||(s=e.createElement(n),s.id=i,s.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",t.parentNode.insertBefore(s,t))}(document,"script","facebook-jssdk");var divs=["disqus-box","blogger-box","facebook-box"],visibleDivId=null;$(".commentbtn").click(function(){$(this).addClass("btncurrent").siblings().removeClass("btncurrent")});

function openCommentForm() {
  document.getElementById("comment-form").style.display = "block";document.getElementById("opencomment").style.display = "none";
};

function cdClear(){var e=document.getElementById("codes");e.value="",e.focus();for(var t=document.querySelectorAll("#cvrt1, #cvrt2"),n=0;n<t.length;n++)t[n].disabled=!1,document.getElementById("btnInfo").style.display="none",document.getElementById("button-link").style.display="none"}function cdConvert(){var e=document.getElementById("codes"),t=e.value,n=document.getElementById("opt1"),l=document.getElementById("opt2"),c=document.getElementById("opt3"),d=document.getElementById("opt4"),o=document.getElementById("opt5");t=t.replace(/\t/g,"    "),n.checked&&(t=t.replace(/&/g,"&amp;")),l.checked&&(t=t.replace(/'/g,"&#039;")),c.checked&&(t=t.replace(/"/g,"&quot;")),d.checked&&(t=t.replace(/</g,"&lt;")),o.checked&&(t=t.replace(/>/g,"&gt;")),t=-1!=t.lastIndexOf("\n")||t.length>40?t.replace(/^/,'<i rel="pre">'):t.replace(/^/,'<i rel="code">'),t=t.replace(/$/,"</i>"),e.value=t,e.focus(),document.getElementById("button-link").style.display="inline-block"}function imgConvert(){var e=document.getElementById("codes"),t=e.value,n=document.getElementById("opt6");t=t.replace(/\t/g,"    "),n.checked&&(t=t.replace(/^/,'<i rel="image">'),t=t.replace(/$/,"</i>")),e.value=t,e.focus(),document.getElementById("button-link").style.display="inline-block"}function showParser(){document.getElementById("parser").style.display="block",document.getElementById("show-parse").style.display="none",document.getElementById("hide-parse").style.display="inline-block"}function hideParser(){document.getElementById("parser").style.display="none",document.getElementById("show-parse").style.display="inline-block",document.getElementById("hide-parse").style.display="none"}function cdClear2(){var e=document.getElementById("codes2");e.value="",e.focus();for(var t=document.querySelectorAll("#cvrt3, #cvrt4, #cvrt5, #cvrt6, #cvrt7, #cvrt8, #cvrt9, #cvrt10, #cvrt11"),n=0;n<t.length;n++)t[n].disabled=!1,document.getElementById("btnInfo2").style.display="none",document.getElementById("button-link2").style.display="none"}function preConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt7"),l=document.getElementById("opt8"),c=document.getElementById("opt9"),d=document.getElementById("opt10"),o=document.getElementById("opt11"),m=document.getElementById("opt16");t=t.replace(/\t/g,"    "),m.checked&&(n.checked&&(t=t.replace(/&/g,"&amp;")),l.checked&&(t=t.replace(/'/g,"&#039;")),c.checked&&(t=t.replace(/"/g,"&quot;")),d.checked&&(t=t.replace(/</g,"&lt;")),o.checked&&(t=t.replace(/>/g,"&gt;")),t=t.replace(/^/,"<pre>"),t=t.replace(/$/,"</pre>"),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function codeConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt7"),l=document.getElementById("opt8"),c=document.getElementById("opt9"),d=document.getElementById("opt10"),o=document.getElementById("opt11"),m=document.getElementById("opt17");t=t.replace(/\t/g,"    "),m.checked&&(n.checked&&(t=t.replace(/&/g,"&amp;")),l.checked&&(t=t.replace(/'/g,"&#039;")),c.checked&&(t=t.replace(/"/g,"&quot;")),d.checked&&(t=t.replace(/</g,"&lt;")),o.checked&&(t=t.replace(/>/g,"&gt;")),t=t.replace(/^/,"<code>"),t=t.replace(/$/,"</code>"),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function precodeConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt7"),l=document.getElementById("opt8"),c=document.getElementById("opt9"),d=document.getElementById("opt10"),o=document.getElementById("opt11"),m=document.getElementById("opt18");t=t.replace(/\t/g,"    "),m.checked&&(n.checked&&(t=t.replace(/&/g,"&amp;")),l.checked&&(t=t.replace(/'/g,"&#039;")),c.checked&&(t=t.replace(/"/g,"&quot;")),d.checked&&(t=t.replace(/</g,"&lt;")),o.checked&&(t=t.replace(/>/g,"&gt;")),t=t.replace(/^/,"<pre><code>"),t=t.replace(/$/,"</code></pre>"),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function spoilerConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt19");t=t.replace(/\t/g,"    "),n.checked&&(t=t.replace(/^/,"<spoiler>"),t=t.replace(/$/,"</spoiler>"),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function strongConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt12");t=t.replace(/\t/g,"    "),n.checked&&(t=t.replace(/^/,"<strong>"),t=t.replace(/$/,"</strong>"),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function emConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt13");t=t.replace(/\t/g,"    "),n.checked&&(t=t.replace(/^/,"<em>"),t=t.replace(/$/,"</em>"),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function uConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt14");t=t.replace(/\t/g,"    "),n.checked&&(t=t.replace(/^/,"<u>"),t=t.replace(/$/,"</u>"),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function strikeConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt15");t=t.replace(/\t/g,"    "),n.checked&&(t=t.replace(/^/,"<strike>"),t=t.replace(/$/,"</strike>"),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function embedConvert(){var e=document.getElementById("codes2"),t=e.value,n=document.getElementById("opt20");t=t.replace(/\t/g,"    "),n.checked&&(t=t.replace(/^/,'<iframe src="https://embed.disqus.com/p/'),t=t.replace(/$/,'" style="border:0;width:100%;height:300px;" seamless="seamless" scrolling="no" allowtransparency="true"></iframe>'),e.value=t,e.focus(),document.getElementById("button-link2").style.display="inline-block")}function showParser2(){document.getElementById("parser2").style.display="block",document.getElementById("show-parse2").style.display="none",document.getElementById("hide-parse2").style.display="inline-block"}function hideParser2(){document.getElementById("parser2").style.display="none",document.getElementById("show-parse2").style.display="inline-block",document.getElementById("hide-parse2").style.display="none"}

/*!
 * clipboard.js v1.5.16
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e.nodeType!==o;){if(e.matches(t))return e;e=e.parentNode}}var o=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
var clipboard = new Clipboard(".button-link");
clipboard.on("success", function (o) {
    console.log(o), document.getElementById("btnInfo")
        .style.display = "block", document.getElementById("codes")
        .value = ""
}), clipboard.on("error", function (o) {
    console.log(o)
});
var clipboard2 = new Clipboard(".button-link2");
clipboard2.on("success", function (o) {
    console.log(o), document.getElementById("btnInfo2")
        .style.display = "block", document.getElementById("codes2")
        .value = ""
}), clipboard2.on("error", function (o) {
    console.log(o)
});

$("i[rel~='pre']").wrap("<pre></pre>");
function toggleNavPanel(e){var n=document.getElementById(e),l=document.getElementById("tombol-pesan"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="<i class='fa fa-plus-square-o'></i>"):(n.style.display="block",l.innerHTML="<i class='fa fa-minus-square-o'></i>")};

$(function(){if($("#sharethis").length){var s=$("#sharethis"),t=$("#sharethis").offset().top,o=$("#sharethis").height();$(window).scroll(function(){var i=$("#stoper_share").offset().top-o-20,h=$(window).scrollTop();if(h>t?s.css({position:"fixed",top:0}):s.css("position","static"),h>i){var e=i-h;s.css({top:e})}})}});

$(function(){if($("#sidebar3").length){var s=$("#sidebar3"),i=$("#sidebar3").offset().top,o=$("#sidebar3").height();$(window).scroll(function(){var t=$("#sticky_stoper").offset().top-o-20,e=$(window).scrollTop();if(e>i?s.css({position:"fixed",top:"10px"}):s.css("position","static"),e>t){var r=t-e;s.css({top:r})}})}});

function makemeSticky(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky("pesankomentar");
