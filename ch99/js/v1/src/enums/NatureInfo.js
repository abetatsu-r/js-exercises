import { NatureEffectedParam } from "./NatureEffectedParam.js";
/**
 * 性格一覧
 */
export const NatureInfo = Object.freeze({
  HARDY: {
    name_ja: "がんばりや",
    up: NatureEffectedParam.NOTHING,
    down: NatureEffectedParam.NOTHING,
  },
  LONELY: {
    name_ja: "さみしがり",
    up: NatureEffectedParam.SPEED_OF_HELP,
    down: NatureEffectedParam.ENERGY_RECOVERY,
  },
  BRAVE: {
    name_ja: "ゆうかん",
    up: NatureEffectedParam.SPEED_OF_HELP,
    down: NatureEffectedParam.EXP_GAINS,
  },
  ADAMANT: {
    name_ja: "いじっぱり",
    up: NatureEffectedParam.SPEED_OF_HELP,
    down: NatureEffectedParam.INGREDIENT_FINDING,
  },
  NAUGHTY: {
    name_ja: "やんちゃ",
    up: NatureEffectedParam.SPEED_OF_HELP,
    down: NatureEffectedParam.MAIN_SKILL_CHANCE,
  },
  BOLD: {
    name_ja: "ずぶとい",
    up: NatureEffectedParam.ENERGY_RECOVERY,
    down: NatureEffectedParam.SPEED_OF_HELP,
  },
  DOCILE: {
    name_ja: "すなお",
    up: NatureEffectedParam.NOTHING,
    down: NatureEffectedParam.NOTHING,
  },
  RELAXED: {
    name_ja: "のんき",
    up: NatureEffectedParam.ENERGY_RECOVERY,
    down: NatureEffectedParam.EXP_GAINS,
  },
  IMPISH: {
    name_ja: "わんぱく",
    up: NatureEffectedParam.ENERGY_RECOVERY,
    down: NatureEffectedParam.INGREDIENT_FINDING,
  },
  LAX: {
    name_ja: "のうてんき",
    up: NatureEffectedParam.ENERGY_RECOVERY,
    down: NatureEffectedParam.MAIN_SKILL_CHANCE,
  },
  TIMID: {
    name_ja: "おくびょう",
    up: NatureEffectedParam.EXP_GAINS,
    down: NatureEffectedParam.SPEED_OF_HELP,
  },
  HASTY: {
    name_ja: "せっかち",
    up: NatureEffectedParam.EXP_GAINS,
    down: NatureEffectedParam.ENERGY_RECOVERY,
  },
  JOLLY: {
    name_ja: "ようき",
    up: NatureEffectedParam.EXP_GAINS,
    down: NatureEffectedParam.INGREDIENT_FINDING,
  },
  NAIVE: {
    name_ja: "むじゃき",
    up: NatureEffectedParam.EXP_GAINS,
    down: NatureEffectedParam.MAIN_SKILL_CHANCE,
  },
  SERIOUS: {
    name_ja: "まじめ",
    up: NatureEffectedParam.NOTHING,
    down: NatureEffectedParam.NOTHING,
  },
  MODEST: {
    name_ja: "ひかえめ",
    up: NatureEffectedParam.INGREDIENT_FINDING,
    down: NatureEffectedParam.SPEED_OF_HELP,
  },
  MILD: {
    name_ja: "おっとり",
    up: NatureEffectedParam.INGREDIENT_FINDING,
    down: NatureEffectedParam.ENERGY_RECOVERY,
  },
  QUIET: {
    name_ja: "れいせい",
    up: NatureEffectedParam.INGREDIENT_FINDING,
    down: NatureEffectedParam.EXP_GAINS,
  },
  BASHFUL: {
    name_ja: "てれや",
    up: NatureEffectedParam.NOTHING,
    down: NatureEffectedParam.NOTHING,
  },
  RASH: {
    name_ja: "うっかりや",
    up: NatureEffectedParam.INGREDIENT_FINDING,
    down: NatureEffectedParam.MAIN_SKILL_CHANCE,
  },
  CALM: {
    name_ja: "おだやか",
    up: NatureEffectedParam.MAIN_SKILL_CHANCE,
    down: NatureEffectedParam.SPEED_OF_HELP,
  },
  GENTLE: {
    name_ja: "おとなしい",
    up: NatureEffectedParam.MAIN_SKILL_CHANCE,
    down: NatureEffectedParam.ENERGY_RECOVERY,
  },
  SASSY: {
    name_ja: "なまいき",
    up: NatureEffectedParam.MAIN_SKILL_CHANCE,
    down: NatureEffectedParam.EXP_GAINS,
  },
  CAREFUL: {
    name_ja: "しんちょう",
    up: NatureEffectedParam.MAIN_SKILL_CHANCE,
    down: NatureEffectedParam.INGREDIENT_FINDING,
  },
  QUIRKY: {
    name_ja: "きまぐれ",
    up: NatureEffectedParam.NOTHING,
    down: NatureEffectedParam.NOTHING,
  },
});
