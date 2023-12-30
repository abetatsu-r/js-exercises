import { equalArrays } from "./index.js";

describe("課題3-7", () => {
  it("異なる値を指定したがtrueになるケース", () => {
    expect(equalArrays("", [])).toBe(true);
  });
});
