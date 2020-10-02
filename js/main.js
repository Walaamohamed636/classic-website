//for the slider to take full height
$(document).ready(function () {
        $(".slide").height($(window).height());
        $(window).resize(function () {
                $(".slide").height($(window).height())
        });
        $(".slide .nav li a ").click(function(e){
                e.preventDefault;
               ``
        });
        $(".slide .nav li ").click(function(e){
                e.preventDefault;
                $(this).addClass("active").siblings().removeClass("active")
        });
        $('.slider').bxSlider({
                pager:false
        });
      $(".slider").each(function(){
              $(this).css("paddingTop",($(window).height()-$(".slider div").height())/ 2 )
      });
      (function autoslider(){

        $(".autoslide .active").each(function(){
                if (!$(this).is(":last-child")) {
                     $(this).delay(3000).fadeOut(1000,function () {
                            $(this).removeClass("active").next().addClass("active").fadeIn();
                            autoslider();
                     })  ;

                }
                else{
                        $(this).delay(3000).fadeOut(1000,function(){
                                $(this).removeClass("active");
                                $(".autoslide div").eq(0).addClass("active").fadeIn();
                                autoslider();
                        })
                }
        })





     }());
   

     //adjust shuffling li
     $(".shuffling ul li").click(function(){
             
        $(this).addClass("active").siblings().removeClass("active");

    });
   //adjust shuffling plugin
   // $('#container').mixItUp();

    $("body").niceScroll({
        cursorcolor:"turquoise",
        cursorwidth:"10px",
        zindex: "44",
       
        cursordragspeed: 1
    });







})
