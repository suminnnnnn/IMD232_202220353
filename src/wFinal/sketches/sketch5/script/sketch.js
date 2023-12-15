var xspacing = 12; // 각 수평 위치 간의 거리
var w; // 전체 파동의 너비
var theta = 0; // 0에서 시작하는 각도
var amplitude = 75.0; // 파동의 높이
var period = 400.0; // 파동이 반복되기 전의 픽셀 수
var dx; // x를 증가시키는 값
var yvalues; // 파동의 높이 값을 저장하기 위한 배열

var sensor1;
var sensor2;

function setup() {
  createCanvas(windowWidth * 0.6, windowWidth * 0.6 * 0.8); // 캔버스 비율 유지
  // 윈도우 너비를 기반으로 파동의 너비 조정
  w = width + 12;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  // 그라데이션 배경 그리기
  linearGradient(0, 0, width, height, color(56, 126, 255), color(0, 0, 255));

  calcWave();
  renderWave();
  sensor1 = map(mouseX, 0, width, 0, 5);
  sensor2 = map(mouseY, 0, height, 1, 3);
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

function windowResized() {
  // 캔버스 크기 조정
  if (windowWidth <= 630) {
    resizeCanvas(
      max(windowWidth * 0.6, 490),
      max(windowWidth * 0.6 * 0.8, 392)
    );
  } else if (windowWidth >= 830) {
    resizeCanvas(
      min(windowWidth * 0.6, 830),
      min(windowWidth * 0.6 * 0.8, 664)
    );
  }
  // 조정된 캔버스 크기에 맞게 파동의 너비 재조정
  w = width + 12;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

// 그라데이션을 그리기 위한 함수
function linearGradient(x, y, w, h, c1, c2) {
  noFill();

  for (var i = y; i <= y + h; i++) {
    var inter = map(i, y, y + h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}
