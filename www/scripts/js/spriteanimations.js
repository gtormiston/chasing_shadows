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
  fps: 6,
  animations: {
    monsterMove: [0, 1, 2]
  },
  loop: true,
  autoplay: true
});

$(".monster-marker").animateSprite('play', 'monsterMove');

console.log("monster should move");
}
