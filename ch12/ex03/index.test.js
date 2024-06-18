import { counter } from "./index.js";

test("count up", () => {
  const c = counter();
  for (let i = 1; i <= 20; i++) {
    expect(c.next().value).toBe(i);
  }
});

test("reset", () => {
  const c = counter();
  c.next();
  expect(c.next().value).toBe(2);

  c.throw(); // reset
  expect(c.next().value).toBe(1);
});
