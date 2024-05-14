/**
 * 方針
 * - setIntervalを使おう
 * - interval間隔を何らかの形で保持しておき、interval実行ごとに加算しよう
 * - しかし上だと時間間隔は変わらないのでsetTimeOutをループしよう
 * - しかしループの中にsetTimeoutを入れてもループは待ってくれるわけではない
 * - 再帰でsetTimeoutを失敗したら呼び出すを繰り返す
 */
export function retryWithExponentialBackoff(func, maxRetry, callback) {
  retryWithInterval(func, maxRetry, callback, 1000);
}

// i秒待ってfuncを実行し、trueならcallbackを実行する
// falseならiを倍にして再帰
function retryWithInterval(func, maxRetry, callback, i) {
  if (maxRetry <= 0) {
    callback(false);
    return;
  }

  const m = i * 2;
  setTimeout(() => {
    if (func()) {
      console.log("成功");
      callback(true);
      return;
    } else {
      console.log("i");
      retryWithInterval(func, maxRetry - 1, callback, m);
    }
  }, i);
}
