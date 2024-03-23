power.loopcount = 0;

export function power(x, n) {
  // 小数べき乗はあきらめる
  if (!Number.isSafeInteger(n) || typeof x !== "number") throw TypeError;

  const isMinus = n < 0;
  n = Math.abs(n);
  let exp = 1;
  // log2n回のループで計算を終わらせる
  power.loopcount = 0;

  while (n) {
    if (n & 1) {
      exp *= x;
    }

    n = n >> 1;
    x *= x;
    power.loopcount++;
  }

  return isMinus ? 1 / exp : exp;
}
