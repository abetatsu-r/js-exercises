## 質問解答

### Reflect APIの利点

- proxyのメソッドと一対一の対応付けがなされていること、例えばdeleteはObjectの中にはないが、みたいなのを考える手間が省ける

### scopableとarrayの互換性

- with(Array.protoType) {keys.push}みたいな実装が以前は使われており、これとArray.kesがバッティングしていた。

### テンプレートリテラルのタグについて

- 関数と引数の形式が違う気がする
