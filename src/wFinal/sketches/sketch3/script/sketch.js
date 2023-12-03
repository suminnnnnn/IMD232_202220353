let cam;
let isSpacePressed = false;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // webcam capture (at the size of the window)
  cam = createCapture(VIDEO);
  cam.size(width, height);
  cam.hide();
}

function draw() {
  if (isSpacePressed) {
    background('lime '); // 파란색 배경
  } else {
    background('#ff70db'); // 기본 배경
  }

  let gridSize = int(map(mouseX, 0, width, 10, 20));

  // 캠의 비율을 3:2로 맞추어 캔버스에 이미지 그리기
  let camWidth = min(width, cam.width);
  let camHeight = (camWidth / 3) * 2;

  cam.loadPixels();
  for (let y = 0; y < cam.height; y += gridSize) {
    for (let x = 0; x < cam.width; x += gridSize) {
      let index = (y * cam.width + x) * 4;
      let r = cam.pixels[index];
      let dia = map(r, 0, 255, gridSize, 2);

      push();
      translate(width, 0);
      scale(-1, 1);
      fill('#4d4035');
      noStroke();
      circle(x + gridSize / 2, y + gridSize / 2, dia);
      pop();
    }
  }
}

function windowResized() {
  // 창의 크기가 변경될 때마다 캔버스와 웹캠 크기를 조절
  resizeCanvas(windowWidth, windowHeight);
  cam.size(width, height);
}

function keyPressed() {
  if (key === ' ') {
    isSpacePressed = !isSpacePressed; // 스페이스바를 누를 때마다 상태를 토글
  }
}
