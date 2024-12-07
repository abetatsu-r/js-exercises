/**
 * セレクトボックスにPokemonInfoのポケモン一覧を追加する
 * @param {HTMLSelectElement} selectElement
 * @param {Object} PokemonInfo
 */
export function populatePokemonSelect(selectElement, pokemonInfo) {
  for (const key in pokemonInfo) {
    const pokemon = pokemonInfo[key];
    const option = document.createElement("option");
    option.value = key;
    option.textContent = pokemon.name;
    selectElement.appendChild(option);
  }
}
