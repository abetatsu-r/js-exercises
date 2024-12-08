import { NatureEffectedParam } from "../enums/NatureEffectedParam.js";
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
    this.level = level;
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

    console.log(
      standardHelpTime,
      levelCorrection,
      natureCorrection,
      subSkillCorrection
    );
    // お休みリボン補正(:TODO)
    return Math.floor(
      standardHelpTime * levelCorrection * natureCorrection * subSkillCorrection
    );
  }

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

  /// 特定のサブスキルを持っているかどうかを判定する
  hasSubSkill(subSkill) {
    return this.subSkills.some((s) => s.name === subSkill?.name);
  }

  /**
   * 基準お手伝い回数を計算する
   * @param {Object} options オプション
   */
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
