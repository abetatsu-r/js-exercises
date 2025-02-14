/**
 * 除外つきサブスキル一覧をセレクトボックスに反映する
 * @param {*} elem
 * @param {*} subskill
 * @param {string[]} option
 */
export function reflectSubskillSelect(elem, subSkillInfo, excludeOptions) {
  for (const key in subSkillInfo) {
    // keyがexcludeOptionsに含まれている場合はスキップ
    if (excludeOptions.includes(key)) {
      continue;
    }
    const subSkill = subSkillInfo[key];
    const option = document.createElement("option");
    option.value = key;
    option.textContent = subSkill.name;
    elem.appendChild(option);
  }
}
