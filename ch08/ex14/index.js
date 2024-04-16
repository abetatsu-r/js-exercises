// 1. any
export function any(...functions) {
  return function (...args) {
    for (let f of functions) {
      // trueに変換される値は処理せず、結果がtrueになった場合のみtrueとする
      if (f(...args) === true) {
        return true;
      }
    }

    return false;
  };
}

// 2. cathing
export function catching(fun, handler) {
  return function (...args) {
    try {
      return fun(...args);
    } catch (err) {
      return handler(err);
    }
  };
}
