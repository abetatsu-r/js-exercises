/**
 * 自然数nと英数文字cを引数にとり、文字cをn回コンソール出力してから文字cをn個含む配列を返す
 * - 引数が複数あるので()は必要
 * - コンソール出力+配列を返すという処理が必要なので{}のブロックで囲み、return文で結果を書く
 */
export const f1 = (n, c) => {
  for (let i = 0; i < n; i++) {
    console.log(c);
  }
  return [...Array(n)].map((_) => c);
};

/**
 * 数値xを引数にとり、xの二乗の数値を返す
 * - 引数が一つなので()は不要
 * - 関数本体がreturn文のみなので、{}やreturnは省略できる
 */
export const f2 = (x) => x * x;

/**
 * 引数なしで、現在時刻のプロパティnowを含むオブジェクトを返す
 * - 引数はない場合は、()が必要
 * - 関数本体はreturn文のみだが、戻り値がObjectの場合は()で囲むかreturnをつけなければ正しく解釈されない
 */
export const f3 = () => ({ now: Date.now() }); // あるいは{return {now: Date.now()}}
