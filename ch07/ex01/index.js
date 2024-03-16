/**
 * 行列の和
 * @param {*} m1
 * @param {*} m2
 * @returns
 */
export let sum_matrix = function (m1, m2) {
  // sizeの確認
  if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
    throw new Error("matrix error");
  }

  // 結果を格納する二次元配列の生成
  let r_len = m1.length;
  let c_len = m1[0].length;
  let sum = new Array(r_len);
  for (let i = 0; i < r_len; i++) {
    sum[i] = new Array(c_len);
  }

  for (let r_index = 0; r_index < r_len; r_index++) {
    for (let c_index = 0; c_index < c_len; c_index++) {
      sum[r_index][c_index] = m1[r_index][c_index] + m2[r_index][c_index];
    }
  }

  return sum;
};

/**
 * 行列の積
 * @param {*} m1
 * @param {*} m2
 * @returns
 */
export let mul_matrix = function (m1, m2) {
  // sizeの確認
  if (m1[0].length !== m2.length) throw new Error("matrix error");

  // 結果を格納する二次元配列の作成
  let r_len = m1.length;
  let c_len = m2[0].length;
  let mul = new Array(r_len);
  for (let i = 0; i < r_len; i++) {
    mul[i] = new Array(c_len);
  }

  // 掛け算の繰り返しの数
  let n = m2.length;

  for (let r_index = 0; r_index < r_len; r_index++) {
    for (let c_index = 0; c_index < c_len; c_index++) {
      mul[r_index][c_index] = 0;
      for (let i = 0; i < n; i++) {
        mul[r_index][c_index] += m1[r_index][i] * m2[i][c_index];
      }
    }
  }

  return mul;
};
