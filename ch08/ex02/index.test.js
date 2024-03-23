import { power } from "./index.js";

describe("べき乗計算", () => {
  test("正数", () => {
    expect(power(3, 15)).toBe(3 ** 15);
    expect(power.loopcount).toBe(4);
  });

  test("負数", () => {
    expect(power(-3, 8)).toBe((-3) ** 8);
    expect(power.loopcount).toBe(4);
  });

  test("小数", () => {
    expect(power(2.4, 6)).toBeCloseTo(2.4 ** 6);
    expect(power.loopcount).toBe(3);
  });

  test("負数乗", () => {
    expect(power(3, -5)).toBeCloseTo(3 ** -5);
    expect(power.loopcount).toBe(3);
  });

  test("0乗", () => {
    expect(power(3, 0)).toBe(1);
    expect(power.loopcount).toBe(0);
  });
});
