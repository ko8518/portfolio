function modalClose(){
  $("#modal_front").hide(200)
  $("#modal_back").hide(200)
}

function modalOpen(name,engName,link,image,intro){
  
    var html = `
    <div class="content_top">
        <h2>
          ${(name)}
          <span>${engName}</span>
        </h2>
        <h3>${intro}</h3>
        <p>기여도 : 100%</p>
        <div class="link">
          <a href="http://${link}" target="_blank">웹사이트 바로가기</a>
        </div>
        <strong>
          기존의 웹페이지를 분석하여 반응형웹페이지로 리뉴얼 제작한 미래지향형 네이티브 웹사이트
        </strong>
      </div>
      <div class="content_mid">
        <img src="${image}" alt="메가박스 웹기획서/시안디자인">
      </div>
    </div>
    `
  $(".work_content").html(html)

  $("#modal_front").show(200)
  $("#modal_back").show(200)
}