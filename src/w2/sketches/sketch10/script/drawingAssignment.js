let desiredWidth = 300; // 원하는 너비
let desiredHeight = 200; // 원하는 높이
let canvas;

function setup() {
  createCanvas(desiredWidth, (desiredWidth * 2) / 3).parent('#sm-canvas'); // 초기 캔버스 생성
  background('white');
}

function draw() {
  rect(width * 0.1, height * 0.3, width * 0.1);
}

function windowResized() {
  // 창 크기 변경 시 호출되는 함수
  let newWidth = windowWidth;
  let newHeight = (newWidth * 2) / 3;

  // 창 크기에 맞게 캔버스 크기를 조절
  resizeCanvas(newWidth, newHeight);
  background('white');
}

// 창 크기 변경 감지 설정
function setup() {
  windowResized();
}
