class Emitter {
  constructor() {
    this.balls = [];
  }

  createParticles(x, y) {
    for (let i = 0; i < 100; i++) {
      const angle = random(TWO_PI);
      const magnitude = random(19, 20);
      const mass = 10;
      this.balls.push(new Ball(x, y, angle, magnitude, mass));
    }
  }

  applyGravity() {
    const gravity = createVector(0, 0.1);
    for (let ball of this.balls) {
      const gravityForce = p5.Vector.mult(gravity, ball.mass);
      ball.applyForce(gravityForce);
    }
  }

  update() {
    for (let i = this.balls.length - 1; i >= 0; i--) {
      const ball = this.balls[i];
      ball.update();
      if (ball.isDead()) {
        this.balls.splice(i, 1);
      }
    }
  }

  display() {
    for (let ball of this.balls) {
      ball.display();
    }
  }
}
