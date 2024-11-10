## 問.TypeScriptのトランスパイルは@babel/preset-typescriptやtscによって可能だが、それぞれの違いを調べなさい。

- @babel/preset-typescript
  - Pluginsの設定をすることで、広い構文をトランスパイル可能
    - Pluginsについても定型的なパターンはすでに提供されているものを使用すればいい。
  - 型チェックが実行されない
  - 型チェックが実行されない分tscより速い
- tsc
  - JavaScriptの構文のみに対応しており、Promise等の組み込みオブジェクトがトランスパイルされない。
  - 型チェックをしてくれる
  - 型定義ファイルの生成を行える
  - 型チェックを実行するため、babelより遅い
