class Body {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = random(16, 100);
    this.radius = map(sqrt(this.mass), sqrt(16), sqrt(100), 20, 50);
    this.velVisual = createVector(0, 0);
    this.accVisual = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.pos, body.pos);
    let distance = constrain(force.mag(), 5, 25);
    let strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.velVisual.set(this.vel);
    this.velVisual.mult(10);

    this.accVisual.set(this.acc);
    this.accVisual.mult(100);

    this.acc.set(0, 0);
  }

  display() {
    noStroke(0);
    colorMode(RGB);
    fill(255, 156, 225, 80);
    circle(this.pos.x, this.pos.y, this.radius * 5);
  }
}
