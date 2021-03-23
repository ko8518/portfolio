var width_size = window.outerWidth;
var divX = $(".text3").offset().left;
var divY = $(".text3").offset().top-30;
var divY2 = $(".my_photo").offset().top-30;
var check = 2
function showhidden(num){
  width_size = window.outerWidth;
  divX = $(".text3").offset().left;
  divY = $(".text3").offset().top-30;
  divY2 = $(".my_photo").offset().top-30;
  $(".hiddenContents").show()
  if(num ==1){
    check = 1
    if(width_size >= 1200){
      $(".hiddenContents").css('height',$(".aboutText").height()-100)
      $(".hiddenContents").css('width',$(".aboutText").width()+100)
      $(".hiddenContents").css('top',divY2)
     
     $(".hiddenContents").animate({"left":divX-200},1000);
  }
    if (width_size >= 768 && width_size < 1200) {
      $(".hiddenContents").css('top',divY2)
      $(".hiddenContents").css('height',$(".aboutText").height())
      $(".hiddenContents").css('width',$(".text1").width())
      $(".hiddenContents").css('top',divY2)
      $(".hiddenContents").animate({"left":divX},1000);
    }
   if (width_size < 768) {
    $(".hiddenContents").css('top',divY2)
    $(".hiddenContents").css('height',$(".my_photo").height()+30)
    $(".hiddenContents").animate({"left":"0px"},1000);
    $(".hiddenContents").css('width',width_size)
    }
    
    $(".btn1").hide();
    $(".btn2").show();
  }else{
    check = 2
    $(".hiddenContents").animate({"left":"-" + width_size + "px"}, 1000);
    $(".btn2").hide();
    $(".btn1").show();

  }
}

$(window).resize(function() {
  width_size = window.outerWidth;
  divX = $(".text3").offset().left;
  divY = $(".text3").offset().top-30;
  divY2 = $(".my_photo").offset().top-30;
  if(check == 1){
  if(width_size >= 1200){
$(".hiddenContents").css('height',$(".aboutText").height()-100)
  $(".hiddenContents").css('width',$(".aboutText").width()+100)
     $(".hiddenContents").css('top',divY2)
     $(".hiddenContents").css('left',divX-200)
  }
    if (width_size >= 768 && width_size < 1200) {

      $(".hiddenContents").css('height',$(".aboutText").height())
  $(".hiddenContents").css('width',$(".text1").width())
     $(".hiddenContents").css('top',divY2)
     $(".hiddenContents").css('left',divX)
 
    }
   if (width_size < 768) {
    $(".hiddenContents").css('top',divY2)
    $(".hiddenContents").css('height',$(".my_photo").height()+30)
    $(".hiddenContents").css('left','0px')
    $(".hiddenContents").css('width',width_size)
    }
  }
});