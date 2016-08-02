function animatedGuy() {

$(".marker").animateSprite({
  fps: 10,
  animations: {
    walkDown: [0, 1, 2, 3, 4, 5, 6, 7]
  },
  loop: true
});

$(".marker").animateSprite('play', 'walkDown');


console.log("hello");
}
