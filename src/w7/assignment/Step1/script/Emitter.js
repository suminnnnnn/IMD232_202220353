class Emitter {
  constructor() {
    this.rects = [];
  }

  createRect() {
    const startX = random(width);
    const startY = -30;

    this.rects.push(new Rect(startX, startY, 0, 0, 5, random(360), 100, 50));
  }

  applyGravity(gravity) {
    this.rects.forEach((each) => {
      const scaledG = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledG);
    });
  }

  update() {
    this.rects.forEach((each) => {
      each.update();
    });
    for (let index = this.rects.length - 1; index >= 0; index--) {
      this.rects[index].update();
      if (this.rects[index].isDead()) {
        this.rects.splice(index, 1);
      }
    }
  }

  display() {
    this.rects.forEach((each) => {
      each.display();
    });
  }
}
