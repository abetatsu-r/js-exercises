/**
 * スキル表示エリアを生成する
 * @param {number} skillCount - スキル発動回数
 */
export function createSkillArea(skillCount) {
  const skillArea = document.createElement("div");
  skillArea.className = "result-skill-area";

  const skillText = document.createElement("label");
  skillText.textContent = `${skillCount.toFixed(2)}`;

  skillArea.appendChild(skillText);

  return skillArea;
}
