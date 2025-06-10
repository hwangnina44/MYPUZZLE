//slideCahnge,js
//alert('연결');
var pageCount = 0;
const total = 5;
var stat = 0; //스크롤 상태 변경(0-실행전/허용, 1-실행중/잠금)

//상단바 함수//////////////////////////////////////////////////////////
function setTransparentGNB() {
    $('header').addClass('transparent');
    $('header').removeClass('bar-active');
    $('.logo img').attr('src', '../img/Logo_w.png');
    $('.login .icon-login img').attr('src', '../img/icon/icon_login_w.png');
    $('.login .icon-cart img').attr('src', '../img/icon/icon_cart_w.png');

}

// 실행형 헤더로 바꾸는 함수
function setDefaultGNB() {
    $('header').addClass('bar-active');
    $('header').removeClass('transparent');

    $('.logo img').attr('src', '../img/Logo.png');
    $('.login .icon-login img').attr('src', '../img/icon/icon_login.png');
    $('.login .icon-cart img').attr('src', '../img/icon/icon_cart.png');
}

$(document).ready(function () {

    setTransparentGNB();
    $('#mypuzzle h2').fadeIn(3000);
    $('#mypuzzle p').delay(3000).fadeIn(3000);

    $('.side-pager li a').on('click', function(e){
        //a의 기본기능 막기!
        e.preventDefault();
        var idx = $(this).parent().index();
        console.log(idx);
        pageCount = idx;

        $('.side-pager li').eq(pageCount).addClass('on').siblings().removeClass('on');
        
        var pageTop = $('.page').eq(pageCount).offset().top;
        
        $('html, body').animate({
            scrollTop: pageTop
        }, 800);
    });

    
    $(document).on('mousewheel DOMMouseScroll', function () {
        if (stat === 1) return false;
        stat = 1;
        var evt = window.event;
        var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;

        //!!4. 파이어폭스 브라우저를 위한 처리!
        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.detail;
        }
        if (delta < 0) {
            pageCount++;
            setDefaultGNB();
            if (pageCount === total) pageCount = total - 1;
            
        } else {
            pageCount--;
            setTransparentGNB();
            if (pageCount === -1) {
                pageCount = 0;
            }
        }
        var pageTop = $('.page').eq(pageCount).offset().top;
        console.log('페이지 offset :' + pageTop);

        $('html,body').animate({
            scrollTop: pageTop + 'px'
        }, 800, function () {
            stat = 0;
        });
        
    });

   
});