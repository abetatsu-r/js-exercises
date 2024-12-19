/**
 * 削除ボタン、Box保存等を行う領域
 */
export function createOptionArea() {
  const optionArea = document.createElement("div");
  optionArea.className = "result-option-area";

  // ×ボタン
  const deleteButton = document.createElement("button");
  deleteButton.className = "result-option-delete-button";
  deleteButton.textContent = "×";

  // ×ボタンを押すと、親要素事削除するようにする
  deleteButton.addEventListener("click", () => {
    const parent = optionArea.parentNode;
    parent.remove();
  });

  optionArea.appendChild(deleteButton);

  return optionArea;
}
