// 基本型の変換基準がわからなかったので4.9.1を参考
export function eq(a, b) {
  // それぞれの型が等しい場合、===に従う
  if(typeof a === typeof b) {
    return a === b
  }

  // それぞれの型が等しくない場合
  // nullはundefined以外とtrueになることはない?
  if (a === null) return b === undefined;
  if (b === null) return a === undefined;

  // 片方が文字列型、もう片方が数値なら数値にそろえて比較する
  if (typeof a === 'number' && typeof b === 'string') {
    return eq(a, Number(b));
  }
  if (typeof a === 'string' && typeof b === 'number') {
    return eq(Number(a), b);
  }

  // 一方がbooleanの場合数値に直して比較する
  if (typeof a === 'boolean') {
    return eq(Number(a), b);
  }
  if (typeof b === 'boolean') {
    return eq(a, Number(b)); 
  }

  //　一方がObjectで、もう片方が数値か文字列なら、
  // 優先度なしアルゴリズムでObjectを基本型に直して比較する
  if ((typeof a === 'object' || typeof a === 'function') && (typeof b === 'number' || typeof b === 'string')) {
    return eq(convertWithNonPriorityArgorithmn(a), b);
  }
  if ((typeof a === 'number' || typeof a === 'string') && (typeof b === 'object' || typeof b === 'function')) {
    return eq(a, convertWithNonPriorityArgorithmn(b));
  }

  // それ以外の場合はfalse
  return false;
}

export function lte(a, b) {
  // TODO: ここを実装しなさい
  return false;
}

// 型変換
function convertWithNonPriorityArgorithmn(op) {
  // Date型ならtoStringを実行する
  if (op instanceof Date) {
    return op.toString();
  }
  // valueofを試す
  const value = op.valueOf()
  if (isPrimitive(value)) {
    // valueOfの結果が基本型ならvalueOf()の結果を返す
    return value;
  } 
  // そうでなければtoString()の結果を返す
  return op.toString();
}


// 基本形かどうか
function isPrimitive(value) {
  console.log(value);
  let type = typeof value;
  if (type === 'number') {return true};
  if (type === 'string') {return true};
  if (type === 'boolean') {return true};
  if (type === null) {return true};
  if (type === 'undefined') {return true};
  return false;
}


// 片方がnullでもう片方がundefinedならtrue
function isNullAndUndefined(a, b) {
  return (a === null && b === undefined ) ||  (a === undefined && b === null);
}

// 片方がnumberで、もう片方がstringならtrue
function isNumberAndString(a, b) {
  return (typeof a)
}
