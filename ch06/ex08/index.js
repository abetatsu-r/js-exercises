/**
 *
 * @param {*} target 削除先オブジェクト
 * @param {*} template テンプレートオブジェクト、この中に存在しないプロパティを削除先オブジェクトから削除する
 */
export function substract(target, ...sources) {
  // templateのSymbolを除く、プロパティ（enumerableのみでよさそう）
  // 継承プロパティ
  for (let obj of sources) {
    for (let key of Object.keys(obj)) {
      if (!target.hasOwnProperty(key)) continue;

      // オリジナル変更後に返されますだからObjectの中身を消しても問題ないはず
      delete target[key];
    }
  }

  return target;
}

/**
 *
 * @param {*} target  削除先オブジェクト
 * @param {*} sources 削除対象指定オブジェクト、この中に存在するプロパティを削除先オブジェクトから削除する
 * @returns
 */
export function restrict(target, template) {
  // templateのSymbolを除く、プロパティ（enumerableのみでよさそう）
  // 継承プロパティ
  for (let key of Object.keys(target)) {
    if (template.hasOwnProperty(key)) continue;

    // オリジナル変更後に返されますだからObjectの中身を消しても問題ないはず
    delete target[key];
  }

  return target;
}
