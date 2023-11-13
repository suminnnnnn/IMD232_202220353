// 마우스가 눈에 보이는 위치 그대로 반응하지 않습니다...............
//왼쪽 윗부분에서.... 원래 위치로 클릭됩니다...

// 매터 쓰기 위한 기본 변수들
var Engine = Matter.Engine,
  Runner = Matter.Runner,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

// Common.setDecomp(decomp);

// create engine
var engine = Engine.create(),
  world = engine.world;

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

let ropeA;
let ropeB;
let ropeC;

let m;
let mc;

let originalWidth, originalHeight;

function setup() {
  originalWidth = 800;
  originalHeight = 600;
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  // add bodies
  var group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x - 20, y, 50, 20, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  (m = Mouse.create(document.querySelector('.p5Canvas'))),
    (mc = MouseConstraint.create(engine, {
      mouse: m,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    }));

  Composite.add(world, mc);
  background('white');
}

function draw() {
  background('white');

  // ropeA에 원 그리기
  fill(255, 0, 0);
  noStroke();
  for (let i = 0; i < ropeA.bodies.length; i++) {
    let body = ropeA.bodies[i];
    ellipse(
      (body.position.x / originalWidth) * width,
      (body.position.y / originalHeight) * height,
      width / 15,
      height / 13
    );
  }

  // ropeB에 사각형 그리기
  fill(0, 255, 0);
  noStroke();
  for (let i = 0; i < ropeB.bodies.length; i++) {
    let body = ropeB.bodies[i];
    rectMode(CENTER);
    rect(
      (body.position.x / originalWidth) * width,
      (body.position.y / originalHeight) * height,
      width / 20,
      height / 17
    );
  }

  // ropeC에 삼각형 그리기
  fill(0, 0, 255);
  noStroke();
  for (let i = 0; i < ropeC.bodies.length; i++) {
    let body = ropeC.bodies[i];
    triangle(
      (body.vertices[0].x / originalWidth) * width,
      (body.vertices[0].y / originalHeight) * height,
      (body.vertices[5].x / originalWidth) * width,
      (body.vertices[5].y / originalHeight) * height,
      (body.vertices[10].x / originalWidth) * width,
      (body.vertices[10].y / originalHeight) * height
    );
  }
}
