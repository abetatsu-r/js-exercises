const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

const DB_NAME = "ex05";
const STORE_NAME = "todo-tasks";

/**
function notifyDatabaseChange() {
  const event = new CustomEvent('dbchange', { detail: { message: 'Database content has changed' } });
  window.dispatchEvent(event);
}

window.addEventListener('dbchange', (event) => {
  location.reload();
});
*/

document.addEventListener("DOMContentLoaded", () => {
  // indexedDB上のタスクをロード時に表示する
  selectAll((db) => {
    for (let record of db) {
      appendToDoItem(record.name, record.status);
    }
  });
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

  insert(todo, () => {
    // ここから #todo-list に追加する要素を構築する
    appendToDoItem(todo, "active");
  });
});

function appendToDoItem(name, status) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");

  label.textContent = name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";

  if (!isActive(status)) {
    toggle.checked = !isActive(status);
    label.style.textDecorationLine = "line-through";
  }

  // indexDBのstatusを更新し、textDecorationLineを変更する
  toggle.addEventListener("change", async () => {
    if (label.style.textDecorationLine === "none") {
      update(name, "completed", () => {
        label.style.textDecorationLine = "line-through";
      });
    } else {
      update(name, "active", () => {
        label.style.textDecorationLine = "none";
      });
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";

  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  destroy.addEventListener("click", () => {
    deleteTask(name, () => {
      elem.remove();
    });
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.append(toggle, label, destroy);
  list.prepend(elem);
}

function isActive(status) {
  return status === "active";
}

function withDB(callback) {
  let request = indexedDB.open(DB_NAME);
  request.onerror = console.error;
  request.onsuccess = () => {
    let db = request.result;
    callback(db);
  };

  request.onupgradeneeded = () => {
    initDB(request.result, callback);
  };
}

function initDB(db) {
  db.createObjectStore("todo-tasks", { keyPath: "name" });
}

// task一覧取得
function selectAll(callback) {
  withDB((db) => {
    let transaction = db.transaction([STORE_NAME], "readwrite");
    let store = transaction.objectStore(STORE_NAME);

    let request = store.getAll();
    request.onsuccess = () => {
      callback(request.result);
    };
  });
}

// 新規taskの挿入
function insert(todo, callback) {
  let task = {
    name: todo,
    status: "active",
  };

  withDB((db) => {
    let transaction = db.transaction([STORE_NAME], "readwrite");
    let store = transaction.objectStore(STORE_NAME);

    const request = store.put(task);
    request.onsuccess = () => {
      callback();
    };
  });
}

// taskのstatus更新
function update(todo, status, callback) {
  let task = {
    name: todo,
    status: status,
  };

  withDB((db) => {
    let transaction = db.transaction([STORE_NAME], "readwrite");
    let store = transaction.objectStore(STORE_NAME);

    let request = store.put(task);
    request.onsuccess = () => callback();
  });
}

// taskの削除
function deleteTask(todo, callback) {
  withDB((db) => {
    let transaction = db.transaction([STORE_NAME], "readwrite");
    let store = transaction.objectStore(STORE_NAME);

    let request = store.delete(todo);
    request.onsuccess = () => callback();
  });
}
