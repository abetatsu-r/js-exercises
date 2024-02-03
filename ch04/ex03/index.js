export let sub = function (a, b) {
  try {
    b = fullAdder(~b, 0b1);
    return fullAdder(a, b);

    // 計算結果がoverFlowする場合
  } catch (e) {
    return "OverFlow !!";
  }
};

let fullAdder = function (a, b) {
  let sum = a ^ b;
  let carry = a & b;
  while (carry) {
    let temp = sum;
    sum = temp ^ (carry << 1);
    carry = temp & (carry << 1);
  }

  // オーバフロー検出
  // a > 0 && b >> 0で sum < 0
  if (checkOverFlow(a, b, sum)) throw new Error("OverFlow !!");

  return sum;
};

/**
 * 加算(a + b)結果(sum)のoverFlow判定
 * @param {*} a 被加数
 * @param {*} b 仮数
 * @param {*} sum 和
 * @returns true: overflow, false: safe
 */
let checkOverFlow = function (a, b, sum) {
  // a>0 かつ b>0 かつ 計算結果が負
  if ((a & b & ~sum) >> 31) {
    return true;
  }

  // a<0 かつ b<0かつ　計算結果が正
  if ((~a & ~b & sum) >> 31) {
    return true;
  }

  return false;
};
