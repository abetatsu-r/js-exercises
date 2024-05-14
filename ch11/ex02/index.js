/**
 * 方針
 * - 高階関数
 * - fとWeekMapを組み合わせて作る
 * - 渡されたfの引数とslowFnの結果をWeekMapでSetする
 * - has()でWeekMapから値が取得できた場合は、計算せずにその値を返すようにする
 */

// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  const cacheMap = new WeakMap();

  return function (obj) {
    if (cacheMap.has(obj)) {
      return cacheMap.get(obj);
    }

    const result = f(obj);
    cacheMap.set(obj, result);

    return result;
  };
}

function slowFn(obj) {
  // 時間のかかる処理
  const start = Date.now();
  while (true) {
    if (Date.now() - start > 5000) {
      console.log("クリア");
      break;
    }
  }

  return obj.toString();
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
const cachedSlowFn = cache(slowFn);
