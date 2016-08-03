

function initAttackPage(monsterId){

  // getCurrentMonsterInfo(monsterId);
  // gets current monster details
  monsterFight();
  console.log("starting attack page");
  console.log( monsterFight()
);

  function updateAttackPage(){
    //insert details into page
    $("div#monster_id").append(currentMonsterArray.id);
    $("div#monster_id").append(currentMonsterArray.name);
    $("div#monster_id").append(currentMonsterArray.active);
    monsterFight();
    console.log("updating attack page");
  }

  $.when(getCurrentMonsterInfo(monsterId)).then(function() {
      // setInterval(function() {
    updateAttackPage();
      // }, 2000);
    });
}
