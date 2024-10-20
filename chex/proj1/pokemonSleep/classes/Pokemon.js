/**
 * ポケモンを種族ごとに管理するためのクラス
 *@param {string} name ポケモンの名前
 *@param {Type} type ポケモンのタイプ
 *@param {number} standard_Help_Time 基準お手伝い時間
 *@param {Ingradients[3]} ingradients_kinds 食材種類
 *@param {number} ingradients_Drop_Rate 食材確率
 *@param {string} skill_kind スキルの種類
 *@param {number} skill_Trigger_Rate スキル発動確率
 *@param {number} carry_Limit 最大所持数
 *@param {number} evolution_Stage 進化段階
 *@param {number} skill_Activation_Threshold スキル発動天井回数
 */

class Pokemon {
  constructor(
    name,
    type,
    standard_Help_Time,
    ingradients_kinds,
    ingradients_Drop_Rate,
    skill_kind,
    skill_Trigger_Rate,
    carry_Limit,
    evolution_Stage,
    skill_Activation_Threshold = 76 // もし指定がなければ76を入れる
  ) {
    this.name = name;
    this.type = type;
    this.standard_Help_Time = standard_Help_Time;
    this.ingradients_kinds = ingradients_kinds;
    this.ingradients_Drop_Rate = ingradients_Drop_Rate;
    this.skill_kind = skill_kind;
    this.skill_Trigger_Rate = skill_Trigger_Rate;
    this.carry_Limit = carry_Limit;
    this.evolution_Stage = evolution_Stage;
    this.skill_Activation_Threshold = skill_Activation_Threshold;
  }
}

export default Pokemon;
