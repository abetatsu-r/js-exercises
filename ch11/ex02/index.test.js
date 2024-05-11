import { cache } from "./index.js";

test("複数回呼び出すと、2回目以降はcashした値を返していることの確認", () => {
  /**
   * 時間のかかる処理に該当する関数を呼び出していないことを確認する
   */
  let count = 0;
  function fn(_obj) {
    count++;
    return "OK";
  }

  const cachedSlowFn = cache(fn);
  const obj = { test: 1 };
  expect(cachedSlowFn(obj)).toBe("OK");
  expect(count).toBe(1);

  // 同じobjectに対してはcashを利用する
  expect(cachedSlowFn(obj)).toBe("OK");
  expect(count).toBe(1);

  // 異なるobjectに対しては関数の実行結果が返される
  expect(cachedSlowFn({ test: 1 })).toBe("OK");
  expect(count).toBe(2);
});
