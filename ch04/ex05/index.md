## 解答

### Fizz

まず左辺の`+`演算子を計算する。
一つ目のオペランドについて`Fizz % 3`の値を論理値として評価する。評価の結果は`0`を論理値として変換したものなので`false`となる。そのため、一つ目の`?`演算子は、3つ目のオペランドである`Fizz`を返す。
二つ目のオペランドについては同様の手口で`""`が返される。
`||`の一つ目のオペランドの評価結果が`Fizz`となりこれは論理値として`true`になる値のため、式`i`の評価は行われず、`Fizz`が出力される。

### Buzz, FizzBuzz

Fizzの項参照。

### その他の数値の場合

上記に当てはまらない場合、まず`||`の一つ目のオペランドの評価結果が`""`となる。
これは、論理値に変換するとfalseとなる値のため、式全体の評価結果は、二つ目のオペランド`i`の表か結果に依存することになる。
したがって、`i`の値が出力される。
