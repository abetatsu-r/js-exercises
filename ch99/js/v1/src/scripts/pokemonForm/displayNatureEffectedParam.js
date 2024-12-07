/**
 * 性格の補正情報を表示する
 * @param {HTMLElement} displayElement 補正情報を表示する要素
 * @param {Object} selectedNature 選択された性格の情報
 */
export function displayNatureEffectedParam(displayElement, selectedNature) {
  if (selectedNature) {
    // 無補正なら無補正と表示
    if (
      selectedNature.up === "性格による特徴なし" &&
      selectedNature.down === "性格による特徴なし"
    ) {
      displayElement.textContent = "性格による特徴なし";
      return;
    }

    const natureEffectedParam =
      selectedNature.up + "▲▲ " + selectedNature.down + "▼▼";
    displayElement.textContent = natureEffectedParam;
  } else {
    displayElement.textContent = "";
  }
}
