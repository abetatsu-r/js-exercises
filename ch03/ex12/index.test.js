import { equal } from "./index.js";

describe("equal", () => {
  it("空のobjectに対して一致すること", () => {
    let obj1 = {};
    let obj2 = {};
    expect(equal(obj1, obj2)).toBe(true);
  });

  describe("内容が等しいときtrueになること", () => {
    it("内容が同一の場合", () => {
      let obj1 = { x: 1, y: 2 };
      let obj2 = { x: 1, y: 2 };
      expect(equal(obj1, obj2)).toBe(true);
    });

    it("内容が同一の場合(順不同)", () => {
      let obj1 = { x: 1, y: 2 };
      let obj2 = { y: 2, x: 1 };
      expect(equal(obj1, obj2)).toBe(true);
    });
  });

  describe("内容が異なる場合にfalseになること", () => {
    it("内容が異なる場合", () => {
      let obj1 = { x: 1, y: 2 };
      let obj2 = { x: 1, y: 3 };

      expect(equal(obj1, obj2)).toBe(false);
    });

    it("プロパティが存在しない場合", () => {
      let obj1 = { x: 1, y: 2 };
      let obj2 = { x: 1, z: 2 };
    });

    it("内容が同一の場合(NaN)", () => {
      let obj1 = { x: 1, y: NaN };
      let obj2 = { x: 1, y: NaN };

      expect(equal(obj1, obj2)).toBe(false);
    });
  });
});
