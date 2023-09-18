let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  update();
  infiniteEdge();
  display();
  // acc = p5.Vector.random2D();
  // acc.mult(0.5);
  // vel.add(acc);
  // pos.add(vel);
  // infiniteEdge();
  // if (pos.x < 0) {
  //   vel.x * -(-1);
  // } else if (pos.x > width) {
  //   vel.x * -(-1);
  // }
  //원의 중심이 밖으로 나갔을 때 튕기게 하면 거슬리니까 중심에서 +- 반지름을 해주어 원이 화면 안에서만 튕기게 함
  // if (pos.x - radius < 0 || pos.x + radius > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y - radius < 0 || pos.y + radius > height) {
  //   vel.y *= -1;
  // }
  // if (pos.x < 0) {
  //   pos.x = width;
  // } else {
  //   ellipse(pos.x, pos.y, width);
  //   pos.x = 0;
  // }
  // if (pos.y < 0) {
  //   pos.y = height;
  // } else {
  //   ellipse(pos.x, pos.y, height);
  //   pos.y = 0;
  // }
}

function display() {
  ellipse(pos.x, pos.y, 2 * radius);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  pos.add(vel);
  // infiniteEdge();
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}
