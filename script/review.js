$(function(){
    $('nav p').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

     $('nav p.pill').click(function(){
       $('.review li').hide(); 
       $('.review li.pill').show();
     
    });

     $('nav p.subscription').click(function(){
       $('.review li').hide(); 
       $('.review li.subscription').show();
    });

     $('nav p.all').click(function(){
       $('.review li').show();
    });
});

$(document).ready(function () {
  // 초기 설정: 처음 4개만 보이기
  $('.review-box').hide().slice(0, 3).show();

  let index = 4; // 다음에 보여줄 li의 시작 인덱스
  let isLoading = false;

  $(window).on('scroll', function () {
      // 스크롤이 화면 하단 근처에 도달했을 때만 동작
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
          if (isLoading) return; // 중복 방지

          isLoading = true;

          const hiddenItems = $('.review-box:hidden');

          if (hiddenItems.length > 0) {
              hiddenItems.slice(0, 3).slideDown(800, function () {
                  isLoading = false;
              });
          } 
          if ($(window).scrollTop() + $(window).height() >= $(document).height() - 700){
            $('.btn-more').fadeOut();
        }
      }
  });
});