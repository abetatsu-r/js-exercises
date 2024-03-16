/**
 * 方針
 * - 使えそうなもの
 *   - getOwnPropertyNames: 列挙可独自プロパティ + 文字列の列挙不可プロパティ
 *   - getOwnPropertySymbol: Symbokの独自プロパティ
 *   - Reflect.onKeys() : 全ての独自プロパティ（多分）
 *   - for in loop: 独自・継承プロパティの列挙可なもの,ただし、独自プロパティが継承をenumeravle:falseで上書きした場合出力できない
 *     - (追記) for in って継承したsymbolは参照できない？
 */

/**
 * プロパティを列挙する
 * @param {*} obj
 * @returns
 */
export let listupPropertyName = function (obj) {
  // 全ての独自プロパティ
  let ownProperties = Reflect.ownKeys(obj);

  // 列挙可能な継承プロパティを引っ張ってくる
  let inheritedEnumProperies = listupPropertyOfProtoType(obj);

  return Array.from(new Set([...ownProperties, ...inheritedEnumProperies]));
};

/**
 * Objectのプロトタイプチェーンから継承可能プロパティを引っ張ってくる
 * @param {*} obj
 * @returns
 */
let listupPropertyOfProtoType = function (obj) {
  if (Object.getPrototypeOf(obj)) {
    let proto = Object.getPrototypeOf(obj);
    // まず列挙可能なプロパティを取り出す
    let enumrableProperties = Object.keys(proto);

    // 次に列挙可能なSymbolのみを取り出す
    let symbolProperties = Object.getOwnPropertySymbols(proto);
    let enumerableSymbolProperties = [];
    for (let p of symbolProperties) {
      if (proto.propertyIsEnumerable(p)) {
        enumerableSymbolProperties.push(p);
      }
    }

    let properties = [...enumrableProperties, ...enumerableSymbolProperties];
    // FIXME やばそう
    return [...properties, ...listupPropertyOfProtoType(proto)];
  }

  return [];
};
