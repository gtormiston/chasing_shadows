

function initAttackPage(monsterId){

  // getCurrentMonsterInfo(monsterId);
  // gets current monster details
  monsterFight();
  console.log("starting attack page");
  console.log( monsterFight() );

  function updateAttackPage(){
    //insert details into page

    monsterFight();
    console.log("updating attack page");
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
        $(".monster-fight").animateSprite('fps', 10);
        $(".monster-fight").animateSprite('play', 'monsterHurt');
        setInterval(function(){
          $(".monster-fight").animateSprite('fps', 3);
          $(".monster-fight").animateSprite('play', 'monsterFight');
        },1000);
      });
    });
  });
}
