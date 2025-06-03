//index.js


$(document).ready(function () {
    var slidW = $('.banner-box').width();
    //자동 슬라이드
    //setInterval(leftMove, 3000);
    var page = 0;

    function leftMove() {
        page++
        if (page == 4) {
            $('.banner').css({
                marginLeft: slidW
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

        $('.banner').animate({
            marginLeft: '-=' + slidW
        }, 800, function () {
            $('.banner-box:first').appendTo('.banner');
            $('.banner').css('margin-left', -slidW);
        });
    });

    $('.btn-prev a').click(function (e2) {
        e2.preventDefault();

        $('.banner').animate({
            marginLeft: '+=' + slidW
        }, 800, function () {
            $('.banner-box:last').prependTo('.banner');
            $('.banner').css('margin-left', -slidW);
        });
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




