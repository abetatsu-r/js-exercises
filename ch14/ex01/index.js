/**
 * memo:
 * - unwritabele, unconfigurableについてはdefinePropertyを使う
 * - nestedについては、拡張不能にする必要があるのでdefineProperty + preventExtensionを使う
 */
export function unwritableAndUnconfigurableObj() {
  return Object.defineProperty({}, "a", {
    value: 1,
    enumerable: true,
    writable: false,
    configurable: false,
  });
}

export function writableAndUnconfigurableObj() {
  return Object.defineProperty({}, "b", {
    value: 2,
    enumerable: true,
    writable: true,
    configurable: false,
  });
}

export function nestedUnwritableObj() {
  return preventExtensionsWithUnwritableProperty(
    {},
    "c",
    preventExtensionsWithUnwritableProperty(
      {},
      "d",
      preventExtensionsWithUnwritableProperty({}, "e", 3),
    ),
  );
}

/**
 * objのproperty(name)にvalueを定義したのち、拡張不可にする。
 * @param {*} obj - 元のobject
 * @param {*} name - 追加するpropety名
 * @param {*} value - 追加する値
 * @returns 拡張不可なobj
 */
function preventExtensionsWithUnwritableProperty(obj, name, value) {
  Object.defineProperty(obj, name, {
    value,
    writable: false,
    enumerable: true,
    configurable: false,
  });

  return Object.preventExtensions(obj);
}
