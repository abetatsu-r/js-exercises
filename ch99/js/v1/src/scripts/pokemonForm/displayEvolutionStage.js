/**
 * 進化回数を反映させる
 * @param {HTMLInputElement} elem
 * @param {Pokemon} selectedPokemon
 */
export function displayEvolutionStage(displayElement, selectedPokemon) {
  if (selectedPokemon) {
    displayElement.value = selectedPokemon.evolution_stage;
  } else {
    displayElement.value = "";
  }
}
