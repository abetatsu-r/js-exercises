## ex18問.

書籍の 15.12 の説明には以下のような説明がある。本章で紹介するクライアントサイドストレージのいずれも、暗号化機能を備えていませ ん。保存したデータは、ユーザのデバイス上に暗号化されていない形式で存在します。では、Web アプリケーションがユーザの機密情報をセキュアに扱うためにはどのようなことが必要になるか記述しなさい。ブラウザでの対応に限らず、Web アプリケーション全般を対象として考えること。

### 解答

- serverサイドで機密情報を管理するようにし、そのアクセスを認証APIなどを用いて制御するようにする。
- 機密情報のやり取りの際には暗号化処理を施すようにする。
- ブラウザに保持する情報は、公開鍵？のようにそれ単体では意味をなさないものに限定するようにする。
