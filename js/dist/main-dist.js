(new WOW).init(),$(document).ready((function(){setTimeout((function(){onePageScroll(".main",{sectionContainer:".section",updateURL:!1,responsiveFallback:!0})}),2500),$(window).bind("hashchange",(function(){history.pushState("",document.title,window.location.pathname+window.location.search)})),$(".hold-btn").draggable({axis:"y",containment:"parent",revert:!0,stop:function(){$(".hold-btn .inner").css("transform","scale(1)"),$(".hold").css("transform","scale(1)"),$(".hold-section span").fadeIn()},drag:function(){$(".hold-section span").fadeOut(),$(".hold-btn .inner").css("transform","scale(1.5)"),$(".hold").css("transform","scale(1.1)")}}),$(".hold").droppable({drop:function(){$(".start").css({transform:"scale(.7)",transition:"all .5s"}),setTimeout((function(){$(".main").show(),$(".main").animate({margin:"0 0"},1e3),$(".start").css({top:"-85%"}),$(".bottom-nav").addClass("hero"),$(".bottom-nav").removeClass("white"),setTimeout((function(){$(".start").remove()}),500)}),500)}}),$(".hold-btn").hover((function(){$(".hold-btn .inner").css("transform","scale(1.4)")}),(function(){$(".hold-btn .inner").css("transform","scale(1)")})),$(".portfolio-lnk").click((function(){$(".section-2 .side-1").animate({width:"100%"},400),$(".main .image").animate({opacity:"0"},100),$(".portfolio").show(),$(".portfolio").animate({opacity:"1"},400),$(".bottom-nav").removeClass("white"),$(".bottom-nav").removeClass("hero"),$(".right-nav").removeClass("white"),$(".right-nav").addClass("left-nav"),$(".bottom-nav").addClass("top-nav"),setTimeout((function(){$(".main").hide(),$(".pagination").show()}),800)})),$(".pagination input").click((function(){$(".pagination label").removeClass("active"),$(".pagination label[for="+$(this).attr("id")+"]").addClass("active")}))}));