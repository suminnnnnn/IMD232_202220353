class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.radius = 5;
    const randomSpeed = random(19, 20); // 랜덤한 속도 범위
    this.vel = p5.Vector.random2D().mult(randomSpeed);
    this.acc = createVector(0, 0.1);
    this.lifespan = 60;

    // 랜덤한 색상 생성 (HSL 모델)
    this.color = color(random(360), 100, 80, 100);
  }

  applyGravity() {
    const gravity = createVector(0, 0.1);
    this.acc.add(gravity);
  }

  update() {
    this.applyGravity();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // 생명주기 감소
    this.lifespan -= 1; // 1프레임마다 감소
    if (this.lifespan < 0) {
      this.lifespan = 0;
    }

    // 투명도 설정 (0에서 255 사이 값)
    const alpha = map(this.lifespan, 0, 60, 255, 0);
    this.color.setAlpha(alpha);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }

  isDead() {
    return (
      this.lifespan <= 0 ||
      this.pos.y > height + this.radius || // 파티클이 화면 밑으로 벗어난 경우
      this.pos.x < -this.radius || // 파티클이 화면 왼쪽으로 벗어난 경우
      this.pos.x > width + this.radius // 파티클이 화면 오른쪽으로 벗어난 경우
    );
  }
}
