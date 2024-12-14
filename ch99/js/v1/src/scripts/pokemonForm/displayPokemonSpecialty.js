/**
 * ポケモンのタイプを表示する
 * @param {HTMLElement} displayElement タイプを表示する要素
 * @param {Object} selectedPokemon 選択されたポケモンの情報
 */
export function displayPokemonSpecialty(displayElement, selectedPokemon) {
  const label = displayElement.querySelector(".specialty-label");
  const value = displayElement.querySelector(".specialty-value");
  if (selectedPokemon) {
    label.style.display = "block";
    console.log(selectedPokemon);
    value.textContent = translateSpecialtyName(selectedPokemon.specialty);
    value.classList.remove(
      "Specialty-Berries",
      "Specialty-Ingredients",
      "Specialty-Skills"
    );
    value.classList.add(`Specialty-${selectedPokemon.specialty}`);
  } else {
    label.style.display = "none";
    value.textContent = "";
    value.classList.remove(
      "Specialty-Berries",
      "Specialty-Ingredients",
      "Specialty-Skills"
    );
  }
}

function translateSpecialtyName(specialty) {
  switch (specialty) {
    case "Berries":
      return "きのみ";
    case "Ingredients":
      return "食材";
    case "Skills":
      return "スキル";
    default:
      throw new Error("ありえない");
  }
}
