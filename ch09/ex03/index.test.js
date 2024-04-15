import { ClosureC, PrivateC } from "./index.js";

test ("private fieldを用いる場合", () => {
  const c = new PrivateC();
  expect(c.x).toBe(42);
  expect(() => {c.x = 45}).toThrow();
  expect(c.x).toBe(42);
});

test ("closureを用いる場合", () => {
    const c = new ClosureC();
    expect(c.x).toBe(42);
    expect(() => {c.x = 45}).toThrow();
    expect(c.x).toBe(42);
  });