## 解答3.15

### letによる実行

予想: 0~9の値が出力されたのちundefinedが出力される
実際の結果：

```
$ node ch03/ex15
0
1
2
3
4
5
6
7
8
9
file:///C:/Users/r00528090/JavaScript%E7%A0%94%E4%BF%AE/js-exercises/ch03/ex15/index.js:8
  console.log(i);
              ^

ReferenceError: i is not defined
    at file:///C:/Users/r00528090/JavaScript%E7%A0%94%E4%BF%AE/js-exercises/ch03/ex15/index.js:8:15
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

Node.js v18.17.0
```

原因:
letで宣言された変数のスコープはそのブロック中でのみ有効となる。
`(function () {  let i = 100;})();`について、`i=100`という値の参照は、この構文の中でのみ有効になるため、次行の`console.log(i)`で100と出力されることはない。同様に、for文で用いられるループ変数も変わることがなく、10回処理が実行される。

最後の`console.log(i)`について、`i`はループのブロック内でのみ有効となるため、`i`は未定義扱いとなりstrictモーモードで実行するとエラーになる。

### let -> varに変更した場合

```
$ node ch03/ex15/index2.js
0
1
2
3
4
5
6
7
8
9
10
```

varで宣言された変数はスコープが関数全体となる。
`(function () {  var i = 100;})();`について、`i=100`という値の参照が、関数の中で宣言されていることから、この値はこの構文内でしか参照されない。したがって、ループ変数iの値が100へと変更されることはない。
一方で、最後の`console.log(i)`について、`for (var i = 0; i < 10; i++) `で宣言された`i`をファイル全体から参照できるため、letで指定した場合と異なり値が出力される。

### letを外し、非strictモードで実行した場合

```
$ node test/index3.js
100
101
```

非strictモードで実行すると、宣言された場所にかかわらずグローバル変数として扱われる。そのため、`(function () {  var i = 100;})();`で`i`に100が代入されたのち、ループを抜け、再度`i`を出力するため、上記のような結果になる。
