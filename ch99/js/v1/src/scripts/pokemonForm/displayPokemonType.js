/**
 * ポケモンのタイプを表示する
 * @param {HTMLElement} displayElement タイプを表示する要素
 * @param {Object} selectedPokemon 選択されたポケモンの情報
 */
export function displayPokemonType(displayElement, selectedPokemon) {
  if (selectedPokemon) {
    displayElement.textContent = selectedPokemon.type.name;
  } else {
    displayElement.textContent = "";
  }
}
