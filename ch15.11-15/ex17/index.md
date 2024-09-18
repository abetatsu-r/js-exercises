## ex17問). 実際のサービスの通信をデベロッパーツールなどで眺めて CORS の設定を確認しなさい。(金融系の認証ページなどで CORS の設定がされていることが多い)

- 確認したサイト

  - aws console

- 設定について
  - response Header:
    ```
    default-src 'none' https://aws.amazon.com https://*.signin.aws.amazon.com https://signin.aws.amazon.com https://*.analytics.console.aws.a2z.com https://*.feedback.console.aws.dev 'nonce-9t4ahKZrmUzdGaahHajHaw==';
    script-src 'self' https://aws.amazon.com https://*.signin.aws.amazon.com ...
    ```
    など、`aws.com`以外からのリクエストを閉じているように見受けられた。
