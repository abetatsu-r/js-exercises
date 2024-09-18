const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", () => {
  // sessionStoage上のタスクをロード時に表示する
  for (let key of Object.keys(sessionStorage)) {
    appendToDoItem(key);
  }
});

window.addEventListener("storage", (e) => {
  location.reload();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  // new-todo の中身は空にする
  input.value = "";

  sessionStorage.setItem(todo, "active");

  // ここから #todo-list に追加する要素を構築する
  appendToDoItem(todo);
});

function appendToDoItem(key) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");

  label.textContent = key;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";

  if (!isActive(key)) {
    toggle.checked = !isActive(key);
    label.style.textDecorationLine = "line-through";
  }

  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.addEventListener("change", async () => {
    if (label.style.textDecorationLine === "none") {
      sessionStorage.setItem(key, "completed");
      label.style.textDecorationLine = "line-through";
    } else {
      sessionStorage.setItem(key, "active");
      label.style.textDecorationLine = "none";
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";

  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  destroy.addEventListener("click", () => {
    sessionStorage.removeItem(key);
    elem.remove();
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.append(toggle, label, destroy);
  list.prepend(elem);
}

function isActive(key) {
  return sessionStorage.getItem(key) === "active";
}
