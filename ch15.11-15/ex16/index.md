## ex16:問) オリジン間リソース共有（CORS）について、以下の問いに答えなさい。

### 1. クロスオリジンリクエストに制約が無かった場合、どのような問題が発生するか述べなさい

- 外部のWebサイトから、抜き取った情報をリクエストし、機密情報が抜き取られる可能性がある。

### 2. クロスオリジンリクエストで メソッド(POST/GET)やリクエストの内容によって Preflight リクエストの有無が異なるのは何故か、その理由を述べなさい

- Preflightリクエストは、実際のリクエストを送信する前に、そのリクエストが安全かどうかを`OPTIONS`リクエストを通して確認するためのものである。
- そのため、機密情報が含まれている可能性が低いリクエストについては、Preflightリクエストを行わなくて
- こういったリクエストを単純なリクエストと呼ぶ
- また`CORS`以前から利用されていたリクエストについては、サーバー側の互換性の観点からPreflightリクエストが実行されないものもある。
