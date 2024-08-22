## 解答

- 選択したフレームワーク: JQuery
- XSS対策について  
  代表的な対策として、`text()`を用いることがあげられる。これは受け取った引数を文字列として処理するため教科書に載っているようなHTMLを書きこむようなXSSを防ぐことができる。しかし、JQueryがDOMツリーに直接介入できる点からも様々なXSSの脆弱性が発見されており、過去のバージョンを用いる際には注意が必要になる。