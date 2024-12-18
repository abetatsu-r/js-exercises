/**
 * 食材表示エリアを生成する
 * @param {Object} ingredients 食材リスト
 */
export function createIngredientsArea(ingredients) {
  const ingredientsArea = document.createElement("div");
  ingredientsArea.className = "result-ingredients-area";

  // div要素を3つ作成
  for (let ingredient of Object.values(ingredients)) {
    console.log(ingredient);
    const ingredientCountArea = document.createElement("div");
    ingredientCountArea.className = "result-ingredient-count-area";

    const ingredientImg = document.createElement("img");
    ingredientImg.src = `assets/images/ingredient/${ingredient.name}.png`;
    ingredientImg.alt = ingredient.name;

    const ingredientText = document.createElement("p");
    ingredientText.textContent = `×${ingredient.amount}`;

    ingredientCountArea.appendChild(ingredientImg);
    ingredientCountArea.appendChild(ingredientText);

    const ingredientArea = document.createElement("div");
    ingredientArea.className = "result-ingredient-area";

    ingredientArea.appendChild(ingredientCountArea);
    ingredientsArea.appendChild(ingredientArea);
  }

  return ingredientsArea;
}
