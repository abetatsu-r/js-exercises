import { wait } from "../lib";

export async function retryWithExponentialBackoff(func, maxRetry) {
  let interval = 1;
  while (maxRetry > 0) {
    try {
      const result = await func();
      return result;
    } catch (e) {
      maxRetry--;
      await new Promise((resolve) => setTimeout(resolve, 1000 * interval));
      interval *= 2;
    }
  }

  return "FAILED";
}
