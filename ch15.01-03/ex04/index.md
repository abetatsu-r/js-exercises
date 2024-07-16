## 解答

### 各環境でのglobalObject

1. ブラウザ内  
   `window`

2. node  
   `global`と呼ばれるObjectが対象だった(今はglobalThisの方が推奨されている？)

3. それ以外  
   `globalThis`

### windowとglobalの違い

windowにはブラウザの操作のためのメソッドが色々と用意されている。https://developer.mozilla.org/ja/docs/Web/API/Window

### undefinedがglobalObjectに含まれるか？

webブラウザでは以下のように

```
<script>
    console.log("undefined" in window); // true;
</script>
```

nodeでは以下のように

```
console.log("undefined" in global); // true;
```

実行し、ともにtrueとなったことを確認した。

過去のECMAScriptのバージョンでは、`undefined`の値の上書きや代入が可能だったため、比較判定などが実装の都合によっては異なる結果となってしまうことがあり利用が推奨されていなかった
