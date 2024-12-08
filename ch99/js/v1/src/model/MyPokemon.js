import { NatureEffectedParam } from "../enums/NatureEffectedParam.js";
import Specialty from "../enums/Specialty.js";
import { SubSkillInfo } from "../enums/SubSkillInfo.js";

/**
 * MyPokemonクラス
 * 性格・スキル構成・食材構成が定まったポケモンを表すクラス
 * @param {Pokemon} pokemon ポケモン(インスタンス)
 * @param {number} level レベル
 * @param {Nature} nature 性格
 * @param {SubSkill[]} subSkills サブスキル構成
 * @param {string[]} ingredients 食材構成
 * @param {number} sleepRibbon お休みリボンのランク
 * @param {object} Oprions オプション(保険)
 */
export class MyPokemon {
  constructor(
    pokemon,
    level,
    nature,
    subSkills,
    ingredients,
    sleepRibbon,
    options
  ) {
    this.pokemon = pokemon;
    this.level = Number(level);
    this.nature = nature;
    this.subSkills = subSkills;
    this.ingredients = ingredients;
    this.sleepRibbon = sleepRibbon;
    this.options = options;
  }

  /**
   * お手伝い時間能力を計算する
   */
  getHelpTime() {
    // 基準お手伝い時間
    const standardHelpTime = this.pokemon.standard_help_time;

    // レベル補正値
    const levelCorrection = 1 - (this.level - 1) * 0.002;

    // 性格補正値(上昇なら0.9、下降なら1.1)
    const natureCorrection =
      this.nature.up === NatureEffectedParam.SPEED_OF_HELP
        ? 0.9
        : this.nature.down === NatureEffectedParam.SPEED_OF_HELP
        ? 1.1
        : 1;

    // サブスキル補正値
    const subSkillCorrection = Math.max(
      0.65,
      1 -
        (0.14 * this.hasSubSkill(SubSkillInfo.HELPING_SPEED_M) +
          0.07 * this.hasSubSkill(SubSkillInfo.HELPING_SPEED_S) +
          0.05 * this.hasSubSkill(SubSkillInfo.HELPING_BONUS) +
          0.05 * this.options.helpingBonusCount)
      //(:TODO) おてぼパーティ補正がある場合は増やす必要あり
    );

    // お休みリボン補正(:TODO　進化前限定なので要らないより)

    return Math.floor(
      standardHelpTime * levelCorrection * natureCorrection * subSkillCorrection
    );
  }

  // 食材確率計算
  getIngredientRate() {
    // 基準食材確率
    const standardIngredientRate = this.pokemon.ingredients_drop_rate * 100;

    // 性格補正値(上昇なら1.2、下降なら0.8)
    const natureCorrection =
      this.nature.up === NatureEffectedParam.INGREDIENT_FINDING
        ? 12
        : this.nature.down === NatureEffectedParam.INGREDIENT_FINDING
        ? 8
        : 10;

    // サブスキル補正値
    const subSkillCorrection =
      100 +
      18 * this.hasSubSkill(SubSkillInfo.INGREDIENT_FINDER_S) +
      36 * this.hasSubSkill(SubSkillInfo.INGREDIENT_FINDER_M);

    return (
      (standardIngredientRate * natureCorrection * subSkillCorrection) / 100000
    );
  }

  // 最大所持数計算
  getCarryLimit() {
    // 初期値
    const standardCarryLimit = this.pokemon.carry_limit;

    // 進化回数
    const evolutionCountCorrection =
      (this.options.fixedEvolutionStage || this.pokemon.evolution_stage) * 5;

    // サブスキル補正
    const subSkillCorrection =
      this.hasSubSkill(SubSkillInfo.INVENTORY_UP_S) * 6 +
      this.hasSubSkill(SubSkillInfo.INVENTORY_UP_M) * 12 +
      this.hasSubSkill(SubSkillInfo.INVENTORY_UP_L) * 18;

    // お休みリボン補正
    let sleepRibbonCorrection = calcSleepRibbonCarryLimitCorrection(
      this.sleepRibbon
    );

    return (
      standardCarryLimit +
      evolutionCountCorrection +
      subSkillCorrection +
      sleepRibbonCorrection
    );
  }

  // 1回のお手伝いで取得するきのみの数
  // きのS+1、きのみタイプ+1
  getBerriesCount() {
    return (
      1 +
      this.hasSubSkill(SubSkillInfo.BERRY_FINDING_S) +
      (this.pokemon.specialty === Specialty.BERRIES)
    );
  }

  // きのみ一個当たりのエナジー量
  getBerryEnergy() {
    const baseEnergy = this.pokemon.type.berry.energy;
    return Math.floor(
      Math.max(
        baseEnergy + this.level - 1,
        Math.pow(1.025, this.level - 1) * baseEnergy
      )
    );
  }

  // 第一食材
  getIngredientCount1() {
    const kind = this.ingredients[0];
    switch (kind) {
      case "A":
        return {
          kind: this.pokemon.ingredients[0],
          amount: this.pokemon.ingredients[0].quantity[0],
        };
      default:
        throw new Error("Invalid ingredient kind");
    }
  }

  // 第二食材
  getIngredientCount2() {
    const kind = this.ingredients[1];
    const level = this.level;
    let i;
    switch (kind) {
      case "A":
        // このポケモンのA食材
        i = this.pokemon.ingredients[0];
        return {
          kind: i.ingredient,
          amount: level >= 30 ? i.quantity[1] : 0,
        };
      case "B":
        // このポケモンのB食材
        i = this.pokemon.ingredients[1];
        return {
          kind: i.ingredient,
          amount: level >= 30 ? i.quantity[1] : 0,
        };
      default:
        throw new Error("Invalid ingredient kind");
    }
  }

  // 第三食材
  getIngredientCount3() {
    const kind = this.ingredients[2];
    const level = this.level;
    let i;
    switch (kind) {
      case "A":
        // このポケモンのA食材
        i = this.pokemon.ingredients[0];
        return {
          kind: i.ingredient,
          amount: level >= 60 ? i.quantity[2] : 0,
        };
      case "B":
        // このポケモンのB食材の情報
        i = this.pokemon.ingredients[1];
        return {
          kind: i.ingredient,
          amount: level >= 60 ? i.quantity[2] : 0,
        };
      case "C":
        // このポケモンのC食材の情報
        i = this.pokemon.ingredients[2];
        return {
          kind: i.ingredient,
          amount: level >= 60 ? i.quantity[2] : 0,
        };
      default:
        throw new Error("Invalid ingredient kind");
    }
  }

  /// 特定のサブスキルを持っているかどうかを判定する
  hasSubSkill(subSkill) {
    return this.subSkills.some((s) => s.name === subSkill?.name);
  }
}

// お休みリボンの所持数補正計算
function calcSleepRibbonCarryLimitCorrection(sleepRibbon) {
  switch (sleepRibbon) {
    case "200":
      return 1;
    case "500":
      return 2;
    case "1000":
      return 3;
    case "2000":
      return 2;
    default:
      return 0;
  }
}
