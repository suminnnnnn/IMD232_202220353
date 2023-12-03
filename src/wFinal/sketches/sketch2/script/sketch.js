let windowCanvas;
let canvasRatio = 0.75; // 내부 캔버스 크기 비율

function setup() {
  setCanvasContainer('mainCanvas', 3, 2, true);

  // 내부 캔버스 생성 및 설정
  resizeWindowCanvas();
}

function draw() {
  background(255);

  // 외부 캔버스의 가운데로 이동
  translate(width / 4, height / 4);

  // 내부 캔버스에 눈내리는 효과 그리기
  drawSnow(windowCanvas);
}

function windowResized() {
  setCanvasContainer('mainCanvas', 3, 2, true); // 외부 캔버스 크기 재설정
  resizeWindowCanvas();
}

function resizeWindowCanvas() {
  // 외부 캔버스의 크기 가져오기
  let externalCanvas = select('#mainCanvas');
  let externalWidth = externalCanvas.width;
  let externalHeight = externalCanvas.height;

  // 내부 캔버스의 크기 조절
  let internalWidth = externalWidth * canvasRatio;
  let internalHeight = externalHeight * canvasRatio;

  // 내부 캔버스 크기 업데이트
  if (windowCanvas) {
    windowCanvas.remove(); // 이전에 생성된 내부 캔버스 삭제
  }
  windowCanvas = createGraphics(internalWidth, internalHeight);
  windowCanvas.rectMode(CENTER); // rect의 기준을 중앙으로 설정

  // 내부 캔버스를 외부 캔버스의 중앙에 위치하도록 설정
  let x = (width - internalWidth) / 2;
  let y = (height - internalHeight) / 2;
  windowCanvas.position(x, y);
}

function drawSnow(canvas) {
  canvas.clear();
  canvas.noStroke();

  // 눈내리는 효과
  for (let i = 0; i < 100; i++) {
    let snowflakeX = random(canvas.width);
    let snowflakeY = random(canvas.height);
    let snowflakeSize = random(5, 10);

    fill(255);
    ellipse(snowflakeX, snowflakeY, snowflakeSize, snowflakeSize);
  }
}
