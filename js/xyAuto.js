$(document).ready(function() {
	$('.imgholder').hover(function() {
            $("img", this).stop().animate({
                "opacity": "0.5"
            },
            200);
        },
        function() {
            $("img", this).stop().animate({
                "opacity": "1"
            },
            200);
        });
   /* $(".nav a").click(function(){
        $(this).addClass('on').siblings().removeClass("on");
    })*/
});