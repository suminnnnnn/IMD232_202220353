let W, H;
let xspacing = 12;
let w;
let theta = 0;
let amplitude = 75.0;
let period = 400.0;
let dx;
let yvalues;

let sensor1;
let sensor2;

function setup() {
  W = windowWidth * 0.7;
  H = W * 0.5;
  createCanvas(W, H);
  w = width + 12;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));

  // 그림을 그리는 함수 호출
  drawYourPicture();
}

function draw() {
  linearGradient(0, 0, width, height, color(56, 126, 255), color(0, 0, 255));
  calcWave();
  renderWave();
  sensor1 = map(mouseX, 0, width, 0, 5);
  sensor2 = map(mouseY, 0, height, 1, 3);
}

function drawYourPicture() {
  // 이곳에 당신이 그린 그림에 대한 코드를 추가하세요.
  // 예시: ellipse(width / 2, height / 2, 50, 50);
}

function calcWave() {
  theta += 0.06;
  var x = theta;

  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sensor2 * sin(x * sensor1) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);

  for (var x = 0; x < yvalues.length; x++) {
    ellipse(
      map(x, 0, yvalues.length, 0, width),
      map(height / 105 + yvalues[x], 0, height, 0, height),
      10,
      -390
    );
  }
}

function linearGradient(x, y, w, h, c1, c2) {
  noFill();

  for (var i = y; i <= y + h; i++) {
    var inter = map(i, y, y + h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function windowResized() {
  W = windowWidth * 0.7;
  H = W * 0.5;
  resizeCanvas(W, H);

  // 화면 크기가 조절될 때마다 그림 다시 그리기
  drawYourPicture();
}
