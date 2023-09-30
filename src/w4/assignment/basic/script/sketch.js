let cir;
let vel;
let acc;
let move;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cir = createVector(width / 2, height / 2);
  vel = createVector(0.6);
  acc = createVector(0.03);
}

function draw() {
  background('white');
  fill('pink');
  ellipse(cir.x, cir.y, 50);

  let targetX = mouseX;
  let targetY = mouseY;

  move = createVector(targetX - cir.x, targetY - cir.y);

  move.normalize();
  move.mult(vel.mag());

  vel.add(acc);
  vel.limit(10);

  cir.add(move);
}
