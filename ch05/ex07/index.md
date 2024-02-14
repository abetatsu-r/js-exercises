## 解答

**予想** : falseになる

**結果** :

```
$ node ch05/ex07/index.js
false
```

**理由** :

tryの中でreturn文のような処理の移動が入ると、移動に入る前にfinally文に移動する。
finally文の中でreturn文のような処理の移動が入ると、処理は直ちに実行される。この際、未処理の処理が残っていても正常に呼び出し元に返される。
そのため、今回の実行ではfinally句の`return false`が結果として出力される。
