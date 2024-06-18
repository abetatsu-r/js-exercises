import { fibbonacciIterator } from "./index.js";

test("fibbonacciIterator", () => {
  function fibonacci(n) {
    for (let f of fibbonacciIterator()) {
      if (n-- <= 0) return f;
    }
  }

  expect(fibonacci(0)).toBe(1);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(2)).toBe(2);
  expect(fibonacci(20)).toBe(10946);
});
