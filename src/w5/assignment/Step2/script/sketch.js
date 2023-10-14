let pendulumA;
let pendulumB;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  pendulumA = new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 25);
  pendulumB = new Pendulum(
    pendulumA.ballPos.x,
    pendulumA.ballPos.y,
    height / 3,
    (TAU / 360) * 45,
    25
  );

  pendulumA.setChild(pendulumB);

  gravity = createVector(0, 0.5);

  background(255);
}

function draw() {
  pendulumA.applyGravity(gravity);
  pendulumA.update();

  pendulumB.pos.set(pendulumA.ballPos);
  pendulumB.update();

  background(255);
  pendulumA.display();
  pendulumB.display();
}

function mouseMoved() {
  pendulumA.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  pendulumA.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  pendulumA.mouseDragged(mouseX, mouseY);
  pendulumB.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  pendulumA.mouseReleased();
  pendulumB.mouseReleased();
}
