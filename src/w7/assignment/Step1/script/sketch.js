// traffic 변수
let traffic;
// infiniteOffset 변수 지정
let infiniteOffset = 80;

// 캔버스 설정
function setup() {
  // 캔버스 생성
  setCanvasContainer('canvas', 3, 2, true);
  // 색 HSL로 설정
  colorMode(HSL, 360, 100, 100, 100);
  // 배경화면 색 지정
  background('white');
  // Traffic 클래스 새로 만들어 변수 traffic에 저장
  traffic = new Traffic();
  // Vehicle 10개를 랜덤한 위치에 생성
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
}

// 그림
function draw() {
  // 배경화면 색 지정
  background('white');
  // traffic이 실행되도록 해 줌
  traffic.run();
}

// 마우스 드래그 할 때 반응하도록 해줌
function mouseDragged() {
  // 마우스 위치에 새로운 Vehicle 생김
  traffic.addVehicle(mouseX, mouseY);
}
