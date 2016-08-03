function load_sign_up_page(callback){
  $("#content").html($("#form_page").html());
  callback();
  document.getElementById("sign_up_link").style.visibility = "hidden";
}

function load_welcome_page(){
  $("#content").html($("#welcome_page").html());
  document.getElementById("myNavbar").style.visibility = "hidden";
  document.getElementById("sign_up_link").style.visibility = "hidden";
}

function load_game_page(){
  $("#content").html($("#gameplay_page").html());
  document.getElementById("sign_up_link").style.visibility = "hidden";
}

function match_height_maps(){
  $("#google_map").css("height", $(document).height());
}

function load_sign_in_page(callback) {
  $("#content").html($("#sign_in_form_page").html());
  callback();
  document.getElementById("login_link").style.visibility = "hidden";
  document.getElementById("sign_up_link").style.visibility = "visible";
}

function load_attack_page(monsterId){

  $("#content").html($("#attack_page").html());
  attack_page_height();
  initAttackPage(monsterId);
}
