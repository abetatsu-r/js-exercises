/**
 * ポケモンをポケモンの分類ごとに管理するためのクラス
 * @param {number} id ポケモンの図鑑番号
 * @param {string} name ポケモンの名前
 * @param {Type} type ポケモンのタイプ
 * @param {Specialty} specialty 得意なもの
 * @param {number} standard_help_time 基準お手伝い時間
 * @param {Ingredient[3]} ingredients 持ってくる食材
 * @param {number} ingredients_drop_rate 食材確率
 * @param {number} carry_limit 最大所持数
 * @param {MainSkill} main_skill メインスキル
 * @param {number} skill_trigger_rate スキル確率
 * @param {number} evolution_stage 進化段階
 * @param {number} skill_activation_threshold スキル発動天井回数
 */
class Pokemon {
  constructor(
    id,
    name,
    type,
    specialty,
    standard_help_time,
    ingredients,
    ingredients_drop_rate,
    carry_limit,
    main_skill,
    skill_trigger_rate,
    evolution_stage,
    skill_activation_threshold = 76 // デフォルトは76回
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.specialty = specialty;
    this.standard_help_time = standard_help_time;
    this.ingredients = ingredients;
    this.ingredients_drop_rate = ingredients_drop_rate;
    this.main_skill = main_skill;
    this.carry_limit = carry_limit;
    this.skill_trigger_rate = skill_trigger_rate;
    this.evolution_stage = evolution_stage;
    this.skill_activation_threshold = skill_activation_threshold;
  }
}

export default Pokemon;
