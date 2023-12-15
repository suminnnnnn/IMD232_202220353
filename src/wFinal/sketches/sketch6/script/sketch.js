let W, H;
let customFont;
let points;
let yOffsets = [];
let textToDisplay = '파도';
let waveLines = []; // 첫 번째 선
let waveLines2 = []; // 두 번째 선

function preload() {
  customFont = loadFont('assets/BagelFatOne-Regular.ttf');
}

function setup() {
  W = windowWidth * 0.7;
  H = W * 0.5;
  createCanvas(W, H);
  background(255);

  // 텍스트를 점으로
  let fontSize = W * 0.2;
  updateTextPoints(textToDisplay, fontSize);

  // 각 점의 초기 y좌표 오프셋 설정
  for (let i = 0; i < points.length; i++) {
    yOffsets[i] = random(3, 10);
  }

  // 첫 번째 선
  for (let i = 0; i < 60; i++) {
    waveLines.push({ x: i * 20, y: H / 2, angle: i * 0.1 });
  }

  // 두 번째 선
  for (let i = 0; i < 60; i++) {
    waveLines2.push({
      x: i * 20,
      y: H / 2,
      angle: i * 0.1,
      width: 100,
      angleInc: 0.1,
    });
  }

  // 0.5초마다 갱신
  setInterval(updateYOffsets, 40);

  // 스페이스바를 누르면 텍스트 변경
  keyTyped = function () {
    if (key === ' ') {
      if (textToDisplay === '파도') {
        textToDisplay = '바다';
      } else {
        textToDisplay = '파도';
      }
      let fontSize = W * 0.2;
      updateTextPoints(textToDisplay, fontSize);
    }
  };
}

function updateYOffsets() {
  // 각 점의 y좌표 오프셋을 랜덤하게 변경
  for (let i = 0; i < yOffsets.length; i++) {
    yOffsets[i] = random(3, 10);
  }

  // 첫 번째 선의 위치 업데이트
  for (let i = 0; i < waveLines.length; i++) {
    waveLines[i].angle += 0.05;
    waveLines[i].y = H / 2 + sin(waveLines[i].angle) * 30;
  }

  // 두 번째 선의 위치 업데이트
  for (let i = 0; i < waveLines2.length; i++) {
    waveLines2[i].angle += waveLines2[i].angleInc;
    waveLines2[i].y = H / 2 + sin(waveLines2[i].angle) * waveLines2[i].width;
  }
}

function draw() {
  background(255);

  // 첫 번째 선 그리기
  drawWaveLines(waveLines);

  // 두 번째 선 그리기
  drawWaveLines(waveLines2, color(0, 210, 255, 20));

  // 각 점에 대해 크기가 캔버스 크기에 맞게 조절된 원 그리기
  stroke(100);
  strokeWeight(W * 0.0008);
  fill(0, 180, 255);

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];

    // 크기가 캔버스 크기에 맞게 조절됨
    let size = map(sin(frameCount * 0.05), -1, 1, W * 0.0, W * 0.02);

    // y좌표에 랜덤한 변위를 더해줌
    let yOffset = yOffsets[i];
    let newY = pt.y + yOffset;

    // 그려진 원의 위치를 갱신
    ellipse(pt.x, newY, size, size);
  }
}

function windowResized() {
  W = windowWidth * 0.7;
  H = W * 0.5;
  resizeCanvas(W, H);
  background(255);

  // 창 크기가 조절될 때마다 텍스트와 선을 다시 그리기
  let fontSize = W * 0.2;
  updateTextPoints(textToDisplay, fontSize);

  // 초기 선 생성
  waveLines = [];
  for (let i = 0; i < 60; i++) {
    waveLines.push({ x: i * 20, y: H / 2, angle: i * 0.1 });
  }

  // 두 번째 선 생성
  waveLines2 = [];
  for (let i = 0; i < 60; i++) {
    waveLines2.push({
      x: i * 20,
      y: H / 2,
      angle: i * 0.1,
      width: 100,
      angleInc: 0.1,
    });
  }
}

function updateTextPoints(txt, fontSize) {
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  fill(0, 0, 255);
  points = customFont.textToPoints(
    txt,
    W / 2 - textWidth(txt) / 2,
    H / 2 + fontSize / 3
  );
}

function drawWaveLines(lines, lineColor = color(50, 100, 180, 20)) {
  noFill();
  stroke(lineColor);
  strokeWeight(90);

  beginShape();
  for (let i = 0; i < lines.length; i++) {
    vertex(lines[i].x, lines[i].y);
  }
  endShape();
}
