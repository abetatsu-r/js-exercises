// 1. nav 要素内のリンク (<a>)
const ans1 = document.querySelectorAll("nav>a");
console.log(ans1); // NodeList(4) [a, a, a, a]

// 2. 商品リスト (.product-list) 内の最初の商品 (.product-item)
const ans2 = document.querySelector(".product-list>.product-item:first-child");
console.log(ans2); // <div class = ... 商品1 ... </div>

// 3. カートアイコンの画像 (<img>)
const ans3 = document.querySelector(".cart>a>img").src;
console.log(ans3); // index.js:11 http://127.0.0.1:8080/ch15.01-03/ex13/30

// 4. 商品リスト (.product-list) 内の価格 (.price) を表示する要素
const ans4 = document.querySelectorAll(".product-list .price");
console.log(ans4); // NodeList(4) [p.price, p.price, p.price, p.price]

// 5. 商品リスト (.product-list) 内の全ての商品 (.product-item) の画像 (<img>)
const ans5 = document.querySelectorAll(".product-list .product-item>img");
console.log(ans5); // NodeList(4) [img, img, img, img]

// 6. 検索バー (.search-bar) 内の検索ボタン (<button>)
const ans6 = document.querySelector(".search-bar>button");
console.log(ans6); // <button>検索</button>

// 7. フッター (footer) 内のパラグラフ (<p>) 要素
const ans7 = document.querySelector("footer p");
console.log(ans7); // <p>© 2024 家電オンラインショップ. All rights reserved.</p>

// 8. 商品リスト (.product-list) 内の偶数番目の商品 (.product-item)
const ans8 = document.querySelectorAll(
  ".product-list .product-item:nth-child(2n)",
);
console.log(ans8); // NodeList(2) [div.product-item, div.product-item]

// 9. ヘッダー (header) 内のアカウントリンク (.account) の画像 (<img>)
const ans9 = document.querySelector("header .account img");
console.log(ans9); // <img src="./30" alt="アカウント">

// 10. ナビゲーションリンクのうち、"会社情報" のリンク
const ans10 = document.querySelector('nav a[href="#about"]');
console.log(ans10); // <a href="#about">会社情報</a>
