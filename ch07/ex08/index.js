export let reverse = function (str) {
  // 正規表現
  let reg = /.(\u{200d}.)*/gu;

  let arr = str.match(reg);
  console.log(arr);
  return arr.reverse().join("");
};
