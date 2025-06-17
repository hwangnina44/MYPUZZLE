//pill.js
$(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('bar-active');
        } else {
            $('header').removeClass('bar-active');
        }
    });

    $('nav p').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
});



$(document).ready(function () {

    //초기설정
    $('.list li').hide();
    $('.list li').slice(0, 4).show();

    //slice(start, end) : 시작 인덱스부터 종료 인덱스 이전까지!
    //slice(0,4) : 인덱스 0번부터 4번 이전까지! >> 0,1,2,3

    /* 
      
      $('.btn-more a').on('click',function(evt){
    
          evt.preventDefault();
    
          var hiddenBox = $('li:hidden').length;
          console.log('숨겨진 box 갯수: ' +hiddenBox); //12
    
          //1) 숨겨진 상품이 없을 때, alert 알림창 띄우기
          if (hiddenBox === 0) {
              alert('마지막 상품입니다!');
              return false;
          }
    
          //숨겨진 박스 등장!
          $('li:hidden').slice(0,4).slideDown(); */

    //2) 숨겨진 상품이 없을 때, loadMore 버튼 숨기기

    /* hiddenBox = $('.box:hidden').length;

    if(hiddenBox === 0) {
        $('#loadMore').fadeOut();
    } */
    /* 
          //스크롤 애니메이션
          var offTop = $(this).offset().top;
    
          $('html, body').animate({
              scrollTop: offTop
          }, 1500);
    
      });  */
      $(window).scroll(function(){

        var scroll =$(window).scrollTop();


        //var imgTop =$('.list li').eq(7).offset().top;
        console.log(scroll);

        if(scroll>200){
           
        }
      });
      

    $('.totop > a').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


});

$(document).ready(function () {
    // 초기 설정: 처음 4개만 보이기
    $('.list li').hide().slice(0, 4).show();

    let index = 4; // 다음에 보여줄 li의 시작 인덱스
    let isLoading = false;

    $(window).on('scroll', function () {
        // 스크롤이 화면 하단 근처에 도달했을 때만 동작
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
            if (isLoading) return; // 중복 방지

            isLoading = true;

            const hiddenItems = $('.list li:hidden');

            if (hiddenItems.length > 0) {
                hiddenItems.slice(0, 4).slideDown(400, function () {
                    isLoading = false;
                });
            } else {
                // 모두 보여졌으면 이벤트 제거 (선택사항)
                $('.btn-more').fadeOut();
            }
        }
    });
});

//스크롤 이벤트
$(window).scroll(function () {

    //console.log('스크롤 이벤트 발생!!!!!');

    //현재 스크롤 위치값 반환!
    var scTop = $(this).scrollTop();
    console.log(scTop);

    if (scTop > 200) {
        $('.totop').fadeIn();
    } else {
        $('.totop').fadeOut();
    }

});