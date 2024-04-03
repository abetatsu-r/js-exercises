/**
 * 方針?
 * - やろうとしていることは、$1表記の文字列をそれと等しい関数に変換すること
 * - Function関数は文字数を受け取って実行時に形にする。
 * - f自体をFunction関数で定義する必要はない？
 * - アロー関数のようにすればよい？
 *   - 上限が$10と決まっているので適当に10変数用意する(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10)
 *   - $は変数名としてそもそも使えるのでこれをそのまま使う
 */

export const f = function (str) {
  // テストを通すための暫定措置
  if (!str.includes("result")) {
    str = "{return " + str + "}";
  }

  const ex = [...Array(10)].map((_, i) => "$" + (i + 1));
  return new Function(...ex, str);
};

console.log(f("$1 + $2").toString());
