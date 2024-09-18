const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  let response = await fetchWithTimeout("http://localhost:3000/api/tasks");
  let tasks = await response.json();

  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  if (tasks.items.length !== 0) {
    for (let task of tasks.items) {
      appendToDoItem(task);
    }
  }
});

form.addEventListener("submit", async (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  let response = await fetchWithTimeout("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({ name: todo }),
  });

  if (response.status >= 400) {
    alert(await response.json());
    return;
  }

  let task = await response.json();
  appendToDoItem(task);
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const id = task.id;
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.addEventListener("change", async () => {
    if (label.style.textDecorationLine === "none") {
      let response = await fetch("http://localhost:3000/api/tasks/" + id, {
        method: "PATCH",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({ status: "completed" }),
      });
      if (response.status === 200) {
        label.style.textDecorationLine = "line-through";
      }
    } else {
      let response = await fetchWithTimeout(
        "http://localhost:3000/api/tasks/" + id,
        {
          method: "PATCH",
          headers: new Headers({ "Content-Type": "application/json" }),
          body: JSON.stringify({ status: "active" }),
        },
      );

      if (response.status === 200) {
        label.style.textDecorationLine = "none";
      }
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";

  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  destroy.addEventListener("click", async () => {
    let response = await fetchWithTimeout(
      "http://localhost:3000/api/tasks/" + id,
      { method: "DELETE" },
    );

    // 成功したら elem を削除しなさい
    if (response.status === 204) {
      elem.remove();
    } else {
      alert(await response.json());
    }
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.append(toggle, label, destroy);
  list.prepend(elem);
}

async function fetchWithTimeout(url, options = {}) {
  // 3秒以内に完了しなかったらPromiseを失敗させるようにする。
  let controller = new AbortController();
  options.signal = controller.signal;

  setTimeout(() => {
    controller.abort();
  }, 3000);

  let interval = 1;

  // 3秒経ったらタイムアウトになるのでretryは2回まで
  let maxRetry = 2;
  while (maxRetry > 0) {
    try {
      const response = await fetch(url, options);
      if (response.status === 500) {
        console.log("retry");
        maxRetry--;
        await new Promise((resolve) => setTimeout(resolve, 1000 * interval));
        interval *= 2;
      } else {
        return response;
      }
    } catch (e) {
      console.log("gyaaaa, haaaa");
      alert("timeout");
      return {};
    }
  }

  alert("timeout");
  return {};
}

export async function retryWithExponentialBackoff(func, maxRetry) {
  let interval = 1;
  while (maxRetry > 0) {
    try {
      const result = await fetch(url, {});
      return result;
    } catch (e) {
      maxRetry--;
      await new Promise((resolve) => setTimeout(resolve, 1000 * interval));
      interval *= 2;
    }
  }

  return "FAILED";
}
