## ex01

## ex02

## ex04
- リガチャという長すぎる絵文字も存在する
- Stringの文字数カウントをする場合はそのあたりを考慮に入れておくべし

## ex05
- javaScriptだとreplace関数は最初のものしか置換しない
- TestCaseは実装を書いた実装を撃墜するつもりで

## ex06
- constに変数をしておくとみるとき楽
- padString()もsubsstringを使うとうまく書けるよ
- 単純な大小比較なら`if (indexStart > indexEnd) [indexStart, indexEnd] = [indexend, indexStart]`みたいに置換ができる

## ex10
- for in を使うと楽に書ける(for関連についてはこの先出てくる)

## ex11
- Symbol.for()だと、ラベル名が参照される。

## ex12
- JSでは===はポインタみたいに参照で比較するので、中身が違ってもイコールにはならない
- keyの長さを先にカウントした方がきれい
- equalを再帰で呼び出すと、valueにObjectが入っている場合も検証できる

## ex14
実際にはtoPrimitive()が使われている。
```
new Date()[Symbol.toPrimitive]("default")
new Date()[Symbol.toPrimitive]("number")
new Date()[Symbol.toPrimitive]("string")
```
※上から順に優先度なし、数値優先、文字列優先を指す

## ex15
varは今後の人生で使わないでおきましょう
```
console.log(name);
var name = 'aaa';
```
が
```
var name;
console.log(name); // undefined
name = 'aaa'
```
という解釈が起きる。
そのため、実際の実装では
- 関数を定義してvarのスコープを閉じ込める
- hoisting対策でvarを先頭に持ってくる
みたいなcoding_ruleを定義している
