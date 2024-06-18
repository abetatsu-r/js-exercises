## Promiseについてのメモ

- 解決 ⇒ callbackが値を返すこと、callbackがpromiseを返すただそれだけでも解決にはなる。解決されただけでは、後続のpromiseチェーンのタスクは実行されない。
- 満たす ⇒ 満たされた値がcallbackの引数に渡されること。(callbackによって返された値がpromiseでない場合、あるいはcallbackされたpromiseが満たされること)

### Promise.resolve

- 値を渡す ⇒ その値でpromiseを解決し、同時に満たす
- promiseを渡す ⇒ promiseがあるのでその場で解決、満たされるかどうかは渡されたpromiseの結果に依存

### 0から始めるPromise

- new Promise(fn)とし、fnは(resolve, reject)で書く
- コンストラクタ生成のタイミングでfnが実行され、reject, resolveのどちらが実行されたかどうかでPromiseコンストラクタの返すPromiseが解決されるかどうかが確定する。
