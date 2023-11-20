let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);
  cam.hide();
  console.log(cam);
  // noLoop();
}

function draw() {
  background('white');
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  // cam.loadPixels();
  // console.log('width', cam.width);
  // console.log('height', cam.height);
  // console.log('pixels', cam.pixels[0]);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = width * y + x;
      const color = pixels[idx];
      const b = brightness(color);
      // ellipse(x, y, (b / 255) * 20);
    }
  }
  updatePixels();
}
