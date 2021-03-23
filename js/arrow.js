function changedis(num){
  if(num==1){
    $(".text1").hide(200)
    $(".text2").show(200)
    $(".arrow1").hide()
    $(".arrow2").show()
  }else{
    $(".text1").show(200)
    $(".text2").hide(200)
    $(".arrow1").show()
    $(".arrow2").hide()
  }
}