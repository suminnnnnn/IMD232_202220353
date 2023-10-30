class Ball {
  constructor(x, y, angle, magnitude, mass) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(magnitude);
    this.acc = createVector();
    this.mass = mass;
    this.radius = 5;
    this.lifespan = 60;
    this.speed = 5;
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan -= 1;

    const normalizedLife = constrain(this.lifespan / 60, 0, 1);

    fill(0, 200, 0, 255 * normalizedLife);

    this.vel.add(0, 0.1);

    this.vel.setMag(this.speed);
  }

  display() {
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}
