/**
 * サブスキル一覧
 * 基本は以下の情報だけ持っていればよさそう
 * - スキル名
 * - Lank(Gold, Silver, Normal)
 * - 上位スキル名?
 */

export const SubSkillInfo = Object.freeze({
  // 金スキル
  BERRY_FINDING_S: { rank: "gold", name: "きのみの数S" },
  HELPING_BONUS: { rank: "gold", name: "おてつだいボーナス" },
  SKILL_LEVEL_UP_M: { rank: "gold", name: "スキルレベルアップM" },
  SLEEP_EXP_BONUS: { rank: "gold", name: "睡眠EXPボーナス" },
  ENERGY_RECOVERY_BONUS: { rank: "gold", name: "げんき回復ボーナス" },
  DREAM_SHARD_BONUS: { rank: "gold", name: "ゆめのかけらボーナス" },
  RESEARCH_EXP_BONUS: { rank: "gold", name: "リサーチEXPボーナス" },
  // 銀スキル
  HELPING_SPEED_M: { rank: "silver", name: "おてつだいスピードM" },
  INVENTORY_UP_M: {
    rank: "silver",
    name: "最大所持数アップM",
    upperSkill: "INVENTORY_UP_L",
  },
  INVENTORY_UP_L: { rank: "silver", name: "最大所持数アップL" },
  SKILL_LEVEL_UP_S: {
    rank: "silver",
    name: "スキルレベルアップS",
    upperSkill: "SKILL_LEVEL_UP_M",
  },
  INGREDIENT_FINDER_M: { rank: "silver", name: "食材確率アップM" },
  SKILL_TRIGGER_M: { rank: "silver", name: "スキル確率アップM" },
  // 白スキル
  HELPING_SPEED_S: {
    rank: "normal",
    name: "おてつだいスピードS",
    upperSkill: "HELPING_SPEED_M",
  },
  INVENTORY_UP_S: {
    rank: "normal",
    name: "最大所持数アップS",
    upperSkill: "INVENTORY_UP_M",
  },
  INGREDIENT_FINDER_S: {
    rank: "normal",
    name: "食材確率アップS",
    upperSkill: "INGREDIENT_FINDER_M",
  },
  SKILL_TRIGGER_S: {
    rank: "normal",
    name: "スキル確率アップS",
    upperSkill: "SKILL_TRIGGER_M",
  },
});
