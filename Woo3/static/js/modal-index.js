$(function () {
  $("section#login_modal").click();

  $("#login_pop").click(function () {
    $("section#login_modal").show();
  });

  $("#btn_login").click(function () {
    //일단 그냥 클릭만 해야 넘어감
    $("section#login_modal").hide();
  });
  $("#btn_resister").click(function () {
    alert("Short Navi에 오신 것을 환영합니다!");
    location.href = "main-login.html";
  });
});
