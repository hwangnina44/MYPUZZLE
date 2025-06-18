$(function(){

   $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $('header').addClass('bar-active'); 
      } else {
        $('header').removeClass('bar-active'); 
      }
    }
  );

    
    $('nav p').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    //
    var tab;
    $('nav p.life').click(function(){
       $('.list li').hide(); 
       $('.list li.life').show();
     
    });

     $('nav p.issue').click(function(){
       $('.list li').hide(); 
       $('.list li.issue').show();
       //필터기능 넣구싶은데 못하겠음음
        // tab=$('.list li').show().lenght;
        //console.log(tab);
    });

     $('nav p.vitamin').click(function(){
       $('.list li').hide(); 
       $('.list li.vitamin').show();
    });

    $('nav p.season').click(function(){
       $('.list li').hide(); 
       $('.list li.season').show();
    });
     $('nav p.all').click(function(){
       $('.list li').show();
    });
});


$(document).ready(function () {
    // 초기 설정: 처음 4개만 보이기
    $('.list li').hide().slice(0, 3).show();

    let index = 4; // 다음에 보여줄 li의 시작 인덱스
    let isLoading = false;

    $(window).on('scroll', function () {
        // 스크롤이 화면 하단 근처에 도달했을 때만 동작
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
            if (isLoading) return; // 중복 방지

            isLoading = true;

            const hiddenItems = $('.list li:hidden');

            if (hiddenItems.length > 0) {
                hiddenItems.slice(0, 3).slideDown(800, function () {
                    isLoading = false;
                });
            } 
        }
    });
});