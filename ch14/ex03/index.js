/**
 * memo:
 * - TestCaseより引数がRegExp型、String型でくる2パターンがあったので、一度受け取った引数を正規表現に変換することで処理
 * - constructorの引数に対してもアクセントパターンを除去しなければならないので、soirceとflagに分けて処理
 * - アクセントパターンの除去はString.protoType.normallize('UFD')で分解し、範囲除去
 * - 最後に再度RegExpを再構成する
 * - search, matchについては[Symbol.method]を用いて、内部で渡される文字列からアクセントパターンを除去したうえでmethodを実行すればよい
 */
export class IgnoreAccentPattern {
  constructor(arg) {
    const regExp = new RegExp(arg);

    const source = regExp.source;
    const flags = regExp.flags;

    this.regExp = new RegExp(removeAccentPattern(source), flags);
  }

  [Symbol.search](s) {
    return removeAccentPattern(s).search(this.regExp);
  }

  [Symbol.match](s) {
    return removeAccentPattern(s).match(this.regExp);
  }
}

// ダイアクリティカルマークを消す
function removeAccentPattern(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
