import Pokemon from "../model/Pokemon.js";
import Specialty from "../enums/Specialty.js";
import { TypeInfo } from "./TypeInfo.js";
import Ingredients from "../model/Ingredients.js";
import IngredientInfo from "../enums/IngredientInfo.js";
//import MainSkill from "../model/MainSkill.js";

/**
 * ポケモンの一覧
 * 全てPokemonクラスのインスタンス
 */
const PokemonInfo = Object.freeze({
  WALREIN: new Pokemon(
    365,
    "トドゼルガ",
    TypeInfo.ICE,
    Specialty.BERRIES,
    3000,
    [
      new Ingredients(IngredientInfo.OIL, [1, 2, 4]),
      new Ingredients(IngredientInfo.MEET, [null, 3, 4]),
      new Ingredients(IngredientInfo.GINGER, [null, null, 4]),
    ],
    22.4,
    18,
    null,
    2.2,
    2
  ),
  WEAVILE: new Pokemon(
    461,
    "マニューラ",
    TypeInfo.ICE,
    Specialty.BERRIES,
    3000,
    [
      new Ingredients(IngredientInfo.MEET, [1, 2, 4]),
      new Ingredients(IngredientInfo.EGG, [null, 2, 3]),
      new Ingredients(IngredientInfo.SOYBEAN, [null, null, 4]),
    ],
    25.0,
    15,
    null,
    0.95,
    1
  ),
});

export default PokemonInfo;
