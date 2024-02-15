/**
 * 四則演算
 * 1. 2数が、複素数のObjectだった場合、複素数の計算をして返す
 * 2. 片方が複素数のObjectで、もう片方がnumberの場合、計算結果を返す
 * 3. それ以外の場合、従来の二項演算子の挙動に従う
 */

// 加算
export let add = function (c1, c2) {
  if (isComplex(c1) && isComplex(c2)) {
    c1 = convertComplex(c1);
    c2 = convertComplex(c2);

    let reSum = c1.re + c2.re;
    let imSum = c1.im + c2.im;

    return fixRes(reSum, imSum);
  }

  if (isComplex(c1) && typeof c2 === "number") {
    c1 = convertComplex(c1);
    // c2がNaN,infinityの場合はそのまま返す
    if (!isFinite(c2)) return c2;

    let reSum = c1.re + c2;
    let imSum = c1.im;

    return fixRes(reSum, imSum);
  }

  if (isComplex(c2) && typeof c1 === "number") {
    c2 = convertComplex(c2);

    // cがNaN,infinityの場合はそのまま返す
    if (!isFinite(c1)) return c1;

    let reSum = c1 + c2.re;
    let imSum = c2.im;

    return fixRes(reSum, imSum);
  }

  return c1 + c2;
};

// 乗算
export let mul = function (c1, c2) {
  if (isComplex(c1) && isComplex(c2)) {
    c1 = convertComplex(c1);
    c2 = convertComplex(c2);

    let reMul = c1.re * c2.re - c1.im * c2.im;
    let imMul = c1.re * c2.im + c1.im * c2.re;

    return fixRes(reMul, imMul);
  }

  if (isComplex(c1) && typeof c2 === "number") {
    c1 = convertComplex(c1);

    // c2がNaN,infinityの場合はそのまま返す
    if (isNaN(c2)) return NaN;

    return fixRes(c1.re * c2, c1.im * c2);
  }

  if (isComplex(c2) && typeof c1 === "number") {
    c2 = convertComplex(c2);

    // c2がNaNならNaN
    if (isNaN(c1)) return NaN;

    return fixRes(c1 * c2.re, c1 * c2.im);
  }

  return c1 * c2;
};

// 減算
export let sub = function (c1, c2) {
  return add(c1, mul(c2, -1));
};

// 除算
export let div = function (c1, c2) {
  if (isComplex(c1) && isComplex(c2)) {
    c1 = convertComplex(c1);
    c2 = convertComplex(c2);

    // c2を虚部反転
    c2.im = -c2.im;

    // 分母は絶対値の二乗
    let demonical = c2.re ** 2 + c2.im ** 2;

    return div(mul(c1, c2), demonical);
  }

  if (isComplex(c1) && typeof c2 === "number") {
    c1 = convertComplex(c1);

    // c2がNaNの場合はそのまま返す
    if (isNaN(c2)) return NaN;

    // c2が0の場合は正のInfinityとする
    if (c2 === 0) return Infinity;

    return fixRes(c1.re / c2, c1.im / c2);
  }

  if (isComplex(c2) && typeof c1 === "number") {
    c2 = convertComplex(c2);

    // c2を虚部反転
    c2.im = -c2.im;

    // 分母は絶対値の二乗
    let demonical = c2.re ** 2 + c2.im ** 2;

    return mul(c1, div(c2, demonical));
  }

  return c1 / c2;
};

/**
 * 以下の基準で複素数かを判別する
 * 1. vがre(実部)とim(虚部)のプロパティをもち、その値がNumber(NaN以外)である場合
 * 2. vがim(虚部)のプロパティをもち、その値がNumber(NaN以外)である場合
 * 3. vがabs(絶対値)とarg(偏角)のプロパティを持ち、その値がNumberである場合(テスト未実装)
 * 1と2をともに満たす場合は、1を優先する。また片方のみしかプロパティがない場合(純虚数)はめんどくさいので無視する
 * @param {*} v
 * @return {boolean} 複素数であるかどうかを返す
 */
let isComplex = function (v) {
  // a + bi形式
  if (v?.re !== undefined && v?.im !== undefined) {
    return (
      typeof v.re === "number" &&
      !isNaN(v.re) &&
      typeof v.im === "number" &&
      !isNaN(v.im)
    );
  }

  // 純虚数
  if (v?.im !== undefined) {
    return typeof v.im === "number" && !isNaN(v.im);
  }

  // 極形式
  if (v?.abs !== undefined && v?.arg !== undefined) {
    return (
      typeof v.abs === "number" &&
      !isNaN(v.abs) &&
      typeof v.arg === "number" &&
      !isNaN(v.arg)
    );
  }

  return false;
};

/**
 * 極形式、純虚数をa+bi形式に直す
 * @param {*} c : isComplex(c) === true となるようなc
 * @return {re: number, im: number} 実部・虚部を持つ複素数Object
 */
let convertComplex = function (c) {
  if (c.re !== undefined && c.im !== undefined) {
    return c;
  } else if (c.im !== undefined) {
    return { re: 0, im: c.im };
  } else if (c.abs !== undefined && c.arg !== undefined) {
    return { re: c.abs * Math.cos(c.arg), im: c.abs * Math.sin(c.arg) };
  }

  throw TypeError;
};

/**
 * 実部・虚部の計算結果を整える(いずれかが0ならそのプロパティを削除する)
 */
let fixRes = function (re, im) {
  if (re === 0 && im === 0) return 0;
  if (re == 0) return { im: im };
  if (im == 0) return re;
  return { re: re, im: im };
};
