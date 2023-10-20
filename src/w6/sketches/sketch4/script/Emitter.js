class Emitter {
  constructor() {
    this.particles = [];
  }

  addParticles(x, y) {
    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(x, y));
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      } else {
        particle.applyGravity();
        particle.update();
      }
    }
  }

  display() {
    for (let particle of this.particles) {
      particle.display();
    }
  }
}
