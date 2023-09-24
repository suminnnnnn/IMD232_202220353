let vel;
let acc;
let cir;
let mv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  cir = createVector(random(width), random(height));
  mv = createVector();
  vel = p5.Vector.random2D();
  vel.mult(2);
  acc = p5.Vector.random2D();
}
function draw() {
  console.log(cir);
  background('white');
  display();
  update();
  checkEdges();

  ellipse(cir.x, cir.y, 50);

  mv.x = mouseX;
  mv.y = mouseY;
  mv.sub(cir);
  translate(cir.x, cir.y);
  stroke('salmon');
  line(0, 0, mv.x, mv.y);

  stroke('green');
  line(0, 0, acc.x * 100, acc.y * 100);

  stroke('blue');
  line(0, 0, vel.x * 10, vel.y * 10);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(1);
  vel.limit(2);
  vel.add(acc);
  cir.add(vel);
}

function checkEdges() {
  if (cir.x < 0) {
    cir.x = width;
  } else if (cir.x > width) {
    cir.x = 0;
  }
  if (cir.y < 0) {
    cir.y = height;
  } else if (cir.y > height) {
    cir.y = 0;
  }
}

function display() {
  noStroke();
  fill('yellow');
}
