// 各要素の取得
const openPopupBtn = document.getElementById("openPopupBtn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const submitBtn = document.getElementById("submitBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const typeSelect = document.getElementById("typeSelect");
const parameterInputDiv = document.getElementById("parameterInputDiv");
const parameterInput = document.getElementById("parameterInput");
const nameInput = document.getElementById("nameInput");
const subFrame = document.getElementById("subFrame");
const exportBtn = document.getElementById("exportBtn");
const exportOutput = document.getElementById("exportOutput");
const cssInput = document.getElementById("cssInput");

// iframe初期化
subFrame.contentDocument.body.innerHTML = "<div id='content'></div>";
const subContent = subFrame.contentDocument.getElementById("content");
const iframeHead = subFrame.contentDocument.head;
let appliedCSS = "";

// ポップアップを開く
openPopupBtn.addEventListener("click", () => {
  popup.style.display = "block";
  overlay.style.display = "block";
});

// ポップアップを閉じる
function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  nameInput.value = "";
  typeSelect.value = "";
  parameterInput.value = "";
  parameterInputDiv.classList.add("hidden");
}

closePopupBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

// セレクトボックス変更時の処理
typeSelect.addEventListener("change", () => {
  parameterInputDiv.classList.toggle("hidden", typeSelect.value !== "radio");
});

// 「完了」ボタンで処理
submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const parameter = parameterInput.value.trim();

  if (name && typeSelect.value === "radio" && parameter) {
    const container = document.createElement("div");
    const nameHeader = document.createElement("h3");
    nameHeader.textContent = `名前: ${name}`;
    container.appendChild(nameHeader);

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "dynamicRadio";
    radio.value = parameter;

    const label = document.createElement("label");
    label.textContent = parameter;
    label.prepend(radio);

    container.appendChild(label);
    subContent.appendChild(container);
  }

  closePopup();
});

// CSSファイルの読み込み
cssInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.type === "text/css") {
    const reader = new FileReader();
    reader.onload = (e) => {
      appliedCSS = e.target.result;

      // iframe内にスタイルを適用
      let styleTag = iframeHead.querySelector("#dynamicStyle");
      if (!styleTag) {
        styleTag = subFrame.contentDocument.createElement("style");
        styleTag.id = "dynamicStyle";
        iframeHead.appendChild(styleTag);
      }
      styleTag.textContent = appliedCSS;
    };
    reader.readAsText(file);
  }
});

// Exportボタンの処理
exportBtn.addEventListener("click", () => {
  const iframeHTML = subFrame.contentDocument.body.innerHTML;
  const exportHTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Exported Subframe</title>
    <style>
${appliedCSS}
    </style>
</head>
<body>
${iframeHTML}
</body>
</html>`;
  exportOutput.textContent = exportHTML;
});
