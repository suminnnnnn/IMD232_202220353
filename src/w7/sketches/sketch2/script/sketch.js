let emitter;
let particle;
let g;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 10, 100);
  // 밑에 100, 50이라고 되어있었는데 100을 0으로 수정함
  particle = new Ball(width / 2, 0, 0, 0, 0, 50);

  emitter = new Emitter(width / 2, height);

  g = createVector(0, 0.1);

  background(255);
}

function draw() {
  background(255);
  const scaledG = p5.Vector.mult(g, particle.mass);
  particle.applyForce(scaledG);
  particle.update();
  particle.display();

  emitter.createBall();
  emitter.applyGravity(g);
  emitter.update();
  emitter.display();
  console.log(emitter.balls.length);
}
