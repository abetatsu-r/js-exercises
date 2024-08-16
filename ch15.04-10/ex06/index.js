const template = document.createElement("template");
template.innerHTML = `\
<style>
.completed {
  text-decoration: line-through;
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    const input = this.shadowRoot.querySelector("#new-todo");
    const list = this.shadowRoot.querySelector("#todo-list");

    this.form.onsubmit = (e) => {
      e.preventDefault();

      // 両端からホワイトスペースを取り除いた文字列を取得する
      if (input.value.trim() === "") {
        return;
      }
      const todo = input.value.trim();
      // new-todo の中身は空にする
      input.value = "";

      const elem = document.createElement("li");

      const label = document.createElement("label");
      label.textContent = todo;
      label.style.textDecorationLine = "none";

      const toggle = document.createElement("input");
      toggle.type = "checkbox";
      toggle.addEventListener("change", () => {
        label.style.textDecorationLine = "line-through";
      });

      const destroy = document.createElement("button");
      destroy.textContent = "❌";
      destroy.addEventListener("click", () => {
        console.log("clicked"); // debug用
        elem.remove();
      });

      elem.append(toggle, label, destroy);
      list.prepend(elem);
    }
    
  }
}

customElements.define("todo-app", TodoApp);
