## 解答

`undefined`の値を昔は上書きすることができたため、`foo === undefined`が必ずundefinedを保証するというわけではなかったから。
最近( (JavaScript 1.8.5 / Firefox 4 以降) )ではundefinedが書き込み不可のプロパティとなったため、`undefined`が使われている。
