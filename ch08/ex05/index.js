/**
 * 方針：
 * - 残余パラメータは配列で渡される
 *   - 2についてはlengthで判定する。
 *   - 1についてはfor/ofでindexを参照しながら処理を行う
 * @param  {...any} values
 */

export function sequenceToObject(...values) {
  if (values.length % 2) throw "valuesの個数が偶数でありません";

  const result = {};
  let key;
  for (let [i, v] of values.entries()) {
    // 奇数番の値は戻り値objectのkeyとなる
    if (!(i % 2)) {
      if (typeof v !== "string") throw "奇数版の値はstring出なければならない";
      key = v;
      // 偶数番の値は戻り値のvalueとなる
    } else {
      result[key] = v;
    }
  }

  return result;
}

const arr = ["a", 1, "b", 2, "c", 3];
console.log(sequenceToObject(...arr)); // { a: 1, b: 2, c: 3 }
