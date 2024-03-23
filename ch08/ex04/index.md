## 解答

**予想**

```
false, false
true, false
```

**結果**

```
false true
true false
```

**理由**

関数定義式の場合：  
外側のthisの値を継承できないため、自身が定義されているnestの値を参照することになる。  
arrow演算子について:  
arrow演算子では、thisを指定した場合に外側のthisの値を継承するため、thisの値がobjになる。
