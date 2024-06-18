import { retryWithExponentialBackoff } from "./index.js";
import { wait, errX } from "../lib.js";

let b = false;
let count = 0;

// 4秒後にbをtrueにする
function turnTrueAfter4seconds() {
  wait(4000).then(() => {
    b = true;
  });
}

// bを見て、falseならエラーにする
function notPermittedFalse() {
  return Promise.resolve(null).then(() => {
    count++;
    if (!b) {
      console.log(count);
      errX();
    }
    return "TRUE";
  });
}

test("retryWithExponentialBackoff", async () => {
  // setup
  b = false;
  count = 0;

  // test
  turnTrueAfter4seconds();
  expect(await retryWithExponentialBackoff(notPermittedFalse, 5)).toBe("TRUE");
  expect(count).toBe(4);
}, 10000);

test("over retryChance", async () => {
  // setup
  b = false;
  count = 0;

  // test
  turnTrueAfter4seconds();
  expect(await retryWithExponentialBackoff(notPermittedFalse, 2)).toBe(
    "FAILED",
  );
  expect(count).toBe(2);
});
