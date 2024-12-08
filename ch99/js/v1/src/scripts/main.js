import PokemonInfo from "../data/PokemonInfo.js";
import { NatureInfo } from "../enums/NatureInfo.js";
import { populatePokemonSelect } from "./pokemonForm/populatePokemonSelect.js";
import { displayPokemonType } from "./pokemonForm/displayPokemonType.js";
import { reflectIngredient } from "./pokemonForm/reflectIngredient.js";
import { displayNatureEffectedParam } from "./pokemonForm/displayNatureEffectedParam.js";
import { reflectNatureSelect } from "./pokemonForm/reflectNatureSelect.js";
import { MyPokemon } from "../model/MyPokemon.js";
import { reflectSubskillSelect } from "./pokemonForm/reflectSubskill.js";
import { SubSkillInfo } from "../enums/SubSkillInfo.js";
import { displayEvolutionStage } from "./pokemonForm/displayEvolutionStage.js";
import { calc } from "../utils/calculator/calc.js";

const form = document.getElementById("pokemon-form");
const pokemonSelect = document.getElementById("pokemon-select");
const pokemonTypeDisplay = document.getElementById("pokemon-type-display");

const levelInput = document.getElementById("level-input");

const sleepRibbonRadio = document.getElementById("sleep-ribbon");

const evolutionStageInput = document.getElementById("evolution-stage");

const helpingBonusCountInput = document.getElementById("helping-bonus-count");

const ingredient_1 = document.getElementById("ingredient-1");
const ingredient_2 = document.getElementById("ingredient-2");
const ingredient_3 = document.getElementById("ingredient-3");

const subSkillsContainer = document.getElementById("sub-skills-container");
const addSubSkillButton = document.getElementById("add-sub-skill-btn");

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
  displayEvolutionStage(evolutionStageInput, selectedPokemon);

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

addSubSkillButton.addEventListener("click", (event) => {
  // 現在選択中のサブスキルを取得
  const currentSkills = Array.from(
    subSkillsContainer.querySelectorAll(".sub-skill")
  ).map((elem) => elem.querySelector("select").value);

  // (:TODO) レベル変動に合わせて選択結果を除外する必要があるがいったん保留
  const maxSubskillCount = getMaxSubskillCount();

  // 新規のセレクトボックスを作成
  if (currentSkills.length < maxSubskillCount) {
    const newSubSkill = document.createElement("div");
    newSubSkill.classList.add("sub-skill");
    newSubSkill.innerHTML = `
      <select id="sub-skill-${
        currentSkills.length + 1
      }" class="sub-skill-select">
        <option value="" disabled selected>Select a sub-skill</option>
      </select>
    `;

    const newSubSkillSelect = newSubSkill.querySelector("select");
    reflectSubskillSelect(newSubSkillSelect, SubSkillInfo, currentSkills);

    subSkillsContainer.appendChild(newSubSkill);
  }
});

form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // デフォルトのフォーム送信を防止
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const targetPokemon = createMyPokemon();
  console.log(targetPokemon.getHelpTime());
  console.log(targetPokemon.getCarryLimit());
  console.log(targetPokemon.getBerriesCount());
  console.log(targetPokemon.getBerryEnergy());
  console.log(targetPokemon.getIngredientCount1());
  console.log(targetPokemon.getIngredientCount2());
  console.log(targetPokemon.getIngredientCount3());
  console.log(targetPokemon.getIngredientRate());

  const res = calc(targetPokemon);
  console.log(res);
  console.log(res.getIngredientJson());
  console.log(res.getBerryEnergy());
});

/**
 * フォームの画面からMyPokemonを生成する
 * @returns {MyPokemon}
 */
function createMyPokemon() {
  // ポケモンの種類
  const selectedPokemon = PokemonInfo[pokemonSelect.value];

  // レベル
  const level = levelInput.value;

  // 性格
  const nature = NatureInfo[natureSelect.value];

  // 食材構成
  const ingredients = [
    ingredient_1.querySelector("input:checked").value,
    ingredient_2.querySelector("input:checked").value,
    ingredient_3.querySelector("input:checked").value,
  ];

  // サブスキル構成
  const subSkills = Array.from(
    subSkillsContainer.querySelectorAll(".sub-skill")
  ).map((elem) => SubSkillInfo[elem.querySelector("select").value]);

  // おやすみリボン
  const sleepRibbon = sleepRibbonRadio.querySelector("input:checked").value;

  // option
  const option = {};
  // 進化回数がデフォルトでない場合
  if (selectedPokemon.evolution_stage !== evolutionStageInput.value) {
    option.fixedEvolutionStage = evolutionStageInput.value;
  }

  // お手伝いボーナスを持つメンバーがいる場合
  if (helpingBonusCountInput.value) {
    option.helpingBonusCount = helpingBonusCountInput.value;
  }

  return new MyPokemon(
    selectedPokemon,
    level,
    nature,
    subSkills,
    ingredients,
    sleepRibbon,
    option
  );
}
/**
 * サブスキルの最大数計算
 */
function getMaxSubskillCount() {
  const level = levelInput.value;
  if (level < 10) {
    return 0;
  } else if (level < 25) {
    return 1;
  } else if (level < 50) {
    return 2;
  } else {
    return 3;
  }
}
