## 解答補足

### index1について

解: `load`をつける  
理由:

- `lodash`および`jquery`のscriptの読み込みができた状態で、`index1`が呼べるかどうか
- `async`や`DOMContentLoaded`は、早すぎるためたまに表示に失敗する
- `defer`は`lodash`もしくは`JQuery`のコンテンツダウンロードが完全に終了された時点で`index1`が実行されるので(なぜ片方だけでいいのかはわからん)、待ちすぎ(なぜこれが待ちすぎなのかも正直よくわかってない)
- `load`だと、ちょうどいいタイミングで動いているっぽい


- 補足:
  - async()を使うと、DomContentLoadedだと先に発火してしまい、eventが実行できない場合がある。
  - defer()は実行された順番でやる、かつParseが完了した後にやる。
  - addEventListenerするだけなら、JQueryを待たなくていい？

### index2について

- `async`が最も早い？
