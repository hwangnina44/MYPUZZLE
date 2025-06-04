//pill.js
$(function(){

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $('header').addClass('bar-active'); 
        } else {
          $('header').removeClass('bar-active'); 
        }
      });
      
    $('nav p').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
});