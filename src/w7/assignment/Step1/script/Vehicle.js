//Vehicle 클래스
class Vehicle {
  // 생성자 함수 생성
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 위치 백터 생성, 좌표 x, y 설정
    this.pos = createVector(x, y);
    // 속도 생성, 랜덤으로 설정
    this.vel = p5.Vector.random2D();
    // 가속도 생성
    this.acc = createVector();
    // 질량 설정, mass값이 질량으로 설정됨
    this.mass = mass;
    // 반지름 설정, rad값이 반지름으로 설정됨
    this.rad = rad;
    // 최대속도 설정, speedMx값이 최대속도로 설정됨
    this.speedMx = speedMx;
    // 최대힘 설정, forceMx값이 최대힘으로 설정됨
    this.forceMx = forceMx;
    // 주변에 반응하는 반경 설정 (50)
    this.neighborhooodRad = 50;
    // 색 설정, color값이 색으로 설정됨
    this.color = color;
  }

  // 응집력 계산
  cohesion(others) {
    // 주변 객체 수 세는 변수 생성, 처음엔 0으로 시작
    let cnt = 0;
    // 응집 백터 생성, 처음엔 크기 0
    const steer = createVector(0, 0);
    // 각각의 힘 계산
    others.forEach((each) => {
      // if구문을 사용하여 자신이 아닌 경우에 아래 항목이 실행되게 함
      if (each !== this) {
        // 현재 객체와 다른 객체 사이의 거리의 제곱
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 거리의 제곱이 주변에 반응하는 반경의 제곱보다 작은 경우 확인
        if (distSq < this.neighborhooodRad ** 2) {
          // 응집 힘 + 다른 객체 위치
          steer.add(each.pos);
          // 객체 수 증가
          cnt++;
        }
      }
    });
    // 주변에 객체 1개 이상 있을 때
    if (cnt > 0) {
      // 응집 힘 백터 주변 객체 수로 나눔
      steer.div(cnt);
      // 응집 힘 백터에서 현재 객체 위치 뺌
      steer.sub(this.pos);
      // 응집 힘 백터 크기 최대 속도로 제한
      steer.setMag(this.speedMx);
      // 현재 속도 백터에서 응집 힘 백터를 뺌
      steer.sub(this.vel);
      // 응집 힘 백터의 크기 최대 힘으로 제한
      steer.limit(this.forceMx);
    }
    // 계산된 응집 힘 백터 반환
    return steer;
  }

  // Align 계산
  align(others) {
    // 주변 객체 수 세는 변수 생성, 처음엔 0으로 시작
    let cnt = 0;
    // align 힘 백터 생성, 처음엔 크기 0
    const steer = createVector(0, 0);
    // 각각의 힘 계산
    others.forEach((each) => {
      // if구문을 사용하여 자신이 아닌 경우에 아래 항목이 실행되게 함
      if (each !== this) {
        // 현재 객체와 다른 객체 사이의 거리의 제곱
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 거리의 제곱이 주변에 반응하는 반경의 제곱보다 작은 경우 확인
        if (distSq < this.neighborhooodRad ** 2) {
          // allign 힘 + 다른 객체 속도
          steer.add(each.vel);
          // 객체 수 증가
          cnt++;
        }
      }
    });
    // 주변에 객체 1개 이상 있을 때
    if (cnt > 0) {
      // 응집 힘 백터 주변 객체 수로 나눔
      steer.div(cnt);
      // 응집 힘 백터 크기 최대 속도로 설정
      steer.setMag(this.speedMx);
      // 현재 속도 백터에서 응집 힘 백터를 뺌
      steer.sub(this.vel);
      // 응집 힘 백터의 크기 최대 힘으로 제한
      steer.limit(this.forceMx);
    }
    // 계산된 allign 힘 백터 반환
    return steer;
  }

  // seperate 계산
  separate(others) {
    // 주변 객체 수 세는 변수 생성, 처음엔 0으로 시작
    let cnt = 0;
    // 응집 백터 생성, 처음엔 크기 0
    const steer = createVector(0, 0);
    // 각각의 힘 계산
    others.forEach((each) => {
      // if구문을 사용하여 자신이 아닌 경우에 아래 항목이 실행되게 함
      if (each !== this) {
        // 현재 객체와 다른 객체 사이의 거리
        const dist = this.pos.dist(each.pos);
        // 거리가 0보다 크고 현재 객체 반지름과 다른 객체 반지름을 합한 값보다 작은 경우에 실행
        if (dist > 0 && this.rad + each.rad > dist) {
          // 거리 정규화
          const distNormal = dist / (this.rad + each.rad);
          // 백터 생성 -> 현재 객체에서 다른 객체로 향하는
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          // 백터를 정규화된 거리로 나눔 => 방향 설정
          towardMeVec.setMag(1 / distNormal);
          // seperate 힘백터에 분리백터 추가
          steer.add(towardMeVec);
          // 객체 수 증가
          cnt++;
        }
      }
    });
    // 주변에 객체 1개 이상 있을 때
    if (cnt > 0) {
      // seperate 힘 백터 객체수로 나눔 -> 평균 힘
      steer.div(cnt);
      // seperate 힘 최대 속도 설정
      steer.setMag(this.speedMx);
      // seperate 힘 - 현재 속도
      steer.sub(this.vel);
      // seperate 힘 백터 최대 힘의 크기로 제한
      steer.limit(this.forceMx);
    }
    // 계산 된 seperate 힘 계산
    return steer;
  }

  // 외부 힘 현재 객체에 적용
  applyForce(force) {
    // 주어진 힘 % 질량 = 가속도
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // 현재 가속도에 계산된 가속도 더함
    this.acc.add(forceDivedByMass);
  }

  // 업데이트 메서드
  update() {
    // 속도에 가속도 더함
    this.vel.add(this.acc);
    // 속도 최대 속도로 제한
    this.vel.limit(this.speedMx);
    // 위치에 현재 속도 더함
    this.pos.add(this.vel);
    // 가속도 초기화 -> 차량에 외부 힘 더이상 X
    this.acc.mult(0);
  }

  // vehicle이 화면 경계 넘어갈 때 처리하는 메서드
  borderInfinite() {
    // 위치 왼쪽 경계 벗어났을 때
    if (this.pos.x < -infiniteOffset) {
      // 객체를 화면 오른쪽 경계 밖으로 이동
      this.pos.x = width + infiniteOffset;
      // 위치 오른쪽 경계 벗어났을 떄
    } else if (this.pos.x > width + infiniteOffset) {
      // 객체 화면 왼쪽 경계 밖으로 이동
      this.pos.x = -infiniteOffset;
    }
    // 화면 위쪽 경계 벗어남
    if (this.pos.y < -infiniteOffset) {
      // 객체를 화면 아럐쪽 경계 밖으로 이동
      this.pos.y = height + infiniteOffset;
      // 화면 아래쪽 경계 벗어남
    } else if (this.pos.y > height + infiniteOffset) {
      // 객체 화면 위쪽 경계 밖으로 이동
      this.pos.y = -infiniteOffset;
    }
  }
  // 모양 화면에 표시
  display() {
    // push, pop() -> 리셋의 기능
    push();
    // 현재 위치로 이동
    translate(this.pos.x, this.pos.y);
    // 객체 속도 방향 따라 회전
    rotate(this.vel.heading());
    // 스트로크X
    noStroke();
    // 색 설정
    fill(this.color);
    // 다각형의 그리기 시작
    beginShape();
    // 다각형 꼭짓점 추가
    vertex(this.rad, 0);
    // 다각형 꼭짓점 추가
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    // 다각형 꼭짓점 추가
    vertex(0, 0);
    // 다각형 꼭짓점 추가
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    // 다각형 닫음
    endShape(CLOSE);
    // push, pop() -> 리셋의 기능
    pop();
  }
}
