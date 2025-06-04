//index.js


/* $(document).ready(function () {
    //헤더 푸터 연결
    $("header").load("header.html");
    $("#footer").load("footer.html");

    var slidW = $('.banner-box').width();
    //자동 슬라이드
    var timer = setInterval(leftMove, 3000);

    var page = 0;
    var totalSlides = $('.banner-box').length;

    function leftMove() {
        page++
        if (page == totalSlides) {
            $('.banner').css({
                marginLeft: 0
            });
            page = 1;
        }
        $('.banner').animate({
            marginLeft: -(slidW * page)
        });
    }

    //버튼을 클릭했을 떄
    $('.banner .banner-box:last').prependTo('.banner');
    $('.banner').css('margin-left', -slidW);


    $('.btn-next a').click(function (e) {
        e.preventDefault();
        clearInterval(timer);

        $('.banner').animate({
            marginLeft: '-=' + slidW
        }, 800, function () {
            $('.banner-box:first').appendTo('.banner');
            $('.banner').css('margin-left', -slidW);
            page++;
            if (page >= totalSlides) page = 1;
            timer = setInterval(leftMove, 3000);

        });

    });

    $('.btn-prev a').click(function (e2) {
        e2.preventDefault();
        clearInterval(timer);

        $('.banner').animate({
            marginLeft: '+=' + slidW
        }, 800, function () {
            $('.banner-box:last').prependTo('.banner');
            $('.banner').css('margin-left', -slidW);
             page--;
            if (page < 1) page = totalSlides - 1;

            timer = setInterval(leftMove, 3000); // 다시 시작
        });
    });

});


 */
$(document).ready(function () {

    //상단바
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('bar-active');
        } else {
            $('header').removeClass('bar-active');
        }
    });
    //

    $(window).on('scroll', function () {
        //스크롤 위치
        var scrollTop = $(window).scrollTop();
        //이미지 위치
        var desBox = $('.desbox').offset().top;
        console.log(scrollTop, desBox);

        //700에 왔을때

        if (scrollTop > desBox - 700) {
            $(".custom ul li .box1").animate({
                opacity: 1
            }, 1000, function () {
                $(".custom ul li .box2").animate({
                    opacity: 1
                }, 1000, function () {
                    $(".custom ul li .box3").animate({
                        opacity: 1
                    },1000);
                });
            });
        }
    });



    var slidW = $('.banner-box').width();

    // 슬라이드 초기화: 마지막 슬라이드를 앞에 붙이고 margin-left 조정
    $('.banner .banner-box:last').prependTo('.banner');
    $('.banner').css('margin-left', -slidW);

    var timer = setInterval(slideNext, 3000);

    function slideNext() {
        $('.banner').animate({
            marginLeft: '-=' + slidW
        }, 800, function () {
            $('.banner-box:first').appendTo('.banner');
            $('.banner').css('margin-left', -slidW);
        });
    }

    function slidePrev() {
        $('.banner').animate({
            marginLeft: '+=' + slidW
        }, 800, function () {
            $('.banner-box:last').prependTo('.banner');
            $('.banner').css('margin-left', -slidW);
        });
    }

    $('.btn-next a').click(function (e) {
        e.preventDefault();
        clearInterval(timer);
        slideNext();
        timer = setInterval(slideNext, 3000);
    });

    $('.btn-prev a').click(function (e) {
        e.preventDefault();
        clearInterval(timer);
        slidePrev();
        timer = setInterval(slideNext, 3000);
    });

});

$(document).ready(function () {



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






    //custom icon 호버시가 안됨!
    $('.custom .icon-box').on({
        mouseenter: function () {
            var img = $(this).find('img');
            var src = img.attr('src').replace('_w2.png', '.png');
            img.attr('src', src);
        },

        mouseleave: function () {
            var img = $(this).find('img');
            var src = img.attr('src').replace('.png', '_w2.png');
            img.attr('src', src);
        }
    });
    /* function () {
       var icon = $(this).find('img').attr('src').replace('_w2.png', '');
       console.log(icon);
    
       $(this).find('img').attr('src', icon+'.png');
    
    },
    function () {
       var img = (this).find('img').attr('src');
       (this).find('img').attr('src',icon+'_W2.png')
       console.log(img); */


    //영양제에 호버했을때
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






//푸터








