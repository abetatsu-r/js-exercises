import { jest } from "@jest/globals";

test("Json.stringfyを正しく動作させる", () => {
  const mock = jest.fn();

  const obj = {
    x: 0,
    y: 0,
    sum() {
      mock();
      return this.x + this.y;
    },
  };

  // ここに１行のコードを書く
  obj.sum.toJSON = function () {
    return obj.sum();
  };

  obj.x = 1;
  obj.y = 2;

  expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
  expect(mock).toHaveBeenCalled();
});
