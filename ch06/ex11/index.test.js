import { p } from ".";

test("x, yの計算が正しく実行されること", () => {
  let obj = Object.create(p);
  obj.r = 2;
  obj.theta = Math.PI / 3;

  expect(obj.x).toBeCloseTo(1);
  expect(obj.y).toBeCloseTo(Math.sqrt(3));
});

test("setterによって、rとthetaの値が上書きされること", () => {
  let obj = Object.create(p);
  obj.x = 1;
  obj.y = 1;

  expect(obj.x).toBeCloseTo(1);
  expect(obj.y).toBeCloseTo(1);
  expect(obj.r).toBeCloseTo(Math.SQRT2);
  expect(obj.theta).toBeCloseTo(Math.PI / 4);
});

test("境界値の確認", () => {
  let obj = Object.create(p);

  // tan90の計算が正しく処理されていること
  obj.y = 1;
  expect(obj.r).toBeCloseTo(1);
  expect(obj.theta).toBeCloseTo(Math.PI / 2);
});
