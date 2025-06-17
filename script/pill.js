//pill.js
$(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('bar-active');
        } else {
            $('header').removeClass('bar-active');
        }
    });

    $('nav p').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
});



$(document).ready(function () {

    //초기설정
    $('.list li').hide();
    $('.list li').slice(0, 4).show();

    //slice(start, end) : 시작 인덱스부터 종료 인덱스 이전까지!
    //slice(0,4) : 인덱스 0번부터 4번 이전까지! >> 0,1,2,3



    $('.btn-more a').on('click', function (evt) {

        evt.preventDefault();

        var hiddenBox = $('li:hidden').length;
        console.log('숨겨진 box 갯수: ' + hiddenBox); //12

        if (hiddenBox >= 0) {
            $('li:hidden').slice(0, 4).slideDown();
        } else
    });
   



});

