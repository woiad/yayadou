$(document).ready(function(){
	var swiper = new Swiper('.swiper-container',{
		paginationClickable: true,
		direction: 'vertical',
		speed:1000,
		onSlideChangeStart:function(swiper){
			alert(1)
			if(swiper.activeIndex > 9){
				alert(1)
				$(".arrow").hide()
			}else{
				$(".arrow").show()
			}
			$(".swiper-content").css({"display":"none"});
		},
		 onTransitionEnd: function(swiper){
			$(".swiper-content").eq(swiper.activeIndex).css({"display":"block"})
		}
		
	})
	var len = $(".swiper-slide").length;
	for(i=0;i<len;i++){
		var num=i+1;
		$(".swiper-slide").eq(i).css({
			"width":"100%",
			"height":"100%",
			"background-image":"url(img/bg"+num+".jpg)",
			"background-size":"cover",
			"background-position":"50% 50%",
			"background-origin":"content-box",
			"background-repeat":"no-repeat"
		})
	}
	$("#audioBtn").click(function(){
		var Audio = $("#play")[0];
		if($(this).hasClass("rotate")){
			Audio.pause()
			$(this).removeClass("rotate")
		}else{
			Audio.play()
			$(this).addClass("rotate")
		}
	})
	var win = $(window).width();
	var a = win/7.2;
	$("body,html").css({"font-size":a});
	$(window).resize(function(){
		var win = $(window).width()
		var a = win/7.2
		$("body,html").css({"font-size":a})
	})
})
