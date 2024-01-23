## 0除算について
- Pythonは0で割るとエラーが返る
- JS/TSだとエラーになる未来はなさそう

## BigIntについて
- Dbのidの主キーのリソースが枯渇しないようにBIG_INTにするとき、受け取り側もBIG_INTにするくらい(人が触ることはない)
- JavaScriptでDBを使う ⇒ Prisma

## Symbol()のユニーク性
- ECMAScriptの仕様書を見よう！
- 範囲指定が書いてないので常にuniqueととらえてよさそう
- Symbol()はプログラムの実行ごとに引き継がないので、一度の実行を超えてuniqueだと考えられる。

## for文にSymbol().iterator()が使われた背景
- iteratorに文字列を使うと、既存のコードに不具合が出る可能性があったから
- Chromeのhas()などで同じ問題があった

## use strict 
- ESModuleにすると、use strictに強制的になる
- type: moduleによるもの。

## Code Jump
- ESModuleなど一部のjavaScriptの実装は、JavascriptではなくC++で書かれてる
