let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  dom = select('#hereGoesMyP5Sketch');
  //   console.log('p5 select', dom);
  //   console.log('p5 select', dom.width);

  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  //   console.log('querySelector', htmlDom);
  //   console.log('querySelector', htmlDom.clientWidth);
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다.');
  //   dom = select('#hereGoesMyP5Sketch');
  //   console.log('p5 select', dom);
  //   console.log('querySelector', htmlDom.clientWidth);
  if (htmlDom.clientWidth < canvasW) {
    resizeCanvas(htmlDom.clientWidth, (htmlDom.client * canvasH) / canvasW);
    background('black');
  } else if (width !== canvasW) {
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
