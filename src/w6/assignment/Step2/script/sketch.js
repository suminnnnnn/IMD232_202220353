let emitter;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  // colorMode(HSL, 360, 100, 100);
  emitter = new Emitter();
  gravity = createVector(0, 0.1);
}

function draw() {
  background(255);
  emitter.applyGravity(gravity);
  emitter.update();
  emitter.display();
  console.log(emitter.balls.length);
}

function mousePressed() {
  emitter.createParticles(mouseX, mouseY);
}
