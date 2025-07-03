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
    //////////////////////////////GNB///////////////////////////
    setTransparentGNB();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            setDefaultGNB();
        } else {
            setTransparentGNB();
        }
    });
});



//////////////banner-section////////////////////////////////
$(document).ready(function () {
    setTransparentGNB();

    var slideW = $('.banner-box').width();
    var page = 0;
    var total = $('.banner-box').length;
    console.log(total);

    //초기설정
    $('.pager a').eq(page).css({
        backgroundColor: '#fff'
    });

    //첫번째 슬라이드의 글자 등장!
    $('.banner-box').first().find('.inbox').fadeIn(600);

    var timer = setInterval(slide, 4000);

    function slide() {

        //한 번의 이동, 한 번의 준비
        $('.banner').animate({
            marginLeft: -slideW
        }, 800, function () {
            //글자등장!
            showTxt();

            //콜백함수 - 이동이 끝난 후, 다음을 위한 준비
            $('.banner').append($('.banner-box').first()).css({
                marginLeft: 0
            });

        });

        //현재 보여지는 .banner-box의 data-seq 값 받아오기!
        //이 값을 pager의 인덱스로 사용!
        //eq(1)은 다음에 보여지는 슬라이드는 항상 두번째 슬라이드이므로!!!
        var seq = $('.banner-box').eq(1).attr('data-seq');
        console.log(seq);

        pager(seq);

    }

    //슬라이드 - 글자등장 함수 
    function showTxt() {
        //초기화
        $('.inbox').hide();
        $('.banner-box').eq(1).find('.inbox').fadeIn(600);
    }

    //슬라이드 - 메뉴변경 함수 
    function pager(num) {
        $('.pager a').eq(num).css({
            backgroundColor: '#fff'
        }).siblings().css({
            backgroundColor: 'transparent'
        });
    }



    $('.slide .pager > a').click(function (e) {
        clearInterval(timer);
        e.preventDefault();
        $('.inbox').hide();

        var index = $(this).index(); // 클릭한 a 요소의 인덱스
        page = index; // 전역 변수 page 업데이트
        $('.banner').animate({
            marginLeft: -(page * slideW)
        }, 800, function () {
            $(this).find('.inbox').fadeIn(600);
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
                $(this).next().fadeTo(1000, 1, function () {
                    $(this).next().fadeTo(1000, 1);
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



/////////////custom-section////////////////////////////////
$(document).ready(function () {
    $('.custom .content').css({
        opacity: 0
    });

    $(window).on('scroll', function () {
        var customImg = $('.custom .content-wrap').offset().top;
        var scroll = $(window).scrollTop();
        console.log(customImg, scroll);


        if (scroll > customImg - 800) {
            $('.custom .con1').fadeTo(1000, 1, function () {
                $(this).next().fadeTo(1000, 1, function () {
                    $(this).next().fadeTo(1000, 1);
                });
            });
        }

    });


});



///////////////////review-section/////////////////////////////////
$(document).ready(function () {
    var autocall;
    var moveNum = 0;

    autocall = setInterval(flow, 20);
    //>>호버
    $(".box-wrap .box").hover(
        function () {
            clearInterval(autocall);
        },
        function () {
            autocall = setInterval(flow, 20);

        }
    );


    //>>리뷰 슬라이드
    function flow() {

        moveNum++; //left 이동값을 1씩 증가

        var boxWidth = $('.box-wrap .box').outerWidth(true);
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




///////////////////////review -section/////////////////////////////
$(function () {
    //>>숫자 카운트 
    var count = 0;
    var target = 13950;
    var duration = 1000;
    var step = Math.ceil(target / (duration / 10));
    var isCounted = false; // 숫자 중복 카운트 방지용

    var review = $('article.review').offset().top;

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (!isCounted && scroll > review - 800) {
            isCounted = true; // 한 번만 실행되게

            var interval = setInterval(function () {
                count += step;
                if (count >= target) {
                    count = target;
                    clearInterval(interval);
                }
                $(".number").eq(0).text(count.toLocaleString());
            }, 10);
        }
    });
});



///////////////product///////////////////////////////////////////////
$(function () {
    /////>>영양제에 호버했을때
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