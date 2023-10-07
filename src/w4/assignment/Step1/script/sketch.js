let array = [];
let showVector = false;
const G = 0.1;
const bodyNum = 30;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  init();
}

function draw() {
  background(255);

  for (let i = 0; i < bodyNum; i++) {
    for (let j = 0; j < bodyNum; j++) {
      if (i !== j) {
        let forceForJ = array[i].attract(array[j]);
        array[j].applyForce(forceForJ);
      }
    }
    array[i].update();
    array[i].display();
    if (showVector) {
      array[i].displayVectors();
    }
  }
}

function mousePressed() {
  init();
}

function init() {
  array = [];
  for (let i = 0; i < bodyNum; i++) {
    array.push(new Body(random(width), random(height), random(16, 100)));
  }
}
