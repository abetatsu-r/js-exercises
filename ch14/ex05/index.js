/**
 * memo:
 * - valuesの型をP426のcalssOfを使って変換して、stringにまとめて出力する
 */
export function retStrWithTypeOfLiteral(strings, ...values) {
  const typeNames = values.map((v) => classof(v));

  let result = strings[0];
  for (let i = 0; i < typeNames.length; i++) {
    result += typeNames[i] + strings[i + 1];
  }

  return result;
}

function classof(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
