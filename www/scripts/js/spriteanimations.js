function animatedGuy() {

$(".playerMarker").animateSprite({
  fps: 4,
  animations: {
    walkDown: [0, 1, 2, 3, 4, 5, 6, 7]
  },
  loop: true,
  autoplay: true
});

$(".playerMarker").animateSprite('play', 'walkDown');


console.log("hello");
}

function animatedMonsters() {
$(".monster-marker").animateSprite({
  fps: 1,
  animations: {
    monsterMove: [0, 1, 2, 1]
  },
  loop: true,
  autoplay: true
});

$(".monster-marker").animateSprite('play', 'monsterMove');

console.log("monster should move");
}

function monsterFight() {
$(".monster-fight").animateSprite({
  fps: 1,
  animations: {
    monsterFight: [0, 1, 2, 1],
    monsterHurt: [4, 5, 6, 7, 8],
    monsterDead: [3]
  },
  loop: true,
  autoplay: true
});
}

$(".monster-fight").animateSprite('play', 'monsterFight');
$(".monster-fight").animateSprite('play', 'monsterDead');
$(".monster-fight").animateSprite('play', 'monsterHurt');
