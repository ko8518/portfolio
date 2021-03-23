let thisIndex = 0;
     
// 패이지네이션 이벤트
$('.btn_page li').on('click',function(){
  $('.btn_page li').removeClass('active');
  $(this).addClass('active');
  thisIndex = $(this).index();
  sliderChange();
})
// 앞으로 이벤트
$('#btn_prev').on('click',function(){
  thisIndex == 0 ? thisIndex++ : thisIndex--;
  sliderChange();
})
  // 뒤로로 이벤트
$('#btn_next').on('click',function(){
  thisIndex == 1 ? thisIndex-- : thisIndex++;
  sliderChange();
})
//스크롤 이벤트
$(window).on('scroll',function(){
  let docTop = $(document).scrollTop();
  if(docTop >= 200){
    $('.about_content h3,.about_content h2,.about_content p').addClass('active');
    $('.about_content').addClass('hide');
  }else{
    $('.about_content h3,.about_content h2,.about_content p').removeClass('active');
    $('.about_content').removeClass('hide');
  }        
})

//포트폴리오 링크
// $('.hl_port').on('click',function(){
//   let actIndex = $(this).index();
//   if(actIndex == 0){
//     location.href='./work_mega.html';
//   }else if(actIndex == 1){
//     location.href='./work_hansol.html';
//   }else if(actIndex == 2){
//     location.href='./work_indigo.html';
//   }else{
//     location.href='./work_mozilla.html';
//   }
// })


