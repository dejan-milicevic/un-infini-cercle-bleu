$(document).ready(function(){$(document.body).css("padding-top",$(".navbar-default").height()),$(window).resize(function(){$(document.body).css("padding-top",$(".navbar-default").height())}),$(".navbar-toggle").on("click",function(){$(document.body).css("padding-top",$(".navbar-default").height()-$(".navbar-collapse").height())}),$('div[data-type="parallax"]').each(function(){var a=$(this);$(window).scroll(function(){var b=-($(window).scrollTop()/a.data("speed")),c="0 "+b+"px";a.css("background-position",c)})})});