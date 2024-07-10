import { retStrWithTypeOfLiteral } from "./index.js";

test("test single expression", () => {
  const v = "a";
  expect(retStrWithTypeOfLiteral`${v}`).toBe("string");
  expect(retStrWithTypeOfLiteral`${"v"}`).toBe("string");
});

test("test multi expression", () => {
  const v1 = 35;
  const v2 = { x: 1 };

  expect(retStrWithTypeOfLiteral`${v1} and ${v2}`).toBe("number and object");
});
