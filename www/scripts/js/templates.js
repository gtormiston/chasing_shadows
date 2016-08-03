function load_sign_up_page(callback){
  $("#content").html($("#form_page").html());
  callback();
}

function load_welcome_page(){
  $("#content").html($("#welcome_page").html());
}

function load_game_page(){
  $("#content").html($("#gameplay_page").html());
}

function match_height_maps(){
  $("#google_map").css("height", $(document).height());
}

function load_sign_in_page(callback) {
  $("#content").html($("#sign_in_form_page").html());
  callback();
}

function load_attack_page(monsterId){

  $("#content").html($("#attack_page").html());
  attack_page_height();
  // var id = monsterId;
  // $("div#monster_id").text(id);
  // console.log("MonsterId is: " + monsterId);

  initAttackPage(monsterId);
  // updateAttackPage();
}
