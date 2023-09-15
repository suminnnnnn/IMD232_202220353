function setup() {
  setCanvasContainer('sm-canvas', 3, 2, true);
  background('#fff5fb');
}

function draw() {
  background('#fff5fb');

  fill('#ffab57');
  noStroke(0);

  //   배경
  rectMode(CORNER);
  fill('#ffe3f3');
  rect(0, height * 0.8, width, width * 0.2);

  // 테이블
  rectMode(CENTER);
  fill('#b0b0b0');
  rect(width * 0.3, height * 0.77, width * 0.01, height * 0.17);
  rect(width * 0.3, height * 0.86, width * 0.1, height * 0.015);
  fill('#7d7d7d');
  rect(width * 0.3, height * 0.87, width * 0.1, height * 0.01);
  fill('#0ceb40');
  rect(width * 0.3, height * 0.675, width * 0.3, height * 0.02);
  fill('#088024');
  rect(width * 0.3, height * 0.69, width * 0.3, height * 0.01);

  // 의자
  fill('#b0b0b0');
  rect(width * 0.16, height * 0.8, width * 0.01, height * 0.12);
  rect(width * 0.126, height * 0.862, width * 0.078, width * 0.01);
  fill('#7d7d7d');
  rect(width * 0.126, height * 0.87, width * 0.078, height * 0.01);
  rectMode(CORNER);
  fill('#0ceb40');
  rect(width * 0.07, height * 0.56, width * 0.012, width * 0.12);
  rect(width * 0.08, height * 0.718, width * 0.1, width * 0.015);
  fill('#088024');
  rect(width * 0.07, height * 0.74, width * 0.11, height * 0.01);

  // 꽃병
  rectMode(CORNER);
  stroke('#088024');
  strokeWeight(width * 0.007);
  line(width * 0.175, height * 0.49, width * 0.19, height * 0.6);
  line(width * 0.22, height * 0.51, width * 0.185, height * 0.645);
  colorMode(RGB);
  noStroke();
  fill(79, 214, 255, 120);
  rectMode(CENTER);
  circle(width * 0.2, height * 0.62, width * 0.06);
  rect(width * 0.2, height * 0.58, width * 0.05, width * 0.06);
  fill('#ff42c9');
  ellipse(width * 0.17, height * 0.468, width * 0.06, width * 0.03);
  fill('#ff821c');
  ellipse(width * 0.227, height * 0.49, width * 0.026, width * 0.026);

  // 창문
  rectMode(CORNER);
  fill('#4fd6ff');
  rect(width * 0.59, height * 0.15, width * 0.8333, height * 0.35);
  fill('white');
  rect(width * 0.63, height * 0.399, width * 0.23, width * 0.04, width * 0.2);
  rect(width * 0.66, height * 0.34, width * 0.17, width * 0.04, width * 0.2);
  rect(width * 0.69, height * 0.29, width * 0.1, width * 0.04, width * 0.2);
  stroke('#3d3d3d');
  strokeWeight(width * 0.007);
  line(width * 0.59, height * 0.5, width * 0.59, height * 0.15);
  line(width * 1.75, height * 0.15, width * 0.59, height * 0.15);
  line(width * 1.75, height * 0.5, width * 0.59, height * 0.5);

  // 블라인더
  noStroke();
  fill('#ff42c9');
  rect(width * 0.552, height * 0.09, width * 0.007, height * 0.47);
  circle(width * 0.555, height * 0.57, width * 0.027);
  colorMode(RGB);
  fill(255, 156, 225, 140);
  rect(width * 0.53, height * 0.09, width * 0.5, height * 0.05);
  rect(width * 0.53, height * 0.12, width * 0.5, height * 0.05);
  rect(width * 0.53, height * 0.15, width * 0.5, height * 0.05);
  rect(width * 0.53, height * 0.18, width * 0.5, height * 0.05);
  rect(width * 0.53, height * 0.21, width * 0.5, height * 0.05);
  rect(width * 0.53, height * 0.24, width * 0.5, height * 0.05);
  rect(width * 0.53, height * 0.27, width * 0.5, height * 0.05);

  // 화분
  fill('#0ceb40');
  ellipse(width * 0.86, height * 0.74, width * 0.09, height * 0.099);
  ellipse(width * 0.86, height * 0.67, width * 0.09, height * 0.099);
  ellipse(width * 0.86, height * 0.6, width * 0.09, height * 0.099);
  rectMode(CENTER);
  fill('#ff42c9');
  rect(width * 0.86, height * 0.82, width * 0.1, height * 0.092);

  // 조명
  rectMode(CENTER);
  fill('white');
  circle(width * 0.31, height * 0.29, width * 0.15);
  fill('#fffde0');
  circle(width * 0.31, height * 0.29, width * 0.13);
  fill('#fffcc7');
  circle(width * 0.31, height * 0.29, width * 0.11);
  fill('#fffbb8');
  circle(width * 0.31, height * 0.29, width * 0.09);
  fill('#fff959');
  circle(width * 0.31, height * 0.29, width * 0.07);
  fill('#fff5fb');
  rect(width * 0.31, height * 0.23, width * 0.3, height * 0.15625);
  fill('#333333');
  rect(width * 0.31, 0, width * 0.008, width * 0.28);
  rectMode(CORNER);
  fill(0);
  triangle(
    width * 0.24,
    height * 0.3,
    width * 0.31,
    height * 0.2,
    width * 0.38,
    height * 0.3
  );
}
