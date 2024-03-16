/**
 * Object.assign()と等価なassign関数
 * @param {*} target
 * @param  {...any} sources
 * @returns
 */
export let assign = function (target, ...sources) {
  for (let source of sources) {
    // 列挙可能プロパティをコピーする
    for (let key of Object.keys(source)) {
      target[key] = source[key];
    }

    // Symbolのプロパティのうち列挙可能なものをコピーする
    for (let symbolKey of Object.getOwnPropertySymbols(source)) {
      if (source.propertyIsEnumerable(symbolKey)) {
        target[symbolKey] = source[symbolKey];
      }
    }
  }
  return target;
};
