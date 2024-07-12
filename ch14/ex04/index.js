/**
 * memo:
 * - Stringとnumberのfieldを持つので、そのどちらをconstructorに渡してもいいようにクラスを設計する
 * - ぁ～んまでを対象とするので、この範囲外のコードは弾く(ゕ、ゖは仮名かよくわからなかったので除外)
 * - 合体絵文字みたいなものが間違って引っかかる可能性はあるが今は目をつむる
 * - [String.toPrimitive](hint)を使って、期待される型を返すようにする。
 */
export class Kana {
  constructor(kana) {
    if (typeof kana === "string") {
      const code = kana.charCodeAt();
      if (!(12353 <= code && code <= 12435)) {
        throw RangeError("ひらがなではありません");
      }
      this.str = kana;
      this.code = code;
    } else if (typeof kana === "number") {
      if (!(12353 <= kana && kana <= 12435)) {
        throw RangeError("ひらがなではありません");
      }
      this.str = String.fromCharCode(kana);
      this.code = kana;
    } else {
      throw TypeError("数値か文字列でオナシャス");
    }
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "string":
        return this.str;
      case "number":
        return this.code;
      case "default":
        return this.str;
      default:
        throw Error("予定外の自体です");
    }
  }
}
