/**
 * ポケモンのタイプを表示する
 * @param {HTMLElement} displayElement タイプを表示する要素
 * @param {Object} selectedPokemon 選択されたポケモンの情報
 */
export function displayPokemonType(displayElement, selectedPokemon) {
  const label = displayElement.querySelector(".type-label");
  const img = displayElement.querySelector(".type-image");
  if (selectedPokemon) {
    label.style.display = "block";
    img.style.display = "block";
    console.log(selectedPokemon);
    img.src = `assets/images/type/${selectedPokemon.type.name_img}.png`;
  } else {
    label.style.display = "none";
    img.style.display = "none";
    img.src = "";
  }
}
