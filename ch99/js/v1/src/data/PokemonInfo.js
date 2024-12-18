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
  VENUSAUR: new Pokemon(
    3,
    "フシギバナ",
    TypeInfo.GRASS,
    Specialty.INGREDIENTS,
    2800,
    [
      new Ingredients(IngredientInfo.HONEY, [2, 5, 7]),
      new Ingredients(IngredientInfo.TOMATO, [null, 4, 7]),
      new Ingredients(IngredientInfo.POTATO, [null, null, 6]),
    ],
    26.6,
    17,
    null,
    2.1,
    2
  ),
  CHARIZARD: new Pokemon(
    6,
    "リザードン",
    TypeInfo.FIRE,
    Specialty.INGREDIENTS,
    2400,
    [
      new Ingredients(IngredientInfo.MEET, [2, 5, 7]),
      new Ingredients(IngredientInfo.GINGER, [null, 4, 7]),
      new Ingredients(IngredientInfo.HERBS, [null, null, 6]),
    ],
    22.43,
    19,
    null,
    1.6,
    2
  ),
  BLASTOISE: new Pokemon(
    9,
    "カメックス",
    TypeInfo.WATER,
    Specialty.INGREDIENTS,
    2600,
    [
      new Ingredients(IngredientInfo.MILK, [2, 5, 7]),
      new Ingredients(IngredientInfo.CACAO, [null, 3, 5]),
      new Ingredients(IngredientInfo.MEET, [null, null, 7]),
    ],
    27.5,
    17,
    null,
    2.1,
    2
  ),
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
