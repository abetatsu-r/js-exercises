/**
 * 性格の一覧をセレクトボックスに反映させる
 * @param {HTMLSelectElement} selectElement
 * @param {Object} natureInfo
 */
export function reflectNatureSelect(selectElement, natureInfo) {
  for (const key in natureInfo) {
    const nature = natureInfo[key];
    const option = document.createElement("option");
    option.value = key;
    option.textContent = nature.name_ja;
    selectElement.appendChild(option);
  }
}
