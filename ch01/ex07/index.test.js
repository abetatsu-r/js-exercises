import { Point } from "./index.js";

describe("add", () => {
  it("座標が加算されていることの確認", () => {
    let own = new Point(0, 0);
    own.add(new Point(1, 2));
    expect(own.x).toBe(1);
    expect(own.y).toBe(2);
  });
});
