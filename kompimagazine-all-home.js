var mql = window.matchMedia('screen and (min-width: 801px)');if (mql.matches){
$(document).ready(function(){var a=$(".mega_menu").offset().top,e=function(){var e=$(window).scrollTop();e>a?$(".mega_menu").addClass(" fixed-nav"):a>e&&$(".mega_menu").addClass("relative-nav").removeClass("fixed-nav")};e(),$(window).scroll(function(){e()})});
(function(e){var t=function(e,t){this.elem=e;this.settings=t;this.megaMenuHtml();this.ajaxcall=null;this.menulist=this.elem.find(".leftmenulist li a");this.menuHelper(this.elem);this.addEvents()};t.prototype={regex:{islabel:new RegExp("/search/label/","g"),issearch:new RegExp("[?&]q=","g"),labelsearch:new RegExp("(//[^/]+)/search/label/([^/?&]+).*[?&]q=([^$&]+)(?:[^$]+)?","g"),label:new RegExp("(//[^/]+)/search/label/([^/?&$]+)","g"),search:new RegExp("(//[^/]+)/search/?[?&]q=(.*)","g")},addEvents:function(){var t=this;this.menulist.hover(function(){if(e(this).data("menuloaded")!=="true"){t.li=e(this);t.url=t.li.attr("href");t.container=t.li.closest("ul").siblings("ul");t.hoverOver()}},function(){t.hoverOut()})},hoverOver:function(){var t=this;this.getAJAXUrl();if(!this.ajaxUrl)return;this.ajaxcall=e.ajax({type:"GET",url:t.ajaxUrl,dataType:"jsonp",data:t.ajaxData,beforeSend:function(){t.showLoader()},success:function(e){t.hideLoader();t.addArrow();t.showPosts(e)},error:function(e){t.showError(e)}})},hoverOut:function(){this.ajaxcall.abort();this.hideLoader()},getAJAXUrl:function(){if(this.url){var e=this;this.ajaxData={alt:"json","max-results":this.settings.postsNumber};this.url.search(this.regex.islabel)!==-1&&this.url.search(this.regex.issearch)!==-1?this.ajaxUrl=this.url.replace(this.regex.labelsearch,function(t,n,r,i){e.ajaxData.q=i;return[n,"/feeds/posts/default/-/",r,"/"].join("")}):this.url.search(this.regex.islabel)!==-1&&this.url.search(this.regex.issearch)===-1?this.ajaxUrl=this.url.replace(this.regex.label,function(t,n,r){delete e.ajaxData.q;return[n,"/feeds/posts/default/-/",r,"/"].join("")}):this.url.search(this.regex.islabel)===-1&&this.url.search(this.regex.issearch)!==-1?this.ajaxUrl=this.url.replace(this.regex.search,function(t,n,r){e.ajaxData.q=r;return[n,"/feeds/posts/default"].join("")}):this.ajaxUrl=!1}else this.ajaxUrl=!1},showLoader:function(){e("<span></span>",{"class":"loading-icon"}).appendTo(this.li.closest("li"))},hideLoader:function(){this.li.closest("li").find("span.loading-icon").remove()},showPosts:function(t){var n=this,r=[],i,s,o;t.feed.openSearch$totalResults.$t>0?e.each(t.feed.entry,function(t,u){i=u.title.$t;e.each(u.link,function(e,t){t.rel==="alternate"?s=t.href:s="#"});o=u.media$thumbnail?u.media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s72\-c\//,"/s202/"):n.settings.noThumbnail;r.push('<li><span class="thumb-container"><a title="',i,'" href="',s,'"><img alt="',i,'" src="',o,'" width="202" height="202"/><br />',i,"</a></span></li>")}):r.push("<h5>","No posts available.","</h5>");this.container.html(r.join(""));this.menulist.removeData("menuloaded");this.li.data("menuloaded","true")},showError:function(e){if(e.statusText==="error"){this.hideLoader();this.addArrow();this.container.html("<h5>Oops... Could not fetch the blog posts.</h5>")}},addArrow:function(){this.menulist.closest("li").find("span").remove();this.menulist.removeClass("hover-menu");this.li.addClass("hover-menu");e("<span></span>",{"class":"menu-icon"}).appendTo(this.li.closest("li"))},menuHelper:function(t){var n=this;t.find(">li").hover(function(){var t=e(this);t.find("a:first").addClass("hover-menu");var r=e(this).find("ul.leftmenulist li").height()*e(this).find("ul.leftmenulist li").length;t.find("ul.rightmenulist").css({"min-height":r+"px"});n.requestFirstAjax(t)},function(){e(this).find("a:first").removeClass("hover-menu")})},megaMenuHtml:function(){this.elem.find("ul ul").remove();this.elem.addClass("megamenuid").find(">li").find("ul:first").addClass("leftmenulist").wrap(e("<div></div>",{"class":this.settings.divClass}));e("ul.leftmenulist").after(e("<ul></ul>",{"class":"rightmenulist"}))},requestFirstAjax:function(e){e=e.find(".leftmenulist li:first-child a");this.url=e.attr("href");this.container=e.closest("ul").siblings("ul");this.li=e;this.hoverOver()}};e.fn.megaBloggerMenu=function(n){var r={postsNumber:4,divClass:"megasubmenu",postsClass:"rightmenulist",noThumbnail:"/default.png"},i=e.extend({},r,n);return this.each(function(){var n=new t(e(this),i)})}})(jQuery);
jQuery(document).ready(function(e){e("#megamenuid").megaBloggerMenu({postsNumber:4,noThumbnail:"https://2.bp.blogspot.com/-Z7jG9iO9OTg/Vazz6YJnFQI/AAAAAAAALVs/wlSvXPgdDAo/s1600/no_image_available.png"})});
function addURL(n){$(n).attr("href",function(){return this.href+"?&max-results=7"})};
};

function recentPosts(e){if(document.getElementById("recent-posts")){for(var t,s,r=e.feed.entry,n="",a=document.getElementById("recent-posts"),l=0;l<numPosts;l++){for(var c=0;c<numPosts;c++)if("alternate"==r[l].link[c].rel){s=r[l].link[c].href;break}"media$thumbnail"in r[l]?u=r[l].media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+\-c/g,"/s90"):u="https://1.bp.blogspot.com/-jHWwEwTEwQ4/WJJ4k71QSYI/AAAAAAAApVc/XO_OitR_VGQS_Wquq1pv1h1D-dgiejSuQCLcB/s90/nothumb_large.png";var t=r[l].title.$t;n+='<li class="recent-posts"><img src="'+u+'" alt="'+t+'" width="90" height="90"><div class="title_post"><a href="'+s+'" title="'+t+'" target="_blank">'+t+"</a></div></li>"}a.innerHTML=n}}var rcp=document.createElement("script");rcp.src=homePage+"/feeds/posts/summary?alt=json-in-script&orderby=published&max-results="+numPosts+"&callback=recentPosts",document.getElementsByTagName("head")[0].appendChild(rcp);

var fixedsearchbox=function(e){var n,o,t,a=e(document.documentElement),r=null!=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),s=r?"touchstart":"click",c=100,i=27,u={init:function(){n=e("#ddsearchcontainer"),o=e("#search-terms"),t=e("#search-label,#search-label2,#search-label3"),t.on(s,function(e){n.css("top","px"),a.toggleClass("opensearch"),a.hasClass("opensearch")?(n.css("zIndex",c++),o.focus()):o.blur(),e.preventDefault(),e.stopPropagation()}),o.on(s,function(e){e.stopPropagation()}),e(document).on(s+" keyup",function(e){"keyup"==e.type&&e.keyCode!=i||(a.removeClass("opensearch"),o.blur())})}};return u}(jQuery);fixedsearchbox.init();

function resetScroller(e){var o=window.pageYOffset,n=document.getElementById(e).offsetTop,r=setTimeout("resetScroller('"+e+"')",speed);o>n?(scrollY=o-distance,window.scroll(0,scrollY)):clearTimeout(r)}var appended=!1,bookmark2=document.createElement("div");bookmark2.id="backtotop",bookmark2.innerHTML='<span onclick="return false;" onmousedown="resetScroller(&quot;header-wrapper&quot;);"><svg viewBox="0 0 24 24"><path fill="#000000" d="M21,19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19C20.11,3 21,3.9 21,5V19M13,18V9.5L16.5,13L17.92,11.58L12,5.66L6.08,11.58L7.5,13L11,9.5V18H13Z" /></svg></span>',onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>600?appended||(document.body.appendChild(bookmark2),appended=!0):appended&&(document.body.removeChild(bookmark2),appended=!1)};var scrollY=0,distance=40,speed=24;

if (window.matchMedia("(max-width:800px)").matches){
$("#cssmenu ul ul li:odd").addClass("odd"),$("#cssmenu ul ul li:even").addClass("even"),$("#cssmenu > ul > li > a").click(function(){$("#cssmenu li").removeClass("active"),$(this).closest("li").addClass("active");var s=$(this).next();return s.is("ul")&&s.is(":visible")&&($(this).closest("li").removeClass("active"),s.slideUp("normal")),s.is("ul")&&!s.is(":visible")&&($("#cssmenu ul ul:visible").slideUp("normal"),s.slideDown("normal")),0==$(this).closest("li").find("ul").children().length}),$(function(){$(".menu_mobile_burger").click(function(){$("#css-menu").css({right:"0"});var s=document.body;s.classList.toggle("flow")}),$(".close-menu").click(function(){$("#css-menu").css({right:"100%"});var s=document.body;s.classList.toggle("flow")})});
};