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
    $("header").load("header.html");
    $("#footer").load("footer.html");

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
    //3.애니메이션이 좋료될때
    //a를복사해서 뒤에 붙여넣는데 그리고 a를 삭제한다.

    //넓이
    var reviewW = $(".review .slider .box-wrap ").width();
    console.log(reviewW);

    var box = $(".review .slider .box-wrap .box").width();

    //실행
    //a 복사
    var content = $('.review .slider .box-wrap .box').first().clone();
    console.log(content);



    $('.review .slider .box-wrap').animate({ marginLeft: -reviewW }, 20000, function () {
    });






    //영양제에 호버했을때
    $('.pill .product').hover(
        function () {

            $(this).find('.des').show().css({
                backgroundColor: 'rgba(0,0,0, 0.7)'
            });
            $(this).find('.info').hide();
            $(this).find('.pill-img').css({
                width: '100%',
                float: 'none'
            });
            console.log("on")
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




