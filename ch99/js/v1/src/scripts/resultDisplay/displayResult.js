import CalcResult from "../../model/calcResult.js";
import { createBerriesArea } from "./createBerriesArea.js";
import { createIngredientsArea } from "./createIngredientsArea.js";
import { createPokemonArea } from "./createPokemonArea.js";
import { createResultContainer } from "./createResultContainer.js";
import { createSkillArea } from "./createSkillArea.js";

/**
 * CalcResultObjectを受け取り、結果を表示する
 * @param {CalcResult} result - 計算結果オブジェクト
 */
export function displayResult(result) {
  const parents = document.getElementById("result-top-container");
  const container = createResultContainer();

  // Pokemonのエリア展開
  const pokemonArea = createPokemonArea(result.pokemon);

  // きのみエリア展開
  const berryArea = createBerriesArea(result);

  // 食材エリア展開
  const ingredientArea = createIngredientsArea(result.getIngredientJson());

  // スキルエリア展開
  const skillArea = createSkillArea(result.totalSkillCount);
  // optionエリア展開
  const optionArea = document.createElement("div");
  optionArea.className = "result-option-area";
  optionArea.style.gridColumn = "5";
  optionArea.style.gridRow = "1";
  optionArea.style.backgroundColor = "yellow";

  container.appendChild(pokemonArea);
  container.appendChild(berryArea);
  container.appendChild(skillArea);
  container.appendChild(ingredientArea);
  container.appendChild(optionArea);

  console.log(container);
  parents.appendChild(container);
}
