export let bitcount = function (n) {
  // 32bit整数表現形式に直したのち、文字列に変換し'1'の数を数える
  let bitStr = (n >>> 0).toString(2);
  return [...bitStr].filter((bit) => bit === "1").length;
};
