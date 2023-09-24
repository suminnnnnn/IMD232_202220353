let vel;
let acc;
let cir;
let ms;
let move;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  cir = createVector(random(width), random(height));
  vel = p5.Vector.random2D();
  vel.mult(2);
  acc = createVector();
}

function draw() {
  console.log(cir);
  background('white');
  display();
  update();

  ellipse(cir.x, cir.y, 50);

  stroke('pink');
  line(cir.x, cir.y, mouseX, mouseY);
  translate(cir.x, cir.y);

  stroke('green');
  line(0, 0, acc.x * 100, acc.y * 100);

  stroke('blue');
  line(0, 0, vel.x * 10, vel.y * 10);
}

function update() {
  ms = createVector(mouseX, mouseY);

  move = ms.sub(cir);

  move.normalize();
  move.mult(0.1);
  acc = move;

  // acc.mult(1);
  // vel.limit(2);
  vel.add(acc);
  cir.add(vel);
}

function display() {
  noStroke();
  fill('yellow');
}
