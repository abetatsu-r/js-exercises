import { fetchSumOfFileSizes } from "./index.js";

test("fetch some", async () => {
  expect(await fetchSumOfFileSizes("ch13/ex04/test")).toBe(72);
});
