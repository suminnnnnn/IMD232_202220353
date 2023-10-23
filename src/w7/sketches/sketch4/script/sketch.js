let emitter;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 10, 100);
  background(255);
  emitter = new Emitter();
  noStroke();
}

function draw() {
  background(255);
  emitter.update();
  emitter.display();
  console.log(emitter.particles.length);
}

function mouseClicked() {
  emitter.addParticles(mouseX, mouseY);
}
