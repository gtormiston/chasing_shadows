

function initAttackPage(monsterId){

  // getCurrentMonsterInfo(monsterId);
  // gets current monster details

  function updateAttackPage(){
    //insert details into page
    $("div#monster_id").append(currentMonster.id);
    $("div#monster_id").append(currentMonster.name);
    $("div#monster_id").append(currentMonster.active);
    $("div#monster_id").append(currentMonster.size);

  }

  $.when(getCurrentMonsterInfo(monsterId)).then(function() {
    updateAttackPage();
  });

  $("#attack" ).on( "click", function() {
    console.log("button clicked");
    $.when(attackCurrentMonster(monsterId)).then(function() {
      $.when(getCurrentMonsterInfo(monsterId)).then(function() {
        updateAttackPage();
      });
    });
  });

}