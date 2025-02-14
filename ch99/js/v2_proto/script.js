document.addEventListener("DOMContentLoaded", () => {
  const envButton = document.getElementById("envButton");
  const offCanvasMenu = document.getElementById("offCanvasMenu");
  const toggleCanvas = document.getElementById("toggleCanvas");
  const envForm = document.getElementById("envForm");
  const addLoginTimeButton = document.getElementById("addLoginTime");
  const loginTimings = document.getElementById("loginTimings");

  // オフキャンバスメニューの開閉
  const toggleMenu = () => {
    offCanvasMenu.classList.toggle("open");
  };

  envButton.addEventListener("click", toggleMenu);
  toggleCanvas.addEventListener("click", toggleMenu);

  // ログインタイミングの追加
  addLoginTimeButton.addEventListener("click", () => {
    const entryCount = loginTimings.querySelectorAll(".login-entry").length;
    if (entryCount >= 10) return;

    const newEntry = document.createElement("div");
    newEntry.classList.add("login-entry");

    newEntry.innerHTML = `
            <label>ログイン時間:</label>
            <input type="time" name="loginTime" class="login-time">
            <label>元気エール回数:</label>
            <input type="number" name="cheerCount" class="cheer-count" value="2" min="0" max="2">
        `;
    loginTimings.appendChild(newEntry);
  });

  // 登録処理
  envForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(envForm);
    const data = {};

    // 基本入力値を収集
    formData.forEach((value, key) => {
      if (key in data) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    });

    // localStorageに保存
    localStorage.setItem("pokemonSleepEnv", JSON.stringify(data));
    alert("設定が保存されました！");
  });
});
