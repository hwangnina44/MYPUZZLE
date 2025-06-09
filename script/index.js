//index.js


// 기본형 헤더로 바꾸는 함수
function setTransparentGNB() {
    $('header').addClass('transparent');
    $('header').removeClass('bar-active');
    $('.logo img').attr('src', 'img/Logo_w.png');
    $('.login .icon-login img').attr('src', 'img/icon/icon_login_w.png');
    $('.login .icon-cart img').attr('src', 'img/icon/icon_cart_w.png');

}

// 실행형 헤더로 바꾸는 함수
function setDefaultGNB() {
    $('header').addClass('bar-active');
    $('header').removeClass('transparent');

    $('.logo img').attr('src', 'img/Logo.png');
    $('.login .icon-login img').attr('src', 'img/icon/icon_login.png');
    $('.login .icon-cart img').attr('src', 'img/icon/icon_cart.png');
}

$(document).ready(function () {
    setTransparentGNB();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            setDefaultGNB();
        } else {
            setTransparentGNB();
        }
    });

    ////////////////////////////슬라이드/////////////////////////////////////////
    var slidW = $('.banner-box').width();
    var page = 0;
    var total = $('.banner-box').length;
    console.log(total);

    $('.pager a').eq(page).css({
        backgroundColor: '#fff'
    });

    var timer = setInterval(slide, 2000);

    function slide() {
        if (page < total - 1) {
            page++
            $('.banner').animate({
                marginLeft: -(page * slidW)
            }, 800);
        } else if (page == total - 1) {
            $('.banner').css({
                marginLeft: 0
            });
            page = 0;
        }

        $('.pager a').eq(page).css({
            backgroundColor: '#fff'
        }).siblings().css({
            backgroundColor: 'transparent'
        });
    }

    $('.slide .pager > a').click(function (e) {
        clearInterval(timer);
        e.preventDefault();

        var index = $(this).index(); // 클릭한 a 요소의 인덱스
        page = index; // 전역 변수 page 업데이트
        $('.banner').animate({
            marginLeft: -(page * slidW)
        }, 800, function () {
            $('.pager a').eq(page).css({
                backgroundColor: '#fff'
            }).siblings().css({
                backgroundColor: 'transparent'
            });
        });
        timer = setInterval(slide, 3000);
    });

     /////영양제에 호버했을때///////////////////////////////////////////////
     $('.pill .product').hover(
        function () {

            $(this).find('.des').show().css({
                backgroundColor: 'rgba(60,17,82, 0.6)'
            });
            $(this).find('.info').hide();
            $(this).find('.pill-img').css({
                width: '100%',
                float: 'none'
            });
        },
        function () {
            console.log("off")
            $(this).find('.des').hide();
            $(this).find('.info').show();
            $(this).find('.pill-img').css({
                width: '50%',
                float: 'left'
            });
        }
    );

});



$(document).ready(function () {

    ////////////////////리뷰///////////////////////////////////
    //넓이
    var reviewW = ($(".review .slider .box-wrap").width());
    var box = $(".review .slider .box-wrap .box").width();
    console.log(reviewW, box);
    //실행
    //a 복사
    var content = $('.review .slider .box-wrap').clone().appendTo('.review .slider').css({
        float: 'left'
    });

    //console.log(content);
    // setInterval(move,3000)
    move();

    function move() {

        $('.review .slider .box-wrap').animate({
            marginLeft: "-=" + reviewW
        }, 50000, function () {
            $('.review .slider .box-wrap').css({
                marginLeft: 0
            });
        });
        $('.review .slider .box-wrap box').clone().appendTo('.review .slider .box-wrap').css({
            float: 'left'
        });
    }


});