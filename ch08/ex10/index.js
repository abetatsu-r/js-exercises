/**
 * 受け取ったobjectにバインドした関数の実行結果を返すmyCallプロパティを追加する。
 * @param {*} f 関数
 */
export function addMyCall(f) {
  if (typeof f !== "function") throw TypeError;

  f.myCall = (o, ...arg) => f.bind(o, ...arg)();
}
