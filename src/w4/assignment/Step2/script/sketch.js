let mover;
let gravity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new Mover(width / 2, height / 2, 20);
  gravity = createVector(0, 0.5);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(mover.mass);

  let mVec = createVector(mouseX, mouseY);
  let pMVec = createVector(pmouseX, pmouseY);
  let dragForce = p5.Vector.sub(mVec, pMVec);

  let dragMag = dragForce.mag();
  dragForce.normalize();
  dragForce.mult(dragMag * 0.05);

  if (mover.isDragging) {
    mover.applyForce(dragForce);
  } else {
    mover.applyForce(gravityA);
  }

  if (mover.contactEdge()) {
    let c = 0.01;
    let friction = mover.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    mover.applyForce(friction);
  }
  mover.update();
  mover.checkEdges();
  mover.display();
}

function mousePressed() {
  let d = dist(mouseX, mouseY, mover.pos.x, mover.pos.y);
  if (d < mover.radius) {
    mover.isDragging = true;
    mover.dragOffset.x = mover.pos.x - mouseX;
    mover.dragOffset.y = mover.pos.y - mouseY;
  }
}

function mouseReleased() {
  mover.isDragging = false;
}

class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.radius = sqrt(this.mass) * 10;
    this.isDragging = false;
    this.dragOffset = createVector(0, 0);
  }

  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    if (this.isDragging) {
      this.pos.x = mouseX + this.dragOffset.x;
      this.pos.y = mouseY + this.dragOffset.y;
    } else {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.accDisplay.set(this.acc);
      this.acc.mult(0);
    }
  }

  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    const bounce = -0.9;
    if (this.pos.x < 0 + this.radius) {
      this.pos.x -= 0 + this.radius;
      this.pos.x *= -1;
      this.pos.x += 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x -= width - 1 - this.radius;
      this.pos.x *= -1;
      this.pos.x += width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y -= height - 1 - this.radius;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }

  display() {
    noStroke();
    fill('skyblue');
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
