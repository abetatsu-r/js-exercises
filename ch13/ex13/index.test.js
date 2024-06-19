import { walk } from "./index.js";

test("success walk", async () => {
  for await (const elem of walk("ch13/ex13/root")) {
    expect(elem).toHaveProperty("path");
    expect(elem).toHaveProperty("isDirectory");
  }
});
