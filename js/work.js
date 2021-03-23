$(window).on('scroll',function(){
  let docTop = $(document).scrollTop();
  if(docTop >= 300){
    $('.content_top').addClass('sticky');
  }else{
    $('.content_top').removeClass('sticky');
  }  
})