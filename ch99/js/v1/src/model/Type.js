/**
 * ポケモンのタイプを管理するためのクラス
 * @param {number} id 管理用ID
 * @param {string} name タイプ名
 * @param {Berry} berry タイプに対応するきのみ
 */
class Type {
  constructor(id, name, berry) {
    this.id = id;
    this.name = name;
    this.berry = berry;
  }
}

export default Type;
