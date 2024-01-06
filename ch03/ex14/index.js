// 基本型の変換基準がわからなかったので4.9.1を参考
export function eq(a, b) {
  // それぞれの型が等しい場合、===に従う
  if (typeof a === typeof b) {
    return a === b;
  }

  // それぞれの型が等しくない場合
  // (MEMO)nullはundefined以外とtrueになることはない?
  if (a === null) return b === undefined;
  if (b === null) return a === undefined;

  // 片方が文字列型、もう片方が数値なら数値にそろえて比較する
  if (typeof a === "number" && typeof b === "string") {
    return eq(a, Number(b));
  }
  if (typeof a === "string" && typeof b === "number") {
    return eq(Number(a), b);
  }

  // 一方がbooleanの場合数値に直して比較する
  if (typeof a === "boolean") {
    return eq(Number(a), b);
  }
  if (typeof b === "boolean") {
    return eq(a, Number(b));
  }

  //　一方がObjectで、もう片方が数値か文字列なら、
  // 優先度なしアルゴリズムでObjectを基本型に直して比較する
  if (
    (typeof a === "object" || typeof a === "function") &&
    (typeof b === "number" || typeof b === "string")
  ) {
    return eq(convertWithNonPriorityAlgorithm(a), b);
  }
  if (
    (typeof a === "number" || typeof a === "string") &&
    (typeof b === "object" || typeof b === "function")
  ) {
    return eq(a, convertWithNonPriorityAlgorithm(b));
  }

  // それ以外の場合はfalse
  return false;
}

export function lte(a, b) {
  if (a === null) {
    return lte(0, b);
  }
  if (b === null) {
    return lte(a, 0);
  }
  // Objectを基本型に変換する
  if (typeof a === "object" || typeof a === "function") {
    return lte(convertWithNumericalPriorityAlgorithm(a), b);
  }
  if (typeof b === "object" || typeof b === "function") {
    return lte(a, convertWithNumericalPriorityAlgorithm(b));
  }

  // 両方のオペランドが共に文字列なら16ビットUnicode値の数値順序で比較
  if (typeof a === "string" && typeof b === "string") {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a.charCodeAt(i) === b.charCodeAt(i)) {
        i++;
      } else {
        // (MEMO)比較演算子なしで比較できる？
        return a.charCodeAt(i) < b.charCodeAt(i);
      }
    }
    // 長さが同じ部分が一致していれば、文字数が多い方が大
    if (a.length !== b.length) {
      return a.length < b.length;
    }
    // 完全一致
    return true;
  }

  // 片方のオペランドが文字列でないなら数値比較する
  let numTypeA = Number(a);
  let numTypeB = Number(b);

  // 片方がNaNならreturn false
  if (isNaN(numTypeA) || isNaN(numTypeB)) {
    return false;
  } else {
    return numTypeA <= numTypeB;
  }
}

// 型変換（優先度なしアルゴリズム）
function convertWithNonPriorityAlgorithm(op) {
  // Date型ならtoStringを実行する
  if (op instanceof Date) {
    return op.toString();
  }
  // valueofを試す
  const value = op.valueOf();
  if (isPrimitive(value)) {
    // valueOfの結果が基本型ならvalueOf()の結果を返す
    return value;
  }
  // そうでなければtoString()の結果を返す
  return op.toString();
}

// 型変換（数値優先アルゴリズム）
function convertWithNumericalPriorityAlgorithm(op) {
  // valueofを試す
  const value = op.valueOf();
  if (isPrimitive(value)) {
    // valueOfの結果が基本型ならvalueOf()の結果を返す
    return value;
  }
  // そうでなければtoString()の結果を返す
  return op.toString();
}

// 基本型かどうか
function isPrimitive(value) {
  let type = typeof value;
  if (type === "number") {
    return true;
  }
  if (type === "string") {
    return true;
  }
  if (type === "boolean") {
    return true;
  }
  if (value === null) {
    return true;
  }
  if (type === "undefined") {
    return true;
  }
  return false;
}
