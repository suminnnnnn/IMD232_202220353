// Traffic 클래스 정의
class Traffic {
  // constructor 정의
  constructor() {
    // vehicles array 생성
    this.vehicles = [];
  }

  // 실행
  run() {
    // vehicles 반복문 (변수 eachVehicles에 할당 됨)
    this.vehicles.forEach((eachVehicle) => {
      // seperate 변수를 생성해서 vehicle 간의 힘을 나눈 값을 저장
      const separate = eachVehicle.separate(this.vehicles);
      // seperate 값 * 1
      separate.mult(1);
      // 나눈 값을 각 vehicle에 적용
      eachVehicle.applyForce(separate);
      // align 변수를 생성해 vehicle 간의 정렬 값을 저장
      const align = eachVehicle.align(this.vehicles);
      // 정렬 값 * 0.5
      align.mult(0.5);
      // 정렬 값 각 align에 적용
      eachVehicle.applyForce(align);
      // cohesion 변수를 생성해 vehicle 간의 응집력 값을 저장
      const cohesion = eachVehicle.cohesion(this.vehicles);
      // 응집력 값 * 0.5
      cohesion.mult(0.5);
      // 응집력 값 각 cohesion에 적용
      eachVehicle.applyForce(cohesion);
      // vehicle 업뎃
      eachVehicle.update();
      // borderInfinite 함수가 실행되도록 함 (vehicle 위치 조정)
      eachVehicle.borderInfinite();
      // vehicle 그리기
      eachVehicle.display();
    });
  }

  //vehicle 추가
  addVehicle(x, y) {
    // 질량 = 1
    const mass = 1;
    // vehicle 배열에 새 vehicle 추가
    this.vehicles.push(
      // 새 vehicle 속성 (위치, 위치, 질량, 반지름, 최대속도, 최대힘, 무직위 색상)
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}
