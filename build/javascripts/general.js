$(document).ready(function(){$("#projects a.prev").css("visibility","hidden");$("input").attr("autocomplete","off");if(window.location.pathname=="/sent"){$("#thanks").show().delay(1000).fadeOut()}$("#projects li.bull a").click(function(){var b=$(this).closest("ul").find("> .bull").index($(this).parent());if($("#projects").data("index")==b){return false}a(b);return false});$("#projects a.prev").click(function(){var b=$("#projects").data("index");if(b==0){return false}a(b-1);return false});$("#projects a.next").click(function(){var b=$("#projects").data("index");if(b==$("#projects li.bull a").length-1){return false}a(b+1);return false});var a=function(b){if($("#projects").data("working")){return false}$("#projects").data("index",b);$("#projects").data("working",true);$("#projects .wrapper:visible").fadeOut("fast",function(){$($("#projects .wrapper")[b]).fadeIn("fast",function(){var c=$("#projects").data("index");$("#projects li.bull a").removeClass("curr");$($("#projects li.bull")[c]).find("a").addClass("curr");vis=c==0;$("#projects a.prev").css("visibility",vis?"hidden":"visible");vis=c==$("#projects li.bull a").length-1;$("#projects a.next").css("visibility",vis?"hidden":"visible");$("#projects").data("working",false)})})};$("#contact form").bind("submit",function(){$(this).find(".submit input").val("Submitting...").attr("disabled","disabled")});$.localScroll({filter:"[class!=ignore]",offset:-45});$(".previews a.img").fancybox()});