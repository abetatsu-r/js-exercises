## 解答

JavaScriptではよくある、inputの内容によって任意の処理を実行してしまうコードである

例:
`f("\"world?\" + (function(){while(true){}})()"); // 永遠にHello,Worldしない`
