(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

function showSearchBox() {
  document.getElementById("box").style.display = "block";document.getElementById("close-icon").style.display = "block";document.getElementById("search-icon").style.display = "none";
};
function closeSearchBox() {
  document.getElementById("box").style.display = "none";document.getElementById("search-icon").style.display = "block";document.getElementById("close-icon").style.display = "none";
};

if (window.matchMedia("(max-width:640px)").matches){!function(n){n.fn.menumaker=function(s){var i=n(this),e=n.extend({format:"dropdown",sticky:!1},s);return this.each(function(){return n(this).find(".button").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.animate({width:"toggle"},"slow").removeClass("open"):(s.animate({width:"toggle"},"slow").addClass("open"),"dropdown"===e.format&&s.find("ul").show())}),i.find("li ul").parent().addClass("has-sub"),multiTg=function(){i.find(".has-sub").prepend('<span class="submenu-button"></span>'),i.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?n(this).siblings("ul").removeClass("open").slideToggle():n(this).siblings("ul").addClass("open").slideToggle()})},"multitoggle"===e.format?multiTg():i.addClass("dropdown"),e.sticky===!0&&i.css("position","fixed"),resizeFix=function(){var s=700;n(window).width()>s&&i.find("ul").show(),n(window).width()<=s&&i.find("ul").hide().removeClass("open")},resizeFix(),n(window).on("resize",resizeFix)})}}(jQuery),function(n){n(document).ready(function(){n("#cssmenu").menumaker({format:"multitoggle"})})}(jQuery);
}