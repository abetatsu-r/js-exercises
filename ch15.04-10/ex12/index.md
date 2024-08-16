## 解答

### activeやcompletedに遷移したのちにリロードするとどうなるか？

`404 NotFound`のエラーになる。

Chromeのv34以降のバージョンでは、ページのリロード時にpopStateイベントが発行されないからだと考える。
