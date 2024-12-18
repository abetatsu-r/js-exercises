import { IngredientKindInfo } from "../enums/IngredientKindInfo.js";
import { MyPokemon } from "./MyPokemon.js";

/**
 * 計算結果を格納するためのクラス
 * @param {MyPokemon} pokemon
 * @param {number} totalBerries
 * @param {number} totalBerriesWithoutLost 所持数上限に引っかからなかった場合のきのみ期待値
 * @param {number[3]} totalIngredients
 * @param {number[3]} totalIngredientsWithoutLost 所持数上限に引っかからなかった場合の食材期待値
 * @param {number} totalSkillCount
 * @param {number} postHelpingEnergy 一日のお手伝い終了時の元気
 */
export default class CalcResult {
  constructor(
    pokemon,
    totalBerries,
    totalBerriesWithoutLost,
    totalIngredients,
    totalIngredientsWithoutLost,
    totalSkillCount,
    postHelpingEnergy
  ) {
    this.pokemon = pokemon;
    this.totalBerries = totalBerries;
    this.totalBerriesWithoutLost = totalBerriesWithoutLost;
    this.totalIngredients = totalIngredients;
    this.totalIngredientsWithoutLost = totalIngredientsWithoutLost;
    this.totalSkillCount = totalSkillCount;
    this.postHelpingEnergy = postHelpingEnergy;
  }

  getBerryEnergy() {
    return this.totalBerries * this.pokemon.getBerryEnergy();
  }

  getIngredientJson() {
    const ingredientKind = this.pokemon.ingredients;
    const totalA = Number(
      ingredientKind
        .map((kind, i) => {
          if (kind === IngredientKindInfo.A) {
            return this.totalIngredients[i];
          } else {
            return 0;
          }
        })
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
    );

    const totalB = Number(
      ingredientKind
        .map((kind, i) => {
          if (kind === IngredientKindInfo.B) {
            return this.totalIngredients[i];
          } else {
            return 0;
          }
        })
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
    );

    const totalC = Number(
      ingredientKind
        .map((kind, i) => {
          if (kind === IngredientKindInfo.C) {
            return this.totalIngredients[i];
          } else {
            return 0;
          }
        })
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
    );

    return {
      A: {
        name: this.pokemon.pokemon.ingredients[0].ingredient.name,
        amount: totalA,
        energy: Math.round(
          totalA * this.pokemon.pokemon.ingredients[0].ingredient.energy
        ),
      },
      B: {
        name: this.pokemon.pokemon.ingredients[1].ingredient.name,
        amount: totalB,
        energy: Math.round(
          totalB * this.pokemon.pokemon.ingredients[1].ingredient.energy
        ),
      },
      C: {
        name: this.pokemon.pokemon.ingredients[2].ingredient.name,
        amount: totalC,
        energy: Math.round(
          totalC * this.pokemon.pokemon.ingredients[2].ingredient.energy
        ),
      },
    };
  }
}
