## 解答

```
> reg = /^(a|aa)+$/
/^(a|aa)+$/
> str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!"
'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!'
> reg.test(str);
```

終わらない。

理由:

主に、正規表現が可能な限り長くマッチさせようとすることに依存すると思われる。
つまり、

1. `a`にマッチする`a....a`を第一候補とする。+にマッチすることがないので次に終端`$`を確認するが違うので棄却
2. 一文字減らして`a....a`（ただし、一文字少ない）を第二候補とする。+にマッチする残りの`a`をみて終端を確認するが違うので棄却

↑を永遠と繰り返すため莫大な時間がかかる。これを利用したDos攻撃ReDoS攻撃なんかもあるらしい。
