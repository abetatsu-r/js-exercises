## 解答

- Nodeのモジュールの場合
  - 呼び出しもとでは変化がなかった。

- ES6の場合
  - default import
     - importの名称が変わり、関数を呼び出している部分の記述も変わった。
  - rename import
     - importした元の関数の名称のみが変わった。rename後の名称に変更はなかったため呼び出している部分の記述に変わりはない
  - 再エクスポート
     - 再エクスポートしている部分の関数の名称がrename importで変更前の関数を呼び出す形式に変わった。rename後の名称が変更前と変わらなかったため呼び出している部分の記述に変わりはない。