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
