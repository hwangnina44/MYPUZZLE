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
    // 초기 설정: 처음 4개만 보이기
    $('.list li').hide().slice(0, 4).show();

    let index = 4; // 다음에 보여줄 li의 시작 인덱스
    let isLoading = false;

    $(window).on('scroll', function () {
        // 스크롤이 화면 하단 근처에 도달했을 때만 동작
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
            if (isLoading) return; // 중복 방지

            isLoading = true;

            const hiddenItems = $('.list li:hidden');

            if (hiddenItems.length > 0) {
                hiddenItems.slice(0, 4).slideDown(800, function () {
                    isLoading = false;
                });
            } 
        }
    });
});
