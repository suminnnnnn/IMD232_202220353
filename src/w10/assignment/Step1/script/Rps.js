class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.nextState = this.state;
    this.state = 'R';
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    let otherState;
    if (this.state === 'R') {
      otherState = 'P';
    } else if (this.state === 'P') {
      otherState = 'S';
    } else if (this.state === 'S') {
      otherState = 'R';
    }

    const others = this.neighbors.filter(
      (eachNeighbor) => eachNeighbor?.state === otherState
    );

    if (others.length <= 2) {
      this.nextState = this.state;
    } else {
      this.nextState = otherState;
    }
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  update() {
    this.state = this.nextState;
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    if (this.state === 'R') {
      this.state = 'P';
    } else if (this.state === 'P') {
      this.state = 'S';
    } else if (this.state === 'S') {
      this.state = 'R';
    }
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    if (this.state === 'R') {
      fill('magenta');
    } else if (this.state === 'P') {
      fill('lime');
    } else if (this.state === 'S') {
      fill('orange');
    }
    rect(0, 0, this.w, this.h);
    pop();
  }
}
