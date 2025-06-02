//pill.js
$(function(){
    $('nav p').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
});