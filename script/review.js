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