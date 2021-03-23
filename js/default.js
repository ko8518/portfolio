// 내비오픈 이벤트
$('#btn_open_nav').on('click',function(){
  $('.nav').addClass('active');
});

// 내비크로스 이벤트
$('#btn_nav_close i').on('click',function(){
  $('.nav').removeClass('active');
});

//스크롤 이벤트
$(window).on('scroll',function(){
  let docTop = $(document).scrollTop();
  if(docTop >= 200){
    $('.header').addClass('mo_scroll');
  }else{
    $('.header').removeClass('mo_scroll');
  }        
})


