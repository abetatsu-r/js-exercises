## 解答

**予想** : 6

**結果** :

```
$ node ch05/ex08/index.js
5
```

**理由** :

まず、forループの中の処理は以下のように動く

1. xにiの値が代入される
1. try句でerrorがthrowされる
1. catch句で`break`文が呼ばれる
1. breakの移動前に、finally句に処理が移る
1. finally句で、`continue`文が呼ばれ、処理がループの先頭に移動する(3の`break`文の処理は実行されない)

そのため、forループは`i`の値をインクリメントし続ける。

次に、`continue`文が呼ばれた際の`for`文の挙動について、まずincrement処理(`i++`)が実行されたのちに、test処理(`i <=5`)が実行され、test結果が`false`になった時点でループ文の外に移動する。

以上を踏まえると今回の場合、test処理が`false`を返すのは`i`が6にインクリメントされたときである。この直近では`x`にインクリメントされる前の`i`の値`5`が代入されているので、`x`の値を出力すると`5`になる