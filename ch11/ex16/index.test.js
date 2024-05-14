import { retryWithExponentialBackoff } from "./index.js";

function* countUp(i) {
  while (true) {
    yield i++;
  }
}

const g = countUp(1);

function nabeatsu() {
  if (g.next().value % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

describe("retryWithExponentialBackoff", () => {
  /**
   * Consider running Jest with `--detectOpenHandles` to troubleshoot this issue?
   */
  test("maxRetry超過", (done) => {
    retryWithExponentialBackoff(
      () => {
        return false;
      },
      2,
      (b) => {
        expect(b).toBe(false);
        done();
      },
    );
  }, 10000);

  test("true", (done) => {
    retryWithExponentialBackoff(
      () => {
        return true;
      },
      100,
      (b) => {
        expect(b).toBe(true);
        done();
      },
    );
  }, 10000);

  test("true(some)", (done) => {
    retryWithExponentialBackoff(nabeatsu, 100, (b) => {
      expect(b).toBe(true);
      expect(g.next().value).toBe(4);
      done();
    });
  }, 10000);
});
