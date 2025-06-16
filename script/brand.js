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
        //console.log('페이지 offset :' + pageTop);

        $('html,body').animate({
            scrollTop: pageTop + 'px'
        }, 800, function () {
            $('.page').eq(pageCount).find('.des').fadeIn();
            stat = 0;
        });
        
    });


    $('.side-pager li a').on ('click',function(e){
        //a의 기능 막기
        e.preventDefault();
        //클릭된 메뉴와 현재 페이지 번호 일치 시키기!
        //클릭 이후에 휠 이벤트가 발생할 경우, 현재 페이지를 기준으로 이동이하므로 실제 보여지는 페이지와 현재 페이지 번호를 일치 시켜주는 것이 필요!
        var idx= $(this).parent().index();
        console.log("클릭된 a 부모(li) index값:"+idx);
        pageCount=idx;

    
        console.log("변경된페이지 번호:"+pageCount);
        //스크롤 이동거리 구하기2 -pageCount
        var pageTop= $('.page').eq(pageCount).offset().top;
        //var pageTop= $('.page').eq(idx).offset().top;



        //스크롤에 이동거리 구하기 1 - 클릭된 a 의  href값 활용하기
/*         var pid = $(this).attr('href');
        console.log(pid);
        var pageTop = $(pid).offset().top; 
        console.log('페이지가 문서로 부터 떨어진거리 : '+pageTop); */
        //이동
        $('html,body').animate({
            scrollTop : pageTop
        },800);
       //메뉴변경
       //menuChg();
       menuChg (pageCount);
    });

});
   


//메뉴 변경 함수
//함수명 : menuChg
//기능 : .gnb와 .side-pager메뉴 동시 변경
function menuChg (){
    $(".side-pager li").eq(pageCount).addClass('on').siblings().removeClass('on');
};