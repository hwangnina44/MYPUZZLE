//custom.js


$(function () {
    $(window).on('scroll', function () {
        // 현재 y 스크롤 위치
        var scrollTop=$(window).scrollTop();

        // 이미지 y 위치

        var img1OffsetTop =$('.imgbox1').offset().top;

        // 두 값을 비교해서
        if(scrollTop > img1OffsetTop -600){
            $('.imgbox1').css({
                left: 0,
                opacity : 1
            })
        }

        var img2OffsetTop =$('.imgbox2').offset().top;
        if(scrollTop > img2OffsetTop -600){
            $('.imgbox2').css({
                left: 0,
                opacity : 1
            })
        }

        var img3OffsetTop =$('.imgbox3').offset().top;
        if(scrollTop > img3OffsetTop -600){
            $('.imgbox3').css({
                left: 0,
                opacity : 1
            })
        }

    });
});