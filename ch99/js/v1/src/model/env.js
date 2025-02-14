/**
 * プレイ環境保存用のモデル
 * @param {string} name 保存時の名前
 * @param {number} baseTime 基底時間
 * @param {number} time 実働時間
 * @param {number} sleepInTime 睡眠開始時間
 * @param {number} awakeTime 起床時間
 * @param {number[]} tapTimings タップタイミング
 * @param {Object[]} efeTimings 元気エール発動タイミング+回数
 * @param {boolean} hasGoodCampTicket いいキャンプチケット所持フラグ
 * @param {number} teamHelpingBonusCount 編成お手伝いボーナス数
 */
export default class Env {
  constructor(
    name,
    baseTime,
    time,
    sleepInTime,
    awakeTime,
    tapTimings,
    efeTimings,
    hasGoodCampTicket,
    teamHelpingBonusCount
  ) {
    this.name = name;
    this.baseTime = baseTime;
    this.time = time;
    this.sleepInTime = sleepInTime;
    this.awakeTime = awakeTime;
    this.tapTimings = tapTimings;
    this.efeTimings = efeTimings;
    this.hasGoodCampTicket = hasGoodCampTicket;
    this.teamHelpingBonusCount = teamHelpingBonusCount;
  }
}
