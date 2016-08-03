

function initAttackPage(monsterId){

  // getCurrentMonsterInfo(monsterId);
  // gets current monster details

  function updateAttackPage(){
    //insert details into page
    $("div#monster_id").append(currentMonsterArray.id);
    $("div#monster_id").append(currentMonsterArray.name);
    $("div#monster_id").append(currentMonsterArray.active);
  }

  $.when(getCurrentMonsterInfo(monsterId)).then(function() {
      // setInterval(function() {
    updateAttackPage();
      // }, 2000);
    });
}