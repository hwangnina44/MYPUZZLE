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

    //////////////////////////// 배너 슬라이드/////////////////////////////////////////
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

    

    /////////////custom/////////////////////////////////////////////////

    ////
    $('.custom .content').css({
        opacity: 0
    });

    $(window).on('scroll', function () {
        var customImg = $('.custom .content-wrap').offset().top;
        var scroll = $(window).scrollTop();
        console.log(customImg, scroll);


        if (scroll > customImg - 800) {
            $('.custom .con1').fadeTo(1000, 1, function () {
                $(this).next().fadeTo(1000, 1,function(){
                    $(this).next().fadeTo(1000,1);
                });
            });
        }
    });









    /////영양제에 호버했을때///////////////////////////////////////////////
    $('.pill .product').hover(
        function () {

            $(this).find('.des').show().css({
                backgroundColor: 'rgba(0,0,0, 0.3)'
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
    var autocall;
    var moveNum = 0;

    autocall = setInterval(flow, 20);
    ////////////////////호버///////////////////////////////////
    $(".box-wrap .box").hover(
        function () {
            clearInterval(autocall);
        },
        function () {
            autocall = setInterval(flow, 20);

        }
    );


    ////////////////////리뷰///////////////////////////////////
    function flow() {

        moveNum++; //left 이동값을 1씩 증가

        var boxWidth = $('.box-wrap .box').outerWidth(true);
        console.log(boxWidth + '박스너비');

        //if else 문
        if (moveNum > boxWidth) {

            $('.box-wrap').append($('.box-wrap .box').first()).css({
                left: 0,
            });

            moveNum = 0;

        } else {
            //moveNum의 값을 left 값으로 적용!
            $('.box-wrap').css({
                left: -moveNum
            });
        }

    }

});