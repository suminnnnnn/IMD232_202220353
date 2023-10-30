let traffic;
let debug = true;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);

  traffic = new Traffic();
  // vehicle = new Vehicle(width / 2, height / 2, 16, 5, 0.1, color(330, 100, 50));
  // mVec = createVector();

  for (let n = 0; n < 20; n++) {
    traffic.addVehicle(random(width), random(height));
  }

  background(255);
}

function draw() {
  background(255);

  traffic.run();

  // mVec.set(mouseX, mouseY);
  // vehicle.seek(mVec);
  // vehicle.update();
  // vehicle.display();
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
