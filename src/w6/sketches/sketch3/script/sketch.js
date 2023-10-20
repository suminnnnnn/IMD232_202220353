let fireworks = [];
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  background(255);
  gravity = createVector(0, 0.1);
}

function draw() {
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function mouseClicked() {
  for (let i = 0; i < 360; i += 6) {
    fireworks.push(new Firework(mouseX, mouseY, i));
  }
}

class Firework {
  constructor(x, y, angle) {
    this.particles = [];
    this.firework = new Particle(x, y, angle);
    for (let i = 0; i < 100; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, angle);
      this.particles.push(p);
    }
  }

  done() {
    return this.particles.length === 0;
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  show() {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}

class Particle {
  constructor(x, y, angle) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.fromAngle(radians(angle)).mult(random(19, 20));
    this.acc = createVector(0, 0);
    this.radius = 10;
    this.lifespan = 60;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.add(gravity); // 중력 적용
    this.lifespan -= 1;
  }

  done() {
    return this.lifespan <= 0 || this.pos.y > height;
  }

  show() {
    noStroke();
    fill(0, 255, 0, map(this.lifespan, 60, 0, 255, 0)); // 투명도 조절
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
}
