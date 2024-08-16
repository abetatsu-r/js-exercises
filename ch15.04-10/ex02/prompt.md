以下の HTML および JavaScript は ToDo アプリのソースコードです。
Tailwind CSS を使う前提で HTML と JavaScript のコードを書き換えて見栄えを良くして下さい。
注意: HTML と JavaScript は1つのファイルにせず分けて出力して下さい。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>Simple ToDo</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <script type="module" src="/ch15.04-10/ex02/index.js"></script>
    <!-- 以下の style.css は Tailwind CLI によって生成される -->
    <!-- html または js を変更した場合は README.md に従い Tailwind CLI を実行し style.css を再度生成すること -->
    <link rel="stylesheet" href="/ch15.04-10/ex02/style.css" />
  </head>
  <!-- IMPORTANT: ChatGPT にはここから下の内容しか変更させないこと -->
  <body>
    <form id="new-todo-form">
      <input type="text" id="new-todo" placeholder="What needs to be done?" />
      <button>Add</button>
    </form>
    <ul id="todo-list">
      <!-- NOTE: 以下のような要素を JavaScript で動的に追加する
      <li class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" checked />
          <label class="content">研修の予習範囲を読む</label>
          <button class="destroy"></button>
        </div>
      </li>
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label class="content">研修の練習問題を完了する</label>
          <button class="destroy"></button>
        </div>
      </li>
      -->
    </ul>

    <template id="todo-template">
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label class="content"></label>
          <button class="destroy">❌</button>
        </div>
      </li>
    </template>
  </body>
</html>
```

```js
const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const template = document.querySelector("#todo-template");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  input.value = "";

  const clone = template.content.cloneNode(true);
  const li = clone.querySelector("li");
  const toggle = clone.querySelector("input");
  const label = clone.querySelector("label");
  const destroy = clone.querySelector("button");

  toggle.addEventListener("change", () => {
    // IMPORTANT: ChatGPT にはこの関数内のコードのみ変更してもらうこと
    li.classList.toggle("completed", toggle.checked);
  });
  label.textContent = todo;
  destroy.addEventListener("click", () => {
    li.remove();
  });

  list.prepend(li);
});
```