/**
 * 持ってくる食材管理用クラス
 * @param {IngredientInfo} ingredient 食材
 * @param {number[]} quantity 個数
 */
class Ingredients {
  constructor(ingredient, quantity) {
    this.ingredient = ingredient;
    this.quantity = quantity;
  }
}

export default Ingredients;
