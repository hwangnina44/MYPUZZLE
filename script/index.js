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
    var reviewW = $(".review .slider .box-wrap ").width();
    console.log(reviewW);
    rev();
    function rev() {
        for (var n = 1; n <= reviewW; n++) {
            $('.review .slider .box-wrap').animate({ marginLeft: -n }, 10);
            if (n == reviewW) {
                $('.review .slider .box-wrap').css({
                    marginLeft: 0
                });
            }
        }

    }
});

$(document).ready(function () {

    const num = 14938; // 최종 숫자자
    var countTo = $('.counter').text();
    console.log(countTo);

    //1씩 증가시켜서 최종 숫자까지
    function total() {
        for (var i = 1; i <= num; i++) {
            $('.counter').text(i).animate({
                
            },1000);
        }
    }

    total();


    //
    /* $({ countNum: $counter.text() }).animate({
      countNum: countTo
    },
    {
      duration: 2000,
      easing: 'swing',
      step: function () {
        $counter.text(Math.floor(this.countNum));
      },
      complete: function () {
        $counter.text(this.countNum);
      }
    }); */
});
