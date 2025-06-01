//index.js


$(document).ready(function () {
    var slidW = $('.banner-box').width();
    //자동 슬라이드
    //setInterval(leftMove, 3000);
    var page = 0;

    function leftMove() {
        page++
        if (page == 5) {
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
    $('.btn-next a').click(function (e) {
        e.preventDefault();

        $('.banner').animate({
            marginLeft: '-=' + slidW
        }, 800, function () {
            page++
            if (page == 5) {
                $('.banner').css({
                    marginLeft: 0
                });
                page = 1;
            }
        });
    });

    $('.btn-prev a').click(function (e2) {
        e2.preventDefault();

        $('.banner').animate({
            marginLeft: '+=' + slidW
        }, 800, function () {
            page--
            if (page == 1) {
                $('.banner').css({
                    marginLeft: slidW*page
                });
                page = 5;
            }
        });
    });


});


