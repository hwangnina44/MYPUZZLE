$(function(){

   $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $('header').addClass('bar-active'); 
      } else {
        $('header').removeClass('bar-active'); 
      }
    });

    
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