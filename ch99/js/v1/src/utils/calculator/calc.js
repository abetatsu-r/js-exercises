import CalcResult from "../../model/calcResult.js";
import { MyPokemon } from "../../model/MyPokemon.js";
import Env from "../../model/env.js";
import { createEnv } from "../../scripts/offCanvasUtil.js";

/**
 * 計算実行部
 * @param {MyPokemon} myPokemon
 */
export function calc(myPokemon) {
  /**
   * envの読み取り
   */
  // env取得
  const env = createEnv();

  // 計測時間
  const end_time = env.time;

  // 開始時点の元気
  let startEnergy = 100;

  // タップタイミング
  const tapTiming = env.tapTimings;
  console.log(tapTiming);

  // 元気エール発動タイミング
  const energyAleTiming = tapTiming.map((elem, index) => ({
    time: elem,
    count: env.efeTimings[index],
  }));
  console.log(energyAleTiming[1]);

  // いいキャンプチケットの有無
  const hasGoodCampTicket = env.hasGoodCampTicket;

  /**
   * pokemon事固有の値
   */
  // きのみ関連
  const helpingSpeed = myPokemon.getHelpTime(env.teamHelpingBonusCount); // お手伝い能力
  const constCarryLimit = myPokemon.getCarryLimit();
  let carryLimit = constCarryLimit; // 最大所持数
  const berryCount = myPokemon.getBerriesCount(); // 一度に持ってくるきのみの数

  // 食材関連
  const constIngredientRate = myPokemon.getIngredientRate(); // 食材確率
  let ingredientRate = constIngredientRate;
  let ingredient1 = myPokemon.getIngredientCount1(); // 第一食材
  let ingredient2 = myPokemon.getIngredientCount2(); // 第二食材
  let ingredient3 = myPokemon.getIngredientCount3(); // 第三食材

  let ingredientPattern = Math.floor(myPokemon.level / 30) + 1; // TODO: 第三食材まで空いていれば

  // スキル関連
  const skillTriggerRate = myPokemon.getSkillTriggerRate(); // スキル発動確率
  const skillActivationThreshold = myPokemon.pokemon.skill_activation_threshold; // スキル発動天井回数
  let skillStock = 0; // スキルストック数
  let maxSkillStock = myPokemon.getSkillStockLimit(); // スキル最大ストック数
  let skillTriggerCount = 0; // スキル発動回数
  let skillCount = 0; // スキル発動判定関数

  let actualHelpingTime = calcActualHelpingTime(
    helpingSpeed,
    startEnergy,
    hasGoodCampTicket
  );
  let start_time = actualHelpingTime;
  // あまり時間
  let timeCorrection = 0;

  let totalBerries = 0;
  let totalBerriesWithoutLost = 0;
  let totalIngredients = [0, 0, 0];

  let totalIngredientsWithoutLost = [0, 0, 0];

  let totalSkillCount = 0;

  /**
   * 暫定モデル
   * - modelについてを参照
   */
  while (start_time < end_time) {
    // タップタイミングの処理
    if (tapTiming && start_time > tapTiming[0]) {
      // タップ処理
      carryLimit = constCarryLimit;
      ingredientRate = constIngredientRate;
      totalSkillCount += skillStock;
      skillStock = 0;
      tapTiming.shift();
    }
    // このお手伝いで獲得するきのみの数(小数点以下2桁まで)
    let getBerries = Math.floor(berryCount * (100 - ingredientRate)) / 100;
    totalBerries += getBerries;

    totalBerriesWithoutLost +=
      Math.floor(berryCount * (100 - constIngredientRate)) / 100;

    // このお手伝いで獲得する食材の数(小数点以下2桁まで)
    // 所持数を超えない範囲に限る
    totalIngredients[0] +=
      Math.floor(
        Math.min(ingredient1.amount, carryLimit) *
          (ingredientRate / ingredientPattern) *
          10
      ) / 1000;

    totalIngredients[1] +=
      Math.floor(
        Math.min(ingredient2.amount, carryLimit) *
          (ingredientRate / ingredientPattern)
      ) / 100;

    totalIngredients[2] +=
      Math.floor(
        Math.min(ingredient3.amount, carryLimit) *
          (ingredientRate / ingredientPattern)
      ) / 100;

    let totalAllIngredients =
      Math.floor(
        Math.min(
          (ingredient1.amount + ingredient2.amount + ingredient3.amount) / 3,
          carryLimit
        ) * ingredientRate
      ) / 100;

    // 所持数を考慮しない場合の計算結果
    totalIngredientsWithoutLost[0] +=
      Math.floor(
        ingredient1.amount * (constIngredientRate / ingredientPattern) * 10
      ) / 1000;
    totalIngredientsWithoutLost[1] +=
      Math.floor(
        ingredient2.amount * (constIngredientRate / ingredientPattern)
      ) / 100;
    totalIngredientsWithoutLost[2] +=
      Math.floor(
        ingredient3.amount * (constIngredientRate / ingredientPattern)
      ) / 100;

    // スキル発動判定
    if (skillCount < skillActivationThreshold) {
      skillCount++;
      skillTriggerCount +=
        (skillTriggerRate / 100) *
        (skillStock < maxSkillStock) * // これ以上スキルをストックできない時は発生しない
        Boolean(carryLimit > 0); // 所持数が満タンなら発生しない
      // 1回以上発動できる状態になったとみなされたらskillcountは0からやり直しになる
      if (skillTriggerCount - skillStock >= 1) {
        skillCount = 0;
        skillStock += 1;
        skillTriggerCount -= 1;
      }
    } else {
      skillCount = 0;
      skillStock += 1;
      skillTriggerCount = 0;
    }

    // 所持数の更新
    carryLimit -= getBerries + totalAllIngredients;
    if (carryLimit <= 0) {
      ingredientRate = 0; // 以降のお手伝いでは食材を持ってこない
    }

    // 元気エール発動タイミングの処理
    console.log(energyAleTiming);
    console.log(energyAleTiming[0]);

    if (energyAleTiming.length && start_time > energyAleTiming[0].time) {
      // 元気エール発動処理
      startEnergy += 18 * energyAleTiming[0].count;
      energyAleTiming.shift();
    }

    // 元気マイナス処理
    startEnergy -= Math.floor((actualHelpingTime + timeCorrection) / 600);
    timeCorrection = (actualHelpingTime - (600 - timeCorrection)) % 600;

    // 次のお手伝い時間を計算
    actualHelpingTime = calcActualHelpingTime(
      helpingSpeed,
      startEnergy,
      hasGoodCampTicket
    );
    start_time += actualHelpingTime;
  }

  return new CalcResult(
    myPokemon,
    Number(totalBerries.toFixed(2)),
    Number(totalBerriesWithoutLost.toFixed(2)),
    totalIngredients.map((val) => Number(val.toFixed(2))),
    totalIngredientsWithoutLost.map((val) => Number(val.toFixed(2))),
    totalSkillCount + skillTriggerCount,
    startEnergy
  );
}

function calcActualHelpingTime(helpingSpeed, energy, hasGoodCampTicket) {
  // 元気補正値
  let energyCorrection = 100;
  if (energy > 80) {
    energyCorrection = 45;
  } else if (energy > 60) {
    energyCorrection = 52;
  } else if (energy > 40) {
    energyCorrection = 58;
  } else if (energy > 1) {
    energyCorrection = 66;
  }

  // 小数点以下切り捨て
  return Math.floor(
    (helpingSpeed * energyCorrection) / (hasGoodCampTicket ? 12 : 10) / 10
  );
}
