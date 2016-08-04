function initAttackPage(monsterId){

  monsterFight();
  console.log("starting attack page");
  console.log( monsterFight() );

  var hitBtn = $('button.damage'),
      hBar = $('.health-bar'),
      bar = hBar.find('.bar'),
      hit = hBar.find('.hit');

  function initData(){
    if(currentMonster.size === 0){
      monsterIsDeadOnEntry();
    } else {
      $("#monster_name").text(currentMonster.name);
      $("#monster_size").text(currentMonster.size);
      $(".health-bar").attr("data-value", currentMonster.size);
      $(".health-bar").attr("data-total", currentMonster.size);
    }
  };

  function updateAttackPage(){

        monsterFight();
        //insert details into page
        // $("div#monster_id").append(currentMonster.id);
        $("#monster_name").text(currentMonster.name);
        // $("div#monster_id").append(currentMonster.active);
        $("#monster_size").text(currentMonster.size);
        $(".health-bar").attr("data-value", currentMonster.size);
        var total = hBar.data('total'),
            value = currentMonster.size;

        console.log( "currentMonster.size: " + currentMonster.size);
        console.log("total: " + total);
        console.log("value: " + value);

        var damage = 1;
        // damage = 1;
        var newValue = currentMonster.size;
        // hBar.attr('data-value', newValue);
        // calculate the percentage of the total width
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";
        hit.css('width', hitWidth);
        // bar.css('width', total - value);
        hBar.data('value', newValue);

        setTimeout(function(){
          hit.css({'width': '0'});
          bar.css('width', barWidth + "%");
        }, 500);
        console.log(value, damage, hitWidth);



      if(currentMonster.size === 0){
          monsterIsDead();
      }
    }

    $.when(getCurrentMonsterInfo(monsterId)).then(function() {
      initData();
      // $(".health-bar").attr("data-value", currentMonster.size)
  });

    function monsterIsDeadOnEntry(){
      $(".monster-fight").animateSprite('play', 'monsterDead');
      alert("This monster is dead!");
      setTimeout(function(){
        clearContentPage();
      }, 1000);
    }

    function monsterIsDead(){
      alert("You killed the monster!");
      $(".monster-fight").animateSprite('play', 'monsterDead');
      setTimeout(function(){
        clearContentPage();
      }, 1000);
    }

    

  // attack button event listener
  $("#attack").on("click", function() {
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
