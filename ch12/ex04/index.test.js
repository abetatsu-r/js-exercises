import { primeSequence } from "./index.js";

test("primeSequence", () => {
  function prime(n) {
    for (let p of primeSequence()) {
      if (n-- <= 0) return p;
    }
  }

  expect(prime(0)).toBe(2);
  expect(prime(1)).toBe(3);

  expect(prime(100)).toBe(547);
});
