import { f1, f2, f3 } from "./index.js";
import { jest } from "@jest/globals";

test("1", () => {
  console.log = jest.fn();

  expect(f1(3, "a")).toEqual(["a", "a", "a"]);
  expect(console.log).toHaveBeenCalledTimes(3);
});

test("2", () => {
  expect(f2(0)).toBe(0);
  expect(f2(1)).toBe(1);
  expect(f2(-99)).toBe(9801);
  expect(f2("string")).toEqual(NaN);
});

test("3", () => {
  expect(f3()).toEqual({ now: expect.anything() });
});
