import { fetchFirstFileSize, fetchSumOfFileSizes } from "./index.js";

test("fetch one", async () => {
  expect(await fetchFirstFileSize("ch13/ex04/test")).toBe(28);
});

test("fetch empty", async () => {
  expect(await fetchFirstFileSize("ch13/ex04/emptyFolder")).toEqual(null);
});

test("fetch some", async () => {
  expect(await fetchSumOfFileSizes("ch13/ex04/test")).toBe(72);
});
