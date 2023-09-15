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
  rect(0, 520, width, 150);

  //   테이블
  rectMode(CENTER);
  fill('#b0b0b0');
  rect(330, 480, 12, 120);
  rect(330, 543, 100, 12);
  fill('#7d7d7d');
  rect(330, 549, 100, 6);
  rectMode(CORNER);
  fill('#0ceb40');
  rect(180, 400, 300, 14);
  fill('#088024');
  rect(180, 414, 300, 6);

  //   의자
  fill('#b0b0b0');
  rectMode(CENTER);
  rect(135, 500, 12, 80);
  rect(102.5, 543, 77, 12);
  fill('#7d7d7d');
  rect(102.5, 549, 77, 6);
  rectMode(CORNER);
  fill('#0ceb40');
  rect(70, 350, 14, 110);
  rect(70, 460, 90, 14);
  fill('#088024');
  rect(70, 474, 90, 6);

  //   꽃병
  rectMode(CORNER);
  stroke('#088024');
  line(220, 285, 235, 355);
  line(255, 300, 235, 385);
  colorMode(RGB);
  noStroke();
  fill(79, 214, 255, 120);
  rectMode(CENTER);
  circle(240, 375, 50);
  rect(240, 350, 40, 50);
  fill('#ff42c9');
  ellipse(220, 285, 40, 20);
  fill('#ff821c');
  ellipse(255, 300, 20, 20);

  //   창문
  rectMode(CORNER);
  fill('#4fd6ff');
  rect(550, 60, 500, 200);
  fill('white');
  rect(580, 180, 205, 35, 20);
  rect(600, 150, 160, 35, 20);
  rect(630, 120, 100, 35, 20);
  stroke('#3d3d3d');
  strokeWeight(6);
  line(550, 260, 550, 60);
  line(1000, 60, 550, 60);
  line(1000, 260, 550, 260);

  //  블라인더
  noStroke();
  fill('#ff42c9');
  rect(535, 45, 5, 250);
  circle(538, 300, 17);
  colorMode(RGB);
  fill(255, 156, 225, 140);
  rect(530, 45, 500, 40);
  rect(530, 70, 500, 40);
  rect(530, 95, 500, 40);
  rect(530, 120, 500, 40);

  // 화분
  fill('#0ceb40');
  ellipse(820, 490, 70, 50);
  ellipse(820, 452, 70, 50);
  ellipse(820, 414, 70, 50);
  rectMode(CENTER);
  fill('#ff42c9');
  rect(820, 535, 80, 50);

  //   조명
  rectMode(CENTER);
  fill('white');
  circle(330, 200, 80);
  fill('#fffde0');
  circle(330, 200, 70);
  fill('#fffcc7');
  circle(330, 200, 60);
  fill('#fffbb8');
  circle(330, 200, 50);
  fill('#fff959');
  circle(330, 200, 40);
  fill('#fff5fb');
  rect(330, 170, 90, 60);
  fill('#333333');
  rect(330, 0, 5, 310);
  rectMode(CORNER);
  fill(0);
  triangle(290, 200, 330, 150, 370, 200);
}
