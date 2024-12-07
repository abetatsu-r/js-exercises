import PokemonInfo from "../data/PokemonInfo.js";
import { NatureInfo } from "../enums/NatureInfo.js";
import { populatePokemonSelect } from "./pokemonForm/populatePokemonSelect.js";
import { displayPokemonType } from "./pokemonForm/displayPokemonType.js";
import { reflectIngredient } from "./pokemonForm/reflectIngredient.js";
import { displayNatureEffectedParam } from "./pokemonForm/displayNatureEffectedParam.js";
import { reflectNatureSelect } from "./pokemonForm/reflectNatureSelect.js";

const form = document.getElementById("pokemon-form");
const pokemonSelect = document.getElementById("pokemon-select");
const pokemonTypeDisplay = document.getElementById("pokemon-type-display");

const ingredient_1 = document.getElementById("ingredient-1");
const ingredient_2 = document.getElementById("ingredient-2");
const ingredient_3 = document.getElementById("ingredient-3");

const natureSelect = document.getElementById("nature-select");
const natureEffectedParamDisplay = document.getElementById(
  "nature-effected-param-display"
);

populatePokemonSelect(pokemonSelect, PokemonInfo);
reflectNatureSelect(natureSelect, NatureInfo);

pokemonSelect.addEventListener("change", (event) => {
  // 一旦初期化する

  const selectedPokemon = PokemonInfo[event.target.value];
  displayPokemonType(pokemonTypeDisplay, selectedPokemon);

  // 食材反映
  reflectIngredient(ingredient_1, 1, selectedPokemon);
  reflectIngredient(ingredient_2, 2, selectedPokemon);
  reflectIngredient(ingredient_3, 3, selectedPokemon);
});

natureSelect.addEventListener("change", (event) => {
  displayNatureEffectedParam(
    natureEffectedParamDisplay,
    NatureInfo[event.target.value]
  );
});

form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // デフォルトのフォーム送信を防止
  }
});
