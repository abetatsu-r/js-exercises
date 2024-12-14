/**
 * 選択したポケモンの画像を表示する
 * @param {HTMLElement} displayElement 画像を表示する要素
 * @param {Object} selectedPokemon 選択されたポケモンの情報
 */
export function displayPokemonImage(displayElement, selectedPokemon) {
  if (selectedPokemon) {
    displayElement.style.display = "block";
    displayElement.src = `assets/images/pokemon/${selectedPokemon.id}.png`;
  } else {
    displayElement.style.display = "none";
    displayElement.src = "";
  }
}
