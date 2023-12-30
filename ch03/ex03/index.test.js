import { cmp } from "./index.js";

describe("cmp", () => {
  it("一致判定が正しいことの確認", () => {
    expect(cmp(0.3 - 0.2, 0.1)).toBe(true);
    expect(cmp(0.2 - 0.1, 0.1)).toBe(true);
  });
});
