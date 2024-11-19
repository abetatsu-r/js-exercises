import { openPopup, closePopup } from "./popup.js";
import { handleExport } from "./export.js";
import { handleCssUpload } from "./cssHandler.js";

document.getElementById("openPopupBtn").addEventListener("click", openPopup);
document.getElementById("closePopupBtn").addEventListener("click", closePopup);
document.getElementById("submitBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const type = document.getElementById("typeSelect").value;
  const parameter = document.getElementById("parameterInput").value;

  // 名前を画面に表示
  if (name) {
    const nameDiv = document.createElement("div");
    nameDiv.textContent = `名前: ${name}`;
    document.body.appendChild(nameDiv);
  }

  // ラジオボタンを画面に表示
  if (type === "radio" && parameter) {
    const radioDiv = document.createElement("div");
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "radioGroup";
    const label = document.createElement("label");
    label.textContent = parameter;
    radioDiv.appendChild(radioInput);
    radioDiv.appendChild(label);

    const iframeDoc = document.getElementById("subFrame").contentDocument;
    iframeDoc.body.appendChild(radioDiv);
  }

  // ポップアップを閉じる
  closePopup();
});
document.getElementById("exportBtn").addEventListener("click", handleExport);
document.getElementById("cssInput").addEventListener("change", handleCssUpload);
